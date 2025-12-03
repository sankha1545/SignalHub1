(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/manager/TeamInbox/page.tsx
__turbopack_context__.s([
    "default",
    ()=>TeamInboxPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/ChatSocketProvider.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ==========================
   Dynamic imports (client only)
   ========================== */ const TeamChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.default), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TeamChat;
/* ==========================
   Local persistence & cross-tab events
   ========================== */ const LOCAL_KEY_STATUS = "chat_status_map_v1";
function readLocalStatusMap() {
    try {
        return JSON.parse(localStorage.getItem(LOCAL_KEY_STATUS) || "{}");
    } catch  {
        return {};
    }
}
function writeLocalStatusMap(m) {
    try {
        localStorage.setItem(LOCAL_KEY_STATUS, JSON.stringify(m));
        try {
            window.dispatchEvent(new CustomEvent("chatStatusUpdate", {
                detail: {
                    map: m
                }
            }));
        } catch  {}
    } catch  {}
}
/* ==========================
   Small IconButton
   ========================== */ const IconButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798";
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
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 95,
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
_c1 = IconButton;
/* ==========================
   FilterButtons
   ========================== */ const FilterButtons = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798";
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
                key: "assigned",
                label: "Assigned",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
            },
            {
                key: "unassigned",
                label: "Unassigned",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            },
            {
                key: "flagged",
                label: "Flagged",
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
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
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 152,
                            columnNumber: 376
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: it.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 152,
                            columnNumber: 408
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, it.key, true, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 152,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 150,
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
_c2 = FilterButtons;
/* ==========================
   Helper: derive display name for a chat (consistent with TeamChat)
   - Prefer other participant's name for direct chat
   - Fallback to meta/lastMessageSender/chat.name/id
   ========================== */ function deriveDisplayName(chat, me) {
    // If server provided a clear group name and it's not a direct, prefer it
    if (chat.type !== "direct" && chat.name) return chat.name;
    // candidates can live in many places - normalize
    const candidates = chat.participants ?? chat.meta?.participants ?? chat.meta?.members ?? chat.meta?.users ?? chat.meta?.participantIds ?? chat.meta?.membersList ?? [];
    if (Array.isArray(candidates) && candidates.length > 0) {
        const normalized = candidates.map((p)=>{
            if (!p) return null;
            if (typeof p === "string" || typeof p === "number") return {
                id: String(p),
                name: String(p)
            };
            // object shape: attempt common fields
            return {
                id: p.id ?? p.userId ?? p._id ?? p.uid ?? (p.user && (p.user.id ?? p.user._id)) ?? null,
                name: p.name ?? p.displayName ?? p.user?.name ?? (p.email ? p.email.split("@")[0] : null) ?? null
            };
        }).filter(Boolean);
        if (me && me.id != null) {
            const other = normalized.find((n)=>n.id && String(n.id) !== String(me.id));
            if (other && other.name) return other.name;
            if (other && other.id) return other.id;
        }
        // fallback to first named
        const firstNamed = normalized.find((n)=>n && n.name);
        if (firstNamed) return firstNamed.name;
    }
    // fallback to explicit lastMessageSender (if server provides)
    if (chat.lastMessageSender) return chat.lastMessageSender;
    // fallback to chat.name or very generic
    return chat.name ?? `Chat ${chat.id}`;
}
/* ==========================
   MessageCard (preview)
   ========================== */ const MessageCard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3329fdcc8feb6ba30904fc19deb3df779bdf65c2a91014a9e1d45ac84ace6798";
    }
    const { chat, isSelected, onSelect, delay: t1, chatStatusMap } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const statusEntry = chatStatusMap?.[chat.id] ?? null;
    const status = statusEntry?.status ?? null;
    const isPending = !!status && status !== "seen";
    const previewText = chat.lastMessagePreview ?? (chat.type === "team" ? "Team chat \u2014 no messages yet" : "No messages yet");
    const senderName = chat.lastMessageSender ?? null;
    const previewDisplay = senderName ? `${senderName}: ${previewText}` : previewText;
    let t2;
    if ($[1] !== status) {
        t2 = ()=>{
            if (!status) {
                return null;
            }
            if (status === "sent") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    title: "Sent",
                    className: "text-xs text-slate-500",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 247,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (status === "delivered") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    title: "Delivered",
                    className: "text-xs text-slate-500",
                    children: "✓✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 250,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (status === "seen") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    title: "Seen",
                    className: "text-xs text-blue-500",
                    children: "✓✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 253,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            return null;
        };
        $[1] = status;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const RenderTicks = t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 8
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== delay) {
        t5 = {
            duration: 0.22,
            delay
        };
        $[5] = delay;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>setHover(true);
        t7 = ()=>setHover(false);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    const t8 = `relative p-3 rounded-xl border transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-200 ${isSelected ? "bg-blue-50 border-blue-200 shadow-md" : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"}`;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                className: "w-5 h-5 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 305,
                columnNumber: 141
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = `text-sm truncate ${isPending ? "font-semibold text-slate-900" : "font-medium text-slate-800"}`;
    let t11;
    if ($[10] !== chat.name || $[11] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t10,
            title: chat.name,
            children: chat.name
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = chat.name;
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== isPending) {
        t12 = isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: {
                scale: 0
            },
            animate: {
                scale: 1
            },
            className: "w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 322,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = isPending;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t11 || $[16] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t12;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-shrink-0 text-xs text-slate-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 343,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2 mb-1",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    const t16 = `text-sm mb-1 truncate ${isPending ? "font-semibold text-slate-700" : "text-slate-600"}`;
    let t17;
    if ($[21] !== previewDisplay || $[22] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: t16,
            title: previewDisplay,
            children: previewDisplay
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = previewDisplay;
        $[22] = t16;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== chat.type) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-slate-400",
            children: chat.type === "team" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600",
                children: "Group"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 368,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600",
                children: "Direct"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 368,
                columnNumber: 221
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = chat.type;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== chat.unreadCount) {
        t19 = chat.unreadCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium",
            children: chat.unreadCount
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 376,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[26] = chat.unreadCount;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== RenderTicks) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderTicks, {}, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = RenderTicks;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== t19 || $[31] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-slate-400",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 392,
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
            className: "flex items-center justify-between gap-3",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t18;
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== t15 || $[37] !== t17 || $[38] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t15,
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t15;
        $[37] = t17;
        $[38] = t22;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0
        };
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    const t25 = hover ? 1 : 0;
    let t26;
    if ($[41] !== t25) {
        t26 = {
            opacity: t25
        };
        $[41] = t25;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
            ariaLabel: "More",
            title: "More",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 440,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t24,
            animate: t26,
            className: "flex items-center gap-1",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t26;
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== t23 || $[47] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t9,
                t23,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 455,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t23;
        $[47] = t28;
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== isSelected) {
        t30 = isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layoutId: "selectedIndicator-manager",
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
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 464,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = isSelected;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t30;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] !== isSelected || $[54] !== onSelect || $[55] !== t29 || $[56] !== t31 || $[57] !== t5 || $[58] !== t8) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            initial: t3,
            animate: t4,
            transition: t5,
            onMouseEnter: t6,
            onMouseLeave: t7,
            onClick: onSelect,
            tabIndex: 0,
            role: "button",
            "aria-pressed": isSelected,
            className: t8,
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = isSelected;
        $[54] = onSelect;
        $[55] = t29;
        $[56] = t31;
        $[57] = t5;
        $[58] = t8;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    return t32;
};
_s(MessageCard, "bRXmKus9fOZFlca/6zXTYU+twGY=");
_c3 = MessageCard;
function TeamInboxPage() {
    _s1();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [teamSelect, setTeamSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Growth Team");
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const chatSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"])();
    const [chatStatusMap, setChatStatusMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TeamInboxPage.useState": ()=>readLocalStatusMap()
    }["TeamInboxPage.useState"]);
    /* -------------------------
     API: load chats & normalize
     ------------------------- */ const loadChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TeamInboxPage.useCallback[loadChats]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/chats", {
                    credentials: "same-origin"
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const j = await res.json().catch({
                    "TeamInboxPage.useCallback[loadChats]": ()=>({})
                }["TeamInboxPage.useCallback[loadChats]"]);
                const payload = j?.chats ?? j?.items ?? j ?? [];
                const normalized = payload.map({
                    "TeamInboxPage.useCallback[loadChats].normalized": (c)=>{
                        const participants = c.participants ?? c.meta?.participants ?? c.meta?.members ?? null;
                        const lastMessagePreview = c.lastMessagePreview ?? c.meta?.lastMessage?.content ?? c.meta?.lastMessage?.text ?? null;
                        const lastMessageSender = c.lastMessageSender ?? c.meta?.lastMessage?.senderName ?? c.meta?.lastMessage?.from ?? null;
                        const type = c.type ?? c.meta?.type ?? (c.teamId ? "team" : "direct");
                        return {
                            ...c,
                            participants,
                            lastMessagePreview,
                            lastMessageSender,
                            type
                        };
                    }
                }["TeamInboxPage.useCallback[loadChats].normalized"]);
                setChats(normalized);
                if (!selectedChatId && normalized.length > 0) setSelectedChatId(normalized[0].id);
            } catch (err) {
                console.warn("Failed to load chats:", err);
                setError("Could not load chats");
                setChats([]);
            } finally{
                setLoading(false);
            }
        }
    }["TeamInboxPage.useCallback[loadChats]"], [
        selectedChatId
    ]);
    /* -------------------------
     API: load current user
     ------------------------- */ const loadMe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TeamInboxPage.useCallback[loadMe]": async ()=>{
            try {
                const res_0 = await fetch("/api/me", {
                    credentials: "include"
                });
                if (!res_0.ok) {
                    setCurrentUser(null);
                    return;
                }
                const j_0 = await res_0.json().catch({
                    "TeamInboxPage.useCallback[loadMe]": ()=>({})
                }["TeamInboxPage.useCallback[loadMe]"]);
                const u = j_0?.user ?? j_0 ?? null;
                if (u && u.id) {
                    setCurrentUser({
                        id: String(u.id),
                        role: u.role ?? null,
                        name: u.name ?? null,
                        email: u.email ?? null,
                        organizationId: u.organizationId ?? null
                    });
                } else {
                    setCurrentUser(null);
                }
            } catch (e) {
                console.warn("Failed to load /api/me:", e);
                setCurrentUser(null);
            }
        }
    }["TeamInboxPage.useCallback[loadMe]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            loadMe();
            void loadChats();
            const onStorage = {
                "TeamInboxPage.useEffect.onStorage": (ev)=>{
                    if (ev.key === LOCAL_KEY_STATUS) setChatStatusMap(readLocalStatusMap());
                }
            }["TeamInboxPage.useEffect.onStorage"];
            window.addEventListener("storage", onStorage);
            const onCustom = {
                "TeamInboxPage.useEffect.onCustom": ()=>setChatStatusMap(readLocalStatusMap())
            }["TeamInboxPage.useEffect.onCustom"];
            window.addEventListener("chatStatusUpdate", onCustom);
            // listen for external requests to open a direct chat (used by People -> Message button)
            const openHandler = {
                "TeamInboxPage.useEffect.openHandler": (ev_0)=>{
                    const d = ev_0.detail ?? {};
                    const memberId = d?.memberId ?? null;
                    if (!memberId) return;
                    // find existing direct chat for memberId
                    const found = chats.find({
                        "TeamInboxPage.useEffect.openHandler.found": (c_0)=>{
                            if ((c_0.type ?? "").toString().toLowerCase() !== "direct") return false;
                            const parts = c_0.participants ?? c_0.meta?.participants ?? [];
                            if (!Array.isArray(parts)) return false;
                            return parts.some({
                                "TeamInboxPage.useEffect.openHandler.found": (p)=>{
                                    if (!p) return false;
                                    if (typeof p === "string" || typeof p === "number") return String(p) === String(memberId);
                                    const id = p.id ?? p.userId ?? p._id ?? (p.user && (p.user.id ?? p.user._id));
                                    return id && String(id) === String(memberId);
                                }
                            }["TeamInboxPage.useEffect.openHandler.found"]);
                        }
                    }["TeamInboxPage.useEffect.openHandler.found"]);
                    if (found) {
                        // select the existing chat
                        setSelectedChatId(found.id);
                    } else {
                        // no existing chat — tell the caller to create one (caller should then create and server/socket will add it)
                        window.dispatchEvent(new CustomEvent("createDirectChat", {
                            detail: {
                                memberId
                            }
                        }));
                    }
                }
            }["TeamInboxPage.useEffect.openHandler"];
            window.addEventListener("openDirectChat", openHandler);
            return ({
                "TeamInboxPage.useEffect": ()=>{
                    window.removeEventListener("storage", onStorage);
                    window.removeEventListener("chatStatusUpdate", onCustom);
                    window.removeEventListener("openDirectChat", openHandler);
                }
            })["TeamInboxPage.useEffect"];
        }
    }["TeamInboxPage.useEffect"], [
        loadChats,
        loadMe,
        chats
    ]);
    /* -------------------------
     When me becomes available: resolve direct chat display names
     ------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            if (!currentUser) return;
            setChats({
                "TeamInboxPage.useEffect": (prev)=>prev.map({
                        "TeamInboxPage.useEffect": (c_1)=>{
                            if ((c_1.type ?? "").toString().toLowerCase() === "direct") {
                                const name = deriveDisplayName(c_1, currentUser);
                                return {
                                    ...c_1,
                                    name
                                };
                            }
                            return c_1;
                        }
                    }["TeamInboxPage.useEffect"])
            }["TeamInboxPage.useEffect"]);
        }
    }["TeamInboxPage.useEffect"], [
        currentUser
    ]);
    /* -------------------------
     Socket handlers (team created, chat message, delivered, read)
     - keep chat list updated and update names when sender/participants appear
     ------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            if (!chatSocket) return;
            const handleTeamCreated = {
                "TeamInboxPage.useEffect.handleTeamCreated": (payload_0)=>{
                    const newChat = payload_0?.chat ?? (payload_0?.team ? {
                        id: payload_0.team.id,
                        name: payload_0.team.name,
                        teamId: payload_0.team.id
                    } : null);
                    if (!newChat) return;
                    setChats({
                        "TeamInboxPage.useEffect.handleTeamCreated": (prev_0)=>{
                            if (prev_0.find({
                                "TeamInboxPage.useEffect.handleTeamCreated": (c_2)=>c_2.id === newChat.id
                            }["TeamInboxPage.useEffect.handleTeamCreated"])) return prev_0;
                            const inserted = {
                                id: newChat.id,
                                name: newChat.name ?? `Team ${newChat.teamId ?? ""}`,
                                type: "team",
                                teamId: newChat.teamId ?? null,
                                lastMessagePreview: null,
                                lastMessageSender: null,
                                unreadCount: 0,
                                participants: newChat.participants ?? null
                            };
                            return [
                                inserted,
                                ...prev_0
                            ];
                        }
                    }["TeamInboxPage.useEffect.handleTeamCreated"]);
                }
            }["TeamInboxPage.useEffect.handleTeamCreated"];
            const handleChatMessage = {
                "TeamInboxPage.useEffect.handleChatMessage": (payload_1)=>{
                    const chatId = payload_1?.chatId ?? payload_1?.chat?.id ?? payload_1?.room ?? null;
                    if (!chatId) return;
                    const msg = payload_1?.message ?? payload_1;
                    const text = msg?.content ?? msg?.text ?? "";
                    const senderName = msg?.sender?.name ?? msg?.senderName ?? msg?.fromName ?? msg?.from ?? null;
                    const senderId = msg?.sender?.id ?? msg?.senderId ?? msg?.from ?? null;
                    setChats({
                        "TeamInboxPage.useEffect.handleChatMessage": (prev_1)=>prev_1.map({
                                "TeamInboxPage.useEffect.handleChatMessage": (c_3)=>{
                                    if (c_3.id !== String(chatId)) return c_3;
                                    const preview = text.length > 120 ? text.slice(0, 120) + "…" : text;
                                    let name_0 = c_3.name;
                                    // if direct and no good name, try to set from participants or sender
                                    if ((c_3.type ?? "").toString().toLowerCase() === "direct") {
                                        if ((!name_0 || name_0 === "Chat" || name_0.startsWith("Chat ")) && senderName) name_0 = senderName;
                                        // try to inject participant info if present
                                        const parts_0 = c_3.participants ?? c_3.meta?.participants ?? c_3.meta?.members ?? null;
                                        if (!name_0 && Array.isArray(parts_0) && parts_0.length > 0 && currentUser?.id) {
                                            const other = parts_0.map({
                                                "TeamInboxPage.useEffect.handleChatMessage.other": (p_0)=>{
                                                    if (!p_0) return null;
                                                    if (typeof p_0 === "string" || typeof p_0 === "number") return {
                                                        id: String(p_0),
                                                        name: String(p_0)
                                                    };
                                                    return {
                                                        id: p_0.id ?? p_0.userId ?? p_0._id ?? null,
                                                        name: p_0.name ?? p_0.displayName ?? p_0.user?.name ?? null
                                                    };
                                                }
                                            }["TeamInboxPage.useEffect.handleChatMessage.other"]).find({
                                                "TeamInboxPage.useEffect.handleChatMessage.other": (p_1)=>p_1 && p_1.id && String(p_1.id) !== String(currentUser.id)
                                            }["TeamInboxPage.useEffect.handleChatMessage.other"]);
                                            if (other && other.name) name_0 = other.name;
                                        }
                                    }
                                    return {
                                        ...c_3,
                                        lastMessagePreview: preview,
                                        lastMessageSender: senderName,
                                        unreadCount: (c_3.unreadCount ?? 0) + 1,
                                        name: name_0
                                    };
                                }
                            }["TeamInboxPage.useEffect.handleChatMessage"])
                    }["TeamInboxPage.useEffect.handleChatMessage"]);
                }
            }["TeamInboxPage.useEffect.handleChatMessage"];
            const handleDelivered = {
                "TeamInboxPage.useEffect.handleDelivered": (payload_2)=>{
                    const chatId_0 = payload_2?.chatId ?? null;
                    if (!chatId_0) return;
                    const map = readLocalStatusMap();
                    map[chatId_0] = {
                        status: "delivered",
                        updatedAt: Date.now()
                    };
                    writeLocalStatusMap(map);
                    setChatStatusMap({
                        ...map
                    });
                }
            }["TeamInboxPage.useEffect.handleDelivered"];
            const handleRead = {
                "TeamInboxPage.useEffect.handleRead": (payload_3)=>{
                    const chatId_1 = payload_3?.chatId ?? payload_3?.chat?.id ?? null;
                    if (!chatId_1) return;
                    const map_0 = readLocalStatusMap();
                    map_0[chatId_1] = {
                        status: "seen",
                        updatedAt: Date.now()
                    };
                    writeLocalStatusMap(map_0);
                    setChatStatusMap({
                        ...map_0
                    });
                    setChats({
                        "TeamInboxPage.useEffect.handleRead": (prev_2)=>prev_2.map({
                                "TeamInboxPage.useEffect.handleRead": (c_4)=>c_4.id === String(chatId_1) ? {
                                        ...c_4,
                                        unreadCount: 0
                                    } : c_4
                            }["TeamInboxPage.useEffect.handleRead"])
                    }["TeamInboxPage.useEffect.handleRead"]);
                }
            }["TeamInboxPage.useEffect.handleRead"];
            try {
                chatSocket.on("team:created", handleTeamCreated);
                chatSocket.on("chat:message", handleChatMessage);
                chatSocket.on("chat:delivered", handleDelivered);
                chatSocket.on("chat:read", handleRead);
            } catch (e_0) {
                console.warn("chatSocket registration failed:", e_0);
            }
            return ({
                "TeamInboxPage.useEffect": ()=>{
                    try {
                        chatSocket.off("team:created", handleTeamCreated);
                        chatSocket.off("chat:message", handleChatMessage);
                        chatSocket.off("chat:delivered", handleDelivered);
                        chatSocket.off("chat:read", handleRead);
                    } catch  {}
                }
            })["TeamInboxPage.useEffect"];
        }
    }["TeamInboxPage.useEffect"], [
        chatSocket,
        currentUser
    ]);
    /* -------------------------
     When selecting a chat: optimistically clear unread + mark seen locally & server
     ------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            if (!selectedChatId) return;
            // clear unread locally
            setChats({
                "TeamInboxPage.useEffect": (prev_3)=>prev_3.map({
                        "TeamInboxPage.useEffect": (c_5)=>c_5.id === selectedChatId ? {
                                ...c_5,
                                unreadCount: 0
                            } : c_5
                    }["TeamInboxPage.useEffect"])
            }["TeamInboxPage.useEffect"]);
            const map_1 = readLocalStatusMap();
            if (!map_1[selectedChatId] || map_1[selectedChatId].status !== "seen") {
                map_1[selectedChatId] = {
                    status: "seen",
                    updatedAt: Date.now()
                };
                writeLocalStatusMap(map_1);
                setChatStatusMap({
                    ...map_1
                });
            }
            try {
                void fetch(`/api/chats/${encodeURIComponent(selectedChatId)}/read`, {
                    method: "POST",
                    credentials: "same-origin"
                });
            } catch  {}
        }
    }["TeamInboxPage.useEffect"], [
        selectedChatId
    ]);
    /* -------------------------
     Search + filter
     ------------------------- */ const filteredChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamInboxPage.useMemo[filteredChats]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            return chats.filter({
                "TeamInboxPage.useMemo[filteredChats]": (c_6)=>{
                    const matchesSearch = q === "" || (c_6.name ?? "").toString().toLowerCase().includes(q) || (c_6.lastMessagePreview ?? "").toLowerCase().includes(q) || (c_6.lastMessageSender ?? "").toLowerCase().includes(q);
                    const matchesFilter = filter === "all" || filter === "assigned" && (c_6.meta?.assigned === true || c_6.type === "direct" && c_6.meta?.assignedTo) || filter === "unassigned" && !(c_6.meta?.assigned === true || c_6.type === "direct" && c_6.meta?.assignedTo) || filter === "flagged" && c_6.meta?.flagged === true;
                    return matchesSearch && matchesFilter;
                }
            }["TeamInboxPage.useMemo[filteredChats]"]);
        }
    }["TeamInboxPage.useMemo[filteredChats]"], [
        chats,
        searchQuery,
        filter
    ]);
    const unreadCount = chats.reduce((acc, c_7)=>acc + (c_7.unreadCount ?? 0), 0);
    const handleArchive = (id_0)=>{
        console.log("Archive", id_0);
    };
    const handleDelete = (id_1)=>{
        console.log("Delete", id_1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            children: "Team Inbox"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 824,
                                            columnNumber: 15
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
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 828,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 823,
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
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: teamSelect
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 838,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "assigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 843,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 849,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 848,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 837,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 822,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mt-2",
                            children: "Manage incoming customer messages for your team. Outgoing messages show a tick state and a blue-dot until seen."
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 855,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 821,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b lg:border-b-0 lg:border-r border-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                "aria-label": "Search chats",
                                                placeholder: "Search chats...",
                                                value: searchQuery,
                                                onChange: (e_1)=>setSearchQuery(e_1.target.value),
                                                className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                lineNumber: 865,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 863,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButtons, {
                                            active: filter,
                                            onChange: (v)=>setFilter(v)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 869,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 868,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Chats"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 872,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 max-h-[60vh] overflow-auto pt-2",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-500",
                                            children: "Loading chats…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 875,
                                            columnNumber: 28
                                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-rose-600",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 875,
                                            columnNumber: 99
                                        }, this) : filteredChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 text-center text-sm text-slate-500",
                                            children: "No chats found — create a team or start a direct chat to begin."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 875,
                                            columnNumber: 183
                                        }, this) : filteredChats.map((c_8, idx)=>{
                                            // ensure chat has a sensible name (derive when needed)
                                            const display = c_8.name ?? (currentUser ? deriveDisplayName(c_8, currentUser) : c_8.name ?? "Chat");
                                            const normalized_0 = {
                                                ...c_8,
                                                name: display
                                            };
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageCard, {
                                                chat: normalized_0,
                                                isSelected: selectedChatId === c_8.id,
                                                onSelect: ()=>setSelectedChatId(c_8.id),
                                                delay: idx * 0.03,
                                                chatStatusMap: chatStatusMap
                                            }, c_8.id, false, {
                                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                lineNumber: 884,
                                                columnNumber: 24
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 874,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 861,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 min-h-[60vh]",
                            children: selectedChatId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-md border border-slate-100 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamChat, {
                                    chatId: selectedChatId,
                                    currentUser: currentUser ?? {
                                        id: "unknown"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 895,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                lineNumber: 892,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center text-center text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                            className: "w-8 h-8 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 900,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 899,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-800 mb-1",
                                        children: "Select a chat to begin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 902,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Pick a team group chat or a direct thread to start messaging."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                                        lineNumber: 903,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                lineNumber: 898,
                                columnNumber: 24
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 891,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 859,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 819,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/TeamChat.tsx",
        lineNumber: 818,
        columnNumber: 10
    }, this);
}
_s1(TeamInboxPage, "0y9rGSVom+OeiTwshHP/2PGyJEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"]
    ];
});
_c4 = TeamInboxPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TeamChat");
__turbopack_context__.k.register(_c1, "IconButton");
__turbopack_context__.k.register(_c2, "FilterButtons");
__turbopack_context__.k.register(_c3, "MessageCard");
__turbopack_context__.k.register(_c4, "TeamInboxPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_chat_TeamChat_tsx_080cea54._.js.map