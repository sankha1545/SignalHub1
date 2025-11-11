"use client";


import React, { useEffect, useState } from "react";
import ProfileForm from "../../components/forms/ProfileForm";
import PasswordModal from "../../components/modals/PasswordModal";


export default function AccountLayout() {
const [showPasswordModal, setShowPasswordModal] = useState(false);


return (
<div className="p-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
<div className="lg:col-span-2">
<ProfileForm onChangePassword={() => setShowPasswordModal(true)} />
</div>


<aside className="bg-white rounded-2xl p-6 shadow-md border flex flex-col gap-4 border-none">
<div>
<h3 className="text-sm font-semibold text-slate-700">Account</h3>
<div className="mt-3 text-sm text-slate-500">Manage your account settings and profile visibility.</div>
</div>


<div className="pt-2 border-t" />


<div className="flex flex-col gap-2">
<button className="w-full text-left px-3 py-2 rounded-md border">Security & password</button>
<button className="w-full text-left px-3 py-2 rounded-md border">Notifications</button>
<button className="w-full text-left px-3 py-2 rounded-md border">Billing</button>
</div>


<div className="pt-2 border-t" />


<div className="text-xs text-slate-500">Member since: <span id="member-since">—</span></div>
</aside>
</div>


<PasswordModal open={showPasswordModal} onClose={() => setShowPasswordModal(false)} />
</div>
);
}