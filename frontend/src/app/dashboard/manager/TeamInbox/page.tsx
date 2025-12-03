// src/app/dashboard/manager/TeamInbox/page.tsx
"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  MoreVertical,
  Clock,
  Inbox as InboxIcon,
  User,
  Users,
  UserCheck,
} from "lucide-react";
import { useChatSocket } from "@/app/dashboard/ChatSocketProvider";

/* ==========================
   Dynamic imports (client only)
   ========================== */
const TeamChat = dynamic(
  () => import("@/components/chat/TeamChat").then((m) => m.default),
  { ssr: false }
);

/* ==========================
   Types
   ========================== */
type FilterKey = "all" | "assigned" | "unassigned" | "flagged";

type ChatSummary = {
  id: string;
  name?: string | null;
  type?: "team" | "direct" | string;
  teamId?: string | null;
  lastMessagePreview?: string | null;
  lastMessageSender?: string | null;
  unreadCount?: number;
  meta?: any;
  participants?: any[] | null; // optional participants array (may be ids or objects)
};

type MinimalUser = {
  id: string;
  role?: string;
  name?: string;
  email?: string;
  organizationId?: string | null;
};

/* ==========================
   Local persistence & cross-tab events
   ========================== */
const LOCAL_KEY_STATUS = "chat_status_map_v1";

function readLocalStatusMap(): Record<string, { status: string; updatedAt: number }> {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY_STATUS) || "{}");
  } catch {
    return {};
  }
}

function writeLocalStatusMap(
  m: Record<string, { status: string; updatedAt: number }>
) {
  try {
    localStorage.setItem(LOCAL_KEY_STATUS, JSON.stringify(m));
    try {
      window.dispatchEvent(
        new CustomEvent("chatStatusUpdate", {
          detail: { map: m },
        })
      );
    } catch {
      // ignore
    }
  } catch {
    // ignore
  }
}

/* ==========================
   Small IconButton
   ========================== */
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

/* ==========================
   FilterButtons
   ========================== */
const FilterButtons: React.FC<{
  active: FilterKey;
  onChange: (v: FilterKey) => void;
}> = ({ active, onChange }) => {
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
              isActive
                ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
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

/* ==========================
   Helper: derive display name for a chat (consistent with TeamChat)
   - Prefer other participant's name for direct chat
   - Fallback to meta/lastMessageSender/chat.name/id
   ========================== */
function deriveDisplayName(chat: ChatSummary, me: MinimalUser | null): string {
  if ((chat.type ?? "").toString().toLowerCase() !== "direct") {
    return chat.name ?? chat.meta?.name ?? `Chat ${chat.id}`;
  }

  const candidates: any[] =
    chat.participants ??
    chat.meta?.participants ??
    chat.meta?.members ??
    chat.meta?.users ??
    chat.meta?.participantIds ??
    chat.meta?.membersList ??
    [];

  if (Array.isArray(candidates) && candidates.length > 0) {
    const normalized = candidates
      .map((p) => {
        if (!p) return null;
        if (typeof p === "string" || typeof p === "number") {
          return { id: String(p), name: String(p) };
        }
        return {
          id:
            p.id ??
            p.userId ??
            p._id ??
            p.uid ??
            (p.user && (p.user.id ?? p.user._id)) ??
            null,
          name:
            p.name ??
            p.displayName ??
            p.user?.name ??
            (p.email ? p.email.split("@")[0] : null) ??
            null,
        };
      })
      .filter(Boolean) as { id: string | null; name: string | null }[];

    if (me && me.id != null) {
      const other = normalized.find((n) => n.id && String(n.id) !== String(me.id));
      if (other?.name) return other.name;
      if (other?.id) return other.id;
    }

    const firstNamed = normalized.find((n) => n && n.name);
    if (firstNamed) return firstNamed.name!;
  }

  if (chat.lastMessageSender) return chat.lastMessageSender;

  return chat.name ?? chat.meta?.name ?? `Chat ${chat.id}`;
}

/* ==========================
   MessageCard (preview)
   ========================== */
const MessageCard: React.FC<{
  chat: ChatSummary;
  isSelected: boolean;
  onSelect: () => void;
  delay?: number;
  chatStatusMap: Record<string, { status: string; updatedAt: number }>;
}> = ({ chat, isSelected, onSelect, delay = 0, chatStatusMap }) => {
  const [hover, setHover] = useState(false);

  const statusEntry = chatStatusMap?.[chat.id] ?? null;
  const status = statusEntry?.status ?? null;
  const isPending = !!status && status !== "seen";
  const previewText =
    chat.lastMessagePreview ??
    (chat.type === "team" ? "Team chat — no messages yet" : "No messages yet");
  const senderName = chat.lastMessageSender ?? null;
  const previewDisplay = senderName ? `${senderName}: ${previewText}` : previewText;

  const RenderTicks: React.FC = () => {
    if (!status) return null;
    if (status === "sent")
      return (
        <span title="Sent" className="text-xs text-slate-500">
          ✓
        </span>
      );
    if (status === "delivered")
      return (
        <span title="Delivered" className="text-xs text-slate-500">
          ✓✓
        </span>
      );
    if (status === "seen")
      return (
        <span title="Seen" className="text-xs text-blue-500">
          ✓✓
        </span>
      );
    return null;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      className={`relative p-3 rounded-xl border transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        isSelected ? "bg-blue-50 border-blue-200 shadow-md" : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300">
          <User className="w-5 h-5 text-slate-600" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <h3
                className={`text-sm truncate ${
                  isPending ? "font-semibold text-slate-900" : "font-medium text-slate-800"
                }`}
                title={chat.name ?? undefined}
              >
                {chat.name}
              </h3>

              {isPending && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                />
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
            </div>
          </div>

          <h4
            className={`text-sm mb-1 truncate ${
              isPending ? "font-semibold text-slate-700" : "text-slate-600"
            }`}
            title={previewDisplay}
          >
            {previewDisplay}
          </h4>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              {chat.type === "team" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600">
                  Group
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600">
                  Direct
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              {chat.unreadCount ? (
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium">
                  {chat.unreadCount}
                </span>
              ) : null}
              <RenderTicks />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          className="flex items-center gap-1"
        >
          <IconButton ariaLabel="More" title="More">
            <MoreVertical className="w-4 h-4" />
          </IconButton>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            layoutId="selectedIndicator-manager"
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

/* ==========================
   Main TeamInbox Page
   ========================== */
export default function TeamInboxPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [teamSelect] = useState<string>("Growth Team");

  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState<MinimalUser | null>(null);

  const chatSocket = useChatSocket();

  const [chatStatusMap, setChatStatusMap] = useState<
    Record<string, { status: string; updatedAt: number }>
  >(() => readLocalStatusMap());

  // ref to always have latest chats for openDirectChat listener
  const chatsRef = useRef<ChatSummary[]>([]);
  useEffect(() => {
    chatsRef.current = chats;
  }, [chats]);

  /* -------------------------
     API: load chats & normalize
     ------------------------- */
  const loadChats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chats", {
        credentials: "same-origin",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json().catch(() => ({}));
      const payload = (j?.chats ?? j?.items ?? j ?? []) as ChatSummary[];

      const normalized = payload.map((c) => {
        const participants =
          c.participants ?? c.meta?.participants ?? c.meta?.members ?? null;
        const lastMessagePreview =
          c.lastMessagePreview ??
          c.meta?.lastMessage?.content ??
          c.meta?.lastMessage?.text ??
          null;
        const lastMessageSender =
          c.lastMessageSender ??
          c.meta?.lastMessage?.senderName ??
          c.meta?.lastMessage?.from ??
          null;
        const type = (c.type ?? c.meta?.type ?? (c.teamId ? "team" : "direct")) as any;
        return {
          ...c,
          participants,
          lastMessagePreview,
          lastMessageSender,
          type,
        } as ChatSummary;
      });

      setChats(normalized);
      if (!selectedChatId && normalized.length > 0) {
        setSelectedChatId(normalized[0].id);
      }
    } catch (err: any) {
      console.warn("Failed to load chats:", err);
      setError("Could not load chats");
      setChats([]);
    } finally {
      setLoading(false);
    }
  }, [selectedChatId]);

  /* -------------------------
     API: load current user
     ------------------------- */
  const loadMe = useCallback(async () => {
    try {
      const res = await fetch("/api/me", {
        credentials: "include",
      });
      if (!res.ok) {
        setCurrentUser(null);
        return;
      }
      const j = await res.json().catch(() => ({}));
      const u = j?.user ?? j ?? null;
      if (u && u.id) {
        setCurrentUser({
          id: String(u.id),
          role: u.role ?? null,
          name: u.name ?? null,
          email: u.email ?? null,
          organizationId: u.organizationId ?? null,
        });
      } else {
        setCurrentUser(null);
      }
    } catch (e) {
      console.warn("Failed to load /api/me:", e);
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    loadMe();
    void loadChats();

    const onStorage = (ev: StorageEvent) => {
      if (ev.key === LOCAL_KEY_STATUS) setChatStatusMap(readLocalStatusMap());
    };
    window.addEventListener("storage", onStorage);

    const onCustom = () => setChatStatusMap(readLocalStatusMap());
    window.addEventListener("chatStatusUpdate", onCustom as EventListener);

    // listen for external requests to open a direct chat (used by People -> Message button)
    const openHandler = (ev: Event) => {
      const d = (ev as CustomEvent).detail ?? {};
      const memberId = d?.memberId ?? null;
      if (!memberId) return;

      const currentChats = chatsRef.current;

      const found = currentChats.find((c) => {
        if ((c.type ?? "").toString().toLowerCase() !== "direct") return false;
        const parts = c.participants ?? c.meta?.participants ?? [];
        if (!Array.isArray(parts)) return false;
        return parts.some((p: any) => {
          if (!p) return false;
          if (typeof p === "string" || typeof p === "number")
            return String(p) === String(memberId);
          const id =
            p.id ?? p.userId ?? p._id ?? (p.user && (p.user.id ?? p.user._id));
          return id && String(id) === String(memberId);
        });
      });

      if (found) {
        setSelectedChatId(found.id);
      } else {
        window.dispatchEvent(
          new CustomEvent("createDirectChat", {
            detail: { memberId },
          })
        );
      }
    };
    window.addEventListener("openDirectChat", openHandler as EventListener);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("chatStatusUpdate", onCustom as EventListener);
      window.removeEventListener("openDirectChat", openHandler as EventListener);
    };
  }, [loadChats, loadMe]); // NOTE: no `chats` here

  /* -------------------------
     When me becomes available: resolve direct chat display names
     ------------------------- */
  useEffect(() => {
    if (!currentUser) return;
    setChats((prev) =>
      prev.map((c) => {
        if ((c.type ?? "").toString().toLowerCase() === "direct") {
          const name = deriveDisplayName(c, currentUser);
          return { ...c, name };
        }
        return c;
      })
    );
  }, [currentUser]);

  /* -------------------------
     Socket handlers (team created, chat message, delivered, read)
     ------------------------- */
  useEffect(() => {
    if (!chatSocket) return;

    const handleTeamCreated = (payload: any) => {
      const newChat =
        payload?.chat ??
        (payload?.team
          ? {
              id: payload.team.id,
              name: payload.team.name,
              teamId: payload.team.id,
            }
          : null);
      if (!newChat) return;
      setChats((prev) => {
        if (prev.find((c) => c.id === newChat.id)) return prev;
        const inserted: ChatSummary = {
          id: newChat.id,
          name: newChat.name ?? `Team ${newChat.teamId ?? ""}`,
          type: "team",
          teamId: newChat.teamId ?? null,
          lastMessagePreview: null,
          lastMessageSender: null,
          unreadCount: 0,
          participants: newChat.participants ?? null,
        };
        return [inserted, ...prev];
      });
    };

    const handleChatMessage = (rawPayload: any) => {
      const payload = rawPayload?.message ? rawPayload : { message: rawPayload.message ?? rawPayload, ...rawPayload };

      let chatId =
        payload?.chatId ??
        payload?.chat?.id ??
        payload?.room ??
        payload?.message?.chatId ??
        null;

      if (typeof chatId === "string" && chatId.startsWith("chat:")) {
        chatId = chatId.slice("chat:".length);
      }

      if (!chatId) return;

      const msg = payload?.message ?? payload;
      const text = msg?.content ?? msg?.text ?? "";
      const senderName =
        msg?.sender?.name ??
        msg?.senderName ??
        msg?.fromName ??
        msg?.from ??
        null;

      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== String(chatId)) return c;
          const preview = text.length > 120 ? text.slice(0, 120) + "…" : text;
          let name = c.name;

          if ((c.type ?? "").toString().toLowerCase() === "direct") {
            if ((!name || name === "Chat" || name.startsWith("Chat ")) && senderName) {
              name = senderName;
            }
            const parts = c.participants ?? c.meta?.participants ?? c.meta?.members ?? null;
            if (!name && Array.isArray(parts) && parts.length > 0 && currentUser?.id) {
              const other = parts
                .map((p: any) => {
                  if (!p) return null;
                  if (typeof p === "string" || typeof p === "number") {
                    return { id: String(p), name: String(p) };
                  }
                  return {
                    id: p.id ?? p.userId ?? p._id ?? null,
                    name: p.name ?? p.displayName ?? p.user?.name ?? null,
                  };
                })
                .find(
                  (p: any) =>
                    p &&
                    p.id &&
                    String(p.id) !== String(currentUser.id)
                );
              if (other?.name) name = other.name;
            }
          }

          return {
            ...c,
            lastMessagePreview: preview,
            lastMessageSender: senderName,
            unreadCount: (c.unreadCount ?? 0) + 1,
            name,
          };
        })
      );
    };

    const handleDelivered = (payload: any) => {
      const chatId = payload?.chatId ?? payload?.chat?.id ?? payload?.room ?? null;
      if (!chatId) return;
      const normalizedId =
        typeof chatId === "string" && chatId.startsWith("chat:")
          ? chatId.slice("chat:".length)
          : String(chatId);
      const map = readLocalStatusMap();
      map[normalizedId] = { status: "delivered", updatedAt: Date.now() };
      writeLocalStatusMap(map);
      setChatStatusMap({ ...map });
    };

    const handleRead = (payload: any) => {
      let chatId = payload?.chatId ?? payload?.chat?.id ?? payload?.room ?? null;
      if (!chatId) return;
      if (typeof chatId === "string" && chatId.startsWith("chat:")) {
        chatId = chatId.slice("chat:".length);
      }

      // WhatsApp-like: ignore my own read events for tick state
      const readerId = payload?.userId ?? payload?.user?.id ?? null;
      if (currentUser && readerId && String(readerId) === String(currentUser.id)) {
        return;
      }

      const map = readLocalStatusMap();
      map[String(chatId)] = { status: "seen", updatedAt: Date.now() };
      writeLocalStatusMap(map);
      setChatStatusMap({ ...map });
      setChats((prev) =>
        prev.map((c) =>
          c.id === String(chatId) ? { ...c, unreadCount: 0 } : c
        )
      );
    };

    try {
      chatSocket.on("team:created", handleTeamCreated);
      // listen to BOTH events: some flows may emit "chat:message", others just "message"
      chatSocket.on("chat:message", handleChatMessage);
      chatSocket.on("message", handleChatMessage);
      chatSocket.on("chat:delivered", handleDelivered);
      chatSocket.on("chat:read", handleRead);
    } catch (e) {
      console.warn("chatSocket registration failed:", e);
    }

    return () => {
      try {
        chatSocket.off("team:created", handleTeamCreated);
        chatSocket.off("chat:message", handleChatMessage);
        chatSocket.off("message", handleChatMessage);
        chatSocket.off("chat:delivered", handleDelivered);
        chatSocket.off("chat:read", handleRead);
      } catch {
        // ignore
      }
    };
  }, [chatSocket, currentUser]);

  /* -------------------------
     When selecting a chat: optimistically clear unread + mark seen locally & server
     ------------------------- */
  useEffect(() => {
    if (!selectedChatId) return;

    setChats((prev) =>
      prev.map((c) =>
        c.id === selectedChatId ? { ...c, unreadCount: 0 } : c
      )
    );

    const map = readLocalStatusMap();
    if (!map[selectedChatId] || map[selectedChatId].status !== "seen") {
      map[selectedChatId] = { status: "seen", updatedAt: Date.now() };
      writeLocalStatusMap(map);
      setChatStatusMap({ ...map });
    }

    try {
      void fetch(
        `/api/chats/${encodeURIComponent(selectedChatId)}/read`,
        {
          method: "POST",
          credentials: "same-origin",
        }
      );
    } catch {
      // ignore
    }
  }, [selectedChatId]);

  /* -------------------------
     Search + filter
     ------------------------- */
  const filteredChats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chats.filter((c) => {
      const matchesSearch =
        q === "" ||
        (c.name ?? "")
          .toString()
          .toLowerCase()
          .includes(q) ||
        (c.lastMessagePreview ?? "")
          .toLowerCase()
          .includes(q) ||
        (c.lastMessageSender ?? "")
          .toLowerCase()
          .includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "assigned" &&
          (c.meta?.assigned === true ||
            (c.type === "direct" && c.meta?.assignedTo))) ||
        (filter === "unassigned" &&
          !(
            c.meta?.assigned === true ||
            (c.type === "direct" && c.meta?.assignedTo)
          )) ||
        (filter === "flagged" && c.meta?.flagged === true);
      return matchesSearch && matchesFilter;
    });
  }, [chats, searchQuery, filter]);

  const unreadCount = chats.reduce(
    (acc, c) => acc + (c.unreadCount ?? 0),
    0
  );

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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg"
                >
                  {unreadCount}
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>{teamSelect}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserCheck className="w-4 h-4" />
                <span>assigned</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <InboxIcon className="w-4 h-4" />
                <span>total</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2">
            Manage incoming customer messages for your team. Outgoing messages show a tick state and a blue-dot until
            seen.
          </p>
        </header>

        {/* layout */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          {/* left: chat list */}
          <div className="p-4 border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  aria-label="Search chats"
                  placeholder="Search chats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                />
              </div>

              <div className="flex items-center gap-2">
                <FilterButtons
                  active={filter}
                  onChange={(v) => setFilter(v as FilterKey)}
                />
              </div>

              <div className="text-xs text-slate-500">Chats</div>

              <div className="space-y-3 max-h-[60vh] overflow-auto pt-2">
                {loading ? (
                  <div className="text-sm text-slate-500">Loading chats…</div>
                ) : error ? (
                  <div className="text-sm text-rose-600">{error}</div>
                ) : filteredChats.length === 0 ? (
                  <div className="py-8 text-center text-sm text-slate-500">
                    No chats found — create a team or start a direct chat to begin.
                  </div>
                ) : (
                  filteredChats.map((c, idx) => {
                    const display =
                      c.name ??
                      (currentUser
                        ? deriveDisplayName(c, currentUser)
                        : c.name ?? "Chat");
                    const normalized = { ...c, name: display };
                    return (
                      <MessageCard
                        key={c.id}
                        chat={normalized}
                        isSelected={selectedChatId === c.id}
                        onSelect={() => setSelectedChatId(c.id)}
                        delay={idx * 0.03}
                        chatStatusMap={chatStatusMap}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* right: viewer */}
          <div className="p-4 min-h-[60vh]">
            {selectedChatId ? (
              <div className="h-full rounded-md border border-slate-100 overflow-hidden">
                {/* @ts-ignore */}
                <TeamChat
                  chatId={selectedChatId}
                  currentUser={currentUser ?? { id: "unknown" }}
                />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <InboxIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">
                  Select a chat to begin
                </h3>
                <p className="text-sm">
                  Pick a team group chat or a direct thread to start messaging.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
