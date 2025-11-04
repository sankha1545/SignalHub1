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
"[project]/src/app/api/phone/verify-otp/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/phone/verify-otp/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
function safeStringify(v) {
    try {
        return JSON.stringify(v);
    } catch  {
        return String(v);
    }
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const phone = body?.phone;
        const otp = body?.otp;
        if (!phone || !otp) {
            console.warn("[verify-otp] missing phone or otp", {
                phone,
                otp
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Phone and OTP are required"
            }, {
                status: 400
            });
        }
        // Find the most recent unused OTP record for this phone
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.findFirst({
            where: {
                phone,
                used: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!record) {
            console.warn("[verify-otp] no otp record found for phone", phone);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No OTP found for this phone"
            }, {
                status: 404
            });
        }
        // Check expiry (5 minutes)
        const now = new Date();
        const createdAt = new Date(record.createdAt);
        const diffMins = (now.getTime() - createdAt.getTime()) / 60000;
        if (diffMins > 5) {
            console.warn("[verify-otp] otp expired", {
                phone,
                createdAt,
                diffMins
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "OTP expired. Please request a new one."
            }, {
                status: 400
            });
        }
        // Attempt limit
        if (record.attempts >= 5) {
            console.warn("[verify-otp] too many attempts", {
                phone,
                attempts: record.attempts
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Too many attempts. Request new OTP."
            }, {
                status: 429
            });
        }
        // Wrong OTP -> increment attempts and return error
        if (record.otp !== otp) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.update({
                where: {
                    id: record.id
                },
                data: {
                    attempts: record.attempts + 1
                }
            });
            console.warn("[verify-otp] invalid otp attempt", {
                phone,
                attempts: record.attempts + 1
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid OTP"
            }, {
                status: 400
            });
        }
        // Mark OTP used
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.update({
            where: {
                id: record.id
            },
            data: {
                used: true
            }
        });
        // Try to find the User via profile.phoneNumber (preferred). This might throw if schema doesn't have phoneNumber.
        let matchedUser = null;
        try {
            matchedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
                where: {
                    profile: {
                        is: {
                            phoneNumber: phone
                        }
                    }
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    profile: true,
                    role: true
                }
            });
        } catch (err) {
            // If this is a Prisma validation error because phoneNumber doesn't exist, fallback below
            if (err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].PrismaClientValidationError || err && err.message && err.message.includes("Unknown argument")) {
                console.info("[verify-otp] profile.phoneNumber filter not available in schema, falling back to metadata/string-scan lookup");
                matchedUser = null;
            } else {
                // unexpected error — rethrow
                console.error("[verify-otp] unexpected error during user lookup:", err);
                throw err;
            }
        }
        // Fallback: if matchedUser is still null, attempt to find profile by inspecting stored profile fields.
        // This fallback reads a small set of candidate profiles (by phone contained in metadata or similar).
        if (!matchedUser) {
            // Try to find a profile row where metadata JSON or text fields contain the phone string.
            // We'll fetch recent profiles (safeguard) and check JS-side for phone string in candidate fields.
            // NOTE: adjust `take` if you expect many users (this is a heuristic fallback).
            const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findMany({
                orderBy: {
                    updatedAt: "desc"
                },
                take: 200,
                select: {
                    id: true,
                    userId: true,
                    displayName: true,
                    avatarUrl: true,
                    bio: true,
                    metadata: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            const phoneNormalized = String(phone).replace(/\s|-/g, "");
            const found = candidates.find((p)=>{
                // check common fields and metadata
                try {
                    if (p.metadata) {
                        const metaStr = safeStringify(p.metadata);
                        if (metaStr.includes(phone) || metaStr.includes(phoneNormalized)) return true;
                    }
                } catch  {}
                if (p.displayName && String(p.displayName).includes(phone)) return true;
                if (p.bio && String(p.bio).includes(phone)) return true;
                return false;
            });
            if (found) {
                matchedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        id: found.userId
                    },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        profile: true,
                        role: true
                    }
                });
                console.info("[verify-otp] matched user by scanning profiles", {
                    phone,
                    profileId: found.id,
                    userId: found.userId
                });
            } else {
                console.warn("[verify-otp] fallback scan did not match any profile for phone", phone);
            }
        }
        if (!matchedUser) {
            // No user found; return success for OTP verification but inform caller
            console.warn("[verify-otp] otp verified but no user found for phone", phone);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                message: "OTP verified but no user account found for this phone."
            });
        }
        // Update profile: try update existing profile by userId; upsert if not exists
        try {
            // Prefer update by userId
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.upsert({
                where: {
                    userId: matchedUser.id
                },
                create: {
                    userId: matchedUser.id,
                    // create minimal profile — adjust required fields accordingly
                    phoneNumber: phone,
                    phoneVerified: true,
                    phoneVerifiedAt: new Date()
                },
                update: {
                    // set canonical phone + verified flags
                    // if your schema doesn't have these fields, this may throw — catch below
                    phoneNumber: phone,
                    phoneVerified: true,
                    phoneVerifiedAt: new Date()
                }
            });
        } catch (err) {
            // If upsert fails because schema doesn't have phoneNumber/phoneVerified fields,
            // attempt to store verification inside metadata JSON (non-ideal but safe).
            console.warn("[verify-otp] upsert to profile with phone fields failed — falling back to metadata patch", err);
            try {
                // load current profile
                const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
                    where: {
                        userId: matchedUser.id
                    },
                    select: {
                        id: true,
                        metadata: true
                    }
                });
                const newMeta = {
                    ...existing?.metadata ?? {}
                };
                newMeta.phoneVerified = true;
                newMeta.phoneVerifiedAt = new Date().toISOString();
                newMeta.phone = phone;
                if (existing) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.update({
                        where: {
                            userId: matchedUser.id
                        },
                        data: {
                            metadata: newMeta
                        }
                    });
                } else {
                    // if profile doesn't exist, create one with metadata
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.create({
                        data: {
                            userId: matchedUser.id,
                            metadata: newMeta
                        }
                    });
                }
            } catch (metaErr) {
                console.error("[verify-otp] fallback metadata update failed:", metaErr);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Failed to update profile after verifying OTP"
                }, {
                    status: 500
                });
            }
        }
        // Return updated user (fresh)
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: matchedUser.id
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
        console.info("[verify-otp] phone verified and profile updated for user", matchedUser.id);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Phone verified successfully",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a20bc42._.js.map