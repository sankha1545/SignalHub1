// app/dashboard/admin/sent/layout.tsx
import React from "react";

export const metadata = {
  title: "Sent — Admin · SignalHub",
  description: "Sent messages — admin view",
};

export default function SentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
       

        <main>{children}</main>
      </div>
    </div>
  );
}
