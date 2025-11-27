// src/app/dashboard/admin/overview/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  Zap,
  Target,
  Award,
  X,
  Copy,
  Link as LinkIcon,
} from "lucide-react";

/* ----------------- Stat Card ----------------- */
type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<any>;
  gradient: string;
  delay?: number;
};

const StatCard = ({ title, value, change, trend, icon: Icon, gradient, delay = 0 }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-500 mb-1 truncate">{title}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">{value}</h3>
          </div>
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
              trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </div>
          <span className="text-xs text-slate-500">vs last month</span>
        </div>

        <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

/* ----------------- Activity Item ----------------- */
type ActivityItemProps = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  time: string;
  gradient: string;
  delay?: number;
};

const ActivityItem = ({ icon: Icon, title, description, time, gradient, delay = 0 }: ActivityItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200 group cursor-pointer"
  >
    <div
      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow`}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-semibold text-slate-800 mb-1 truncate">{title}</h4>
      <p className="text-xs text-slate-500 truncate">{description}</p>
    </div>
    <div className="flex items-center gap-1 text-xs text-slate-400 whitespace-nowrap">
      <Clock className="w-3 h-3" />
      {time}
    </div>
  </motion.div>
);

/* ----------------- Invite Modal (upgraded) ----------------- */
function InviteModal({ open, onClose }: { open: boolean; onClose: (success?: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"MANAGER" | "EMPLOYEE">("MANAGER");
  const [teamId, setTeamId] = useState<string | null>(null);
  const [teams, setTeams] = useState<Array<{ id: string; name: string }>>([]);
  const [loadingTeams, setLoadingTeams] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [expiresHours, setExpiresHours] = useState<number>(24);

  useEffect(() => {
    if (!open) return;
    let mounted = true;
    setError(null);
    setInviteLink(null);
    // load teams for organization to optionally assign the invited manager to a team
    (async () => {
      setLoadingTeams(true);
      try {
        const r = await fetch("/api/dashboard/teams", { method: "GET", credentials: "same-origin" });
        if (!r.ok) {
          // non-fatal: teams may be unavailable
          console.warn("Could not load teams", r.statusText);
          if (mounted) setTeams([]);
          return;
        }
        const j = await r.json();
        // expect j.teams = [{id, name}, ...] or j array
        const list = Array.isArray(j) ? j : j?.teams ?? [];
        if (mounted) setTeams(list);
      } catch (e) {
        console.warn("Teams fetch failed", e);
        if (mounted) setTeams([]);
      } finally {
        if (mounted) setLoadingTeams(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [open]);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSend = async () => {
    setError(null);
    setInviteLink(null);

    const trimmed = email.trim();
    if (!validateEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      const payload: any = {
        email: trimmed,
        role,
        expiresHours,
      };
      if (teamId) payload.teamId = teamId;

      const res = await fetch("/api/invites/creates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "same-origin", // ensure cookies are included (auth)
      });

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message || data?.error || "Failed to create invite.";
        setStatus("error");
        setError(message);
        return;
      }

      // Success
      setStatus("success");
      // If backend returns an inviteLink or token, surface it
      if (data?.inviteLink) {
        setInviteLink(data.inviteLink);
      } else if (data?.token) {
        // construct an invite link based on current origin
        try {
          const base = typeof window !== "undefined" ? window.location.origin : "";
          setInviteLink(`${base}/auth/invite/accept?token=${encodeURIComponent(data.token)}`);
        } catch {
          // ignore
        }
      }

      // Keep modal open to show link & copy action for a short while
      setTimeout(() => {
        onClose(true);
      }, 1100);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Network error");
    }
  };

  const copyLink = async () => {
    if (!inviteLink) return;
    try {
      await navigator.clipboard.writeText(inviteLink);
      // ephemeral confirmation
      setError(null);
      setStatus("success");
    } catch {
      setError("Unable to copy link — please copy manually.");
    }
  };

  // Reset modal state when closed
  useEffect(() => {
    if (!open) {
      setEmail("");
      setRole("MANAGER");
      setTeamId(null);
      setTeams([]);
      setError(null);
      setStatus("idle");
      setInviteLink(null);
      setExpiresHours(24);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Invite manager</h3>
          <button className="p-1 rounded-md hover:bg-slate-100" onClick={() => onClose(false)} aria-label="Close invite modal">
            <X className="w-4 h-4" />
          </button>
        </div>

        <label className="text-xs text-slate-600">To (email)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 mb-2 p-2 border rounded-md text-sm"
          placeholder="manager@example.com"
          aria-label="Invite email"
        />

        <div className="grid grid-cols-2 gap-2 items-end">
          <div>
            <label className="text-xs text-slate-600">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value as any)} className="w-full mt-1 p-2 border rounded-md text-sm">
              <option value="MANAGER">Manager</option>
              <option value="EMPLOYEE">Employee</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-600">Expires</label>
            <select value={String(expiresHours)} onChange={(e) => setExpiresHours(Number(e.target.value))} className="w-full mt-1 p-2 border rounded-md text-sm">
              <option value={24}>24 hours</option>
              <option value={48}>48 hours</option>
              <option value={72}>72 hours</option>
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label className="text-xs text-slate-600">Assign to team (optional)</label>
          {loadingTeams ? (
            <div className="mt-2 text-xs text-slate-500">Loading teams…</div>
          ) : teams.length === 0 ? (
            <div className="mt-2 text-xs text-slate-400">No teams yet — invite will create a user without team assignment.</div>
          ) : (
            <select value={teamId ?? ""} onChange={(e) => setTeamId(e.target.value || null)} className="w-full mt-2 p-2 border rounded-md text-sm">
              <option value="">(No team)</option>
              {teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {error && <p className="text-xs text-rose-600 mt-3">{error}</p>}

        {status === "success" && inviteLink && (
          <div className="mt-3 p-3 bg-emerald-50 rounded-md border border-emerald-100 text-sm text-emerald-700 flex items-center justify-between gap-2">
            <div className="truncate mr-2 flex items-center gap-2">
              <LinkIcon className="w-4 h-4" /> <span className="truncate">{inviteLink}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={copyLink} className="px-2 py-1 rounded bg-white border text-xs">Copy</button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            className="px-3 py-1 rounded-md text-sm"
            onClick={() => onClose(false)}
            disabled={status === "sending"}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm flex items-center gap-2"
            onClick={handleSend}
            disabled={status === "sending" || status === "success"}
          >
            {status === "sending" ? "Sending..." : "Send invite"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ----------------- Main Page ----------------- */
export default function OverviewPage() {
  const stats: StatCardProps[] = [
    { title: "Total Messages", value: "2,845", change: "+12.5%", trend: "up", icon: MessageSquare, gradient: "from-blue-500 to-cyan-500" },
    { title: "Active Users", value: "1,234", change: "+8.2%", trend: "up", icon: Users, gradient: "from-emerald-500 to-teal-500" },
    { title: "Response Time", value: "2.4h", change: "-15.3%", trend: "up", icon: Clock, gradient: "from-violet-500 to-purple-500" },
    { title: "Completion Rate", value: "94.2%", change: "+3.1%", trend: "up", icon: CheckCircle2, gradient: "from-orange-500 to-rose-500" },
  ];

  const activities: ActivityItemProps[] = [
    { icon: MessageSquare, title: "New message from Sarah Johnson", description: "Regarding project timeline and deliverables", time: "2m ago", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Team meeting scheduled", description: "Weekly sync-up with development team", time: "15m ago", gradient: "from-emerald-500 to-teal-500" },
    { icon: CheckCircle2, title: "Task completed", description: "UI/UX design review has been finalized", time: "1h ago", gradient: "from-violet-500 to-purple-500" },
    { icon: AlertCircle, title: "Attention required", description: "3 messages awaiting your response", time: "2h ago", gradient: "from-orange-500 to-rose-500" },
    { icon: Target, title: "Goal achieved", description: "Monthly target reached ahead of schedule", time: "3h ago", gradient: "from-pink-500 to-rose-500" },
  ];

  const [inviteOpen, setInviteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Overview
              </h1>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Zap className="w-6 h-6 text-yellow-500" />
              </motion.div>
              <p className="text-slate-500 flex items-center gap-1 sm:ml-3 text-sm">
                <Calendar className="w-4 h-4" /> Welcome back! Here's what's happening today.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setInviteOpen(true)}
                className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
              >
                Invite managers
              </button>

              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                Export
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} {...stat} delay={index * 0.1} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">Recent Activity</h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                  View all
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {activities.map((activity, index) => (
                  <ActivityItem key={index} {...activity} delay={0.5 + index * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar Stats / Goals */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }} className="space-y-6">
            {/* Performance Goal */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance Goal</h3>
                <p className="text-sm text-blue-50 mb-4">You're 94% towards your monthly goal. Keep it up!</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2 backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
                <p className="text-xs text-blue-100">2,680 / 2,850 messages</p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Stats</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between"><span className="text-slate-600">Avg. Response</span><span className="font-semibold text-slate-800">2.4 hours</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-600">Success Rate</span><span className="font-semibold text-emerald-600">94.2%</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-600">Active Teams</span><span className="font-semibold text-slate-800">8</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-600">Pending Tasks</span><span className="font-semibold text-orange-600">12</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Invite modal */}
      <InviteModal
        open={inviteOpen}
        onClose={(success?: boolean) => {
          setInviteOpen(false);
          if (success) {
            setToast("Invitation sent");
            setTimeout(() => setToast(null), 2400);
          }
        }}
      />

      {/* Transient toast */}
      {toast && (
        <div className="fixed right-6 bottom-6 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md shadow">
          {toast}
        </div>
      )}
    </div>
  );
}
