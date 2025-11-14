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
 * Behavior preserved:
 *  - Multiple session resolution strategies:
 *    1) getSessionUser(req)
 *    2) Authorization: Bearer <token>
 *    3) server-side 'session' cookie
 *
 * Additions:
 *  - GET returns organization: { id, name } so frontend can render org name on account / overview
 *  - PATCH disallows direct email changes through this endpoint (use dedicated email-change flow)
 *  - Added defensiveness around metadata merges, length checks and Prisma error logging
 */

const COOKIE_NAME = "session";
const JWT_SECRET = process.env.JWT_SECRET || "";

async function jsonSafe(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/**
 * Resolve a session user using multiple fallbacks.
 * Returns an object that MAY contain { id, name?, email?, org? } or null.
 * Attempts to preserve your existing getSessionUser behavior.
 */
async function resolveSessionUser(req: Request) {
  try {
    // 1) primary helper (your existing logic)
    try {
      const s = await getSessionUser(req);
      if (s) return s;
    } catch (err) {
      // don't fail hard here; fall through to other strategies
      console.warn("getSessionUser failed:", err);
    }

    // 2) try Authorization: Bearer <token>
    try {
      const authHeader = (req.headers.get("authorization") ?? req.headers.get("Authorization")) as string | null;
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.substring(7).trim();
        if (JWT_SECRET && token) {
          const payload = jwt.verify(token, JWT_SECRET) as any;
          if (payload?.id) {
            // include org if token contains it
            const result: any = { id: payload.id, name: payload.name ?? null, email: payload.email ?? null };
            if (payload.org) result.org = payload.org;
            return result;
          }
        }
      }
    } catch (err) {
      // invalid bearer token — ignore and continue
      console.warn("Bearer token verification failed:", err);
    }

    // 3) server-side cookie fallback
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(COOKIE_NAME)?.value;
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) {
          const result: any = { id: payload.id, name: payload.name ?? null, email: payload.email ?? null };
          if (payload.org) result.org = payload.org;
          return result;
        }
      }
    } catch (err) {
      console.warn("Cookie token verification failed:", err);
    }

    return null;
  } catch (err) {
    console.error("resolveSessionUser unexpected error:", err);
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
      return NextResponse.json(
        { ok: false, user: null, error: "Unauthorized" },
        { status: 401, headers: { "Cache-Control": "no-store" } }
      );
    }

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
      return NextResponse.json(
        { ok: false, user: null, error: "User not found" },
        { status: 404, headers: { "Cache-Control": "no-store" } }
      );
    }

    // Return organization as top-level convenience plus inside user
    const responseUser = {
      ...user,
      organization: user.organization ?? null,
    };

    return NextResponse.json({ ok: true, user: responseUser }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("GET /api/me error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
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
    console.log("PATCH /api/me payload:", JSON.stringify(body));

    // Prohibit direct email changes in this endpoint to enforce the global-email rules elsewhere.
    if (typeof body.email === "string" && body.email.trim().length > 0) {
      // If you need to allow email changes, implement a dedicated, audited flow (verify current password + email verification + uniqueness checks).
      return NextResponse.json({ ok: false, error: "Email cannot be changed via this endpoint" }, { status: 400 });
    }

    // name is required per original logic
    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
    const incomingProfile = typeof body.profile === "object" && body.profile ? body.profile : {};

    if (!name || name.length === 0) {
      return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    }

    // simple length guards
    if (name.length > 200) {
      return NextResponse.json({ ok: false, error: "Name too long" }, { status: 400 });
    }
    if (phone && phone.length > 40) {
      return NextResponse.json({ ok: false, error: "Phone too long" }, { status: 400 });
    }

    // sanitize incoming profile fields
    const profileUpdates: any = {
      displayName: typeof incomingProfile.displayName === "string" ? incomingProfile.displayName.trim() : undefined,
      avatarUrl: typeof incomingProfile.avatarUrl === "string" ? incomingProfile.avatarUrl.trim() : undefined,
      bio: typeof incomingProfile.bio === "string" ? incomingProfile.bio.trim() : undefined,
      phoneNumber: typeof incomingProfile.phoneNumber === "string" ? incomingProfile.phoneNumber.trim() : phone ?? undefined,
    };

    // Build metadata (extensible)
    const metadata: Record<string, any> = {};
    if (typeof incomingProfile.country === "string") metadata.country = incomingProfile.country;
    if (typeof incomingProfile.region === "string") metadata.region = incomingProfile.region;
    if (typeof incomingProfile.district === "string") metadata.district = incomingProfile.district;
    if (typeof incomingProfile.postalCode === "string") metadata.postalCode = incomingProfile.postalCode;
    if (typeof incomingProfile.language === "string") metadata.language = incomingProfile.language;

    // fetch existing profile metadata and merge
    const existingProfileRow = await prisma.profile.findUnique({
      where: { userId: sessionUser.id },
      select: { metadata: true },
    });
    const existingMetadata = (existingProfileRow?.metadata as any) ?? {};
    const mergedMetadata = { ...existingMetadata, ...metadata };

    // upsert profile via nested update on User
    const updatedUser = await prisma.user.update({
      where: { id: sessionUser.id },
      data: {
        name,
        phone,
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
      },
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

    console.log("PATCH /api/me updated user id:", updatedUser.id);
    return NextResponse.json({ ok: true, user: updatedUser }, { status: 200 });
  } catch (err: any) {
    console.error("PATCH /api/me error:", err?.message ?? err, err?.stack ?? "");
    if ((err as any).code) console.error("Prisma error code:", (err as any).code, "meta:", (err as any).meta ?? null);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
