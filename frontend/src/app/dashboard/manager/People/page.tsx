// src/app/dashboard/manager/People/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User as UserIcon,
  Users,
  CheckCircle2,
  MoreVertical,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Calendar,
  Globe,
  UserCheck,
  UserPlus,
  X as XIcon,
} from "lucide-react";

import { Modal } from "@/components/ui/modal";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// TeamChat is client-only (heavy + socket)
const TeamChat = dynamic(
  () => import("@/components/chat/TeamChat").then((m) => m.default),
  { ssr: false }
);

/* ============================
   Types
   ============================ */
type Role = "Manager" | "Team Lead" | "Engineer" | "Support" | "Sales" | string;
type Presence = "online" | "away" | "offline" | string;

type Person = {
  id: string;
  name: string;
  role: Role;
  presence: Presence;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  tasksAssigned?: number;
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
   Portrait Employee Card
   - tall card: height > width
   ============================ */
type EmployeeCardProps = {
  person: Person;
  onOpenDetails: (p: Person) => void;
  onMessage: (p: Person) => void;
};

const EmployeeCard = React.forwardRef<HTMLButtonElement, EmployeeCardProps>(
  ({ person, onOpenDetails, onMessage }, ref) => {
    const isOnline = person.presence === "online";

    return (
      <motion.button
        ref={ref}
        type="button"
        onClick={() => onOpenDetails(person)}
        whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(15,23,42,0.12)" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-[230px] min-h-[280px] bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-stretch text-left focus:outline-none focus:ring-2 focus:ring-blue-500/40 hover:border-blue-300"
      >
        {/* Top: avatar + name + role */}
        <div className="flex flex-col items-center px-4 pt-4">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium ${
              isOnline
                ? "bg-gradient-to-br from-emerald-500 to-teal-400 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {person.name?.[0] ?? "U"}
          </div>

          <div className="mt-3 text-center">
            <div className="text-sm font-semibold text-slate-900 truncate max-w-[200px]">
              {person.name}
            </div>
            <div className="text-xs text-slate-500 truncate max-w-[200px] mt-0.5">
              {person.role}
            </div>
          </div>

          {/* Presence pill */}
          <div className="mt-2">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${
                isOnline
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "bg-slate-50 text-slate-500 border border-slate-100"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOnline
                    ? "bg-emerald-500"
                    : person.presence === "away"
                    ? "bg-amber-400"
                    : "bg-slate-400"
                }`}
              />
              <span className="capitalize">{person.presence}</span>
            </span>
          </div>
        </div>

        {/* Middle: small info */}
        <div className="flex-1 px-4 pt-3 pb-2 text-xs text-slate-600 space-y-1.5">
          <div className="flex items-center gap-2 truncate">
            <MailIcon className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{person.email ?? "No email"}</span>
          </div>
          {person.location && (
            <div className="flex items-center gap-2 truncate">
              <Globe className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{person.location}</span>
            </div>
          )}
          {typeof person.tasksAssigned === "number" && (
            <div className="flex items-center gap-2 truncate">
              <UserCheck className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{person.tasksAssigned} tasks assigned</span>
            </div>
          )}
        </div>

        {/* Footer: actions */}
        <div className="px-4 pb-4 pt-2 mt-auto flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(person);
            }}
            className="flex-1 px-2 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[11px] font-medium text-slate-700"
          >
            View details
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMessage(person);
            }}
            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            aria-label={`Message ${person.name}`}
          >
            <MailIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.button>
    );
  }
);

EmployeeCard.displayName = "EmployeeCard";

/* ============================
   Person Modal (details + actions)
   ============================ */
const PersonModal: React.FC<{
  person: Person | null;
  open: boolean;
  onClose: () => void;
  onMessageClick: (person: Person) => void;
  initialFocusRef?: React.RefObject<HTMLButtonElement | null>;
}> = ({ person, open, onClose, onMessageClick, initialFocusRef }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(
        () => closeButtonRef.current?.focus(),
        60
      );
      return () => clearTimeout(t);
    }
    if (initialFocusRef?.current) {
      try {
        initialFocusRef.current.focus();
      } catch {
        /* ignore */
      }
    }
  }, [open, initialFocusRef]);

  if (!person) return null;

  return (
    <AnimatePresence>
      {open && (
        <Modal
          onClose={onClose}
          ariaLabel={`Details for ${person.name}`}
        >
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
                    person.presence === "online"
                      ? "bg-gradient-to-br from-emerald-500 to-teal-400"
                      : "bg-slate-100"
                  }`}
                >
                  <UserIcon
                    className={`w-6 h-6 ${
                      person.presence === "online"
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  />
                </div>

                <div>
                  <div className="text-lg font-semibold text-slate-900">
                    {person.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {person.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconButton
                  ariaLabel="Close details"
                  title="Close"
                  onClick={onClose}
                  className="bg-slate-50"
                >
                  <XIcon className="w-4 h-4" />
                </IconButton>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500">
                    Contact
                  </div>
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
                  <div className="text-xs text-slate-500">
                    Work
                  </div>
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
                      <span>
                        {person.tasksAssigned ?? 0} tasks assigned
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500">
                    Activity & metrics
                  </div>
                  <div className="mt-1 text-sm text-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        Response rate
                      </div>
                      <div className="font-medium">
                        {person.respondRate ?? 0}%
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        Presence
                      </div>
                      <div className="font-medium capitalize">
                        {person.presence}
                      </div>
                    </div>
                    {person.label && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600">
                          Tag
                        </div>
                        <div
                          className={`px-2 py-0.5 rounded-md text-xs font-medium ${person.label.colorClass}`}
                        >
                          {person.label.text}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500">
                    Actions
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onMessageClick(person)}
                      className="px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200"
                    >
                      <MailIcon className="w-4 h-4" />
                      Message
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        console.log("Call", person.id)
                      }
                      className="px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Call
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        console.log("More actions", person.id)
                      }
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
   Message Modal: opens a TeamChat for a direct chat
   ============================ */
const MessageModal: React.FC<{
  open: boolean;
  onClose: () => void;
  memberId: string | null;
  memberName?: string | null;
  currentUser: { id: string; name?: string } | null;
}> = ({
  open,
  onClose,
  memberId,
  memberName,
  currentUser,
}) => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!open) {
      setChatId(null);
      setErrorText(null);
      return;
    }
    if (!memberId) return;

    let cancelled = false;

    const ensureChat = async () => {
      setLoading(true);
      setErrorText(null);

      try {
        const meId = currentUser?.id
          ? String(currentUser.id)
          : null;

        // 1) try to find an existing direct chat involving this member (and me if known)
        try {
          const qRes = await fetch(`/api/chats`, {
            credentials: "same-origin",
          });
          if (!cancelled && qRes.ok) {
            const j = await qRes.json().catch(() => ({}));
            const list: any[] =
              j?.chats ?? j?.items ?? j ?? [];

            const found =
              list.find((c) => {
                if (!c) return false;

                const t = (
                  c.type ?? c.chatType ?? ""
                )
                  .toString()
                  .toLowerCase();
                const isDirectType =
                  t.includes("direct") ||
                  t.includes("dm") ||
                  t.includes("one_to_one") ||
                  t.includes("private");

                const rawMembers =
                  c.members ??
                  c.participants ??
                  c.users ??
                  c.userIds ??
                  c.memberIds ??
                  c.participantIds ??
                  [];

                if (!Array.isArray(rawMembers))
                  return false;

                const ids = rawMembers
                  .map((m: any) => {
                    if (
                      m === null ||
                      m === undefined
                    )
                      return null;
                    if (
                      typeof m === "string" ||
                      typeof m === "number"
                    ) {
                      return String(m);
                    }
                    // object: try common shapes
                    return (
                      (m.userId ??
                        m.id ??
                        m._id ??
                        m.user?.id ??
                        m.user?._id ??
                        null) &&
                      String(
                        m.userId ??
                          m.id ??
                          m._id ??
                          m.user?.id ??
                          m.user?._id
                      )
                    );
                  })
                  .filter(Boolean) as string[];

                const targetId = String(memberId);
                const hasMember = ids.includes(targetId);
                const hasMe =
                  meId ? ids.includes(meId) : true;

                // prefer 1:1-ish conversations
                const isOneToOne = ids.length <= 2;

                return (
                  hasMember &&
                  hasMe &&
                  (isDirectType || isOneToOne)
                );
              }) ?? null;

            if (found) {
              const id =
                found.id ??
                found.chatId ??
                found._id ??
                null;
              if (id && !cancelled) {
                setChatId(String(id));
                setLoading(false);
                return;
              }
            }
          }
        } catch (e) {
          console.warn("chat list check failed:", e);
        }

        // 2) Try several possible payload shapes to create a new direct chat
        const attempts = [
          {
            body: {
              type: "direct",
              memberId,
              userIds: meId ? [meId, memberId] : [memberId],
            },
            label: "type:direct + memberId + userIds",
          },
          {
            body: {
              type: "direct",
              userId: memberId,
              userIds: meId ? [meId, memberId] : [memberId],
            },
            label: "type:direct + userId + userIds",
          },
          {
            body: {
              type: "direct",
              userIds: meId ? [meId, memberId] : [memberId],
            },
            label: "type:direct + userIds",
          },
          {
            body: {
              userIds: meId ? [meId, memberId] : [memberId],
            },
            label: "userIds: [me, member]",
          },
          {
            body: {
              memberIds: meId ? [meId, memberId] : [memberId],
            },
            label: "memberIds: [me, member]",
          },
          {
            body: {
              participantIds: meId
                ? [meId, memberId]
                : [memberId],
            },
            label: "participantIds: [me, member]",
          },
          {
            body: { directTo: memberId },
            label: "directTo: memberId",
          },
        ];

        for (const a of attempts) {
          if (cancelled) return;

          try {
            const res = await fetch("/api/chats", {
              method: "POST",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(a.body),
            });

            if (cancelled) return;

            if (res.ok) {
              const j = await res
                .json()
                .catch(() => ({}));
              const created =
                j?.chat ?? j?.message ?? j ?? {};
              const id =
                created.id ??
                created.chatId ??
                created._id ??
                null;
              if (id) {
                setChatId(String(id));
                setLoading(false);
                return;
              }
            } else {
              const txt = await res
                .text()
                .catch(() => "");
              console.warn(
                `[create chat attempt "${a.label}" returned ${res.status}]`,
                txt
              );
              setErrorText(
                `Attempt "${a.label}" → ${res.status}: ${txt}`
              );
            }
          } catch (e: any) {
            console.warn(
              `create attempt "${a.label}" failed:`,
              e
            );
            setErrorText(
              `Attempt "${a.label}" failed: ${String(
                e?.message ?? e
              )}`
            );
          }
        }

        if (!cancelled) {
          setChatId(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void ensureChat();

    return () => {
      cancelled = true;
    };
  }, [open, memberId, currentUser]);

  return (
    <AnimatePresence>
      {open && (
        <Modal
          onClose={onClose}
          ariaLabel={`Chat with ${memberName ?? "member"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.14 }}
            className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Chat with {memberName ?? "member"}
                  </div>
                  <div className="text-xs text-slate-500">
                    {chatId
                      ? `Chat: ${chatId}`
                      : loading
                      ? "Preparing chat…"
                      : errorText
                      ? "Could not create chat"
                      : "Preparing chat…"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1 rounded-md bg-slate-50 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-4 min-h-[320px]">
              {loading ? (
                <div className="text-sm text-slate-500">
                  Preparing chat…
                </div>
              ) : chatId ? (
                // render TeamChat for this chatId
                // @ts-ignore (dynamic import client-only)
                <div className="h-[60vh]">
                  <TeamChat
                    chatId={chatId}
                    currentUser={
                      currentUser
                        ? {
                            id: currentUser.id,
                            name: currentUser.name,
                          }
                        : { id: "me" }
                    }
                  />
                </div>
              ) : (
                <div className="text-sm text-rose-600">
                  Couldn't create chat automatically. Please
                  try again or contact your administrator.
                  {errorText && (
                    <div className="mt-2 text-xs text-slate-500 break-words max-h-32 overflow-auto border-t pt-2">
                      {errorText}
                    </div>
                  )}
                </div>
              )}
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
  const [filter, setFilter] = useState<
    "all" | "online" | "offline" | "role"
  >("all");
  const [team, setTeam] = useState<string>("Growth Team");

  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedPerson, setSelectedPerson] =
    useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const lastTriggerRef =
    useRef<HTMLButtonElement | null>(null);

  // message modal state
  const [messageModalOpen, setMessageModalOpen] =
    useState(false);
  const [messageTargetId, setMessageTargetId] =
    useState<string | null>(null);
  const [messageTargetName, setMessageTargetName] =
    useState<string | null>(null);

  const router = useRouter();

  // fetch current user (manager) to pass to TeamChat
  const [me, setMe] = useState<{ id: string; name?: string } | null>(
    null
  );
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/me", {
          credentials: "same-origin",
        });
        if (!r.ok) return;
        const j = await r.json().catch(() => ({}));
        const user = j?.user ?? j ?? null;
        if (user?.id)
          setMe({
            id: String(user.id),
            name: user.name ?? undefined,
          });
      } catch {
        // ignore
      }
    })();
  }, []);

  // load teams -> pick team by name -> fetch members
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1) fetch teams list
        const res = await fetch("/api/teams", {
          credentials: "same-origin",
        });
        if (!res.ok)
          throw new Error(`teams fetch failed ${res.status}`);
        const j = await res.json().catch(() => ({}));
        const list: any[] =
          j?.teams ?? j?.items ?? j ?? [];

        // 2) find team by name (fallback to first)
        const foundTeam =
          list.find(
            (t: any) =>
              String(t.name || "").toLowerCase() ===
              team.toLowerCase()
          ) ?? list[0] ?? null;
        if (!foundTeam) {
          if (!cancelled) setPeople([]);
          return;
        }

        const teamId =
          foundTeam.id ??
          foundTeam.teamId ??
          foundTeam._id ??
          null;
        if (!teamId) {
          if (!cancelled) setPeople([]);
          return;
        }

        // 3) fetch team details
        const detailRes = await fetch(
          `/api/teams/${encodeURIComponent(teamId)}`,
          { credentials: "same-origin" }
        );
        if (!detailRes.ok) {
          const errText = await detailRes
            .text()
            .catch(() => "");
          throw new Error(
            `team detail failed ${detailRes.status} ${errText}`
          );
        }
        const dj = await detailRes
          .json()
          .catch(() => ({}));
        const teamObj = dj?.team ?? dj ?? {};

        // 4) map members to Person[]
        const members = (teamObj.members ?? []).map(
          (m: any) => {
            const id =
              m.userId ?? m.user?.id ?? m.id ?? null;
            const name =
              m.name ??
              m.user?.name ??
              (m.user ? `${m.user.name}` : null) ??
              (id ? `User ${id}` : "Unknown");
            return {
              id: String(id ?? ""),
              name: name ?? "Unknown",
              role: (m.role ?? m.user?.role ?? "Employee") as Role,
              presence: "offline" as Presence,
              email:
                m.email ?? m.user?.email ?? null,
              phone: null,
              location: null,
              tasksAssigned: 0,
              respondRate: 0,
              hiredAt: null,
              starred: false,
              label: null,
            } as Person;
          }
        );

        if (!cancelled) setPeople(members);
      } catch (err: any) {
        console.warn("Failed to load people:", err);
        if (!cancelled)
          setError("Failed to load team members");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [team]);

  // click handlers
  const openPersonModal = (
    person: Person,
    triggerRef?: React.RefObject<HTMLButtonElement>
  ) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
    if (triggerRef?.current)
      lastTriggerRef.current = triggerRef.current;
  };

  const closePersonModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const handleMessageClick = (person: Person) => {
    setMessageTargetId(person.id);
    setMessageTargetName(person.name);
    setMessageModalOpen(true);
  };

  // search + filter
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return people.filter((p) => {
      const matchesSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        (p.email ?? "")
          .toLowerCase()
          .includes(q) ||
        String(p.role ?? "")
          .toLowerCase()
          .includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "online" &&
          p.presence === "online") ||
        (filter === "offline" &&
          p.presence === "offline") ||
        (filter === "role" &&
          p.role === "Team Lead");
      return matchesSearch && matchesFilter;
    });
  }, [people, searchQuery, filter]);

  const onlineCount = people.filter(
    (p) => p.presence === "online"
  ).length;
  const totalCount = people.length;
  const avgResponse =
    Math.round(
      (people.reduce(
        (s, p) => s + (p.respondRate ?? 0),
        0
      ) /
        (people.length || 1)) *
        1
    ) / 1;

  // refs per person card to restore focus
  const cardRefs =
    useRef<
      Map<string, React.RefObject<HTMLButtonElement>>
    >(new Map());
  people.forEach((p) => {
    if (!cardRefs.current.has(p.id))
      cardRefs.current.set(
        p.id,
        React.createRef<HTMLButtonElement>()
      );
  });

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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg"
                >
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

          <p className="text-sm text-slate-500 mt-2">
            Browse and message members of your team.
            Click a card to view details or message
            directly.
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
                  aria-label="Search people"
                  placeholder="Search people, email, role..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <button
                    onClick={() => setFilter("all")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${
                      filter === "all"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("online")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${
                      filter === "online"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    Online
                  </button>
                  <button
                    onClick={() => setFilter("offline")}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-sm ${
                      filter === "offline"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <label
                  className="sr-only"
                  htmlFor="team-select-people"
                >
                  Choose team
                </label>
                <select
                  id="team-select-people"
                  value={team}
                  onChange={(e) =>
                    setTeam(e.target.value)
                  }
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
                    router.push("/auth/invite"); // kept as-is
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
            </div>
          </div>

          {/* grid of tall cards */}
          <div className="p-4 sm:p-6">
            {loading ? (
              <div className="py-10 text-center text-sm text-slate-500">
                Loading members…
              </div>
            ) : error ? (
              <div className="py-10 text-center text-sm text-rose-600">
                {error}
              </div>
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {filtered.map((person) => {
                  const ref =
                    cardRefs.current.get(person.id) ??
                    React.createRef<HTMLButtonElement>();
                  cardRefs.current.set(person.id, ref);

                  return (
                    <EmployeeCard
                      key={person.id}
                      ref={ref}
                      person={person}
                      onOpenDetails={(p) =>
                        openPersonModal(p, ref)
                      }
                      onMessage={handleMessageClick}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  No members found
                </h3>
                <p className="text-slate-500">
                  Try adjusting your search, filters, or team
                  selection
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Person details modal */}
      <PersonModal
        person={selectedPerson}
        open={isModalOpen}
        onClose={closePersonModal}
        onMessageClick={handleMessageClick}
        initialFocusRef={lastTriggerRef}
      />

      {/* Message modal (TeamChat) */}
      <MessageModal
        open={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
        memberId={messageTargetId}
        memberName={messageTargetName ?? undefined}
        currentUser={me}
      />
    </main>
  );
}
