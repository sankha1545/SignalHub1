// src/app/dashboard/admin/overview/page.tsx
export const metadata = { title: "Overview • Admin", description: "Overview of account status and recent activity" };

export default function AdminOverviewPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-slate-800">Overview</h1>
      <p className="mt-2 text-sm text-slate-500">High-level snapshot of account and recent events.</p>

      <section className="mt-6 space-y-4">
        <div className="rounded-2xl p-4 bg-white border border-slate-100 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700">Recent activity</h2>
          <p className="text-xs text-slate-500 mt-2">Latest threads and action items.</p>
        </div>
      </section>
    </main>
  );
}
