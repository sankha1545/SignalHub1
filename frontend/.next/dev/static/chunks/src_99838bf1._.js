(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/forms/ProfileForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File: app/account/components/ProfileForm.tsx
__turbopack_context__.s([
    "default",
    ()=>ProfileForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../ui/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProfileForm({ onChangePassword }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        displayName: "",
        email: "",
        phone: "",
        avatarUrl: "",
        bio: "",
        country: "",
        region: "",
        postalCode: "",
        language: "",
        district: ""
    });
    // photo cropping
    const [rawFile, setRawFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropOpen, setCropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [croppedBlobUrl, setCroppedBlobUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            async function load() {
                setLoading(true);
                try {
                    const res = await fetch("/api/me");
                    const json = await res.json().catch({
                        "ProfileForm.useEffect.load": ()=>({
                                ok: false
                            })
                    }["ProfileForm.useEffect.load"]);
                    if (json?.ok && json.user) {
                        setUser(json.user);
                        const profile = json.user.profile ?? {};
                        setForm({
                            name: json.user.name ?? "",
                            displayName: profile.displayName ?? "",
                            email: json.user.email ?? "",
                            phone: json.user.phone ?? "",
                            avatarUrl: profile.avatarUrl ?? "",
                            bio: profile.bio ?? "",
                            country: profile.country ?? "",
                            region: profile.region ?? "",
                            postalCode: profile.postalCode ?? profile.postal_code ?? "",
                            language: profile.language ?? "",
                            district: profile.district ?? ""
                        });
                        document.getElementById("member-since").textContent = new Date(json.user.createdAt).toLocaleDateString();
                    } else {
                        // redirect to login if not authenticated
                        window.location = "/login";
                    }
                } catch (err) {
                    console.error(err);
                    window.location = "/login";
                } finally{
                    setLoading(false);
                }
            }
            load();
        }
    }["ProfileForm.useEffect"], []);
    function handleFileChange(f) {
        if (!f) return setRawFile(null);
        if (!f.type.startsWith("image/")) return alert("Please select an image file.");
        if (f.size > 5 * 1024 * 1024) return alert("Max 5MB");
        setRawFile(f);
        setCropOpen(true);
    }
    async function handleSave(e) {
        if (e) e.preventDefault();
        setSaving(true);
        try {
            let avatarUrl = form.avatarUrl;
            if (croppedBlobUrl) {
                // upload the cropped blob to /api/upload
                const blob = await (await fetch(croppedBlobUrl)).blob();
                const fd = new FormData();
                fd.append("file", blob, "avatar.png");
                const r = await fetch("/api/upload", {
                    method: "POST",
                    body: fd
                });
                const j = await r.json();
                if (j?.ok && j.url) avatarUrl = j.url;
            }
            const body = {
                name: form.name,
                phone: form.phone,
                profile: {
                    displayName: form.displayName,
                    avatarUrl,
                    bio: form.bio,
                    country: form.country,
                    region: form.region,
                    postalCode: form.postalCode,
                    language: form.language,
                    district: form.district
                }
            };
            const res_0 = await fetch("/api/me", {
                method: "PATCH",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json_0 = await res_0.json().catch(()=>({
                    ok: false
                }));
            if (json_0.ok) {
                setUser(json_0.user ?? user);
                setEditing(false);
                setForm((p)=>({
                        ...p,
                        avatarUrl
                    }));
                setCroppedBlobUrl(null);
                setRawFile(null);
                alert("Profile saved");
            } else {
                alert(json_0.error || "Save failed");
            }
        } catch (err_0) {
            console.error(err_0);
            alert("Unexpected error");
        } finally{
            setSaving(false);
        }
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[50vh] flex items-center justify-center",
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/components/forms/ProfileForm.tsx",
        lineNumber: 142,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-tr from-white via-slate-50 to-white rounded-2xl p-6 shadow-md border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 overflow-hidden flex items-center justify-center border-2 border-white shadow-lg",
                                children: croppedBlobUrl || form.avatarUrl ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: croppedBlobUrl ?? form.avatarUrl,
                                    alt: "avatar",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 149,
                                    columnNumber: 11
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-semibold text-slate-700",
                                    children: (form.name || form.email || "U").charAt(0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 149,
                                    columnNumber: 113
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 146,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-3 -bottom-3 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditing(true);
                                            fileInputRef.current?.click();
                                        },
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border shadow-sm text-xs",
                                        children: "Upload"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 154,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setRawFile(null);
                                            setCroppedBlobUrl(null);
                                            setForm((p_0)=>({
                                                    ...p_0,
                                                    avatarUrl: user?.profile?.avatarUrl ?? ""
                                                }));
                                        },
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border shadow-sm text-xs",
                                        children: "Revert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 162,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 153,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                        lineNumber: 145,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-extrabold text-slate-900",
                                                children: user.name || user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 179,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 180,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-100",
                                                        children: user.role ?? "Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs px-2 py-1 rounded bg-slate-50 text-slate-600",
                                                        children: [
                                                            "Joined ",
                                                            new Date(user.createdAt).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 181,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 178,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>editing ? handleSave() : setEditing(true),
                                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm ${editing ? "bg-indigo-600 text-white" : "bg-white border"}`,
                                                disabled: saving,
                                                children: editing ? saving ? "Saving…" : "Save" : "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 189,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.location.href = "/",
                                                className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border bg-white",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 194,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 188,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 177,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-600",
                                children: "A modern profile editor with smart cascading selects and image cropper. All changes are saved to your account."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 199,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 144,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-slate-600",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 205,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Full name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.name ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 207,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Display name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.displayName ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 211,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.phone ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 215,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Bio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium whitespace-pre-wrap text-slate-800",
                                                    children: user.profile?.bio ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 219,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 206,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 204,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-slate-600",
                                    children: "Location & language"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 227,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Country"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.country ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 229,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Region / State"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.region ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 233,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "District"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.district ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 237,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Postal code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.postalCode ?? user.profile?.postal_code ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 241,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Language"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.profile?.language ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 245,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 228,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 226,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                    lineNumber: 203,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSave,
                    className: "space-y-6 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: "image/*",
                            onChange: (e_0)=>handleFileChange(e_0.target.files?.[0] ?? null),
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 252,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Full name",
                                    value: form.name,
                                    onChange: (v)=>setForm({
                                            ...form,
                                            name: v
                                        }),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 256,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Display name",
                                    value: form.displayName,
                                    onChange: (v_0)=>setForm({
                                            ...form,
                                            displayName: v_0
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 260,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Phone",
                                    value: form.phone,
                                    onChange: (v_1)=>setForm({
                                            ...form,
                                            phone: v_1
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 266,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Postal code",
                                    value: form.postalCode,
                                    onChange: (v_2)=>setForm({
                                            ...form,
                                            postalCode: v_2
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 270,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 255,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-500",
                                    children: "Bio"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 278,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.bio,
                                    onChange: (e_1)=>setForm({
                                            ...form,
                                            bio: e_1.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200",
                                    placeholder: "Tell people about yourself — what you do and what you care about."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 279,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 277,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Country"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 288,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: form.country,
                                                onChange: (e_2)=>setForm({
                                                        ...form,
                                                        country: e_2.target.value
                                                    }),
                                                className: "w-full p-3 border rounded-lg bg-white",
                                                placeholder: "Start typing country..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 289,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 287,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Region / State"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 299,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: form.region,
                                                onChange: (e_3)=>setForm({
                                                        ...form,
                                                        region: e_3.target.value
                                                    }),
                                                className: "w-full p-3 border rounded-lg bg-white",
                                                placeholder: "Region / state"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 300,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "Start typing to search — improved UX for modern forms."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 306,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 298,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "District / City"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 311,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: form.district,
                                                onChange: (e_4)=>setForm({
                                                        ...form,
                                                        district: e_4.target.value
                                                    }),
                                                className: "w-full p-3 border rounded-lg bg-white",
                                                placeholder: "District / city"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 312,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "Optional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 318,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 310,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 286,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 325,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.language,
                                            onChange: (e_5)=>setForm({
                                                    ...form,
                                                    language: e_5.target.value
                                                }),
                                            className: "w-full mt-1 p-3 border rounded-lg",
                                            placeholder: "Preferred language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 326,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 324,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 333,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 334,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 323,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Profile photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 340,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center border",
                                                    children: croppedBlobUrl || form.avatarUrl ? // eslint-disable-next-line @next/next/no-img-element
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: croppedBlobUrl ?? form.avatarUrl,
                                                        alt: "preview",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 17
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl text-slate-500",
                                                        children: (form.name || "U").charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 120
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>fileInputRef.current?.click(),
                                                            className: "px-3 py-2 rounded-md border text-sm inline-flex items-center gap-2",
                                                            children: "Upload"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setRawFile(null);
                                                                setCroppedBlobUrl(null);
                                                                setForm((p_1)=>({
                                                                        ...p_1,
                                                                        avatarUrl: ""
                                                                    }));
                                                            },
                                                            className: "px-3 py-2 rounded-md border text-sm inline-flex items-center gap-2",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Max 5 MB. JPG/PNG/GIF accepted."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 341,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 339,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Profile preview URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 367,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.avatarUrl,
                                            onChange: (e_6)=>setForm({
                                                    ...form,
                                                    avatarUrl: e_6.target.value
                                                }),
                                            placeholder: "Direct image URL (optional)",
                                            className: "w-full mt-1 p-3 border rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 368,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "If you paste an image URL it will be used unless you upload a new file."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 372,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 366,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 338,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setEditing(false); /* revert */ 
                                        setForm({
                                            name: user.name ?? "",
                                            displayName: user.profile?.displayName ?? "",
                                            email: user.email ?? "",
                                            phone: user.phone ?? "",
                                            avatarUrl: user.profile?.avatarUrl ?? "",
                                            bio: user.profile?.bio ?? "",
                                            country: user.profile?.country ?? "",
                                            region: user.profile?.region ?? "",
                                            postalCode: user.profile?.postalCode ?? user.profile?.postal_code ?? "",
                                            language: user.profile?.language ?? "",
                                            district: user.profile?.district ?? ""
                                        });
                                        setCroppedBlobUrl(null);
                                        setRawFile(null);
                                    },
                                    className: "px-4 py-2 border rounded-lg",
                                    disabled: saving,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 378,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: saving,
                                    className: "px-4 py-2 bg-emerald-600 text-white rounded-lg",
                                    children: saving ? "Saving…" : "Save profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 398,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 377,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                    lineNumber: 251,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 202,
                columnNumber: 5
            }, this),
            cropOpen && rawFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageCropper, {
                file: rawFile,
                onCancel: ()=>{
                    setCropOpen(false);
                    setRawFile(null);
                },
                onCropped: (url)=>{
                    setCroppedBlobUrl(url);
                    setCropOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 404,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/ProfileForm.tsx",
        lineNumber: 143,
        columnNumber: 10
    }, this);
}
_s(ProfileForm, "hNmCT7/Kn9GNHJRsW3jX3e0KJ7s=");
_c = ProfileForm;
function FloatingInput(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "ab0177749cffc480d2fe2c7a31dc0ecccef34298e6a9737345c6d7d57f8b6e67") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ab0177749cffc480d2fe2c7a31dc0ecccef34298e6a9737345c6d7d57f8b6e67";
    }
    const { label, value, onChange, required } = t0;
    const t1 = `pointer-events-none -translate-y-3 absolute left-3 top-2 text-xs transition-all ${value ? "-translate-y-4 text-indigo-600" : "text-slate-500"}`;
    const t2 = required ? " *" : "";
    let t3;
    if ($[1] !== label || $[2] !== t1 || $[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: [
                label,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 431,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== onChange) {
        t4 = ({
            "FloatingInput[<input>.onChange]": (e)=>onChange(e.target.value)
        })["FloatingInput[<input>.onChange]"];
        $[5] = onChange;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4 || $[8] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: value,
            onChange: t4,
            className: "w-full mt-4 p-3 pt-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 451,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = value;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "relative block",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 460,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c1 = FloatingInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileForm");
__turbopack_context__.k.register(_c1, "FloatingInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/PasswordModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PasswordModal({ open, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("verify");
    const [verifying, setVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [oldPassword, setOldPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rePassword, setRePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showNew, setShowNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRe, setShowRe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PasswordModal.useEffect": ()=>{
            if (!open) {
                setTimeout({
                    "PasswordModal.useEffect": ()=>{
                        setStep("verify");
                        setOldPassword("");
                        setNewPassword("");
                        setRePassword("");
                        setErrors([]);
                    }
                }["PasswordModal.useEffect"], 200);
            }
        }
    }["PasswordModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    async function handleVerify() {
        setVerifying(true);
        try {
            const res = await fetch("/api/auth/verify-old-password", {
                method: "POST",
                body: JSON.stringify({
                    password: oldPassword
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const j = await res.json().catch(()=>({
                    ok: false
                }));
            if (j.ok) {
                setStep("change");
            } else {
                alert(j.error || "Verification failed");
            }
        } catch (err) {
            console.error(err);
            alert("Unexpected error verifying password");
        } finally{
            setVerifying(false);
        }
    }
    function validatePassword(pw) {
        const errs = [];
        if (pw.length < 8) errs.push("At least 8 characters");
        if (!/[A-Z]/.test(pw)) errs.push("One uppercase letter");
        if (!/[a-z]/.test(pw)) errs.push("One lowercase letter");
        if (!/[0-9]/.test(pw)) errs.push("One number");
        if (!/[^A-Za-z0-9]/.test(pw)) errs.push("One special character");
        return errs;
    }
    async function handleChange() {
        setErrors([]);
        const errs_0 = validatePassword(newPassword);
        if (errs_0.length) return setErrors(errs_0);
        if (newPassword !== rePassword) return setErrors([
            "Passwords do not match"
        ]);
        setSaving(true);
        try {
            const res_0 = await fetch("/api/auth/change-password", {
                method: "POST",
                body: JSON.stringify({
                    newPassword
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const j_0 = await res_0.json().catch(()=>({
                    ok: false
                }));
            if (j_0.ok) {
                alert("Password changed");
                onClose();
            } else {
                alert(j_0.error || "Failed to change password");
            }
        } catch (err_0) {
            console.error(err_0);
            alert("Unexpected error");
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-60 flex items-center justify-center bg-black/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-[92%] max-w-xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Change password"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-500",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, this),
                step === "verify" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: "To change your password, verify your current password first."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 109,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-500",
                                    children: "Current password"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: oldPassword,
                                    onChange: (e)=>setOldPassword(e.target.value),
                                    className: "w-full mt-1 p-3 border rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 110,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-3 py-2 border rounded",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleVerify,
                                    disabled: verifying,
                                    className: "px-3 py-2 bg-indigo-600 text-white rounded",
                                    children: verifying ? "Verifying…" : "Verify"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                    lineNumber: 108,
                    columnNumber: 28
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: "Enter a strong new password. It will be hidden after saving."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-500",
                                    children: "New password"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showNew ? "text" : "password",
                                            value: newPassword,
                                            onChange: (e_0)=>setNewPassword(e_0.target.value),
                                            className: "w-full mt-1 p-3 border rounded-lg pr-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowNew(!showNew),
                                            className: "absolute right-2 top-3 text-sm",
                                            children: showNew ? 'Hide' : 'Show'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 124,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-500",
                                    children: "Re-enter new password"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showRe ? "text" : "password",
                                            value: rePassword,
                                            onChange: (e_1)=>setRePassword(e_1.target.value),
                                            className: "w-full mt-1 p-3 border rounded-lg pr-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowRe(!showRe),
                                            className: "absolute right-2 top-3 text-sm",
                                            children: showRe ? 'Hide' : 'Show'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, this),
                        errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-rose-500",
                            children: errors.map((e_2, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        "• ",
                                        e_2
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 35
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 142,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStep('verify'),
                                    className: "px-3 py-2 border rounded",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleChange,
                                    disabled: saving,
                                    className: "px-3 py-2 bg-emerald-600 text-white rounded",
                                    children: saving ? 'Saving…' : 'Save password'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/PasswordModal.tsx",
                            lineNumber: 147,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/PasswordModal.tsx",
                    lineNumber: 120,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/PasswordModal.tsx",
            lineNumber: 101,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/PasswordModal.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
_s(PasswordModal, "S6GaSXRAkz4pHQa55j/wpWL/u9s=");
_c = PasswordModal;
var _c;
__turbopack_context__.k.register(_c, "PasswordModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/account/Accountlayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ProfileForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$PasswordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/PasswordModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AccountLayout() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0ce6f83de56993d6a69a6a8626fdc1a3a8dbd82efa821c8d57e50200d4603dfe") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ce6f83de56993d6a69a6a8626fdc1a3a8dbd82efa821c8d57e50200d4603dfe";
    }
    const [showPasswordModal, setShowPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onChangePassword: {
                    "AccountLayout[<ProfileForm>.onChangePassword]": ()=>setShowPasswordModal(true)
                }["AccountLayout[<ProfileForm>.onChangePassword]"]
            }, void 0, false, {
                fileName: "[project]/src/app/account/Accountlayout.tsx",
                lineNumber: 18,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-slate-700",
                    children: "Account"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 28,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-slate-500",
                    children: "Manage your account settings and profile visibility."
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 28,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 border-t"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-3 py-2 rounded-md border",
                    children: "Security & password"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 39,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-3 py-2 rounded-md border",
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 39,
                    columnNumber: 144
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-3 py-2 rounded-md border",
                    children: "Billing"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 39,
                    columnNumber: 231
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 border-t"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "bg-white rounded-2xl p-6 shadow-md border flex flex-col gap-4",
                    children: [
                        t1,
                        t2,
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-500",
                            children: [
                                "Member since: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    id: "member-since",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                                    lineNumber: 49,
                                    columnNumber: 232
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/account/Accountlayout.tsx",
                            lineNumber: 49,
                            columnNumber: 178
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 49,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AccountLayout[<PasswordModal>.onClose]": ()=>setShowPasswordModal(false)
        })["AccountLayout[<PasswordModal>.onClose]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== showPasswordModal) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-6xl mx-auto",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$PasswordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    open: showPasswordModal,
                    onClose: t6
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 65,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[8] = showPasswordModal;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_s(AccountLayout, "yMRvdHVOO009h8/w9VO6GQeC2Ac=");
_c = AccountLayout;
var _c;
__turbopack_context__.k.register(_c, "AccountLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/account/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$account$2f$Accountlayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/account/Accountlayout.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Page() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f8ba9d10d15dd7fd601f266de10637e0deb0dea29fade8f04604237c26b829f0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8ba9d10d15dd7fd601f266de10637e0deb0dea29fade8f04604237c26b829f0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$account$2f$Accountlayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/account/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_99838bf1._.js.map