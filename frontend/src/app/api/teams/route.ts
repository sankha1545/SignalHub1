// src/app/api/teams/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth"; // optional - if absent this should be a noop or you can remove

/**
 * Teams API (App Router)
 * - GET  /api/teams?organizationId=...   -> list teams for an organization
 * - POST /api/teams                      -> create a team (body must include organizationId or session must provide it)
 *
 * Response shapes:
 *  - { ok: true, teams: [...] } or { ok: true, team: { ... } }
 *  - { ok: false, message: "..." } on error
 */

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

/**
 * Try to extract organizationId from a session helper if present.
 * Returns string or null.
 */
async function tryGetSessionOrganizationId(req: Request): Promise<string | null> {
  try {
    if (typeof getSessionUser === "function") {
      const session = await getSessionUser(req).catch(() => null);
      if (session?.organizationId) return String(session.organizationId);
    }
  } catch (e: any) {
    // Do not fail hard if session helper throws
    console.warn("[api/teams] getSessionUser error:", e?.message ?? e);
  }
  return null;
}

/* ---------- GET: list teams for an organization ---------- */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const orgQuery = url.searchParams.get("organizationId") ?? undefined;

    // prefer explicit query param, otherwise try session helper
    let organizationId: string | undefined = orgQuery ?? undefined;
    if (!organizationId) {
      const sessionOrg = await tryGetSessionOrganizationId(req);
      if (sessionOrg) organizationId = sessionOrg;
    }

    if (!organizationId) {
      return jsonError("organizationId required (provide ?organizationId=... or be authenticated)", 400);
    }

    // fetch teams with manager and members (TeamMember -> user)
    const teams = await prisma.team.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" },
      include: {
        manager: { select: { id: true, name: true, email: true, role: true } },
        members: {
          select: {
            id: true,
            role: true,
            user: { select: { id: true, name: true, email: true } },
          },
        },
        // include optional UI metadata fields if they exist in schema
        // Prisma will ignore unknown fields at runtime; including them here is safe.
      },
    });

    // normalize shape for frontend convenience and include optional UI metadata
    const normalized = teams.map((t) => ({
      id: t.id,
      name: t.name,
      description: t.description ?? null,
      managerId: (t as any).managerId ?? null,
      manager: t.manager ? { id: t.manager.id, name: t.manager.name, email: t.manager.email } : null,
      // include metadata fields if present on the object (Prisma includes them when in schema)
      featured: (t as any).featured ?? false,
      gradient: (t as any).gradient ?? null,
      projects: typeof (t as any).projects !== "undefined" ? Number((t as any).projects ?? 0) : null,
      completion: typeof (t as any).completion !== "undefined" ? Number((t as any).completion ?? 0) : null,
      members: (t.members || []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: t.organizationId,
      createdAt: t.createdAt?.toISOString?.() ?? null,
      updatedAt: (t as any).updatedAt?.toISOString?.() ?? null,
    }));

    return NextResponse.json({ ok: true, teams: normalized }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams][GET] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { ok: false, message: isDev ? (err?.message || String(err)) : "Server error" },
      { status: 500 }
    );
  }
}

/* ---------- POST: create a team ---------- */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) ?? {};

    const {
      name,
      description = null,
      managerId = null, // optional manager user id
      memberUserIds = [], // optional array of existing user ids to add as members
      adhocMembers = [], // optional array of { name } objects for ad-hoc members (frontend synthetic)
      // UI metadata fields from client
      featured = false,
      gradient = null,
      projects = 0,
      completion = 0,
      organizationId: orgFromBody = null, // prefer explicit org in body
    } = body;

    // basic validations
    if (!name || typeof name !== "string" || !name.trim()) {
      return jsonError("Team name is required", 400);
    }

    // resolve organization id from body or session
    let organizationId: string | null = null;
    if (orgFromBody && typeof orgFromBody === "string") organizationId = orgFromBody;
    if (!organizationId) {
      organizationId = await tryGetSessionOrganizationId(req);
    }
    if (!organizationId) {
      return jsonError("organizationId required (provide in body or be authenticated)", 400);
    }

    // ensure organization exists
    const orgExists = await prisma.organization.findUnique({ where: { id: organizationId }, select: { id: true } });
    if (!orgExists) return jsonError("Organization not found", 404);

    // validate manager (if provided) belongs to org
    if (managerId) {
      if (typeof managerId !== "string") return jsonError("managerId must be a string", 400);
      const manager = await prisma.user.findUnique({ where: { id: managerId }, select: { id: true, organizationId: true } });
      if (!manager) return jsonError("Manager user not found", 404);
      if (!manager.organizationId || manager.organizationId !== organizationId) {
        return jsonError("Manager must belong to the same organization", 400);
      }
    }

    // sanitize memberUserIds -> unique array of strings
    const memberIds = Array.isArray(memberUserIds)
      ? Array.from(new Set(memberUserIds.filter((v: any) => typeof v === "string")))
      : [];

    // verify all provided member user ids exist and belong to organization
    if (memberIds.length > 0) {
      const users = await prisma.user.findMany({
        where: { id: { in: memberIds } },
        select: { id: true, organizationId: true },
      });
      const foundIds = new Set(users.map((u) => u.id));
      for (const uid of memberIds) {
        if (!foundIds.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
      }
      for (const u of users) {
        if (!u.organizationId || u.organizationId !== organizationId) {
          return jsonError("All member users must belong to the target organization", 400);
        }
      }
    }

    // create team and team members in transaction
    const created = await prisma.$transaction(async (tx) => {
      // Build team data (include the optional UI metadata if present)
      const teamData: any = {
        name: name.trim(),
        description: description ? String(description).trim() : null,
        organization: { connect: { id: organizationId } },
      };

      // manager relationship - `manager` is relation name in your schema
      if (managerId) {
        teamData.manager = { connect: { id: managerId } };
      }

      // safe assignment of optional metadata fields (only set when provided)
      if (typeof featured === "boolean") teamData.featured = featured;
      if (typeof gradient === "string") teamData.gradient = gradient;
      if (typeof projects !== "undefined") teamData.projects = Number(projects ?? 0);
      if (typeof completion !== "undefined") teamData.completion = Number(completion ?? 0);

      const team = await tx.team.create({
        data: teamData,
        select: { id: true, name: true, description: true, organizationId: true, managerId: true, createdAt: true },
      });

      // create many TeamMember rows if any memberIds provided
      let membersCreated = [];
      if (memberIds.length > 0) {
        const createManyData = memberIds.map((uid) => ({ teamId: team.id, userId: uid, role: "EMPLOYEE" }));
        // createMany with skipDuplicates helps avoid constraint errors if some already exist
        await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
        // fetch created/updated member rows with user details
        membersCreated = await tx.teamMember.findMany({
          where: { teamId: team.id },
          select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
        });
      }

      // adhocMembers: frontend-only synthetic members — if you have a table to store them, insert here.
      // For now we don't persist adhocMembers as users; you can extend schema to store them if required.
      // Example logic (commented):
      // if (Array.isArray(adhocMembers) && adhocMembers.length > 0) { ... }

      return { team, members: membersCreated };
    });

    // load the fresh team with includes and metadata fields for response
    const teamFull = await prisma.team.findUnique({
      where: { id: created.team.id },
      include: {
        manager: { select: { id: true, name: true, email: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    // Normalize returned team shape to include optional metadata for UI
    const responseTeam = {
      id: teamFull?.id ?? created.team.id,
      name: teamFull?.name ?? created.team.name,
      description: teamFull?.description ?? created.team.description ?? null,
      manager: teamFull?.manager ? { id: teamFull.manager.id, name: teamFull.manager.name, email: teamFull.manager.email } : null,
      featured: (teamFull as any)?.featured ?? false,
      gradient: (teamFull as any)?.gradient ?? null,
      projects: typeof (teamFull as any)?.projects !== "undefined" ? Number((teamFull as any).projects ?? 0) : null,
      completion: typeof (teamFull as any)?.completion !== "undefined" ? Number((teamFull as any).completion ?? 0) : null,
      members: (teamFull?.members ?? []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: teamFull?.organizationId ?? created.team.organizationId,
      createdAt: teamFull?.createdAt?.toISOString?.() ?? created.team.createdAt?.toISOString?.() ?? null,
      updatedAt: (teamFull as any)?.updatedAt?.toISOString?.() ?? null,
    };

    return NextResponse.json({ ok: true, team: responseTeam }, { status: 201 });
  } catch (err: any) {
    console.error("[api/teams][POST] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { ok: false, message: isDev ? (err?.message || String(err)) : "Server error" },
      { status: 500 }
    );
  }
}
