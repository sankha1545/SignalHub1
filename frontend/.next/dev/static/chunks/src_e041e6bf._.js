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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/ChatSocketProvider.tsx [app-client] (ecmascript)"); // your provider path
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TeamChat({ chatId, currentUser }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // prefer provider socket
    let chatSocket = null;
    try {
        chatSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$ChatSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSocket"])();
    } catch  {
        chatSocket = null;
    }
    // seen IDs to avoid duplicates
    const seenIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // helper: mark chat read (best-effort)
    const markRead = async ()=>{
        try {
            await fetch(`/api/chats/${encodeURIComponent(chatId)}/read`, {
                method: "POST",
                credentials: "same-origin"
            });
        } catch (err) {
            // non-fatal
            console.warn("markRead failed:", err);
        }
    };
    // load history and join room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            let mounted = true;
            const fetchHistory = {
                "TeamChat.useEffect.fetchHistory": async ()=>{
                    setLoading(true);
                    try {
                        const res = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                            credentials: "same-origin"
                        });
                        if (!mounted) return;
                        const j = await res.json().catch({
                            "TeamChat.useEffect.fetchHistory": ()=>({})
                        }["TeamChat.useEffect.fetchHistory"]);
                        const msgs = j?.messages ?? [];
                        seenIdsRef.current = new Set(msgs.map({
                            "TeamChat.useEffect.fetchHistory": (m)=>m.id
                        }["TeamChat.useEffect.fetchHistory"]));
                        if (mounted) setMessages(msgs);
                        // mark read after loading
                        void markRead();
                    } catch (err) {
                        console.warn("Failed to load chat history:", err);
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["TeamChat.useEffect.fetchHistory"];
            fetchHistory();
            // join via provider or fallback
            ({
                "TeamChat.useEffect": async ()=>{
                    try {
                        if (chatSocket && typeof chatSocket.joinChat === "function") {
                            await chatSocket.joinChat(chatId);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("join-room", chatId);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("join", chatId);
                        }
                    } catch (err) {
                        console.warn("join chat failed:", err);
                    }
                }
            })["TeamChat.useEffect"]();
            return ({
                "TeamChat.useEffect": ()=>{
                    mounted = false;
                    try {
                        if (chatSocket && typeof chatSocket.leaveChat === "function") {
                            chatSocket.leaveChat(chatId).catch({
                                "TeamChat.useEffect": ()=>{}
                            }["TeamChat.useEffect"]);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("leave-room", chatId);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit?.("leave", chatId);
                        }
                    } catch (err) {
                    // ignore
                    }
                }
            })["TeamChat.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TeamChat.useEffect"], [
        chatId
    ]);
    // socket message & read listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            const handler = {
                "TeamChat.useEffect.handler": (payload)=>{
                    try {
                        // server may send { chatId, message } or the message directly
                        const incomingChatId = payload?.chatId ?? payload?.message?.chatId ?? payload?.message?.chat_id;
                        const msg = payload?.message ?? (payload?.id ? payload : null);
                        if (!msg) return;
                        if (incomingChatId && incomingChatId !== chatId) return;
                        // dedupe
                        if (msg.id && seenIdsRef.current.has(msg.id)) return;
                        if (msg.id) seenIdsRef.current.add(msg.id);
                        setMessages({
                            "TeamChat.useEffect.handler": (prev)=>{
                                // replace optimistic if matching by content + sender
                                const optimisticIndex = prev.findIndex({
                                    "TeamChat.useEffect.handler.optimisticIndex": (p)=>typeof p.id === "string" && p.id.startsWith("local-") && p.content === msg.content && p.sender?.id === msg.sender?.id
                                }["TeamChat.useEffect.handler.optimisticIndex"]);
                                if (optimisticIndex >= 0) {
                                    const copy = [
                                        ...prev
                                    ];
                                    // delete old local id from seen set
                                    const oldId = copy[optimisticIndex].id;
                                    copy[optimisticIndex] = msg;
                                    if (oldId) seenIdsRef.current.delete(oldId);
                                    if (msg.id) seenIdsRef.current.add(msg.id);
                                    return copy;
                                }
                                return [
                                    ...prev,
                                    msg
                                ];
                            }
                        }["TeamChat.useEffect.handler"]);
                    } catch (e) {
                        console.warn("socket handler err:", e);
                    }
                }
            }["TeamChat.useEffect.handler"];
            const readHandler = {
                "TeamChat.useEffect.readHandler": (payload)=>{
                // payload may contain read receipts; currently no UI update, but kept for extension
                // e.g. { chatId, userId, lastReadAt }
                }
            }["TeamChat.useEffect.readHandler"];
            try {
                if (chatSocket && typeof chatSocket.on === "function") {
                    chatSocket.on("chat:message", handler);
                    chatSocket.on("message", handler);
                    chatSocket.on("chat:read", readHandler);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("chat:message", handler);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("message", handler);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("chat:read", readHandler);
                }
            } catch (e) {
                console.warn("socket subscribe failed:", e);
            }
            return ({
                "TeamChat.useEffect": ()=>{
                    try {
                        if (chatSocket && typeof chatSocket.off === "function") {
                            chatSocket.off("chat:message", handler);
                            chatSocket.off("message", handler);
                            chatSocket.off("chat:read", readHandler);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("chat:message", handler);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("message", handler);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("chat:read", readHandler);
                        }
                    } catch  {}
                }
            })["TeamChat.useEffect"];
        }
    }["TeamChat.useEffect"], [
        chatId,
        chatSocket
    ]);
    // scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamChat.useEffect": ()=>{
            if (!listRef.current) return;
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
    // handle outgoing messages via ComposeBox -> onSent
    const handleOutgoing = async (m)=>{
        // ComposeBox will call onSent twice:
        //  - first with optimistic local message (id starts with local-)
        //  - later with server-normalized message (id from server)
        // We'll merge/update messages accordingly.
        try {
            // If optimistic (local id), append if not present
            if (typeof m.id === "string" && m.id.startsWith("local-")) {
                if (!seenIdsRef.current.has(m.id)) {
                    seenIdsRef.current.add(m.id);
                    setMessages((prev)=>[
                            ...prev,
                            m
                        ]);
                }
                return;
            }
            // server-confirmed message: replace any optimistic with same content+sender OR append
            setMessages((prev)=>{
                const optIndex = prev.findIndex((p)=>typeof p.id === "string" && p.id.startsWith("local-") && p.content === m.content && p.sender?.id === m.senderId);
                if (optIndex >= 0) {
                    const copy = [
                        ...prev
                    ];
                    // remove optimistic id from seen set
                    const oldId = copy[optIndex].id;
                    copy[optIndex] = m;
                    if (oldId) seenIdsRef.current.delete(oldId);
                    if (m.id) seenIdsRef.current.add(String(m.id));
                    return copy;
                }
                // avoid dup by server id
                if (m.id && seenIdsRef.current.has(String(m.id))) return prev;
                if (m.id) seenIdsRef.current.add(String(m.id));
                return [
                    ...prev,
                    m
                ];
            });
            // mark read for the author (they have read their own message)
            void markRead();
        } catch (e) {
            console.warn("handleOutgoing error:", e);
        }
    };
    // optional: a minimal Message view; you can replace with a dedicated MessageBubble component
    const MessageView = ({ msg })=>{
        const isMine = currentUser && msg.sender?.id === currentUser.id;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-3 ${isMine ? "justify-end" : "justify-start"}`,
            children: [
                !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm",
                    children: msg.sender?.name ? msg.sender.name[0] : "U"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 247,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `max-w-[78%] p-3 rounded-xl ${isMine ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm whitespace-pre-wrap",
                            children: msg.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        msg.attachments?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-1",
                            children: msg.attachments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: a.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-xs underline",
                                    children: a.name ?? a.url
                                }, i, false, {
                                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                                    lineNumber: 254,
                                    columnNumber: 46
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 253,
                            columnNumber: 38
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400 mt-1 text-right",
                            children: msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/TeamChat.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this),
                isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-full bg-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 261,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/TeamChat.tsx",
            lineNumber: 246,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full min-h-[200px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: listRef,
                className: "flex-1 overflow-auto p-4 space-y-3",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "Loading messages…"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 266,
                    columnNumber: 20
                }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "No messages yet."
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 266,
                    columnNumber: 110
                }, this) : messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageView, {
                        msg: m
                    }, m.id, false, {
                        fileName: "[project]/src/components/chat/TeamChat.tsx",
                        lineNumber: 266,
                        columnNumber: 193
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ComposeBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    chatId: chatId,
                    onSent: handleOutgoing
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/TeamChat.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/TeamChat.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/TeamChat.tsx",
        lineNumber: 264,
        columnNumber: 10
    }, this);
}
_s(TeamChat, "4gfx99oEqMKWUHTLWw08snutsq8=");
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