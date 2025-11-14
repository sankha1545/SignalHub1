(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(auth)/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File: app/(auth)/signup/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ---------- helpers ---------- */ async function postJSON(url, body) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            credentials: "include"
        });
        try {
            return await res.json();
        } catch  {
            return {
                ok: res.ok,
                error: res.statusText || "Unexpected response"
            };
        }
    } catch (err) {
        return {
            error: err?.message || String(err)
        };
    }
}
/* ---------- CountryDropdown component ---------- */ function useOnClickOutside(ref, handler) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "3d98d44f85c56591cd0ed8b13218c6ddb2370652e583b21df97b50de9ef625cc") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d98d44f85c56591cd0ed8b13218c6ddb2370652e583b21df97b50de9ef625cc";
    }
    let t0;
    let t1;
    if ($[1] !== handler || $[2] !== ref) {
        t0 = ({
            "useOnClickOutside[useEffect()]": ()=>{
                const listener = function listener(e) {
                    if (!ref.current || ref.current.contains(e.target)) {
                        return;
                    }
                    handler();
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return ()=>{
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            }
        })["useOnClickOutside[useEffect()]"];
        t1 = [
            ref,
            handler
        ];
        $[1] = handler;
        $[2] = ref;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function CountryDropdown(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "3d98d44f85c56591cd0ed8b13218c6ddb2370652e583b21df97b50de9ef625cc") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d98d44f85c56591cd0ed8b13218c6ddb2370652e583b21df97b50de9ef625cc";
    }
    const { countries, value, onChange, disabled, placeholder: t1 } = t0;
    const placeholder = t1 === undefined ? "Select country" : t1;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [highlight, setHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CountryDropdown[useOnClickOutside()]": ()=>setOpen(false)
        })["CountryDropdown[useOnClickOutside()]"];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    useOnClickOutside(rootRef, t2);
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CountryDropdown[useEffect()]": ()=>{
                setHighlight(0);
            }
        })["CountryDropdown[useEffect()]"];
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== open || $[4] !== query) {
        t4 = [
            query,
            open
        ];
        $[3] = open;
        $[4] = query;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== countries) {
        t5 = countries || [];
        $[6] = countries;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== query || $[9] !== t5) {
        let t7;
        if ($[11] !== query) {
            t7 = ({
                "CountryDropdown[(anonymous)()]": (c)=>{
                    if (!query) {
                        return true;
                    }
                    const q = query.toLowerCase();
                    return c.name.toLowerCase().includes(q) || (c.callingCode || "").includes(q) || (c.cca2 || "").toLowerCase().includes(q);
                }
            })["CountryDropdown[(anonymous)()]"];
            $[11] = query;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        t6 = t5.filter(t7);
        $[8] = query;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const items = t6;
    let t7;
    if ($[13] !== highlight || $[14] !== items || $[15] !== onChange || $[16] !== open) {
        t7 = function handleKeyDown(e) {
            if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
                e.preventDefault();
                setOpen(true);
                setTimeout({
                    "CountryDropdown[handleKeyDown > setTimeout()]": ()=>searchRef.current?.focus()
                }["CountryDropdown[handleKeyDown > setTimeout()]"], 10);
                return;
            }
            if (!open) {
                return;
            }
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setHighlight({
                    "CountryDropdown[handleKeyDown > setHighlight()]": (h)=>Math.min(h + 1, Math.max(0, items.length - 1))
                }["CountryDropdown[handleKeyDown > setHighlight()]"]);
                const nextIdx = Math.min(highlight + 1, items.length - 1);
                listRef.current?.querySelectorAll("li")[nextIdx]?.scrollIntoView({
                    block: "nearest"
                });
            } else {
                if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setHighlight(_CountryDropdownHandleKeyDownSetHighlight);
                    const prevIdx = Math.max(highlight - 1, 0);
                    listRef.current?.querySelectorAll("li")[prevIdx]?.scrollIntoView({
                        block: "nearest"
                    });
                } else {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        const pick = items[Math.min(highlight, items.length - 1)];
                        if (pick) {
                            onChange(pick);
                            setOpen(false);
                        }
                    } else {
                        if (e.key === "Escape") {
                            e.preventDefault();
                            setOpen(false);
                        }
                    }
                }
            }
        };
        $[13] = highlight;
        $[14] = items;
        $[15] = onChange;
        $[16] = open;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const handleKeyDown = t7;
    let t8;
    if ($[18] !== disabled) {
        t8 = ({
            "CountryDropdown[<button>.onClick]": ()=>{
                if (disabled) {
                    return;
                }
                setOpen(_CountryDropdownButtonOnClickSetOpen);
                setTimeout({
                    "CountryDropdown[<button>.onClick > setTimeout()]": ()=>searchRef.current?.focus()
                }["CountryDropdown[<button>.onClick > setTimeout()]"], 10);
            }
        })["CountryDropdown[<button>.onClick]"];
        $[18] = disabled;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = `w-full text-left px-3 py-2 rounded border flex items-center gap-3 bg-white ${disabled ? "opacity-60 pointer-events-none" : "hover:shadow-sm"} transition`;
    let t10;
    if ($[20] !== value) {
        t10 = value?.flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: value.flag,
            alt: `${value.name} flag`,
            className: "w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 255,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-4 bg-slate-100 rounded-sm flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 255,
            columnNumber: 147
        }, this);
        $[20] = value;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== placeholder || $[23] !== value) {
        t11 = value ? value.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-400",
            children: placeholder
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 263,
            columnNumber: 32
        }, this);
        $[22] = placeholder;
        $[23] = value;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium text-sm truncate",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const t13 = value ? value.callingCode : "Select country code";
    let t14;
    if ($[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500 truncate",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t12 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "truncate",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t10 || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 min-w-0",
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    const t17 = `h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`;
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.355a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto text-slate-400 text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t17,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 315,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== handleKeyDown || $[39] !== open || $[40] !== t16 || $[41] !== t19 || $[42] !== t8 || $[43] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": open,
            onClick: t8,
            onKeyDown: handleKeyDown,
            className: t9,
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[38] = handleKeyDown;
        $[39] = open;
        $[40] = t16;
        $[41] = t19;
        $[42] = t8;
        $[43] = t9;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    const t21 = `absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border overflow-hidden transform transition-all duration-150 ${open ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"}`;
    let t22;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "CountryDropdown[<input>.onChange]": (e_0)=>setQuery(e_0.target.value)
        })["CountryDropdown[<input>.onChange]"];
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== handleKeyDown || $[47] !== query) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: searchRef,
                value: query,
                onChange: t22,
                placeholder: "Search country name, code, or dial (+91)",
                onKeyDown: handleKeyDown,
                className: "w-full px-3 py-2 rounded border focus:ring-2 focus:ring-indigo-300 outline-none text-sm",
                "aria-label": "Search country"
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 346,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[46] = handleKeyDown;
        $[47] = query;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== highlight || $[50] !== items || $[51] !== onChange || $[52] !== value?.callingCode || $[53] !== value?.cca2) {
        t24 = items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "px-4 py-3 text-sm text-slate-500",
            children: "No matches"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 355,
            columnNumber: 32
        }, this) : items.map({
            "CountryDropdown[items.map()]": (c_0, idx)=>{
                const isActive = idx === highlight;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    role: "option",
                    "aria-selected": value?.callingCode === c_0.callingCode && value?.cca2 === c_0.cca2,
                    onMouseEnter: {
                        "CountryDropdown[items.map() > <li>.onMouseEnter]": ()=>setHighlight(idx)
                    }["CountryDropdown[items.map() > <li>.onMouseEnter]"],
                    onClick: {
                        "CountryDropdown[items.map() > <li>.onClick]": ()=>{
                            onChange(c_0);
                            setOpen(false);
                        }
                    }["CountryDropdown[items.map() > <li>.onClick]"],
                    className: `px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-50 ${isActive ? "bg-indigo-50" : ""}`,
                    children: [
                        c_0.flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: c_0.flag,
                            alt: `${c_0.name} flag`,
                            className: "w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 365,
                            columnNumber: 186
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-4 bg-slate-100 rounded-sm flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 365,
                            columnNumber: 304
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium truncate",
                                    children: c_0.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 402
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500 truncate",
                                    children: [
                                        c_0.callingCode,
                                        " • ",
                                        c_0.cca2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 464
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 365,
                            columnNumber: 370
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-600",
                            children: value?.callingCode === c_0.callingCode && value?.cca2 === c_0.cca2 ? "Selected" : ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 365,
                            columnNumber: 555
                        }, this)
                    ]
                }, `${c_0.callingCode}-${c_0.cca2}-${c_0.name}`, true, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 358,
                    columnNumber: 16
                }, this);
            }
        }["CountryDropdown[items.map()]"]);
        $[49] = highlight;
        $[50] = items;
        $[51] = onChange;
        $[52] = value?.callingCode;
        $[53] = value?.cca2;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-56 overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                role: "listbox",
                ref: listRef,
                "aria-label": "Country options",
                className: "divide-y",
                children: t24
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 379,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[55] = t24;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== t21 || $[58] !== t23 || $[59] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            role: "dialog",
            "aria-modal": "false",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[57] = t21;
        $[58] = t23;
        $[59] = t25;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] !== t20 || $[62] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full",
            ref: rootRef,
            children: [
                t20,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[61] = t20;
        $[62] = t26;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    return t27;
}
_s1(CountryDropdown, "3rMNzF/oK+g7zBr9ZogjA6nVclY=", false, function() {
    return [
        useOnClickOutside
    ];
});
_c = CountryDropdown;
/* ---------- Signup page component ---------- */ function _CountryDropdownButtonOnClickSetOpen(v) {
    return !v;
}
function _CountryDropdownHandleKeyDownSetHighlight(h_0) {
    return Math.max(h_0 - 1, 0);
}
function SignupPage() {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("choose");
    // Fields
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailOtp, setEmailOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const [emailCode, setEmailCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tempToken, setTempToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countryLoading, setCountryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [countryError, setCountryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneOtp, setPhoneOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const [phoneCode, setPhoneCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [orgName, setOrgName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // password visibility toggles
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // password validation UI
    const [passwordTouched, setPasswordTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordErrors, setPasswordErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [passwordsMatch, setPasswordsMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // UI
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Resend timers
    const [emailResendAvailableAt, setEmailResendAvailableAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneResendAvailableAt, setPhoneResendAvailableAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // stable on server
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            setNow(Date.now()); // now real client time
            const id = window.setInterval({
                "SignupPage.useEffect.id": ()=>setNow(Date.now())
            }["SignupPage.useEffect.id"], 1000);
            return ({
                "SignupPage.useEffect": ()=>window.clearInterval(id)
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
    function modeToStep(m) {
        switch(m){
            case "choose":
                return 1;
            case "email":
            case "verifyEmail":
                return 2;
            case "phone":
            case "verifyPhone":
                return 3;
            case "org":
            case "done":
                return 4;
            default:
                return 1;
        }
    }
    const step = modeToStep(mode);
    /* ---------- Country fetch (robust) ---------- */ const BUILT_IN_FALLBACK = [
        {
            name: "India",
            cca2: "IN",
            callingCode: "+91",
            flag: "https://flagcdn.com/w40/in.png"
        },
        {
            name: "United States",
            cca2: "US",
            callingCode: "+1",
            flag: "https://flagcdn.com/w40/us.png"
        },
        {
            name: "United Kingdom",
            cca2: "GB",
            callingCode: "+44",
            flag: "https://flagcdn.com/w40/gb.png"
        },
        {
            name: "Canada",
            cca2: "CA",
            callingCode: "+1",
            flag: "https://flagcdn.com/w40/ca.png"
        },
        {
            name: "Australia",
            cca2: "AU",
            callingCode: "+61",
            flag: "https://flagcdn.com/w40/au.png"
        }
    ];
    function normalizeCallingCode(raw) {
        try {
            if (!raw) return "";
            if (typeof raw === "string") {
                const s = raw.trim();
                if (!s) return "";
                if (s.startsWith("+")) return s;
                const digits = s.replace(/[^\d]/g, "");
                return digits ? `+${digits}` : "";
            }
            if (Array.isArray(raw) && raw.length > 0) return normalizeCallingCode(raw[0]);
            if (typeof raw === "object") {
                if (raw.root) {
                    const root = String(raw.root || "").trim();
                    const suffix = Array.isArray(raw.suffixes) && raw.suffixes.length > 0 ? String(raw.suffixes[0]) : "";
                    const combined = `${root}${suffix}`;
                    return combined.startsWith("+") ? combined : combined ? `+${combined.replace(/[^\d+]/g, "")}` : "";
                }
                if (raw.callingCodes && Array.isArray(raw.callingCodes) && raw.callingCodes[0]) {
                    return normalizeCallingCode(raw.callingCodes[0]);
                }
            }
            return "";
        } catch  {
            return "";
        }
    }
    function extractFlag(raw, cca2) {
        try {
            if (!raw) return cca2 ? `https://flagcdn.com/w40/${cca2.toLowerCase()}.png` : undefined;
            if (raw.flag) return raw.flag;
            if (raw.flags) {
                if (typeof raw.flags === "string") return raw.flags;
                if (raw.flags.svg) return raw.flags.svg;
                if (raw.flags.png) return raw.flags.png;
            }
            if (raw.emoji) return raw.emoji;
        } catch  {}
        return cca2 ? `https://flagcdn.com/w40/${(cca2 || "").toLowerCase()}.png` : undefined;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            let mounted = true;
            (async function loadCountries() {
                setCountryLoading(true);
                setCountryError(null);
                try {
                    const res = await fetch("/api/countries", {
                        cache: "no-store"
                    }).catch({
                        "SignupPage.useEffect.loadCountries": ()=>null
                    }["SignupPage.useEffect.loadCountries"]);
                    let rawList = null;
                    if (res && res.ok) {
                        const text = await res.text().catch({
                            "SignupPage.useEffect.loadCountries": ()=>""
                        }["SignupPage.useEffect.loadCountries"]);
                        let json = null;
                        try {
                            json = text ? JSON.parse(text) : null;
                        } catch  {
                            json = null;
                        }
                        if (Array.isArray(json)) rawList = json;
                        else if (json && Array.isArray(json.countries)) rawList = json.countries;
                        else if (json && Array.isArray(json.data)) rawList = json.data;
                    }
                    // fallback to /api/meta/countries if /api/countries yields nothing
                    if (!rawList || rawList.length === 0) {
                        try {
                            const mres = await fetch("/api/meta/countries", {
                                cache: "no-store"
                            }).catch({
                                "SignupPage.useEffect.loadCountries": ()=>null
                            }["SignupPage.useEffect.loadCountries"]);
                            if (mres && mres.ok) {
                                const mjson = await mres.json().catch({
                                    "SignupPage.useEffect.loadCountries": ()=>null
                                }["SignupPage.useEffect.loadCountries"]);
                                if (Array.isArray(mjson)) rawList = mjson;
                                else if (mjson && Array.isArray(mjson.countries)) rawList = mjson.countries;
                            }
                        } catch (e) {
                        // ignore
                        }
                    }
                    // Map to Country shape
                    let parsed = [];
                    if (Array.isArray(rawList) && rawList.length > 0) {
                        parsed = rawList.map({
                            "SignupPage.useEffect.loadCountries": (c)=>{
                                const cca2 = (c.cca2 || c.code || c.CCA2 || "").toString().toUpperCase();
                                const name = (typeof c.name === "string" ? c.name : c.name && (c.name.common || c.name.official) || c.common || c.country || c.name) || "";
                                const callingCode = String(c.callingCode || c.dialCode || c.callCode || c.phoneCode || normalizeCallingCode(c.callingCodes) || normalizeCallingCode(c.idd) || "").trim() || "";
                                const callingCodeNormalized = callingCode ? callingCode.startsWith("+") ? callingCode : `+${callingCode.replace(/[^\d]/g, "")}` : "";
                                const flag = extractFlag(c, cca2);
                                return {
                                    name: name || cca2 || "",
                                    cca2: cca2 || (name ? name.slice(0, 2).toUpperCase() : ""),
                                    callingCode: callingCodeNormalized,
                                    flag
                                };
                            }
                        }["SignupPage.useEffect.loadCountries"]).filter({
                            "SignupPage.useEffect.loadCountries": (c)=>c.name && (c.callingCode || c.cca2)
                        }["SignupPage.useEffect.loadCountries"]);
                        // dedupe
                        const seen = new Map();
                        for (const it of parsed){
                            const key = (it.cca2 || it.callingCode || it.name).toUpperCase();
                            if (!seen.has(key)) seen.set(key, it);
                        }
                        parsed = Array.from(seen.values()).sort({
                            "SignupPage.useEffect.loadCountries": (a, b)=>a.name.localeCompare(b.name)
                        }["SignupPage.useEffect.loadCountries"]);
                    }
                    // final fallback
                    if (!Array.isArray(parsed) || parsed.length === 0) {
                        parsed = BUILT_IN_FALLBACK;
                        setCountryError("Country list unavailable — using fallback. You can type your country manually.");
                    } else {
                        setCountryError(null);
                    }
                    if (!mounted) return;
                    setCountries(parsed);
                    // pick default by locale -> +91 -> +1 -> first
                    const locale = (navigator.language || navigator.languages && navigator.languages[0] || "").toLowerCase();
                    const match = locale.match(/-([a-z]{2})$/i);
                    let defaultCountry = null;
                    if (match) {
                        const cca = match[1].toUpperCase();
                        defaultCountry = parsed.find({
                            "SignupPage.useEffect.loadCountries": (c)=>c.cca2 === cca
                        }["SignupPage.useEffect.loadCountries"]) || null;
                    }
                    if (!defaultCountry) defaultCountry = parsed.find({
                        "SignupPage.useEffect.loadCountries": (c)=>c.callingCode === "+91"
                    }["SignupPage.useEffect.loadCountries"]) || parsed.find({
                        "SignupPage.useEffect.loadCountries": (c)=>c.callingCode === "+1"
                    }["SignupPage.useEffect.loadCountries"]) || parsed[0] || null;
                    if (mounted) setCountry(defaultCountry);
                } catch (err) {
                    if (!mounted) return;
                    setCountries(BUILT_IN_FALLBACK);
                    setCountryError(String(err?.message || err) || "Failed to load countries");
                } finally{
                    if (mounted) setCountryLoading(false);
                }
            })();
            return ({
                "SignupPage.useEffect": ()=>{
                    // cleanup
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    mounted = false;
                }
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
    // When user selects a country, ensure the prefix shows up in UI and assist placeholder
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            if (!country) return;
        // If phone is empty, prefill placeholder hint by setting phone to empty (placeholder uses country in UI)
        // We avoid modifying a non-empty phone typed by user.
        // This effect merely ensures UI shows prefix; logic to send uses buildFullPhone.
        }
    }["SignupPage.useEffect"], [
        country
    ]);
    // helpers: countdown formatter
    function formatCountdown(unixMs) {
        if (!unixMs) return null;
        const s = Math.max(0, Math.ceil((unixMs - now) / 1000));
        if (s <= 0) return null;
        return `${s}s`;
    }
    function setResendDeadline(setter, seconds = 30) {
        setter(Date.now() + seconds * 1000);
    }
    // OTP utils
    function handleOtpInput(e, idx, otpArr, setOtpArr) {
        const target = e.target;
        const key = e.key;
        if (key === "Backspace") {
            e.preventDefault();
            const next = [
                ...otpArr
            ];
            if (next[idx]) {
                next[idx] = "";
                setOtpArr(next);
            } else {
                const prev = Math.max(0, idx - 1);
                const prevInput = document.getElementById(`otp-${target.dataset.for}-${prev}`);
                if (prevInput) {
                    prevInput.focus();
                    const n = [
                        ...otpArr
                    ];
                    n[prev] = "";
                    setOtpArr(n);
                }
            }
        } else if (/^[0-9]$/.test(key)) {
            e.preventDefault();
            const next = [
                ...otpArr
            ];
            next[idx] = key;
            setOtpArr(next);
            const nextIdx = Math.min(next.length - 1, idx + 1);
            const nextInput = document.getElementById(`otp-${target.dataset.for}-${nextIdx}`);
            if (nextInput) nextInput.focus();
        } else if (key === "ArrowLeft") {
            e.preventDefault();
            const prev = Math.max(0, idx - 1);
            const prevInput = document.getElementById(`otp-${target.dataset.for}-${prev}`);
            prevInput?.focus();
        } else if (key === "ArrowRight") {
            e.preventDefault();
            const nxt = Math.min(otpArr.length - 1, idx + 1);
            const nextInput = document.getElementById(`otp-${target.dataset.for}-${nxt}`);
            nextInput?.focus();
        }
    }
    function handleOtpPaste(e, otpArr, setOtpArr) {
        e.preventDefault();
        const paste = e.clipboardData.getData("text").trim();
        const digits = paste.replace(/\D/g, "").slice(0, otpArr.length).split("");
        if (digits.length === 0) return;
        const next = [
            ...otpArr
        ];
        for(let i = 0; i < digits.length; i++)next[i] = digits[i];
        setOtpArr(next);
        const firstEmpty = next.findIndex((c)=>!c);
        const focusIdx = firstEmpty === -1 ? next.length - 1 : firstEmpty;
        const el = document.getElementById(`otp-${e.target.dataset.for}-${focusIdx}`);
        el?.focus();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>setEmailCode(emailOtp.join(""))
    }["SignupPage.useEffect"], [
        emailOtp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>setPhoneCode(phoneOtp.join(""))
    }["SignupPage.useEffect"], [
        phoneOtp
    ]);
    // password validation
    function validatePassword(pw) {
        const errs = [];
        if (!pw || pw.length < 8) errs.push("Password must be at least 8 characters.");
        if (!/[A-Z]/.test(pw)) errs.push("Include at least one uppercase letter.");
        if (!/[a-z]/.test(pw)) errs.push("Include at least one lowercase letter.");
        if (!/[0-9]/.test(pw)) errs.push("Include at least one number.");
        if (!/[^A-Za-z0-9]/.test(pw)) errs.push("Include at least one symbol (e.g. !@#$%).");
        return errs;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            const errs = validatePassword(password);
            setPasswordErrors(errs);
            setPasswordsMatch(password === confirmPassword || confirmPassword.length === 0);
        }
    }["SignupPage.useEffect"], [
        password,
        confirmPassword
    ]);
    // API actions
    async function handleSendEmailOtp(e) {
        e?.preventDefault();
        setError(null);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            const data = await postJSON("/api/auth/email/send", {
                email
            });
            if (data?.ok) {
                setMode("verifyEmail");
                setResendDeadline(setEmailResendAvailableAt, 45);
                setEmailOtp(Array(6).fill(""));
                setTimeout(()=>document.getElementById("otp-email-0")?.focus(), 120);
            } else setError(data?.error || "Failed to send OTP. Try again.");
        } catch (err) {
            setError(err?.message || String(err));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyEmailOtp(e) {
        e?.preventDefault();
        setError(null);
        if (emailCode.length < 4) {
            setError("Enter the full code received by email.");
            return;
        }
        setLoading(true);
        try {
            const data = await postJSON("/api/auth/email/verify", {
                email,
                code: emailCode,
                flow: "signup"
            });
            if (data?.ok) {
                if (data.activated && data.sessionToken) {
                    setSuccess("Email verified — signing you in...");
                    setTimeout(()=>router.push("/account"), 700);
                    return;
                }
                if (data.tempToken) {
                    setTempToken(data.tempToken);
                    setMode("phone");
                    setResendDeadline(setPhoneResendAvailableAt, 45);
                    setPhoneOtp(Array(6).fill(""));
                    setTimeout(()=>document.getElementById("otp-phone-0")?.focus(), 120);
                    return;
                }
                setMode("phone");
                setTempToken(data.tempToken ?? null);
            } else {
                setError(data?.error || data?.reason || "Invalid or expired code.");
            }
        } catch (err) {
            setError(err?.message || String(err));
        } finally{
            setLoading(false);
        }
    }
    async function handleSendPhoneOtp(e) {
        e?.preventDefault();
        setError(null);
        const full = buildFullPhone(phone, country);
        if (!full || !/^\+?[0-9]{7,20}$/.test(full)) {
            setError("Please enter a valid phone number including country code (or select country).");
            return;
        }
        setLoading(true);
        try {
            const data = await postJSON("/api/auth/phone/send", {
                phone: full
            });
            if (data?.ok) {
                setMode("verifyPhone");
                setResendDeadline(setPhoneResendAvailableAt, 45);
                setPhoneOtp(Array(6).fill(""));
                setTimeout(()=>document.getElementById("otp-phone-0")?.focus(), 120);
            } else {
                // If Twilio trial fallback returns ok but with flags, handle it
                if (data?.twilioTrialUnverified || data?.devOtpLogged) {
                    // treat as ok for dev/test
                    setMode("verifyPhone");
                    setResendDeadline(setPhoneResendAvailableAt, 45);
                    setPhoneOtp(Array(6).fill(""));
                    setTimeout(()=>document.getElementById("otp-phone-0")?.focus(), 120);
                    return;
                }
                setError(data?.error || "Failed to send SMS OTP.");
            }
        } catch (err) {
            setError(String(err));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyPhoneOtp(e) {
        e?.preventDefault();
        setError(null);
        if (phoneCode.length < 4) {
            setError("Enter the full SMS code you received.");
            return;
        }
        setLoading(true);
        try {
            const full = buildFullPhone(phone, country);
            const res = await postJSON("/api/auth/phone/verify", {
                phone: full,
                code: phoneCode,
                tempToken
            });
            if (res?.ok) {
                if (res.activated && res.sessionToken) {
                    setSuccess("Phone verified — signing you in...");
                    setTimeout(()=>router.push("/account"), 700);
                    return;
                }
                if (res.tempToken) {
                    setTempToken(res.tempToken);
                    setMode("org");
                    return;
                }
                setMode("org");
            } else {
                setError(res?.reason || res?.error || "Phone verification failed.");
            }
        } catch (err) {
            setError(String(err));
        } finally{
            setLoading(false);
        }
    }
    function buildFullPhone(typed, country) {
        if (!typed) return null;
        const raw = typed.trim();
        if (raw.startsWith("+")) {
            const digits = raw.replace(/[^\d+]/g, "");
            return digits;
        }
        const cc = country?.callingCode ?? "";
        const onlyDigits = raw.replace(/\D/g, "");
        if (!cc && !onlyDigits) return null;
        const normalizedCc = cc.startsWith("+") ? cc : cc ? `+${cc.replace(/[^\d]/g, "")}` : "";
        return `${normalizedCc}${onlyDigits}`;
    }
    async function handleFinalize(e) {
        e?.preventDefault();
        setError(null);
        setPasswordTouched(true);
        const errs = validatePassword(password);
        if (errs.length > 0) {
            setPasswordErrors(errs);
            setError("Please fix the password requirements.");
            return;
        }
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            setError("Passwords do not match.");
            return;
        }
        if (!orgName?.trim()) {
            setError("Organization name is required.");
            return;
        }
        if (!name?.trim()) {
            setError("Your name is required.");
            return;
        }
        const normalizedPhone = buildFullPhone(phone, country);
        const payload = {
            tempToken,
            organizationName: orgName.trim(),
            password,
            name: name.trim()
        };
        if (email) payload.email = email;
        if (normalizedPhone) payload.phone = normalizedPhone;
        if (country) payload.country = {
            name: country.name,
            cca2: country.cca2,
            callingCode: country.callingCode
        };
        setLoading(true);
        try {
            const res = await postJSON("/api/auth/signup/finalize", payload);
            if (res?.ok) {
                setSuccess("Account created — signing you in...");
                setMode("done");
                setTimeout(()=>router.push("/account"), 700);
                return;
            }
            if (res?.activated === false && res?.tempToken) {
                setTempToken(res.tempToken);
                setError("Account created but not yet activated. Please complete verification.");
                setMode(res.tempToken ? "org" : "verifyEmail");
                return;
            }
            setError(res?.error || res?.reason || "Failed to finalize signup.");
        } catch (err) {
            setError(String(err) || "Unexpected error");
        } finally{
            setLoading(false);
        }
    }
    async function handleResendEmail() {
        if (emailResendAvailableAt && emailResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const data = await postJSON("/api/auth/email/send", {
                email,
                resend: true
            });
            if (data?.ok) setResendDeadline(setEmailResendAvailableAt, 45);
            else setError(data?.error || "Unable to resend OTP.");
        } catch (err) {
            setError(String(err));
        } finally{
            setLoading(false);
        }
    }
    async function handleResendPhone() {
        if (phoneResendAvailableAt && phoneResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const full = buildFullPhone(phone, country);
            const data = await postJSON("/api/auth/phone/send", {
                phone: full,
                resend: true
            });
            if (data?.ok) setResendDeadline(setPhoneResendAvailableAt, 45);
            else setError(data?.error || "Unable to resend SMS OTP.");
        } catch (err) {
            setError(String(err));
        } finally{
            setLoading(false);
        }
    }
    // compute fill percent (0..100)
    function computeFillPercent() {
        const s = step;
        if (s <= 1) return 0;
        return Math.round((s - 1) / 3 * 100);
    }
    const fillPercent = computeFillPercent();
    /* ---------- UI (responsive & accessible) ---------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 sm:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ring-1 ring-slate-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-10 flex items-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-xl",
                                        children: "U"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl sm:text-3xl font-extrabold text-slate-900",
                                                children: "Welcome to SignalHub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 mt-1",
                                                children: "Create an admin account and organization — secure by default."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 999,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 995,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-4 right-4 top-6 h-0.5 bg-slate-100 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 1006,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-4 top-6 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-500 ease-out",
                                            style: {
                                                width: `${fillPercent}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-between px-2",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((n)=>{
                                                const isActive = n === step;
                                                const isCompleted = n < step;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col items-center text-center px-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-semibold transition ${isCompleted ? "bg-indigo-600 text-white shadow-lg scale-105" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 animate-pulse" : "bg-white border border-slate-200 text-slate-600"}`,
                                                            children: n
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-slate-500 mt-2",
                                                            children: [
                                                                "Choose",
                                                                "Email",
                                                                "Phone",
                                                                "Org"
                                                            ][n - 1]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, n, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 1004,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "status",
                                "aria-live": "polite",
                                className: "min-h-[1.4rem] mb-4",
                                children: [
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-600",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 25
                                    }, this),
                                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-emerald-600",
                                        children: success
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 1026,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    mode === "choose" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.location.href = "/api/auth/oauth/google/start?flow=signup",
                                                className: "w-full p-3 border rounded-lg flex items-center gap-3 justify-center hover:shadow-lg transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/google.png",
                                                        alt: "Google",
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Continue with Google"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-sm text-slate-400",
                                                children: "or"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode("email"),
                                                className: "w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md",
                                                children: "Sign up with Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm mt-2",
                                                children: [
                                                    "Already have an account? ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "text-blue-700 underline",
                                                        href: "/login",
                                                        children: "Login"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 74
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 37
                                    }, this),
                                    mode === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSendEmailOtp,
                                        className: "space-y-3",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 focus:outline-none",
                                                placeholder: "you@example.com",
                                                type: "email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1051,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                        children: loading ? "Sending..." : "Send code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("choose"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1052,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "A one-time code will be sent to verify your email."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 36
                                    }, this),
                                    mode === "verifyEmail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleVerifyEmailOtp,
                                        className: "space-y-3",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600",
                                                children: [
                                                    "Enter the code sent to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: emailOtp.map((digit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `otp-email-${i}`,
                                                        "data-for": "email",
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*",
                                                        maxLength: 1,
                                                        value: digit,
                                                        onPaste: (e)=>handleOtpPaste(e, emailOtp, setEmailOtp),
                                                        onKeyDown: (e)=>handleOtpInput(e, i, emailOtp, setEmailOtp),
                                                        onChange: ()=>{},
                                                        "aria-label": `Email code digit ${i + 1}`,
                                                        className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                        children: loading ? "Verifying..." : "Verify"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("email"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1075,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: formatCountdown(emailResendAvailableAt) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Resend in ",
                                                                formatCountdown(emailResendAvailableAt)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 66
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleResendEmail,
                                                            className: "underline text-indigo-600",
                                                            children: "Resend code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 133
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: "Didn't receive? Check spam."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1080,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 42
                                    }, this),
                                    mode === "phone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSendPhoneOtp,
                                        className: "space-y-3",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1092,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-start flex-col sm:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full sm:w-44",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryDropdown, {
                                                                countries: countries,
                                                                value: country,
                                                                onChange: (c)=>{
                                                                    setCountry(c);
                                                                // if phone is empty, add calling code as hint to input (we don't auto-prepend to typed number)
                                                                // we leave actual submission to buildFullPhone
                                                                },
                                                                disabled: countryLoading || !!countryError,
                                                                placeholder: countryLoading ? "Loading..." : countryError ? "Unavailable" : "Select country"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-2",
                                                                children: countryLoading ? "Loading dial codes..." : countryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "Unable to load list"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1101,
                                                                    columnNumber: 127
                                                                }, this) : "Select country code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1101,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center px-3 border rounded bg-slate-50 text-sm whitespace-nowrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mr-2",
                                                                            children: country?.flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: country.flag,
                                                                                alt: country.name,
                                                                                className: "w-5 h-4 object-cover inline-block"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 1107,
                                                                                columnNumber: 67
                                                                            }, this) : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 1107,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: country?.callingCode ?? "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 1108,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1106,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: phone,
                                                                    onChange: (e)=>setPhone(e.target.value),
                                                                    placeholder: country ? `${country.callingCode} 98765 43210` : "98765 43210",
                                                                    className: "flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-300 bg-indigo-50",
                                                                    "aria-label": "Phone number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1110,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                        children: loading ? "Sending..." : "Send SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("verifyEmail"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Standard SMS rates may apply."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 36
                                    }, this),
                                    mode === "verifyPhone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleVerifyPhoneOtp,
                                        className: "space-y-3",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600",
                                                children: [
                                                    "Enter the SMS code sent to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            country?.callingCode ?? "",
                                                            " ",
                                                            phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1129,
                                                        columnNumber: 84
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "SMS Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: phoneOtp.map((digit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `otp-phone-${i}`,
                                                        "data-for": "phone",
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*",
                                                        maxLength: 1,
                                                        value: digit,
                                                        onPaste: (e)=>handleOtpPaste(e, phoneOtp, setPhoneOtp),
                                                        onKeyDown: (e)=>handleOtpInput(e, i, phoneOtp, setPhoneOtp),
                                                        onChange: ()=>{},
                                                        "aria-label": `Phone code digit ${i + 1}`,
                                                        className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1133,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                        children: loading ? "Verifying..." : "Verify"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("phone"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1140,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: formatCountdown(phoneResendAvailableAt) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Resend in ",
                                                                formatCountdown(phoneResendAvailableAt)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 66
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleResendPhone,
                                                            className: "underline text-indigo-600",
                                                            children: "Resend SMS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 133
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "Contact support if you don't receive SMS."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1128,
                                        columnNumber: 42
                                    }, this),
                                    mode === "org" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleFinalize,
                                        className: "space-y-4",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Organization name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: orgName,
                                                placeholder: "Enter the name",
                                                onChange: (e)=>setOrgName(e.target.value),
                                                className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? "text" : "password",
                                                        value: password,
                                                        onChange: (e)=>{
                                                            setPasswordTouched(true);
                                                            setPassword(e.target.value);
                                                        },
                                                        onBlur: ()=>setPasswordTouched(true),
                                                        placeholder: "Create a strong password",
                                                        className: "w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12",
                                                        "aria-required": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword((v)=>!v),
                                                        "aria-label": showPassword ? "Hide password" : "Show password",
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100",
                                                        children: showPassword ? "Hide" : "Show"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1169,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Retype password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showConfirmPassword ? "text" : "password",
                                                        value: confirmPassword,
                                                        onChange: (e)=>setConfirmPassword(e.target.value),
                                                        onBlur: ()=>setPasswordTouched(true),
                                                        placeholder: "Retype password",
                                                        className: `w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 ${passwordTouched && !passwordsMatch ? "border-red-400" : ""}`,
                                                        "aria-required": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1176,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowConfirmPassword((v)=>!v),
                                                        "aria-label": showConfirmPassword ? "Hide password" : "Show password",
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100",
                                                        children: showConfirmPassword ? "Hide" : "Show"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-1",
                                                        children: "Password must contain:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-1",
                                                        children: [
                                                            {
                                                                ok: password.length >= 8,
                                                                label: "8+ characters"
                                                            },
                                                            {
                                                                ok: /[A-Z]/.test(password),
                                                                label: "Uppercase letter"
                                                            },
                                                            {
                                                                ok: /[a-z]/.test(password),
                                                                label: "Lowercase letter"
                                                            },
                                                            {
                                                                ok: /[0-9]/.test(password),
                                                                label: "Number"
                                                            },
                                                            {
                                                                ok: /[^\w\s]/.test(password),
                                                                label: "Symbol"
                                                            }
                                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-2 text-[13px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-4 h-4 rounded-sm flex items-center justify-center ${r.ok ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-400"}`,
                                                                        children: r.ok ? "✓" : "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 1202,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${r.ok ? "text-slate-700" : "text-slate-400"}`,
                                                                        children: r.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 1205,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, r.label, true, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1201,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1185,
                                                        columnNumber: 21
                                                    }, this),
                                                    !passwordsMatch && confirmPassword.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-red-600",
                                                        children: "Passwords do not match."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1208,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1183,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: loading,
                                                        className: `flex-1 px-4 py-2 bg-indigo-600 text-white rounded ${loading ? "opacity-70" : "hover:brightness-95"}`,
                                                        type: "submit",
                                                        children: loading ? "Creating..." : "Create organization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("phone"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 34
                                    }, this),
                                    mode === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-emerald-700",
                                                children: "Success"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 mt-2",
                                                children: success || "Your organization has been created."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 1032,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                        lineNumber: 993,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 992,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/signup-hero.jpg",
                            alt: "Signup hero",
                            className: "w-full h-full object-cover min-h-[520px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 1232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 1233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 1231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 990,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/signup/page.tsx",
        lineNumber: 989,
        columnNumber: 10
    }, this);
}
_s2(SignupPage, "ERdOgOem6L/yOsAx1Sp5I375jvA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = SignupPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountryDropdown");
__turbopack_context__.k.register(_c1, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28auth%29_signup_page_tsx_a0fc9fbd._.js.map