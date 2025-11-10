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

    if (!decoded?.phone || !decoded?.phoneVerified) {
      return NextResponse.json({ ok: false, error: "phone_not_verified" }, { status: 403 });
    }

    const phone = decoded.phone;
    // Pick email from request or from token
    const emailToSave = email ?? decoded.email ?? undefined;

    // If your Prisma schema requires email, ensure we have one
    if (!emailToSave) {
      return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({ where: { phone } });
    if (existingUser) {
      return NextResponse.json({ ok: false, error: "account_already_exists" }, { status: 400 });
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

    // Create user and connect to org by id (email included)
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        email: emailToSave,
        passwordHash: hashedPassword,
        role: "ADMIN",
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

    // Generate session token
    const sessionToken = signSession({
      id: user.id,
      role: user.role,
      phone: user.phone,
      org: user.organization.id,
    });

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        organization: user.organization.name,
      },
      token: sessionToken,
    });
  } catch (err: any) {
    console.error("[Signup Finalize Error]", err);
    return NextResponse.json({ ok: false, error: err.message || "internal_server_error" }, { status: 500 });
  }
}
