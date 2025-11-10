// src/lib/auth.ts
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/jwt";

export type SessionUser = {
  id: string;
  email?: string | null;
  role: string;
  organizationId?: string | null;
};

export async function getSessionUser(req: Request): Promise<SessionUser | null> {
  try {
    // 1️⃣ Prefer Authorization header: "Bearer <token>"
    let token: string | null = null;
    const authHeader = req.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.slice("Bearer ".length).trim();
    }

    // 2️⃣ Fallback to cookies
    if (!token) {
      const cookieHeader = req.headers.get("cookie") || "";
      const cookies: Record<string, string> = Object.fromEntries(
        cookieHeader
          .split(";")
          .map(c => c.trim().split("="))
          .map(([k, v]) => [decodeURIComponent(k), decodeURIComponent(v)])
      );
      token = cookies["session"] || cookies["token"] || null;
    }

    if (!token) return null;

    // 3️⃣ Verify token safely
    const payload = verifySession(token);
    if (!payload?.id) return null;

    // 4️⃣ Fetch user from DB
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return null;

    return {
      id: user.id,
      email: user.email ?? null,
      role: user.role,
      organizationId: user.organizationId,
    };
  } catch (err: any) {
    console.warn("[getSessionUser] error:", err?.message || err);
    return null;
  }
}
