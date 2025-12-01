(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/card.tsx
__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardSquare",
    ()=>CardSquare,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const Card = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30";
    }
    let children;
    let className;
    let rest;
    let t1;
    if ($[1] !== t0) {
        ({ asChild: t1, children, className, ...rest } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = rest;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        rest = $[4];
        t1 = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    if (asChild && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        const child = children;
        let t2;
        let t3;
        if ($[6] !== child.props || $[7] !== className || $[8] !== rest) {
            const mergedClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("block bg-white border border-slate-100 rounded-2xl shadow-sm transition-shadow hover:shadow-md", className);
            t2 = rest;
            t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedClass, child.props && child.props.className || "");
            $[6] = child.props;
            $[7] = className;
            $[8] = rest;
            $[9] = t2;
            $[10] = t3;
        } else {
            t2 = $[9];
            t3 = $[10];
        }
        let t4;
        if ($[11] !== t2 || $[12] !== t3) {
            t4 = {
                ...t2,
                className: t3
            };
            $[11] = t2;
            $[12] = t3;
            $[13] = t4;
        } else {
            t4 = $[13];
        }
        const childProps = t4;
        let t5;
        if ($[14] !== child || $[15] !== childProps) {
            t5 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
            $[14] = child;
            $[15] = childProps;
            $[16] = t5;
        } else {
            t5 = $[16];
        }
        return t5;
    }
    let t2;
    if ($[17] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bg-white border border-slate-100 rounded-2xl shadow-sm transition-shadow hover:shadow-md", className);
        $[17] = className;
        $[18] = t2;
    } else {
        t2 = $[18];
    }
    let t3;
    if ($[19] !== children || $[20] !== rest || $[21] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...rest,
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = children;
        $[20] = rest;
        $[21] = t2;
        $[22] = t3;
    } else {
        t3 = $[22];
    }
    return t3;
};
_c = Card;
const CardHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30";
    }
    let children;
    let className;
    let rest;
    if ($[1] !== t0) {
        ({ children, className, ...rest } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = rest;
    } else {
        children = $[2];
        className = $[3];
        rest = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-4 py-3 border-b border-slate-100", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== rest || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...rest,
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = rest;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_c1 = CardHeader;
const CardContent = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30";
    }
    let children;
    let className;
    let rest;
    if ($[1] !== t0) {
        ({ children, className, ...rest } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = rest;
    } else {
        children = $[2];
        className = $[3];
        rest = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("p-4", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== rest || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...rest,
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 185,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = rest;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_c2 = CardContent;
const __TURBOPACK__default__export__ = Card;
const CardSquare = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07f5e19c1640d83540916bc719290b80cfa1bf4d11e7afe53901db74d5d72d30";
    }
    const { id, name, subtitle: t1, avatarUrl: t2, size: t3, className, onClick, asChild: t4, showBorder: t5 } = t0;
    const subtitle = t1 === undefined ? null : t1;
    const avatarUrl = t2 === undefined ? null : t2;
    const size = t3 === undefined ? "md" : t3;
    const asChild = t4 === undefined ? false : t4;
    const showBorder = t5 === undefined ? true : t5;
    let baseCardClass;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== avatarUrl || $[2] !== className || $[3] !== id || $[4] !== name || $[5] !== onClick || $[6] !== showBorder || $[7] !== size || $[8] !== subtitle) {
        const sizeMap = {
            sm: {
                card: "p-3",
                avatar: "w-12 h-12",
                text: "text-sm",
                subtitle: "text-xs"
            },
            md: {
                card: "p-4",
                avatar: "w-16 h-16",
                text: "text-base",
                subtitle: "text-sm"
            },
            lg: {
                card: "p-6",
                avatar: "w-20 h-20",
                text: "text-lg",
                subtitle: "text-sm"
            }
        }[size];
        baseCardClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bg-white rounded-2xl shadow-sm transition-shadow hover:shadow-md flex items-center gap-4", showBorder ? "border border-slate-100" : "", sizeMap.card, className);
        t9 = onClick ? "button" : undefined;
        t10 = 0;
        t11 = onClick;
        if ($[21] !== onClick) {
            t12 = (e)=>{
                if (!onClick) {
                    return;
                }
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick(e);
                }
            };
            $[21] = onClick;
            $[22] = t12;
        } else {
            t12 = $[22];
        }
        t13 = "false";
        t14 = id;
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseCardClass, "w-full");
        let t17;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex-shrink-0", "flex items-center justify-center");
            $[23] = t17;
        } else {
            t17 = $[23];
        }
        const t18 = avatarUrl ? "bg-transparent" : "bg-slate-100";
        let t19;
        if ($[24] !== t18) {
            t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rounded-full flex items-center justify-center overflow-hidden ring-2 ring-slate-100", t18);
            $[24] = t18;
            $[25] = t19;
        } else {
            t19 = $[25];
        }
        const t20 = sizeMap.avatar.split(" ")[0] === undefined ? undefined : undefined;
        let t21;
        if ($[26] !== t20) {
            t21 = {
                width: t20
            };
            $[26] = t20;
            $[27] = t21;
        } else {
            t21 = $[27];
        }
        const t22 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: name,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("object-cover rounded-full", sizeMap.avatar.replace(" ", " "))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 318,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center justify-center font-semibold text-slate-700", sizeMap.avatar === "w-12 h-12" ? "w-12 h-12" : sizeMap.avatar === "w-16 h-16" ? "w-16 h-16" : "w-20 h-20"),
            children: getInitials(name)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 318,
            columnNumber: 146
        }, ("TURBOPACK compile-time value", void 0));
        if ($[28] !== t19 || $[29] !== t21 || $[30] !== t22) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t17,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t19,
                    style: t21,
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/card.tsx",
                    lineNumber: 320,
                    columnNumber: 34
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 320,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[28] = t19;
            $[29] = t21;
            $[30] = t22;
            $[31] = t16;
        } else {
            t16 = $[31];
        }
        t6 = "min-w-0";
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("font-semibold text-slate-900", sizeMap.text, "truncate"),
            children: name
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 329,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-slate-500 mt-0.5 truncate", sizeMap.subtitle),
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 330,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = avatarUrl;
        $[2] = className;
        $[3] = id;
        $[4] = name;
        $[5] = onClick;
        $[6] = showBorder;
        $[7] = size;
        $[8] = subtitle;
        $[9] = baseCardClass;
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
        $[13] = t13;
        $[14] = t14;
        $[15] = t15;
        $[16] = t16;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        baseCardClass = $[9];
        t10 = $[10];
        t11 = $[11];
        t12 = $[12];
        t13 = $[13];
        t14 = $[14];
        t15 = $[15];
        t16 = $[16];
        t6 = $[17];
        t7 = $[18];
        t8 = $[19];
        t9 = $[20];
    }
    let t17;
    if ($[32] !== t6 || $[33] !== t7 || $[34] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t6;
        $[33] = t7;
        $[34] = t8;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t10 || $[37] !== t11 || $[38] !== t12 || $[39] !== t13 || $[40] !== t14 || $[41] !== t15 || $[42] !== t16 || $[43] !== t17 || $[44] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: t9,
            tabIndex: t10,
            onClick: t11,
            onKeyDown: t12,
            "aria-pressed": t13,
            "data-id": t14,
            className: t15,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t10;
        $[37] = t11;
        $[38] = t12;
        $[39] = t13;
        $[40] = t14;
        $[41] = t15;
        $[42] = t16;
        $[43] = t17;
        $[44] = t9;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    const content = t18;
    if (asChild) {
        let t19;
        if ($[46] !== baseCardClass || $[47] !== content || $[48] !== onClick) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                asChild: true,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: baseCardClass,
                    role: "button",
                    tabIndex: 0,
                    onClick: onClick,
                    onKeyDown: _temp,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/card.tsx",
                    lineNumber: 395,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 395,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[46] = baseCardClass;
            $[47] = content;
            $[48] = onClick;
            $[49] = t19;
        } else {
            t19 = $[49];
        }
        return t19;
    }
    let t19;
    if ($[50] !== baseCardClass || $[51] !== content) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: baseCardClass,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = baseCardClass;
        $[51] = content;
        $[52] = t19;
    } else {
        t19 = $[52];
    }
    return t19;
};
_c3 = CardSquare;
/* helper: initials */ function getInitials(name) {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function _temp() {}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardContent");
__turbopack_context__.k.register(_c3, "CardSquare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/modal.tsx
__turbopack_context__.s([
    "Modal",
    ()=>Modal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FOCUSABLE_SELECTOR = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
const getFocusableElements = (container)=>{
    if (!container) return [];
    try {
        return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el)=>!!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
    } catch  {
        return [];
    }
};
const Modal = ({ children, onClose, ariaLabel = "Dialog", className })=>{
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ensure portal root exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            let root = document.getElementById("modal-root");
            if (!root) {
                root = document.createElement("div");
                root.id = "modal-root";
                document.body.appendChild(root);
            }
        }
    }["Modal.useEffect"], []);
    // lock scroll + preserve/restore focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            lastFocused.current = document.activeElement;
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            // focus the panel (or first focusable element) shortly after mount
            const t = setTimeout({
                "Modal.useEffect.t": ()=>{
                    const focusable = getFocusableElements(panelRef.current);
                    if (focusable.length) focusable[0].focus();
                    else panelRef.current?.focus();
                }
            }["Modal.useEffect.t"], 30);
            return ({
                "Modal.useEffect": ()=>{
                    clearTimeout(t);
                    document.body.style.overflow = originalOverflow;
                    try {
                        lastFocused.current?.focus();
                    } catch  {
                    // ignore
                    }
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    // key handlers: ESC + focus trap (Tab / Shift+Tab)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const onKey = {
                "Modal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        e.preventDefault();
                        onClose();
                        return;
                    }
                    if (e.key === "Tab") {
                        const focusable_0 = getFocusableElements(panelRef.current);
                        if (focusable_0.length === 0) {
                            e.preventDefault();
                            return;
                        }
                        const idx = focusable_0.indexOf(document.activeElement);
                        if (e.shiftKey) {
                            if (idx === 0 || document.activeElement === panelRef.current) {
                                e.preventDefault();
                                focusable_0[focusable_0.length - 1].focus();
                            }
                        } else {
                            if (idx === focusable_0.length - 1) {
                                e.preventDefault();
                                focusable_0[0].focus();
                            }
                        }
                    }
                }
            }["Modal.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "Modal.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    // backdrop click to close
    const onBackdropMouseDown = (e_0)=>{
        if (e_0.target === overlayRef.current) onClose();
    };
    // Motion variants for panel and backdrop
    const backdropVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.5
        },
        exit: {
            opacity: 0
        }
    };
    const panelVariants = {
        hidden: {
            opacity: 0,
            y: 8,
            scale: 0.995
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 8,
            scale: 0.995
        }
    };
    const modal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: overlayRef,
            onMouseDown: onBackdropMouseDown,
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
            "aria-hidden": false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    variants: backdropVariants,
                    transition: {
                        duration: 0.18
                    },
                    className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                }, "backdrop", false, {
                    fileName: "[project]/src/components/ui/modal.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: panelRef,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": ariaLabel,
                    tabIndex: -1,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    variants: panelVariants,
                    transition: {
                        duration: 0.22,
                        ease: "easeOut"
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(// defaults: professional panel that matches team page design
                    "relative z-10 w-full max-w-2xl rounded-2xl bg-white border border-slate-100 shadow-lg overflow-hidden outline-none", // safe max-height and internal scroll when needed
                    "max-h-[90vh] overflow-auto", // allow consumer to pass additional width/padding overrides
                    className),
                    style: {
                        WebkitTapHighlightColor: "transparent"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Close dialog",
                                onClick: onClose,
                                className: "absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-md p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition",
                                type: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/modal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/modal.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/modal.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/modal.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "panel", false, {
                    fileName: "[project]/src/components/ui/modal.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/modal.tsx",
        lineNumber: 151,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0));
    const root_0 = ("TURBOPACK compile-time truthy", 1) ? document.getElementById("modal-root") : "TURBOPACK unreachable";
    if (root_0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modal, root_0);
    // Fallback inline render (shouldn't happen in client)
    return modal;
};
_s(Modal, "aGOYZJmf0TaglBUmdnFRyqNieUM=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/manager/People/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/manager/People/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ManagerPeoplePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
/**
 * Imports:
 * - CardSquare: square box-like card with avatar ring (from your ui)
 * - Modal: accessible modal primitive
 *
 * Make sure components/ui/card exports CardSquare as shown previously.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ============================
   Small accessible IconButton
   ============================ */ const IconButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "45564a07a31b4ccfcd155f1f559fe57fd98c254a406898b3a15094c2e3326251") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45564a07a31b4ccfcd155f1f559fe57fd98c254a406898b3a15094c2e3326251";
    }
    const { children, ariaLabel, title, onClick, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 ${className}`;
    let t3;
    if ($[1] !== ariaLabel || $[2] !== children || $[3] !== onClick || $[4] !== t2 || $[5] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": ariaLabel,
            title: title,
            onClick: onClick,
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = ariaLabel;
        $[2] = children;
        $[3] = onClick;
        $[4] = t2;
        $[5] = title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_c = IconButton;
/* ============================
   Modal to show person details
   - same structure as before, adapted to work with CardSquare triggers
   ============================ */ const PersonModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "45564a07a31b4ccfcd155f1f559fe57fd98c254a406898b3a15094c2e3326251") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45564a07a31b4ccfcd155f1f559fe57fd98c254a406898b3a15094c2e3326251";
    }
    const { person, open, onClose, initialFocusRef } = t0;
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== onClose || $[2] !== open) {
        t1 = ()=>{
            if (!open) {
                return;
            }
            const onKey = (e)=>{
                if (e.key === "Escape") {
                    onClose();
                }
            };
            document.addEventListener("keydown", onKey);
            return ()=>document.removeEventListener("keydown", onKey);
        };
        t2 = [
            open,
            onClose
        ];
        $[1] = onClose;
        $[2] = open;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] !== initialFocusRef || $[6] !== open) {
        t3 = ()=>{
            if (open) {
                const t = setTimeout(()=>closeButtonRef.current?.focus(), 60);
                return ()=>clearTimeout(t);
            } else {
                if (initialFocusRef?.current) {
                    try {
                        initialFocusRef.current.focus();
                    } catch  {}
                }
            }
        };
        t4 = [
            open,
            initialFocusRef
        ];
        $[5] = initialFocusRef;
        $[6] = open;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!person) {
        return null;
    }
    let t5;
    if ($[9] !== onClose || $[10] !== open || $[11] !== person) {
        t5 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            onClose: onClose,
            ariaLabel: `Details for ${person.name}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8
                },
                transition: {
                    duration: 0.18
                },
                className: "max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-12 h-12 rounded-full flex items-center justify-center ${person.presence === "online" ? "bg-gradient-to-br from-emerald-500 to-teal-400" : "bg-slate-100"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: `w-6 h-6 ${person.presence === "online" ? "text-white" : "text-slate-500"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 383
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 208
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-slate-900",
                                                children: person.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 494
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: person.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 567
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 489
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 173,
                                columnNumber: 167
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                    ariaLabel: "Close details",
                                    title: "Close",
                                    onClick: onClose,
                                    className: "bg-slate-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 773
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 679
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 173,
                                columnNumber: 638
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 173,
                        columnNumber: 86
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 918
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1057
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.email ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1104
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1016
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1195
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.phone ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1243
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1149
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1334
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.location ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1378
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1288
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 971
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 913
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 1443
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1579
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1623
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1538
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1701
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Hired: ",
                                                                    person.hiredAt ?? "\u2014"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1748
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1655
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1848
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    person.tasksAssigned,
                                                                    " tasks assigned"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 1896
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 1802
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 1493
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 1438
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 173,
                                columnNumber: 886
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Activity & metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 2002
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-slate-800 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Response rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2176
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: [
                                                                    person.respondRate ?? 0,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2235
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 2125
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Presence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2353
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium capitalize",
                                                                children: person.presence
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2407
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 2302
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    person.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Tag"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2544
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `px-2 py-0.5 rounded-md text-xs font-medium ${person.label.colorClass}`,
                                                                children: person.label.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2593
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 2493
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 2070
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 1997
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 2731
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>console.log("Message", person.id),
                                                        className: "px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 2999
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Message"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 2830
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>console.log("Call", person.id),
                                                        className: "px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 3213
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Call"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 3047
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>console.log("More actions", person.id),
                                                        className: "p-2 rounded-lg bg-slate-50 hover:bg-slate-100",
                                                        "aria-label": "More",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 3412
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 3259
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 2784
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 2726
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 173,
                                columnNumber: 1970
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 173,
                        columnNumber: 827
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-slate-100 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: closeButtonRef,
                            type: "button",
                            onClick: onClose,
                            className: "px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium hover:opacity-95",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                            lineNumber: 173,
                            columnNumber: 3539
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 173,
                        columnNumber: 3481
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 162,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 162,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = onClose;
        $[10] = open;
        $[11] = person;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
};
_s(PersonModal, "zOMdpLpexCdljRWmzOWSNGpfgkM=");
_c1 = PersonModal;
function ManagerPeoplePage() {
    _s1();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [team, setTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Growth Team");
    const [selectedPerson, setSelectedPerson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // stable mock people
    const people = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ManagerPeoplePage.useMemo[people]": ()=>[
                {
                    id: 301,
                    name: "Ravi Kumar",
                    role: "Team Lead",
                    presence: "online",
                    email: "ravi.kumar@example.com",
                    phone: "+91 98765 43210",
                    location: "Bengaluru, India",
                    tasksAssigned: 6,
                    respondRate: 92,
                    hiredAt: "Mar 2021",
                    starred: true,
                    label: {
                        text: "On-call",
                        colorClass: "bg-emerald-50 text-emerald-700"
                    }
                },
                {
                    id: 302,
                    name: "Meera Singh",
                    role: "Engineer",
                    presence: "away",
                    email: "meera.singh@example.com",
                    phone: "+91 91234 56789",
                    location: "Kolkata, India",
                    tasksAssigned: 4,
                    respondRate: 87,
                    hiredAt: "Jul 2022",
                    starred: false,
                    label: {
                        text: "Mentor",
                        colorClass: "bg-blue-50 text-blue-700"
                    }
                },
                {
                    id: 303,
                    name: "Thomas Green",
                    role: "Support",
                    presence: "offline",
                    email: "thomas.green@example.com",
                    phone: null,
                    location: "Remote — UK",
                    tasksAssigned: 9,
                    respondRate: 74,
                    hiredAt: "Jan 2020",
                    starred: false
                },
                {
                    id: 304,
                    name: "Nisha Patel",
                    role: "Sales",
                    presence: "online",
                    email: "nisha.patel@example.com",
                    phone: "+91 99876 54321",
                    location: "Mumbai, India",
                    tasksAssigned: 2,
                    respondRate: 98,
                    hiredAt: "Oct 2023",
                    starred: false,
                    label: {
                        text: "Top performer",
                        colorClass: "bg-amber-50 text-amber-700"
                    }
                }
            ]
    }["ManagerPeoplePage.useMemo[people]"], []);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ManagerPeoplePage.useMemo[filtered]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            return people.filter({
                "ManagerPeoplePage.useMemo[filtered]": (p)=>{
                    const matchesSearch = q === "" || p.name.toLowerCase().includes(q) || (p.email ?? "").toLowerCase().includes(q) || p.role.toLowerCase().includes(q);
                    const matchesFilter = filter === "all" || filter === "online" && p.presence === "online" || filter === "offline" && p.presence === "offline" || filter === "role" && p.role === "Team Lead";
                    return matchesSearch && matchesFilter;
                }
            }["ManagerPeoplePage.useMemo[filtered]"]);
        }
    }["ManagerPeoplePage.useMemo[filtered]"], [
        people,
        searchQuery,
        filter
    ]);
    const onlineCount = people.filter((p_0)=>p_0.presence === "online").length;
    const totalCount = people.length;
    const avgResponse = Math.round(people.reduce((s, p_1)=>s + (p_1.respondRate ?? 0), 0) / (people.length || 1) * 1) / 1;
    // refs per person card to restore focus; create map of refs
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    people.forEach((p_2)=>{
        if (!cardRefs.current.has(p_2.id)) cardRefs.current.set(p_2.id, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef());
    });
    // open modal with person details and remember trigger (ref)
    const openPersonModal = (person, triggerRef)=>{
        setSelectedPerson(person);
        setIsModalOpen(true);
        if (triggerRef?.current) lastTriggerRef.current = triggerRef.current;
    };
    const closePersonModal = ()=>{
        setIsModalOpen(false);
        setSelectedPerson(null);
    // focus restored by PersonModal effect using lastTriggerRef (passed as initialFocusRef)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent",
                                                children: "People"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            onlineCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0
                                                },
                                                animate: {
                                                    scale: 1
                                                },
                                                className: "px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg",
                                                children: onlineCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: team
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            avgResponse,
                                                            "% avg response"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            totalCount,
                                                            " members"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 mt-2",
                                children: "Browse and manage your team members. Click a card to view full details."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6 border-b border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 min-w-[160px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "search",
                                                        "aria-label": "Search people",
                                                        placeholder: "Search people, email, role...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-150"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 overflow-x-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter("all"),
                                                            type: "button",
                                                            className: `px-3 py-2 rounded-xl text-sm ${filter === "all" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                                            children: "All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter("online"),
                                                            type: "button",
                                                            className: `px-3 py-2 rounded-xl text-sm ${filter === "online" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                                            children: "Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter("offline"),
                                                            type: "button",
                                                            className: `px-3 py-2 rounded-xl text-sm ${filter === "offline" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                                            children: "Offline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-auto flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "sr-only",
                                                        htmlFor: "team-select-people",
                                                        children: "Choose team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "team-select-people",
                                                        value: team,
                                                        onChange: (e_0)=>setTeam(e_0.target.value),
                                                        className: "px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Growth Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Support Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Product Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium text-sm shadow-lg hover:opacity-95",
                                                        onClick: ()=>{
                                                            console.log("Invite new member");
                                                        },
                                                        children: "Invite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 text-sm text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this),
                                                    people.length,
                                                    " total"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                        className: "w-4 h-4 text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 17
                                                    }, this),
                                                    onlineCount,
                                                    " online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "w-4 h-4 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this),
                                                    people.filter((p_3)=>p_3.starred).length,
                                                    " starred"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6",
                                children: filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: filtered.map((person_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSquare"], {
                                                name: person_0.name,
                                                subtitle: person_0.role,
                                                avatarUrl: null,
                                                size: "md",
                                                asChild: false,
                                                onClick: ()=>openPersonModal(person_0, cardRefs.current.get(person_0.id)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 21
                                            }, this)
                                        }, person_0.id, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 43
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 36
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-16 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-8 h-8 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-800 mb-2",
                                            children: "No members found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500",
                                            children: "Try adjusting your search, filters, or team selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonModal, {
                person: selectedPerson,
                open: isModalOpen,
                onClose: closePersonModal,
                initialFocusRef: lastTriggerRef
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
        lineNumber: 294,
        columnNumber: 10
    }, this);
}
_s1(ManagerPeoplePage, "hacPTiRr5m1TJ5l40WxxcBft0FI=");
_c2 = ManagerPeoplePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IconButton");
__turbopack_context__.k.register(_c1, "PersonModal");
__turbopack_context__.k.register(_c2, "ManagerPeoplePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0c1e7845._.js.map