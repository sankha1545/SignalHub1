(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ui/forms/create-team/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateTeamForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CreateTeamForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(91);
    if ($[0] !== "76bb962227fbad461403958df7f7266948e99d8e8e5309797c70c3e43a2fbb26") {
        for(let $i = 0; $i < 91; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "76bb962227fbad461403958df7f7266948e99d8e8e5309797c70c3e43a2fbb26";
    }
    const { onCreate, onClose } = t0;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [featured, setFeatured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gradient, setGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("from-blue-500 to-cyan-500");
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [completion, setCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: "blue",
                label: "Blue / Cyan",
                value: "from-blue-500 to-cyan-500"
            },
            {
                id: "violet",
                label: "Violet / Purple",
                value: "from-violet-500 to-purple-500"
            },
            {
                id: "orange",
                label: "Orange / Rose",
                value: "from-orange-500 to-rose-500"
            },
            {
                id: "emerald",
                label: "Emerald / Teal",
                value: "from-emerald-500 to-teal-500"
            },
            {
                id: "cyan",
                label: "Cyan / Blue",
                value: "from-cyan-500 to-blue-500"
            },
            {
                id: "pink",
                label: "Pink / Rose",
                value: "from-pink-500 to-rose-500"
            }
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const gradientOptions = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        const getInitials = function getInitials(nameStr) {
            if (!nameStr) {
                return "";
            }
            const parts = nameStr.trim().split(/\s+/);
            if (parts.length === 1) {
                return parts[0].slice(0, 2).toUpperCase();
            }
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        };
        t3 = function addMember(name_0) {
            const trimmed = name_0.trim();
            if (!trimmed) {
                return;
            }
            setMembers({
                "CreateTeamForm[addMember > setMembers()]": (m)=>[
                        ...m,
                        {
                            name: trimmed,
                            initials: getInitials(trimmed)
                        }
                    ]
            }["CreateTeamForm[addMember > setMembers()]"]);
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const addMember = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function removeMember(idx) {
            setMembers({
                "CreateTeamForm[removeMember > setMembers()]": (m_0)=>m_0.filter({
                        "CreateTeamForm[removeMember > setMembers() > m_0.filter()]": (_, i)=>i !== idx
                    }["CreateTeamForm[removeMember > setMembers() > m_0.filter()]"])
            }["CreateTeamForm[removeMember > setMembers()]"]);
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const removeMember = t4;
    let t5;
    if ($[5] !== completion || $[6] !== description || $[7] !== featured || $[8] !== gradient || $[9] !== lead || $[10] !== members || $[11] !== name || $[12] !== onClose || $[13] !== onCreate || $[14] !== projects) {
        t5 = function handleSubmit(e) {
            e.preventDefault();
            if (!name.trim()) {
                alert("Please provide a team name.");
                return;
            }
            const parsedProjects = projects === "" ? 0 : Number(projects);
            const parsedCompletion = completion === "" ? 0 : Number(completion);
            const team = {
                id: Date.now(),
                name: name.trim(),
                description: description.trim(),
                lead: lead.trim() || undefined,
                featured,
                gradient,
                projects: parsedProjects,
                completion: Math.min(100, Math.max(0, parsedCompletion)),
                members: members.map(_CreateTeamFormHandleSubmitMembersMap)
            };
            onCreate(team);
            setName("");
            setDescription("");
            setLead("");
            setFeatured(false);
            setGradient("from-blue-500 to-cyan-500");
            setProjects("");
            setCompletion("");
            setMembers([]);
            onClose();
        };
        $[5] = completion;
        $[6] = description;
        $[7] = featured;
        $[8] = gradient;
        $[9] = lead;
        $[10] = members;
        $[11] = name;
        $[12] = onClose;
        $[13] = onCreate;
        $[14] = projects;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const handleSubmit = t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            scale: 0.98,
            y: 10
        };
        t7 = {
            opacity: 1,
            scale: 1,
            y: 0
        };
        t8 = {
            opacity: 0,
            scale: 0.98
        };
        t9 = {
            duration: 0.18
        };
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t6 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-slate-800 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                            lineNumber: 198,
                            columnNumber: 89
                        }, this),
                        "Create Team"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 198,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: "Add a new team to your workspace"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 198,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-slate-600"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== onClose) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-2 rounded-lg hover:bg-slate-100 transition-colors",
                    "aria-label": "Close create team",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 212,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[22] = onClose;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Team name"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "CreateTeamForm[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== name) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    value: name,
                    onChange: t14,
                    className: "px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    placeholder: "Product Development"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 236,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[26] = name;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Team lead"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "CreateTeamForm[<input>.onChange]": (e_1)=>setLead(e_1.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== lead) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: lead,
                    onChange: t17,
                    className: "px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",
                    placeholder: "Sarah Chen"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 260,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[30] = lead;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t15 || $[33] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "CreateTeamForm[<textarea>.onChange]": (e_2)=>setDescription(e_2.target.value)
        })["CreateTeamForm[<textarea>.onChange]"];
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== description) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t21,
                    rows: 3,
                    placeholder: "Short description...",
                    className: "px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500/10"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 293,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[37] = description;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "CreateTeamForm[<input>.onChange]": (e_3)=>setProjects(e_3.target.value === "" ? "" : Number(e_3.target.value))
        })["CreateTeamForm[<input>.onChange]"];
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] !== projects) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    min: 0,
                    value: projects,
                    onChange: t24,
                    className: "px-3 py-3 rounded-xl border border-slate-200",
                    placeholder: "0"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 317,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[41] = projects;
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Completion (%)"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "CreateTeamForm[<input>.onChange]": (e_4)=>setCompletion(e_4.target.value === "" ? "" : Number(e_4.target.value))
        })["CreateTeamForm[<input>.onChange]"];
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] !== completion) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    min: 0,
                    max: 100,
                    value: completion,
                    onChange: t27,
                    className: "px-3 py-3 rounded-xl border border-slate-200",
                    placeholder: "0"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 341,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[45] = completion;
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    let t29;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "CreateTeamForm[<input>.onChange]": ()=>setFeatured(_CreateTeamFormInputOnChangeSetFeatured)
        })["CreateTeamForm[<input>.onChange]"];
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== featured) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "featured",
            type: "checkbox",
            checked: featured,
            onChange: t29,
            className: "w-4 h-4 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[48] = featured;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-slate-700",
            children: "Featured"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-slate-500 flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                            lineNumber: 373,
                            columnNumber: 112
                        }, this),
                        "Highlight in the UI"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 373,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t30) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-3",
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[52] = t30;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== t25 || $[55] !== t28 || $[56] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3 items-end",
            children: [
                t25,
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t28;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-2 block",
            children: "Accent gradient"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] !== gradient) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: gradientOptions.map({
                        "CreateTeamForm[gradientOptions.map()]": (g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CreateTeamForm[gradientOptions.map() > <button>.onClick]": ()=>setGradient(g.value)
                                }["CreateTeamForm[gradientOptions.map() > <button>.onClick]"],
                                className: `flex items-center gap-2 px-3 py-2 rounded-xl border ${g.value === gradient ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 rounded-lg bg-gradient-to-br ${g.value}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 226
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-700",
                                        children: g.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 295
                                    }, this)
                                ]
                            }, g.id, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 406,
                                columnNumber: 57
                            }, this)
                    }["CreateTeamForm[gradientOptions.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 405,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[59] = gradient;
        $[60] = t36;
    } else {
        t36 = $[60];
    }
    let t37;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-medium text-slate-600",
                    children: "Members"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 417,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: "Add team members (name only)"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 417,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[61] = t37;
    } else {
        t37 = $[61];
    }
    let t38;
    if ($[62] !== members.length) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-400",
                    children: [
                        members.length,
                        " added"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                    lineNumber: 424,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[62] = members.length;
        $[63] = t38;
    } else {
        t38 = $[63];
    }
    let t39;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberInput, {
            onAdd: {
                "CreateTeamForm[<MemberInput>.onAdd]": (nameVal)=>addMember(nameVal)
            }["CreateTeamForm[<MemberInput>.onAdd]"]
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[64] = t39;
    } else {
        t39 = $[64];
    }
    let t40;
    if ($[65] !== members) {
        let t41;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = ({
                "CreateTeamForm[members.map()]": (m_2, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700",
                                children: m_2.initials
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 444,
                                columnNumber: 181
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-700",
                                children: m_2.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 444,
                                columnNumber: 355
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CreateTeamForm[members.map() > <button>.onClick]": ()=>removeMember(i_0)
                                }["CreateTeamForm[members.map() > <button>.onClick]"],
                                className: "ml-2 p-1 rounded-md hover:bg-slate-100",
                                "aria-label": `Remove ${m_2.name}`,
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 444,
                                columnNumber: 411
                            }, this)
                        ]
                    }, `${m_2.name}-${i_0}`, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 444,
                        columnNumber: 56
                    }, this)
            })["CreateTeamForm[members.map()]"];
            $[67] = t41;
        } else {
            t41 = $[67];
        }
        t40 = members.map(t41);
        $[65] = members;
        $[66] = t40;
    } else {
        t40 = $[66];
    }
    let t41;
    if ($[68] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex flex-wrap gap-2",
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[68] = t40;
        $[69] = t41;
    } else {
        t41 = $[69];
    }
    let t42;
    if ($[70] !== t38 || $[71] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t38,
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[70] = t38;
        $[71] = t41;
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    let t43;
    if ($[73] !== onClose) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[73] = onClose;
        $[74] = t43;
    } else {
        t43 = $[74];
    }
    let t44;
    let t45;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = {
            scale: 1.02
        };
        t45 = {
            scale: 0.98
        };
        $[75] = t44;
        $[76] = t45;
    } else {
        t44 = $[75];
        t45 = $[76];
    }
    let t46;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t44,
            whileTap: t45,
            type: "submit",
            className: "px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 500,
                        columnNumber: 225
                    }, this),
                    "Create Team"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                lineNumber: 500,
                columnNumber: 184
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[77] = t46;
    } else {
        t46 = $[77];
    }
    let t47;
    if ($[78] !== t43) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 justify-end pt-2",
            children: [
                t43,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[78] = t43;
        $[79] = t47;
    } else {
        t47 = $[79];
    }
    let t48;
    if ($[80] !== handleSubmit || $[81] !== t19 || $[82] !== t22 || $[83] !== t34 || $[84] !== t36 || $[85] !== t42 || $[86] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t19,
                t22,
                t34,
                t36,
                t42,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[80] = handleSubmit;
        $[81] = t19;
        $[82] = t22;
        $[83] = t34;
        $[84] = t36;
        $[85] = t42;
        $[86] = t47;
        $[87] = t48;
    } else {
        t48 = $[87];
    }
    let t49;
    if ($[88] !== t12 || $[89] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t6,
            animate: t7,
            exit: t8,
            transition: t9,
            className: "w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl p-6",
            role: "dialog",
            "aria-modal": "true",
            children: [
                t12,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[88] = t12;
        $[89] = t48;
        $[90] = t49;
    } else {
        t49 = $[90];
    }
    return t49;
}
_s(CreateTeamForm, "hpbxwTm3Q8Oic025iJQqLBb0ULI=");
_c = CreateTeamForm;
/** Small member input subcomponent to add a single member quickly */ function _CreateTeamFormInputOnChangeSetFeatured(f) {
    return !f;
}
function _CreateTeamFormHandleSubmitMembersMap(m_1) {
    return {
        name: m_1.name,
        initials: m_1.initials
    };
}
function MemberInput(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "76bb962227fbad461403958df7f7266948e99d8e8e5309797c70c3e43a2fbb26") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "76bb962227fbad461403958df7f7266948e99d8e8e5309797c70c3e43a2fbb26";
    }
    const { onAdd } = t0;
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MemberInput[<input>.onChange]": (e)=>setVal(e.target.value)
        })["MemberInput[<input>.onChange]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onAdd || $[3] !== val) {
        t2 = ({
            "MemberInput[<input>.onKeyDown]": (e_0)=>{
                if (e_0.key === "Enter") {
                    e_0.preventDefault();
                    if (val.trim()) {
                        onAdd(val.trim());
                        setVal("");
                    }
                }
            }
        })["MemberInput[<input>.onKeyDown]"];
        $[2] = onAdd;
        $[3] = val;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2 || $[6] !== val) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: val,
            onChange: t1,
            onKeyDown: t2,
            placeholder: "Type a member name and press Enter",
            className: "flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 591,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = val;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== onAdd || $[9] !== val) {
        t4 = ({
            "MemberInput[<button>.onClick]": ()=>{
                if (val.trim()) {
                    onAdd(val.trim());
                    setVal("");
                }
            }
        })["MemberInput[<button>.onClick]"];
        $[8] = onAdd;
        $[9] = val;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 616,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t4,
            className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 623,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t3 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
            lineNumber: 631,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_s1(MemberInput, "DDHohWsDXsoC/4ZQxLn+W/UY504=");
_c1 = MemberInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "CreateTeamForm");
__turbopack_context__.k.register(_c1, "MemberInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ui/forms/schedule-meeting/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScheduleMeetingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ScheduleMeetingForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "80b133fd925b466828259b8e88d2aba6b0f9f11d5c9a91b86e1b3f82ee54c919") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80b133fd925b466828259b8e88d2aba6b0f9f11d5c9a91b86e1b3f82ee54c919";
    }
    const { team, onClose, onSchedule } = t0;
    const [organizer, setOrganizer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [meetingTime, setMeetingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_ScheduleMeetingFormUseState);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            10,
            20,
            30,
            40,
            50,
            60
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const reminderOptions = t1;
    const [reminderBefore, setReminderBefore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    let t2;
    if ($[2] !== meetingTime || $[3] !== reminderBefore) {
        bb0: {
            if (!meetingTime) {
                t2 = null;
                break bb0;
            }
            const dt = new Date(meetingTime);
            if (Number.isNaN(dt.getTime())) {
                t2 = null;
                break bb0;
            }
            const t3 = dt.getTime() - reminderBefore * 60 * 1000;
            let t4;
            if ($[5] !== t3) {
                t4 = new Date(t3);
                $[5] = t3;
                $[6] = t4;
            } else {
                t4 = $[6];
            }
            const invite = t4;
            t2 = invite;
        }
        $[2] = meetingTime;
        $[3] = reminderBefore;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const inviteTime = t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = function formatToIST(date) {
            if (!date) {
                return "";
            }
            ;
            try {
                return date.toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                });
            } catch (t4) {
                return date.toLocaleString();
            }
        };
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const formatToIST = t3;
    let t4;
    if ($[8] !== inviteTime || $[9] !== meetingTime || $[10] !== onSchedule || $[11] !== organizer || $[12] !== reminderBefore || $[13] !== team?.id || $[14] !== team?.members || $[15] !== team?.name) {
        t4 = function handleSubmit(e_0) {
            e_0.preventDefault();
            if (!organizer.trim()) {
                alert("Please enter the meeting organizer's name.");
                return;
            }
            if (!meetingTime) {
                alert("Please pick a meeting time.");
                return;
            }
            if (!inviteTime) {
                alert("Invalid meeting time.");
                return;
            }
            const meeting = {
                teamId: team?.id,
                teamName: team?.name,
                organizer: organizer.trim(),
                meetingTimeISO: new Date(meetingTime).toISOString(),
                reminderBeforeMinutes: reminderBefore,
                inviteTimeISO: inviteTime.toISOString(),
                invitees: (team?.members || []).map(_ScheduleMeetingFormHandleSubmitAnonymous)
            };
            onSchedule(meeting);
        };
        $[8] = inviteTime;
        $[9] = meetingTime;
        $[10] = onSchedule;
        $[11] = organizer;
        $[12] = reminderBefore;
        $[13] = team?.id;
        $[14] = team?.members;
        $[15] = team?.name;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const handleSubmit = t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            scale: 0.98,
            y: 8
        };
        t6 = {
            opacity: 1,
            scale: 1,
            y: 0
        };
        t7 = {
            opacity: 0,
            scale: 0.98
        };
        t8 = {
            duration: 0.16
        };
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t5 = $[17];
        t6 = $[18];
        t7 = $[19];
        t8 = $[20];
    }
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-slate-800 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 183,
                    columnNumber: 83
                }, this),
                "Schedule Meeting"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const t10 = team?.name;
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: [
                        "Invite all members of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-slate-700",
                            children: t10
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                            lineNumber: 191,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 191,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-slate-600"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-2 rounded-lg hover:bg-slate-100 transition-colors",
            "aria-label": "Close schedule meeting",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[25] = onClose;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t11 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Meeting Organizer"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "ScheduleMeetingForm[<input>.onChange]": (e_1)=>setOrganizer(e_1.target.value)
        })["ScheduleMeetingForm[<input>.onChange]"];
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== organizer) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: organizer,
                            onChange: t17,
                            placeholder: "Organizer name (e.g., Sarah Chen)",
                            className: "flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                            lineNumber: 246,
                            columnNumber: 95
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 246,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[33] = organizer;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-1",
            children: "Meeting time"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    let t21;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "ScheduleMeetingForm[<input>.onChange]": (e_2)=>setMeetingTime(e_2.target.value)
        })["ScheduleMeetingForm[<input>.onChange]"];
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== meetingTime) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "datetime-local",
                    value: meetingTime,
                    onChange: t21,
                    className: "flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 277,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[38] = meetingTime;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-1",
            children: "Time shown & calculated in your browser's local timezone. Invite times are displayed in IST below."
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t19,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[41] = t22;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-slate-600 mb-2 block",
            children: "Reminder before"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== reminderBefore) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: reminderOptions.map({
                        "ScheduleMeetingForm[reminderOptions.map()]": (mins)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "ScheduleMeetingForm[reminderOptions.map() > <button>.onClick]": ()=>setReminderBefore(mins)
                                }["ScheduleMeetingForm[reminderOptions.map() > <button>.onClick]"],
                                className: `px-3 py-2 rounded-xl border ${mins === reminderBefore ? "border-emerald-500 ring-2 ring-emerald-200" : "border-slate-200"}`,
                                children: [
                                    mins,
                                    " mins"
                                ]
                            }, mins, true, {
                                fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                                lineNumber: 308,
                                columnNumber: 65
                            }, this)
                    }["ScheduleMeetingForm[reminderOptions.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 307,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[44] = reminderBefore;
        $[45] = t26;
    } else {
        t26 = $[45];
    }
    let t27;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-slate-800",
            children: "Invite time:"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== inviteTime || $[48] !== reminderBefore) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600",
            children: [
                t27,
                " ",
                inviteTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        formatToIST(inviteTime),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-400",
                            children: [
                                "(",
                                reminderBefore,
                                " min before meeting)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                            lineNumber: 326,
                            columnNumber: 105
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400",
                    children: "Pick a meeting time"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 326,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[47] = inviteTime;
        $[48] = reminderBefore;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-1",
            children: "Invitations will be sent to the team's members at this time (local IST shown)."
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 rounded-lg bg-slate-50 border border-slate-100",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-medium text-slate-600",
                    children: "Invitees"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 350,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: "Team members who will receive the invite"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 350,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] !== team?.members) {
        t32 = team?.members || [];
        $[54] = team?.members;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] !== t32.length) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-400",
                    children: [
                        t32.length,
                        " members"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 365,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[56] = t32.length;
        $[57] = t33;
    } else {
        t33 = $[57];
    }
    let t34;
    if ($[58] !== team?.members) {
        t34 = team?.members || [];
        $[58] = team?.members;
        $[59] = t34;
    } else {
        t34 = $[59];
    }
    let t35;
    if ($[60] !== t34) {
        t35 = t34.map(_ScheduleMeetingFormAnonymous);
        $[60] = t34;
        $[61] = t35;
    } else {
        t35 = $[61];
    }
    let t36;
    if ($[62] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[62] = t35;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] !== t33 || $[65] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[64] = t33;
        $[65] = t36;
        $[66] = t37;
    } else {
        t37 = $[66];
    }
    let t38;
    if ($[67] !== onClose) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[67] = onClose;
        $[68] = t38;
    } else {
        t38 = $[68];
    }
    let t39;
    let t40;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            scale: 1.02
        };
        t40 = {
            scale: 0.98
        };
        $[69] = t39;
        $[70] = t40;
    } else {
        t39 = $[69];
        t40 = $[70];
    }
    let t41;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t39,
            whileTap: t40,
            type: "submit",
            className: "px-5 py-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl font-medium shadow-md flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                    lineNumber: 429,
                    columnNumber: 211
                }, this),
                "Schedule & Invite"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[71] = t41;
    } else {
        t41 = $[71];
    }
    let t42;
    if ($[72] !== t38) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 justify-end pt-2",
            children: [
                t38,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[72] = t38;
        $[73] = t42;
    } else {
        t42 = $[73];
    }
    let t43;
    if ($[74] !== handleSubmit || $[75] !== t18 || $[76] !== t24 || $[77] !== t26 || $[78] !== t30 || $[79] !== t37 || $[80] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t18,
                t24,
                t26,
                t30,
                t37,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[74] = handleSubmit;
        $[75] = t18;
        $[76] = t24;
        $[77] = t26;
        $[78] = t30;
        $[79] = t37;
        $[80] = t42;
        $[81] = t43;
    } else {
        t43 = $[81];
    }
    let t44;
    if ($[82] !== t14 || $[83] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t5,
            animate: t6,
            exit: t7,
            transition: t8,
            className: "w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl p-6",
            role: "dialog",
            "aria-modal": "true",
            children: [
                t14,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[82] = t14;
        $[83] = t43;
        $[84] = t44;
    } else {
        t44 = $[84];
    }
    return t44;
}
_s(ScheduleMeetingForm, "1a7SkMzEk+ld6knKkjpqn6Ccq8o=");
_c = ScheduleMeetingForm;
function _ScheduleMeetingFormAnonymous(m_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 bg-white border border-slate-100 px-3 py-2 rounded-xl shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700",
                children: m_0.initials ?? (m_0.name ? m_0.name.split(" ").map(_ScheduleMeetingFormAnonymousAnonymous).join("").slice(0, 2).toUpperCase() : "")
            }, void 0, false, {
                fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                lineNumber: 468,
                columnNumber: 140
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-700",
                children: m_0.name
            }, void 0, false, {
                fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
                lineNumber: 468,
                columnNumber: 434
            }, this)
        ]
    }, `${m_0.name}-${i}`, true, {
        fileName: "[project]/src/app/ui/forms/schedule-meeting/page.tsx",
        lineNumber: 468,
        columnNumber: 10
    }, this);
}
function _ScheduleMeetingFormAnonymousAnonymous(p) {
    return p[0];
}
function _ScheduleMeetingFormHandleSubmitAnonymous(m) {
    return {
        name: m.name,
        initials: m.initials
    };
}
function _ScheduleMeetingFormUseState() {
    const d = new Date();
    d.setMinutes(0, 0, 0);
    d.setHours(d.getHours() + 1);
    const pad = _ScheduleMeetingFormUseStatePad;
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const min = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}
function _ScheduleMeetingFormUseStatePad(n) {
    return n < 10 ? `0${n}` : `${n}`;
}
var _c;
__turbopack_context__.k.register(_c, "ScheduleMeetingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/admin/teams/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$create$2d$team$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/forms/create-team/page.tsx [app-client] (ecmascript)"); // adjust path if needed
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$schedule$2d$meeting$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/forms/schedule-meeting/page.tsx [app-client] (ecmascript)"); // new schedule meeting form
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
 * Team Card Component
 * Replaced Message button with Schedule Meeting button.
 */ const TeamCard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(86);
    if ($[0] !== "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c") {
        for(let $i = 0; $i < 86; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c";
    }
    const { team, delay, onOpenSchedule } = t0;
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 20
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== delay) {
        t3 = {
            duration: 0.4,
            delay
        };
        $[3] = delay;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>setIsHovered(true);
        t5 = ()=>setIsHovered(false);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = `w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient} flex items-center justify-center shadow-lg`;
    let t8;
    if ($[8] !== isHovered) {
        t8 = isHovered ? {
            scale: 1.05,
            rotate: 5
        } : {
            scale: 1,
            rotate: 0
        };
        $[8] = isHovered;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            duration: 0.3
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-7 h-7 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== t7 || $[13] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t7,
            animate: t8,
            transition: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== team.name) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-slate-800 mb-1",
            children: team.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = team.name;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== team.description) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500",
            children: team.description
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = team.description;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t12 || $[20] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t11 || $[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t11;
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 hover:bg-slate-100 rounded-lg transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-5 h-5 text-slate-400"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 147,
                columnNumber: 83
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== team.lead) {
        t18 = team.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 162,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0)),
                team.lead
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 162,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = team.lead;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== team.featured) {
        t19 = team.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 170,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0)),
                "Featured"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 170,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = team.featured;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2 mb-4",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t18;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== delay || $[36] !== team.members) {
        let t22;
        if ($[38] !== delay) {
            t22 = (member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        duration: 0.2,
                        delay: delay + idx * 0.05
                    },
                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm",
                    title: member.name,
                    children: member.initials
                }, `${member.name ?? member.initials}-${idx}`, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 189,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0));
            $[38] = delay;
            $[39] = t22;
        } else {
            t22 = $[39];
        }
        t21 = team.members.slice(0, 5).map(t22);
        $[35] = delay;
        $[36] = team.members;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[40] !== team.members.length) {
        t22 = team.members.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600",
            children: [
                "+",
                team.members.length - 5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 211,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = team.members.length;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t21 || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex -space-x-2 mb-4 flex-wrap",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t21;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== team.members.length) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: team.members.length
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = team.members.length;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Members"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t24;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== team.projects) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: team.projects
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = team.projects;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t27;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] !== team.completion) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-emerald-600",
            children: [
                team.completion,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = team.completion;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Complete"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    let t32;
    if ($[58] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t30;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t26 || $[61] !== t29 || $[62] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 mb-4 text-center",
            children: [
                t26,
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t26;
        $[61] = t29;
        $[62] = t32;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] !== onOpenSchedule || $[65] !== team) {
        t34 = ()=>onOpenSchedule(team);
        $[64] = onOpenSchedule;
        $[65] = team;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    let t36;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            scale: 1.02
        };
        t36 = {
            scale: 0.98
        };
        $[67] = t35;
        $[68] = t36;
    } else {
        t35 = $[67];
        t36 = $[68];
    }
    let t37;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] !== t34) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t34,
            whileHover: t35,
            whileTap: t36,
            className: "flex-1 px-4 py-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2",
            title: "Schedule meeting with this team",
            children: [
                t37,
                "Schedule Meeting"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t34;
        $[71] = t38;
    } else {
        t38 = $[71];
    }
    let t39;
    let t40;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            scale: 1.05
        };
        t40 = {
            scale: 0.95
        };
        $[72] = t39;
        $[73] = t40;
    } else {
        t39 = $[72];
        t40 = $[73];
    }
    let t41;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t39,
            whileTap: t40,
            className: "px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-200 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 361,
                columnNumber: 201
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t41;
    } else {
        t41 = $[74];
    }
    let t42;
    if ($[75] !== t38) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-2",
            children: [
                t38,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t38;
        $[76] = t42;
    } else {
        t42 = $[76];
    }
    let t43;
    if ($[77] !== t17 || $[78] !== t20 || $[79] !== t23 || $[80] !== t33 || $[81] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t17,
                t20,
                t23,
                t33,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t17;
        $[78] = t20;
        $[79] = t23;
        $[80] = t33;
        $[81] = t42;
        $[82] = t43;
    } else {
        t43 = $[82];
    }
    let t44;
    if ($[83] !== t3 || $[84] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            onMouseEnter: t4,
            onMouseLeave: t5,
            className: "relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden",
            children: [
                t6,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t3;
        $[84] = t43;
        $[85] = t44;
    } else {
        t44 = $[85];
    }
    return t44;
};
_s(TeamCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = TeamCard;
/* StatCard component kept as-is */ const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c";
    }
    const { icon: Icon, label, value, subtitle, gradient, delay } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            scale: 0.95
        };
        t2 = {
            opacity: 1,
            scale: 1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== delay) {
        t3 = {
            duration: 0.3,
            delay
        };
        $[3] = delay;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`;
    let t5;
    if ($[5] !== Icon) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 446,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = Icon;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 454,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-5 h-5 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 463,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 470,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== value) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-bold text-slate-800 mb-1",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 478,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = value;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== label) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-slate-600 mb-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = label;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== subtitle) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = subtitle;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t3 || $[22] !== t8 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            className: "p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
        $[21] = t3;
        $[22] = t8;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
};
_c1 = StatCard;
function TeamsPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "802372b865ffc7cb06e3284923d7f86c7eb4ccf8db6809ceafe4c4e26f070e8c";
    }
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSchedule, setShowSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTeamForSchedule, setSelectedTeamForSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            id: 1,
            name: "Product Development",
            description: "Building the next generation platform",
            lead: "Sarah Chen",
            featured: true,
            gradient: "from-blue-500 to-cyan-500",
            projects: 8,
            completion: 92,
            members: [
                {
                    name: "Sarah Chen",
                    initials: "SC"
                },
                {
                    name: "Mike Ross",
                    initials: "MR"
                },
                {
                    name: "Emma Wilson",
                    initials: "EW"
                },
                {
                    name: "John Doe",
                    initials: "JD"
                },
                {
                    name: "Lisa Park",
                    initials: "LP"
                },
                {
                    name: "Alex Kim",
                    initials: "AK"
                }
            ]
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: 2,
            name: "Design Team",
            description: "Creating beautiful user experiences",
            lead: "Emily Rodriguez",
            featured: true,
            gradient: "from-violet-500 to-purple-500",
            projects: 12,
            completion: 88,
            members: [
                {
                    name: "Emily Rodriguez",
                    initials: "ER"
                },
                {
                    name: "David Lee",
                    initials: "DL"
                },
                {
                    name: "Sophie Turner",
                    initials: "ST"
                },
                {
                    name: "James Wilson",
                    initials: "JW"
                }
            ]
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: 3,
            name: "Marketing",
            description: "Growing our brand and reach",
            lead: "Michael Brown",
            featured: false,
            gradient: "from-orange-500 to-rose-500",
            projects: 15,
            completion: 95,
            members: [
                {
                    name: "Michael Brown",
                    initials: "MB"
                },
                {
                    name: "Anna Taylor",
                    initials: "AT"
                },
                {
                    name: "Chris Martin",
                    initials: "CM"
                },
                {
                    name: "Rachel Green",
                    initials: "RG"
                },
                {
                    name: "Tom Hardy",
                    initials: "TH"
                }
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            id: 4,
            name: "Customer Success",
            description: "Ensuring customer satisfaction",
            lead: "Jennifer Lopez",
            featured: false,
            gradient: "from-emerald-500 to-teal-500",
            projects: 6,
            completion: 90,
            members: [
                {
                    name: "Jennifer Lopez",
                    initials: "JL"
                },
                {
                    name: "Robert Brown",
                    initials: "RB"
                },
                {
                    name: "Maria Garcia",
                    initials: "MG"
                }
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            id: 5,
            name: "Engineering",
            description: "Building scalable infrastructure",
            lead: "Alex Thompson",
            featured: true,
            gradient: "from-cyan-500 to-blue-500",
            projects: 10,
            completion: 87,
            members: [
                {
                    name: "Alex Thompson",
                    initials: "AT"
                },
                {
                    name: "Kevin Zhang",
                    initials: "KZ"
                },
                {
                    name: "Nina Patel",
                    initials: "NP"
                },
                {
                    name: "Oscar Lee",
                    initials: "OL"
                },
                {
                    name: "Paula White",
                    initials: "PW"
                },
                {
                    name: "Quinn Davis",
                    initials: "QD"
                }
            ]
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            t0,
            t1,
            t2,
            t3,
            t4,
            {
                id: 6,
                name: "Sales",
                description: "Driving revenue growth",
                lead: "Daniel Kim",
                featured: false,
                gradient: "from-pink-500 to-rose-500",
                projects: 20,
                completion: 93,
                members: [
                    {
                        name: "Daniel Kim",
                        initials: "DK"
                    },
                    {
                        name: "Samantha Cole",
                        initials: "SC"
                    },
                    {
                        name: "Tyler Adams",
                        initials: "TA"
                    },
                    {
                        name: "Uma Singh",
                        initials: "US"
                    }
                ]
            }
        ];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[7] !== searchQuery) {
        t6 = ({
            "TeamsPage[teams.filter()]": (team)=>team.name.toLowerCase().includes(searchQuery.toLowerCase()) || team.description.toLowerCase().includes(searchQuery.toLowerCase())
        })["TeamsPage[teams.filter()]"];
        $[7] = searchQuery;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const filteredTeams = teams.filter(t6);
    let t7;
    if ($[9] !== teams.length) {
        t7 = teams.length.toString();
        $[9] = teams.length;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Total Teams",
            value: t7,
            subtitle: "+2 this month",
            gradient: "from-blue-500 to-cyan-500"
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== teams) {
        t9 = teams.reduce(_TeamsPageTeamsReduce, 0).toString();
        $[13] = teams;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            label: "Active Members",
            value: t9,
            subtitle: "Across all teams",
            gradient: "from-emerald-500 to-teal-500"
        };
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== teams) {
        t11 = teams.reduce(_TeamsPageTeamsReduce2, 0).toString();
        $[17] = teams;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11) {
        t12 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            label: "Active Projects",
            value: t11,
            subtitle: "In progress",
            gradient: "from-violet-500 to-purple-500"
        };
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    const t13 = Math.round(teams.reduce(_TeamsPageTeamsReduce3, 0) / teams.length) + "%";
    let t14;
    if ($[21] !== t13) {
        t14 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            label: "Avg Completion",
            value: t13,
            subtitle: "+5% from last month",
            gradient: "from-orange-500 to-rose-500"
        };
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t10 || $[24] !== t12 || $[25] !== t14 || $[26] !== t8) {
        t15 = [
            t8,
            t10,
            t12,
            t14
        ];
        $[23] = t10;
        $[24] = t12;
        $[25] = t14;
        $[26] = t8;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    const stats = t15;
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        const ensureInitials = function ensureInitials(members) {
            return members.map(_TeamsPageEnsureInitialsMembersMap);
        };
        t16 = function handleCreateTeam(newTeam) {
            const teamWithInitials = {
                ...newTeam,
                id: newTeam.id ?? Date.now(),
                members: ensureInitials(newTeam.members || [])
            };
            setTeams({
                "TeamsPage[handleCreateTeam > setTeams()]": (prev)=>[
                        teamWithInitials,
                        ...prev
                    ]
            }["TeamsPage[handleCreateTeam > setTeams()]"]);
            setShowCreate(false);
        };
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    const handleCreateTeam = t16;
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = [];
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    const [, setScheduledMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t17);
    let t18;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = function handleScheduleMeeting(meeting) {
            const toSave = {
                ...meeting,
                id: Date.now()
            };
            setScheduledMeetings({
                "TeamsPage[handleScheduleMeeting > setScheduledMeetings()]": (prev_0)=>[
                        toSave,
                        ...prev_0
                    ]
            }["TeamsPage[handleScheduleMeeting > setScheduledMeetings()]"]);
            console.log("Scheduled meeting:", toSave);
            setShowSchedule(false);
            setSelectedTeamForSchedule(null);
        };
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    const handleScheduleMeeting = t18;
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = function openScheduleForTeam(team_0) {
            setSelectedTeamForSchedule(team_0);
            setShowSchedule(true);
        };
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    const openScheduleForTeam = t19;
    const t20 = "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8";
    const t21 = "max-w-7xl mx-auto";
    let t22;
    let t23;
    let t24;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            opacity: 0,
            y: -20
        };
        t23 = {
            opacity: 1,
            y: 0
        };
        t24 = {
            duration: 0.5
        };
        $[32] = t22;
        $[33] = t23;
        $[34] = t24;
    } else {
        t22 = $[32];
        t23 = $[33];
        t24 = $[34];
    }
    let t25;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2",
            children: "Teams"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t22,
            animate: t23,
            transition: t24,
            className: "mb-6",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 912,
                            columnNumber: 144
                        }, this),
                        "Manage and collaborate with your teams"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 912,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 912,
            columnNumber: 11
        }, this);
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== stats) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8",
            children: stats.map(_TeamsPageStatsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 919,
            columnNumber: 11
        }, this);
        $[37] = stats;
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    let t29;
    let t30;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            opacity: 0,
            y: 20
        };
        t29 = {
            opacity: 1,
            y: 0
        };
        t30 = {
            duration: 0.4,
            delay: 0.2
        };
        $[39] = t28;
        $[40] = t29;
        $[41] = t30;
    } else {
        t28 = $[39];
        t29 = $[40];
        t30 = $[41];
    }
    let t31;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 951,
            columnNumber: 11
        }, this);
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    let t32;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "TeamsPage[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["TeamsPage[<input>.onChange]"];
        $[43] = t32;
    } else {
        t32 = $[43];
    }
    let t33;
    if ($[44] !== searchQuery) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search teams...",
                    value: searchQuery,
                    onChange: t32,
                    className: "w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 967,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 967,
            columnNumber: 11
        }, this);
        $[44] = searchQuery;
        $[45] = t33;
    } else {
        t33 = $[45];
    }
    let t34;
    let t35;
    let t36;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "TeamsPage[<motion.button>.onClick]": ()=>setShowCreate(true)
        })["TeamsPage[<motion.button>.onClick]"];
        t35 = {
            scale: 1.02
        };
        t36 = {
            scale: 0.98
        };
        $[46] = t34;
        $[47] = t35;
        $[48] = t36;
    } else {
        t34 = $[46];
        t35 = $[47];
        t36 = $[48];
    }
    let t37;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t34,
            whileHover: t35,
            whileTap: t36,
            className: "px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 996,
                    columnNumber: 291
                }, this),
                "Create Team"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 996,
            columnNumber: 11
        }, this);
        $[49] = t37;
    } else {
        t37 = $[49];
    }
    let t38;
    if ($[50] !== t33) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t28,
            animate: t29,
            transition: t30,
            className: "mb-6 flex flex-col sm:flex-row gap-4",
            children: [
                t33,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1003,
            columnNumber: 11
        }, this);
        $[50] = t33;
        $[51] = t38;
    } else {
        t38 = $[51];
    }
    const t39 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    let t40;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = ({
            "TeamsPage[filteredTeams.map()]": (team_1, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                    team: team_1,
                    delay: 0.3 + index_0 * 0.1,
                    onOpenSchedule: openScheduleForTeam
                }, team_1.id, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1013,
                    columnNumber: 62
                }, this)
        })["TeamsPage[filteredTeams.map()]"];
        $[52] = t40;
    } else {
        t40 = $[52];
    }
    const t41 = filteredTeams.map(t40);
    let t42;
    if ($[53] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t39,
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1022,
            columnNumber: 11
        }, this);
        $[53] = t41;
        $[54] = t42;
    } else {
        t42 = $[54];
    }
    let t43;
    if ($[55] !== filteredTeams.length) {
        t43 = filteredTeams.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "w-8 h-8 text-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 1036,
                        columnNumber: 169
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1036,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-slate-800 mb-2",
                    children: "No teams found"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1036,
                    columnNumber: 219
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 mb-4",
                    children: "Try adjusting your search query"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1036,
                    columnNumber: 296
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1030,
            columnNumber: 41
        }, this);
        $[55] = filteredTeams.length;
        $[56] = t43;
    } else {
        t43 = $[56];
    }
    let t44;
    if ($[57] !== t26 || $[58] !== t27 || $[59] !== t38 || $[60] !== t42 || $[61] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t21,
                children: [
                    t26,
                    t27,
                    t38,
                    t42,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1044,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1044,
            columnNumber: 11
        }, this);
        $[57] = t26;
        $[58] = t27;
        $[59] = t38;
        $[60] = t42;
        $[61] = t43;
        $[62] = t44;
    } else {
        t44 = $[62];
    }
    let t45;
    if ($[63] !== handleCreateTeam || $[64] !== showCreate) {
        t45 = showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18
                    },
                    className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
                    onClick: {
                        "TeamsPage[<motion.div>.onClick]": ()=>setShowCreate(false)
                    }["TeamsPage[<motion.div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1062,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full max-w-2xl p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$create$2d$team$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCreate: {
                            "TeamsPage[<CreateTeamForm>.onCreate]": (team_2)=>handleCreateTeam(team_2)
                        }["TeamsPage[<CreateTeamForm>.onCreate]"],
                        onClose: {
                            "TeamsPage[<CreateTeamForm>.onClose]": ()=>setShowCreate(false)
                        }["TeamsPage[<CreateTeamForm>.onClose]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 1072,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1072,
                    columnNumber: 47
                }, this)
            ]
        }, "create-team-modal", true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1056,
            columnNumber: 25
        }, this);
        $[63] = handleCreateTeam;
        $[64] = showCreate;
        $[65] = t45;
    } else {
        t45 = $[65];
    }
    let t46;
    if ($[66] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1085,
            columnNumber: 11
        }, this);
        $[66] = t45;
        $[67] = t46;
    } else {
        t46 = $[67];
    }
    let t47;
    if ($[68] !== handleScheduleMeeting || $[69] !== selectedTeamForSchedule || $[70] !== showSchedule) {
        t47 = showSchedule && selectedTeamForSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18
                    },
                    className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
                    onClick: {
                        "TeamsPage[<motion.div>.onClick]": ()=>{
                            setShowSchedule(false);
                            setSelectedTeamForSchedule(null);
                        }
                    }["TeamsPage[<motion.div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1099,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full max-w-2xl p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$schedule$2d$meeting$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        team: selectedTeamForSchedule,
                        onClose: {
                            "TeamsPage[<ScheduleMeetingForm>.onClose]": ()=>{
                                setShowSchedule(false);
                                setSelectedTeamForSchedule(null);
                            }
                        }["TeamsPage[<ScheduleMeetingForm>.onClose]"],
                        onSchedule: {
                            "TeamsPage[<ScheduleMeetingForm>.onSchedule]": (meeting_0)=>handleScheduleMeeting(meeting_0)
                        }["TeamsPage[<ScheduleMeetingForm>.onSchedule]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 1112,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1112,
                    columnNumber: 47
                }, this)
            ]
        }, "schedule-meeting-modal", true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1093,
            columnNumber: 54
        }, this);
        $[68] = handleScheduleMeeting;
        $[69] = selectedTeamForSchedule;
        $[70] = showSchedule;
        $[71] = t47;
    } else {
        t47 = $[71];
    }
    let t48;
    if ($[72] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 1129,
            columnNumber: 11
        }, this);
        $[72] = t47;
        $[73] = t48;
    } else {
        t48 = $[73];
    }
    let t49;
    if ($[74] !== t44 || $[75] !== t46 || $[76] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t44,
                t46,
                t48
            ]
        }, void 0, true);
        $[74] = t44;
        $[75] = t46;
        $[76] = t48;
        $[77] = t49;
    } else {
        t49 = $[77];
    }
    return t49;
}
_s1(TeamsPage, "1OeRWvT/Hwh/QxH0xZNxnGsSG3c=");
_c2 = TeamsPage;
function _TeamsPageStatsMap(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
        ...stat,
        delay: index * 0.1
    }, stat.label, false, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 1148,
        columnNumber: 10
    }, this);
}
function _TeamsPageEnsureInitialsMembersMap(m) {
    if (m.initials) {
        return m;
    }
    const name = (m.name || "").trim();
    if (!name) {
        return {
            name: "",
            initials: ""
        };
    }
    const parts = name.split(/\s+/);
    const initials = parts.length === 1 ? parts[0].slice(0, 2).toUpperCase() : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return {
        name,
        initials
    };
}
function _TeamsPageTeamsReduce3(acc_1, t_1) {
    return acc_1 + t_1.completion;
}
function _TeamsPageTeamsReduce2(acc_0, t_0) {
    return acc_0 + t_0.projects;
}
function _TeamsPageTeamsReduce(acc, t) {
    return acc + t.members.length;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TeamCard");
__turbopack_context__.k.register(_c1, "StatCard");
__turbopack_context__.k.register(_c2, "TeamsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_27121820._.js.map