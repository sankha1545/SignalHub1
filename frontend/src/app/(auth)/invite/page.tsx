"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * Invite signup page
 * - Reads token from ?token=...
 * - POST /api/invites/accept { token } -> { ok, email, role, ... }
 * - Shows a form: non-editable email, password, confirm password
 * - POST /api/invites/finalize { token, password } -> creates account & consumes invite
 * - On success redirect to /auth/login?email=<email>&created=1
 */

/* ---------- helpers ---------- */
type ApiResp = { ok?: boolean; message?: string; [k: string]: any };

async function postJSON(url: string, body: any): Promise<ApiResp> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });
    // best-effort defensive parse
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      // if not json, return simple object
      return { ok: res.ok, message: text };
    }
  } catch (err: any) {
    return { message: err?.message || String(err) };
  }
}

function validatePasswordRules(pw: string) {
  const errs: string[] = [];
  if (!pw || pw.length < 8) errs.push("Password must be at least 8 characters.");
  if (!/[A-Z]/.test(pw)) errs.push("Include at least one uppercase letter.");
  if (!/[a-z]/.test(pw)) errs.push("Include at least one lowercase letter.");
  if (!/[0-9]/.test(pw)) errs.push("Include at least one number.");
  if (!/[^A-Za-z0-9]/.test(pw)) errs.push("Include at least one symbol (e.g. !@#$%).");
  return errs;
}

/* ---------- component ---------- */
export default function InviteSignupPage(): JSX.Element {
  const params = useSearchParams();
  const router = useRouter();
  const token = params?.get("token") ?? "";

  // invite validation state
  const [loading, setLoading] = useState(true);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState<string>("");
  const [inviteRole, setInviteRole] = useState<string | null>(null);

  // form state (only password)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Validate token on mount
  useEffect(() => {
    let mounted = true;
    async function validateToken() {
      if (!token) {
        if (mounted) {
          setInviteError(
            "Missing invite token. Please use the link sent to your email or contact the admin."
          );
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        setInviteError(null);
        const res = await postJSON("/api/invites/accept", { token });
        if (!res?.ok) {
          const msg = res?.message || res?.error || "Invalid or expired invite token.";
          if (mounted) {
            setInviteError(String(msg));
            setLoading(false);
          }
          return;
        }

        // success: populate prefilled email
        if (mounted) {
          setInviteEmail(res.email || "");
          setInviteRole(res.role || "Employee");
          setLoading(false);
        }
      } catch (err: any) {
        if (mounted) {
          setInviteError(String(err?.message || err));
          setLoading(false);
        }
      }
    }

    validateToken();
    return () => {
      mounted = false;
    };
  }, [token]);

  // password validation live
  useEffect(() => {
    setPasswordErrors(validatePasswordRules(password));
    setPasswordsMatch(password === confirmPassword || confirmPassword.length === 0);
  }, [password, confirmPassword]);

  // submit finalize
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setFormError(null);

    // client-side checks
    if (!inviteEmail) {
      setFormError("Invite email not found. Refresh or contact the admin.");
      return;
    }

    const pwErrs = validatePasswordRules(password);
    if (pwErrs.length > 0) {
      setPasswordErrors(pwErrs);
      setFormError("Please fix the password requirements.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setFormError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await postJSON("/api/invites/finalize", { token, password });
      if (!res?.ok) {
        const msg = res?.message || res?.error || "Failed to create account. Contact admin.";
        setFormError(String(msg));
        setSubmitting(false);
        return;
      }

      // success: redirect to login page and prefill email
      router.push(
        `/auth/login?email=${encodeURIComponent(inviteEmail)}&created=1`
      );
    } catch (err: any) {
      setFormError(String(err?.message || err));
      setSubmitting(false);
    }
  }

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form */}
        <div className="p-8 md:p-10">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Complete your account</h1>
            <p className="text-sm text-slate-500 mt-1">
              You were invited as <strong>{inviteRole ?? "Employee"}</strong>.
              Finish creating your account to get access.
            </p>
          </div>

          {loading ? (
            <div className="py-12 flex items-center justify-center">
              <div className="text-slate-500">Validating invite…</div>
            </div>
          ) : inviteError ? (
            <div className="py-6">
              <div className="text-sm text-rose-600 mb-3">{inviteError}</div>
              <div className="text-sm text-slate-600">
                If you believe this is a mistake, contact the administrator who invited you.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email (prefilled, non-editable) */}
              <div>
                <label className="block text-xs text-slate-600 mb-1">Email</label>
                <input
                  value={inviteEmail}
                  disabled
                  readOnly
                  className="w-full p-3 rounded border bg-slate-100 text-slate-700 text-sm"
                />
                <p className="text-xs text-slate-400 mt-1">Email confirmed by invitation — not editable.</p>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs text-slate-600 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full p-3 rounded border focus:ring-2 focus:ring-indigo-300 text-sm pr-10"
                    aria-required
                    aria-label="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label className="block text-xs text-slate-600 mb-1">Confirm password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Retype password"
                    className={`w-full p-3 rounded border focus:ring-2 focus:ring-indigo-300 text-sm ${
                      !passwordsMatch && confirmPassword.length > 0 ? "border-rose-400" : ""
                    }`}
                    aria-label="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-500"
                    aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirm ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Password requirements */}
              <div className="text-xs text-slate-500">
                <div className="mb-2">Password must contain:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {[
                    { ok: password.length >= 8, label: "8+ characters" },
                    { ok: /[A-Z]/.test(password), label: "Uppercase letter" },
                    { ok: /[a-z]/.test(password), label: "Lowercase letter" },
                    { ok: /[0-9]/.test(password), label: "Number" },
                    { ok: /[^A-Za-z0-9]/.test(password), label: "Symbol" },
                  ].map((r) => (
                    <li key={r.label} className="flex items-center gap-2 text-[13px]">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                          r.ok ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-400"
                        }`}
                        aria-hidden
                      >
                        {r.ok ? "✓" : "•"}
                      </span>
                      <span className={`${r.ok ? "text-slate-700" : "text-slate-400"}`}>{r.label}</span>
                    </li>
                  ))}
                </ul>
                {!passwordsMatch && confirmPassword.length > 0 && (
                  <div className="mt-2 text-sm text-rose-600">Passwords do not match.</div>
                )}
              </div>

              {/* Form error */}
              {formError && <div className="text-sm text-rose-600">{formError}</div>}

              {/* Submit */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={
                    submitting ||
                    passwordErrors.length > 0 ||
                    !password ||
                    !confirmPassword ||
                    !passwordsMatch
                  }
                  className={`flex-1 px-4 py-3 rounded font-medium transition ${
                    submitting || passwordErrors.length > 0 || !passwordsMatch
                      ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {submitting ? "Creating account..." : "Create account"}
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/auth/login")}
                  className="px-4 py-3 border rounded"
                >
                  Already have an account?
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: visual / role */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-600 to-emerald-400 text-white">
          <div className="rounded-lg bg-white/10 p-4 mb-6">
            <div className="text-sm">Invited role</div>
            <div className="text-lg font-semibold">{inviteRole ?? "Employee"}</div>
          </div>
          <div className="max-w-xs text-sm text-white/90 text-center">
            Your email has already been verified by the administrator. Complete the fields to create your account and then login.
          </div>
        </div>
      </div>
    </div>
  );
}
