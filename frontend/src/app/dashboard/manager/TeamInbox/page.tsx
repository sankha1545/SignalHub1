// src/app/dashboard/manager/inbox/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Inbox,
  Search,
  MessageSquare,
  Clock,
  User,
  Users,
  Tag,
  CheckSquare,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Send,
  Edit2,
  X,
  Loader2,
  Paperclip,
} from "lucide-react";

/**
 * Manager Team Inbox page
 *
 * Expected endpoints (defensive parsing):
 * - GET  /api/dashboard/teams                      -> list of teams
 * - GET  /api/dashboard/teams/:id/members         -> team members for assignee dropdown
 * - GET  /api/dashboard/manager/inbox?teamId=...  -> { threads: [...], nextCursor? }
 * - GET  /api/threads/:threadId/messages         -> { messages: [...] }
 * - POST /api/threads/:threadId/reply            -> { ok: true, message }
 * - POST /api/threads/:threadId/assign           -> { ok: true }
 * - POST /api/threads/:threadId/resolve          -> { ok: true }
 *
 * The UI is resilient to missing endpoints and presents friendly fallbacks.
 */

/* ---------- small helpers & types ---------- */
type ThreadSummary = {
  id: string;
  contactName?: string;
  contactPhone?: string | null;
  subject?: string | null;
  preview?: string | null;
  channel?: string | null;
  unreadCount?: number;
  lastAt?: string | Date | null;
  assigneeId?: string | null;
  priority?: "low" | "normal" | "high" | null;
};

type Message = {
  id: string;
  senderName?: string | null; // contact or user
  senderId?: string | null;
  direction?: "INBOUND" | "OUTBOUND";
  body?: string;
  createdAt?: string | Date | null;
  attachments?: Array<{ name: string; url?: string }>;
};

type Team = { id: string; name: string };

/* ---------- UI small components ---------- */
function SkeletonRow() {
  return (
    <div className="animate-pulse flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
      <div className="w-10 h-10 bg-slate-100 rounded" />
      <div className="flex-1">
        <div className="h-3 bg-slate-100 w-1/2 rounded mb-2" />
        <div className="h-3 bg-slate-100 w-3/4 rounded" />
      </div>
    </div>
  );
}

function formatTime(t?: string | Date | null) {
  if (!t) return "";
  const d = typeof t === "string" ? new Date(t) : t;
  if (Number.isNaN(d.getTime?.())) return "";
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return d.toLocaleDateString();
}

/* ---------- Main page ---------- */
export default function TeamInboxPage(): JSX.Element {
  // teams (left selector)
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsLoading, setTeamsLoading] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  // threads (list)
  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [threadsLoading, setThreadsLoading] = useState(false);
  const [threadsError, setThreadsError] = useState<string | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  // selected thread
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState<string | null>(null);

  // members (for assign dropdown)
  const [members, setMembers] = useState<Array<{ id: string; name: string }>>([]);
  const [membersLoading, setMembersLoading] = useState(false);

  // search & filters
  const [query, setQuery] = useState("");
  const [channelFilter, setChannelFilter] = useState<string | null>(null);
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  // composer
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const replyRef = useRef<HTMLTextAreaElement | null>(null);

  // UI states
  const [toast, setToast] = useState<string | null>(null);
  const [busyThreadAction, setBusyThreadAction] = useState<string | null>(null); // threadId being acted on

  // initial load: teams
  useEffect(() => {
    let mounted = true;
    setTeamsLoading(true);
    (async () => {
      try {
        const res = await fetch("/api/dashboard/teams", { credentials: "same-origin" });
        if (!res.ok) {
          // fallback: no teams
          throw new Error("Unable to load teams");
        }
        const j = await res.json();
        const list = Array.isArray(j) ? j : j?.teams ?? [];
        if (mounted) {
          setTeams(list);
          if (list.length > 0) setSelectedTeamId((id) => id ?? list[0].id);
        }
      } catch (err) {
        if (mounted) {
          setTeams([]);
        }
      } finally {
        if (mounted) setTeamsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // load threads when team or filters change
  useEffect(() => {
    let mounted = true;
    if (!selectedTeamId) {
      setThreads([]);
      return;
    }
    setThreadsLoading(true);
    setThreadsError(null);
    setNextCursor(null);
    (async () => {
      try {
        const params = new URLSearchParams();
        params.set("teamId", selectedTeamId);
        if (query) params.set("q", query);
        if (channelFilter) params.set("channel", channelFilter);
        if (unreadOnly) params.set("unread", "1");
        if (priorityFilter) params.set("priority", priorityFilter);

        const res = await fetch(`/api/dashboard/manager/inbox?${params.toString()}`, { credentials: "same-origin" });
        if (!res.ok) throw new Error("Failed to load threads");
        const j = await res.json();
        const list = j?.threads ?? (Array.isArray(j) ? j : []);
        const cursor = j?.nextCursor ?? null;
        if (mounted) {
          setThreads(list);
          setNextCursor(cursor);
          // auto-select first thread if none selected
          if (!selectedThreadId && Array.isArray(list) && list.length > 0) setSelectedThreadId(list[0].id);
        }
      } catch (err: any) {
        if (mounted) {
          setThreads([]);
          setThreadsError(err?.message || "Could not fetch threads");
        }
      } finally {
        if (mounted) setThreadsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [selectedTeamId, query, channelFilter, unreadOnly, priorityFilter]);

  // load members for assignees when team selected
  useEffect(() => {
    let mounted = true;
    if (!selectedTeamId) {
      setMembers([]);
      return;
    }
    setMembersLoading(true);
    (async () => {
      try {
        const res = await fetch(`/api/dashboard/teams/${encodeURIComponent(selectedTeamId)}/members`, { credentials: "same-origin" });
        if (!res.ok) {
          // try alt endpoint
          const alt = await fetch(`/api/dashboard/teams/members?teamId=${encodeURIComponent(selectedTeamId)}`, { credentials: "same-origin" });
          if (!alt.ok) throw new Error("Members fetch failed");
          const aj = await alt.json();
          const altList = Array.isArray(aj) ? aj : aj?.members ?? [];
          if (mounted) setMembers(altList);
          return;
        }
        const j = await res.json();
        const list = Array.isArray(j) ? j : j?.members ?? [];
        if (mounted) setMembers(list);
      } catch {
        if (mounted) setMembers([]);
      } finally {
        if (mounted) setMembersLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [selectedTeamId]);

  // load messages when selected thread changes
  useEffect(() => {
    let mounted = true;
    if (!selectedThreadId) {
      setMessages([]);
      return;
    }
    setMessagesLoading(true);
    setMessagesError(null);
    (async () => {
      try {
        const res = await fetch(`/api/threads/${encodeURIComponent(selectedThreadId)}/messages`, { credentials: "same-origin" });
        if (!res.ok) throw new Error("Failed to load messages");
        const j = await res.json();
        const list = j?.messages ?? (Array.isArray(j) ? j : []);
        if (mounted) setMessages(list);
        // optional: mark thread as read via endpoint (not implemented here)
      } catch (err: any) {
        if (mounted) {
          setMessages([]);
          setMessagesError(err?.message || "Could not fetch messages");
        }
      } finally {
        if (mounted) setMessagesLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [selectedThreadId]);

  /* ---------- actions ---------- */
  async function sendReply() {
    if (!selectedThreadId) {
      setToast("Select a thread to reply to.");
      setTimeout(() => setToast(null), 1800);
      return;
    }
    if (!replyText.trim()) {
      setToast("Write a reply before sending.");
      setTimeout(() => setToast(null), 1400);
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`/api/threads/${encodeURIComponent(selectedThreadId)}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ body: replyText }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j?.message || "Failed to send reply");
      // optimistic append
      const newMsg: Message = {
        id: j?.message?.id ?? `local-${Date.now()}`,
        senderName: "You",
        direction: "OUTBOUND",
        body: replyText,
        createdAt: new Date().toISOString(),
      };
      setMessages((m) => [...(m ?? []), newMsg]);
      // clear composer
      setReplyText("");
      // refresh thread preview in list (simple local update)
      setThreads((t) => t.map((th) => (th.id === selectedThreadId ? { ...th, preview: replyText, lastAt: new Date().toISOString(), unreadCount: 0 } : th)));
      setToast("Message sent");
      setTimeout(() => setToast(null), 1500);
    } catch (err: any) {
      setToast(err?.message || "Failed to send message");
      setTimeout(() => setToast(null), 2500);
    } finally {
      setSending(false);
    }
  }

  async function assignThread(threadId: string, assigneeId: string | null) {
    setBusyThreadAction(threadId);
    try {
      const res = await fetch(`/api/threads/${encodeURIComponent(threadId)}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ assigneeId }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j?.message || "Failed to assign");
      // update locally
      setThreads((t) => t.map((th) => (th.id === threadId ? { ...th, assigneeId } : th)));
      setToast("Assignee updated");
      setTimeout(() => setToast(null), 1400);
    } catch (err: any) {
      setToast(err?.message || "Could not assign");
      setTimeout(() => setToast(null), 2200);
    } finally {
      setBusyThreadAction(null);
    }
  }

  async function resolveThread(threadId: string) {
    setBusyThreadAction(threadId);
    try {
      const res = await fetch(`/api/threads/${encodeURIComponent(threadId)}/resolve`, {
        method: "POST",
        credentials: "same-origin",
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || "Failed to resolve");
      }
      // remove thread from local list (simple UX)
      setThreads((t) => t.filter((th) => th.id !== threadId));
      if (selectedThreadId === threadId) {
        setSelectedThreadId(null);
        setMessages([]);
      }
      setToast("Thread marked resolved");
      setTimeout(() => setToast(null), 1400);
    } catch (err: any) {
      setToast(err?.message || "Could not resolve thread");
      setTimeout(() => setToast(null), 2200);
    } finally {
      setBusyThreadAction(null);
    }
  }

  async function loadMoreThreads() {
    if (!nextCursor || !selectedTeamId) return;
    try {
      const params = new URLSearchParams();
      params.set("teamId", selectedTeamId);
      params.set("cursor", nextCursor);
      if (query) params.set("q", query);
      const res = await fetch(`/api/dashboard/manager/inbox?${params.toString()}`, { credentials: "same-origin" });
      if (!res.ok) throw new Error("Failed to load more");
      const j = await res.json();
      const list = j?.threads ?? (Array.isArray(j) ? j : []);
      const cursor = j?.nextCursor ?? null;
      setThreads((t) => [...t, ...list]);
      setNextCursor(cursor);
    } catch (err: any) {
      setToast(err?.message || "Could not load more threads");
      setTimeout(() => setToast(null), 1800);
    }
  }

  /* ---------- derived lists ---------- */
  const filteredThreads = useMemo(() => {
    // additional client-side filter to supplement server-side filters (search within preview)
    if (!query) return threads;
    return threads.filter((th) => {
      const q = query.toLowerCase();
      return (th.contactName ?? "").toLowerCase().includes(q) || (th.preview ?? "").toLowerCase().includes(q) || (th.subject ?? "").toLowerCase().includes(q);
    });
  }, [threads, query]);

  /* ---------- render ---------- */
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">T</div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Team inbox</h1>
              <p className="text-sm text-slate-500">Manage inbound conversations, assign owners, and reply to customers.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedTeamId ?? ""}
              onChange={(e) => setSelectedTeamId(e.target.value || null)}
              className="px-3 py-2 border rounded-md bg-white text-sm"
            >
              {teamsLoading ? <option>Loading teams…</option> : teams.length === 0 ? <option>No teams</option> : teams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>

            <div className="flex items-center gap-2 bg-white rounded-lg border px-2 py-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                placeholder="Search conversations"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <select value={channelFilter ?? ""} onChange={(e) => setChannelFilter(e.target.value || null)} className="px-2 py-2 border rounded-md text-sm bg-white">
                <option value="">All channels</option>
                <option value="SMS">SMS</option>
                <option value="WHATSAPP">WhatsApp</option>
                <option value="EMAIL">Email</option>
                <option value="TWITTER">Twitter</option>
              </select>

              <button
                onClick={() => {
                  setUnreadOnly((s) => !s);
                }}
                className={`px-3 py-2 rounded-md text-sm ${unreadOnly ? "bg-indigo-600 text-white" : "bg-white border"}`}
              >
                Unread
              </button>
            </div>
          </div>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* left column: thread list */}
          <div className="lg:col-span-1 bg-white border rounded-2xl p-3 shadow-sm">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="text-sm text-slate-600">Conversations</div>
              <div className="text-xs text-slate-400">{threads.length} threads</div>
            </div>

            <div className="space-y-2 max-h-[68vh] overflow-auto pr-2">
              {threadsLoading ? (
                <>
                  <SkeletonRow />
                  <SkeletonRow />
                  <SkeletonRow />
                </>
              ) : threadsError ? (
                <div className="text-sm text-rose-600 p-3">{threadsError}</div>
              ) : filteredThreads.length === 0 ? (
                <div className="p-6 text-sm text-slate-500">No conversations match your filters.</div>
              ) : (
                filteredThreads.map((th) => {
                  const isActive = th.id === selectedThreadId;
                  return (
                    <motion.div
                      key={th.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      onClick={() => setSelectedThreadId(th.id)}
                      className={`cursor-pointer p-3 rounded-lg flex items-start gap-3 ${isActive ? "bg-slate-50 border border-slate-100" : "hover:bg-slate-50"}`}
                    >
                      <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 font-semibold">
                        {th.contactName ? th.contactName.charAt(0).toUpperCase() : "C"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm font-medium text-slate-800 truncate">{th.contactName ?? th.contactPhone ?? "Unknown"}</div>
                          <div className="text-xs text-slate-400">{formatTime(th.lastAt)}</div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="text-xs text-slate-500 truncate flex-1">{th.preview ?? th.subject ?? "No preview available"}</div>
                          {th.unreadCount ? <div className="text-xs bg-rose-500 text-white rounded px-2 py-0.5">{th.unreadCount}</div> : null}
                        </div>

                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                          <div className="flex items-center gap-1">
                            <Inbox className="w-3 h-3" /> {th.channel ?? "channel"}
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {th.priority ?? "normal"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {nextCursor && (
              <div className="mt-3 text-center">
                <button onClick={loadMoreThreads} className="px-3 py-2 rounded-md bg-white border text-sm">Load more</button>
              </div>
            )}
          </div>

          {/* right column: thread detail */}
          <div className="lg:col-span-2 bg-white border rounded-2xl p-4 shadow-sm flex flex-col min-h-[60vh]">
            {!selectedThreadId ? (
              <div className="flex-1 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <MessageSquare className="mx-auto w-10 h-10 text-slate-300" />
                  <div className="mt-3">Select a conversation to view messages and reply.</div>
                </div>
              </div>
            ) : (
              <>
                {/* thread header */}
                <div className="flex items-start justify-between gap-4 border-b pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
                      {threads.find((t) => t.id === selectedThreadId)?.contactName?.charAt(0).toUpperCase() ?? "C"}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-800 truncate">{threads.find((t) => t.id === selectedThreadId)?.contactName ?? "Unknown contact"}</div>
                      <div className="text-xs text-slate-500">{threads.find((t) => t.id === selectedThreadId)?.contactPhone ?? "No contact"}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-xs text-slate-500">Assignee</div>
                    <div>
                      <select
                        value={threads.find((t) => t.id === selectedThreadId)?.assigneeId ?? ""}
                        onChange={(e) => assignThread(selectedThreadId, e.target.value || null)}
                        className="px-2 py-1 border rounded-md text-sm bg-white"
                        disabled={membersLoading || !!busyThreadAction}
                      >
                        <option value="">Unassigned</option>
                        {membersLoading ? <option>Loading…</option> : members.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                      </select>
                    </div>

                    <button
                      onClick={() => resolveThread(selectedThreadId)}
                      disabled={!!busyThreadAction}
                      className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm"
                    >
                      {busyThreadAction === selectedThreadId ? "Processing..." : "Mark resolved"}
                    </button>
                  </div>
                </div>

                {/* messages list */}
                <div className="flex-1 overflow-auto py-4 pr-4 space-y-4">
                  {messagesLoading ? (
                    <>
                      <div className="space-y-3">
                        <div className="w-1/2 h-8 bg-slate-100 rounded" />
                        <div className="w-3/4 h-8 bg-slate-100 rounded" />
                        <div className="w-1/3 h-8 bg-slate-100 rounded" />
                      </div>
                    </>
                  ) : messagesError ? (
                    <div className="text-sm text-rose-600">{messagesError}</div>
                  ) : messages.length === 0 ? (
                    <div className="text-sm text-slate-500">No messages in this conversation yet.</div>
                  ) : (
                    messages.map((m) => {
                      const isOutbound = m.direction === "OUTBOUND";
                      return (
                        <div key={m.id} className={`flex ${isOutbound ? "justify-end" : "justify-start"} px-2`}>
                          <div className={`${isOutbound ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-800"} rounded-lg p-3 max-w-[78%]`}>
                            {m.body && <div className="whitespace-pre-wrap">{m.body}</div>}
                            {m.attachments?.length ? (
                              <div className="mt-2 flex gap-2">
                                {m.attachments.map((a, i) => (
                                  <a key={i} href={a.url ?? "#"} className="text-xs px-2 py-1 bg-white/30 rounded flex items-center gap-2" target="_blank" rel="noreferrer">
                                    <Paperclip className="w-3 h-3" /> {a.name}
                                  </a>
                                ))}
                              </div>
                            ) : null}
                            <div className="text-xs text-slate-300 mt-2 text-right">{formatTime(m.createdAt)}</div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* composer */}
                <div className="border-t pt-3">
                  <div className="flex items-start gap-3">
                    <textarea
                      ref={replyRef}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply..."
                      className="flex-1 min-h-[72px] max-h-[200px] p-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />

                    <div className="w-36 flex flex-col gap-2">
                      <button
                        onClick={() => sendReply()}
                        disabled={sending}
                        className="inline-flex items-center gap-2 justify-center px-3 py-2 rounded-md bg-indigo-600 text-white"
                      >
                        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Send
                      </button>

                      <button
                        onClick={() => {
                          // quick template or snooze action
                          setReplyText((s) => (s ? "" : "Thanks for reaching out — we'll get back to you shortly."));
                        }}
                        className="px-3 py-2 rounded-md border text-sm"
                      >
                        Template
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* bottom sticky toast */}
        {toast && (
          <div className="fixed right-6 bottom-6 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md shadow">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
