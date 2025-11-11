// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signSession } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, phone, password } = body ?? {};

    if ((!email && !phone) || !password) {
      return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
    }

    // Find user by email or phone (prefer unique lookups)
    let user: any = null;
    if (email) {
      user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          phone: true,
          passwordHash: true,
          role: true,
          organizationId: true,
          phoneVerified: true,
          emailVerified: true,
          isActive: true,
        },
      });
    } else {
      // phone may not be unique in all schemas — use findFirst if necessary
      user = await prisma.user.findFirst({
        where: { phone },
        select: {
          id: true,
          email: true,
          phone: true,
          passwordHash: true,
          role: true,
          organizationId: true,
          phoneVerified: true,
          emailVerified: true,
          isActive: true,
        },
      });
    }

    if (!user || !user.passwordHash) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(String(password), user.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // Determine activation: prefer explicit isActive if present, otherwise require both flags
    const hasIsActive = Object.prototype.hasOwnProperty.call(user, "isActive");
    const isActive = hasIsActive ? Boolean(user.isActive) : (Boolean(user.phoneVerified) && Boolean(user.emailVerified));

    // If not active: return helpful details for client UX
    if (!isActive) {
      // In production we may want to avoid exposing exact flags to prevent account enumeration
      const showDetails = process.env.NODE_ENV !== "production";

      const details = showDetails
        ? { phoneVerified: Boolean(user.phoneVerified), emailVerified: Boolean(user.emailVerified) }
        : undefined;

      return NextResponse.json(
        {
          error: "account_not_active",
          message: "account_not_active: verify_email_and_phone",
          details,
        },
        { status: 403 }
      );
    }

    // Sign session JWT - include both keys for compatibility
    const sessionToken = signSession(
      {
        id: user.id,
        role: user.role,
        organizationId: user.organizationId,
        org: user.organizationId,
      },
      "7d"
    );

    // Set cookie
    const maxAge = 7 * 24 * 60 * 60; // 7 days
    const isProd = process.env.NODE_ENV === "production";
    const cookieParts = [
      `session=${sessionToken}`,
      `Path=/`,
      `Max-Age=${maxAge}`,
      `HttpOnly`,
      `SameSite=Lax`,
    ];
    if (isProd) cookieParts.push("Secure");
    const cookie = cookieParts.join("; ");

    // Return minimal user info
    return NextResponse.json(
      {
        ok: true,
        user: { id: user.id, email: user.email, phone: user.phone, role: user.role },
      },
      { headers: { "Set-Cookie": cookie } }
    );
  } catch (err: any) {
    console.error("[Login Error]", err);
    return NextResponse.json({ error: err?.message || "internal_server_error" }, { status: 500 });
  }
}
