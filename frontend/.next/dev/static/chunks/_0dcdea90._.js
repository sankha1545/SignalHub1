(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/admin/teams/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Team Card Component
const TeamCard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "d4d0c21893ebefad296daa78a67cdb36689f8e38708f04b169f77e6abf7f60da") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4d0c21893ebefad296daa78a67cdb36689f8e38708f04b169f77e6abf7f60da";
    }
    const { team, delay } = t0;
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 20
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== delay) {
        t3 = {
            duration: 0.4,
            delay
        };
        $[3] = delay;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>setIsHovered(true);
        t5 = ()=>setIsHovered(false);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = `w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient} flex items-center justify-center shadow-lg`;
    let t8;
    if ($[8] !== isHovered) {
        t8 = isHovered ? {
            scale: 1.05,
            rotate: 5
        } : {
            scale: 1,
            rotate: 0
        };
        $[8] = isHovered;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            duration: 0.3
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-7 h-7 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== t7 || $[13] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t7,
            animate: t8,
            transition: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== team.name) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-slate-800 mb-1",
            children: team.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = team.name;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== team.description) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500",
            children: team.description
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = team.description;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t12 || $[20] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t11 || $[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t11;
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 hover:bg-slate-100 rounded-lg transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-5 h-5 text-slate-400"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 141,
                columnNumber: 83
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== team.lead) {
        t18 = team.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 156,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0)),
                team.lead
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 156,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = team.lead;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== team.featured) {
        t19 = team.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 164,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0)),
                "Featured"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 164,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = team.featured;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2 mb-4",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t18;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== delay || $[36] !== team.members) {
        let t22;
        if ($[38] !== delay) {
            t22 = (member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        duration: 0.2,
                        delay: delay + idx * 0.05
                    },
                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm",
                    title: member.name,
                    children: member.initials
                }, idx, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 183,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0));
            $[38] = delay;
            $[39] = t22;
        } else {
            t22 = $[39];
        }
        t21 = team.members.slice(0, 5).map(t22);
        $[35] = delay;
        $[36] = team.members;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[40] !== team.members.length) {
        t22 = team.members.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600",
            children: [
                "+",
                team.members.length - 5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 205,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = team.members.length;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t21 || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex -space-x-2 mb-4 flex-wrap",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t21;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== team.members.length) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: team.members.length
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = team.members.length;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Members"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t24;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== team.projects) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: team.projects
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = team.projects;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t27;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] !== team.completion) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-emerald-600",
            children: [
                team.completion,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = team.completion;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Complete"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    let t32;
    if ($[58] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t30;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t26 || $[61] !== t29 || $[62] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 mb-4 text-center",
            children: [
                t26,
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t26;
        $[61] = t29;
        $[62] = t32;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    let t35;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            scale: 1.02
        };
        t35 = {
            scale: 0.98
        };
        $[64] = t34;
        $[65] = t35;
    } else {
        t34 = $[64];
        t35 = $[65];
    }
    let t36;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t34,
            whileTap: t35,
            className: "flex-1 px-4 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 316,
                    columnNumber: 268
                }, ("TURBOPACK compile-time value", void 0)),
                "Message"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t36;
    } else {
        t36 = $[66];
    }
    let t37;
    let t38;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            scale: 1.05
        };
        t38 = {
            scale: 0.95
        };
        $[67] = t37;
        $[68] = t38;
    } else {
        t37 = $[67];
        t38 = $[68];
    }
    let t39;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-2",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: t37,
                    whileTap: t38,
                    className: "px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-200 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 338,
                        columnNumber: 255
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 338,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== t17 || $[71] !== t20 || $[72] !== t23 || $[73] !== t33) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t17,
                t20,
                t23,
                t33,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t17;
        $[71] = t20;
        $[72] = t23;
        $[73] = t33;
        $[74] = t40;
    } else {
        t40 = $[74];
    }
    let t41;
    if ($[75] !== t3 || $[76] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            onMouseEnter: t4,
            onMouseLeave: t5,
            className: "relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden",
            children: [
                t6,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t3;
        $[76] = t40;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    return t41;
};
_s(TeamCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = TeamCard;
// Stats Card Component
const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "d4d0c21893ebefad296daa78a67cdb36689f8e38708f04b169f77e6abf7f60da") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4d0c21893ebefad296daa78a67cdb36689f8e38708f04b169f77e6abf7f60da";
    }
    const { icon: Icon, label, value, subtitle, gradient, delay } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            scale: 0.95
        };
        t2 = {
            opacity: 1,
            scale: 1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== delay) {
        t3 = {
            duration: 0.3,
            delay
        };
        $[3] = delay;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`;
    let t5;
    if ($[5] !== Icon) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 414,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = Icon;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 422,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-5 h-5 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 431,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 438,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== value) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-bold text-slate-800 mb-1",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 446,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = value;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== label) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-slate-600 mb-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = label;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== subtitle) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = subtitle;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t3 || $[22] !== t8 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            className: "p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
        $[21] = t3;
        $[22] = t8;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
};
_c1 = StatCard;
function TeamsPage() {
    _s1();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const teams = [
        {
            id: 1,
            name: "Product Development",
            description: "Building the next generation platform",
            lead: "Sarah Chen",
            featured: true,
            gradient: "from-blue-500 to-cyan-500",
            projects: 8,
            completion: 92,
            members: [
                {
                    name: "Sarah Chen",
                    initials: "SC"
                },
                {
                    name: "Mike Ross",
                    initials: "MR"
                },
                {
                    name: "Emma Wilson",
                    initials: "EW"
                },
                {
                    name: "John Doe",
                    initials: "JD"
                },
                {
                    name: "Lisa Park",
                    initials: "LP"
                },
                {
                    name: "Alex Kim",
                    initials: "AK"
                }
            ]
        },
        {
            id: 2,
            name: "Design Team",
            description: "Creating beautiful user experiences",
            lead: "Emily Rodriguez",
            featured: true,
            gradient: "from-violet-500 to-purple-500",
            projects: 12,
            completion: 88,
            members: [
                {
                    name: "Emily Rodriguez",
                    initials: "ER"
                },
                {
                    name: "David Lee",
                    initials: "DL"
                },
                {
                    name: "Sophie Turner",
                    initials: "ST"
                },
                {
                    name: "James Wilson",
                    initials: "JW"
                }
            ]
        },
        {
            id: 3,
            name: "Marketing",
            description: "Growing our brand and reach",
            lead: "Michael Brown",
            featured: false,
            gradient: "from-orange-500 to-rose-500",
            projects: 15,
            completion: 95,
            members: [
                {
                    name: "Michael Brown",
                    initials: "MB"
                },
                {
                    name: "Anna Taylor",
                    initials: "AT"
                },
                {
                    name: "Chris Martin",
                    initials: "CM"
                },
                {
                    name: "Rachel Green",
                    initials: "RG"
                },
                {
                    name: "Tom Hardy",
                    initials: "TH"
                }
            ]
        },
        {
            id: 4,
            name: "Customer Success",
            description: "Ensuring customer satisfaction",
            lead: "Jennifer Lopez",
            featured: false,
            gradient: "from-emerald-500 to-teal-500",
            projects: 6,
            completion: 90,
            members: [
                {
                    name: "Jennifer Lopez",
                    initials: "JL"
                },
                {
                    name: "Robert Brown",
                    initials: "RB"
                },
                {
                    name: "Maria Garcia",
                    initials: "MG"
                }
            ]
        },
        {
            id: 5,
            name: "Engineering",
            description: "Building scalable infrastructure",
            lead: "Alex Thompson",
            featured: true,
            gradient: "from-cyan-500 to-blue-500",
            projects: 10,
            completion: 87,
            members: [
                {
                    name: "Alex Thompson",
                    initials: "AT"
                },
                {
                    name: "Kevin Zhang",
                    initials: "KZ"
                },
                {
                    name: "Nina Patel",
                    initials: "NP"
                },
                {
                    name: "Oscar Lee",
                    initials: "OL"
                },
                {
                    name: "Paula White",
                    initials: "PW"
                },
                {
                    name: "Quinn Davis",
                    initials: "QD"
                }
            ]
        },
        {
            id: 6,
            name: "Sales",
            description: "Driving revenue growth",
            lead: "Daniel Kim",
            featured: false,
            gradient: "from-pink-500 to-rose-500",
            projects: 20,
            completion: 93,
            members: [
                {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                {
                    name: "Samantha Cole",
                    initials: "SC"
                },
                {
                    name: "Tyler Adams",
                    initials: "TA"
                },
                {
                    name: "Uma Singh",
                    initials: "US"
                }
            ]
        }
    ];
    const filteredTeams = teams.filter((team)=>team.name.toLowerCase().includes(searchQuery.toLowerCase()) || team.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const stats = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Total Teams",
            value: teams.length.toString(),
            subtitle: "+2 this month",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            label: "Active Members",
            value: teams.reduce((acc, t)=>acc + t.members.length, 0).toString(),
            subtitle: "Across all teams",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            label: "Active Projects",
            value: teams.reduce((acc_0, t_0)=>acc_0 + t_0.projects, 0).toString(),
            subtitle: "In progress",
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            label: "Avg Completion",
            value: Math.round(teams.reduce((acc_1, t_1)=>acc_1 + t_1.completion, 0) / teams.length) + "%",
            subtitle: "+5% from last month",
            gradient: "from-orange-500 to-rose-500"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2",
                            children: "Teams"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 13
                                }, this),
                                "Manage and collaborate with your teams"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 672,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 660,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8",
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            ...stat,
                            delay: index * 0.1
                        }, stat.label, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 680,
                            columnNumber: 39
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.2
                    },
                    className: "mb-6 flex flex-col sm:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search teams...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 696,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 694,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            className: "px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 704,
                                    columnNumber: 13
                                }, this),
                                "Create Team"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 699,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 684,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: filteredTeams.map((team_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                            team: team_0,
                            delay: 0.3 + index_0 * 0.1
                        }, team_0.id, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 711,
                            columnNumber: 51
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 710,
                    columnNumber: 9
                }, this),
                filteredTeams.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "py-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-8 h-8 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 723,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 722,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-2",
                            children: "No teams found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 725,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 mb-4",
                            children: "Try adjusting your search query"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 726,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 715,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 658,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 657,
        columnNumber: 10
    }, this);
}
_s1(TeamsPage, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c2 = TeamsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TeamCard");
__turbopack_context__.k.register(_c1, "StatCard");
__turbopack_context__.k.register(_c2, "TeamsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>EllipsisVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "19",
            r: "1",
            key: "lyex9k"
        }
    ]
];
const EllipsisVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ellipsis-vertical", __iconNode);
;
 //# sourceMappingURL=ellipsis-vertical.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoreVertical",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageSquare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }
    ]
];
const MessageSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("message-square", __iconNode);
;
 //# sourceMappingURL=message-square.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Award
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }
    ]
];
const Award = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("award", __iconNode);
;
 //# sourceMappingURL=award.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Award",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Target
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
];
const Target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("target", __iconNode);
;
 //# sourceMappingURL=target.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Target",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0dcdea90._.js.map