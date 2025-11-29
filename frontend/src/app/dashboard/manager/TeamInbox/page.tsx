// src/app/dashboard/manager/TeamInbox/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Archive,
  Trash2,
  MoreVertical,
  Mail,
  MailOpen,
  Clock,
  Paperclip,
  Inbox as InboxIcon,
  Tag,
  User,
  Users,
  CheckCircle2,
  Calendar,
  UserCheck,
  MessageCircle,
} from "lucide-react";

/* ============================
   Types
   ============================ */
type Label = { text: string; colorClass: string } | null;
type Channel = "Email" | "SMS" | "WhatsApp" | "In-App";
type TeamMessage = {
  id: number | string;
  customer: string;
  subject: string;
  preview: string;
  time: string; // human readable for mock; use ISO in real app
  unread: boolean;
  starred: boolean;
  hasAttachment: boolean;
  label: Label;
  channel: Channel;
  assignedTo?: string | null; // team member name or null
  responded: boolean;
  slaDue?: string; // e.g. "in 10m" or ISO timestamp
};

/* ============================
   Tiny accessible IconButton
   - accepts onClick so parent can stopPropagation easily
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
   FilterButtons (typed)
   ============================ */
type FilterKey = "all" | "assigned" | "unassigned" | "flagged";
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
   MessageCard (Manager variant)
   - similar layout to admin inbox; includes channel + assignedTo
   - ensures action buttons stop propagation
   ============================ */
const MessageCard: React.FC<{
  message: TeamMessage;
  isSelected: boolean;
  onSelect: () => void;
  onArchive?: (id: TeamMessage["id"]) => void;
  onDelete?: (id: TeamMessage["id"]) => void;
  delay?: number;
}> = ({ message, isSelected, onSelect, onArchive, onDelete, delay = 0 }) => {
  const [hover, setHover] = useState(false);

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
          : message.unread
          ? "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md"
          : "bg-slate-50/50 border-slate-100 hover:border-slate-200"
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <motion.div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            message.unread ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-slate-200"
          }`}
          animate={hover ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.16 }}
        >
          <User className={`w-5 h-5 ${message.unread ? "text-white" : "text-slate-500"}`} />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <h3
                className={`text-sm truncate ${message.unread ? "font-semibold text-slate-800" : "text-slate-700"}`}
                title={message.customer}
              >
                {message.customer}
              </h3>

              {message.unread && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {message.starred && <Star className="w-4 h-4 text-yellow-500" />}
              {message.hasAttachment && <Paperclip className="w-4 h-4 text-slate-400" />}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h4 className={`text-sm mb-1 truncate ${message.unread ? "font-semibold text-slate-700" : "text-slate-600"}`} title={message.subject}>
                {message.subject}
              </h4>

              <p className="text-xs text-slate-500 line-clamp-2 mb-2">{message.preview}</p>
            </div>

            <div className="hidden sm:flex sm:flex-col sm:items-end sm:gap-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{message.time}</span>
              </div>
              {message.slaDue && (
                <div className="text-xs text-rose-600 font-medium">
                  <span className="flex items-center gap-1">
                    <AlertSlaIcon />
                    {message.slaDue}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 flex-wrap mt-2">
            <div className="flex items-center gap-2">
              {message.label && (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${message.label.colorClass}`} aria-hidden>
                  <Tag className="w-3 h-3" />
                  {message.label.text}
                </span>
              )}

              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600">
                <MessageCircle className="w-3 h-3" />
                <span>{message.channel}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                <span>{message.assignedTo ?? "Unassigned"}</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="flex items-center gap-1">
          <IconButton
            ariaLabel="Archive"
            title="Archive"
            onClick={(e) => {
              e.stopPropagation();
              onArchive?.(message.id);
            }}
          >
            <Archive className="w-4 h-4" />
          </IconButton>

          <IconButton
            ariaLabel="Delete"
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(message.id);
            }}
          >
            <Trash2 className="w-4 h-4" />
          </IconButton>

          <IconButton
            ariaLabel="More"
            title="More"
            onClick={(e) => {
              e.stopPropagation();
              // placeholder for context menu
              console.log("More actions for", message.id);
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
   small helper icon for SLA
   ============================ */
const AlertSlaIcon: React.FC = () => <CheckCircle2 className="w-3 h-3 text-rose-600" />;

/* ============================
   Main Manager TeamInbox Page
   ============================ */
export default function TeamInboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<TeamMessage["id"] | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [team, setTeam] = useState<string>("Growth Team");

  // stable mock data (memoized so filtering is effective)
  const messages = useMemo<TeamMessage[]>(
    () => [
      {
        id: 101,
        customer: "Nisha Patel",
        subject: "Payment failed — need help",
        preview: "I tried to add my card and the payment keeps failing with error code 402...",
        time: "5m ago",
        unread: true,
        starred: false,
        hasAttachment: false,
        label: { text: "Billing", colorClass: "bg-amber-50 text-amber-700" },
        channel: "Email",
        assignedTo: "Ravi Kumar",
        responded: false,
        slaDue: "in 25m",
      },
      {
        id: 102,
        customer: "Thomas Green",
        subject: "Unable to login via app",
        preview: "App crashes on startup after the latest update — Android 13. Repro steps attached.",
        time: "12m ago",
        unread: true,
        starred: true,
        hasAttachment: true,
        label: { text: "Support", colorClass: "bg-blue-50 text-blue-700" },
        channel: "In-App",
        assignedTo: null,
        responded: false,
        slaDue: "in 1h",
      },
      {
        id: 103,
        customer: "Aisha Mohammed",
        subject: "Request: Feature X for reports",
        preview: "Would love a filter to export only paid invoices — it's blocking our month-end process.",
        time: "2h ago",
        unread: false,
        starred: false,
        hasAttachment: false,
        label: { text: "Feature", colorClass: "bg-cyan-50 text-cyan-700" },
        channel: "WhatsApp",
        assignedTo: "Meera Singh",
        responded: true,
      },
      {
        id: 104,
        customer: "Carlos Ruiz",
        subject: "Interested in enterprise pricing",
        preview: "We are a 200-seat company and want to discuss volume discounts and SSO support.",
        time: "6h ago",
        unread: false,
        starred: false,
        hasAttachment: false,
        label: null,
        channel: "SMS",
        assignedTo: null,
        responded: false,
      },
    ],
    []
  );

  const filteredMessages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return messages.filter((msg) => {
      const matchesSearch = q === "" || msg.customer.toLowerCase().includes(q) || msg.subject.toLowerCase().includes(q) || msg.preview.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "assigned" && !!msg.assignedTo) ||
        (filter === "unassigned" && !msg.assignedTo) ||
        (filter === "flagged" && msg.starred);
      return matchesSearch && matchesFilter;
    });
  }, [messages, searchQuery, filter]);

  const unreadCount = messages.filter((m) => m.unread).length;
  const assignedCount = messages.filter((m) => !!m.assignedTo).length;
  const unassignedCount = messages.filter((m) => !m.assignedTo).length;

  // action handlers (stubs for now)
  const handleArchive = (id: TeamMessage["id"]) => {
    console.log("Archive", id);
    // TODO: call API and optimistically update UI
  };

  const handleDelete = (id: TeamMessage["id"]) => {
    console.log("Delete", id);
    // TODO: confirmation + API
  };

  const handleAssign = (id: TeamMessage["id"], member: string) => {
    console.log("Assign", id, "to", member);
    // TODO: update on server & UI
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
                <span>{team}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserCheck className="w-4 h-4" />
                <span>{assignedCount} assigned</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MailOpen className="w-4 h-4" />
                <span>{messages.length} total</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">
            Manage incoming customer messages for your team. Assign, prioritize, or schedule follow-ups from here.
          </p>
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
                  aria-label="Search team messages"
                  placeholder="Search team messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <FilterButtons active={filter} onChange={setFilter} />
              </div>

              <div className="ml-auto flex items-center gap-2">
                <label className="sr-only" htmlFor="team-select">
                  Choose team
                </label>
                <select
                  id="team-select"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option>Growth Team</option>
                  <option>Support Team</option>
                  <option>Sales Team</option>
                </select>

                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium text-sm shadow-lg hover:opacity-95"
                  onClick={() => {
                    // placeholder: open compose modal or quick assignment
                    console.log("Open quick actions");
                  }}
                >
                  Quick actions
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <MailOpen className="w-4 h-4" />
                {messages.length} total
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                {unreadCount} unread
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                {messages.filter((m) => m.starred).length} flagged
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-500" />
                {unassignedCount} unassigned
              </span>
            </div>
          </div>

          {/* list */}
          <div className="p-4 sm:p-6">
            {filteredMessages.length > 0 ? (
              <div className="space-y-3">
                {filteredMessages.map((message, idx) => (
                  <MessageCard
                    key={message.id}
                    message={message}
                    isSelected={selectedMessage === message.id}
                    onSelect={() => setSelectedMessage((prev) => (prev === message.id ? null : message.id))}
                    onArchive={handleArchive}
                    onDelete={handleDelete}
                    delay={idx * 0.04}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No messages found</h3>
                <p className="text-slate-500">Try adjusting your search, filter, or team selection</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
