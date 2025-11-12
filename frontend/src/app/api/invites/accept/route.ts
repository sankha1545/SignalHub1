// src/app/api/invites/accept/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Accept an invite token and return the email and role for signup
 * 
 * Flow:
 * - Token must exist in query body
 * - Token must exist in DB
 * - Token must not be expired
 * - Token must not be already used (acceptedAt is null)
 */
export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token || typeof token !== "string") {
      return NextResponse.json({ ok: false, message: "Missing or invalid token" }, { status: 400 });
    }

    // Find invite by token
    const invite = await prisma.invite.findUnique({
      where: { token },
    });

    if (!invite) {
      return NextResponse.json({ ok: false, message: "Invalid invite token" }, { status: 404 });
    }

    if (invite.acceptedAt) {
      return NextResponse.json({ ok: false, message: "Invite already used" }, { status: 410 });
    }

    if (invite.expiresAt < new Date()) {
      return NextResponse.json({ ok: false, message: "Invite expired" }, { status: 410 });
    }

    // Return invite data needed by frontend to prefill signup
    return NextResponse.json({
      ok: true,
      email: invite.email,
      role: invite.role,
      organizationId: invite.organizationId || null,
      teamId: invite.teamId || null,
    });
  } catch (err: any) {
    console.error("invites/accept error:", err);
    return NextResponse.json({ ok: false, message: err?.message || "Server error" }, { status: 500 });
  }
}
