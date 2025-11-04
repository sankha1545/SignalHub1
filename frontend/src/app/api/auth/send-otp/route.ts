// src/app/api/auth/send-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOTPEmail } from "@/lib/mail";

const OTP_LENGTH = 6;
const OTP_TTL_MS = 10 * 60 * 1000; // not stored unless you add expiresAt to schema

function generateOtp(length = OTP_LENGTH) {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return Math.floor(min + Math.random() * (max - min + 1)).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = (body?.email || "").toString().trim().toLowerCase();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const otp = generateOtp();

    // Try to upsert by email if email has a unique constraint; otherwise fallback to findFirst
    try {
      await prisma.emailOtp.upsert({
        where: { email }, // requires `email` to be unique in schema
        update: { otp, verified: false },
        create: { email, otp, verified: false },
      });
    } catch (e) {
      // fallback if email is not unique in schema
      const existing = await prisma.emailOtp.findFirst({ where: { email } });
      if (existing) {
        await prisma.emailOtp.update({
          where: { id: existing.id },
          data: { otp, verified: false },
        });
      } else {
        await prisma.emailOtp.create({
          data: { email, otp, verified: false },
        });
      }
    }

    // Send OTP (this uses the plaintext otp)
    await sendOTPEmail(email, otp);

    return NextResponse.json({ ok: true, message: "OTP sent" });
  } catch (err) {
    console.error("send-otp error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
