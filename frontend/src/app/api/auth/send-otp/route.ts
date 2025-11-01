// src/app/api/auth/send-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOTPEmail } from "@/lib/mail";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body?.email || "").toString().trim().toLowerCase();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    // generate 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // hash OTP before storing
    const codeHash = await bcrypt.hash(code, 10);
    const expiresAt = new Date(Date.now() + 60 * 1000); // 60 seconds

    // upsert OTP record for the email
    await prisma.emailOtp.upsert({
      where: { email },
      update: { codeHash, expiresAt, verified: false, createdAt: new Date() },
      create: { email, codeHash, expiresAt },
    });

    // send email (may throw if SMTP misconfigured)
    await sendOTPEmail(email, code);

    return NextResponse.json({ ok: true, message: "OTP sent" });
  } catch (err) {
    console.error("send-otp error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
