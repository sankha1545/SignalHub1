(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useChatSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useChatSocket.ts
__turbopack_context__.s([
    "default",
    ()=>useChatSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useChatSocket(token, handlers = {}) {
    _s();
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatSocket.useEffect": ()=>{
            if (!token) return;
            // connect to socketio endpoint; server should accept cookie or token auth
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("/api/socketio", {
                autoConnect: true,
                auth: {
                    token
                },
                path: "/api/socketio" // in case server uses default
            });
            socketRef.current = socket;
            socket.on("connect", {
                "useChatSocket.useEffect": ()=>setConnected(true)
            }["useChatSocket.useEffect"]);
            socket.on("disconnect", {
                "useChatSocket.useEffect": ()=>setConnected(false)
            }["useChatSocket.useEffect"]);
            socket.on("chat:created", {
                "useChatSocket.useEffect": (payload)=>{
                    handlers.onChatCreated?.(payload.chat);
                }
            }["useChatSocket.useEffect"]);
            socket.on("message:new", {
                "useChatSocket.useEffect": (payload_0)=>{
                    handlers.onMessageNew?.(payload_0.message);
                }
            }["useChatSocket.useEffect"]);
            socket.on("chat:member:added", {
                "useChatSocket.useEffect": (payload_1)=>{
                    handlers.onChatMemberAdded?.(payload_1.chatId, payload_1.user);
                }
            }["useChatSocket.useEffect"]);
            socket.on("chat:member:removed", {
                "useChatSocket.useEffect": (payload_2)=>{
                    handlers.onChatMemberRemoved?.(payload_2.chatId, payload_2.userId);
                }
            }["useChatSocket.useEffect"]);
            socket.on("typing", {
                "useChatSocket.useEffect": (payload_3)=>{
                    handlers.onTyping?.(payload_3.chatId, payload_3.userId, payload_3.isTyping);
                }
            }["useChatSocket.useEffect"]);
            return ({
                "useChatSocket.useEffect": ()=>{
                    socket.disconnect();
                    socketRef.current = null;
                }
            })["useChatSocket.useEffect"];
        }
    }["useChatSocket.useEffect"], [
        token
    ]);
    const joinChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatSocket.useCallback[joinChat]": (chatId)=>{
            socketRef.current?.emit("chat:join", {
                chatId
            });
        }
    }["useChatSocket.useCallback[joinChat]"], []);
    const leaveChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatSocket.useCallback[leaveChat]": (chatId_0)=>{
            socketRef.current?.emit("chat:leave", {
                chatId: chatId_0
            });
        }
    }["useChatSocket.useCallback[leaveChat]"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatSocket.useCallback[sendMessage]": (chatId_1, content)=>{
            // prefer REST POST to /api/chats/[chatId]/messages for persistence,
            // but also emit via socket for low-latency if server supports it.
            socketRef.current?.emit("message:send", {
                chatId: chatId_1,
                content
            });
        }
    }["useChatSocket.useCallback[sendMessage]"], []);
    const emitTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatSocket.useCallback[emitTyping]": (chatId_2, isTyping)=>{
            socketRef.current?.emit("typing", {
                chatId: chatId_2,
                isTyping
            });
        }
    }["useChatSocket.useCallback[emitTyping]"], []);
    return {
        socket: socketRef.current,
        connected,
        joinChat,
        leaveChat,
        sendMessage,
        emitTyping
    };
}
_s(useChatSocket, "BytnIuXDc740TM+68ec6jbRHmPo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/ChatProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/providers/ChatProvider.tsx
__turbopack_context__.s([
    "ChatProvider",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatSocket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useChat() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "825ffc0f0a936888af6e947913be426c39cf9c21ef42a03a080d2a31aba01e49") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "825ffc0f0a936888af6e947913be426c39cf9c21ef42a03a080d2a31aba01e49";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!ctx) {
        throw new Error("useChat must be used within ChatProvider");
    }
    return ctx;
}
_s(useChat, "/dMy7t63NXD4eYACoT93CePwGrg=");
function ChatProvider({ token, children }) {
    _s1();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeChatId, setActiveChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handlers = {
        onChatCreated: (chat)=>setChats((prev)=>[
                    chat,
                    ...prev
                ]),
        onMessageNew: (message)=>{
            // bump lastMessage + unread logic
            setChats((prev)=>prev.map((c)=>{
                    if (c.id === message.chatId) {
                        const unread = (c.unreadCount ?? 0) + (activeChatId === c.id ? 0 : 1);
                        return {
                            ...c,
                            lastMessage: message,
                            unreadCount: unread
                        };
                    }
                    return c;
                }));
        },
        onChatMemberAdded: (chatId, user)=>{
            setChats((prev)=>prev.map((c)=>c.id === chatId ? {
                        ...c,
                        members: [
                            ...c.members ?? [],
                            user
                        ]
                    } : c));
        },
        onChatMemberRemoved: (chatId, userId)=>{
            setChats((prev)=>prev.map((c)=>c.id === chatId ? {
                        ...c,
                        members: (c.members ?? []).filter((m)=>m.id !== userId)
                    } : c));
        }
    };
    const { socket, connected, joinChat, leaveChat, sendMessage: socketSend } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, handlers);
    // Fetch initial chat list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatProvider.useEffect": ()=>{
            if (!token) {
                setChats([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            fetch("/api/chats").then({
                "ChatProvider.useEffect": (r)=>r.json()
            }["ChatProvider.useEffect"]).then({
                "ChatProvider.useEffect": (data)=>{
                    if (data?.ok) {
                        setChats(data.chats || []);
                    } else {
                        setChats([]);
                    }
                }
            }["ChatProvider.useEffect"]).catch({
                "ChatProvider.useEffect": ()=>setChats([])
            }["ChatProvider.useEffect"]).finally({
                "ChatProvider.useEffect": ()=>setLoading(false)
            }["ChatProvider.useEffect"]);
        }
    }["ChatProvider.useEffect"], [
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatProvider.useEffect": ()=>{
            // when opening activeChat, join via socket
            if (activeChatId && socket) {
                joinChat(activeChatId);
            }
            return ({
                "ChatProvider.useEffect": ()=>{
                    if (activeChatId && socket) leaveChat(activeChatId);
                }
            })["ChatProvider.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatProvider.useEffect"], [
        activeChatId
    ]);
    const openChat = (chatId)=>{
        setActiveChatId(chatId);
        setChats((prev)=>prev.map((c)=>c.id === chatId ? {
                    ...c,
                    unreadCount: 0
                } : c));
    };
    const closeChat = ()=>setActiveChatId(null);
    const addMessageLocally = (message)=>{
        setChats((prev)=>prev.map((c)=>c.id === message.chatId ? {
                    ...c,
                    lastMessage: message
                } : c));
    };
    const sendMessage = async (chatId, content)=>{
        // Prefer REST API for durability and server ACLs; also emit socket for low latency.
        try {
            const res = await fetch(`/api/chats/${chatId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content
                })
            });
            const json = await res.json();
            if (json?.ok && json?.message) {
                // message will be broadcast by server; optionally also optimistically add
                addMessageLocally(json.message);
            } else {
                // fallback to socket emit
                socketSend(chatId, content);
            }
        } catch (e) {
            // as fallback try socket
            socketSend(chatId, content);
        }
    };
    const unreadTotal = chats.reduce((sum, c)=>sum + (c.unreadCount ?? 0), 0);
    const ctxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatProvider.useMemo[ctxValue]": ()=>({
                chats,
                setChats,
                activeChatId,
                openChat,
                closeChat,
                sendMessage,
                addMessageLocally,
                unreadTotal,
                loading
            })
    }["ChatProvider.useMemo[ctxValue]"], [
        chats,
        activeChatId,
        unreadTotal,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: ctxValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ChatProvider.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
_s1(ChatProvider, "roA6i4Q3mO6QTu57lC0QyzxsYTc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ChatProvider;
var _c;
__turbopack_context__.k.register(_c, "ChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/chat/ChatList.tsx
__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// try to use your existing useChat provider if present (keeps backwards compatibility)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ChatProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ChatProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/ChatSocketProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChatRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "d7bea6b5a241a5f275e72ceae7019f269583df00d75e93a250efcfff9677c845") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7bea6b5a241a5f275e72ceae7019f269583df00d75e93a250efcfff9677c845";
    }
    const { chat, onOpen } = t0;
    let t1;
    if ($[1] !== chat.id || $[2] !== onOpen) {
        t1 = ({
            "ChatRow[<button>.onClick]": ()=>onOpen(chat.id)
        })["ChatRow[<button>.onClick]"];
        $[1] = chat.id;
        $[2] = onOpen;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== chat.type) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden",
            children: String(chat.type ?? "").toUpperCase().includes("GROUP") || String(chat.type ?? "").toUpperCase().includes("TEAM") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "👥"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 47,
                columnNumber: 228
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "💬"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 47,
                columnNumber: 246
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[4] = chat.type;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = chat.name ?? (String(chat.type ?? "").toUpperCase().includes("PRIVATE") ? "Direct" : "Group");
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium text-sm",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== chat.lastMessage) {
        t5 = chat.lastMessage ? new Date(chat.lastMessage.createdAt).toLocaleTimeString() : "";
        $[8] = chat.lastMessage;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-gray-500",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = chat.lastMessage?.content ?? "No messages yet";
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-gray-600 truncate",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== chat.unreadCount) {
        t11 = chat.unreadCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-3 text-sm px-2 py-1 bg-blue-600 text-white rounded-full",
            children: chat.unreadCount
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 107,
            columnNumber: 30
        }, this) : null;
        $[20] = chat.unreadCount;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t1 || $[23] !== t10 || $[24] !== t11 || $[25] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full text-left p-3 hover:bg-slate-50 flex items-center gap-3",
            onClick: t1,
            children: [
                t2,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[22] = t1;
        $[23] = t10;
        $[24] = t11;
        $[25] = t2;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    return t12;
}
_c = ChatRow;
function ChatList({ onOpen }) {
    _s();
    // Try to use existing ChatProvider (if your app already has one). It may return { chats, openChat, loading }
    let chatProvider = null;
    try {
        chatProvider = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ChatProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]?.();
    } catch  {
        chatProvider = null;
    }
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // load chats from api (same endpoint pages use)
    const loadChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatList.useCallback[loadChats]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/chats", {
                    credentials: "same-origin"
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const j = await res.json();
                const payload = j?.chats ?? [];
                // normalize to LocalChat
                const normalized = payload.map({
                    "ChatList.useCallback[loadChats].normalized": (c)=>({
                            id: c.id,
                            name: c.name ?? null,
                            type: c.type ?? c.chatType ?? null,
                            lastMessage: c.lastMessage ? {
                                content: c.lastMessage.content ?? "",
                                createdAt: c.lastMessage.createdAt ?? new Date().toISOString()
                            } : c.lastMessageAt ? {
                                content: "",
                                createdAt: c.lastMessageAt
                            } : null,
                            unreadCount: typeof c.unreadCount === "number" ? c.unreadCount : 0,
                            teamId: c.teamId ?? null,
                            meta: c.meta ?? null
                        })
                }["ChatList.useCallback[loadChats].normalized"]);
                setChats(normalized);
            } catch (err) {
                console.warn("ChatList: failed to load chats", err);
                setError("Could not load chats");
            } finally{
                setLoading(false);
            }
        }
    }["ChatList.useCallback[loadChats]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatList.useEffect": ()=>{
            // If a ChatProvider is present and exposes chats, use it as source of truth
            if (chatProvider && Array.isArray(chatProvider.chats) && typeof chatProvider.loading !== "undefined") {
                // map provider chats to our local shape for socket merging
                const mapped = (chatProvider.chats ?? []).map({
                    "ChatList.useEffect.mapped": (c_0)=>({
                            id: c_0.id,
                            name: c_0.name ?? null,
                            type: c_0.type ?? null,
                            lastMessage: c_0.lastMessage ? {
                                content: c_0.lastMessage.content ?? "",
                                createdAt: c_0.lastMessage.createdAt ?? new Date().toISOString()
                            } : null,
                            unreadCount: typeof c_0.unreadCount === "number" ? c_0.unreadCount : 0,
                            teamId: c_0.teamId ?? null,
                            meta: c_0.meta ?? null
                        })
                }["ChatList.useEffect.mapped"]);
                setChats(mapped);
                setLoading(Boolean(chatProvider.loading));
                return;
            }
            // Otherwise fetch from API
            loadChats();
        }
    }["ChatList.useEffect"], [
        chatProvider,
        loadChats
    ]);
    // Socket handlers: keep the list realtime
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatList.useEffect": ()=>{
            if (!socket) return;
            const handleTeamCreated = {
                "ChatList.useEffect.handleTeamCreated": (payload_0)=>{
                    const chatPayload = payload_0?.chat ?? (payload_0?.team ? {
                        id: payload_0.team.id,
                        name: payload_0.team.name,
                        teamId: payload_0.team.id
                    } : null);
                    if (!chatPayload) return;
                    setChats({
                        "ChatList.useEffect.handleTeamCreated": (prev)=>{
                            if (prev.find({
                                "ChatList.useEffect.handleTeamCreated": (p)=>p.id === chatPayload.id
                            }["ChatList.useEffect.handleTeamCreated"])) return prev;
                            const newRow = {
                                id: chatPayload.id,
                                name: chatPayload.name ?? `Team ${chatPayload.teamId ?? ""}`,
                                type: "GROUP",
                                lastMessage: null,
                                unreadCount: 0,
                                teamId: chatPayload.teamId ?? null
                            };
                            return [
                                newRow,
                                ...prev
                            ];
                        }
                    }["ChatList.useEffect.handleTeamCreated"]);
                }
            }["ChatList.useEffect.handleTeamCreated"];
            const handleChatMessage = {
                "ChatList.useEffect.handleChatMessage": (payload_1)=>{
                    const chatId = payload_1?.chatId ?? payload_1?.chat?.id ?? null;
                    if (!chatId) return;
                    const text = payload_1?.message?.content ?? payload_1?.content ?? "";
                    const createdAt = payload_1?.message?.createdAt ?? new Date().toISOString();
                    setChats({
                        "ChatList.useEffect.handleChatMessage": (prev_0)=>prev_0.map({
                                "ChatList.useEffect.handleChatMessage": (c_1)=>{
                                    if (c_1.id !== chatId) return c_1;
                                    return {
                                        ...c_1,
                                        lastMessage: {
                                            content: text,
                                            createdAt
                                        },
                                        unreadCount: (c_1.unreadCount ?? 0) + 1
                                    };
                                }
                            }["ChatList.useEffect.handleChatMessage"])
                    }["ChatList.useEffect.handleChatMessage"]);
                    // if chat not present, optionally add a stub (helps admins monitoring)
                    setChats({
                        "ChatList.useEffect.handleChatMessage": (prev_1)=>{
                            if (prev_1.find({
                                "ChatList.useEffect.handleChatMessage": (c_2)=>c_2.id === chatId
                            }["ChatList.useEffect.handleChatMessage"])) return prev_1;
                            const stub = {
                                id: chatId,
                                name: payload_1?.chat?.name ?? `Chat ${chatId}`,
                                type: payload_1?.chat?.type ?? "DIRECT",
                                lastMessage: {
                                    content: text,
                                    createdAt
                                },
                                unreadCount: 1,
                                teamId: payload_1?.chat?.teamId ?? null
                            };
                            return [
                                stub,
                                ...prev_1
                            ];
                        }
                    }["ChatList.useEffect.handleChatMessage"]);
                }
            }["ChatList.useEffect.handleChatMessage"];
            socket.on("team:created", handleTeamCreated);
            socket.on("chat:message", handleChatMessage);
            return ({
                "ChatList.useEffect": ()=>{
                    socket.off("team:created", handleTeamCreated);
                    socket.off("chat:message", handleChatMessage);
                }
            })["ChatList.useEffect"];
        }
    }["ChatList.useEffect"], [
        socket
    ]);
    // openChat handler — use parent prop if provided, otherwise fall back to chatProvider.openChat()
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatList.useCallback[handleOpen]": async (id)=>{
            try {
                // join the chat room so this client receives real-time messages for it
                try {
                    await socket.joinChat?.(id);
                } catch  {}
                if (typeof onOpen === "function") {
                    onOpen(id);
                    return;
                }
                if (chatProvider && typeof chatProvider.openChat === "function") {
                    chatProvider.openChat(id);
                    return;
                }
                // fallback: navigate to a route (if you use routes like /dashboard/chat/[id])
                if ("TURBOPACK compile-time truthy", 1) {
                    try {
                        const base = window.location.pathname.split("/dashboard")[0] || "";
                        // Do not assume routing scheme — only attempt safe history push
                        window.history.pushState({}, "", `${window.location.pathname}?chatId=${encodeURIComponent(id)}`);
                    // leave it to the parent to detect query param and open. This is a safe fallback.
                    } catch  {}
                }
            } catch (e) {
            // ignore individual failures
            }
        }
    }["ChatList.useCallback[handleOpen]"], [
        onOpen,
        chatProvider,
        socket
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: "Loading chats…"
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 309,
        columnNumber: 23
    }, this);
    if (!chats.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-sm text-gray-600",
        children: "No chats yet"
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 310,
        columnNumber: 29
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y border-r",
        children: chats.map((c_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatRow, {
                chat: c_3,
                onOpen: handleOpen
            }, c_3.id, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 312,
                columnNumber: 25
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 311,
        columnNumber: 10
    }, this);
}
_s(ChatList, "m7qaJknBOW8WhgDezDSQ57oBw6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"]
    ];
});
_c1 = ChatList;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatRow");
__turbopack_context__.k.register(_c1, "ChatList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_1bc9805c._.js.map