import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { signSession } from "@/lib/jwt";

/* ---------- validators ---------- */
function validatePassword(p: unknown) {
  return typeof p === "string" && p.length >= 8;
}
function validateName(n: unknown) {
  return n === undefined || (typeof n === "string" && n.trim().length > 0 && n.trim().length <= 200);
}

/* ---------- consumed token helper ---------- */
function makeConsumedToken(originalToken: string | undefined) {
  const prefix =
    originalToken && typeof originalToken === "string"
      ? originalToken.slice(0, 20)
      : "consumed";
  const suffix = crypto.randomBytes(12).toString("hex");
  return `${prefix}-consumed-${Date.now().toString(36)}-${suffix}`.slice(0, 255);
}

export async function POST(req: Request) {
  try {
    let body: any = {};
    try {
      body = (await req.json()) || {};
    } catch {}

    /* ---------- read token ---------- */
    let token: string | null =
      typeof body?.token === "string" && body.token.trim() ? body.token.trim() : null;

    if (!token) {
      const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
      if (authHeader?.toLowerCase().startsWith("bearer ")) {
        token = authHeader.slice(7).trim();
      }
    }

    if (!token) {
      return NextResponse.json({ ok: false, message: "Missing invite token" }, { status: 400 });
    }

    if (typeof token !== "string" || token.length < 16) {
      return NextResponse.json({ ok: false, message: "Invalid invite token" }, { status: 400 });
    }

    const password = body?.password;
    if (!validatePassword(password)) {
      return NextResponse.json({ ok: false, message: "Password must be at least 8 characters" }, { status: 400 });
    }

    const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : undefined;
    if (!validateName(name)) {
      return NextResponse.json({ ok: false, message: "Invalid name" }, { status: 400 });
    }

    const phone = typeof body?.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
    const phoneVerifiedFlag = !!body?.phoneVerified;
    const now = new Date();

    /* ---------- TRANSACTION ---------- */
    const result = await prisma.$transaction(async (tx) => {
      const invite = await tx.invite.findUnique({ where: { token } });
      if (!invite) throw { code: "INVITE_NOT_FOUND" };

      if (invite.expiresAt && invite.expiresAt <= now) throw { code: "INVITE_EXPIRED" };
      if (invite.acceptedAt) throw { code: "INVITE_ALREADY_USED" };

      const invitedEmail = (invite.email || "").trim().toLowerCase();
      if (!invitedEmail) throw { code: "INVITE_MISSING_EMAIL" };

      const existing = await tx.user.findUnique({ where: { email: invitedEmail } });
      if (existing) {
        if (existing.organizationId !== invite.organizationId)
          throw { code: "EMAIL_EXISTS_OTHER_ORG" };
        throw { code: "EMAIL_ALREADY_REGISTERED" };
      }

      if (!invite.organizationId) throw { code: "INVITE_MISSING_ORG" };

      const passwordHash = await bcrypt.hash(String(password), 10);
      const role = (invite.role || "EMPLOYEE").toUpperCase();
      const isManager = role === "MANAGER";

      const newUser = await tx.user.create({
        data: {
          email: invitedEmail,
          passwordHash,
          name: name ?? null,
          provider: "email",
          emailVerified: true,
          role,
          isActive: true,
          organization: { connect: { id: invite.organizationId } },
          ...(phone && {
            phone,
            phoneVerified: isManager ? true : phoneVerifiedFlag,
          }),
        },
      });

      await tx.profile.create({
        data: {
          userId: newUser.id,
          displayName: name,
          ...(phone && {
            phoneNumber: phone,
            phoneVerified: isManager ? true : phoneVerifiedFlag,
            phoneVerifiedAt: phoneVerifiedFlag ? now : undefined,
          }),
        },
      });

      if (invite.teamId) {
        const teamExists = await tx.team.findUnique({ where: { id: invite.teamId } });
        if (teamExists) {
          await tx.teamMember.create({
            data: { teamId: invite.teamId, userId: newUser.id, role },
          });
        }
      }

      for (let i = 0; i < 4; i++) {
        try {
          await tx.invite.update({
            where: { id: invite.id },
            data: {
              acceptedAt: now,
              status: "ACCEPTED",
              token: makeConsumedToken(invite.token),
            },
          });
          break;
        } catch (e) {
          if (i === 3) throw { code: "INVITE_CONSUME_FAILED" };
        }
      }

      return {
        userId: newUser.id,
        email: newUser.email,
        organizationId: invite.organizationId,
        role,
      };
    });

    /* ---------- LOGIN SESSION ---------- */
/* ---------- LOGIN SESSION ---------- */
const session = signSession(
  { id: result.userId, role: result.role, organizationId: result.organizationId },
  "7d"
);

/* ---------- SAFE REDIRECT ---------- */
const redirect =
  /ADMIN/i.test(result.role) ? "/dashboard/admin" : "/dashboard/employee";

/* ---------- RESPONSE + COOKIE ---------- */
const res = NextResponse.json({ ok: true, redirect }, { status: 201 });

res.cookies.set("session", session, {
  httpOnly: true,
  sameSite: "lax",
  path: "/",
});

return res;



    /* ---------- SAFE REDIRECT ---------- */
   

  } catch (err: any) {
    if (err?.code) {
      const map: any = {
        INVITE_NOT_FOUND: [404, "Invalid invite token"],
        INVITE_EXPIRED: [410, "Invite expired"],
        INVITE_ALREADY_USED: [410, "Invite already used"],
        INVITE_MISSING_EMAIL: [500, "Invite missing email"],
        EMAIL_ALREADY_REGISTERED: [409, "Account already exists"],
        EMAIL_EXISTS_OTHER_ORG: [409, "Email exists in another org"],
        INVITE_MISSING_ORG: [400, "Invite missing organization"],
        INVITE_CONSUME_FAILED: [500, "Failed to consume invite token"],
      };
      if (map[err.code]) {
        return NextResponse.json({ ok: false, message: map[err.code][1] }, { status: map[err.code][0] });
      }
    }

    console.error("[invites/finalize] Fatal:", err);
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
