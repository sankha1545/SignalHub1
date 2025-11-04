// src/app/api/auth/clear-sessions/route.ts
import { NextResponse } from "next/server";

/**
 * Temporary utility to clear auth cookies from the browser.
 * Visit /api/auth/clear-sessions to remove old 'token' and 'session' cookies.
 */
export async function GET(request: Request) {
  // Build an absolute URL for redirect using incoming request as base
  const base = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "localhost:3000";
  const proto = request.headers.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  const origin = `${proto}://${base}`;
  const redirectTo = new URL("/", origin).toString();

  const res = NextResponse.redirect(redirectTo);

  const isProd = process.env.NODE_ENV === "production";
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd;

  // Clear legacy "token" cookie (if present)
  try {
    res.cookies.set("token", "", {
      path: "/",
      maxAge: 0,
      sameSite: sameSite as any,
      secure,
    });
  } catch {
    const parts = [
      `token=`,
      "Path=/",
      "Max-Age=0",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.append("Set-Cookie", parts.join("; "));
  }

  // Clear canonical "session" cookie
  try {
    res.cookies.set("session", "", {
      path: "/",
      maxAge: 0,
      sameSite: sameSite as any,
      secure,
    });
  } catch {
    const parts = [
      `session=`,
      "Path=/",
      "Max-Age=0",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.append("Set-Cookie", parts.join("; "));
  }

  return res;
}
