// src/app/dashboard/admin/sent/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Download,
  MoreVertical,
  User,
  Calendar,
  Paperclip,
  TrendingUp,
} from "lucide-react";

/* ============================
   Types
   ============================ */
type Status = "delivered" | "pending" | "failed";

type Message = {
  id: number;
  recipient: string;
  subject: string;
  preview: string;
  date: string;
  status: Status;
  views?: number;
  hasAttachment?: boolean;
};

/* ============================
   Helper: status config
   ============================ */
const STATUS_CONFIG: Record<
  Status,
  { icon: React.ComponentType<any>; colorClass: string; bgClass: string; label: string }
> = {
  delivered: { icon: CheckCircle2, colorClass: "text-emerald-600", bgClass: "bg-emerald-50", label: "Delivered" },
  pending: { icon: Clock, colorClass: "text-orange-600", bgClass: "bg-orange-50", label: "Pending" },
  failed: { icon: XCircle, colorClass: "text-rose-600", bgClass: "bg-rose-50", label: "Failed" },
};

/* ============================
   SentMessageCard (typed, responsive)
   ============================ */
const SentMessageCard: React.FC<{ message: Message; delay?: number }> = ({ message, delay = 0 }) => {
  const [hover, setHover] = useState(false);
  const cfg = STATUS_CONFIG[message.status];
  const StatusIcon = cfg.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 group"
      aria-labelledby={`msg-${message.id}-title`}
      role="article"
    >
      <div className="flex items-start gap-4">
        {/* avatar */}
        <motion.div
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md"
          animate={hover ? { scale: 1.05, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.18 }}
        >
          <User className="w-5 h-5 text-white" aria-hidden />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 id={`msg-${message.id}-title`} className="text-sm font-semibold text-slate-800 truncate">
                  To: {message.recipient}
                </h3>
                {message.hasAttachment && <Paperclip className="w-4 h-4 text-slate-400 flex-shrink-0" aria-hidden />}
              </div>

              <h4 className="text-sm font-medium text-slate-700 truncate mb-1">{message.subject}</h4>

              <p className="text-xs text-slate-500 line-clamp-2">{message.preview}</p>
            </div>

            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg ${cfg.bgClass} flex-shrink-0`}
              aria-label={`status: ${cfg.label}`}
              title={cfg.label}
            >
              <StatusIcon className={`w-3.5 h-3.5 ${cfg.colorClass}`} />
              <span className={`text-xs font-medium ${cfg.colorClass}`}>{cfg.label}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
            <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {message.date}
              </span>

              {message.views !== undefined && (
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {message.views} views
                </span>
              )}
            </div>

            {/* action buttons: appear on hover (also keyboard accessible) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hover ? 1 : 0 }}
              transition={{ duration: 0.12 }}
              className="flex items-center gap-1"
            >
              <button
                type="button"
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
                aria-label="Download message"
                title="Download"
              >
                <Download className="w-4 h-4 text-slate-600" />
              </button>
              <button
                type="button"
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
                aria-label="Message actions"
                title="More actions"
              >
                <MoreVertical className="w-4 h-4 text-slate-600" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ============================
   StatCard component
   ============================ */
const StatCard: React.FC<{ icon: React.ComponentType<any>; label: string; value: string; gradient: string; delay?: number }> = ({
  icon: Icon,
  label,
  value,
  gradient,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.26, delay }}
    className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
    role="region"
    aria-label={label}
  >
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-slate-500 mb-0.5 truncate">{label}</p>
        <p className="text-2xl font-bold text-slate-800 truncate">{value}</p>
      </div>
    </div>
  </motion.div>
);

/* ============================
   Main Page
   ============================ */
export default function SentPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<"all" | Status | "">("all");

  const messages: Message[] = [
    {
      id: 1,
      recipient: "Product Team",
      subject: "New Feature Rollout Plan",
      preview:
        "Please review the attached rollout strategy for the upcoming feature launch. I've outlined the timeline and key milestones...",
      date: "Today, 10:30 AM",
      status: "delivered",
      views: 12,
      hasAttachment: true,
    },
    {
      id: 2,
      recipient: "John Smith",
      subject: "Project Proposal Review",
      preview: "Hi John, I've completed the review of your project proposal. Here are my thoughts and suggestions for improvement...",
      date: "Today, 9:15 AM",
      status: "delivered",
      views: 5,
      hasAttachment: false,
    },
    {
      id: 3,
      recipient: "Marketing Department",
      subject: "Q4 Campaign Assets",
      preview: "Attached are all the creative assets for the Q4 marketing campaign. Please let me know if you need any revisions...",
      date: "Yesterday, 4:45 PM",
      status: "pending",
      views: 0,
      hasAttachment: true,
    },
    {
      id: 4,
      recipient: "Sarah Williams",
      subject: "Meeting Notes - Strategy Session",
      preview: "Here are the detailed notes from yesterday's strategy session including action items and next steps...",
      date: "Yesterday, 2:20 PM",
      status: "delivered",
      views: 8,
      hasAttachment: false,
    },
    {
      id: 5,
      recipient: "Development Team",
      subject: "API Documentation Update",
      preview: "I've updated the API documentation with the latest endpoints and authentication methods. Please review before implementation...",
      date: "Dec 10, 11:30 AM",
      status: "failed",
      views: 0,
      hasAttachment: true,
    },
    {
      id: 6,
      recipient: "Client Services",
      subject: "Customer Feedback Report",
      preview: "Monthly customer feedback analysis is attached. Notable trends include increased satisfaction scores...",
      date: "Dec 9, 3:15 PM",
      status: "delivered",
      views: 15,
      hasAttachment: true,
    },
  ];

  const filteredMessages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return messages.filter((m) => {
      const matchesSearch =
        q === "" ||
        m.recipient.toLowerCase().includes(q) ||
        m.subject.toLowerCase().includes(q) ||
        m.preview.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || statusFilter === "" ? true : m.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [messages, searchQuery, statusFilter]);

  const stats = [
    { icon: Send, label: "Total Sent", value: "1,248", gradient: "from-violet-500 to-purple-500" },
    { icon: CheckCircle2, label: "Delivered", value: "1,189", gradient: "from-emerald-500 to-teal-500" },
    { icon: Clock, label: "Pending", value: "43", gradient: "from-orange-500 to-amber-500" },
    { icon: TrendingUp, label: "Success Rate", value: "95.3%", gradient: "from-blue-500 to-cyan-500" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* header */}
        <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Sent Messages
              </h1>
              <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Track and manage your sent communications
              </p>
            </div>
            {/* optional actions could go here */}
          </div>
        </motion.header>

        {/* stats */}
        <section aria-label="Quick stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={0.06 * i} />
          ))}
        </section>

        {/* content: search + filters + list */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* controls */}
          <div className="p-4 sm:p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="relative flex-1 min-w-[180px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  aria-label="Search sent messages"
                  placeholder="Search sent messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {/* Buttons are responsive: they wrap/scroll on small screens */}
                <FilterButtons active={statusFilter} onChange={(v) => setStatusFilter(v)} />
              </div>
            </div>
          </div>

          {/* messages list */}
          <div className="p-4 sm:p-6">
            {filteredMessages.length > 0 ? (
              <div className="space-y-3">
                {filteredMessages.map((m, idx) => (
                  <SentMessageCard key={m.id} message={m} delay={idx * 0.04} />
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Send className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No messages found</h3>
                <p className="text-slate-500">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

/* ============================
   FilterButtons: separate small component (keeps markup tidy)
   ============================ */
const FilterButtons: React.FC<{
  active: "all" | Status | "";
  onChange: (v: "all" | Status | "") => void;
}> = ({ active, onChange }) => {
  const items: { key: "all" | Status; label: string; Icon?: React.ComponentType<any>; gradient?: string }[] = [
    { key: "all", label: "All", Icon: undefined, gradient: "from-violet-500 to-purple-500" },
    { key: "delivered", label: "Delivered", Icon: CheckCircle2, gradient: "from-emerald-500 to-teal-500" },
    { key: "pending", label: "Pending", Icon: Clock, gradient: "from-orange-500 to-amber-500" },
    { key: "failed", label: "Failed", Icon: XCircle, gradient: "from-rose-500 to-pink-500" },
  ];

  return (
    <>
      {items.map((it) => {
        const isActive = active === it.key;
        return (
          <button
            key={it.key}
            onClick={() => onChange(it.key)}
            type="button"
            aria-pressed={isActive}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
              isActive ? `bg-gradient-to-br ${it.gradient} text-white shadow-lg` : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
            title={it.label}
          >
            {it.Icon ? <it.Icon className="w-4 h-4" /> : null}
            <span>{it.label}</span>
          </button>
        );
      })}
    </>
  );
};
