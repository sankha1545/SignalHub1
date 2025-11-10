import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest, requireRole } from "@/lib/rbac";

export async function GET(req: Request) {
  const user = await getUserFromRequest(req);
  requireRole(user, "MANAGER"); // Managers and admins generate reports

  const teamId = new URL(req.url).searchParams.get("teamId");

  const report = await prisma.auditReport.findMany({
    where: teamId ? { teamId } : {},
    include: { createdBy: true, recipient: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ ok: true, report });
}
