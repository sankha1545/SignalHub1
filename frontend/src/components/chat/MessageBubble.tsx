// src/components/chat/MessageBubble.tsx
"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";
import clsx from "clsx";

type Sender = { id: string; name?: string | null; email?: string | null };
export type ChatMessage = {
  id: string;
  chatId: string;
  content: string;
  metadata?: any;
  externalId?: string | null;
  createdAt?: string | null;
  sender?: Sender | null;
  attachments?: { id: string; url: string; name?: string }[];
  reactions?: { [emoji: string]: string[] }; // emoji -> array of userIds
  readBy?: { id: string; name?: string; avatarUrl?: string | null }[]; // readers
};

export default function MessageBubble({
  message,
  currentUserId,
  onReact,
}: {
  message: ChatMessage;
  currentUserId: string;
  onReact?: (messageId: string, emoji: string) => void;
}) {
  const chatSocket = (() => {
    try {
      return useChatSocket();
    } catch {
      return null;
    }
  })();

  const [showReactPicker, setShowReactPicker] = useState(false);

  const reactedByMe = useMemo(() => {
    const rx = message.reactions ?? {};
    return Object.entries(rx).some(([emoji, arr]) => arr.includes(currentUserId));
  }, [message.reactions, currentUserId]);

  const toggleReaction = useCallback(
    (emoji: string) => {
      if (onReact) {
        onReact(message.id, emoji);
        return;
      }
      // fallback: emit via provider
      try {
        chatSocket?.sendReaction?.(message.chatId, message.id, emoji);
      } catch (e) {
        console.warn("reaction emit failed", e);
      }
    },
    [chatSocket, message.id, message.chatId, onReact]
  );

  const reactionList = message.reactions ?? {};

  return (
    <div className="rounded-lg p-2 bg-white border border-slate-100 shadow-sm max-w-full">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-600">
          {message.sender?.name ? message.sender.name.split(" ").map((s) => s[0]).slice(0,2).join("") : "U"}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-medium text-slate-800 truncate">{message.sender?.name ?? message.sender?.email ?? "Unknown"}</div>
            <div className="text-xs text-slate-400">{message.createdAt ? new Date(message.createdAt).toLocaleString() : ""}</div>
          </div>

          <div className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">{message.content}</div>

          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 flex flex-col gap-2">
              {message.attachments.map((a) => (
                <a key={a.id} href={a.url} target="_blank" rel="noreferrer" className="text-xs text-slate-600 underline">
                  {a.name ?? a.url}
                </a>
              ))}
            </div>
          )}

          {/* reactions */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Object.entries(reactionList).map(([emoji, users]) => (
                <button
                  key={emoji}
                  onClick={() => toggleReaction(emoji)}
                  className={clsx(
                    "px-2 py-0.5 rounded-full text-xs border",
                    users.includes(currentUserId) ? "bg-blue-100 border-blue-200 text-blue-800" : "bg-slate-50 border-slate-200 text-slate-700"
                  )}
                  title={`${users.length} reaction${users.length > 1 ? "s" : ""}`}
                >
                  <span className="mr-1">{emoji}</span>
                  <span className="font-medium">{users.length}</span>
                </button>
              ))}
            </div>

            <div className="ml-2">
              <button
                onClick={() => setShowReactPicker((s) => !s)}
                className="px-2 py-1 rounded text-xs bg-slate-50 border border-slate-200"
                title="React"
              >
                🙂
              </button>
            </div>

            {showReactPicker && (
              <div className="ml-2 p-2 bg-white border rounded shadow-sm">
                {["👍", "❤️", "😂", "🎉", "😮", "😔"].map((e) => (
                  <button key={e} onClick={() => { toggleReaction(e); setShowReactPicker(false); }} className="px-2 py-1 text-sm">
                    {e}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* read receipts: show small avatars or initials */}
          {message.readBy && message.readBy.length > 0 && (
            <div className="mt-2 flex items-center gap-1">
              <div className="text-xs text-slate-400">Read by</div>
              <div className="flex -space-x-1">
                {message.readBy.slice(0, 5).map((r) => (
                  <div key={r.id} className="w-6 h-6 rounded-full bg-slate-100 border text-[10px] flex items-center justify-center text-slate-600" title={r.name}>
                    {(r.name ?? r.id).split(" ").map((s) => s[0]).slice(0,2).join("")}
                  </div>
                ))}
                {message.readBy.length > 5 && <div className="w-6 h-6 rounded-full bg-slate-100 border text-[10px] flex items-center justify-center text-slate-600">+{message.readBy.length - 5}</div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
