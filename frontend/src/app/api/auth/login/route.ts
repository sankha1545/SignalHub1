// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signToken } from "@/lib/auth";

/**
 * POST /api/auth/login
 *
 * Accepts: { email, password }
 * - Blocks credential login for OAuth-only accounts.
 * - Parses legacy provider strings (comma separated).
 * - Sets an httpOnly session cookie named "session".
 */

const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

function jsonError(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

/** Parse provider field into normalized array (handles comma-lists, nulls) */
function parseProviders(providerField: string | null | undefined): string[] {
  if (!providerField) return [];
  return providerField
    .toString()
    .split(",")
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
}

/** Build fallback Set-Cookie header value (used if res.cookies.set fails) */
function buildCookieHeader(name: string, value: string, maxAge = SESSION_MAX_AGE) {
  const secure = process.env.NODE_ENV === "production";
  return [
    `${name}=${value}`,
    "Path=/",
    `Max-Age=${maxAge}`,
    "HttpOnly",
    "SameSite=Lax",
    secure ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({} as any))) as { email?: string; password?: string };
    const rawEmail = (body?.email ?? "").toString();
    const password = (body?.password ?? "").toString();

    const email = rawEmail.trim().toLowerCase();
    if (!email || !password) {
      return jsonError("Email and password are required.", 400);
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        passwordHash: true,
        role: true,
        provider: true,
      },
    });

    // Do not reveal whether email exists
    if (!user) return jsonError("Invalid email or password.", 401);

    // Robust provider parsing
    const providers = parseProviders(user.provider);
    const hasCredentials = providers.includes("credentials") || providers.includes("email") || !!user.passwordHash;
    const oauthProviders = providers.filter((p) => p !== "credentials" && p !== "email");

    // If user does NOT have credentials, but has external provider(s) — block credential login
    if (!hasCredentials) {
      const providerLabel = oauthProviders.length ? oauthProviders.join(", ") : "an external provider";
      return NextResponse.json(
        {
          ok: false,
          error: `This account was created using ${providerLabel}. Please sign in with ${providerLabel} or link credentials from account settings.`,
        },
        { status: 403 }
      );
    }

    if (!user.passwordHash) {
      // Defensive: if provider indicates credentials but no password is stored
      return jsonError("Password not set for this account. Please reset your password.", 401);
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) return jsonError("Invalid email or password.", 401);

    // Create session token (7d)
    const token = signToken({ id: user.id, email: user.email, role: user.role }, "7d");

    // Fire-and-forget activity log
    (async () => {
      try {
        await prisma.activityLog.create({
          data: {
            userId: user.id,
            type: "LOGIN",
            meta: { provider: "credentials", ts: new Date().toISOString() },
          },
        });
      } catch (e) {
        console.error("⚠️ Failed to record login activity:", e);
      }
    })();

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role, provider: providers.length ? providers.join(",") : "credentials" },
    });

    // Prefer NextResponse cookies API; fall back to Set-Cookie header if necessary
    try {
      res.cookies.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: SESSION_MAX_AGE,
      } as any);
    } catch {
      res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
    }

    if (process.env.NODE_ENV !== "production") console.debug("[auth/login] session cookie set for userId:", user.id);

    return res;
  } catch (err) {
    console.error("❌ Login error:", err);
    return jsonError("Internal server error.", 500);
  }
}
