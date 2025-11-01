// src/app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email: rawEmail, code } = await req.json();
    const email = (rawEmail || "").toString().trim().toLowerCase();
    if (!email || !code) return NextResponse.json({ error: "Email and code required" }, { status: 400 });

    const otp = await prisma.emailOtp.findUnique({ where: { email } });
    if (!otp) return NextResponse.json({ error: "No OTP found for this email" }, { status: 404 });

    if (otp.verified) return NextResponse.json({ ok: true, message: "Already verified" });

    if (otp.expiresAt && otp.expiresAt < new Date()) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    const match = await bcrypt.compare(code.toString(), otp.codeHash);
    if (!match) return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });

    await prisma.emailOtp.update({
      where: { email },
      data: { verified: true },
    });

    return NextResponse.json({ ok: true, message: "OTP verified" });
  } catch (err) {
    console.error("verify-otp error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
