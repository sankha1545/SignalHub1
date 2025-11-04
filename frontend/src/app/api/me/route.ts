// src/app/api/me/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";
import { Prisma } from "@prisma/client";

/** compute since date */
function sinceDays(days = 30) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

/** Helper: compute base64 size (bytes) */
function base64SizeBytes(base64String: string) {
  const comma = base64String.indexOf(",");
  const b64 = comma >= 0 ? base64String.slice(comma + 1) : base64String;
  const padding = b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0;
  return Math.ceil((b64.length * 3) / 4) - padding;
}

/** Whitelisted writable profile fields */
const ALLOWED_PROFILE_FIELDS = new Set([
  "avatarUrl",
  "displayName",
  "bio",
  "metadata",
  "gender",
  "countryCode",
  "countryName",
  "stateName",
  "timezone",
  "countryGeonameId",
  "stateGeonameId",
]);

function sanitizeProfilePayload(raw: any) {
  if (!raw || typeof raw !== "object") return null;
  const cleaned: any = {};
  const rejectedKeys: string[] = [];

  for (const [k, v] of Object.entries(raw)) {
    if (ALLOWED_PROFILE_FIELDS.has(k)) {
      cleaned[k] = v === "" ? null : v;
    } else {
      rejectedKeys.push(k);
    }
  }

  if (rejectedKeys.length > 0) {
    console.info("sanitizeProfilePayload dropped unknown/read-only profile keys:", rejectedKeys);
  }

  return Object.keys(cleaned).length === 0 ? null : cleaned;
}

/**
 * GET /api/me
 * - returns { user, activity } or 401
 */
export async function GET(req: NextRequest) {
  // getUserFromRequest expects NextRequest so pass it directly
  const sessionUser = await getUserFromRequest(req);
  if (!sessionUser) return NextResponse.json({ user: null }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
  });

  if (!dbUser) {
    // user disappeared from DB — treat as unauthorized
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const since = sinceDays(30);
  const [logins30d, changes30d] = await Promise.all([
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
  ]);

  return NextResponse.json({ user: dbUser, activity: { logins30d, changes30d } });
}

/**
 * PATCH /api/me
 * - allow updating profile and name (whitelisted)
 */
export async function PATCH(req: NextRequest) {
  const sessionUser = await getUserFromRequest(req);
  if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const userUpdates: any = {};

  if (typeof body.name === "string") userUpdates.name = body.name;

  let profilePayload = null;
  if (body.profile && typeof body.profile === "object") {
    const incomingProfile = body.profile;

    if (incomingProfile.avatarBase64) {
      const size = base64SizeBytes(incomingProfile.avatarBase64);
      const max = 2 * 1024 * 1024;
      if (size > max) {
        return NextResponse.json({ error: "Avatar exceeds 2 MB limit" }, { status: 400 });
      }
    }

    profilePayload = sanitizeProfilePayload(incomingProfile);

    if (incomingProfile.avatarBase64) {
      profilePayload = { ...(profilePayload ?? {}), avatarUrl: incomingProfile.avatarBase64 };
    }
  }

  if (Object.keys(userUpdates).length === 0 && !profilePayload) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    const data: any = { ...userUpdates };

    if (profilePayload) {
      data.profile = {
        upsert: {
          update: profilePayload,
          create: profilePayload,
        },
      };
    }

    const updated = await prisma.user.update({
      where: { id: sessionUser.id },
      data,
      select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
    });

    if (profilePayload) {
      try {
        await prisma.activityLog.create({
          data: {
            userId: sessionUser.id,
            type: "PROFILE_CHANGE",
            meta: { fields: Object.keys(body.profile ?? {}), ts: new Date().toISOString() },
          },
        });
      } catch (err) {
        console.error("Failed to write profile change activity:", err);
      }
    }

    const since = sinceDays(30);
    const [logins30d, changes30d] = await Promise.all([
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
    ]);

    return NextResponse.json({ user: updated, activity: { logins30d, changes30d } });
  } catch (err: any) {
    console.error("Profile update error:", err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return NextResponse.json({ error: "Conflict: unique constraint", detail: err.message }, { status: 409 });
      }
      if (err.code === "P2025") {
        return NextResponse.json({ error: "Not found", detail: err.message }, { status: 404 });
      }
    }

    return NextResponse.json({ error: "Failed to update", detail: err?.message ?? String(err) }, { status: 500 });
  }
}
