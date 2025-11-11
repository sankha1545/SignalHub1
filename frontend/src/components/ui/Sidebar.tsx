// components/Sidebar.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import ProfileMenu from "../forms/ProfileMenu";

const NAV = [
  { id: "overview", label: "Overview", href: "/dashboard/overview", icon: "▦" },
  { id: "inbox", label: "Inbox", href: "/inbox", icon: "✉" },
  { id: "sent", label: "Sent", href: "/sent", icon: "➤" },
  { id: "teams", label: "Teams", href: "/teams", icon: "👥" },
  { id: "analytics", label: "Analytics", href: "/dashboard", icon: "📈" },
  { id: "settings", label: "Settings", href: "/settings", icon: "⚙" },
];

export default function Sidebar({ active = "analytics" }: { active?: string }) {
  const [open, setOpen] = useState(false); // mobile drawer
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
          className="p-2 rounded-lg bg-white shadow text-slate-700 border"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:min-h-screen lg:border-r lg:bg-white border">
        <div className="p-5 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold">U</div>
              <div>
                <div className="text-sm font-semibold">SignalHub</div>
                <div className="text-xs text-slate-400">Unified Inbox</div>
              </div>
            </div>

            <div className="mb-4">
              <input aria-label="Search navigation" placeholder="Search..." className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>

            <nav className="space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.id}
                  href={n.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    active === n.id ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-700 hover:bg-slate-50"
                  )}
                  aria-current={active === n.id ? "page" : undefined}
                >
                  <span className="w-6 text-center">{n.icon}</span>
                  <span className="flex-1 text-left">{n.label}</span>
                  {n.badge ? <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white">{n.badge}</span> : null}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t">
            <ProfileMenu />
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg border-r"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold">U</div>
                <div className="font-semibold">SignalHub</div>
              </div>
              <div className="flex items-center gap-2">
                <button ref={closeBtnRef} className="p-2 rounded-md border" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
              </div>
            </div>

            <div className="p-4 overflow-auto h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <input aria-label="Search navigation" placeholder="Search..." className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>

                <nav className="space-y-1">
                  {NAV.map((n) => (
                    <Link
                      key={n.id}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                        active === n.id ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      <span className="w-6 text-center">{n.icon}</span>
                      <span className="flex-1 text-left">{n.label}</span>
                      {n.badge ? <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white">{n.badge}</span> : null}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t">
                <ProfileMenu />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* backdrop for drawer */}
      <AnimatePresence>
        {open && (
          <motion.button
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
