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
} from "lucide-react";
import CreateTeamForm from "@/app/ui/forms/create-team/page";
import ScheduleMeetingForm from "@/app/ui/forms/Schedule-meeting/page";

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
  // ensure stable keys even if missing id
  return team?.id ?? `team_tmp_${idx}_${(team?.name ?? "unknown").slice(0, 6)}`;
}

/* ----------------- TeamCard ----------------- */
const TeamCard = ({ team, delay, onOpenSchedule, onEdit, onDelete }: any) => {
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
      className="relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-200 group overflow-hidden"
    >
      {/* actions menu */}
      <div className="absolute right-3 top-3">
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((s) => !s);
            }}
            className="p-2 rounded-md hover:bg-slate-100"
            aria-label="Open team actions"
            type="button"
          >
            <MoreVertical className="w-5 h-5 text-slate-600" />
          </button>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-30"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(false);
                  onEdit(team);
                }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2"
                type="button"
              >
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(false);
                  onDelete(team);
                }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-rose-600"
                type="button"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="relative">
        {/* header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient ?? "from-blue-500 to-cyan-500"} flex items-center justify-center shadow-md`}
              animate={isHovered ? { scale: 1.03, rotate: 4 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Users className="w-7 h-7 text-white" />
            </motion.div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-slate-800 truncate">{team.name}</h3>
              <p className="text-sm text-slate-500 truncate">{team.description ?? ""}</p>
            </div>
          </div>
        </div>

        {/* lead & featured */}
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

        {/* members avatars */}
        <div className="flex -space-x-2 mb-4 flex-wrap">
          {(team.members ?? []).slice(0, 5).map((member: any, idx: number) => {
            // stable key per member
            const key = member?.user?.id ?? member?.id ?? `m_${idx}`;
            const title = member?.user?.name ?? member?.name ?? "";
            const initials =
              member?.user?.name
                ? member.user.name.split(" ").map((p: string) => p[0]).slice(0, 2).join("")
                : member.initials ?? (title ? title.slice(0, 2).toUpperCase() : "U");
            return (
              <div
                key={key}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm"
                title={title}
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

        {/* stats */}
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

        {/* actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <motion.button
            onClick={() => onOpenSchedule(team)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
            type="button"
          >
            <Mail className="w-4 h-4" /> Schedule Meeting
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition flex items-center justify-center gap-2"
            onClick={() => {
              window.location.href = `/dashboard/admin/teams/${team.id}`;
            }}
            type="button"
          >
            <Settings className="w-4 h-4" /> Manage
          </motion.button>
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

/* ----------------- Main Page ----------------- */
export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editTeam, setEditTeam] = useState<any | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<any | null>(null);

  // schedule modal state
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedTeamForSchedule, setSelectedTeamForSchedule] = useState<any | null>(null);

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
      // UPDATE path (opts supplied) — prefer server call to update endpoint
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
        // Merge updated into existing list; fallback to merging payload
        setTeams((prev) =>
          prev.map((t) => (t.id === opts.id ? (updated ? { ...t, ...updated } : { ...t, ...payloadOrCreated }) : t))
        );
        setEditTeam(null);
        setShowCreate(false);
        return;
      }

      // CREATE path:
      // if payloadOrCreated already has an id, treat it as created team object (server response or optimistic)
      if (payloadOrCreated && payloadOrCreated.id) {
        setTeams((prev) => [payloadOrCreated, ...prev]);
        setShowCreate(false);
        return;
      }

      // otherwise assume payload without id: send to server
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
      // if server returned created object use it; otherwise create optimistic object using payload
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
    // optionally persist meeting via API; left local for now
  }

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

            <motion.button onClick={openCreate} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl flex items-center gap-2">
              <Plus className="w-4 h-4" /> Create Team
            </motion.button>
          </div>

          {/* teams grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  // optional: parent-level deletion callback (not used here)
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
    </>
  );
}
