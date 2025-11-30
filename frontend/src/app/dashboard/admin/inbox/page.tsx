// src/app/dashboard/admin/inbox/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Mail,
  MailOpen,
  Clock,
  Paperclip,
  Inbox as InboxIcon,
  Tag,
  User,
} from "lucide-react";
import socketClient from "@/lib/socketClient";

// Dynamically import the TeamChat and ChatList components (client-only UI)
const TeamChat = dynamic(() => import("@/components/chat/TeamChat").then((m) => m.default), { ssr: false });
const ChatList = dynamic(() => import("@/components/chat/ChatList").then((m) => m.default), { ssr: false });

/* ============================
   Types
   ============================ */
type ChatSummary = {
  id: string;
  name: string;
  type?: string;
  lastMessagePreview?: string | null;
  unreadCount?: number;
  teamId?: string | null;
};

type Message = {
  id: string | number;
  senderId?: string;
  senderName?: string;
  content: string;
  createdAt: string;
  meta?: any;
};

/* ============================
   Reusable UI pieces (kept from original)
   ============================ */

const IconButton: React.FC<{ children: React.ReactNode; ariaLabel?: string; title?: string }> = ({ children, ariaLabel, title }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    title={title}
    className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
  >
    {children}
  </button>
);

/* MessageCard adapted to display chat previews */
const MessageCard: React.FC<{
  chat: ChatSummary;
  isSelected: boolean;
  onSelect: () => void;
  delay?: number;
}> = ({ chat, isSelected, onSelect, delay = 0 }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      className={`relative p-3 rounded-xl border transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        isSelected ? "bg-blue-50 border-blue-200 shadow-md" : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300`}>
          <User className="w-5 h-5 text-slate-600" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className={`text-sm truncate font-medium text-slate-800`} title={chat.name}>
                {chat.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              <span>{chat.lastMessagePreview ? "" : ""}</span>
            </div>
          </div>

          <h4 className="text-sm mb-1 truncate text-slate-600" title={chat.lastMessagePreview ?? ""}>
            {chat.lastMessagePreview ?? "No messages yet"}
          </h4>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* placeholder for labels or badges */}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              {chat.unreadCount ? <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium">{chat.unreadCount}</span> : null}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="flex items-center gap-1">
          <IconButton ariaLabel="More" title="More">
            <Mail className="w-4 h-4" />
          </IconButton>
        </motion.div>
      </div>
    </motion.article>
  );
};

/* ============================
   Main Admin Inbox Page
   ============================ */

export default function InboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "starred">("all");
  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch chats visible to the admin (should return group chats for all teams + any direct chats)
  async function loadChats() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const payload = (j?.chats ?? []) as ChatSummary[];
      setChats(payload);
      // if nothing selected, pick first chat
      if (!selectedChatId && payload.length > 0) setSelectedChatId(payload[0].id);
    } catch (err: any) {
      console.warn("Failed to load chats:", err);
      setError("Could not load chats");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadChats();

    // socket: listen for team/chat creation and new messages (admin monitors everything)
    try {
      if (socketClient && typeof socketClient.on === "function") {
        const onTeamCreated = (payload: any) => {
          // payload.chat or payload.team may be present
          const chat = payload?.chat ? payload.chat : payload?.team ? { id: `team-${payload.team.id}`, name: payload.team.name } : null;
          if (chat) {
            setChats((prev) => {
              const exists = prev.find((c) => c.id === chat.id);
              if (exists) return prev;
              return [ { id: chat.id, name: chat.name, lastMessagePreview: null, unreadCount: 0, teamId: payload?.team?.id ?? null }, ...prev ];
            });
          } else if (payload?.team) {
            // if server emitted team but not chat, create a stub using team id
            const stubId = `team-${payload.team.id}`;
            setChats((prev) => {
              const exists = prev.find((c) => c.id === stubId);
              if (exists) return prev;
              return [{ id: stubId, name: payload.team.name ?? `Team ${payload.team.id}`, lastMessagePreview: null, unreadCount: 0, teamId: payload.team.id }, ...prev];
            });
          }
        };

        const onMessage = (payload: any) => {
          // payload: { chatId, message }
          const chatId = payload?.chatId ?? payload?.chat?.id ?? null;
          if (!chatId) return;
          setChats((prev) =>
            prev.map((c) => {
              if (c.id !== chatId) return c;
              return {
                ...c,
                lastMessagePreview: payload?.message?.content ? (payload.message.content.length > 120 ? payload.message.content.slice(0, 120) + "…" : payload.message.content) : c.lastMessagePreview,
                unreadCount: (typeof c.unreadCount === "number" ? c.unreadCount + 1 : 1),
              };
            })
          );
        };

        socketClient.on("team:created", onTeamCreated);
        socketClient.on("message", onMessage);

        return () => {
          socketClient.off("team:created", onTeamCreated);
          socketClient.off("message", onMessage);
        };
      }
    } catch (err) {
      console.warn("Socket client not available:", err);
    }
  }, []);

  const filteredChats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chats.filter((c) => {
      const matchesSearch = q === "" || c.name.toLowerCase().includes(q) || (c.lastMessagePreview ?? "").toLowerCase().includes(q);
      const matchesFilter = filter === "all" || (filter === "unread" && (c.unreadCount ?? 0) > 0) || (filter === "starred" && false);
      return matchesSearch && matchesFilter;
    });
  }, [chats, searchQuery, filter]);

  const unreadCount = chats.reduce((acc, c) => acc + (c.unreadCount ?? 0), 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold">Admin Inbox</h1>
            {unreadCount > 0 && (
              <div className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                {unreadCount}
              </div>
            )}
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-2">
            <InboxIcon className="w-4 h-4" />
            Monitor team chats across your organization
          </p>
        </header>

        {/* layout: left pane = chat list, right pane = chat viewer */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          {/* left: chat list + controls */}
          <div className="p-4 border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  aria-label="Search chats"
                  placeholder="Search chats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-2 rounded-xl text-sm ${filter === "all" ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("unread")}
                  className={`px-3 py-2 rounded-xl text-sm ${filter === "unread" ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600"}`}
                >
                  Unread
                </button>
                <button
                  onClick={() => setFilter("starred")}
                  className={`px-3 py-2 rounded-xl text-sm ${filter === "starred" ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600"}`}
                >
                  Starred
                </button>
              </div>

              <div className="text-xs text-slate-500">Chats</div>

              <div className="space-y-3 max-h-[60vh] overflow-auto pt-2">
                {loading ? (
                  <div className="text-sm text-slate-500">Loading chats…</div>
                ) : error ? (
                  <div className="text-sm text-rose-600">{error}</div>
                ) : filteredChats.length === 0 ? (
                  <div className="py-8 text-center text-sm text-slate-500">
                    No chats found — invite users or create a team to start a chat.
                  </div>
                ) : (
                  filteredChats.map((c, idx) => (
                    <MessageCard
                      key={c.id}
                      chat={c}
                      isSelected={selectedChatId === c.id}
                      onSelect={() => setSelectedChatId(c.id)}
                      delay={idx * 0.03}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* right: viewer */}
          <div className="p-4 min-h-[60vh]">
            {selectedChatId ? (
              // TeamChat expects props: chatId and currentUser; we supply chatId and let TeamChat fetch message history itself
              <div className="h-full rounded-md border border-slate-100 overflow-hidden">
                {/* @ts-ignore - TeamChat is loaded client-side dynamically */}
                <TeamChat chatId={selectedChatId} currentUser={{ /* admin context resolved by TeamChat via /api/me too */ }} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Select a chat to begin monitoring</h3>
                <p className="text-sm">Select a team chat on the left, or create a team to generate a new chat.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
