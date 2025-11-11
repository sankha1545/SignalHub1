(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sidebar.tsx
__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ProfileMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const NAV = [
    {
        id: "overview",
        label: "Overview",
        href: "/dashboard/overview",
        icon: "▦"
    },
    {
        id: "inbox",
        label: "Inbox",
        href: "/inbox",
        icon: "✉"
    },
    {
        id: "sent",
        label: "Sent",
        href: "/sent",
        icon: "➤"
    },
    {
        id: "teams",
        label: "Teams",
        href: "/teams",
        icon: "👥"
    },
    {
        id: "analytics",
        label: "Analytics",
        href: "/dashboard",
        icon: "📈"
    },
    {
        id: "settings",
        label: "Settings",
        href: "/settings",
        icon: "⚙"
    }
];
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "42dff5b7064f0d4a2ee37e9940f76a82aad9cafbeb09505b37b391644c4d206b") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42dff5b7064f0d4a2ee37e9940f76a82aad9cafbeb09505b37b391644c4d206b";
    }
    const { active: t1 } = t0;
    const active = t1 === undefined ? "analytics" : t1;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Sidebar[useEffect()]": ()=>{
                const onEsc = function onEsc(e) {
                    if (e.key === "Escape") {
                        setOpen(false);
                    }
                };
                window.addEventListener("keydown", onEsc);
                return ()=>window.removeEventListener("keydown", onEsc);
            }
        })["Sidebar[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[3] !== open) {
        t4 = ({
            "Sidebar[useEffect()]": ()=>{
                if (open) {
                    closeBtnRef.current?.focus();
                }
            }
        })["Sidebar[useEffect()]"];
        t5 = [
            open
        ];
        $[3] = open;
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = open ? "Close menu" : "Open menu";
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Sidebar[<button>.onClick]": ()=>setOpen(_SidebarButtonOnClickSetOpen)
        })["Sidebar[<button>.onClick]"];
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    const t8 = open ? "\u2715" : "\u2630";
    let t9;
    if ($[7] !== t6 || $[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden fixed top-4 left-4 z-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": t6,
                onClick: t7,
                className: "p-2 rounded-lg bg-white shadow text-slate-700 border",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 109,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold",
                    children: "U"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold",
                            children: "SignalHub"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 210
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-400",
                            children: "Unified Inbox"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 264
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                "aria-label": "Search navigation",
                placeholder: "Search...",
                className: "w-full px-3 py-2 border rounded-lg text-sm"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 125,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== active) {
        t12 = NAV.map({
            "Sidebar[NAV.map()]": (n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: n.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors", active === n.id ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-700 hover:bg-slate-50"),
                    "aria-current": active === n.id ? "page" : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-6 text-center",
                            children: n.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 133,
                            columnNumber: 311
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 text-left",
                            children: n.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 133,
                            columnNumber: 360
                        }, this),
                        n.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white",
                            children: n.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 133,
                            columnNumber: 422
                        }, this) : null
                    ]
                }, n.id, true, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 133,
                    columnNumber: 34
                }, this)
        }["Sidebar[NAV.map()]"]);
        $[12] = active;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "space-y-1",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 142,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 border-t",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 150,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "hidden lg:flex lg:flex-col lg:w-72 lg:min-h-screen lg:border-r lg:bg-white border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col h-full justify-between",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 157,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== active || $[20] !== open) {
        t16 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
            initial: {
                x: "-100%"
            },
            animate: {
                x: 0
            },
            exit: {
                x: "-100%"
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            className: "fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg border-r",
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex items-center justify-between border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold",
                                    children: "U"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 218
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "SignalHub"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 364
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 175,
                            columnNumber: 177
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: closeBtnRef,
                                className: "p-2 rounded-md border",
                                "aria-label": "Close menu",
                                onClick: {
                                    "Sidebar[<button>.onClick]": ()=>setOpen(false)
                                }["Sidebar[<button>.onClick]"],
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                lineNumber: 175,
                                columnNumber: 457
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 175,
                            columnNumber: 416
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 175,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-auto h-full flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        "aria-label": "Search navigation",
                                        placeholder: "Search...",
                                        className: "w-full px-3 py-2 border rounded-lg text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 164
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                    lineNumber: 177,
                                    columnNumber: 142
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-1",
                                    children: NAV.map({
                                        "Sidebar[NAV.map()]": (n_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: n_0.href,
                                                onClick: {
                                                    "Sidebar[NAV.map() > <Link>.onClick]": ()=>setOpen(false)
                                                }["Sidebar[NAV.map() > <Link>.onClick]"],
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", active === n_0.id ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-700 hover:bg-slate-50"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 text-center",
                                                        children: n_0.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 235
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-left",
                                                        children: n_0.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 286
                                                    }, this),
                                                    n_0.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white",
                                                        children: n_0.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 352
                                                    }, this) : null
                                                ]
                                            }, n_0.id, true, {
                                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                lineNumber: 178,
                                                columnNumber: 44
                                            }, this)
                                    }["Sidebar[NAV.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                    lineNumber: 177,
                                    columnNumber: 289
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 177,
                            columnNumber: 137
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                lineNumber: 181,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 181,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 177,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 165,
            columnNumber: 19
        }, this);
        $[19] = active;
        $[20] = open;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[22] = t16;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== open) {
        t18 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "fixed inset-0 z-40 bg-black/30",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            "aria-hidden": true,
            onClick: {
                "Sidebar[<motion.button>.onClick]": ()=>setOpen(false)
            }["Sidebar[<motion.button>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 198,
            columnNumber: 19
        }, this);
        $[24] = open;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Sidebar.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== t15 || $[29] !== t17 || $[30] !== t19 || $[31] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t15,
                t17,
                t19
            ]
        }, void 0, true);
        $[28] = t15;
        $[29] = t17;
        $[30] = t19;
        $[31] = t9;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    return t20;
}
_s(Sidebar, "nfDrU3v7dU1UifQp40qrOsTyP8c=");
_c = Sidebar;
function _SidebarButtonOnClickSetOpen(s) {
    return !s;
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_Sidebar_tsx_89543304._.js.map