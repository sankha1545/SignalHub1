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
"[project]/src/app/api/invites/accept/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/invites/accept/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
/**
 * Accept an invite token and return the email and role for signup.
 *
 * Supports:
 *  - GET  /api/invites/accept?token=...
 *  - POST { token: "..." }
 *  - Authorization: Bearer <token>
 *
 * Response (success):
 *  {
 *    ok: true,
 *    email,
 *    role,
 *    organizationId,
 *    organizationName,
 *    teamId,
 *    expiresAt,
 *    createdAt,
 *    preverifiedEmail: true,
 *    message: "Invite valid"
 *  }
 *
 * Error responses are JSON with { ok: false, message } and appropriate HTTP status.
 *
 * NOTE: This endpoint only *validates* the invite token and returns metadata for the
 * frontend to prefill signup. The invite should be consumed (create user + mark invite accepted)
 * by the /api/invites/finalize endpoint.
 */ /* ---------- helpers ---------- */ function jsonError(message, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        message
    }, {
        status
    });
}
async function lookupInviteByToken(token) {
    // token is expected to be stored plainly in DB as unique token.
    // If you ever switch to hashed tokens, replace this with hash compare logic.
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].invite.findUnique({
        where: {
            token
        },
        include: {
            organization: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
}
async function GET(req) {
    try {
        const url = new URL(req.url);
        const token = (url.searchParams.get("token") || "").trim();
        if (!token) return jsonError("Missing invite token", 400);
        if (token.length < 16) return jsonError("Invalid invite token", 400);
        const invite = await lookupInviteByToken(token);
        if (!invite) return jsonError("Invalid invite token", 404);
        // Already accepted?
        if (invite.acceptedAt) return jsonError("Invite already used", 410);
        // Expiry check
        if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) return jsonError("Invite expired", 410);
        // Email sanity
        if (!invite.email || typeof invite.email !== "string") return jsonError("Invite missing target email", 500);
        const inviteEmail = invite.email.trim().toLowerCase();
        // Organization sanity
        if (!invite.organizationId) return jsonError("Invite missing organization reference", 500);
        const org = invite.organization ?? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].organization.findUnique({
            where: {
                id: invite.organizationId
            }
        });
        if (!org) return jsonError("Organization not found", 404);
        // Team -> org consistency
        if (invite.teamId) {
            const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
                where: {
                    id: invite.teamId
                },
                select: {
                    id: true,
                    organizationId: true
                }
            });
            if (!team) return jsonError("Invited team not found", 404);
            if (team.organizationId !== invite.organizationId) {
                return jsonError("Invited team does not belong to invite's organization", 400);
            }
        }
        // Ensure invite email not already registered
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email: inviteEmail
            }
        });
        if (existingUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Email already in use",
                detail: "The invited email is already registered in the system."
            }, {
                status: 409
            });
        }
        // Successful response (frontend expects these fields)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            email: inviteEmail,
            role: invite.role ?? null,
            organizationId: invite.organizationId ?? null,
            organizationName: org?.name ?? null,
            teamId: invite.teamId ?? null,
            expiresAt: invite.expiresAt ? invite.expiresAt.toISOString() : null,
            createdAt: invite.createdAt ? invite.createdAt.toISOString() : null,
            preverifiedEmail: true,
            message: "Invite valid"
        });
    } catch (err) {
        console.error("[invites/accept][GET] unexpected error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || "Server error" : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        let payload = {};
        try {
            payload = await req.json() || {};
        } catch  {
            payload = {};
        }
        // Token sources: body.token OR Authorization header
        let token = typeof payload?.token === "string" ? payload.token.trim() : "";
        if (!token) {
            const auth = req.headers.get("authorization") || req.headers.get("Authorization") || "";
            if (auth && typeof auth === "string" && auth.toLowerCase().startsWith("bearer ")) {
                token = auth.slice(7).trim();
            }
        }
        if (!token) return jsonError("Missing invite token", 400);
        if (token.length < 16) return jsonError("Invalid invite token", 400);
        const invite = await lookupInviteByToken(token);
        if (!invite) return jsonError("Invalid invite token", 404);
        if (invite.acceptedAt) return jsonError("Invite already used", 410);
        if (invite.expiresAt && invite.expiresAt.getTime() < Date.now()) return jsonError("Invite expired", 410);
        if (!invite.email || typeof invite.email !== "string") return jsonError("Invite missing target email", 500);
        const inviteEmail = invite.email.trim().toLowerCase();
        // Defensive org check
        if (!invite.organizationId) return jsonError("Invite missing organization reference", 500);
        const org = invite.organization ?? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].organization.findUnique({
            where: {
                id: invite.organizationId
            }
        });
        if (!org) return jsonError("Organization not found", 404);
        // Team -> org consistency
        if (invite.teamId) {
            const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
                where: {
                    id: invite.teamId
                },
                select: {
                    id: true,
                    organizationId: true
                }
            });
            if (!team) return jsonError("Invited team not found", 404);
            if (team.organizationId !== invite.organizationId) {
                return jsonError("Invited team does not belong to invite's organization", 400);
            }
        }
        // Ensure invite email not already registered
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email: inviteEmail
            }
        });
        if (existingUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Email already in use",
                detail: "The invited email is already registered in the system."
            }, {
                status: 409
            });
        }
        // All good — return invite metadata
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            email: inviteEmail,
            role: invite.role ?? null,
            organizationId: invite.organizationId ?? null,
            organizationName: org?.name ?? null,
            teamId: invite.teamId ?? null,
            expiresAt: invite.expiresAt ? invite.expiresAt.toISOString() : null,
            createdAt: invite.createdAt ? invite.createdAt.toISOString() : null,
            preverifiedEmail: true,
            message: "Invite valid"
        });
    } catch (err) {
        console.error("[invites/accept][POST] unexpected error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || "Server error" : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
function PUT() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        message: "Method not allowed"
    }, {
        status: 405
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1608ca77._.js.map