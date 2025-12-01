// src/app/dashboard/manager/TeamInbox/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  MoreVertical,
  Clock,
  Inbox as InboxIcon,
  User,
  Users,
  UserCheck,
} from "lucide-react";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

/* ============================
   Dynamic imports (client only)
   ============================ */
const TeamChat = dynamic(() => import("@/components/chat/TeamChat").then((m) => m.default), { ssr: false });

/* ============================
   Types
   ============================ */
type FilterKey = "all" | "assigned" | "unassigned" | "flagged";

type ChatSummary = {
  id: string;
  name: string;
  type?: "team" | "direct";
  teamId?: string | null;
  lastMessagePreview?: string | null;
  unreadCount?: number;
  meta?: any;
};

type MinimalUser = { id: string; role?: string; name?: string; email?: string; organizationId?: string | null };

/* ============================
   Small reusable IconButton
   ============================ */
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

/* ============================
   Filter Buttons
   ============================ */
const FilterButtons: React.FC<{ active: FilterKey; onChange: (v: FilterKey) => void }> = ({ active, onChange }) => {
  const items: { key: FilterKey; label: string; Icon?: React.ComponentType<any> }[] = [
    { key: "all", label: "All" },
    { key: "assigned", label: "Assigned", Icon: UserCheck },
    { key: "unassigned", label: "Unassigned", Icon: Users },
    { key: "flagged", label: "Flagged", Icon: Star },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {items.map((it) => {
        const isActive = active === it.key;
        return (
          <button
            key={it.key}
            onClick={() => onChange(it.key)}
            type="button"
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
              isActive ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {it.Icon && <it.Icon className="w-4 h-4" />}
            <span>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
};

/* ============================
   MessageCard adapted for chat previews (Manager)
   ============================ */
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
      transition={{ duration: 0.22, delay }}
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
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300">
          <User className="w-5 h-5 text-slate-600" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="text-sm truncate font-medium text-slate-800" title={chat.name}>
                {chat.name}
              </h3>

              {chat.unreadCount && chat.unreadCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
            </div>
          </div>

          <h4 className="text-sm mb-1 truncate text-slate-600" title={chat.lastMessagePreview ?? ""}>
            {chat.lastMessagePreview ?? (chat.type === "team" ? "Team chat — no messages yet" : "No messages yet")}
          </h4>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              {chat.type === "team" ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600">Group</span> : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600">Direct</span>}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              {chat.unreadCount ? <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium">{chat.unreadCount}</span> : null}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="flex items-center gap-1">
          <IconButton ariaLabel="More" title="More">
            <MoreVertical className="w-4 h-4" />
          </IconButton>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            layoutId="selectedIndicator-manager"
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r-full"
            initial={{ width: 0 }}
            animate={{ width: 4 }}
            exit={{ width: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
};

/* ============================
   Main Manager TeamInbox Page
   ============================ */
export default function TeamInboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [teamSelect, setTeamSelect] = useState<string>("Growth Team");

  // chats will include both group (type=team) and direct (type=direct) threads relevant to this manager
  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // current user (for TeamChat)
  const [currentUser, setCurrentUser] = useState<MinimalUser | null>(null);

  // use chat socket provider
  const chatSocket = useChatSocket();

  // load chats (manager relevant) from API
  async function loadChats() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const payload = (j?.chats ?? []) as ChatSummary[];
      setChats(payload);
      if (!selectedChatId && payload.length > 0) setSelectedChatId(payload[0].id);
    } catch (err: any) {
      console.warn("Failed to load chats:", err);
      setError("Could not load chats");
      setChats([]);
    } finally {
      setLoading(false);
    }
  }

  // load current user
  async function loadMe() {
    try {
      const res = await fetch("/api/me", { credentials: "include" });
      if (!res.ok) {
        setCurrentUser(null);
        return;
      }
      const j = await res.json().catch(() => ({}));
      const u = j?.user ?? j ?? null;
      if (u && u.id) {
        setCurrentUser({ id: String(u.id), role: u.role ?? u?.role ?? null, name: u.name ?? null, email: u.email ?? null, organizationId: u.organizationId ?? null });
      } else {
        setCurrentUser(null);
      }
    } catch (e) {
      console.warn("Failed to load /api/me:", e);
      setCurrentUser(null);
    }
  }

  useEffect(() => {
    loadMe();
    loadChats();

    // subscribe to socket events via provider
    const handleTeamCreated = (payload: any) => {
      const newChat = payload?.chat ?? (payload?.team ? { id: payload.team.id, name: payload.team.name, teamId: payload.team.id } : null);
      if (!newChat) return;
      setChats((prev) => {
        if (prev.find((c) => c.id === newChat.id)) return prev;
        const inserted: ChatSummary = {
          id: newChat.id,
          name: newChat.name ?? `Team ${newChat.teamId ?? ""}`,
          type: "team",
          teamId: newChat.teamId ?? null,
          lastMessagePreview: null,
          unreadCount: 0,
        };
        return [inserted, ...prev];
      });
    };

    const handleChatMessage = (payload: any) => {
      const chatId = payload?.chatId ?? payload?.chat?.id ?? null;
      if (!chatId) return;

      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== chatId) return c;
          const text = payload?.message?.content ?? "";
          return {
            ...c,
            lastMessagePreview: text.length > 120 ? text.slice(0, 120) + "…" : text,
            unreadCount: (c.unreadCount ?? 0) + 1,
          };
        })
      );
    };

    try {
      chatSocket.on("team:created", handleTeamCreated);
      chatSocket.on("chat:message", handleChatMessage);
    } catch (e) {
      // non-fatal
      // eslint-disable-next-line no-console
      console.warn("chatSocket hook registration failed:", e);
    }

    // cleanup
    return () => {
      try {
        chatSocket.off("team:created", handleTeamCreated);
        chatSocket.off("chat:message", handleChatMessage);
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatSocket]);

  // join selected chat room when selectedChatId changes
  useEffect(() => {
    if (!selectedChatId) return;

    // join selected chat room
    (async () => {
      try {
        await chatSocket.joinChat(selectedChatId);
      } catch (e) {
        // ignore
      }
    })();

    // clear unread count locally for this chat (optionally call API to persist)
    setChats((prev) => prev.map((c) => (c.id === selectedChatId ? { ...c, unreadCount: 0 } : c)));

    // leave previous chat handled by joinChat calls — if you want to leave others, implement tracking
    return () => {
      (async () => {
        try {
          await chatSocket.leaveChat(selectedChatId);
        } catch {}
      })();
    };
  }, [selectedChatId, chatSocket]);

  // search + filter
  const filteredChats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chats.filter((c) => {
      const matchesSearch = q === "" || c.name.toLowerCase().includes(q) || (c.lastMessagePreview ?? "").toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "assigned" && (c.meta?.assigned === true || (c.type === "direct" && c.meta?.assignedTo))) ||
        (filter === "unassigned" && !(c.meta?.assigned === true || (c.type === "direct" && c.meta?.assignedTo))) ||
        (filter === "flagged" && (c.meta?.flagged === true));
      return matchesSearch && matchesFilter;
    });
  }, [chats, searchQuery, filter]);

  const unreadCount = chats.reduce((acc, c) => acc + (c.unreadCount ?? 0), 0);

  const handleArchive = (id: string) => {
    console.log("Archive", id);
    // TODO: call API
  };

  const handleDelete = (id: string) => {
    console.log("Delete", id);
    // TODO: confirmation + API
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Team Inbox
              </h1>

              {unreadCount > 0 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {unreadCount}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>{teamSelect}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserCheck className="w-4 h-4" />
                <span>{/* assignedCount placeholder */} assigned</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <InboxIcon className="w-4 h-4" />
                <span>{/* totalCount placeholder */} total</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">Manage incoming customer messages for your team. Use the left pane to pick a team or direct thread.</p>
        </header>

        {/* layout: left pane = chat list, right pane = chat viewer (TeamChat) */}
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
                <FilterButtons active={filter} onChange={(v) => setFilter(v as FilterKey)} />
              </div>

              <div className="text-xs text-slate-500">Chats</div>

              <div className="space-y-3 max-h-[60vh] overflow-auto pt-2">
                {loading ? (
                  <div className="text-sm text-slate-500">Loading chats…</div>
                ) : error ? (
                  <div className="text-sm text-rose-600">{error}</div>
                ) : filteredChats.length === 0 ? (
                  <div className="py-8 text-center text-sm text-slate-500">
                    No chats found — create a team or start a direct chat to begin.
                  </div>
                ) : (
                  filteredChats.map((c, idx) => (
                    <MessageCard key={c.id} chat={c} isSelected={selectedChatId === c.id} onSelect={() => setSelectedChatId(c.id)} delay={idx * 0.03} />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* right: viewer */}
          <div className="p-4 min-h-[60vh]">
            {selectedChatId ? (
              <div className="h-full rounded-md border border-slate-100 overflow-hidden">
                {/* TeamChat will fetch message history for chatId and connect to socket; pass currentUser so optimistic messages/sender info works */}
                {/* @ts-ignore */}
                <TeamChat chatId={selectedChatId} currentUser={currentUser ?? { id: "unknown" }} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Select a chat to begin</h3>
                <p className="text-sm">Pick a team group chat or a direct thread to start messaging.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
