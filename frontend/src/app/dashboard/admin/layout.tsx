// src/app/dashboard/admin/layout.tsx
import React from "react";
import Sidebar from "@/components/ui/sidebar/Sidebar"; // if you don't use @ alias, change to relative path

export const metadata = {
  title: "Admin • Dashboard",
  description: "SignalHub admin portal — analytics, inbox, teams and settings",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="hidden lg:block">
        <Sidebar portal="admin" />
      </aside>

      <div className="flex-1">
        <main className="p-6 max-w-6xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
