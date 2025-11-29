// src/app/api/teams/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth"; // optional helper; if absent make sure it's a noop or remove

/**
 * Route: /api/teams/[id]
 *
 * Handlers:
 *  - GET    -> fetch team (with manager + members)
 *  - PUT    -> update team fields and (optionally) replace members
 *  - DELETE -> delete team and its members
 *
 * Notes:
 *  - In App Router handlers the `params` argument can be a Promise; always `await params`.
 *  - This file is defensive: when attempting to update optional UI fields (featured/gradient/projects/completion)
 *    it will retry the update without those fields if Prisma raises an "Unknown argument" validation error
 *    (useful when your Prisma schema doesn't have those columns yet).
 */

/* ----------------- Helpers ----------------- */
function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function resolveSessionOrganizationId(req: Request): Promise<string | null> {
  try {
    if (typeof getSessionUser === "function") {
      const session = await getSessionUser(req).catch(() => null);
      if (session?.organizationId) return String(session.organizationId);
    }
  } catch (e: any) {
    // swallow session helper errors
    console.warn("[api/teams/[id]] getSessionUser error:", e?.message ?? e);
  }
  return null;
}

function isValidId(v: any) {
  return typeof v === "string" && v.trim().length > 0;
}

/* ---------- GET /api/teams/:id ---------- */
export async function GET(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true, role: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    if (!team) return jsonError("Team not found", 404);

    // normalize shape for frontend (keeps returned object predictable)
    const response = {
      id: team.id,
      name: team.name,
      description: team.description ?? null,
      managerId: (team as any).managerId ?? null,
      manager: team.manager ? { id: team.manager.id, name: team.manager.name, email: team.manager.email } : null,
      // optional UI metadata (only present if schema defines them)
      featured: (team as any).featured ?? false,
      gradient: (team as any).gradient ?? null,
      projects: typeof (team as any).projects !== "undefined" ? Number((team as any).projects ?? 0) : null,
      completion: typeof (team as any).completion !== "undefined" ? Number((team as any).completion ?? 0) : null,
      members: (team.members ?? []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: team.organizationId,
      createdAt: team.createdAt?.toISOString?.() ?? null,
      updatedAt: (team as any).updatedAt?.toISOString?.() ?? null,
    };

    return NextResponse.json({ ok: true, team: response }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][GET] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}

/* ---------- PUT /api/teams/:id ---------- */
/**
 * Expected body examples:
 *  - Partial update:
 *    { name: "New name" }
 *  - Replace members:
 *    { memberUserIds: ["uid1","uid2"] }
 *  - Set manager to null:
 *    { managerId: null }
 *  - Optional UI metadata (if your schema supports them):
 *    { featured: true, gradient: "from-blue-500 to-cyan-500", projects: 2, completion: 60 }
 */
export async function PUT(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const body = (await req.json().catch(() => ({}))) ?? {};
    const {
      name,
      description = undefined, // undefined => not provided; null => explicitly clear
      managerId = undefined, // undefined => not provided; null => clear manager
      memberUserIds = undefined, // undefined => leave members alone; array => replace
      // optional UI metadata that UI may send (only set if provided)
      featured = undefined,
      gradient = undefined,
      projects = undefined,
      completion = undefined,
    } = body;

    // optional session org check
    const sessionOrg = await resolveSessionOrganizationId(req);

    // load team and ensure it exists
    const existing = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!existing) return jsonError("Team not found", 404);

    if (sessionOrg && existing.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);

    // validate managerId (if provided)
    if (managerId !== undefined) {
      if (managerId !== null && !isValidId(managerId)) return jsonError("Invalid managerId", 400);
      if (managerId) {
        const mgr = await prisma.user.findUnique({ where: { id: managerId }, select: { id: true, organizationId: true } });
        if (!mgr) return jsonError("Manager user not found", 404);
        if (mgr.organizationId !== existing.organizationId) return jsonError("Manager must belong to same organization", 400);
      }
    }

    // validate memberUserIds (if provided)
    let memberIds: string[] | null = null;
    if (memberUserIds !== undefined) {
      if (!Array.isArray(memberUserIds)) return jsonError("memberUserIds must be an array", 400);
      memberIds = Array.from(new Set(memberUserIds.filter((v: any) => typeof v === "string")));
      if (memberIds.length > 0) {
        const users = await prisma.user.findMany({
          where: { id: { in: memberIds } },
          select: { id: true, organizationId: true },
        });
        const found = new Set(users.map((u) => u.id));
        for (const uid of memberIds) {
          if (!found.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
        }
        for (const u of users) {
          if (u.organizationId !== existing.organizationId) return jsonError("All member users must belong to the same organization", 400);
        }
      }
    }

    // Build update data (only include properties that were provided)
    const updateDataCandidate: any = {};
    if (name !== undefined) updateDataCandidate.name = String(name).trim();
    if (description !== undefined) updateDataCandidate.description = description === null ? null : String(description).trim();
    if (managerId !== undefined) {
      // manager relation update: connect or disconnect
      if (managerId) updateDataCandidate.manager = { connect: { id: managerId } };
      else updateDataCandidate.manager = { disconnect: true };
    }

    // include optional UI metadata if provided by client
    if (featured !== undefined) updateDataCandidate.featured = featured;
    if (gradient !== undefined) updateDataCandidate.gradient = gradient;
    if (projects !== undefined) updateDataCandidate.projects = typeof projects === "number" ? projects : Number(projects ?? 0);
    if (completion !== undefined) updateDataCandidate.completion = typeof completion === "number" ? completion : Number(completion ?? 0);

    // Attempt update in transaction. Because some Prisma schemas may NOT have the optional UI fields,
    // we try once with the full update data; if Prisma complains about unknown fields (validation error),
    // we retry without the optional UI fields.
    let transactionResult: any = null;
    try {
      transactionResult = await prisma.$transaction(async (tx) => {
        const updatedTeam = await tx.team.update({
          where: { id },
          data: updateDataCandidate,
          select: { id: true, name: true, description: true, organizationId: true, managerId: true },
        });

        let members = [];
        if (memberIds !== null) {
          // replace members: delete then createMany (skipDuplicates for safety)
          await tx.teamMember.deleteMany({ where: { teamId: id } });
          if (memberIds.length > 0) {
            const createManyData = memberIds.map((uid) => ({ teamId: id, userId: uid, role: "EMPLOYEE" }));
            await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
            members = await tx.teamMember.findMany({
              where: { teamId: id },
              select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
            });
          }
        } else {
          // not replacing members => return existing members
          members = await tx.teamMember.findMany({
            where: { teamId: id },
            select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
          });
        }

        return { team: updatedTeam, members };
      });
    } catch (err: any) {
      // detect Prisma unknown argument/validation error and retry without optional UI fields
      const message = String(err?.message || err);
      const unknownArg = /Unknown argument[s]?\s+`?(featured|gradient|projects|completion)`?/i.test(message) || /Unknown arg/i.test(message);
      if (unknownArg) {
        // remove optional UI keys and retry
        const safeUpdateData: any = { ...updateDataCandidate };
        delete safeUpdateData.featured;
        delete safeUpdateData.gradient;
        delete safeUpdateData.projects;
        delete safeUpdateData.completion;

        transactionResult = await prisma.$transaction(async (tx) => {
          const updatedTeam = await tx.team.update({
            where: { id },
            data: safeUpdateData,
            select: { id: true, name: true, description: true, organizationId: true, managerId: true },
          });

          let members = [];
          if (memberIds !== null) {
            await tx.teamMember.deleteMany({ where: { teamId: id } });
            if (memberIds.length > 0) {
              const createManyData = memberIds.map((uid) => ({ teamId: id, userId: uid, role: "EMPLOYEE" }));
              await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
              members = await tx.teamMember.findMany({
                where: { teamId: id },
                select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
              });
            }
          } else {
            members = await tx.teamMember.findMany({
              where: { teamId: id },
              select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
            });
          }

          return { team: updatedTeam, members };
        });
      } else {
        // rethrow other errors
        throw err;
      }
    }

    // load full team for response (includes manager and members)
    const teamFull = await prisma.team.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    if (!teamFull) return jsonError("Team not found after update (unexpected)", 500);

    const response = {
      id: teamFull.id,
      name: teamFull.name,
      description: teamFull.description ?? null,
      manager: teamFull.manager ? { id: teamFull.manager.id, name: teamFull.manager.name, email: teamFull.manager.email } : null,
      // optional meta (present only if schema supports them)
      featured: (teamFull as any).featured ?? false,
      gradient: (teamFull as any).gradient ?? null,
      projects: typeof (teamFull as any).projects !== "undefined" ? Number((teamFull as any).projects ?? 0) : null,
      completion: typeof (teamFull as any).completion !== "undefined" ? Number((teamFull as any).completion ?? 0) : null,
      members: (teamFull.members ?? []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: teamFull.organizationId,
      createdAt: teamFull.createdAt?.toISOString?.() ?? null,
      updatedAt: (teamFull as any).updatedAt?.toISOString?.() ?? null,
    };

    return NextResponse.json({ ok: true, team: response }, { status: 200 });
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

    const sessionOrg = await resolveSessionOrganizationId(req);

    const team = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!team) return jsonError("Team not found", 404);
    if (sessionOrg && team.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);

    // Delete members then team to avoid FK problems
    await prisma.$transaction(async (tx) => {
      await tx.teamMember.deleteMany({ where: { teamId: id } });
      await tx.team.delete({ where: { id } });
    });

    return NextResponse.json({ ok: true, message: "Team deleted" }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][DELETE] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}
