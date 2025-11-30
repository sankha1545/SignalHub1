(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat/MessageBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function MessageBubble(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "cfa0508b30e38377e6c06817b0175eadaa16cf20e127384994654ab2d620ba70") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfa0508b30e38377e6c06817b0175eadaa16cf20e127384994654ab2d620ba70";
    }
    const { message, currentUserId } = t0;
    const mine = message.senderId === currentUserId;
    const role = message.meta?.role || "employee";
    const t1 = `flex ${mine ? "justify-end" : "justify-start"}`;
    const t2 = `max-w-[70%] p-2 rounded-lg ${mine ? "bg-blue-600 text-white" : "bg-gray-100 text-black"}`;
    const t3 = message.senderName || message.senderId;
    let t4;
    if ($[1] !== role || $[2] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs opacity-70",
            children: [
                t3,
                " • ",
                role
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/MessageBubble.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = role;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== message.content) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 whitespace-pre-wrap",
            children: message.content
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageBubble.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = message.content;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== message.createdAt) {
        t6 = new Date(message.createdAt).toLocaleTimeString();
        $[6] = message.createdAt;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] opacity-60 text-right mt-1",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageBubble.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t2 || $[11] !== t4 || $[12] !== t5 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/MessageBubble.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t1 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageBubble.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[15] = t1;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_c = MessageBubble;
var _c;
__turbopack_context__.k.register(_c, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socketClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/MessageBubble.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TeamChat(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "488421d7cfe584c1daf36b0c86a381c00f2abf3ab643c9118f3cb2ef2b29c169") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "488421d7cfe584c1daf36b0c86a381c00f2abf3ab643c9118f3cb2ef2b29c169";
    }
    const { chatId, currentUser } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[2] !== chatId) {
        t2 = ({
            "TeamChat[useEffect()]": ()=>{
                let mounted = true;
                fetch(`/api/chats/${chatId}`).then(_TeamChatUseEffectAnonymous).then({
                    "TeamChat[useEffect() > (anonymous)()]": (data)=>{
                        if (!mounted) {
                            return;
                        }
                        setMessages(data.messages || []);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("join", {
                            room: `team:${chatId}`
                        });
                    }
                }["TeamChat[useEffect() > (anonymous)()]"]);
                const onMessage = {
                    "TeamChat[useEffect() > onMessage]": (msg)=>setMessages({
                            "TeamChat[useEffect() > onMessage > setMessages()]": (m)=>[
                                    ...m,
                                    msg
                                ]
                        }["TeamChat[useEffect() > onMessage > setMessages()]"])
                }["TeamChat[useEffect() > onMessage]"];
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("message", {
                    "TeamChat[useEffect() > socketClient.on()]": (payload)=>{
                        if (payload.chatId === chatId) {
                            onMessage(payload.message);
                        }
                    }
                }["TeamChat[useEffect() > socketClient.on()]"]);
                return ()=>{
                    mounted = false;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("leave", {
                        room: `team:${chatId}`
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("message");
                };
            }
        })["TeamChat[useEffect()]"];
        t3 = [
            chatId
        ];
        $[2] = chatId;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "TeamChat[useEffect()]": ()=>{
                if (listRef.current) {
                    listRef.current.scrollTop = listRef.current.scrollHeight;
                }
            }
        })["TeamChat[useEffect()]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== messages.length) {
        t5 = [
            messages.length
        ];
        $[6] = messages.length;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[8] !== chatId || $[9] !== currentUser || $[10] !== text) {
        t6 = ({
            "TeamChat[send]": async ()=>{
                if (!text.trim()) {
                    return;
                }
                const payload_0 = {
                    chatId,
                    content: text.trim(),
                    senderId: currentUser.id,
                    meta: {
                        role: currentUser.role
                    }
                };
                setMessages({
                    "TeamChat[send > setMessages()]": (m_0)=>[
                            ...m_0,
                            {
                                id: `local-${Date.now()}`,
                                ...payload_0,
                                createdAt: new Date().toISOString()
                            }
                        ]
                }["TeamChat[send > setMessages()]"]);
                setText("");
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("message", payload_0);
                await fetch(`/api/chats/${chatId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload_0)
                });
            }
        })["TeamChat[send]"];
        $[8] = chatId;
        $[9] = currentUser;
        $[10] = text;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const send = t6;
    let t7;
    if ($[12] !== currentUser || $[13] !== messages) {
        let t8;
        if ($[15] !== currentUser) {
            t8 = ({
                "TeamChat[messages.map()]": (m_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: m_1,
                        currentUserId: currentUser.id
                    }, m_1.id, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 145,
                        columnNumber: 44
                    }, this)
            })["TeamChat[messages.map()]"];
            $[15] = currentUser;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        t7 = messages.map(t8);
        $[12] = currentUser;
        $[13] = messages;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: listRef,
            className: "flex-1 overflow-auto p-4 space-y-3",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "TeamChat[<input>.onChange]": (e)=>setText(e.target.value)
        })["TeamChat[<input>.onChange]"];
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== send) {
        t10 = ({
            "TeamChat[<input>.onKeyDown]": (e_0)=>e_0.key === "Enter" && send()
        })["TeamChat[<input>.onKeyDown]"];
        $[20] = send;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== text) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: text,
            onChange: t9,
            onKeyDown: t10,
            placeholder: "Write a message...",
            className: "flex-1 rounded-md border px-3 py-2"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = text;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== send) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: send,
            className: "btn",
            children: "Send"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[25] = send;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t11 || $[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border-t flex gap-2",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13 || $[31] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t8;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    return t14;
}
_s(TeamChat, "l7TTMOw7XaiVONrt93ozSIBdHug=");
_c = TeamChat;
function _TeamChatUseEffectAnonymous(r) {
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "TeamChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/chat/TeamChat.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_chat_27f8ba2a._.js.map