// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signToken } from "@/lib/auth";

function buildCookie(token: string) {
  const maxAge = 7 * 24 * 60 * 60; // 7 days
  const secure = process.env.NODE_ENV === "production";
  return `token=${token}; Path=/; HttpOnly; SameSite=Strict; ${secure ? "Secure; " : ""}Max-Age=${maxAge}`;
}

export async function POST(req: Request) {
  try {
    const { email: rawEmail, password } = await req.json();
    const email = (rawEmail || "").toString().trim().toLowerCase();
    if (!email || !password) return NextResponse.json({ error: "Email and password required" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, name: true, passwordHash: true, role: true },
    });

    if (!user || !user.passwordHash) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const token = signToken({ userId: user.id, email: user.email }, "7d");

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
    res.headers.set("Set-Cookie", buildCookie(token));
    return res;
  } catch (err) {
    console.error("login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
