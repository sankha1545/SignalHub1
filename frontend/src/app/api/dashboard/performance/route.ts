import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest, requireRole } from "@/lib/rbac";

export async function GET(req: Request) {
  try {
    const user = await getUserFromRequest(req);
    requireRole(user, "ADMIN"); // Only admin or manager can view

    const teamId = new URL(req.url).searchParams.get("teamId");

    const snapshots = await prisma.performanceSnapshot.findMany({
      where: teamId ? { teamId } : {},
      include: { user: true },
    });

    return NextResponse.json({ ok: true, snapshots });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
