(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/account/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/account/page.tsx
__turbopack_context__.s([
    "default",
    ()=>AccountPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AccountPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "2da047b8f48649dddeb710367e95bf3196e619e868d72833dc8690752cedf9b1") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2da047b8f48649dddeb710367e95bf3196e619e868d72833dc8690752cedf9b1";
    }
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[2] !== router) {
        t1 = ({
            "AccountPage[useEffect()]": ()=>{
                const load = async function load() {
                    setLoading(true);
                    const res = await fetch("/api/me");
                    const json = await res.json().catch(_AccountPageUseEffectLoadAnonymous);
                    if (json?.ok && json.user) {
                        setUser(json.user);
                        setForm({
                            name: json.user.name ?? "",
                            phone: json.user.phone ?? "",
                            displayName: json.user.profile?.displayName ?? "",
                            avatarUrl: json.user.profile?.avatarUrl ?? "",
                            bio: json.user.profile?.bio ?? ""
                        });
                    } else {
                        router.push("/login");
                    }
                    setLoading(false);
                };
                load();
            }
        })["AccountPage[useEffect()]"];
        t2 = [
            router
        ];
        $[2] = router;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== form.avatarUrl || $[6] !== form.bio || $[7] !== form.displayName || $[8] !== form.name || $[9] !== form.phone) {
        t3 = async function handleSave(e) {
            e.preventDefault();
            setLoading(true);
            const body = {
                name: form.name,
                phone: form.phone,
                profile: {
                    displayName: form.displayName,
                    avatarUrl: form.avatarUrl,
                    bio: form.bio,
                    phoneNumber: form.phone
                }
            };
            const res_0 = await fetch("/api/me", {
                method: "PATCH",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json_0 = await res_0.json().catch(_AccountPageHandleSaveAnonymous);
            if (json_0.ok) {
                setUser(json_0.user);
                setEditing(false);
            } else {
                alert(json_0.error || "Failed to update");
            }
            setLoading(false);
        };
        $[5] = form.avatarUrl;
        $[6] = form.bio;
        $[7] = form.displayName;
        $[8] = form.name;
        $[9] = form.phone;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const handleSave = t3;
    if (loading && !user) {
        let t4;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/src/app/account/page.tsx",
                lineNumber: 111,
                columnNumber: 12
            }, this);
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        return t4;
    }
    if (!user) {
        let t4;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: "No user data"
            }, void 0, false, {
                fileName: "[project]/src/app/account/page.tsx",
                lineNumber: 121,
                columnNumber: 12
            }, this);
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        return t4;
    }
    let t4;
    if ($[13] !== user.email || $[14] !== user.name || $[15] !== user.profile) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 rounded-full bg-slate-200 overflow-hidden",
            children: user.profile?.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: user.profile.avatarUrl,
                alt: "avatar",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/account/page.tsx",
                lineNumber: 130,
                columnNumber: 106
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center text-xl text-slate-500",
                children: (user.name || user.email || "U").charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/app/account/page.tsx",
                lineNumber: 130,
                columnNumber: 197
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[13] = user.email;
        $[14] = user.name;
        $[15] = user.profile;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const t5 = user.name || user.email;
    let t6;
    if ($[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== user.email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-slate-500",
            children: user.email
        }, void 0, false, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[19] = user.email;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== user.role) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-400",
            children: [
                "Role: ",
                user.role
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[21] = user.role;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t6 || $[24] !== t7 || $[25] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[23] = t6;
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== t4 || $[28] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-6",
            children: [
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[27] = t4;
        $[28] = t9;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== editing || $[31] !== form || $[32] !== handleSave || $[33] !== router || $[34] !== user.createdAt || $[35] !== user.name || $[36] !== user.organizationName || $[37] !== user.phone) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded shadow p-4",
            children: !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 115
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 165
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 184,
                                columnNumber: 110
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 222
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: user.phone || "\u2014"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 273
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 184,
                                columnNumber: 217
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Organization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 343
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: user.organizationName || "\u2014"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 401
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 184,
                                columnNumber: 338
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Joined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 482
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: new Date(user.createdAt).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 534
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 184,
                                columnNumber: 477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 184,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 bg-indigo-600 text-white rounded",
                                onClick: {
                                    "AccountPage[<button>.onClick]": ()=>setEditing(true)
                                }["AccountPage[<button>.onClick]"],
                                children: "Edit profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 184,
                                columnNumber: 657
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 border rounded",
                                onClick: {
                                    "AccountPage[<button>.onClick]": ()=>router.push("/")
                                }["AccountPage[<button>.onClick]"],
                                children: "Back to app"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 186,
                                columnNumber: 68
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 184,
                        columnNumber: 624
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSave,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Full name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 188,
                                columnNumber: 134
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.name,
                                onChange: {
                                    "AccountPage[<input>.onChange]": (e_0)=>setForm({
                                            ...form,
                                            name: e_0.target.value
                                        })
                                }["AccountPage[<input>.onChange]"],
                                className: "w-full p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 188,
                                columnNumber: 193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 188,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 193,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.phone,
                                onChange: {
                                    "AccountPage[<input>.onChange]": (e_1)=>setForm({
                                            ...form,
                                            phone: e_1.target.value
                                        })
                                }["AccountPage[<input>.onChange]"],
                                className: "w-full p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 193,
                                columnNumber: 153
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 193,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Display name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 198,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.displayName,
                                onChange: {
                                    "AccountPage[<input>.onChange]": (e_2)=>setForm({
                                            ...form,
                                            displayName: e_2.target.value
                                        })
                                }["AccountPage[<input>.onChange]"],
                                className: "w-full p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 198,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 198,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Bio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 203,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.bio,
                                onChange: {
                                    "AccountPage[<textarea>.onChange]": (e_3)=>setForm({
                                            ...form,
                                            bio: e_3.target.value
                                        })
                                }["AccountPage[<textarea>.onChange]"],
                                className: "w-full p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 203,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 203,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-4 py-2 bg-emerald-600 text-white rounded",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 208,
                                columnNumber: 124
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "px-4 py-2 border rounded",
                                onClick: {
                                    "AccountPage[<button>.onClick]": ()=>setEditing(false)
                                }["AccountPage[<button>.onClick]"],
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/account/page.tsx",
                                lineNumber: 208,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/account/page.tsx",
                        lineNumber: 208,
                        columnNumber: 96
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/account/page.tsx",
                lineNumber: 188,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[30] = editing;
        $[31] = form;
        $[32] = handleSave;
        $[33] = router;
        $[34] = user.createdAt;
        $[35] = user.name;
        $[36] = user.organizationName;
        $[37] = user.phone;
        $[38] = t11;
    } else {
        t11 = $[38];
    }
    let t12;
    if ($[39] !== t10 || $[40] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-3xl mx-auto",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t11;
        $[41] = t12;
    } else {
        t12 = $[41];
    }
    return t12;
}
_s(AccountPage, "ZuZ5GFqoDjhAvk0eqeCkfa9s+60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AccountPage;
function _AccountPageHandleSaveAnonymous() {
    return {
        ok: false
    };
}
function _AccountPageUseEffectLoadAnonymous() {
    return {
        ok: false
    };
}
var _c;
__turbopack_context__.k.register(_c, "AccountPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_29ce69bb._.js.map