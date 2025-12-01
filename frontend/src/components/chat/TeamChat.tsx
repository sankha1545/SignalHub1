// src/components/chat/TeamChat.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import socketClient from "@/lib/socketClient";
import ComposeBox, { Message as OutgoingMessage } from "@/components/chat/ComposeBox";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider"; // your provider path
import type { ChatMessage as ServerChatMessage } from "@/types/chat"; // optional - keep if you have types

type MinimalUser = { id: string; role?: string; name?: string; email?: string };

export type ChatMessage = {
  id: string;
  chatId: string;
  content: string;
  metadata?: any;
  externalId?: string | null;
  createdAt?: string | null;
  sender?: { id: string; name?: string | null; email?: string | null } | null;
  attachments?: Array<{ id?: string; url?: string; name?: string }>;
};

export default function TeamChat({
  chatId,
  currentUser,
}: {
  chatId: string;
  currentUser?: MinimalUser;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  // prefer provider socket
  let chatSocket: any = null;
  try {
    chatSocket = useChatSocket();
  } catch {
    chatSocket = null;
  }

  // seen IDs to avoid duplicates
  const seenIdsRef = useRef<Set<string>>(new Set());

  // helper: mark chat read (best-effort)
  const markRead = async () => {
    try {
      await fetch(`/api/chats/${encodeURIComponent(chatId)}/read`, {
        method: "POST",
        credentials: "same-origin",
      });
    } catch (err) {
      // non-fatal
      console.warn("markRead failed:", err);
    }
  };

  // load history and join room
  useEffect(() => {
    let mounted = true;
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, { credentials: "same-origin" });
        if (!mounted) return;
        const j = await res.json().catch(() => ({}));
        const msgs: ChatMessage[] = (j?.messages ?? []) as ChatMessage[];
        seenIdsRef.current = new Set(msgs.map((m) => m.id));
        if (mounted) setMessages(msgs);
        // mark read after loading
        void markRead();
      } catch (err) {
        console.warn("Failed to load chat history:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchHistory();

    // join via provider or fallback
    (async () => {
      try {
        if (chatSocket && typeof chatSocket.joinChat === "function") {
          await chatSocket.joinChat(chatId);
        } else {
          socketClient.emit?.("join-room", chatId);
          socketClient.emit?.("join", chatId);
        }
      } catch (err) {
        console.warn("join chat failed:", err);
      }
    })();

    return () => {
      mounted = false;
      try {
        if (chatSocket && typeof chatSocket.leaveChat === "function") {
          chatSocket.leaveChat(chatId).catch(() => {});
        } else {
          socketClient.emit?.("leave-room", chatId);
          socketClient.emit?.("leave", chatId);
        }
      } catch (err) {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  // socket message & read listeners
  useEffect(() => {
    const handler = (payload: any) => {
      try {
        // server may send { chatId, message } or the message directly
        const incomingChatId = payload?.chatId ?? payload?.message?.chatId ?? payload?.message?.chat_id;
        const msg = payload?.message ?? (payload?.id ? payload : null);
        if (!msg) return;
        if (incomingChatId && incomingChatId !== chatId) return;

        // dedupe
        if (msg.id && seenIdsRef.current.has(msg.id)) return;
        if (msg.id) seenIdsRef.current.add(msg.id);

        setMessages((prev) => {
          // replace optimistic if matching by content + sender
          const optimisticIndex = prev.findIndex(
            (p) =>
              typeof p.id === "string" &&
              p.id.startsWith("local-") &&
              p.content === msg.content &&
              p.sender?.id === msg.sender?.id
          );
          if (optimisticIndex >= 0) {
            const copy = [...prev];
            // delete old local id from seen set
            const oldId = copy[optimisticIndex].id;
            copy[optimisticIndex] = msg;
            if (oldId) seenIdsRef.current.delete(oldId);
            if (msg.id) seenIdsRef.current.add(msg.id);
            return copy;
          }
          return [...prev, msg];
        });
      } catch (e) {
        console.warn("socket handler err:", e);
      }
    };

    const readHandler = (payload: any) => {
      // payload may contain read receipts; currently no UI update, but kept for extension
      // e.g. { chatId, userId, lastReadAt }
    };

    try {
      if (chatSocket && typeof chatSocket.on === "function") {
        chatSocket.on("chat:message", handler);
        chatSocket.on("message", handler);
        chatSocket.on("chat:read", readHandler);
      } else {
        socketClient.on("chat:message", handler);
        socketClient.on("message", handler);
        socketClient.on("chat:read", readHandler);
      }
    } catch (e) {
      console.warn("socket subscribe failed:", e);
    }

    return () => {
      try {
        if (chatSocket && typeof chatSocket.off === "function") {
          chatSocket.off("chat:message", handler);
          chatSocket.off("message", handler);
          chatSocket.off("chat:read", readHandler);
        } else {
          socketClient.off("chat:message", handler);
          socketClient.off("message", handler);
          socketClient.off("chat:read", readHandler);
        }
      } catch {}
    };
  }, [chatId, chatSocket]);

  // scroll to bottom when messages change
  useEffect(() => {
    if (!listRef.current) return;
    requestAnimationFrame(() => {
      try {
        listRef.current!.scrollTop = listRef.current!.scrollHeight;
      } catch (e) {
        // ignore
      }
    });
  }, [messages.length]);

  // handle outgoing messages via ComposeBox -> onSent
  const handleOutgoing = async (m: OutgoingMessage) => {
    // ComposeBox will call onSent twice:
    //  - first with optimistic local message (id starts with local-)
    //  - later with server-normalized message (id from server)
    // We'll merge/update messages accordingly.
    try {
      // If optimistic (local id), append if not present
      if (typeof m.id === "string" && m.id.startsWith("local-")) {
        if (!seenIdsRef.current.has(m.id)) {
          seenIdsRef.current.add(m.id);
          setMessages((prev) => [...prev, m as unknown as ChatMessage]);
        }
        return;
      }

      // server-confirmed message: replace any optimistic with same content+sender OR append
      setMessages((prev) => {
        const optIndex = prev.findIndex(
          (p) => typeof p.id === "string" && p.id.startsWith("local-") && p.content === m.content && p.sender?.id === m.senderId
        );
        if (optIndex >= 0) {
          const copy = [...prev];
          // remove optimistic id from seen set
          const oldId = copy[optIndex].id;
          copy[optIndex] = m as unknown as ChatMessage;
          if (oldId) seenIdsRef.current.delete(oldId);
          if (m.id) seenIdsRef.current.add(String(m.id));
          return copy;
        }
        // avoid dup by server id
        if (m.id && seenIdsRef.current.has(String(m.id))) return prev;
        if (m.id) seenIdsRef.current.add(String(m.id));
        return [...prev, m as unknown as ChatMessage];
      });

      // mark read for the author (they have read their own message)
      void markRead();
    } catch (e) {
      console.warn("handleOutgoing error:", e);
    }
  };

  // optional: a minimal Message view; you can replace with a dedicated MessageBubble component
  const MessageView = ({ msg }: { msg: ChatMessage }) => {
    const isMine = currentUser && msg.sender?.id === currentUser.id;
    return (
      <div className={`flex gap-3 ${isMine ? "justify-end" : "justify-start"}`}>
        {!isMine && (
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm">
            {msg.sender?.name ? msg.sender.name[0] : "U"}
          </div>
        )}

        <div className={`max-w-[78%] p-3 rounded-xl ${isMine ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"}`}>
          <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
          {msg.attachments?.length ? (
            <div className="mt-2 space-y-1">
              {msg.attachments.map((a, i) => (
                <a key={i} href={a.url} target="_blank" rel="noreferrer" className="text-xs underline">
                  {a.name ?? a.url}
                </a>
              ))}
            </div>
          ) : null}
          <div className="text-[10px] text-slate-400 mt-1 text-right">{msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}</div>
        </div>

        {isMine && (
          <div className="w-9 h-9 rounded-full bg-transparent" />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-[200px]">
      <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
        {loading ? (
          <div className="text-sm text-slate-500">Loading messages…</div>
        ) : messages.length === 0 ? (
          <div className="text-sm text-slate-500">No messages yet.</div>
        ) : (
          messages.map((m) => <MessageView key={m.id} msg={m} />)
        )}
      </div>

      <div className="p-3 border-t">
        <ComposeBox chatId={chatId} onSent={handleOutgoing} />
      </div>
    </div>
  );
}
