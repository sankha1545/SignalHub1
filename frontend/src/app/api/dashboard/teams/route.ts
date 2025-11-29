// src/app/api/dashboard/teams/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Simple shim used by some frontend pages expecting /api/dashboard/teams.
 * This returns the same data shape as /api/teams GET would.
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const organizationId = url.searchParams.get("organizationId") ?? null;
    if (!organizationId) {
      return NextResponse.json({ ok: false, message: "organizationId required" }, { status: 400 });
    }

    // Keep this lightweight — frontend will resolve members via /api/users if needed
    const teams = await prisma.team.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        description: true,
        leadId: true,
        featured: true,
        gradient: true,
        projects: true,
        completion: true,
        createdAt: true,
      },
    });

    const normalized = teams.map((t) => ({
      id: t.id,
      name: t.name,
      description: t.description ?? "",
      leadId: t.leadId ?? null,
      featured: t.featured ?? false,
      gradient: t.gradient ?? "from-blue-500 to-cyan-500",
      projects: t.projects ?? 0,
      completion: t.completion ?? 0,
      members: [], // keep empty — frontend can call /api/users or a team-members endpoint
      createdAt: t.createdAt,
    }));

    return NextResponse.json({ ok: true, teams: normalized });
  } catch (err: any) {
    console.error("[api/dashboard/teams] error:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
