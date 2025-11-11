// src/app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

/**
 * Helper: parse JSON body safely
 */
async function jsonSafe(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/**
 * GET /api/me
 */
export async function GET(req: Request) {
  try {
    const sessionUser = await getSessionUser(req);
    if (!sessionUser) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

    // include Profile relation
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
        profile: true, // relational object
      },
    });

    if (!user) return NextResponse.json({ ok: false, error: "User not found" }, { status: 404 });
    return NextResponse.json({ ok: true, user }, { status: 200 });
  } catch (err) {
    console.error("GET /api/me error:", err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}

/**
 * PATCH /api/me
 * - Accepts name, phone and profile object (displayName, avatarUrl, bio, country, region, district, postalCode, language, etc.)
 * - Upserts related Profile row and stores extra fields in Profile.metadata JSON
 */
export async function PATCH(req: Request) {
  try {
    const sessionUser = await getSessionUser(req);
    if (!sessionUser) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

    const body = await jsonSafe(req);
    console.log("PATCH /api/me payload:", JSON.stringify(body));

    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
    const incomingProfile = typeof body.profile === "object" && body.profile ? body.profile : {};

    if (typeof name === "undefined" || name.length === 0) {
      return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
    }

    // sanitize/limit postal code
    if (incomingProfile.postalCode && typeof incomingProfile.postalCode === "string" && incomingProfile.postalCode.length > 200) {
      return NextResponse.json({ ok: false, error: "Postal code too long" }, { status: 400 });
    }

    // Map incoming fields to Profile columns where possible.
    // Your Profile model (based on DB logs) has explicit columns:
    // displayName, avatarUrl, bio, metadata (Json), phoneNumber, phoneVerified, etc.
    const profileUpdates: any = {
      displayName: typeof incomingProfile.displayName === "string" ? incomingProfile.displayName.trim() : undefined,
      avatarUrl: typeof incomingProfile.avatarUrl === "string" ? incomingProfile.avatarUrl.trim() : undefined,
      bio: typeof incomingProfile.bio === "string" ? incomingProfile.bio.trim() : undefined,
      phoneNumber: typeof incomingProfile.phoneNumber === "string" ? incomingProfile.phoneNumber.trim() : phone ?? undefined,
      // do not set createdAt/updatedAt here - Prisma handles timestamps
    };

    // Build metadata JSON for extensible fields (country/region/district/postalCode/language and any extras)
    const metadata: Record<string, any> = {};
    if (typeof incomingProfile.country === "string") metadata.country = incomingProfile.country;
    if (typeof incomingProfile.region === "string") metadata.region = incomingProfile.region;
    if (typeof incomingProfile.district === "string") metadata.district = incomingProfile.district;
    if (typeof incomingProfile.postalCode === "string") metadata.postalCode = incomingProfile.postalCode;
    if (typeof incomingProfile.language === "string") metadata.language = incomingProfile.language;

    // Also carry-through any existing metadata keys: fetch existing profile.metadata to merge
    const existingProfileRow = await prisma.profile.findUnique({
      where: { userId: sessionUser.id },
      select: { metadata: true },
    });
    const existingMetadata = (existingProfileRow?.metadata as any) ?? {};

    const mergedMetadata = { ...existingMetadata, ...metadata };

    // Now perform an upsert of the profile relation
    // Prisma nested upsert on a one-to-one relation from User:
    //   profile: { upsert: { create: { ... }, update: { ... } } }
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
              // only set fields that are provided (avoid overwriting with undefined)
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
