// src/hooks/useChatSocket.ts
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import type { Chat, Message, UserSummary } from "@/types/chat";

type EventHandlers = {
  onChatCreated?: (chat: Chat) => void;
  onMessageNew?: (message: Message) => void;
  onChatMemberAdded?: (chatId: string, user: UserSummary) => void;
  onChatMemberRemoved?: (chatId: string, userId: string) => void;
  onTyping?: (chatId: string, userId: string, isTyping: boolean) => void;
};

export default function useChatSocket(
  token: string | null,
  handlers: EventHandlers = {}
) {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!token) return;
    // connect to socketio endpoint; server should accept cookie or token auth
    const socket = io("/api/socketio", {
      autoConnect: true,
      auth: { token },
      path: "/api/socketio", // in case server uses default
    });

    socketRef.current = socket;

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    socket.on("chat:created", (payload: { chat: Chat }) => {
      handlers.onChatCreated?.(payload.chat);
    });

    socket.on("message:new", (payload: { message: Message }) => {
      handlers.onMessageNew?.(payload.message);
    });

    socket.on("chat:member:added", (payload: { chatId: string; user: UserSummary }) => {
      handlers.onChatMemberAdded?.(payload.chatId, payload.user);
    });

    socket.on("chat:member:removed", (payload: { chatId: string; userId: string }) => {
      handlers.onChatMemberRemoved?.(payload.chatId, payload.userId);
    });

    socket.on("typing", (payload: { chatId: string; userId: string; isTyping: boolean }) => {
      handlers.onTyping?.(payload.chatId, payload.userId, payload.isTyping);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  const joinChat = useCallback((chatId: string) => {
    socketRef.current?.emit("chat:join", { chatId });
  }, []);

  const leaveChat = useCallback((chatId: string) => {
    socketRef.current?.emit("chat:leave", { chatId });
  }, []);

  const sendMessage = useCallback((chatId: string, content: string) => {
    // prefer REST POST to /api/chats/[chatId]/messages for persistence,
    // but also emit via socket for low-latency if server supports it.
    socketRef.current?.emit("message:send", { chatId, content });
  }, []);

  const emitTyping = useCallback((chatId: string, isTyping: boolean) => {
    socketRef.current?.emit("typing", { chatId, isTyping });
  }, []);

  return {
    socket: socketRef.current,
    connected,
    joinChat,
    leaveChat,
    sendMessage,
    emitTyping,
  };
}
