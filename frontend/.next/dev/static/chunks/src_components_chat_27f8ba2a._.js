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

// src/components/chat/TeamChat.tsx
__turbopack_context__.s([
    "default",
    ()=>TeamChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socketClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/MessageBubble.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TeamChat({ chatId, currentUser }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // track IDs we've seen to prevent duplicates (optimistic + server)
    const seenIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // fetch history and join room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            let mounted = true;
            const fetchHistory = {
                "TeamChat.useEffect.fetchHistory": async ()=>{
                    try {
                        const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                            credentials: "same-origin"
                        });
                        if (!mounted) return;
                        const j = await res.json().catch({
                            "TeamChat.useEffect.fetchHistory": ()=>({})
                        }["TeamChat.useEffect.fetchHistory"]);
                        const msgs = j?.messages ?? [];
                        // dedupe and set
                        seenIdsRef.current = new Set(msgs.map({
                            "TeamChat.useEffect.fetchHistory": (m)=>m.id
                        }["TeamChat.useEffect.fetchHistory"]));
                        if (mounted) setMessages(msgs);
                    } catch (err) {
                        console.warn("Failed to load chat history", err);
                    }
                }
            }["TeamChat.useEffect.fetchHistory"];
            fetchHistory();
            // join room on socket
            try {
                // some socket servers expect: "join-room", payload chatId
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("join-room", chatId);
            } catch (err_0) {
                console.warn("Socket join-room failed", err_0);
            }
            return ({
                "TeamChat.useEffect": ()=>{
                    mounted = false;
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("leave-room", chatId);
                    } catch (err_1) {
                    // ignore
                    }
                }
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], [
        chatId
    ]);
    // message handler from socket (server broadcasts "chat:message")
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            const handler = {
                "TeamChat.useEffect.handler": (payload)=>{
                    try {
                        // Expect server to send: { chatId, message: { ... } } or message directly
                        const incomingChatId = payload?.chatId ?? payload?.message?.chatId ?? payload?.message?.chat_id;
                        const msg = payload?.message ?? (payload?.id ? payload : null);
                        if (!msg || incomingChatId !== chatId) return;
                        // dedupe by id
                        if (msg.id && seenIdsRef.current.has(msg.id)) return;
                        if (msg.id) seenIdsRef.current.add(msg.id);
                        setMessages({
                            "TeamChat.useEffect.handler": (prev)=>{
                                // avoid double optimistic message (match by temporary id -> replace)
                                if (msg.id && String(msg.id).startsWith("local-")) {
                                    // shouldn't happen from server, but handle defensively
                                    return prev.map({
                                        "TeamChat.useEffect.handler": (p)=>p.id === msg.id ? msg : p
                                    }["TeamChat.useEffect.handler"]);
                                }
                                // if we have a local optimistic message with same content and sender/time close, try to replace it
                                const optimisticIndex = prev.findIndex({
                                    "TeamChat.useEffect.handler.optimisticIndex": (p_0)=>p_0.id?.startsWith("local-") && p_0.content === msg.content && p_0.sender?.id === msg.sender?.id
                                }["TeamChat.useEffect.handler.optimisticIndex"]);
                                if (optimisticIndex >= 0) {
                                    const copy = [
                                        ...prev
                                    ];
                                    copy[optimisticIndex] = msg;
                                    return copy;
                                }
                                return [
                                    ...prev,
                                    msg
                                ];
                            }
                        }["TeamChat.useEffect.handler"]);
                    } catch (err_2) {
                        console.warn("Error handling incoming socket message", err_2);
                    }
                }
            }["TeamChat.useEffect.handler"];
            // listen for server event name — your server emits 'chat:message'
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("chat:message", handler);
            // also listen for older 'message' or generic events if any
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("message", handler);
            return ({
                "TeamChat.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("chat:message", handler);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("message", handler);
                }
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], [
        chatId
    ]);
    // scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            if (!listRef.current) return;
            // use requestAnimationFrame to wait for DOM update
            requestAnimationFrame({
                "TeamChat.useEffect": ()=>{
                    try {
                        listRef.current.scrollTop = listRef.current.scrollHeight;
                    } catch (e) {
                    // ignore
                    }
                }
            }["TeamChat.useEffect"]);
        }
    }["TeamChat.useEffect"], [
        messages.length
    ]);
    const send = async ()=>{
        const trimmed = text.trim();
        if (!trimmed || sending) return;
        setSending(true);
        // build payload expected by your server
        const payload_0 = {
            content: trimmed,
            metadata: {
                role: currentUser?.role ?? null
            },
            // don't need chatId here for POST as it's in URL, but keep for optimistic
            chatId
        };
        // optimistic UI - add local temporary message id
        const localMsg = {
            id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            chatId,
            content: trimmed,
            metadata: payload_0.metadata,
            createdAt: new Date().toISOString(),
            sender: {
                id: currentUser.id,
                name: currentUser.name ?? null,
                email: currentUser.email ?? null
            }
        };
        seenIdsRef.current.add(localMsg.id);
        setMessages((m_0)=>[
                ...m_0,
                localMsg
            ]);
        setText("");
        // emit via socket (best-effort) — servers may handle incoming events differently
        try {
            // emit to server so others get it instantly (server should create/persist and broadcast)
            // Emit both common event names so integration is robust
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("message", {
                chatId,
                message: payload_0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("chat:message", {
                chatId,
                message: payload_0
            });
            // some servers expect a dedicated event name like "chat:post" — adjust if needed
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("chat:post", {
                chatId,
                message: payload_0
            });
        } catch (err_3) {
            console.warn("Socket emit failed (non-fatal)", err_3);
        }
        // persist via API (server will broadcast to others on create)
        try {
            const res_0 = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload_0)
            });
            if (res_0.ok) {
                const j_0 = await res_0.json().catch(()=>({}));
                // server returns created message as j.message — replace local optimistic with server result (by content/sender/closest time)
                const created = j_0?.message ?? undefined;
                if (created && created.id) {
                    // if server returns an id that's not our local id, replace the optimistic local message
                    setMessages((prev_0)=>{
                        // find local optimistic message by matching content + sender + a recent createdAt
                        const idx = prev_0.findIndex((p_1)=>p_1.id?.startsWith("local-") && p_1.content === created.content && p_1.sender?.id === created.sender?.id);
                        if (idx >= 0) {
                            const copy_0 = [
                                ...prev_0
                            ];
                            copy_0[idx] = created;
                            seenIdsRef.current.add(created.id);
                            // remove old local id from seen set
                            prev_0[idx].id && seenIdsRef.current.delete(prev_0[idx].id);
                            return copy_0;
                        }
                        // otherwise append if not already present
                        if (!created.id || !seenIdsRef.current.has(created.id)) {
                            seenIdsRef.current.add(created.id);
                            return [
                                ...prev_0,
                                created
                            ];
                        }
                        return prev_0;
                    });
                } else {
                // if server didn't return message object, optionally refetch or ignore (we rely on socket broadcast)
                }
            } else {
                console.warn("Message persist returned non-OK", res_0.status);
            }
        } catch (err_4) {
            console.warn("Failed to persist message", err_4);
        } finally{
            setSending(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full min-h-[200px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: listRef,
                className: "flex-1 overflow-auto p-4 space-y-3",
                children: [
                    messages.map((m_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: m_1,
                            currentUserId: currentUser.id
                        }, m_1.id, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 235,
                            columnNumber: 30
                        }, this)),
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500",
                        children: "No messages yet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 236,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: text,
                        onChange: (e_0)=>setText(e_0.target.value),
                        onKeyDown: (e_1)=>{
                            if (e_1.key === "Enter" && !e_1.shiftKey) {
                                e_1.preventDefault();
                                send();
                            }
                        },
                        placeholder: "Write a message...",
                        className: "flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/30",
                        "aria-label": "Type a message",
                        disabled: sending
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: send,
                        disabled: sending || text.trim().length === 0,
                        className: `px-4 py-2 rounded-md text-sm font-medium ${sending ? "opacity-60 cursor-wait bg-slate-200" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                        children: sending ? "Sending…" : "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/TeamChat.tsx",
        lineNumber: 233,
        columnNumber: 10
    }, this);
}
_s(TeamChat, "e54CZBtlc/+dgoX8xtwzhlxth5I=");
_c = TeamChat;
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