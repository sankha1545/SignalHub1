// src/hooks/useSocket.ts
"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useSocket(chatId?: string) {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // connect once
    if (!socketRef.current) {
      socketRef.current = io("http://localhost:4000", {
        transports: ["websocket"],
      });
    }

    const socket = socketRef.current;

    socket.on("connect", () => {
      setConnected(true);
      console.log("🟢 Connected to socket:", socket.id);

      // join specific chat room
      if (chatId) {
        socket.emit("join", chatId);
      }
    });

    socket.on("disconnect", () => {
      setConnected(false);
      console.log("🔴 Socket disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [chatId]);

  function sendMessage(message: any) {
    if (!socketRef.current) return;
    socketRef.current.emit("chat:message", message);
  }

  function onMessage(handler: (data: any) => void) {
    if (!socketRef.current) return;
    socketRef.current.on("chat:message", handler);

    return () => {
      socketRef.current?.off("chat:message", handler);
    };
  }

  return { socket: socketRef.current, connected, sendMessage, onMessage };
}
