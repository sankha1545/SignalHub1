"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Polished Login Page for a customer engagement app.
 * - Responsive 2-column layout (marketing left, auth form right)
 * - Accessible inputs, ARIA live region for errors
 * - Password visibility toggle
 * - Google OAuth button (anchor to /api/auth/signin/google)
 * - Subtle animated gradient and micro-interactions
 *
 * Tailwind utility classes are used throughout. Adjust colors to match your brand.
 */

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (successMsg) {
      const t = setTimeout(() => setSuccessMsg(null), 3000);
      return () => clearTimeout(t);
    }
  }, [successMsg]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // basic client validation
    if (!email) return setError("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Please enter a valid email address.");
    if (!password) return setError("Please enter your password.");

    setBusy(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Login failed. Please try again.");
      } else {
        setSuccessMsg("Signed in — redirecting…");
        // tiny delay for UX, then navigate
        setTimeout(() => router.push("/dashboard"), 600);
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Check your connection.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Marketing / Brand panel */}
        <aside className="relative hidden lg:flex flex-col justify-center rounded-2xl overflow-hidden bg-gradient-to-tr from-sky-600 to-indigo-600 text-white p-10 shadow-xl">
          {/* decorative shapes */}
          <div className="absolute -right-24 -top-10 w-64 h-64 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute -left-28 -bottom-14 w-80 h-80 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                {/* simple chat icon */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">UnifyReach</h3>
                <p className="text-xs opacity-90">Customer engagement, simplified</p>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight mb-4">One inbox for every conversation</h2>
            <p className="max-w-md text-sm opacity-95 leading-relaxed mb-6">
              Centralize SMS, WhatsApp and Email. Collaborate with your team in real time, respond faster,
              and keep every contact conversation-ready.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded bg-white/10">
                  ✓
                </span>
                <span className="opacity-95">Unified threads & contact timeline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded bg-white/10">
                  ✓
                </span>
                <span className="opacity-95">Schedule messages & automations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded bg-white/10">
                  ✓
                </span>
                <span className="opacity-95">Team presence & collaborative notes</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 transition"
                href="/docs"
              >
                Learn more
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium hover:bg-white/12 transition"
                href="/pricing"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* small footer */}
          <div className="absolute bottom-6 left-6 text-xs opacity-80">
            <span>Secure • GDPR-ready • 99.9% uptime</span>
          </div>
        </aside>

        {/* Auth card */}
        <section className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 ring-1 ring-black/5 dark:ring-white/6">
            <header className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Welcome back</h1>
                  <p className="text-sm text-zinc-500 dark:text-zinc-300">Sign in to manage conversations & teams</p>
                </div>
                {/* subtle brand mark */}
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">UR</div>
                </div>
              </div>
            </header>

            {/* status messages */}
            <div aria-live="polite" className="min-h-[1.5rem]">
              {error && (
                <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}
              {successMsg && (
                <div className="mb-4 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
                  {successMsg}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>

              <label className="block relative">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</span>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-describedby="password-visibility"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    aria-pressed={showPwd}
                    aria-label={showPwd ? "Hide password" : "Show password"}
                    id="password-visibility"
                    className="inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {showPwd ? (
                      <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.58 10.58a3 3 0 0 0 4.24 4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200" viewBox="0 0 24 24" fill="none">
                        <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500"
                  />
                  Remember me
                </label>
                <a href="/auth/forgot" className="text-sm text-sky-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-md px-4 py-2 text-white font-semibold transition-colors disabled:opacity-60"
                style={{
                  background: "linear-gradient(90deg,#06b6d4,#7c3aed)", // teal -> indigo
                  boxShadow: "0 8px 20px rgba(124,58,237,0.12)",
                }}
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <div className="my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
              <div className="text-xs text-zinc-400">or continue with</div>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            </div>

            <div className="space-y-3">
              <a
                href="/api/auth/signin/google"
                className="flex items-center justify-center gap-3 w-full rounded-md border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              >
                {/* Google svg logo (inline) */}
                <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" aria-hidden>
                  <path fill="#4285f4" d="M533.5 278.4c0-18.4-1.6-36.1-4.7-53.4H272v101.2h146.9c-6.3 34-25 62.8-53.4 82v68.4h86.5c50.6-46.6 81.5-115.4 81.5-198.2z"/>
                  <path fill="#34a853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.6l-86.5-68.4c-24 16.1-54.9 25.6-91.7 25.6-70.6 0-130.3-47.6-151.6-111.6H34.7v69.8C79.2 485.7 168.6 544.3 272 544.3z"/>
                  <path fill="#fbbc04" d="M120.4 331.9c-10.9-32.9-10.9-68.2 0-101.1V161h-85.7C9.9 211.3 0 245.9 0 278.4c0 32.6 9.9 67.1 34.7 97.5l85.7-44z"/>
                  <path fill="#ea4335" d="M272 109.1c39.4 0 74.7 13.6 102.6 40.4l77-77C405.6 25 345.1 0 272 0 168.6 0 79.2 58.6 34.7 146.1l85.7 44.8C141.7 156.7 201.4 109.1 272 109.1z"/>
                </svg>
                <span className="text-sm font-medium">Continue with Google</span>
              </a>

              <a
                href="/auth/signup"
                className="block text-center text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
              >
                Create a new account
              </a>
            </div>

            <footer className="mt-6 text-xs text-zinc-400">
              By signing in you agree to our <a className="text-sky-600 hover:underline" href="/terms">Terms</a> and <a className="text-sky-600 hover:underline" href="/privacy">Privacy</a>.
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
