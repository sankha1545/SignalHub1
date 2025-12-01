(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/admin/analytics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/admin/analytics/page.tsx
__turbopack_context__.s([
    "default",
    ()=>AnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ------------------------------
   Helpers & small utilities
   ------------------------------ */ const rand = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;
const DAYS = 14;
const makePastDates = (n = DAYS)=>{
    const arr = [];
    for(let i = n - 1; i >= 0; i--){
        const d = new Date();
        d.setDate(d.getDate() - i);
        arr.push(d.toISOString().slice(0, 10));
    }
    return arr;
};
/** Shade (lighten/darken) a hex color by percent (-100..100). Returns 6-digit hex. */ function shadeColor(hexInput, percent) {
    // normalize
    let hex = hexInput.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map((c)=>c + c).join("");
    const num = parseInt(hex, 16);
    const r = num >> 16 & 0xff;
    const g = num >> 8 & 0xff;
    const b = num & 0xff;
    const adj = (v)=>{
        const out = Math.round(v + percent / 100 * 255);
        return Math.max(0, Math.min(255, out));
    };
    const rr = adj(r);
    const gg = adj(g);
    const bb = adj(b);
    return `#${(rr << 16 | gg << 8 | bb).toString(16).padStart(6, "0")}`;
}
function StatCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e";
    }
    const { title, value, change, trend, icon: Icon, gradient, delay: t1 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 18
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== delay) {
        t4 = {
            duration: 0.38,
            delay
        };
        $[3] = delay;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "StatCard[<motion.div>.onMouseEnter]": ()=>setHover(true)
        })["StatCard[<motion.div>.onMouseEnter]"];
        t6 = ({
            "StatCard[<motion.div>.onMouseLeave]": ()=>setHover(false)
        })["StatCard[<motion.div>.onMouseLeave]"];
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-slate-500 mb-1",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== value) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl sm:text-3xl font-bold text-slate-800",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[9] = value;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = `w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`;
    let t11;
    if ($[14] !== hover) {
        t11 = hover ? {
            scale: 1.08,
            rotate: 6
        } : {
            scale: 1,
            rotate: 0
        };
        $[14] = hover;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            duration: 0.28
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== Icon) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[17] = Icon;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t10,
            animate: t11,
            transition: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t14 || $[24] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t9;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = `flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`;
    let t17;
    if ($[26] !== trend) {
        t17 = trend === "up" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 198,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 198,
            columnNumber: 65
        }, this);
        $[26] = trend;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== change || $[29] !== t16 || $[30] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16,
            children: [
                t17,
                change
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[28] = change;
        $[29] = t16;
        $[30] = t17;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-500",
            children: "vs last month"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t15 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl",
            children: [
                t15,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t21 || $[39] !== t4) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            animate: t3,
            transition: t4,
            onMouseEnter: t5,
            onMouseLeave: t6,
            className: "relative group",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[38] = t21;
        $[39] = t4;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    return t22;
}
_s(StatCard, "bRXmKus9fOZFlca/6zXTYU+twGY=");
_c = StatCard;
function ActivityItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e";
    }
    const { icon: Icon, title, description, time, gradient, delay: t1 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            x: -16
        };
        t3 = {
            opacity: 1,
            x: 0
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== delay) {
        t4 = {
            duration: 0.28,
            delay
        };
        $[3] = delay;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = `w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`;
    let t6;
    if ($[5] !== Icon) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[5] = Icon;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t5 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-semibold text-slate-800 mb-1 truncate",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 322,
            columnNumber: 10
        }, this);
        $[10] = title;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== description) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 truncate",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 330,
            columnNumber: 10
        }, this);
        $[12] = description;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[14] = t8;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== time) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 text-xs text-slate-400",
            children: [
                t11,
                time
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[18] = time;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t4 || $[23] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            animate: t3,
            transition: t4,
            className: "flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200",
            children: [
                t7,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t12;
        $[22] = t4;
        $[23] = t7;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    return t13;
}
_c1 = ActivityItem;
/* ------------------------------
   Custom Recharts shape: 3D Bar
   - draws front rect + slanted side + top highlight
   ------------------------------ */ const render3DBar = (props)=>{
    const { x, y, width, height, fill } = props;
    const depth = Math.max(6, Math.min(14, Math.round(width * 0.12)));
    const frontX = x;
    const frontY = y;
    const frontW = width;
    const frontH = height;
    const p1 = `${frontX + frontW},${frontY}`; // top-right
    const p2 = `${frontX + frontW + depth},${frontY - depth}`; // top-right slant
    const p3 = `${frontX + frontW + depth},${frontY - depth + frontH}`; // bottom-right slant
    const p4 = `${frontX + frontW},${frontY + frontH}`; // bottom-right
    const sideFill = shadeColor(fill || "#000000", -18);
    const topFill = shadeColor(fill || "#000000", 12);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: `${p1} ${p2} ${p3} ${p4}`,
                fill: sideFill,
                opacity: 0.96
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: frontX,
                y: frontY,
                rx: 4,
                ry: 4,
                width: frontW,
                height: frontH,
                fill: fill
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: frontX + frontW / 2,
                cy: Math.max(0, frontY - Math.max(2, depth / 2)),
                rx: frontW / 2.4,
                ry: Math.max(2, depth / 3),
                fill: topFill,
                opacity: 0.12
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
        lineNumber: 398,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
function AnalyticsPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(145);
    if ($[0] !== "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e") {
        for(let $i = 0; $i < 145; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd17894d6148a4313ca70036dde1e69e93c464199a8a4a50fb39741100d4dc9e";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("analytics");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "Total Messages",
                value: "2,845",
                change: "+12.5%",
                trend: "up",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                title: "Active Users",
                value: "1,234",
                change: "+8.2%",
                trend: "up",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                gradient: "from-emerald-500 to-teal-500"
            },
            {
                title: "Response Time",
                value: "2.4h",
                change: "-15.3%",
                trend: "down",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                gradient: "from-violet-500 to-purple-500"
            },
            {
                title: "Completion Rate",
                value: "94.2%",
                change: "+3.1%",
                trend: "up",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                gradient: "from-orange-500 to-rose-500"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const stats = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = makePastDates(14);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const labels = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = labels.map(_AnalyticsPageLabelsMap);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [messagesPerDay, setMessagesPerDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                name: "Admin",
                value: 1200
            },
            {
                name: "Employee",
                value: 820
            },
            {
                name: "Manager",
                value: 825
            }
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [roleBreakdown, setRoleBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                team: "Sales",
                messages: 820,
                color: "#60a5fa"
            },
            {
                team: "Support",
                messages: 1120,
                color: "#34d399"
            },
            {
                team: "Engineering",
                messages: 630,
                color: "#f472b6"
            },
            {
                team: "Marketing",
                messages: 410,
                color: "#f59e0b"
            }
        ];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [teamBreakdown, setTeamBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                name: "Aisha Khan",
                messages: 420,
                role: "Support"
            },
            {
                name: "Rahul Mehta",
                messages: 388,
                role: "Sales"
            },
            {
                name: "Priya Sharma",
                messages: 335,
                role: "Support"
            }
        ];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [topResponders, setTopResponders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            {
                name: "Team Alpha",
                metric: "94.2%"
            },
            {
                name: "Team Beta",
                metric: "91.8%"
            },
            {
                name: "Team Gamma",
                metric: "89.6%"
            }
        ];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const [topPerformers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AnalyticsPage[useEffect()]": ()=>{
                const t_0 = setInterval({
                    "AnalyticsPage[useEffect() > setInterval()]": ()=>{
                        setMessagesPerDay(_AnalyticsPageUseEffectSetIntervalSetMessagesPerDay);
                        setRoleBreakdown(_AnalyticsPageUseEffectSetIntervalSetRoleBreakdown);
                        setTeamBreakdown(_AnalyticsPageUseEffectSetIntervalSetTeamBreakdown);
                        setTopResponders(_AnalyticsPageUseEffectSetIntervalSetTopResponders);
                    }
                }["AnalyticsPage[useEffect() > setInterval()]"], 3500);
                return ()=>clearInterval(t_0);
            }
        })["AnalyticsPage[useEffect()]"];
        t8 = [];
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let T0;
    let T1;
    let T2;
    let pieColors;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    let t25;
    let t26;
    let t27;
    let t28;
    let t29;
    let t30;
    let t9;
    if ($[10] !== messagesPerDay || $[11] !== roleBreakdown || $[12] !== teamBreakdown) {
        pieColors = [
            "#0ea5e9",
            "#34d399",
            "#fb7185"
        ];
        teamBreakdown.map(_AnalyticsPageTeamBreakdownMap);
        t30 = "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8";
        t27 = "max-w-7xl mx-auto";
        let t31;
        let t32;
        let t33;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = {
                opacity: 0,
                y: -18
            };
            t32 = {
                opacity: 1,
                y: 0
            };
            t33 = {
                duration: 0.45
            };
            $[39] = t31;
            $[40] = t32;
            $[41] = t33;
        } else {
            t31 = $[39];
            t32 = $[40];
            t33 = $[41];
        }
        let t34;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
                children: "Analytics"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 632,
                columnNumber: 13
            }, this);
            $[42] = t34;
        } else {
            t34 = $[42];
        }
        let t35;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t34,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-slate-500 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 639,
                                columnNumber: 90
                            }, this),
                            "Live insights & trends"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 639,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 639,
                columnNumber: 13
            }, this);
            $[43] = t35;
        } else {
            t35 = $[43];
        }
        let t36;
        let t37;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = {
                scale: [
                    1,
                    1.15,
                    1
                ]
            };
            t37 = {
                duration: 2,
                repeat: Infinity
            };
            $[44] = t36;
            $[45] = t37;
        } else {
            t36 = $[44];
            t37 = $[45];
        }
        let t38;
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: t36,
                        transition: t37,
                        className: "ml-2 mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-6 h-6 text-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                            lineNumber: 662,
                            columnNumber: 123
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 662,
                        columnNumber: 58
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 662,
                columnNumber: 13
            }, this);
            $[46] = t38;
        } else {
            t38 = $[46];
        }
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t31,
                animate: t32,
                transition: t33,
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                    children: [
                        t38,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1.5 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors",
                                children: [
                                    "Export",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "w-4 h-4 inline-block ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 338
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 668,
                                columnNumber: 217
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                            lineNumber: 668,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                    lineNumber: 668,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 668,
                columnNumber: 13
            }, this);
            $[47] = t28;
        } else {
            t28 = $[47];
        }
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: stats.map(_AnalyticsPageStatsMap)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 674,
                columnNumber: 13
            }, this);
            $[48] = t29;
        } else {
            t29 = $[48];
        }
        t25 = "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6";
        let t39;
        let t40;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-slate-800 mb-3",
                children: "Messages (Last 14 days)"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 683,
                columnNumber: 13
            }, this);
            t40 = {
                minHeight: 220,
                height: 300
            };
            $[49] = t39;
            $[50] = t40;
        } else {
            t39 = $[49];
            t40 = $[50];
        }
        let t41;
        let t42;
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = {
                top: 6,
                right: 12,
                left: -6,
                bottom: 6
            };
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 703,
                columnNumber: 13
            }, this);
            $[51] = t41;
            $[52] = t42;
        } else {
            t41 = $[51];
            t42 = $[52];
        }
        let t43;
        let t44;
        let t45;
        let t46;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                dataKey: "date",
                tick: {
                    fontSize: 11
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 715,
                columnNumber: 13
            }, this);
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 718,
                columnNumber: 13
            }, this);
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 719,
                columnNumber: 13
            }, this);
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                type: "monotone",
                dataKey: "messages",
                stroke: "#06b6d4",
                strokeWidth: 3,
                dot: false
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 720,
                columnNumber: 13
            }, this);
            $[53] = t43;
            $[54] = t44;
            $[55] = t45;
            $[56] = t46;
        } else {
            t43 = $[53];
            t44 = $[54];
            t45 = $[55];
            t46 = $[56];
        }
        if ($[57] !== messagesPerDay) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm",
                children: [
                    t39,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t40,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                data: messagesPerDay,
                                margin: t41,
                                children: [
                                    t42,
                                    t43,
                                    t44,
                                    t45,
                                    t46
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 732,
                                columnNumber: 184
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                            lineNumber: 732,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 732,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 732,
                columnNumber: 13
            }, this);
            $[57] = messagesPerDay;
            $[58] = t26;
        } else {
            t26 = $[58];
        }
        t23 = "bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm";
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-slate-800 mb-3",
                children: "By Role"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 740,
                columnNumber: 13
            }, this);
            t22 = {
                minHeight: 220,
                height: 260
            };
            $[59] = t22;
            $[60] = t24;
        } else {
            t22 = $[59];
            t24 = $[60];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"];
        t20 = "100%";
        t21 = "100%";
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"];
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"];
        t9 = roleBreakdown;
        t10 = "value";
        t11 = "name";
        t12 = "50%";
        t13 = "50%";
        t14 = 46;
        t15 = 84;
        t16 = 90;
        t17 = -270;
        t18 = false;
        t19 = roleBreakdown.map({
            "AnalyticsPage[roleBreakdown.map()]": (entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                    fill: shadeColor(pieColors[idx % pieColors.length], -26)
                }, `depth-${idx}`, false, {
                    fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                    lineNumber: 767,
                    columnNumber: 61
                }, this)
        }["AnalyticsPage[roleBreakdown.map()]"]);
        $[10] = messagesPerDay;
        $[11] = roleBreakdown;
        $[12] = teamBreakdown;
        $[13] = T0;
        $[14] = T1;
        $[15] = T2;
        $[16] = pieColors;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
        $[24] = t17;
        $[25] = t18;
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
        $[30] = t23;
        $[31] = t24;
        $[32] = t25;
        $[33] = t26;
        $[34] = t27;
        $[35] = t28;
        $[36] = t29;
        $[37] = t30;
        $[38] = t9;
    } else {
        T0 = $[13];
        T1 = $[14];
        T2 = $[15];
        pieColors = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t15 = $[22];
        t16 = $[23];
        t17 = $[24];
        t18 = $[25];
        t19 = $[26];
        t20 = $[27];
        t21 = $[28];
        t22 = $[29];
        t23 = $[30];
        t24 = $[31];
        t25 = $[32];
        t26 = $[33];
        t27 = $[34];
        t28 = $[35];
        t29 = $[36];
        t30 = $[37];
        t9 = $[38];
    }
    let t31;
    if ($[61] !== T0 || $[62] !== t10 || $[63] !== t11 || $[64] !== t12 || $[65] !== t13 || $[66] !== t14 || $[67] !== t15 || $[68] !== t16 || $[69] !== t17 || $[70] !== t18 || $[71] !== t19 || $[72] !== t9) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            data: t9,
            dataKey: t10,
            nameKey: t11,
            cx: t12,
            cy: t13,
            innerRadius: t14,
            outerRadius: t15,
            startAngle: t16,
            endAngle: t17,
            isAnimationActive: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 828,
            columnNumber: 11
        }, this);
        $[61] = T0;
        $[62] = t10;
        $[63] = t11;
        $[64] = t12;
        $[65] = t13;
        $[66] = t14;
        $[67] = t15;
        $[68] = t16;
        $[69] = t17;
        $[70] = t18;
        $[71] = t19;
        $[72] = t9;
        $[73] = t31;
    } else {
        t31 = $[73];
    }
    let t32;
    if ($[74] !== pieColors || $[75] !== roleBreakdown) {
        let t33;
        if ($[77] !== pieColors) {
            t33 = ({
                "AnalyticsPage[roleBreakdown.map()]": (entry_0, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                        fill: pieColors[idx_0 % pieColors.length]
                    }, `cell-${idx_0}`, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 850,
                        columnNumber: 67
                    }, this)
            })["AnalyticsPage[roleBreakdown.map()]"];
            $[77] = pieColors;
            $[78] = t33;
        } else {
            t33 = $[78];
        }
        t32 = roleBreakdown.map(t33);
        $[74] = pieColors;
        $[75] = roleBreakdown;
        $[76] = t32;
    } else {
        t32 = $[76];
    }
    let t33;
    if ($[79] !== roleBreakdown || $[80] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: roleBreakdown,
            dataKey: "value",
            nameKey: "name",
            cx: "50%",
            cy: "47%",
            innerRadius: 52,
            outerRadius: 78,
            startAngle: 90,
            endAngle: -270,
            paddingAngle: 2,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 866,
            columnNumber: 11
        }, this);
        $[79] = roleBreakdown;
        $[80] = t32;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    let t35;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 876,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            verticalAlign: "bottom",
            height: 28
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 877,
            columnNumber: 11
        }, this);
        $[82] = t34;
        $[83] = t35;
    } else {
        t34 = $[82];
        t35 = $[83];
    }
    let t36;
    if ($[84] !== T1 || $[85] !== t31 || $[86] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t31,
                t33,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 886,
            columnNumber: 11
        }, this);
        $[84] = T1;
        $[85] = t31;
        $[86] = t33;
        $[87] = t36;
    } else {
        t36 = $[87];
    }
    let t37;
    if ($[88] !== T2 || $[89] !== t20 || $[90] !== t21 || $[91] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            width: t20,
            height: t21,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, this);
        $[88] = T2;
        $[89] = t20;
        $[90] = t21;
        $[91] = t36;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    let t38;
    if ($[93] !== t22 || $[94] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t22,
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 907,
            columnNumber: 11
        }, this);
        $[93] = t22;
        $[94] = t37;
        $[95] = t38;
    } else {
        t38 = $[95];
    }
    let t39;
    if ($[96] !== t23 || $[97] !== t24 || $[98] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: t23,
            children: [
                t24,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 916,
            columnNumber: 11
        }, this);
        $[96] = t23;
        $[97] = t24;
        $[98] = t38;
        $[99] = t39;
    } else {
        t39 = $[99];
    }
    let t40;
    if ($[100] !== t25 || $[101] !== t26 || $[102] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t25,
            children: [
                t26,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 926,
            columnNumber: 11
        }, this);
        $[100] = t25;
        $[101] = t26;
        $[102] = t39;
        $[103] = t40;
    } else {
        t40 = $[103];
    }
    let t41;
    let t42;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-800 mb-3",
            children: "Messages by Team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 937,
            columnNumber: 11
        }, this);
        t42 = {
            minHeight: 220,
            height: 300
        };
        $[104] = t41;
        $[105] = t42;
    } else {
        t41 = $[104];
        t42 = $[105];
    }
    let t43;
    let t44;
    let t45;
    let t46;
    let t47;
    let t48;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            top: 12,
            right: 12,
            left: -6,
            bottom: 6
        };
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 961,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 962,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 963,
            columnNumber: 11
        }, this);
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 964,
            columnNumber: 11
        }, this);
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 965,
            columnNumber: 11
        }, this);
        $[106] = t43;
        $[107] = t44;
        $[108] = t45;
        $[109] = t46;
        $[110] = t47;
        $[111] = t48;
    } else {
        t43 = $[106];
        t44 = $[107];
        t45 = $[108];
        t46 = $[109];
        t47 = $[110];
        t48 = $[111];
    }
    let t49;
    if ($[112] !== teamBreakdown) {
        t49 = teamBreakdown.map(_AnalyticsPageTeamBreakdownMap2);
        $[112] = teamBreakdown;
        $[113] = t49;
    } else {
        t49 = $[113];
    }
    let t50;
    if ($[114] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "messages",
            shape: render3DBar,
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 990,
            columnNumber: 11
        }, this);
        $[114] = t49;
        $[115] = t50;
    } else {
        t50 = $[115];
    }
    let t51;
    if ($[116] !== t50 || $[117] !== teamBreakdown) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm",
            children: [
                t41,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t42,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                            data: teamBreakdown,
                            margin: t43,
                            children: [
                                t44,
                                t45,
                                t46,
                                t47,
                                t48,
                                t50
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                            lineNumber: 998,
                            columnNumber: 182
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 998,
                        columnNumber: 134
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                    lineNumber: 998,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 998,
            columnNumber: 11
        }, this);
        $[116] = t50;
        $[117] = teamBreakdown;
        $[118] = t51;
    } else {
        t51 = $[118];
    }
    let t52;
    if ($[119] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-md font-semibold text-slate-800 mb-2",
            children: "Top Responders"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1007,
            columnNumber: 11
        }, this);
        $[119] = t52;
    } else {
        t52 = $[119];
    }
    let t53;
    if ($[120] !== topResponders) {
        t53 = topResponders.map(_AnalyticsPageTopRespondersMap);
        $[120] = topResponders;
        $[121] = t53;
    } else {
        t53 = $[121];
    }
    let t54;
    if ($[122] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm",
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y",
                    children: t53
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                    lineNumber: 1022,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1022,
            columnNumber: 11
        }, this);
        $[122] = t53;
        $[123] = t54;
    } else {
        t54 = $[123];
    }
    let t55;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-md font-semibold text-slate-800 mb-2",
            children: "Top Performers"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1030,
            columnNumber: 11
        }, this);
        $[124] = t55;
    } else {
        t55 = $[124];
    }
    let t56;
    if ($[125] !== topPerformers) {
        t56 = topPerformers.map(_AnalyticsPageTopPerformersMap);
        $[125] = topPerformers;
        $[126] = t56;
    } else {
        t56 = $[126];
    }
    let t57;
    if ($[127] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm",
            children: [
                t55,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y",
                    children: t56
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                    lineNumber: 1045,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1045,
            columnNumber: 11
        }, this);
        $[127] = t56;
        $[128] = t57;
    } else {
        t57 = $[128];
    }
    let t58;
    if ($[129] !== t54 || $[130] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "space-y-4",
            children: [
                t54,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1053,
            columnNumber: 11
        }, this);
        $[129] = t54;
        $[130] = t57;
        $[131] = t58;
    } else {
        t58 = $[131];
    }
    let t59;
    if ($[132] !== t51 || $[133] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                t51,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1062,
            columnNumber: 11
        }, this);
        $[132] = t51;
        $[133] = t58;
        $[134] = t59;
    } else {
        t59 = $[134];
    }
    let t60;
    if ($[135] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "mt-6 text-sm text-slate-500",
            children: "Tip: replace the simulated interval with your backend WebSocket/SSE for live data. For interactive 3D (rotate/zoom) use a WebGL chart library."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1071,
            columnNumber: 11
        }, this);
        $[135] = t60;
    } else {
        t60 = $[135];
    }
    let t61;
    if ($[136] !== t27 || $[137] !== t28 || $[138] !== t29 || $[139] !== t40 || $[140] !== t59) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t27,
            children: [
                t28,
                t29,
                t40,
                t59,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1078,
            columnNumber: 11
        }, this);
        $[136] = t27;
        $[137] = t28;
        $[138] = t29;
        $[139] = t40;
        $[140] = t59;
        $[141] = t61;
    } else {
        t61 = $[141];
    }
    let t62;
    if ($[142] !== t30 || $[143] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t30,
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
            lineNumber: 1090,
            columnNumber: 11
        }, this);
        $[142] = t30;
        $[143] = t61;
        $[144] = t62;
    } else {
        t62 = $[144];
    }
    return t62;
}
_s1(AnalyticsPage, "0+wozCboo2bH24Fbd9cdwJ9QOQg=");
_c2 = AnalyticsPage;
function _AnalyticsPageTopPerformersMap(p_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700",
                        children: p_1.name.split(" ")[0][0]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 1100,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-800",
                                children: p_1.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 1100,
                                columnNumber: 271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: "Performance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 1100,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 1100,
                        columnNumber: 266
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 1100,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-emerald-600",
                children: p_1.metric
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 1100,
                columnNumber: 408
            }, this)
        ]
    }, p_1.name, true, {
        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
        lineNumber: 1100,
        columnNumber: 10
    }, this);
}
function _AnalyticsPageTopRespondersMap(t_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700",
                        children: t_2.name.split(" ")[0][0]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 1103,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-800",
                                children: t_2.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 1103,
                                columnNumber: 271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: t_2.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                                lineNumber: 1103,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                        lineNumber: 1103,
                        columnNumber: 266
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 1103,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-slate-800",
                children: t_2.messages
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
                lineNumber: 1103,
                columnNumber: 407
            }, this)
        ]
    }, t_2.name, true, {
        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
        lineNumber: 1103,
        columnNumber: 10
    }, this);
}
function _AnalyticsPageTeamBreakdownMap2(entry_1, idx_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry_1.color
    }, `barcell-${idx_1}`, false, {
        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
        lineNumber: 1106,
        columnNumber: 10
    }, this);
}
function _AnalyticsPageStatsMap(s, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
        ...s,
        delay: i_0 * 0.06
    }, s.title, false, {
        fileName: "[project]/src/app/dashboard/admin/analytics/page.tsx",
        lineNumber: 1109,
        columnNumber: 10
    }, this);
}
function _AnalyticsPageTeamBreakdownMap(t_1) {
    return t_1.color;
}
function _AnalyticsPageUseEffectSetIntervalSetTopResponders(prev_2) {
    return prev_2.map(_AnalyticsPageUseEffectSetIntervalSetTopRespondersPrev_2Map).sort(_AnalyticsPageUseEffectSetIntervalSetTopRespondersAnonymous);
}
function _AnalyticsPageUseEffectSetIntervalSetTopRespondersAnonymous(a, b) {
    return b.messages - a.messages;
}
function _AnalyticsPageUseEffectSetIntervalSetTopRespondersPrev_2Map(p_0) {
    return {
        ...p_0,
        messages: Math.max(5, p_0.messages + rand(-6, 10))
    };
}
function _AnalyticsPageUseEffectSetIntervalSetTeamBreakdown(prev_1) {
    return prev_1.map(_AnalyticsPageUseEffectSetIntervalSetTeamBreakdownPrev_1Map);
}
function _AnalyticsPageUseEffectSetIntervalSetTeamBreakdownPrev_1Map(t) {
    return {
        ...t,
        messages: Math.max(5, t.messages + rand(-12, 18))
    };
}
function _AnalyticsPageUseEffectSetIntervalSetRoleBreakdown(prev_0) {
    return prev_0.map(_AnalyticsPageUseEffectSetIntervalSetRoleBreakdownPrev_0Map);
}
function _AnalyticsPageUseEffectSetIntervalSetRoleBreakdownPrev_0Map(r) {
    return {
        ...r,
        value: Math.max(5, r.value + rand(-8, 12))
    };
}
function _AnalyticsPageUseEffectSetIntervalSetMessagesPerDay(prev) {
    const copy = prev.map(_AnalyticsPageUseEffectSetIntervalSetMessagesPerDayPrevMap);
    copy[copy.length - 1].messages = Math.max(10, copy[copy.length - 1].messages + rand(1, 15));
    for(let i = 0; i < copy.length - 1; i++){
        copy[i].messages = Math.max(5, copy[i].messages + rand(-4, 6));
    }
    return copy;
}
function _AnalyticsPageUseEffectSetIntervalSetMessagesPerDayPrevMap(p) {
    return {
        ...p
    };
}
function _AnalyticsPageLabelsMap(label) {
    return {
        date: label,
        messages: rand(120, 420)
    };
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "ActivityItem");
__turbopack_context__.k.register(_c2, "AnalyticsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_admin_analytics_page_tsx_c1934ebf._.js.map