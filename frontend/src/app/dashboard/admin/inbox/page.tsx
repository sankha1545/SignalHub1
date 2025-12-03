// src/app/dashboard/admin/inbox/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  Inbox as InboxIcon,
  Clock,
  UserCheck,
  MailOpen,
  User,
} from "lucide-react";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

// Dynamically import the TeamChat and ChatList components (client-only UI)
const TeamChat = dynamic(
  () => import("@/components/chat/TeamChat").then((m) => m.default),
  { ssr: false }
);
const ChatList = dynamic(
  () => import("@/components/chat/ChatList").then((m) => m.default),
  { ssr: false }
);

// NOTE: `name` here is already a per-user chat title coming from /api/chats:
// - For TEAM chats → team name / "Team: <name>"
// - For DIRECT chats → the OTHER participant's name/email for this logged-in user
type ChatSummary = {
  id: string;
  name: string;
  type?: "team" | "direct";
  teamId?: string | null;
  lastMessagePreview?: string | null;
  unreadCount?: number;
  meta?: any;
};

type UserType = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

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

export default function TeamInboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [filter, setFilter] = useState<
    "all" | "assigned" | "unassigned" | "flagged"
  >("all");

  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  // socket provider
  const chatSocket = useChatSocket();

  async function loadChats() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const payload = (json?.chats ?? []) as ChatSummary[];
      setChats(payload);
      if (!selectedChatId && payload.length > 0) {
        setSelectedChatId(payload[0].id);
      }
    } catch (err: any) {
      console.warn("Failed to load chats:", err);
      setError("Could not load chats");
      setChats([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadCurrentUser() {
    try {
      const res = await fetch("/api/me", { credentials: "same-origin" });
      if (!res.ok) return;
      const j = await res.json();
      if (j?.user) setCurrentUser(j.user);
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    loadCurrentUser();
    loadChats();

    const handleTeamCreated = (payload: any) => {
      const newChat =
        payload?.chat ??
        (payload?.team
          ? {
              id: payload.team.id,
              name: payload.team.name,
              teamId: payload.team.id,
            }
          : null);
      if (!newChat) return;

      setChats((prev) => {
        if (prev.find((c) => c.id === newChat.id)) return prev;
        return [
          {
            id: newChat.id,
            name: newChat.name ?? `Team ${newChat.teamId ?? ""}`,
            type: "team",
            teamId: newChat.teamId ?? null,
            lastMessagePreview: null,
            unreadCount: 0,
          },
          ...prev,
        ];
      });
    };

    const handleChatMessage = (payload: any) => {
      const chatId = payload?.chatId ?? payload?.chat?.id ?? null;
      if (!chatId) return;
      const text = payload?.message?.content ?? "";
      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== chatId) return c;
          return {
            ...c,
            lastMessagePreview:
              text.length > 120 ? text.slice(0, 120) + "…" : text,
            unreadCount: (c.unreadCount ?? 0) + 1,
          };
        })
      );
    };

    try {
      chatSocket.on("team:created", handleTeamCreated);
      chatSocket.on("chat:message", handleChatMessage);
    } catch (e) {
      console.warn("chatSocket hook registration failed:", e);
    }

    return () => {
      try {
        chatSocket.off("team:created", handleTeamCreated);
        chatSocket.off("chat:message", handleChatMessage);
      } catch {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatSocket]);

  // join selected chat and persist read
  useEffect(() => {
    if (!selectedChatId) return;

    (async () => {
      try {
        if (chatSocket && typeof chatSocket.joinChat === "function") {
          await chatSocket.joinChat(selectedChatId);
        }
      } catch {
        // ignore
      }

      // clear unread locally for immediate feedback
      setChats((prev) =>
        prev.map((c) =>
          c.id === selectedChatId ? { ...c, unreadCount: 0 } : c
        )
      );

      // persist read
      try {
        await fetch(
          `/api/chats/${encodeURIComponent(selectedChatId)}/read`,
          {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (err) {
        console.warn("Failed to persist read state:", err);
      }
    })();

    return () => {
      (async () => {
        try {
          if (chatSocket && typeof chatSocket.leaveChat === "function") {
            await chatSocket.leaveChat(selectedChatId);
          }
        } catch {
          // ignore
        }
      })();
    };
  }, [selectedChatId, chatSocket]);

  const filteredChats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chats.filter((c) => {
      const matchesSearch =
        q === "" ||
        c.name.toLowerCase().includes(q) ||
        (c.lastMessagePreview ?? "").toLowerCase().includes(q);
      const matchesFilter = filter === "all"; // expand filter logic as needed
      return matchesSearch && matchesFilter;
    });
  }, [chats, searchQuery, filter]);

  const unreadCount = chats.reduce(
    (acc, c) => acc + (c.unreadCount ?? 0),
    0
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Team Inbox
              </h1>

              {unreadCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg"
                >
                  {unreadCount}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>Team view</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserCheck className="w-4 h-4" />
                <span>{/* assignedCount placeholder */} assigned</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MailOpen className="w-4 h-4" />
                <span>{/* totalCount placeholder */} total</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">
            Manage incoming customer messages for your team. Use the left pane
            to pick a team or direct thread.
          </p>
        </header>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          {/* LEFT PANE: chat list */}
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
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("assigned")}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "assigned"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  Assigned
                </button>
                <button
                  onClick={() => setFilter("unassigned")}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "unassigned"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  Unassigned
                </button>
                <button
                  onClick={() => setFilter("flagged")}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    filter === "flagged"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  Flagged
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
                ) : filteredChats.length === 0 ? (
                  <div className="py-8 text-center text-sm text-slate-500">
                    No chats found — invite users or create a team to start a
                    chat.
                    <div className="mt-3">
                      <a
                        href="/dashboard/manager/overview"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm"
                      >
                        Create a team or invite members
                      </a>
                    </div>
                  </div>
                ) : (
                  filteredChats.map((c) => (
                    <div key={c.id} className="transition-all">
                      <div
                        onClick={() => setSelectedChatId(c.id)}
                        role="button"
                        tabIndex={0}
                        className={`p-3 rounded-xl border cursor-pointer mb-2 ${
                          selectedChatId === c.id
                            ? "bg-blue-50 border-blue-200 shadow-md"
                            : "bg-white border-slate-200 hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                            <User className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-slate-800 truncate">
                                {c.name}
                              </h3>
                              <div className="text-xs text-slate-400">
                                <Clock className="w-3 h-3 inline" />
                              </div>
                            </div>
                            <p className="text-xs text-slate-600 truncate">
                              {c.lastMessagePreview ?? "No messages yet"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANE: chat view */}
          <div className="p-4 min-h-[60vh]">
            {selectedChatId ? (
              <div className="h-full rounded-md border border-slate-100 overflow-hidden">
                {/* @ts-ignore - TeamChat expects these props at runtime */}
                <TeamChat
                  chatId={selectedChatId}
                  currentUser={currentUser ?? { id: "me" }}
                />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">
                  Select a chat to begin
                </h3>
                <p className="text-sm">
                  Pick a team group chat or a direct thread to start messaging.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
