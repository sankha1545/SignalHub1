// app/api/auth/phone/verify/route.ts
import { NextResponse } from "next/server";
import { verifyPhoneOtp } from "@/lib/otp";
import { signTemp, verifyTemp, signSession } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/auth/phone/verify
 * Body: { phone, code, tempToken?, context? }
 *
 * - Verifies OTP for phone.
 * - Marks phoneVerified = true for existing user.
 * - If both emailVerified && phoneVerified -> set isActive = true and issue persistent session.
 * - Otherwise returns a short-lived tempToken (merged with incoming tempToken payload if present).
 */

function normalizePhone(input: any): string | null {
  if (!input) return null;
  const s = String(input).trim();
  if (s.startsWith("+")) {
    const clean = "+" + s.slice(1).replace(/\D/g, "");
    return clean.length > 4 ? clean : null;
  }
  const digits = s.replace(/\D/g, "");
  if (!digits) return null;
  return digits.length >= 7 ? `+${digits}` : null;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as Record<string, any>;
    const { phone: rawPhone, code, tempToken, context } = body;

    // Basic validation
    if (!rawPhone || !code) {
      return NextResponse.json({ ok: false, error: "missing_phone_or_code" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);
    if (!phone) {
      return NextResponse.json({ ok: false, error: "invalid_phone_format" }, { status: 400 });
    }

    // Validate code shape (4-6 digits)
    if (!/^\d{4,6}$/.test(String(code))) {
      return NextResponse.json({ ok: false, error: "invalid_code_format" }, { status: 400 });
    }

    // Verify OTP via lib/otp
    const v = await verifyPhoneOtp(phone, String(code));
    if (!v || v.ok === false) {
      return NextResponse.json(
        { ok: false, error: "invalid_or_expired_otp", reason: v?.reason ?? "invalid" },
        { status: 400 }
      );
    }

    // Default payload for the returned temp token / merged token
    let payload: Record<string, any> = { phone, phoneVerified: true };

    // Merge incoming tempToken payload if present and valid
    if (tempToken) {
      try {
        const old = await verifyTemp(tempToken);
        if (old && typeof old === "object") {
          payload = { ...old, ...payload };
        }
      } catch (e) {
        console.warn("[phone/verify] incoming tempToken invalid or expired — ignoring");
      }
    }

    // Optionally add context
    if (context) payload._context = context;

    // Try to update user record: set phoneVerified = true (idempotent)
    let user = null;
    try {
      const existing = await prisma.user.findUnique({ where: { phone } });
      if (existing) {
        if (!existing.phoneVerified) {
          user = await prisma.user.update({
            where: { id: existing.id },
            data: { phoneVerified: true },
            select: { id: true, email: true, phone: true, phoneVerified: true, emailVerified: true, isActive: true, role: true, organizationId: true },
          });
          console.log(`[phone/verify] phoneVerified set for user ${existing.id}`);
        } else {
          // already verified - get latest row
          user = await prisma.user.findUnique({
            where: { id: existing.id },
            select: { id: true, email: true, phone: true, phoneVerified: true, emailVerified: true, isActive: true, role: true, organizationId: true },
          });
        }
      }
    } catch (dbErr) {
      console.warn("[phone/verify] DB check/update error (non-fatal):", (dbErr as Error).message || dbErr);
    }

    // If we found a user and their email was already verified, activate account now.
    if (user) {
      const emailVerified = Boolean(user.emailVerified);
      const phoneVerified = true; // we just set it
      if (emailVerified && !user.isActive) {
        // Activate the account
        const updated = await prisma.user.update({
          where: { id: user.id },
          data: { isActive: true },
          select: { id: true, role: true, organizationId: true },
        });

        // Sign a persistent session token for activated user
        const sessionToken = signSession(
          { id: updated.id, role: updated.role, organizationId: updated.organizationId },
          "7d"
        );

        // Return activation + sessionToken (client may store token or you can set cookie)
        return NextResponse.json({ ok: true, activated: true, sessionToken });
      }

      // user exists but not activated yet (email still pending)
      const newTemp = signTemp(payload, "15m");
      return NextResponse.json({
        ok: true,
        activated: Boolean(user.isActive),
        phoneVerified: true,
        emailVerified: Boolean(user.emailVerified),
        tempToken: newTemp,
      });
    }

    // No existing user with this phone: return temp token so caller can continue signup flow
    const newTemp = signTemp(payload, "15m");
    return NextResponse.json({ ok: true, activated: false, tempToken: newTemp });
  } catch (err: any) {
    console.error("[/api/auth/phone/verify] unexpected error:", err?.message || err);
    return NextResponse.json({ ok: false, error: "internal_server_error" }, { status: 500 });
  }
}
