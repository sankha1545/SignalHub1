// src/components/chat/ComposeBox.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import socketClient from "@/lib/socketClient";
import { useChat as useChatProvider } from "@/providers/ChatProvider";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

/**
 * ComposeBox
 *
 * Responsibilities:
 * - Let user type and send messages (Enter to send, Shift+Enter newline)
 * - Emit optimistic socket events for low-latency UX (typing & message post)
 * - Upload attachments to /api/upload and include them in payload
 * - Prefer provider.sendMessage() if available; fallback to REST POST /api/chats/:id
 * - Call onSent for optimistic and server-confirmed messages so parent (TeamChat) can update list
 *
 * Props:
 *  - chatId: string (required)
 *  - onSent?: (message) => void  — receives optimistic message immediately and server-confirmed later
 *  - onError?: (err) => void
 */

type Sender = { id: string; name?: string | null; role?: string | null; avatarUrl?: string | null } | null;

export type Message = {
  id: string;
  chatId: string;
  senderId?: string | null;
  sender?: Sender;
  content: string;
  contentType?: string;
  metadata?: any;
  attachments?: Array<{ id?: string; url?: string; name?: string }>;
  createdAt: string;
};

export default function ComposeBox({
  chatId,
  onSent,
  onError,
}: {
  chatId: string;
  onSent?: (m: Message) => void;
  onError?: (e: any) => void;
}) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const typingTimerRef = useRef<number | null>(null);
  const lastTypedAtRef = useRef<number | null>(null);

  // prefer your ChatProvider if available (sendMessage)
  let providerSend: ((chatId: string, content: string, opts?: any) => Promise<any>) | null = null;
  try {
    const prov = useChatProvider?.();
    if (prov && typeof prov.sendMessage === "function") providerSend = prov.sendMessage.bind(prov);
  } catch {
    providerSend = null;
  }

  // socket provider (preferred) or fallback to raw client
  let chatSocket: any = null;
  try {
    chatSocket = useChatSocket();
  } catch {
    chatSocket = null;
  }

  // -------------------------
  // Helpers
  // -------------------------
  const makeOptimisticMessage = useCallback(
    (content: string, attachments?: Message["attachments"]): Message => {
      return {
        id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        chatId,
        senderId: "me",
        sender: { id: "me", name: "You" },
        content,
        contentType: "TEXT",
        metadata: { optimistic: true },
        attachments: attachments ?? [],
        createdAt: new Date().toISOString(),
      };
    },
    [chatId]
  );

  const emitTyping = useCallback(
    (isTyping: boolean) => {
      try {
        const payload = { chatId, user: { /* server-side will resolve real user */ }, typing: isTyping };
        if (chatSocket && typeof chatSocket.emit === "function") {
          chatSocket.emit("chat:typing", payload);
        } else {
          socketClient.emit?.("chat:typing", payload);
        }
      } catch (e) {
        // ignore
      }
    },
    [chatId, chatSocket]
  );

  // debounce typing — call on key press, stop after 1200ms idle
  const notifyTyping = useCallback(() => {
    lastTypedAtRef.current = Date.now();
    // send "typing" once immediately
    emitTyping(true);

    if (typingTimerRef.current) {
      window.clearTimeout(typingTimerRef.current);
    }

    typingTimerRef.current = window.setTimeout(() => {
      const last = lastTypedAtRef.current ?? 0;
      if (Date.now() - last >= 1100) {
        emitTyping(false);
        typingTimerRef.current = null;
      }
    }, 1200);
  }, [emitTyping]);

  // autosize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const next = Math.min(240, el.scrollHeight);
    el.style.height = `${next}px`;
  }, [text]);

  // -------------------------
  // File handling & upload
  // -------------------------
  const onFilesSelected = (fl?: FileList | null) => {
    if (!fl) return;
    const arr = Array.from(fl);
    // limit to 5 files to avoid abuse
    const next = [...files, ...arr].slice(0, 5);
    setFiles(next);
  };

  const removeFile = (idx: number) => setFiles((p) => p.filter((_, i) => i !== idx));

  async function uploadFiles(): Promise<Message["attachments"]> {
    if (files.length === 0) return [];
    setUploading(true);
    const uploaded: Message["attachments"] = [];
    for (const f of files) {
      try {
        const fd = new FormData();
        fd.append("file", f);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: fd,
          credentials: "same-origin",
        });
        if (!res.ok) {
          console.warn("upload failed", res.status);
          continue;
        }
        const j = await res.json().catch(() => ({}));
        // try common shapes
        if (j?.file) uploaded.push(j.file);
        else if (j?.url) uploaded.push({ id: j.id ?? String(Date.now()), url: j.url, name: f.name });
        else if (j?.data?.url) uploaded.push({ id: j.data.id ?? String(Date.now()), url: j.data.url, name: f.name });
      } catch (e) {
        console.warn("upload error", e);
      }
    }
    setUploading(false);
    return uploaded;
  }

  // -------------------------
  // Send flow
  // -------------------------
  const send = useCallback(
    async (ev?: React.SyntheticEvent) => {
      if (ev) ev.preventDefault();
      if (!chatId) return;
      const body = text.trim();
      if (!body && files.length === 0) return;

      setSending(true);
      setStatus("sending");

      // optimistic message
      let optimisticAttachments: Message["attachments"] = [];
      // We can show local file names immediately
      if (files.length > 0) {
        optimisticAttachments = files.map((f, idx) => ({ id: `local-file-${idx}-${Date.now()}`, name: f.name }));
      }
      const optimistic = makeOptimisticMessage(body || (files.length ? `(Attachment${files.length > 1 ? "s" : ""})` : ""), optimisticAttachments);

      try {
        // notify parent immediately with optimistic msg
        try {
          onSent?.(optimistic);
        } catch (e) {
          // swallow user callback errors
          console.warn("onSent callback error", e);
        }

        // optimistic socket emit so others see it fast
        try {
          const payload = { chatId, message: { content: body, attachments: optimisticAttachments, metadata: { optimistic: true } } };
          if (chatSocket && typeof chatSocket.emit === "function") {
            chatSocket.emit("chat:post", payload);
            chatSocket.emit("chat:message", payload);
          } else {
            socketClient.emit?.("chat:post", payload);
            socketClient.emit?.("chat:message", payload);
            socketClient.emit?.("message", payload);
          }
        } catch (e) {
          // ignore emit errors
        }

        // Upload attachments first, then persist
        const attachments = await uploadFiles();

        // Build final payload
        const payload = {
          content: body,
          metadata: attachments.length ? { attachments } : undefined,
          attachments: attachments.length ? attachments : undefined,
        };

        // Prefer provider send if available
        if (providerSend) {
          try {
            const result = await providerSend(chatId, body, { attachments });
            // provider may return message; call onSent with normalized message
            if (result && typeof result === "object") {
              const created = result?.message ?? result ?? {};
              const normalized: Message = {
                id: String(created.id ?? created.messageId ?? `srv-${Date.now()}`),
                chatId,
                senderId: created.senderId ?? created.sender?.id ?? null,
                sender: created.sender ?? null,
                content: created.content ?? body,
                contentType: created.contentType ?? "TEXT",
                metadata: created.metadata ?? created.meta ?? null,
                attachments: created.attachments ?? attachments ?? [],
                createdAt: created.createdAt ?? new Date().toISOString(),
              };
              onSent?.(normalized);
              setStatus(null);
              setSending(false);
              setText("");
              setFiles([]);
              return;
            }
          } catch (err) {
            console.warn("providerSend failed, falling back to REST", err);
            // fallthrough to REST
          }
        }

        // REST fallback
        try {
          const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (res.ok) {
            const j = await res.json().catch(() => ({}));
            const created = j?.message ?? j ?? null;
            if (created) {
              const normalized: Message = {
                id: String(created.id ?? created.messageId ?? `srv-${Date.now()}`),
                chatId,
                senderId: created.senderId ?? created.sender?.id ?? null,
                sender: created.sender ?? null,
                content: created.content ?? body,
                contentType: created.contentType ?? "TEXT",
                metadata: created.metadata ?? created.meta ?? null,
                attachments: created.attachments ?? attachments ?? [],
                createdAt: created.createdAt ?? new Date().toISOString(),
              };
              onSent?.(normalized);
              setStatus(null);
              setSending(false);
              setText("");
              setFiles([]);
              return;
            }
          } else {
            console.warn("POST /api/chats returned non-OK", res.status);
            onError?.({ message: `Server error ${res.status}` });
          }
        } catch (err) {
          console.warn("POST /api/chats failed", err);
          onError?.(err);
        }
      } catch (err) {
        console.warn("send flow error", err);
        onError?.(err);
      } finally {
        setStatus(null);
        setSending(false);
      }
    },
    [chatId, text, files, makeOptimisticMessage, onSent, providerSend, chatSocket, onError]
  );

  // keyboard: Enter to send (no Shift)
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    } else {
      // user typed — notify typing (debounced)
      notifyTyping();
    }
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        window.clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      emitTyping(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // small visual: attachments list + accessible labels
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void send();
      }}
      className="space-y-2"
      aria-live="polite"
    >
      {files.length > 0 && (
        <div className="flex gap-2 items-center overflow-auto max-w-full">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-1 bg-slate-50 border rounded text-xs">
              <div className="truncate max-w-[200px]" title={f.name}>
                {f.name}
              </div>
              <button
                type="button"
                aria-label={`Remove ${f.name}`}
                onClick={() => removeFile(i)}
                className="text-rose-600 font-bold px-1"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2 items-end">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Write a message..."
          aria-label="Type a message"
          className="flex-1 min-h-[44px] max-h-[240px] resize-none border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={2}
          disabled={sending}
        />

        <div className="flex flex-col items-stretch gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => onFilesSelected(e.target.files)}
            aria-hidden
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-2 bg-slate-50 border rounded hover:bg-slate-100"
              aria-label="Attach files"
              title="Attach files"
              disabled={uploading || sending}
            >
              📎
            </button>

            <button
              type="submit"
              disabled={sending || uploading || (!text.trim() && files.length === 0)}
              className={`px-4 py-2 rounded text-white ${sending ? "bg-slate-300 cursor-wait" : "bg-blue-600 hover:bg-blue-700"}`}
              aria-label="Send message"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </div>
        </div>
      </div>

      {/* status text for screen readers & users */}
      <div className="text-xs text-slate-500" aria-live="polite">
        {uploading ? "Uploading attachments… " : null}
        {status ? status : null}
      </div>
    </form>
  );
}
