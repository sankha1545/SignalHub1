// File: app/(auth)/signup/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* ---------- types ---------- */
type ApiResp = { ok?: boolean; tempToken?: string; error?: string; reason?: string; [k: string]: any };
type Country = { name: string; cca2: string; callingCode: string; flag?: string };

/* ---------- helpers ---------- */
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

/* ---------- CountryDropdown component (searchable, accessible, responsive) ---------- */
function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function CountryDropdown({
  countries,
  value,
  onChange,
  disabled,
  placeholder = "Select country",
}: {
  countries: Country[] | null;
  value: Country | null;
  onChange: (c: Country | null) => void;
  disabled?: boolean;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useOnClickOutside(rootRef, () => setOpen(false));

  useEffect(() => {
    // reset highlight when query changes
    setHighlight(0);
  }, [query, open]);

  const items = (countries || []).filter((c) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.callingCode.includes(q) || c.cca2.toLowerCase().includes(q);
  });

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => searchRef.current?.focus(), 10);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(0, items.length - 1)));
      listRef.current?.querySelectorAll("li")[Math.min(highlight + 1, items.length - 1)]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
      listRef.current?.querySelectorAll("li")[Math.max(highlight - 1, 0)]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = items[Math.min(highlight, items.length - 1)];
      if (pick) {
        onChange(pick);
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (disabled) return;
          setOpen((v) => !v);
          setTimeout(() => searchRef.current?.focus(), 10);
        }}
        onKeyDown={handleKeyDown}
        className={`w-full text-left px-3 py-2 rounded border flex items-center gap-3 bg-white ${disabled ? "opacity-60 pointer-events-none" : "hover:shadow-sm"} transition`}
      >
        <div className="flex items-center gap-2">
          {value?.flag ? (
            <img src={value.flag} alt={`${value.name} flag`} className="w-5 h-4 object-cover rounded-sm shadow-sm" />
          ) : (
            <div className="w-5 h-4 bg-slate-100 rounded-sm" />
          )}
          <div className="text-sm">
            <div className="font-medium">{value ? value.name : <span className="text-slate-400">{placeholder}</span>}</div>
            <div className="text-xs text-slate-500">{value ? value.callingCode : "Select country code"}</div>
          </div>
        </div>
        <div className="ml-auto text-slate-400 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.355a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border overflow-hidden ${open ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"} transition-all duration-150`}
        style={{ minWidth: 260 }}
        role="dialog"
        aria-modal="false"
      >
        <div className="p-2">
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search country name or code (e.g. India, +91, IN)"
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 rounded border focus:ring-2 focus:ring-indigo-300 outline-none"
            aria-label="Search country"
          />
        </div>

        <div className="max-h-56 overflow-auto">
          <ul role="listbox" ref={listRef} aria-label="Country options" className="divide-y">
            {items.length === 0 ? (
              <li className="px-4 py-3 text-sm text-slate-500">No matches</li>
            ) : (
              items.map((c, idx) => {
                const isActive = idx === highlight;
                return (
                  <li
                    key={`${c.callingCode}-${c.cca2}`}
                    role="option"
                    aria-selected={value?.callingCode === c.callingCode && value?.cca2 === c.cca2}
                    onMouseEnter={() => setHighlight(idx)}
                    onClick={() => {
                      onChange(c);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-50 ${isActive ? "bg-indigo-50" : ""}`}
                  >
                    <img src={c.flag} alt={`${c.name} flag`} className="w-5 h-4 object-cover rounded-sm shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{c.name}</div>
                      <div className="text-xs text-slate-500">{c.callingCode} • {c.cca2}</div>
                    </div>
                    <div className="text-sm text-slate-600">{value?.callingCode === c.callingCode && value?.cca2 === c.cca2 ? "Selected" : ""}</div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- component: SignupPage ---------- */
export default function SignupPage(): JSX.Element {
  const router = useRouter();

  // Mode / flow
  type Mode = "choose" | "email" | "verifyEmail" | "phone" | "verifyPhone" | "org" | "done";
  const [mode, setMode] = useState<Mode>("choose");

  // Fields
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState(Array(6).fill(""));
  const [emailCode, setEmailCode] = useState("");
  const [tempToken, setTempToken] = useState<string | null>(null);

  const [country, setCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState<string | null>(null);

  const [phone, setPhone] = useState("");
  const [phoneOtp, setPhoneOtp] = useState(Array(6).fill(""));
  const [phoneCode, setPhoneCode] = useState("");

  const [orgName, setOrgName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  // password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // password validation UI
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Resend timers
  const [emailResendAvailableAt, setEmailResendAvailableAt] = useState<number | null>(null);
  const [phoneResendAvailableAt, setPhoneResendAvailableAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // computed step 1..4
  function modeToStep(m: Mode) {
    switch (m) {
      case "choose":
        return 1;
      case "email":
      case "verifyEmail":
        return 2;
      case "phone":
      case "verifyPhone":
        return 3;
      case "org":
      case "done":
        return 4;
      default:
        return 1;
    }
  }
  const step = modeToStep(mode);

  /* ---------- COUNTRY FETCH (calls your proxy /api/countries) ---------- */
  useEffect(() => {
    let mounted = true;
    (async function fetchCountries() {
      setCountryLoading(true);
      setCountryError(null);
      try {
        const res = await fetch("/api/countries");
        if (!res.ok) {
          const t = await res.text().catch(() => "");
          throw new Error(`Failed to fetch /api/countries: ${res.status} ${t}`);
        }
        const json = await res.json();

        if (!mounted) return;
        if (!Array.isArray(json) || json.length === 0) throw new Error("No countries returned");

        // Normalise if needed (proxy already returns normalized objects but we keep resilience)
        const parsed: Country[] = json.map((c: any) => ({
          name: c.name || c.common || "Unknown",
          cca2: (c.cca2 || c.CCA2 || "").toUpperCase(),
          callingCode: String(c.callingCode || c.dialCode || c.callCode || "").trim(),
          flag: c.flag || c.flags || "",
        }))
        .filter((c) => c.callingCode && c.name)
        .sort((a,b) => a.name.localeCompare(b.name));

        if (parsed.length === 0) throw new Error("No countries with calling codes returned");
        setCountries(parsed);

        // sensible default: try locale -> +91 -> +1 -> first
        const locale = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
        const match = locale.match(/-([a-z]{2})$/i);
        let defaultCountry: Country | null = null;
        if (match) {
          const cca = match[1].toUpperCase();
          defaultCountry = parsed.find((c) => c.cca2 === cca) || null;
        }
        if (!defaultCountry) defaultCountry = parsed.find((c) => c.callingCode === "+91") || parsed.find((c) => c.callingCode === "+1") || parsed[0] || null;
        setCountry(defaultCountry);
      } catch (err: any) {
        if (!mounted) return;
        console.error("Country fetch error:", err);
        setCountries(null);
        setCountryError(String(err?.message || err));
      } finally {
        if (mounted) setCountryLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // helpers: countdown formatter
  function formatCountdown(unixMs: number | null) {
    if (!unixMs) return null;
    const s = Math.max(0, Math.ceil((unixMs - now) / 1000));
    if (s <= 0) return null;
    return `${s}s`;
  }
  function setResendDeadline(setter: (v: number | null) => void, seconds = 30) {
    setter(Date.now() + seconds * 1000);
  }

  // ---------- OTP utilities (unchanged) ----------
  function handleOtpInput(e: React.KeyboardEvent<HTMLInputElement>, idx: number, otpArr: string[], setOtpArr: (a: string[]) => void) {
    const target = e.target as HTMLInputElement;
    const key = e.key;
    if (key === "Backspace") {
      e.preventDefault();
      const next = [...otpArr];
      if (next[idx]) {
        next[idx] = "";
        setOtpArr(next);
      } else {
        const prev = Math.max(0, idx - 1);
        const prevInput = document.getElementById(`otp-${target.dataset.for}-${prev}`) as HTMLInputElement | null;
        if (prevInput) {
          prevInput.focus();
          const n = [...otpArr];
          n[prev] = "";
          setOtpArr(n);
        }
      }
    } else if (/^[0-9]$/.test(key)) {
      e.preventDefault();
      const next = [...otpArr];
      next[idx] = key;
      setOtpArr(next);
      const nextIdx = Math.min(next.length - 1, idx + 1);
      const nextInput = document.getElementById(`otp-${target.dataset.for}-${nextIdx}`) as HTMLInputElement | null;
      if (nextInput) nextInput.focus();
    } else if (key === "ArrowLeft") {
      e.preventDefault();
      const prev = Math.max(0, idx - 1);
      const prevInput = document.getElementById(`otp-${target.dataset.for}-${prev}`) as HTMLInputElement | null;
      prevInput?.focus();
    } else if (key === "ArrowRight") {
      e.preventDefault();
      const nxt = Math.min(otpArr.length - 1, idx + 1);
      const nextInput = document.getElementById(`otp-${target.dataset.for}-${nxt}`) as HTMLInputElement | null;
      nextInput?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent<HTMLInputElement>, otpArr: string[], setOtpArr: (a: string[]) => void) {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    const digits = paste.replace(/\D/g, "").slice(0, otpArr.length).split("");
    if (digits.length === 0) return;
    const next = [...otpArr];
    for (let i = 0; i < digits.length; i++) next[i] = digits[i];
    setOtpArr(next);
    const firstEmpty = next.findIndex((c) => !c);
    const focusIdx = firstEmpty === -1 ? next.length - 1 : firstEmpty;
    const el = document.getElementById(`otp-${(e.target as HTMLInputElement).dataset.for}-${focusIdx}`) as HTMLInputElement | null;
    el?.focus();
  }

  useEffect(() => setEmailCode(emailOtp.join("")), [emailOtp]);
  useEffect(() => setPhoneCode(phoneOtp.join("")), [phoneOtp]);

  // ---------- PASSWORD VALIDATION ----------

function validatePassword(pw: string): string[] {
  const errs: string[] = [];
  if (!pw || pw.length < 8) errs.push("Password must be at least 8 characters.");
  if (!/[A-Z]/.test(pw)) errs.push("Include at least one uppercase letter.");
  if (!/[a-z]/.test(pw)) errs.push("Include at least one lowercase letter.");
  if (!/[0-9]/.test(pw)) errs.push("Include at least one number.");
  if (!/[^A-Za-z0-9]/.test(pw)) errs.push("Include at least one symbol (e.g. !@#$%).");
  return errs;
}

  useEffect(() => {
    // run validation as user types
    const errs = validatePassword(password);
    setPasswordErrors(errs);
    setPasswordsMatch(password === confirmPassword || confirmPassword.length === 0);
  }, [password, confirmPassword]);

  // ---------- API actions (unchanged behaviour, except finalize uses collected profile data) ----------
  async function handleSendEmailOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/email/send", { email });
      if (data?.ok) {
        setMode("verifyEmail");
        setResendDeadline(setEmailResendAvailableAt, 45);
        setEmailOtp(Array(6).fill(""));
        setTimeout(() => document.getElementById("otp-email-0")?.focus(), 120);
      } else setError(data?.error || "Failed to send OTP. Try again.");
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyEmailOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (emailCode.length < 4) {
      setError("Enter the full code you received by email.");
      return;
    }
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/email/verify", { email, code: emailCode, flow: "signup" });
      if (data?.ok && data?.tempToken) {
        setTempToken(data.tempToken);
        setMode("phone");
      } else setError(data?.error || data?.reason || "Invalid or expired code.");
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleSendPhoneOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    const dial = country?.callingCode ?? "";
    const typed = phone.trim();
    const full = typed.startsWith("+") ? typed : `${dial}${typed.replace(/\D/g, "")}`;
    if (!/^\+?[0-9]{7,20}$/.test(full)) {
      setError("Please enter a valid phone number including country code (or select country).");
      return;
    }
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/phone/send", { phone: full });
      if (data?.ok) {
        setMode("verifyPhone");
        setResendDeadline(setPhoneResendAvailableAt, 45);
        setPhoneOtp(Array(6).fill(""));
        setTimeout(() => document.getElementById("otp-phone-0")?.focus(), 120);
      } else setError(data?.error || "Failed to send SMS OTP.");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyPhoneOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (phoneCode.length < 4) {
      setError("Enter the full SMS code you received.");
      return;
    }
    setLoading(true);
    try {
      const dial = country?.callingCode ?? "";
      const typed = phone.trim();
      const full = typed.startsWith("+") ? typed : `${dial}${typed.replace(/\D/g, "")}`;

      const res = await postJSON("/api/auth/phone/verify", { phone: full, code: phoneCode, tempToken });
      if (res?.ok && res?.tempToken) {
        setTempToken(res.tempToken);
        setMode("org");
      } else setError(res?.reason || res?.error || "Phone verification failed.");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

 function buildFullPhone(typed: string | undefined, country?: { callingCode?: string }) {
  if (!typed) return null;
  const raw = typed.trim();
  if (raw.startsWith("+")) {
    // keep plus and digits only
    const digits = raw.replace(/[^\d+]/g, "");
    return digits;
  }
  const cc = country?.callingCode ?? "";
  const onlyDigits = raw.replace(/\D/g, "");
  if (!cc && !onlyDigits) return null;
  // if calling code doesn't start with +, ensure it does
  const normalizedCc = cc.startsWith("+") ? cc : cc ? `+${cc}` : "";
  return `${normalizedCc}${onlyDigits}`;
}

// Replace your handleFinalize with this (in src/app/(auth)/signup/page.tsx)
async function handleFinalize(e?: React.FormEvent) {
  e?.preventDefault();
  setError(null);

  // client-side validations (password policy + confirm)
  setPasswordTouched(true);
  const errs = validatePassword(password); // keep your validatePassword helper
  if (errs.length > 0) {
    setPasswordErrors(errs);
    setError("Please fix the password requirements.");
    return;
  }
  if (password !== confirmPassword) {
    setPasswordsMatch(false);
    setError("Passwords do not match.");
    return;
  }
  if (!orgName?.trim()) {
    setError("Organization name is required.");
    return;
  }
  if (!name?.trim()) {
    setError("Your name is required.");
    return;
  }

  // build normalized phone if present (you already had this helper)
  const normalizedPhone =
    phone && (phone.startsWith("+") ? phone : `${country?.callingCode ?? ""}${phone.replace(/\D/g, "")}`);

  const payload: Record<string, any> = {
    tempToken,
    organizationName: orgName.trim(),
    password,
    name: name.trim(),
  };
  if (email) payload.email = email;
  if (normalizedPhone) payload.phone = normalizedPhone;
  if (country) payload.country = { name: country.name, cca2: country.cca2, callingCode: country.callingCode };

  setLoading(true);
  try {
    const res = await postJSON("/api/auth/signup/finalize", payload);

    if (res?.ok) {
      // Server set HttpOnly cookie for session; now redirect to account/dashboard
      setSuccess("Account created — signing you in...");
      setMode("done");

      // small delay so success is visible
      setTimeout(() => {
        // send user to their account landing (account page will fetch /api/me)
        router.push("/account");
      }, 700);
    } else {
      // server returned ok: false or error
      setError(res?.error || res?.reason || "Failed to finalize signup.");
    }
  } catch (err: any) {
    setError(String(err) || "Unexpected error");
  } finally {
    setLoading(false);
  }
}


  async function handleResendEmail() {
    if (emailResendAvailableAt && emailResendAvailableAt > Date.now()) return;
    setError(null);
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/email/send", { email, resend: true });
      if (data?.ok) setResendDeadline(setEmailResendAvailableAt, 45);
      else setError(data?.error || "Unable to resend OTP.");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleResendPhone() {
    if (phoneResendAvailableAt && phoneResendAvailableAt > Date.now()) return;
    setError(null);
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/phone/send", { phone, resend: true });
      if (data?.ok) setResendDeadline(setPhoneResendAvailableAt, 45);
      else setError(data?.error || "Unable to resend SMS OTP.");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  // compute fill percent (0..100) like before for smooth bar animation
  function computeFillPercent() {
    const s = step;
    if (s <= 1) return 0;
    return Math.round(((s - 1) / 3) * 100);
  }
  const fillPercent = computeFillPercent();

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ring-1 ring-slate-100">
        {/* LEFT: form/card */}
        <div className="p-8 md:p-12 flex items-start">
          <div className="w-full max-w-md mx-auto">
            {/* header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-xl">U</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Welcome to SignalHub</h1>
                <p className="text-sm text-slate-500 mt-1">Create an admin account and organization — secure by default.</p>
              </div>
            </div>

            {/* Progress area */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-6 right-6 top-6 h-0.5 bg-slate-100 rounded" />
                <div
                  className="absolute left-6 top-6 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-500 ease-out"
                  style={{ width: `${fillPercent}%` }}
                />
                <div className="relative flex items-center justify-between">
                  {[1, 2, 3, 4].map((n) => {
                    const isActive = n === step;
                    const isCompleted = n < step;
                    return (
                      <div key={n} className="flex-1 flex flex-col items-center text-center px-1">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                            isCompleted ? "bg-indigo-600 text-white shadow-2xl scale-105" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 animate-pulse" : "bg-white border border-slate-200 text-slate-600"
                          }`}
                        >
                          {n}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-2">{["Choose", "Email", "Phone", "Org"][n - 1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* status */}
            <div role="status" aria-live="polite" className="min-h-[1.4rem] mb-4">
              {error && <div className="text-sm text-red-600">{error}</div>}
              {success && <div className="text-sm text-emerald-600">{success}</div>}
            </div>

            {/* Forms depending on mode */}
            <div>
              {/* CHOOSE */}
              {mode === "choose" && (
                <div className="space-y-4">
                  <button onClick={() => (window.location.href = "/api/auth/oauth/google/start?flow=signup")} className="w-full p-3 border rounded-lg flex items-center gap-3 justify-center hover:shadow-lg transition">
                    <img src="/google.png" alt="Google" className="w-7 h-7" />
                    <span className="text-sm font-medium text-slate-700">Continue with Google</span>
                  </button>

                  <div className="text-center text-sm text-slate-400">or</div>

                  <button onClick={() => setMode("email")} className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
                    Sign up with Email
                  </button>
                  <div><span>Already have an account? <a className="text-blue-700 -underline-offset-1" href="/login">Login</a></span></div>
                </div>
              )}

              {/* EMAIL - send */}
              {mode === "email" && (
                <form onSubmit={handleSendEmailOtp} className="space-y-3" noValidate>
                  <label className="block text-sm font-medium text-slate-600">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-indigo-100 p-3 border rounded focus:ring-2 focus:ring-indigo-300 focus:outline-none border-none" placeholder="you@example.com" type="email" />
                  <div className="flex gap-3">
                    <button type="submit" disabled={loading} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">
                      {loading ? "Sending..." : "Send code"}
                    </button>
                    <button type="button" onClick={() => setMode("choose")} className="px-4 py-2 border rounded">
                      Back
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">A one-time code will be sent to verify your email.</p>
                </form>
              )}

              {/* EMAIL - verify (otp boxes) */}
              {mode === "verifyEmail" && (
                <form onSubmit={handleVerifyEmailOtp} className="space-y-3" noValidate>
                  <p className="text-sm text-slate-600">Enter the code sent to <strong>{email}</strong></p>

                  <label className="block text-sm font-medium text-slate-600">Code</label>
                  <div className="flex gap-2">
                    {emailOtp.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-email-${i}`}
                        data-for="email"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onPaste={(e) => handleOtpPaste(e, emailOtp, setEmailOtp)}
                        onKeyDown={(e) => handleOtpInput(e, i, emailOtp, setEmailOtp)}
                        onChange={() => {}}
                        aria-label={`Email code digit ${i + 1}`}
                        className="w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button type="submit" disabled={loading} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">
                      {loading ? "Verifying..." : "Verify"}
                    </button>
                    <button type="button" onClick={() => setMode("email")} className="px-4 py-2 border rounded">
                      Back
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div>
                      {formatCountdown(emailResendAvailableAt) ? (
                        <span>Resend in {formatCountdown(emailResendAvailableAt)}</span>
                      ) : (
                        <button type="button" onClick={handleResendEmail} className="underline text-indigo-600">
                          Resend code
                        </button>
                      )}
                    </div>
                    <div className="text-right">Didn't receive? Check spam.</div>
                  </div>
                </form>
              )}

              {/* PHONE - send (country select + number) */}
              {mode === "phone" && (
                <form onSubmit={handleSendPhoneOtp} className="space-y-3" noValidate>
                  <label className="block text-sm font-medium text-slate-600">Phone</label>

                  {/* Country dropdown + phone input */}
                  <div className="flex gap-2 items-start">
                    <div className="w-44">
                      {/* CountryDropdown component */}
                      <CountryDropdown
                        countries={countries}
                        value={country}
                        onChange={(c) => setCountry(c)}
                        disabled={countryLoading || !!countryError}
                        placeholder={countryLoading ? "Loading countries..." : countryError ? "Unavailable" : "Select country"}
                      />
                      {/* small helper */}
                      <div className="text-xs text-slate-400 mt-2">
                        {countryLoading ? "Loading dial codes..." : countryError ? <span className="text-red-500">Unable to load list</span> : "Select country code"}
                      </div>
                    </div>

                    {/* phone input */}
                    <div className="flex-1">
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 border rounded bg-slate-50 text-sm">
                          <span className="mr-2">{country?.flag ? <img src={country.flag} alt={country.name} className="w-5 h-4 object-cover inline-block" /> : null}</span>
                          <span className="font-medium">{country?.callingCode ?? "+"}</span>
                        </div>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={country ? `${country.callingCode} 98765 43210` : "98765 43210"}
                          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-300 border-none bg-indigo-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="submit" disabled={loading} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">
                      {loading ? "Sending..." : "Send SMS"}
                    </button>
                    <button type="button" onClick={() => setMode("verifyEmail")} className="px-4 py-2 border rounded">
                      Back
                    </button>
                  </div>

                  <p className="text-xs text-slate-400">Standard SMS rates may apply.</p>
                </form>
              )}

              {/* PHONE - verify (otp boxes) */}
              {mode === "verifyPhone" && (
                <form onSubmit={handleVerifyPhoneOtp} className="space-y-3" noValidate>
                  <p className="text-sm text-slate-600">Enter the SMS code sent to <strong>{country?.callingCode ?? ""} {phone}</strong></p>

                  <label className="block text-sm font-medium text-slate-600">SMS Code</label>
                  <div className="flex gap-2">
                    {phoneOtp.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-phone-${i}`}
                        data-for="phone"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onPaste={(e) => handleOtpPaste(e, phoneOtp, setPhoneOtp)}
                        onKeyDown={(e) => handleOtpInput(e, i, phoneOtp, setPhoneOtp)}
                        onChange={() => {}}
                        aria-label={`Phone code digit ${i + 1}`}
                        className="w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button type="submit" disabled={loading} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">
                      {loading ? "Verifying..." : "Verify"}
                    </button>
                    <button type="button" onClick={() => setMode("phone")} className="px-4 py-2 border rounded">
                      Back
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div>
                      {formatCountdown(phoneResendAvailableAt) ? (
                        <span>Resend in {formatCountdown(phoneResendAvailableAt)}</span>
                      ) : (
                        <button type="button" onClick={handleResendPhone} className="underline text-indigo-600">
                          Resend SMS
                        </button>
                      )}
                    </div>
                    <div>Contact support if you don't receive SMS.</div>
                  </div>
                </form>
              )}

              {/* ORG finalize */}
              {mode === "org" && (
                <form onSubmit={handleFinalize} className="space-y-4" noValidate>
                  <label className="block text-sm font-medium text-slate-600">Organization name</label>
                  <input value={orgName} placeholder="Enter the name" onChange={(e) => setOrgName(e.target.value)} className="w-full bg-indigo-50 border-none p-3 border rounded focus:ring-2 focus:ring-indigo-300" />

                  <label className="block text-sm font-medium text-slate-600">Your name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border-none border rounded focus:ring-2 focus:ring-indigo-300" />

                  {/* PASSWORD (now mandatory) */}
                  <label className="block  text-sm font-medium text-slate-600">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPasswordTouched(true);
                        setPassword(e.target.value);
                      }}
                      onBlur={() => setPasswordTouched(true)}
                      placeholder="Create a strong password"
                      className={`w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 border-none bg-indigo-50`}
                      aria-required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M9.5 9.5a3 3 0 104.001 4.001M12 5c4.97 0 9 4.03 9 7s-4.03 7-9 7c-1.26 0-2.45-.22-3.56-.62" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 5c-4.97 0-9 4.03-9 7s4.03 7 9 7 9-4.03 9-7-4.03-7-9-7z" />
                          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <label className="block text-sm font-medium text-slate-600">Retype password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() => setPasswordTouched(true)}
                      placeholder="Retype password"
                      className={`w-full p-3 border-none bg-indigo-50 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 ${passwordTouched && !passwordsMatch ? "border-red-400" : ""}`}
                      aria-required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100"
                    >
                      {showConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M9.5 9.5a3 3 0 104.001 4.001M12 5c4.97 0 9 4.03 9 7s-4.03 7-9 7c-1.26 0-2.45-.22-3.56-.62" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 5c-4.97 0-9 4.03-9 7s4.03 7 9 7 9-4.03 9-7-4.03-7-9-7z" />
                          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Password requirements UI */}
                  <div className="text-xs text-slate-500 mt-2">
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
                          {r.ok ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zm0 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4 10a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm10 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" />
                            </svg>
                          )}
                          <span className={`${r.ok ? "text-slate-700" : "text-slate-400"}`}>{r.label}</span>
                        </li>
                      ))}
                    </ul>
                    {!passwordsMatch && confirmPassword.length > 0 && (
                      <div className="mt-2 text-sm text-red-600">Passwords do not match.</div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-3">
                    <button
                      disabled={loading}
                      className={`flex-1 px-4 py-2 bg-indigo-600 text-white rounded shadow ${loading ? "opacity-70" : "hover:brightness-95"}`}
                      type="submit"
                    >
                      {loading ? "Creating..." : "Create organization"}
                    </button>
                    <button type="button" onClick={() => setMode("phone")} className="px-4 py-2 border rounded">
                      Back
                    </button>
                  </div>
                </form>
              )}

              {/* DONE */}
              {mode === "done" && (
                <div className="text-center py-6">
                  <h3 className="text-lg font-semibold text-emerald-700">Success</h3>
                  <p className="text-sm text-slate-600 mt-2">{success || "Your organization has been created."}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: hero/illustration */}
        <div className="hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300">
          <img src="/signup-hero.jpg" alt="Signup hero" className="w-full h-full object-cover min-h-[640px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* small footer */}
     
    </div>
  );
}
