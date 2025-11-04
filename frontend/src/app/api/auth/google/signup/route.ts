// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";

const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days
const DEFAULT_ROLE = "VIEWER";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function parseProviders(providerField: string | null | undefined): string[] {
  if (!providerField) return [];
  return providerField
    .toString()
    .split(",")
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
}

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
    const body = (await req.json().catch(() => ({}))) as {
      email?: string;
      name?: string;
      password?: string;
      provider?: "credentials" | "google" | string;
      role?: string;
    };

    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim();
    const password = (body.password || "").toString();
    const provider = (body.provider || "credentials").toLowerCase();

    if (!email || !name) {
      return jsonError("Name and email are required.", 400);
    }

    if (!["credentials", "google"].includes(provider)) {
      return jsonError("Unsupported provider. Use 'credentials' or 'google'.", 400);
    }

    // 🔍 Check for existing user first
    const existing = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        provider: true,
        email: true,
        passwordHash: true,
      },
    });

    if (existing) {
      const existingProviders = parseProviders(existing.provider);
      const isSameProvider = existingProviders.includes(provider);
      const hasCredentials = existingProviders.includes("credentials") || !!existing.passwordHash;

      if (isSameProvider) {
        // User already registered with this provider
        return jsonError(`User already exists with this ${provider} account. Please sign in.`, 409);
      }

      // ❗ If signing up via Google but email exists with credentials — block auto-link
      if (provider === "google" && hasCredentials) {
        return jsonError(
          "An account with this email already exists. Please log in with email/password, then link your Google account from settings.",
          409
        );
      }

      // ❗ If signing up with credentials but user was created via Google — block takeover
      if (provider === "credentials" && existingProviders.includes("google")) {
        return jsonError(
          "This email is already used by a Google account. Please sign in with Google instead.",
          409
        );
      }
    }

    // ------------------ CREDENTIALS SIGNUP ------------------
    if (provider === "credentials") {
      if (!password) return jsonError("Password is required for credentials signup.", 400);

      const otp = await prisma.emailOtp.findFirst({
        where: { email },
        orderBy: { createdAt: "desc" },
      });

      if (!otp || !otp.verified) return jsonError("Email not verified with OTP.", 400);

      const passwordHash = await hashPassword(password);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash,
          role: DEFAULT_ROLE,
          emailVerified: true,
          provider: "local",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      await prisma.emailOtp.deleteMany({ where: { email } });

      const token = signToken({ id: user.id, email: user.email, role: user.role }, "7d");

      const res = NextResponse.json({ ok: true, user });

      try {
        res.cookies.set(SESSION_COOKIE_NAME, token, {
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: SESSION_MAX_AGE,
        } as any);
      } catch {
        res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token));
      }

      return res;
    }

    // ------------------ GOOGLE SIGNUP ------------------
    if (provider === "google") {
      // (Assumes upstream Google verification already done)
      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash: null,
          role: DEFAULT_ROLE,
          emailVerified: true,
          provider: "google",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      const token = signToken({ id: user.id, email: user.email, role: user.role }, "7d");
      const res = NextResponse.json({ ok: true, user });

      try {
        res.cookies.set(SESSION_COOKIE_NAME, token, {
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: SESSION_MAX_AGE,
        } as any);
      } catch {
        res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token));
      }

      return res;
    }

    return jsonError("Unsupported provider type.", 400);
  } catch (err) {
    console.error("❌ signup error:", err);
    return jsonError("Internal server error.", 500);
  }
}
