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

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: [
        "query"
    ]
});
if ("TURBOPACK compile-time truthy", 1) global.prisma = prisma;
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
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/auth.ts
__turbopack_context__.s([
    "getUserFromRequest",
    ()=>getUserFromRequest,
    "hashPassword",
    ()=>hashPassword,
    "requireRole",
    ()=>requireRole,
    "signToken",
    ()=>signToken,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET || "dev-secret";
// Keep legacy candidates for graceful migration; prefer "session".
const COOKIE_CANDIDATES = [
    "session",
    "token",
    "auth_token",
    "authToken",
    "auth"
];
function signToken(payload, expiresIn = "7d") {
    // Build a safe payload that always contains 'id' as canonical user id claim.
    const finalPayload = {};
    // Prefer explicit id/userId/sub from provided payload
    const providedId = payload?.id ?? payload?.userId ?? payload?.sub ?? payload?.uid ?? null;
    if (providedId) finalPayload.id = String(providedId);
    if (payload?.email) finalPayload.email = payload.email;
    if (payload?.role) finalPayload.role = payload.role;
    // Copy any other non-sensitive claims you intentionally want (none by default).
    // Sign and return
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(finalPayload, JWT_SECRET, {
        expiresIn
    });
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch (err) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug("[auth] verifyToken failed:", err?.message ?? err);
        }
        return null;
    }
}
async function hashPassword(password) {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(password, saltRounds);
}
async function verifyPassword(password, hash) {
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].compare(password, hash);
    } catch (err) {
        if ("TURBOPACK compile-time truthy", 1) console.error("[auth] verifyPassword error:", err);
        return false;
    }
}
async function getUserFromRequest(req) {
    try {
        // 1) Authorization header (Bearer)
        const authHeader = req.headers.get("authorization");
        if (authHeader?.startsWith("Bearer ")) {
            const token = authHeader.slice(7).trim();
            const payload = verifyToken(token);
            if (payload) {
                // Prefer canonical id, fallback to sub/userId/uid
                const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
                if (userId) {
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                        where: {
                            id: String(userId)
                        },
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            role: true
                        }
                    });
                    if (user) return user;
                }
            } else if ("TURBOPACK compile-time truthy", 1) {
                console.debug("[auth] bearer token present but failed verification");
            }
        }
        // 2) Cookies
        // Try the candidate cookie names in order and return the first user matched.
        for (const name of COOKIE_CANDIDATES){
            try {
                // NextRequest exposes cookies via req.cookies.get(name)
                const cookie = req.cookies.get(name);
                if (!cookie) {
                    if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie probe: ${name} => <missing>`);
                    continue;
                }
                const token = cookie.value;
                if (!token) continue;
                const payload = verifyToken(token);
                if (!payload) {
                    if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie ${name} token failed verify/expired`);
                    continue;
                }
                // Prefer id, fall back to sub/userId/uid for migrated tokens
                const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
                if (!userId) {
                    if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie ${name} token missing id/sub/userId/uid`);
                    continue;
                }
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        id: String(userId)
                    },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        role: true
                    }
                });
                if (user) {
                    if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie ${name} matched user id ${user.id}`);
                    return user;
                } else {
                    if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie ${name} decoded id ${userId} not found`);
                }
            } catch (err) {
                // Some runtimes may throw on req.cookies access — continue to next candidate
                if ("TURBOPACK compile-time truthy", 1) console.debug(`[auth] cookie probe error for ${name}:`, err);
            }
        }
        // nothing matched
        return null;
    } catch (err) {
        console.error("[auth] getUserFromRequest error:", err);
        return null;
    }
}
async function requireRole(req, allowedRoles = []) {
    const user = await getUserFromRequest(req);
    if (!user) throw new Response("Unauthorized", {
        status: 401
    });
    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        throw new Response("Forbidden", {
            status: 403
        });
    }
    return user;
}
}),
"[project]/src/app/api/me/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/me/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
;
/** compute since date */ function sinceDays(days = 30) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d;
}
/** Helper: compute base64 size (bytes) */ function base64SizeBytes(base64String) {
    const comma = base64String.indexOf(",");
    const b64 = comma >= 0 ? base64String.slice(comma + 1) : base64String;
    const padding = b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0;
    return Math.ceil(b64.length * 3 / 4) - padding;
}
/** Whitelisted writable profile fields */ const ALLOWED_PROFILE_FIELDS = new Set([
    "avatarUrl",
    "displayName",
    "bio",
    "metadata",
    "gender",
    "countryCode",
    "countryName",
    "stateName",
    "timezone",
    "countryGeonameId",
    "stateGeonameId"
]);
function sanitizeProfilePayload(raw) {
    if (!raw || typeof raw !== "object") return null;
    const cleaned = {};
    const rejectedKeys = [];
    for (const [k, v] of Object.entries(raw)){
        if (ALLOWED_PROFILE_FIELDS.has(k)) {
            cleaned[k] = v === "" ? null : v;
        } else {
            rejectedKeys.push(k);
        }
    }
    if (rejectedKeys.length > 0) {
        console.info("sanitizeProfilePayload dropped unknown/read-only profile keys:", rejectedKeys);
    }
    return Object.keys(cleaned).length === 0 ? null : cleaned;
}
async function GET(req) {
    // getUserFromRequest expects NextRequest so pass it directly
    const sessionUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromRequest"])(req);
    if (!sessionUser) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        user: null
    }, {
        status: 401
    });
    const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: sessionUser.id
        },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            profile: true,
            updatedAt: true
        }
    });
    if (!dbUser) {
        // user disappeared from DB — treat as unauthorized
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: null
        }, {
            status: 401
        });
    }
    const since = sinceDays(30);
    const [logins30d, changes30d] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.count({
            where: {
                userId: sessionUser.id,
                type: "LOGIN",
                createdAt: {
                    gte: since
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.count({
            where: {
                userId: sessionUser.id,
                type: "PROFILE_CHANGE",
                createdAt: {
                    gte: since
                }
            }
        })
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        user: dbUser,
        activity: {
            logins30d,
            changes30d
        }
    });
}
async function PATCH(req) {
    const sessionUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromRequest"])(req);
    if (!sessionUser) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const body = await req.json().catch(()=>({}));
    const userUpdates = {};
    if (typeof body.name === "string") userUpdates.name = body.name;
    let profilePayload = null;
    if (body.profile && typeof body.profile === "object") {
        const incomingProfile = body.profile;
        if (incomingProfile.avatarBase64) {
            const size = base64SizeBytes(incomingProfile.avatarBase64);
            const max = 2 * 1024 * 1024;
            if (size > max) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Avatar exceeds 2 MB limit"
                }, {
                    status: 400
                });
            }
        }
        profilePayload = sanitizeProfilePayload(incomingProfile);
        if (incomingProfile.avatarBase64) {
            profilePayload = {
                ...profilePayload ?? {},
                avatarUrl: incomingProfile.avatarBase64
            };
        }
    }
    if (Object.keys(userUpdates).length === 0 && !profilePayload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Nothing to update"
        }, {
            status: 400
        });
    }
    try {
        const data = {
            ...userUpdates
        };
        if (profilePayload) {
            data.profile = {
                upsert: {
                    update: profilePayload,
                    create: profilePayload
                }
            };
        }
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: sessionUser.id
            },
            data,
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                profile: true,
                updatedAt: true
            }
        });
        if (profilePayload) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                    data: {
                        userId: sessionUser.id,
                        type: "PROFILE_CHANGE",
                        meta: {
                            fields: Object.keys(body.profile ?? {}),
                            ts: new Date().toISOString()
                        }
                    }
                });
            } catch (err) {
                console.error("Failed to write profile change activity:", err);
            }
        }
        const since = sinceDays(30);
        const [logins30d, changes30d] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.count({
                where: {
                    userId: sessionUser.id,
                    type: "LOGIN",
                    createdAt: {
                        gte: since
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.count({
                where: {
                    userId: sessionUser.id,
                    type: "PROFILE_CHANGE",
                    createdAt: {
                        gte: since
                    }
                }
            })
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: updated,
            activity: {
                logins30d,
                changes30d
            }
        });
    } catch (err) {
        console.error("Profile update error:", err);
        if (err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Conflict: unique constraint",
                    detail: err.message
                }, {
                    status: 409
                });
            }
            if (err.code === "P2025") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Not found",
                    detail: err.message
                }, {
                    status: 404
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update",
            detail: err?.message ?? String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba434eec._.js.map