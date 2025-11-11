// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import ProfileMenu from "@/components/forms/ProfileMenu";
import Sidebar from "@/components/ui/Sidebar";

export const metadata = {
  title: "UnifyReach",
  description: "UnifyReach — centralize customer conversations",
};

async function getCurrentUser() {
  try {
    // cookies() can be async in some Next.js versions/environments, so await it.
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? cookieStore.get("token")?.value;
    if (!token) return null;

    // Example: call your internal auth/me endpoint to validate token server-side.
    // Ensure this API route exists (see suggestions below).
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // ensure we always revalidate on the server so layout updates immediately after logout
      cache: "no-store",
    });

    if (!res.ok) return null;
    const user = await res.json();
    return user ?? null;
  } catch (err) {
    // treat any error as unauthenticated
    return null;
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();

  // Only keep a minimal serializable payload for client components
  const minimalUser = user ? { id: user.id, name: user.name, email: user.email, image: user.image } : null;

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
          {minimalUser && (
            <aside className="w-72 hidden md:block bg-white border-r">
              <Sidebar />
            </aside>
          )}

          <div className="flex-1 flex flex-col">
            {minimalUser ? (
              <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 text-white font-bold flex items-center justify-center">
                        U
                      </div>
                      <div className="hidden sm:block text-lg font-semibold">SignalHub</div>
                    </Link>

                    <div className="hidden md:flex items-center text-sm text-slate-500">
                      <span>Dashboard</span>
                      <span className="mx-2">›</span>
                      <span className="font-medium text-slate-700">Analytics</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Pass minimal user for client ProfileMenu */}
                    <ProfileMenu user={minimalUser} />
                  </div>
                </div>
              </header>
            ) : null}

            <main id="main" className="flex-1 overflow-auto">
              <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
