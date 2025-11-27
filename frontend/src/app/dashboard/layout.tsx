// app/dashboard/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "@/components/ui/sidebar/Sidebar";



type MeResponse = {
  ok?: boolean;
  role?: string;
  user?: { id?: string; email?: string; role?: string; organizationId?: string; organizationName?: string };
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [orgName, setOrgName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // determine portal from role
  const portal = role === "ADMIN" ? "admin" : role === "MANAGER" ? "manager" : "employee";

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (!res.ok) {
          // Not authenticated — optionally redirect:
          // window.location.href = "/login";
          if (mounted) {
            setRole(null);
            setOrgName(null);
            setError("Not authenticated");
            setLoading(false);
          }
          return;
        }
        const j: MeResponse = await res.json().catch(() => ({}));
        const r = (j?.role ?? j?.user?.role ?? null) as string | null;
        const org = (j?.user?.organizationName ?? null) as string | null;
        if (mounted) {
          setRole(r ? String(r).toUpperCase() : null);
          setOrgName(org);
          setError(null);
          setLoading(false);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || String(err));
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Loading skeleton (sidebar + content)
  if (loading) {
    return (
      <div className="min-h-screen flex bg-slate-50">
        <aside className="w-72 p-6">
          <div className="h-8 w-36 rounded-lg bg-slate-200 animate-pulse mb-6" />
          <div className="space-y-3">
            <div className="h-10 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-10 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-10 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-10 rounded-lg bg-slate-200 animate-pulse" />
          </div>
        </aside>

        <div className="flex-1 p-6">
          <div className="h-8 w-1/3 rounded bg-slate-200 animate-pulse mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-44 rounded bg-slate-200 animate-pulse" />
              <div className="h-44 rounded bg-slate-200 animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-28 rounded bg-slate-200 animate-pulse" />
              <div className="h-28 rounded bg-slate-200 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not signed in / failed to fetch user
  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold">Not signed in</h2>
          <p className="text-sm text-slate-600 mt-2">Please sign in to access the dashboard.</p>
          <div className="mt-4 flex gap-2">
            <a href="/login" className="px-3 py-2 rounded bg-indigo-600 text-white text-sm">Sign in</a>
            <a href="/" className="px-3 py-2 rounded border text-sm">Go home</a>
          </div>
          {error && <div className="mt-3 text-xs text-rose-600">{error}</div>}
        </div>
      </div>
    );
  }

  // Main layout with Sidebar provided the portal
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar (pass portal explicitly so default won't be used) */}
      <Sidebar portal={portal as any} />

      {/* Main content area */}
      <div className="flex-1 min-h-screen lg:pl-72">
        {/* Simple top header (keeps a header without rendering NavLoader which might duplicate sidebar) */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  // small client-side nav fallback in case mobile toggle needed; Sidebar has its own mobile toggle
                  const el = document.querySelector("button[aria-label='Open menu']");
                  if (el) (el as HTMLButtonElement).click();
                }}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-white border shadow-sm"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div>
                <div className="text-sm font-semibold text-slate-800">Dashboard</div>
                <div className="text-xs text-slate-500">{orgName ?? "Organization" } • {role?.toLowerCase()}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="/account" className="hidden sm:inline-flex text-sm px-3 py-1 rounded-md hover:bg-slate-50">Account</a>
              <form action="/api/auth/logout" method="POST">
                <button type="submit" className="px-3 py-1 rounded-md border text-sm">Sign out</button>
              </form>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
