// src/app/dashboard/admin/teams/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  Plus,
  MoreVertical,
  Mail,
  Crown,
  Star,
  Settings,
  TrendingUp,
  Activity,
  Award,
  Target,
  Edit,
  Trash2,
  MessageSquare,
  X,
  Minimize2,
  Maximize2,
} from "lucide-react";
import CreateTeamForm from "@/app/ui/forms/create-team/page";
import ScheduleMeetingForm from "@/app/ui/forms/Schedule-meeting/page";
import Modal from "@/components/ui/modal"; // shared Modal (backdrop + panel)

/* ----------------- Helpers ----------------- */
function safeParseListResponse(j: any) {
  if (!j) return [];
  if (Array.isArray(j)) return j;
  if (Array.isArray(j.teams)) return j.teams;
  if (Array.isArray(j.users)) return j.users;
  if (Array.isArray(j.data)) return j.data;
  return [];
}
function uidFromTeam(team: any, idx: number) {
  return team?.id ?? `team_tmp_${idx}_${(team?.name ?? "unknown").slice(0, 6)}`;
}

/* ==================== ChatWidget component ====================
   - single admin widget instance (one open at a time)
   - minimized floating panel with Close / Maximize
   - maximized overlay with full chat + members pane
   - responsive for small and large screens
*/
function ChatWidget({
  state,
  onClose,
  onUpdateState,
}: {
  state: { opened: boolean; maximized: boolean; team: any | null } | null;
  onClose: () => void;
  onUpdateState: (s: { opened: boolean; maximized: boolean; team: any | null } | null) => void;
}) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const team = state?.team ?? null;
  const opened = !!state?.opened;
  const maximized = !!state?.maximized;

  // Load recent messages when opened or when maximized/team changes
  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!opened || !team) {
        setMessages([]);
        return;
      }
      setLoading(true);
      try {
        // Try API: /api/chats?teamId=...
        const q = new URLSearchParams({ teamId: team.id });
        const res = await fetch(`/api/chats?${q.toString()}`, { credentials: "same-origin" });
        if (res.ok) {
          const j = await res.json().catch(() => null);
          // accept several shapes: { ok:true, chats:[{messages:[]}] } or { ok:true, messages: [] }
          if (j?.ok && Array.isArray(j.chats) && j.chats.length > 0) {
            const chat = j.chats[0];
            if (mounted) setMessages((chat.messages ?? []).slice(-200));
          } else if (j?.ok && Array.isArray(j.messages)) {
            if (mounted) setMessages(j.messages.slice(-200));
          } else {
            // fallback empty
            if (mounted) setMessages([]);
          }
        } else {
          if (mounted) setMessages([]);
        }
      } catch (e) {
        console.warn("Chat load failed:", e);
        if (mounted) setMessages([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [opened, team]);

  if (!opened || !team) return null;

  async function sendMessage() {
    const body = input.trim();
    if (!body) return;
    // optimistic append
    const optimistic = {
      id: `tmp-${Date.now()}`,
      body,
      createdAt: new Date().toISOString(),
      sender: { id: "admin", name: "You" },
      direction: "OUTBOUND",
    };
    setMessages((m) => [...m, optimistic]);
    setInput("");

    try {
      const res = await fetch(`/api/chats`, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamId: team.id, body }),
      });
      if (res.ok) {
        const j = await res.json().catch(() => null);
        // if server returns message or messages merge them
        if (j?.message) {
          setMessages((m) => [...m.slice(0, -1), j.message]);
        } else if (Array.isArray(j?.messages)) {
          setMessages((m) => [...m.slice(0, -1), ...j.messages]);
        }
      } else {
        // try alternative POST to /api/chats/:chatId if team id is used as chatId
        await fetch(`/api/chats/${encodeURIComponent(team.id)}`, {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ body }),
        }).catch(() => null);
      }
    } catch (e) {
      console.warn("send failed:", e);
    }
  }

  // UI pieces
  const MinimizedWidget = (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      className="fixed right-4 bottom-4 z-50 w-80 sm:w-[360px] md:w-96"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{team.name}</div>
              <div className="text-xs text-slate-500">Team chat</div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onUpdateState({ opened: true, maximized: true, team })}
              title="Maximize"
              className="p-2 rounded hover:bg-slate-100"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onClose()}
              title="Close"
              className="p-2 rounded hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-3 max-h-48 overflow-auto bg-white">
          {loading ? (
            <div className="text-xs text-slate-500">Loading messages…</div>
          ) : messages.length === 0 ? (
            <div className="text-xs text-slate-500">No recent messages</div>
          ) : (
            <ul className="space-y-2">
              {messages.slice(-6).map((m, idx) => (
                <li key={m.id ?? idx} className={`text-sm ${m.direction === "INBOUND" ? "text-slate-700" : "text-right text-slate-800"}`}>
                  <div className="inline-block max-w-[80%] break-words bg-slate-50 px-3 py-1.5 rounded-md text-xs">
                    {m.body ?? m.preview ?? m.text}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{new Date(m.createdAt || Date.now()).toLocaleTimeString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-3 border-t border-slate-100 bg-white">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Write a message..."
              className="flex-1 px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none"
            />
            <button onClick={sendMessage} className="px-3 py-2 rounded-md bg-blue-500 text-white text-sm">Send</button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const MaximizedOverlay = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/40" onClick={() => onUpdateState({ opened: true, maximized: false, team })} />
      <motion.div
        initial={{ y: 20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 12, scale: 0.98 }}
        transition={{ duration: 0.12 }}
        className="relative z-70 w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-2xl border overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{team.name}</div>
              <div className="text-xs text-slate-500">Team chat — Admin</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateState({ opened: true, maximized: false, team })}
              title="Minimize"
              className="p-2 rounded hover:bg-slate-100"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button onClick={() => onClose()} title="Close" className="p-2 rounded hover:bg-slate-100">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 overflow-hidden">
          <div className="md:col-span-2 flex flex-col border rounded-lg overflow-hidden">
            <div className="flex-1 overflow-auto p-4" style={{ minHeight: 0 }}>
              {messages.length === 0 ? (
                <div className="text-sm text-slate-500">No messages yet. Use the composer to send the first message.</div>
              ) : (
                <ul className="space-y-3">
                  {messages.map((m) => (
                    <li key={m.id} className={`flex ${m.direction === "INBOUND" ? "justify-start" : "justify-end"}`}>
                      <div className={`${m.direction === "INBOUND" ? "bg-slate-50 text-slate-800" : "bg-blue-500 text-white"} px-4 py-2 rounded-lg max-w-[80%]`}>
                        {m.body ?? m.text ?? m.preview}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex gap-2 items-center">
                <textarea
                  rows={2}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write a message to the team..."
                  className="flex-1 p-3 rounded-lg border border-slate-200 resize-none focus:outline-none"
                />
                <div className="flex flex-col gap-2">
                  <button onClick={sendMessage} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Send</button>
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-1 border rounded-lg p-3 overflow-auto">
            <h4 className="text-sm font-semibold mb-2">Members</h4>
            <ul className="space-y-2">
              {(team.members ?? []).map((m: any, idx: number) => {
                const user = m?.user ?? {};
                return (
                  <li key={m.id ?? user.id ?? idx} className="flex items-center justify-between">
                    <div className="min-w-0">
                      <div className="text-sm truncate">{user.name ?? m.name}</div>
                      {user.email && <div className="text-xs text-slate-500 truncate">{user.email}</div>}
                    </div>
                    <div className="text-xs text-slate-500">{m.role ?? "Member"}</div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {!maximized ? MinimizedWidget : MaximizedOverlay}
    </AnimatePresence>
  );
}

/* ----------------- TeamCard ----------------- */
/* - includes Message button that opens chat widget (through props) */
/* ----------------- TeamCard (responsive actions + overflow fix) ----------------- */
const TeamCard = ({ team, delay = 0, onOpenSchedule, onEdit, onDelete, onViewMembers, onMessage }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMenuOpen(false);
      }}
      className="relative p-6 pb-8 bg-white rounded-2xl flex flex-col justify-between shadow-md overflow-visible"
      role="group"
    >
      {/* top-right actions menu */}
      <div className="absolute right-4 top-3 z-40">
        <div className="relative">
          <button
            type="button"
            aria-label="Open team menu"
            className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((s) => !s);
            }}
          >
            <MoreVertical className="w-5 h-5 text-slate-600" />
          </button>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(false);
                  onEdit?.(team);
                }}
              >
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button
                type="button"
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-rose-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(false);
                  onDelete?.(team);
                }}
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* content */}
      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient ?? "from-blue-500 to-cyan-500"} flex items-center justify-center shadow-md flex-shrink-0`}
            animate={isHovered ? { scale: 1.03, rotate: 4 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
            aria-hidden
          >
            <Users className="w-7 h-7 text-white" />
          </motion.div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-slate-800 leading-tight truncate">{team.name}</h3>
            <p className="text-sm text-slate-500 mt-1 truncate">{team.description ?? ""}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {team.manager?.name && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">
              <Crown className="w-3.5 h-3.5" />
              {team.manager.name}
            </div>
          )}
          {team.featured && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
              <Star className="w-3.5 h-3.5" />
              Featured
            </div>
          )}
        </div>

        <div className="flex -space-x-2 mb-4 flex-wrap">
          {(team.members ?? []).slice(0, 5).map((member: any, idx: number) => {
            const key = member?.user?.id ?? member?.id ?? `m_${idx}`;
            const title = member?.user?.name ?? member?.name ?? "";
            const initials =
              member?.user?.name
                ? member.user.name.split(" ").map((p: string) => p[0]).slice(0, 2).join("")
                : (title ? title.slice(0, 2).toUpperCase() : "U");
            return (
              <div
                key={key}
                title={title}
                className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm"
              >
                {initials}
              </div>
            );
          })}
          {(team.members ?? []).length > 5 && (
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600">
              +{team.members.length - 5}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <p className="text-2xl font-bold text-slate-800">{team.members?.length ?? 0}</p>
            <p className="text-xs text-slate-500">Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{team.projects ?? 0}</p>
            <p className="text-xs text-slate-500">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">{team.completion ?? 0}%</p>
            <p className="text-xs text-slate-500">Complete</p>
          </div>
        </div>
      </div>

      {/* actions area — responsive grid so each action has its own cell (no overlap) */}
      <div className="mt-2 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-stretch">
          {/* Primary action: Schedule Meeting */}
          <button
            type="button"
            onClick={() => onOpenSchedule?.(team)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-medium shadow-md hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Mail className="w-4 h-4" /> Schedule Meeting
          </button>

          {/* Secondary: View Members */}
          <button
            type="button"
            onClick={() => onViewMembers?.(team)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <Settings className="w-4 h-4" /> View Members
          </button>

          {/* Message action */}
          <button
            type="button"
            onClick={() => onMessage?.(team)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <MessageSquare className="w-4 h-4" /> Message
          </button>
        </div>
      </div>
    </motion.div>
  );
};



/* ----------------- StatCard ----------------- */
const StatCard = ({ icon: Icon, label, value, subtitle, gradient, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <TrendingUp className="w-5 h-5 text-emerald-500" />
    </div>
    <h3 className="text-3xl font-bold text-slate-800 mb-1">{value}</h3>
    <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
    <p className="text-xs text-slate-500">{subtitle}</p>
  </motion.div>
);

/* ----------------- Members Modal (unchanged) ----------------- */
function MembersModal({
  open,
  onClose,
  team,
  onRemove,
}: {
  open: boolean;
  onClose: () => void;
  team: any | null;
  onRemove: (memberId: string, isManager?: boolean) => Promise<void>;
}) {
  if (!team) return null;

  const members = team.members ?? [];
  const manager = team.manager ?? null;
  const total = (members?.length ?? 0) + (manager ? 1 : 0);

  return (
    <Modal open={open} onClose={onClose} ariaLabel={`Members of ${team.name}`} className="max-w-2xl">
      <div className="w-full bg-transparent">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{team.name ?? "Team members"}</h2>
                <p className="text-sm text-slate-500 mt-1">{total} member{total !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3 max-h-[60vh] overflow-auto">
            {manager && (
              <div className="flex items-center justify-between gap-4 bg-white rounded-lg p-3 border-none shadow-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700">
                    {String((manager.name || "").split(" ").map((p: string) => p[0]).slice(0, 2).join("")).toUpperCase() || "M"}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-slate-800 truncate">{manager.name ?? "Manager"}</div>
                    {manager.email && <div className="text-xs text-slate-500 truncate">{manager.email}</div>}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs font-medium px-2 py-1 rounded-full bg-amber-50 text-amber-700">MANAGER</div>
                  <button
                    onClick={() => {
                      if (!confirm(`Remove ${manager.name ?? "this manager"} from team "${team.name}"?`)) return;
                      onRemove(manager.id ?? manager.user?.id ?? manager.userId, true);
                    }}
                    type="button"
                    className="px-3 py-1 rounded-md bg-rose-600 text-white hover:bg-rose-700 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            )}

            {members.length === 0 ? (
              <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-600">No members assigned to this team.</div>
            ) : (
              <ul className="space-y-3">
                {members.map((m: any, idx: number) => {
                  const user = m?.user ?? {};
                  const name = user?.name ?? m?.name ?? `Member ${idx + 1}`;
                  const email = user?.email ?? m?.email ?? "";
                  const role = m?.role ?? m?.assignedRole ?? "Member";
                  const memberId = m?.id ?? user?.id ?? m?.userId ?? String(idx);
                  return (
                    <li key={memberId} className="flex items-center justify-between gap-4 bg-white rounded-lg p-3 border-none shadow-md">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 ">
                          {String(name.split(" ").map((p: string) => p[0]).slice(0, 2).join("")).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-800 truncate">{name}</div>
                          {email && <div className="text-xs text-slate-500 truncate">{email}</div>}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-sm text-slate-600 px-3 py-1 rounded-md bg-slate-50">{role}</div>
                        <button
                          onClick={() => {
                            if (!confirm(`Remove ${name} from team "${team.name}"?`)) return;
                            onRemove(memberId);
                          }}
                          type="button"
                          className="px-3 py-1 rounded-md bg-rose-600 text-white hover:bg-rose-700 flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

/* ----------------- Main Page ----------------- */
export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editTeam, setEditTeam] = useState<any | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<any | null>(null);

  // schedule modal state
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedTeamForSchedule, setSelectedTeamForSchedule] = useState<any | null>(null);

  // members modal state
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [selectedTeamForMembers, setSelectedTeamForMembers] = useState<any | null>(null);

  // chat widget (single instance)
  const [chatState, setChatState] = useState<{ opened: boolean; maximized: boolean; team: any | null } | null>(null);

  // data
  const [teams, setTeams] = useState<any[]>([]);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const [teamsError, setTeamsError] = useState<string | null>(null);

  const [managers, setManagers] = useState<any[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);

  /* -- fetch teams -- */
  useEffect(() => {
    let mounted = true;
    (async () => {
      setTeamsLoading(true);
      setTeamsError(null);
      try {
        const res = await fetch("/api/teams", { credentials: "same-origin" });
        if (!res.ok) {
          const alt = await fetch("/api/dashboard/teams", { credentials: "same-origin" });
          if (!alt.ok) throw new Error("Failed to load teams");
          const altJson = await alt.json().catch(() => null);
          const list = safeParseListResponse(altJson);
          if (mounted) setTeams(list);
        } else {
          const j = await res.json().catch(() => null);
          const list = safeParseListResponse(j);
          if (mounted) setTeams(list);
        }
      } catch (err: any) {
        if (mounted) setTeamsError(err?.message || "Could not fetch teams");
        console.error("[teams] fetch error:", err);
      } finally {
        if (mounted) setTeamsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  /* -- fetch users for selectors -- */
  useEffect(() => {
    let mounted = true;
    (async () => {
      setUsersLoading(true);
      try {
        const [mRes, eRes] = await Promise.all([
          fetch("/api/users?role=MANAGER", { credentials: "same-origin" }),
          fetch("/api/users?role=EMPLOYEE", { credentials: "same-origin" }),
        ]);

        if (mRes.ok) {
          const j = await mRes.json().catch(() => null);
          const list = safeParseListResponse(j);
          if (mounted) setManagers(list);
        } else {
          if (mounted) setManagers([]);
        }

        if (eRes.ok) {
          const j = await eRes.json().catch(() => null);
          const list = safeParseListResponse(j);
          if (mounted) setEmployees(list);
        } else {
          if (mounted) setEmployees([]);
        }
      } catch (err) {
        console.warn("[users] fetch failed:", err);
        if (mounted) {
          setManagers([]);
          setEmployees([]);
        }
      } finally {
        if (mounted) setUsersLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  /* -- filtering -- */
  const filteredTeams = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return teams;
    return teams.filter((team) =>
      (team.name ?? "").toLowerCase().includes(q) ||
      (team.description ?? "").toLowerCase().includes(q) ||
      (team.manager?.name ?? "").toLowerCase().includes(q)
    );
  }, [teams, searchQuery]);

  /* -- create / update handler: accepts either server object (with id) or payload -- */
  async function handleCreateOrUpdateTeam(payloadOrCreated: any, opts?: { isEdit?: boolean; id?: string }) {
    try {
      if (opts?.isEdit && opts.id) {
        const res = await fetch(`/api/teams/${encodeURIComponent(opts.id)}`, {
          method: "PUT",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadOrCreated),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err?.message || `Failed to update team (${res.status})`);
        }
        const json = await res.json().catch(() => null);
        const updated = json?.team ?? json;
        setTeams((prev) =>
          prev.map((t) => (t.id === opts.id ? (updated ? { ...t, ...updated } : { ...t, ...payloadOrCreated }) : t))
        );
        setEditTeam(null);
        setShowCreate(false);
        return;
      }

      if (payloadOrCreated && payloadOrCreated.id) {
        setTeams((prev) => [payloadOrCreated, ...prev]);
        setShowCreate(false);
        return;
      }

      const res = await fetch("/api/teams", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadOrCreated),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || `Failed to create team (${res.status})`);
      }
      const json = await res.json().catch(() => null);
      const created = json?.team ?? json;
      if (created && created.id) {
        setTeams((prev) => [created, ...prev]);
      } else {
        setTeams((prev) => [
          {
            id: `tmp_${Date.now()}`,
            ...payloadOrCreated,
            manager: managers.find((m) => m.id === payloadOrCreated.managerId) ?? null,
            members: (payloadOrCreated.memberUserIds ?? []).map((id: string) => {
              const u = employees.find((e) => e.id === id);
              return { id, user: u ? { id: u.id, name: u.name, email: u.email } : undefined };
            }),
          },
          ...prev,
        ]);
      }
      setShowCreate(false);
    } catch (err: any) {
      console.error("Create/update team error:", err);
      alert("Error: " + (err?.message || "Unknown error"));
    }
  }

  /* -- open create / edit -- */
  function openCreate() {
    setEditTeam(null);
    setShowCreate(true);
  }
  function handleEdit(team: any) {
    setEditTeam(team);
    setShowCreate(true);
  }

  /* -- delete flow -- */
  function handleDeleteRequest(team: any) {
    setConfirmDelete(team);
  }
  async function confirmDeleteNow(team: any) {
    try {
      const res = await fetch(`/api/teams/${encodeURIComponent(team.id)}`, {
        method: "DELETE",
        credentials: "same-origin",
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || `Delete failed (${res.status})`);
      }
      setTeams((prev) => prev.filter((t) => t.id !== team.id));
      setConfirmDelete(null);
    } catch (err: any) {
      console.error("Delete team error:", err);
      alert("Failed to delete team: " + (err?.message || "unknown"));
    }
  }

  /* -- schedule modal handlers -- */
  function openScheduleForTeam(team: any) {
    setSelectedTeamForSchedule(team);
    setShowSchedule(true);
  }
  function handleScheduleMeeting(meeting: any) {
    setSelectedTeamForSchedule(null);
    setShowSchedule(false);
  }

  /* -- members modal handlers -- */
  function openMembersModalForTeam(team: any) {
    setSelectedTeamForMembers(team);
    setShowMembersModal(true);
  }
  function closeMembersModal() {
    setSelectedTeamForMembers(null);
    setShowMembersModal(false);
  }

  /* -- remove member (employee or manager) */
  async function removeMemberFromTeam(memberId: string, isManager = false) {
    if (!selectedTeamForMembers) return;
    const teamId = selectedTeamForMembers.id;
    // optimistic UI update
    setTeams((prev) =>
      prev.map((t) => {
        if (t.id !== teamId) return t;
        if (isManager) {
          return { ...t, manager: null };
        }
        return { ...t, members: (t.members ?? []).filter((m: any) => (m.id ?? m.user?.id ?? m.userId) !== memberId) };
      })
    );
    setSelectedTeamForMembers((prev: any) => {
      if (!prev) return prev;
      if (isManager) {
        return { ...prev, manager: null };
      }
      return { ...prev, members: (prev.members ?? []).filter((m: any) => (m.id ?? m.user?.id ?? m.userId) !== memberId) };
    });

    try {
      const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}/members/${encodeURIComponent(memberId)}`, {
        method: "DELETE",
        credentials: "same-origin",
      });
      if (!res.ok) throw new Error(`Failed to remove member (${res.status})`);
    } catch (err: any) {
      console.error("remove member failed:", err);
      alert("Failed to remove member: " + (err?.message || "unknown"));
      // rollback: refetch teams
      try {
        const r = await fetch("/api/teams", { credentials: "same-origin" });
        const j = await r.json().catch(() => null);
        const list = safeParseListResponse(j);
        setTeams(list);
        const updated = list.find((x: any) => x.id === teamId);
        setSelectedTeamForMembers(updated ?? null);
      } catch (e) {
        console.warn("refetch teams failed:", e);
      }
    }
  }

  /* -- message button handler: open single widget instance, toggle behavior -- */
  function handleOpenMessage(team: any) {
    // If widget already open for same team: toggle maximize off -> minimized or close
    if (chatState && chatState.team?.id === team.id) {
      // toggle open/close
      setChatState((s) => (s ? (s.opened ? null : { opened: true, maximized: false, team }) : { opened: true, maximized: false, team }));
      return;
    }
    // open widget minimized by default
    setChatState({ opened: true, maximized: false, team });
  }

  function handleCloseChat() {
    setChatState(null);
  }

  function handleUpdateChatState(s: { opened: boolean; maximized: boolean; team: any | null } | null) {
    setChatState(s);
  }

  /* -- render -- */
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* header */}
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">Teams</h1>
            <p className="text-slate-500 flex items-center gap-2"><Users className="w-4 h-4" /> Manage and collaborate with your teams</p>
          </motion.div>

          {/* stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <StatCard icon={Users} label="Total Teams" value={String(teams.length)} subtitle="+0 this month" gradient="from-blue-500 to-cyan-500" delay={0} />
            <StatCard icon={Activity} label="Active Members" value={String(teams.reduce((a, t) => a + (t.members?.length ?? 0), 0))} subtitle="Across all teams" gradient="from-emerald-500 to-teal-500" delay={0.05} />
            <StatCard icon={Target} label="Active Projects" value={String(teams.reduce((a, t) => a + (t.projects ?? 0), 0))} subtitle="In progress" gradient="from-violet-500 to-purple-500" delay={0.1} />
            <StatCard icon={Award} label="Avg Completion" value={`${Math.round((teams.reduce((a, t) => a + (t.completion ?? 0), 0) / Math.max(1, teams.length)))}%`} subtitle="+0% from last month" gradient="from-orange-500 to-rose-500" delay={0.15} />
          </div>

          {/* search & create */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm"
              />
            </div>

            <motion.button onClick={() => setShowCreate(true)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl flex items-center gap-2">
              <Plus className="w-4 h-4" /> Create Team
            </motion.button>
          </div>

          {/* teams grid */}
         <div className="
  grid grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-2 
  xl:grid-cols-3 
  gap-6 
  items-start 
  auto-rows-auto
">

            {teamsLoading ? (
              <div className="col-span-full p-6 bg-white rounded-2xl border border-slate-200">Loading teams…</div>
            ) : filteredTeams.length === 0 ? (
              <div className="col-span-full p-6 bg-white rounded-2xl border border-slate-200 text-center">No teams found</div>
            ) : (
              filteredTeams.map((team, i) => (
                <TeamCard
                  key={uidFromTeam(team, i)}
                  team={team}
                  delay={0.18 + i * 0.04}
                  onOpenSchedule={openScheduleForTeam}
                  onEdit={handleEdit}
                  onDelete={handleDeleteRequest}
                  onViewMembers={openMembersModalForTeam}
                  onMessage={handleOpenMessage}
                />
              ))
            )}
          </div>

          {teamsError && <div className="mt-4 text-sm text-rose-600">{teamsError}</div>}
        </div>
      </div>

      {/* create / edit modal */}
      <AnimatePresence>
        {(showCreate || editTeam) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => {
                setShowCreate(false);
                setEditTeam(null);
              }}
            />
            <div className="relative z-10 w-full max-w-2xl p-4">
              <CreateTeamForm
                managers={managers}
                employees={employees}
                loadingUsers={usersLoading}
                initialTeam={editTeam ?? undefined}
                onCreate={(payloadOrCreated: any) => handleCreateOrUpdateTeam(payloadOrCreated)}
                onUpdate={(id: string, payload: any) => handleCreateOrUpdateTeam(payload, { isEdit: true, id })}
                onDelete={(id: string) => {
                  setTeams((prev) => prev.filter((t) => t.id !== id));
                }}
                onClose={() => {
                  setShowCreate(false);
                  setEditTeam(null);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* confirm delete modal */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-60 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} className="absolute inset-0 bg-black/20" onClick={() => setConfirmDelete(null)} />
            <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }} transition={{ duration: 0.12 }} className="relative z-10 w-full max-w-md bg-white rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Delete team?</h3>
              <p className="text-sm text-slate-600 mt-2">This will remove the team and its membership associations. This action cannot be undone.</p>
              <div className="mt-4 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-md" onClick={() => setConfirmDelete(null)} type="button">Cancel</button>
                <button className="px-4 py-2 rounded-md bg-rose-600 text-white" onClick={() => confirmDeleteNow(confirmDelete)} type="button">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* schedule meeting modal */}
      <AnimatePresence>
        {showSchedule && selectedTeamForSchedule && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => { setShowSchedule(false); setSelectedTeamForSchedule(null); }} />
            <div className="relative z-10 w-full max-w-2xl p-4">
              <ScheduleMeetingForm team={selectedTeamForSchedule} onClose={() => { setShowSchedule(false); setSelectedTeamForSchedule(null); }} onSchedule={(m) => handleScheduleMeeting(m)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* members modal */}
      <AnimatePresence>
        {showMembersModal && selectedTeamForMembers && (
          <MembersModal
            key={selectedTeamForMembers.id ?? "members-modal"}
            open={showMembersModal}
            onClose={closeMembersModal}
            team={selectedTeamForMembers}
            onRemove={removeMemberFromTeam}
          />
        )}
      </AnimatePresence>

      {/* Chat widget (single instance) */}
      <ChatWidget state={chatState} onClose={handleCloseChat} onUpdateState={handleUpdateChatState} />
    </>
  );
}
