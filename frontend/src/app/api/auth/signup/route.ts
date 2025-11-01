// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";

type ReqBody = {
  email?: string;
  name?: string;
  password?: string;
  role?: "viewer" | "editor" | "admin" | string;
};

function buildCookie(token: string) {
  const maxAge = 7 * 24 * 60 * 60; // 7 days
  const secure = process.env.NODE_ENV === "production";
  // HttpOnly cookie string
  return `token=${token}; Path=/; HttpOnly; SameSite=Strict; ${secure ? "Secure; " : ""}Max-Age=${maxAge}`;
}

export async function POST(req: Request) {
  try {
    const { email: rawEmail, name, password, role } = (await req.json()) as ReqBody;
    const email = (rawEmail || "").toString().trim().toLowerCase();

    if (!email || !name || !password || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check OTP verification
    const otp = await prisma.emailOtp.findUnique({ where: { email } });
    if (!otp || !otp.verified) {
      return NextResponse.json({ error: "Email not verified with OTP" }, { status: 400 });
    }

    // Ensure user does not exist
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: "User already exists" }, { status: 409 });

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
        role: (role as any) || "viewer",
        emailVerified: true,
      },
      select: { id: true, email: true, name: true, role: true },
    });

    // Clean up used OTP (optional)
    await prisma.emailOtp.deleteMany({ where: { email } });

    // Issue JWT token (or your session mechanism)
    const token = signToken({ userId: user.id, email: user.email }, "7d");

    const res = NextResponse.json({ ok: true, user });
    res.headers.set("Set-Cookie", buildCookie(token));
    return res;
  } catch (err) {
    console.error("signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
