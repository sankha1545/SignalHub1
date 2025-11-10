(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/forms/AuthForms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/components/auth/AuthForms.tsx
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
    if ($[0] !== "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769";
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
            lineNumber: 62,
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
            lineNumber: 70,
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
            lineNumber: 79,
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
    if ($[0] !== "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769";
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
            lineNumber: 124,
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
    if ($[0] !== "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769";
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
            const arr = value.split("").slice(0, length);
            arr[idx] = ch || "";
            onChange(arr.join("").padEnd(length, ""));
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
                        lineNumber: 195,
                        columnNumber: 46
                    }, this)
            }["OtpInput[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/forms/AuthForms.tsx",
            lineNumber: 192,
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
    if ($[0] !== "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769";
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
function _useOtpTimerUseEffectWindowSetTimeoutSetSeconds(s) {
    return s - 1;
}
function FormNotice(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f4cf787de8225582c76fedae43cb7c8f3cd1769c8bf5f49cb67bcb75bc9769";
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
                lineNumber: 338,
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
                lineNumber: 349,
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
            lineNumber: 359,
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
"[project]/src/app/auth/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/signup/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/AuthForms.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SignupPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("email");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailOtp, setEmailOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneOtp, setPhoneOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [orgName, setOrgName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // timers for OTP resend
    const emailTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOtpTimer"])(120);
    const phoneTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOtpTimer"])(120);
    async function startEmail() {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/send-email", {
                email
            });
            setMessage("OTP sent to email. Check your inbox (or dev logs).");
            setStep("verifyEmail");
            emailTimer.reset();
        } catch (e) {
            setError(e?.error || e?.message || "Failed to send OTP");
        } finally{
            setLoading(false);
        }
    }
    async function verifyEmail() {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/verify-email-otp", {
                email,
                otp: emailOtp
            });
            setMessage("Email verified. Now provide phone to verify.");
            setStep("phone");
        } catch (e_0) {
            setError(e_0?.error || e_0?.message || "Invalid email OTP");
        } finally{
            setLoading(false);
        }
    }
    async function startPhone() {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/send-phone-otp", {
                phone
            });
            setMessage("Phone OTP sent (Twilio) — in dev it may appear in server logs.");
            setStep("verifyPhone");
            phoneTimer.reset();
        } catch (e_1) {
            setError(e_1?.error || e_1?.message || "Failed to send phone OTP");
        } finally{
            setLoading(false);
        }
    }
    async function verifyPhone() {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/verify-phone-otp", {
                phone,
                otp: phoneOtp
            });
            setMessage("Phone verified. Complete signup with org & password.");
            setStep("complete");
        } catch (e_2) {
            setError(e_2?.error || e_2?.message || "Invalid phone OTP");
        } finally{
            setLoading(false);
        }
    }
    async function completeSignup() {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/api/auth/signup/complete", {
                email,
                name,
                password,
                organizationName: orgName,
                phone
            });
            setMessage("Signup complete — you are logged in.");
            setStep("done");
            // short delay so user sees message, then redirect
            setTimeout(()=>{
                router.push("/admin");
            }, 800);
        } catch (e_3) {
            setError(e_3?.error || e_3?.message || "Failed to complete signup");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex items-center justify-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-lg mx-auto p-6 bg-white rounded-lg shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Create organization (Admin)"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormNotice"], {
                    type: "error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 121,
                    columnNumber: 19
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormNotice"], {
                    type: "success",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 122,
                    columnNumber: 21
                }, this),
                step === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Email",
                            value: email,
                            onChange: (e_4)=>setEmail(e_4.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startEmail,
                                disabled: !email || loading,
                                children: loading ? "Sending…" : "Send Email OTP"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/signup/page.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 124,
                    columnNumber: 30
                }, this),
                step === "verifyEmail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-600",
                            children: [
                                "Verify code sent to ",
                                email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Email OTP",
                            value: emailOtp,
                            onChange: (e_5)=>setEmailOtp(e_5.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: verifyEmail,
                                    disabled: !emailOtp || loading,
                                    children: loading ? "Verifying…" : "Verify Email OTP"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/signup/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm text-slate-600",
                                    disabled: !email || !emailTimer.canResend,
                                    onClick: ()=>{
                                        if (emailTimer.canResend) startEmail();
                                    },
                                    children: emailTimer.canResend ? "Resend" : `Resend available in ${emailTimer.formatted}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/signup/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 133,
                    columnNumber: 36
                }, this),
                step === "phone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Phone (E.164)",
                            value: phone,
                            onChange: (e_6)=>setPhone(e_6.target.value),
                            placeholder: "+919xxxxxxxxx"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startPhone,
                                disabled: !phone || loading,
                                children: loading ? "Sending…" : "Send Phone OTP"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/signup/page.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 150,
                    columnNumber: 30
                }, this),
                step === "verifyPhone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-600",
                            children: [
                                "Verify code sent to ",
                                phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Phone OTP",
                            value: phoneOtp,
                            onChange: (e_7)=>setPhoneOtp(e_7.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: verifyPhone,
                                    disabled: !phoneOtp || loading,
                                    children: loading ? "Verifying…" : "Verify Phone OTP"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/signup/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm text-slate-600",
                                    disabled: !phone || !phoneTimer.canResend,
                                    onClick: ()=>{
                                        if (phoneTimer.canResend) startPhone();
                                    },
                                    children: phoneTimer.canResend ? "Resend" : `Resend available in ${phoneTimer.formatted}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/signup/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 159,
                    columnNumber: 36
                }, this),
                step === "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Organization name",
                            value: orgName,
                            onChange: (e_8)=>setOrgName(e_8.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Full name",
                            value: name,
                            onChange: (e_9)=>setName(e_9.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            label: "Password",
                            type: "password",
                            value: password,
                            onChange: (e_10)=>setPassword(e_10.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: completeSignup,
                                disabled: !orgName || !password || loading,
                                children: loading ? "Creating…" : "Create Organization & Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/signup/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 175,
                    columnNumber: 33
                }, this),
                step === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: "🎉 Signup complete — you're logged in."
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: "Redirecting to Admin dashboard…"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/signup/page.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/signup/page.tsx",
                    lineNumber: 186,
                    columnNumber: 29
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/signup/page.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/signup/page.tsx",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
_s(SignupPage, "/LxgfhpHe8oaA2xIW6F3+AVEYtM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOtpTimer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$AuthForms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOtpTimer"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
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
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
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

//# sourceMappingURL=_fa438851._.js.map