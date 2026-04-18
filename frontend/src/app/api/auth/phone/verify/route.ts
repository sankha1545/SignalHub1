// app/api/auth/phone/verify/route.ts
import { NextResponse } from "next/server";
import { verifyPhoneOtp } from "@/lib/otp";
import { signTemp, verifyTemp, signSession } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

/** Normalize to E.164-like format */
function normalizePhone(input: any): string | null {
  if (!input) return null;
  const s = String(input).trim();
  const digits = s.replace(/\D/g, "");
  if (digits.length < 7) return null;
  return s.startsWith("+") ? `+${digits}` : `+${digits}`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as Record<string, any>;
    const { phone: rawPhone, code, tempToken, context } = body;

    if (!rawPhone || !code) {
      return NextResponse.json({ ok: false, error: "missing_phone_or_code" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);
    if (!phone) {
      return NextResponse.json({ ok: false, error: "invalid_phone_format" }, { status: 400 });
    }

    if (!/^\d{4,6}$/.test(String(code))) {
      return NextResponse.json({ ok: false, error: "invalid_code_format" }, { status: 400 });
    }

    // 🔑 OTP verify
    const v = await verifyPhoneOtp(phone, String(code));
    if (!v?.ok) {
      return NextResponse.json(
        { ok: false, error: "invalid_or_expired_otp", reason: v?.reason || "invalid" },
        { status: 400 }
      );
    }

    let payload: Record<string, any> = { phone, phoneVerified: true };

    if (tempToken) {
      try {
        const old = await verifyTemp(tempToken);
        if (old && typeof old === "object") payload = { ...old, ...payload };
      } catch {}
    }

    if (context) payload._context = context;

    // 🔄 Update user if exists
    let user = null;
    const existing = await prisma.user.findUnique({ where: { phone } });

    if (existing) {
      user = existing.phoneVerified
        ? existing
        : await prisma.user.update({
            where: { id: existing.id },
            data: { phoneVerified: true },
            select: {
              id: true,
              email: true,
              phone: true,
              phoneVerified: true,
              emailVerified: true,
              isActive: true,
              role: true,
              organizationId: true,
            },
          });
    }

    // 🔓 Activate if email already verified
    if (user && user.emailVerified && !user.isActive) {
      const updated = await prisma.user.update({
        where: { id: user.id },
        data: { isActive: true },
        select: { id: true, role: true, organizationId: true },
      });

      const sessionToken = signSession(
        { id: updated.id, role: updated.role, organizationId: updated.organizationId },
        "7d"
      );

      return NextResponse.json({ ok: true, activated: true, sessionToken });
    }

    // ⏳ Still onboarding → temp token
    const newTemp = signTemp(payload, "15m");
    return NextResponse.json({
      ok: true,
      activated: Boolean(user?.isActive),
      phoneVerified: true,
      emailVerified: Boolean(user?.emailVerified),
      tempToken: newTemp,
    });
  } catch (err: any) {
    console.error("[/api/auth/phone/verify] fatal:", err?.message || err);
    return NextResponse.json({ ok: false, error: "internal_server_error" }, { status: 500 });
  }
}
