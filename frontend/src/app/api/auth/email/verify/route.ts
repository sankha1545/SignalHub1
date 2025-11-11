// app/api/auth/email/verify/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyEmailOtp } from "@/lib/otp";
import { signTemp, signSession } from "@/lib/jwt";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[Email Verify Request]", body);

    const { email, code, flow } = body ?? {};
    if (!email || !code) {
      console.warn("[Email Verify Missing Fields]", { email, code, flow });
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    // Validate OTP using your helper
    const ok = await verifyEmailOtp(email, code);
    if (!ok) {
      console.warn("[Email Verify Invalid Code]", { email, code });
      return NextResponse.json({ error: "invalid_code" }, { status: 400 });
    }

    // Try to find the user first (avoid update() when user not present)
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, phone: true, phoneVerified: true, emailVerified: true, isActive: true, role: true, organizationId: true },
    });

    // If user does not exist, return a tempToken so the client can continue signup flow
    if (!user) {
      const tempToken = signTemp({ email, emailVerified: true, flow }, "15m");
      return NextResponse.json({ ok: true, activated: false, tempToken, emailVerified: true });
    }

    // User exists: set emailVerified = true idempotently
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true },
      select: { id: true, email: true, phone: true, phoneVerified: true, emailVerified: true, isActive: true, role: true, organizationId: true },
    });

    // If phoneVerified already true, activate account (if not already active)
    if (updatedUser.phoneVerified && !updatedUser.isActive) {
      const activated = await prisma.user.update({
        where: { id: updatedUser.id },
        data: { isActive: true },
        select: { id: true, role: true, organizationId: true },
      });

      const sessionToken = signSession(
        { id: activated.id, role: activated.role, organizationId: activated.organizationId },
        "7d"
      );

      // Optionally set cookie here instead of returning token in body. Using body token for now.
      return NextResponse.json({ ok: true, activated: true, sessionToken });
    }

    // Not activated yet (phone still pending). Return a tempToken that encodes emailVerified
    const tempToken = signTemp({ email, emailVerified: true, flow }, "15m");
    return NextResponse.json({
      ok: true,
      activated: Boolean(updatedUser.isActive),
      emailVerified: true,
      phoneVerified: Boolean(updatedUser.phoneVerified),
      tempToken,
    });
  } catch (err: any) {
    console.error("[Email Verify Error]", err);
    return NextResponse.json({ error: err?.message || "internal_server_error" }, { status: 500 });
  }
}
