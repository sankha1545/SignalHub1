(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/forms/AuthForms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/auth/AuthForms.tsx
__turbopack_context__.s([
    "Button",
    ()=>Button,
    "FormNotice",
    ()=>FormNotice,
    "Input",
    ()=>Input,
    "OtpInput",
    ()=>OtpInput,
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useOtpTimer",
    ()=>useOtpTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
async function api(path, body) {
    const res = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body ?? {}),
        credentials: "include"
    });
    const text = await res.text();
    let json = {};
    try {
        json = text ? JSON.parse(text) : {};
    } catch  {
        // not JSON — return raw text in error case
        if (!res.ok) throw {
            error: text || "Unknown error"
        };
        return text;
    }
    if (!res.ok) throw json;
    return json;
}
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb";
    }
    let id;
    let label;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ label, className: t1, id, ...props } = t0);
        $[1] = t0;
        $[2] = id;
        $[3] = label;
        $[4] = props;
        $[5] = t1;
    } else {
        id = $[2];
        label = $[3];
        props = $[4];
        t1 = $[5];
    }
    const className = t1 === undefined ? "" : t1;
    const t2 = `block w-full ${className}`;
    let t3;
    if ($[6] !== label) {
        t3 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-slate-700 mb-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 68,
            columnNumber: 19
        }, this);
        $[6] = label;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== id || $[9] !== props) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: id,
            className: "w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[8] = id;
        $[9] = props;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== id || $[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t2,
            htmlFor: id,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[11] = id;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
}
_c = Input;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb";
    }
    let children;
    let disabled;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ children, className: t1, disabled, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = disabled;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        disabled = $[3];
        props = $[4];
        t1 = $[5];
    }
    const className = t1 === undefined ? "" : t1;
    const t2 = `mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60 ${className}`;
    let t3;
    if ($[6] !== children || $[7] !== disabled || $[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t2,
            disabled: disabled,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = disabled;
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c1 = Button;
function OtpInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb";
    }
    const { length: t1, value, onChange, idPrefix: t2 } = t0;
    const length = t1 === undefined ? 6 : t1;
    const idPrefix = t2 === undefined ? "otp" : t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    const inputsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3);
    let t4;
    let t5;
    if ($[2] !== length) {
        t4 = ({
            "OtpInput[useEffect()]": ()=>{
                inputsRef.current = inputsRef.current.slice(0, length);
            }
        })["OtpInput[useEffect()]"];
        t5 = [
            length
        ];
        $[2] = length;
        $[3] = t4;
        $[4] = t5;
    } else {
        t4 = $[3];
        t5 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[5] !== idPrefix || $[6] !== length || $[7] !== onChange || $[8] !== value) {
        const handleChange = function handleChange(e, idx) {
            const ch = e.target.value.replace(/\D/g, "").slice(0, 1);
            const newVal = value.split("").slice(0, length);
            newVal[idx] = ch || "";
            onChange(newVal.join("").padEnd(length, ""));
            if (ch && idx < length - 1) {
                inputsRef.current[idx + 1]?.focus();
            }
        };
        const handleKey = function handleKey(e_0, idx_0) {
            if (e_0.key === "Backspace" && !value[idx_0] && idx_0 > 0) {
                inputsRef.current[idx_0 - 1]?.focus();
            }
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: Array.from({
                length
            }).map({
                "OtpInput[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${idPrefix}-${i}`,
                        ref: {
                            "OtpInput[(anonymous)() > <input>.ref]": (el)=>inputsRef.current[i] = el
                        }["OtpInput[(anonymous)() > <input>.ref]"],
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        maxLength: 1,
                        value: value[i] ?? "",
                        onChange: {
                            "OtpInput[(anonymous)() > <input>.onChange]": (e_1)=>handleChange(e_1, i)
                        }["OtpInput[(anonymous)() > <input>.onChange]"],
                        onKeyDown: {
                            "OtpInput[(anonymous)() > <input>.onKeyDown]": (e_2)=>handleKey(e_2, i)
                        }["OtpInput[(anonymous)() > <input>.onKeyDown]"],
                        className: "w-12 h-12 text-center rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    }, i, false, {
                        fileName: "[project]/src/components/forms/AuthForms.tsx",
                        lineNumber: 206,
                        columnNumber: 46
                    }, this)
            }["OtpInput[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 203,
            columnNumber: 10
        }, this);
        $[5] = idPrefix;
        $[6] = length;
        $[7] = onChange;
        $[8] = value;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s(OtpInput, "QWN8mYu3zMJFrTXkwQjAUKhkgrI=");
_c2 = OtpInput;
function useOtpTimer(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb";
    }
    const initialSeconds = t0 === undefined ? 120 : t0;
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSeconds);
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== running || $[2] !== seconds) {
        t1 = ({
            "useOtpTimer[useEffect()]": ()=>{
                let t = undefined;
                if (running && seconds > 0) {
                    t = window.setTimeout({
                        "useOtpTimer[useEffect() > window.setTimeout()]": ()=>setSeconds(_useOtpTimerUseEffectWindowSetTimeoutSetSeconds)
                    }["useOtpTimer[useEffect() > window.setTimeout()]"], 1000);
                }
                if (seconds === 0) {
                    setRunning(false);
                }
                return ()=>{
                    if (t) {
                        clearTimeout(t);
                    }
                };
            }
        })["useOtpTimer[useEffect()]"];
        t2 = [
            running,
            seconds
        ];
        $[1] = running;
        $[2] = seconds;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== initialSeconds) {
        t3 = function start() {
            setSeconds(initialSeconds);
            setRunning(true);
        };
        $[5] = initialSeconds;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const start = t3;
    let t4;
    if ($[7] !== initialSeconds) {
        t4 = function reset() {
            setSeconds(initialSeconds);
            setRunning(true);
        };
        $[7] = initialSeconds;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const reset = t4;
    const t5 = !running && seconds === initialSeconds;
    let t6;
    if ($[9] !== seconds) {
        t6 = Math.floor(seconds / 60).toString().padStart(2, "0");
        $[9] = seconds;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== seconds) {
        t7 = (seconds % 60).toString().padStart(2, "0");
        $[11] = seconds;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = `${t6}:${t7}`;
    let t9;
    if ($[13] !== reset || $[14] !== running || $[15] !== seconds || $[16] !== start || $[17] !== t5 || $[18] !== t8) {
        t9 = {
            seconds,
            running,
            start,
            reset,
            canResend: t5,
            formatted: t8
        };
        $[13] = reset;
        $[14] = running;
        $[15] = seconds;
        $[16] = start;
        $[17] = t5;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
}
_s1(useOtpTimer, "N8wLHq+eork+NrjCEIdBFdul/nY=");
/* -------------------------------------------------------------------------- */ /* Small utility components                                                   */ /* -------------------------------------------------------------------------- */ function _useOtpTimerUseEffectWindowSetTimeoutSetSeconds(s) {
    return s - 1;
}
function FormNotice(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d004904c51f0d1d77d8344769869ac50c1a10fd11d0f567dc71f8690df34c7cb";
    }
    const { children, type: t1 } = t0;
    const type = t1 === undefined ? "info" : t1;
    if (type === "error") {
        let t2;
        if ($[1] !== children) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-sm p-2 rounded bg-red-50 text-red-700",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/forms/AuthForms.tsx",
                lineNumber: 359,
                columnNumber: 12
            }, this);
            $[1] = children;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (type === "success") {
        let t2;
        if ($[3] !== children) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-sm p-2 rounded bg-green-50 text-green-700",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/forms/AuthForms.tsx",
                lineNumber: 370,
                columnNumber: 12
            }, this);
            $[3] = children;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t2;
    if ($[5] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 text-sm p-2 rounded bg-slate-50 text-slate-700",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 380,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_c3 = FormNotice;
const __TURBOPACK__default__export__ = {
    api,
    Input,
    Button,
    OtpInput,
    useOtpTimer,
    FormNotice
};
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Input");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "OtpInput");
__turbopack_context__.k.register(_c3, "FormNotice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/auth/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/AuthForms.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LoginPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function doLogin() {
        setError(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/login", {
                email,
                password
            });
            setMessage("Login successful — cookie set by server.");
        // optional: router.push('/admin')
        } catch (e) {
            setError(e?.error || e?.message || "Login failed");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex items-center justify-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 text-sm text-red-600",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 text-sm text-green-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 31,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Email",
                            value: email,
                            onChange: (e_0)=>setEmail(e_0.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Password",
                            type: "password",
                            value: password,
                            onChange: (e_1)=>setPassword(e_1.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 36,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: doLogin,
                                disabled: !email || !password || loading,
                                children: loading ? "Signing in…" : "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/login/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-500 mt-2",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "../signup/page.tsx",
                                    className: "text-sky-600",
                                    children: "Create organization (Admin)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 77
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.tsx",
                            lineNumber: 44,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/login/page.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/login/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
} // ──────────────────────────────────────────────────────────
 // Notes:
 // - Copy each file to the paths mentioned in the comments.
 // - Ensure `components/auth/AuthForms.tsx` is exported and importable via `@/components/auth/AuthForms`.
 // - Tailwind classes are used for styling; adapt to your CSS setup if needed.
 // - Implement client-side redirects after successful auth (router.push).
 // - The pages call the API endpoints implemented previously.
 // ──────────────────────────────────────────────────────────
_s(LoginPage, "3p5mhWnJFClpvOpTsJURbgIH8jI=");
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
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

//# sourceMappingURL=_26d6fb79._.js.map