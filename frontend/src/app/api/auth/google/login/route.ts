// src/app/api/auth/google/login/route.ts
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const OAUTH_REDIRECT = BASE_URL + "/api/auth/google/callback";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const COOKIE_NAME = "google_oauth_nonce";
const COOKIE_MAX_AGE = 60 * 5; // seconds (5 minutes)

/** Generate a random nonce (hex). */
function genNonce(len = 16) {
  return randomBytes(len).toString("hex");
}

/**
 * Helper to set a short-lived httpOnly cookie with environment-aware SameSite/Secure.
 * - In production: SameSite=None & Secure=true (required for cross-site).
 * - In development (localhost): SameSite=Lax & Secure=false (works on http).
 */
function setTempCookie(res: NextResponse, name: string, value: string, maxAge = COOKIE_MAX_AGE) {
  const isProd = process.env.NODE_ENV === "production";
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd; // Secure required when SameSite=None

  try {
    res.cookies.set(name, encodeURIComponent(value), {
      httpOnly: true,
      sameSite: sameSite as "lax" | "none" | "strict",
      secure,
      path: "/",
      maxAge,
    });
  } catch {
    // fallback for runtimes that don't accept object signature
    const cookieParts = [
      `${name}=${encodeURIComponent(value)}`,
      "Path=/",
      `Max-Age=${maxAge}`,
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", cookieParts.join("; "));
  }
}

/**
 * GET handler: initiates Google OAuth by redirecting to Google's auth endpoint.
 * Query params:
 *  - mode: "login" (default) or "signup" -- indicates caller intent
 *  - returnTo: optional path to return to after login (kept in state)
 */
export async function GET(req: Request) {
  try {
    if (!GOOGLE_CLIENT_ID) {
      console.error("[auth/google/login] missing GOOGLE_CLIENT_ID env var");
      return NextResponse.json({ ok: false, error: "Server misconfiguration: missing GOOGLE_CLIENT_ID" }, { status: 500 });
    }

    const url = new URL(req.url);
    const modeParam = (url.searchParams.get("mode") ?? "login").toString().toLowerCase();
    const mode = modeParam === "signup" ? "signup" : "login";
    const returnTo = url.searchParams.get("returnTo") ?? "";

    // nonce used to defend against CSRF / replay on callback
    const nonce = genNonce(16);

    // Build state as a URL querystring (mode & nonce & optional returnTo)
    const rawState = new URLSearchParams();
    rawState.set("mode", mode);
    rawState.set("nonce", nonce);
    if (returnTo) rawState.set("returnTo", returnTo);

    const state = rawState.toString(); // e.g. "mode=login&nonce=...&returnTo=%2Fapp"

    // Create OAuth URL (authorization code flow)
    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: OAUTH_REDIRECT,
      response_type: "code",
      scope: "openid email profile",
      include_granted_scopes: "true",
      access_type: "offline",
      prompt: "select_account",
      state: state,
    });

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

    // Prepare response and set nonce cookie
    const res = NextResponse.redirect(oauthUrl);
    setTempCookie(res, COOKIE_NAME, nonce, COOKIE_MAX_AGE);

    return res;
  } catch (err) {
    console.error("[auth/google/login] error initiating oauth:", err);
    return NextResponse.json({ ok: false, error: "Failed to start Google OAuth." }, { status: 500 });
  }
}
