// src/app/dashboard/admin/inbox/page.tsx
export const metadata = { title: "Inbox • Admin", description: "Admin inbox — all incoming messages and threads" };

export default function AdminInboxPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-slate-800">Inbox</h1>
      <p className="mt-2 text-sm text-slate-500">All incoming messages and threads for admins.</p>

      <section className="mt-6">
        <div className="rounded-2xl p-4 bg-white border border-slate-100 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700">Threads</h2>
          <p className="text-xs text-slate-500 mt-2">Thread list placeholder — implement list component here.</p>
        </div>
      </section>
    </main>
  );
}
