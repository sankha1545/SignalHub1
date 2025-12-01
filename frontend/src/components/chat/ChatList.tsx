// src/components/chat/ChatList.tsx
"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
// try to use your existing useChat provider if present (keeps backwards compatibility)
import { useChat as useChatProvider } from "@/providers/ChatProvider";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";
import type { Chat as ChatType } from "@/types/chat";

type LocalChat = {
  id: string;
  name?: string | null;
  type?: string; // "GROUP" | "PRIVATE" | "TEAM" | "DIRECT"
  lastMessage?: { content: string; createdAt: string } | null;
  unreadCount?: number | null;
  teamId?: string | null;
  meta?: any;
};

function ChatRow({ chat, onOpen }: { chat: LocalChat; onOpen: (id: string) => void }) {
  return (
    <button
      className="w-full text-left p-3 hover:bg-slate-50 flex items-center gap-3"
      onClick={() => onOpen(chat.id)}
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        {String(chat.type ?? "").toUpperCase().includes("GROUP") || String(chat.type ?? "").toUpperCase().includes("TEAM") ? <span>👥</span> : <span>💬</span>}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="font-medium text-sm">{chat.name ?? (String(chat.type ?? "").toUpperCase().includes("PRIVATE") ? "Direct" : "Group")}</div>
          <div className="text-xs text-gray-500">{chat.lastMessage ? new Date(chat.lastMessage.createdAt).toLocaleTimeString() : ""}</div>
        </div>
        <div className="text-xs text-gray-600 truncate">{chat.lastMessage?.content ?? "No messages yet"}</div>
      </div>
      {chat.unreadCount ? <div className="ml-3 text-sm px-2 py-1 bg-blue-600 text-white rounded-full">{chat.unreadCount}</div> : null}
    </button>
  );
}

/**
 * ChatList
 *
 * Optional prop:
 *  - onOpen?: (chatId: string) => void    // if parent wants to handle opening
 *
 * Behavior:
 *  - If parent doesn't pass onOpen, ChatList will try to use useChatProvider()?.openChat()
 *    (keeps compatibility with existing provider-based flow).
 *  - Maintains local list of chats fetched from /api/chats and updates realtime via socket.
 */
export default function ChatList({ onOpen }: { onOpen?: (id: string) => void }) {
  // Try to use existing ChatProvider (if your app already has one). It may return { chats, openChat, loading }
  let chatProvider: any = null;
  try {
    chatProvider = useChatProvider?.();
  } catch {
    chatProvider = null;
  }

  const socket = useChatSocket();
  const [chats, setChats] = useState<LocalChat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // load chats from api (same endpoint pages use)
  const loadChats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const payload = (j?.chats ?? []) as any[];
      // normalize to LocalChat
      const normalized = payload.map((c) => ({
        id: c.id,
        name: c.name ?? null,
        type: (c.type ?? c.chatType ?? null) as string | undefined,
        lastMessage: c.lastMessage
          ? { content: c.lastMessage.content ?? "", createdAt: c.lastMessage.createdAt ?? new Date().toISOString() }
          : c.lastMessageAt
          ? { content: "", createdAt: c.lastMessageAt }
          : null,
        unreadCount: typeof c.unreadCount === "number" ? c.unreadCount : 0,
        teamId: c.teamId ?? null,
        meta: c.meta ?? null,
      })) as LocalChat[];

      setChats(normalized);
    } catch (err: any) {
      console.warn("ChatList: failed to load chats", err);
      setError("Could not load chats");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // If a ChatProvider is present and exposes chats, use it as source of truth
    if (chatProvider && Array.isArray(chatProvider.chats) && typeof chatProvider.loading !== "undefined") {
      // map provider chats to our local shape for socket merging
      const mapped = (chatProvider.chats ?? []).map((c: any) => ({
        id: c.id,
        name: c.name ?? null,
        type: c.type ?? null,
        lastMessage: c.lastMessage ? { content: c.lastMessage.content ?? "", createdAt: c.lastMessage.createdAt ?? new Date().toISOString() } : null,
        unreadCount: typeof c.unreadCount === "number" ? c.unreadCount : 0,
        teamId: c.teamId ?? null,
        meta: c.meta ?? null,
      })) as LocalChat[];

      setChats(mapped);
      setLoading(Boolean(chatProvider.loading));
      return;
    }

    // Otherwise fetch from API
    loadChats();
  }, [chatProvider, loadChats]);

  // Socket handlers: keep the list realtime
  useEffect(() => {
    if (!socket) return;

    const handleTeamCreated = (payload: any) => {
      const chatPayload = payload?.chat ?? (payload?.team ? { id: payload.team.id, name: payload.team.name, teamId: payload.team.id } : null);
      if (!chatPayload) return;
      setChats((prev) => {
        if (prev.find((p) => p.id === chatPayload.id)) return prev;
        const newRow: LocalChat = {
          id: chatPayload.id,
          name: chatPayload.name ?? `Team ${chatPayload.teamId ?? ""}`,
          type: "GROUP",
          lastMessage: null,
          unreadCount: 0,
          teamId: chatPayload.teamId ?? null,
        };
        return [newRow, ...prev];
      });
    };

    const handleChatMessage = (payload: any) => {
      const chatId = payload?.chatId ?? payload?.chat?.id ?? null;
      if (!chatId) return;
      const text = payload?.message?.content ?? payload?.content ?? "";
      const createdAt = payload?.message?.createdAt ?? new Date().toISOString();

      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== chatId) return c;
          return {
            ...c,
            lastMessage: { content: text, createdAt },
            unreadCount: (c.unreadCount ?? 0) + 1,
          };
        })
      );

      // if chat not present, optionally add a stub (helps admins monitoring)
      setChats((prev) => {
        if (prev.find((c) => c.id === chatId)) return prev;
        const stub: LocalChat = {
          id: chatId,
          name: payload?.chat?.name ?? `Chat ${chatId}`,
          type: payload?.chat?.type ?? "DIRECT",
          lastMessage: { content: text, createdAt },
          unreadCount: 1,
          teamId: payload?.chat?.teamId ?? null,
        };
        return [stub, ...prev];
      });
    };

    socket.on("team:created", handleTeamCreated);
    socket.on("chat:message", handleChatMessage);

    return () => {
      socket.off("team:created", handleTeamCreated);
      socket.off("chat:message", handleChatMessage);
    };
  }, [socket]);

  // openChat handler — use parent prop if provided, otherwise fall back to chatProvider.openChat()
  const handleOpen = useCallback(
    async (id: string) => {
      try {
        // join the chat room so this client receives real-time messages for it
        try {
          await socket.joinChat?.(id);
        } catch {}

        if (typeof onOpen === "function") {
          onOpen(id);
          return;
        }

        if (chatProvider && typeof chatProvider.openChat === "function") {
          chatProvider.openChat(id);
          return;
        }

        // fallback: navigate to a route (if you use routes like /dashboard/chat/[id])
        if (typeof window !== "undefined") {
          try {
            const base = window.location.pathname.split("/dashboard")[0] || "";
            // Do not assume routing scheme — only attempt safe history push
            window.history.pushState({}, "", `${window.location.pathname}?chatId=${encodeURIComponent(id)}`);
            // leave it to the parent to detect query param and open. This is a safe fallback.
          } catch {}
        }
      } catch (e) {
        // ignore individual failures
      }
    },
    [onOpen, chatProvider, socket]
  );

  if (loading) return <div className="p-4">Loading chats…</div>;
  if (!chats.length) return <div className="p-4 text-sm text-gray-600">No chats yet</div>;

  return (
    <div className="divide-y border-r">
      {chats.map((c) => (
        <ChatRow key={c.id} chat={c} onOpen={handleOpen} />
      ))}
    </div>
  );
}
