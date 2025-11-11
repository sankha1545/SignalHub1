// src/components/profile/EditProfile.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Trash2, Camera, X } from "lucide-react";

/**
 * NOTE: replace GEONAMES_USERNAME with your GeoNames username if you want live country/state lists.
 */
const GEONAMES_USERNAME = "sankha"; // <-- replace or leave

const TIMEZONES_38 = [
  "UTC-12:00 - Baker Island",
  "UTC-11:00 - Niue / American Samoa",
  "UTC-10:00 - Hawaii-Aleutian Standard Time",
  "UTC-09:00 - Alaska Standard Time",
  "UTC-08:00 - Pacific Standard Time",
  "UTC-07:00 - Mountain Standard Time",
  "UTC-06:00 - Central Standard Time",
  "UTC-05:00 - Eastern Standard Time",
  "UTC-04:00 - Atlantic Standard Time",
  "UTC-03:30 - Newfoundland Standard Time",
  "UTC-03:00 - Argentina / Brasilia",
  "UTC-02:00 - South Georgia Time",
  "UTC-01:00 - Azores",
  "UTC+00:00 - Greenwich Mean Time",
  "UTC+01:00 - Central European Time",
  "UTC+02:00 - Eastern European Time",
  "UTC+03:00 - Moscow / Arabia",
  "UTC+03:30 - Iran Standard Time",
  "UTC+04:00 - Azerbaijan / UAE",
  "UTC+04:30 - Afghanistan",
  "UTC+05:00 - Pakistan Standard Time",
  "UTC+05:30 - India Standard Time",
  "UTC+05:45 - Nepal Time",
  "UTC+06:00 - Bangladesh / Bhutan",
  "UTC+06:30 - Cocos / Myanmar",
  "UTC+07:00 - Indochina Time",
  "UTC+08:00 - China / Singapore",
  "UTC+09:00 - Japan / Korea",
  "UTC+09:30 - Australian Central Standard Time",
  "UTC+10:00 - Australian Eastern Standard Time",
  "UTC+10:30 - Lord Howe",
  "UTC+11:00 - Solomon Is. / New Caledonia",
  "UTC+12:00 - Fiji / New Zealand",
  "UTC+12:45 - Chatham Islands",
  "UTC+13:00 - Tonga / Phoenix Is.",
  "UTC+14:00 - Line Islands"
];

type CountryEntry = { geonameId: number; countryName: string; countryCode: string };
type StateEntry = { geonameId: number; name: string };

type User = { id: string; email: string; name?: string | null; profile?: any };

type Props = {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (payload: Partial<User & { profile?: any }>) => Promise<boolean | any> | boolean | any;
};

const MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB

export default function EditProfile({ open, onClose, user, onSave }: Props) {
  const [saving, setSaving] = useState(false);

  // Form state
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [countryGeonameId, setCountryGeonameId] = useState<number | "">("");
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateGeonameId, setStateGeonameId] = useState<number | "">("");
  const [stateName, setStateName] = useState("");
  const [language, setLanguage] = useState("");
  const [timezone, setTimezone] = useState("");

  // Avatar
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFileSize, setAvatarFileSize] = useState<number | null>(null);
  const [avatarRemoved, setAvatarRemoved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // geo
  const [countries, setCountries] = useState<CountryEntry[]>([]);
  const [states, setStates] = useState<StateEntry[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);

  const primaryRef = useRef<HTMLButtonElement | null>(null);

  // initialize form when user or open changes
  useEffect(() => {
    if (!user) return;
    setFullName(user.name ?? "");
    const p = user.profile ?? {};
    setDisplayName(p.displayName ?? "");
    setGender(p.gender ?? "");
    setCountryGeonameId(p.countryGeonameId ?? "");
    setCountryCode(p.countryCode ?? "");
    setCountryName(p.countryName ?? "");
    setStateGeonameId(p.stateGeonameId ?? "");
    setStateName(p.stateName ?? "");
    setLanguage(p.language ?? "");
    setTimezone(p.timezone ?? "");
    setAvatarPreview(p.avatarUrl ?? p.avatarBase64 ?? null);
    setAvatarFileSize(null);
    setAvatarRemoved(false);
  }, [user, open]);

  // fetch countries (cached)
  useEffect(() => {
    let mounted = true;
    async function loadCountries() {
      setLoadingCountries(true);
      try {
        const cached = sessionStorage.getItem("geonames_countries_v1");
        if (cached) {
          const parsed = JSON.parse(cached) as CountryEntry[];
          if (mounted) setCountries(parsed);
          setLoadingCountries(false);
          return;
        }

        if (!GEONAMES_USERNAME) {
          if (mounted) setCountries([]);
          setLoadingCountries(false);
          return;
        }

        const res = await fetch(`http://api.geonames.org/countryInfoJSON?username=${GEONAMES_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch countries from GeoNames");
        const json = await res.json();
        const list: CountryEntry[] = (json.geonames || []).map((c: any) => ({
          geonameId: c.geonameId,
          countryName: c.countryName,
          countryCode: c.countryCode
        }));
        sessionStorage.setItem("geonames_countries_v1", JSON.stringify(list));
        if (mounted) setCountries(list);
      } catch (err) {
        console.error("[EditProfile] Error loading countries:", err);
        if (mounted) setCountries([]);
      } finally {
        if (mounted) setLoadingCountries(false);
      }
    }
    loadCountries();
    return () => {
      mounted = false;
    };
  }, []);

  // fetch states when country changes
  useEffect(() => {
    let mounted = true;

    async function loadStates() {
      if (!countryGeonameId) {
        if (mounted) {
          setStates([]);
          setStateGeonameId("");
          setStateName("");
        }
        return;
      }

      setLoadingStates(true);
      setStates([]);
      try {
        if (!GEONAMES_USERNAME) {
          setStates([]);
          setLoadingStates(false);
          return;
        }
        const res = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${countryGeonameId}&username=${GEONAMES_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch states from GeoNames");
        const json = await res.json();
        const st: StateEntry[] = (json.geonames || []).map((g: any) => ({ geonameId: g.geonameId, name: g.name }));
        if (mounted) {
          setStates(st);
          setLoadingStates(false);
        }
      } catch (err) {
        console.error("[EditProfile] Error loading states:", err);
        if (mounted) setLoadingStates(false);
      }
    }

    if (countryGeonameId) {
      const found = countries.find((c) => c.geonameId === countryGeonameId);
      if (found) {
        setCountryCode(found.countryCode);
        setCountryName(found.countryName);
      }
    } else {
      setCountryCode("");
      setCountryName("");
    }

    loadStates();
    return () => {
      mounted = false;
    };
  }, [countryGeonameId, countries]);

  // trap focus and prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => primaryRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  // close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // avatar helpers
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    pickAvatarFile(file);
  }

  function pickAvatarFile(file: File) {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    if (file.size > MAX_AVATAR_BYTES) {
      alert("Avatar must be 2 MB or smaller.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setAvatarPreview(dataUrl);
      setAvatarFileSize(file.size);
      setAvatarRemoved(false);
    };
    reader.onerror = (err) => {
      console.error("[EditProfile] Failed to read avatar file:", err);
      alert("Failed to read the selected file.");
    };
    reader.readAsDataURL(file);
  }

  function triggerFilePicker() {
    fileInputRef.current?.click();
  }

  function removeAvatar() {
    setAvatarPreview(null);
    setAvatarFileSize(null);
    setAvatarRemoved(true);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // submit handler mirrors previous robust behavior but UI matches the new style
  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!user) return;
    if (!fullName || typeof fullName !== "string") {
      alert("Full name is required.");
      return;
    }

    setSaving(true);
    try {
      const profilePatch: any = {
        displayName: displayName || undefined,
        gender: gender || undefined,
        countryGeonameId: countryGeonameId || null,
        countryCode: countryCode || null,
        countryName: countryName || null,
        stateGeonameId: stateGeonameId || null,
        stateName: stateName || null,
        language: language || undefined,
        timezone: timezone || undefined
      };

      if (avatarRemoved) {
        profilePatch.avatarBase64 = null;
        profilePatch.avatarUrl = null;
      } else if (avatarPreview && avatarPreview.startsWith("data:")) {
        profilePatch.avatarBase64 = avatarPreview;
        profilePatch.avatarUrl = avatarPreview;
      }

      const payload: any = { name: fullName, profile: profilePatch };

      // call parent onSave
      let okResult: boolean | any = false;
      try {
        const maybe = onSave(payload);
        okResult = typeof maybe === "boolean" ? maybe : await maybe;
      } catch (err) {
        console.error("[EditProfile] onSave threw:", err);
        okResult = false;
      }

      let updatedUser: any = null;
      if (okResult && typeof okResult === "object") {
        updatedUser = okResult;
      } else if (okResult === true) {
        try {
          const r = await fetch("/api/me", { method: "GET", credentials: "include", cache: "no-store" });
          if (r.ok) {
            const b = await r.json().catch(() => null);
            updatedUser = b?.user ?? null;
          }
        } catch (err) {
          console.error("[EditProfile] GET /api/me after save failed:", err);
        }
      } else {
        // fallback direct PATCH
        try {
          const r = await fetch("/api/me", {
            method: "PATCH",
            credentials: "include",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload)
          });
          if (r.ok) {
            const b = await r.json().catch(() => null);
            updatedUser = b?.user ?? null;
          }
        } catch (err) {
          console.error("[EditProfile] direct PATCH failed:", err);
        }
      }

      if (updatedUser) {
        try {
          window.dispatchEvent(new CustomEvent("user:updated", { detail: updatedUser }));
        } catch (e) {
          console.error("[EditProfile] dispatch user:updated failed:", e);
        }
        onClose?.();
        return;
      }

      // fallback: dispatch null and reload
      try { window.dispatchEvent(new CustomEvent("user:updated", { detail: null })); } catch (e) {}
      window.location.reload();
    } finally {
      setSaving(false);
    }
  }

  // Render: modal with clean, compact, animated UI similar to profilemenu1 design language
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-profile-title"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.18 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-2xl border"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="edit-profile-title" className="text-lg font-semibold">Edit profile</h3>
            <p className="text-sm text-slate-600 mt-1">Update name, display name, timezone, and country. Email is read-only.</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-2 rounded-md hover:bg-slate-100" aria-label="Close">
              <X className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border">
                  {avatarPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatarPreview} alt="avatar preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-3xl font-semibold text-slate-700">{(user?.name || user?.email || "U").charAt(0).toUpperCase()}</div>
                  )}
                </div>

                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <button
                    type="button"
                    onClick={triggerFilePicker}
                    className="bg-white border rounded-full p-2 shadow hover:bg-slate-50"
                    title="Change avatar"
                  >
                    <Camera className="w-4 h-4 text-slate-700" />
                  </button>
                  <button
                    type="button"
                    onClick={removeAvatar}
                    className="bg-white border rounded-full p-2 shadow hover:bg-slate-50"
                    title="Remove avatar"
                  >
                    <Trash2 className="w-4 h-4 text-rose-500" />
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500 text-center">{avatarFileSize ? `${Math.round(avatarFileSize / 1024)} KB` : "Max 2 MB"}</div>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="sr-only" aria-hidden />
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-600 block">Full name</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Display name</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Email (read-only)</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2 bg-slate-50" value={user?.email ?? ""} readOnly />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Gender</label>
                <select className="mt-1 w-full rounded-lg border px-3 py-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Country/Region</label>
                <select
                  value={countryGeonameId || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCountryGeonameId(val ? Number(val) : "");
                    setStateGeonameId("");
                    setStateName("");
                  }}
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                >
                  <option value="">Select Country</option>
                  {loadingCountries ? (
                    <option value="">Loading countries...</option>
                  ) : (
                    countries.map((c) => (
                      <option key={c.geonameId} value={c.geonameId}>
                        {c.countryName} ({c.countryCode})
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">State</label>
                <select
                  value={stateGeonameId || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setStateGeonameId(val ? Number(val) : "");
                    const found = states.find((s) => s.geonameId === Number(val));
                    setStateName(found ? found.name : "");
                  }}
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                  disabled={!countryGeonameId || loadingStates || states.length === 0}
                >
                  <option value="">{countryGeonameId ? (loadingStates ? "Loading states..." : "Select State") : "Select Country First"}</option>
                  {states.map((s) => (
                    <option key={s.geonameId} value={s.geonameId}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Language</label>
                <input value={language} onChange={(e) => setLanguage(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Time zone</label>
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="">Select timezone</option>
                  {TIMEZONES_38.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button
              ref={primaryRef}
              type="submit"
              disabled={saving}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>,
    document.body
  );
}
