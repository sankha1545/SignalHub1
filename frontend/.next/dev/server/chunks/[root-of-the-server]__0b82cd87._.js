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
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/auth.ts
__turbopack_context__.s([
    "getSessionUser",
    ()=>getSessionUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jwt.ts [app-route] (ecmascript)");
;
;
async function getSessionUser(req) {
    try {
        // 1️⃣ Prefer Authorization header: "Bearer <token>"
        let token = null;
        const authHeader = req.headers.get("authorization");
        if (authHeader?.startsWith("Bearer ")) {
            token = authHeader.slice("Bearer ".length).trim();
        }
        // 2️⃣ Fallback to cookies
        if (!token) {
            const cookieHeader = req.headers.get("cookie") || "";
            const cookies = Object.fromEntries(cookieHeader.split(";").map((c)=>c.trim().split("=")).map(([k, v])=>[
                    decodeURIComponent(k),
                    decodeURIComponent(v)
                ]));
            token = cookies["session"] || cookies["token"] || null;
        }
        if (!token) return null;
        // 3️⃣ Verify token safely
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySession"])(token);
        if (!payload?.id) return null;
        // 4️⃣ Fetch user from DB
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: payload.id
            }
        });
        if (!user) return null;
        return {
            id: user.id,
            email: user.email ?? null,
            role: user.role,
            organizationId: user.organizationId
        };
    } catch (err) {
        console.warn("[getSessionUser] error:", err?.message || err);
        return null;
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
/**
 * GET /api/me
 * PATCH /api/me
 *
 * - Resolve session using getSessionUser, Bearer JWT, or cookie fallback.
 * - GET returns user + organization + teams (manager + member roles).
 * - PATCH upserts profile, disallows changing email via this endpoint.
 */ const COOKIE_NAME = "session";
const JWT_SECRET = process.env.JWT_SECRET || "";
/** Safe JSON parse for request bodies */ async function jsonSafe(req) {
    try {
        return await req.json();
    } catch  {
        return {};
    }
}
/** Resolve session user with multiple fallbacks */ async function resolveSessionUser(req) {
    try {
        // 1) helper
        try {
            const s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])(req);
            if (s && s.id) return s;
        } catch (err) {
            console.warn("[resolveSessionUser] getSessionUser failed:", err);
        }
        // 2) Authorization: Bearer <token>
        try {
            const headerAuth = req.headers.get("authorization") ?? req.headers.get("Authorization");
            if (headerAuth?.toLowerCase().startsWith("bearer ")) {
                const token = headerAuth.slice(7).trim();
                if (JWT_SECRET && token) {
                    const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
                    if (payload?.id) {
                        return {
                            id: payload.id,
                            name: payload.name ?? null,
                            email: payload.email ?? null,
                            role: payload.role ?? null,
                            organizationId: payload.organizationId ?? null
                        };
                    }
                } else {
                    console.warn("[resolveSessionUser] Bearer token present but JWT_SECRET missing or token empty");
                }
            }
        } catch (err) {
            console.warn("[resolveSessionUser] bearer token verification failed:", err);
        }
        // 3) cookie fallback (server-side)
        try {
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
            const token = cookieStore.get(COOKIE_NAME)?.value;
            if (token && JWT_SECRET) {
                const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
                if (payload?.id) {
                    return {
                        id: payload.id,
                        name: payload.name ?? null,
                        email: payload.email ?? null,
                        role: payload.role ?? null,
                        organizationId: payload.organizationId ?? null
                    };
                }
            }
        } catch (err) {
            console.warn("[resolveSessionUser] cookie token verification failed:", err);
        }
        return null;
    } catch (err) {
        console.error("[resolveSessionUser] unexpected error:", err);
        return null;
    }
}
/**
 * Build teams array for the user.
 * - includes teams where user is manager
 * - includes teams where user is member via teamMember
 * - de-duplicates preferring MANAGER when both apply
 */ async function fetchUserTeams(userId) {
    try {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"] || typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"] !== "object") return [];
        // 1) teams where user is manager
        const managedTeamsPromise = (async ()=>{
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findMany({
                    where: {
                        managerId: userId
                    },
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        organizationId: true,
                        managerId: true,
                        createdAt: true
                    }
                });
            } catch (e) {
                console.warn("[fetchUserTeams] managed teams lookup failed:", e);
                return [];
            }
        })();
        // 2) teams where user is a teamMember
        // IMPORTANT: use `select` to request both relation (team) and scalar (role).
        const memberTeamsPromise = (async ()=>{
            try {
                const memberRows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].teamMember.findMany({
                    where: {
                        userId
                    },
                    select: {
                        id: true,
                        role: true,
                        joinedAt: true,
                        team: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                organizationId: true,
                                managerId: true,
                                createdAt: true
                            }
                        }
                    }
                });
                return memberRows.filter((r)=>r.team).map((r)=>({
                        id: r.team.id,
                        teamId: r.team.id,
                        name: r.team.name,
                        description: r.team.description ?? null,
                        organizationId: r.team.organizationId ?? null,
                        managerId: r.team.managerId ?? null,
                        createdAt: r.team.createdAt?.toISOString?.() ?? null,
                        memberRole: r.role ?? null
                    }));
            } catch (e) {
                console.warn("[fetchUserTeams] teamMember lookup failed:", e);
                return [];
            }
        })();
        const [managedTeams, memberTeams] = await Promise.all([
            managedTeamsPromise,
            memberTeamsPromise
        ]);
        // Deduplicate preferring manager
        const map = new Map();
        for (const t of memberTeams){
            map.set(t.id, {
                id: t.id,
                name: t.name,
                description: t.description ?? null,
                organizationId: t.organizationId ?? null,
                managerId: t.managerId ?? null,
                role: t.memberRole ?? "EMPLOYEE",
                createdAt: t.createdAt ?? null
            });
        }
        for (const t of managedTeams){
            map.set(t.id, {
                id: t.id,
                name: t.name,
                description: t.description ?? null,
                organizationId: t.organizationId ?? null,
                managerId: t.managerId ?? null,
                role: "MANAGER",
                createdAt: t.createdAt?.toISOString?.() ?? null
            });
        }
        const teams = Array.from(map.values()).sort((a, b)=>{
            const at = a.createdAt ? Date.parse(a.createdAt) : 0;
            const bt = b.createdAt ? Date.parse(b.createdAt) : 0;
            return bt - at;
        });
        return teams;
    } catch (err) {
        console.warn("[fetchUserTeams] unexpected error:", err);
        return [];
    }
}
async function GET(req) {
    try {
        const sessionUser = await resolveSessionUser(req);
        if (!sessionUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                user: null,
                teams: [],
                error: "Unauthorized"
            }, {
                status: 401,
                headers: {
                    "Cache-Control": "no-store"
                }
            });
        }
        const userId = String(sessionUser.id);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                profile: true,
                organization: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                user: null,
                teams: [],
                error: "User not found"
            }, {
                status: 404,
                headers: {
                    "Cache-Control": "no-store"
                }
            });
        }
        const teams = await fetchUserTeams(userId);
        const responseUser = {
            ...user,
            organization: user.organization ?? null
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            user: responseUser,
            teams
        }, {
            status: 200,
            headers: {
                "Cache-Control": "no-store"
            }
        });
    } catch (err) {
        console.error("GET /api/me error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            user: null,
            teams: [],
            error: "Internal server error"
        }, {
            status: 500,
            headers: {
                "Cache-Control": "no-store"
            }
        });
    }
}
async function PATCH(req) {
    try {
        const sessionUser = await resolveSessionUser(req);
        if (!sessionUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        const body = await jsonSafe(req);
        console.info("PATCH /api/me payload keys:", typeof body === "object" ? Object.keys(body) : typeof body);
        if (typeof body.email === "string" && body.email.trim().length > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Email cannot be changed via this endpoint"
            }, {
                status: 400
            });
        }
        const name = typeof body.name === "string" ? body.name.trim() : undefined;
        const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
        const incomingProfile = body.profile && typeof body.profile === "object" ? body.profile : {};
        if (!name || name.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Name is required"
        }, {
            status: 400
        });
        if (name.length > 200) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Name too long"
        }, {
            status: 400
        });
        if (phone && phone.length > 40) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Phone too long"
        }, {
            status: 400
        });
        const profileUpdates = {
            displayName: typeof incomingProfile.displayName === "string" ? incomingProfile.displayName.trim() : undefined,
            avatarUrl: typeof incomingProfile.avatarUrl === "string" ? incomingProfile.avatarUrl.trim() : undefined,
            bio: typeof incomingProfile.bio === "string" ? incomingProfile.bio.trim() : undefined,
            phoneNumber: typeof incomingProfile.phoneNumber === "string" ? incomingProfile.phoneNumber.trim() : phone ?? undefined
        };
        const metadata = {};
        if (typeof incomingProfile.country === "string") metadata.country = incomingProfile.country.trim();
        if (typeof incomingProfile.region === "string") metadata.region = incomingProfile.region.trim();
        if (typeof incomingProfile.district === "string") metadata.district = incomingProfile.district.trim();
        if (typeof incomingProfile.postalCode === "string") metadata.postalCode = incomingProfile.postalCode.trim();
        if (typeof incomingProfile.language === "string") metadata.language = incomingProfile.language.trim();
        let existingMetadata = {};
        try {
            const existingProfileRow = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
                where: {
                    userId: sessionUser.id
                },
                select: {
                    metadata: true
                }
            });
            existingMetadata = existingProfileRow?.metadata ?? {};
        } catch (err) {
            console.warn("[PATCH /api/me] could not read existing profile metadata:", err);
            existingMetadata = {};
        }
        const mergedMetadata = {
            ...existingMetadata,
            ...metadata
        };
        const dataToUpdate = {
            name,
            ...phone !== undefined ? {
                phone
            } : {},
            profile: {
                upsert: {
                    create: {
                        displayName: profileUpdates.displayName ?? null,
                        avatarUrl: profileUpdates.avatarUrl ?? null,
                        bio: profileUpdates.bio ?? null,
                        phoneNumber: profileUpdates.phoneNumber ?? null,
                        metadata: mergedMetadata
                    },
                    update: {
                        ...profileUpdates.displayName !== undefined ? {
                            displayName: profileUpdates.displayName
                        } : {},
                        ...profileUpdates.avatarUrl !== undefined ? {
                            avatarUrl: profileUpdates.avatarUrl
                        } : {},
                        ...profileUpdates.bio !== undefined ? {
                            bio: profileUpdates.bio
                        } : {},
                        ...profileUpdates.phoneNumber !== undefined ? {
                            phoneNumber: profileUpdates.phoneNumber
                        } : {},
                        metadata: mergedMetadata
                    }
                }
            }
        };
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: sessionUser.id
            },
            data: dataToUpdate,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                profile: true,
                organization: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        console.info("PATCH /api/me updated user id:", updatedUser.id);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            user: updatedUser
        }, {
            status: 200
        });
    } catch (err) {
        console.error("PATCH /api/me error:", err?.message ?? err, err?.stack ?? "");
        if (err?.code) console.error("Prisma error code:", err.code, "meta:", err.meta ?? null);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b82cd87._.js.map