// src/components/chat/TeamChat.tsx
"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import socketClient from "@/lib/socketClient";
import ComposeBox, {
  Message as OutgoingMessage,
} from "@/components/chat/ComposeBox";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

type MinimalUser = {
  id?: string | number | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

export type ChatMessage = {
  id?: string | null;
  chatId?: string | null;
  content: string;
  metadata?: any;
  externalId?: string | null;
  createdAt?: string | null;
  sender?:
    | {
        id?: string | number | null;
        name?: string | null;
        email?: string | null;
      }
    | null;
  attachments?: Array<{ id?: string; url?: string; name?: string }>;
  __localId?: string; // client-only
};

type ChatInfo = {
  id: string;
  name?: string | null;
  type?: "team" | "direct" | string | null;
  participants?: MinimalUser[] | undefined;
  meta?: any;
};

const genLocalId = (prefix = "local-") =>
  `${prefix}${Math.random().toString(36).slice(2, 9)}`;

/** Robust display name derivation for header */
function deriveChatDisplayName(
  info: ChatInfo | null,
  me?: MinimalUser | null
) {
  if (!info) return "Chat";

  const t = info.type?.toString().toLowerCase();
  const serverName =
    (info.name ??
      info.meta?.teamName ??
      info.meta?.name ??
      "") || "";
  const isGenericServerName =
    serverName.trim() === "" ||
    serverName === "Chat" ||
    serverName.startsWith("Chat ");

  // DIRECT: prefer other participant
  if (t === "direct") {
    const participants: MinimalUser[] | undefined =
      info.participants ??
      info.meta?.participants ??
      info.meta?.members;

    if (participants && participants.length > 0 && me?.id != null) {
      const other = participants.find(
        (p) => p && String(p.id) !== String(me.id)
      );
      if (other?.name) return other.name;
      if (other?.email) return other.email;
    }

    // last message sender
    const lastSender =
      info.meta?.lastMessage?.senderName ??
      info.meta?.lastMessage?.sender?.name ??
      null;
    if (lastSender) return lastSender;

    if (!isGenericServerName && serverName) return serverName;

    return "Direct chat";
  }

  // TEAM / group
  if (!isGenericServerName && serverName) return serverName;
  return `Team ${info.id ?? ""}`;
}

export default function TeamChat({
  chatId,
  currentUser,
}: {
  chatId: string;
  currentUser?: MinimalUser | null;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [info, setInfo] = useState<ChatInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [typingUsers, setTypingUsers] = useState<
    Record<string, boolean>
  >({});

  const listRef = useRef<HTMLDivElement | null>(null);

  // edit/delete UI state
  const [editingMessageId, setEditingMessageId] =
    useState<string | null>(null);
  const [editingDraft, setEditingDraft] = useState<string>("");
  const [hiddenForClient, setHiddenForClient] = useState<
    Record<string, boolean>
  >({});

  // try provider socket first
  let chatSocket: any = null;
  try {
    chatSocket = useChatSocket();
  } catch {
    chatSocket = null;
  }

  // dedupe & scroll helpers
  const seenIdsRef = useRef<Set<string>>(new Set());
  const localToServerIdRef = useRef<Record<string, string>>({});
  const isNearBottomRef = useRef<boolean>(true);
  const mountedRef = useRef(true);

  const markRead = useCallback(async () => {
    try {
      await fetch(
        `/api/chats/${encodeURIComponent(chatId)}/read`,
        { method: "POST", credentials: "same-origin" }
      );
    } catch {
      // best-effort
    }
  }, [chatId]);

  /* ------------------------
     load chat info + history
     ------------------------ */
  useEffect(() => {
    mountedRef.current = true;
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      try {
        // 1) messages from /api/chats/[chatId]
        const res = await fetch(
          `/api/chats/${encodeURIComponent(chatId)}`,
          { credentials: "same-origin", signal: controller.signal }
        );

        let json: any = {};
        if (res.ok) {
          json = await res.json().catch(() => ({}));
        } else {
          try {
            json = await res.json().catch(() => ({}));
          } catch {
            json = {};
          }
        }

        const msgs =
          (json?.messages ??
            json?.messages_list ??
            json?.items ??
            json?.rows ??
            []) as ChatMessage[];

        const normalized = (Array.isArray(msgs) ? msgs : []).map(
          (m) => {
            const id =
              m?.id ??
              m?.externalId ??
              m?.messageId ??
              genLocalId("srv-");
            seenIdsRef.current.add(String(id));
            return { ...m, id: String(id) } as ChatMessage;
          }
        );

        if (!mountedRef.current) return;
        setMessages(normalized);

        // 2) chat meta from /api/chats (chat list)
        try {
          const metaRes = await fetch("/api/chats", {
            credentials: "same-origin",
            signal: controller.signal,
          });
          if (metaRes.ok) {
            const metaJson = await metaRes.json().catch(() => ({}));
            const list = metaJson?.chats ?? metaJson?.items ?? [];
            const found = (Array.isArray(list)
              ? list
              : []
            ).find((c: any) => String(c.id) === String(chatId));

            if (found) {
              const participants: MinimalUser[] | undefined =
                Array.isArray(found.members)
                  ? found.members.map((m: any) => ({
                      id: m.id,
                      name: m.name,
                      email: m.email,
                      role: m.role ?? null,
                    }))
                  : undefined;

              const chatInfo: ChatInfo = {
                id: String(found.id),
                name: found.name ?? null,
                type: found.type ?? null,
                participants,
                meta: found,
              };
              setInfo(chatInfo);
            } else {
              // fallback if not in list
              setInfo((prev) =>
                prev ?? {
                  id: chatId,
                  name: json?.name ?? null,
                  type: json?.type ?? null,
                  participants:
                    json?.participants ??
                    json?.members ??
                    json?.users ??
                    undefined,
                  meta: json ?? null,
                }
              );
            }
          } else {
            // meta call failed — keep whatever we might have from json
            setInfo((prev) =>
              prev ?? {
                id: chatId,
                name: json?.name ?? null,
                type: json?.type ?? null,
                participants:
                  json?.participants ??
                  json?.members ??
                  json?.users ??
                  undefined,
                meta: json ?? null,
              }
            );
          }
        } catch {
          // ignore meta fetch errors
          setInfo((prev) =>
            prev ?? {
              id: chatId,
              name: json?.name ?? null,
              type: json?.type ?? null,
              participants:
                json?.participants ??
                json?.members ??
                json?.users ??
                undefined,
              meta: json ?? null,
            }
          );
        }

        // mark read
        void markRead();
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        console.warn("TeamChat load error:", err);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    };

    void load();

    // join room
    (async () => {
      try {
        if (
          chatSocket &&
          typeof chatSocket.joinChat === "function"
        ) {
          await chatSocket.joinChat(chatId);
        } else if (
          socketClient &&
          typeof socketClient.emit === "function"
        ) {
          socketClient.emit("join-room", chatId);
        }
      } catch {
        // ignore join errors (best-effort)
      }
    })();

    return () => {
      mountedRef.current = false;
      controller.abort();
      try {
        if (
          chatSocket &&
          typeof chatSocket.leaveChat === "function"
        ) {
          chatSocket.leaveChat(chatId).catch(() => {});
        } else if (
          socketClient &&
          typeof socketClient.emit === "function"
        ) {
          socketClient.emit("leave-room", chatId);
        }
      } catch {}
    };
  }, [chatId, chatSocket, markRead]);

  /* ------------------------
     socket subscriptions
     ------------------------ */
  useEffect(() => {
    if (
      !chatSocket &&
      (!socketClient || typeof socketClient.on !== "function")
    )
      return;

    const handleMessage = (payload: any) => {
      try {
        let incomingChatId =
          payload?.chatId ??
          payload?.room ??
          payload?.message?.chatId ??
          payload?.chat?.id ??
          null;

        // normalize room like "chat:<id>" → "<id>"
        if (
          typeof incomingChatId === "string" &&
          incomingChatId.startsWith("chat:")
        ) {
          incomingChatId = incomingChatId.slice("chat:".length);
        }

        if (
          incomingChatId &&
          String(incomingChatId) !== String(chatId)
        )
          return;

        const msg = payload?.message ?? payload;
        if (!msg) return;

        const serverId =
          msg?.id ?? msg?.externalId ?? msg?.messageId ?? null;
        const content = msg?.content ?? msg?.text ?? "";
        const sender = msg?.sender ?? msg?.from ?? msg?.user ?? null;
        const createdAt =
          msg?.createdAt ??
          msg?.ts ??
          msg?.created_at ??
          new Date().toISOString();

        if (serverId && seenIdsRef.current.has(String(serverId)))
          return;

        setMessages((prev) => {
          const optimisticIdx = prev.findIndex((p) => {
            if (!p) return false;
            if (
              typeof p.id === "string" &&
              p.id.startsWith("local-") &&
              serverId
            ) {
              if (
                p.content === content &&
                ((p.sender?.id &&
                  sender?.id &&
                  String(p.sender.id) === String(sender.id)) ||
                  (p.sender?.name &&
                    sender?.name &&
                    p.sender.name === sender.name))
              )
                return true;
            }
            return (
              typeof p.id === "string" &&
              p.id.startsWith("local-") &&
              p.content === content &&
              p.sender?.name &&
              sender?.name &&
              p.sender.name === sender.name
            );
          });

          if (optimisticIdx >= 0 && serverId) {
            const copy = [...prev];
            const oldLocalId = copy[optimisticIdx].id as string;
            const newMsg: ChatMessage = {
              ...msg,
              id: String(serverId),
              content,
              createdAt,
              sender: sender
                ? {
                    id:
                      sender.id ??
                      sender.userId ??
                      sender,
                    name:
                      sender.name ??
                      sender.fullName ??
                      null,
                  }
                : null,
              metadata: msg?.metadata ?? msg?.meta ?? undefined,
              attachments: msg?.attachments ?? msg?.files ?? undefined,
            };
            copy[optimisticIdx] = newMsg;
            if (oldLocalId) {
              seenIdsRef.current.delete(oldLocalId);
              localToServerIdRef.current[oldLocalId] =
                String(serverId);
            }
            seenIdsRef.current.add(String(serverId));
            return copy;
          }

          const idToUse = serverId
            ? String(serverId)
            : genLocalId("local-");
          seenIdsRef.current.add(idToUse);
          const appended: ChatMessage = {
            id: idToUse,
            chatId,
            content,
            sender: sender
              ? {
                  id:
                    sender.id ??
                    sender.userId ??
                    sender,
                  name:
                    sender.name ??
                    sender.fullName ??
                    null,
                }
              : null,
            attachments: msg?.attachments ?? msg?.files ?? undefined,
            createdAt,
            metadata: msg?.metadata ?? msg?.meta ?? undefined,
          };
          return [...prev, appended];
        });

        // ensure participants include sender (helps header name + inbox)
        if (sender) {
          setInfo((prev) => {
            if (!prev) return prev;
            const existing = prev.participants ?? [];
            const existingIds = new Set(
              existing.map((p) => String(p?.id))
            );
            const senderId =
              sender?.id ?? sender?.userId ?? sender;
            if (senderId && !existingIds.has(String(senderId))) {
              const added = [
                ...existing,
                {
                  id: senderId,
                  name: sender?.name ?? null,
                  email: sender?.email ?? null,
                },
              ];
              return {
                ...prev,
                participants: added,
                meta: { ...prev.meta, lastMessage: msg },
              };
            }
            return {
              ...prev,
              meta: { ...prev.meta, lastMessage: msg },
            };
          });
        }
      } catch (e) {
        console.warn("incoming message handling error:", e);
      }
    };

    const handleTyping = (payload: any) => {
      try {
        let whichChat =
          payload?.chatId ?? payload?.room ?? null;
        if (
          typeof whichChat === "string" &&
          whichChat.startsWith("chat:")
        ) {
          whichChat = whichChat.slice("chat:".length);
        }
        if (!whichChat || String(whichChat) !== String(chatId))
          return;
        const user =
          payload?.user ?? payload?.userId ?? payload?.sender ?? null;
        const userId =
          user &&
          (typeof user === "string"
            ? user
            : user.id ?? user.userId ?? null);
        if (!userId) return;
        setTypingUsers((prev) => ({
          ...prev,
          [String(userId)]: true,
        }));
        window.setTimeout(() => {
          setTypingUsers((prev) => {
            const copy = { ...prev };
            delete copy[String(userId)];
            return copy;
          });
        }, 1800);
      } catch {}
    };

    // Handle remote edits/deletes from backend:
    // backend emits: "chat:message:updated" { chatId, action: "edit" | "delete", message: {...} }
    const handleMessageUpdated = (payload: any) => {
      try {
        let incomingChatId =
          payload?.chatId ??
          payload?.message?.chatId ??
          null;

        if (
          typeof incomingChatId === "string" &&
          incomingChatId.startsWith("chat:")
        ) {
          incomingChatId = incomingChatId.slice("chat:".length);
        }

        if (
          incomingChatId &&
          String(incomingChatId) !== String(chatId)
        )
          return;

        const action = payload?.action ?? null;
        const msg = payload?.message ?? null;
        if (!msg || !msg.id) return;

        const serverId = String(msg.id);

        setMessages((prev) =>
          prev.map((m) => {
            if (String(m.id) !== serverId) return m;

            const base: ChatMessage = {
              ...m,
              content: msg.content ?? m.content,
              metadata: msg.metadata ?? m.metadata ?? {},
              externalId: msg.externalId ?? m.externalId,
              createdAt:
                msg.createdAt ??
                m.createdAt ??
                new Date().toISOString(),
              sender: msg.sender ?? m.sender ?? null,
            };

            if (action === "delete") {
              const isDeletedForAll =
                !!base.metadata?.deletedForEveryone ||
                !!base.metadata?.deletedForAll;
              if (isDeletedForAll) {
                return {
                  ...base,
                  content: "This message was deleted",
                };
              }
            }

            if (action === "edit") {
              return {
                ...base,
                metadata: {
                  ...base.metadata,
                  edited: true,
                },
              };
            }

            return base;
          })
        );
      } catch (e) {
        console.warn("message updated handler error:", e);
      }
    };

    try {
      if (chatSocket && typeof chatSocket.on === "function") {
        chatSocket.on("chat:message", handleMessage);
        chatSocket.on("message", handleMessage);
        chatSocket.on("typing", handleTyping);
        chatSocket.on("chat:message:updated", handleMessageUpdated);
      } else {
        socketClient.on("chat:message", handleMessage);
        socketClient.on("message", handleMessage);
        socketClient.on("typing", handleTyping);
        socketClient.on("chat:message:updated", handleMessageUpdated);
      }
    } catch {
      // ignore
    }

    return () => {
      try {
        if (chatSocket && typeof chatSocket.off === "function") {
          chatSocket.off("chat:message", handleMessage);
          chatSocket.off("message", handleMessage);
          chatSocket.off("typing", handleTyping);
          chatSocket.off("chat:message:updated", handleMessageUpdated);
        } else {
          socketClient.off("chat:message", handleMessage);
          socketClient.off("message", handleMessage);
          socketClient.off("typing", handleTyping);
          socketClient.off("chat:message:updated", handleMessageUpdated);
        }
      } catch {}
    };
  }, [chatId, chatSocket]);

  /* ------------------------
     scrolling behaviour
     ------------------------ */
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onScroll = () => {
      const remaining =
        el.scrollHeight - (el.scrollTop + el.clientHeight);
      isNearBottomRef.current = remaining < 160;
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (isNearBottomRef.current) {
      requestAnimationFrame(() => {
        try {
          el.scrollTo({
            top: el.scrollHeight,
            behavior: "smooth",
          });
        } catch {
          el.scrollTop = el.scrollHeight;
        }
      });
    }
  }, [messages.length]);

  /* ------------------------
     outgoing handler (ComposeBox)
     ------------------------ */
  const handleOutgoing = async (m: OutgoingMessage) => {
    try {
      const isLocal =
        typeof m.id === "string" && m.id.startsWith("local-");
      if (isLocal) {
        if (!seenIdsRef.current.has(String(m.id))) {
          seenIdsRef.current.add(String(m.id));
          const localMsg: ChatMessage = {
            id: String(m.id),
            chatId,
            content: m.content,
            sender: {
              id: m.senderId ?? currentUser?.id,
              name:
                m.senderName ?? currentUser?.name ?? null,
            },
            attachments: m.attachments ?? undefined,
            createdAt:
              m.createdAt ?? new Date().toISOString(),
            __localId: String(m.id),
          };
          setMessages((prev) => [...prev, localMsg]);
        }
        return;
      }

      setMessages((prev) => {
        const localKey = Object.keys(
          localToServerIdRef.current
        ).find(
          (lk) => localToServerIdRef.current[lk] === m.id
        );
        if (localKey) {
          const idx = prev.findIndex((p) => p.id === localKey);
          if (idx >= 0) {
            const copy = [...prev];
            const newMsg: ChatMessage = {
              id: String(m.id),
              chatId,
              content: m.content,
              sender: {
                id: m.senderId ?? currentUser?.id,
                name:
                  m.senderName ?? currentUser?.name ?? null,
              },
              createdAt:
                m.createdAt ?? new Date().toISOString(),
              attachments: m.attachments ?? undefined,
            };
            copy[idx] = newMsg;
            seenIdsRef.current.delete(localKey);
            seenIdsRef.current.add(String(m.id));
            localToServerIdRef.current[localKey] =
              String(m.id);
            return copy;
          }
        }

        const optIdx = prev.findIndex(
          (p) =>
            typeof p.id === "string" &&
            p.id.startsWith("local-") &&
            p.content === m.content &&
            ((p.sender?.id &&
              String(p.sender.id) ===
                String(m.senderId)) ||
              (p.sender?.name &&
                p.sender.name === m.senderName))
        );
        if (optIdx >= 0) {
          const copy = [...prev];
          const oldLocalId = copy[optIdx].id as string;
          const newMsg: ChatMessage = {
            id: String(m.id),
            chatId,
            content: m.content,
            sender: {
              id: m.senderId ?? currentUser?.id,
              name:
                m.senderName ?? currentUser?.name ?? null,
            },
            createdAt:
              m.createdAt ?? new Date().toISOString(),
            attachments: m.attachments ?? undefined,
          };
          copy[optIdx] = newMsg;
          if (oldLocalId) {
            seenIdsRef.current.delete(oldLocalId);
            localToServerIdRef.current[oldLocalId] =
              String(m.id);
          }
          seenIdsRef.current.add(String(m.id));
          return copy;
        }

        if (m.id && seenIdsRef.current.has(String(m.id)))
          return prev;
        if (m.id) seenIdsRef.current.add(String(m.id));
        const appended: ChatMessage = {
          id: String(m.id ?? genLocalId("srv-")),
          chatId,
          content: m.content,
          sender: {
            id: m.senderId ?? currentUser?.id,
            name:
              m.senderName ?? currentUser?.name ?? null,
          },
          createdAt:
            m.createdAt ?? new Date().toISOString(),
          attachments: m.attachments ?? undefined,
        };
        return [...prev, appended];
      });

      void markRead();
    } catch (err) {
      console.warn("handleOutgoing error:", err);
    }
  };

  /* ------------------------
     edit / delete handlers
     ------------------------ */
  const handleStartEdit = (msg: ChatMessage) => {
    if (!msg.id) return;
    setEditingMessageId(String(msg.id));
    setEditingDraft(msg.content);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingDraft("");
  };

  const handleConfirmEdit = async (
    msg: ChatMessage,
    newContent: string
  ) => {
    if (!msg.id) return;
    const idStr = String(msg.id);
    const trimmed = newContent.trim();
    if (!trimmed) {
      // do not allow empty content on client
      return;
    }

    // optimistic local update
    setMessages((prev) =>
      prev.map((m) =>
        String(m.id) === idStr
          ? {
              ...m,
              content: trimmed,
              metadata: {
                ...m.metadata,
                edited: true,
              },
            }
          : m
      )
    );
    setEditingMessageId(null);
    setEditingDraft("");

    // best-effort: call backend PATCH /api/chats/[chatId]
    try {
      await fetch(
        `/api/chats/${encodeURIComponent(chatId)}`,
        {
          method: "PATCH",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messageId: idStr,
            content: trimmed,
          }),
        }
      ).catch(() => {});
    } catch {
      // error is non-fatal, server will enforce real state
    }
  };

  const handleDeleteForAll = async (msg: ChatMessage) => {
    if (!msg.id) return;
    const idStr = String(msg.id);

    // optimistic local update – keep a placeholder
    setMessages((prev) =>
      prev.map((m) =>
        String(m.id) === idStr
          ? {
              ...m,
              content: "This message was deleted",
              metadata: {
                ...m.metadata,
                deletedForEveryone: true,
              },
            }
          : m
      )
    );

    // best-effort: call backend DELETE /api/chats/[chatId]
    try {
      await fetch(
        `/api/chats/${encodeURIComponent(chatId)}`,
        {
          method: "DELETE",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messageId: idStr }),
        }
      ).catch(() => {});
    } catch {
      // ignore; server is source of truth
    }
  };

  const handleDeleteForMe = (msg: ChatMessage) => {
    const idStr = String(msg.id ?? msg.__localId ?? "");
    if (!idStr) return;
    setHiddenForClient((prev) => ({
      ...prev,
      [idStr]: true,
    }));
  };

  /* ------------------------
     UI pieces
     ------------------------ */
  const headerName = deriveChatDisplayName(
    info,
    currentUser ?? null
  );
  const typingCount = Object.keys(typingUsers).length;

  const Avatar = () => (
    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700">
      {(headerName && headerName[0]) || "U"}
    </div>
  );

  const MessageRow = ({ msg }: { msg: ChatMessage }) => {
    const msgKey = String(msg.id ?? msg.__localId ?? "");
    if (hiddenForClient[msgKey]) return null;

    const isMine =
      currentUser &&
      msg.sender &&
      String(msg.sender?.id) ===
        String(currentUser.id);
    const isLocalOptimistic =
      typeof msg.id === "string" &&
      msg.id.startsWith("local-");

    const ts = msg.createdAt
      ? new Date(msg.createdAt).toLocaleString()
      : "";

    const createdDate = msg.createdAt
      ? new Date(msg.createdAt)
      : null;
    const msSince =
      createdDate && !Number.isNaN(createdDate.getTime())
        ? Date.now() - createdDate.getTime()
        : Number.POSITIVE_INFINITY;

    const withinEditWindow =
      msSince <= 15 * 60 * 1000; // 15 minutes

    const isEditing =
      editingMessageId &&
      String(editingMessageId) ===
        String(msg.id);

    const isDeletedForEveryone =
      !!msg.metadata?.deletedForEveryone ||
      !!msg.metadata?.deletedForAll;

    const displayContent =
      isDeletedForEveryone && !isEditing
        ? "This message was deleted"
        : msg.content;

    return (
      <div
        className={`flex gap-3 ${
          isMine ? "justify-end" : "justify-start"
        }`}
      >
        {!isMine && (
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm shrink-0">
            {msg.sender?.name
              ? msg.sender.name[0]
              : "U"}
          </div>
        )}
        <div
          className={`max-w-[78%] p-3 rounded-xl break-words ${
            isMine
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-800"
          } ${isLocalOptimistic ? "opacity-80" : ""}`}
        >
          {isEditing ? (
            <>
              <textarea
                className="w-full text-sm rounded-md border border-slate-200 bg-white/90 text-slate-900 p-1 mb-2"
                rows={2}
                value={editingDraft}
                onChange={(e) =>
                  setEditingDraft(e.target.value)
                }
              />
              <div className="flex justify-end gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() =>
                    handleConfirmEdit(
                      msg,
                      editingDraft
                    )
                  }
                  className="px-2 py-0.5 rounded-md bg-emerald-500 text-white"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-sm whitespace-pre-wrap">
                {displayContent}
              </div>
              {msg.attachments?.length ? (
                <div className="mt-2 space-y-1">
                  {msg.attachments.map((a, i) => (
                    <a
                      key={i}
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs underline block"
                    >
                      {a.name ?? a.url}
                    </a>
                  ))}
                </div>
              ) : null}
            </>
          )}

          <div className="mt-1 flex items-center justify-between gap-2 text-[10px] text-slate-300">
            <span className="text-left">
              {ts}{" "}
              {isLocalOptimistic ? " • sending…" : ""}
              {msg.metadata?.edited &&
              !isEditing &&
              !isDeletedForEveryone
                ? " • edited"
                : ""}
            </span>
            {isMine && !isDeletedForEveryone && (
              <div className="flex items-center gap-2">
                {withinEditWindow && !isEditing && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        handleStartEdit(msg)
                      }
                      className="underline decoration-dotted"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteForAll(msg)
                      }
                      className="underline decoration-dotted"
                    >
                      Delete
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() =>
                    handleDeleteForMe(msg)
                  }
                  className="underline decoration-dotted"
                >
                  Delete for me
                </button>
              </div>
            )}
          </div>
        </div>
        {isMine && (
          <div className="w-9 h-9 rounded-full bg-transparent shrink-0" />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-[200px]">
      <div className="px-3 py-2 border-b flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            try {
              window.history.back();
            } catch {}
          }}
          className="p-1 rounded-md hover:bg-slate-100"
          aria-label="Back"
        >
          ←
        </button>
        <Avatar />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate">
            {headerName}
          </div>
          <div className="text-xs text-slate-400">
            {typingCount > 0
              ? typingCount > 1
                ? `${typingCount} people typing…`
                : "typing…"
              : info?.type &&
                info.type
                  .toString()
                  .toLowerCase()
                  .includes("team")
              ? "Group"
              : "Direct"}
          </div>
        </div>
      </div>

      <div
        ref={listRef}
        className="flex-1 overflow-auto p-4 space-y-3 bg-white"
      >
        {loading ? (
          <div className="text-sm text-slate-500">
            Loading messages…
          </div>
        ) : messages.length === 0 ? (
          <div className="text-sm text-slate-500">
            No messages yet.
          </div>
        ) : (
          messages.map((m) => {
            const key =
              m.id ?? m.__localId ?? genLocalId("k-");
            return (
              <MessageRow key={String(key)} msg={m} />
            );
          })
        )}
      </div>

      <div className="p-3 border-t bg-white">
        <ComposeBox
          chatId={chatId}
          onSent={handleOutgoing}
          onTyping={() => {
            try {
              const payload = {
                chatId,
                user: currentUser?.id ?? null,
              };
              if (
                chatSocket &&
                typeof chatSocket.emit === "function"
              ) {
                chatSocket.emit("typing", payload);
              } else if (
                socketClient &&
                typeof socketClient.emit === "function"
              ) {
                socketClient.emit("typing", payload);
              }
            } catch {}
          }}
        />
      </div>
    </div>
  );
}
