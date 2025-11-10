// src/components/ProfileMenu.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  profile?: { avatarUrl?: string | null; displayName?: string | null } | null;
};

export default function ProfileMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/me");
        if (!res.ok) {
          setUser(null);
          return;
        }
        const json = await res.json().catch(() => null);
        if (mounted && json?.ok && json.user) setUser(json.user);
      } catch (err) {
        // ignore
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
      if (!ref.current.contains(e.target as Node)) setOpen(false);
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
      // call logout endpoint if present; otherwise fallback to redirect
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    } finally {
      // clear client-side and force redirect to login
      router.push("/login");
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 border px-2 py-1 rounded hover:shadow-sm bg-white"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-700 overflow-hidden">
          {user?.profile?.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.profile.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <span>{initials(user?.name, user?.email)}</span>
          )}
        </div>
        <span className="hidden sm:inline text-sm text-slate-700">{user?.name || user?.email || (loading ? "Loading..." : "Account")}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-50">
          <div className="p-3 border-b">
            <div className="text-sm font-semibold">{user?.profile?.displayName || user?.name || user?.email}</div>
            <div className="text-xs text-slate-500">{user?.role}</div>
          </div>

          <div className="flex flex-col py-1">
            <Link href="/account" onClick={() => setOpen(false)} className="px-3 py-2 text-sm hover:bg-slate-50">
              View profile
            </Link>
            <Link href="/dashboard" onClick={() => setOpen(false)} className="px-3 py-2 text-sm hover:bg-slate-50">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="text-left px-3 py-2 text-sm hover:bg-slate-50">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
