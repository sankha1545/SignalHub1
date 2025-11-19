// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signSession } from "@/lib/jwt";



type LoginBody = { email?: string; phone?: string; password?: string };

const ALT_SESSION_COOKIE_NAMES = ["admin_session", "next-auth.session-token", "session_preview"];

function getClientIp(req: Request) {
  try {
    const xf = req.headers.get("x-forwarded-for");
    if (xf) return xf.split(",")[0].trim();
    const cf = req.headers.get("cf-connecting-ip");
    if (cf) return cf;
    return undefined;
  } catch {
    return undefined;
  }
}

export async function POST(req: Request) {
  try {
    const start = Date.now();
    const body: LoginBody = (await req.json()) ?? {};
    let { email, phone, password } = body;

    // Basic validation
    if ((!email && !phone) || !password) {
      console.warn("[login] missing credentials");
      return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
    }

    // Normalize inputs
    if (email) email = String(email).trim().toLowerCase();
    if (phone) phone = String(phone).trim();
    password = String(password);

    const ip = getClientIp(req);
    console.info("[login] attempt", { identifier: email ?? phone, ip });

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
        },
      });
    }

    if (!user) {
      console.warn("[login] user not found", { identifier: email ?? phone });
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    if (!user.passwordHash) {
      console.warn("[login] user missing passwordHash", { userId: user.id });
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // ----- Verify password -----
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      console.warn("[login] bad password", { userId: user.id });
      // OPTIONAL: increment failed login attempts here
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // ----- Account activation - role-based rules -----
    // If explicit isActive present on record, respect it (true => active, false => inactive).
    const hasIsActive = Object.prototype.hasOwnProperty.call(user, "isActive");
    const explicitIsActive = hasIsActive ? Boolean(user.isActive) : null;

    // Determine role (normalize lowercase)
    const roleStr = (user.role ?? "").toString().trim().toLowerCase();

    // Admins require both email && phone verified unless explicitIsActive === true
    const adminRequiresPhone = roleStr === "admin";

   
    const fallbackIsActive = adminRequiresPhone
      ? Boolean(user.emailVerified) && Boolean(user.phoneVerified)
      : Boolean(user.emailVerified);

    const isActive = explicitIsActive !== null ? explicitIsActive : fallbackIsActive;

    if (!isActive) {
      // Non-production can surface details — in prod we keep generic messaging
      const showDetails = process.env.NODE_ENV !== "production";
      const details = showDetails
        ? {
            required: adminRequiresPhone ? "email+phone" : "email",
            emailVerified: Boolean(user.emailVerified),
            phoneVerified: Boolean(user.phoneVerified),
            role: user.role ?? null,
          }
        : undefined;

      console.info("[login] inactive account", { userId: user.id, ...(details ?? {}) });
      return NextResponse.json(
        {
          error: "account_not_active",
          message: adminRequiresPhone ? "account_not_active: require_email_and_phone_verification" : "account_not_active: require_email_verification",
          details,
        },
        { status: 403 }
      );
    }

    // ----- Create session token -----
    const payload = {
      id: user.id,
      role: user.role ?? null,
      organizationId: user.organizationId ?? null,
    };

    const sessionToken = signSession(payload, "7d");
    if (!sessionToken) {
      console.error("[login] signSession returned empty token", { userId: user.id });
      return NextResponse.json({ error: "internal_server_error" }, { status: 500 });
    }

    // Optional: record server-side session for revocation (commented)
    // await prisma.session.create({ data: { userId: user.id, tokenHash: hash(sessionToken), expiresAt: addDays(new Date(), 7) } });

    // ----- Build response + cookies -----
    const maxAge = 7 * 24 * 60 * 60; // seconds
    const isProd = process.env.NODE_ENV === "production";

    const res = NextResponse.json(
      {
        ok: true,
        user: { id: user.id, email: user.email ?? null, phone: user.phone ?? null, role: user.role ?? null },
      },
      { status: 200 }
    );

    // Defensive: clear other common session cookie names (helps with stale cookies)
    for (const altName of ALT_SESSION_COOKIE_NAMES) {
      try {
        res.cookies.delete(altName, { path: "/" });
      } catch (err) {
        // ignore deletion errors
      }
    }

    res.cookies.set({
      name: "session",
      value: sessionToken,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge,
      secure: isProd,
    });

    console.info("[login] success", { userId: user.id, role: user.role, orgId: user.organizationId, tookMs: Date.now() - start });
    return res;
  } catch (err: any) {
    console.error("[Login Error]", err);
    return NextResponse.json(
      { error: process.env.NODE_ENV === "production" ? "internal_server_error" : err?.message ?? "internal_server_error" },
      { status: 500 }
    );
  }
}
