(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/manager/Analytics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/manager/analytics/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ManagerAnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
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
   Helpers & utilities
   ------------------------------ */ const rand = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;
// create last `n` dates as yyyy-mm-dd (default 30 days)
const makePastDates = (n = 30)=>{
    const arr = [];
    for(let i = n - 1; i >= 0; i--){
        const d = new Date();
        d.setDate(d.getDate() - i);
        arr.push(d.toISOString().slice(0, 10));
    }
    return arr;
};
// last `n` months labels (e.g., "Aug 2025")
const makePastMonths = (n = 6)=>{
    const arr = [];
    const today = new Date();
    for(let i = n - 1; i >= 0; i--){
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        arr.push(d.toLocaleString(undefined, {
            month: "short",
            year: "numeric"
        }));
    }
    return arr;
};
/** Shade (lighten/darken) a hex color by percent (-100..100). Returns 6-digit hex. */ function shadeColor(hexInput, percent) {
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
    if ($[0] !== "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db";
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
            duration: 0.32,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 135,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 143,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 151,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 184,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 192,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 202,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 212,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 212,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 220,
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
            children: "vs previous period"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 230,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 237,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 245,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 254,
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
    if ($[0] !== "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db";
    }
    const { icon: Icon, title, description, time, gradient, delay: t1 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            x: -12
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 319,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 327,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 336,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 344,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 352,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 361,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 368,
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
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 376,
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
   (kept from admin file)
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
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 413,
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
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 414,
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
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
        lineNumber: 412,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
function ManagerAnalyticsPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(170);
    if ($[0] !== "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db") {
        for(let $i = 0; $i < 170; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae4362139c2d5711a65c24fe3c12efbe87bdbb3d563338e0234ad327e0d058db";
    }
    const [selectedTeam, setSelectedTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All teams");
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("avg_rating");
    const [smooth, setSmooth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "All teams",
            "Sales",
            "Support",
            "Engineering",
            "Marketing"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const teams = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = makePastDates(30);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const dayLabels = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = makePastMonths(6);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const monthLabels = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = dayLabels.map(_ManagerAnalyticsPageDayLabelsMap);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [performanceData, setPerformanceData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                name: "Completed",
                value: 1824,
                color: "#10b981"
            },
            {
                name: "In Review",
                value: 342,
                color: "#f59e0b"
            },
            {
                name: "Blocked",
                value: 86,
                color: "#ef4444"
            }
        ];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [tasksStatus, setTasksStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = monthLabels.map(_ManagerAnalyticsPageMonthLabelsMap);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [tasksPerMonth, setTasksPerMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            {
                name: "Aisha Khan",
                metric: 4.8,
                tasksCompleted: 142,
                role: "Support"
            },
            {
                name: "Rahul Mehta",
                metric: 4.6,
                tasksCompleted: 131,
                role: "Sales"
            },
            {
                name: "Priya Sharma",
                metric: 4.5,
                tasksCompleted: 120,
                role: "Engineering"
            }
        ];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const [topPerformers, setTopPerformers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                title: "Sprint review scheduled",
                description: "Sprint demo with stakeholders",
                time: "5m ago",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                title: "New hire: Backend dev",
                description: "Onboarding starts next week",
                time: "20m ago",
                gradient: "from-emerald-500 to-teal-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                title: "Peer recognition",
                description: "Aisha completed 100 tasks this month",
                time: "1h ago",
                gradient: "from-pink-500 to-rose-500"
            }
        ];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const [activities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t7);
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ManagerAnalyticsPage[useEffect()]": ()=>{
                const t_0 = setInterval({
                    "ManagerAnalyticsPage[useEffect() > setInterval()]": ()=>{
                        setPerformanceData(_ManagerAnalyticsPageUseEffectSetIntervalSetPerformanceData);
                        setTasksPerMonth(_ManagerAnalyticsPageUseEffectSetIntervalSetTasksPerMonth);
                        setTasksStatus(_ManagerAnalyticsPageUseEffectSetIntervalSetTasksStatus);
                        setTopPerformers(_ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformers);
                    }
                }["ManagerAnalyticsPage[useEffect() > setInterval()]"], 4200);
                return ()=>clearInterval(t_0);
            }
        })["ManagerAnalyticsPage[useEffect()]"];
        t9 = [];
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[11] !== tasksStatus) {
        t10 = tasksStatus.map(_ManagerAnalyticsPageTasksStatusMap);
        $[11] = tasksStatus;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const pieColors = t10;
    let t11;
    if ($[13] !== tasksPerMonth) {
        t11 = tasksPerMonth.map(_ManagerAnalyticsPageTasksPerMonthMap);
        $[13] = tasksPerMonth;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const barColors = t11;
    const lineColor = metric === "avg_rating" ? "#06b6d4" : "#0ea5e9";
    let t12;
    if ($[15] !== tasksStatus) {
        t12 = tasksStatus.reduce(_ManagerAnalyticsPageTasksStatusReduce, 0);
        $[15] = tasksStatus;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const totalTasks = t12;
    const avgRating = Math.round(performanceData.reduce(_ManagerAnalyticsPagePerformanceDataReduce, 0) / performanceData.length * 10) / 10;
    let t13;
    if ($[17] !== performanceData) {
        t13 = Math.round(performanceData.reduce(_ManagerAnalyticsPagePerformanceDataReduce2, 0) / performanceData.length);
        $[17] = performanceData;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const avgThroughput = t13;
    let t14;
    if ($[19] !== performanceData) {
        t14 = ({
            "ManagerAnalyticsPage[exportCSV]": ()=>{
                const rows = [
                    [
                        "date",
                        "avg_rating",
                        "throughput"
                    ],
                    ...performanceData.map(_ManagerAnalyticsPageExportCSVPerformanceDataMap)
                ];
                const csv = rows.map(_ManagerAnalyticsPageExportCSVRowsMap).join("\n");
                const blob = new Blob([
                    csv
                ], {
                    type: "text/csv;charset=utf-8;"
                });
                const url = URL.createObjectURL(blob);
                const a_0 = document.createElement("a");
                a_0.href = url;
                a_0.download = `manager_performance_${new Date().toISOString().slice(0, 10)}.csv`;
                a_0.click();
                URL.revokeObjectURL(url);
            }
        })["ManagerAnalyticsPage[exportCSV]"];
        $[19] = performanceData;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    const exportCSV = t14;
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "ManagerAnalyticsPage[handleTeamChange]": (e)=>setSelectedTeam(e.target.value)
        })["ManagerAnalyticsPage[handleTeamChange]"];
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    const handleTeamChange = t15;
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "ManagerAnalyticsPage[handleMetricChange]": (m_0)=>setMetric(m_0)
        })["ManagerAnalyticsPage[handleMetricChange]"];
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    const handleMetricChange = t16;
    let t17;
    let t18;
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            opacity: 0,
            y: -12
        };
        t18 = {
            opacity: 1,
            y: 0
        };
        t19 = {
            duration: 0.45
        };
        $[23] = t17;
        $[24] = t18;
        $[25] = t19;
    } else {
        t17 = $[23];
        t18 = $[24];
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
            children: "Team Analytics"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 678,
            columnNumber: 11
        }, this);
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-500 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                            lineNumber: 685,
                            columnNumber: 88
                        }, this),
                        "Manager view \u2014 performance & task metrics"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 685,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 685,
            columnNumber: 11
        }, this);
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    let t23;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            scale: [
                1,
                1.12,
                1
            ]
        };
        t23 = {
            duration: 2,
            repeat: Infinity
        };
        $[28] = t22;
        $[29] = t23;
    } else {
        t22 = $[28];
        t23 = $[29];
    }
    let t24;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: t22,
                    transition: t23,
                    className: "ml-2 mt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "w-6 h-6 text-yellow-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 708,
                        columnNumber: 121
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 708,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, this);
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    let t25;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = teams.map(_ManagerAnalyticsPageTeamsMap);
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    let t26;
    if ($[32] !== selectedTeam) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: selectedTeam,
            onChange: handleTeamChange,
            className: "rounded-md border px-3 py-1 text-sm bg-white",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, this);
        $[32] = selectedTeam;
        $[33] = t26;
    } else {
        t26 = $[33];
    }
    let t27;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 730,
            columnNumber: 11
        }, this);
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== exportCSV) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: exportCSV,
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 hover:bg-slate-200 transition-colors",
            children: [
                t27,
                "Export CSV"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[35] = exportCSV;
        $[36] = t28;
    } else {
        t28 = $[36];
    }
    let t29;
    if ($[37] !== t26 || $[38] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t17,
            animate: t18,
            transition: t19,
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            t26,
                            t28
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 745,
                        columnNumber: 174
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 745,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, this);
        $[37] = t26;
        $[38] = t28;
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    let t30;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            title: "Team Size",
            value: "28",
            change: "+2.5%",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            gradient: "from-blue-500 to-cyan-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 754,
            columnNumber: 11
        }, this);
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    const t31 = metric === "avg_rating" ? "Avg Performance" : "Avg Throughput";
    const t32 = metric === "avg_rating" ? `${avgRating}/5` : `${avgThroughput}/day`;
    const t33 = metric === "avg_rating" ? "+0.4" : "+6.2%";
    const t34 = metric === "avg_rating" ? "up" : "up";
    const t35 = metric === "avg_rating" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"];
    let t36;
    if ($[41] !== t31 || $[42] !== t32 || $[43] !== t33 || $[44] !== t34 || $[45] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            title: t31,
            value: t32,
            change: t33,
            trend: t34,
            icon: t35,
            gradient: "from-emerald-500 to-teal-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[41] = t31;
        $[42] = t32;
        $[43] = t33;
        $[44] = t34;
        $[45] = t35;
        $[46] = t36;
    } else {
        t36 = $[46];
    }
    let t37;
    if ($[47] !== tasksPerMonth) {
        t37 = tasksPerMonth.reduce(_ManagerAnalyticsPageTasksPerMonthReduce, 0);
        $[47] = tasksPerMonth;
        $[48] = t37;
    } else {
        t37 = $[48];
    }
    const t38 = String(t37);
    let t39;
    if ($[49] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            title: "Tasks Completed",
            value: t38,
            change: "+5.1%",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            gradient: "from-violet-500 to-purple-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 787,
            columnNumber: 11
        }, this);
        $[49] = t38;
        $[50] = t39;
    } else {
        t39 = $[50];
    }
    let t40;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            title: "Avg Response Time",
            value: "1.8h",
            change: "-12.3%",
            trend: "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            gradient: "from-orange-500 to-rose-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[51] = t40;
    } else {
        t40 = $[51];
    }
    let t41;
    if ($[52] !== t36 || $[53] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
            children: [
                t30,
                t36,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 802,
            columnNumber: 11
        }, this);
        $[52] = t36;
        $[53] = t39;
        $[54] = t41;
    } else {
        t41 = $[54];
    }
    let t42;
    let t43;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-500 mr-2",
            children: "Metric"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 812,
            columnNumber: 11
        }, this);
        t43 = ({
            "ManagerAnalyticsPage[<button>.onClick]": ()=>handleMetricChange("avg_rating")
        })["ManagerAnalyticsPage[<button>.onClick]"];
        $[55] = t42;
        $[56] = t43;
    } else {
        t42 = $[55];
        t43 = $[56];
    }
    const t44 = `px-3 py-1 rounded-md text-sm ${metric === "avg_rating" ? "bg-slate-800 text-white" : "bg-transparent text-slate-700"}`;
    let t45;
    if ($[57] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t43,
            className: t44,
            children: "Avg Rating"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 825,
            columnNumber: 11
        }, this);
        $[57] = t44;
        $[58] = t45;
    } else {
        t45 = $[58];
    }
    let t46;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "ManagerAnalyticsPage[<button>.onClick]": ()=>handleMetricChange("throughput")
        })["ManagerAnalyticsPage[<button>.onClick]"];
        $[59] = t46;
    } else {
        t46 = $[59];
    }
    const t47 = `px-3 py-1 rounded-md text-sm ${metric === "throughput" ? "bg-slate-800 text-white" : "bg-transparent text-slate-700"}`;
    let t48;
    if ($[60] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t46,
            className: t47,
            children: "Throughput"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 843,
            columnNumber: 11
        }, this);
        $[60] = t47;
        $[61] = t48;
    } else {
        t48 = $[61];
    }
    let t49;
    if ($[62] !== t45 || $[63] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded-2xl p-3 flex items-center gap-2 text-sm",
            children: [
                t42,
                t45,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 851,
            columnNumber: 11
        }, this);
        $[62] = t45;
        $[63] = t48;
        $[64] = t49;
    } else {
        t49 = $[64];
    }
    let t50;
    if ($[65] !== smooth) {
        t50 = ({
            "ManagerAnalyticsPage[<input>.onChange]": ()=>setSmooth(!smooth)
        })["ManagerAnalyticsPage[<input>.onChange]"];
        $[65] = smooth;
        $[66] = t50;
    } else {
        t50 = $[66];
    }
    let t51;
    if ($[67] !== smooth || $[68] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: smooth,
            onChange: t50
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 870,
            columnNumber: 11
        }, this);
        $[67] = smooth;
        $[68] = t50;
        $[69] = t51;
    } else {
        t51 = $[69];
    }
    let t52;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600",
            children: "Smoothing"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 879,
            columnNumber: 11
        }, this);
        $[70] = t52;
    } else {
        t52 = $[70];
    }
    let t53;
    if ($[71] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded-2xl p-3 flex items-center gap-3 text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    t51,
                    t52
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 886,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 886,
            columnNumber: 11
        }, this);
        $[71] = t51;
        $[72] = t53;
    } else {
        t53 = $[72];
    }
    let t54;
    if ($[73] !== t49 || $[74] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                t49,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 894,
            columnNumber: 11
        }, this);
        $[73] = t49;
        $[74] = t53;
        $[75] = t54;
    } else {
        t54 = $[75];
    }
    let t55;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-800",
            children: "Employee Performance (Last 30 days)"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 903,
            columnNumber: 11
        }, this);
        $[76] = t55;
    } else {
        t55 = $[76];
    }
    let t56;
    if ($[77] !== selectedTeam) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-3 gap-4",
            children: [
                t55,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: [
                        "Showing: ",
                        selectedTeam
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 910,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 910,
            columnNumber: 11
        }, this);
        $[77] = selectedTeam;
        $[78] = t56;
    } else {
        t56 = $[78];
    }
    let t57;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = {
            minHeight: 240,
            height: 340
        };
        $[79] = t57;
    } else {
        t57 = $[79];
    }
    let t58;
    let t59;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = {
            top: 8,
            right: 12,
            left: -6,
            bottom: 6
        };
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 935,
            columnNumber: 11
        }, this);
        $[80] = t58;
        $[81] = t59;
    } else {
        t58 = $[80];
        t59 = $[81];
    }
    let t60;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "date",
            tick: {
                fontSize: 11
            },
            hide: true
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 944,
            columnNumber: 11
        }, this);
        $[82] = t60;
    } else {
        t60 = $[82];
    }
    let t61;
    if ($[83] !== metric) {
        t61 = metric === "avg_rating" ? [
            2,
            5
        ] : [
            0,
            "dataMax + 10"
        ];
        $[83] = metric;
        $[84] = t61;
    } else {
        t61 = $[84];
    }
    let t62;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = {
            fontSize: 11
        };
        $[85] = t62;
    } else {
        t62 = $[85];
    }
    const t63 = metric === "avg_rating";
    let t64;
    if ($[86] !== t61 || $[87] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            domain: t61,
            tick: t62,
            allowDecimals: t63
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 971,
            columnNumber: 11
        }, this);
        $[86] = t61;
        $[87] = t63;
        $[88] = t64;
    } else {
        t64 = $[88];
    }
    let t65;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 980,
            columnNumber: 11
        }, this);
        $[89] = t65;
    } else {
        t65 = $[89];
    }
    const t66 = smooth ? "monotone" : "linear";
    let t67;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = {
            r: 5
        };
        $[90] = t67;
    } else {
        t67 = $[90];
    }
    let t68;
    if ($[91] !== lineColor || $[92] !== metric || $[93] !== t66) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            type: t66,
            dataKey: metric,
            stroke: lineColor,
            strokeWidth: 3,
            dot: true,
            activeDot: t67,
            isAnimationActive: false
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 997,
            columnNumber: 11
        }, this);
        $[91] = lineColor;
        $[92] = metric;
        $[93] = t66;
        $[94] = t68;
    } else {
        t68 = $[94];
    }
    let t69;
    if ($[95] !== performanceData || $[96] !== t64 || $[97] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t57,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    data: performanceData,
                    margin: t58,
                    children: [
                        t59,
                        t60,
                        t64,
                        t65,
                        t68
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1007,
                    columnNumber: 76
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1007,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1007,
            columnNumber: 11
        }, this);
        $[95] = performanceData;
        $[96] = t64;
        $[97] = t68;
        $[98] = t69;
    } else {
        t69 = $[98];
    }
    let t70;
    if ($[99] !== t56 || $[100] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm",
            children: [
                t56,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1017,
            columnNumber: 11
        }, this);
        $[99] = t56;
        $[100] = t69;
        $[101] = t70;
    } else {
        t70 = $[101];
    }
    let t71;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-800",
            children: "Tasks accomplished (status)"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1026,
            columnNumber: 11
        }, this);
        $[102] = t71;
    } else {
        t71 = $[102];
    }
    let t72;
    if ($[103] !== totalTasks) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-3",
            children: [
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: [
                        "Total: ",
                        totalTasks
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1033,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1033,
            columnNumber: 11
        }, this);
        $[103] = totalTasks;
        $[104] = t72;
    } else {
        t72 = $[104];
    }
    let t73;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = {
            minHeight: 220,
            height: 260
        };
        $[105] = t73;
    } else {
        t73 = $[105];
    }
    let t74;
    if ($[106] !== pieColors || $[107] !== tasksStatus) {
        let t75;
        if ($[109] !== pieColors) {
            t75 = ({
                "ManagerAnalyticsPage[tasksStatus.map()]": (entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                        fill: pieColors[idx % pieColors.length]
                    }, `cell-${idx}`, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1054,
                        columnNumber: 68
                    }, this)
            })["ManagerAnalyticsPage[tasksStatus.map()]"];
            $[109] = pieColors;
            $[110] = t75;
        } else {
            t75 = $[110];
        }
        t74 = tasksStatus.map(t75);
        $[106] = pieColors;
        $[107] = tasksStatus;
        $[108] = t74;
    } else {
        t74 = $[108];
    }
    let t75;
    if ($[111] !== t74 || $[112] !== tasksStatus) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: tasksStatus,
            dataKey: "value",
            nameKey: "name",
            cx: "50%",
            cy: "45%",
            outerRadius: 80,
            innerRadius: 40,
            paddingAngle: 4,
            children: t74
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1070,
            columnNumber: 11
        }, this);
        $[111] = t74;
        $[112] = tasksStatus;
        $[113] = t75;
    } else {
        t75 = $[113];
    }
    let t76;
    let t77;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1080,
            columnNumber: 11
        }, this);
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            verticalAlign: "bottom",
            height: 28
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1081,
            columnNumber: 11
        }, this);
        $[114] = t76;
        $[115] = t77;
    } else {
        t76 = $[114];
        t77 = $[115];
    }
    let t78;
    if ($[116] !== t75) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t73,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        t75,
                        t76,
                        t77
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1090,
                    columnNumber: 76
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1090,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1090,
            columnNumber: 11
        }, this);
        $[116] = t75;
        $[117] = t78;
    } else {
        t78 = $[117];
    }
    let t79;
    if ($[118] !== t72 || $[119] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm",
            children: [
                t72,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1098,
            columnNumber: 11
        }, this);
        $[118] = t72;
        $[119] = t78;
        $[120] = t79;
    } else {
        t79 = $[120];
    }
    let t80;
    if ($[121] !== t70 || $[122] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6",
            children: [
                t70,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1107,
            columnNumber: 11
        }, this);
        $[121] = t70;
        $[122] = t79;
        $[123] = t80;
    } else {
        t80 = $[123];
    }
    let t81;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-800",
            children: "Tasks Completed per Month"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1116,
            columnNumber: 11
        }, this);
        $[124] = t81;
    } else {
        t81 = $[124];
    }
    let t82;
    if ($[125] !== tasksPerMonth.length) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-3",
            children: [
                t81,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: [
                        "Last ",
                        tasksPerMonth.length,
                        " months"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1123,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1123,
            columnNumber: 11
        }, this);
        $[125] = tasksPerMonth.length;
        $[126] = t82;
    } else {
        t82 = $[126];
    }
    let t83;
    if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = {
            minHeight: 220,
            height: 300
        };
        $[127] = t83;
    } else {
        t83 = $[127];
    }
    let t84;
    let t85;
    let t86;
    let t87;
    let t88;
    let t89;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t84 = {
            top: 12,
            right: 12,
            left: -6,
            bottom: 6
        };
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1152,
            columnNumber: 11
        }, this);
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "month"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1153,
            columnNumber: 11
        }, this);
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1154,
            columnNumber: 11
        }, this);
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1155,
            columnNumber: 11
        }, this);
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1156,
            columnNumber: 11
        }, this);
        $[128] = t84;
        $[129] = t85;
        $[130] = t86;
        $[131] = t87;
        $[132] = t88;
        $[133] = t89;
    } else {
        t84 = $[128];
        t85 = $[129];
        t86 = $[130];
        t87 = $[131];
        t88 = $[132];
        t89 = $[133];
    }
    let t90;
    if ($[134] !== barColors || $[135] !== tasksPerMonth) {
        let t91;
        if ($[137] !== barColors) {
            t91 = ({
                "ManagerAnalyticsPage[tasksPerMonth.map()]": (entry_0, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                        fill: barColors[idx_0 % barColors.length]
                    }, `barcell-${idx_0}`, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1176,
                        columnNumber: 74
                    }, this)
            })["ManagerAnalyticsPage[tasksPerMonth.map()]"];
            $[137] = barColors;
            $[138] = t91;
        } else {
            t91 = $[138];
        }
        t90 = tasksPerMonth.map(t91);
        $[134] = barColors;
        $[135] = tasksPerMonth;
        $[136] = t90;
    } else {
        t90 = $[136];
    }
    let t91;
    if ($[139] !== t90) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "completed",
            shape: render3DBar,
            children: t90
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1192,
            columnNumber: 11
        }, this);
        $[139] = t90;
        $[140] = t91;
    } else {
        t91 = $[140];
    }
    let t92;
    if ($[141] !== t91 || $[142] !== tasksPerMonth) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t83,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: tasksPerMonth,
                    margin: t84,
                    children: [
                        t85,
                        t86,
                        t87,
                        t88,
                        t89,
                        t91
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1200,
                    columnNumber: 76
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1200,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1200,
            columnNumber: 11
        }, this);
        $[141] = t91;
        $[142] = tasksPerMonth;
        $[143] = t92;
    } else {
        t92 = $[143];
    }
    let t93;
    if ($[144] !== t82 || $[145] !== t92) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm",
            children: [
                t82,
                t92
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1209,
            columnNumber: 11
        }, this);
        $[144] = t82;
        $[145] = t92;
        $[146] = t93;
    } else {
        t93 = $[146];
    }
    let t94;
    if ($[147] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-md font-semibold text-slate-800 mb-2",
            children: "Top Performers"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1218,
            columnNumber: 11
        }, this);
        $[147] = t94;
    } else {
        t94 = $[147];
    }
    let t95;
    if ($[148] !== topPerformers) {
        t95 = topPerformers.map(_ManagerAnalyticsPageTopPerformersMap);
        $[148] = topPerformers;
        $[149] = t95;
    } else {
        t95 = $[149];
    }
    let t96;
    if ($[150] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm",
            children: [
                t94,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y",
                    children: t95
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1233,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1233,
            columnNumber: 11
        }, this);
        $[150] = t95;
        $[151] = t96;
    } else {
        t96 = $[151];
    }
    let t97;
    if ($[152] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-md font-semibold text-slate-800 mb-2",
            children: "Recent Activity"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1241,
            columnNumber: 11
        }, this);
        $[152] = t97;
    } else {
        t97 = $[152];
    }
    let t98;
    if ($[153] !== activities) {
        t98 = activities.map(_ManagerAnalyticsPageActivitiesMap);
        $[153] = activities;
        $[154] = t98;
    } else {
        t98 = $[154];
    }
    let t99;
    if ($[155] !== t98) {
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm",
            children: [
                t97,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y",
                    children: t98
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                    lineNumber: 1256,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1256,
            columnNumber: 11
        }, this);
        $[155] = t98;
        $[156] = t99;
    } else {
        t99 = $[156];
    }
    let t100;
    if ($[157] !== t96 || $[158] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "space-y-4",
            children: [
                t96,
                t99
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1264,
            columnNumber: 12
        }, this);
        $[157] = t96;
        $[158] = t99;
        $[159] = t100;
    } else {
        t100 = $[159];
    }
    let t101;
    if ($[160] !== t100 || $[161] !== t93) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                t93,
                t100
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1273,
            columnNumber: 12
        }, this);
        $[160] = t100;
        $[161] = t93;
        $[162] = t101;
    } else {
        t101 = $[162];
    }
    let t102;
    if ($[163] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "mt-6 text-sm text-slate-500",
            children: "Tip: replace simulated data with your backend metrics (WebSocket/SSE) for live updates. Use CSV export to share a snapshot with stakeholders."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1282,
            columnNumber: 12
        }, this);
        $[163] = t102;
    } else {
        t102 = $[163];
    }
    let t103;
    if ($[164] !== t101 || $[165] !== t29 || $[166] !== t41 || $[167] !== t54 || $[168] !== t80) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t29,
                    t41,
                    t54,
                    t80,
                    t101,
                    t102
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1289,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
            lineNumber: 1289,
            columnNumber: 12
        }, this);
        $[164] = t101;
        $[165] = t29;
        $[166] = t41;
        $[167] = t54;
        $[168] = t80;
        $[169] = t103;
    } else {
        t103 = $[169];
    }
    return t103;
}
_s1(ManagerAnalyticsPage, "ZeIJ1iEKCczVHW/XVe7u8du7ft4=");
_c2 = ManagerAnalyticsPage;
function _ManagerAnalyticsPageActivitiesMap(a_1, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
        ...a_1,
        delay: i_0 * 0.04
    }, i_0, false, {
        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
        lineNumber: 1302,
        columnNumber: 10
    }, this);
}
function _ManagerAnalyticsPageTopPerformersMap(t_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700",
                        children: t_5.name.split(" ")[0][0]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-800",
                                children: t_5.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: t_5.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 266
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1305,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold",
                        children: t_5.tasksCompleted
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 447
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: "tasks"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 504
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
                lineNumber: 1305,
                columnNumber: 407
            }, this)
        ]
    }, t_5.name, true, {
        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
        lineNumber: 1305,
        columnNumber: 10
    }, this);
}
function _ManagerAnalyticsPageTasksPerMonthReduce(s_3, t_4) {
    return s_3 + t_4.completed;
}
function _ManagerAnalyticsPageTeamsMap(t_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: t_3,
        children: t_3
    }, t_3, false, {
        fileName: "[project]/src/app/dashboard/manager/Analytics/page.tsx",
        lineNumber: 1311,
        columnNumber: 10
    }, this);
}
function _ManagerAnalyticsPageExportCSVRowsMap(r_0) {
    return r_0.join(",");
}
function _ManagerAnalyticsPageExportCSVPerformanceDataMap(r) {
    return [
        r.date,
        String(r.avg_rating),
        String(r.throughput)
    ];
}
function _ManagerAnalyticsPagePerformanceDataReduce2(s_2, p_2) {
    return s_2 + p_2.throughput;
}
function _ManagerAnalyticsPagePerformanceDataReduce(s_1, p_1) {
    return s_1 + p_1.avg_rating;
}
function _ManagerAnalyticsPageTasksStatusReduce(s_0, v) {
    return s_0 + v.value;
}
function _ManagerAnalyticsPageTasksPerMonthMap(t_2) {
    return t_2.color;
}
function _ManagerAnalyticsPageTasksStatusMap(t_1) {
    return t_1.color;
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformers(prev_2) {
    return prev_2.map(_ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformersPrev_2Map).sort(_ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformersAnonymous);
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformersAnonymous(a, b) {
    return b.tasksCompleted - a.tasksCompleted;
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTopPerformersPrev_2Map(t) {
    return {
        ...t,
        tasksCompleted: Math.max(0, t.tasksCompleted + rand(-4, 6))
    };
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTasksStatus(prev_1) {
    return prev_1.map(_ManagerAnalyticsPageUseEffectSetIntervalSetTasksStatusPrev_1Map);
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTasksStatusPrev_1Map(s) {
    return {
        ...s,
        value: Math.max(0, s.value + rand(-8, 18))
    };
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTasksPerMonth(prev_0) {
    return prev_0.map(_ManagerAnalyticsPageUseEffectSetIntervalSetTasksPerMonthPrev_0Map);
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetTasksPerMonthPrev_0Map(p_0) {
    return {
        ...p_0,
        completed: Math.max(10, p_0.completed + rand(-12, 28))
    };
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetPerformanceData(prev) {
    const copy = prev.map(_ManagerAnalyticsPageUseEffectSetIntervalSetPerformanceDataPrevMap);
    copy[copy.length - 1] = {
        ...copy[copy.length - 1],
        avg_rating: Math.round(Math.max(2.5, Math.min(5, copy[copy.length - 1].avg_rating + (Math.random() - 0.5) * 0.18)) * 10) / 10,
        throughput: Math.max(1, copy[copy.length - 1].throughput + rand(-3, 4))
    };
    for(let i = 0; i < copy.length - 1; i++){
        copy[i] = {
            ...copy[i],
            avg_rating: Math.round(Math.max(2.2, Math.min(5, copy[i].avg_rating + (Math.random() - 0.5) * 0.12)) * 10) / 10,
            throughput: Math.max(1, copy[i].throughput + rand(-2, 3))
        };
    }
    return copy;
}
function _ManagerAnalyticsPageUseEffectSetIntervalSetPerformanceDataPrevMap(p) {
    return {
        ...p
    };
}
function _ManagerAnalyticsPageMonthLabelsMap(m) {
    return {
        month: m,
        completed: rand(120, 520),
        color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`
    };
}
function _ManagerAnalyticsPageDayLabelsMap(date) {
    return {
        date,
        avg_rating: Math.round((3.5 + Math.random() * 1.6) * 10) / 10,
        throughput: rand(8, 34)
    };
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "ActivityItem");
__turbopack_context__.k.register(_c2, "ManagerAnalyticsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_manager_Analytics_page_tsx_007fa90a._.js.map