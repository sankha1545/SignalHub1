(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ImageCropper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageCropper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Note: This component uses `react-easy-crop` and a tiny helper to convert crops to blobs.
// Install: npm i react-easy-crop
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-easy-crop/index.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function getCroppedImg(imageSrc, pixelCrop) {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    return new Promise((resolve)=>{
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = ()=>{
            ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
            canvas.toBlob((blob)=>resolve(blob), "image/png");
        };
        image.src = imageSrc;
    });
}
function ImageCropper(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "f305146520a18ebbef36c02e4091cc6728906d8b465d3772d4b2006f299348b6") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f305146520a18ebbef36c02e4091cc6728906d8b465d3772d4b2006f299348b6";
    }
    const { file, onCancel, onCropped } = t0;
    const [imageSrc, setImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[2] !== file) {
        t2 = ({
            "ImageCropper[useEffect()]": ()=>{
                const reader = new FileReader();
                reader.onload = ()=>setImageSrc(reader.result);
                reader.readAsDataURL(file);
            }
        })["ImageCropper[useEffect()]"];
        t3 = [
            file
        ];
        $[2] = file;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ImageCropper[onCropComplete]": (_, croppedAreaPixelsLocal)=>{
                setCroppedAreaPixels(croppedAreaPixelsLocal);
            }
        })["ImageCropper[onCropComplete]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const onCropComplete = t4;
    let t5;
    if ($[6] !== croppedAreaPixels || $[7] !== imageSrc || $[8] !== onCropped) {
        t5 = async function handleDone() {
            if (!imageSrc || !croppedAreaPixels) {
                return;
            }
            const blob = await getCroppedImg(imageSrc, croppedAreaPixels);
            if (!blob) {
                return alert("Failed to crop image");
            }
            const url = URL.createObjectURL(blob);
            onCropped(url);
        };
        $[6] = croppedAreaPixels;
        $[7] = imageSrc;
        $[8] = onCropped;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleDone = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: "Adjust your photo"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== onCancel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onCancel,
            className: "px-3 py-1 border rounded",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[11] = onCancel;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== handleDone) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleDone,
            className: "px-3 py-1 bg-indigo-600 text-white rounded",
            children: "Done"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[13] = handleDone;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ImageCropper.tsx",
                    lineNumber: 128,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== crop || $[19] !== imageSrc || $[20] !== zoom) {
        t10 = imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            image: imageSrc,
            crop: crop,
            zoom: zoom,
            aspect: 1,
            onCropChange: setCrop,
            onZoomChange: setZoom,
            onCropComplete: onCropComplete
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 137,
            columnNumber: 23
        }, this);
        $[18] = crop;
        $[19] = imageSrc;
        $[20] = zoom;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-80 bg-gray-100 rounded overflow-hidden",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs",
            children: "Zoom"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "ImageCropper[<input>.onChange]": (e)=>setZoom(Number(e.target.value))
        })["ImageCropper[<input>.onChange]"];
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== zoom) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex items-center gap-4",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: 1,
                    max: 3,
                    step: 0.01,
                    value: zoom,
                    onChange: t13,
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ImageCropper.tsx",
                    lineNumber: 171,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[26] = zoom;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t11 || $[29] !== t14 || $[30] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl w-[92%] max-w-3xl p-4",
                children: [
                    t9,
                    t11,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ImageCropper.tsx",
                lineNumber: 179,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageCropper.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t14;
        $[30] = t9;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    return t15;
}
_s(ImageCropper, "A81wAbBbZiTDHLjplUFwORqtkfo=");
_c = ImageCropper;
var _c;
__turbopack_context__.k.register(_c, "ImageCropper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageCropper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageCropper.tsx [app-client] (ecmascript)");
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
    // meta lists
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statesLoading, setStatesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statesError, setStatesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [districtsLoading, setDistrictsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [districtsError, setDistrictsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // photo cropping
    const [rawFile, setRawFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropOpen, setCropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [croppedBlobUrl, setCroppedBlobUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // -------------------------
    // Load meta data (countries + languages)
    // -------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            let mounted = true;
            async function loadMeta() {
                try {
                    const r = await fetch("/api/meta/countries");
                    if (!r.ok) throw new Error("meta endpoint failed");
                    const j = await r.json().catch({
                        "ProfileForm.useEffect.loadMeta": ()=>({
                                ok: false
                            })
                    }["ProfileForm.useEffect.loadMeta"]);
                    const rawCountries = Array.isArray(j.countries) ? j.countries : Array.isArray(j) ? j : j?.countries ?? null;
                    if (!rawCountries || !Array.isArray(rawCountries) || rawCountries.length === 0) throw new Error("no-countries");
                    const normalized = rawCountries.map({
                        "ProfileForm.useEffect.loadMeta.normalized": (c)=>{
                            const name = c?.name?.common ?? c?.name ?? c?.countryName ?? "";
                            const code = c?.code ?? c?.cca2 ?? "";
                            const region = c?.region ?? "";
                            const languages = c?.languages ?? c?.language ?? c?.langs ?? {};
                            return {
                                name,
                                code,
                                region,
                                languages
                            };
                        }
                    }["ProfileForm.useEffect.loadMeta.normalized"]).filter({
                        "ProfileForm.useEffect.loadMeta.normalized": (c)=>c.name
                    }["ProfileForm.useEffect.loadMeta.normalized"]);
                    const langSet = new Set();
                    for (const c of normalized){
                        if (!c.languages) continue;
                        if (typeof c.languages === "object" && !Array.isArray(c.languages)) {
                            Object.values(c.languages).forEach({
                                "ProfileForm.useEffect.loadMeta": (ln)=>typeof ln === "string" && ln.trim() && langSet.add(ln)
                            }["ProfileForm.useEffect.loadMeta"]);
                        } else if (Array.isArray(c.languages)) {
                            c.languages.forEach({
                                "ProfileForm.useEffect.loadMeta": (ln)=>typeof ln === "string" && ln.trim() && langSet.add(ln)
                            }["ProfileForm.useEffect.loadMeta"]);
                        } else if (typeof c.languages === "string") {
                            langSet.add(c.languages);
                        }
                    }
                    if (!mounted) return;
                    setCountries(normalized.sort({
                        "ProfileForm.useEffect.loadMeta": (a, b)=>a.name.localeCompare(b.name)
                    }["ProfileForm.useEffect.loadMeta"]));
                    setLanguages(Array.from(langSet).sort({
                        "ProfileForm.useEffect.loadMeta": (a, b)=>a.localeCompare(b)
                    }["ProfileForm.useEffect.loadMeta"]));
                    return;
                } catch (err) {
                // fallback to restcountries
                }
                try {
                    const fields = "name,cca2,region,languages";
                    const res2 = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
                    if (!res2.ok) throw new Error("restcountries failed");
                    const data = await res2.json();
                    const countryList = [];
                    const langSet2 = new Set();
                    for (const c of data){
                        const name = c?.name?.common ?? c?.name ?? "";
                        const code = c?.cca2 ?? "";
                        const region = c?.region ?? "";
                        countryList.push({
                            name,
                            code,
                            region,
                            languages: c?.languages ?? {}
                        });
                        if (c?.languages) Object.values(c.languages).forEach({
                            "ProfileForm.useEffect.loadMeta": (l)=>typeof l === "string" && l.trim() && langSet2.add(l)
                        }["ProfileForm.useEffect.loadMeta"]);
                    }
                    if (!mounted) return;
                    setCountries(countryList.sort({
                        "ProfileForm.useEffect.loadMeta": (a, b)=>a.name.localeCompare(b.name)
                    }["ProfileForm.useEffect.loadMeta"]));
                    setLanguages(Array.from(langSet2).sort({
                        "ProfileForm.useEffect.loadMeta": (a, b)=>a.localeCompare(b)
                    }["ProfileForm.useEffect.loadMeta"]));
                } catch (err) {
                    console.error("Failed to load countries meta", err);
                    if (!mounted) return;
                    setCountries([]);
                    setLanguages([]);
                }
            }
            loadMeta();
            return ({
                "ProfileForm.useEffect": ()=>{
                    mounted = false;
                }
            })["ProfileForm.useEffect"];
        }
    }["ProfileForm.useEffect"], []);
    // -------------------------
    // Load user on mount (preselect country/state/district)
    // -------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            let mounted = true;
            async function load() {
                setLoading(true);
                try {
                    const res = await fetch("/api/me", {
                        credentials: "include"
                    });
                    const json = await res.json().catch({
                        "ProfileForm.useEffect.load": ()=>({
                                ok: false
                            })
                    }["ProfileForm.useEffect.load"]);
                    if (json?.ok && json.user) {
                        const u = json.user;
                        const profile = u.profile ?? {};
                        const meta = profile.metadata ?? {};
                        const mapped = {
                            name: u.name ?? "",
                            displayName: profile.displayName ?? meta.displayName ?? "",
                            avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? "",
                            bio: profile.bio ?? meta.bio ?? "",
                            country: profile.country ?? meta.country ?? meta.countryCode ?? "",
                            region: profile.region ?? meta.region ?? "",
                            postalCode: profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "",
                            language: profile.language ?? meta.language ?? "",
                            district: profile.district ?? meta.district ?? "",
                            email: u.email ?? "",
                            phone: profile.phoneNumber ?? u.phone ?? ""
                        };
                        if (!mounted) return;
                        setUser(u);
                        setForm(mapped);
                        setCroppedBlobUrl(null);
                        // Preload states & districts when appropriate
                        if (mapped.country) {
                            await fetchStates(mapped.country, mapped.region);
                            if (mapped.region) {
                                await fetchDistricts(mapped.country, mapped.region, mapped.district);
                            }
                        }
                    } else {
                        window.location = "/login";
                    }
                } catch (err) {
                    console.error("Failed to load /api/me", err);
                    window.location = "/login";
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "ProfileForm.useEffect": ()=>{
                    mounted = false;
                }
            })["ProfileForm.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ProfileForm.useEffect"], []);
    // -------------------------
    // Cascading fetchers
    // -------------------------
    async function fetchStates(countryName, preselectState = "") {
        setStates([]);
        setStatesError(null);
        setStatesLoading(true);
        setForm((p)=>({
                ...p,
                region: ""
            }));
        setDistricts([]);
        setForm((p)=>({
                ...p,
                district: ""
            }));
        try {
            const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    country: countryName
                })
            });
            if (!res.ok) throw new Error(`States fetch failed (${res.status})`);
            const json = await res.json();
            let stateNames = [];
            if (json?.data) {
                const d = json.data;
                if (Array.isArray(d)) {
                    const found = d.find((x)=>{
                        const n = (x?.name ?? "").toLowerCase();
                        return n === countryName.toLowerCase() || n.includes(countryName.toLowerCase());
                    });
                    if (found) {
                        if (Array.isArray(found.states)) {
                            stateNames = found.states[0] && typeof found.states[0] === "object" ? found.states.map((s)=>s.name).filter(Boolean) : found.states.slice();
                        }
                    } else {
                        const first = d[0];
                        if (first?.states) {
                            if (Array.isArray(first.states)) {
                                stateNames = typeof first.states[0] === "object" ? first.states.map((s)=>s.name).filter(Boolean) : first.states.slice();
                            }
                        }
                    }
                } else if (typeof d === "object" && Array.isArray(d.states)) {
                    stateNames = typeof d.states[0] === "object" ? d.states.map((s)=>s.name).filter(Boolean) : d.states.slice();
                }
            } else if (Array.isArray(json?.states)) {
                stateNames = typeof json.states[0] === "object" ? json.states.map((s)=>s.name).filter(Boolean) : json.states.slice();
            }
            stateNames = Array.from(new Set(stateNames)).sort((a, b)=>a.localeCompare(b));
            setStates(stateNames);
            if (preselectState && stateNames.includes(preselectState)) {
                setForm((p)=>({
                        ...p,
                        region: preselectState
                    }));
            }
        } catch (err) {
            console.warn("fetchStates error", err);
            setStatesError("Could not load states for this country.");
        } finally{
            setStatesLoading(false);
        }
    }
    async function fetchDistricts(countryName, stateName, preselectDistrict = "") {
        setDistricts([]);
        setDistrictsError(null);
        setDistrictsLoading(true);
        setForm((p)=>({
                ...p,
                district: ""
            }));
        try {
            const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    country: countryName,
                    state: stateName
                })
            });
            if (!res.ok) throw new Error(`Districts fetch failed (${res.status})`);
            const json = await res.json();
            let items = [];
            if (Array.isArray(json?.data)) {
                items = json.data.slice();
            } else if (Array.isArray(json?.cities)) {
                items = json.cities.slice();
            } else if (json?.data?.cities && Array.isArray(json.data.cities)) {
                items = json.data.cities.slice();
            }
            items = Array.from(new Set(items)).sort((a, b)=>a.localeCompare(b));
            setDistricts(items);
            if (preselectDistrict && items.includes(preselectDistrict)) {
                setForm((p)=>({
                        ...p,
                        district: preselectDistrict
                    }));
            }
        } catch (err) {
            console.warn("fetchDistricts error", err);
            setDistrictsError("Could not load districts for this state.");
        } finally{
            setDistrictsLoading(false);
        }
    }
    // on change handlers
    async function onCountryChange(newCountry) {
        setForm((p)=>({
                ...p,
                country: newCountry,
                region: "",
                district: ""
            }));
        if (newCountry) {
            await fetchStates(newCountry);
            const found = countries.find((c)=>c.name === newCountry || c.code === newCountry);
            if (found?.languages) {
                const vals = Array.isArray(found.languages) ? found.languages : Object.values(found.languages ?? {});
                if (vals.length && !form.language) setForm((p)=>({
                        ...p,
                        language: vals[0]
                    }));
            }
        } else {
            setStates([]);
            setDistricts([]);
        }
    }
    async function onStateChange(newState) {
        setForm((p)=>({
                ...p,
                region: newState,
                district: ""
            }));
        if (newState && form.country) {
            await fetchDistricts(form.country, newState);
        } else {
            setDistricts([]);
        }
    }
    // -------------------------
    // Photo helpers
    // -------------------------
    function handleFileSelect(file) {
        if (!file) {
            setRawFile(null);
            return;
        }
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            alert("Max 5MB");
            return;
        }
        setRawFile(file);
        setCropOpen(true);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            return ({
                "ProfileForm.useEffect": ()=>{
                    if (croppedBlobUrl) {
                        try {
                            URL.revokeObjectURL(croppedBlobUrl);
                        } catch  {}
                    }
                }
            })["ProfileForm.useEffect"];
        }
    }["ProfileForm.useEffect"], [
        croppedBlobUrl
    ]);
    async function uploadPhoto(file) {
        if (!file) return form.avatarUrl || null;
        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await fetch("/api/upload", {
                method: "POST",
                body: fd
            });
            const json = await res.json();
            if (json?.ok && json.url) return json.url;
            throw new Error(json?.error || "Upload failed");
        } catch (err) {
            console.warn("uploadPhoto failed", err);
            throw err;
        }
    }
    // -------------------------
    // Save handler
    // -------------------------
    async function handleSave(e) {
        if (e) e.preventDefault();
        setSaving(true);
        try {
            if (!form.name?.trim()) {
                alert("Please provide your full name.");
                setSaving(false);
                return;
            }
            let avatarUrl = form.avatarUrl ?? null;
            if (croppedBlobUrl) {
                const blob = await (await fetch(croppedBlobUrl)).blob();
                const file = new File([
                    blob
                ], "avatar.png", {
                    type: blob.type || "image/png"
                });
                try {
                    const uploaded = await uploadPhoto(file);
                    if (uploaded) avatarUrl = uploaded;
                } catch (err) {
                    alert("Failed to upload photo. Please try again.");
                    setSaving(false);
                    return;
                }
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
                    district: form.district,
                    postalCode: form.postalCode,
                    language: form.language
                }
            };
            const res = await fetch("/api/me", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(body)
            });
            if (res.status === 401) {
                alert("Session expired — please log in again.");
                window.location.href = "/login";
                return;
            }
            const json = await res.json().catch(()=>({
                    ok: false
                }));
            if (json.ok && json.user) {
                // server returns canonical user with profile relation and metadata
                const u = json.user;
                const profile = u.profile ?? {};
                const meta = profile.metadata ?? {};
                const mapped = {
                    name: u.name ?? "",
                    displayName: profile.displayName ?? meta.displayName ?? "",
                    email: u.email ?? "",
                    phone: profile.phoneNumber ?? u.phone ?? "",
                    avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? avatarUrl ?? "",
                    bio: profile.bio ?? meta.bio ?? "",
                    country: profile.country ?? meta.country ?? "",
                    region: profile.region ?? meta.region ?? "",
                    district: profile.district ?? meta.district ?? "",
                    postalCode: profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "",
                    language: profile.language ?? meta.language ?? ""
                };
                setUser(u);
                setForm(mapped);
                setEditing(false);
                setCroppedBlobUrl(null);
                setRawFile(null);
                // preload states/districts for selected country/region
                if (mapped.country) {
                    await fetchStates(mapped.country, mapped.region);
                    if (mapped.region) await fetchDistricts(mapped.country, mapped.region, mapped.district);
                }
            } else if (json.ok) {
                setUser((u)=>({
                        ...u ?? {},
                        name: form.name,
                        phone: form.phone,
                        profile: {
                            ...u?.profile ?? {},
                            ...body.profile ?? {}
                        }
                    }));
                setEditing(false);
                alert("Profile saved (optimistic).");
            } else {
                alert(json.error || "Save failed");
            }
        } catch (err) {
            console.error("save error", err);
            alert("Unexpected error while saving.");
        } finally{
            setSaving(false);
        }
    }
    // -------------------------
    // Render
    // -------------------------
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[50vh] flex items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-500 animate-pulse",
                children: "Loading profile…"
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 508,
            columnNumber: 12
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-white p-6 shadow text-center",
                children: [
                    "No user data — please",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-indigo-600",
                        onClick: ()=>window.location.href = "/login",
                        children: "sign in"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                        lineNumber: 516,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 514,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 513,
            columnNumber: 12
        }, this);
    }
    // helpers to read metadata-aware values for display (prefer explicit columns, then metadata)
    const profile = user.profile ?? {};
    const meta = profile.metadata ?? {};
    const displayCountry = profile.country ?? meta.country ?? "—";
    const displayRegion = profile.region ?? meta.region ?? "—";
    const displayDistrict = profile.district ?? meta.district ?? "—";
    const displayPostal = profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "—";
    const displayLanguage = profile.language ?? meta.language ?? "—";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-tr from-white via-slate-50 to-white rounded-2xl p-6 shadow-md border-none",
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
                                    lineNumber: 539,
                                    columnNumber: 11
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl font-semibold text-slate-700",
                                    children: (form.name || form.email || "U").charAt(0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 539,
                                    columnNumber: 113
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 536,
                                columnNumber: 11
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
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setRawFile(null);
                                            setCroppedBlobUrl(null);
                                            setForm((p)=>({
                                                    ...p,
                                                    avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? ""
                                                }));
                                        },
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border shadow-sm text-xs",
                                        children: "Revert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                        lineNumber: 535,
                        columnNumber: 9
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
                                                lineNumber: 567,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 568,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-100",
                                                        children: user.role ?? "Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs px-2 py-1 rounded bg-slate-50 text-slate-600",
                                                        children: [
                                                            "Joined ",
                                                            new Date(user.createdAt).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 569,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
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
                                                lineNumber: 576,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.location.href = "/",
                                                className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border bg-white",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 580,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-600",
                                children: "A modern profile editor with smart cascading selects and image cropper. All changes are saved to your account."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: !editing ? // display mode
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 595,
                                    columnNumber: 15
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
                                                    lineNumber: 598,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800 ",
                                                    children: user.name ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Display name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: profile.displayName ?? meta.displayName ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: user.phone ?? profile.phoneNumber ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Bio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium whitespace-pre-wrap text-slate-800",
                                                    children: profile.bio ?? meta.bio ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-slate-600",
                                    children: "Location & language"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
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
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: displayCountry
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 619,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Region / State"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: displayRegion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 623,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "District"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: displayDistrict
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 627,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Postal code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: displayPostal
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Language"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-800",
                                                    children: displayLanguage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                    lineNumber: 593,
                    columnNumber: 7
                }, this) : // edit form
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSave,
                    className: "space-y-6 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: "image/*",
                            onChange: (e)=>handleFileSelect(e.target.files?.[0] ?? null),
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 ",
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
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Display name",
                                    value: form.displayName,
                                    onChange: (v)=>setForm({
                                            ...form,
                                            displayName: v
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Phone",
                                    value: form.phone,
                                    onChange: (v)=>setForm({
                                            ...form,
                                            phone: v
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingInput, {
                                    label: "Postal code",
                                    value: form.postalCode,
                                    onChange: (v)=>setForm({
                                            ...form,
                                            postalCode: v
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-500",
                                    children: "Bio"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.bio,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            bio: e.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 border-none bg-indigo-50",
                                    placeholder: "Tell people about yourself — what you do and what you care about."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Country"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.country,
                                                onChange: (e)=>onCountryChange(e.target.value),
                                                className: "w-full p-3 border rounded-lg bg-indigo-50 border-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— Select country —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 21
                                                    }, this),
                                                    countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c.name,
                                                            children: [
                                                                c.name,
                                                                " ",
                                                                c.region ? `(${c.region})` : ""
                                                            ]
                                                        }, c.name + c.code, true, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 41
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Region / State"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 688,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: statesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 text-sm text-slate-400",
                                                children: "Loading states…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 690,
                                                columnNumber: 36
                                            }, this) : statesError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 text-sm text-rose-500",
                                                children: statesError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 690,
                                                columnNumber: 118
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.region,
                                                onChange: (e)=>onStateChange(e.target.value),
                                                className: "w-full p-3 border rounded-lg bg-indigo-50 border-none",
                                                disabled: !form.country || states.length === 0,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— Select region / state —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 23
                                                    }, this),
                                                    states.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 40
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 690,
                                                columnNumber: 183
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: form.country ? "Select a state — loaded from public geo API." : "Select a country first."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 687,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "District / City"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: districtsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 text-sm text-slate-400",
                                                children: "Loading districts…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 703,
                                                columnNumber: 39
                                            }, this) : districtsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 text-sm text-rose-500",
                                                children: districtsError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 703,
                                                columnNumber: 127
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.district,
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        district: e.target.value
                                                    }),
                                                className: "w-full p-3 border rounded-lg bg-indigo-50 border-none",
                                                disabled: !form.region || districts.length === 0,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— Select district / city —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 23
                                                    }, this),
                                                    districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: d,
                                                            children: d
                                                        }, d, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 708,
                                                            columnNumber: 43
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 703,
                                                columnNumber: 195
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 702,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: form.region ? "Choose district / city (if available)" : "Select a state to load districts."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 674,
                            columnNumber: 13
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
                                            lineNumber: 720,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.language,
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        language: e.target.value
                                                    }),
                                                className: "w-full p-3 border rounded-lg bg-indigo-50 border-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— Preferred language —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 21
                                                    }, this),
                                                    languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: l,
                                                            children: l
                                                        }, l, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 41
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                lineNumber: 722,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 719,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 718,
                            columnNumber: 13
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
                                            lineNumber: 740,
                                            columnNumber: 17
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
                                                        lineNumber: 745,
                                                        columnNumber: 17
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl text-slate-500",
                                                        children: (form.name || "U").charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 120
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 19
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
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setRawFile(null);
                                                                setCroppedBlobUrl(null);
                                                                setForm((p)=>({
                                                                        ...p,
                                                                        avatarUrl: ""
                                                                    }));
                                                            },
                                                            className: "px-3 py-2 rounded-md border text-sm inline-flex items-center gap-2",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Max 5 MB. JPG/PNG/GIF accepted."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                            lineNumber: 763,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 739,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-500",
                                            children: "Profile preview URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 769,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.avatarUrl,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    avatarUrl: e.target.value
                                                }),
                                            placeholder: "Direct image URL (optional)",
                                            className: "w-full mt-1 p-3 border rounded-lg bg-indigo-50 border-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 770,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "If you paste an image URL it will be used unless you upload a new file."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                            lineNumber: 774,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 738,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setEditing(false);
                                        // revert from user + metadata
                                        const profile = user.profile ?? {};
                                        const meta = profile.metadata ?? {};
                                        setForm({
                                            name: user.name ?? "",
                                            displayName: profile.displayName ?? meta.displayName ?? "",
                                            email: user.email ?? "",
                                            phone: profile.phoneNumber ?? user.phone ?? "",
                                            avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? "",
                                            bio: profile.bio ?? meta.bio ?? "",
                                            country: profile.country ?? meta.country ?? "",
                                            region: profile.region ?? meta.region ?? "",
                                            postalCode: profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "",
                                            language: profile.language ?? meta.language ?? "",
                                            district: profile.district ?? meta.district ?? ""
                                        });
                                        setCroppedBlobUrl(null);
                                        setRawFile(null);
                                    },
                                    className: "px-4 py-2 border rounded-lg",
                                    disabled: saving,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 779,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: saving,
                                    className: "px-4 py-2 bg-indigo-700 text-white rounded-lg",
                                    children: saving ? "Saving…" : "Save profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                                    lineNumber: 803,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/ProfileForm.tsx",
                            lineNumber: 778,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/ProfileForm.tsx",
                    lineNumber: 643,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ProfileForm.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, this),
            cropOpen && rawFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageCropper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 811,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/ProfileForm.tsx",
        lineNumber: 532,
        columnNumber: 10
    }, this);
}
_s(ProfileForm, "676RBf5Y2mJ0oM64XiaYRIczWVM=");
_c = ProfileForm;
/** FloatingInput – small presentational input with floating label */ function FloatingInput(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "f4976e9dba019673a14a3e4c1114529155ff0f73531a66d23d9b7b93d36f2392") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f4976e9dba019673a14a3e4c1114529155ff0f73531a66d23d9b7b93d36f2392";
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
            lineNumber: 840,
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
            className: "w-full mt-4 p-3 pt-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 border-none bg-indigo-50"
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ProfileForm.tsx",
            lineNumber: 860,
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
            lineNumber: 869,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ProfileForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$PasswordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/PasswordModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ProfileMenu.tsx [app-client] (ecmascript)"); // optional, mirrors Sidebar's profile area
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AccountLayout() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "834a5f99fdd81376cf9aff56eac0235a2494d1d8dc00a6f956b2f9aa91883bf8") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "834a5f99fdd81376cf9aff56eac0235a2494d1d8dc00a6f956b2f9aa91883bf8";
    }
    const [showPasswordModal, setShowPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: -8
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            duration: 0.35
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-slate-800",
            children: "Account settings"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-sm text-slate-500 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "w-4 h-4 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/Accountlayout.tsx",
                            lineNumber: 52,
                            columnNumber: 88
                        }, this),
                        "Manage your personal info, security, and visibility"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 52,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            scale: 1.03
        };
        t6 = {
            scale: 0.97
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t5,
            whileTap: t6,
            className: "inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20",
            onClick: _AccountLayoutMotionButtonOnClick,
            "aria-label": "Upgrade account",
            children: [
                "Upgrade",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 74,
                    columnNumber: 297
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            initial: t0,
            animate: t1,
            transition: t2,
            className: "mb-6 flex items-center justify-between gap-4",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden sm:flex items-center gap-3",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-1 border border-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/account/Accountlayout.tsx",
                                lineNumber: 81,
                                columnNumber: 248
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/Accountlayout.tsx",
                            lineNumber: 81,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 81,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t11;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            y: 8
        };
        t10 = {
            opacity: 1,
            y: 0
        };
        t11 = {
            duration: 0.4
        };
        $[10] = t10;
        $[11] = t11;
        $[12] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-slate-800",
                    children: "Profile"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 111,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "Edit your profile details and preferences."
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 111,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.03
                        },
                        whileTap: {
                            scale: 0.97
                        },
                        onClick: {
                            "AccountLayout[<motion.button>.onClick]": ()=>setShowPasswordModal(true)
                        }["AccountLayout[<motion.button>.onClick]"],
                        className: "px-3 py-2 rounded-lg border text-sm bg-slate-50",
                        children: "Change password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/account/Accountlayout.tsx",
                        lineNumber: 118,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 118,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].main, {
            className: "lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200",
            initial: t9,
            animate: t10,
            transition: t11,
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onChangePassword: {
                        "AccountLayout[<ProfileForm>.onChangePassword]": ()=>setShowPasswordModal(true)
                    }["AccountLayout[<ProfileForm>.onChangePassword]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 131,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            opacity: 0,
            x: 8
        };
        t16 = {
            opacity: 1,
            x: 0
        };
        t17 = {
            duration: 0.4,
            delay: 0.05
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-slate-700",
                    children: "Account"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 156,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-slate-500",
                    children: "Manage your account settings and profile visibility."
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 156,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 border-t"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
    } else {
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.02
            },
            whileTap: {
                scale: 0.98
            },
            onClick: {
                "AccountLayout[<motion.button>.onClick]": ()=>setShowPasswordModal(true)
            }["AccountLayout[<motion.button>.onClick]"],
            className: "w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition",
            children: "Security & password"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.02
            },
            whileTap: {
                scale: 0.98
            },
            className: "w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition",
            onClick: _AccountLayoutMotionButtonOnClick2,
            children: "Notifications"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    let t23;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    className: "w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition",
                    onClick: _AccountLayoutMotionButtonOnClick3,
                    children: "Billing"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 197,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 border-t"
        }, void 0, false, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[23] = t22;
        $[24] = t23;
    } else {
        t22 = $[23];
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: [
                "Member since: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    id: "member-since",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 211,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                    className: "bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col gap-6",
                    initial: t15,
                    animate: t16,
                    transition: t17,
                    children: [
                        t18,
                        t19,
                        t22,
                        t23,
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/account/Accountlayout.tsx",
                                lineNumber: 218,
                                columnNumber: 280
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/Accountlayout.tsx",
                            lineNumber: 218,
                            columnNumber: 258
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 218,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "AccountLayout[<PasswordModal>.onClose]": ()=>setShowPasswordModal(false)
        })["AccountLayout[<PasswordModal>.onClose]"];
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] !== showPasswordModal) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-6xl mx-auto",
            children: [
                t8,
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$PasswordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    open: showPasswordModal,
                    onClose: t26
                }, void 0, false, {
                    fileName: "[project]/src/app/account/Accountlayout.tsx",
                    lineNumber: 234,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/Accountlayout.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[28] = showPasswordModal;
        $[29] = t27;
    } else {
        t27 = $[29];
    }
    return t27;
}
_s(AccountLayout, "yMRvdHVOO009h8/w9VO6GQeC2Ac=");
_c = AccountLayout;
function _AccountLayoutMotionButtonOnClick3() {
    console.log("Billing clicked");
}
function _AccountLayoutMotionButtonOnClick2() {
    console.log("Notifications clicked");
}
function _AccountLayoutMotionButtonOnClick() {
    console.log("Upgrade clicked");
}
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

//# sourceMappingURL=src_3003ec60._.js.map