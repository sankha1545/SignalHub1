// src/app/dashboard/employee/Inbox/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Search,
  Mail,
  Clock,
  Inbox as InboxIcon,
  User,
} from "lucide-react";
import socketClient from "@/lib/socketClient";

const TeamChat = dynamic(
  () => import("@/components/chat/TeamChat").then((m) => m.default),
  { ssr: false }
);

/* -------------------------
   Types
   ------------------------- */
type ChatSummary = {
  id: string;
  name: string; // from /api/chats → per-user chat title (other participant for DIRECT)
  type?: string; // "team" | "direct" | "TEAM" | "DIRECT" etc.
  teamId?: string | null;
  lastMessagePreview?: string | null;
  unreadCount?: number;
  meta?: any; // meta may include { isWithManager?: boolean, participants?: string[] }
};

/* -------------------------
   Small IconButton
   ------------------------- */
const IconButton: React.FC<{
  children: React.ReactNode;
  ariaLabel?: string;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
}> = ({ children, ariaLabel, title, onClick }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    title={title}
    onClick={onClick}
    className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
  >
    {children}
  </button>
);

/* -------------------------
   Chat preview row (compact)
   ------------------------- */
const ChatRow: React.FC<{
  chat: ChatSummary;
  selected: boolean;
  onSelect: () => void;
  delay?: number;
}> = ({ chat, selected, onSelect, delay = 0 }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      className={`relative p-3 rounded-xl border transition-all duration-150 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        selected
          ? "bg-blue-50 border-blue-200 shadow-md"
          : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300">
          <User className="w-5 h-5 text-slate-600" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className="text-sm truncate font-medium text-slate-800"
              title={chat.name}
            >
              {chat.name}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
            </div>
          </div>

          <p className="text-xs text-slate-500 line-clamp-2">
            {chat.lastMessagePreview ??
              (chat.type?.toLowerCase() === "team"
                ? "Team chat — no messages yet"
                : "No messages yet")}
          </p>

          {chat.unreadCount ? (
            <div className="absolute right-3 bottom-3">
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium">
                {chat.unreadCount}
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-1">
          <IconButton ariaLabel="Open" title="Open chat">
            <Mail className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------
   Employee Inbox Page
   ------------------------- */
export default function EmployeeInboxPage(): JSX.Element {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // load chats visible to this employee:
  // server: chats are ACL-filtered; UI additionally only shows employee DMs that are "with manager" via meta.isWithManager
  async function loadChats() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const payload = (j?.chats ?? []) as ChatSummary[];

      const visible = payload.filter((c) => {
        const t = c.type?.toLowerCase();
        if (t === "direct") {
          // allow direct only if meta.isWithManager === true
          return Boolean(c.meta?.isWithManager);
        }
        // show team chats (TEAM or team)
        return true;
      });

      setChats(visible);
      if (!selectedChatId && visible.length > 0) {
        setSelectedChatId(visible[0].id);
      }
    } catch (err: any) {
      console.warn("Failed to load chats:", err);
      setError("Could not load chats");
      setChats([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadChats();

    // socket: update previews/unread counts in real-time
    try {
      if (socketClient && typeof socketClient.on === "function") {
        const onTeamCreated = (payload: any) => {
          const chat =
            payload?.chat ??
            (payload?.team
              ? { id: `team-${payload.team.id}`, name: payload.team.name }
              : null);
          if (!chat) return;

          setChats((prev) => {
            if (prev.find((c) => c.id === chat.id)) return prev;
            return [
              {
                id: chat.id,
                name: chat.name,
                type: "team",
                lastMessagePreview: null,
                unreadCount: 0,
                teamId: payload?.team?.id ?? null,
              },
              ...prev,
            ];
          });
        };

        const onMessage = (payload: any) => {
          const chatId = payload?.chatId ?? payload?.chat?.id ?? null;
          if (!chatId) return;

          setChats((prev) =>
            prev.map((c) => {
              if (c.id !== chatId) return c;
              const content = payload?.message?.content as string | undefined;
              return {
                ...c,
                lastMessagePreview: content
                  ? content.length > 120
                    ? content.slice(0, 120) + "…"
                    : content
                  : c.lastMessagePreview,
                unreadCount:
                  typeof c.unreadCount === "number"
                    ? c.unreadCount + 1
                    : 1,
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return chats.filter((c) => {
      const matchesSearch =
        q === "" ||
        c.name.toLowerCase().includes(q) ||
        (c.lastMessagePreview ?? "").toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "unread" && (c.unreadCount ?? 0) > 0);
      return matchesSearch && matchesFilter;
    });
  }, [chats, query, filter]);

  const unreadTotal = chats.reduce(
    (s, c) => s + (c.unreadCount ?? 0),
    0
  );

  // UI rule: employees should not open direct chats that are not 'with manager'
  function handleSelectChat(chat: ChatSummary) {
    const t = chat.type?.toLowerCase();
    if (t === "direct" && !chat.meta?.isWithManager) {
      alert(
        "Direct messages between employees are not allowed. You can message your manager or use the team group chat."
      );
      return;
    }
    setSelectedChatId(chat.id);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold">Inbox</h1>
            {unreadTotal > 0 && (
              <div className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                {unreadTotal}
              </div>
            )}
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-2">
            <InboxIcon className="w-4 h-4" /> Team & Manager messages
          </p>
        </header>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[320px_1fr]">
          {/* LEFT PANE: chat list */}
          <div className="p-4 border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search chats..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("unread")}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "unread"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  Unread
                </button>
              </div>

              <div className="text-xs text-slate-500">Chats</div>

              <div className="space-y-3 max-h-[60vh] overflow-auto pt-2">
                {loading ? (
                  <div className="text-sm text-slate-500">
                    Loading chats…
                  </div>
                ) : error ? (
                  <div className="text-sm text-rose-600">{error}</div>
                ) : filtered.length === 0 ? (
                  <div className="py-12 text-center text-sm text-slate-500">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <InboxIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="font-medium text-slate-800 mb-1">
                      No chats found
                    </div>
                    <div className="text-sm">
                      You will see team chats and messages from your manager
                      here.
                    </div>
                  </div>
                ) : (
                  filtered.map((c, idx) => (
                    <ChatRow
                      key={c.id}
                      chat={c}
                      selected={selectedChatId === c.id}
                      onSelect={() => handleSelectChat(c)}
                      delay={idx * 0.03}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANE: chat view */}
          <div className="p-4 min-h-[60vh]">
            {selectedChatId ? (
              <div className="h-full rounded-md border border-slate-100 overflow-hidden">
                {/* TeamChat should fetch /api/me internally for current user and enforce send rules server-side */}
                {/* @ts-ignore */}
                <TeamChat chatId={selectedChatId} currentUser={{}} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">
                  Select a chat
                </h3>
                <p className="text-sm">
                  Pick a team group chat or your manager&apos;s thread to start
                  messaging.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
