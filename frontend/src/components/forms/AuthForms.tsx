// frontend/src/components/auth/AuthForms.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
export async function api(path: string, body: any) {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body ?? {}),
    credentials: "include",
  });

  const text = await res.text();
  let json: any = {};
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    if (!res.ok) throw { error: text || "Unknown error" };
    return text;
  }

  if (!res.ok) throw json;
  return json;
}

export function Input({
  label,
  className = "",
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: React.ReactNode }) {
  return (
    <label className={`block w-full ${className}`} htmlFor={id}>
      {label && <div className="text-sm text-slate-700 mb-1">{label}</div>}
      <input
        id={id}
        className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
        {...props}
      />
    </label>
  );
}

export function Button({
  children,
  className = "",
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60 ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}


export function OtpInput({
  length = 6,
  value,
  onChange,
  idPrefix = "otp",
}: {
  length?: number;
  value: string;
  onChange: (v: string) => void;
  idPrefix?: string;
}) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, length);
  }, [length]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
    const ch = e.target.value.replace(/\D/g, "").slice(0, 1);
    const arr = value.split("").slice(0, length);
    arr[idx] = ch || "";
    onChange(arr.join("").padEnd(length, ""));
    if (ch && idx < length - 1) inputsRef.current[idx + 1]?.focus();
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>, idx: number) {
    if (e.key === "Backspace" && !value[idx] && idx > 0) inputsRef.current[idx - 1]?.focus();
  }

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          id={`${idPrefix}-${i}`}
          ref={(el) => (inputsRef.current[i] = el)}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKey(e, i)}
          className="w-12 h-12 text-center rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      ))}
    </div>
  );
}

export function useOtpTimer(initialSeconds = 120) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let t: number | undefined = undefined;
    if (running && seconds > 0) t = window.setTimeout(() => setSeconds((s) => s - 1), 1000);
    if (seconds === 0) setRunning(false);
    return () => {
      if (t) clearTimeout(t);
    };
  }, [running, seconds]);

  function start() {
    setSeconds(initialSeconds);
    setRunning(true);
  }
  function reset() {
    setSeconds(initialSeconds);
    setRunning(true);
  }

  return {
    seconds,
    running,
    start,
    reset,
    canResend: !running && seconds === initialSeconds,
    formatted: `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`,
  };
}

export function FormNotice({ children, type = "info" }: { children?: React.ReactNode; type?: "info" | "error" | "success" }) {
  const base = "mb-2 text-sm p-2 rounded";
  if (type === "error") return <div className={`${base} bg-red-50 text-red-700`}>{children}</div>;
  if (type === "success") return <div className={`${base} bg-green-50 text-green-700`}>{children}</div>;
  return <div className={`${base} bg-slate-50 text-slate-700`}>{children}</div>;
}

export default {
  api,
  Input,
  Button,
  OtpInput,
  useOtpTimer,
  FormNotice,
};
