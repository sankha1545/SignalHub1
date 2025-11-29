"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * Invite accept page
 *
 * Flow:
 *  - Reads token from ?token=...
 *  - POST /api/invites/accept { token } -> { ok, email, role, organizationId, organizationName, phone, ... }
 *  - Shows locked email/phone, collects password + confirm
 *  - POST /api/invites/finalize { token, password } -> creates account & consumes invite
 *  - On success:
 *      • if server returns token -> store fallback and redirect to server.redirect or role-based dashboard
 *      • else redirect to /auth/login?email=<email>&created=1
 *
 * Notes:
 *  - Server should ideally set httpOnly session cookie on finalize; client-side saving of token is a fallback only.
 */

type InvitePayload = {
  ok?: boolean;
  email?: string;
  preverifiedEmail?: boolean;
  role?: string | null;
  organizationId?: string | null;
  organizationName?: string | null;
  teamId?: string | null;
  expiresAt?: string | null;
  createdAt?: string | null;
  message?: string;
  phone?: string | null;
};

export default function InviteAcceptPage(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token") ?? "";

  // invite / auth state
  const [invite, setInvite] = useState<InvitePayload | null>(null);
  const [loadingInvite, setLoadingInvite] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // password validation rules
  function validatePassword(pw: string) {
    const errs: string[] = [];
    if (!pw || pw.length < 8) errs.push("Password must be at least 8 characters.");
    if (!/[A-Z]/.test(pw)) errs.push("Include at least one uppercase letter.");
    if (!/[a-z]/.test(pw)) errs.push("Include at least one lowercase letter.");
    if (!/[0-9]/.test(pw)) errs.push("Include at least one number.");
    if (!/[^A-Za-z0-9]/.test(pw)) errs.push("Include at least one symbol (e.g. !@#$%).");
    return errs;
  }
  const passwordErrors = validatePassword(password);
  const passwordsMatch = password === confirmPassword || confirmPassword.length === 0;

  // load invite metadata and check current auth
  useEffect(() => {
    let mounted = true;

    async function safeJson(res: Response) {
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch {
        return { ok: res.ok, message: text || (res.statusText ?? "Unknown response") };
      }
    }

    async function loadInvite() {
      setLoadingInvite(true);
      setError(null);

      if (!token) {
        setError("Missing invite token. Please open the invite link you received by email.");
        setLoadingInvite(false);
        return;
      }

      try {
        const res = await fetch("/api/invites/accept", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
          credentials: "include",
        });
        const json = await safeJson(res);
        if (!res.ok || !json?.ok) {
          const msg = json?.message || json?.error || "Invalid or expired invite link.";
          throw new Error(msg);
        }
        if (mounted) setInvite(json as InvitePayload);
      } catch (err: any) {
        console.error("Invite accept error:", err);
        if (mounted) setError(err?.message || "Could not validate invite link.");
      } finally {
        if (mounted) setLoadingInvite(false);
      }
    }

    async function checkAuth() {
      setCheckingAuth(true);
      try {
        const r = await fetch("/api/me", { credentials: "include" });
        if (!r.ok) {
          if (mounted) setCurrentUserEmail(null);
        } else {
          const j = await r.json();
          if (mounted) setCurrentUserEmail(j?.email ?? null);
        }
      } catch (e) {
        if (mounted) setCurrentUserEmail(null);
      } finally {
        if (mounted) setCheckingAuth(false);
      }
    }

    loadInvite();
    checkAuth();

    return () => {
      mounted = false;
    };
  }, [token]);

  // finalize invite flow
  async function handleFinalize(e?: React.FormEvent) {
    e?.preventDefault();
    setPasswordTouched(true);
    setError(null);

    if (!invite?.email) {
      setError("Invite data missing. Please reload the page or ask the inviter to resend the invite.");
      return;
    }

    if (passwordErrors.length > 0) {
      setError("Please fix the password requirements before continuing.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/invites/finalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
        credentials: "include",
      });

      const text = await res.text();
      let json: any;
      try {
        json = text ? JSON.parse(text) : {};
      } catch {
        json = { ok: res.ok, message: text };
      }

      if (!res.ok || !json?.ok) {
        const msg = json?.message || json?.error || "Failed to create account. Contact the administrator.";
        throw new Error(msg);
      }

      // if server returned a session token, persist as fallback (server-set httpOnly cookie preferred)
      if (json.token) {
        try {
          localStorage.setItem("sessionToken", json.token);
        } catch {
          // ignore storage errors
        }

        // optional: warm /api/me
        try {
          await fetch("/api/me", { credentials: "include" });
        } catch {
          // ignore
        }

        // decide redirect:
        const redirectTo =
          json.redirect ||
          (invite?.role && /manager/i.test(String(invite.role))
            ? "/dashboard/manager"
            : "/dashboard/employee");

        router.push(redirectTo);
        return;
      }

      // fallback: redirect to login page and prefill email
      router.push(`/auth/login?email=${encodeURIComponent(invite.email)}&created=1`);
    } catch (err: any) {
      console.error("Finalize error:", err);
      setError(err?.message || "Failed to create account. Please try again or contact support.");
    } finally {
      setSubmitting(false);
    }
  }

  // show loaders / errors
  if (loadingInvite || checkingAuth) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6">
        <div className="text-center text-lg text-gray-700">Loading invite…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6">
        <div className="bg-white shadow rounded-lg p-6 max-w-xl">
          <h2 className="text-xl font-semibold mb-3">Invite issue</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-sm text-gray-600">
            If this looks wrong, ask the organization admin to resend the invite or contact support.
          </p>
        </div>
      </div>
    );
  }

  if (!invite) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6">
        <div className="bg-white shadow rounded-lg p-6 max-w-xl">
          <h2 className="text-xl font-semibold mb-3">Invite not found</h2>
          <p className="text-sm text-gray-600">This invite link is invalid, expired, or already used.</p>
        </div>
      </div>
    );
  }

  // main UI
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-7xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ring-1 ring-slate-100">
        {/* LEFT: form/card */}
        <div className="p-6 sm:p-10 flex items-start">
          <div className="w-full max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-xl">
                U
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">You're invited</h1>
                <p className="text-sm text-slate-500 mt-1">
                  Accept the invitation to join <strong>{invite.organizationName ?? invite.organizationId}</strong>.
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-5">
              <div className="relative">
                <div className="absolute left-4 right-4 top-6 h-0.5 bg-slate-100 rounded" />
                <div
                  className="absolute left-4 top-6 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-500 ease-out"
                  style={{ width: `66%` }}
                />
                <div className="relative flex items-center justify-between px-2">
                  {[1, 2, 3].map((n) => {
                    const labels = ["Email", "Phone", "Account"];
                    const isActive = n === 3;
                    const isCompleted = n < 3;
                    return (
                      <div key={n} className="flex-1 flex flex-col items-center text-center px-1">
                        <div
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                            isCompleted
                              ? "bg-indigo-600 text-white shadow-lg scale-105"
                              : isActive
                              ? "bg-indigo-600 text-white ring-4 ring-indigo-100 animate-pulse"
                              : "bg-white border border-slate-200 text-slate-600"
                          }`}
                          aria-hidden
                        >
                          {n}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-2">{labels[n - 1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Signed-in hint */}
            {currentUserEmail && (
              <div className="mb-4 rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm text-yellow-800">
                You are signed in as <strong>{currentUserEmail}</strong>. To accept this invite as a different user,
                sign out or open this link in a private/incognito window.
              </div>
            )}

            <div className="bg-white p-4 rounded-md shadow-sm">
              {/* Email locked */}
              <div className="mb-4">
                <label htmlFor="invite-email" className="block text-sm font-medium text-slate-700">
                  Email (locked)
                </label>
                <input
                  id="invite-email"
                  readOnly
                  value={invite.email ?? ""}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  aria-readonly
                />
                <p className="text-xs text-slate-400 mt-2">This email was invited by the organization and is already verified.</p>
              </div>

              {/* Phone - show if present */}
              <div className="mb-4">
                <label htmlFor="invite-phone" className="block text-sm font-medium text-slate-700">
                  Phone (verified)
                </label>
                <input
                  id="invite-phone"
                  readOnly
                  value={invite.phone ?? "Not provided — verified by admin"}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                />
                <p className="text-xs text-slate-400 mt-2">Phone verification is handled by the organization for invited users.</p>
              </div>

              {/* Password form */}
              <form onSubmit={handleFinalize} className="space-y-4" aria-describedby="invite-form-desc">
                <div>
                  <label htmlFor="invite-password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    id="invite-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    placeholder="Create a secure password (8+ characters)"
                    className="mt-1 block w-full rounded-md border-gray-200 px-3 py-2 text-sm"
                    autoComplete="new-password"
                    aria-required
                  />
                </div>

                <div>
                  <label htmlFor="invite-confirm" className="block text-sm font-medium text-slate-700">
                    Retype password
                  </label>
                  <input
                    id="invite-confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    placeholder="Retype password"
                    className="mt-1 block w-full rounded-md border-gray-200 px-3 py-2 text-sm"
                    autoComplete="new-password"
                    aria-required
                  />
                </div>

                <div id="invite-form-desc" className="text-xs text-slate-500">
                  <div className="mb-1">Password must contain:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {[
                      { ok: password.length >= 8, label: "8+ characters" },
                      { ok: /[A-Z]/.test(password), label: "Uppercase letter" },
                      { ok: /[a-z]/.test(password), label: "Lowercase letter" },
                      { ok: /[0-9]/.test(password), label: "Number" },
                      { ok: /[^\w\s]/.test(password), label: "Symbol" },
                    ].map((r) => (
                      <li key={r.label} className="flex items-center gap-2 text-[13px]">
                        <span
                          className={`w-4 h-4 rounded-sm flex items-center justify-center ${r.ok ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-400"}`}
                          aria-hidden
                        >
                          {r.ok ? "✓" : "•"}
                        </span>
                        <span className={`${r.ok ? "text-slate-700" : "text-slate-400"}`}>{r.label}</span>
                      </li>
                    ))}
                  </ul>
                  {!passwordsMatch && confirmPassword.length > 0 && (
                    <div className="mt-2 text-sm text-red-600">Passwords do not match.</div>
                  )}
                </div>

                {error && <div className="text-sm text-red-600">{error}</div>}

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="submit"
                    disabled={submitting || passwordErrors.length > 0 || !passwordsMatch || password.length === 0}
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium ${
                      submitting || passwordErrors.length > 0 || !passwordsMatch || password.length === 0
                        ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                        : "bg-slate-900 text-white"
                    }`}
                    aria-disabled={submitting || passwordErrors.length > 0 || !passwordsMatch || password.length === 0}
                  >
                    {submitting ? "Creating account…" : `Create account and join ${invite.organizationName ?? "team"}`}
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push(`/auth/login?email=${encodeURIComponent(invite.email ?? "")}`)}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm"
                  >
                    Already have an account? Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT: hero/illustration */}
        <div className="hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300">
          <img src="/signup-hero.jpg" alt="Signup hero" className="w-full h-full object-cover min-h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
