// src/app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

/**
 * GET /api/me  -> returns { ok: true, user: { id, name, email, role, phone, organizationId, profile } }
 * PATCH /api/me -> accepts { name?, phone?, profile?: { displayName?, avatarUrl?, bio? } }
 */

export async function GET(req: Request) {
  try {
    const user = await getSessionUser(req);
    if (!user) return NextResponse.json({ ok: false, error: "unauthenticated" }, { status: 401 });

    const u = await prisma.user.findUnique({
      where: { id: user.id },
      include: { profile: true, organization: true },
    });

    if (!u) return NextResponse.json({ ok: false, error: "user_not_found" }, { status: 404 });

    return NextResponse.json({
      ok: true,
      user: {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        phone: u.phone,
        organizationId: u.organizationId,
        organizationName: u.organization?.name ?? null,
        profile: u.profile ?? null,
        createdAt: u.createdAt,
      },
    });
  } catch (err: any) {
    console.error("[/api/me GET] error", err);
    return NextResponse.json({ ok: false, error: err.message || "internal_server_error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getSessionUser(req);
    if (!session) return NextResponse.json({ ok: false, error: "unauthenticated" }, { status: 401 });
    const body = await req.json();
    const { name, phone, profile } = body;

    // simple validation
    const updates: any = {};
    if (typeof name === "string") updates.name = name.trim();
    if (typeof phone === "string") updates.phone = phone.trim();

    // Update user and (optionally) profile
    const updatedUser = await prisma.user.update({
      where: { id: session.id },
      data: {
        ...updates,
        profile: profile
          ? {
              upsert: {
                create: {
                  displayName: profile.displayName ?? updates.name ?? undefined,
                  avatarUrl: profile.avatarUrl ?? null,
                  bio: profile.bio ?? null,
                  phoneNumber: profile.phoneNumber ?? phone ?? null,
                },
                update: {
                  displayName: profile.displayName ?? undefined,
                  avatarUrl: profile.avatarUrl ?? undefined,
                  bio: profile.bio ?? undefined,
                  phoneNumber: profile.phoneNumber ?? undefined,
                },
              },
            }
          : undefined,
      },
      include: { profile: true, organization: true },
    });

    return NextResponse.json({ ok: true, user: updatedUser });
  } catch (err: any) {
    console.error("[/api/me PATCH] error", err);
    return NextResponse.json({ ok: false, error: err.message || "internal_server_error" }, { status: 500 });
  }
}
