// app/dashboard/page.tsx
import React from "react";

import KPIGrid from "@/components/dashboard/KPIGrid"
import AnalyticsCharts from "@/components/dashboard/AnalyticsCharts";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
    

      <section aria-labelledby="kpis">
        <KPIGrid />
      </section>

      <section aria-labelledby="charts" className="mt-2">
        <AnalyticsCharts />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border">Message Outcomes — placeholder widget (design-ready)</div>
        <div className="bg-white rounded-2xl p-6 shadow-md border">Top Responders — placeholder widget</div>
      </section>
    </div>
  );
}
