(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/admin/teams/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CreateTeamForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "a933ae9d9b218a8f03b38366c39fd42b17143464ce66ebcbceb7ff4e6cc3675e") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a933ae9d9b218a8f03b38366c39fd42b17143464ce66ebcbceb7ff4e6cc3675e";
    }
    const { open, onCreate, onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            description: "",
            lead: "",
            featured: false,
            gradient: "from-blue-500 to-cyan-500",
            projects: 0,
            completion: 0,
            members: [
                ""
            ]
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const initialState = t1;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    if (!open) {
        return null;
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CreateTeamForm[setField]": (k, v)=>setForm({
                    "CreateTeamForm[setField > setForm()]": (s)=>({
                            ...s,
                            [k]: v
                        })
                }["CreateTeamForm[setField > setForm()]"])
        })["CreateTeamForm[setField]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const setField = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function memberInitials(name) {
            if (!name) {
                return "";
            }
            const parts = name.trim().split(/\s+/);
            if (parts.length === 1) {
                return parts[0].slice(0, 2).toUpperCase();
            }
            return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const memberInitials = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = function handleAddMember() {
            setForm(_CreateTeamFormHandleAddMemberSetForm);
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const handleAddMember = t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = function handleRemoveMember(i) {
            setForm({
                "CreateTeamForm[handleRemoveMember > setForm()]": (s_1)=>({
                        ...s_1,
                        members: s_1.members.filter({
                            "CreateTeamForm[handleRemoveMember > setForm() > s_1.members.filter()]": (_, idx)=>idx !== i
                        }["CreateTeamForm[handleRemoveMember > setForm() > s_1.members.filter()]"])
                    })
            }["CreateTeamForm[handleRemoveMember > setForm()]"]);
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const handleRemoveMember = t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = function handleMemberChange(i_0, value) {
            setForm({
                "CreateTeamForm[handleMemberChange > setForm()]": (s_2)=>{
                    const members = [
                        ...s_2.members
                    ];
                    members[i_0] = value;
                    return {
                        ...s_2,
                        members
                    };
                }
            }["CreateTeamForm[handleMemberChange > setForm()]"]);
        };
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const handleMemberChange = t7;
    let t8;
    if ($[8] !== form.completion || $[9] !== form.name) {
        t8 = function validate() {
            const e = {};
            if (!form.name.trim()) {
                e.name = "Team name is required";
            }
            if (form.completion < 0 || form.completion > 100) {
                e.completion = "Must be 0\u2013100";
            }
            setErrors(e);
            return Object.keys(e).length === 0;
        };
        $[8] = form.completion;
        $[9] = form.name;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const validate = t8;
    let t9;
    if ($[11] !== form.completion || $[12] !== form.description || $[13] !== form.featured || $[14] !== form.gradient || $[15] !== form.lead || $[16] !== form.members || $[17] !== form.name || $[18] !== form.projects || $[19] !== onClose || $[20] !== onCreate || $[21] !== validate) {
        t9 = function handleSubmit(e_0) {
            e_0.preventDefault();
            if (!validate()) {
                return;
            }
            const newTeam = {
                id: Date.now(),
                name: form.name.trim(),
                description: form.description.trim(),
                lead: form.lead.trim() || undefined,
                featured: !!form.featured,
                gradient: form.gradient,
                projects: Number(form.projects) || 0,
                completion: Math.max(0, Math.min(100, Number(form.completion) || 0)),
                members: form.members.map(_CreateTeamFormHandleSubmitFormMembersMap).filter(Boolean).map({
                    "CreateTeamForm[handleSubmit > (anonymous)()]": (name_0)=>({
                            name: name_0,
                            initials: memberInitials(name_0)
                        })
                }["CreateTeamForm[handleSubmit > (anonymous)()]"])
            };
            onCreate?.(newTeam);
            setForm(initialState);
            onClose?.();
        };
        $[11] = form.completion;
        $[12] = form.description;
        $[13] = form.featured;
        $[14] = form.gradient;
        $[15] = form.lead;
        $[16] = form.members;
        $[17] = form.name;
        $[18] = form.projects;
        $[19] = onClose;
        $[20] = onCreate;
        $[21] = validate;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const handleSubmit = t9;
    let t10;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            "from-blue-500 to-cyan-500",
            "from-violet-500 to-purple-500",
            "from-orange-500 to-rose-500",
            "from-emerald-500 to-teal-500",
            "from-cyan-500 to-blue-500",
            "from-pink-500 to-rose-500"
        ];
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const gradients = t10;
    let t11;
    if ($[24] !== onClose) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
            onClick: {
                "CreateTeamForm[<div>.onClick]": ()=>onClose?.()
            }["CreateTeamForm[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[24] = onClose;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    let t13;
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: 12
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        t14 = {
            duration: 0.25
        };
        $[26] = t12;
        $[27] = t13;
        $[28] = t14;
    } else {
        t12 = $[26];
        t13 = $[27];
        t14 = $[28];
    }
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-slate-800",
                    children: "Create team"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 245,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: "Add a new team and invite members"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 245,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== onClose) {
        t16 = ({
            "CreateTeamForm[<button>.onClick]": ()=>onClose?.()
        })["CreateTeamForm[<button>.onClick]"];
        $[30] = onClose;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-slate-600"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t16,
                    className: "p-2 rounded-lg hover:bg-slate-100 transition",
                    "aria-label": "Close create team",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 269,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-1",
            children: "Team name"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "CreateTeamForm[<input>.onChange]": (e_2)=>setField("name", e_2.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    let t21;
    if ($[37] !== form.name) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.name,
            onChange: t20,
            className: "px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20",
            placeholder: "e.g. Product Development"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[37] = form.name;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== errors.name) {
        t22 = errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-rose-600 text-xs mt-1",
            children: errors.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 301,
            columnNumber: 26
        }, this);
        $[39] = errors.name;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t21 || $[42] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[41] = t21;
        $[42] = t22;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-1",
            children: "Lead"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "CreateTeamForm[<input>.onChange]": (e_3)=>setField("lead", e_3.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== form.lead) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: form.lead,
                    onChange: t25,
                    className: "px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none",
                    placeholder: "Team lead name"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 334,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[46] = form.lead;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-1",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "CreateTeamForm[<textarea>.onChange]": (e_4)=>setField("description", e_4.target.value)
        })["CreateTeamForm[<textarea>.onChange]"];
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== form.description) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col md:col-span-2",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: form.description,
                    onChange: t28,
                    rows: 3,
                    className: "px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none resize-none",
                    placeholder: "Short description of team responsibilities"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 358,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[50] = form.description;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-1",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "CreateTeamForm[<input>.onChange]": (e_5)=>setField("projects", e_5.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] !== form.projects) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: form.projects,
                    onChange: t31,
                    className: "px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none",
                    min: 0
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 382,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[54] = form.projects;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-1",
            children: "Completion (%)"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "CreateTeamForm[<input>.onChange]": (e_6)=>setField("completion", e_6.target.value)
        })["CreateTeamForm[<input>.onChange]"];
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] !== form.completion) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: form.completion,
            onChange: t34,
            className: "px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none",
            min: 0,
            max: 100
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[58] = form.completion;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== errors.completion) {
        t36 = errors.completion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-rose-600 text-xs mt-1",
            children: errors.completion
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 414,
            columnNumber: 32
        }, this);
        $[60] = errors.completion;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] !== t35 || $[63] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col",
            children: [
                t33,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[62] = t35;
        $[63] = t36;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== t23 || $[66] !== t26 || $[67] !== t29 || $[68] !== t32 || $[69] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
            children: [
                t23,
                t26,
                t29,
                t32,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[65] = t23;
        $[66] = t26;
        $[67] = t29;
        $[68] = t32;
        $[69] = t37;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600 mb-2 block",
            children: "Accent"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[71] = t39;
    } else {
        t39 = $[71];
    }
    let t40;
    if ($[72] !== form.gradient) {
        t40 = gradients.map({
            "CreateTeamForm[gradients.map()]": (g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "CreateTeamForm[gradients.map() > <button>.onClick]": ()=>setField("gradient", g)
                    }["CreateTeamForm[gradients.map() > <button>.onClick]"],
                    className: `w-12 h-10 rounded-lg flex items-center justify-center shadow-sm border-2 ${form.gradient === g ? "border-slate-300 scale-105" : "border-transparent"} transition-transform`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full rounded-md bg-gradient-to-br ${g}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 453,
                        columnNumber: 249
                    }, this)
                }, g, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 451,
                    columnNumber: 47
                }, this)
        }["CreateTeamForm[gradients.map()]"]);
        $[72] = form.gradient;
        $[73] = t40;
    } else {
        t40 = $[73];
    }
    let t41;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = ({
            "CreateTeamForm[<input>.onChange]": (e_7)=>setField("featured", e_7.target.checked)
        })["CreateTeamForm[<input>.onChange]"];
        $[74] = t41;
    } else {
        t41 = $[74];
    }
    let t42;
    if ($[75] !== form.featured) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "ml-2 flex items-center gap-2 text-sm text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: form.featured,
                    onChange: t41,
                    className: "accent-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 471,
                    columnNumber: 82
                }, this),
                "Featured"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[75] = form.featured;
        $[76] = t42;
    } else {
        t42 = $[76];
    }
    let t43;
    if ($[77] !== t40 || $[78] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        t40,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 479,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[77] = t40;
        $[78] = t42;
        $[79] = t43;
    } else {
        t43 = $[79];
    }
    let t44;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-slate-700",
            children: "Members"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleAddMember,
                    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 495,
                            columnNumber: 218
                        }, this),
                        "Add"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 495,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== form.members) {
        let t47;
        if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = ({
                "CreateTeamForm[form.members.map()]": (m_0, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600",
                                children: memberInitials(m_0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 505,
                                columnNumber: 112
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: m_0,
                                onChange: {
                                    "CreateTeamForm[form.members.map() > <input>.onChange]": (e_8)=>handleMemberChange(i_1, e_8.target.value)
                                }["CreateTeamForm[form.members.map() > <input>.onChange]"],
                                placeholder: "Full name (e.g. Jane Doe)",
                                className: "flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 505,
                                columnNumber: 262
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CreateTeamForm[form.members.map() > <button>.onClick]": ()=>handleRemoveMember(i_1)
                                }["CreateTeamForm[form.members.map() > <button>.onClick]"],
                                className: "p-2 rounded-lg hover:bg-slate-100",
                                "aria-label": `Remove member ${i_1 + 1}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 157
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 507,
                                columnNumber: 186
                            }, this)
                        ]
                    }, i_1, true, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 505,
                        columnNumber: 61
                    }, this)
            })["CreateTeamForm[form.members.map()]"];
            $[84] = t47;
        } else {
            t47 = $[84];
        }
        t46 = form.members.map(t47);
        $[82] = form.members;
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    let t47;
    if ($[85] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2",
                    children: t46
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 523,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[85] = t46;
        $[86] = t47;
    } else {
        t47 = $[86];
    }
    let t48;
    if ($[87] !== onClose) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "CreateTeamForm[<button>.onClick]": ()=>onClose?.()
            }["CreateTeamForm[<button>.onClick]"],
            className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[87] = onClose;
        $[88] = t48;
    } else {
        t48 = $[88];
    }
    let t49;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 541,
                        columnNumber: 182
                    }, this),
                    "Create team"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 541,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[89] = t49;
    } else {
        t49 = $[89];
    }
    let t50;
    if ($[90] !== t48) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-3",
            children: [
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[90] = t48;
        $[91] = t50;
    } else {
        t50 = $[91];
    }
    let t51;
    if ($[92] !== handleSubmit || $[93] !== t18 || $[94] !== t38 || $[95] !== t43 || $[96] !== t47 || $[97] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            initial: t12,
            animate: t13,
            transition: t14,
            onSubmit: handleSubmit,
            className: "relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xl",
            onClick: _CreateTeamFormMotionFormOnClick,
            children: [
                t18,
                t38,
                t43,
                t47,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[92] = handleSubmit;
        $[93] = t18;
        $[94] = t38;
        $[95] = t43;
        $[96] = t47;
        $[97] = t50;
        $[98] = t51;
    } else {
        t51 = $[98];
    }
    let t52;
    if ($[99] !== t11 || $[100] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center",
            "aria-modal": "true",
            role: "dialog",
            children: [
                t11,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 569,
            columnNumber: 11
        }, this);
        $[99] = t11;
        $[100] = t51;
        $[101] = t52;
    } else {
        t52 = $[101];
    }
    return t52;
}
_s(CreateTeamForm, "6I4Fg2+nyMm4UduRMvB4Pd41/Ac=");
_c = CreateTeamForm;
function _CreateTeamFormMotionFormOnClick(e_1) {
    return e_1.stopPropagation();
}
function _CreateTeamFormHandleSubmitFormMembersMap(m) {
    return m.trim();
}
function _CreateTeamFormHandleAddMemberSetForm(s_0) {
    return {
        ...s_0,
        members: [
            ...s_0.members,
            ""
        ]
    };
}
var _c;
__turbopack_context__.k.register(_c, "CreateTeamForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>UserPlus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
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
    ],
    [
        "line",
        {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }
    ]
];
const UserPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user-plus", __iconNode);
;
 //# sourceMappingURL=user-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e98f2234._.js.map