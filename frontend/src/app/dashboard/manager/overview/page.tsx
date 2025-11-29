// src/app/dashboard/manager/overview/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Clock,
  Clipboard,
  CalendarClock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Search,
  Plus,
  ArrowUpRight,
  Link as LinkIcon,
  MoreHorizontal,
  MessageCircle,
  X,
  UserPlus,
} from "lucide-react";

/**
 * Manager Overview page (rewritten with Invite Employee modal)
 *
 * - Adds "Invite employee" button which opens a modal
 * - Modal collects email (+ optional team) and POSTs to /api/invites/creates
 * - Uses role: "EMPLOYEE" for invites (managers cannot invite managers)
 *
 * Notes:
 * - The server route /api/invites/creates should derive organizationId from session (recommended).
 * - If server does not derive organizationId, you may pass organizationId in the body (less secure).
 */

/* ---------------- StatCard Component ---------------- */
type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  icon: React.ComponentType<any>;
  gradient: string;
  delay?: number;
};

function StatCard({ title, value, change = "", trend = "up", icon: Icon, gradient, delay = 0 }: StatCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
    >
      <div className="p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          </div>
          <motion.div
            animate={hover ? { scale: 1.06, rotate: 6 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow`}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className={`px-2 py-1 rounded ${trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
            {change || (trend === "up" ? "—" : "—")}
          </div>
          <div>vs last month</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Team Member Row ---------------- */
type TeamMember = {
  id: string;
  name: string;
  email?: string;
  role?: string;
  online?: boolean;
  avatarUrl?: string | null;
};

function MemberRow({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-sm">
        {member.name ? member.name.charAt(0).toUpperCase() : "U"}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-800 truncate">{member.name}</div>
            <div className="text-xs text-slate-500 truncate">{member.email ?? "No email"}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`text-xs px-2 py-1 rounded ${member.online ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
              {member.online ? "Online" : "Offline"}
            </div>
            <button title="Message" className="p-1 rounded hover:bg-slate-100">
              <MessageCircle className="w-4 h-4 text-slate-600" />
            </button>
            <button title="More" className="p-1 rounded hover:bg-slate-100">
              <MoreHorizontal className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Schedule Modal ---------------- */
function ScheduleModal({
  open,
  defaultOrganizer,
  defaultTeamId,
  onClose,
  onCreated,
}: {
  open: boolean;
  defaultOrganizer?: string | null;
  defaultTeamId?: string | null;
  onClose: (success?: boolean) => void;
  onCreated?: (payload: any) => void;
}) {
  const [organizer, setOrganizer] = useState(defaultOrganizer ?? "");
  const [datetime, setDatetime] = useState("");
  const [reminder, setReminder] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [teamId, setTeamId] = useState<string | null>(defaultTeamId ?? null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setOrganizer(defaultOrganizer ?? "");
      setDatetime("");
      setReminder(10);
      setTeamId(defaultTeamId ?? null);
      setError(null);
      setLoading(false);
    }
  }, [open, defaultOrganizer, defaultTeamId]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!organizer || !datetime) {
      setError("Provide organizer and date/time.");
      return;
    }
    const dt = new Date(datetime);
    if (Number.isNaN(dt.getTime())) {
      setError("Invalid date/time.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/schedule/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizer, sendAt: dt.toISOString(), reminderMinutes: reminder, teamId }),
        credentials: "same-origin",
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.message || "Failed to schedule");
      }
      onCreated?.(json);
      onClose(true);
    } catch (err: any) {
      setError(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)} />
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.12 }} className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Schedule meeting</h3>
          <button className="p-1 rounded-md hover:bg-slate-100" onClick={() => onClose(false)} aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs text-slate-600">Organizer</label>
            <input value={organizer} onChange={(e) => setOrganizer(e.target.value)} className="w-full mt-1 p-2 border rounded-md text-sm" placeholder="Organizer name or email" />
          </div>

          <div>
            <label className="text-xs text-slate-600">Date & time</label>
            <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} className="w-full mt-1 p-2 border rounded-md text-sm" />
          </div>

          <div>
            <label className="text-xs text-slate-600">Reminder</label>
            <select value={String(reminder)} onChange={(e) => setReminder(Number(e.target.value))} className="w-full mt-1 p-2 border rounded-md text-sm">
              {[10, 20, 30, 40, 50, 60].map((m) => <option key={m} value={m}>{m} minutes before</option>)}
            </select>
            <p className="text-xs text-slate-400 mt-1">Reminder will be scheduled as meeting_time - reminder.</p>
          </div>

          {error && <div className="text-sm text-rose-600">{error}</div>}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={() => onClose(false)} className="px-3 py-1 rounded-md">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded-md bg-indigo-600 text-white">{loading ? "Scheduling…" : "Schedule"}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

/* ---------------- Invite Modal ---------------- */
function InviteModal({
  open,
  defaultTeamId,
  teams,
  onClose,
  onSent,
}: {
  open: boolean;
  defaultTeamId?: string | null;
  teams: Array<{ id: string; name: string }>;
  onClose: (sent?: boolean) => void;
  onSent?: (resp?: any) => void;
}) {
  const [email, setEmail] = useState("");
  const [teamId, setTeamId] = useState<string | null>(defaultTeamId ?? null);
  const [message, setMessage] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setEmail("");
      setTeamId(defaultTeamId ?? null);
      setMessage("");
      setSending(false);
      setError(null);
      setSuccessMsg(null);
    }
  }, [open, defaultTeamId]);

  function isValidEmail(e?: string) {
    if (!e) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  const handleSend = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      const body: any = { email: email.trim().toLowerCase(), role: "EMPLOYEE" };
      if (teamId) body.teamId = teamId;
      if (message) body.message = message;

      const res = await fetch("/api/invites/creates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "same-origin",
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        // surface server message where available
        const msg = json?.message || json?.error || "Failed to send invite.";
        throw new Error(msg);
      }

      setSuccessMsg("Invite sent — the employee will receive an email with the signup link.");
      onSent?.(json);
      // keep modal open briefly to show success, then close
      setTimeout(() => {
        onClose(true);
      }, 900);
    } catch (err: any) {
      setError(err?.message || "Network error");
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)} />
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.12 }} className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white rounded-md p-2"><UserPlus className="w-4 h-4" /></div>
            <h3 className="text-lg font-semibold">Invite employee</h3>
          </div>
          <button className="p-1 rounded-md hover:bg-slate-100" onClick={() => onClose(false)} aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSend} className="space-y-3">
          <div>
            <label className="text-xs text-slate-600">Employee email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="employee@example.com"
              className="w-full mt-1 p-2 border rounded-md text-sm"
              type="email"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Team (optional)</label>
            <select value={teamId ?? ""} onChange={(e) => setTeamId(e.target.value || null)} className="w-full mt-1 p-2 border rounded-md text-sm">
              <option value="">(No team — general invite)</option>
              {teams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
            <p className="text-xs text-slate-400 mt-1">Assign the employee to a team upon signup.</p>
          </div>

          <div>
            <label className="text-xs text-slate-600">Message (optional)</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full mt-1 p-2 border rounded-md text-sm" rows={3} placeholder="Short message that appears in the invite email (optional)" />
          </div>

          {error && <div className="text-sm text-rose-600">{error}</div>}
          {successMsg && <div className="text-sm text-emerald-600">{successMsg}</div>}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={() => onClose(false)} className="px-3 py-1 rounded-md">Cancel</button>
            <button type="submit" disabled={sending} className="px-4 py-2 rounded-md bg-indigo-600 text-white">{sending ? "Sending…" : "Send invite"}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

/* ---------------- Manager Overview Page (main) ---------------- */
export default function ManagerOverviewPage(): JSX.Element {
  const [teams, setTeams] = useState<Array<{ id: string; name: string }>>([]);
  const [teamsLoading, setTeamsLoading] = useState(false);
  const [teamsError, setTeamsError] = useState<string | null>(null);

  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  const [metrics, setMetrics] = useState<{
    conversations?: number;
    avgResponseHours?: number;
    openTasks?: number;
    utilizationPercent?: number;
  } | null>(null);
  const [metricsLoading, setMetricsLoading] = useState(false);

  const [members, setMembers] = useState<TeamMember[]>([]);
  const [membersLoading, setMembersLoading] = useState(false);

  const [tasks, setTasks] = useState<Array<any>>([]);
  const [tasksLoading, setTasksLoading] = useState(false);

  const [meetings, setMeetings] = useState<Array<any>>([]);
  const [meetingsLoading, setMeetingsLoading] = useState(false);

  const [scheduleOpen, setScheduleOpen] = useState(false);

  // Invite modal state
  const [inviteOpen, setInviteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  /* -- load teams -- */
  useEffect(() => {
    let mounted = true;
    setTeamsLoading(true);
    setTeamsError(null);
    (async () => {
      try {
        const res = await fetch("/api/dashboard/teams", { credentials: "same-origin" });
        if (!res.ok) {
          throw new Error("Failed to load teams");
        }
        const j = await res.json().catch(() => ({}));
        const list = Array.isArray(j) ? j : j?.teams ?? [];
        if (mounted) {
          setTeams(list);
          if (!selectedTeamId && list.length > 0) setSelectedTeamId(list[0].id);
        }
      } catch (err: any) {
        if (mounted) setTeamsError(err?.message || "Could not fetch teams");
      } finally {
        if (mounted) setTeamsLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  /* -- load metrics when selectedTeamId changes -- */
  useEffect(() => {
    let mounted = true;
    if (!selectedTeamId) {
      setMetrics(null);
      return;
    }
    setMetricsLoading(true);
    (async () => {
      try {
        const res = await fetch(`/api/dashboard/manager/metrics?teamId=${encodeURIComponent(selectedTeamId)}`, { credentials: "same-origin" });
        if (!res.ok) {
          throw new Error("Metrics unavailable");
        }
        const j = await res.json().catch(() => ({}));
        const m = j?.metrics ?? {
          conversations: j?.conversations,
          avgResponseHours: j?.avgResponseHours,
          openTasks: j?.openTasks,
          utilizationPercent: j?.utilizationPercent,
        };
        if (mounted) setMetrics(m ?? null);
      } catch {
        if (mounted) setMetrics(null);
      } finally {
        if (mounted) setMetricsLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [selectedTeamId]);

  /* -- load members -- */
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
          // try alternative endpoint
          const alt = await fetch(`/api/dashboard/teams/members?teamId=${encodeURIComponent(selectedTeamId)}`, { credentials: "same-origin" });
          if (!alt.ok) throw new Error("Members endpoint failed");
          const aj = await alt.json().catch(() => ({}));
          const altList = Array.isArray(aj) ? aj : aj?.members ?? [];
          if (mounted) setMembers(altList);
          return;
        }
        const j = await res.json().catch(() => ({}));
        const list = Array.isArray(j) ? j : j?.members ?? [];
        if (mounted) setMembers(list);
      } catch {
        if (mounted) setMembers([]);
      } finally {
        if (mounted) setMembersLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [selectedTeamId]);

  /* -- load tasks -- */
  useEffect(() => {
    let mounted = true;
    if (!selectedTeamId) {
      setTasks([]);
      return;
    }
    setTasksLoading(true);
    (async () => {
      try {
        const res = await fetch(`/api/dashboard/tasks?teamId=${encodeURIComponent(selectedTeamId)}&status=open`, { credentials: "same-origin" });
        if (!res.ok) throw new Error("Tasks failed");
        const j = await res.json().catch(() => ({}));
        const list = Array.isArray(j) ? j : j?.tasks ?? [];
        if (mounted) setTasks(list);
      } catch {
        if (mounted) setTasks([]);
      } finally {
        if (mounted) setTasksLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [selectedTeamId]);

  /* -- load upcoming meetings -- */
  useEffect(() => {
    let mounted = true;
    if (!selectedTeamId) {
      setMeetings([]);
      return;
    }
    setMeetingsLoading(true);
    (async () => {
      try {
        const res = await fetch(`/api/dashboard/schedule/upcoming?teamId=${encodeURIComponent(selectedTeamId)}`, { credentials: "same-origin" });
        if (!res.ok) throw new Error("Meetings failed");
        const j = await res.json().catch(() => ({}));
        const list = Array.isArray(j) ? j : j?.meetings ?? [];
        if (mounted) setMeetings(list);
      } catch {
        if (mounted) setMeetings([]);
      } finally {
        if (mounted) setMeetingsLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [selectedTeamId]);

  /* -- derived stats -- */
  const stats = useMemo(() => {
    return [
      {
        title: "Team Conversations",
        value: metricsLoading ? "…" : String(metrics?.conversations ?? "—"),
        change: "",
        icon: MessageSquare,
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Avg. response",
        value: metricsLoading ? "…" : `${metrics?.avgResponseHours ? `${metrics.avgResponseHours}h` : "—"}`,
        change: "",
        icon: Clock,
        gradient: "from-violet-500 to-purple-500",
      },
      {
        title: "Open tasks",
        value: tasksLoading ? "…" : String(metrics?.openTasks ?? tasks.length ?? 0),
        change: "",
        icon: Clipboard,
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        title: "Utilization",
        value: metricsLoading ? "…" : `${metrics?.utilizationPercent ? `${metrics.utilizationPercent}%` : "—"}`,
        change: "",
        icon: Users,
        gradient: "from-orange-500 to-rose-500",
      },
    ];
  }, [metrics, metricsLoading, tasks, tasksLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="rounded-xl w-12 h-12 bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-lg">M</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Manager dashboard</h1>
                <p className="mt-1 text-sm text-slate-500">Overview of your team's performance and upcoming work.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border">
                <Search className="w-4 h-4 text-slate-400" />
                <input placeholder="Search messages, tasks, members" className="text-sm outline-none py-0" />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedTeamId ?? ""}
                  onChange={(e) => setSelectedTeamId(e.target.value || null)}
                  className="px-3 py-2 border rounded-md text-sm bg-white"
                >
                  {teamsLoading && <option>Loading teams…</option>}
                  {!teamsLoading && teams.length === 0 && <option>No teams</option>}
                  {!teamsLoading && teams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>

                <button onClick={() => setScheduleOpen(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
                  <CalendarClock className="w-4 h-4" /> Schedule
                </button>

                <button onClick={() => setInviteOpen(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition">
                  <UserPlus className="w-4 h-4" /> Invite employee
                </button>

                <a href={`/dashboard/manager/tasks/create?teamId=${selectedTeamId ?? ""}`} className="px-3 py-2 border rounded-md text-sm">Create task</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <StatCard key={s.title} title={s.title} value={s.value} change={s.change} trend="up" icon={s.icon} gradient={s.gradient} delay={idx * 0.08} />
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Members + tasks */}
          <div className="lg:col-span-2 space-y-4">
            {/* Team Members */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Team members</h2>
                <div className="text-xs text-slate-400">{members.length} members</div>
              </div>

              {membersLoading ? (
                <div className="space-y-2">
                  {[1,2,3].map(n => <div key={n} className="h-12 bg-slate-100 rounded animate-pulse" />)}
                </div>
              ) : members.length === 0 ? (
                <div className="text-sm text-slate-500">No members found for this team.</div>
              ) : (
                <div className="space-y-2">
                  {members.map((m) => <MemberRow key={m.id} member={m} />)}
                </div>
              )}
            </div>

            {/* Open Tasks */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Open tasks</h2>
                <div className="text-xs text-slate-400">{tasks.length} open</div>
              </div>

              {tasksLoading ? (
                <div className="space-y-3">
                  {[1,2,3].map(n => <div key={n} className="h-12 bg-slate-100 rounded animate-pulse" />)}
                </div>
              ) : tasks.length === 0 ? (
                <div className="text-sm text-slate-500">No open tasks for this team.</div>
              ) : (
                <div className="space-y-2">
                  {tasks.map((t: any) => (
                    <div key={t.id ?? t.title} className="flex items-center justify-between gap-3 p-3 border rounded-lg hover:bg-slate-50 transition">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-800 truncate">{t.title ?? t.name ?? "Untitled task"}</div>
                        <div className="text-xs text-slate-500 truncate">{t.description ?? t.summary ?? ""}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`text-xs px-2 py-1 rounded ${t.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-700" : t.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                          {t.status ?? "open"}
                        </div>
                        <a href={`/dashboard/manager/tasks/${t.id}`} className="text-xs text-slate-600 hover:underline">View</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Meetings & quick insights */}
          <aside className="space-y-4">
            {/* Upcoming meetings */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Upcoming meetings</h3>
                <a href={`/dashboard/manager/schedule?teamId=${selectedTeamId ?? ""}`} className="text-xs text-blue-600 flex items-center gap-1">All <ArrowUpRight className="w-3 h-3" /></a>
              </div>

              {meetingsLoading ? (
                <div className="space-y-2">
                  {[1,2].map(n => <div key={n} className="h-12 bg-slate-100 rounded animate-pulse" />)}
                </div>
              ) : meetings.length === 0 ? (
                <div className="text-sm text-slate-500">No upcoming meetings — schedule one.</div>
              ) : (
                <div className="space-y-2">
                  {meetings.map((m: any) => (
                    <div key={m.id ?? m.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 text-sm">
                        <CalendarClock className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-slate-800 truncate">{m.title ?? m.name ?? "Meeting"}</div>
                            <div className="text-xs text-slate-500">{m.organizer ?? "Organizer"} • {m.sendAt ? new Date(m.sendAt).toLocaleString() : (m.time ?? "")}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {m.joinUrl ? <a href={m.joinUrl} className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700">Join</a> : <span className="text-xs px-2 py-1 rounded bg-slate-100">Details</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick insights */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold">Team health</div>
                  <div className="text-lg font-bold mt-2">Good — keep momentum</div>
                </div>
                <div className="text-sm text-blue-50">Active</div>
              </div>

              <div className="mt-4 text-xs">
                <div className="flex items-center justify-between"><span>Avg response</span><span>{metrics ? `${metrics.avgResponseHours ?? "—"}h` : "—"}</span></div>
                <div className="flex items-center justify-between mt-2"><span>Open tasks</span><span>{tasks.length}</span></div>
                <div className="flex items-center justify-between mt-2"><span>Utilization</span><span>{metrics ? `${metrics.utilizationPercent ?? "—"}%` : "—"}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* schedule modal */}
      <ScheduleModal
        open={scheduleOpen}
        defaultOrganizer={undefined}
        defaultTeamId={selectedTeamId ?? undefined}
        onClose={(success?: boolean) => {
          setScheduleOpen(false);
          if (success) {
            setToast("Meeting scheduled");
            setTimeout(() => {
              setToast(null);
              // refresh meetings
              if (selectedTeamId) {
                (async () => {
                  try {
                    setMeetingsLoading(true);
                    const res = await fetch(`/api/dashboard/schedule/upcoming?teamId=${encodeURIComponent(selectedTeamId)}`, { credentials: "same-origin" });
                    const j = await res.json().catch(() => ({}));
                    const list = Array.isArray(j) ? j : j?.meetings ?? [];
                    setMeetings(list);
                  } catch {
                    // ignore
                  } finally {
                    setMeetingsLoading(false);
                  }
                })();
              }
            }, 800);
          }
        }}
        onCreated={() => {}}
      />

      {/* invite modal */}
      <InviteModal
        open={inviteOpen}
        defaultTeamId={selectedTeamId ?? undefined}
        teams={teams}
        onClose={(sent?: boolean) => {
          setInviteOpen(false);
          if (sent) {
            setToast("Invite sent");
            setTimeout(() => setToast(null), 1800);
          }
        }}
        onSent={() => {
          // optionally refresh invited/pending lists here
        }}
      />

      {/* ephemeral toast */}
      {toast && (
        <div className="fixed right-6 bottom-6 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md shadow">
          {toast}
        </div>
      )}
    </div>
  );
}
