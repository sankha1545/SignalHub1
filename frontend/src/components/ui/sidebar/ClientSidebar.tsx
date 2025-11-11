// src/components/ui/ClientSidebar.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function ClientSidebar({ user }: { user: { id: string } | null }) {
  const pathname = usePathname();

  // If not logged in, don't render
  if (!user) return null;

  // Hide nav on auth pages — adjust patterns if you use different routes
  if (!pathname) return null;
  if (pathname.startsWith("/auth") || pathname === "/login" || pathname === "/signup") return null;

  return (
    <aside className="w-72 hidden md:block bg-white border-r">
      <Sidebar />
    </aside>
  );
}
