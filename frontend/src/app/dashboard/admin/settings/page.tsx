// src/app/dashboard/admin/settings/page.tsx
export const metadata = { title: "Settings • Admin", description: "Admin settings and integrations" };

export default function AdminSettingsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
      <p className="mt-2 text-sm text-slate-500">Application and account settings for admins.</p>

      <section className="mt-6 grid gap-4">
        <div className="rounded-2xl p-4 bg-white border border-slate-100 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700">General</h2>
          <p className="text-xs text-slate-500 mt-2">Timezone, language and other defaults.</p>
        </div>
      </section>
    </main>
  );
}
