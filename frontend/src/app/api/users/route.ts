// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

/**
 * GET /api/users?role=MANAGER|EMPLOYEE&organizationId=...
 * Returns { ok: true, users: [...] } where user shape = { id, name, email, initials }
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const roleQuery = (url.searchParams.get("role") || "").trim().toUpperCase();
    const providedOrgId = url.searchParams.get("organizationId");

    // derive orgId from session if absent
    let organizationId = providedOrgId ?? null;
    try {
      if (!organizationId && typeof getSessionUser === "function") {
        const s = await getSessionUser(req).catch(() => null);
        if (s?.organizationId) organizationId = s.organizationId;
      }
    } catch (e) {
      console.warn("[api/users] getSessionUser error", (e as any)?.message || e);
    }

    if (!organizationId) {
      return jsonError("organizationId required (query or authenticated session)", 400);
    }

    // build where clause
    const where: any = { organizationId };
    if (roleQuery) where.role = roleQuery;

    const users = await prisma.user.findMany({
      where,
      select: { id: true, name: true, email: true },
      orderBy: { name: "asc" },
    });

    const normalized = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      initials: (u.name || "")
        .split(/\s+/)
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    }));

    return NextResponse.json({ ok: true, users: normalized });
  } catch (err: any) {
    console.error("[api/users] GET error:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
