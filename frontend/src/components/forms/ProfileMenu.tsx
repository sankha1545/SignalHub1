// src/components/ProfileMenu.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  User as UserIcon,
  Settings,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  ChevronDown,
  Crown,
  Bell,
  Zap
} from "lucide-react";

type Profile = {
  avatarUrl?: string | null;
  displayName?: string | null;
};

type MeUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  profile?: Profile | null;
};

export default function ProfileMenu() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  const [user, setUser] = useState<MeUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // load current user on mount
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/me");
        if (!res.ok) {
          if (mounted) setUser(null);
          return;
        }
        const json = await res.json().catch(() => null);
        if (mounted && json?.ok && json.user) setUser(json.user as MeUser);
      } catch (err) {
        // ignore errors
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  // click outside to close menu
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function initials(name?: string | null, email?: string | null) {
    const source = name || email || "U";
    return (source.trim().charAt(0) || "U").toUpperCase();
  }

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    } finally {
      setUser(null);
      router.push("/login");
    }
  }

  const menuItems = [
    {
      icon: UserIcon,
      label: "Profile",
      action: () => router.push("/account"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      label: "Settings",
      action: () => router.push("/dashboard"),
      gradient: "from-slate-500 to-slate-700"
    },
    {
      icon: Bell,
      label: "Notifications",
      action: () => console.log("Notifications clicked"),
      gradient: "from-violet-500 to-purple-500",
      badge: 3
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      action: () => console.log("Help clicked"),
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: LogOut,
      label: "Sign Out",
      action: handleLogout,
      gradient: "from-rose-500 to-pink-500",
      danger: true
    }
  ];

  const displayName = user?.profile?.displayName || user?.name || user?.email || (loading ? "Loading..." : "Account");

  return (
    <div ref={ref} className="relative">
      {/* Profile trigger button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-all duration-200 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Avatar with status indicator */}
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/30 overflow-hidden">
            {user?.profile?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.profile.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="text-white font-semibold">{initials(user?.name, user?.email)}</div>
            )}
          </div>
          <motion.div
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* User info */}
        <div className="flex-1 text-left min-w-0">
          <div className="text-sm font-semibold text-slate-800 truncate flex items-center gap-1.5">
            {displayName}
            <Crown className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-xs text-slate-500 truncate">{user?.email || ""}</div>
        </div>

        {/* Dropdown indicator */}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </motion.div>
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 right-0 mb-2 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Pro badge */}
              <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-amber-900">Pro Member</div>
                    <div className="text-[10px] text-amber-700">Premium features unlocked</div>
                  </div>
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
              </div>

              {/* Menu items */}
              <div className="p-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon as any;
                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                        item.danger
                          ? "hover:bg-rose-50 text-rose-600"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-500 text-white rounded-full">{item.badge}</span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Dark mode toggle */}
              <div className="p-3 border-t border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-sm">
                      {isDarkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700">Dark Mode</span>
                  </div>
                  <motion.button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                      isDarkMode ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-slate-300"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: isDarkMode ? 20 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
