"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/modals/ConfirmModal";

type UserProp = {
  avatarUrl?: string | null;
  email?: string | null;
  name?: string | null;
};

/**
 * ProfileMenu
 * - Accessible, keyboard-friendly account menu.
 * - Calls POST /api/auth/logout to clear the auth cookie/token, then
 *   refreshes the app and navigates to the login page so server layouts
 *   re-run and the topbar/sidebar disappear.
 * - Prevents double-submits and shows a simple inline spinner while logging out.
 *
 * Props: kept backward-compatible with earlier shape (avatarUrl, email).
 */
export default function ProfileMenu({ avatarUrl, email, name }: UserProp) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Keyboard: Escape to close, arrow navigation within menu
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return setOpen(false);

      if (!open) return;

      const items = menuRef.current?.querySelectorAll<HTMLButtonElement>("[role='menuitem']");
      if (!items || items.length === 0) return;

      const current = document.activeElement as HTMLElement | null;
      const idx = Array.from(items).findIndex((el) => el === current);

      if (e.key === "ArrowDown") {
        const next = items[(idx + 1) % items.length];
        next?.focus();
        e.preventDefault();
      }
      if (e.key === "ArrowUp") {
        const prev = items[(idx - 1 + items.length) % items.length];
        prev?.focus();
        e.preventDefault();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // When menu opens, focus the first actionable item
  useEffect(() => {
    if (open) {
      // slight delay to allow rendering
      setTimeout(() => firstMenuItemRef.current?.focus(), 0);
    }
  }, [open]);

  async function handleLogout() {
    if (loggingOut) return; // guard
    setLoggingOut(true);

    try {
      // call logout endpoint that clears cookie on the server
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        // ensure cookie is sent/cleared for same-origin
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        // show a console error; you can replace this with a toast
        console.error("Logout API returned non-OK status", res.status);
        setLoggingOut(false);
        setConfirmOpen(false);
        return;
      }

      // Refresh server components/layout so authenticated UI is removed
      // then navigate to the login page. Refresh first so that any server
      // session checks re-run (this helps when the layout uses getCurrentUser()).
      try {
        router.refresh();
      } catch (e) {
        // router.refresh may throw in some environments — ignore safely
        console.warn("router.refresh() failed", e);
      }

      // Close menus and navigate to login. Use replace so user can't go back to a protected page.
      setConfirmOpen(false);
      setOpen(false);
      router.replace("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
      setLoggingOut(false);
      setConfirmOpen(false);
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account"
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        title="Account menu"
      >
        {avatarUrl ? (
          // keep simple <img> to avoid Next/Image layout in small avatar
          <img src={avatarUrl} alt={`${name ?? email ?? "User"} avatar`} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <span className="text-sm font-medium text-slate-700">{(email || "U").charAt(0).toUpperCase()}</span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Profile"
          className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border py-2 z-20"
        >
          <div className="px-3 py-2 border-b">
            <div className="text-sm font-medium text-slate-800 truncate">{name ?? email ?? "User"}</div>
            {email && <div className="text-xs text-slate-500 truncate">{email}</div>}
          </div>

          <div className="flex flex-col py-1">
            <button
              ref={firstMenuItemRef}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                router.push("/profile");
              }}
              className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700"
            >
              View profile
            </button>

            <button
              role="menuitem"
              onClick={() => setConfirmOpen(true)}
              className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700 flex items-center justify-between"
            >
              <span>Logout</span>
              {/* small inline spinner when logging out */}
              {loggingOut && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                  <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        open={confirmOpen}
        title="Log out?"
        message="Do you want to log out of your account?"
        confirmLabel={loggingOut ? "Logging out..." : "Yes, log out"}
        cancelLabel="Cancel"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={async () => {
          await handleLogout();
        }}
        // If your ConfirmModal supports disabling controls, it will receive this prop.
        // Otherwise the button text already changes.
        disabled={loggingOut}
      />
    </div>
  );
}
