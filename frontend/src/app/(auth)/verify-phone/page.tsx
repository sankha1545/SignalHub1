// File: app/(auth)/verify-phone/page.tsx
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


export default function VerifyPhonePage() {
const params = useSearchParams();
const tempTokenFromQuery = params.get("tempToken");
const flow = params.get("flow") || "signup"; // signup | invite | login
const inviteId = params.get("inviteId");


const [phone, setPhone] = useState("");
const [code, setCode] = useState("");
const [step, setStep] = useState<"enterPhone" | "verifyCode" | "done">("enterPhone");
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [tempToken, setTempToken] = useState<string | null>(tempTokenFromQuery);


useEffect(() => {
// If token already contains phone (some flows) we could prefill, but keep simple
}, []);


async function sendOtp(e?: React.FormEvent) {
e?.preventDefault();
setError(null);
if (!phone) return setError("Phone required");
setLoading(true);
try {
const res = await postJSON("/api/auth/phone/send", { phone });
if (res?.ok) {
setStep("verifyCode");
} else {
setError(res?.error || "Failed to send OTP");
}
} catch (err: any) {
setError(String(err));
} finally {
setLoading(false);
}
}


async function verifyOtp(e?: React.FormEvent) {
e?.preventDefault();
setError(null);
if (!code) return setError("Code required");
setLoading(true);
try {
const res = await postJSON("/api/auth/phone/verify", { phone, code, tempToken });
if (res?.ok && res?.tempToken) {
// updated tempToken returned by server
const newTemp = res.tempToken as string;
setTempToken(newTemp);


// route based on flow
if (flow === "signup") {
// redirect to signup finalize page (org name)
const url = new URL(window.location.origin + "/auth/signup");
url.searchParams.set("tempToken", newTemp);
window.location.href = url.toString();
return;
}


if (flow === "invite") {
// if inviteId present, include it — otherwise server-stored inviteId may exist inside tempToken
const url = new URL(window.location.origin + "/invite/accept");
if (inviteId) url.searchParams.set("inviteId", inviteId);
url.searchParams.set("tempToken", newTemp);
window.location.href = url.toString();
return;
}