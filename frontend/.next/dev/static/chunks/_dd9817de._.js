(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(auth)/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File: app/(auth)/signup/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ---------- helpers ---------- */ async function postJSON(url, body) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            credentials: "include"
        });
        try {
            return await res.json();
        } catch  {
            return {
                ok: res.ok,
                error: res.statusText || "Unexpected response"
            };
        }
    } catch (err) {
        return {
            error: err?.message || String(err)
        };
    }
}
function SignupPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("choose");
    // Fields
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailOtp, setEmailOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill("")); // 6-digit OTP default
    const [emailCode, setEmailCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // convenience (joined)
    const [tempToken, setTempToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countryLoading, setCountryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [countryError, setCountryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countryQuery, setCountryQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // search filter
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneOtp, setPhoneOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill("")); // 6-digit SMS OTP
    const [phoneCode, setPhoneCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // joined
    const [orgName, setOrgName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // UI
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Resend timers
    const [emailResendAvailableAt, setEmailResendAvailableAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneResendAvailableAt, setPhoneResendAvailableAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            const id = window.setInterval({
                "SignupPage.useEffect.id": ()=>setNow(Date.now())
            }["SignupPage.useEffect.id"], 1000);
            return ({
                "SignupPage.useEffect": ()=>window.clearInterval(id)
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
    // computed step 1..4
    function modeToStep(m) {
        switch(m){
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
    // ---------- COUNTRY FETCH & HELPERS (IMPROVED) ----------
    // This fetch uses restcountries v3, but is robust to different shapes and constructs
    // a normalized callingCode including a leading '+' (e.g. "+91").
    // Replace your country-fetching useEffect with this (client side)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            let mounted = true;
            (async function fetchCountries() {
                setCountryLoading(true);
                setCountryError(null);
                try {
                    // Call your proxy route which returns normalized objects:
                    // [{ name, cca2, callingCode, flag }, ...]
                    const res = await fetch("/api/countries");
                    if (!res.ok) {
                        const txt = await res.text().catch({
                            "SignupPage.useEffect.fetchCountries": ()=>""
                        }["SignupPage.useEffect.fetchCountries"]);
                        throw new Error(`Failed to fetch /api/countries: ${res.status} ${txt}`);
                    }
                    const json = await res.json();
                    if (!mounted) return;
                    // basic validation of shape
                    if (!Array.isArray(json) || json.length === 0) {
                        throw new Error("No countries returned from server");
                    }
                    // ensure each entry has the fields we expect
                    const parsed = json.map({
                        "SignupPage.useEffect.fetchCountries.parsed": (c)=>({
                                name: c.name || c.commonName || "Unknown",
                                cca2: (c.cca2 || "").toUpperCase(),
                                callingCode: String(c.callingCode || c.dialCode || c.idd || "").trim(),
                                flag: c.flag || c.flags || ""
                            })
                    }["SignupPage.useEffect.fetchCountries.parsed"]).filter({
                        "SignupPage.useEffect.fetchCountries.parsed": (c_0)=>c_0.callingCode && c_0.name
                    }["SignupPage.useEffect.fetchCountries.parsed"]);
                    if (parsed.length === 0) throw new Error("No countries with calling codes returned");
                    setCountries(parsed);
                    // pick a sensible default country:
                    const locale = (navigator.language || navigator.languages && navigator.languages[0] || "").toLowerCase();
                    const match = locale.match(/-([a-z]{2})$/i);
                    let defaultCountry = null;
                    if (match) {
                        const cca = match[1].toUpperCase();
                        defaultCountry = parsed.find({
                            "SignupPage.useEffect.fetchCountries": (x)=>x.cca2 === cca
                        }["SignupPage.useEffect.fetchCountries"]) || null;
                    }
                    if (!defaultCountry) defaultCountry = parsed.find({
                        "SignupPage.useEffect.fetchCountries": (c_2)=>c_2.callingCode === "+91"
                    }["SignupPage.useEffect.fetchCountries"]) || parsed.find({
                        "SignupPage.useEffect.fetchCountries": (c_1)=>c_1.callingCode === "+1"
                    }["SignupPage.useEffect.fetchCountries"]) || parsed[0] || null;
                    setCountry(defaultCountry);
                } catch (err) {
                    if (!mounted) return;
                    console.error("Country fetch error:", err);
                    setCountries(null);
                    setCountryError(String(err?.message || err));
                } finally{
                    if (mounted) setCountryLoading(false);
                }
            })();
            return ({
                "SignupPage.useEffect": ()=>{
                    mounted = false;
                }
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
    // helpers: countdown formatter
    function formatCountdown(unixMs) {
        if (!unixMs) return null;
        const s = Math.max(0, Math.ceil((unixMs - now) / 1000));
        if (s <= 0) return null;
        return `${s}s`;
    }
    function setResendDeadline(setter, seconds = 30) {
        setter(Date.now() + seconds * 1000);
    }
    // ---------- OTP utilities ----------
    // Handles OTP input arrays: auto-advance, paste, backspace
    function handleOtpInput(e, idx, otpArr, setOtpArr) {
        const target = e.target;
        const key = e.key;
        if (key === "Backspace") {
            e.preventDefault();
            const next = [
                ...otpArr
            ];
            if (next[idx]) {
                next[idx] = "";
                setOtpArr(next);
            } else {
                // move focus to previous
                const prev = Math.max(0, idx - 1);
                const prevInput = document.getElementById(`otp-${target.dataset.for}-${prev}`);
                if (prevInput) {
                    prevInput.focus();
                    const n = [
                        ...otpArr
                    ];
                    n[prev] = "";
                    setOtpArr(n);
                }
            }
        } else if (/^[0-9]$/.test(key)) {
            e.preventDefault();
            const next_0 = [
                ...otpArr
            ];
            next_0[idx] = key;
            setOtpArr(next_0);
            const nextIdx = Math.min(next_0.length - 1, idx + 1);
            const nextInput = document.getElementById(`otp-${target.dataset.for}-${nextIdx}`);
            if (nextInput) nextInput.focus();
        } else if (key === "ArrowLeft") {
            e.preventDefault();
            const prev_0 = Math.max(0, idx - 1);
            const prevInput_0 = document.getElementById(`otp-${target.dataset.for}-${prev_0}`);
            prevInput_0?.focus();
        } else if (key === "ArrowRight") {
            e.preventDefault();
            const nxt = Math.min(otpArr.length - 1, idx + 1);
            const nextInput_0 = document.getElementById(`otp-${target.dataset.for}-${nxt}`);
            nextInput_0?.focus();
        }
    }
    function handleOtpPaste(e_0, otpArr_0, setOtpArr_0) {
        e_0.preventDefault();
        const paste = e_0.clipboardData.getData("text").trim();
        const digits = paste.replace(/\D/g, "").slice(0, otpArr_0.length).split("");
        if (digits.length === 0) return;
        const next_1 = [
            ...otpArr_0
        ];
        for(let i = 0; i < digits.length; i++)next_1[i] = digits[i];
        setOtpArr_0(next_1);
        // focus next empty or last
        const firstEmpty = next_1.findIndex((c_3)=>!c_3);
        const focusIdx = firstEmpty === -1 ? next_1.length - 1 : firstEmpty;
        const el = document.getElementById(`otp-${e_0.target.dataset.for}-${focusIdx}`);
        el?.focus();
    }
    // join OTP arrays into code strings whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>setEmailCode(emailOtp.join(""))
    }["SignupPage.useEffect"], [
        emailOtp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>setPhoneCode(phoneOtp.join(""))
    }["SignupPage.useEffect"], [
        phoneOtp
    ]);
    // ---------- API actions (preserve your endpoints) ----------
    async function handleSendEmailOtp(e_1) {
        e_1?.preventDefault();
        setError(null);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            const data = await postJSON("/api/auth/email/send", {
                email
            });
            if (data?.ok) {
                setMode("verifyEmail");
                setResendDeadline(setEmailResendAvailableAt, 45);
                // clear previous OTP boxes
                setEmailOtp(Array(6).fill(""));
                // focus first OTP input after small delay
                setTimeout(()=>document.getElementById("otp-email-0")?.focus(), 120);
            } else setError(data?.error || "Failed to send OTP. Try again.");
        } catch (err_0) {
            setError(err_0?.message || String(err_0));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyEmailOtp(e_2) {
        e_2?.preventDefault();
        setError(null);
        if (emailCode.length < 4) {
            // allow flexible OTP lengths, but require at least 4 digits
            setError("Enter the full code you received by email.");
            return;
        }
        setLoading(true);
        try {
            const data_0 = await postJSON("/api/auth/email/verify", {
                email,
                code: emailCode,
                flow: "signup"
            });
            if (data_0?.ok && data_0?.tempToken) {
                setTempToken(data_0.tempToken);
                setMode("phone");
            } else setError(data_0?.error || data_0?.reason || "Invalid or expired code.");
        } catch (err_1) {
            setError(err_1?.message || String(err_1));
        } finally{
            setLoading(false);
        }
    }
    async function handleSendPhoneOtp(e_3) {
        e_3?.preventDefault();
        setError(null);
        // Accept phone either with selected country code or typed full number
        const dial = country?.callingCode ?? "";
        // if user typed a full number including +, prefer that; otherwise prefix selected country code
        const typed = phone.trim();
        const full = typed.startsWith("+") ? typed : `${dial}${typed.replace(/\D/g, "")}`;
        if (!/^\+?[0-9]{7,20}$/.test(full)) {
            setError("Please enter a valid phone number including country code (or select country).");
            return;
        }
        setLoading(true);
        try {
            const data_1 = await postJSON("/api/auth/phone/send", {
                phone: full
            });
            if (data_1?.ok) {
                setMode("verifyPhone");
                setResendDeadline(setPhoneResendAvailableAt, 45);
                setPhoneOtp(Array(6).fill(""));
                setTimeout(()=>document.getElementById("otp-phone-0")?.focus(), 120);
            } else setError(data_1?.error || "Failed to send SMS OTP.");
        } catch (err_2) {
            setError(String(err_2));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyPhoneOtp(e_4) {
        e_4?.preventDefault();
        setError(null);
        if (phoneCode.length < 4) {
            setError("Enter the full SMS code you received.");
            return;
        }
        setLoading(true);
        try {
            // compute full phone again as in send
            const dial_0 = country?.callingCode ?? "";
            const typed_0 = phone.trim();
            const full_0 = typed_0.startsWith("+") ? typed_0 : `${dial_0}${typed_0.replace(/\D/g, "")}`;
            const res_0 = await postJSON("/api/auth/phone/verify", {
                phone: full_0,
                code: phoneCode,
                tempToken
            });
            if (res_0?.ok && res_0?.tempToken) {
                setTempToken(res_0.tempToken);
                setMode("org");
            } else setError(res_0?.reason || res_0?.error || "Phone verification failed.");
        } catch (err_3) {
            setError(String(err_3));
        } finally{
            setLoading(false);
        }
    }
    async function handleFinalize(e_5) {
        e_5?.preventDefault();
        setError(null);
        if (!orgName.trim()) {
            setError("Organization name is required.");
            return;
        }
        setLoading(true);
        try {
            const res_1 = await postJSON("/api/auth/signup/finalize", {
                tempToken,
                organizationName: orgName.trim(),
                password,
                name
            });
            if (res_1?.ok) {
                setSuccess("Account created — redirecting to dashboard...");
                setMode("done");
                setTimeout(()=>{
                    const redirect = window.location.search && new URLSearchParams(window.location.search).get("redirect") || "/admin/dashboard";
                    router.push(redirect);
                }, 900);
            } else setError(res_1?.error || "Failed to finalize signup.");
        } catch (err_4) {
            setError(String(err_4));
        } finally{
            setLoading(false);
        }
    }
    async function handleResendEmail() {
        if (emailResendAvailableAt && emailResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const data_2 = await postJSON("/api/auth/email/send", {
                email,
                resend: true
            });
            if (data_2?.ok) setResendDeadline(setEmailResendAvailableAt, 45);
            else setError(data_2?.error || "Unable to resend OTP.");
        } catch (err_5) {
            setError(String(err_5));
        } finally{
            setLoading(false);
        }
    }
    async function handleResendPhone() {
        if (phoneResendAvailableAt && phoneResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const data_3 = await postJSON("/api/auth/phone/send", {
                phone,
                resend: true
            });
            if (data_3?.ok) setResendDeadline(setPhoneResendAvailableAt, 45);
            else setError(data_3?.error || "Unable to resend SMS OTP.");
        } catch (err_6) {
            setError(String(err_6));
        } finally{
            setLoading(false);
        }
    }
    // compute fill percent (0..100) like before for smooth bar animation
    function computeFillPercent() {
        const s_0 = step;
        if (s_0 <= 1) return 0;
        return Math.round((s_0 - 1) / 3 * 100);
    }
    const fillPercent = computeFillPercent();
    /* ---------- UI ---------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-slate-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl bg-white/90 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 md:p-10 flex items-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold",
                                            children: "U"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-extrabold text-slate-900",
                                                    children: "Welcome to UTech"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: "Create an admin account and organization"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-8 right-8 top-4 h-0.5 bg-slate-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-8 top-4 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-400 ease-out",
                                                style: {
                                                    width: `${fillPercent}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-center justify-between",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                ].map((n_0)=>{
                                                    const isActive = n_0 === step;
                                                    const isCompleted = n_0 < step;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition ${isCompleted ? "bg-indigo-600 text-white shadow-md scale-105" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-200 animate-pulse" : "bg-white border border-slate-200 text-slate-600"}`,
                                                                children: n_0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-500 mt-2",
                                                                children: [
                                                                    "Choose",
                                                                    "Email",
                                                                    "Phone",
                                                                    "Org"
                                                                ][n_0 - 1]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, n_0, true, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 26
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "status",
                                    "aria-live": "polite",
                                    className: "min-h-[1.2rem] mb-3",
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-red-600",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 25
                                        }, this),
                                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-emerald-600",
                                            children: success
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        mode === "choose" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>window.location.href = "/api/auth/oauth/google/start?flow=signup",
                                                    className: "w-full p-3 border rounded-lg flex items-center gap-3 justify-center hover:shadow-sm transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/google.png",
                                                            alt: "Google",
                                                            className: "w-10 h-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-slate-700",
                                                            children: "Continue with Google"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-sm text-slate-400",
                                                    children: "or"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMode("email"),
                                                    className: "w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition",
                                                    children: "Sign up with Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 37
                                        }, this),
                                        mode === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSendEmailOtp,
                                            className: "space-y-3",
                                            noValidate: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: email,
                                                    onChange: (e_6)=>setEmail(e_6.target.value),
                                                    className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 focus:outline-none",
                                                    placeholder: "you@example.com",
                                                    type: "email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: loading,
                                                            className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                            children: loading ? "Sending..." : "Send code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMode("choose"),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: "A one-time code will be sent to verify your email."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 36
                                        }, this),
                                        mode === "verifyEmail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleVerifyEmailOtp,
                                            className: "space-y-3",
                                            noValidate: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: [
                                                        "Enter the code sent to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: emailOtp.map((digit, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: `otp-email-${i_0}`,
                                                            "data-for": "email",
                                                            inputMode: "numeric",
                                                            pattern: "[0-9]*",
                                                            maxLength: 1,
                                                            value: digit,
                                                            onPaste: (e_7)=>handleOtpPaste(e_7, emailOtp, setEmailOtp),
                                                            onKeyDown: (e_8)=>handleOtpInput(e_8, i_0, emailOtp, setEmailOtp),
                                                            onChange: ()=>{
                                                            /* no-op: input handled via keydown to ensure single-digit numeric */ },
                                                            "aria-label": `Email code digit ${i_0 + 1}`,
                                                            className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                        }, i_0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 51
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: loading,
                                                            className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                            children: loading ? "Verifying..." : "Verify"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMode("email"),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: formatCountdown(emailResendAvailableAt) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Resend in ",
                                                                    formatCountdown(emailResendAvailableAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 66
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleResendEmail,
                                                                className: "underline text-indigo-600",
                                                                children: "Resend code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 133
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: "Didn't receive? Check spam."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 42
                                        }, this),
                                        mode === "phone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSendPhoneOtp,
                                            className: "space-y-3",
                                            noValidate: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-36",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        placeholder: "Search country",
                                                                        value: countryQuery,
                                                                        onChange: (e_9)=>setCountryQuery(e_9.target.value),
                                                                        className: "w-full p-2 text-sm border rounded focus:ring-2 focus:ring-indigo-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: country ? `${country.callingCode}__${country.cca2}` : "",
                                                                        onChange: (e_10)=>{
                                                                            const v = e_10.target.value;
                                                                            if (!v) {
                                                                                setCountry(null);
                                                                                return;
                                                                            }
                                                                            const [cc, cca2] = v.split("__");
                                                                            const found = (countries || []).find((c_4)=>c_4.callingCode === cc && c_4.cca2 === cca2);
                                                                            if (found) setCountry(found);
                                                                        },
                                                                        size: 7,
                                                                        className: "w-full p-2 border rounded focus:ring-2 focus:ring-indigo-300 bg-white text-sm",
                                                                        children: [
                                                                            countryLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                children: "Loading..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 545,
                                                                                columnNumber: 46
                                                                            }, this),
                                                                            !countryLoading && countryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                children: countryError
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 546,
                                                                                columnNumber: 63
                                                                            }, this),
                                                                            !countryLoading && countries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "Select"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                        lineNumber: 548,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    countries.filter((c_5)=>{
                                                                                        if (!countryQuery) return true;
                                                                                        const q = countryQuery.toLowerCase();
                                                                                        return c_5.name.toLowerCase().includes(q) || c_5.callingCode.includes(q);
                                                                                    }).map((c_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: `${c_6.callingCode}__${c_6.cca2}`,
                                                                                            children: [
                                                                                                c_6.name,
                                                                                                " (",
                                                                                                c_6.callingCode,
                                                                                                ")"
                                                                                            ]
                                                                                        }, `${c_6.callingCode}__${c_6.cca2}`, true, {
                                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                            lineNumber: 553,
                                                                                            columnNumber: 39
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center px-3 border rounded bg-slate-50 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: country?.flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: country.flag,
                                                                                    alt: country.name,
                                                                                    className: "w-5 h-4 object-cover inline-block"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                    lineNumber: 565,
                                                                                    columnNumber: 67
                                                                                }, this) : null
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: country?.callingCode ?? "+"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 566,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: phone,
                                                                        onChange: (e_11)=>setPhone(e_11.target.value),
                                                                        placeholder: country ? `${country.callingCode} 98765 43210` : "98765 43210",
                                                                        className: "flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: loading,
                                                            className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                            children: loading ? "Sending..." : "Send SMS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMode("verifyEmail"),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Standard SMS rates may apply."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 36
                                        }, this),
                                        mode === "verifyPhone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleVerifyPhoneOtp,
                                            className: "space-y-3",
                                            noValidate: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: [
                                                        "Enter the SMS code sent to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                country?.callingCode ?? "",
                                                                " ",
                                                                phone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "SMS Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: phoneOtp.map((digit_0, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: `otp-phone-${i_1}`,
                                                            "data-for": "phone",
                                                            inputMode: "numeric",
                                                            pattern: "[0-9]*",
                                                            maxLength: 1,
                                                            value: digit_0,
                                                            onPaste: (e_12)=>handleOtpPaste(e_12, phoneOtp, setPhoneOtp),
                                                            onKeyDown: (e_13)=>handleOtpInput(e_13, i_1, phoneOtp, setPhoneOtp),
                                                            onChange: ()=>{},
                                                            "aria-label": `Phone code digit ${i_1 + 1}`,
                                                            className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                        }, i_1, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 53
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: loading,
                                                            className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                            children: loading ? "Verifying..." : "Verify"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMode("phone"),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: formatCountdown(phoneResendAvailableAt) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Resend in ",
                                                                    formatCountdown(phoneResendAvailableAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 66
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleResendPhone,
                                                                className: "underline text-indigo-600",
                                                                children: "Resend SMS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 133
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: "Contact support if you don't receive SMS."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 42
                                        }, this),
                                        mode === "org" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleFinalize,
                                            className: "space-y-3",
                                            noValidate: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Organization name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: orgName,
                                                    onChange: (e_14)=>setOrgName(e_14.target.value),
                                                    className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: name,
                                                    onChange: (e_15)=>setName(e_15.target.value),
                                                    className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600",
                                                    children: "Password (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    value: password,
                                                    onChange: (e_16)=>setPassword(e_16.target.value),
                                                    className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: loading,
                                                            className: "flex-1 px-4 py-2 bg-emerald-600 text-white rounded",
                                                            children: loading ? "Creating..." : "Create organization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMode("phone"),
                                                            className: "px-4 py-2 border rounded",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 34
                                        }, this),
                                        mode === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-emerald-700",
                                                    children: "Success"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600 mt-2",
                                                    children: success || "Your organization has been created."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/signup-hero.jpg",
                                alt: "Signup hero1",
                                className: "w-full h-full object-cover min-h-[640px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-400",
                children: "Prefer magic links or SSO? Ask and I’ll wire one up."
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/signup/page.tsx",
        lineNumber: 420,
        columnNumber: 10
    }, this);
}
_s(SignupPage, "8qGGr/l0ylpTYPbVry2zcLuAgoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_dd9817de._.js.map