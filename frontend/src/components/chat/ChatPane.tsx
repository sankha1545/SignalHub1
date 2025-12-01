// src/components/chat/ChatPane.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@/providers/ChatProvider";
import type { Message } from "@/types/chat";
import ComposeBox from "./ComposeBox";

/**
 * ChatPane renders messages for the currently active chat.
 * - Buffers incoming message fragments if necessary (server streams)
 * - Displays sender name + role + avatar
 * - Renders simple "typing" indicator area
 *
 * Assumes server sends fully formed messages. If you stream tokens, implement buffering here.
 */

function MessageItem({ m }: { m: Message }) {
  return (
    <div className="p-3 flex gap-3">
      <img src={m.sender?.avatarUrl ?? "/favicon.ico"} alt={m.sender?.name ?? "avatar"} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1">
        <div className="text-sm font-medium">{m.sender?.name ?? "Unknown"} <span className="text-xs text-gray-500 ml-2">{m.sender?.role}</span></div>
        <div className="mt-1 text-sm whitespace-pre-wrap">{m.content}</div>
        <div className="text-xs text-gray-400 mt-1">{new Date(m.createdAt).toLocaleString()}</div>
      </div>
    </div>
  );
}

export default function ChatPane() {
  const { activeChatId, chats, addMessageLocally } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const activeChat = useMemo(() => chats.find((c) => c.id === activeChatId) ?? null, [chats, activeChatId]);

  useEffect(() => {
    if (!activeChatId) {
      setMessages([]);
      return;
    }
    setLoading(true);
    fetch(`/api/chats/${activeChatId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.ok) {
          setMessages(data.messages ?? []);
        } else {
          setMessages([]);
        }
      })
      .catch(() => setMessages([]))
      .finally(() => setLoading(false));
  }, [activeChatId]);

  // Listen to socket message:new to append (ChatProvider already updates lastMessage/unread).
  useEffect(() => {
    function handler(ev: any) {
      const m: Message = ev; // shape depends on socket payload
      if (m.chatId === activeChatId) {
        setMessages((prev) => [...prev, m]);
      }
    }
    // fallback: window event (ChatProvider's socket handlers should be used in production)
    (window as any).__onChatMessage = handler;
    return () => {
      delete (window as any).__onChatMessage;
    };
  }, [activeChatId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  if (!activeChatId) return <div className="p-6 text-gray-500">Open a chat to start messaging</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="text-lg font-semibold">{activeChat?.name ?? (activeChat?.type === "PRIVATE" ? "Direct message" : "Group chat")}</div>
        {activeChat?.isAdminView ? <div className="text-xs text-gray-500">Admin: supremo access (not shown in members list)</div> : null}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-auto bg-white">
        {loading ? <div className="p-4">Loading messages…</div> : messages.map((m) => <MessageItem key={m.id} m={m} />)}
      </div>

      <div className="p-3 border-t">
        <ComposeBox chatId={activeChatId} onSent={(msg) => {
          // optimistic append
          setMessages((prev) => [...prev, msg]);
          addMessageLocally(msg);
        }} />
      </div>
    </div>
  );
}
