// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import NavLoader from "@/components/ui/header/Navloader"; // client component
// NOTE: do NOT import next/dynamic with ssr:false here

export const metadata = {
  title: "UnifyReach",
  description: "UnifyReach — centralize customer conversations",
};

const COOKIE_NAME = "session";
const JWT_SECRET = process.env.JWT_SECRET ?? "";

async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value ?? cookieStore.get("token")?.value;
    if (!token) return null;
    if (!JWT_SECRET) return null;

    let payload: any;
    try {
      payload = jwt.verify(token, JWT_SECRET) as any;
    } catch (err) {
      return null;
    }

    if (!payload?.id) return null;

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        name: true,
        email: true,
        profile: { select: { avatarUrl: true } },
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      name: user.name ?? null,
      email: user.email ?? null,
      avatarUrl: user.profile?.avatarUrl ?? null,
    };
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  const minimalUser = user ? { id: user.id, name: user.name, email: user.email, avatarUrl: user.avatarUrl } : null;

  return (
    <html lang="en" className="h-full">
      <body className="bg-slate-50 min-h-screen antialiased text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:relative focus:z-50 focus:inline-block focus:px-4 focus:py-2 focus:bg-white focus:rounded-md focus:shadow"
        >
          Skip to content
        </a>

        <div className="flex min-h-screen">
          {/* NavLoader is a client component — it will render sidebar + header in browser only when appropriate */}
          <NavLoader user={minimalUser} />

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
