// src/app/dashboard/manager/Tasks/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Trash2,
  MoreVertical,
  Clock,
  Calendar,
  User,
  Users,
  CheckCircle2,
  Tag,
  ClipboardList,
  BellRing,
  CalendarCheck,
} from "lucide-react";

/* ============================
   Types
   ============================ */
type Label = { text: string; colorClass: string } | null;
type Priority = "Low" | "Medium" | "High" | "Critical";
type TaskStatus = "open" | "in_progress" | "blocked" | "done";

type TeamTask = {
  id: number | string;
  title: string;
  description?: string;
  createdBy: string;
  assignee?: string | null;
  priority: Priority;
  label: Label;
  dueAt?: string; // ISO or human-readable in mock
  timeAgo: string; // e.g. "3h ago" (mock)
  status: TaskStatus;
  hasAttachment?: boolean;
  unread?: boolean; // treat as new/untouched for manager
  starred?: boolean;
};

/* ============================
   Small accessible IconButton
   - accepts onClick so parent can stopPropagation
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
   Filter Buttons (typed)
   ============================ */
type FilterKey = "all" | "open" | "due" | "overdue" | "done";
const FilterButtons: React.FC<{ active: FilterKey; onChange: (v: FilterKey) => void }> = ({ active, onChange }) => {
  const items: { key: FilterKey; label: string; Icon?: React.ComponentType<any> }[] = [
    { key: "all", label: "All" },
    { key: "open", label: "Open", Icon: ClipboardList },
    { key: "due", label: "Due soon", Icon: CalendarCheck },
    { key: "overdue", label: "Overdue", Icon: BellRing },
    { key: "done", label: "Completed", Icon: CheckCircle2 },
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
   TaskCard — UI modeled after inbox MessageCard
   - single-line click to select (shows left indicator)
   - action buttons use stopPropagation when clicked
   ============================ */
const TaskCard: React.FC<{
  task: TeamTask;
  isSelected: boolean;
  onSelect: () => void;
  onComplete?: (id: TeamTask["id"]) => void;
  onDelete?: (id: TeamTask["id"]) => void;
  delay?: number;
}> = ({ task, isSelected, onSelect, onComplete, onDelete, delay = 0 }) => {
  const [hover, setHover] = useState(false);

  const priorityColor =
    task.priority === "Critical"
      ? "bg-rose-50 text-rose-700"
      : task.priority === "High"
      ? "bg-amber-50 text-amber-700"
      : task.priority === "Medium"
      ? "bg-cyan-50 text-cyan-700"
      : "bg-slate-50 text-slate-600";

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      className={`relative p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        isSelected
          ? "bg-blue-50 border-blue-200 shadow-md"
          : task.unread
          ? "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md"
          : "bg-slate-50/50 border-slate-100 hover:border-slate-200"
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <motion.div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${task.unread ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-slate-200"}`}
          animate={hover ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.16 }}
        >
          <ClipboardList className={`w-5 h-5 ${task.unread ? "text-white" : "text-slate-500"}`} />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className={`text-sm truncate ${task.unread ? "font-semibold text-slate-800" : "text-slate-700"}`} title={task.title}>
                {task.title}
              </h3>

              {task.unread && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {task.starred && <Star className="w-4 h-4 text-yellow-500" />}
              {task.hasAttachment && <Tag className="w-4 h-4 text-slate-400" />}
            </div>
          </div>

          <p className="text-xs text-slate-500 line-clamp-2 mb-2">{task.description ?? `${task.createdBy} • ${task.timeAgo}`}</p>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              {task.label && (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${task.label.colorClass}`} aria-hidden>
                  <Tag className="w-3 h-3" />
                  {task.label.text}
                </span>
              )}

              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${priorityColor}`}>
                <span className="font-medium">{task.priority}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              {task.dueAt ? (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{task.dueAt}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{task.timeAgo}</span>
                </span>
              )}

              <div className="flex items-center gap-2">
                <User className="w-3 h-3" />
                <span>{task.assignee ?? "Unassigned"}</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="flex items-center gap-1">
          <IconButton
            ariaLabel="Complete"
            title="Complete"
            onClick={(e) => {
              e.stopPropagation();
              onComplete?.(task.id);
            }}
          >
            <CheckCircle2 className="w-4 h-4" />
          </IconButton>

          <IconButton
            ariaLabel="Delete"
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(task.id);
            }}
          >
            <Trash2 className="w-4 h-4" />
          </IconButton>

          <IconButton
            ariaLabel="More"
            title="More"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Task actions", task.id);
            }}
          >
            <MoreVertical className="w-4 h-4" />
          </IconButton>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            layoutId="selectedIndicator"
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
   Main Manager Tasks Page
   - layout and styling intentionally follow the Inbox design you provided
   - content and components are task-focused and different from TeamInbox
   ============================ */
export default function ManagerTasksPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState<TeamTask["id"] | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [team, setTeam] = useState<string>("Growth Team");

  // stable mock tasks (memoized)
  const tasks = useMemo<TeamTask[]>(
    () => [
      {
        id: 201,
        title: "Investigate payment gateway errors",
        description: "Users reporting 402 errors during checkout on mobile. Need logs and rollback plan.",
        createdBy: "Ravi Kumar",
        assignee: "Nisha",
        priority: "High",
        label: { text: "Billing", colorClass: "bg-amber-50 text-amber-700" },
        dueAt: "Today, 5:00 PM",
        timeAgo: "2h ago",
        status: "in_progress",
        hasAttachment: true,
        unread: true,
      },
      {
        id: 202,
        title: "Prepare Q4 campaign brief",
        description: "Finalize creative and KPIs, coordinate with design and analytics.",
        createdBy: "Meera Singh",
        assignee: null,
        priority: "Medium",
        label: { text: "Marketing", colorClass: "bg-blue-50 text-blue-700" },
        dueAt: "Nov 30",
        timeAgo: "1d ago",
        status: "open",
        hasAttachment: false,
        unread: true,
        starred: true,
      },
      {
        id: 203,
        title: "Ship export CSV feature",
        description: "Add filter-by-status and scheduled export support to reports.",
        createdBy: "Carlos Ruiz",
        assignee: "Thomas",
        priority: "Critical",
        label: { text: "Feature", colorClass: "bg-cyan-50 text-cyan-700" },
        timeAgo: "3d ago",
        status: "open",
        hasAttachment: false,
      },
      {
        id: 204,
        title: "Audit security findings",
        description: "Review SAST report and plan fixes for top-10 vulnerabilities.",
        createdBy: "Security Bot",
        assignee: "Sanket",
        priority: "High",
        label: null,
        dueAt: "Dec 5",
        timeAgo: "5d ago",
        status: "blocked",
      },
    ],
    []
  );

  const filteredTasks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return tasks.filter((t) => {
      const matchesSearch = q === "" || t.title.toLowerCase().includes(q) || (t.description ?? "").toLowerCase().includes(q) || (t.createdBy ?? "").toLowerCase().includes(q);
      const now = Date.now();
      const matchesFilter =
        filter === "all" ||
        (filter === "open" && t.status !== "done") ||
        (filter === "due" && !!t.dueAt && t.status !== "done") ||
        (filter === "overdue" && !!t.dueAt && t.status !== "done" && t.priority === "Critical") || // mock logic for overdue
        (filter === "done" && t.status === "done");
      return matchesSearch && matchesFilter;
    });
  }, [tasks, searchQuery, filter]);

  const unreadCount = tasks.filter((t) => t.unread).length;
  const dueCount = tasks.filter((t) => t.dueAt && t.status !== "done").length;
  const completedCount = tasks.filter((t) => t.status === "done").length;

  // action handlers (stubs)
  const handleComplete = (id: TeamTask["id"]) => {
    console.log("Complete task", id);
    // TODO: call API + optimistic update
  };

  const handleDelete = (id: TeamTask["id"]) => {
    console.log("Delete task", id);
    // TODO: confirmation + API
  };

  const handleAssign = (id: TeamTask["id"], member: string) => {
    console.log("Assign task", id, "to", member);
    // TODO: update server
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Tasks</h1>

              {unreadCount > 0 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {unreadCount}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>{team}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{dueCount} due</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4" />
                <span>{completedCount} done</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">Track and manage team tasks — assign owners, prioritize work, and monitor due dates.</p>
        </header>

        {/* container */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* controls */}
          <div className="p-4 sm:p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="relative flex-1 min-w-[160px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  aria-label="Search tasks"
                  placeholder="Search tasks, assignees, descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <FilterButtons active={filter} onChange={setFilter} />
              </div>

              <div className="ml-auto flex items-center gap-2">
                <label className="sr-only" htmlFor="team-select-tasks">
                  Choose team
                </label>
                <select
                  id="team-select-tasks"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>Growth Team</option>
                  <option>Support Team</option>
                  <option>Product Team</option>
                </select>

                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium text-sm shadow-lg hover:opacity-95"
                  onClick={() => {
                    console.log("Open create task modal");
                  }}
                >
                  New Task
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                {tasks.length} total
              </span>
              <span className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-blue-500" />
                {dueCount} due
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {completedCount} completed
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                {tasks.filter((t) => t.starred).length} starred
              </span>
            </div>
          </div>

          {/* list */}
          <div className="p-4 sm:p-6">
            {filteredTasks.length > 0 ? (
              <div className="space-y-3">
                {filteredTasks.map((task, idx) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    isSelected={selectedTask === task.id}
                    onSelect={() => setSelectedTask((prev) => (prev === task.id ? null : task.id))}
                    onComplete={handleComplete}
                    onDelete={handleDelete}
                    delay={idx * 0.04}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <ClipboardList className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No tasks found</h3>
                <p className="text-slate-500">Try changing your filters, search, or create a new task</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
