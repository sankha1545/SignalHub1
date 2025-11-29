// src/app/api/teams/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth"; // optional helper; if absent make sure it's a noop or remove

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function resolveSessionOrganizationId(req: Request) {
  try {
    if (typeof getSessionUser === "function") {
      const session = await getSessionUser(req).catch(() => null);
      if (session?.organizationId) return String(session.organizationId);
    }
  } catch (e) {
    console.warn("[api/teams/[id]] getSessionUser error:", (e as any)?.message || e);
  }
  return null;
}

function isValidId(v: any) {
  return typeof v === "string" && v.trim().length > 0;
}

/**
 * NOTE: In Next.js App Router dynamic route handlers the 'params' argument can be a Promise.
 * Always await params before reading values: `const { id } = await params`.
 */

/* ---------- GET /api/teams/:id ---------- */
export async function GET(req: Request, context: { params: Promise<{ id?: string }> } ) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    // load team with manager & members
    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true, role: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    if (!team) return jsonError("Team not found", 404);

    return NextResponse.json({ ok: true, team }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][GET] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}

/* ---------- PUT /api/teams/:id ---------- */
/**
 * Expected body:
 * {
 *   name?: string,
 *   description?: string | null,
 *   managerId?: string | null,
 *   memberUserIds?: string[]   // full replacement of members when provided
 * }
 */
export async function PUT(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const body = (await req.json().catch(() => ({}))) ?? {};
    const { name, description = null, managerId = null, memberUserIds } = body;

    // optionally resolve org from session to validate ownership
    const sessionOrg = await resolveSessionOrganizationId(req);

    // load existing team
    const existing = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!existing) return jsonError("Team not found", 404);

    if (sessionOrg && existing.organizationId !== sessionOrg) {
      return jsonError("Unauthorized for this organization", 403);
    }

    // validate manager if provided
    if (managerId !== null && managerId !== undefined) {
      if (managerId !== "" && !isValidId(managerId)) return jsonError("Invalid managerId", 400);
      if (managerId) {
        const mgr = await prisma.user.findUnique({ where: { id: managerId }, select: { id: true, organizationId: true } });
        if (!mgr) return jsonError("Manager user not found", 404);
        if (mgr.organizationId !== existing.organizationId) return jsonError("Manager must belong to same organization", 400);
      }
    }

    // if memberUserIds provided, validate they exist & belong to org
    let memberIds: string[] | null = null;
    if (memberUserIds !== undefined) {
      if (!Array.isArray(memberUserIds)) return jsonError("memberUserIds must be an array", 400);
      memberIds = Array.from(new Set(memberUserIds.filter((v: any) => typeof v === "string")));
      if (memberIds.length > 0) {
        const users = await prisma.user.findMany({ where: { id: { in: memberIds } }, select: { id: true, organizationId: true } });
        const found = new Set(users.map((u) => u.id));
        for (const uid of memberIds) {
          if (!found.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
        }
        for (const u of users) {
          if (u.organizationId !== existing.organizationId) return jsonError("All member users must belong to the same organization", 400);
        }
      }
    }

    // perform update in transaction: update team, and if memberIds given, replace members
    const result = await prisma.$transaction(async (tx) => {
      const updateData: any = {};
      if (name !== undefined) updateData.name = String(name).trim();
      if (description !== undefined) updateData.description = description === null ? null : String(description).trim();
      // handle manager relation - set null to remove manager
      if (managerId !== undefined) {
        if (managerId) updateData.manager = { connect: { id: managerId } };
        else updateData.manager = { disconnect: true };
      }

      const updatedTeam = await tx.team.update({
        where: { id },
        data: updateData,
        select: { id: true, name: true, description: true, organizationId: true, managerId: true },
      });

      let members = [];
      if (memberIds !== null) {
        // remove all existing teamMember rows for this team, then create new ones
        await tx.teamMember.deleteMany({ where: { teamId: id } });
        if (memberIds.length > 0) {
          // createMany using userId & teamId (assumes TeamMember model columns are teamId & userId)
          const createManyData = memberIds.map((uid) => ({ teamId: id, userId: uid, role: "EMPLOYEE" }));
          await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
          members = await tx.teamMember.findMany({ where: { teamId: id }, select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } });
        }
      } else {
        // if memberIds not provided, load current members so we return them
        members = await tx.teamMember.findMany({ where: { teamId: id }, select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } });
      }

      return { team: updatedTeam, members };
    });

    // fetch manager details for response
    const teamFull = await prisma.team.findUnique({
      where: { id },
      include: { manager: { select: { id: true, name: true, email: true } }, members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } } },
    });

    return NextResponse.json({ ok: true, team: teamFull ?? result }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][PUT] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}

/* ---------- DELETE /api/teams/:id ---------- */
export async function DELETE(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    // optionally ensure team belongs to session org
    const sessionOrg = await resolveSessionOrganizationId(req);

    const team = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!team) return jsonError("Team not found", 404);
    if (sessionOrg && team.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);

    // Delete members then team in transaction to avoid FK issues
    await prisma.$transaction(async (tx) => {
      // delete team members first
      await tx.teamMember.deleteMany({ where: { teamId: id } });
      // then delete team
      await tx.team.delete({ where: { id } });
    });

    return NextResponse.json({ ok: true, message: "Team deleted" }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][DELETE] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}
