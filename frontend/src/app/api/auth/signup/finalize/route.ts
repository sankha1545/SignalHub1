// app/api/auth/signup/finalize/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signSession } from "@/lib/jwt";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

/**
 * Finalize signup route - supports two flows:
 * 1) Organization creation (original behaviour) - tempToken contains phone & phoneVerified
 * 2) Invite-accept flow (upgraded) - tempToken contains invite metadata (decoded.invite === true OR decoded.organizationId)
 *
 * Returns JSON:
 *  { ok, activated?: boolean, user?: {...}, token?: string, redirect?: string, error?: string }
 *
 * Notes:
 *  - The route expects the tempToken produced earlier in the signup/email/phone verification flow.
 *  - For invite flows, we treat invited email as verified and bind user to the invite organization.
 *  - For security, invite consumption is transactional: user created, profile/team member created, invite marked used.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, organizationName, password, tempToken, email: suppliedEmail } = body ?? {};

    if (!password || !tempToken) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // verify temp token (throws if invalid)
    let decoded: any;
    try {
      decoded = verifyTemp(tempToken);
    } catch (err) {
      console.error("[verifyTemp failed]", err);
      return NextResponse.json({ ok: false, error: "invalid_or_expired_temp_token" }, { status: 401 });
    }

    // determine invite flow
    const isInviteFlow = Boolean(
      decoded?.invite === true ||
      (decoded?.organizationId && (!organizationName || organizationName?.toString().trim() === ""))
    );

    // pick email from body or token
    const rawEmail = (suppliedEmail ?? decoded?.email ?? null) as string | null;
    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
    }
    const emailToSave = rawEmail.trim().toLowerCase();

    // basic password hashing
    const hashedPassword = await bcrypt.hash(String(password), 10);

    // ------------- INVITE FLOW --------------
    if (isInviteFlow) {
      const organizationId = decoded.organizationId || decoded.orgId || decoded.org || null;
      const inviteIdFromToken = decoded.inviteId ?? null;
      const inviteTokenFromToken = decoded.inviteToken ?? null; // if you encoded token id/metadata in temp

      if (!organizationId) {
        return NextResponse.json({ ok: false, error: "invite_missing_org" }, { status: 400 });
      }

      try {
        const res = await prisma.$transaction(async (tx) => {
          // reload invite by inviteId if available, else find by organizationId + email (defensive)
          let inviteRecord: any = null;
          if (inviteIdFromToken) {
            inviteRecord = await tx.invite.findUnique({ where: { id: inviteIdFromToken } });
          }
          if (!inviteRecord && inviteTokenFromToken) {
            inviteRecord = await tx.invite.findUnique({ where: { token: inviteTokenFromToken } });
          }
          if (!inviteRecord) {
            // fallback: find active invite for email + org
            inviteRecord = await tx.invite.findFirst({
              where: {
                email: emailToSave,
                organizationId,
                acceptedAt: null,
                expiresAt: { gt: new Date() },
              },
            });
          }

          if (!inviteRecord) throw { code: "INVITE_NOT_FOUND" };

          // invite expired?
          if (inviteRecord.expiresAt && inviteRecord.expiresAt.getTime() <= Date.now()) {
            throw { code: "INVITE_EXPIRED" };
          }

          // used?
          if (inviteRecord.acceptedAt) {
            throw { code: "INVITE_ALREADY_USED" };
          }

          // re-check email uniqueness in transaction
          const existingUser = await tx.user.findUnique({ where: { email: emailToSave } });
          if (existingUser) {
            // if user belongs to a different org -> conflict
            if (existingUser.organizationId && inviteRecord.organizationId && existingUser.organizationId !== inviteRecord.organizationId) {
              throw { code: "EMAIL_EXISTS_OTHER_ORG" };
            }
            // if user already in same org treat as existing
            if (existingUser.organizationId === inviteRecord.organizationId) {
              // mark invite used (best-effort) then return existing
              try {
                await tx.invite.update({ where: { id: inviteRecord.id }, data: { acceptedAt: new Date(), status: "ACCEPTED", token: null } });
              } catch (e) {
                // swallow
              }
              return { existing: true, user: existingUser };
            }
            // otherwise treat as conflict
            throw { code: "EMAIL_ALREADY_REGISTERED" };
          }

          // ensure organization exists
          const org = await tx.organization.findUnique({ where: { id: inviteRecord.organizationId } });
          if (!org) throw { code: "INVITE_ORG_NOT_FOUND" };

          // create user (email trusted because invited)
          const roleFromInvite = (inviteRecord.role || decoded.role || "EMPLOYEE").toString();
          const normalizedRole = roleFromInvite.toUpperCase();

          const userCreate: any = {
            name: name ?? null,
            email: emailToSave,
            passwordHash: hashedPassword,
            role: normalizedRole,
            emailVerified: true,
            phoneVerified: true, // invited users are treated as pre-verified (you can choose to make this conditional)
            organization: { connect: { id: org.id } },
            isActive: true,
            profile: {
              create: {
                displayName: name ?? undefined,
                phoneNumber: decoded?.phone ?? null,
              },
            },
          };

          const newUser = await tx.user.create({ data: userCreate });

          // add to team if invite has teamId and team belongs to org
          if (inviteRecord.teamId) {
            const team = await tx.team.findUnique({ where: { id: inviteRecord.teamId } });
            if (team && team.organizationId === org.id) {
              await tx.teamMember.create({
                data: {
                  teamId: team.id,
                  userId: newUser.id,
                  role: normalizedRole ?? "EMPLOYEE",
                },
              });
            }
          }

          // mark invite accepted + clear token for single-use
          await tx.invite.update({
            where: { id: inviteRecord.id },
            data: { acceptedAt: new Date(), status: "ACCEPTED", token: null },
          });

          return { existing: false, user: newUser, organization: org };
        });

        // If existing user in same org -> respond with friendly message to login
        if ((res as any).existing === true) {
          return NextResponse.json({ ok: true, message: "account_already_exists_for_org", email: emailToSave }, { status: 200 });
        }

        const { user } = res as any;

        // sign session token using existing helper
        const sessionToken = signSession({
          id: user.id,
          role: user.role,
          phone: user.phone ?? null,
          org: user.organizationId ?? null,
        });

        const redirect = /MANAGER/i.test(user.role) ? "/dashboard/manager" : "/dashboard/employee";

        return NextResponse.json(
          {
            ok: true,
            activated: true,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              organizationId: user.organizationId ?? null,
            },
            token: sessionToken,
            redirect,
          },
          { status: 201 }
        );
      } catch (inviteErr: any) {
        // map thrown codes
        if (inviteErr && typeof inviteErr === "object" && "code" in inviteErr) {
          switch (inviteErr.code) {
            case "INVITE_NOT_FOUND":
              return NextResponse.json({ ok: false, error: "invalid_invite" }, { status: 404 });
            case "INVITE_EXPIRED":
              return NextResponse.json({ ok: false, error: "invite_expired" }, { status: 410 });
            case "INVITE_ALREADY_USED":
              return NextResponse.json({ ok: false, error: "invite_already_used" }, { status: 410 });
            case "EMAIL_EXISTS_OTHER_ORG":
              return NextResponse.json({ ok: false, error: "account_exists_other_org" }, { status: 409 });
            case "EMAIL_ALREADY_REGISTERED":
              return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
            case "INVITE_ORG_NOT_FOUND":
              return NextResponse.json({ ok: false, error: "invite_org_not_found" }, { status: 404 });
          }
        }

        // prisma unique constraint fallback
        if (inviteErr instanceof Prisma.PrismaClientKnownRequestError && inviteErr.code === "P2002") {
          const target = (inviteErr.meta as any)?.target;
          if (Array.isArray(target) && target.includes("email")) {
            return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
          }
        }

        console.error("[Invite finalize error]", inviteErr);
        return NextResponse.json({ ok: false, error: inviteErr?.message || "internal_server_error" }, { status: 500 });
      }
    }

    // ------------- ORGANIZATION CREATION FLOW (original) --------------
    // Validate required fields
    if (!name || !organizationName) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // temp token must include phone & phoneVerified
    if (!decoded?.phone || !decoded?.phoneVerified) {
      return NextResponse.json({ ok: false, error: "phone_not_verified" }, { status: 403 });
    }
    const phone = decoded.phone as string;
    const orgName = organizationName.trim();

    // early existence checks
    const existingByPhone = await prisma.user.findFirst({ where: { phone } });
    if (existingByPhone) {
      return NextResponse.json({ ok: false, error: "account_already_exists_phone" }, { status: 409 });
    }
    const existingByEmail = await prisma.user.findUnique({ where: { email: emailToSave } });
    if (existingByEmail) {
      return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
    }

    try {
      const txRes = await prisma.$transaction(async (tx) => {
        // re-check inside tx
        const userByEmail = await tx.user.findUnique({ where: { email: emailToSave } });
        if (userByEmail) throw new Error("EMAIL_TAKEN");
        const userByPhone = await tx.user.findFirst({ where: { phone } });
        if (userByPhone) throw new Error("PHONE_TAKEN");

        // disallow duplicate organization names
        const orgExists = await tx.organization.findFirst({ where: { name: orgName } });
        if (orgExists) throw new Error("ORG_EXISTS");

        // create organization
        const org = await tx.organization.create({ data: { name: orgName } });

        // flags
        const phoneVerified = true;
        const emailVerified = Boolean(decoded?.emailVerified) || false;
        const isActive = phoneVerified && emailVerified;

        // create admin user and profile
        const user = await tx.user.create({
          data: {
            name,
            phone,
            email: emailToSave,
            passwordHash: hashedPassword,
            role: "ADMIN",
            phoneVerified,
            emailVerified,
            isActive,
            organization: { connect: { id: org.id } },
            profile: { create: { displayName: name, phoneNumber: phone } },
          },
          include: { organization: true },
        });

        return { user, organization: org };
      });

      const { user, organization } = txRes;

      // sign session if active
      let sessionToken: string | null = null;
      if (user.isActive) {
        sessionToken = signSession({
          id: user.id,
          role: user.role,
          phone: user.phone,
          org: user.organization?.id ?? null,
        });
      }

      return NextResponse.json(
        {
          ok: true,
          activated: user.isActive,
          user: {
            id: user.id,
            name: user.name,
            phone: user.phone,
            role: user.role,
            organization: organization.name,
            emailVerified: user.emailVerified,
            phoneVerified: user.phoneVerified,
          },
          token: sessionToken,
        },
        { status: 201 }
      );
    } catch (txErr: any) {
      if (txErr?.message === "ORG_EXISTS") {
        return NextResponse.json({ ok: false, error: "organization_already_exists" }, { status: 409 });
      }
      if (txErr?.message === "EMAIL_TAKEN") {
        return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
      }
      if (txErr?.message === "PHONE_TAKEN") {
        return NextResponse.json({ ok: false, error: "account_already_exists_phone" }, { status: 409 });
      }

      if (txErr instanceof Prisma.PrismaClientKnownRequestError && txErr.code === "P2002") {
        const target = (txErr.meta as any)?.target;
        if (Array.isArray(target) && target.includes("email")) {
          return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
        }
        if (Array.isArray(target) && (target.includes("name") || target.includes("organization_name"))) {
          return NextResponse.json({ ok: false, error: "organization_already_exists" }, { status: 409 });
        }
      }

      console.error("[Signup transaction error]", txErr);
      return NextResponse.json({ ok: false, error: txErr.message || "internal_server_error" }, { status: 500 });
    }
  } catch (err: any) {
    console.error("[Signup Finalize Error]", err);
    return NextResponse.json({ ok: false, error: err?.message || "internal_server_error" }, { status: 500 });
  }
}
