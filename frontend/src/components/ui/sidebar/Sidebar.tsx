// components/ui/sidebar/Sidebar.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Inbox,
  Send,
  Users,
  BarChart3,
  Settings,
  Search,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  Plus,
  Clipboard,
  Slack,
  User,
  CheckCircle,
  Bell,
  CalendarClock,
} from "lucide-react";
import ProfileMenu from "@/components/forms/ProfileMenu";

/**
 * Sidebar component that renders portal-specific navigation.
 *
 * Props:
 * - portal?: "admin" | "manager" | "employee" (default "admin")
 * - isOpen?: boolean (controlled mobile drawer)
 * - onClose?: () => void (callback when mobile drawer closes)
 * - hideToggle?: boolean (hide floating hamburger when true)
 *
 * Notes:
 * - Manager and Employee sidebars intentionally differ from Admin.
 * - The component includes an internal ScheduleModal used by Managers.
 * - Replace fetch endpoints (/api/...) to match your backend.
 */

type Portal = "admin" | "manager" | "employee" | undefined;

type Props = {
  portal?: Portal;
  isOpen?: boolean;
  onClose?: () => void;
  hideToggle?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  gradient?: string;
  badge?: number | null;
};

function formatPath(raw: string | null | undefined) {
  if (!raw) return "/";
  return raw === "/" ? "/" : raw.replace(/\/+$/, "");
}

/* ------------------- Simple Schedule Modal (Manager-only) ------------------- */
function ScheduleModal({
  open,
  onClose,
  onCreated,
  defaultOrganizer,
}: {
  open: boolean;
  onClose: (success?: boolean) => void;
  onCreated?: (data: any) => void;
  defaultOrganizer?: string | null;
}) {
  const [organizer, setOrganizer] = useState(defaultOrganizer ?? "");
  const [datetime, setDatetime] = useState("");
  const [reminder, setReminder] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setOrganizer(defaultOrganizer ?? "");
      setDatetime("");
      setReminder(10);
      setError(null);
    }
  }, [open, defaultOrganizer]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!organizer || !datetime) {
      setError("Please provide an organizer and meeting date/time.");
      return;
    }
    // Basic ISO date validation
    const dt = new Date(datetime);
    if (Number.isNaN(dt.getTime())) {
      setError("Invalid date/time.");
      return;
    }

    setLoading(true);
    try {
      // POST to scheduling endpoint - adapt to your backend
      const res = await fetch("/api/schedule/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizer, sendAt: dt.toISOString(), reminderMinutes: reminder }),
        credentials: "same-origin",
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message || "Failed to schedule meeting");
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
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl z-10"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Schedule meeting</h3>
          <button className="p-1 rounded-md hover:bg-slate-100" onClick={() => onClose(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-3">
          <div>
            <label className="text-xs text-slate-600">Organizer</label>
            <input
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md text-sm"
              placeholder="Organizer name or email"
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Date & time</label>
            <input
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Reminder (before meeting)</label>
            <select value={String(reminder)} onChange={(e) => setReminder(Number(e.target.value))} className="w-full mt-1 p-2 border rounded-md text-sm">
              {[10, 20, 30, 40, 50, 60].map((m) => (
                <option key={m} value={m}>
                  {m} minutes before
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-400 mt-1">Reminder will be scheduled as: meeting_time - reminder.</p>
          </div>

          {error && <div className="text-sm text-rose-600">{error}</div>}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" className="px-3 py-1 rounded-md text-sm" onClick={() => onClose(false)} disabled={loading}>
              Cancel
            </button>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm flex items-center gap-2">
              {loading ? "Scheduling…" : "Schedule"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

/* ------------------- Sidebar Component ------------------- */
export default function Sidebar({ portal = "admin", isOpen: isOpenProp, onClose, hideToggle = false }: Props) {
  const raw = usePathname();
  const pathname = formatPath(raw);

  // mobile open controlled/uncontrolled
  const [internalOpen, setInternalOpen] = useState(false);
  const openControlled = typeof isOpenProp === "boolean";
  const open = openControlled ? isOpenProp! : internalOpen;
  const setOpen = (next: boolean) => {
    if (openControlled) {
      if (!next && onClose) onClose();
    } else {
      setInternalOpen(next);
      if (!next && onClose) onClose();
    }
  };

  // UI state
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // manager-specific state
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [teams, setTeams] = useState<Array<{ id: string; name: string }>>([]);
  const [teamsLoading, setTeamsLoading] = useState(false);
  const [currentTeamId, setCurrentTeamId] = useState<string | null>(null);

  // keyboard esc to close
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpenProp]);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  // Load teams for managers (only when manager portal active)
  useEffect(() => {
    let mounted = true;
    if (portal !== "manager") return;
    setTeamsLoading(true);
    (async () => {
      try {
        const res = await fetch("/api/dashboard/teams", { credentials: "same-origin" });
        if (!res.ok) {
          setTeams([]);
          return;
        }
        const json = await res.json();
        const list = Array.isArray(json) ? json : json?.teams ?? [];
        if (mounted) {
          setTeams(list);
          if (list.length > 0 && !currentTeamId) setCurrentTeamId(list[0].id);
        }
      } catch (e) {
        if (mounted) setTeams([]);
      } finally {
        if (mounted) setTeamsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [portal]);

  /* ------------------- NAV CONFIGS ------------------- */
  const NAV_ADMIN: NavItem[] = [
    { id: "overview", label: "Overview", href: "/dashboard/admin/overview", icon: LayoutDashboard, gradient: "from-blue-500 to-cyan-500" },
    { id: "inbox", label: "Inbox", href: "/dashboard/admin/inbox", icon: Inbox, gradient: "from-emerald-500 to-teal-500", badge: 12 },
    { id: "sent", label: "Sent", href: "/dashboard/admin/sent", icon: Send, gradient: "from-violet-500 to-purple-500" },
    { id: "teams", label: "Teams", href: "/dashboard/admin/teams", icon: Users, gradient: "from-orange-500 to-rose-500" },
    { id: "analytics", label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3, gradient: "from-pink-500 to-rose-500" },
    { id: "settings", label: "Settings", href: "/dashboard/admin/settings", icon: Settings, gradient: "from-slate-500 to-slate-700" },
  ];

  const NAV_MANAGER: NavItem[] = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard/manager/overview", icon: LayoutDashboard, gradient: "from-blue-500 to-cyan-500" },
    { id: "team-inbox", label: "Team Inbox", href: "/dashboard/manager/TeamInbox", icon: Inbox, gradient: "from-emerald-500 to-teal-500" },
    
    { id: "tasks", label: "Tasks", href: "/dashboard/manager/Tasks", icon: Clipboard, gradient: "from-pink-500 to-rose-500" },
    { id: "people", label: "People", href: "/dashboard/manager/People", icon: User, gradient: "from-teal-500 to-emerald-500" },
    { id: "analytics", label: "Analytics", href: "/dashboard/manager/Analytics", icon: BarChart3, gradient: "from-pink-500 to-rose-500" },
    { id: "settings", label: "Settings", href: "/dashboard/manager/settings", icon: Settings, gradient: "from-slate-500 to-slate-700" },
  ];

  const NAV_EMPLOYEE: NavItem[] = [
    { id: "inbox", label: "Inbox", href: "/dashboard/employee/inbox", icon: Inbox, gradient: "from-emerald-500 to-teal-500" },
    { id: "my-tasks", label: "My Tasks", href: "/dashboard/employee/tasks", icon: Clipboard, gradient: "from-pink-500 to-rose-500" },
    { id: "my-schedule", label: "My Schedule", href: "/dashboard/employee/schedule", icon: Calendar, gradient: "from-violet-500 to-purple-500" },
    { id: "knowledge", label: "Knowledge Base", href: "/dashboard/employee/knowledge", icon: Slack, gradient: "from-blue-500 to-cyan-500" },
    { id: "profile", label: "Profile", href: "/dashboard/employee/profile", icon: User, gradient: "from-teal-500 to-emerald-500" },
  ];

  const NAV = portal === "admin" ? NAV_ADMIN : portal === "manager" ? NAV_MANAGER : NAV_EMPLOYEE;

  /* ------------------- Active computation ------------------- */
  const computeActive = (p: string | undefined | null) => {
    const t = formatPath(p);
    if (portal === "admin") {
      if (t.startsWith("/dashboard/admin/overview")) return "overview";
      if (t.startsWith("/dashboard/admin/inbox")) return "inbox";
      if (t.startsWith("/dashboard/admin/sent")) return "sent";
      if (t.startsWith("/dashboard/admin/teams")) return "teams";
      if (t.startsWith("/dashboard/admin/analytics")) return "analytics";
      if (t.startsWith("/dashboard/admin/settings")) return "settings";
    } else if (portal === "manager") {
      if (t.startsWith("/dashboard/manager/overview")) return "dashboard";
      if (t.startsWith("/dashboard/manager/inbox")) return "team-inbox";
      if (t.startsWith("/dashboard/manager/team")) return "my-team";
      if (t.startsWith("/dashboard/manager/schedule")) return "schedule";
      if (t.startsWith("/dashboard/manager/tasks")) return "tasks";
      if (t.startsWith("/dashboard/manager/people")) return "people";
      if (t.startsWith("/dashboard/manager/analytics")) return "analytics";
      if (t.startsWith("/dashboard/manager/settings")) return "settings";
    } else {
      if (t.startsWith("/dashboard/employee/inbox")) return "inbox";
      if (t.startsWith("/dashboard/employee/tasks")) return "my-tasks";
      if (t.startsWith("/dashboard/employee/schedule")) return "my-schedule";
      if (t.startsWith("/dashboard/employee/knowledge")) return "knowledge";
      if (t.startsWith("/dashboard/employee/profile")) return "profile";
    }
    return undefined;
  };

  const activeId = computeActive(pathname);

  const filteredNav = NAV.filter((it) => it.label.toLowerCase().includes(searchQuery.toLowerCase()));

  /* ------------------- Sidebar content ------------------- */
  const sidebarContent = (isMobile = false) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 pb-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36 }} className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">S</div>
            <motion.div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>

          <div className="flex-1">
            <div className="text-base font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">SignalHub</div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Unified Inbox
            </div>
          </div>
        </motion.div>

        {/* Manager team switcher (only visible to manager portal) */}
        {portal === "manager" && (
          <div className="mb-3">
            <label className="text-xs text-slate-500">Team</label>
            <div className="mt-2">
              {teamsLoading ? (
                <div className="text-xs text-slate-400">Loading teams…</div>
              ) : (
                <select value={currentTeamId ?? ""} onChange={(e) => setCurrentTeamId(e.target.value || null)} className="w-full p-2 rounded-md border text-sm">
                  {teams.length === 0 && <option value="">No teams</option>}
                  {teams.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        )}

        {/* Search */}
        <motion.div className="relative group" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.32, delay: 0.06 }}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            aria-label="Search navigation"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
          />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent" aria-label="Primary">
        <div className="space-y-1">
          {filteredNav.map((item, index) => {
            const Icon = item.icon as any;
            const isActive = activeId === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <motion.div key={item.id} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: index * 0.03 }}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (isMobile) setOpen(false);
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={clsx(
                    "relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                    isActive ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 shadow-sm" : "text-slate-600 hover:bg-slate-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div layoutId="activeIndicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}

                  <div className="relative">
                    <motion.div className={clsx("w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200", isActive ? `bg-gradient-to-br ${item.gradient} shadow-lg` : "bg-slate-100 group-hover:bg-slate-200")} animate={isActive ? { scale: [1, 1.05, 1] } : {}}>
                      <Icon className={clsx("w-4 h-4 transition-colors", isActive ? "text-white" : "text-slate-600")} />
                    </motion.div>

                    {item.badge && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gradient-to-br from-rose-500 to-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
                        {item.badge}
                      </motion.div>
                    )}
                  </div>

                  <span className="flex-1 text-left">{item.label}</span>

                  <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: isHovered && !isActive ? 1 : 0, x: isHovered && !isActive ? 0 : -5 }} transition={{ duration: 0.18 }} aria-hidden="true">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </motion.div>

                  {isActive && (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18 }}>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Quick actions (portal specific) */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, delay: 0.18 }} className="mt-6 mb-4 px-3">
          <div className="mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Actions</div>

          {portal === "admin" && (
            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="text-sm font-bold mb-1">Invite managers</div>
                <div className="text-xs opacity-90 mb-3">Send an invite to a new manager</div>
                <motion.div className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Invite <ArrowRight className="w-3 h-3" />
                </motion.div>
              </div>
            </div>
          )}

          {portal === "manager" && (
            <>
              <div className="flex gap-2">
                <button onClick={() => setScheduleOpen(true)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm hover:bg-indigo-700 transition">
                  <Calendar className="w-4 h-4" /> Schedule meeting
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm" onClick={() => {
                  // client-side shortcut to create task - adapt to your create task flow
                  window.location.href = "/dashboard/manager/tasks/create";
                }}>
                  <Plus className="w-4 h-4" /> Task
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">Quickly schedule meetings for your team or create tasks.</p>
            </>
          )}

          {portal === "employee" && (
            <>
              <div className="flex gap-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm hover:bg-emerald-700 transition" onClick={() => {
                  // start break / status toggle (demo client-side action)
                  fetch("/api/me/status", { method: "POST", credentials: "same-origin", body: JSON.stringify({ onBreak: true }) }).catch(() => {});
                }}>
                  <Clock className="w-4 h-4" /> Start break
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm" onClick={() => window.location.href = "/dashboard/employee/notes/create"}>
                  <Plus className="w-4 h-4" /> Note
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">Set your status or jot down a quick note.</p>
            </>
          )}
        </motion.div>
      </nav>

      {/* Profile section */}
      <div className="p-4 border-t border-slate-200 bg-slate-50/50">
        <ProfileMenu />
      </div>

      {/* Schedule Modal (manager only) */}
      {portal === "manager" && (
        <ScheduleModal
          open={scheduleOpen}
          onClose={(success?: boolean) => {
            setScheduleOpen(false);
            if (success) {
              // optional toast or action - simple page reload to refresh schedule
              // window.location.reload();
            }
          }}
          onCreated={() => {
            // placeholder hook
          }}
          defaultOrganizer={undefined}
        />
      )}
    </div>
  );

  /* ------------------- Render root (desktop + mobile) ------------------- */
  return (
    <>
      {/* Floating mobile hamburger toggle */}
      {!hideToggle && (
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="p-3 rounded-xl bg-white shadow-lg shadow-slate-900/10 text-slate-700 border border-slate-200 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <motion.aside initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.36 }} className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:flex-col lg:w-72 lg:min-h-screen lg:border-r lg:border-slate-200 lg:bg-white/80 lg:backdrop-blur-xl z-30" aria-hidden={false}>
        {sidebarContent(false)}
      </motion.aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} onClick={() => setOpen(false)} aria-hidden="true" />

            <motion.aside initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl" role="dialog" aria-modal="true" aria-label="Main menu">
              <div className="absolute top-4 right-4 z-10">
                <motion.button ref={closeBtnRef} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {sidebarContent(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
