// src/app/dashboard/admin/inbox/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  Archive,
  Trash2,
  MoreVertical,
  Mail,
  MailOpen,
  Clock,
  Paperclip,
  ChevronRight,
  Inbox as InboxIcon,
  Tag,
  User,
  Calendar,
} from "lucide-react";

/* ============================
   Types
   ============================ */
type Label = { text: string; color: string } | null;
type Message = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  starred: boolean;
  hasAttachment: boolean;
  label: Label;
};

/* ============================
   MessageCard component
   - preserves all features:
     unread/starred/attachment, hover actions, selected indicator
   - responsive: truncation, line-clamp, flex-wrap for small screens
   ============================ */
const MessageCard: React.FC<{
  message: Message;
  isSelected: boolean;
  onSelect: () => void;
  delay?: number;
}> = ({ message, isSelected, onSelect, delay = 0 }) => {
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
                title={message.sender}
              >
                {message.sender}
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

          <h4 className={`text-sm mb-1 truncate ${message.unread ? "font-semibold text-slate-700" : "text-slate-600"}`} title={message.subject}>
            {message.subject}
          </h4>

          <p className="text-xs text-slate-500 line-clamp-2 mb-2">{message.preview}</p>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              {message.label && (
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${message.label.color}`}
                  aria-hidden
                >
                  <Tag className="w-3 h-3" />
                  {message.label.text}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              <span>{message.time}</span>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="flex items-center gap-1">
          <IconButton ariaLabel="Archive" title="Archive">
            <Archive className="w-4 h-4" />
          </IconButton>
          <IconButton ariaLabel="Delete" title="Delete">
            <Trash2 className="w-4 h-4" />
          </IconButton>
          <IconButton ariaLabel="More" title="More">
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
   Tiny accessible IconButton
   ============================ */
const IconButton: React.FC<{ children: React.ReactNode; ariaLabel?: string; title?: string }> = ({ children, ariaLabel, title }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    title={title}
    className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
  >
    {children}
  </button>
);

/* ============================
   FilterButtons (responsive)
   ============================ */
const FilterButtons: React.FC<{ active: string; onChange: (v: string) => void }> = ({ active, onChange }) => {
  const items = [
    { key: "all", label: "All", Icon: undefined },
    { key: "unread", label: "Unread", Icon: Mail },
    { key: "starred", label: "Starred", Icon: Star },
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
   Main InboxPage (mobile-first, responsive)
   ============================ */
export default function InboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "starred">("all");

  // static data preserved exactly (you can wire this to API later)
  const messages: Message[] = [
    {
      id: 1,
      sender: "Sarah Johnson",
      subject: "Q4 Marketing Strategy Review",
      preview:
        "Hi team, I've compiled the performance metrics for our Q4 campaigns. Overall, we've seen a 23% increase in engagement...",
      time: "2m ago",
      unread: true,
      starred: true,
      hasAttachment: true,
      label: { text: "Urgent", color: "bg-rose-50 text-rose-700" },
    },
    {
      id: 2,
      sender: "Mike Chen",
      subject: "Project Timeline Update",
      preview:
        "The development phase is progressing well. We're ahead of schedule on the backend implementation...",
      time: "15m ago",
      unread: true,
      starred: false,
      hasAttachment: false,
      label: { text: "Project", color: "bg-blue-50 text-blue-700" },
    },
    {
      id: 3,
      sender: "Emily Rodriguez",
      subject: "Design System Documentation",
      preview:
        "I've updated the component library with the new design tokens. Please review the changes before tomorrow's meeting...",
      time: "1h ago",
      unread: true,
      starred: false,
      hasAttachment: true,
      label: { text: "Design", color: "bg-purple-50 text-purple-700" },
    },
    {
      id: 4,
      sender: "Alex Thompson",
      subject: "Weekly Team Sync Notes",
      preview: "Here are the key takeaways from today's meeting. Action items have been assigned...",
      time: "2h ago",
      unread: false,
      starred: true,
      hasAttachment: false,
      label: null,
    },
    {
      id: 5,
      sender: "Lisa Park",
      subject: "Customer Feedback Analysis",
      preview: "I've analyzed the recent customer surveys and identified three key areas for improvement...",
      time: "3h ago",
      unread: false,
      starred: false,
      hasAttachment: true,
      label: { text: "Feedback", color: "bg-emerald-50 text-emerald-700" },
    },
    {
      id: 6,
      sender: "David Kumar",
      subject: "API Integration Complete",
      preview: "The third-party API integration is now complete and has been deployed to staging...",
      time: "5h ago",
      unread: false,
      starred: false,
      hasAttachment: false,
      label: { text: "Development", color: "bg-cyan-50 text-cyan-700" },
    },
  ];

  const filteredMessages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return messages.filter((msg) => {
      const matchesSearch =
        q === "" ||
        msg.sender.toLowerCase().includes(q) ||
        msg.subject.toLowerCase().includes(q) ||
        msg.preview.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" || (filter === "unread" && msg.unread) || (filter === "starred" && msg.starred);
      return matchesSearch && matchesFilter;
    });
  }, [messages, searchQuery, filter]);

  const unreadCount = messages.filter((m) => m.unread).length;
  const starredCount = messages.filter((m) => m.starred).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Inbox
              </h1>

              {unreadCount > 0 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {unreadCount}
                </motion.div>
              )}
            </div>

            <p className="text-sm text-slate-500 flex items-center gap-2">
              <InboxIcon className="w-4 h-4" />
              Manage your messages and communications
            </p>
          </div>
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
                  aria-label="Search messages"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <FilterButtons active={filter} onChange={(v) => setFilter(v as any)} />
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
                {starredCount} starred
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
                <p className="text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
