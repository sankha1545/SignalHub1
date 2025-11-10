



// File: app/(auth)/invite/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

async function postJSON(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

export default function InviteAcceptPage() {
  const params = useSearchParams();
  const rawToken = params.get("token");
  const emailQuery = params.get("email");
  const tempTokenFromQuery = params.get("tempToken");

  const [invite, setInvite] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState(emailQuery || "");
  const [mode, setMode] = useState<"choose" | "email" | "verifyEmail" | "oauth" | "finalize">("choose");
  const [emailCode, setEmailCode] = useState("");
  const [tempToken, setTempToken] = useState<string | null>(tempTokenFromQuery);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If token present, validate invite
    async function validate() {
      if (!rawToken && !tempToken) return;
      setLoading(true);
      setError(null);
      try {
        if (rawToken) {
          const res = await postJSON("/api/invites/accept", { token: rawToken, email });
          if (res?.ok) {
            setInvite(res.invite);
          } else {
            setError(res?.error || "Invalid invite");
          }
        } else {
          // tempToken flow (probably from oauth) — try to decode on server if needed
          // We'll continue to phone verification directly if tempToken exists
          setMode("oauth");
        }
      } catch (err: any) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }
    validate();
  }, [rawToken]);

  // start oauth accept
  function startGoogleAccept() {
    // include inviteId in start state if we have invite
    const inviteId = invite?.id;
    const url = `/api/auth/oauth/google/start?flow=invite${inviteId ? `&inviteId=${inviteId}` : ""}`;
    window.location.href = url;
  }

  // email OTP path
  async function sendEmailOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await postJSON(`/api/auth/email/send`, { email });
      if (res?.ok) setMode("verifyEmail");
      else setError(res?.error || "Failed to send code");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  async function verifyEmailOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await postJSON(`/api/auth/email/verify`, { email, code: emailCode, flow: "invite" });
      if (res?.ok && res?.tempToken) {
        // we got a temp token — proceed to phone verify
        setTempToken(res.tempToken);
        const url = new URL(window.location.origin + "/auth/verify-phone");
        url.searchParams.set("tempToken", res.tempToken);
        url.searchParams.set("flow", "invite");
        if (invite?.id) url.searchParams.set("inviteId", invite.id);
        window.location.href = url.toString();
        return;
      }
      setError(res?.error || "Invalid code");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  // finalize after OAuth + phone verification — this page may receive tempToken in query
  async function finalizeInvite(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // we assume tempToken exists (from oauth callback or email flow)
      if (!tempToken) return setError("Missing temp token");
      const res = await postJSON(`/api/invites/finalize`, { tempToken, inviteId: invite?.id, password, name });
      if (res?.ok) {
        // redirect to login or dashboard
        window.location.href = "/";
      } else setError(res?.error || "Failed to finalize");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold mb-3">Accept invitation</h3>
      {loading && <div className="text-sm text-slate-600 mb-2">Validating...</div>}
      {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

      {invite && (
        <div className="mb-4 text-sm">
          <p>
            You were invited to <strong>{invite.organizationId}</strong> as <strong>{invite.role}</strong>. Continue to accept the invite.
          </p>
        </div>
      )}

      {mode === "choose" && (
        <div className="space-y-3">
          <button onClick={startGoogleAccept} className="w-full p-3 border rounded-lg flex items-center justify-center gap-3">
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
            Accept with Google
          </button>

          <div className="text-center text-sm text-slate-500">or</div>

          <form onSubmit={sendEmailOtp} className="space-y-3">
            <label className="block text-sm">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
            <div className="flex gap-2">
              <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">Send code</button>
            </div>
          </form>
        </div>
      )}

      {mode === "verifyEmail" && (
        <form onSubmit={verifyEmailOtp} className="space-y-3">
          <p className="text-sm text-slate-600">We sent a code to <strong>{email}</strong></p>
          <label className="block text-sm">Code</label>
          <input value={emailCode} onChange={(e) => setEmailCode(e.target.value)} className="w-full p-2 border rounded" />
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">Verify & continue</button>
            <button type="button" onClick={() => setMode("choose")} className="px-4 py-2 border rounded">Back</button>
          </div>
        </form>
      )}

      {mode === "oauth" && (
        <div>
          <p className="text-sm">Continue with OAuth flow. If you already completed phone verification, finalize below.</p>
          <form onSubmit={finalizeInvite} className="space-y-3 mt-3">
            <label className="block text-sm">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
            <label className="block text-sm">Password (optional)</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
            <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Finalize account</button>
          </form>
        </div>
      )}

      {mode === "finalize" && (
        <form onSubmit={finalizeInvite} className="space-y-3">
          <label className="block text-sm">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
          <label className="block text-sm">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">Create account</button>
            <a className="px-4 py-2 border rounded" href="/">Cancel</a>
          </div>
        </form>
      )}
    </div>
  );
}
