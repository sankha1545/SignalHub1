// app/dashboard/layout.tsx
"use client";

import React from "react";
import type { ReactNode } from "react";
import NavLoader from "@/components/ui/header/Navloader"; // client component (sidebar + header)

// Dashboard layout: renders sidebar/header only for routes under /dashboard
// Children are placed in the right-hand content area.
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* NavLoader is a client component that renders the sidebar and top header */}
      <NavLoader />

      {/* Main content area */}
      <div className="flex-1 min-h-screen">
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
