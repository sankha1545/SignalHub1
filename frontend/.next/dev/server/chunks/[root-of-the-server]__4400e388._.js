module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/auth/clear-sessions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/auth/clear-sessions/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(request) {
    // Build an absolute URL for redirect using incoming request as base
    const base = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "localhost:3000";
    const proto = request.headers.get("x-forwarded-proto") ?? (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http");
    const origin = `${proto}://${base}`;
    const redirectTo = new URL("/", origin).toString();
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectTo);
    const isProd = ("TURBOPACK compile-time value", "development") === "production";
    const sameSite = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "lax";
    const secure = isProd;
    // Clear legacy "token" cookie (if present)
    try {
        res.cookies.set("token", "", {
            path: "/",
            maxAge: 0,
            sameSite: sameSite,
            secure
        });
    } catch  {
        const parts = [
            `token=`,
            "Path=/",
            "Max-Age=0",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "SameSite=Lax",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
        ].filter(Boolean);
        res.headers.append("Set-Cookie", parts.join("; "));
    }
    // Clear canonical "session" cookie
    try {
        res.cookies.set("session", "", {
            path: "/",
            maxAge: 0,
            sameSite: sameSite,
            secure
        });
    } catch  {
        const parts = [
            `session=`,
            "Path=/",
            "Max-Age=0",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "SameSite=Lax",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
        ].filter(Boolean);
        res.headers.append("Set-Cookie", parts.join("; "));
    }
    return res;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4400e388._.js.map