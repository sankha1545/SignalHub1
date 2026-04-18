import "./globals.css";
import type { ReactNode } from "react";
import { Geist, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "UnifyReach",
  description: "UnifyReach - centralize customer conversations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable, manrope.variable)}>
      <body className="min-h-screen text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:items-center focus:rounded-xl focus:border focus:border-primary/30 focus:bg-card px-4 py-2 text-sm focus:shadow-lg"
        >
          Skip to content
        </a>

        <div className="relative flex min-h-screen">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 premium-grid-bg opacity-35" />
          <div className="flex-1 flex flex-col">
            <main id="main" className="flex-1 overflow-auto">
              <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
