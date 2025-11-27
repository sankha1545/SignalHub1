// src/app/api/invites/finalize/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/invites/finalize
 *
 * Accepts:
 *   { token?: string, password: string, name?: string, phone?: string, phoneVerified?: boolean }
 * or Authorization: Bearer <token>
 *
 * Behavior:
 *  - Validate token + password
 *  - Ensure invite exists, not expired, not already accepted
 *  - Ensure invite.email is not already registered under another org (prevent overlap)
 *  - Create user in a transaction, attach organization from invite
 *  - Create Profile and TeamMember (if invite.teamId present)
 *  - Mark invite.acceptedAt and status = ACCEPTED in same transaction
 *  - Return 201 with userId/email/organizationId on success
 */

function validatePassword(p: unknown) {
  return typeof p === "string" && p.length >= 8;
}
function validateName(n: unknown) {
  return n === undefined || (typeof n === "string" && n.trim().length > 0 && n.trim().length <= 200);
}

export async function POST(req: Request) {
  try {
    // parse body defensively
    let body: any = {};
    try {
      body = (await req.json()) || {};
    } catch {
      body = {};
    }

    // token: body.token or Authorization: Bearer <token>
    let token: string | null =
      typeof body?.token === "string" && body.token.trim() ? body.token.trim() : null;
    if (!token) {
      const auth = req.headers.get("authorization") || req.headers.get("Authorization");
      if (auth && typeof auth === "string" && auth.toLowerCase().startsWith("bearer ")) {
        token = auth.slice(7).trim();
      }
    }

    if (!token) {
      return NextResponse.json(
        { ok: false, message: "Missing invite token (provide body.token or Authorization: Bearer <token>)" },
        { status: 400 }
      );
    }

    const password = body?.password;
    if (!validatePassword(password)) {
      return NextResponse.json(
        { ok: false, message: "Invalid password — must be at least 8 characters." },
        { status: 400 }
      );
    }

    const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : undefined;
    if (!validateName(name)) {
      return NextResponse.json({ ok: false, message: "Invalid name" }, { status: 400 });
    }

    const phone = typeof body?.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
    // client-provided phoneVerified is advisory; we will set phoneVerified=true for invited MANAGERs
    const phoneVerifiedFlag = !!body?.phoneVerified;

    const now = new Date();

    // Transactional flow: verify invite, ensure uniqueness, create user/profile/teamMember, mark invite accepted
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

      // ensure email not already registered under another org
      const existing = await tx.user.findUnique({ where: { email: invitedEmail } });
      if (existing) {
        // If existing user belongs to a different organization -> conflict
        if (existing.organizationId && invite.organizationId && existing.organizationId !== invite.organizationId) {
          throw { code: "EMAIL_EXISTS_OTHER_ORG" };
        }
        // If existing user is already part of same organization, treat as conflict (account exists)
        throw { code: "EMAIL_ALREADY_REGISTERED" };
      }

      // ensure invite.organization exists
      if (!invite.organizationId) throw { code: "INVITE_MISSING_ORG" };
      const org = await tx.organization.findUnique({ where: { id: invite.organizationId } });
      if (!org) throw { code: "INVITE_ORG_NOT_FOUND" };

      // hash password
      const passwordHash = await bcrypt.hash(String(password), 10);

      // determine role & verification flags
      const roleFromInvite = (invite.role || "EMPLOYEE") as string; // Role enum string
      const isManager = roleFromInvite === "MANAGER" || roleFromInvite === "Manager" || roleFromInvite === "manager";

      // Build create payload for User
      const createUserData: any = {
        email: invitedEmail,
        passwordHash,
        name: name ?? null,
        provider: "email",
        emailVerified: true, // trusted because invite was issued by admin
        role: roleFromInvite,
        organization: { connect: { id: invite.organizationId } },
        isActive: true,
      };

      // Phone: attach if provided. For invited managers, we set phoneVerified = true to bypass phone gating.
      if (phone) {
        createUserData.phone = phone;
        createUserData.phoneVerified = isManager ? true : !!phoneVerifiedFlag;
      } else if (isManager) {
        // invited manager with no phone in invite: still allow creation but phoneVerified remains false
        // (we avoid forcing a value)
      }

      // Create user
      const newUser = await tx.user.create({ data: createUserData });

      // Create Profile with phone metadata if appropriate
      const profileData: any = {
        userId: newUser.id,
        displayName: name ?? undefined,
      };
      if (phone) {
        profileData.phoneNumber = phone;
        profileData.phoneVerified = isManager ? true : !!phoneVerifiedFlag;
        if (profileData.phoneVerified) profileData.phoneVerifiedAt = now;
      }
      await tx.profile.create({ data: profileData });

      // If invite.teamId present, add TeamMember record (if team exists)
      if (invite.teamId) {
        const teamExists = await tx.team.findUnique({ where: { id: invite.teamId } });
        if (teamExists) {
          // create membership (role defaults to EMPLOYEE; invite.role may override)
          await tx.teamMember.create({
            data: {
              teamId: invite.teamId,
              userId: newUser.id,
              role: (invite.role as any) ?? "EMPLOYEE",
            },
          });
        }
      }

      // Mark invite accepted
      await tx.invite.update({
        where: { id: invite.id },
        data: { acceptedAt: now, status: "ACCEPTED" },
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
        case "EMAIL_EXISTS_OTHER_ORG":
          return NextResponse.json(
            { ok: false, message: "An account with this email exists under another organization" },
            { status: 409 }
          );
        case "INVITE_MISSING_ORG":
          return NextResponse.json({ ok: false, message: "Invite missing organization" }, { status: 400 });
        case "INVITE_ORG_NOT_FOUND":
          return NextResponse.json({ ok: false, message: "Invite organization not found" }, { status: 404 });
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
