// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "UnifyReach",
  description: "UnifyReach — centralize customer conversations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-slate-50 min-h-screen antialiased text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:relative focus:z-50 focus:inline-block focus:px-4 focus:py-2 focus:bg-white focus:rounded-md focus:shadow"
        >
          Skip to content
        </a>

        {/* Root layout intentionally minimal: do not render dashboard sidebar here.
            Dashboard-specific chrome (sidebar/header) should be added inside
            app/dashboard/layout.tsx so ONLY dashboard routes render it. */}
        <div className="flex min-h-screen">
          <div className="flex-1 flex flex-col">
            <main id="main" className="flex-1 overflow-auto">
              <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
