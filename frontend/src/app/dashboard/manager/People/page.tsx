// src/app/dashboard/manager/People/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User as UserIcon,
  Users,
  CheckCircle2,
  Tag,
  Star as StarIcon,
  MoreVertical,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Calendar,
  Globe,
  UserCheck,
  UserMinus,
  UserPlus,
  X as XIcon,
} from "lucide-react";

/**
 * Imports:
 * - CardSquare: square box-like card with avatar ring (from your ui)
 * - Modal: accessible modal primitive
 *
 * Make sure components/ui/card exports CardSquare as shown previously.
 */
import { CardSquare } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";

/* ============================
   Types
   ============================ */
type Role = "Manager" | "Team Lead" | "Engineer" | "Support" | "Sales";
type Presence = "online" | "away" | "offline";

type Person = {
  id: number | string;
  name: string;
  role: Role;
  presence: Presence;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  tasksAssigned: number;
  respondRate?: number; // percentage
  hiredAt?: string; // human readable mock
  starred?: boolean;
  label?: { text: string; colorClass: string } | null;
};

/* ============================
   Small accessible IconButton
   ============================ */
const IconButton: React.FC<{
  children: React.ReactNode;
  ariaLabel?: string;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}> = ({ children, ariaLabel, title, onClick, className = "" }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    title={title}
    onClick={onClick}
    className={`p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 ${className}`}
  >
    {children}
  </button>
);

/* ============================
   Modal to show person details
   - same structure as before, adapted to work with CardSquare triggers
   ============================ */
const PersonModal: React.FC<{
  person: Person | null;
  open: boolean;
  onClose: () => void;
  initialFocusRef?: React.RefObject<HTMLButtonElement | null>;
}> = ({ person, open, onClose, initialFocusRef }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // ESC closes modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // focus management: focus close button when opened; restore trigger on close
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => closeButtonRef.current?.focus(), 60);
      return () => clearTimeout(t);
    } else {
      // restore focus to trigger if provided
      if (initialFocusRef?.current) {
        try {
          initialFocusRef.current.focus();
        } catch {
          /* ignore */
        }
      }
    }
  }, [open, initialFocusRef]);

  if (!person) return null;

  return (
    <AnimatePresence>
      {open && (
        <Modal onClose={onClose} ariaLabel={`Details for ${person.name}`}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    person.presence === "online" ? "bg-gradient-to-br from-emerald-500 to-teal-400" : "bg-slate-100"
                  }`}
                >
                  <UserIcon className={`w-6 h-6 ${person.presence === "online" ? "text-white" : "text-slate-500"}`} />
                </div>

                <div>
                  <div className="text-lg font-semibold text-slate-900">{person.name}</div>
                  <div className="text-sm text-slate-500">{person.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconButton ariaLabel="Close details" title="Close" onClick={onClose} className="bg-slate-50">
                  <XIcon className="w-4 h-4" />
                </IconButton>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500">Contact</div>
                  <div className="mt-1 text-sm text-slate-800">
                    <div className="flex items-center gap-2">
                      <MailIcon className="w-4 h-4 text-slate-400" />
                      <span>{person.email ?? "—"}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <PhoneIcon className="w-4 h-4 text-slate-400" />
                      <span>{person.phone ?? "—"}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span>{person.location ?? "—"}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500">Work</div>
                  <div className="mt-1 text-sm text-slate-800">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{person.role}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>Hired: {person.hiredAt ?? "—"}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-slate-400" />
                      <span>{person.tasksAssigned} tasks assigned</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500">Activity & metrics</div>
                  <div className="mt-1 text-sm text-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">Response rate</div>
                      <div className="font-medium">{person.respondRate ?? 0}%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">Presence</div>
                      <div className="font-medium capitalize">{person.presence}</div>
                    </div>
                    {person.label && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600">Tag</div>
                        <div className={`px-2 py-0.5 rounded-md text-xs font-medium ${person.label.colorClass}`}>{person.label.text}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500">Actions</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => console.log("Message", person.id)}
                      className="px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200"
                    >
                      <MailIcon className="w-4 h-4" />
                      Message
                    </button>

                    <button
                      type="button"
                      onClick={() => console.log("Call", person.id)}
                      className="px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Call
                    </button>

                    <button
                      type="button"
                      onClick={() => console.log("More actions", person.id)}
                      className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100"
                      aria-label="More"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 text-right">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium hover:opacity-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

/* ============================
   Main People Page
   ============================ */
export default function ManagerPeoplePage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "online" | "offline" | "role">("all");
  const [team, setTeam] = useState<string>("Growth Team");

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  // stable mock people
  const people = useMemo<Person[]>(
    () => [
      {
        id: 301,
        name: "Ravi Kumar",
        role: "Team Lead",
        presence: "online",
        email: "ravi.kumar@example.com",
        phone: "+91 98765 43210",
        location: "Bengaluru, India",
        tasksAssigned: 6,
        respondRate: 92,
        hiredAt: "Mar 2021",
        starred: true,
        label: { text: "On-call", colorClass: "bg-emerald-50 text-emerald-700" },
      },
      {
        id: 302,
        name: "Meera Singh",
        role: "Engineer",
        presence: "away",
        email: "meera.singh@example.com",
        phone: "+91 91234 56789",
        location: "Kolkata, India",
        tasksAssigned: 4,
        respondRate: 87,
        hiredAt: "Jul 2022",
        starred: false,
        label: { text: "Mentor", colorClass: "bg-blue-50 text-blue-700" },
      },
      {
        id: 303,
        name: "Thomas Green",
        role: "Support",
        presence: "offline",
        email: "thomas.green@example.com",
        phone: null,
        location: "Remote — UK",
        tasksAssigned: 9,
        respondRate: 74,
        hiredAt: "Jan 2020",
        starred: false,
      },
      {
        id: 304,
        name: "Nisha Patel",
        role: "Sales",
        presence: "online",
        email: "nisha.patel@example.com",
        phone: "+91 99876 54321",
        location: "Mumbai, India",
        tasksAssigned: 2,
        respondRate: 98,
        hiredAt: "Oct 2023",
        starred: false,
        label: { text: "Top performer", colorClass: "bg-amber-50 text-amber-700" },
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return people.filter((p) => {
      const matchesSearch = q === "" || p.name.toLowerCase().includes(q) || (p.email ?? "").toLowerCase().includes(q) || p.role.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" || (filter === "online" && p.presence === "online") || (filter === "offline" && p.presence === "offline") || (filter === "role" && p.role === "Team Lead");
      return matchesSearch && matchesFilter;
    });
  }, [people, searchQuery, filter]);

  const onlineCount = people.filter((p) => p.presence === "online").length;
  const totalCount = people.length;
  const avgResponse = Math.round((people.reduce((s, p) => s + (p.respondRate ?? 0), 0) / (people.length || 1)) * 1) / 1;

  // refs per person card to restore focus; create map of refs
  const cardRefs = useRef<Map<Person["id"], React.RefObject<HTMLButtonElement>>>(new Map());
  people.forEach((p) => {
    if (!cardRefs.current.has(p.id)) cardRefs.current.set(p.id, React.createRef<HTMLButtonElement>());
  });

  // open modal with person details and remember trigger (ref)
  const openPersonModal = (person: Person, triggerRef?: React.RefObject<HTMLButtonElement>) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
    if (triggerRef?.current) lastTriggerRef.current = triggerRef.current;
  };

  const closePersonModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
    // focus restored by PersonModal effect using lastTriggerRef (passed as initialFocusRef)
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                People
              </h1>

              {onlineCount > 0 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {onlineCount}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>{team}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4" />
                <span>{avgResponse}% avg response</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserPlus className="w-4 h-4" />
                <span>{totalCount} members</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">Browse and manage your team members. Click a card to view full details.</p>
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
                  aria-label="Search people"
                  placeholder="Search people, email, role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <button
                    onClick={() => setFilter("all")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${filter === "all" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("online")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${filter === "online" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                  >
                    Online
                  </button>
                  <button
                    onClick={() => setFilter("offline")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${filter === "offline" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <label className="sr-only" htmlFor="team-select-people">
                  Choose team
                </label>
                <select
                  id="team-select-people"
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
                    console.log("Invite new member");
                  }}
                >
                  Invite
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {people.length} total
              </span>
              <span className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-blue-500" />
                {onlineCount} online
              </span>
              <span className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 text-yellow-500" />
                {people.filter((p) => p.starred).length} starred
              </span>
            </div>
          </div>

          {/* grid list of compact CardSquare cards */}
          <div className="p-4 sm:p-6">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((person) => (
                  <div key={person.id} className="w-full">
                    <CardSquare
                      name={person.name}
                      subtitle={person.role}
                      avatarUrl={null}
                      size="md"
                      asChild={false}
                      onClick={() => openPersonModal(person, cardRefs.current.get(person.id))}
                      className="w-full"
                    />
                    {/* attach ref to underlying button for focus restore */}
                    {/* Because CardSquare doesn't expose ref prop in this signature, we store refs and rely on focus restoration via lastTriggerRef when modal opens.
                        If you want exact ref forwarding, update CardSquare to accept ref via forwardRef. */}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No members found</h3>
                <p className="text-slate-500">Try adjusting your search, filters, or team selection</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Person details modal */}
      <PersonModal person={selectedPerson} open={isModalOpen} onClose={closePersonModal} initialFocusRef={lastTriggerRef} />
    </main>
  );
}
