// src/components/ui/NavLoader.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/Sidebar";
import ProfileMenu from "@/components/forms/ProfileMenu";
import Link from "next/link";

/**
 * NavLoader (client-only)
 * - Only renders when running in the browser
 * - Hides nav on auth pages like /auth/*, /login, /signup
 * - Expects a small `user` prop (or null)
 */
export default function NavLoader({
  user,
}: {
  user: { id: string; name?: string | null; email?: string | null; avatarUrl?: string | null } | null;
}) {
  const pathname = usePathname();

  // Not logged in => don't render any nav
  if (!user) return null;

  // If pathname is missing (rare), don't render
  if (!pathname) return null;

  // Hide on auth pages - extend this list to fit your routes
  const isAuthPage =
    pathname.startsWith("/auth") ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname.startsWith("/auth/");

  if (isAuthPage) return null;

  return (
    <>
      <aside className="w-72 hidden md:block bg-white border-r">
        <Sidebar />
      </aside>

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 text-white font-bold flex items-center justify-center">
                U
              </div>
              <div className="hidden sm:block text-lg font-semibold">SignalHub</div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ProfileMenu name={user.name ?? undefined} email={user.email ?? undefined} avatarUrl={user.avatarUrl ?? undefined} />
          </div>
        </div>
      </header>
    </>
  );
}
