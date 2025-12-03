(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// TeamChat is client-only (heavy + socket)
const TeamChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.default), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TeamChat;
/* ============================
   Small accessible IconButton
   ============================ */ const IconButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af";
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
            lineNumber: 68,
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
_c1 = IconButton;
const EmployeeCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af";
    }
    const { person, onOpenDetails, onMessage } = t0;
    const isOnline = person.presence === "online";
    let t1;
    if ($[1] !== onOpenDetails || $[2] !== person) {
        t1 = ()=>onOpenDetails(person);
        $[1] = onOpenDetails;
        $[2] = person;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -2,
            boxShadow: "0 10px 25px rgba(15,23,42,0.12)"
        };
        t3 = {
            type: "spring",
            stiffness: 260,
            damping: 20
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    const t4 = `w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium ${isOnline ? "bg-gradient-to-br from-emerald-500 to-teal-400 text-white" : "bg-slate-100 text-slate-600"}`;
    const t5 = person.name?.[0] ?? "U";
    let t6;
    if ($[6] !== t4 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== person.name) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold text-slate-900 truncate max-w-[200px]",
            children: person.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = person.name;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== person.role) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500 truncate max-w-[200px] mt-0.5",
            children: person.role
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = person.role;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 text-center",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${isOnline ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-slate-50 text-slate-500 border border-slate-100"}`;
    const t11 = `w-1.5 h-1.5 rounded-full ${isOnline ? "bg-emerald-500" : person.presence === "away" ? "bg-amber-400" : "bg-slate-400"}`;
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t11
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== person.presence) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "capitalize",
            children: person.presence
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = person.presence;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t10,
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 187,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t12;
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== t14 || $[25] !== t6 || $[26] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center px-4 pt-4",
            children: [
                t6,
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t14;
        $[25] = t6;
        $[26] = t9;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-3 h-3 text-slate-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    const t17 = person.email ?? "No email";
    let t18;
    if ($[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 truncate",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                    lineNumber: 215,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== person.location) {
        t19 = person.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 truncate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "w-3 h-3 text-slate-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                    lineNumber: 223,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate",
                    children: person.location
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                    lineNumber: 223,
                    columnNumber: 133
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 223,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = person.location;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== person.tasksAssigned) {
        t20 = typeof person.tasksAssigned === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 truncate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                    className: "w-3 h-3 text-slate-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                    lineNumber: 231,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        person.tasksAssigned,
                        " tasks assigned"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                    lineNumber: 231,
                    columnNumber: 162
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 231,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = person.tasksAssigned;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t18 || $[36] !== t19 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-4 pt-3 pb-2 text-xs text-slate-600 space-y-1.5",
            children: [
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t18;
        $[36] = t19;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== onOpenDetails || $[40] !== person) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: (e)=>{
                e.stopPropagation();
                onOpenDetails(person);
            },
            className: "flex-1 px-2 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[11px] font-medium text-slate-700",
            children: "View details"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = onOpenDetails;
        $[40] = person;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== onMessage || $[43] !== person) {
        t23 = (e_0)=>{
            e_0.stopPropagation();
            onMessage(person);
        };
        $[42] = onMessage;
        $[43] = person;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    const t24 = `Message ${person.name}`;
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== t23 || $[47] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t23,
            className: "p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white",
            "aria-label": t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t23;
        $[47] = t24;
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    let t27;
    if ($[49] !== t22 || $[50] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 pb-4 pt-2 mt-auto flex items-center gap-2",
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t22;
        $[50] = t26;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== ref || $[53] !== t1 || $[54] !== t15 || $[55] !== t21 || $[56] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            ref: ref,
            type: "button",
            onClick: t1,
            whileHover: t2,
            transition: t3,
            className: "w-full max-w-[230px] min-h-[280px] bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-stretch text-left focus:outline-none focus:ring-2 focus:ring-blue-500/40 hover:border-blue-300",
            children: [
                t15,
                t21,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = ref;
        $[53] = t1;
        $[54] = t15;
        $[55] = t21;
        $[56] = t27;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    return t28;
});
_c2 = EmployeeCard;
EmployeeCard.displayName = "EmployeeCard";
/* ============================
   Person Modal (details + actions)
   ============================ */ const PersonModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3965c47c82dcf6373703e7641a8e635bc31bbdf05b08dda0ac0a446e6a886af";
    }
    const { person, open, onClose, onMessageClick, initialFocusRef } = t0;
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
            }
            if (initialFocusRef?.current) {
                try {
                    initialFocusRef.current.focus();
                } catch  {}
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
    if ($[9] !== onClose || $[10] !== onMessageClick || $[11] !== open || $[12] !== person) {
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
                                            lineNumber: 403,
                                            columnNumber: 383
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 208
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-slate-900",
                                                children: person.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 494
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: person.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 567
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 489
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 403,
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
                                        lineNumber: 403,
                                        columnNumber: 773
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 679
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 403,
                                columnNumber: 638
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 403,
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
                                                lineNumber: 403,
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
                                                                lineNumber: 403,
                                                                columnNumber: 1057
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.email ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1104
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1016
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1195
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.phone ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1243
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1149
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1334
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.location ?? "\u2014"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1378
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1288
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 971
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 913
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
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
                                                                lineNumber: 403,
                                                                columnNumber: 1579
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: person.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1623
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1538
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1701
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Hired: ",
                                                                    person.hiredAt ?? "\u2014"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1748
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1655
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1848
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    person.tasksAssigned ?? 0,
                                                                    " tasks assigned"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1896
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1802
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 1493
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 1438
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 403,
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
                                                lineNumber: 403,
                                                columnNumber: 2007
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
                                                                lineNumber: 403,
                                                                columnNumber: 2181
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: [
                                                                    person.respondRate ?? 0,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2240
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 2130
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Presence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2358
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium capitalize",
                                                                children: person.presence
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2412
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 2307
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    person.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Tag"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2549
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `px-2 py-0.5 rounded-md text-xs font-medium ${person.label.colorClass}`,
                                                                children: person.label.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2598
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 2498
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 2075
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 2002
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 2736
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onMessageClick(person),
                                                        className: "px-3 py-2 rounded-lg bg-slate-100 text-sm flex items-center gap-2 hover:bg-slate-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 2993
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Message"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 2835
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
                                                                lineNumber: 403,
                                                                columnNumber: 3207
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Call"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 3041
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
                                                            lineNumber: 403,
                                                            columnNumber: 3406
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 3253
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 2789
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 2731
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 403,
                                columnNumber: 1975
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 403,
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
                            lineNumber: 403,
                            columnNumber: 3533
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 403,
                        columnNumber: 3475
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 392,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 392,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = onClose;
        $[10] = onMessageClick;
        $[11] = open;
        $[12] = person;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 414,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
};
_s(PersonModal, "zOMdpLpexCdljRWmzOWSNGpfgkM=");
_c3 = PersonModal;
/* ============================
   Message Modal: opens a TeamChat for a direct chat
   ============================ */ const MessageModal = ({ open, onClose, memberId, memberName, currentUser })=>{
    _s1();
    const [chatId, setChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorText, setErrorText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageModal.useEffect": ()=>{
            if (!open) {
                setChatId(null);
                setErrorText(null);
                return;
            }
            if (!memberId) return;
            let cancelled = false;
            const ensureChat = {
                "MessageModal.useEffect.ensureChat": async ()=>{
                    setLoading(true);
                    setErrorText(null);
                    try {
                        const meId = currentUser?.id ? String(currentUser.id) : null;
                        // 1) try to find an existing direct chat involving this member (and me if known)
                        try {
                            const qRes = await fetch(`/api/chats`, {
                                credentials: "same-origin"
                            });
                            if (!cancelled && qRes.ok) {
                                const j = await qRes.json().catch({
                                    "MessageModal.useEffect.ensureChat": ()=>({})
                                }["MessageModal.useEffect.ensureChat"]);
                                const list = j?.chats ?? j?.items ?? j ?? [];
                                const found = list.find({
                                    "MessageModal.useEffect.ensureChat": (c)=>{
                                        if (!c) return false;
                                        const t = (c.type ?? c.chatType ?? "").toString().toLowerCase();
                                        const isDirectType = t.includes("direct") || t.includes("dm") || t.includes("one_to_one") || t.includes("private");
                                        const rawMembers = c.members ?? c.participants ?? c.users ?? c.userIds ?? c.memberIds ?? c.participantIds ?? [];
                                        if (!Array.isArray(rawMembers)) return false;
                                        const ids = rawMembers.map({
                                            "MessageModal.useEffect.ensureChat.ids": (m)=>{
                                                if (m === null || m === undefined) return null;
                                                if (typeof m === "string" || typeof m === "number") {
                                                    return String(m);
                                                }
                                                // object: try common shapes
                                                return (m.userId ?? m.id ?? m._id ?? m.user?.id ?? m.user?._id ?? null) && String(m.userId ?? m.id ?? m._id ?? m.user?.id ?? m.user?._id);
                                            }
                                        }["MessageModal.useEffect.ensureChat.ids"]).filter(Boolean);
                                        const targetId = String(memberId);
                                        const hasMember = ids.includes(targetId);
                                        const hasMe = meId ? ids.includes(meId) : true;
                                        // prefer 1:1-ish conversations
                                        const isOneToOne = ids.length <= 2;
                                        return hasMember && hasMe && (isDirectType || isOneToOne);
                                    }
                                }["MessageModal.useEffect.ensureChat"]) ?? null;
                                if (found) {
                                    const id = found.id ?? found.chatId ?? found._id ?? null;
                                    if (id && !cancelled) {
                                        setChatId(String(id));
                                        setLoading(false);
                                        return;
                                    }
                                }
                            }
                        } catch (e) {
                            console.warn("chat list check failed:", e);
                        }
                        // 2) Try several possible payload shapes to create a new direct chat
                        const attempts = [
                            {
                                body: {
                                    type: "direct",
                                    memberId,
                                    userIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "type:direct + memberId + userIds"
                            },
                            {
                                body: {
                                    type: "direct",
                                    userId: memberId,
                                    userIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "type:direct + userId + userIds"
                            },
                            {
                                body: {
                                    type: "direct",
                                    userIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "type:direct + userIds"
                            },
                            {
                                body: {
                                    userIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "userIds: [me, member]"
                            },
                            {
                                body: {
                                    memberIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "memberIds: [me, member]"
                            },
                            {
                                body: {
                                    participantIds: meId ? [
                                        meId,
                                        memberId
                                    ] : [
                                        memberId
                                    ]
                                },
                                label: "participantIds: [me, member]"
                            },
                            {
                                body: {
                                    directTo: memberId
                                },
                                label: "directTo: memberId"
                            }
                        ];
                        for (const a of attempts){
                            if (cancelled) return;
                            try {
                                const res = await fetch("/api/chats", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(a.body)
                                });
                                if (cancelled) return;
                                if (res.ok) {
                                    const j = await res.json().catch({
                                        "MessageModal.useEffect.ensureChat": ()=>({})
                                    }["MessageModal.useEffect.ensureChat"]);
                                    const created = j?.chat ?? j?.message ?? j ?? {};
                                    const id = created.id ?? created.chatId ?? created._id ?? null;
                                    if (id) {
                                        setChatId(String(id));
                                        setLoading(false);
                                        return;
                                    }
                                } else {
                                    const txt = await res.text().catch({
                                        "MessageModal.useEffect.ensureChat": ()=>""
                                    }["MessageModal.useEffect.ensureChat"]);
                                    console.warn(`[create chat attempt "${a.label}" returned ${res.status}]`, txt);
                                    setErrorText(`Attempt "${a.label}" → ${res.status}: ${txt}`);
                                }
                            } catch (e) {
                                console.warn(`create attempt "${a.label}" failed:`, e);
                                setErrorText(`Attempt "${a.label}" failed: ${String(e?.message ?? e)}`);
                            }
                        }
                        if (!cancelled) {
                            setChatId(null);
                        }
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            }["MessageModal.useEffect.ensureChat"];
            void ensureChat();
            return ({
                "MessageModal.useEffect": ()=>{
                    cancelled = true;
                }
            })["MessageModal.useEffect"];
        }
    }["MessageModal.useEffect"], [
        open,
        memberId,
        currentUser
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            onClose: onClose,
            ariaLabel: `Chat with ${memberName ?? "member"}`,
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
                    duration: 0.14
                },
                className: "max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5 text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-slate-900",
                                                children: [
                                                    "Chat with ",
                                                    memberName ?? "member"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: chatId ? `Chat: ${chatId}` : loading ? "Preparing chat…" : errorText ? "Could not create chat" : "Preparing chat…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 602,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-3 py-1 rounded-md bg-slate-50 hover:bg-slate-100",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 616,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 601,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 min-h-[320px]",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-500",
                            children: "Preparing chat…"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                            lineNumber: 624,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0)) : chatId ? // render TeamChat for this chatId
                        // @ts-ignore (dynamic import client-only)
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[60vh]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamChat, {
                                chatId: chatId,
                                currentUser: currentUser ? {
                                    id: currentUser.id,
                                    name: currentUser.name
                                } : {
                                    id: "me"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 630,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-rose-600",
                            children: [
                                "Couldn't create chat automatically. Please try again or contact your administrator.",
                                errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-slate-500 break-words max-h-32 overflow-auto border-t pt-2",
                                    children: errorText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 639,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                            lineNumber: 636,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 623,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 589,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
            lineNumber: 588,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
        lineNumber: 587,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MessageModal, "ef8r0w/0oR0ygFAFZRjUlwQkURI=");
_c4 = MessageModal;
function ManagerPeoplePage() {
    _s2();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [team, setTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Growth Team");
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPerson, setSelectedPerson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // message modal state
    const [messageModalOpen, setMessageModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageTargetId, setMessageTargetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messageTargetName, setMessageTargetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // fetch current user (manager) to pass to TeamChat
    const [me, setMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerPeoplePage.useEffect": ()=>{
            ({
                "ManagerPeoplePage.useEffect": async ()=>{
                    try {
                        const r = await fetch("/api/me", {
                            credentials: "same-origin"
                        });
                        if (!r.ok) return;
                        const j = await r.json().catch({
                            "ManagerPeoplePage.useEffect": ()=>({})
                        }["ManagerPeoplePage.useEffect"]);
                        const user = j?.user ?? j ?? null;
                        if (user?.id) setMe({
                            id: String(user.id),
                            name: user.name ?? undefined
                        });
                    } catch  {
                    // ignore
                    }
                }
            })["ManagerPeoplePage.useEffect"]();
        }
    }["ManagerPeoplePage.useEffect"], []);
    // load teams -> pick team by name -> fetch members
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerPeoplePage.useEffect": ()=>{
            let cancelled = false;
            const load = {
                "ManagerPeoplePage.useEffect.load": async ()=>{
                    setLoading(true);
                    setError(null);
                    try {
                        // 1) fetch teams list
                        const res = await fetch("/api/teams", {
                            credentials: "same-origin"
                        });
                        if (!res.ok) throw new Error(`teams fetch failed ${res.status}`);
                        const j_0 = await res.json().catch({
                            "ManagerPeoplePage.useEffect.load": ()=>({})
                        }["ManagerPeoplePage.useEffect.load"]);
                        const list = j_0?.teams ?? j_0?.items ?? j_0 ?? [];
                        // 2) find team by name (fallback to first)
                        const foundTeam = list.find({
                            "ManagerPeoplePage.useEffect.load": (t)=>String(t.name || "").toLowerCase() === team.toLowerCase()
                        }["ManagerPeoplePage.useEffect.load"]) ?? list[0] ?? null;
                        if (!foundTeam) {
                            if (!cancelled) setPeople([]);
                            return;
                        }
                        const teamId = foundTeam.id ?? foundTeam.teamId ?? foundTeam._id ?? null;
                        if (!teamId) {
                            if (!cancelled) setPeople([]);
                            return;
                        }
                        // 3) fetch team details
                        const detailRes = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, {
                            credentials: "same-origin"
                        });
                        if (!detailRes.ok) {
                            const errText = await detailRes.text().catch({
                                "ManagerPeoplePage.useEffect.load": ()=>""
                            }["ManagerPeoplePage.useEffect.load"]);
                            throw new Error(`team detail failed ${detailRes.status} ${errText}`);
                        }
                        const dj = await detailRes.json().catch({
                            "ManagerPeoplePage.useEffect.load": ()=>({})
                        }["ManagerPeoplePage.useEffect.load"]);
                        const teamObj = dj?.team ?? dj ?? {};
                        // 4) map members to Person[]
                        const members = (teamObj.members ?? []).map({
                            "ManagerPeoplePage.useEffect.load.members": (m)=>{
                                const id = m.userId ?? m.user?.id ?? m.id ?? null;
                                const name = m.name ?? m.user?.name ?? (m.user ? `${m.user.name}` : null) ?? (id ? `User ${id}` : "Unknown");
                                return {
                                    id: String(id ?? ""),
                                    name: name ?? "Unknown",
                                    role: m.role ?? m.user?.role ?? "Employee",
                                    presence: "offline",
                                    email: m.email ?? m.user?.email ?? null,
                                    phone: null,
                                    location: null,
                                    tasksAssigned: 0,
                                    respondRate: 0,
                                    hiredAt: null,
                                    starred: false,
                                    label: null
                                };
                            }
                        }["ManagerPeoplePage.useEffect.load.members"]);
                        if (!cancelled) setPeople(members);
                    } catch (err) {
                        console.warn("Failed to load people:", err);
                        if (!cancelled) setError("Failed to load team members");
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            }["ManagerPeoplePage.useEffect.load"];
            void load();
            return ({
                "ManagerPeoplePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["ManagerPeoplePage.useEffect"];
        }
    }["ManagerPeoplePage.useEffect"], [
        team
    ]);
    // click handlers
    const openPersonModal = (person, triggerRef)=>{
        setSelectedPerson(person);
        setIsModalOpen(true);
        if (triggerRef?.current) lastTriggerRef.current = triggerRef.current;
    };
    const closePersonModal = ()=>{
        setIsModalOpen(false);
        setSelectedPerson(null);
    };
    const handleMessageClick = (person_0)=>{
        setMessageTargetId(person_0.id);
        setMessageTargetName(person_0.name);
        setMessageModalOpen(true);
    };
    // search + filter
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ManagerPeoplePage.useMemo[filtered]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            return people.filter({
                "ManagerPeoplePage.useMemo[filtered]": (p)=>{
                    const matchesSearch = q === "" || p.name.toLowerCase().includes(q) || (p.email ?? "").toLowerCase().includes(q) || String(p.role ?? "").toLowerCase().includes(q);
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
    // refs per person card to restore focus
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    people.forEach((p_2)=>{
        if (!cardRefs.current.has(p_2.id)) cardRefs.current.set(p_2.id, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef());
    });
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
                                                lineNumber: 804,
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
                                                lineNumber: 808,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 803,
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
                                                        lineNumber: 819,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: team
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 820,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            avgResponse,
                                                            "% avg response"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 823,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            totalCount,
                                                            " members"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 830,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 mt-2",
                                children: "Browse and message members of your team. Click a card to view details or message directly."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 801,
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
                                                        lineNumber: 848,
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
                                                        lineNumber: 849,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 847,
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
                                                            lineNumber: 854,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter("online"),
                                                            type: "button",
                                                            className: `px-3 py-2 rounded-xl text-sm ${filter === "online" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                                            children: "Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter("offline"),
                                                            type: "button",
                                                            className: `px-3 py-2 rounded-xl text-sm ${filter === "offline" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                                            children: "Offline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 852,
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
                                                        lineNumber: 867,
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
                                                                lineNumber: 871,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Support Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Product Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium text-sm shadow-lg hover:opacity-95",
                                                        onClick: ()=>{
                                                            console.log("Invite new member");
                                                            router.push("/auth/invite"); // kept as-is
                                                        },
                                                        children: "Invite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 866,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 846,
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
                                                        lineNumber: 887,
                                                        columnNumber: 17
                                                    }, this),
                                                    people.length,
                                                    " total"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                        className: "w-4 h-4 text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 17
                                                    }, this),
                                                    onlineCount,
                                                    " online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                        lineNumber: 885,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 845,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-10 text-center text-sm text-slate-500",
                                    children: "Loading members…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 899,
                                    columnNumber: 24
                                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-10 text-center text-sm text-rose-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 901,
                                    columnNumber: 32
                                }, this) : filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center",
                                    children: filtered.map((person_1)=>{
                                        const ref = cardRefs.current.get(person_1.id) ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
                                        cardRefs.current.set(person_1.id, ref);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmployeeCard, {
                                            ref: ref,
                                            person: person_1,
                                            onOpenDetails: (p_3)=>openPersonModal(p_3, ref),
                                            onMessage: handleMessageClick
                                        }, person_1.id, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 907,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 46
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-16 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-8 h-8 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                                lineNumber: 911,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 910,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-800 mb-2",
                                            children: "No members found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500",
                                            children: "Try adjusting your search, filters, or team selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                    lineNumber: 909,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                                lineNumber: 898,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonModal, {
                person: selectedPerson,
                open: isModalOpen,
                onClose: closePersonModal,
                onMessageClick: handleMessageClick,
                initialFocusRef: lastTriggerRef
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 926,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageModal, {
                open: messageModalOpen,
                onClose: ()=>setMessageModalOpen(false),
                memberId: messageTargetId,
                memberName: messageTargetName ?? undefined,
                currentUser: me
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
                lineNumber: 929,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/manager/People/page.tsx",
        lineNumber: 798,
        columnNumber: 10
    }, this);
}
_s2(ManagerPeoplePage, "AmNPELRGqNjJQ87MZxHP1b0/BPU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c5 = ManagerPeoplePage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TeamChat");
__turbopack_context__.k.register(_c1, "IconButton");
__turbopack_context__.k.register(_c2, "EmployeeCard");
__turbopack_context__.k.register(_c3, "PersonModal");
__turbopack_context__.k.register(_c4, "MessageModal");
__turbopack_context__.k.register(_c5, "ManagerPeoplePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_402a0d87._.js.map