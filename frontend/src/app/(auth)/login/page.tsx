// File: app/(auth)/login/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Login page
 *
 * Notes:
 * - Expects /api/auth/login to either set an HttpOnly session cookie (recommended) OR
 *   return { ok: true, sessionToken } where sessionToken is a fallback.
 * - Handles 403 / account_not_active responses and shows resend buttons for verification.
 */

type LoginResponse = {
  ok?: boolean;
  sessionToken?: string;
  error?: string;
  // optional verification details when account inactive:
  details?: { phoneVerified?: boolean; emailVerified?: boolean };
  message?: string;
  [k: string]: any;
};

async function postJSON(url: string, body: any): Promise<LoginResponse> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include", // allow server-set cookies
    });
    let json: any;
    try {
      json = await res.json();
    } catch {
      // if body is empty but status ok (server set cookie), return ok true
      if (res.ok) return { ok: true };
      return { error: res.statusText || "Unexpected response" };
    }
    // attach HTTP status for client logic if needed
    return { ...json, ok: json.ok ?? res.ok };
  } catch (err: any) {
    return { error: err?.message || String(err) };
  }
}

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // When account inactive, server may return details; hold them for UI
  const [verificationDetails, setVerificationDetails] = useState<{ phoneVerified?: boolean; emailVerified?: boolean } | null>(null);
  const [resendLoading, setResendLoading] = useState(false);

  async function handleLogin(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setInfo(null);
    setVerificationDetails(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await postJSON("/api/auth/login", { email: trimmedEmail, password });

      // If server returned ok and likely set cookie (res.ok true), redirect
      if (res.ok) {
        // If server returned a sessionToken in body, we attempt to persist it (fallback)
        if (res.sessionToken) {
          // Fallback behavior: store token only if server returned it.
          // Prefer server-set HttpOnly cookie; this fallback is for systems that return token in JSON.
          try {
            const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 1;
            // store non-HttpOnly cookie (less secure) only if necessary — server-side cookie is preferred.
            document.cookie = `sessionToken=${res.sessionToken}; path=/; max-age=${maxAge}; Secure; SameSite=Strict`;
            try {
              localStorage.setItem("sessionToken", res.sessionToken);
            } catch {
              // ignore
            }
          } catch {
            // ignore storage errors
          }
        }

        setInfo("Signed in — redirecting...");
        // small delay so info is visible
        setTimeout(() => router.push("/account"), 250); // <-- redirect to /account (dashboard)
        return;
      }

      // Not ok: handle specific error shapes
      if (res.error === "account_not_fully_verified" || res.error === "account_not_active" || res.message?.includes("verify")) {
        setError("Your account is not active yet. Please verify email and phone to continue.");
        setVerificationDetails(res.details ?? null);
        return;
      }

      // generic invalid credentials
      setError(res.error || "Invalid credentials. Please try again.");
    } catch (err: any) {
      setError(err?.message || String(err) || "Network error.");
    } finally {
      setLoading(false);
    }
  }

  function startGoogleOAuthLogin() {
    // redirect to your server oauth start endpoint
    window.location.href = "/api/auth/oauth/google/start?flow=login";
  }

  async function handleResendEmail() {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Enter your email to resend verification.");
      return;
    }
    setResendLoading(true);
    setError(null);
    try {
      const payload = { email: trimmedEmail, resend: true };
      const res = await fetch("/api/auth/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const json = await res.json().catch(() => ({}));
      if (json?.ok) {
        setInfo("Verification email resent. Check your inbox (and spam).");
      } else {
        setError(json?.error || "Unable to resend verification email.");
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setResendLoading(false);
    }
  }

  async function handleResendPhone() {
    // phone is not part of login form; backend typically requires phone param or tempToken.
    // We attempt to call a resend endpoint that may accept email to find user's phone.
    setResendLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/phone/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // try sending email so server can look up phone from the account; backend should support this pattern.
        body: JSON.stringify({ email: email.trim(), resend: true }),
        credentials: "include",
      });
      const json = await res.json().catch(() => ({}));
      if (json?.ok) {
        setInfo("SMS verification resent (if we have a phone on file).");
      } else {
        setError(json?.error || "Unable to resend SMS verification.");
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setResendLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/90 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT: Login card */}
        <div className="p-8 md:p-12 flex items-start">
          <div className="w-full max-w-md">
            {/* Brand / Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
                U
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">Welcome</h1>
                <p className="text-sm text-slate-500">Sign in to your account to continue to UTech</p>
              </div>
            </div>

            {/* Info / status */}
            <div role="status" aria-live="polite" className="min-h-[1.25rem] mb-3">
              {error && <div className="text-sm text-red-600">{error}</div>}
              {info && <div className="text-sm text-emerald-600">{info}</div>}
            </div>

            {/* OAuth button and divider */}
            <div className="space-y-3 mb-4">
              <button
                onClick={startGoogleOAuthLogin}
                className="w-full p-3 border rounded-lg flex items-center justify-center gap-3 hover:shadow-sm transition"
                aria-label="Continue with Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden>
                  <path fill="#EA4335" d="M24 9.5c3.6 0 6.5 1.3 8.9 2.9l6.5-6.5C36.7 2.9 30.9 0 24 0 14.3 0 6.2 5.7 2.8 13.8l7.6 5.9C12.2 15.2 17.6 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24.5c0-1.7-.2-3.3-.6-4.8H24v9.1h12.7c-.5 2.7-2.1 5-4.4 6.6l7 5.4c4.1-3.8 6.5-9.6 6.5-16.3z" />
                  <path fill="#FBBC05" d="M9.4 28.3c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8L2.8 12.8C1 16.1 0 19.9 0 24s1 7.9 2.8 11.2l6.6-7z" />
                  <path fill="#34A853" d="M24 48c6.6 0 12.2-2.2 16.3-6l-7-5.4c-2.2 1.5-5 2.6-9.3 2.6-6.4 0-11.8-5.7-13.4-13.1L2.8 35.2C6.2 43.3 14.3 48 24 48z" />
                </svg>
                <span className="text-sm font-medium text-slate-700">Continue with Google</span>
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex-1 h-px bg-slate-100" />
                <span>or sign in with email</span>
                <span className="flex-1 h-px bg-slate-100" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4" noValidate>
              <div>
                <label htmlFor="login-email" className="block text-xs font-medium text-slate-600">Email</label>
                <input
                  id="login-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-xs font-medium text-slate-600">Password</label>
                <div className="relative mt-2">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-2 px-2 flex items-center text-slate-500 hover:text-slate-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 9.5a3.5 3.5 0 014.95 4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Remember me</span>
                </label>

                <a href="/auth/forgot" className="text-indigo-600 hover:underline">Forgot Password?</a>
              </div>

              <div className="flex gap-3 items-center">
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-md active:scale-[0.995] disabled:opacity-60 transition"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="0" fill="none" opacity="0.25"/>
                        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>

                <a href="/signup" className="px-4 py-2 border rounded-lg text-sm text-slate-700 hover:bg-slate-50">Sign up</a>
              </div>

              <p className="text-xs text-slate-400 mt-2">
                By signing in you agree to our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
              </p>
            </form>

            {/* If account is inactive, show resend options */}
            {verificationDetails && (
              <div className="mt-4 p-3 border rounded bg-slate-50 text-sm">
                <div className="mb-2">Your account isn't active yet. Verification required:</div>
                <ul className="mb-3">
                  <li>Email: {verificationDetails.emailVerified ? <span className="text-emerald-600">Verified</span> : <span className="text-amber-600">Unverified</span>}</li>
                  <li>Phone: {verificationDetails.phoneVerified ? <span className="text-emerald-600">Verified</span> : <span className="text-amber-600">Unverified</span>}</li>
                </ul>

                <div className="flex gap-2">
                  {!verificationDetails.emailVerified && (
                    <button onClick={handleResendEmail} disabled={resendLoading} className="px-3 py-2 bg-indigo-600 text-white rounded text-sm">
                      {resendLoading ? "Resending..." : "Resend email"}
                    </button>
                  )}
                  {!verificationDetails.phoneVerified && (
                    <button onClick={handleResendPhone} disabled={resendLoading} className="px-3 py-2 border rounded text-sm">
                      {resendLoading ? "Resending..." : "Resend SMS"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Hero / Illustration */}
        <div className="hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300">
          <img src="/signup-hero.jpg" alt="Hero" className="w-full h-full object-cover min-h-[640px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">
        Prefer magic links or SSO? Ask and I’ll add it.
      </div>
    </div>
  );
}
