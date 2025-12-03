(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/manager/TeamInbox/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
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
/**
 * TeamInbox with message-status features:
 *  - When a message is sent by the current user we mark that chat as "sent" (single tick).
 *  - When server emits a 'delivered' event we mark as "delivered" (double tick).
 *  - When server emits a 'read' event we mark as "seen" (double tick colored blue / clears blue dot).
 *  - While a chat has a pending outgoing status (sent/delivered) it will show:
 *      * Chat name & preview highlighted (bold)
 *      * A small blue dot next to the chat preview (until seen)
 *      * Tick rendering (single/double/blue)
 *
 * Implementation notes:
 *  - Uses localStorage to persist chat-status map across pages/tabs.
 *  - Emits a CustomEvent 'chatStatusUpdate' so other pages/components can react in real-time.
 *  - Listens to socket events: 'chat:message', 'chat:delivered', 'chat:read' (adjust names to match your backend if different).
 *  - When opening a chat we optimistically mark it as 'seen' locally (and dispatch event) so UI clears the blue-dot immediately;
 *    the server should still send canonical read events which will overwrite local state.
 */ /* ============================
   Dynamic imports (client only)
   ============================ */ const TeamChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.default), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TeamChat;
/* ============================
   Local persistence & events
   ============================ */ const LOCAL_KEY_STATUS = "chat_status_map_v1"; // chatId -> { status: 'sent'|'delivered'|'seen', updatedAt }
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
    } catch  {}
}
function dispatchStatusUpdate(detail) {
    try {
        window.dispatchEvent(new CustomEvent("chatStatusUpdate", {
            detail
        }));
    } catch  {}
}
/* ============================
   Small reusable IconButton
   ============================ */ const IconButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058";
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
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 111,
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
/* ============================
   Filter Buttons component
   ============================ */ const FilterButtons = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058";
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
                label: "Assigned"
            },
            {
                key: "unassigned",
                label: "Unassigned"
            },
            {
                key: "flagged",
                label: "Flagged"
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: it.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                        lineNumber: 165,
                        columnNumber: 364
                    }, ("TURBOPACK compile-time value", void 0))
                }, it.key, false, {
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 165,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 163,
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
/* ============================
   MessageCard adapted for chat previews (Manager)
   - receives chat and also reads chat-status map to render blue-dot / bold / ticks
   ============================ */ const MessageCard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0db3bef9cc7faa884462fdc1d9cdde3f5ec9c69064f3cf005d1aacefe9bd9058";
    }
    const { chat, isSelected, onSelect, delay: t1, chatStatusMap } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const statusEntry = chatStatusMap?.[chat.id] ?? null;
    const status = statusEntry?.status ?? null;
    const isPending = status && status !== "seen";
    const isBold = isPending;
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
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 217,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (status === "delivered") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    title: "Delivered",
                    className: "text-xs text-slate-500",
                    children: "✓✓"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 220,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (status === "seen") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    title: "Seen",
                    className: "text-xs text-blue-500",
                    children: "✓✓"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 223,
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
                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                lineNumber: 275,
                columnNumber: 141
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 275,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = `text-sm truncate ${isBold ? "font-semibold text-slate-900" : "font-medium text-slate-800"}`;
    let t11;
    if ($[10] !== chat.name || $[11] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t10,
            title: chat.name,
            children: chat.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 283,
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
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 292,
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
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 304,
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
                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                lineNumber: 313,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 313,
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
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    const t16 = `text-sm mb-1 truncate ${isBold ? "font-semibold text-slate-700" : "text-slate-600"}`;
    const t17 = chat.lastMessagePreview ?? "";
    const t18 = chat.lastMessagePreview ?? (chat.type === "team" ? "Team chat \u2014 no messages yet" : "No messages yet");
    let t19;
    if ($[21] !== t16 || $[22] !== t17 || $[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: t16,
            title: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t16;
        $[22] = t17;
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== chat.type) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-slate-400",
            children: chat.type === "team" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600",
                children: "Group"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                lineNumber: 341,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-slate-50 text-slate-600",
                children: "Direct"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                lineNumber: 341,
                columnNumber: 221
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = chat.type;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] !== chat.unreadCount) {
        t21 = chat.unreadCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-medium",
            children: chat.unreadCount
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 349,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[27] = chat.unreadCount;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== RenderTicks) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderTicks, {}, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = RenderTicks;
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] !== t21 || $[32] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-slate-400",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t21;
        $[32] = t22;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== t20 || $[35] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t20;
        $[35] = t23;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== t15 || $[38] !== t19 || $[39] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t15,
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t15;
        $[38] = t19;
        $[39] = t24;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            opacity: 0
        };
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    const t27 = hover ? 1 : 0;
    let t28;
    if ($[42] !== t27) {
        t28 = {
            opacity: t27
        };
        $[42] = t27;
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    let t29;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
            ariaLabel: "More",
            title: "More",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                lineNumber: 413,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t29;
    } else {
        t29 = $[44];
    }
    let t30;
    if ($[45] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t26,
            animate: t28,
            className: "flex items-center gap-1",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t28;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== t25 || $[48] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t9,
                t25,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t25;
        $[48] = t30;
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    let t32;
    if ($[50] !== isSelected || $[51] !== onSelect || $[52] !== t31 || $[53] !== t5 || $[54] !== t8) {
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
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = isSelected;
        $[51] = onSelect;
        $[52] = t31;
        $[53] = t5;
        $[54] = t8;
        $[55] = t32;
    } else {
        t32 = $[55];
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
    // chat-status map state (persistent in localStorage)
    const [chatStatusMap, setChatStatusMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TeamInboxPage.useState": ()=>readLocalStatusMap()
    }["TeamInboxPage.useState"]);
    // load chats from API
    async function loadChats() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/chats", {
                credentials: "same-origin"
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const j = await res.json();
            const payload = j?.chats ?? [];
            setChats(payload);
            if (!selectedChatId && payload.length > 0) setSelectedChatId(payload[0].id);
        } catch (err) {
            console.warn("Failed to load chats:", err);
            setError("Could not load chats");
            setChats([]);
        } finally{
            setLoading(false);
        }
    }
    // load current user
    async function loadMe() {
        try {
            const res_0 = await fetch("/api/me", {
                credentials: "include"
            });
            if (!res_0.ok) {
                setCurrentUser(null);
                return;
            }
            const j_0 = await res_0.json().catch(()=>({}));
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
    // initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            loadMe();
            loadChats();
            // keep local status map in sync (reload from storage)
            setChatStatusMap(readLocalStatusMap());
            // subscribe for cross-tab updates
            const onStorage = {
                "TeamInboxPage.useEffect.onStorage": (ev)=>{
                    if (ev.key === LOCAL_KEY_STATUS) {
                        setChatStatusMap(readLocalStatusMap());
                    }
                }
            }["TeamInboxPage.useEffect.onStorage"];
            window.addEventListener("storage", onStorage);
            // subscribe to internal app event
            const onUpdate = {
                "TeamInboxPage.useEffect.onUpdate": (ev_0)=>{
                    const d = ev_0.detail;
                    if (!d) return;
                    // update local state snapshot
                    setChatStatusMap(readLocalStatusMap());
                }
            }["TeamInboxPage.useEffect.onUpdate"];
            window.addEventListener("chatStatusUpdate", onUpdate);
            return ({
                "TeamInboxPage.useEffect": ()=>{
                    window.removeEventListener("storage", onStorage);
                    window.removeEventListener("chatStatusUpdate", onUpdate);
                }
            })["TeamInboxPage.useEffect"];
        }
    }["TeamInboxPage.useEffect"], []);
    // socket handlers: listen for messages/delivery/read and update chat list + status map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
                        "TeamInboxPage.useEffect.handleTeamCreated": (prev)=>{
                            if (prev.find({
                                "TeamInboxPage.useEffect.handleTeamCreated": (c)=>c.id === newChat.id
                            }["TeamInboxPage.useEffect.handleTeamCreated"])) return prev;
                            const inserted = {
                                id: newChat.id,
                                name: newChat.name ?? `Team ${newChat.teamId ?? ""}`,
                                type: "team",
                                teamId: newChat.teamId ?? null,
                                lastMessagePreview: null,
                                unreadCount: 0
                            };
                            return [
                                inserted,
                                ...prev
                            ];
                        }
                    }["TeamInboxPage.useEffect.handleTeamCreated"]);
                }
            }["TeamInboxPage.useEffect.handleTeamCreated"];
            const handleChatMessage = {
                "TeamInboxPage.useEffect.handleChatMessage": (payload_1)=>{
                    const chatId = payload_1?.chatId ?? payload_1?.chat?.id ?? null;
                    if (!chatId) return;
                    // update chat last preview + unread counters
                    setChats({
                        "TeamInboxPage.useEffect.handleChatMessage": (prev_0)=>prev_0.map({
                                "TeamInboxPage.useEffect.handleChatMessage": (c_0)=>{
                                    if (c_0.id !== chatId) return c_0;
                                    const text = payload_1?.message?.content ?? "";
                                    return {
                                        ...c_0,
                                        lastMessagePreview: text.length > 120 ? text.slice(0, 120) + "…" : text,
                                        unreadCount: (c_0.unreadCount ?? 0) + 1
                                    };
                                }
                            }["TeamInboxPage.useEffect.handleChatMessage"])
                    }["TeamInboxPage.useEffect.handleChatMessage"]);
                    // If the message is from currentUser -> mark status 'sent'
                    try {
                        const msg = payload_1?.message ?? payload_1;
                        const senderId = msg?.sender?.id ?? msg?.senderId ?? msg?.from ?? null;
                        if (currentUser && senderId === currentUser.id) {
                            const map = readLocalStatusMap();
                            map[chatId] = {
                                status: "sent",
                                updatedAt: Date.now()
                            };
                            writeLocalStatusMap(map);
                            setChatStatusMap({
                                ...map
                            });
                            dispatchStatusUpdate({
                                type: "status",
                                chatId,
                                status: "sent"
                            });
                        }
                    } catch (e_0) {
                    // ignore
                    }
                }
            }["TeamInboxPage.useEffect.handleChatMessage"];
            const handleDelivered = {
                "TeamInboxPage.useEffect.handleDelivered": (payload_2)=>{
                    const chatId_0 = payload_2?.chatId ?? null;
                    if (!chatId_0) return;
                    const map_0 = readLocalStatusMap();
                    map_0[chatId_0] = {
                        status: "delivered",
                        updatedAt: Date.now()
                    };
                    writeLocalStatusMap(map_0);
                    setChatStatusMap({
                        ...map_0
                    });
                    dispatchStatusUpdate({
                        type: "status",
                        chatId: chatId_0,
                        status: "delivered"
                    });
                }
            }["TeamInboxPage.useEffect.handleDelivered"];
            const handleRead = {
                "TeamInboxPage.useEffect.handleRead": (payload_3)=>{
                    const chatId_1 = payload_3?.chatId ?? payload_3?.chat?.id ?? null;
                    if (!chatId_1) return;
                    const map_1 = readLocalStatusMap();
                    map_1[chatId_1] = {
                        status: "seen",
                        updatedAt: Date.now()
                    };
                    writeLocalStatusMap(map_1);
                    setChatStatusMap({
                        ...map_1
                    });
                    dispatchStatusUpdate({
                        type: "status",
                        chatId: chatId_1,
                        status: "seen"
                    });
                    // Optionally also clear unread counters for that chat locally
                    setChats({
                        "TeamInboxPage.useEffect.handleRead": (prev_1)=>prev_1.map({
                                "TeamInboxPage.useEffect.handleRead": (c_1)=>c_1.id === chatId_1 ? {
                                        ...c_1,
                                        unreadCount: 0
                                    } : c_1
                            }["TeamInboxPage.useEffect.handleRead"])
                    }["TeamInboxPage.useEffect.handleRead"]);
                }
            }["TeamInboxPage.useEffect.handleRead"];
            try {
                chatSocket.on("team:created", handleTeamCreated);
                chatSocket.on("chat:message", handleChatMessage);
                chatSocket.on("chat:delivered", handleDelivered);
                chatSocket.on("chat:read", handleRead);
            } catch (e_1) {
                console.warn("chatSocket registration failed:", e_1);
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
    // when user selects a chat we join the room and optimistically mark it seen (clears blue-dot)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamInboxPage.useEffect": ()=>{
            if (!selectedChatId || !chatSocket) return;
            ({
                "TeamInboxPage.useEffect": async ()=>{
                    try {
                        await chatSocket.joinChat(selectedChatId);
                    } catch  {
                    // ignore
                    }
                }
            })["TeamInboxPage.useEffect"]();
            // clear unread locally
            setChats({
                "TeamInboxPage.useEffect": (prev_2)=>prev_2.map({
                        "TeamInboxPage.useEffect": (c_2)=>c_2.id === selectedChatId ? {
                                ...c_2,
                                unreadCount: 0
                            } : c_2
                    }["TeamInboxPage.useEffect"])
            }["TeamInboxPage.useEffect"]);
            // optimistically mark message status as seen locally (if exists) and dispatch update
            const map_2 = readLocalStatusMap();
            if (map_2[selectedChatId] && map_2[selectedChatId].status !== "seen") {
                map_2[selectedChatId] = {
                    status: "seen",
                    updatedAt: Date.now()
                };
                writeLocalStatusMap(map_2);
                setChatStatusMap({
                    ...map_2
                });
                dispatchStatusUpdate({
                    type: "status",
                    chatId: selectedChatId,
                    status: "seen"
                });
                // Ideally call API to persist read state — your server should also emit 'chat:read'
                try {
                    void fetch(`/api/chats/${encodeURIComponent(selectedChatId)}/read`, {
                        method: "POST",
                        credentials: "same-origin"
                    });
                } catch  {}
            }
            return ({
                "TeamInboxPage.useEffect": ()=>{
                    ({
                        "TeamInboxPage.useEffect": async ()=>{
                            try {
                                await chatSocket.leaveChat(selectedChatId);
                            } catch  {}
                        }
                    })["TeamInboxPage.useEffect"]();
                }
            })["TeamInboxPage.useEffect"];
        }
    }["TeamInboxPage.useEffect"], [
        selectedChatId,
        chatSocket
    ]);
    // search + filter
    const filteredChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamInboxPage.useMemo[filteredChats]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            return chats.filter({
                "TeamInboxPage.useMemo[filteredChats]": (c_3)=>{
                    const matchesSearch = q === "" || c_3.name.toLowerCase().includes(q) || (c_3.lastMessagePreview ?? "").toLowerCase().includes(q);
                    const matchesFilter = filter === "all" || filter === "assigned" && (c_3.meta?.assigned === true || c_3.type === "direct" && c_3.meta?.assignedTo) || filter === "unassigned" && !(c_3.meta?.assigned === true || c_3.type === "direct" && c_3.meta?.assignedTo) || filter === "flagged" && c_3.meta?.flagged === true;
                    return matchesSearch && matchesFilter;
                }
            }["TeamInboxPage.useMemo[filteredChats]"]);
        }
    }["TeamInboxPage.useMemo[filteredChats]"], [
        chats,
        searchQuery,
        filter
    ]);
    const unreadCount = chats.reduce((acc, c_4)=>acc + (c_4.unreadCount ?? 0), 0);
    const handleArchive = (id)=>{
        console.log("Archive", id);
    };
    const handleDelete = (id_0)=>{
        console.log("Delete", id_0);
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
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 742,
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
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                    lineNumber: 741,
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
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: teamSelect
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "assigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 761,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 766,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                            lineNumber: 740,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mt-2",
                            children: "Manage incoming messages and direct threads. Outgoing messages will show a tick/receipt state and a blue-dot until seen."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                            lineNumber: 773,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 739,
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
                                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                lineNumber: 782,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                "aria-label": "Search chats",
                                                placeholder: "Search chats...",
                                                value: searchQuery,
                                                onChange: (e_2)=>setSearchQuery(e_2.target.value),
                                                className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButtons, {
                                            active: filter,
                                            onChange: (v)=>setFilter(v)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Chats"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 max-h-[60vh] overflow-auto pt-2",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-500",
                                            children: "Loading chats…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 793,
                                            columnNumber: 28
                                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-rose-600",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 793,
                                            columnNumber: 99
                                        }, this) : filteredChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 text-center text-sm text-slate-500",
                                            children: "No chats found — create a team or start a direct chat to begin."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 793,
                                            columnNumber: 183
                                        }, this) : filteredChats.map((c_5, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageCard, {
                                                chat: c_5,
                                                isSelected: selectedChatId === c_5.id,
                                                onSelect: ()=>{
                                                    setSelectedChatId(c_5.id);
                                                },
                                                delay: idx * 0.03,
                                                chatStatusMap: chatStatusMap
                                            }, c_5.id, false, {
                                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 60
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                lineNumber: 780,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                            lineNumber: 779,
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
                                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                    lineNumber: 807,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                lineNumber: 804,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center text-center text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                            className: "w-8 h-8 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-800 mb-1",
                                        children: "Select a chat to begin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 814,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Pick a team group chat or a direct thread to start messaging."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                                lineNumber: 810,
                                columnNumber: 24
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                            lineNumber: 803,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
                    lineNumber: 777,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
            lineNumber: 737,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/manager/TeamInbox/page.tsx",
        lineNumber: 736,
        columnNumber: 10
    }, this);
}
_s1(TeamInboxPage, "HDYAwAzlAVAXI0fL+8JbEwA5tmY=", false, function() {
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
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
"[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>UserCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 11 2 2 4-4",
            key: "9rsbq5"
        }
    ],
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const UserCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user-check", __iconNode);
;
 //# sourceMappingURL=user-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_12895fdd._.js.map