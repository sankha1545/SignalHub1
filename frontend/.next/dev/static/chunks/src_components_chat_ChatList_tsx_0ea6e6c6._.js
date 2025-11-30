(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ChatList({ onOpenChat }) {
    _s();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatList.useEffect": ()=>{
            fetch(`/api/chats`).then({
                "ChatList.useEffect": (r)=>r.json()
            }["ChatList.useEffect"]).then({
                "ChatList.useEffect": (data)=>setChats(data.chats || [])
            }["ChatList.useEffect"]);
            const onTeamCreated = {
                "ChatList.useEffect.onTeamCreated": (payload)=>{
                    // reload minimal list or optimistic push
                    setChats({
                        "ChatList.useEffect.onTeamCreated": (c)=>[
                                payload.chat,
                                ...c
                            ]
                    }["ChatList.useEffect.onTeamCreated"]);
                }
            }["ChatList.useEffect.onTeamCreated"];
            // subscribe to socket event
            __turbopack_context__.A("[project]/src/lib/socketClient.ts [app-client] (ecmascript, async loader)").then({
                "ChatList.useEffect": (mod)=>{
                    const socket = mod.default;
                    socket.on("team:created", onTeamCreated);
                }
            }["ChatList.useEffect"]);
            return ({
                "ChatList.useEffect": ()=>{
                    __turbopack_context__.A("[project]/src/lib/socketClient.ts [app-client] (ecmascript, async loader)").then({
                        "ChatList.useEffect": (mod_0)=>mod_0.default.off("team:created")
                    }["ChatList.useEffect"]);
                }
            })["ChatList.useEffect"];
        }
    }["ChatList.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y",
        children: chats.map((c_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 hover:bg-muted cursor-pointer",
                onClick: ()=>onOpenChat(c_0.id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium",
                        children: c_0.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: c_0.lastMessagePreview || "No messages yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this)
                ]
            }, c_0.id, true, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 26,
                columnNumber: 23
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_s(ChatList, "vytB8QcpLWFeZXbb4G/4rqAt8MY=");
_c = ChatList;
var _c;
__turbopack_context__.k.register(_c, "ChatList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_chat_ChatList_tsx_0ea6e6c6._.js.map