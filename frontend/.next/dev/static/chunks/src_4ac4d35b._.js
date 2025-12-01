(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ui/forms/create-team/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/ui/forms/create-team/page.tsx
__turbopack_context__.s([
    "default",
    ()=>CreateTeamForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socketClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- Helpers ---------- */ function getInitialsFromName(name = "") {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
/**
 * Fetches a URL expecting a list or wrapper object { users: [...] } etc.
 * Returns array or throws on HTTP error.
 */ async function fetchJsonList(url) {
    const res = await fetch(url, {
        credentials: "same-origin"
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = await res.json().catch(()=>null);
    if (!j) return [];
    if (Array.isArray(j)) return j;
    if (Array.isArray(j.users)) return j.users;
    if (Array.isArray(j.data)) return j.data;
    if (Array.isArray(j.teams)) return j.teams;
    return [];
}
function CreateTeamForm({ managers: managersProp, employees: employeesProp, loadingUsers: loadingUsersProp = false, initialTeam = null, onCreate, onUpdate, onDelete, onClose }) {
    _s();
    const isEdit = Boolean(initialTeam?.id);
    // Controlled form state (initialize from initialTeam if present)
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.name ?? "");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.description ?? "");
    const [managerId, setManagerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.manager?.id ?? initialTeam?.managerId ?? "");
    const [featured, setFeatured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.featured ?? false);
    const [gradient, setGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.gradient ?? "from-blue-500 to-cyan-500");
    // Use number | "" pattern so empty field stays empty
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.projects ?? "");
    const [completion, setCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTeam?.completion ?? "");
    const [memberIds, setMemberIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CreateTeamForm.useState": ()=>(initialTeam?.members ?? []).map({
                "CreateTeamForm.useState": (m)=>String(m?.user?.id ?? m?.userId ?? m?.id ?? m)
            }["CreateTeamForm.useState"]) ?? []
    }["CreateTeamForm.useState"]);
    // Directory users (fetched or from props)
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(employeesProp ?? []);
    const [managers, setManagers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(managersProp ?? []);
    const [loadingManagers, setLoadingManagers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!loadingUsersProp);
    const [loadingEmployees, setLoadingEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!loadingUsersProp);
    // UI
    const [membersInput, setMembersInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Gradient choices
    const gradientOptions = [
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
    // Fetch lists if parent didn't provide them
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateTeamForm.useEffect": ()=>{
            let mounted = true;
            if (!managersProp) {
                setLoadingManagers(true);
                fetchJsonList("/api/users?role=MANAGER").then({
                    "CreateTeamForm.useEffect": (list)=>{
                        if (!mounted) return;
                        setManagers(list.map({
                            "CreateTeamForm.useEffect": (u)=>({
                                    id: String(u.id),
                                    name: u.name ?? u.email ?? u.id,
                                    email: u.email
                                })
                        }["CreateTeamForm.useEffect"]));
                    }
                }["CreateTeamForm.useEffect"]).catch({
                    "CreateTeamForm.useEffect": (err)=>{
                        console.warn("Could not load managers:", err);
                        if (mounted) setManagers([]);
                    }
                }["CreateTeamForm.useEffect"]).finally({
                    "CreateTeamForm.useEffect": ()=>{
                        if (mounted) setLoadingManagers(false);
                    }
                }["CreateTeamForm.useEffect"]);
            } else {
                setManagers(managersProp);
                setLoadingManagers(false);
            }
            if (!employeesProp) {
                setLoadingEmployees(true);
                fetchJsonList("/api/users?role=EMPLOYEE").then({
                    "CreateTeamForm.useEffect": (list_0)=>{
                        if (!mounted) return;
                        setEmployees(list_0.map({
                            "CreateTeamForm.useEffect": (u_0)=>({
                                    id: String(u_0.id),
                                    name: u_0.name ?? u_0.email ?? u_0.id,
                                    email: u_0.email
                                })
                        }["CreateTeamForm.useEffect"]));
                    }
                }["CreateTeamForm.useEffect"]).catch({
                    "CreateTeamForm.useEffect": (err_0)=>{
                        console.warn("Could not load employees:", err_0);
                        if (mounted) setEmployees([]);
                    }
                }["CreateTeamForm.useEffect"]).finally({
                    "CreateTeamForm.useEffect": ()=>{
                        if (mounted) setLoadingEmployees(false);
                    }
                }["CreateTeamForm.useEffect"]);
            } else {
                setEmployees(employeesProp);
                setLoadingEmployees(false);
            }
            return ({
                "CreateTeamForm.useEffect": ()=>{
                    mounted = false;
                }
            })["CreateTeamForm.useEffect"];
        }
    }["CreateTeamForm.useEffect"], [
        managersProp,
        employeesProp
    ]);
    // Keep initialTeam changes in sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateTeamForm.useEffect": ()=>{
            if (!initialTeam) return;
            setName(initialTeam.name ?? "");
            setDescription(initialTeam.description ?? "");
            setManagerId(initialTeam.manager?.id ?? initialTeam.managerId ?? "");
            setFeatured(initialTeam.featured ?? false);
            setGradient(initialTeam.gradient ?? "from-blue-500 to-cyan-500");
            setProjects(initialTeam.projects ?? "");
            setCompletion(initialTeam.completion ?? "");
            setMemberIds((initialTeam.members ?? []).map({
                "CreateTeamForm.useEffect": (m_0)=>String(m_0?.user?.id ?? m_0?.userId ?? m_0?.id ?? m_0)
            }["CreateTeamForm.useEffect"]));
        }
    }["CreateTeamForm.useEffect"], [
        initialTeam
    ]);
    // Selected member objects for chips UI
    const selectedMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateTeamForm.useMemo[selectedMembers]": ()=>{
            return memberIds.map({
                "CreateTeamForm.useMemo[selectedMembers]": (id)=>employees.find({
                        "CreateTeamForm.useMemo[selectedMembers]": (e)=>e.id === id
                    }["CreateTeamForm.useMemo[selectedMembers]"])
            }["CreateTeamForm.useMemo[selectedMembers]"]).filter(Boolean).map({
                "CreateTeamForm.useMemo[selectedMembers]": (e_0)=>({
                        id: e_0.id,
                        name: e_0.name,
                        initials: getInitialsFromName(e_0.name ?? "")
                    })
            }["CreateTeamForm.useMemo[selectedMembers]"]);
        }
    }["CreateTeamForm.useMemo[selectedMembers]"], [
        memberIds,
        employees
    ]);
    function toggleMember(id_0) {
        setMemberIds((prev)=>prev.includes(id_0) ? prev.filter((x)=>x !== id_0) : [
                ...prev,
                id_0
            ]);
    }
    // Add ad-hoc member (not in directory): create synthetic id and include in payload as adhocMembers
    function addAdhocMember(nameStr) {
        const trimmed = (nameStr || "").trim();
        if (!trimmed) return;
        const fakeId = `adhoc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        setEmployees((prev_0)=>[
                {
                    id: fakeId,
                    name: trimmed
                },
                ...prev_0
            ]);
        setMemberIds((prev_1)=>[
                ...prev_1,
                fakeId
            ]);
        setMembersInput("");
    }
    function buildPayload() {
        // clamp completion to 0..100
        const comp = typeof completion === "number" ? Math.max(0, Math.min(100, completion)) : 0;
        const proj = typeof projects === "number" ? Math.max(0, projects) : 0;
        return {
            name: name.trim(),
            description: description?.trim() || null,
            managerId: managerId || null,
            featured: !!featured,
            gradient,
            projects: proj,
            completion: comp,
            memberUserIds: memberIds.filter((id_1)=>!id_1.startsWith("adhoc-")),
            adhocMembers: memberIds.filter((id_2)=>id_2.startsWith("adhoc-")).map((id_3)=>{
                const u_1 = employees.find((x_0)=>x_0.id === id_3);
                return {
                    name: u_1?.name ?? ""
                };
            })
        };
    }
    async function createTeamServer(payload) {
        const res = await fetch("/api/teams", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const j = await res.json().catch(()=>({}));
        if (!res.ok) throw new Error(j?.message || `Failed to create team (${res.status})`);
        return j?.team ?? j;
    }
    // NEW: create team chat server-side (non-blocking, safe)
    async function createTeamChatServer(team) {
        if (!team?.id) return;
        try {
            await fetch("/api/chats", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "team",
                    teamId: team.id,
                    name: team.name ?? `Team ${team.id}`
                })
            });
        } catch (err_1) {
            // do not surface to user — server-side can create later or admin can bootstrap
            console.warn("Failed to create team chat:", err_1);
        }
    }
    async function handleSubmit(e_1) {
        e_1?.preventDefault();
        setErrorMsg(null);
        if (!name.trim()) {
            setErrorMsg("Team name is required");
            return;
        }
        setSubmitting(true);
        const payload_0 = buildPayload();
        try {
            if (isEdit && initialTeam?.id) {
                // update
                if (onUpdate) {
                    await Promise.resolve(onUpdate(initialTeam.id, payload_0));
                } else {
                    const res_0 = await fetch(`/api/teams/${encodeURIComponent(String(initialTeam.id))}`, {
                        method: "PUT",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload_0)
                    });
                    const j_0 = await res_0.json().catch(()=>({}));
                    if (!res_0.ok) throw new Error(j_0?.message || `Update failed (${res_0.status})`);
                }
            } else {
                // create
                if (onCreate) {
                    // call server and pass the server response (or optimistic) to parent
                    try {
                        const created = await createTeamServer(payload_0);
                        // try to create a team chat (best-effort, non-blocking)
                        createTeamChatServer(created).catch(()=>{});
                        // emit socket event so connected clients can react immediately
                        try {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("team:created", {
                                    team: created
                                });
                            }
                        } catch (err_4) {
                            console.warn("Socket emit failed (team:created):", err_4);
                        }
                        await Promise.resolve(onCreate(created));
                    } catch (err_3) {
                        // server create failed — still return optimistic object to parent so UI reflects inputs
                        const optimistic = {
                            id: `tmp-${Date.now()}`,
                            ...payload_0,
                            manager: managers.find((m_1)=>m_1.id === payload_0.managerId) ?? null,
                            members: memberIds.map((id_4)=>{
                                const u_2 = employees.find((e_2)=>e_2.id === id_4);
                                return {
                                    id: id_4,
                                    user: u_2 ? {
                                        id: u_2.id,
                                        name: u_2.name,
                                        email: u_2.email
                                    } : undefined,
                                    initials: u_2 ? getInitialsFromName(u_2.name ?? "") : undefined
                                };
                            })
                        };
                        // Attempt to create a chat for optimistic team (best-effort - it's okay if it fails)
                        createTeamChatServer(optimistic).catch(()=>{});
                        try {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("team:created", {
                                    team: optimistic
                                });
                            }
                        } catch (err2) {
                            console.warn("Socket emit failed for optimistic team:", err2);
                        }
                        console.warn("Create failed, returning optimistic:", err_3);
                        await Promise.resolve(onCreate(optimistic));
                    }
                } else {
                    // no parent handler — attempt server create and ignore response except errors
                    const created_0 = await createTeamServer(payload_0);
                    createTeamChatServer(created_0).catch(()=>{});
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("team:created", {
                                team: created_0
                            });
                        }
                    } catch (err_5) {
                        console.warn("Socket emit failed (team:created):", err_5);
                    }
                }
            }
            onClose();
        } catch (err_2) {
            console.error("Create/Update team error:", err_2);
            setErrorMsg(err_2?.message || "Operation failed");
        } finally{
            setSubmitting(false);
        }
    }
    async function handleDeleteClick() {
        if (!initialTeam?.id) return;
        const yes = window.confirm(`Delete team "${initialTeam.name ?? initialTeam.id}"? This cannot be undone.`);
        if (!yes) return;
        setDeleting(true);
        setErrorMsg(null);
        try {
            if (onDelete) {
                await Promise.resolve(onDelete(initialTeam.id));
            } else {
                const res_1 = await fetch(`/api/teams/${encodeURIComponent(String(initialTeam.id))}`, {
                    method: "DELETE",
                    credentials: "same-origin"
                });
                const j_1 = await res_1.json().catch(()=>({}));
                if (!res_1.ok) throw new Error(j_1?.message || `Delete failed (${res_1.status})`);
            }
            // Inform socket listeners that a team was deleted so UIs can update (best-effort)
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit === "function") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("team:deleted", {
                        teamId: initialTeam.id
                    });
                }
            } catch (err_7) {
                console.warn("Socket emit failed (team:deleted):", err_7);
            }
            onClose();
        } catch (err_6) {
            console.error("Delete team failed:", err_6);
            setErrorMsg(err_6?.message || "Failed to delete team");
        } finally{
            setDeleting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.98,
            y: 10
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.98
        },
        transition: {
            duration: 0.18
        },
        className: "w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl p-6",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-slate-800 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    isEdit ? "Edit Team" : "Create Team"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: isEdit ? "Update team details" : "Add a new team to your workspace"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDeleteClick,
                                disabled: deleting,
                                className: "px-3 py-2 rounded-md hover:bg-red-50 text-rose-600 flex items-center gap-2",
                                title: "Delete team",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    deleting ? "Deleting…" : "Delete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 438,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg hover:bg-slate-100 transition-colors",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-600 mb-1",
                                        children: "Team name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        value: name,
                                        onChange: (e_3)=>setName(e_3.target.value),
                                        className: "px-3 py-3 rounded-xl border border-slate-200 focus:outline-none",
                                        placeholder: "Product Development",
                                        "aria-label": "Team name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-600 mb-1",
                                        children: "Team lead (manager)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    loadingManagers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-3 rounded-xl border border-slate-200 text-sm text-slate-500",
                                        children: "Loading managers…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 32
                                    }, this) : managers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: managerId,
                                        onChange: (e_4)=>setManagerId(e_4.target.value),
                                        placeholder: "No managers found — type manager id",
                                        className: "px-3 py-3 rounded-xl border border-slate-200",
                                        "aria-label": "Manager id"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 167
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: managerId,
                                        onChange: (e_5)=>setManagerId(e_5.target.value),
                                        className: "px-3 py-3 rounded-xl border border-slate-200",
                                        "aria-label": "Manager select",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— Select manager —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, this),
                                            managers.map((m_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: m_2.id,
                                                    children: [
                                                        m_2.name ?? m_2.email ?? m_2.id,
                                                        m_2.email ? ` — ${m_2.email}` : ""
                                                    ]
                                                }, m_2.id, true, {
                                                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 38
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-slate-600 mb-1",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description ?? "",
                                onChange: (e_6)=>setDescription(e_6.target.value),
                                rows: 3,
                                placeholder: "Short description...",
                                className: "px-3 py-3 rounded-xl border border-slate-200",
                                "aria-label": "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-3 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-600 mb-1",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        value: projects,
                                        onChange: (e_7)=>{
                                            const v = e_7.target.value;
                                            setProjects(v === "" ? "" : Math.max(0, Number(v)));
                                        },
                                        className: "px-3 py-3 rounded-xl border border-slate-200",
                                        placeholder: "0",
                                        "aria-label": "Projects count"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-600 mb-1",
                                        children: "Completion (%)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        max: 100,
                                        value: completion,
                                        onChange: (e_8)=>{
                                            const v_0 = e_8.target.value;
                                            if (v_0 === "") return setCompletion("");
                                            const n = Math.max(0, Math.min(100, Number(v_0)));
                                            setCompletion(Number.isNaN(n) ? 0 : n);
                                        },
                                        className: "px-3 py-3 rounded-xl border border-slate-200",
                                        placeholder: "0",
                                        "aria-label": "Completion percent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "featured",
                                        type: "checkbox",
                                        checked: featured,
                                        onChange: ()=>setFeatured((f)=>!f),
                                        className: "w-4 h-4 rounded",
                                        "aria-label": "Featured"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-700",
                                                children: "Featured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Highlight in the UI"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-slate-600 mb-2 block",
                                children: "Accent gradient"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                role: "radiogroup",
                                "aria-label": "Accent gradient",
                                children: gradientOptions.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setGradient(g.value),
                                        className: `flex items-center gap-2 px-3 py-2 rounded-xl border ${g.value === gradient ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"}`,
                                        "aria-pressed": g.value === gradient,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 rounded-lg bg-gradient-to-br ${g.value}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-700",
                                                children: g.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, g.id, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 39
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-slate-600",
                                                children: "Members"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "Select existing employees or add a name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: [
                                            memberIds.length,
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2 max-h-40 overflow-auto p-2 border rounded-md bg-white",
                                children: loadingEmployees ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: "Loading employees…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 33
                                }, this) : employees.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: "No employees found"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 125
                                }, this) : employees.map((u_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: memberIds.includes(u_3.id),
                                                onChange: ()=>toggleMember(u_3.id),
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-700",
                                                children: [
                                                    u_3.name ?? u_3.email ?? u_3.id,
                                                    u_3.email ? ` — ${u_3.email}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, u_3.id, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 213
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: membersInput,
                                        onChange: (e_9)=>setMembersInput(e_9.target.value),
                                        onKeyDown: (e_10)=>{
                                            if (e_10.key === "Enter") {
                                                e_10.preventDefault();
                                                addAdhocMember(membersInput);
                                            }
                                        },
                                        placeholder: "Type a name and press Enter to add someone not in directory",
                                        className: "flex-1 px-3 py-3 rounded-xl border border-slate-200",
                                        "aria-label": "Add ad-hoc member"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>addAdhocMember(membersInput),
                                        className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200",
                                        "aria-label": "Add member",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: selectedMembers.map((m_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700",
                                                children: m_3.initials
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-700",
                                                children: m_3.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleMember(m_3.id),
                                                className: "ml-2 p-1 rounded-md hover:bg-slate-100",
                                                "aria-label": `Remove ${m_3.name}`,
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, m_3.id, true, {
                                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-rose-600",
                        role: "alert",
                        children: errorMsg
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 560,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 justify-end pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                type: "submit",
                                disabled: submitting,
                                className: "px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md disabled:opacity-60",
                                "aria-disabled": submitting,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 15
                                        }, this),
                                        submitting ? isEdit ? "Updating…" : "Creating…" : isEdit ? "Update Team" : "Create Team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ui/forms/create-team/page.tsx",
        lineNumber: 414,
        columnNumber: 10
    }, this);
}
_s(CreateTeamForm, "/2qqUDBaPnjm8VQx4zFSjMVb4lk=");
_c = CreateTeamForm;
var _c;
__turbopack_context__.k.register(_c, "CreateTeamForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ui/forms/Schedule-meeting/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ($[0] !== "c3b8b550398fbbaa47a29d5dc7828360f782ee8675e98d0500ef8ec90a9e44e2") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3b8b550398fbbaa47a29d5dc7828360f782ee8675e98d0500ef8ec90a9e44e2";
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
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 183,
                    columnNumber: 83
                }, this),
                "Schedule Meeting"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                            lineNumber: 191,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 191,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                            lineNumber: 246,
                            columnNumber: 95
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 246,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 277,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                                fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                                lineNumber: 308,
                                columnNumber: 65
                            }, this)
                    }["ScheduleMeetingForm[reminderOptions.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 307,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                            lineNumber: 326,
                            columnNumber: 105
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400",
                    children: "Pick a meeting time"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 326,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 350,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500",
                    children: "Team members who will receive the invite"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 350,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 365,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            className: "px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                    lineNumber: 429,
                    columnNumber: 208
                }, this),
                "Schedule & Invite"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
            fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
                fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                lineNumber: 468,
                columnNumber: 140
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-700",
                children: m_0.name
            }, void 0, false, {
                fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
                lineNumber: 468,
                columnNumber: 434
            }, this)
        ]
    }, `${m_0.name}-${i}`, true, {
        fileName: "[project]/src/app/ui/forms/Schedule-meeting/page.tsx",
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
"[project]/src/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/modal.tsx
__turbopack_context__.s([
    "Modal",
    ()=>Modal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FOCUSABLE_SELECTOR = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
const getFocusableElements = (container)=>{
    if (!container) return [];
    try {
        return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el)=>!!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
    } catch  {
        return [];
    }
};
const Modal = ({ children, onClose, ariaLabel = "Dialog", className })=>{
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ensure portal root exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            let root = document.getElementById("modal-root");
            if (!root) {
                root = document.createElement("div");
                root.id = "modal-root";
                document.body.appendChild(root);
            }
        }
    }["Modal.useEffect"], []);
    // lock scroll + preserve/restore focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            lastFocused.current = document.activeElement;
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            // focus the panel (or first focusable element) shortly after mount
            const t = setTimeout({
                "Modal.useEffect.t": ()=>{
                    const focusable = getFocusableElements(panelRef.current);
                    if (focusable.length) focusable[0].focus();
                    else panelRef.current?.focus();
                }
            }["Modal.useEffect.t"], 30);
            return ({
                "Modal.useEffect": ()=>{
                    clearTimeout(t);
                    document.body.style.overflow = originalOverflow;
                    try {
                        lastFocused.current?.focus();
                    } catch  {
                    // ignore
                    }
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    // key handlers: ESC + focus trap (Tab / Shift+Tab)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const onKey = {
                "Modal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        e.preventDefault();
                        onClose();
                        return;
                    }
                    if (e.key === "Tab") {
                        const focusable_0 = getFocusableElements(panelRef.current);
                        if (focusable_0.length === 0) {
                            e.preventDefault();
                            return;
                        }
                        const idx = focusable_0.indexOf(document.activeElement);
                        if (e.shiftKey) {
                            if (idx === 0 || document.activeElement === panelRef.current) {
                                e.preventDefault();
                                focusable_0[focusable_0.length - 1].focus();
                            }
                        } else {
                            if (idx === focusable_0.length - 1) {
                                e.preventDefault();
                                focusable_0[0].focus();
                            }
                        }
                    }
                }
            }["Modal.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "Modal.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    // backdrop click to close
    const onBackdropMouseDown = (e_0)=>{
        if (e_0.target === overlayRef.current) onClose();
    };
    // Motion variants for panel and backdrop
    const backdropVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.5
        },
        exit: {
            opacity: 0
        }
    };
    const panelVariants = {
        hidden: {
            opacity: 0,
            y: 8,
            scale: 0.995
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 8,
            scale: 0.995
        }
    };
    const modal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: overlayRef,
            onMouseDown: onBackdropMouseDown,
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
            "aria-hidden": false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    variants: backdropVariants,
                    transition: {
                        duration: 0.18
                    },
                    className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                }, "backdrop", false, {
                    fileName: "[project]/src/components/ui/modal.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: panelRef,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": ariaLabel,
                    tabIndex: -1,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    variants: panelVariants,
                    transition: {
                        duration: 0.22,
                        ease: "easeOut"
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(// defaults: professional panel that matches team page design
                    "relative z-10 w-full max-w-2xl rounded-2xl bg-white border border-slate-100 shadow-lg overflow-hidden outline-none", // safe max-height and internal scroll when needed
                    "max-h-[90vh] overflow-auto", // allow consumer to pass additional width/padding overrides
                    className),
                    style: {
                        WebkitTapHighlightColor: "transparent"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Close dialog",
                                onClick: onClose,
                                className: "absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-md p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition",
                                type: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/modal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/modal.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/modal.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/modal.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, "panel", false, {
                    fileName: "[project]/src/components/ui/modal.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/modal.tsx",
        lineNumber: 151,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0));
    const root_0 = ("TURBOPACK compile-time truthy", 1) ? document.getElementById("modal-root") : "TURBOPACK unreachable";
    if (root_0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modal, root_0);
    // Fallback inline render (shouldn't happen in client)
    return modal;
};
_s(Modal, "aGOYZJmf0TaglBUmdnFRyqNieUM=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/admin/teams/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/dashboard/admin/teams/page.tsx
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$create$2d$team$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/forms/create-team/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$Schedule$2d$meeting$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/forms/Schedule-meeting/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)"); // shared Modal (backdrop + panel)
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ----------------- Helpers ----------------- */ function safeParseListResponse(j) {
    if (!j) return [];
    if (Array.isArray(j)) return j;
    if (Array.isArray(j.teams)) return j.teams;
    if (Array.isArray(j.users)) return j.users;
    if (Array.isArray(j.data)) return j.data;
    return [];
}
function uidFromTeam(team, idx) {
    return team?.id ?? `team_tmp_${idx}_${(team?.name ?? "unknown").slice(0, 6)}`;
}
/* ==================== ChatWidget component ====================
   - single admin widget instance (one open at a time)
   - minimized floating panel with Close / Maximize
   - maximized overlay with full chat + members pane
   - responsive for small and large screens
*/ function ChatWidget({ state, onClose, onUpdateState }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const team = state?.team ?? null;
    const opened = !!state?.opened;
    const maximized = !!state?.maximized;
    // Load recent messages when opened or when maximized/team changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            let mounted = true;
            async function load() {
                if (!opened || !team) {
                    setMessages([]);
                    return;
                }
                setLoading(true);
                try {
                    // Try API: /api/chats?teamId=...
                    const q = new URLSearchParams({
                        teamId: team.id
                    });
                    const res = await fetch(`/api/chats?${q.toString()}`, {
                        credentials: "same-origin"
                    });
                    if (res.ok) {
                        const j = await res.json().catch({
                            "ChatWidget.useEffect.load": ()=>null
                        }["ChatWidget.useEffect.load"]);
                        // accept several shapes: { ok:true, chats:[{messages:[]}] } or { ok:true, messages: [] }
                        if (j?.ok && Array.isArray(j.chats) && j.chats.length > 0) {
                            const chat = j.chats[0];
                            if (mounted) setMessages((chat.messages ?? []).slice(-200));
                        } else if (j?.ok && Array.isArray(j.messages)) {
                            if (mounted) setMessages(j.messages.slice(-200));
                        } else {
                            // fallback empty
                            if (mounted) setMessages([]);
                        }
                    } else {
                        if (mounted) setMessages([]);
                    }
                } catch (e) {
                    console.warn("Chat load failed:", e);
                    if (mounted) setMessages([]);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "ChatWidget.useEffect": ()=>{
                    mounted = false;
                }
            })["ChatWidget.useEffect"];
        }
    }["ChatWidget.useEffect"], [
        opened,
        team
    ]);
    if (!opened || !team) return null;
    async function sendMessage() {
        const body = input.trim();
        if (!body) return;
        // optimistic append
        const optimistic = {
            id: `tmp-${Date.now()}`,
            body,
            createdAt: new Date().toISOString(),
            sender: {
                id: "admin",
                name: "You"
            },
            direction: "OUTBOUND"
        };
        setMessages((m)=>[
                ...m,
                optimistic
            ]);
        setInput("");
        try {
            const res_0 = await fetch(`/api/chats`, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    teamId: team.id,
                    body
                })
            });
            if (res_0.ok) {
                const j_0 = await res_0.json().catch(()=>null);
                // if server returns message or messages merge them
                if (j_0?.message) {
                    setMessages((m_0)=>[
                            ...m_0.slice(0, -1),
                            j_0.message
                        ]);
                } else if (Array.isArray(j_0?.messages)) {
                    setMessages((m_1)=>[
                            ...m_1.slice(0, -1),
                            ...j_0.messages
                        ]);
                }
            } else {
                // try alternative POST to /api/chats/:chatId if team id is used as chatId
                await fetch(`/api/chats/${encodeURIComponent(team.id)}`, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        body
                    })
                }).catch(()=>null);
            }
        } catch (e_0) {
            console.warn("send failed:", e_0);
        }
    }
    // UI pieces
    const MinimizedWidget = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.98
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 12,
            scale: 0.98
        },
        className: "fixed right-4 bottom-4 z-50 w-80 sm:w-[360px] md:w-96",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-3 py-2 bg-gradient-to-r from-slate-50 to-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium truncate",
                                            children: team.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-500",
                                            children: "Team chat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onUpdateState({
                                            opened: true,
                                            maximized: true,
                                            team
                                        }),
                                    title: "Maximize",
                                    className: "p-2 rounded hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onClose(),
                                    title: "Close",
                                    className: "p-2 rounded hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 max-h-48 overflow-auto bg-white",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: "Loading messages…"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 195,
                        columnNumber: 22
                    }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: "No recent messages"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 195,
                        columnNumber: 112
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: messages.slice(-6).map((m_2, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `text-sm ${m_2.direction === "INBOUND" ? "text-slate-700" : "text-right text-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block max-w-[80%] break-words bg-slate-50 px-3 py-1.5 rounded-md text-xs",
                                        children: m_2.body ?? m_2.preview ?? m_2.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-400 mt-0.5",
                                        children: new Date(m_2.createdAt || Date.now()).toLocaleTimeString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, m_2.id ?? idx, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 196,
                                columnNumber: 53
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 195,
                        columnNumber: 179
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t border-slate-100 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: (e_1)=>setInput(e_1.target.value),
                                onKeyDown: (e_2)=>{
                                    if (e_2.key === "Enter") {
                                        e_2.preventDefault();
                                        sendMessage();
                                    }
                                },
                                placeholder: "Write a message...",
                                className: "flex-1 px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendMessage,
                                className: "px-3 py-2 rounded-md bg-blue-500 text-white text-sm",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 155,
        columnNumber: 27
    }, this);
    const MaximizedOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "fixed inset-0 z-60 flex items-end sm:items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: ()=>onUpdateState({
                        opened: true,
                        maximized: false,
                        team
                    })
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 20,
                    scale: 0.98
                },
                animate: {
                    y: 0,
                    scale: 1
                },
                exit: {
                    y: 12,
                    scale: 0.98
                },
                transition: {
                    duration: 0.12
                },
                className: "relative z-70 w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-2xl border overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold truncate",
                                                children: team.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Team chat — Admin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onUpdateState({
                                                opened: true,
                                                maximized: false,
                                                team
                                            }),
                                        title: "Minimize",
                                        className: "p-2 rounded hover:bg-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onClose(),
                                        title: "Close",
                                        className: "p-2 rounded hover:bg-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 flex flex-col border rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto p-4",
                                        style: {
                                            minHeight: 0
                                        },
                                        children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-500",
                                            children: "No messages yet. Use the composer to send the first message."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 40
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: messages.map((m_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `flex ${m_3.direction === "INBOUND" ? "justify-start" : "justify-end"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${m_3.direction === "INBOUND" ? "bg-slate-50 text-slate-800" : "bg-blue-500 text-white"} px-4 py-2 rounded-lg max-w-[80%]`,
                                                        children: m_3.body ?? m_3.text ?? m_3.preview
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 23
                                                    }, this)
                                                }, m_3.id, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 40
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 149
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-t bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 2,
                                                    value: input,
                                                    onChange: (e_3)=>setInput(e_3.target.value),
                                                    placeholder: "Write a message to the team...",
                                                    className: "flex-1 p-3 rounded-lg border border-slate-200 resize-none focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: sendMessage,
                                                        className: "px-4 py-2 rounded-lg bg-blue-600 text-white",
                                                        children: "Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "md:col-span-1 border rounded-lg p-3 overflow-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold mb-2",
                                        children: "Members"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: (team.members ?? []).map((m_4, idx_0)=>{
                                            const user = m_4?.user ?? {};
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm truncate",
                                                                children: user.name ?? m_4.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 23
                                                            }, this),
                                                            user.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-500 truncate",
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500",
                                                        children: m_4.role ?? "Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, m_4.id ?? user.id ?? idx_0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 218,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !maximized ? MinimizedWidget : MaximizedOverlay
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
_s(ChatWidget, "tTZHsGuJiuRrPZWpbhI7lMkMgDc=");
_c = ChatWidget;
/* ----------------- TeamCard ----------------- */ /* - includes Message button that opens chat widget (through props) */ /* ----------------- TeamCard (responsive actions + overflow fix) ----------------- */ const TeamCard = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0";
    }
    const { team, delay: t1, onOpenSchedule, onEdit, onDelete, onViewMembers, onMessage } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== delay) {
        t4 = {
            duration: 0.36,
            delay
        };
        $[3] = delay;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>setIsHovered(true);
        t6 = ()=>{
            setIsHovered(false);
            setMenuOpen(false);
        };
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": "Open team menu",
            className: "p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200",
            onClick: (e)=>{
                e.stopPropagation();
                setMenuOpen(_temp);
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-5 h-5 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 384,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 381,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== menuOpen || $[9] !== onDelete || $[10] !== onEdit || $[11] !== team) {
        t8 = menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.98
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.98
            },
            transition: {
                duration: 0.12
            },
            className: "absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50",
            onClick: _temp2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2",
                    onClick: (e_1)=>{
                        e_1.stopPropagation();
                        setMenuOpen(false);
                        onEdit?.(team);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 406,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Edit"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 402,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-rose-600",
                    onClick: (e_2)=>{
                        e_2.stopPropagation();
                        setMenuOpen(false);
                        onDelete?.(team);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 410,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Delete"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 406,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 391,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = menuOpen;
        $[9] = onDelete;
        $[10] = onEdit;
        $[11] = team;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-4 top-3 z-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 421,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 421,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = `w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient ?? "from-blue-500 to-cyan-500"} flex items-center justify-center shadow-md flex-shrink-0`;
    let t11;
    if ($[15] !== isHovered) {
        t11 = isHovered ? {
            scale: 1.03,
            rotate: 4
        } : {
            scale: 1,
            rotate: 0
        };
        $[15] = isHovered;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            duration: 0.22
        };
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-7 h-7 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t10 || $[20] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t10,
            animate: t11,
            transition: t12,
            "aria-hidden": true,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== team.name) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-800 leading-tight truncate",
            children: team.name
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = team.name;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = team.description ?? "";
    let t17;
    if ($[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 mt-1 truncate",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== t15 || $[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15;
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t14 || $[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4 mb-4",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t14;
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== team.manager) {
        t20 = team.manager?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 504,
                    columnNumber: 146
                }, ("TURBOPACK compile-time value", void 0)),
                team.manager.name
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 504,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = team.manager;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== team.featured) {
        t21 = team.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 512,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0)),
                "Featured"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 512,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = team.featured;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t20 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2 mb-4",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t20;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== team.members) {
        t23 = (team.members ?? []).slice(0, 5).map(_temp4);
        $[39] = team.members;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== team.members) {
        t24 = (team.members ?? []).length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600",
            children: [
                "+",
                team.members.length - 5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 537,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = team.members;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== t23 || $[44] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex -space-x-2 mb-4 flex-wrap",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t23;
        $[44] = t24;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    const t26 = team.members?.length ?? 0;
    let t27;
    if ($[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Members"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t27;
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    const t30 = team.projects ?? 0;
    let t31;
    if ($[51] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-slate-800",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t30;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 587,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t32;
    } else {
        t32 = $[53];
    }
    let t33;
    if ($[54] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t31;
        $[55] = t33;
    } else {
        t33 = $[55];
    }
    const t34 = team.completion ?? 0;
    let t35;
    if ($[56] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-emerald-600",
            children: [
                t34,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t34;
        $[57] = t35;
    } else {
        t35 = $[57];
    }
    let t36;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500",
            children: "Complete"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    let t37;
    if ($[59] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t35;
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] !== t29 || $[62] !== t33 || $[63] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 mb-4 text-center",
            children: [
                t29,
                t33,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t29;
        $[62] = t33;
        $[63] = t37;
        $[64] = t38;
    } else {
        t38 = $[64];
    }
    let t39;
    if ($[65] !== t19 || $[66] !== t22 || $[67] !== t25 || $[68] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t19,
                t22,
                t25,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t19;
        $[66] = t22;
        $[67] = t25;
        $[68] = t38;
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== onOpenSchedule || $[71] !== team) {
        t40 = ()=>onOpenSchedule?.(team);
        $[70] = onOpenSchedule;
        $[71] = team;
        $[72] = t40;
    } else {
        t40 = $[72];
    }
    let t41;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t41;
    } else {
        t41 = $[73];
    }
    let t42;
    if ($[74] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t40,
            className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-medium shadow-md hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-300",
            children: [
                t41,
                " Schedule Meeting"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t40;
        $[75] = t42;
    } else {
        t42 = $[75];
    }
    let t43;
    if ($[76] !== onViewMembers || $[77] !== team) {
        t43 = ()=>onViewMembers?.(team);
        $[76] = onViewMembers;
        $[77] = team;
        $[78] = t43;
    } else {
        t43 = $[78];
    }
    let t44;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 680,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t44;
    } else {
        t44 = $[79];
    }
    let t45;
    if ($[80] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t43,
            className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200",
            children: [
                t44,
                " View Members"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 687,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t43;
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== onMessage || $[83] !== team) {
        t46 = ()=>onMessage?.(team);
        $[82] = onMessage;
        $[83] = team;
        $[84] = t46;
    } else {
        t46 = $[84];
    }
    let t47;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 704,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t47;
    } else {
        t47 = $[85];
    }
    let t48;
    if ($[86] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t46,
            className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200",
            children: [
                t47,
                " Message"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = t46;
        $[87] = t48;
    } else {
        t48 = $[87];
    }
    let t49;
    if ($[88] !== t42 || $[89] !== t45 || $[90] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 pt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-2 items-stretch",
                children: [
                    t42,
                    t45,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 719,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 719,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t42;
        $[89] = t45;
        $[90] = t48;
        $[91] = t49;
    } else {
        t49 = $[91];
    }
    let t50;
    if ($[92] !== t39 || $[93] !== t4 || $[94] !== t49 || $[95] !== t9) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            animate: t3,
            transition: t4,
            onMouseEnter: t5,
            onMouseLeave: t6,
            className: "relative p-6 pb-8 bg-white rounded-2xl flex flex-col justify-between shadow-md overflow-visible",
            role: "group",
            children: [
                t9,
                t39,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 729,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = t39;
        $[93] = t4;
        $[94] = t49;
        $[95] = t9;
        $[96] = t50;
    } else {
        t50 = $[96];
    }
    return t50;
};
_s1(TeamCard, "ci96+gdGLmvtZ7A0ZNbPJPkAK8E=");
_c1 = TeamCard;
/* ----------------- StatCard ----------------- */ const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0";
    }
    const { icon: Icon, label, value, subtitle, gradient, delay } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            scale: 0.98
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
            lineNumber: 789,
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
            lineNumber: 797,
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
            lineNumber: 806,
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
            lineNumber: 813,
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
            lineNumber: 821,
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
            lineNumber: 829,
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
            lineNumber: 837,
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
            className: "p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 845,
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
_c2 = StatCard;
/* ----------------- Members Modal (unchanged) ----------------- */ function MembersModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c4f7a70e8fba5d320cae78f1eb4ec1325323a14b798bb514a16859b6eabf0e0";
    }
    const { open, onClose, team, onRemove } = t0;
    if (!team) {
        return null;
    }
    let t1;
    if ($[1] !== team.members) {
        t1 = team.members ?? [];
        $[1] = team.members;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const members = t1;
    const manager = team.manager ?? null;
    const total = (members?.length ?? 0) + (manager ? 1 : 0);
    const t2 = `Members of ${team.name}`;
    const t3 = team.name ?? "Team members";
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-slate-900",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 891,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = total !== 1 ? "s" : "";
    let t6;
    if ($[5] !== t5 || $[6] !== total) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 mt-1",
            children: [
                total,
                " member",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 900,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = total;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t4 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t4,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 909,
                    columnNumber: 105
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 909,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 909,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== manager || $[12] !== onRemove || $[13] !== team.name) {
        t8 = manager && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 bg-white rounded-lg p-3 border-none shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700",
                            children: String((manager.name || "").split(" ").map(_MembersModalAnonymous).slice(0, 2).join("")).toUpperCase() || "M"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 918,
                            columnNumber: 173
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-slate-800 truncate",
                                    children: manager.name ?? "Manager"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 918,
                                    columnNumber: 493
                                }, this),
                                manager.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500 truncate",
                                    children: manager.email
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 918,
                                    columnNumber: 605
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 918,
                            columnNumber: 468
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 918,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium px-2 py-1 rounded-full bg-amber-50 text-amber-700",
                            children: "MANAGER"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 918,
                            columnNumber: 729
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "MembersModal[<button>.onClick]": ()=>{
                                    if (!confirm(`Remove ${manager.name ?? "this manager"} from team "${team.name}"?`)) {
                                        return;
                                    }
                                    onRemove(manager.id ?? manager.user?.id ?? manager.userId, true);
                                }
                            }["MembersModal[<button>.onClick]"],
                            type: "button",
                            className: "px-3 py-1 rounded-md bg-rose-600 text-white hover:bg-rose-700 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 925,
                                    columnNumber: 158
                                }, this),
                                " Remove"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 918,
                            columnNumber: 829
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 918,
                    columnNumber: 688
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 918,
            columnNumber: 21
        }, this);
        $[11] = manager;
        $[12] = onRemove;
        $[13] = team.name;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== members || $[16] !== onRemove || $[17] !== team.name) {
        t9 = members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 rounded-lg text-sm text-slate-600",
            children: "No members assigned to this team."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 935,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-3",
            children: members.map({
                "MembersModal[members.map()]": (m, idx)=>{
                    const user = m?.user ?? {};
                    const name = user?.name ?? m?.name ?? `Member ${idx + 1}`;
                    const email = user?.email ?? m?.email ?? "";
                    const role = m?.role ?? m?.assignedRole ?? "Member";
                    const memberId = m?.id ?? user?.id ?? m?.userId ?? String(idx);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-4 bg-white rounded-lg p-3 border-none shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 ",
                                        children: String(name.split(" ").map(_MembersModalMembersMapAnonymous).slice(0, 2).join("")).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 184
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-slate-800 truncate",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 492
                                            }, this),
                                            email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 truncate",
                                                children: email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 575
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 467
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 942,
                                columnNumber: 135
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate-600 px-3 py-1 rounded-md bg-slate-50",
                                        children: role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 691
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "MembersModal[members.map() > <button>.onClick]": ()=>{
                                                if (!confirm(`Remove ${name} from team "${team.name}"?`)) {
                                                    return;
                                                }
                                                onRemove(memberId);
                                            }
                                        }["MembersModal[members.map() > <button>.onClick]"],
                                        type: "button",
                                        className: "px-3 py-1 rounded-md bg-rose-600 text-white hover:bg-rose-700 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                                lineNumber: 949,
                                                columnNumber: 180
                                            }, this),
                                            " Remove"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 776
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 942,
                                columnNumber: 650
                            }, this)
                        ]
                    }, memberId, true, {
                        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                        lineNumber: 942,
                        columnNumber: 18
                    }, this);
                }
            }["MembersModal[members.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 935,
            columnNumber: 142
        }, this);
        $[15] = members;
        $[16] = onRemove;
        $[17] = team.name;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 space-y-3 max-h-[60vh] overflow-auto",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 961,
            columnNumber: 11
        }, this);
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm overflow-hidden",
                children: [
                    t7,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 970,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 970,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t7;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== onClose || $[26] !== open || $[27] !== t11 || $[28] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            open: open,
            onClose: onClose,
            ariaLabel: t2,
            className: "max-w-2xl",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
            lineNumber: 979,
            columnNumber: 11
        }, this);
        $[25] = onClose;
        $[26] = open;
        $[27] = t11;
        $[28] = t2;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    return t12;
}
_c3 = MembersModal;
/* ----------------- Main Page ----------------- */ function _MembersModalMembersMapAnonymous(p_0) {
    return p_0[0];
}
function _MembersModalAnonymous(p) {
    return p[0];
}
function TeamsPage() {
    _s2();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTeam, setEditTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmDelete, setConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // schedule modal state
    const [showSchedule, setShowSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTeamForSchedule, setSelectedTeamForSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // members modal state
    const [showMembersModal, setShowMembersModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTeamForMembers, setSelectedTeamForMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // chat widget (single instance)
    const [chatState, setChatState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // data
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamsLoading, setTeamsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [teamsError, setTeamsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [managers, setManagers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usersLoading, setUsersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* -- fetch teams -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamsPage.useEffect": ()=>{
            let mounted = true;
            ({
                "TeamsPage.useEffect": async ()=>{
                    setTeamsLoading(true);
                    setTeamsError(null);
                    try {
                        const res = await fetch("/api/teams", {
                            credentials: "same-origin"
                        });
                        if (!res.ok) {
                            const alt = await fetch("/api/dashboard/teams", {
                                credentials: "same-origin"
                            });
                            if (!alt.ok) throw new Error("Failed to load teams");
                            const altJson = await alt.json().catch({
                                "TeamsPage.useEffect": ()=>null
                            }["TeamsPage.useEffect"]);
                            const list = safeParseListResponse(altJson);
                            if (mounted) setTeams(list);
                        } else {
                            const j = await res.json().catch({
                                "TeamsPage.useEffect": ()=>null
                            }["TeamsPage.useEffect"]);
                            const list_0 = safeParseListResponse(j);
                            if (mounted) setTeams(list_0);
                        }
                    } catch (err) {
                        if (mounted) setTeamsError(err?.message || "Could not fetch teams");
                        console.error("[teams] fetch error:", err);
                    } finally{
                        if (mounted) setTeamsLoading(false);
                    }
                }
            })["TeamsPage.useEffect"]();
            return ({
                "TeamsPage.useEffect": ()=>{
                    mounted = false;
                }
            })["TeamsPage.useEffect"];
        }
    }["TeamsPage.useEffect"], []);
    /* -- fetch users for selectors -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamsPage.useEffect": ()=>{
            let mounted_0 = true;
            ({
                "TeamsPage.useEffect": async ()=>{
                    setUsersLoading(true);
                    try {
                        const [mRes, eRes] = await Promise.all([
                            fetch("/api/users?role=MANAGER", {
                                credentials: "same-origin"
                            }),
                            fetch("/api/users?role=EMPLOYEE", {
                                credentials: "same-origin"
                            })
                        ]);
                        if (mRes.ok) {
                            const j_0 = await mRes.json().catch({
                                "TeamsPage.useEffect": ()=>null
                            }["TeamsPage.useEffect"]);
                            const list_1 = safeParseListResponse(j_0);
                            if (mounted_0) setManagers(list_1);
                        } else {
                            if (mounted_0) setManagers([]);
                        }
                        if (eRes.ok) {
                            const j_1 = await eRes.json().catch({
                                "TeamsPage.useEffect": ()=>null
                            }["TeamsPage.useEffect"]);
                            const list_2 = safeParseListResponse(j_1);
                            if (mounted_0) setEmployees(list_2);
                        } else {
                            if (mounted_0) setEmployees([]);
                        }
                    } catch (err_0) {
                        console.warn("[users] fetch failed:", err_0);
                        if (mounted_0) {
                            setManagers([]);
                            setEmployees([]);
                        }
                    } finally{
                        if (mounted_0) setUsersLoading(false);
                    }
                }
            })["TeamsPage.useEffect"]();
            return ({
                "TeamsPage.useEffect": ()=>{
                    mounted_0 = false;
                }
            })["TeamsPage.useEffect"];
        }
    }["TeamsPage.useEffect"], []);
    /* -- filtering -- */ const filteredTeams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamsPage.useMemo[filteredTeams]": ()=>{
            const q = searchQuery.trim().toLowerCase();
            if (!q) return teams;
            return teams.filter({
                "TeamsPage.useMemo[filteredTeams]": (team)=>(team.name ?? "").toLowerCase().includes(q) || (team.description ?? "").toLowerCase().includes(q) || (team.manager?.name ?? "").toLowerCase().includes(q)
            }["TeamsPage.useMemo[filteredTeams]"]);
        }
    }["TeamsPage.useMemo[filteredTeams]"], [
        teams,
        searchQuery
    ]);
    /* -- create / update handler: accepts either server object (with id) or payload -- */ async function handleCreateOrUpdateTeam(payloadOrCreated, opts) {
        try {
            if (opts?.isEdit && opts.id) {
                const res_0 = await fetch(`/api/teams/${encodeURIComponent(opts.id)}`, {
                    method: "PUT",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payloadOrCreated)
                });
                if (!res_0.ok) {
                    const err_2 = await res_0.json().catch(()=>({}));
                    throw new Error(err_2?.message || `Failed to update team (${res_0.status})`);
                }
                const json = await res_0.json().catch(()=>null);
                const updated = json?.team ?? json;
                setTeams((prev)=>prev.map((t)=>t.id === opts.id ? updated ? {
                            ...t,
                            ...updated
                        } : {
                            ...t,
                            ...payloadOrCreated
                        } : t));
                setEditTeam(null);
                setShowCreate(false);
                return;
            }
            if (payloadOrCreated && payloadOrCreated.id) {
                setTeams((prev_0)=>[
                        payloadOrCreated,
                        ...prev_0
                    ]);
                setShowCreate(false);
                return;
            }
            const res_1 = await fetch("/api/teams", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payloadOrCreated)
            });
            if (!res_1.ok) {
                const err_3 = await res_1.json().catch(()=>({}));
                throw new Error(err_3?.message || `Failed to create team (${res_1.status})`);
            }
            const json_0 = await res_1.json().catch(()=>null);
            const created = json_0?.team ?? json_0;
            if (created && created.id) {
                setTeams((prev_1)=>[
                        created,
                        ...prev_1
                    ]);
            } else {
                setTeams((prev_2)=>[
                        {
                            id: `tmp_${Date.now()}`,
                            ...payloadOrCreated,
                            manager: managers.find((m)=>m.id === payloadOrCreated.managerId) ?? null,
                            members: (payloadOrCreated.memberUserIds ?? []).map((id)=>{
                                const u = employees.find((e)=>e.id === id);
                                return {
                                    id,
                                    user: u ? {
                                        id: u.id,
                                        name: u.name,
                                        email: u.email
                                    } : undefined
                                };
                            })
                        },
                        ...prev_2
                    ]);
            }
            setShowCreate(false);
        } catch (err_1) {
            console.error("Create/update team error:", err_1);
            alert("Error: " + (err_1?.message || "Unknown error"));
        }
    }
    /* -- open create / edit -- */ function openCreate() {
        setEditTeam(null);
        setShowCreate(true);
    }
    function handleEdit(team_0) {
        setEditTeam(team_0);
        setShowCreate(true);
    }
    /* -- delete flow -- */ function handleDeleteRequest(team_1) {
        setConfirmDelete(team_1);
    }
    async function confirmDeleteNow(team_2) {
        try {
            const res_2 = await fetch(`/api/teams/${encodeURIComponent(team_2.id)}`, {
                method: "DELETE",
                credentials: "same-origin"
            });
            if (!res_2.ok) {
                const err_5 = await res_2.json().catch(()=>({}));
                throw new Error(err_5?.message || `Delete failed (${res_2.status})`);
            }
            setTeams((prev_3)=>prev_3.filter((t_0)=>t_0.id !== team_2.id));
            setConfirmDelete(null);
        } catch (err_4) {
            console.error("Delete team error:", err_4);
            alert("Failed to delete team: " + (err_4?.message || "unknown"));
        }
    }
    /* -- schedule modal handlers -- */ function openScheduleForTeam(team_3) {
        setSelectedTeamForSchedule(team_3);
        setShowSchedule(true);
    }
    function handleScheduleMeeting(meeting) {
        setSelectedTeamForSchedule(null);
        setShowSchedule(false);
    }
    /* -- members modal handlers -- */ function openMembersModalForTeam(team_4) {
        setSelectedTeamForMembers(team_4);
        setShowMembersModal(true);
    }
    function closeMembersModal() {
        setSelectedTeamForMembers(null);
        setShowMembersModal(false);
    }
    /* -- remove member (employee or manager) */ async function removeMemberFromTeam(memberId, isManager = false) {
        if (!selectedTeamForMembers) return;
        const teamId = selectedTeamForMembers.id;
        // optimistic UI update
        setTeams((prev_4)=>prev_4.map((t_1)=>{
                if (t_1.id !== teamId) return t_1;
                if (isManager) {
                    return {
                        ...t_1,
                        manager: null
                    };
                }
                return {
                    ...t_1,
                    members: (t_1.members ?? []).filter((m_0)=>(m_0.id ?? m_0.user?.id ?? m_0.userId) !== memberId)
                };
            }));
        setSelectedTeamForMembers((prev_5)=>{
            if (!prev_5) return prev_5;
            if (isManager) {
                return {
                    ...prev_5,
                    manager: null
                };
            }
            return {
                ...prev_5,
                members: (prev_5.members ?? []).filter((m_1)=>(m_1.id ?? m_1.user?.id ?? m_1.userId) !== memberId)
            };
        });
        try {
            const res_3 = await fetch(`/api/teams/${encodeURIComponent(teamId)}/members/${encodeURIComponent(memberId)}`, {
                method: "DELETE",
                credentials: "same-origin"
            });
            if (!res_3.ok) throw new Error(`Failed to remove member (${res_3.status})`);
        } catch (err_6) {
            console.error("remove member failed:", err_6);
            alert("Failed to remove member: " + (err_6?.message || "unknown"));
            // rollback: refetch teams
            try {
                const r = await fetch("/api/teams", {
                    credentials: "same-origin"
                });
                const j_2 = await r.json().catch(()=>null);
                const list_3 = safeParseListResponse(j_2);
                setTeams(list_3);
                const updated_0 = list_3.find((x)=>x.id === teamId);
                setSelectedTeamForMembers(updated_0 ?? null);
            } catch (e_0) {
                console.warn("refetch teams failed:", e_0);
            }
        }
    }
    /* -- message button handler: open single widget instance, toggle behavior -- */ function handleOpenMessage(team_5) {
        // If widget already open for same team: toggle maximize off -> minimized or close
        if (chatState && chatState.team?.id === team_5.id) {
            // toggle open/close
            setChatState((s)=>s ? s.opened ? null : {
                    opened: true,
                    maximized: false,
                    team: team_5
                } : {
                    opened: true,
                    maximized: false,
                    team: team_5
                });
            return;
        }
        // open widget minimized by default
        setChatState({
            opened: true,
            maximized: false,
            team: team_5
        });
    }
    function handleCloseChat() {
        setChatState(null);
    }
    function handleUpdateChatState(s_0) {
        setChatState(s_0);
    }
    /* -- render -- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -14
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-4xl font-bold text-slate-900 mb-1",
                                    children: "Teams"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1344,
                                            columnNumber: 67
                                        }, this),
                                        " Manage and collaborate with your teams"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                    label: "Total Teams",
                                    value: String(teams.length),
                                    subtitle: "+0 this month",
                                    gradient: "from-blue-500 to-cyan-500",
                                    delay: 0
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                    label: "Active Members",
                                    value: String(teams.reduce((a, t_2)=>a + (t_2.members?.length ?? 0), 0)),
                                    subtitle: "Across all teams",
                                    gradient: "from-emerald-500 to-teal-500",
                                    delay: 0.05
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                                    label: "Active Projects",
                                    value: String(teams.reduce((a_0, t_3)=>a_0 + (t_3.projects ?? 0), 0)),
                                    subtitle: "In progress",
                                    gradient: "from-violet-500 to-purple-500",
                                    delay: 0.1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                    label: "Avg Completion",
                                    value: `${Math.round(teams.reduce((a_1, t_4)=>a_1 + (t_4.completion ?? 0), 0) / Math.max(1, teams.length))}%`,
                                    subtitle: "+0% from last month",
                                    gradient: "from-orange-500 to-rose-500",
                                    delay: 0.15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1352,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex flex-col sm:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search teams...",
                                            value: searchQuery,
                                            onChange: (e_1)=>setSearchQuery(e_1.target.value),
                                            className: "w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1359,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowCreate(true),
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1367,
                                            columnNumber: 15
                                        }, this),
                                        " Create Team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1356,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   grid grid-cols-1    sm:grid-cols-2    lg:grid-cols-2    xl:grid-cols-3    gap-6    items-start    auto-rows-auto   ",
                            children: teamsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-full p-6 bg-white rounded-2xl border border-slate-200",
                                children: "Loading teams…"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 1382,
                                columnNumber: 29
                            }, this) : filteredTeams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-full p-6 bg-white rounded-2xl border border-slate-200 text-center",
                                children: "No teams found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 1382,
                                columnNumber: 161
                            }, this) : filteredTeams.map((team_6, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                    team: team_6,
                                    delay: 0.18 + i * 0.04,
                                    onOpenSchedule: openScheduleForTeam,
                                    onEdit: handleEdit,
                                    onDelete: handleDeleteRequest,
                                    onViewMembers: openMembersModalForTeam,
                                    onMessage: handleOpenMessage
                                }, uidFromTeam(team_6, i), false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1382,
                                    columnNumber: 309
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1372,
                            columnNumber: 10
                        }, this),
                        teamsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-sm text-rose-600",
                            children: teamsError
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1385,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: (showCreate || editTeam) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                duration: 0.12
                            },
                            className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
                            onClick: ()=>{
                                setShowCreate(false);
                                setEditTeam(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1398,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full max-w-2xl p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$create$2d$team$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                managers: managers,
                                employees: employees,
                                loadingUsers: usersLoading,
                                initialTeam: editTeam ?? undefined,
                                onCreate: (payloadOrCreated_0)=>handleCreateOrUpdateTeam(payloadOrCreated_0),
                                onUpdate: (id_0, payload)=>handleCreateOrUpdateTeam(payload, {
                                        isEdit: true,
                                        id: id_0
                                    }),
                                onDelete: (id_1)=>{
                                    setTeams((prev_6)=>prev_6.filter((t_5)=>t_5.id !== id_1));
                                },
                                onClose: ()=>{
                                    setShowCreate(false);
                                    setEditTeam(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 1411,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1410,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1391,
                    columnNumber: 38
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: confirmDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-60 flex items-center justify-center",
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
                                duration: 0.12
                            },
                            className: "absolute inset-0 bg-black/20",
                            onClick: ()=>setConfirmDelete(null)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1433,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.98
                            },
                            animate: {
                                scale: 1
                            },
                            exit: {
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.12
                            },
                            className: "relative z-10 w-full max-w-md bg-white rounded-2xl border p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "Delete team?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 mt-2",
                                    children: "This will remove the team and its membership associations. This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 rounded-md",
                                            onClick: ()=>setConfirmDelete(null),
                                            type: "button",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 rounded-md bg-rose-600 text-white",
                                            onClick: ()=>confirmDeleteNow(confirmDelete),
                                            type: "button",
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                            lineNumber: 1455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                    lineNumber: 1453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1442,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1426,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSchedule && selectedTeamForSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            onClick: ()=>{
                                setShowSchedule(false);
                                setSelectedTeamForSchedule(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1470,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full max-w-2xl p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$forms$2f$Schedule$2d$meeting$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                team: selectedTeamForSchedule,
                                onClose: ()=>{
                                    setShowSchedule(false);
                                    setSelectedTeamForSchedule(null);
                                },
                                onSchedule: (m_2)=>handleScheduleMeeting(m_2)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                                lineNumber: 1483,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                            lineNumber: 1482,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1463,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showMembersModal && selectedTeamForMembers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MembersModal, {
                    open: showMembersModal,
                    onClose: closeMembersModal,
                    team: selectedTeamForMembers,
                    onRemove: removeMemberFromTeam
                }, selectedTeamForMembers.id ?? "members-modal", false, {
                    fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                    lineNumber: 1493,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatWidget, {
                state: chatState,
                onClose: handleCloseChat,
                onUpdateState: handleUpdateChatState
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
                lineNumber: 1497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(TeamsPage, "bUzHU1wcF5fM09hx8QlUObgud90=");
_c4 = TeamsPage;
function _temp(s) {
    return !s;
}
function _temp2(e_0) {
    return e_0.stopPropagation();
}
function _temp3(p) {
    return p[0];
}
function _temp4(member, idx) {
    const key = member?.user?.id ?? member?.id ?? `m_${idx}`;
    const title = member?.user?.name ?? member?.name ?? "";
    const initials = member?.user?.name ? member.user.name.split(" ").map(_temp3).slice(0, 2).join("") : title ? title.slice(0, 2).toUpperCase() : "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        title: title,
        className: "w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm",
        children: initials
    }, key, false, {
        fileName: "[project]/src/app/dashboard/admin/teams/page.tsx",
        lineNumber: 1513,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ChatWidget");
__turbopack_context__.k.register(_c1, "TeamCard");
__turbopack_context__.k.register(_c2, "StatCard");
__turbopack_context__.k.register(_c3, "MembersModal");
__turbopack_context__.k.register(_c4, "TeamsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4ac4d35b._.js.map