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
"[project]/src/components/chat/ComposeBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/chat/ComposeBox.tsx
__turbopack_context__.s([
    "default",
    ()=>ComposeBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socketClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ChatProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ChatProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/ChatSocketProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ComposeBox({ chatId, onSent, onError }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTypedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // prefer your ChatProvider if available (sendMessage)
    let providerSend = null;
    try {
        const prov = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ChatProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]?.();
        if (prov && typeof prov.sendMessage === "function") providerSend = prov.sendMessage.bind(prov);
    } catch  {
        providerSend = null;
    }
    // socket provider (preferred) or fallback to raw client
    let chatSocket = null;
    try {
        chatSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"])();
    } catch  {
        chatSocket = null;
    }
    // -------------------------
    // Helpers
    // -------------------------
    const makeOptimisticMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeBox.useCallback[makeOptimisticMessage]": (content, attachments)=>{
            return {
                id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                chatId,
                senderId: "me",
                sender: {
                    id: "me",
                    name: "You"
                },
                content,
                contentType: "TEXT",
                metadata: {
                    optimistic: true
                },
                attachments: attachments ?? [],
                createdAt: new Date().toISOString()
            };
        }
    }["ComposeBox.useCallback[makeOptimisticMessage]"], [
        chatId
    ]);
    const emitTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeBox.useCallback[emitTyping]": (isTyping)=>{
            try {
                const payload = {
                    chatId,
                    user: {},
                    typing: isTyping
                };
                if (chatSocket && typeof chatSocket.emit === "function") {
                    chatSocket.emit("chat:typing", payload);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("chat:typing", payload);
                }
            } catch (e) {
            // ignore
            }
        }
    }["ComposeBox.useCallback[emitTyping]"], [
        chatId,
        chatSocket
    ]);
    // debounce typing — call on key press, stop after 1200ms idle
    const notifyTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeBox.useCallback[notifyTyping]": ()=>{
            lastTypedAtRef.current = Date.now();
            // send "typing" once immediately
            emitTyping(true);
            if (typingTimerRef.current) {
                window.clearTimeout(typingTimerRef.current);
            }
            typingTimerRef.current = window.setTimeout({
                "ComposeBox.useCallback[notifyTyping]": ()=>{
                    const last = lastTypedAtRef.current ?? 0;
                    if (Date.now() - last >= 1100) {
                        emitTyping(false);
                        typingTimerRef.current = null;
                    }
                }
            }["ComposeBox.useCallback[notifyTyping]"], 1200);
        }
    }["ComposeBox.useCallback[notifyTyping]"], [
        emitTyping
    ]);
    // autosize textarea
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposeBox.useEffect": ()=>{
            const el = textareaRef.current;
            if (!el) return;
            el.style.height = "auto";
            const next = Math.min(240, el.scrollHeight);
            el.style.height = `${next}px`;
        }
    }["ComposeBox.useEffect"], [
        text
    ]);
    // -------------------------
    // File handling & upload
    // -------------------------
    const onFilesSelected = (fl)=>{
        if (!fl) return;
        const arr = Array.from(fl);
        // limit to 5 files to avoid abuse
        const next = [
            ...files,
            ...arr
        ].slice(0, 5);
        setFiles(next);
    };
    const removeFile = (idx)=>setFiles((p)=>p.filter((_, i)=>i !== idx));
    async function uploadFiles() {
        if (files.length === 0) return [];
        setUploading(true);
        const uploaded = [];
        for (const f of files){
            try {
                const fd = new FormData();
                fd.append("file", f);
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: fd,
                    credentials: "same-origin"
                });
                if (!res.ok) {
                    console.warn("upload failed", res.status);
                    continue;
                }
                const j = await res.json().catch(()=>({}));
                // try common shapes
                if (j?.file) uploaded.push(j.file);
                else if (j?.url) uploaded.push({
                    id: j.id ?? String(Date.now()),
                    url: j.url,
                    name: f.name
                });
                else if (j?.data?.url) uploaded.push({
                    id: j.data.id ?? String(Date.now()),
                    url: j.data.url,
                    name: f.name
                });
            } catch (e) {
                console.warn("upload error", e);
            }
        }
        setUploading(false);
        return uploaded;
    }
    // -------------------------
    // Send flow
    // -------------------------
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeBox.useCallback[send]": async (ev)=>{
            if (ev) ev.preventDefault();
            if (!chatId) return;
            const body = text.trim();
            if (!body && files.length === 0) return;
            setSending(true);
            setStatus("sending");
            // optimistic message
            let optimisticAttachments = [];
            // We can show local file names immediately
            if (files.length > 0) {
                optimisticAttachments = files.map({
                    "ComposeBox.useCallback[send]": (f, idx)=>({
                            id: `local-file-${idx}-${Date.now()}`,
                            name: f.name
                        })
                }["ComposeBox.useCallback[send]"]);
            }
            const optimistic = makeOptimisticMessage(body || (files.length ? `(Attachment${files.length > 1 ? "s" : ""})` : ""), optimisticAttachments);
            try {
                // notify parent immediately with optimistic msg
                try {
                    onSent?.(optimistic);
                } catch (e) {
                    // swallow user callback errors
                    console.warn("onSent callback error", e);
                }
                // optimistic socket emit so others see it fast
                try {
                    const payload = {
                        chatId,
                        message: {
                            content: body,
                            attachments: optimisticAttachments,
                            metadata: {
                                optimistic: true
                            }
                        }
                    };
                    if (chatSocket && typeof chatSocket.emit === "function") {
                        chatSocket.emit("chat:post", payload);
                        chatSocket.emit("chat:message", payload);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("chat:post", payload);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("chat:message", payload);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("message", payload);
                    }
                } catch (e) {
                // ignore emit errors
                }
                // Upload attachments first, then persist
                const attachments = await uploadFiles();
                // Build final payload
                const payload = {
                    content: body,
                    metadata: attachments.length ? {
                        attachments
                    } : undefined,
                    attachments: attachments.length ? attachments : undefined
                };
                // Prefer provider send if available
                if (providerSend) {
                    try {
                        const result = await providerSend(chatId, body, {
                            attachments
                        });
                        // provider may return message; call onSent with normalized message
                        if (result && typeof result === "object") {
                            const created = result?.message ?? result ?? {};
                            const normalized = {
                                id: String(created.id ?? created.messageId ?? `srv-${Date.now()}`),
                                chatId,
                                senderId: created.senderId ?? created.sender?.id ?? null,
                                sender: created.sender ?? null,
                                content: created.content ?? body,
                                contentType: created.contentType ?? "TEXT",
                                metadata: created.metadata ?? created.meta ?? null,
                                attachments: created.attachments ?? attachments ?? [],
                                createdAt: created.createdAt ?? new Date().toISOString()
                            };
                            onSent?.(normalized);
                            setStatus(null);
                            setSending(false);
                            setText("");
                            setFiles([]);
                            return;
                        }
                    } catch (err) {
                        console.warn("providerSend failed, falling back to REST", err);
                    // fallthrough to REST
                    }
                }
                // REST fallback
                try {
                    const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });
                    if (res.ok) {
                        const j = await res.json().catch({
                            "ComposeBox.useCallback[send]": ()=>({})
                        }["ComposeBox.useCallback[send]"]);
                        const created = j?.message ?? j ?? null;
                        if (created) {
                            const normalized = {
                                id: String(created.id ?? created.messageId ?? `srv-${Date.now()}`),
                                chatId,
                                senderId: created.senderId ?? created.sender?.id ?? null,
                                sender: created.sender ?? null,
                                content: created.content ?? body,
                                contentType: created.contentType ?? "TEXT",
                                metadata: created.metadata ?? created.meta ?? null,
                                attachments: created.attachments ?? attachments ?? [],
                                createdAt: created.createdAt ?? new Date().toISOString()
                            };
                            onSent?.(normalized);
                            setStatus(null);
                            setSending(false);
                            setText("");
                            setFiles([]);
                            return;
                        }
                    } else {
                        console.warn("POST /api/chats returned non-OK", res.status);
                        onError?.({
                            message: `Server error ${res.status}`
                        });
                    }
                } catch (err) {
                    console.warn("POST /api/chats failed", err);
                    onError?.(err);
                }
            } catch (err) {
                console.warn("send flow error", err);
                onError?.(err);
            } finally{
                setStatus(null);
                setSending(false);
            }
        }
    }["ComposeBox.useCallback[send]"], [
        chatId,
        text,
        files,
        makeOptimisticMessage,
        onSent,
        providerSend,
        chatSocket,
        onError
    ]);
    // keyboard: Enter to send (no Shift)
    const onKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            void send();
        } else {
            // user typed — notify typing (debounced)
            notifyTyping();
        }
    };
    // cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposeBox.useEffect": ()=>{
            return ({
                "ComposeBox.useEffect": ()=>{
                    if (typingTimerRef.current) {
                        window.clearTimeout(typingTimerRef.current);
                        typingTimerRef.current = null;
                    }
                    emitTyping(false);
                }
            })["ComposeBox.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ComposeBox.useEffect"], []);
    // small visual: attachments list + accessible labels
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            void send();
        },
        className: "space-y-2",
        "aria-live": "polite",
        children: [
            files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center overflow-auto max-w-full",
                children: files.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-2 py-1 bg-slate-50 border rounded text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate max-w-[200px]",
                                title: f.name,
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                lineNumber: 373,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Remove ${f.name}`,
                                onClick: ()=>removeFile(i),
                                className: "text-rose-600 font-bold px-1",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/chat/ComposeBox.tsx",
                        lineNumber: 372,
                        columnNumber: 32
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                lineNumber: 371,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        onKeyDown: onKeyDown,
                        placeholder: "Write a message...",
                        "aria-label": "Type a message",
                        className: "flex-1 min-h-[44px] max-h-[240px] resize-none border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                        rows: 2,
                        disabled: sending
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ComposeBox.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-stretch gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                multiple: true,
                                className: "hidden",
                                onChange: (e)=>onFilesSelected(e.target.files),
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "px-3 py-2 bg-slate-50 border rounded hover:bg-slate-100",
                                        "aria-label": "Attach files",
                                        title: "Attach files",
                                        disabled: uploading || sending,
                                        children: "📎"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: sending || uploading || !text.trim() && files.length === 0,
                                        className: `px-4 py-2 rounded text-white ${sending ? "bg-slate-300 cursor-wait" : "bg-blue-600 hover:bg-blue-700"}`,
                                        "aria-label": "Send message",
                                        children: sending ? "Sending…" : "Send"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ComposeBox.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-slate-500",
                "aria-live": "polite",
                children: [
                    uploading ? "Uploading attachments… " : null,
                    status ? status : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ComposeBox.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/ComposeBox.tsx",
        lineNumber: 367,
        columnNumber: 10
    }, this);
}
_s(ComposeBox, "ULRwA7YCh1rFeY7JCr9p9RZt0e8=");
_c = ComposeBox;
var _c;
__turbopack_context__.k.register(_c, "ComposeBox");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ComposeBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ComposeBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/ChatSocketProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const genLocalId = (prefix = "local-")=>`${prefix}${Math.random().toString(36).slice(2, 9)}`;
/** Robust display name derivation for header */ function deriveChatDisplayName(info, me) {
    if (!info) return "Chat";
    const t = info.type?.toString().toLowerCase();
    const serverName = (info.name ?? info.meta?.teamName ?? info.meta?.name ?? "") || "";
    const isGenericServerName = serverName.trim() === "" || serverName === "Chat" || serverName.startsWith("Chat ");
    // DIRECT: prefer other participant
    if (t === "direct") {
        const participants = info.participants ?? info.meta?.participants ?? info.meta?.members;
        if (participants && participants.length > 0 && me?.id != null) {
            const other = participants.find((p)=>p && String(p.id) !== String(me.id));
            if (other?.name) return other.name;
            if (other?.email) return other.email;
        }
        // last message sender
        const lastSender = info.meta?.lastMessage?.senderName ?? info.meta?.lastMessage?.sender?.name ?? null;
        if (lastSender) return lastSender;
        if (!isGenericServerName && serverName) return serverName;
        return "Direct chat";
    }
    // TEAM / group
    if (!isGenericServerName && serverName) return serverName;
    return `Team ${info.id ?? ""}`;
}
function TeamChat({ chatId, currentUser }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [typingUsers, setTypingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // edit/delete UI state
    const [editingMessageId, setEditingMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingDraft, setEditingDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hiddenForClient, setHiddenForClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // try provider socket first
    let chatSocket = null;
    try {
        chatSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"])();
    } catch  {
        chatSocket = null;
    }
    // dedupe & scroll helpers
    const seenIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const localToServerIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const isNearBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const markRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TeamChat.useCallback[markRead]": async ()=>{
            try {
                await fetch(`/api/chats/${encodeURIComponent(chatId)}/read`, {
                    method: "POST",
                    credentials: "same-origin"
                });
            } catch  {
            // best-effort
            }
        }
    }["TeamChat.useCallback[markRead]"], [
        chatId
    ]);
    /* ------------------------
     load chat info + history
     ------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            mountedRef.current = true;
            const controller = new AbortController();
            const load = {
                "TeamChat.useEffect.load": async ()=>{
                    setLoading(true);
                    try {
                        // 1) messages from /api/chats/[chatId]
                        const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                            credentials: "same-origin",
                            signal: controller.signal
                        });
                        let json = {};
                        if (res.ok) {
                            json = await res.json().catch({
                                "TeamChat.useEffect.load": ()=>({})
                            }["TeamChat.useEffect.load"]);
                        } else {
                            try {
                                json = await res.json().catch({
                                    "TeamChat.useEffect.load": ()=>({})
                                }["TeamChat.useEffect.load"]);
                            } catch  {
                                json = {};
                            }
                        }
                        const msgs = json?.messages ?? json?.messages_list ?? json?.items ?? json?.rows ?? [];
                        const normalized = (Array.isArray(msgs) ? msgs : []).map({
                            "TeamChat.useEffect.load.normalized": (m)=>{
                                const id = m?.id ?? m?.externalId ?? m?.messageId ?? genLocalId("srv-");
                                seenIdsRef.current.add(String(id));
                                return {
                                    ...m,
                                    id: String(id)
                                };
                            }
                        }["TeamChat.useEffect.load.normalized"]);
                        if (!mountedRef.current) return;
                        setMessages(normalized);
                        // 2) chat meta from /api/chats (chat list)
                        try {
                            const metaRes = await fetch("/api/chats", {
                                credentials: "same-origin",
                                signal: controller.signal
                            });
                            if (metaRes.ok) {
                                const metaJson = await metaRes.json().catch({
                                    "TeamChat.useEffect.load": ()=>({})
                                }["TeamChat.useEffect.load"]);
                                const list = metaJson?.chats ?? metaJson?.items ?? [];
                                const found = (Array.isArray(list) ? list : []).find({
                                    "TeamChat.useEffect.load.found": (c)=>String(c.id) === String(chatId)
                                }["TeamChat.useEffect.load.found"]);
                                if (found) {
                                    const participants = Array.isArray(found.members) ? found.members.map({
                                        "TeamChat.useEffect.load": (m_0)=>({
                                                id: m_0.id,
                                                name: m_0.name,
                                                email: m_0.email,
                                                role: m_0.role ?? null
                                            })
                                    }["TeamChat.useEffect.load"]) : undefined;
                                    const chatInfo = {
                                        id: String(found.id),
                                        name: found.name ?? null,
                                        type: found.type ?? null,
                                        participants,
                                        meta: found
                                    };
                                    setInfo(chatInfo);
                                } else {
                                    // fallback if not in list
                                    setInfo({
                                        "TeamChat.useEffect.load": (prev_0)=>prev_0 ?? {
                                                id: chatId,
                                                name: json?.name ?? null,
                                                type: json?.type ?? null,
                                                participants: json?.participants ?? json?.members ?? json?.users ?? undefined,
                                                meta: json ?? null
                                            }
                                    }["TeamChat.useEffect.load"]);
                                }
                            } else {
                                // meta call failed — keep whatever we might have from json
                                setInfo({
                                    "TeamChat.useEffect.load": (prev_1)=>prev_1 ?? {
                                            id: chatId,
                                            name: json?.name ?? null,
                                            type: json?.type ?? null,
                                            participants: json?.participants ?? json?.members ?? json?.users ?? undefined,
                                            meta: json ?? null
                                        }
                                }["TeamChat.useEffect.load"]);
                            }
                        } catch  {
                            // ignore meta fetch errors
                            setInfo({
                                "TeamChat.useEffect.load": (prev)=>prev ?? {
                                        id: chatId,
                                        name: json?.name ?? null,
                                        type: json?.type ?? null,
                                        participants: json?.participants ?? json?.members ?? json?.users ?? undefined,
                                        meta: json ?? null
                                    }
                            }["TeamChat.useEffect.load"]);
                        }
                        // mark read
                        void markRead();
                    } catch (err) {
                        if (err?.name === "AbortError") return;
                        console.warn("TeamChat load error:", err);
                    } finally{
                        if (mountedRef.current) setLoading(false);
                    }
                }
            }["TeamChat.useEffect.load"];
            void load();
            // join room
            ({
                "TeamChat.useEffect": async ()=>{
                    try {
                        if (chatSocket && typeof chatSocket.joinChat === "function") {
                            await chatSocket.joinChat(chatId);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("join-room", chatId);
                        }
                    } catch  {
                    // ignore join errors (best-effort)
                    }
                }
            })["TeamChat.useEffect"]();
            return ({
                "TeamChat.useEffect": ()=>{
                    mountedRef.current = false;
                    controller.abort();
                    try {
                        if (chatSocket && typeof chatSocket.leaveChat === "function") {
                            chatSocket.leaveChat(chatId).catch({
                                "TeamChat.useEffect": ()=>{}
                            }["TeamChat.useEffect"]);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("leave-room", chatId);
                        }
                    } catch  {}
                }
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], [
        chatId,
        chatSocket,
        markRead
    ]);
    /* ------------------------
     socket subscriptions
     ------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            if (!chatSocket && (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on !== "function")) return;
            const handleMessage = {
                "TeamChat.useEffect.handleMessage": (payload)=>{
                    try {
                        let incomingChatId = payload?.chatId ?? payload?.room ?? payload?.message?.chatId ?? payload?.chat?.id ?? null;
                        // normalize room like "chat:<id>" → "<id>"
                        if (typeof incomingChatId === "string" && incomingChatId.startsWith("chat:")) {
                            incomingChatId = incomingChatId.slice("chat:".length);
                        }
                        if (incomingChatId && String(incomingChatId) !== String(chatId)) return;
                        const msg = payload?.message ?? payload;
                        if (!msg) return;
                        const serverId = msg?.id ?? msg?.externalId ?? msg?.messageId ?? null;
                        const content = msg?.content ?? msg?.text ?? "";
                        const sender = msg?.sender ?? msg?.from ?? msg?.user ?? null;
                        const createdAt = msg?.createdAt ?? msg?.ts ?? msg?.created_at ?? new Date().toISOString();
                        if (serverId && seenIdsRef.current.has(String(serverId))) return;
                        setMessages({
                            "TeamChat.useEffect.handleMessage": (prev_2)=>{
                                const optimisticIdx = prev_2.findIndex({
                                    "TeamChat.useEffect.handleMessage.optimisticIdx": (p)=>{
                                        if (!p) return false;
                                        if (typeof p.id === "string" && p.id.startsWith("local-") && serverId) {
                                            if (p.content === content && (p.sender?.id && sender?.id && String(p.sender.id) === String(sender.id) || p.sender?.name && sender?.name && p.sender.name === sender.name)) return true;
                                        }
                                        return typeof p.id === "string" && p.id.startsWith("local-") && p.content === content && p.sender?.name && sender?.name && p.sender.name === sender.name;
                                    }
                                }["TeamChat.useEffect.handleMessage.optimisticIdx"]);
                                if (optimisticIdx >= 0 && serverId) {
                                    const copy = [
                                        ...prev_2
                                    ];
                                    const oldLocalId = copy[optimisticIdx].id;
                                    const newMsg = {
                                        ...msg,
                                        id: String(serverId),
                                        content,
                                        createdAt,
                                        sender: sender ? {
                                            id: sender.id ?? sender.userId ?? sender,
                                            name: sender.name ?? sender.fullName ?? null
                                        } : null,
                                        metadata: msg?.metadata ?? msg?.meta ?? undefined,
                                        attachments: msg?.attachments ?? msg?.files ?? undefined
                                    };
                                    copy[optimisticIdx] = newMsg;
                                    if (oldLocalId) {
                                        seenIdsRef.current.delete(oldLocalId);
                                        localToServerIdRef.current[oldLocalId] = String(serverId);
                                    }
                                    seenIdsRef.current.add(String(serverId));
                                    return copy;
                                }
                                const idToUse = serverId ? String(serverId) : genLocalId("local-");
                                seenIdsRef.current.add(idToUse);
                                const appended = {
                                    id: idToUse,
                                    chatId,
                                    content,
                                    sender: sender ? {
                                        id: sender.id ?? sender.userId ?? sender,
                                        name: sender.name ?? sender.fullName ?? null
                                    } : null,
                                    attachments: msg?.attachments ?? msg?.files ?? undefined,
                                    createdAt,
                                    metadata: msg?.metadata ?? msg?.meta ?? undefined
                                };
                                return [
                                    ...prev_2,
                                    appended
                                ];
                            }
                        }["TeamChat.useEffect.handleMessage"]);
                        // ensure participants include sender (helps header name + inbox)
                        if (sender) {
                            setInfo({
                                "TeamChat.useEffect.handleMessage": (prev_3)=>{
                                    if (!prev_3) return prev_3;
                                    const existing = prev_3.participants ?? [];
                                    const existingIds = new Set(existing.map({
                                        "TeamChat.useEffect.handleMessage": (p_0)=>String(p_0?.id)
                                    }["TeamChat.useEffect.handleMessage"]));
                                    const senderId = sender?.id ?? sender?.userId ?? sender;
                                    if (senderId && !existingIds.has(String(senderId))) {
                                        const added = [
                                            ...existing,
                                            {
                                                id: senderId,
                                                name: sender?.name ?? null,
                                                email: sender?.email ?? null
                                            }
                                        ];
                                        return {
                                            ...prev_3,
                                            participants: added,
                                            meta: {
                                                ...prev_3.meta,
                                                lastMessage: msg
                                            }
                                        };
                                    }
                                    return {
                                        ...prev_3,
                                        meta: {
                                            ...prev_3.meta,
                                            lastMessage: msg
                                        }
                                    };
                                }
                            }["TeamChat.useEffect.handleMessage"]);
                        }
                    } catch (e) {
                        console.warn("incoming message handling error:", e);
                    }
                }
            }["TeamChat.useEffect.handleMessage"];
            const handleTyping = {
                "TeamChat.useEffect.handleTyping": (payload_0)=>{
                    try {
                        let whichChat = payload_0?.chatId ?? payload_0?.room ?? null;
                        if (typeof whichChat === "string" && whichChat.startsWith("chat:")) {
                            whichChat = whichChat.slice("chat:".length);
                        }
                        if (!whichChat || String(whichChat) !== String(chatId)) return;
                        const user = payload_0?.user ?? payload_0?.userId ?? payload_0?.sender ?? null;
                        const userId = user && (typeof user === "string" ? user : user.id ?? user.userId ?? null);
                        if (!userId) return;
                        setTypingUsers({
                            "TeamChat.useEffect.handleTyping": (prev_4)=>({
                                    ...prev_4,
                                    [String(userId)]: true
                                })
                        }["TeamChat.useEffect.handleTyping"]);
                        window.setTimeout({
                            "TeamChat.useEffect.handleTyping": ()=>{
                                setTypingUsers({
                                    "TeamChat.useEffect.handleTyping": (prev_5)=>{
                                        const copy_0 = {
                                            ...prev_5
                                        };
                                        delete copy_0[String(userId)];
                                        return copy_0;
                                    }
                                }["TeamChat.useEffect.handleTyping"]);
                            }
                        }["TeamChat.useEffect.handleTyping"], 1800);
                    } catch  {}
                }
            }["TeamChat.useEffect.handleTyping"];
            // Handle remote edits/deletes from backend:
            // backend emits: "chat:message:updated" { chatId, action: "edit" | "delete", message: {...} }
            const handleMessageUpdated = {
                "TeamChat.useEffect.handleMessageUpdated": (payload_1)=>{
                    try {
                        let incomingChatId_0 = payload_1?.chatId ?? payload_1?.message?.chatId ?? null;
                        if (typeof incomingChatId_0 === "string" && incomingChatId_0.startsWith("chat:")) {
                            incomingChatId_0 = incomingChatId_0.slice("chat:".length);
                        }
                        if (incomingChatId_0 && String(incomingChatId_0) !== String(chatId)) return;
                        const action = payload_1?.action ?? null;
                        const msg_0 = payload_1?.message ?? null;
                        if (!msg_0 || !msg_0.id) return;
                        const serverId_0 = String(msg_0.id);
                        setMessages({
                            "TeamChat.useEffect.handleMessageUpdated": (prev_6)=>prev_6.map({
                                    "TeamChat.useEffect.handleMessageUpdated": (m_1)=>{
                                        if (String(m_1.id) !== serverId_0) return m_1;
                                        const base = {
                                            ...m_1,
                                            content: msg_0.content ?? m_1.content,
                                            metadata: msg_0.metadata ?? m_1.metadata ?? {},
                                            externalId: msg_0.externalId ?? m_1.externalId,
                                            createdAt: msg_0.createdAt ?? m_1.createdAt ?? new Date().toISOString(),
                                            sender: msg_0.sender ?? m_1.sender ?? null
                                        };
                                        if (action === "delete") {
                                            const isDeletedForAll = !!base.metadata?.deletedForEveryone || !!base.metadata?.deletedForAll;
                                            if (isDeletedForAll) {
                                                return {
                                                    ...base,
                                                    content: "This message was deleted"
                                                };
                                            }
                                        }
                                        if (action === "edit") {
                                            return {
                                                ...base,
                                                metadata: {
                                                    ...base.metadata,
                                                    edited: true
                                                }
                                            };
                                        }
                                        return base;
                                    }
                                }["TeamChat.useEffect.handleMessageUpdated"])
                        }["TeamChat.useEffect.handleMessageUpdated"]);
                    } catch (e_0) {
                        console.warn("message updated handler error:", e_0);
                    }
                }
            }["TeamChat.useEffect.handleMessageUpdated"];
            try {
                if (chatSocket && typeof chatSocket.on === "function") {
                    chatSocket.on("chat:message", handleMessage);
                    chatSocket.on("message", handleMessage);
                    chatSocket.on("typing", handleTyping);
                    chatSocket.on("chat:message:updated", handleMessageUpdated);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("chat:message", handleMessage);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("message", handleMessage);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("typing", handleTyping);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("chat:message:updated", handleMessageUpdated);
                }
            } catch  {
            // ignore
            }
            return ({
                "TeamChat.useEffect": ()=>{
                    try {
                        if (chatSocket && typeof chatSocket.off === "function") {
                            chatSocket.off("chat:message", handleMessage);
                            chatSocket.off("message", handleMessage);
                            chatSocket.off("typing", handleTyping);
                            chatSocket.off("chat:message:updated", handleMessageUpdated);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("chat:message", handleMessage);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("message", handleMessage);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("typing", handleTyping);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("chat:message:updated", handleMessageUpdated);
                        }
                    } catch  {}
                }
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], [
        chatId,
        chatSocket
    ]);
    /* ------------------------
     scrolling behaviour
     ------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            const el = listRef.current;
            if (!el) return;
            const onScroll = {
                "TeamChat.useEffect.onScroll": ()=>{
                    const remaining = el.scrollHeight - (el.scrollTop + el.clientHeight);
                    isNearBottomRef.current = remaining < 160;
                }
            }["TeamChat.useEffect.onScroll"];
            el.addEventListener("scroll", onScroll);
            return ({
                "TeamChat.useEffect": ()=>el.removeEventListener("scroll", onScroll)
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            const el_0 = listRef.current;
            if (!el_0) return;
            if (isNearBottomRef.current) {
                requestAnimationFrame({
                    "TeamChat.useEffect": ()=>{
                        try {
                            el_0.scrollTo({
                                top: el_0.scrollHeight,
                                behavior: "smooth"
                            });
                        } catch  {
                            el_0.scrollTop = el_0.scrollHeight;
                        }
                    }
                }["TeamChat.useEffect"]);
            }
        }
    }["TeamChat.useEffect"], [
        messages.length
    ]);
    /* ------------------------
     outgoing handler (ComposeBox)
     ------------------------ */ const handleOutgoing = async (m_2)=>{
        try {
            const isLocal = typeof m_2.id === "string" && m_2.id.startsWith("local-");
            if (isLocal) {
                if (!seenIdsRef.current.has(String(m_2.id))) {
                    seenIdsRef.current.add(String(m_2.id));
                    const localMsg = {
                        id: String(m_2.id),
                        chatId,
                        content: m_2.content,
                        sender: {
                            id: m_2.senderId ?? currentUser?.id,
                            name: m_2.senderName ?? currentUser?.name ?? null
                        },
                        attachments: m_2.attachments ?? undefined,
                        createdAt: m_2.createdAt ?? new Date().toISOString(),
                        __localId: String(m_2.id)
                    };
                    setMessages((prev_7)=>[
                            ...prev_7,
                            localMsg
                        ]);
                }
                return;
            }
            setMessages((prev_8)=>{
                const localKey = Object.keys(localToServerIdRef.current).find((lk)=>localToServerIdRef.current[lk] === m_2.id);
                if (localKey) {
                    const idx = prev_8.findIndex((p_1)=>p_1.id === localKey);
                    if (idx >= 0) {
                        const copy_1 = [
                            ...prev_8
                        ];
                        const newMsg_0 = {
                            id: String(m_2.id),
                            chatId,
                            content: m_2.content,
                            sender: {
                                id: m_2.senderId ?? currentUser?.id,
                                name: m_2.senderName ?? currentUser?.name ?? null
                            },
                            createdAt: m_2.createdAt ?? new Date().toISOString(),
                            attachments: m_2.attachments ?? undefined
                        };
                        copy_1[idx] = newMsg_0;
                        seenIdsRef.current.delete(localKey);
                        seenIdsRef.current.add(String(m_2.id));
                        localToServerIdRef.current[localKey] = String(m_2.id);
                        return copy_1;
                    }
                }
                const optIdx = prev_8.findIndex((p_2)=>typeof p_2.id === "string" && p_2.id.startsWith("local-") && p_2.content === m_2.content && (p_2.sender?.id && String(p_2.sender.id) === String(m_2.senderId) || p_2.sender?.name && p_2.sender.name === m_2.senderName));
                if (optIdx >= 0) {
                    const copy_2 = [
                        ...prev_8
                    ];
                    const oldLocalId_0 = copy_2[optIdx].id;
                    const newMsg_1 = {
                        id: String(m_2.id),
                        chatId,
                        content: m_2.content,
                        sender: {
                            id: m_2.senderId ?? currentUser?.id,
                            name: m_2.senderName ?? currentUser?.name ?? null
                        },
                        createdAt: m_2.createdAt ?? new Date().toISOString(),
                        attachments: m_2.attachments ?? undefined
                    };
                    copy_2[optIdx] = newMsg_1;
                    if (oldLocalId_0) {
                        seenIdsRef.current.delete(oldLocalId_0);
                        localToServerIdRef.current[oldLocalId_0] = String(m_2.id);
                    }
                    seenIdsRef.current.add(String(m_2.id));
                    return copy_2;
                }
                if (m_2.id && seenIdsRef.current.has(String(m_2.id))) return prev_8;
                if (m_2.id) seenIdsRef.current.add(String(m_2.id));
                const appended_0 = {
                    id: String(m_2.id ?? genLocalId("srv-")),
                    chatId,
                    content: m_2.content,
                    sender: {
                        id: m_2.senderId ?? currentUser?.id,
                        name: m_2.senderName ?? currentUser?.name ?? null
                    },
                    createdAt: m_2.createdAt ?? new Date().toISOString(),
                    attachments: m_2.attachments ?? undefined
                };
                return [
                    ...prev_8,
                    appended_0
                ];
            });
            void markRead();
        } catch (err_0) {
            console.warn("handleOutgoing error:", err_0);
        }
    };
    /* ------------------------
     edit / delete handlers
     ------------------------ */ const handleStartEdit = (msg_1)=>{
        if (!msg_1.id) return;
        setEditingMessageId(String(msg_1.id));
        setEditingDraft(msg_1.content);
    };
    const handleCancelEdit = ()=>{
        setEditingMessageId(null);
        setEditingDraft("");
    };
    const handleConfirmEdit = async (msg_2, newContent)=>{
        if (!msg_2.id) return;
        const idStr = String(msg_2.id);
        const trimmed = newContent.trim();
        if (!trimmed) {
            // do not allow empty content on client
            return;
        }
        // optimistic local update
        setMessages((prev_9)=>prev_9.map((m_3)=>String(m_3.id) === idStr ? {
                    ...m_3,
                    content: trimmed,
                    metadata: {
                        ...m_3.metadata,
                        edited: true
                    }
                } : m_3));
        setEditingMessageId(null);
        setEditingDraft("");
        // best-effort: call backend PATCH /api/chats/[chatId]
        try {
            await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                method: "PATCH",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messageId: idStr,
                    content: trimmed
                })
            }).catch(()=>{});
        } catch  {
        // error is non-fatal, server will enforce real state
        }
    };
    const handleDeleteForAll = async (msg_3)=>{
        if (!msg_3.id) return;
        const idStr_0 = String(msg_3.id);
        // optimistic local update – keep a placeholder
        setMessages((prev_10)=>prev_10.map((m_4)=>String(m_4.id) === idStr_0 ? {
                    ...m_4,
                    content: "This message was deleted",
                    metadata: {
                        ...m_4.metadata,
                        deletedForEveryone: true
                    }
                } : m_4));
        // best-effort: call backend DELETE /api/chats/[chatId]
        try {
            await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                method: "DELETE",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messageId: idStr_0
                })
            }).catch(()=>{});
        } catch  {
        // ignore; server is source of truth
        }
    };
    const handleDeleteForMe = (msg_4)=>{
        const idStr_1 = String(msg_4.id ?? msg_4.__localId ?? "");
        if (!idStr_1) return;
        setHiddenForClient((prev_11)=>({
                ...prev_11,
                [idStr_1]: true
            }));
    };
    /* ------------------------
     UI pieces
     ------------------------ */ const headerName = deriveChatDisplayName(info, currentUser ?? null);
    const typingCount = Object.keys(typingUsers).length;
    const Avatar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700",
            children: headerName && headerName[0] || "U"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 665,
            columnNumber: 24
        }, this);
    const MessageRow = ({ msg: msg_5 })=>{
        const msgKey = String(msg_5.id ?? msg_5.__localId ?? "");
        if (hiddenForClient[msgKey]) return null;
        const isMine = currentUser && msg_5.sender && String(msg_5.sender?.id) === String(currentUser.id);
        const isLocalOptimistic = typeof msg_5.id === "string" && msg_5.id.startsWith("local-");
        const ts = msg_5.createdAt ? new Date(msg_5.createdAt).toLocaleString() : "";
        const createdDate = msg_5.createdAt ? new Date(msg_5.createdAt) : null;
        const msSince = createdDate && !Number.isNaN(createdDate.getTime()) ? Date.now() - createdDate.getTime() : Number.POSITIVE_INFINITY;
        const withinEditWindow = msSince <= 15 * 60 * 1000; // 15 minutes
        const isEditing = editingMessageId && String(editingMessageId) === String(msg_5.id);
        const isDeletedForEveryone = !!msg_5.metadata?.deletedForEveryone || !!msg_5.metadata?.deletedForAll;
        const displayContent = isDeletedForEveryone && !isEditing ? "This message was deleted" : msg_5.content;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-3 ${isMine ? "justify-end" : "justify-start"}`,
            children: [
                !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm shrink-0",
                    children: msg_5.sender?.name ? msg_5.sender.name[0] : "U"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 686,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `max-w-[78%] p-3 rounded-xl break-words ${isMine ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"} ${isLocalOptimistic ? "opacity-80" : ""}`,
                    children: [
                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full text-sm rounded-md border border-slate-200 bg-white/90 text-slate-900 p-1 mb-2",
                                    rows: 2,
                                    value: editingDraft,
                                    onChange: (e_1)=>setEditingDraft(e_1.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 691,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 text-[11px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleConfirmEdit(msg_5, editingDraft),
                                            className: "px-2 py-0.5 rounded-md bg-emerald-500 text-white",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCancelEdit,
                                            className: "px-2 py-0.5 rounded-md bg-slate-200 text-slate-700",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm whitespace-pre-wrap",
                                    children: displayContent
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this),
                                msg_5.attachments?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 space-y-1",
                                    children: msg_5.attachments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: a.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-xs underline block",
                                            children: a.name ?? a.url
                                        }, i, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 705,
                                            columnNumber: 52
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 704,
                                    columnNumber: 44
                                }, this) : null
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 flex items-center justify-between gap-2 text-[10px] text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-left",
                                    children: [
                                        ts,
                                        " ",
                                        isLocalOptimistic ? " • sending…" : "",
                                        msg_5.metadata?.edited && !isEditing && !isDeletedForEveryone ? " • edited" : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 712,
                                    columnNumber: 13
                                }, this),
                                isMine && !isDeletedForEveryone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        withinEditWindow && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleStartEdit(msg_5),
                                                    className: "underline decoration-dotted",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleDeleteForAll(msg_5),
                                                    className: "underline decoration-dotted",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleDeleteForMe(msg_5),
                                            className: "underline decoration-dotted",
                                            children: "Delete for me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 717,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 689,
                    columnNumber: 9
                }, this),
                isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-full bg-transparent shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 732,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 685,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full min-h-[200px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 border-b flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            try {
                                window.history.back();
                            } catch  {}
                        },
                        className: "p-1 rounded-md hover:bg-slate-100",
                        "aria-label": "Back",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {}, void 0, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold truncate",
                                children: headerName
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                lineNumber: 746,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400",
                                children: typingCount > 0 ? typingCount > 1 ? `${typingCount} people typing…` : "typing…" : info?.type && info.type.toString().toLowerCase().includes("team") ? "Group" : "Direct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/TeamChat.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 745,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: listRef,
                className: "flex-1 overflow-auto p-4 space-y-3 bg-white",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "Loading messages…"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 756,
                    columnNumber: 20
                }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "No messages yet."
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 758,
                    columnNumber: 44
                }, this) : messages.map((m_5)=>{
                    const key = m_5.id ?? m_5.__localId ?? genLocalId("k-");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageRow, {
                        msg: m_5
                    }, String(key), false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 762,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 755,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ComposeBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    chatId: chatId,
                    onSent: handleOutgoing,
                    onTyping: ()=>{
                        try {
                            const payload_2 = {
                                chatId,
                                user: currentUser?.id ?? null
                            };
                            if (chatSocket && typeof chatSocket.emit === "function") {
                                chatSocket.emit("typing", payload_2);
                            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("typing", payload_2);
                            }
                        } catch  {}
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 767,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/TeamChat.tsx",
        lineNumber: 735,
        columnNumber: 10
    }, this);
}
_s(TeamChat, "IXSG9XgJk3M6C5KvPf/RKeHgvoc=");
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

//# sourceMappingURL=src_e041e6bf._.js.map