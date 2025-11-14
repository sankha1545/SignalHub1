// src/app/api/invites/accept/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Accept an invite token and return the email and role for signup
 *
 * Flow:
 * - Token must exist in request body
 * - Token must exist in DB
 * - Token must not be expired (if expiresAt is set)
 * - Token must not be already used (acceptedAt is null)
 * - The invite email must not already belong to an existing user (global uniqueness)
 *
 * The endpoint returns invite metadata needed by the frontend to prefill the signup form:
 * { ok, email, role, organizationId, organizationName, teamId, expiresAt, createdAt }
 */
export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const token = payload?.token;

    // Basic validation
    if (!token || typeof token !== "string" || token.trim().length === 0) {
      return NextResponse.json(
        { ok: false, message: "Missing or invalid token" },
        { status: 400 }
      );
    }

    const normalizedToken = token.trim();

    // Lookup invite, include organization name when available
    const invite = await prisma.invite.findUnique({
      where: { token: normalizedToken },
      include: {
        organization: {
          select: { id: true, name: true },
        },
      },
    });

    if (!invite) {
      return NextResponse.json(
        { ok: false, message: "Invalid invite token" },
        { status: 404 }
      );
    }

    // Check if invite was already accepted
    if (invite.acceptedAt) {
      return NextResponse.json(
        { ok: false, message: "Invite already used" },
        { status: 410 }
      );
    }

    // Check expiry if set
    if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) {
      return NextResponse.json(
        { ok: false, message: "Invite expired" },
        { status: 410 }
      );
    }

    // Defensive: ensure invite has an email
    if (!invite.email || typeof invite.email !== "string") {
      return NextResponse.json(
        { ok: false, message: "Invite missing target email" },
        { status: 500 }
      );
    }

    const inviteEmail = invite.email.trim().toLowerCase();

    // IMPORTANT: ensure the invite email is not already used by any user in the system
    // This enforces "once an email has been used for creating an account it cannot be used again".
    const existingUser = await prisma.user.findUnique({
      where: { email: inviteEmail },
    });

    if (existingUser) {
      // The invite cannot be used because the email is taken already.
      // We do NOT automatically accept/consume the invite here — caller should handle remediation.
      return NextResponse.json(
        {
          ok: false,
          message: "Email already in use",
          detail: "The invited email is already registered in the system.",
        },
        { status: 409 }
      );
    }

    // Everything looks good — return useful invite metadata for frontend signup.
    return NextResponse.json({
      ok: true,
      email: inviteEmail,
      role: invite.role,
      organizationId: invite.organizationId ?? null,
      organizationName: invite.organization?.name ?? null,
      teamId: invite.teamId ?? null,
      // return timestamps in ISO so frontend can display them reliably
      expiresAt: invite.expiresAt ? invite.expiresAt.toISOString() : null,
      createdAt: invite.createdAt ? invite.createdAt.toISOString() : null,
      message: "Invite valid",
    });
  } catch (err: any) {
    console.error("invites/accept error:", err);
    return NextResponse.json(
      { ok: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
