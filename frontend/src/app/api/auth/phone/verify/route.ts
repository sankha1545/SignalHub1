// app/api/auth/phone/verify/route.ts
import { NextResponse } from "next/server";
import { verifyPhoneOtp } from "@/lib/otp";
import { signTemp, verifyTemp } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/auth/phone/verify
 * Body: { phone, code, tempToken?, context? }
 *
 * - Verifies OTP for phone.
 * - Marks OTP used (handled by verifyPhoneOtp).
 * - If a user exists with that phone, set phoneVerified = true.
 * - Merge any payload from incoming tempToken (if valid).
 * - Return a new short-lived tempToken containing phoneVerified: true + merged payload.
 */

function normalizePhone(input: any): string | null {
  if (!input) return null;
  const s = String(input).trim();
  // Accept numbers that already start with + or plain digits (we'll try to normalise)
  if (s.startsWith("+")) {
    const clean = "+" + s.slice(1).replace(/\D/g, "");
    return clean.length > 4 ? clean : null;
  }
  const digits = s.replace(/\D/g, "");
  if (!digits) return null;
  // If digits look like country + local (very rough), prefer + prefix absent -> leave as-is and let caller finalise
  // But we will return in E.164-like format only if caller included a calling code; for now, prefix with + if length > 6
  return digits.length >= 7 ? `+${digits}` : null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { phone: rawPhone, code, tempToken, context } = body as {
      phone?: string;
      code?: string;
      tempToken?: string;
      context?: string;
    };

    // Basic validation
    if (!rawPhone || !code) {
      return NextResponse.json({ ok: false, error: "missing_phone_or_code" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);
    if (!phone) {
      return NextResponse.json({ ok: false, error: "invalid_phone_format" }, { status: 400 });
    }

    // Validate code shape (6 digits)
    if (!/^\d{4,6}$/.test(String(code))) {
      return NextResponse.json({ ok: false, error: "invalid_code_format" }, { status: 400 });
    }

    // Verify OTP via lib/otp
    const v = await verifyPhoneOtp(phone, String(code));
    if (!v || v.ok === false) {
      // propagate reason if available
      return NextResponse.json({ ok: false, error: "invalid_or_expired_otp", reason: v?.reason ?? "invalid" }, { status: 400 });
    }

    // If there's an existing user with this phone — mark phoneVerified true
    try {
      const existing = await prisma.user.findUnique({ where: { phone } });
      if (existing && !existing.phoneVerified) {
        await prisma.user.update({
          where: { id: existing.id },
          data: { phoneVerified: true },
        });
        console.log(`[phone/verify] phoneVerified set for user ${existing.id}`);
      }
    } catch (dbErr) {
      // log but don't fail the flow — verification succeeded; we still return a temp token
      console.warn("[phone/verify] DB update error (non-fatal):", (dbErr as Error).message || dbErr);
    }

    // Build payload for new temp token
    let payload: Record<string, any> = { phone, phoneVerified: true };

    if (tempToken) {
      try {
        // prefer a library helper verifyTemp if available
        if (typeof verifyTemp === "function") {
          const old = await verifyTemp(tempToken);
          if (old && typeof old === "object") payload = { ...old, ...payload };
        } else {
          // fallback: attempt jwt.verify (rare path)
          const jwt = (await import("jsonwebtoken")).verify as any;
          const SECRET = process.env.JWT_SECRET!;
          const oldp = jwt(tempToken, SECRET) as Record<string, any>;
          if (oldp && typeof oldp === "object") payload = { ...oldp, ...payload };
        }
      } catch (e) {
        // ignore invalid temp token — continue with phone-only payload
        console.warn("[phone/verify] incoming tempToken invalid or expired — ignoring");
      }
    }

    // Optionally add context to payload (helps finalize route)
    if (context) payload._context = context;

    // Issue a new short-lived temp token (15 minutes)
    const newTemp = signTemp(payload, "15m");

    return NextResponse.json({ ok: true, tempToken: newTemp });
  } catch (err: any) {
    console.error("[/api/auth/phone/verify] unexpected error:", err?.message || err);
    return NextResponse.json({ ok: false, error: "internal_server_error" }, { status: 500 });
  }
}
