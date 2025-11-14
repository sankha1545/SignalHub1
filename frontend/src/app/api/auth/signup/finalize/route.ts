// app/api/auth/signup/finalize/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signSession } from "@/lib/jwt";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organizationName, password, tempToken, email } = body;

    if (!name || !organizationName || !password || !tempToken) {
      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
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

    // token must contain phone and indicate phone is verified
    if (!decoded?.phone || !decoded?.phoneVerified) {
      return NextResponse.json(
        { ok: false, error: "phone_not_verified" },
        { status: 403 }
      );
    }

    const phone = decoded.phone as string;

    // Pick email from request or from token
    const rawEmail = (email ?? decoded?.email ?? null) as string | null;
    if (!rawEmail) {
      return NextResponse.json(
        { ok: false, error: "email_required" },
        { status: 400 }
      );
    }
    const emailToSave = rawEmail.trim().toLowerCase();

    // Pre-checks (helpful early failures + better error messages)
    const existingByPhone = await prisma.user.findFirst({ where: { phone } });
    if (existingByPhone) {
      return NextResponse.json(
        { ok: false, error: "account_already_exists_phone" },
        { status: 409 }
      );
    }
    const existingByEmail = await prisma.user.findUnique({
      where: { email: emailToSave },
    });
    if (existingByEmail) {
      return NextResponse.json(
        { ok: false, error: "account_already_exists_email" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Canonicalize organization name (trim)
    const orgName = organizationName.trim();

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
        return NextResponse.json(
          { ok: false, error: "organization_already_exists" },
          { status: 409 }
        );
      }
      if (txErr?.message === "EMAIL_TAKEN") {
        return NextResponse.json(
          { ok: false, error: "account_already_exists_email" },
          { status: 409 }
        );
      }
      if (txErr?.message === "PHONE_TAKEN") {
        return NextResponse.json(
          { ok: false, error: "account_already_exists_phone" },
          { status: 409 }
        );
      }

      // Prisma unique violation fallback (in case DB has unique constraint names)
      if (txErr instanceof Prisma.PrismaClientKnownRequestError && txErr.code === "P2002") {
        const target = (txErr.meta as any)?.target;
        if (Array.isArray(target) && target.includes("email")) {
          return NextResponse.json(
            { ok: false, error: "account_already_exists_email" },
            { status: 409 }
          );
        }
        if (Array.isArray(target) && (target.includes("name") || target.includes("organization_name"))) {
          return NextResponse.json(
            { ok: false, error: "organization_already_exists" },
            { status: 409 }
          );
        }
      }

      console.error("[Signup transaction error]", txErr);
      return NextResponse.json(
        { ok: false, error: txErr.message || "internal_server_error" },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error("[Signup Finalize Error]", err);
    return NextResponse.json(
      { ok: false, error: err.message || "internal_server_error" },
      { status: 500 }
    );
  }
}
