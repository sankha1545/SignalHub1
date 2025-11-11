// File: app/(auth)/verify-phone/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type ApiResp = { ok?: boolean; tempToken?: string; sessionToken?: string; activated?: boolean; error?: string; reason?: string; [k: string]: any };

async function postJSON(url: string, body: any): Promise<ApiResp> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });
    try {
      return await res.json();
    } catch {
      return { ok: res.ok, error: res.statusText || "Unexpected response" };
    }
  } catch (err: any) {
    return { error: err?.message || String(err) };
  }
}

/** Simple normalizer: keeps leading + and digits, or prefixes with provided default country code */
function normalizePhoneInput(raw: string | null): string | null {
  if (!raw) return null;
  const s = String(raw).trim();
  if (s.startsWith("+")) {
    const cleaned = "+" + s.slice(1).replace(/\D/g, "");
    return cleaned.length >= 7 ? cleaned : null;
  }
  // If user typed a number without plus, strip non-digits and prefix with + if looks long enough
  const digits = s.replace(/\D/g, "");
  if (!digits) return null;
  // If it's short (less than 7 digits) we consider invalid
  return digits.length >= 7 ? `+${digits}` : null;
}

export default function VerifyPhonePage(): JSX.Element {
  const params = useSearchParams();
  const router = useRouter();

  const tempTokenFromQuery = params?.get("tempToken") ?? null;
  const flow = (params?.get("flow") as "signup" | "invite" | "login" | null) ?? "signup";
  const inviteId = params?.get("inviteId") ?? null;

  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [step, setStep] = useState<"enterPhone" | "verifyCode" | "done">("enterPhone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tempToken, setTempToken] = useState<string | null>(tempTokenFromQuery);
  const [resendAvailableAt, setResendAvailableAt] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    // If query provided a tempToken and it includes a phone in your app, you could decode it and prefill.
    // Keep this simple and safe: don't decode on client here.
    if (tempTokenFromQuery) {
      setTempToken(tempTokenFromQuery);
      // If flow came with a token we might jump to verify step (optional). Leave control to user.
    }
  }, [tempTokenFromQuery]);

  function formatCountdown(unixMs: number | null) {
    if (!unixMs) return null;
    const s = Math.max(0, Math.ceil((unixMs - now) / 1000));
    if (s <= 0) return null;
    return `${s}s`;
  }

  function setResendCooldown(seconds = 45) {
    setResendAvailableAt(Date.now() + seconds * 1000);
  }

  // Send OTP to phone
  async function sendOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    const normalized = normalizePhoneInput(phone);
    if (!normalized) {
      setError("Please enter a valid phone number (include country code or use +).");
      return;
    }

    setLoading(true);
    try {
      const res = await postJSON("/api/auth/phone/send", { phone: normalized });
      if (res?.ok) {
        setStep("verifyCode");
        setResendCooldown(45);
        setCode("");
      } else {
        setError(res?.error || res?.reason || "Failed to send OTP. Try again.");
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  // Verify OTP
  async function verifyOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    const normalized = normalizePhoneInput(phone);
    if (!normalized) {
      setError("Please enter a valid phone number (include country code or use +).");
      return;
    }

    if (!/^\d{4,6}$/.test(code.trim())) {
      setError("Enter the full numeric code you received.");
      return;
    }

    setLoading(true);
    try {
      const res = await postJSON("/api/auth/phone/verify", { phone: normalized, code: code.trim(), tempToken });

      if (!res) {
        setError("No response from server.");
        return;
      }

      if (res.ok) {
        // Case A: server activated the account and returned a session
        if (res.activated && (res.sessionToken || res.ok)) {
          // If server sets cookie automatically (recommended) then redirect to account.
          // If server returned sessionToken in body, you can choose to store it client side (not recommended).
          // We'll redirect to /account and rely on server-set cookie or follow-up API calls.
          setStep("done");
          // small delay so user sees success
          setTimeout(() => {
            router.push("/account");
          }, 400);
          return;
        }

        // Case B: server returned a tempToken (common during signup flow)
        if (res.tempToken) {
          setTempToken(res.tempToken);

          if (flow === "signup") {
            // redirect to signup finalize (org creation) with tempToken
            const url = new URL(window.location.origin + "/auth/signup");
            url.searchParams.set("tempToken", res.tempToken);
            window.location.href = url.toString();
            return;
          }

          if (flow === "invite") {
            const url = new URL(window.location.origin + "/invite/accept");
            if (inviteId) url.searchParams.set("inviteId", inviteId);
            url.searchParams.set("tempToken", res.tempToken);
            window.location.href = url.toString();
            return;
          }

          if (flow === "login") {
            // For login-with-phone flows, server may return a session or a tempToken.
            // If only tempToken returned, it's likely the app uses a finalize endpoint to issue session.
            // Redirect to login finalize or account as appropriate (choose /account to let server/session be established).
            setStep("done");
            setTimeout(() => router.push("/account"), 400);
            return;
          }

          // Default: go to home if unknown flow
          setStep("done");
          setTimeout(() => router.push("/"), 400);
          return;
        }

        // Fallback: treat as success but no token — move to next step
        setStep("done");
        setTimeout(() => {
          if (flow === "signup") router.push("/auth/signup");
          else if (flow === "invite") {
            const url = inviteId ? `/invite/accept?inviteId=${encodeURIComponent(inviteId)}` : "/invite/accept";
            window.location.href = url;
          } else router.push("/");
        }, 400);
        return;
      }

      // res.ok is falsy — show server error
      setError(res.error || res.reason || "Verification failed.");
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  // Resend OTP
  async function resendOtp() {
    if (resendAvailableAt && resendAvailableAt > Date.now()) return;
    setError(null);

    const normalized = normalizePhoneInput(phone);
    if (!normalized) {
      setError("Please enter a valid phone number to resend OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await postJSON("/api/auth/phone/send", { phone: normalized, resend: true });
      if (res?.ok) {
        setResendCooldown(45);
      } else {
        setError(res?.error || res?.reason || "Failed to resend OTP.");
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Verify your phone</h2>
        <p className="text-sm text-slate-500 mb-4">Enter your phone to receive a verification code.</p>

        <form onSubmit={step === "enterPhone" ? sendOtp : verifyOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="mt-1 w-full p-2 border rounded focus:ring-2 focus:ring-indigo-300"
              aria-label="Phone number"
              disabled={step === "verifyCode" && loading}
            />
            <p className="text-xs text-slate-400 mt-1">Include country code (e.g. +91).</p>
          </div>

          {step === "verifyCode" && (
            <div>
              <label className="block text-sm font-medium text-slate-600">Code</label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                placeholder="123456"
                className="mt-1 w-full p-2 border rounded text-center tracking-widest text-lg"
                inputMode="numeric"
                aria-label="Verification code"
                maxLength={6}
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:brightness-95"
            >
              {loading ? "Processing..." : step === "enterPhone" ? "Send code" : "Verify code"}
            </button>

            {step === "verifyCode" && (
              <button
                type="button"
                onClick={() => setStep("enterPhone")}
                className="px-3 py-2 border rounded"
              >
                Change phone
              </button>
            )}
          </div>

          {step === "verifyCode" && (
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div>
                {formatCountdown(resendAvailableAt) ? (
                  <span>Resend in {formatCountdown(resendAvailableAt)}</span>
                ) : (
                  <button type="button" onClick={resendOtp} className="underline text-indigo-600">
                    Resend code
                  </button>
                )}
              </div>
              <div>Didn't receive SMS? Try again or contact support.</div>
            </div>
          )}

          {error && <div role="alert" className="text-sm text-red-600 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}
