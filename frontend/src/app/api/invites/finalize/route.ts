// src/app/api/invites/finalize/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function validatePassword(p: string) {
  return typeof p === "string" && p.length >= 8;
}

export async function POST(req: Request) {
  try {
    const { token, username, password } = await req.json();
    if (!token) return NextResponse.json({ ok: false, message: "Missing token" }, { status: 400 });
    if (!username || typeof username !== "string") return NextResponse.json({ ok: false, message: "Invalid username" }, { status: 400 });
    if (!validatePassword(password)) return NextResponse.json({ ok: false, message: "Password must be at least 8 characters" }, { status: 400 });

    const invite = await prisma.invite.findUnique({ where: { token } });
    if (!invite) return NextResponse.json({ ok: false, message: "Invalid invite token" }, { status: 404 });
    if (invite.acceptedAt) return NextResponse.json({ ok: false, message: "Invite already used" }, { status: 410 });
    if (new Date(invite.expiresAt) < new Date()) return NextResponse.json({ ok: false, message: "Invite expired" }, { status: 410 });

    // ensure email isn't already used
    const existing = await prisma.user.findUnique({ where: { email: invite.email } });
    if (existing) return NextResponse.json({ ok: false, message: "Account already exists for this email" }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: invite.email,
        username,
        passwordHash,
        emailVerified: true,    // skip email verification (admin already verified)
        phoneVerified: true,    // skip phone verification
        // add other fields if needed
      },
    });

    // mark invite accepted
    await prisma.invite.update({ where: { id: invite.id }, data: { acceptedAt: new Date() } });

    // Optionally create profile or send welcome email...

    return NextResponse.json({ ok: true, message: "Account created" });
  } catch (err: any) {
    console.error("invites/finalize error:", err);
    return NextResponse.json({ ok: false, message: err?.message || "Server error" }, { status: 500 });
  }
}
