// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import ProfileMenu from "@/components/forms/ProfileMenu";

export const metadata = {
  title: "UnifyReach",
  description: "UnifyReach — centralize customer conversations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 text-white font-bold flex items-center justify-center">
                  U
                </div>
                <div className="text-lg font-semibold">UnifyReach</div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden sm:flex items-center gap-3">
                <Link href="/dashboard/admin" className="text-sm text-slate-600 hover:text-slate-900 px-2">
                  Dashboard
                </Link>
                <Link href="/account" className="text-sm text-slate-600 hover:text-slate-900 px-2">
                  Account
                </Link>
              </nav>

              {/* client-side profile menu */}
              <ProfileMenu />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
