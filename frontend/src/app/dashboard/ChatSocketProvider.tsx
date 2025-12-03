// src/context/ChatSocketProvider.tsx
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import socketClient, {
  connectWithToken,
  disconnectSocket,
  joinRoom,
  leaveRoom,
  sendEvent,
  onEvent,
  offEvent,
} from "@/lib/socketClient";

type ChatSocketContextValue = {
  connected: boolean;
  socketId: string | null;
  connect: (token?: string | null) => Promise<void>;
  disconnect: () => void;
  joinChat: (chatId: string) => Promise<void>;
  leaveChat: (chatId: string) => Promise<void>;
  sendMessage: (chatId: string, payload: any) => void;
  on: (event: string, handler: (...args: any[]) => void) => void;
  off: (event: string, handler?: (...args: any[]) => void) => void;
};

const ChatSocketContext = createContext<ChatSocketContextValue | null>(null);

export function useChatSocket(): ChatSocketContextValue {
  const ctx = useContext(ChatSocketContext);
  if (!ctx) throw new Error("useChatSocket must be used inside ChatSocketProvider");
  return ctx;
}

export function ChatSocketProvider({
  children,
  getToken,
}: {
  children: React.ReactNode;
  getToken?: (() => Promise<string | null> | string | null);
}) {
  const [connected, setConnected] = useState(false);
  const [socketId, setSocketId] = useState<string | null>(null);
  const tokenRef = useRef<string | null>(null);

  const doConnect = useCallback(
    async (maybeToken?: string | null) => {
      try {
        let token = maybeToken ?? null;
        if (!token && getToken) {
          try {
            const t = await (getToken as any)();
            token = typeof t === "string" ? t : null;
          } catch {}
        }
        if (!token && typeof window !== "undefined") {
          token = (window as any).__SESSION_TOKEN ?? localStorage.getItem("session") ?? null;
        }

        tokenRef.current = token;
        const s = await connectWithToken(token);
        const inst = s ?? (window as any).__socketInstance ?? null;

        setTimeout(() => {
          setConnected(Boolean(inst && inst.connected));
          setSocketId(inst?.id ?? null);
        }, 300);

        if (inst) {
          inst.on?.("connect", () => {
            setConnected(true);
            setSocketId(inst.id ?? null);
          });
          inst.on?.("disconnect", () => {
            setConnected(false);
            setSocketId(null);
          });
        }
      } catch {
        // best-effort
      }
    },
    [getToken]
  );

  const doDisconnect = useCallback(() => {
    try {
      disconnectSocket();
    } finally {
      setConnected(false);
      setSocketId(null);
    }
  }, []);

  useEffect(() => {
    doConnect().catch(() => {});
    return () => {
      try {
        doDisconnect();
      } catch {}
    };
  }, [doConnect, doDisconnect]);

  // IMPORTANT: join by raw chatId (server's "join-room" handler will map to room internally)
  const joinChat = useCallback(async (chatId: string) => {
    if (!chatId) return;
    await joinRoom(chatId);
  }, []);

  const leaveChat = useCallback(async (chatId: string) => {
    if (!chatId) return;
    await leaveRoom(chatId);
  }, []);

  const sendMessage = useCallback((chatId: string, payload: any) => {
    // Event for real-time UX; persistence happens via POST /api/chats/:id
    sendEvent("chat:message", { chatId, ...payload });
  }, []);

  const on = useCallback((event: string, handler: (...args: any[]) => void) => {
    onEvent(event, handler);
  }, []);

  const off = useCallback((event: string, handler?: (...args: any[]) => void) => {
    offEvent(event, handler);
  }, []);

  const value = useMemo(
    () => ({
      connected,
      socketId,
      connect: doConnect,
      disconnect: doDisconnect,
      joinChat,
      leaveChat,
      sendMessage,
      on,
      off,
    }),
    [connected, socketId, doConnect, doDisconnect, joinChat, leaveChat, sendMessage, on, off]
  );

  return <ChatSocketContext.Provider value={value}>{children}</ChatSocketContext.Provider>;
}
