// src/providers/ChatProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import useChatSocket from "@/hooks/useChatSocket";
import type { Chat, Message, UserSummary } from "@/types/chat";

/**
 * ChatProvider - holds chat list, active chat, unread counts, and provides helper actions.
 *
 * Usage:
 *  - Wrap your app (or dashboard pages) with <ChatProvider token={authToken}>...</ChatProvider>
 *  - Use useChat() hook to access chats, openChat(chatId), sendMessage, etc.
 */

type ChatContextValue = {
  chats: Chat[];
  setChats: (c: Chat[]) => void;
  activeChatId: string | null;
  openChat: (chatId: string) => void;
  closeChat: () => void;
  sendMessage: (chatId: string, content: string) => Promise<void>;
  addMessageLocally: (message: Message) => void;
  unreadTotal: number;
  loading: boolean;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}

export function ChatProvider({ token, children }: { token: string | null; children: React.ReactNode }) {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handlers = {
    onChatCreated: (chat: Chat) => setChats((prev) => [chat, ...prev]),
    onMessageNew: (message: Message) => {
      // bump lastMessage + unread logic
      setChats((prev) =>
        prev.map((c) => {
          if (c.id === message.chatId) {
            const unread = (c.unreadCount ?? 0) + (activeChatId === c.id ? 0 : 1);
            return { ...c, lastMessage: message, unreadCount: unread };
          }
          return c;
        })
      );
    },
    onChatMemberAdded: (chatId: string, user: UserSummary) => {
      setChats((prev) => prev.map((c) => (c.id === chatId ? { ...c, members: [...(c.members ?? []), user] } : c)));
    },
    onChatMemberRemoved: (chatId: string, userId: string) => {
      setChats((prev) => prev.map((c) => (c.id === chatId ? { ...c, members: (c.members ?? []).filter((m) => m.id !== userId) } : c)));
    },
  };

  const { socket, connected, joinChat, leaveChat, sendMessage: socketSend } = useChatSocket(token, handlers);

  // Fetch initial chat list
  useEffect(() => {
    if (!token) {
      setChats([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch("/api/chats")
      .then((r) => r.json())
      .then((data) => {
        if (data?.ok) {
          setChats(data.chats || []);
        } else {
          setChats([]);
        }
      })
      .catch(() => setChats([]))
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    // when opening activeChat, join via socket
    if (activeChatId && socket) {
      joinChat(activeChatId);
    }
    return () => {
      if (activeChatId && socket) leaveChat(activeChatId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChatId]);

  const openChat = (chatId: string) => {
    setActiveChatId(chatId);
    setChats((prev) => prev.map((c) => (c.id === chatId ? { ...c, unreadCount: 0 } : c)));
  };

  const closeChat = () => setActiveChatId(null);

  const addMessageLocally = (message: Message) => {
    setChats((prev) =>
      prev.map((c) => (c.id === message.chatId ? { ...c, lastMessage: message } : c))
    );
  };

  const sendMessage = async (chatId: string, content: string) => {
    // Prefer REST API for durability and server ACLs; also emit socket for low latency.
    try {
      const res = await fetch(`/api/chats/${chatId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const json = await res.json();
      if (json?.ok && json?.message) {
        // message will be broadcast by server; optionally also optimistically add
        addMessageLocally(json.message);
      } else {
        // fallback to socket emit
        socketSend(chatId, content);
      }
    } catch (e) {
      // as fallback try socket
      socketSend(chatId, content);
    }
  };

  const unreadTotal = chats.reduce((sum, c) => sum + (c.unreadCount ?? 0), 0);

  const ctxValue = useMemo(
    () => ({
      chats,
      setChats,
      activeChatId,
      openChat,
      closeChat,
      sendMessage,
      addMessageLocally,
      unreadTotal,
      loading,
    }),
    [chats, activeChatId, unreadTotal, loading]
  );

  return <ChatContext.Provider value={ctxValue}>{children}</ChatContext.Provider>;
}
