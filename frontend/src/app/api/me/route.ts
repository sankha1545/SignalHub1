// app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

/**
 * GET /api/me
 * PATCH /api/me
 *
 * Preserved behavior:
 * - Multiple session resolution strategies:
 *   1) getSessionUser(req)
 *   2) Authorization: Bearer <token>
 *   3) server-side 'session' cookie
 *
 * Additions:
 * - GET returns organization: { id, name } so frontend can render org name on account / overview
 * - PATCH disallows direct email changes through this endpoint (use dedicated email-change flow)
 * - Added defensiveness around metadata merges, length checks and Prisma error logging
 * - Consistent Cache-Control: no-store for authenticated responses
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

/**
 * Resolve a session user using multiple fallbacks:
 * 1) getSessionUser(req) — your existing helper (preferred)
 * 2) Authorization: Bearer <token> — verify with JWT_SECRET if available
 * 3) server-side cookie fallback (next/headers cookies())
 *
 * Returns a minimal object { id } or null if no session.
 */
async function resolveSessionUser(req: Request) {
  try {
    // 1) primary helper (existing logic)
    try {
      const s = await getSessionUser(req);
      if (s && s.id) return s;
    } catch (err) {
      // don't fail hard here; fall through to other strategies
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
            return { id: payload.id, name: payload.name ?? null, email: payload.email ?? null, role: payload.role ?? null, organizationId: payload.organizationId ?? null };
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
          return { id: payload.id, name: payload.name ?? null, email: payload.email ?? null, role: payload.role ?? null, organizationId: payload.organizationId ?? null };
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
 * GET /api/me
 */
export async function GET(req: Request) {
  try {
    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) {
      return NextResponse.json({ ok: false, user: null, error: "Unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
    }

    // Fetch user and include small organization object
    const user = await prisma.user.findUnique({
      where: { id: sessionUser.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        profile: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ ok: false, user: null, error: "User not found" }, { status: 404, headers: { "Cache-Control": "no-store" } });
    }

    // Return organization as top-level convenience plus inside user
    const responseUser = {
      ...user,
      organization: user.organization ?? null,
    };

    return NextResponse.json({ ok: true, user: responseUser }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("GET /api/me error:", err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

/**
 * PATCH /api/me
 * - Upserts the user's profile and merges extensible metadata.
 * - Disallows changing email via this endpoint (use dedicated email-change flow).
 */
export async function PATCH(req: Request) {
  try {
    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await jsonSafe(req);
    console.info("PATCH /api/me payload:", typeof body === "object" ? Object.keys(body) : typeof body);

    // Disallow email changes here — use a dedicated, auditable flow instead
    if (typeof body.email === "string" && body.email.trim().length > 0) {
      return NextResponse.json({ ok: false, error: "Email cannot be changed via this endpoint" }, { status: 400 });
    }

    // Validate required fields and basic length guards
    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
    const incomingProfile = body.profile && typeof body.profile === "object" ? body.profile : {};

    if (!name || name.length === 0) {
      return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    }
    if (name.length > 200) {
      return NextResponse.json({ ok: false, error: "Name too long" }, { status: 400 });
    }
    if (phone && phone.length > 40) {
      return NextResponse.json({ ok: false, error: "Phone too long" }, { status: 400 });
    }

    // Sanitize and prepare profile fields
    const profileUpdates: any = {
      displayName: typeof incomingProfile.displayName === "string" ? incomingProfile.displayName.trim() : undefined,
      avatarUrl: typeof incomingProfile.avatarUrl === "string" ? incomingProfile.avatarUrl.trim() : undefined,
      bio: typeof incomingProfile.bio === "string" ? incomingProfile.bio.trim() : undefined,
      phoneNumber: typeof incomingProfile.phoneNumber === "string" ? incomingProfile.phoneNumber.trim() : (phone ?? undefined),
    };

    // Build metadata safely (only accept known keys)
    const metadata: Record<string, any> = {};
    if (typeof incomingProfile.country === "string") metadata.country = incomingProfile.country.trim();
    if (typeof incomingProfile.region === "string") metadata.region = incomingProfile.region.trim();
    if (typeof incomingProfile.district === "string") metadata.district = incomingProfile.district.trim();
    if (typeof incomingProfile.postalCode === "string") metadata.postalCode = incomingProfile.postalCode.trim();
    if (typeof incomingProfile.language === "string") metadata.language = incomingProfile.language.trim();

    // Fetch existing profile metadata to merge
    let existingMetadata: Record<string, any> = {};
    try {
      const existingProfileRow = await prisma.profile.findUnique({
        where: { userId: sessionUser.id },
        select: { metadata: true },
      });
      existingMetadata = (existingProfileRow?.metadata as any) ?? {};
    } catch (err) {
      console.warn("[PATCH /api/me] could not read existing profile metadata:", err);
      existingMetadata = {};
    }

    const mergedMetadata = { ...existingMetadata, ...metadata };

    // Upsert profile via nested update on User. Keep update minimal (only fields present).
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
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
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
