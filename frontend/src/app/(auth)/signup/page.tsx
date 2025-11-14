// File: app/(auth)/signup/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* ---------- types ---------- */
type ApiResp = { ok?: boolean; tempToken?: string; sessionToken?: string; activated?: boolean; error?: string; reason?: string; [k: string]: any };
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

/* ---------- CountryDropdown component ---------- */
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
    setHighlight(0);
  }, [query, open]);

  const items = (countries || []).filter((c) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return c.name.toLowerCase().includes(q) || (c.callingCode || "").includes(q) || (c.cca2 || "").toLowerCase().includes(q);
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
      const nextIdx = Math.min(highlight + 1, items.length - 1);
      listRef.current?.querySelectorAll("li")[nextIdx]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
      const prevIdx = Math.max(highlight - 1, 0);
      listRef.current?.querySelectorAll("li")[prevIdx]?.scrollIntoView({ block: "nearest" });
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
    <div className="relative w-full" ref={rootRef}>
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
        <div className="flex items-center gap-3 min-w-0">
          {value?.flag ? (
            <img src={value.flag} alt={`${value.name} flag`} className="w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0" />
          ) : (
            <div className="w-6 h-4 bg-slate-100 rounded-sm flex-shrink-0" />
          )}
          <div className="truncate">
            <div className="font-medium text-sm truncate">{value ? value.name : <span className="text-slate-400">{placeholder}</span>}</div>
            <div className="text-xs text-slate-500 truncate">{value ? value.callingCode : "Select country code"}</div>
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
        className={`absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border overflow-hidden transform transition-all duration-150 ${open ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"}`}
        role="dialog"
        aria-modal="false"
      >
        <div className="p-2">
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search country name, code, or dial (+91)"
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 rounded border focus:ring-2 focus:ring-indigo-300 outline-none text-sm"
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
                    key={`${c.callingCode}-${c.cca2}-${c.name}`}
                    role="option"
                    aria-selected={value?.callingCode === c.callingCode && value?.cca2 === c.cca2}
                    onMouseEnter={() => setHighlight(idx)}
                    onClick={() => {
                      onChange(c);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-50 ${isActive ? "bg-indigo-50" : ""}`}
                  >
                    {c.flag ? <img src={c.flag} alt={`${c.name} flag`} className="w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0" /> : <div className="w-6 h-4 bg-slate-100 rounded-sm flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{c.name}</div>
                      <div className="text-xs text-slate-500 truncate">{c.callingCode} • {c.cca2}</div>
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

/* ---------- Signup page component ---------- */
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
const [now, setNow] = useState<number>(0); // stable on server
useEffect(() => {
  setNow(Date.now()); // now real client time
  const id = window.setInterval(() => setNow(Date.now()), 1000);
  return () => window.clearInterval(id);
}, []);


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

  /* ---------- Country fetch (robust) ---------- */

  const BUILT_IN_FALLBACK: Country[] = [
    { name: "India", cca2: "IN", callingCode: "+91", flag: "https://flagcdn.com/w40/in.png" },
    { name: "United States", cca2: "US", callingCode: "+1", flag: "https://flagcdn.com/w40/us.png" },
    { name: "United Kingdom", cca2: "GB", callingCode: "+44", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Canada", cca2: "CA", callingCode: "+1", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "Australia", cca2: "AU", callingCode: "+61", flag: "https://flagcdn.com/w40/au.png" },
  ];

  function normalizeCallingCode(raw: any): string {
    try {
      if (!raw) return "";
      if (typeof raw === "string") {
        const s = raw.trim();
        if (!s) return "";
        if (s.startsWith("+")) return s;
        const digits = s.replace(/[^\d]/g, "");
        return digits ? `+${digits}` : "";
      }
      if (Array.isArray(raw) && raw.length > 0) return normalizeCallingCode(raw[0]);
      if (typeof raw === "object") {
        if (raw.root) {
          const root = String(raw.root || "").trim();
          const suffix = Array.isArray(raw.suffixes) && raw.suffixes.length > 0 ? String(raw.suffixes[0]) : "";
          const combined = `${root}${suffix}`;
          return combined.startsWith("+") ? combined : combined ? `+${combined.replace(/[^\d+]/g, "")}` : "";
        }
        if (raw.callingCodes && Array.isArray(raw.callingCodes) && raw.callingCodes[0]) {
          return normalizeCallingCode(raw.callingCodes[0]);
        }
      }
      return "";
    } catch {
      return "";
    }
  }

  function extractFlag(raw: any, cca2?: string) {
    try {
      if (!raw) return cca2 ? `https://flagcdn.com/w40/${cca2.toLowerCase()}.png` : undefined;
      if (raw.flag) return raw.flag;
      if (raw.flags) {
        if (typeof raw.flags === "string") return raw.flags;
        if (raw.flags.svg) return raw.flags.svg;
        if (raw.flags.png) return raw.flags.png;
      }
      if (raw.emoji) return raw.emoji;
    } catch {}
    return cca2 ? `https://flagcdn.com/w40/${(cca2 || "").toLowerCase()}.png` : undefined;
  }

  useEffect(() => {
    let mounted = true;
    (async function loadCountries() {
      setCountryLoading(true);
      setCountryError(null);

      try {
        const res = await fetch("/api/countries", { cache: "no-store" }).catch(() => null);
        let rawList: any[] | null = null;

        if (res && res.ok) {
          const text = await res.text().catch(() => "");
          let json: any = null;
          try {
            json = text ? JSON.parse(text) : null;
          } catch {
            json = null;
          }

          if (Array.isArray(json)) rawList = json;
          else if (json && Array.isArray(json.countries)) rawList = json.countries;
          else if (json && Array.isArray(json.data)) rawList = json.data;
        }

        // fallback to /api/meta/countries if /api/countries yields nothing
        if ((!rawList || rawList.length === 0)) {
          try {
            const mres = await fetch("/api/meta/countries", { cache: "no-store" }).catch(() => null);
            if (mres && mres.ok) {
              const mjson = await mres.json().catch(() => null);
              if (Array.isArray(mjson)) rawList = mjson;
              else if (mjson && Array.isArray(mjson.countries)) rawList = mjson.countries;
            }
          } catch (e) {
            // ignore
          }
        }

        // Map to Country shape
        let parsed: Country[] = [];
        if (Array.isArray(rawList) && rawList.length > 0) {
          parsed = rawList
            .map((c: any) => {
              const cca2 = (c.cca2 || c.code || c.CCA2 || "").toString().toUpperCase();
              const name = (typeof c.name === "string" ? c.name : (c.name && (c.name.common || c.name.official)) || c.common || c.country || c.name) || "";
              const callingCode = String(c.callingCode || c.dialCode || c.callCode || c.phoneCode || normalizeCallingCode(c.callingCodes) || normalizeCallingCode(c.idd) || "").trim() || "";
              const callingCodeNormalized = callingCode ? (callingCode.startsWith("+") ? callingCode : `+${callingCode.replace(/[^\d]/g, "")}`) : "";
              const flag = extractFlag(c, cca2);
              return {
                name: name || (cca2 || ""),
                cca2: cca2 || (name ? name.slice(0, 2).toUpperCase() : ""),
                callingCode: callingCodeNormalized,
                flag,
              } as Country;
            })
            .filter((c: Country) => c.name && (c.callingCode || c.cca2));

          // dedupe
          const seen = new Map<string, Country>();
          for (const it of parsed) {
            const key = (it.cca2 || it.callingCode || it.name).toUpperCase();
            if (!seen.has(key)) seen.set(key, it);
          }
          parsed = Array.from(seen.values()).sort((a, b) => a.name.localeCompare(b.name));
        }

        // final fallback
        if (!Array.isArray(parsed) || parsed.length === 0) {
          parsed = BUILT_IN_FALLBACK;
          setCountryError("Country list unavailable — using fallback. You can type your country manually.");
        } else {
          setCountryError(null);
        }

        if (!mounted) return;
        setCountries(parsed);

        // pick default by locale -> +91 -> +1 -> first
        const locale = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
        const match = locale.match(/-([a-z]{2})$/i);
        let defaultCountry: Country | null = null;
        if (match) {
          const cca = match[1].toUpperCase();
          defaultCountry = parsed.find((c) => c.cca2 === cca) || null;
        }
        if (!defaultCountry) defaultCountry = parsed.find((c) => c.callingCode === "+91") || parsed.find((c) => c.callingCode === "+1") || parsed[0] || null;
        if (mounted) setCountry(defaultCountry);
      } catch (err: any) {
        if (!mounted) return;
        setCountries(BUILT_IN_FALLBACK);
        setCountryError(String(err?.message || err) || "Failed to load countries");
      } finally {
        if (mounted) setCountryLoading(false);
      }
    })();

    return () => {
      // cleanup
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (mounted = false);
    };
  }, []);

  // When user selects a country, ensure the prefix shows up in UI and assist placeholder
  useEffect(() => {
    if (!country) return;
    // If phone is empty, prefill placeholder hint by setting phone to empty (placeholder uses country in UI)
    // We avoid modifying a non-empty phone typed by user.
    // This effect merely ensures UI shows prefix; logic to send uses buildFullPhone.
  }, [country]);

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

  // OTP utils
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

  // password validation
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
    const errs = validatePassword(password);
    setPasswordErrors(errs);
    setPasswordsMatch(password === confirmPassword || confirmPassword.length === 0);
  }, [password, confirmPassword]);

  // API actions
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
      setError("Enter the full code received by email.");
      return;
    }
    setLoading(true);
    try {
      const data = await postJSON("/api/auth/email/verify", { email, code: emailCode, flow: "signup" });
      if (data?.ok) {
        if (data.activated && data.sessionToken) {
          setSuccess("Email verified — signing you in...");
          setTimeout(() => router.push("/account"), 700);
          return;
        }
        if (data.tempToken) {
          setTempToken(data.tempToken);
          setMode("phone");
          setResendDeadline(setPhoneResendAvailableAt, 45);
          setPhoneOtp(Array(6).fill(""));
          setTimeout(() => document.getElementById("otp-phone-0")?.focus(), 120);
          return;
        }
        setMode("phone");
        setTempToken(data.tempToken ?? null);
      } else {
        setError(data?.error || data?.reason || "Invalid or expired code.");
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleSendPhoneOtp(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    const full = buildFullPhone(phone, country);
    if (!full || !/^\+?[0-9]{7,20}$/.test(full)) {
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
      } else {
        // If Twilio trial fallback returns ok but with flags, handle it
        if (data?.twilioTrialUnverified || data?.devOtpLogged) {
          // treat as ok for dev/test
          setMode("verifyPhone");
          setResendDeadline(setPhoneResendAvailableAt, 45);
          setPhoneOtp(Array(6).fill(""));
          setTimeout(() => document.getElementById("otp-phone-0")?.focus(), 120);
          return;
        }
        setError(data?.error || "Failed to send SMS OTP.");
      }
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
      const full = buildFullPhone(phone, country);
      const res = await postJSON("/api/auth/phone/verify", { phone: full, code: phoneCode, tempToken });
      if (res?.ok) {
        if (res.activated && res.sessionToken) {
          setSuccess("Phone verified — signing you in...");
          setTimeout(() => router.push("/account"), 700);
          return;
        }
        if (res.tempToken) {
          setTempToken(res.tempToken);
          setMode("org");
          return;
        }
        setMode("org");
      } else {
        setError(res?.reason || res?.error || "Phone verification failed.");
      }
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
      const digits = raw.replace(/[^\d+]/g, "");
      return digits;
    }
    const cc = country?.callingCode ?? "";
    const onlyDigits = raw.replace(/\D/g, "");
    if (!cc && !onlyDigits) return null;
    const normalizedCc = cc.startsWith("+") ? cc : cc ? `+${cc.replace(/[^\d]/g, "")}` : "";
    return `${normalizedCc}${onlyDigits}`;
  }

  async function handleFinalize(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    setPasswordTouched(true);
    const errs = validatePassword(password);
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

    const normalizedPhone = buildFullPhone(phone, country);

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
        setSuccess("Account created — signing you in...");
        setMode("done");
        setTimeout(() => router.push("/account"), 700);
        return;
      }

      if (res?.activated === false && res?.tempToken) {
        setTempToken(res.tempToken);
        setError("Account created but not yet activated. Please complete verification.");
        setMode(res.tempToken ? "org" : "verifyEmail");
        return;
      }

      setError(res?.error || res?.reason || "Failed to finalize signup.");
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
      const full = buildFullPhone(phone, country);
      const data = await postJSON("/api/auth/phone/send", { phone: full, resend: true });
      if (data?.ok) setResendDeadline(setPhoneResendAvailableAt, 45);
      else setError(data?.error || "Unable to resend SMS OTP.");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  // compute fill percent (0..100)
  function computeFillPercent() {
    const s = step;
    if (s <= 1) return 0;
    return Math.round(((s - 1) / 3) * 100);
  }
  const fillPercent = computeFillPercent();

  /* ---------- UI (responsive & accessible) ---------- */
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-7xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ring-1 ring-slate-100">
        {/* LEFT: form/card */}
        <div className="p-6 sm:p-10 flex items-start">
          <div className="w-full max-w-md mx-auto">
            {/* header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-xl">U</div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Welcome to SignalHub</h1>
                <p className="text-sm text-slate-500 mt-1">Create an admin account and organization — secure by default.</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-5">
              <div className="relative">
                <div className="absolute left-4 right-4 top-6 h-0.5 bg-slate-100 rounded" />
                <div
                  className="absolute left-4 top-6 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-500 ease-out"
                  style={{ width: `${fillPercent}%` }}
                />
                <div className="relative flex items-center justify-between px-2">
                  {[1, 2, 3, 4].map((n) => {
                    const isActive = n === step;
                    const isCompleted = n < step;
                    return (
                      <div key={n} className="flex-1 flex flex-col items-center text-center px-1">
                        <div
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                            isCompleted ? "bg-indigo-600 text-white shadow-lg scale-105" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 animate-pulse" : "bg-white border border-slate-200 text-slate-600"
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

            {/* Forms */}
            <div>
              {/* CHOOSE */}
              {mode === "choose" && (
                <div className="space-y-4">
                  <button onClick={() => (window.location.href = "/api/auth/oauth/google/start?flow=signup")} className="w-full p-3 border rounded-lg flex items-center gap-3 justify-center hover:shadow-lg transition">
                    <img src="/google.png" alt="Google" className="w-6 h-6" />
                    <span className="text-sm font-medium text-slate-700">Continue with Google</span>
                  </button>

                  <div className="text-center text-sm text-slate-400">or</div>

                  <button onClick={() => setMode("email")} className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
                    Sign up with Email
                  </button>
                  <div className="text-sm mt-2">Already have an account? <a className="text-blue-700 underline" href="/login">Login</a></div>
                </div>
              )}

              {/* EMAIL - send */}
              {mode === "email" && (
                <form onSubmit={handleSendEmailOtp} className="space-y-3" noValidate>
                  <label className="block text-sm font-medium text-slate-600">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 focus:outline-none" placeholder="you@example.com" type="email" />
                  <div className="flex gap-3 flex-wrap">
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

              {/* EMAIL - verify */}
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

              {/* PHONE - send */}
              {mode === "phone" && (
                <form onSubmit={handleSendPhoneOtp} className="space-y-3" noValidate>
                  <label className="block text-sm font-medium text-slate-600">Phone</label>

                  <div className="flex gap-2 items-start flex-col sm:flex-row">
                    <div className="w-full sm:w-44">
                      <CountryDropdown
                        countries={countries}
                        value={country}
                        onChange={(c) => {
                          setCountry(c);
                          // if phone is empty, add calling code as hint to input (we don't auto-prepend to typed number)
                          // we leave actual submission to buildFullPhone
                        }}
                        disabled={countryLoading || !!countryError}
                        placeholder={countryLoading ? "Loading..." : countryError ? "Unavailable" : "Select country"}
                      />
                      <div className="text-xs text-slate-400 mt-2">{countryLoading ? "Loading dial codes..." : countryError ? <span className="text-red-500">Unable to load list</span> : "Select country code"}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 border rounded bg-slate-50 text-sm whitespace-nowrap">
                          <span className="mr-2">{country?.flag ? <img src={country.flag} alt={country.name} className="w-5 h-4 object-cover inline-block" /> : null}</span>
                          <span className="font-medium">{country?.callingCode ?? "+"}</span>
                        </div>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={country ? `${country.callingCode} 98765 43210` : "98765 43210"}
                          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-300 bg-indigo-50"
                          aria-label="Phone number"
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

              {/* PHONE - verify */}
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
                  <input value={orgName} placeholder="Enter the name" onChange={(e) => setOrgName(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300" />

                  <label className="block text-sm font-medium text-slate-600">Your name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300" />

                  <label className="block text-sm font-medium text-slate-600">Password</label>
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
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12"
                      aria-required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <label className="block text-sm font-medium text-slate-600">Retype password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() => setPasswordTouched(true)}
                      placeholder="Retype password"
                      className={`w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 ${passwordTouched && !passwordsMatch ? "border-red-400" : ""}`}
                      aria-required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  {/* Password requirements */}
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
                          <span className={`w-4 h-4 rounded-sm flex items-center justify-center ${r.ok ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-400"}`}>
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

                  <div className="flex gap-3 pt-3">
                    <button disabled={loading} className={`flex-1 px-4 py-2 bg-indigo-600 text-white rounded ${loading ? "opacity-70" : "hover:brightness-95"}`} type="submit">
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
          <img src="/signup-hero.jpg" alt="Signup hero" className="w-full h-full object-cover min-h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
