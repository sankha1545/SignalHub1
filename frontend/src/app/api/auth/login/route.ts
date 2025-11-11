// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signSession } from "@/lib/jwt";

/**
 * POST /api/auth/login
 *
 * Expectations:
 * - Body: { email?: string, phone?: string, password: string }
 * - Creates an HttpOnly cookie named `session` with a JWT on success.
 * - Returns minimal user info on success: { ok: true, user: { id, email, phone, role } }
 *
 * Notes:
 * - Ensure your client sends `credentials: "same-origin"` when calling this route,
 *   otherwise the browser will ignore the Set-Cookie header.
 * - Adapt the optional account lockout / audit logging bits to your schema if you want them.
 */

type LoginBody = { email?: string; phone?: string; password?: string };

export async function POST(req: Request) {
  try {
    const body: LoginBody = (await req.json()) ?? {};
    let { email, phone, password } = body;

    // Basic validation
    if ((!email && !phone) || !password) {
      return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
    }

    // Normalize inputs
    if (email) email = String(email).trim().toLowerCase();
    if (phone) phone = String(phone).trim();
    password = String(password);

    // ----- Find user -----
    let user: any | null = null;
    if (email) {
      user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          phone: true,
          passwordHash: true,
          role: true,
          organizationId: true,
          phoneVerified: true,
          emailVerified: true,
          isActive: true,
          // OPTIONAL: fields for lockout/audit (uncomment if present in schema)
          // failedLoginAttempts: true,
          // lockedUntil: true,
        },
      });
    } else {
      user = await prisma.user.findFirst({
        where: { phone },
        select: {
          id: true,
          email: true,
          phone: true,
          passwordHash: true,
          role: true,
          organizationId: true,
          phoneVerified: true,
          emailVerified: true,
          isActive: true,
          // failedLoginAttempts: true,
          // lockedUntil: true,
        },
      });
    }

    // If user not found or no passwordHash -> generic invalid_credentials
    if (!user || !user.passwordHash) {
      // OPTIONAL: record failed login attempt in DB for audit/lockout
      // await prisma.authLog.create({ data: { type: 'login_failed', identifier: email || phone, reason: 'not_found' } });

      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // OPTIONAL: account lockout check (requires fields in your schema)
    // if (user.lockedUntil && new Date(user.lockedUntil) > new Date()) {
    //   return NextResponse.json({ error: "account_locked", message: "Too many failed attempts. Try later." }, { status: 423 });
    // }

    // ----- Verify password -----
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      // OPTIONAL: increment failedLoginAttempts and set lockout if threshold reached
      // await prisma.user.update({ where: { id: user.id }, data: { failedLoginAttempts: { increment: 1 } } });

      // OPTIONAL audit log
      // await prisma.authLog.create({ data: { userId: user.id, type: 'login_failed', metadata: { reason: 'bad_password' } } });

      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // ----- Account activation check -----
    const hasIsActive = Object.prototype.hasOwnProperty.call(user, "isActive");
    const isActive = hasIsActive ? Boolean(user.isActive) : (Boolean(user.phoneVerified) && Boolean(user.emailVerified));

    if (!isActive) {
      const showDetails = process.env.NODE_ENV !== "production";
      const details = showDetails ? { phoneVerified: Boolean(user.phoneVerified), emailVerified: Boolean(user.emailVerified) } : undefined;

      // OPTIONAL: log this event
      // await prisma.authLog.create({ data: { userId: user.id, type: 'login_attempt_inactive' } });

      return NextResponse.json(
        {
          error: "account_not_active",
          message: "account_not_active: verify_email_and_phone",
          details,
        },
        { status: 403 }
      );
    }

    // ----- Create session token -----
    // Keep payload small: id, role, organizationId
    const payload = {
      id: user.id,
      role: user.role ?? null,
      organizationId: user.organizationId ?? null,
    };

    // signSession should return a compact JWT string
    const sessionToken = signSession(payload, "7d");

    // Optional: create a server-side session record tying token -> user id (safer for revoke / logout)
    // const sessionRecord = await prisma.session.create({ data: { userId: user.id, tokenHash: hash(sessionToken), expiresAt: addDays(new Date(), 7) } });

    // ----- Set cookie using NextResponse API (safer than manual header) -----
    const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
    const isProd = process.env.NODE_ENV === "production";

    const res = NextResponse.json(
      {
        ok: true,
        user: { id: user.id, email: user.email ?? null, phone: user.phone ?? null, role: user.role ?? null },
      },
      { status: 200 }
    );

    res.cookies.set({
      name: "session",
      value: sessionToken,
      httpOnly: true,
      sameSite: "lax", // or 'strict' depending on your needs
      path: "/",
      maxAge,
      secure: isProd, // secure only in production (HTTPS)
    });

    // OPTIONAL: set a secondary non-http-only cookie for client UI (CSRF or avatar small data),
    // but avoid storing sensitive tokens in non-HttpOnly cookies.
    // res.cookies.set({ name: 'session_preview', value: user.email ?? '', maxAge, path: '/', secure: isProd });

    // OPTIONAL: audit log of successful login
    // await prisma.authLog.create({ data: { userId: user.id, type: 'login_success', metadata: { ip: 'TODO: capture ip if available' } } });

    return res;
  } catch (err: any) {
    console.error("[Login Error]", err);
    // Do not leak internal errors in production
    return NextResponse.json({ error: process.env.NODE_ENV === "production" ? "internal_server_error" : err?.message ?? "internal_server_error" }, { status: 500 });
  }
}
