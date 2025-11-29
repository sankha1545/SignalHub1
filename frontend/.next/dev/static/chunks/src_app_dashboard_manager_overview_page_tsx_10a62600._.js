(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/manager/overview/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/manager/overview/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ManagerOverviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StatCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "a8076cf48c06c0c97516dcfdae9b45811705522bbf4f6efd78140ed1b1fd76ad") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8076cf48c06c0c97516dcfdae9b45811705522bbf4f6efd78140ed1b1fd76ad";
    }
    const { title, value, change: t1, trend: t2, icon: Icon, gradient, delay: t3 } = t0;
    const change = t1 === undefined ? "" : t1;
    const trend = t2 === undefined ? "up" : t2;
    const delay = t3 === undefined ? 0 : t3;
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0,
            y: 14
        };
        t5 = {
            opacity: 1,
            y: 0
        };
        $[1] = t4;
        $[2] = t5;
    } else {
        t4 = $[1];
        t5 = $[2];
    }
    let t6;
    if ($[3] !== delay) {
        t6 = {
            duration: 0.36,
            delay
        };
        $[3] = delay;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    let t8;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "StatCard[<motion.div>.onMouseEnter]": ()=>setHover(true)
        })["StatCard[<motion.div>.onMouseEnter]"];
        t8 = ({
            "StatCard[<motion.div>.onMouseLeave]": ()=>setHover(false)
        })["StatCard[<motion.div>.onMouseLeave]"];
        $[5] = t7;
        $[6] = t8;
    } else {
        t7 = $[5];
        t8 = $[6];
    }
    let t9;
    if ($[7] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mb-1",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] !== value) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-800",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[9] = value;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== t10 || $[12] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t9;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== hover) {
        t12 = hover ? {
            scale: 1.06,
            rotate: 6
        } : {
            scale: 1,
            rotate: 0
        };
        $[14] = hover;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            duration: 0.22
        };
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const t14 = `w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow`;
    let t15;
    if ($[17] !== Icon) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[17] = Icon;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t12 || $[20] !== t14 || $[21] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t12,
            transition: t13,
            className: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t14;
        $[21] = t15;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t11 || $[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-3",
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    const t18 = `px-2 py-1 rounded ${trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`;
    const t19 = change || (trend === "up" ? "\u2014" : "\u2014");
    let t20;
    if ($[26] !== t18 || $[27] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "vs last month"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-slate-500",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== t17 || $[33] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition",
            children: [
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t22;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] !== t23 || $[36] !== t6) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t4,
            animate: t5,
            transition: t6,
            onMouseEnter: t7,
            onMouseLeave: t8,
            className: "relative",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[35] = t23;
        $[36] = t6;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    return t24;
}
_s(StatCard, "bRXmKus9fOZFlca/6zXTYU+twGY=");
_c = StatCard;
function MemberRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "a8076cf48c06c0c97516dcfdae9b45811705522bbf4f6efd78140ed1b1fd76ad") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8076cf48c06c0c97516dcfdae9b45811705522bbf4f6efd78140ed1b1fd76ad";
    }
    const { member } = t0;
    let t1;
    if ($[1] !== member.name) {
        t1 = member.name ? member.name.charAt(0).toUpperCase() : "U";
        $[1] = member.name;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-sm",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 248,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== member.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-medium text-slate-800 truncate",
            children: member.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        $[5] = member.name;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = member.email ?? "No email";
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500 truncate",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 273,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const t7 = `text-xs px-2 py-1 rounded ${member.online ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`;
    const t8 = member.online ? "Online" : "Offline";
    let t9;
    if ($[12] !== t7 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 284,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            title: "Message",
            className: "p-1 rounded hover:bg-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-4 h-4 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 293,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            title: "More",
            className: "p-1 rounded hover:bg-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "w-4 h-4 text-slate-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 300,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t12 || $[20] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    t6,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 315,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t6;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t13 || $[23] !== t2) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition",
            children: [
                t2,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t2;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    return t14;
}
_c1 = MemberRow;
/* ---------------- Schedule Modal ---------------- */ function ScheduleModal({ open, defaultOrganizer, defaultTeamId, onClose, onCreated }) {
    _s1();
    const [organizer, setOrganizer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOrganizer ?? "");
    const [datetime, setDatetime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reminder, setReminder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teamId, setTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTeamId ?? null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScheduleModal.useEffect": ()=>{
            if (open) {
                setOrganizer(defaultOrganizer ?? "");
                setDatetime("");
                setReminder(10);
                setTeamId(defaultTeamId ?? null);
                setError(null);
                setLoading(false);
            }
        }
    }["ScheduleModal.useEffect"], [
        open,
        defaultOrganizer,
        defaultTeamId
    ]);
    const handleSubmit = async (e)=>{
        e?.preventDefault();
        setError(null);
        if (!organizer || !datetime) {
            setError("Provide organizer and date/time.");
            return;
        }
        const dt = new Date(datetime);
        if (Number.isNaN(dt.getTime())) {
            setError("Invalid date/time.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/schedule/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    organizer,
                    sendAt: dt.toISOString(),
                    reminderMinutes: reminder,
                    teamId
                }),
                credentials: "same-origin"
            });
            const json = await res.json().catch(()=>({}));
            if (!res.ok) {
                throw new Error(json?.message || "Failed to schedule");
            }
            onCreated?.(json);
            onClose(true);
        } catch (err) {
            setError(err?.message || "Network error");
        } finally{
            setLoading(false);
        }
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: ()=>onClose(false)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.98,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.12
                },
                className: "relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Schedule meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md hover:bg-slate-100",
                                onClick: ()=>onClose(false),
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Organizer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: organizer,
                                        onChange: (e_0)=>setOrganizer(e_0.target.value),
                                        className: "w-full mt-1 p-2 border rounded-md text-sm",
                                        placeholder: "Organizer name or email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Date & time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "datetime-local",
                                        value: datetime,
                                        onChange: (e_1)=>setDatetime(e_1.target.value),
                                        className: "w-full mt-1 p-2 border rounded-md text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Reminder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: String(reminder),
                                        onChange: (e_2)=>setReminder(Number(e_2.target.value)),
                                        className: "w-full mt-1 p-2 border rounded-md text-sm",
                                        children: [
                                            10,
                                            20,
                                            30,
                                            40,
                                            50,
                                            60
                                        ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m,
                                                children: [
                                                    m,
                                                    " minutes before"
                                                ]
                                            }, m, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 50
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: "Reminder will be scheduled as meeting_time - reminder."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-rose-600",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 441,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onClose(false),
                                        className: "px-3 py-1 rounded-md",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "px-4 py-2 rounded-md bg-indigo-600 text-white",
                                        children: loading ? "Scheduling…" : "Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
        lineNumber: 404,
        columnNumber: 10
    }, this);
}
_s1(ScheduleModal, "/XrXAs/1H7atClJJCX+HX9YdoE8=");
_c2 = ScheduleModal;
/* ---------------- Invite Modal ---------------- */ function InviteModal({ open, defaultTeamId, teams, onClose, onSent }) {
    _s2();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [teamId, setTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTeamId ?? null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMsg, setSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InviteModal.useEffect": ()=>{
            if (open) {
                setEmail("");
                setTeamId(defaultTeamId ?? null);
                setMessage("");
                setSending(false);
                setError(null);
                setSuccessMsg(null);
            }
        }
    }["InviteModal.useEffect"], [
        open,
        defaultTeamId
    ]);
    function isValidEmail(e) {
        if (!e) return false;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    }
    const handleSend = async (ev)=>{
        ev?.preventDefault();
        setError(null);
        setSuccessMsg(null);
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setSending(true);
        try {
            const body = {
                email: email.trim().toLowerCase(),
                role: "EMPLOYEE"
            };
            if (teamId) body.teamId = teamId;
            if (message) body.message = message;
            const res = await fetch("/api/invites/creates", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
                credentials: "same-origin"
            });
            const json = await res.json().catch(()=>({}));
            if (!res.ok || !json?.ok) {
                // surface server message where available
                const msg = json?.message || json?.error || "Failed to send invite.";
                throw new Error(msg);
            }
            setSuccessMsg("Invite sent — the employee will receive an email with the signup link.");
            onSent?.(json);
            // keep modal open briefly to show success, then close
            setTimeout(()=>{
                onClose(true);
            }, 900);
        } catch (err) {
            setError(err?.message || "Network error");
        } finally{
            setSending(false);
        }
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: ()=>onClose(false)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.98,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.12
                },
                className: "relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-indigo-600 text-white rounded-md p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 70
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: "Invite employee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md hover:bg-slate-100",
                                onClick: ()=>onClose(false),
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSend,
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Employee email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: email,
                                        onChange: (e_0)=>setEmail(e_0.target.value),
                                        placeholder: "employee@example.com",
                                        className: "w-full mt-1 p-2 border rounded-md text-sm",
                                        type: "email",
                                        autoComplete: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Team (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: teamId ?? "",
                                        onChange: (e_1)=>setTeamId(e_1.target.value || null),
                                        className: "w-full mt-1 p-2 border rounded-md text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "(No team — general invite)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 15
                                            }, this),
                                            teams.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: t.id,
                                                    children: t.name
                                                }, t.id, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 31
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: "Assign the employee to a team upon signup."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Message (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: message,
                                        onChange: (e_2)=>setMessage(e_2.target.value),
                                        className: "w-full mt-1 p-2 border rounded-md text-sm",
                                        rows: 3,
                                        placeholder: "Short message that appears in the invite email (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-rose-600",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 573,
                                columnNumber: 21
                            }, this),
                            successMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-emerald-600",
                                children: successMsg
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 574,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onClose(false),
                                        className: "px-3 py-1 rounded-md",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: sending,
                                        className: "px-4 py-2 rounded-md bg-indigo-600 text-white",
                                        children: sending ? "Sending…" : "Send invite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
        lineNumber: 532,
        columnNumber: 10
    }, this);
}
_s2(InviteModal, "x58o5UBkC7Lsnt105oEIpr9GgU0=");
_c3 = InviteModal;
function ManagerOverviewPage() {
    _s3();
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamsLoading, setTeamsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teamsError, setTeamsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTeamId, setSelectedTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metricsLoading, setMetricsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [membersLoading, setMembersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tasksLoading, setTasksLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [meetings, setMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [meetingsLoading, setMeetingsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduleOpen, setScheduleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Invite modal state
    const [inviteOpen, setInviteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* -- load teams -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerOverviewPage.useEffect": ()=>{
            let mounted = true;
            setTeamsLoading(true);
            setTeamsError(null);
            ({
                "ManagerOverviewPage.useEffect": async ()=>{
                    try {
                        const res = await fetch("/api/dashboard/teams", {
                            credentials: "same-origin"
                        });
                        if (!res.ok) {
                            throw new Error("Failed to load teams");
                        }
                        const j = await res.json().catch({
                            "ManagerOverviewPage.useEffect": ()=>({})
                        }["ManagerOverviewPage.useEffect"]);
                        const list = Array.isArray(j) ? j : j?.teams ?? [];
                        if (mounted) {
                            setTeams(list);
                            if (!selectedTeamId && list.length > 0) setSelectedTeamId(list[0].id);
                        }
                    } catch (err) {
                        if (mounted) setTeamsError(err?.message || "Could not fetch teams");
                    } finally{
                        if (mounted) setTeamsLoading(false);
                    }
                }
            })["ManagerOverviewPage.useEffect"]();
            return ({
                "ManagerOverviewPage.useEffect": ()=>{
                    mounted = false;
                }
            })["ManagerOverviewPage.useEffect"];
        }
    }["ManagerOverviewPage.useEffect"], []);
    /* -- load metrics when selectedTeamId changes -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerOverviewPage.useEffect": ()=>{
            let mounted_0 = true;
            if (!selectedTeamId) {
                setMetrics(null);
                return;
            }
            setMetricsLoading(true);
            ({
                "ManagerOverviewPage.useEffect": async ()=>{
                    try {
                        const res_0 = await fetch(`/api/dashboard/manager/metrics?teamId=${encodeURIComponent(selectedTeamId)}`, {
                            credentials: "same-origin"
                        });
                        if (!res_0.ok) {
                            throw new Error("Metrics unavailable");
                        }
                        const j_0 = await res_0.json().catch({
                            "ManagerOverviewPage.useEffect": ()=>({})
                        }["ManagerOverviewPage.useEffect"]);
                        const m = j_0?.metrics ?? {
                            conversations: j_0?.conversations,
                            avgResponseHours: j_0?.avgResponseHours,
                            openTasks: j_0?.openTasks,
                            utilizationPercent: j_0?.utilizationPercent
                        };
                        if (mounted_0) setMetrics(m ?? null);
                    } catch  {
                        if (mounted_0) setMetrics(null);
                    } finally{
                        if (mounted_0) setMetricsLoading(false);
                    }
                }
            })["ManagerOverviewPage.useEffect"]();
            return ({
                "ManagerOverviewPage.useEffect": ()=>{
                    mounted_0 = false;
                }
            })["ManagerOverviewPage.useEffect"];
        }
    }["ManagerOverviewPage.useEffect"], [
        selectedTeamId
    ]);
    /* -- load members -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerOverviewPage.useEffect": ()=>{
            let mounted_1 = true;
            if (!selectedTeamId) {
                setMembers([]);
                return;
            }
            setMembersLoading(true);
            ({
                "ManagerOverviewPage.useEffect": async ()=>{
                    try {
                        const res_1 = await fetch(`/api/dashboard/teams/${encodeURIComponent(selectedTeamId)}/members`, {
                            credentials: "same-origin"
                        });
                        if (!res_1.ok) {
                            // try alternative endpoint
                            const alt = await fetch(`/api/dashboard/teams/members?teamId=${encodeURIComponent(selectedTeamId)}`, {
                                credentials: "same-origin"
                            });
                            if (!alt.ok) throw new Error("Members endpoint failed");
                            const aj = await alt.json().catch({
                                "ManagerOverviewPage.useEffect": ()=>({})
                            }["ManagerOverviewPage.useEffect"]);
                            const altList = Array.isArray(aj) ? aj : aj?.members ?? [];
                            if (mounted_1) setMembers(altList);
                            return;
                        }
                        const j_1 = await res_1.json().catch({
                            "ManagerOverviewPage.useEffect": ()=>({})
                        }["ManagerOverviewPage.useEffect"]);
                        const list_0 = Array.isArray(j_1) ? j_1 : j_1?.members ?? [];
                        if (mounted_1) setMembers(list_0);
                    } catch  {
                        if (mounted_1) setMembers([]);
                    } finally{
                        if (mounted_1) setMembersLoading(false);
                    }
                }
            })["ManagerOverviewPage.useEffect"]();
            return ({
                "ManagerOverviewPage.useEffect": ()=>{
                    mounted_1 = false;
                }
            })["ManagerOverviewPage.useEffect"];
        }
    }["ManagerOverviewPage.useEffect"], [
        selectedTeamId
    ]);
    /* -- load tasks -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerOverviewPage.useEffect": ()=>{
            let mounted_2 = true;
            if (!selectedTeamId) {
                setTasks([]);
                return;
            }
            setTasksLoading(true);
            ({
                "ManagerOverviewPage.useEffect": async ()=>{
                    try {
                        const res_2 = await fetch(`/api/dashboard/tasks?teamId=${encodeURIComponent(selectedTeamId)}&status=open`, {
                            credentials: "same-origin"
                        });
                        if (!res_2.ok) throw new Error("Tasks failed");
                        const j_2 = await res_2.json().catch({
                            "ManagerOverviewPage.useEffect": ()=>({})
                        }["ManagerOverviewPage.useEffect"]);
                        const list_1 = Array.isArray(j_2) ? j_2 : j_2?.tasks ?? [];
                        if (mounted_2) setTasks(list_1);
                    } catch  {
                        if (mounted_2) setTasks([]);
                    } finally{
                        if (mounted_2) setTasksLoading(false);
                    }
                }
            })["ManagerOverviewPage.useEffect"]();
            return ({
                "ManagerOverviewPage.useEffect": ()=>{
                    mounted_2 = false;
                }
            })["ManagerOverviewPage.useEffect"];
        }
    }["ManagerOverviewPage.useEffect"], [
        selectedTeamId
    ]);
    /* -- load upcoming meetings -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerOverviewPage.useEffect": ()=>{
            let mounted_3 = true;
            if (!selectedTeamId) {
                setMeetings([]);
                return;
            }
            setMeetingsLoading(true);
            ({
                "ManagerOverviewPage.useEffect": async ()=>{
                    try {
                        const res_3 = await fetch(`/api/dashboard/schedule/upcoming?teamId=${encodeURIComponent(selectedTeamId)}`, {
                            credentials: "same-origin"
                        });
                        if (!res_3.ok) throw new Error("Meetings failed");
                        const j_3 = await res_3.json().catch({
                            "ManagerOverviewPage.useEffect": ()=>({})
                        }["ManagerOverviewPage.useEffect"]);
                        const list_2 = Array.isArray(j_3) ? j_3 : j_3?.meetings ?? [];
                        if (mounted_3) setMeetings(list_2);
                    } catch  {
                        if (mounted_3) setMeetings([]);
                    } finally{
                        if (mounted_3) setMeetingsLoading(false);
                    }
                }
            })["ManagerOverviewPage.useEffect"]();
            return ({
                "ManagerOverviewPage.useEffect": ()=>{
                    mounted_3 = false;
                }
            })["ManagerOverviewPage.useEffect"];
        }
    }["ManagerOverviewPage.useEffect"], [
        selectedTeamId
    ]);
    /* -- derived stats -- */ const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ManagerOverviewPage.useMemo[stats]": ()=>{
            return [
                {
                    title: "Team Conversations",
                    value: metricsLoading ? "…" : String(metrics?.conversations ?? "—"),
                    change: "",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                    gradient: "from-blue-500 to-cyan-500"
                },
                {
                    title: "Avg. response",
                    value: metricsLoading ? "…" : `${metrics?.avgResponseHours ? `${metrics.avgResponseHours}h` : "—"}`,
                    change: "",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                    gradient: "from-violet-500 to-purple-500"
                },
                {
                    title: "Open tasks",
                    value: tasksLoading ? "…" : String(metrics?.openTasks ?? tasks.length ?? 0),
                    change: "",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"],
                    gradient: "from-emerald-500 to-teal-500"
                },
                {
                    title: "Utilization",
                    value: metricsLoading ? "…" : `${metrics?.utilizationPercent ? `${metrics.utilizationPercent}%` : "—"}`,
                    change: "",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                    gradient: "from-orange-500 to-rose-500"
                }
            ];
        }
    }["ManagerOverviewPage.useMemo[stats]"], [
        metrics,
        metricsLoading,
        tasks,
        tasksLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl w-12 h-12 bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-lg",
                                            children: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                            lineNumber: 814,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl md:text-4xl font-bold text-slate-900",
                                                    children: "Manager dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-slate-500",
                                                    children: "Overview of your team's performance and upcoming work."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                    lineNumber: 813,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-white rounded-lg px-3 py-2 border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "Search messages, tasks, members",
                                                    className: "text-sm outline-none py-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedTeamId ?? "",
                                                    onChange: (e)=>setSelectedTeamId(e.target.value || null),
                                                    className: "px-3 py-2 border rounded-md text-sm bg-white",
                                                    children: [
                                                        teamsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Loading teams…"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 36
                                                        }, this),
                                                        !teamsLoading && teams.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "No teams"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                            lineNumber: 830,
                                                            columnNumber: 59
                                                        }, this),
                                                        !teamsLoading && teams.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.id,
                                                                children: t.name
                                                            }, t.id, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 831,
                                                                columnNumber: 52
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setScheduleOpen(true),
                                                    className: "inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Schedule"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInviteOpen(true),
                                                    className: "inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                            lineNumber: 839,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Invite employee"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `/dashboard/manager/tasks/create?teamId=${selectedTeamId ?? ""}`,
                                                    className: "px-3 py-2 border rounded-md text-sm",
                                                    children: "Create task"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                            lineNumber: 827,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                    lineNumber: 821,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                            lineNumber: 812,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 803,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: stats.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: s.title,
                                value: s.value,
                                change: s.change,
                                trend: "up",
                                icon: s.icon,
                                gradient: s.gradient,
                                delay: idx * 0.08
                            }, s.title, false, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 850,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 849,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold",
                                                        children: "Team members"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-400",
                                                        children: [
                                                            members.length,
                                                            " members"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 859,
                                                columnNumber: 15
                                            }, this),
                                            membersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    1,
                                                    2,
                                                    3
                                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 bg-slate-100 rounded animate-pulse"
                                                    }, n, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 865,
                                                        columnNumber: 39
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 864,
                                                columnNumber: 33
                                            }, this) : members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: "No members found for this team."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 866,
                                                columnNumber: 49
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: members.map((m_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberRow, {
                                                        member: m_0
                                                    }, m_0.id, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 39
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 866,
                                                columnNumber: 129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold",
                                                        children: "Open tasks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 874,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-400",
                                                        children: [
                                                            tasks.length,
                                                            " open"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 15
                                            }, this),
                                            tasksLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    1,
                                                    2,
                                                    3
                                                ].map((n_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 bg-slate-100 rounded animate-pulse"
                                                    }, n_0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 878,
                                                columnNumber: 31
                                            }, this) : tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: "No open tasks for this team."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 880,
                                                columnNumber: 47
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: tasks.map((t_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3 p-3 border rounded-lg hover:bg-slate-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-medium text-slate-800 truncate",
                                                                        children: t_0.title ?? t_0.name ?? "Untitled task"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                        lineNumber: 883,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 truncate",
                                                                        children: t_0.description ?? t_0.summary ?? ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                        lineNumber: 884,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs px-2 py-1 rounded ${t_0.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-700" : t_0.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`,
                                                                        children: t_0.status ?? "open"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                        lineNumber: 887,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `/dashboard/manager/tasks/${t_0.id}`,
                                                                        className: "text-xs text-slate-600 hover:underline",
                                                                        children: "View"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 886,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, t_0.id ?? t_0.title, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 44
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 880,
                                                columnNumber: 124
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold",
                                                        children: "Upcoming meetings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/dashboard/manager/schedule?teamId=${selectedTeamId ?? ""}`,
                                                        className: "text-xs text-blue-600 flex items-center gap-1",
                                                        children: [
                                                            "All ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 903,
                                                                columnNumber: 150
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 15
                                            }, this),
                                            meetingsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    1,
                                                    2
                                                ].map((n_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 bg-slate-100 rounded animate-pulse"
                                                    }, n_1, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 38
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 906,
                                                columnNumber: 34
                                            }, this) : meetings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: "No upcoming meetings — schedule one."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 50
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: meetings.map((m_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 910,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm font-medium text-slate-800 truncate",
                                                                                    children: m_1.title ?? m_1.name ?? "Meeting"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                                    lineNumber: 916,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-slate-500",
                                                                                    children: [
                                                                                        m_1.organizer ?? "Organizer",
                                                                                        " • ",
                                                                                        m_1.sendAt ? new Date(m_1.sendAt).toLocaleString() : m_1.time ?? ""
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                                    lineNumber: 917,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                            lineNumber: 915,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: m_1.joinUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                href: m_1.joinUrl,
                                                                                className: "text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700",
                                                                                children: "Join"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                                lineNumber: 920,
                                                                                columnNumber: 44
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs px-2 py-1 rounded bg-slate-100",
                                                                                children: "Details"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                                lineNumber: 920,
                                                                                columnNumber: 144
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                    lineNumber: 914,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 913,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, m_1.id ?? m_1.title, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 47
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 135
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 900,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs font-semibold",
                                                                children: "Team health"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 932,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-lg font-bold mt-2",
                                                                children: "Good — keep momentum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-blue-50",
                                                        children: "Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 930,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Avg response"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 939,
                                                                columnNumber: 68
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: metrics ? `${metrics.avgResponseHours ?? "—"}h` : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 939,
                                                                columnNumber: 93
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 939,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Open tasks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 73
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: tasks.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 96
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Utilization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 73
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: metrics ? `${metrics.utilizationPercent ?? "—"}%` : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 97
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                        lineNumber: 929,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                                lineNumber: 898,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                        lineNumber: 854,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 801,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduleModal, {
                open: scheduleOpen,
                defaultOrganizer: undefined,
                defaultTeamId: selectedTeamId ?? undefined,
                onClose: (success)=>{
                    setScheduleOpen(false);
                    if (success) {
                        setToast("Meeting scheduled");
                        setTimeout(()=>{
                            setToast(null);
                            // refresh meetings
                            if (selectedTeamId) {
                                (async ()=>{
                                    try {
                                        setMeetingsLoading(true);
                                        const res_4 = await fetch(`/api/dashboard/schedule/upcoming?teamId=${encodeURIComponent(selectedTeamId)}`, {
                                            credentials: "same-origin"
                                        });
                                        const j_4 = await res_4.json().catch(()=>({}));
                                        const list_3 = Array.isArray(j_4) ? j_4 : j_4?.meetings ?? [];
                                        setMeetings(list_3);
                                    } catch  {
                                    // ignore
                                    } finally{
                                        setMeetingsLoading(false);
                                    }
                                })();
                            }
                        }, 800);
                    }
                },
                onCreated: ()=>{}
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 949,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InviteModal, {
                open: inviteOpen,
                defaultTeamId: selectedTeamId ?? undefined,
                teams: teams,
                onClose: (sent)=>{
                    setInviteOpen(false);
                    if (sent) {
                        setToast("Invite sent");
                        setTimeout(()=>setToast(null), 1800);
                    }
                },
                onSent: ()=>{
                // optionally refresh invited/pending lists here
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 978,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-6 bottom-6 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md shadow",
                children: toast
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
                lineNumber: 989,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/overview/page.tsx",
        lineNumber: 800,
        columnNumber: 10
    }, this);
}
_s3(ManagerOverviewPage, "JWZDIGub6frsscKT1Ia/cV6Oc+c=");
_c4 = ManagerOverviewPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "MemberRow");
__turbopack_context__.k.register(_c2, "ScheduleModal");
__turbopack_context__.k.register(_c3, "InviteModal");
__turbopack_context__.k.register(_c4, "ManagerOverviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_manager_overview_page_tsx_10a62600._.js.map