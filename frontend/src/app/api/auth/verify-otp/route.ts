// src/app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = (body?.email || "").toString().trim().toLowerCase();
    const code = (body?.code || "").toString().trim();

    if (!email || !code) {
      return NextResponse.json({ error: "Email and code required" }, { status: 400 });
    }

    // find the most recent OTP row for this email (if you have unique email, use findUnique)
    const otpRow = await prisma.emailOtp.findFirst({
      where: { email },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRow) {
      return NextResponse.json({ error: "No OTP found for this email" }, { status: 404 });
    }

    // Optional expiry check: will only work if your model has expiresAt
    if ((otpRow as any).expiresAt) {
      const expiresAt = new Date((otpRow as any).expiresAt);
      if (expiresAt < new Date()) {
        return NextResponse.json({ error: "OTP expired" }, { status: 410 });
      }
    }

    // Determine verification method:
    // - If codeHash exists, use bcrypt.compare(code, codeHash)
    // - Otherwise, fall back to direct plaintext comparison against otp field
    const codeHash = (otpRow as any).codeHash;
    const plainOtp = (otpRow as any).otp;

    let verified = false;
    if (codeHash) {
      // defensive: ensure both args are defined
      if (typeof code !== "string" || !codeHash) {
        return NextResponse.json({ error: "Invalid verification data" }, { status: 400 });
      }
      verified = await bcrypt.compare(code, codeHash);
    } else if (typeof plainOtp === "string") {
      verified = code === plainOtp;
    } else {
      // neither hash nor plaintext OTP present — can't verify
      return NextResponse.json({ error: "Server verification misconfiguration" }, { status: 500 });
    }

    if (!verified) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
    }

    // mark verified (if you store verified flag)
    await prisma.emailOtp.update({
      where: { id: otpRow.id },
      data: { verified: true },
    });

    // return success (you can also create a session or issue token here)
    return NextResponse.json({ ok: true, message: "Verified" });
  } catch (err) {
    console.error("verify-otp error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
