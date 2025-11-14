// src/app/api/invites/finalize/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/invites/finalize
 *
 * Accepts JSON:
 *  { token?: string, password: string, name?: string, phone?: string, phoneVerified?: boolean }
 * OR Authorization: Bearer <token> header + JSON body { password: "...", ... }
 *
 * Behavior:
 *  - Validate token + password
 *  - Ensure invite exists, not expired, not already accepted
 *  - Ensure invite.email is not already registered
 *  - Create user in a transaction, attach organization/team from invite if present
 *  - Mark invite.acceptedAt and status in same transaction
 *  - Return 201 with userId/email on success
 */

function validatePassword(p: unknown) {
  return typeof p === "string" && p.length >= 8;
}
function validateName(n: unknown) {
  return n === undefined || (typeof n === "string" && n.trim().length > 0 && n.trim().length <= 200);
}

export async function POST(req: Request) {
  try {
    // parse body (defensive)
    let body: any = {};
    try {
      body = (await req.json()) || {};
    } catch {
      body = {};
    }

    // token: body.token or Authorization: Bearer <token>
    let token: string | null = typeof body?.token === "string" && body.token.trim() ? body.token.trim() : null;
    if (!token) {
      const auth = req.headers.get("authorization") || req.headers.get("Authorization");
      if (auth && typeof auth === "string" && auth.toLowerCase().startsWith("bearer ")) {
        token = auth.slice(7).trim();
      }
    }

    if (!token) {
      return NextResponse.json({ ok: false, message: "Missing invite token (provide body.token or Authorization: Bearer <token>)" }, { status: 400 });
    }

    const password = body?.password;
    if (!validatePassword(password)) {
      return NextResponse.json({ ok: false, message: "Invalid password — must be at least 8 characters." }, { status: 400 });
    }

    const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : undefined;
    if (!validateName(name)) {
      return NextResponse.json({ ok: false, message: "Invalid name" }, { status: 400 });
    }

    const phone = typeof body?.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
    const phoneVerifiedFlag = !!body?.phoneVerified;

    const now = new Date();

    const result = await prisma.$transaction(async (tx) => {
      // load invite
      const invite = await tx.invite.findUnique({ where: { token } });
      if (!invite) throw { code: "INVITE_NOT_FOUND" };

      // expired?
      if (invite.expiresAt && invite.expiresAt.getTime() <= now.getTime()) throw { code: "INVITE_EXPIRED" };

      // used?
      if (invite.acceptedAt) throw { code: "INVITE_ALREADY_USED" };

      // ensure invite has target email
      const invitedEmail = (invite.email || "").trim().toLowerCase();
      if (!invitedEmail) throw { code: "INVITE_MISSING_EMAIL" };

      // ensure email not already registered
      const existing = await tx.user.findUnique({ where: { email: invitedEmail } });
      if (existing) throw { code: "EMAIL_ALREADY_REGISTERED" };

      // hash password
      const passwordHash = await bcrypt.hash(String(password), 10);

      // build create payload (do not include unknown fields like `username`)
      const createData: any = {
        email: invitedEmail,
        passwordHash,
        name: name ?? null,
        provider: "email",
        emailVerified: true, // trusted via invite
        role: invite.role ?? "MEMBER",
      };

      if (phone) {
        createData.phone = phone;
        if (phoneVerifiedFlag) createData.phoneVerified = true;
      }

      if (invite.organizationId) {
        createData.organization = { connect: { id: invite.organizationId } };
      }
      if (invite.teamId) {
        createData.team = { connect: { id: invite.teamId } };
      }

      // create user
      const newUser = await tx.user.create({ data: createData });

      // mark invite accepted (single-use)
      await tx.invite.update({
        where: { id: invite.id },
        data: { acceptedAt: new Date(), status: "ACCEPTED" as any },
      });

      return { userId: newUser.id, email: newUser.email, organizationId: invite.organizationId ?? null };
    });

    return NextResponse.json({ ok: true, message: "Account created", ...result }, { status: 201 });
  } catch (err: any) {
    // map thrown codes from transaction
    if (err && typeof err === "object" && "code" in err) {
      switch (err.code) {
        case "INVITE_NOT_FOUND":
          return NextResponse.json({ ok: false, message: "Invalid invite token" }, { status: 404 });
        case "INVITE_EXPIRED":
          return NextResponse.json({ ok: false, message: "Invite expired" }, { status: 410 });
        case "INVITE_ALREADY_USED":
          return NextResponse.json({ ok: false, message: "Invite already used" }, { status: 410 });
        case "INVITE_MISSING_EMAIL":
          return NextResponse.json({ ok: false, message: "Invite missing target email" }, { status: 500 });
        case "EMAIL_ALREADY_REGISTERED":
          return NextResponse.json({ ok: false, message: "Account already exists for this email" }, { status: 409 });
        default:
          break;
      }
    }

    // Prisma unique constraint (extra safety)
    if (err && err.code === "P2002" && Array.isArray(err?.meta?.target)) {
      const target = (err.meta.target as string[]).join(", ");
      console.error("[invites/finalize] Prisma unique constraint error:", target, err);
      return NextResponse.json({ ok: false, message: `Unique constraint failed: ${target}` }, { status: 409 });
    }

    console.error("[invites/finalize] Fatal error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}
