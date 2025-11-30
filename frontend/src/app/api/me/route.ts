// src/app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

/**
 * GET /api/me
 * PATCH /api/me
 *
 * - Resolve session using getSessionUser, Bearer JWT, or cookie fallback.
 * - GET returns user + organization + teams (manager + member roles).
 * - PATCH upserts profile, disallows changing email via this endpoint.
 */

const COOKIE_NAME = "session";
const JWT_SECRET = process.env.JWT_SECRET || "";

/** Safe JSON parse for request bodies */
async function jsonSafe(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/** Resolve session user with multiple fallbacks */
async function resolveSessionUser(req: Request) {
  try {
    // 1) helper
    try {
      const s = await getSessionUser(req);
      if (s && s.id) return s;
    } catch (err) {
      console.warn("[resolveSessionUser] getSessionUser failed:", err);
    }

    // 2) Authorization: Bearer <token>
    try {
      const headerAuth = (req.headers.get("authorization") ?? req.headers.get("Authorization")) as string | null;
      if (headerAuth?.toLowerCase().startsWith("bearer ")) {
        const token = headerAuth.slice(7).trim();
        if (JWT_SECRET && token) {
          const payload = jwt.verify(token, JWT_SECRET) as any;
          if (payload?.id) {
            return {
              id: payload.id,
              name: payload.name ?? null,
              email: payload.email ?? null,
              role: payload.role ?? null,
              organizationId: payload.organizationId ?? null,
            };
          }
        } else {
          console.warn("[resolveSessionUser] Bearer token present but JWT_SECRET missing or token empty");
        }
      }
    } catch (err) {
      console.warn("[resolveSessionUser] bearer token verification failed:", err);
    }

    // 3) cookie fallback (server-side)
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(COOKIE_NAME)?.value;
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) {
          return {
            id: payload.id,
            name: payload.name ?? null,
            email: payload.email ?? null,
            role: payload.role ?? null,
            organizationId: payload.organizationId ?? null,
          };
        }
      }
    } catch (err) {
      console.warn("[resolveSessionUser] cookie token verification failed:", err);
    }

    return null;
  } catch (err) {
    console.error("[resolveSessionUser] unexpected error:", err);
    return null;
  }
}

/**
 * Build teams array for the user.
 * - includes teams where user is manager
 * - includes teams where user is member via teamMember
 * - de-duplicates preferring MANAGER when both apply
 */
async function fetchUserTeams(userId: string) {
  try {
    if (!prisma || typeof prisma !== "object") return [];

    // 1) teams where user is manager
    const managedTeamsPromise = (async () => {
      try {
        return await prisma.team.findMany({
          where: { managerId: userId },
          select: {
            id: true,
            name: true,
            description: true,
            organizationId: true,
            managerId: true,
            createdAt: true,
          },
        });
      } catch (e) {
        console.warn("[fetchUserTeams] managed teams lookup failed:", e);
        return [];
      }
    })();

    // 2) teams where user is a teamMember
    // IMPORTANT: use `select` to request both relation (team) and scalar (role).
    const memberTeamsPromise = (async () => {
      try {
        const memberRows = await prisma.teamMember.findMany({
          where: { userId },
          select: {
            id: true,
            role: true, // scalar on TeamMember
            joinedAt: true,
            team: {
              select: {
                id: true,
                name: true,
                description: true,
                organizationId: true,
                managerId: true,
                createdAt: true,
              },
            },
          },
        });

        return memberRows
          .filter((r) => r.team)
          .map((r) => ({
            id: r.team.id,
            teamId: r.team.id,
            name: r.team.name,
            description: r.team.description ?? null,
            organizationId: r.team.organizationId ?? null,
            managerId: r.team.managerId ?? null,
            createdAt: r.team.createdAt?.toISOString?.() ?? null,
            memberRole: r.role ?? null,
          }));
      } catch (e) {
        console.warn("[fetchUserTeams] teamMember lookup failed:", e);
        return [];
      }
    })();

    const [managedTeams, memberTeams] = await Promise.all([managedTeamsPromise, memberTeamsPromise]);

    // Deduplicate preferring manager
    const map = new Map<string, any>();
    for (const t of memberTeams) {
      map.set(t.id, {
        id: t.id,
        name: t.name,
        description: t.description ?? null,
        organizationId: t.organizationId ?? null,
        managerId: t.managerId ?? null,
        role: t.memberRole ?? "EMPLOYEE",
        createdAt: t.createdAt ?? null,
      });
    }
    for (const t of managedTeams) {
      map.set(t.id, {
        id: t.id,
        name: t.name,
        description: (t as any).description ?? null,
        organizationId: (t as any).organizationId ?? null,
        managerId: (t as any).managerId ?? null,
        role: "MANAGER",
        createdAt: t.createdAt?.toISOString?.() ?? null,
      });
    }

    const teams = Array.from(map.values()).sort((a, b) => {
      const at = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bt = b.createdAt ? Date.parse(b.createdAt) : 0;
      return bt - at;
    });

    return teams;
  } catch (err) {
    console.warn("[fetchUserTeams] unexpected error:", err);
    return [];
  }
}

/**
 * GET /api/me
 */
export async function GET(req: Request) {
  try {
    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) {
      return NextResponse.json({ ok: false, user: null, teams: [], error: "Unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
    }

    const userId = String(sessionUser.id);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        profile: true,
        organization: { select: { id: true, name: true } },
      },
    });

    if (!user) {
      return NextResponse.json({ ok: false, user: null, teams: [], error: "User not found" }, { status: 404, headers: { "Cache-Control": "no-store" } });
    }

    const teams = await fetchUserTeams(userId);

    const responseUser = { ...user, organization: user.organization ?? null };

    return NextResponse.json({ ok: true, user: responseUser, teams }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("GET /api/me error:", err);
    return NextResponse.json({ ok: false, user: null, teams: [], error: "Internal server error" }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

/**
 * PATCH /api/me
 */
export async function PATCH(req: Request) {
  try {
    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await jsonSafe(req);
    console.info("PATCH /api/me payload keys:", typeof body === "object" ? Object.keys(body) : typeof body);

    if (typeof body.email === "string" && body.email.trim().length > 0) {
      return NextResponse.json({ ok: false, error: "Email cannot be changed via this endpoint" }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
    const incomingProfile = body.profile && typeof body.profile === "object" ? body.profile : {};

    if (!name || name.length === 0) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    if (name.length > 200) return NextResponse.json({ ok: false, error: "Name too long" }, { status: 400 });
    if (phone && phone.length > 40) return NextResponse.json({ ok: false, error: "Phone too long" }, { status: 400 });

    const profileUpdates: any = {
      displayName: typeof incomingProfile.displayName === "string" ? incomingProfile.displayName.trim() : undefined,
      avatarUrl: typeof incomingProfile.avatarUrl === "string" ? incomingProfile.avatarUrl.trim() : undefined,
      bio: typeof incomingProfile.bio === "string" ? incomingProfile.bio.trim() : undefined,
      phoneNumber: typeof incomingProfile.phoneNumber === "string" ? incomingProfile.phoneNumber.trim() : phone ?? undefined,
    };

    const metadata: Record<string, any> = {};
    if (typeof incomingProfile.country === "string") metadata.country = incomingProfile.country.trim();
    if (typeof incomingProfile.region === "string") metadata.region = incomingProfile.region.trim();
    if (typeof incomingProfile.district === "string") metadata.district = incomingProfile.district.trim();
    if (typeof incomingProfile.postalCode === "string") metadata.postalCode = incomingProfile.postalCode.trim();
    if (typeof incomingProfile.language === "string") metadata.language = incomingProfile.language.trim();

    let existingMetadata: Record<string, any> = {};
    try {
      const existingProfileRow = await prisma.profile.findUnique({ where: { userId: sessionUser.id }, select: { metadata: true } });
      existingMetadata = (existingProfileRow?.metadata as any) ?? {};
    } catch (err) {
      console.warn("[PATCH /api/me] could not read existing profile metadata:", err);
      existingMetadata = {};
    }

    const mergedMetadata = { ...existingMetadata, ...metadata };

    const dataToUpdate: any = {
      name,
      ...(phone !== undefined ? { phone } : {}),
      profile: {
        upsert: {
          create: {
            displayName: profileUpdates.displayName ?? null,
            avatarUrl: profileUpdates.avatarUrl ?? null,
            bio: profileUpdates.bio ?? null,
            phoneNumber: profileUpdates.phoneNumber ?? null,
            metadata: mergedMetadata,
          },
          update: {
            ...(profileUpdates.displayName !== undefined ? { displayName: profileUpdates.displayName } : {}),
            ...(profileUpdates.avatarUrl !== undefined ? { avatarUrl: profileUpdates.avatarUrl } : {}),
            ...(profileUpdates.bio !== undefined ? { bio: profileUpdates.bio } : {}),
            ...(profileUpdates.phoneNumber !== undefined ? { phoneNumber: profileUpdates.phoneNumber } : {}),
            metadata: mergedMetadata,
          },
        },
      },
    };

    const updatedUser = await prisma.user.update({
      where: { id: sessionUser.id },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        profile: true,
        organization: { select: { id: true, name: true } },
      },
    });

    console.info("PATCH /api/me updated user id:", updatedUser.id);
    return NextResponse.json({ ok: true, user: updatedUser }, { status: 200 });
  } catch (err: any) {
    console.error("PATCH /api/me error:", err?.message ?? err, err?.stack ?? "");
    if (err?.code) console.error("Prisma error code:", err.code, "meta:", err.meta ?? null);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
