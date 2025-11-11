"use client";


import React, { useCallback, useEffect, useRef, useState } from "react";
// Note: This component uses `react-easy-crop` and a tiny helper to convert crops to blobs.
// Install: npm i react-easy-crop


import Cropper from "react-easy-crop";


function getCroppedImg(imageSrc: string, pixelCrop: any) {
const canvas = document.createElement("canvas");
canvas.width = pixelCrop.width;
canvas.height = pixelCrop.height;
const ctx = canvas.getContext("2d");
return new Promise<Blob | null>((resolve) => {
const image = new Image();
image.crossOrigin = "anonymous";
image.onload = () => {
ctx!.drawImage(
image,
pixelCrop.x,
pixelCrop.y,
pixelCrop.width,
pixelCrop.height,
0,
0,
pixelCrop.width,
pixelCrop.height
);
canvas.toBlob((blob) => resolve(blob), "image/png");
};
image.src = imageSrc;
});
}


export default function ImageCropper({ file, onCancel, onCropped }: { file: File; onCancel: () => void; onCropped: (blobUrl: string) => void }) {
const [imageSrc, setImageSrc] = useState<string | null>(null);
const [crop, setCrop] = useState({ x: 0, y: 0 });
const [zoom, setZoom] = useState(1);
const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);


useEffect(() => {
const reader = new FileReader();
reader.onload = () => setImageSrc(reader.result as string);
reader.readAsDataURL(file);
}, [file]);


const onCropComplete = useCallback((_: any, croppedAreaPixelsLocal: any) => {
setCroppedAreaPixels(croppedAreaPixelsLocal);
}, []);


async function handleDone() {
if (!imageSrc || !croppedAreaPixels) return;
const blob = await getCroppedImg(imageSrc, croppedAreaPixels);
if (!blob) return alert("Failed to crop image");
const url = URL.createObjectURL(blob);
onCropped(url);
}


return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-2xl w-[92%] max-w-3xl p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold">Adjust your photo</h3>
<div className="flex gap-2">
<button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
<button onClick={handleDone} className="px-3 py-1 bg-indigo-600 text-white rounded">Done</button>
</div>
</div>


<div className="relative h-80 bg-gray-100 rounded overflow-hidden">
{imageSrc && (
<Cropper image={imageSrc} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
)}
</div>


<div className="mt-3 flex items-center gap-4">
<label className="text-xs">Zoom</label>
<input type="range" min={1} max={3} step={0.01} value={zoom} onChange={(e)=>setZoom(Number(e.target.value))} className="w-full" />
</div>
</div>
</div>
);
}