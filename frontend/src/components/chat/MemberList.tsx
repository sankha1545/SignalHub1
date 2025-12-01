// src/components/chat/MemberList.tsx
"use client";

import React from "react";
import type { UserSummary } from "@/types/chat";

export default function MemberList({ members, showAdminBanner = false }: { members?: UserSummary[]; showAdminBanner?: boolean }) {
  if (!members || members.length === 0) return <div className="p-4 text-sm text-gray-600">No members</div>;
  return (
    <div className="p-3 border-l space-y-2">
      {showAdminBanner ? (
        <div className="p-2 bg-yellow-50 text-xs text-yellow-800 rounded">Admin has supremo access (not listed).</div>
      ) : null}
      {members.map((m) => (
        <div key={m.id} className="flex items-center gap-3">
          <img src={m.avatarUrl ?? "/favicon.ico"} alt={m.name} className="w-8 h-8 rounded-full object-cover" />
          <div>
            <div className="text-sm font-medium">{m.name}</div>
            <div className="text-xs text-gray-500">{m.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
