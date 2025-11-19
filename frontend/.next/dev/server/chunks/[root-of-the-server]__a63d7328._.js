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
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/prisma.ts
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.__prisma__ ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "query",
        "warn",
        "error"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) global.__prisma__ = prisma;
}),
"[externals]/bcrypt [external] (bcrypt, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("bcrypt", () => require("bcrypt"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/jwt.ts
__turbopack_context__.s([
    "signSession",
    ()=>signSession,
    "signTemp",
    ()=>signTemp,
    "verifySession",
    ()=>verifySession,
    "verifyTemp",
    ()=>verifyTemp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        console.warn("[JWT] Using fallback secret for development");
    }
}
function signTemp(payload, expiresIn = "15m") {
    const safePayload = {
        ...payload
    };
    delete safePayload.exp;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(safePayload, SECRET, {
        expiresIn
    });
}
function verifyTemp(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, SECRET);
    } catch (err) {
        console.warn("[JWT] verifyTemp failed:", err.message);
        return null;
    }
}
function signSession(payload, expiresIn = "7d") {
    const safePayload = {
        ...payload
    };
    delete safePayload.exp;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(safePayload, SECRET, {
        expiresIn
    });
}
function verifySession(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, SECRET);
    } catch (err) {
        console.warn("[JWT] verifySession failed:", err.message);
        return null;
    }
}
}),
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/auth/login/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jwt.ts [app-route] (ecmascript)");
;
;
;
;
const ALT_SESSION_COOKIE_NAMES = [
    "admin_session",
    "next-auth.session-token",
    "session_preview"
];
function getClientIp(req) {
    try {
        const xf = req.headers.get("x-forwarded-for");
        if (xf) return xf.split(",")[0].trim();
        const cf = req.headers.get("cf-connecting-ip");
        if (cf) return cf;
        return undefined;
    } catch  {
        return undefined;
    }
}
async function POST(req) {
    try {
        const start = Date.now();
        const body = await req.json() ?? {};
        let { email, phone, password } = body;
        // Basic validation
        if (!email && !phone || !password) {
            console.warn("[login] missing credentials");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "missing_credentials"
            }, {
                status: 400
            });
        }
        // Normalize inputs
        if (email) email = String(email).trim().toLowerCase();
        if (phone) phone = String(phone).trim();
        password = String(password);
        const ip = getClientIp(req);
        console.info("[login] attempt", {
            identifier: email ?? phone,
            ip
        });
        // ----- Find user -----
        let user = null;
        if (email) {
            user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    email
                },
                select: {
                    id: true,
                    email: true,
                    phone: true,
                    passwordHash: true,
                    role: true,
                    organizationId: true,
                    phoneVerified: true,
                    emailVerified: true,
                    isActive: true
                }
            });
        } else {
            user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
                where: {
                    phone
                },
                select: {
                    id: true,
                    email: true,
                    phone: true,
                    passwordHash: true,
                    role: true,
                    organizationId: true,
                    phoneVerified: true,
                    emailVerified: true,
                    isActive: true
                }
            });
        }
        if (!user) {
            console.warn("[login] user not found", {
                identifier: email ?? phone
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_credentials"
            }, {
                status: 401
            });
        }
        if (!user.passwordHash) {
            console.warn("[login] user missing passwordHash", {
                userId: user.id
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_credentials"
            }, {
                status: 401
            });
        }
        // ----- Verify password -----
        const isPasswordValid = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].compare(password, user.passwordHash);
        if (!isPasswordValid) {
            console.warn("[login] bad password", {
                userId: user.id
            });
            // OPTIONAL: increment failed login attempts here
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "invalid_credentials"
            }, {
                status: 401
            });
        }
        // ----- Account activation - role-based rules -----
        // If explicit isActive present on record, respect it (true => active, false => inactive).
        const hasIsActive = Object.prototype.hasOwnProperty.call(user, "isActive");
        const explicitIsActive = hasIsActive ? Boolean(user.isActive) : null;
        // Determine role (normalize lowercase)
        const roleStr = (user.role ?? "").toString().trim().toLowerCase();
        // Admins require both email && phone verified unless explicitIsActive === true
        const adminRequiresPhone = roleStr === "admin";
        const fallbackIsActive = adminRequiresPhone ? Boolean(user.emailVerified) && Boolean(user.phoneVerified) : Boolean(user.emailVerified);
        const isActive = explicitIsActive !== null ? explicitIsActive : fallbackIsActive;
        if (!isActive) {
            // Non-production can surface details — in prod we keep generic messaging
            const showDetails = ("TURBOPACK compile-time value", "development") !== "production";
            const details = ("TURBOPACK compile-time truthy", 1) ? {
                required: adminRequiresPhone ? "email+phone" : "email",
                emailVerified: Boolean(user.emailVerified),
                phoneVerified: Boolean(user.phoneVerified),
                role: user.role ?? null
            } : "TURBOPACK unreachable";
            console.info("[login] inactive account", {
                userId: user.id,
                ...details ?? {}
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "account_not_active",
                message: adminRequiresPhone ? "account_not_active: require_email_and_phone_verification" : "account_not_active: require_email_verification",
                details
            }, {
                status: 403
            });
        }
        // ----- Create session token -----
        const payload = {
            id: user.id,
            role: user.role ?? null,
            organizationId: user.organizationId ?? null
        };
        const sessionToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signSession"])(payload, "7d");
        if (!sessionToken) {
            console.error("[login] signSession returned empty token", {
                userId: user.id
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "internal_server_error"
            }, {
                status: 500
            });
        }
        // Optional: record server-side session for revocation (commented)
        // await prisma.session.create({ data: { userId: user.id, tokenHash: hash(sessionToken), expiresAt: addDays(new Date(), 7) } });
        // ----- Build response + cookies -----
        const maxAge = 7 * 24 * 60 * 60; // seconds
        const isProd = ("TURBOPACK compile-time value", "development") === "production";
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            user: {
                id: user.id,
                email: user.email ?? null,
                phone: user.phone ?? null,
                role: user.role ?? null
            }
        }, {
            status: 200
        });
        // Defensive: clear other common session cookie names (helps with stale cookies)
        for (const altName of ALT_SESSION_COOKIE_NAMES){
            try {
                res.cookies.delete(altName, {
                    path: "/"
                });
            } catch (err) {
            // ignore deletion errors
            }
        }
        res.cookies.set({
            name: "session",
            value: sessionToken,
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            maxAge,
            secure: isProd
        });
        console.info("[login] success", {
            userId: user.id,
            role: user.role,
            orgId: user.organizationId,
            tookMs: Date.now() - start
        });
        return res;
    } catch (err) {
        console.error("[Login Error]", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : err?.message ?? "internal_server_error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a63d7328._.js.map