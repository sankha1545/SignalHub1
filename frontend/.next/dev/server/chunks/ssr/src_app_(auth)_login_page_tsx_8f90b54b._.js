module.exports = [
"[project]/src/app/(auth)/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File: app/(auth)/login/page.tsx
__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
async function postJSON(url, body) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            credentials: "include"
        });
        let json;
        try {
            json = await res.json();
        } catch  {
            // if body is empty but status ok (server set cookie), return ok true
            if (res.ok) return {
                ok: true
            };
            return {
                error: res.statusText || "Unexpected response"
            };
        }
        // attach HTTP status for client logic if needed
        return {
            ...json,
            ok: json.ok ?? res.ok
        };
    } catch (err) {
        return {
            error: err?.message || String(err)
        };
    }
}
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Form state
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [remember, setRemember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI state
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // When account inactive, server may return details; hold them for UI
    const [verificationDetails, setVerificationDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resendLoading, setResendLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleLogin(e) {
        e?.preventDefault();
        setError(null);
        setInfo(null);
        setVerificationDetails(null);
        const trimmedEmail = email.trim();
        if (!trimmedEmail || !password) {
            setError("Please provide both email and password.");
            return;
        }
        setLoading(true);
        try {
            const res = await postJSON("/api/auth/login", {
                email: trimmedEmail,
                password
            });
            // If server returned ok and likely set cookie (res.ok true), redirect
            if (res.ok) {
                // If server returned a sessionToken in body, we attempt to persist it (fallback)
                if (res.sessionToken) {
                    // Fallback behavior: store token only if server returned it.
                    // Prefer server-set HttpOnly cookie; this fallback is for systems that return token in JSON.
                    try {
                        const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 1;
                        // store non-HttpOnly cookie (less secure) only if necessary — server-side cookie is preferred.
                        document.cookie = `sessionToken=${res.sessionToken}; path=/; max-age=${maxAge}; Secure; SameSite=Strict`;
                        try {
                            localStorage.setItem("sessionToken", res.sessionToken);
                        } catch  {
                        // ignore
                        }
                    } catch  {
                    // ignore storage errors
                    }
                }
                setInfo("Signed in — redirecting...");
                // small delay so info is visible
                setTimeout(()=>router.push("/account"), 250); // <-- redirect to /account (dashboard)
                return;
            }
            // Not ok: handle specific error shapes
            if (res.error === "account_not_fully_verified" || res.error === "account_not_active" || res.message?.includes("verify")) {
                setError("Your account is not active yet. Please verify email and phone to continue.");
                setVerificationDetails(res.details ?? null);
                return;
            }
            // generic invalid credentials
            setError(res.error || "Invalid credentials. Please try again.");
        } catch (err) {
            setError(err?.message || String(err) || "Network error.");
        } finally{
            setLoading(false);
        }
    }
    function startGoogleOAuthLogin() {
        // redirect to your server oauth start endpoint
        window.location.href = "/api/auth/oauth/google/start?flow=login";
    }
    async function handleResendEmail() {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError("Enter your email to resend verification.");
            return;
        }
        setResendLoading(true);
        setError(null);
        try {
            const payload = {
                email: trimmedEmail,
                resend: true
            };
            const res = await fetch("/api/auth/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                credentials: "include"
            });
            const json = await res.json().catch(()=>({}));
            if (json?.ok) {
                setInfo("Verification email resent. Check your inbox (and spam).");
            } else {
                setError(json?.error || "Unable to resend verification email.");
            }
        } catch (err) {
            setError(err?.message || String(err));
        } finally{
            setResendLoading(false);
        }
    }
    async function handleResendPhone() {
        // phone is not part of login form; backend typically requires phone param or tempToken.
        // We attempt to call a resend endpoint that may accept email to find user's phone.
        setResendLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/auth/phone/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // try sending email so server can look up phone from the account; backend should support this pattern.
                body: JSON.stringify({
                    email: email.trim(),
                    resend: true
                }),
                credentials: "include"
            });
            const json = await res.json().catch(()=>({}));
            if (json?.ok) {
                setInfo("SMS verification resent (if we have a phone on file).");
            } else {
                setError(json?.error || "Unable to resend SMS verification.");
            }
        } catch (err) {
            setError(err?.message || String(err));
        } finally{
            setResendLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl bg-white/90 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 md:p-12 flex items-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg",
                                            children: "U"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-extrabold text-slate-900",
                                                    children: "Welcome"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: "Sign in to your account to continue to UTech"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "status",
                                    "aria-live": "polite",
                                    className: "min-h-[1.25rem] mb-3",
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-red-600",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 25
                                        }, this),
                                        info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-emerald-600",
                                            children: info
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: startGoogleOAuthLogin,
                                            className: "w-full p-3 border rounded-lg flex items-center justify-center gap-3 hover:shadow-sm transition",
                                            "aria-label": "Continue with Google",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    viewBox: "0 0 48 48",
                                                    "aria-hidden": true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#EA4335",
                                                            d: "M24 9.5c3.6 0 6.5 1.3 8.9 2.9l6.5-6.5C36.7 2.9 30.9 0 24 0 14.3 0 6.2 5.7 2.8 13.8l7.6 5.9C12.2 15.2 17.6 9.5 24 9.5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#4285F4",
                                                            d: "M46.5 24.5c0-1.7-.2-3.3-.6-4.8H24v9.1h12.7c-.5 2.7-2.1 5-4.4 6.6l7 5.4c4.1-3.8 6.5-9.6 6.5-16.3z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#FBBC05",
                                                            d: "M9.4 28.3c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8L2.8 12.8C1 16.1 0 19.9 0 24s1 7.9 2.8 11.2l6.6-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#34A853",
                                                            d: "M24 48c6.6 0 12.2-2.2 16.3-6l-7-5.4c-2.2 1.5-5 2.6-9.3 2.6-6.4 0-11.8-5.7-13.4-13.1L2.8 35.2C6.2 43.3 14.3 48 24 48z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-slate-700",
                                                    children: "Continue with Google"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-xs text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 h-px bg-slate-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "or sign in with email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 h-px bg-slate-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleLogin,
                                    className: "space-y-4",
                                    noValidate: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "login-email",
                                                    className: "block text-xs font-medium text-slate-600",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "login-email",
                                                    type: "email",
                                                    inputMode: "email",
                                                    autoComplete: "email",
                                                    required: true,
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "mt-2 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "login-password",
                                                    className: "block text-xs font-medium text-slate-600",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "login-password",
                                                            type: showPassword ? "text" : "password",
                                                            autoComplete: "current-password",
                                                            required: true,
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            className: "w-full px-4 py-3 rounded-lg border border-slate-200 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword((s)=>!s),
                                                            className: "absolute inset-y-0 right-2 px-2 flex items-center text-slate-500 hover:text-slate-700",
                                                            "aria-label": showPassword ? "Hide password" : "Show password",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                "aria-hidden": true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 3l18 18",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M9.5 9.5a3.5 3.5 0 014.95 4.95",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                "aria-hidden": true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "3",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 273,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "inline-flex items-center gap-2 text-slate-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: remember,
                                                            onChange: (e)=>setRemember(e.target.checked),
                                                            className: "h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Remember me"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/auth/forgot",
                                                    className: "text-indigo-600 hover:underline",
                                                    children: "Forgot Password?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    "aria-busy": loading,
                                                    className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-md active:scale-[0.995] disabled:opacity-60 transition",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 animate-spin",
                                                                viewBox: "0 0 24 24",
                                                                "aria-hidden": true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "3",
                                                                        strokeDasharray: "60",
                                                                        strokeDashoffset: "0",
                                                                        fill: "none",
                                                                        opacity: "0.25"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M22 12a10 10 0 0 0-10-10",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "3",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Signing in..."
                                                        ]
                                                    }, void 0, true) : "Sign in"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/signup",
                                                    className: "px-4 py-2 border rounded-lg text-sm text-slate-700 hover:bg-slate-50",
                                                    children: "Sign up"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-2",
                                            children: [
                                                "By signing in you agree to our ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/terms",
                                                    className: "underline",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 48
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/privacy",
                                                    className: "underline",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 101
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                verificationDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-3 border rounded bg-slate-50 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            children: "Your account isn't active yet. Verification required:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Email: ",
                                                        verificationDetails.emailVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-600",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 67
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "Unverified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 120
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Phone: ",
                                                        verificationDetails.phoneVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-600",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 67
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-600",
                                                            children: "Unverified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 120
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                !verificationDetails.emailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleResendEmail,
                                                    disabled: resendLoading,
                                                    className: "px-3 py-2 bg-indigo-600 text-white rounded text-sm",
                                                    children: resendLoading ? "Resending..." : "Resend email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this),
                                                !verificationDetails.phoneVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleResendPhone,
                                                    disabled: resendLoading,
                                                    className: "px-3 py-2 border rounded text-sm",
                                                    children: resendLoading ? "Resending..." : "Resend SMS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/login/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/login/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/signup-hero.jpg",
                                alt: "Hero",
                                className: "w-full h-full object-cover min-h-[640px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/login/page.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-400",
                children: "Prefer magic links or SSO? Ask and I’ll add it."
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/login/page.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/login/page.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_%28auth%29_login_page_tsx_8f90b54b._.js.map