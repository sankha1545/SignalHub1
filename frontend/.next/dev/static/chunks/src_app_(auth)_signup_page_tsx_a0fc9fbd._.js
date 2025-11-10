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
/* ---------- CountryDropdown component (searchable, accessible, responsive) ---------- */ function useOnClickOutside(ref, handler) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "78e9a86183ad384cde8a16ac5a4c34dc3bf4198d40dd59b79beadd9673bbd804") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78e9a86183ad384cde8a16ac5a4c34dc3bf4198d40dd59b79beadd9673bbd804";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "78e9a86183ad384cde8a16ac5a4c34dc3bf4198d40dd59b79beadd9673bbd804") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78e9a86183ad384cde8a16ac5a4c34dc3bf4198d40dd59b79beadd9673bbd804";
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
                    return c.name.toLowerCase().includes(q) || c.callingCode.includes(q) || c.cca2.toLowerCase().includes(q);
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
                listRef.current?.querySelectorAll("li")[Math.min(highlight + 1, items.length - 1)]?.scrollIntoView({
                    block: "nearest"
                });
            } else {
                if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setHighlight(_CountryDropdownHandleKeyDownSetHighlight);
                    listRef.current?.querySelectorAll("li")[Math.max(highlight - 1, 0)]?.scrollIntoView({
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
            className: "w-5 h-4 object-cover rounded-sm shadow-sm"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 251,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-5 h-4 bg-slate-100 rounded-sm"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 251,
            columnNumber: 133
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
            lineNumber: 259,
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
            className: "font-medium",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 268,
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
            className: "text-xs text-slate-500",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 277,
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
            className: "text-sm",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 285,
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
            className: "flex items-center gap-2",
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 294,
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
            lineNumber: 304,
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
                lineNumber: 311,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 311,
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
            lineNumber: 319,
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
    const t21 = `absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border overflow-hidden ${open ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"} transition-all duration-150`;
    let t22;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            minWidth: 260
        };
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "CountryDropdown[<input>.onChange]": (e_0)=>setQuery(e_0.target.value)
        })["CountryDropdown[<input>.onChange]"];
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== handleKeyDown || $[48] !== query) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: searchRef,
                value: query,
                onChange: t23,
                placeholder: "Search country name or code (e.g. India, +91, IN)",
                onKeyDown: handleKeyDown,
                className: "w-full px-3 py-2 rounded border focus:ring-2 focus:ring-indigo-300 outline-none",
                "aria-label": "Search country"
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 351,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[47] = handleKeyDown;
        $[48] = query;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== highlight || $[51] !== items || $[52] !== onChange || $[53] !== value?.callingCode || $[54] !== value?.cca2) {
        t25 = items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "px-4 py-3 text-sm text-slate-500",
            children: "No matches"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 360,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: c_0.flag,
                            alt: `${c_0.name} flag`,
                            className: "w-5 h-4 object-cover rounded-sm shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 370,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium truncate",
                                    children: c_0.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 307
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500",
                                    children: [
                                        c_0.callingCode,
                                        " • ",
                                        c_0.cca2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 369
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 370,
                            columnNumber: 275
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-600",
                            children: value?.callingCode === c_0.callingCode && value?.cca2 === c_0.cca2 ? "Selected" : ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 370,
                            columnNumber: 451
                        }, this)
                    ]
                }, `${c_0.callingCode}-${c_0.cca2}`, true, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 363,
                    columnNumber: 16
                }, this);
            }
        }["CountryDropdown[items.map()]"]);
        $[50] = highlight;
        $[51] = items;
        $[52] = onChange;
        $[53] = value?.callingCode;
        $[54] = value?.cca2;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-56 overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                role: "listbox",
                ref: listRef,
                "aria-label": "Country options",
                className: "divide-y",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                lineNumber: 384,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t21 || $[59] !== t24 || $[60] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            style: t22,
            role: "dialog",
            "aria-modal": "false",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[58] = t21;
        $[59] = t24;
        $[60] = t26;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t20 || $[63] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: rootRef,
            children: [
                t20,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[62] = t20;
        $[63] = t27;
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    return t28;
}
_s1(CountryDropdown, "3rMNzF/oK+g7zBr9ZogjA6nVclY=", false, function() {
    return [
        useOnClickOutside
    ];
});
_c = CountryDropdown;
/* ---------- component: SignupPage ---------- */ function _CountryDropdownButtonOnClickSetOpen(v) {
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
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            const id = window.setInterval({
                "SignupPage.useEffect.id": ()=>setNow(Date.now())
            }["SignupPage.useEffect.id"], 1000);
            return ({
                "SignupPage.useEffect": ()=>window.clearInterval(id)
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
    // computed step 1..4
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
    /* ---------- COUNTRY FETCH (calls your proxy /api/countries) ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            let mounted = true;
            (async function fetchCountries() {
                setCountryLoading(true);
                setCountryError(null);
                try {
                    const res = await fetch("/api/countries");
                    if (!res.ok) {
                        const t = await res.text().catch({
                            "SignupPage.useEffect.fetchCountries": ()=>""
                        }["SignupPage.useEffect.fetchCountries"]);
                        throw new Error(`Failed to fetch /api/countries: ${res.status} ${t}`);
                    }
                    const json = await res.json();
                    if (!mounted) return;
                    if (!Array.isArray(json) || json.length === 0) throw new Error("No countries returned");
                    // Normalise if needed (proxy already returns normalized objects but we keep resilience)
                    const parsed = json.map({
                        "SignupPage.useEffect.fetchCountries.parsed": (c)=>({
                                name: c.name || c.common || "Unknown",
                                cca2: (c.cca2 || c.CCA2 || "").toUpperCase(),
                                callingCode: String(c.callingCode || c.dialCode || c.callCode || "").trim(),
                                flag: c.flag || c.flags || ""
                            })
                    }["SignupPage.useEffect.fetchCountries.parsed"]).filter({
                        "SignupPage.useEffect.fetchCountries.parsed": (c_0)=>c_0.callingCode && c_0.name
                    }["SignupPage.useEffect.fetchCountries.parsed"]).sort({
                        "SignupPage.useEffect.fetchCountries.parsed": (a, b)=>a.name.localeCompare(b.name)
                    }["SignupPage.useEffect.fetchCountries.parsed"]);
                    if (parsed.length === 0) throw new Error("No countries with calling codes returned");
                    setCountries(parsed);
                    // sensible default: try locale -> +91 -> +1 -> first
                    const locale = (navigator.language || navigator.languages && navigator.languages[0] || "").toLowerCase();
                    const match = locale.match(/-([a-z]{2})$/i);
                    let defaultCountry = null;
                    if (match) {
                        const cca = match[1].toUpperCase();
                        defaultCountry = parsed.find({
                            "SignupPage.useEffect.fetchCountries": (c_1)=>c_1.cca2 === cca
                        }["SignupPage.useEffect.fetchCountries"]) || null;
                    }
                    if (!defaultCountry) defaultCountry = parsed.find({
                        "SignupPage.useEffect.fetchCountries": (c_3)=>c_3.callingCode === "+91"
                    }["SignupPage.useEffect.fetchCountries"]) || parsed.find({
                        "SignupPage.useEffect.fetchCountries": (c_2)=>c_2.callingCode === "+1"
                    }["SignupPage.useEffect.fetchCountries"]) || parsed[0] || null;
                    setCountry(defaultCountry);
                } catch (err) {
                    if (!mounted) return;
                    console.error("Country fetch error:", err);
                    setCountries(null);
                    setCountryError(String(err?.message || err));
                } finally{
                    if (mounted) setCountryLoading(false);
                }
            })();
            return ({
                "SignupPage.useEffect": ()=>{
                    mounted = false;
                }
            })["SignupPage.useEffect"];
        }
    }["SignupPage.useEffect"], []);
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
    // ---------- OTP utilities (unchanged) ----------
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
            const next_0 = [
                ...otpArr
            ];
            next_0[idx] = key;
            setOtpArr(next_0);
            const nextIdx = Math.min(next_0.length - 1, idx + 1);
            const nextInput = document.getElementById(`otp-${target.dataset.for}-${nextIdx}`);
            if (nextInput) nextInput.focus();
        } else if (key === "ArrowLeft") {
            e.preventDefault();
            const prev_0 = Math.max(0, idx - 1);
            const prevInput_0 = document.getElementById(`otp-${target.dataset.for}-${prev_0}`);
            prevInput_0?.focus();
        } else if (key === "ArrowRight") {
            e.preventDefault();
            const nxt = Math.min(otpArr.length - 1, idx + 1);
            const nextInput_0 = document.getElementById(`otp-${target.dataset.for}-${nxt}`);
            nextInput_0?.focus();
        }
    }
    function handleOtpPaste(e_0, otpArr_0, setOtpArr_0) {
        e_0.preventDefault();
        const paste = e_0.clipboardData.getData("text").trim();
        const digits = paste.replace(/\D/g, "").slice(0, otpArr_0.length).split("");
        if (digits.length === 0) return;
        const next_1 = [
            ...otpArr_0
        ];
        for(let i = 0; i < digits.length; i++)next_1[i] = digits[i];
        setOtpArr_0(next_1);
        const firstEmpty = next_1.findIndex((c_4)=>!c_4);
        const focusIdx = firstEmpty === -1 ? next_1.length - 1 : firstEmpty;
        const el = document.getElementById(`otp-${e_0.target.dataset.for}-${focusIdx}`);
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
    // ---------- PASSWORD VALIDATION ----------
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
            // run validation as user types
            const errs_0 = validatePassword(password);
            setPasswordErrors(errs_0);
            setPasswordsMatch(password === confirmPassword || confirmPassword.length === 0);
        }
    }["SignupPage.useEffect"], [
        password,
        confirmPassword
    ]);
    // ---------- API actions (unchanged behaviour, except finalize uses collected profile data) ----------
    async function handleSendEmailOtp(e_1) {
        e_1?.preventDefault();
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
        } catch (err_0) {
            setError(err_0?.message || String(err_0));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyEmailOtp(e_2) {
        e_2?.preventDefault();
        setError(null);
        if (emailCode.length < 4) {
            setError("Enter the full code you received by email.");
            return;
        }
        setLoading(true);
        try {
            const data_0 = await postJSON("/api/auth/email/verify", {
                email,
                code: emailCode,
                flow: "signup"
            });
            if (data_0?.ok && data_0?.tempToken) {
                setTempToken(data_0.tempToken);
                setMode("phone");
            } else setError(data_0?.error || data_0?.reason || "Invalid or expired code.");
        } catch (err_1) {
            setError(err_1?.message || String(err_1));
        } finally{
            setLoading(false);
        }
    }
    async function handleSendPhoneOtp(e_3) {
        e_3?.preventDefault();
        setError(null);
        const dial = country?.callingCode ?? "";
        const typed = phone.trim();
        const full = typed.startsWith("+") ? typed : `${dial}${typed.replace(/\D/g, "")}`;
        if (!/^\+?[0-9]{7,20}$/.test(full)) {
            setError("Please enter a valid phone number including country code (or select country).");
            return;
        }
        setLoading(true);
        try {
            const data_1 = await postJSON("/api/auth/phone/send", {
                phone: full
            });
            if (data_1?.ok) {
                setMode("verifyPhone");
                setResendDeadline(setPhoneResendAvailableAt, 45);
                setPhoneOtp(Array(6).fill(""));
                setTimeout(()=>document.getElementById("otp-phone-0")?.focus(), 120);
            } else setError(data_1?.error || "Failed to send SMS OTP.");
        } catch (err_2) {
            setError(String(err_2));
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyPhoneOtp(e_4) {
        e_4?.preventDefault();
        setError(null);
        if (phoneCode.length < 4) {
            setError("Enter the full SMS code you received.");
            return;
        }
        setLoading(true);
        try {
            const dial_0 = country?.callingCode ?? "";
            const typed_0 = phone.trim();
            const full_0 = typed_0.startsWith("+") ? typed_0 : `${dial_0}${typed_0.replace(/\D/g, "")}`;
            const res_0 = await postJSON("/api/auth/phone/verify", {
                phone: full_0,
                code: phoneCode,
                tempToken
            });
            if (res_0?.ok && res_0?.tempToken) {
                setTempToken(res_0.tempToken);
                setMode("org");
            } else setError(res_0?.reason || res_0?.error || "Phone verification failed.");
        } catch (err_3) {
            setError(String(err_3));
        } finally{
            setLoading(false);
        }
    }
    function buildFullPhone(typed_1, country_0) {
        if (!typed_1) return null;
        const raw = typed_1.trim();
        if (raw.startsWith("+")) {
            // keep plus and digits only
            const digits_0 = raw.replace(/[^\d+]/g, "");
            return digits_0;
        }
        const cc = country_0?.callingCode ?? "";
        const onlyDigits = raw.replace(/\D/g, "");
        if (!cc && !onlyDigits) return null;
        // if calling code doesn't start with +, ensure it does
        const normalizedCc = cc.startsWith("+") ? cc : cc ? `+${cc}` : "";
        return `${normalizedCc}${onlyDigits}`;
    }
    // Replace your handleFinalize with this (in src/app/(auth)/signup/page.tsx)
    async function handleFinalize(e_5) {
        e_5?.preventDefault();
        setError(null);
        // client-side validations (password policy + confirm)
        setPasswordTouched(true);
        const errs_1 = validatePassword(password); // keep your validatePassword helper
        if (errs_1.length > 0) {
            setPasswordErrors(errs_1);
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
        // build normalized phone if present (you already had this helper)
        const normalizedPhone = phone && (phone.startsWith("+") ? phone : `${country?.callingCode ?? ""}${phone.replace(/\D/g, "")}`);
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
            const res_1 = await postJSON("/api/auth/signup/finalize", payload);
            if (res_1?.ok) {
                // Server set HttpOnly cookie for session; now redirect to account/dashboard
                setSuccess("Account created — signing you in...");
                setMode("done");
                // small delay so success is visible
                setTimeout(()=>{
                    // send user to their account landing (account page will fetch /api/me)
                    router.push("/account");
                }, 700);
            } else {
                // server returned ok: false or error
                setError(res_1?.error || res_1?.reason || "Failed to finalize signup.");
            }
        } catch (err_4) {
            setError(String(err_4) || "Unexpected error");
        } finally{
            setLoading(false);
        }
    }
    async function handleResendEmail() {
        if (emailResendAvailableAt && emailResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const data_2 = await postJSON("/api/auth/email/send", {
                email,
                resend: true
            });
            if (data_2?.ok) setResendDeadline(setEmailResendAvailableAt, 45);
            else setError(data_2?.error || "Unable to resend OTP.");
        } catch (err_5) {
            setError(String(err_5));
        } finally{
            setLoading(false);
        }
    }
    async function handleResendPhone() {
        if (phoneResendAvailableAt && phoneResendAvailableAt > Date.now()) return;
        setError(null);
        setLoading(true);
        try {
            const data_3 = await postJSON("/api/auth/phone/send", {
                phone,
                resend: true
            });
            if (data_3?.ok) setResendDeadline(setPhoneResendAvailableAt, 45);
            else setError(data_3?.error || "Unable to resend SMS OTP.");
        } catch (err_6) {
            setError(String(err_6));
        } finally{
            setLoading(false);
        }
    }
    // compute fill percent (0..100) like before for smooth bar animation
    function computeFillPercent() {
        const s_0 = step;
        if (s_0 <= 1) return 0;
        return Math.round((s_0 - 1) / 3 * 100);
    }
    const fillPercent = computeFillPercent();
    /* ---------- UI ---------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ring-1 ring-slate-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 md:p-12 flex items-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-xl",
                                        children: "U"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 856,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl md:text-4xl font-extrabold text-slate-900",
                                                children: "Welcome to SignalHub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 mt-1",
                                                children: "Create an admin account and organization — secure by default."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-6 right-6 top-6 h-0.5 bg-slate-100 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 866,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-6 top-6 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-400 rounded transition-all duration-500 ease-out",
                                            style: {
                                                width: `${fillPercent}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 867,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-between",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((n_0)=>{
                                                const isActive = n_0 === step;
                                                const isCompleted = n_0 < step;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col items-center text-center px-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold transition ${isCompleted ? "bg-indigo-600 text-white shadow-2xl scale-105" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 animate-pulse" : "bg-white border border-slate-200 text-slate-600"}`,
                                                            children: n_0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-slate-500 mt-2",
                                                            children: [
                                                                "Choose",
                                                                "Email",
                                                                "Phone",
                                                                "Org"
                                                            ][n_0 - 1]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, n_0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                            lineNumber: 870,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 864,
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
                                        lineNumber: 887,
                                        columnNumber: 25
                                    }, this),
                                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-emerald-600",
                                        children: success
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 888,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 886,
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
                                                        className: "w-7 h-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Continue with Google"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-sm text-slate-400",
                                                children: "or"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 900,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode("email"),
                                                className: "w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md",
                                                children: "Sign up with Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 902,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Already have an account? ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "text-blue-700 -underline-offset-1",
                                                            href: "/login",
                                                            children: "Login"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 905,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 894,
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
                                                lineNumber: 910,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: email,
                                                onChange: (e_6)=>setEmail(e_6.target.value),
                                                className: "w-full bg-indigo-100 p-3 border rounded focus:ring-2 focus:ring-indigo-300 focus:outline-none border-none",
                                                placeholder: "you@example.com",
                                                type: "email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 911,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded",
                                                        children: loading ? "Sending..." : "Send code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("choose"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 916,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 912,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "A one-time code will be sent to verify your email."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 909,
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
                                                        lineNumber: 925,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 927,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: emailOtp.map((digit, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `otp-email-${i_0}`,
                                                        "data-for": "email",
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*",
                                                        maxLength: 1,
                                                        value: digit,
                                                        onPaste: (e_7)=>handleOtpPaste(e_7, emailOtp, setEmailOtp),
                                                        onKeyDown: (e_8)=>handleOtpInput(e_8, i_0, emailOtp, setEmailOtp),
                                                        onChange: ()=>{},
                                                        "aria-label": `Email code digit ${i_0 + 1}`,
                                                        className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                    }, i_0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 51
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 928,
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
                                                        lineNumber: 933,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("email"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 932,
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
                                                            lineNumber: 943,
                                                            columnNumber: 66
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleResendEmail,
                                                            className: "underline text-indigo-600",
                                                            children: "Resend code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 943,
                                                            columnNumber: 133
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: "Didn't receive? Check spam."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 924,
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
                                                lineNumber: 953,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-44",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryDropdown, {
                                                                countries: countries,
                                                                value: country,
                                                                onChange: (c_5)=>setCountry(c_5),
                                                                disabled: countryLoading || !!countryError,
                                                                placeholder: countryLoading ? "Loading countries..." : countryError ? "Unavailable" : "Select country"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400 mt-2",
                                                                children: countryLoading ? "Loading dial codes..." : countryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "Unable to load list"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 84
                                                                }, this) : "Select country code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 961,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center px-3 border rounded bg-slate-50 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mr-2",
                                                                            children: country?.flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: country.flag,
                                                                                alt: country.name,
                                                                                className: "w-5 h-4 object-cover inline-block"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                                lineNumber: 970,
                                                                                columnNumber: 67
                                                                            }, this) : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 970,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: country?.callingCode ?? "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 971,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: phone,
                                                                    onChange: (e_9)=>setPhone(e_9.target.value),
                                                                    placeholder: country ? `${country.callingCode} 98765 43210` : "98765 43210",
                                                                    className: "flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-300 border-none bg-indigo-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 956,
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
                                                        lineNumber: 979,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("verifyEmail"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 978,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Standard SMS rates may apply."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 952,
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
                                                        lineNumber: 992,
                                                        columnNumber: 84
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 992,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "SMS Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: phoneOtp.map((digit_0, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `otp-phone-${i_1}`,
                                                        "data-for": "phone",
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*",
                                                        maxLength: 1,
                                                        value: digit_0,
                                                        onPaste: (e_10)=>handleOtpPaste(e_10, phoneOtp, setPhoneOtp),
                                                        onKeyDown: (e_11)=>handleOtpInput(e_11, i_1, phoneOtp, setPhoneOtp),
                                                        onChange: ()=>{},
                                                        "aria-label": `Phone code digit ${i_1 + 1}`,
                                                        className: "w-12 h-12 text-center text-lg rounded border border-slate-200 focus:ring-2 focus:ring-indigo-300"
                                                    }, i_1, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 995,
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
                                                        lineNumber: 1000,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("phone"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 999,
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
                                                            lineNumber: 1010,
                                                            columnNumber: 66
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleResendPhone,
                                                            className: "underline text-indigo-600",
                                                            children: "Resend SMS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 133
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1009,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "Contact support if you don't receive SMS."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1014,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 991,
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
                                                lineNumber: 1020,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: orgName,
                                                placeholder: "Enter the name",
                                                onChange: (e_12)=>setOrgName(e_12.target.value),
                                                className: "w-full bg-indigo-50 border-none p-3 border rounded focus:ring-2 focus:ring-indigo-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: name,
                                                onChange: (e_13)=>setName(e_13.target.value),
                                                className: "w-full p-3 border-none border rounded focus:ring-2 focus:ring-indigo-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1024,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block  text-sm font-medium text-slate-600",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1027,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? "text" : "password",
                                                        value: password,
                                                        onChange: (e_14)=>{
                                                            setPasswordTouched(true);
                                                            setPassword(e_14.target.value);
                                                        },
                                                        onBlur: ()=>setPasswordTouched(true),
                                                        placeholder: "Create a strong password",
                                                        className: `w-full p-3 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 border-none bg-indigo-50`,
                                                        "aria-required": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1029,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword((v)=>!v),
                                                        "aria-label": showPassword ? "Hide password" : "Show password",
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-slate-600",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M3 3l18 18M9.5 9.5a3 3 0 104.001 4.001M12 5c4.97 0 9 4.03 9 7s-4.03 7-9 7c-1.26 0-2.45-.22-3.56-.62"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1034,
                                                            columnNumber: 39
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-slate-600",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M12 5c-4.97 0-9 4.03-9 7s4.03 7 9 7 9-4.03 9-7-4.03-7-9-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "3",
                                                                    strokeWidth: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1038,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 34
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-600",
                                                children: "Retype password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1044,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showConfirmPassword ? "text" : "password",
                                                        value: confirmPassword,
                                                        onChange: (e_15)=>setConfirmPassword(e_15.target.value),
                                                        onBlur: ()=>setPasswordTouched(true),
                                                        placeholder: "Retype password",
                                                        className: `w-full p-3 border-none bg-indigo-50 border rounded focus:ring-2 focus:ring-indigo-300 pr-12 ${passwordTouched && !passwordsMatch ? "border-red-400" : ""}`,
                                                        "aria-required": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowConfirmPassword((v_0)=>!v_0),
                                                        "aria-label": showConfirmPassword ? "Hide password" : "Show password",
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-100",
                                                        children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-slate-600",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M3 3l18 18M9.5 9.5a3 3 0 104.001 4.001M12 5c4.97 0 9 4.03 9 7s-4.03 7-9 7c-1.26 0-2.45-.22-3.56-.62"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 46
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-slate-600",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M12 5c-4.97 0-9 4.03-9 7s4.03 7 9 7 9-4.03 9-7-4.03-7-9-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1051,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "3",
                                                                    strokeWidth: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                    lineNumber: 1052,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 34
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1045,
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
                                                        lineNumber: 1059,
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
                                                                    r.ok ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 text-emerald-600",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 1078,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 1077,
                                                                        columnNumber: 35
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 text-slate-400",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zm0 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4 10a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm10 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                            lineNumber: 1080,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 1079,
                                                                        columnNumber: 38
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${r.ok ? "text-slate-700" : "text-slate-400"}`,
                                                                        children: r.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                        lineNumber: 1082,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, r.label, true, {
                                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 21
                                                    }, this),
                                                    !passwordsMatch && confirmPassword.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-red-600",
                                                        children: "Passwords do not match."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: loading,
                                                        className: `flex-1 px-4 py-2 bg-indigo-600 text-white rounded shadow ${loading ? "opacity-70" : "hover:brightness-95"}`,
                                                        type: "submit",
                                                        children: loading ? "Creating..." : "Create organization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("phone"),
                                                        className: "px-4 py-2 border rounded",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                        lineNumber: 1092,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1088,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1019,
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
                                                lineNumber: 1100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 mt-2",
                                                children: success || "Your organization has been created."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(auth)/signup/page.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/signup/page.tsx",
                        lineNumber: 853,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 852,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block relative bg-gradient-to-br from-indigo-500 to-emerald-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/signup-hero.jpg",
                            alt: "Signup hero",
                            className: "w-full h-full object-cover min-h-[640px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 1109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/signup/page.tsx",
                            lineNumber: 1110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/signup/page.tsx",
                    lineNumber: 1108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/signup/page.tsx",
            lineNumber: 850,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/signup/page.tsx",
        lineNumber: 849,
        columnNumber: 10
    }, this);
}
_s2(SignupPage, "R27MGKtis81JdvW23MQx8bXv1tk=", false, function() {
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