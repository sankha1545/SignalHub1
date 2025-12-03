// src/components/chat/ChatList.tsx
"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
// try to use your existing useChat provider if present (keeps backwards compatibility)
import { useChat as useChatProvider } from "@/providers/ChatProvider";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

type MinimalUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

type LocalChat = {
  id: string;
  name?: string | null;
  type?: string; // "GROUP" | "PRIVATE" | "TEAM" | "DIRECT"
  lastMessage?: { content: string; createdAt: string } | null;
  unreadCount?: number | null;
  teamId?: string | null;
  meta?: any;
  members?: MinimalUser[] | null;
};

function normalizeMembers(raw: any): MinimalUser[] | undefined {
  if (!raw) return undefined;
  const arr = Array.isArray(raw) ? raw : [];
  const mapped = arr
    .map((m) => {
      if (!m) return null;
      // backend normalizeChat gives: { id, name, email, role }
      const id =
        m.id ??
        m.userId ??
        m.user?.id ??
        m.user?._id ??
        null;
      const name =
        m.name ??
        m.displayName ??
        m.user?.name ??
        null;
      const email = m.email ?? m.user?.email ?? null;
      const role = m.role ?? m.user?.role ?? null;
      if (!id) return null;
      return {
        id: String(id),
        name,
        email,
        role,
      } as MinimalUser;
    })
    .filter(Boolean) as MinimalUser[];

  return mapped.length ? mapped : undefined;
}

/**
 * Derive a per-user display name:
 * - DIRECT / PRIVATE → show the "other person" for this user
 * - TEAM / GROUP    → server name or Team <id>
 * - fallback        → "Chat <id>"
 */
function deriveDisplayName(
  chat: LocalChat,
  me: MinimalUser | null
): string {
  const rawType = (chat.type ?? "").toString().toLowerCase();
  const serverName =
    chat.name ?? chat.meta?.name ?? "";
  const isGeneric =
    !serverName ||
    serverName === "Chat" ||
    serverName.startsWith("Chat ");

  const isDirect =
    rawType === "direct" ||
    rawType === "private" ||
    rawType === "dm";

  if (isDirect) {
    const candidates =
      chat.members ??
      normalizeMembers(chat.meta?.members) ??
      normalizeMembers(chat.meta?.participants);

    if (
      candidates &&
      candidates.length > 0 &&
      me?.id
    ) {
      const other = candidates.find(
        (p) => String(p.id) !== String(me.id)
      );
      if (other) {
        if (other.name) return other.name;
        if (other.email) return other.email;
      }
    }

    if (!isGeneric && serverName) return serverName;
    return "Direct chat";
  }

  const isTeamOrGroup =
    rawType === "team" || rawType === "group";

  if (!isGeneric && serverName) return serverName;

  if (isTeamOrGroup) {
    return chat.name
      ? chat.name
      : `Team ${chat.teamId ?? chat.id}`;
  }

  return serverName || `Chat ${chat.id}`;
}

function ChatRow({
  chat,
  onOpen,
  currentUser,
}: {
  chat: LocalChat;
  onOpen: (id: string) => void;
  currentUser: MinimalUser | null;
}) {
  const typeLabel = (chat.type ?? "")
    .toString()
    .toUpperCase();
  const isGroupLike =
    typeLabel.includes("GROUP") ||
    typeLabel.includes("TEAM");
  const displayName = deriveDisplayName(
    chat,
    currentUser
  );

  return (
    <button
      className="w-full text-left p-3 hover:bg-slate-50 flex items-center gap-3"
      onClick={() => onOpen(chat.id)}
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        {isGroupLike ? <span>👥</span> : <span>💬</span>}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="font-medium text-sm truncate">
            {displayName}
          </div>
          <div className="text-xs text-gray-500">
            {chat.lastMessage
              ? new Date(
                  chat.lastMessage.createdAt
                ).toLocaleTimeString()
              : ""}
          </div>
        </div>
        <div className="text-xs text-gray-600 truncate">
          {chat.lastMessage?.content ??
            "No messages yet"}
        </div>
      </div>
      {chat.unreadCount ? (
        <div className="ml-3 text-sm px-2 py-1 bg-blue-600 text-white rounded-full">
          {chat.unreadCount}
        </div>
      ) : null}
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
 *  - For DIRECT chats, the display name is computed per user from members.
 */
export default function ChatList({
  onOpen,
}: {
  onOpen?: (id: string) => void;
}) {
  // Try to use existing ChatProvider (if your app already has one). It may return { chats, openChat, loading }
  let chatProvider: any = null;
  try {
    chatProvider = useChatProvider?.();
  } catch {
    chatProvider = null;
  }

  const socket = useChatSocket();
  const [chats, setChats] = useState<LocalChat[]>([]);
  const [loading, setLoading] =
    useState<boolean>(true);
  const [error, setError] = useState<string | null>(
    null
  );
  const [currentUser, setCurrentUser] =
    useState<MinimalUser | null>(null);

  // load current user (for "other person" name)
  const loadMe = useCallback(async () => {
    try {
      const res = await fetch("/api/me", {
        credentials: "same-origin",
      });
      if (!res.ok) return;
      const j = await res.json().catch(() => ({}));
      const u = j?.user ?? null;
      if (u && u.id) {
        setCurrentUser({
          id: String(u.id),
          name: u.name ?? null,
          email: u.email ?? null,
          role: u.role ?? null,
        });
      }
    } catch {
      // non-fatal
    }
  }, []);

  useEffect(() => {
    loadMe();
  }, [loadMe]);

  // load chats from api (same endpoint pages use)
  const loadChats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", {
        credentials: "same-origin",
      });
      if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const payload = (j?.chats ?? []) as any[];

      const normalized: LocalChat[] = payload.map(
        (c) => ({
          id: c.id,
          name: c.name ?? null,
          type: (c.type ?? c.chatType ?? null) as
            | string
            | undefined,
          lastMessage: c.lastMessage
            ? {
                content:
                  c.lastMessage.content ?? "",
                createdAt:
                  c.lastMessage.createdAt ??
                  new Date().toISOString(),
              }
            : c.lastMessageAt
            ? {
                content: "",
                createdAt: c.lastMessageAt,
              }
            : null,
          unreadCount:
            typeof c.unreadCount === "number"
              ? c.unreadCount
              : 0,
          teamId: c.teamId ?? null,
          meta: c.meta ?? c ?? null,
          members: normalizeMembers(
            c.members ?? c.participants
          ) ?? null,
        })
      );

      setChats(normalized);
    } catch (err: any) {
      console.warn(
        "ChatList: failed to load chats",
        err
      );
      setError("Could not load chats");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // If a ChatProvider is present and exposes chats, use it as source of truth
    if (
      chatProvider &&
      Array.isArray(chatProvider.chats) &&
      typeof chatProvider.loading !== "undefined"
    ) {
      const mapped: LocalChat[] = (
        chatProvider.chats ?? []
      ).map((c: any) => ({
        id: c.id,
        name: c.name ?? null,
        type: c.type ?? null,
        lastMessage: c.lastMessage
          ? {
              content:
                c.lastMessage.content ?? "",
              createdAt:
                c.lastMessage.createdAt ??
                new Date().toISOString(),
            }
          : null,
        unreadCount:
          typeof c.unreadCount === "number"
            ? c.unreadCount
            : 0,
        teamId: c.teamId ?? null,
        meta: c.meta ?? c ?? null,
        members: normalizeMembers(
          c.members ?? c.participants
        ) ?? null,
      }));

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
      const chatPayload =
        payload?.chat ??
        (payload?.team
          ? {
              id: payload.team.id,
              name: payload.team.name,
              teamId: payload.team.id,
              members:
                payload.team.members ??
                payload.chat?.members ??
                null,
            }
          : null);
      if (!chatPayload) return;
      setChats((prev) => {
        if (
          prev.find(
            (p) => p.id === chatPayload.id
          )
        )
          return prev;
        const newRow: LocalChat = {
          id: chatPayload.id,
          name:
            chatPayload.name ??
            `Team ${chatPayload.teamId ?? ""}`,
          type: "GROUP",
          lastMessage: null,
          unreadCount: 0,
          teamId: chatPayload.teamId ?? null,
          members:
            normalizeMembers(
              chatPayload.members
            ) ?? null,
        };
        return [newRow, ...prev];
      });
    };

    const handleChatMessage = (payload: any) => {
      const chatId =
        payload?.chatId ?? payload?.chat?.id ?? null;
      if (!chatId) return;
      const text =
        payload?.message?.content ??
        payload?.content ??
        "";
      const createdAt =
        payload?.message?.createdAt ??
        new Date().toISOString();
      const membersFromPayload =
        payload?.chat?.members ??
        payload?.chat?.participants ??
        null;

      // update existing chat
      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== chatId) return c;
          return {
            ...c,
            lastMessage: {
              content: text,
              createdAt,
            },
            unreadCount:
              (c.unreadCount ?? 0) + 1,
            members:
              c.members ??
              (normalizeMembers(
                membersFromPayload
              ) ?? null),
          };
        })
      );

      // if chat not present, add a stub
      setChats((prev) => {
        if (prev.find((c) => c.id === chatId))
          return prev;
        const stub: LocalChat = {
          id: chatId,
          name:
            payload?.chat?.name ??
            `Chat ${chatId}`,
          type:
            payload?.chat?.type ?? "DIRECT",
          lastMessage: {
            content: text,
            createdAt,
          },
          unreadCount: 1,
          teamId: payload?.chat?.teamId ?? null,
          meta: payload?.chat ?? null,
          members:
            normalizeMembers(
              membersFromPayload
            ) ?? null,
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
        try {
          await socket.joinChat?.(id);
        } catch {}

        if (typeof onOpen === "function") {
          onOpen(id);
          return;
        }

        if (
          chatProvider &&
          typeof chatProvider.openChat ===
            "function"
        ) {
          chatProvider.openChat(id);
          return;
        }

        if (typeof window !== "undefined") {
          try {
            window.history.pushState(
              {},
              "",
              `${window.location.pathname}?chatId=${encodeURIComponent(
                id
              )}`
            );
          } catch {}
        }
      } catch {
        // ignore
      }
    },
    [onOpen, chatProvider, socket]
  );

  if (loading)
    return (
      <div className="p-4">
        Loading chats…
      </div>
    );
  if (error)
    return (
      <div className="p-4 text-sm text-red-600">
        {error}
      </div>
    );
  if (!chats.length)
    return (
      <div className="p-4 text-sm text-gray-600">
        No chats yet
      </div>
    );

  return (
    <div className="divide-y border-r">
      {chats.map((c) => (
        <ChatRow
          key={c.id}
          chat={c}
          onOpen={handleOpen}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}
