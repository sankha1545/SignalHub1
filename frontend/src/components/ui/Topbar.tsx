// components/Topbar.tsx
"use client";
import React from "react";

export default function Topbar({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="text-sm text-slate-500">
        Dashboard &nbsp;›&nbsp; <span className="font-semibold text-slate-700">{title}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <input placeholder="Search conversations..." className="px-3 py-2 border rounded-lg text-sm w-96" />
        </div>
        <button className="px-3 py-2 rounded-lg border bg-white">🔔</button>
        <button className="px-3 py-2 text-white rounded-lg bg-gradient-to-br from-rose-400 to-emerald-400">+ Create</button>
        <img src="/globe.svg" alt="avatar" className="w-9 h-9 rounded-full border" />
      </div>
    </header>
  );
}
