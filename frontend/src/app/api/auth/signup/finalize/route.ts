// app/api/auth/signup/finalize/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signSession } from "@/lib/jwt";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organizationName, password, tempToken, email } = body;

    if (!name || !organizationName || !password || !tempToken) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // Verify temp token
    let decoded: any;
    try {
      decoded = verifyTemp(tempToken);
    } catch (err) {
      console.error("[verifyTemp failed]", err);
      return NextResponse.json({ ok: false, error: "invalid_or_expired_temp_token" }, { status: 401 });
    }

    // token must contain phone and indicate phone is verified
    if (!decoded?.phone || !decoded?.phoneVerified) {
      return NextResponse.json({ ok: false, error: "phone_not_verified" }, { status: 403 });
    }

    const phone = decoded.phone;
    // Pick email from request or from token
    const emailToSave = (email ?? decoded?.email ?? null) as string | null;

    // If your Prisma schema requires email, ensure we have one
    if (!emailToSave) {
      return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
    }

    // Check if user already exists by phone or email
    const existingByPhone = await prisma.user.findFirst({ where: { phone } });
    if (existingByPhone) {
      return NextResponse.json({ ok: false, error: "account_already_exists_phone" }, { status: 400 });
    }
    const existingByEmail = await prisma.user.findUnique({ where: { email: emailToSave } });
    if (existingByEmail) {
      return NextResponse.json({ ok: false, error: "account_already_exists_email" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // find or create organization
    let organization = await prisma.organization.findFirst({
      where: { name: organizationName },
    });

    if (!organization) {
      organization = await prisma.organization.create({
        data: { name: organizationName },
      });
    }

    /**
     * Activation policy:
     * - phoneVerified is true (because temp token required it)
     * - emailVerified will be set to false at creation (unless token indicates otherwise)
     * - isActive is true only when both emailVerified && phoneVerified are true
     */
    const phoneVerified = true;
    const emailVerified = Boolean(decoded?.emailVerified) || false; // token might include emailVerified
    const isActive = phoneVerified && emailVerified;

    // Create user and connect to org by id (email included)
    const user = await prisma.user.create({
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

    // If account is active (both verified), sign a session token and return it.
    // Otherwise do NOT sign a persistent session here; respond with activated: false so client prompts email verification.
    let sessionToken: string | null = null;
    if (isActive) {
      sessionToken = signSession({
        id: user.id,
        role: user.role,
        phone: user.phone,
        org: user.organization.id,
      });
    }

    return NextResponse.json({
      ok: true,
      activated: isActive,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        organization: user.organization.name,
        emailVerified: user.emailVerified,
        phoneVerified: user.phoneVerified,
      },
      token: sessionToken,
    });
  } catch (err: any) {
    console.error("[Signup Finalize Error]", err);
    return NextResponse.json({ ok: false, error: err.message || "internal_server_error" }, { status: 500 });
  }
}
