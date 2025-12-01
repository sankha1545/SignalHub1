(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/manager/Tasks/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/manager/Tasks/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ManagerTasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript) <export default as BellRing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ============================
   Small accessible IconButton
   - accepts onClick so parent can stopPropagation
   ============================ */ const IconButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9";
    }
    const { children, ariaLabel, title, onClick } = t0;
    let t1;
    if ($[1] !== ariaLabel || $[2] !== children || $[3] !== onClick || $[4] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": ariaLabel,
            title: title,
            onClick: onClick,
            className: "p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = ariaLabel;
        $[2] = children;
        $[3] = onClick;
        $[4] = title;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    return t1;
};
_c = IconButton;
const FilterButtons = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9";
    }
    const { active, onChange } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                key: "all",
                label: "All"
            },
            {
                key: "open",
                label: "Open",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
            },
            {
                key: "due",
                label: "Due soon",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"]
            },
            {
                key: "overdue",
                label: "Overdue",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__["BellRing"]
            },
            {
                key: "done",
                label: "Completed",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const items = t1;
    let t2;
    if ($[2] !== active || $[3] !== onChange) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 overflow-x-auto pb-1",
            children: items.map((it)=>{
                const isActive = active === it.key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(it.key),
                    type: "button",
                    "aria-pressed": isActive,
                    className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${isActive ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                    children: [
                        it.Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(it.Icon, {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                            lineNumber: 121,
                            columnNumber: 376
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: it.label
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                            lineNumber: 121,
                            columnNumber: 408
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, it.key, true, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 121,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = active;
        $[3] = onChange;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
};
_c1 = FilterButtons;
/* ============================
   TaskCard — UI modeled after inbox MessageCard
   - single-line click to select (shows left indicator)
   - action buttons use stopPropagation when clicked
   ============================ */ const TaskCard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(105);
    if ($[0] !== "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9") {
        for(let $i = 0; $i < 105; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9";
    }
    const { task, isSelected, onSelect, onComplete, onDelete, delay: t1 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const priorityColor = task.priority === "Critical" ? "bg-rose-50 text-rose-700" : task.priority === "High" ? "bg-amber-50 text-amber-700" : task.priority === "Medium" ? "bg-cyan-50 text-cyan-700" : "bg-slate-50 text-slate-600";
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 8
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
            duration: 0.28,
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
        t5 = ()=>setHover(true);
        t6 = ()=>setHover(false);
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== onSelect) {
        t7 = (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                onSelect();
            }
        };
        $[7] = onSelect;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `relative p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${isSelected ? "bg-blue-50 border-blue-200 shadow-md" : task.unread ? "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md" : "bg-slate-50/50 border-slate-100 hover:border-slate-200"}`;
    const t9 = `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${task.unread ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-slate-200"}`;
    let t10;
    if ($[9] !== hover) {
        t10 = hover ? {
            scale: 1.03
        } : {
            scale: 1
        };
        $[9] = hover;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            duration: 0.16
        };
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    const t12 = `w-5 h-5 ${task.unread ? "text-white" : "text-slate-500"}`;
    let t13;
    if ($[12] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t12;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] !== t10 || $[15] !== t13 || $[16] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t9,
            animate: t10,
            transition: t11,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
        $[15] = t13;
        $[16] = t9;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    const t15 = `text-sm truncate ${task.unread ? "font-semibold text-slate-800" : "text-slate-700"}`;
    let t16;
    if ($[18] !== t15 || $[19] !== task.title) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t15,
            title: task.title,
            children: task.title
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t15;
        $[19] = task.title;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== task.unread) {
        t17 = task.unread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: {
                scale: 0
            },
            animate: {
                scale: 1
            },
            className: "w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 268,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = task.unread;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t16 || $[24] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t16;
        $[24] = t17;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== task.starred) {
        t19 = task.starred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "w-4 h-4 text-yellow-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 289,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = task.starred;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== task.hasAttachment) {
        t20 = task.hasAttachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 297,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = task.hasAttachment;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== t19 || $[31] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-shrink-0",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t19;
        $[31] = t20;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    let t22;
    if ($[33] !== t18 || $[34] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2 mb-1",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t18;
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    const t23 = task.description ?? `${task.createdBy} • ${task.timeAgo}`;
    let t24;
    if ($[36] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 line-clamp-2 mb-2",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t23;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== task.label) {
        t25 = task.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${task.label.colorClass}`,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 332,
                    columnNumber: 163
                }, ("TURBOPACK compile-time value", void 0)),
                task.label.text
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 332,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = task.label;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    const t26 = `inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${priorityColor}`;
    let t27;
    if ($[40] !== task.priority) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium",
            children: task.priority
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = task.priority;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== t26 || $[43] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t26;
        $[43] = t27;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] !== t25 || $[46] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t25;
        $[46] = t28;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== task.dueAt || $[49] !== task.timeAgo) {
        t30 = task.dueAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 367,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: task.dueAt
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 367,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 367,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 367,
                    columnNumber: 175
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: task.timeAgo
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 367,
                    columnNumber: 204
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 367,
            columnNumber: 133
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = task.dueAt;
        $[49] = task.timeAgo;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    const t32 = task.assignee ?? "Unassigned";
    let t33;
    if ($[52] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t32
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 384,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t32;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== t30 || $[55] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 text-xs text-slate-400",
            children: [
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t30;
        $[55] = t33;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] !== t29 || $[58] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3 flex-wrap",
            children: [
                t29,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t29;
        $[58] = t34;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== t22 || $[61] !== t24 || $[62] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t22,
                t24,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t22;
        $[61] = t24;
        $[62] = t35;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            opacity: 0
        };
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    const t38 = hover ? 1 : 0;
    let t39;
    if ($[65] !== t38) {
        t39 = {
            opacity: t38
        };
        $[65] = t38;
        $[66] = t39;
    } else {
        t39 = $[66];
    }
    let t40;
    if ($[67] !== onComplete || $[68] !== task.id) {
        t40 = (e_0)=>{
            e_0.stopPropagation();
            onComplete?.(task.id);
        };
        $[67] = onComplete;
        $[68] = task.id;
        $[69] = t40;
    } else {
        t40 = $[69];
    }
    let t41;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t41;
    } else {
        t41 = $[70];
    }
    let t42;
    if ($[71] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
            ariaLabel: "Complete",
            title: "Complete",
            onClick: t40,
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t40;
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    let t43;
    if ($[73] !== onDelete || $[74] !== task.id) {
        t43 = (e_1)=>{
            e_1.stopPropagation();
            onDelete?.(task.id);
        };
        $[73] = onDelete;
        $[74] = task.id;
        $[75] = t43;
    } else {
        t43 = $[75];
    }
    let t44;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t44;
    } else {
        t44 = $[76];
    }
    let t45;
    if ($[77] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
            ariaLabel: "Delete",
            title: "Delete",
            onClick: t43,
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t43;
        $[78] = t45;
    } else {
        t45 = $[78];
    }
    let t46;
    if ($[79] !== task.id) {
        t46 = (e_2)=>{
            e_2.stopPropagation();
            console.log("Task actions", task.id);
        };
        $[79] = task.id;
        $[80] = t46;
    } else {
        t46 = $[80];
    }
    let t47;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = t47;
    } else {
        t47 = $[81];
    }
    let t48;
    if ($[82] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
            ariaLabel: "More",
            title: "More",
            onClick: t46,
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t46;
        $[83] = t48;
    } else {
        t48 = $[83];
    }
    let t49;
    if ($[84] !== t39 || $[85] !== t42 || $[86] !== t45 || $[87] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t37,
            animate: t39,
            className: "flex items-center gap-1",
            children: [
                t42,
                t45,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[84] = t39;
        $[85] = t42;
        $[86] = t45;
        $[87] = t48;
        $[88] = t49;
    } else {
        t49 = $[88];
    }
    let t50;
    if ($[89] !== t14 || $[90] !== t36 || $[91] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3 sm:gap-4",
            children: [
                t14,
                t36,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t14;
        $[90] = t36;
        $[91] = t49;
        $[92] = t50;
    } else {
        t50 = $[92];
    }
    let t51;
    if ($[93] !== isSelected) {
        t51 = isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layoutId: "selectedIndicator",
            className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r-full",
            initial: {
                width: 0
            },
            animate: {
                width: 4
            },
            exit: {
                width: 0
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 541,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = isSelected;
        $[94] = t51;
    } else {
        t51 = $[94];
    }
    let t52;
    if ($[95] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = t51;
        $[96] = t52;
    } else {
        t52 = $[96];
    }
    let t53;
    if ($[97] !== isSelected || $[98] !== onSelect || $[99] !== t4 || $[100] !== t50 || $[101] !== t52 || $[102] !== t7 || $[103] !== t8) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            initial: t2,
            animate: t3,
            transition: t4,
            onMouseEnter: t5,
            onMouseLeave: t6,
            onClick: onSelect,
            onKeyDown: t7,
            tabIndex: 0,
            role: "button",
            "aria-pressed": isSelected,
            className: t8,
            children: [
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = isSelected;
        $[98] = onSelect;
        $[99] = t4;
        $[100] = t50;
        $[101] = t52;
        $[102] = t7;
        $[103] = t8;
        $[104] = t53;
    } else {
        t53 = $[104];
    }
    return t53;
};
_s(TaskCard, "bRXmKus9fOZFlca/6zXTYU+twGY=");
_c2 = TaskCard;
function ManagerTasksPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f1cf570d21db6633fc350dae69cfd49df9b1b8b9c32e3d4a0929488590080c9";
    }
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTask, setSelectedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [team, setTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Growth Team");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            id: 201,
            title: "Investigate payment gateway errors",
            description: "Users reporting 402 errors during checkout on mobile. Need logs and rollback plan.",
            createdBy: "Ravi Kumar",
            assignee: "Nisha",
            priority: "High",
            label: {
                text: "Billing",
                colorClass: "bg-amber-50 text-amber-700"
            },
            dueAt: "Today, 5:00 PM",
            timeAgo: "2h ago",
            status: "in_progress",
            hasAttachment: true,
            unread: true
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: 202,
            title: "Prepare Q4 campaign brief",
            description: "Finalize creative and KPIs, coordinate with design and analytics.",
            createdBy: "Meera Singh",
            assignee: null,
            priority: "Medium",
            label: {
                text: "Marketing",
                colorClass: "bg-blue-50 text-blue-700"
            },
            dueAt: "Nov 30",
            timeAgo: "1d ago",
            status: "open",
            hasAttachment: false,
            unread: true,
            starred: true
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            t0,
            t1,
            {
                id: 203,
                title: "Ship export CSV feature",
                description: "Add filter-by-status and scheduled export support to reports.",
                createdBy: "Carlos Ruiz",
                assignee: "Thomas",
                priority: "Critical",
                label: {
                    text: "Feature",
                    colorClass: "bg-cyan-50 text-cyan-700"
                },
                timeAgo: "3d ago",
                status: "open",
                hasAttachment: false
            },
            {
                id: 204,
                title: "Audit security findings",
                description: "Review SAST report and plan fixes for top-10 vulnerabilities.",
                createdBy: "Security Bot",
                assignee: "Sanket",
                priority: "High",
                label: null,
                dueAt: "Dec 5",
                timeAgo: "5d ago",
                status: "blocked"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const tasks = t2;
    let t3;
    if ($[4] !== filter || $[5] !== searchQuery) {
        const q = searchQuery.trim().toLowerCase();
        t3 = tasks.filter({
            "ManagerTasksPage[tasks.filter()]": (t)=>{
                const matchesSearch = q === "" || t.title.toLowerCase().includes(q) || (t.description ?? "").toLowerCase().includes(q) || (t.createdBy ?? "").toLowerCase().includes(q);
                Date.now();
                const matchesFilter = filter === "all" || filter === "open" && t.status !== "done" || filter === "due" && !!t.dueAt && t.status !== "done" || filter === "overdue" && !!t.dueAt && t.status !== "done" && t.priority === "Critical" || filter === "done" && t.status === "done";
                return matchesSearch && matchesFilter;
            }
        }["ManagerTasksPage[tasks.filter()]"]);
        $[4] = filter;
        $[5] = searchQuery;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const filteredTasks = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = tasks.filter(_ManagerTasksPageTasksFilter);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const unreadCount = t4.length;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = tasks.filter(_ManagerTasksPageTasksFilter2);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const dueCount = t5.length;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = tasks.filter(_ManagerTasksPageTasksFilter3);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const completedCount = t6.length;
    const handleComplete = _ManagerTasksPageHandleComplete;
    const handleDelete = _ManagerTasksPageHandleDelete;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
                    children: "Tasks"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 725,
                    columnNumber: 51
                }, this),
                unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    className: "px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg",
                    children: unreadCount
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 725,
                    columnNumber: 215
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 725,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 736,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== team) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-slate-500",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: team
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 743,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 743,
            columnNumber: 10
        }, this);
        $[12] = team;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-slate-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 751,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        dueCount,
                        " due"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 751,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 751,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-slate-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 758,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        completedCount,
                        " done"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 758,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 758,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        t9,
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 765,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 765,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 mt-2",
            children: "Track and manage team tasks — assign owners, prioritize work, and monitor due dates."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 773,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-6",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 780,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 788,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "ManagerTasksPage[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["ManagerTasksPage[<input>.onChange]"];
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== searchQuery) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1 min-w-[160px]",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    "aria-label": "Search tasks",
                    placeholder: "Search tasks, assignees, descriptions...",
                    value: searchQuery,
                    onChange: t16,
                    className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 804,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, this);
        $[23] = searchQuery;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== filter) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButtons, {
                active: filter,
                onChange: setFilter
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                lineNumber: 812,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 812,
            columnNumber: 11
        }, this);
        $[25] = filter;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "sr-only",
            htmlFor: "team-select-tasks",
            children: "Choose team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 820,
            columnNumber: 11
        }, this);
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ManagerTasksPage[<select>.onChange]": (e_0)=>setTeam(e_0.target.value)
        })["ManagerTasksPage[<select>.onChange]"];
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    let t22;
    let t23;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Growth Team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 838,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Support Team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 839,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Product Team"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 840,
            columnNumber: 11
        }, this);
        $[29] = t21;
        $[30] = t22;
        $[31] = t23;
    } else {
        t21 = $[29];
        t22 = $[30];
        t23 = $[31];
    }
    let t24;
    if ($[32] !== team) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            id: "team-select-tasks",
            value: team,
            onChange: t20,
            className: "px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20",
            children: [
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 851,
            columnNumber: 11
        }, this);
        $[32] = team;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium text-sm shadow-lg hover:opacity-95",
            onClick: _ManagerTasksPageButtonOnClick,
            children: "New Task"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 859,
            columnNumber: 11
        }, this);
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto flex items-center gap-2",
            children: [
                t19,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 866,
            columnNumber: 11
        }, this);
        $[35] = t24;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t17 || $[38] !== t18 || $[39] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center gap-3",
            children: [
                t17,
                t18,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 874,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
        $[39] = t26;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 884,
                    columnNumber: 53
                }, this),
                tasks.length,
                " total"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 884,
            columnNumber: 11
        }, this);
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                    className: "w-4 h-4 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 891,
                    columnNumber: 53
                }, this),
                dueCount,
                " due"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 891,
            columnNumber: 11
        }, this);
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-4 h-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 898,
                    columnNumber: 53
                }, this),
                completedCount,
                " completed"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 898,
            columnNumber: 11
        }, this);
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    let t31;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-slate-600",
            children: [
                t28,
                t29,
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-4 h-4 text-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                            lineNumber: 905,
                            columnNumber: 170
                        }, this),
                        tasks.filter(_ManagerTasksPageTasksFilter4).length,
                        " starred"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                    lineNumber: 905,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[44] = t31;
    } else {
        t31 = $[44];
    }
    let t32;
    if ($[45] !== t27) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 border-b border-slate-200",
            children: [
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 912,
            columnNumber: 11
        }, this);
        $[45] = t27;
        $[46] = t32;
    } else {
        t32 = $[46];
    }
    let t33;
    if ($[47] !== filteredTasks || $[48] !== selectedTask) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6",
            children: filteredTasks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredTasks.map({
                    "ManagerTasksPage[filteredTasks.map()]": (task, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                            task: task,
                            isSelected: selectedTask === task.id,
                            onSelect: {
                                "ManagerTasksPage[filteredTasks.map() > <TaskCard>.onSelect]": ()=>setSelectedTask({
                                        "ManagerTasksPage[filteredTasks.map() > <TaskCard>.onSelect > setSelectedTask()]": (prev)=>prev === task.id ? null : task.id
                                    }["ManagerTasksPage[filteredTasks.map() > <TaskCard>.onSelect > setSelectedTask()]"])
                            }["ManagerTasksPage[filteredTasks.map() > <TaskCard>.onSelect]"],
                            onComplete: handleComplete,
                            onDelete: handleDelete,
                            delay: idx * 0.04
                        }, task.id, false, {
                            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                            lineNumber: 921,
                            columnNumber: 67
                        }, this)
                }["ManagerTasksPage[filteredTasks.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                lineNumber: 920,
                columnNumber: 67
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                            className: "w-8 h-8 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                            lineNumber: 926,
                            columnNumber: 228
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                        lineNumber: 926,
                        columnNumber: 97
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-800 mb-2",
                        children: "No tasks found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                        lineNumber: 926,
                        columnNumber: 286
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500",
                        children: "Try changing your filters, search, or create a new task"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                        lineNumber: 926,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                lineNumber: 926,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 920,
            columnNumber: 11
        }, this);
        $[47] = filteredTasks;
        $[48] = selectedTask;
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    let t34;
    if ($[50] !== t32 || $[51] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
            children: [
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 935,
            columnNumber: 11
        }, this);
        $[50] = t32;
        $[51] = t33;
        $[52] = t34;
    } else {
        t34 = $[52];
    }
    let t35;
    if ($[53] !== t14 || $[54] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t14,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
                lineNumber: 944,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/Tasks/page.tsx",
            lineNumber: 944,
            columnNumber: 11
        }, this);
        $[53] = t14;
        $[54] = t34;
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    return t35;
}
_s1(ManagerTasksPage, "uhKK8D39PRUY2kpNCLzGHPQvmJs=");
_c3 = ManagerTasksPage;
function _ManagerTasksPageTasksFilter4(t_3) {
    return t_3.starred;
}
function _ManagerTasksPageButtonOnClick() {
    console.log("Open create task modal");
}
function _ManagerTasksPageHandleDelete(id_0) {
    console.log("Delete task", id_0);
}
function _ManagerTasksPageHandleComplete(id) {
    console.log("Complete task", id);
}
function _ManagerTasksPageTasksFilter3(t_2) {
    return t_2.status === "done";
}
function _ManagerTasksPageTasksFilter2(t_1) {
    return t_1.dueAt && t_1.status !== "done";
}
function _ManagerTasksPageTasksFilter(t_0) {
    return t_0.unread;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "IconButton");
__turbopack_context__.k.register(_c1, "FilterButtons");
__turbopack_context__.k.register(_c2, "TaskCard");
__turbopack_context__.k.register(_c3, "ManagerTasksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>CircleCheck
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
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944"
        }
    ]
];
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("tag", __iconNode);
;
 //# sourceMappingURL=tag.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ClipboardList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }
    ],
    [
        "path",
        {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }
    ],
    [
        "path",
        {
            d: "M12 11h4",
            key: "1jrz19"
        }
    ],
    [
        "path",
        {
            d: "M12 16h4",
            key: "n85exb"
        }
    ],
    [
        "path",
        {
            d: "M8 11h.01",
            key: "1dfujw"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
];
const ClipboardList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clipboard-list", __iconNode);
;
 //# sourceMappingURL=clipboard-list.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipboardList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>BellRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.3-.8-4.3-2-6",
            key: "5bb3ad"
        }
    ],
    [
        "path",
        {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }
    ],
    [
        "path",
        {
            d: "M4 2C2.8 3.7 2 5.7 2 8",
            key: "tap9e0"
        }
    ]
];
const BellRing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bell-ring", __iconNode);
;
 //# sourceMappingURL=bell-ring.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript) <export default as BellRing>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BellRing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>CalendarCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "m9 16 2 2 4-4",
            key: "19s6y9"
        }
    ]
];
const CalendarCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar-check", __iconNode);
;
 //# sourceMappingURL=calendar-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8e6a43a3._.js.map