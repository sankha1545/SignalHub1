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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

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
"[project]/src/app/api/invites/finalize/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/invites/finalize/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
/**
 * POST /api/invites/finalize
 *
 * Accepts JSON:
 *  { token?: string, password: string, name?: string, phone?: string, phoneVerified?: boolean }
 * OR Authorization: Bearer <token> header + JSON body { password: "...", ... }
 *
 * Behavior:
 *  - Validate token + password
 *  - Ensure invite exists, not expired, not already accepted
 *  - Ensure invite.email is not already registered
 *  - Create user in a transaction, attach organization/team from invite if present
 *  - Mark invite.acceptedAt and status in same transaction
 *  - Return 201 with userId/email on success
 */ function validatePassword(p) {
    return typeof p === "string" && p.length >= 8;
}
function validateName(n) {
    return n === undefined || typeof n === "string" && n.trim().length > 0 && n.trim().length <= 200;
}
async function POST(req) {
    try {
        // parse body (defensive)
        let body = {};
        try {
            body = await req.json() || {};
        } catch  {
            body = {};
        }
        // token: body.token or Authorization: Bearer <token>
        let token = typeof body?.token === "string" && body.token.trim() ? body.token.trim() : null;
        if (!token) {
            const auth = req.headers.get("authorization") || req.headers.get("Authorization");
            if (auth && typeof auth === "string" && auth.toLowerCase().startsWith("bearer ")) {
                token = auth.slice(7).trim();
            }
        }
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Missing invite token (provide body.token or Authorization: Bearer <token>)"
            }, {
                status: 400
            });
        }
        const password = body?.password;
        if (!validatePassword(password)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Invalid password — must be at least 8 characters."
            }, {
                status: 400
            });
        }
        const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : undefined;
        if (!validateName(name)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Invalid name"
            }, {
                status: 400
            });
        }
        const phone = typeof body?.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
        const phoneVerifiedFlag = !!body?.phoneVerified;
        const now = new Date();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // load invite
            const invite = await tx.invite.findUnique({
                where: {
                    token
                }
            });
            if (!invite) throw {
                code: "INVITE_NOT_FOUND"
            };
            // expired?
            if (invite.expiresAt && invite.expiresAt.getTime() <= now.getTime()) throw {
                code: "INVITE_EXPIRED"
            };
            // used?
            if (invite.acceptedAt) throw {
                code: "INVITE_ALREADY_USED"
            };
            // ensure invite has target email
            const invitedEmail = (invite.email || "").trim().toLowerCase();
            if (!invitedEmail) throw {
                code: "INVITE_MISSING_EMAIL"
            };
            // ensure email not already registered
            const existing = await tx.user.findUnique({
                where: {
                    email: invitedEmail
                }
            });
            if (existing) throw {
                code: "EMAIL_ALREADY_REGISTERED"
            };
            // hash password
            const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(String(password), 10);
            // build create payload (do not include unknown fields like `username`)
            const createData = {
                email: invitedEmail,
                passwordHash,
                name: name ?? null,
                provider: "email",
                emailVerified: true,
                role: invite.role ?? "MEMBER"
            };
            if (phone) {
                createData.phone = phone;
                if (phoneVerifiedFlag) createData.phoneVerified = true;
            }
            if (invite.organizationId) {
                createData.organization = {
                    connect: {
                        id: invite.organizationId
                    }
                };
            }
            if (invite.teamId) {
                createData.team = {
                    connect: {
                        id: invite.teamId
                    }
                };
            }
            // create user
            const newUser = await tx.user.create({
                data: createData
            });
            // mark invite accepted (single-use)
            await tx.invite.update({
                where: {
                    id: invite.id
                },
                data: {
                    acceptedAt: new Date(),
                    status: "ACCEPTED"
                }
            });
            return {
                userId: newUser.id,
                email: newUser.email,
                organizationId: invite.organizationId ?? null
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Account created",
            ...result
        }, {
            status: 201
        });
    } catch (err) {
        // map thrown codes from transaction
        if (err && typeof err === "object" && "code" in err) {
            switch(err.code){
                case "INVITE_NOT_FOUND":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invalid invite token"
                    }, {
                        status: 404
                    });
                case "INVITE_EXPIRED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite expired"
                    }, {
                        status: 410
                    });
                case "INVITE_ALREADY_USED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite already used"
                    }, {
                        status: 410
                    });
                case "INVITE_MISSING_EMAIL":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite missing target email"
                    }, {
                        status: 500
                    });
                case "EMAIL_ALREADY_REGISTERED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Account already exists for this email"
                    }, {
                        status: 409
                    });
                default:
                    break;
            }
        }
        // Prisma unique constraint (extra safety)
        if (err && err.code === "P2002" && Array.isArray(err?.meta?.target)) {
            const target = err.meta.target.join(", ");
            console.error("[invites/finalize] Prisma unique constraint error:", target, err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: `Unique constraint failed: ${target}`
            }, {
                status: 409
            });
        }
        console.error("[invites/finalize] Fatal error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8abf6aee._.js.map