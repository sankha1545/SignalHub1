"use client";


import React, { useEffect, useState } from "react";


export default function PasswordModal({ open, onClose }: { open: boolean; onClose: () => void }) {
const [step, setStep] = useState<"verify" | "change">("verify");
const [verifying, setVerifying] = useState(false);
const [oldPassword, setOldPassword] = useState("");


const [newPassword, setNewPassword] = useState("");
const [rePassword, setRePassword] = useState("");
const [showNew, setShowNew] = useState(false);
const [showRe, setShowRe] = useState(false);
const [saving, setSaving] = useState(false);
const [errors, setErrors] = useState<string[]>([]);


useEffect(()=>{ if(!open){ setTimeout(()=>{ setStep("verify"); setOldPassword(""); setNewPassword(""); setRePassword(""); setErrors([]); }, 200); } }, [open]);


if (!open) return null;


async function handleVerify() {
setVerifying(true);
try {
const res = await fetch("/api/auth/verify-old-password", { method: "POST", body: JSON.stringify({ password: oldPassword }), headers: { "Content-Type": "application/json" } });
const j = await res.json().catch(()=>({ ok: false }));
if (j.ok) {
setStep("change");
} else {
alert(j.error || "Verification failed");
}
} catch (err) {
console.error(err);
alert("Unexpected error verifying password");
} finally {
setVerifying(false);
}
}


function validatePassword(pw: string) {
const errs: string[] = [];
if (pw.length < 8) errs.push("At least 8 characters");
if (!/[A-Z]/.test(pw)) errs.push("One uppercase letter");
if (!/[a-z]/.test(pw)) errs.push("One lowercase letter");
if (!/[0-9]/.test(pw)) errs.push("One number");
if (!/[^A-Za-z0-9]/.test(pw)) errs.push("One special character");
return errs;
}


async function handleChange() {
setErrors([]);
const errs = validatePassword(newPassword);
if (errs.length) return setErrors(errs);
if (newPassword !== rePassword) return setErrors(["Passwords do not match"]);
setSaving(true);
try {
const res = await fetch("/api/auth/change-password", { method: "POST", body: JSON.stringify({ newPassword }), headers: { "Content-Type": "application/json" } });
const j = await res.json().catch(()=>({ ok: false }));
if (j.ok) {
alert("Password changed");
onClose();
} else {
alert(j.error || "Failed to change password");
}
} catch (err) {
console.error(err);
alert("Unexpected error");
} finally {
setSaving(false);
}
}
return (
<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40">
<div className="bg-white rounded-2xl w-[92%] max-w-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold">Change password</h3>
<button onClick={onClose} className="text-slate-500">Close</button>
</div>


{step === "verify" ? (
<div>
<p className="text-sm text-slate-600">To change your password, verify your current password first.</p>
<div className="mt-4">
<label className="text-xs text-slate-500">Current password</label>
<input type="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} className="w-full mt-1 p-3 border rounded-lg" />
</div>


<div className="mt-4 flex justify-end gap-2">
<button onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
<button onClick={handleVerify} disabled={verifying} className="px-3 py-2 bg-indigo-600 text-white rounded">{verifying ? "Verifying…" : "Verify"}</button>
</div>
</div>
) : (
<div>
<p className="text-sm text-slate-600">Enter a strong new password. It will be hidden after saving.</p>


<div className="mt-4">
<label className="text-xs text-slate-500">New password</label>
<div className="relative">
<input type={showNew ? "text" : "password"} value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="w-full mt-1 p-3 border rounded-lg pr-10" />
<button type="button" onClick={()=>setShowNew(!showNew)} className="absolute right-2 top-3 text-sm">{showNew ? 'Hide' : 'Show'}</button>
</div>
</div>


<div className="mt-3">
<label className="text-xs text-slate-500">Re-enter new password</label>
<div className="relative">
<input type={showRe ? "text" : "password"} value={rePassword} onChange={(e)=>setRePassword(e.target.value)} className="w-full mt-1 p-3 border rounded-lg pr-10" />
<button type="button" onClick={()=>setShowRe(!showRe)} className="absolute right-2 top-3 text-sm">{showRe ? 'Hide' : 'Show'}</button>
</div>
</div>


{errors.length > 0 && (
<div className="mt-3 text-rose-500">
{errors.map((e,i)=>(<div key={i} className="text-sm">• {e}</div>))}
</div>
)}


<div className="mt-4 flex justify-end gap-2">
<button onClick={()=>setStep('verify')} className="px-3 py-2 border rounded">Back</button>
<button onClick={handleChange} disabled={saving} className="px-3 py-2 bg-emerald-600 text-white rounded">{saving ? 'Saving…' : 'Save password'}</button>
</div>
</div>
)}
</div>
</div>
);
}