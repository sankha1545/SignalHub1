// src/app/dashboard/admin/teams/page.tsx
export const metadata = { title: "Teams • Admin", description: "Manage team members and roles" };

export default function AdminTeamsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-slate-800">Teams</h1>
      <p className="mt-2 text-sm text-slate-500">Manage team members, invites and roles.</p>

      <section className="mt-6">
        <div className="rounded-2xl p-4 bg-white border border-slate-100 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700">Members</h2>
          <p className="text-xs text-slate-500 mt-2">Invite members and assign roles here.</p>
        </div>
      </section>
    </main>
  );
}
