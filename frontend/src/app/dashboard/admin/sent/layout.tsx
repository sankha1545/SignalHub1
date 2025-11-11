// app/dashboard/admin/sent/layout.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function SentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div style={{ padding: 16 }}>
      <header>
        <h2>Admin · Sent</h2>
        <small>Path: {path}</small>
      </header>
      <main>{children}</main>
    </div>
  );
}
