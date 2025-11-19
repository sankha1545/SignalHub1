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
} from "lucide-react";
import ProfileMenu from "@/components/forms/ProfileMenu";

type Portal = "admin" | "manager" | "employee" | undefined;

type Props = {
  portal?: Portal;
  /**
   * Optional controlled open state for mobile drawer.
   * If not provided, the component manages open state internally.
   */
  isOpen?: boolean;
  /**
   * Optional callback invoked when the mobile drawer should close (escape, backdrop, link click).
   */
  onClose?: () => void;
  /**
   * Optional prop to hide the built-in floating hamburger toggle (useful if your header has its own).
   * Default: false (toggle shown)
   */
  hideToggle?: boolean;
};

/**
 * Sidebar component
 *
 * - Desktop: fixed to the left (lg+). Width is w-72 and min-h-screen; this guarantees consistent alignment.
 * - Mobile: floating hamburger toggle (unless hideToggle=true) opens a slide-in drawer (w-80).
 * - Controlled/uncontrolled mobile open state supported via isOpen/onClose props.
 * - Preserves all original UI: search, badges, framer-motion animations, profile menu, quick actions.
 */
export default function Sidebar({
  portal = "admin",
  isOpen: isOpenProp,
  onClose,
  hideToggle = false,
}: Props) {
  const rawPath = usePathname() ?? "/";
  const pathname = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");

  // Controlled/uncontrolled pattern for mobile drawer open state
  const [internalOpen, setInternalOpen] = useState(false);
  const openControlled = typeof isOpenProp === "boolean";
  const open = openControlled ? isOpenProp! : internalOpen;
  const setOpen = (next: boolean) => {
    if (openControlled) {
      if (!next && onClose) onClose();
      // note: when controlled and onClose not provided, parent should manage
    } else {
      setInternalOpen(next);
      if (!next && onClose) onClose(); // still call onClose for side-effects if provided
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close mobile drawer with Escape
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpenProp]);

  // Focus close button when drawer opens (accessibility)
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  // NAV configuration (preserve your original structure)
  const NAV =
    portal === "admin"
      ? [
          {
            id: "overview",
            label: "Overview",
            href: "/dashboard/admin/overview",
            icon: LayoutDashboard,
            gradient: "from-blue-500 to-cyan-500",
            badge: null,
          },
          {
            id: "inbox",
            label: "Inbox",
            href: "/dashboard/admin/inbox",
            icon: Inbox,
            gradient: "from-emerald-500 to-teal-500",
            badge: 12,
          },
          {
            id: "sent",
            label: "Sent",
            href: "/dashboard/admin/sent",
            icon: Send,
            gradient: "from-violet-500 to-purple-500",
            badge: null,
          },
          {
            id: "teams",
            label: "Teams",
            href: "/dashboard/admin/teams",
            icon: Users,
            gradient: "from-orange-500 to-rose-500",
            badge: null,
          },
          {
            id: "analytics",
            label: "Analytics",
            href: "/dashboard/admin/analytics",
            icon: BarChart3,
            gradient: "from-pink-500 to-rose-500",
            badge: null,
          },
          {
            id: "settings",
            label: "Settings",
            href: "/dashboard/admin/settings",
            icon: Settings,
            gradient: "from-slate-500 to-slate-700",
            badge: null,
          },
        ]
      : [
          {
            id: "analytics",
            label: "Analytics",
            href: "/dashboard",
            icon: BarChart3,
            gradient: "from-pink-500 to-rose-500",
            badge: null,
          },
        ];

  // Compute active item based on normalized pathname (preserve logic)
  const computeActive = (path: string) => {
    if (portal === "admin") {
      if (path.startsWith("/dashboard/admin/analytics")) return "analytics";
      if (path.startsWith("/dashboard/admin/overview")) return "overview";
      if (path.startsWith("/dashboard/admin/inbox")) return "inbox";
      if (path.startsWith("/dashboard/admin/sent")) return "sent";
      if (path.startsWith("/dashboard/admin/teams")) return "teams";
      if (path.startsWith("/dashboard/admin/settings")) return "settings";
      if (path === "/dashboard") return "analytics";
    } else {
      if (path.startsWith("/dashboard")) return "analytics";
    }
    return undefined;
  };

  const activeId = computeActive(pathname);
  const filteredNav = NAV.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sidebar inner content (keeps original structure/animations)
  const sidebarContent = (isMobile = false) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
              S
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="flex-1">
            <div className="text-base font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              SignalHub
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Unified Inbox
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.32, delay: 0.06 }}
        >
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
      <nav
        className="flex-1 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
        aria-label="Primary"
      >
        <div className="space-y-1">
          {filteredNav.map((item, index) => {
            const Icon = item.icon as any;
            const isActive = activeId === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, delay: index * 0.03 }}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    if (isMobile) setOpen(false);
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={clsx(
                    "relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Icon with gradient background */}
                  <div className="relative">
                    <motion.div
                      className={clsx(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200",
                        isActive
                          ? `bg-gradient-to-br ${item.gradient} shadow-lg`
                          : "bg-slate-100 group-hover:bg-slate-200"
                      )}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon className={clsx("w-4 h-4 transition-colors", isActive ? "text-white" : "text-slate-600")} />
                    </motion.div>

                    {/* Notification badge */}
                    {item.badge && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gradient-to-br from-rose-500 to-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg"
                        aria-hidden="true"
                      >
                        {item.badge}
                      </motion.div>
                    )}
                  </div>

                  {/* Label */}
                  <span className="flex-1 text-left">{item.label}</span>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: isHovered && !isActive ? 1 : 0, x: isHovered && !isActive ? 0 : -5 }}
                    transition={{ duration: 0.18 }}
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </motion.div>

                  {/* Active arrow */}
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

        {/* Quick actions */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, delay: 0.18 }} className="mt-6 mb-4 px-3">
          <div className="mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Actions</div>
          <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="text-sm font-bold mb-1">Upgrade to Pro</div>
              <div className="text-xs opacity-90 mb-3">Unlock premium features</div>
              <motion.div className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn more
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </nav>

      {/* Profile section */}
      <div className="p-4 border-t border-slate-200 bg-slate-50/50">
        <ProfileMenu />
      </div>
    </div>
  );

  return (
    <>
      {/* Floating mobile hamburger toggle (keeps original behavior). If parent provides header and wants to handle toggling,
          pass hideToggle={true} and control via props isOpen/onClose. */}
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

      {/* Desktop fixed left sidebar: fixed ensures it is flush to the left in all pages */}
      <motion.aside
        initial={{ x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.36 }}
        className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:flex-col lg:w-72 lg:min-h-screen lg:border-r lg:border-slate-200 lg:bg-white/80 lg:backdrop-blur-xl z-30"
        aria-hidden={false}
      >
        {sidebarContent(false)}
      </motion.aside>

      {/* Mobile drawer (overlay) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
            >
              {/* Close button (visible inside drawer) */}
              <div className="absolute top-4 right-4 z-10">
                <motion.button
                  ref={closeBtnRef}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
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
