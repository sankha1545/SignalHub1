// app/api/auth/signup/finalize/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signSession } from "@/lib/jwt";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

/**
 * Finalize signup route - supports two flows:
 * 1) Organization creation (existing behaviour) - admin/founder creates a new org while signing up.
 *    - Requires: name, organizationName, password, tempToken
 *    - tempToken is expected to contain phone & phoneVerified
 *
 * 2) Invite-accept flow for invited managers (upgrade added here)
 *    - When the temp token contains invite metadata (decoded.invite === true OR decoded.organizationId && no organizationName in body)
 *    - Treat email as verified and skip phone verification blocking for invited managers
 *    - Bind the created user to the invite organizationId and prevent cross-org overlap
 *    - Mark invite (if inviteId present in token) as used
 *
 * This file rewrites the existing logic but preserves the original organization-creation behaviour.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organizationName, password, tempToken, email } = body;

    if (!password || !tempToken) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // Verify temp token
    let decoded: any;
    try {
      decoded = verifyTemp(tempToken);
    } catch (err) {
      console.error("[verifyTemp failed]", err);
      return NextResponse.json(
        { ok: false, error: "invalid_or_expired_temp_token" },
        { status: 401 }
      );
    }

    // Determine whether this is an invite-accept flow.
    // Invite flow detection heuristics:
    // - decoded.invite === true
    // - OR decoded.organizationId present and client did not supply organizationName (i.e. not org creation)
    const isInviteFlow = Boolean(
      decoded?.invite === true ||
        (decoded?.organizationId && (!organizationName || organizationName.trim() === ""))
    );

    // Pick email: prefer explicit body email, else token email
    const rawEmail = (email ?? decoded?.email ?? null) as string | null;
    if (!rawEmail) {
      return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
    }
    const emailToSave = rawEmail.trim().toLowerCase();

    // Hash password (common for both flows)
    const hashedPassword = await bcrypt.hash(password, 10);

    if (isInviteFlow) {
      // --------- Invite accept flow ----------
      const organizationId = decoded.organizationId || decoded.orgId || decoded.org || null;
      if (!organizationId) {
        return NextResponse.json({ ok: false, error: "invite_missing_org" }, { status: 400 });
      }

      // Use transaction to enforce cross-org uniqueness and create user
      try {
        const result = await prisma.$transaction(async (tx) => {
          // Re-check existing user by email inside transaction
          const existingUser = await tx.user.findUnique({ where: { email: emailToSave } });
          if (existingUser) {
            // if user exists but belongs to different org => conflict
            if (existingUser.organizationId && existingUser.organizationId !== organizationId) {
              throw new Error("EMAIL_EXISTS_OTHER_ORG");
            }

            // if user exists and already part of same org => just mark invite used and inform client
            if (existingUser.organizationId === organizationId) {
              // mark invite used if inviteId present
              if (decoded.inviteId) {
                try {
                  await tx.invite.update({ where: { id: decoded.inviteId }, data: { used: true } });
                } catch (e) {
                  // ignore if invite not found; we still proceed
                }
              }
              return { existing: true, user: existingUser };
            }
          }

          // Ensure organization exists
          const org = await tx.organization.findUnique({ where: { id: organizationId } });
          if (!org) {
            throw new Error("INVITE_ORG_NOT_FOUND");
          }

          // Create the invited user bound to that organization.
          // Treat email as verified (trusted invite) and bypass phone verification requirement for invited managers.
          const roleFromToken = decoded.role ?? "MANAGER";
          const user = await tx.user.create({
            data: {
              name,
              email: emailToSave,
              passwordHash: hashedPassword,
              role: roleFromToken,
              organization: { connect: { id: organizationId } },
              emailVerified: true,
              // For invited managers we set phoneVerified = true so existing phone-gated flows don't block them.
              // If you prefer a more explicit flag, add `skipPhoneVerification` to your schema instead.
              phoneVerified: true,
              isActive: true,
              profile: {
                create: {
                  displayName: name ?? undefined,
                  phoneNumber: decoded?.phone ?? null,
                },
              },
            },
            include: { organization: true },
          });

          // Mark invite used if inviteId present in token
          if (decoded.inviteId) {
            try {
              await tx.invite.update({ where: { id: decoded.inviteId }, data: { used: true } });
            } catch (e) {
              // swallow - not critical
            }
          }

          return { existing: false, user, organization: org };
        });

        // If existing user in same org, return friendly response (ask to login)
        if ((result as any).existing === true) {
          return NextResponse.json(
            { ok: true, message: "account_already_exists_for_org", email: emailToSave },
            { status: 200 }
          );
        }

        const { user } = result as any;

        // Sign session for invited users (user.isActive === true)
        const sessionToken = signSession({
          id: user.id,
          role: user.role,
          phone: user.phone ?? null,
          org: user.organization?.id ?? null,
        });

        return NextResponse.json(
          {
            ok: true,
            activated: true,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              organization: user.organization?.name ?? null,
              emailVerified: user.emailVerified,
              phoneVerified: user.phoneVerified,
            },
            token: sessionToken,
            redirect: "/dashboard/manager",
          },
          { status: 201 }
        );
      } catch (inviteTxErr: any) {
        if (inviteTxErr?.message === "EMAIL_EXISTS_OTHER_ORG") {
          return NextResponse.json(
            { ok: false, error: "account_already_exists_email_other_org" },
            { status: 409 }
          );
        }
        if (inviteTxErr?.message === "INVITE_ORG_NOT_FOUND") {
          return NextResponse.json({ ok: false, error: "invite_org_not_found" }, { status: 404 });
        }

        // Prisma unique violation fallback
        if (inviteTxErr instanceof Prisma.PrismaClientKnownRequestError && inviteTxErr.code === "P2002") {
          const target = (inviteTxErr.meta as any)?.target;
          if (Array.isArray(target) && target.includes("email")) {
            return NextResponse.json(
              { ok: false, error: "account_already_exists_email" },
              { status: 409 }
            );
          }
        }

        console.error("[Invite finalize error]", inviteTxErr);
        return NextResponse.json(
          { ok: false, error: inviteTxErr.message || "internal_server_error" },
          { status: 500 }
        );
      }
    }

    // --------- Organization creation flow (existing behaviour) ----------
    // For the original signup flow, we require name + organizationName in body.
    if (!name || !organizationName) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // token must contain phone and indicate phone is verified
    if (!decoded?.phone || !decoded?.phoneVerified) {
      return NextResponse.json({ ok: false, error: "phone_not_verified" }, { status: 403 });
    }
    const phone = decoded.phone as string;

    // Canonicalize organization name (trim)
    const orgName = organizationName.trim();

    // Pre-checks (helpful early failures + better error messages)
    const existingByPhone = await prisma.user.findFirst({ where: { phone } });
    if (existingByPhone) {
      return NextResponse.json({ ok: false, error: "account_already_exists_phone" }, { status: 409 });
    }
    const existingByEmail = await prisma.user.findUnique({ where: { email: emailToSave } });
    if (existingByEmail) {
      return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
    }

    // Use a transaction to create organization + admin atomically,
    // and to re-check existence inside the transaction to avoid races.
    try {
      const result = await prisma.$transaction(async (tx) => {
        // 1) Re-check user/email/phone inside transaction to avoid TOCTOU
        const userByEmail = await tx.user.findUnique({
          where: { email: emailToSave },
        });
        if (userByEmail) {
          throw new Error("EMAIL_TAKEN");
        }
        const userByPhone = await tx.user.findFirst({
          where: { phone },
        });
        if (userByPhone) {
          throw new Error("PHONE_TAKEN");
        }

        // 2) Check organization existence.
        // Intention: when a user is creating an org via signup, they must create a new org.
        // If an org with that name already exists, reject the signup (prevent duplicate org names).
        const existingOrg = await tx.organization.findFirst({
          where: { name: orgName },
        });
        if (existingOrg) {
          // Organization already exists -> block creation.
          throw new Error("ORG_EXISTS");
        }

        // 3) Create organization
        const organization = await tx.organization.create({
          data: {
            name: orgName,
          },
        });

        // 4) Compute verification flags
        const phoneVerified = true; // required by temp token
        const emailVerified = Boolean(decoded?.emailVerified) || false;
        const isActive = phoneVerified && emailVerified;

        // 5) Create user (admin) connected to organization
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
            organization: {
              connect: { id: organization.id },
            },
            profile: {
              create: { displayName: name, phoneNumber: phone },
            },
          },
          include: {
            organization: true,
            profile: true,
          },
        });

        return { user, organization };
      });

      const { user, organization } = result;

      // Sign session only if fully active (both phone + email verified)
      let sessionToken: string | null = null;
      if (user.isActive) {
        sessionToken = signSession({
          id: user.id,
          role: user.role,
          phone: user.phone,
          org: user.organization.id,
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
      // Known flow errors thrown above
      if (txErr?.message === "ORG_EXISTS") {
        return NextResponse.json({ ok: false, error: "organization_already_exists" }, { status: 409 });
      }
      if (txErr?.message === "EMAIL_TAKEN") {
        return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 409 });
      }
      if (txErr?.message === "PHONE_TAKEN") {
        return NextResponse.json({ ok: false, error: "account_already_exists_phone" }, { status: 409 });
      }

      // Prisma unique violation fallback (in case DB has unique constraint names)
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
    return NextResponse.json({ ok: false, error: err.message || "internal_server_error" }, { status: 500 });
  }
}
