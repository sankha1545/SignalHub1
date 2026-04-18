"use client";

import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { ChatSocketProvider } from "./ChatSocketProvider";

type MeResponse = {
  ok?: boolean;
  role?: string;
  user?: { id?: string; email?: string; role?: string; organizationId?: string; organizationName?: string };
};

function DashboardSkeleton() {
  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="premium-shell grid min-h-[calc(100vh-2rem)] grid-cols-1 lg:grid-cols-[18rem_1fr]">
        <aside className="hidden border-r border-border/70 p-6 lg:block">
          <div className="mb-6 h-9 w-40 animate-pulse rounded-xl bg-muted" />
          <div className="space-y-3">
            <div className="h-10 animate-pulse rounded-xl bg-muted" />
            <div className="h-10 animate-pulse rounded-xl bg-muted" />
            <div className="h-10 animate-pulse rounded-xl bg-muted" />
            <div className="h-10 animate-pulse rounded-xl bg-muted" />
          </div>
        </aside>
        <div className="p-6">
          <div className="mb-5 h-8 w-48 animate-pulse rounded-xl bg-muted" />
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="space-y-5 xl:col-span-2">
              <div className="h-44 animate-pulse rounded-2xl bg-muted" />
              <div className="h-44 animate-pulse rounded-2xl bg-muted" />
            </div>
            <div className="space-y-5">
              <div className="h-28 animate-pulse rounded-2xl bg-muted" />
              <div className="h-28 animate-pulse rounded-2xl bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [orgName, setOrgName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const portal = role === "ADMIN" ? "admin" : role === "MANAGER" ? "manager" : "employee";

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (!res.ok) {
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
      } catch (err: unknown) {
        if (mounted) {
          const message = err instanceof Error ? err.message : String(err);
          setError(message);
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <ChatSocketProvider>
        <DashboardSkeleton />
      </ChatSocketProvider>
    );
  }

  if (!role) {
    return (
      <ChatSocketProvider>
        <div className="min-h-screen p-4 lg:p-6">
          <div className="premium-shell mx-auto flex min-h-[50vh] max-w-xl items-center justify-center p-6">
            <div className="premium-panel w-full p-6 text-center">
              <p className="premium-kicker mb-4">Access Required</p>
              <h2 className="mb-2 text-2xl font-semibold">Not signed in</h2>
              <p className="text-sm text-muted-foreground">Please sign in to access your workspace.</p>
              <div className="mt-5 flex justify-center gap-3">
                <Link href="/login" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  Sign in
                </Link>
                <Link href="/" className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
                  Go home
                </Link>
              </div>
              {error && <p className="mt-4 text-xs text-destructive">{error}</p>}
            </div>
          </div>
        </div>
      </ChatSocketProvider>
    );
  }

  return (
    <ChatSocketProvider>
      <div className="relative left-1/2 min-h-screen w-screen -translate-x-1/2">
        <Sidebar portal={portal as "admin" | "manager" | "employee"} />

        <div className="min-h-screen lg:pl-72">
          <div className="min-h-screen p-0">
            <div className="premium-shell relative min-h-screen overflow-hidden rounded-none border-y-0 border-r-0">
              <header className="sticky top-0 z-20 border-b border-border/70 bg-card/75 backdrop-blur-xl">
                <div className="flex w-full items-center justify-between gap-4 px-4 py-3 lg:px-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        const el = document.querySelector("button[aria-label='Open menu']");
                        if (el) (el as HTMLButtonElement).click();
                      }}
                      className="inline-flex items-center justify-center rounded-xl border border-border bg-card p-2 shadow-sm lg:hidden"
                      aria-label="Open menu"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">Workspace</p>
                      <p className="text-sm text-muted-foreground">{orgName ?? "Organization"} • {role.toLowerCase()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href="/account" className="hidden rounded-xl border border-transparent px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-border hover:bg-muted sm:inline-flex">
                      Account
                    </Link>
                    <form action="/api/auth/logout" method="POST">
                      <button
                        type="submit"
                        className="rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </header>

              <main className="px-3 py-4 lg:px-6 lg:py-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </ChatSocketProvider>
  );
}
