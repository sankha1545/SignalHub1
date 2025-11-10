// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signSession } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const { email, phone, password } = await req.json();

    if ((!email && !phone) || !password) {
      return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
    }

    // Find user by email or phone
    let user;
    if (email) {
      user = await prisma.user.findUnique({ where: { email } });
    } else if (phone) {
      user = await prisma.user.findFirst({ where: { phone } });
    }

    if (!user || !user.passwordHash) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // --- Enforce both verifications (phone AND email) ---
    const phoneVerified = Boolean(user.phoneVerified);
    const emailVerified = Boolean(user.emailVerified);

    if (!phoneVerified || !emailVerified) {
      // Provide specific details to help the client show the right UX
      return NextResponse.json(
        {
          error: "account_not_fully_verified",
          details: { phoneVerified, emailVerified },
        },
        { status: 403 }
      );
    }
    // ----------------------------------------------------

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

    return NextResponse.json(
      {
        ok: true,
        user: { id: user.id, email: user.email, phone: user.phone, role: user.role },
      },
      { headers: { "Set-Cookie": cookie } }
    );
  } catch (err: any) {
    console.error("[Login Error]", err);
    return NextResponse.json({ error: err.message || "internal_server_error" }, { status: 500 });
  }
}
