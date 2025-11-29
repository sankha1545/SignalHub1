// src/app/api/invites/accept/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Accept an invite token and return the email and role for signup.
 *
 * Supports:
 *  - GET  /api/invites/accept?token=...
 *  - POST { token: "..." }
 *  - Authorization: Bearer <token>
 *
 * Response (success):
 *  {
 *    ok: true,
 *    email,
 *    role,
 *    organizationId,
 *    organizationName,
 *    teamId,
 *    expiresAt,
 *    createdAt,
 *    preverifiedEmail: true,
 *    message: "Invite valid"
 *  }
 *
 * Error responses are JSON with { ok: false, message } and appropriate HTTP status.
 *
 * NOTE: This endpoint only *validates* the invite token and returns metadata for the
 * frontend to prefill signup. The invite should be consumed (create user + mark invite accepted)
 * by the /api/invites/finalize endpoint.
 */

/* ---------- helpers ---------- */

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function lookupInviteByToken(token: string) {
  // token is expected to be stored plainly in DB as unique token.
  // If you ever switch to hashed tokens, replace this with hash compare logic.
  return prisma.invite.findUnique({
    where: { token },
    include: { organization: { select: { id: true, name: true } } },
  });
}

/* ---------- GET handler (token via query) ---------- */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = (url.searchParams.get("token") || "").trim();

    if (!token) return jsonError("Missing invite token", 400);
    if (token.length < 16) return jsonError("Invalid invite token", 400);

    const invite = await lookupInviteByToken(token);
    if (!invite) return jsonError("Invalid invite token", 404);

    // Already accepted?
    if (invite.acceptedAt) return jsonError("Invite already used", 410);

    // Expiry check
    if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) return jsonError("Invite expired", 410);

    // Email sanity
    if (!invite.email || typeof invite.email !== "string") return jsonError("Invite missing target email", 500);
    const inviteEmail = invite.email.trim().toLowerCase();

    // Organization sanity
    if (!invite.organizationId)
      return jsonError("Invite missing organization reference", 500);
    const org = invite.organization ?? (await prisma.organization.findUnique({ where: { id: invite.organizationId } }));
    if (!org) return jsonError("Organization not found", 404);

    // Team -> org consistency
    if (invite.teamId) {
      const team = await prisma.team.findUnique({
        where: { id: invite.teamId },
        select: { id: true, organizationId: true },
      });
      if (!team) return jsonError("Invited team not found", 404);
      if (team.organizationId !== invite.organizationId) {
        return jsonError("Invited team does not belong to invite's organization", 400);
      }
    }

    // Ensure invite email not already registered
    const existingUser = await prisma.user.findUnique({ where: { email: inviteEmail } });
    if (existingUser) {
      return NextResponse.json(
        {
          ok: false,
          message: "Email already in use",
          detail: "The invited email is already registered in the system.",
        },
        { status: 409 }
      );
    }

    // Successful response (frontend expects these fields)
    return NextResponse.json({
      ok: true,
      email: inviteEmail,
      role: invite.role ?? null,
      organizationId: invite.organizationId ?? null,
      organizationName: org?.name ?? null,
      teamId: invite.teamId ?? null,
      expiresAt: invite.expiresAt ? invite.expiresAt.toISOString() : null,
      createdAt: invite.createdAt ? invite.createdAt.toISOString() : null,
      preverifiedEmail: true, // invited addresses are treated as pre-verified
      message: "Invite valid",
    });
  } catch (err: any) {
    console.error("[invites/accept][GET] unexpected error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { ok: false, message: isDev ? err?.message || "Server error" : "Server error" },
      { status: 500 }
    );
  }
}

/* ---------- POST handler (token via JSON body or Authorization header) ---------- */
export async function POST(req: Request) {
  try {
    let payload: any = {};
    try {
      payload = (await req.json()) || {};
    } catch {
      payload = {};
    }

    // Token sources: body.token OR Authorization header
    let token = typeof payload?.token === "string" ? payload.token.trim() : "";
    if (!token) {
      const auth = req.headers.get("authorization") || req.headers.get("Authorization") || "";
      if (auth && typeof auth === "string" && auth.toLowerCase().startsWith("bearer ")) {
        token = auth.slice(7).trim();
      }
    }

    if (!token) return jsonError("Missing invite token", 400);
    if (token.length < 16) return jsonError("Invalid invite token", 400);

    const invite = await lookupInviteByToken(token);
    if (!invite) return jsonError("Invalid invite token", 404);

    if (invite.acceptedAt) return jsonError("Invite already used", 410);
    if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) return jsonError("Invite expired", 410);

    if (!invite.email || typeof invite.email !== "string") return jsonError("Invite missing target email", 500);
    const inviteEmail = invite.email.trim().toLowerCase();

    // Defensive org check
    if (!invite.organizationId) return jsonError("Invite missing organization reference", 500);
    const org = invite.organization ?? (await prisma.organization.findUnique({ where: { id: invite.organizationId } }));
    if (!org) return jsonError("Organization not found", 404);

    // Team -> org consistency
    if (invite.teamId) {
      const team = await prisma.team.findUnique({
        where: { id: invite.teamId },
        select: { id: true, organizationId: true },
      });
      if (!team) return jsonError("Invited team not found", 404);
      if (team.organizationId !== invite.organizationId) {
        return jsonError("Invited team does not belong to invite's organization", 400);
      }
    }

    // Ensure invite email not already registered
    const existingUser = await prisma.user.findUnique({ where: { email: inviteEmail } });
    if (existingUser) {
      return NextResponse.json(
        {
          ok: false,
          message: "Email already in use",
          detail: "The invited email is already registered in the system.",
        },
        { status: 409 }
      );
    }

    // All good — return invite metadata
    return NextResponse.json({
      ok: true,
      email: inviteEmail,
      role: invite.role ?? null,
      organizationId: invite.organizationId ?? null,
      organizationName: org?.name ?? null,
      teamId: invite.teamId ?? null,
      expiresAt: invite.expiresAt ? invite.expiresAt.toISOString() : null,
      createdAt: invite.createdAt ? invite.createdAt.toISOString() : null,
      preverifiedEmail: true,
      message: "Invite valid",
    });
  } catch (err: any) {
    console.error("[invites/accept][POST] unexpected error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { ok: false, message: isDev ? err?.message || "Server error" : "Server error" },
      { status: 500 }
    );
  }
}

/* Explicitly reject other methods */
export function PUT() {
  return NextResponse.json({ ok: false, message: "Method not allowed" }, { status: 405 });
}
