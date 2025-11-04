// src/app/api/auth/google/callback/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

/**
 * Secure Google OAuth callback handler.
 *
 * Key guarantees:
 *  - Validates OAuth `state` nonce against httpOnly cookie `google_oauth_nonce`.
 *  - Clears nonce cookie on all returns (success or error).
 *  - Respects `mode` in state: "login" or "signup".
 *  - Will NOT sign in or link a Google account to an existing email/password account.
 *  - Will only auto-create accounts when mode === 'signup' OR AUTO_CREATE_OAUTH_USERS=true.
 */

const REDIRECT_AFTER_LOGIN = process.env.NEXT_PUBLIC_AFTER_LOGIN || "/welcome";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const OAUTH_REDIRECT = BASE_URL + "/api/auth/google/callback";
const COOKIE_NAME = "session";
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // seconds
const NONCE_COOKIE = "google_oauth_nonce";
const TEMP_GOOGLE_COOKIE = "google_oauth_temp";
const TEMP_GOOGLE_MAX_AGE = 60 * 5; // 5 minutes

const AUTO_CREATE_OAUTH_USERS = (process.env.AUTO_CREATE_OAUTH_USERS ?? "false").toLowerCase() === "true";

/** Helper: redirect with error code/message appended as query params to a local path */
function redirectWithError(path: string, code: string, message?: string) {
  const u = new URL(path, BASE_URL);
  u.searchParams.set("error", code);
  if (message) u.searchParams.set("message", message);
  return NextResponse.redirect(u.toString());
}

/* ---------------- ENV-AWARE COOKIE HELPERS ---------------- */

const isProd = process.env.NODE_ENV === "production";

/** Clear nonce cookie in response (works with res.cookies or header fallback). */
function clearNonceCookie(res: NextResponse) {
  try {
    res.cookies.set(NONCE_COOKIE, "", { httpOnly: true, sameSite: isProd ? "none" : "lax", secure: isProd, path: "/", maxAge: 0 });
  } catch {
    const parts = [
      `${NONCE_COOKIE}=`,
      "Path=/",
      "Max-Age=0",
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      isProd ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", parts.join("; "));
  }
}

/** Set session cookie with environment-aware SameSite/Secure and a debug log. */
function setSessionCookie(res: NextResponse, token: string) {
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd;
  const value = encodeURIComponent(token);

  try {
    res.cookies.set(COOKIE_NAME, value, {
      httpOnly: true,
      secure,
      sameSite: sameSite as "lax" | "none" | "strict",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });
    console.debug(`[auth/google/callback] set session cookie via res.cookies: ${COOKIE_NAME} (sameSite=${sameSite}, secure=${secure})`);
  } catch {
    const cookieParts = [
      `${COOKIE_NAME}=${value}`,
      "Path=/",
      `Max-Age=${COOKIE_MAX_AGE}`,
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    const header = cookieParts.join("; ");
    res.headers.set("Set-Cookie", header);
    console.debug(`[auth/google/callback] set session cookie via header: ${header}`);
  }
}

/**
 * Read cookie from Request robustly.
 * Prefer request.headers.get('cookie') fallback. On Next runtimes there may be a request.cookies API,
 * but the safe portable approach is to inspect headers.
 */
function readCookieValue(request: Request, name: string): string | null {
  try {
    const cookieHeader = request.headers.get("cookie") ?? "";
    const match = cookieHeader.match(new RegExp(`${name}=([^;]+)`));
    return match ? decodeURIComponent(match[1]) : null;
  } catch (e) {
    console.error("[auth/google/callback] readCookieValue error:", e);
    return null;
  }
}

/* ---------------- END helper replacements ---------------- */

/** Parse mode and nonce from state string (state expected as querystring: mode=signup&nonce=abc) */
function parseState(rawState: string | null) {
  const result = { mode: "login" as "login" | "signup", nonce: null as string | null, returnTo: null as string | null };
  if (!rawState) return result;
  try {
    const decoded = decodeURIComponent(rawState);
    const params = new URLSearchParams(decoded);
    const m = params.get("mode");
    if (m === "signup") result.mode = "signup";
    const n = params.get("nonce");
    if (n) result.nonce = n;
    const r = params.get("returnTo");
    if (r) result.returnTo = r;
    return result;
  } catch {
    return result;
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const err = url.searchParams.get("error");
    if (err) {
      console.error("Google OAuth returned error param:", err);
      const res = redirectWithError("/auth/login", "google_oauth_error", String(err));
      clearNonceCookie(res);
      return res;
    }
    if (!code) {
      const res = redirectWithError("/auth/login", "missing_code", "Missing authorization code from Google.");
      clearNonceCookie(res);
      return res;
    }

    // Parse state and nonce and validate against cookie
    const rawState = url.searchParams.get("state");
    const { mode, nonce: stateNonce, returnTo } = parseState(rawState);

    // Read nonce cookie set by the login initiator
    const cookieNonce = readCookieValue(request, NONCE_COOKIE);

    if (!stateNonce || !cookieNonce || stateNonce !== cookieNonce) {
      console.warn("[auth/google/callback] state nonce mismatch", { stateNonce, cookieNonce });
      const res = redirectWithError("/auth/login", "invalid_state", "OAuth state mismatch (possible CSRF).");
      clearNonceCookie(res);
      return res;
    }

    // Exchange code for tokens
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      OAUTH_REDIRECT
    );
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Request basic profile info (email, id, name, picture)
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();

    if (!data || !data.email) {
      console.error("Google profile did not return email:", data);
      const res = redirectWithError("/auth/login", "no_email", "Google did not return an email.");
      clearNonceCookie(res);
      return res;
    }

    const email = String(data.email).trim().toLowerCase();
    const name = data.name ?? null;
    const picture = data.picture ?? null;
    const providerAccountId = data.id ?? undefined;
    if (!providerAccountId) {
      console.error("Google profile missing id:", data);
      const res = redirectWithError("/auth/login", "no_provider_id", "Google profile missing id.");
      clearNonceCookie(res);
      return res;
    }

    // Find existing account by providerAccountId (authoritative for provider link)
    const existingAccount = await prisma.account.findFirst({
      where: { provider: "google", providerAccountId },
    });

    // Find user by email (may be undefined)
    let userByEmail = await prisma.user.findUnique({ where: { email }, include: { profile: true } });

    // If account exists, ensure we use its user
    if (existingAccount) {
      const accountUser = await prisma.user.findUnique({
        where: { id: existingAccount.userId },
        include: { profile: true },
      });
      if (!accountUser) {
        console.error("Account exists for google provider but no user found", {
          providerAccountId,
          accountId: existingAccount.id,
          userId: existingAccount.userId,
        });
        const res = redirectWithError("/auth/login", "server_error", "Inconsistent account state. Contact support.");
        clearNonceCookie(res);
        return res;
      }
      userByEmail = accountUser;
    }

    // If user exists (either by email or via account->user)
    if (userByEmail) {
      // Normalize provider field into tokens
      const providerField = (userByEmail.provider ?? "").toString();
      const currentProviders = providerField
        .split(",")
        .map((p) => p.trim().toLowerCase())
        .filter(Boolean);

      const hasGoogle = currentProviders.includes("google");
      const hasCredentials =
        currentProviders.includes("credentials") ||
        currentProviders.includes("email") ||
        Boolean((userByEmail as any).passwordHash) ||
        Boolean((userByEmail as any).password);

      // Conflict: account linked to different user
      if (existingAccount && existingAccount.userId !== userByEmail.id) {
        console.error("Google account linked to different user", {
          providerAccountId,
          existingAccountUserId: existingAccount.userId,
          currentUserId: userByEmail.id,
        });
        const res = redirectWithError("/auth/login", "account_link_conflict", "This Google account is linked to a different user.");
        clearNonceCookie(res);
        return res;
      }

      // CRITICAL: do NOT allow Google login to succeed if user has credentials but is NOT linked to google
      if (hasCredentials && !hasGoogle) {
        const res = redirectWithError(
          "/auth/login",
          "provider_mismatch",
          "An account exists for this email using an email/password. Sign in with email/password or link Google from account settings."
        );
        clearNonceCookie(res);
        return res;
      }

      // Allowed to sign in: ensure account exists and update tokens
      if (!existingAccount) {
        await prisma.account.create({
          data: {
            provider: "google",
            providerAccountId,
            access_token: tokens.access_token ?? undefined,
            refresh_token: tokens.refresh_token ?? undefined,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : undefined,
            id_token: (tokens as any).id_token ?? undefined,
            userId: userByEmail.id,
          },
        });
      } else {
        await prisma.account.update({
          where: { id: existingAccount.id },
          data: {
            access_token: tokens.access_token ?? existingAccount.access_token,
            refresh_token: tokens.refresh_token ?? existingAccount.refresh_token,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : existingAccount.expires_at,
            id_token: (tokens as any).id_token ?? existingAccount.id_token,
          },
        });
      }

      // Make sure 'google' present in provider list
      if (!hasGoogle) {
        currentProviders.push("google");
        await prisma.user.update({ where: { id: userByEmail.id }, data: { provider: currentProviders.join(",") } });
      }

      // Ensure profile exists or update missing fields
      if (!userByEmail.profile) {
        await prisma.profile.create({
          data: { userId: userByEmail.id, displayName: userByEmail.name ?? name ?? undefined, avatarUrl: picture ?? undefined },
        });
      } else {
        const needUpdate: Record<string, any> = {};
        if (!userByEmail.profile.displayName && (userByEmail.name ?? name)) needUpdate.displayName = userByEmail.name ?? name;
        if (!userByEmail.profile.avatarUrl && picture) needUpdate.avatarUrl = picture;
        if (Object.keys(needUpdate).length) {
          await prisma.profile.update({ where: { userId: userByEmail.id }, data: needUpdate });
        }
      }

      // Issue session (canonical id claim)
      const token = signToken({ id: userByEmail.id, email: userByEmail.email, role: userByEmail.role ?? "VIEWER" }, "7d");
      const res = NextResponse.redirect(returnTo ?? REDIRECT_AFTER_LOGIN);
      setSessionCookie(res, token);
      clearNonceCookie(res);
      return res;
    }

    // No user and no existing account -> decide create vs explicit signup
    if (mode === "signup" || AUTO_CREATE_OAUTH_USERS) {
      const created = await prisma.$transaction(async (tx) => {
        const newUser = await tx.user.create({
          data: {
            email,
            name,
            provider: "google",
            emailVerified: true,
            role: "VIEWER",
            profile: { create: { displayName: name ?? undefined, avatarUrl: picture ?? undefined } },
          },
        });

        await tx.account.create({
          data: {
            provider: "google",
            providerAccountId,
            access_token: tokens.access_token ?? undefined,
            refresh_token: tokens.refresh_token ?? undefined,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : undefined,
            id_token: (tokens as any).id_token ?? undefined,
            userId: newUser.id,
          },
        });

        return newUser;
      });

      const token = signToken({ id: created.id, email: created.email, role: created.role ?? "VIEWER" }, "7d");
      const res = NextResponse.redirect(returnTo ?? REDIRECT_AFTER_LOGIN);
      console.debug("[auth/google/callback] about to set session for userId:", created?.id ?? "<new?>");
      setSessionCookie(res, token);
      clearNonceCookie(res);
      return res;
    }

    // Otherwise: explicit signup required. stash minimal profile in temp cookie and redirect to signup UI.
    const tempPayload = JSON.stringify({
      sub: providerAccountId,
      email,
      name,
      picture,
      tokensMeta: {
        access_token: tokens.access_token ?? null,
        refresh_token: tokens.refresh_token ?? null,
      },
    });

    const res = NextResponse.redirect(new URL("/auth/google/signup", BASE_URL).toString());
    try {
      res.cookies.set(TEMP_GOOGLE_COOKIE, encodeURIComponent(tempPayload), {
        httpOnly: true,
        sameSite: isProd ? "none" : "lax",
        secure: isProd,
        maxAge: TEMP_GOOGLE_MAX_AGE,
        path: "/",
      });
    } catch {
      const cookieParts = [
        `${TEMP_GOOGLE_COOKIE}=${encodeURIComponent(tempPayload)}`,
        "Path=/",
        `Max-Age=${TEMP_GOOGLE_MAX_AGE}`,
        "HttpOnly",
        isProd ? "SameSite=None" : "SameSite=Lax",
        isProd ? "Secure" : "",
      ].filter(Boolean);
      res.headers.set("Set-Cookie", cookieParts.join("; "));
    }

    // Finally clear the nonce cookie
    clearNonceCookie(res);
    return res;
  } catch (err) {
    console.error("Google callback handler error:", err);
    const res = redirectWithError("/auth/login", "server_error", "An internal error occurred during Google sign-in.");
    clearNonceCookie(res);
    return res;
  }
}
