"use client";
import React, { useState } from "react";
import StatsCard from "../../../components/dashboard/StatsCard";
import TeamList from "../../../components/dashboard/TeamList";
import PerformanceChart from "../../../components/dashboard/PerformanceChart";
import UnifiedInbox from "../../../components/dashboard/UnifiedInbox";
import { useFetch } from "../hooks/usedashboard";

const AdminDashboard = () => {
  const { data: teamsData } = useFetch<{ teams: { id: string; name: string }[] }>("/api/dashboard/teams");
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const { data: performanceData } = useFetch<any>(
    selectedTeam ? `/api/dashboard/performance?teamId=${selectedTeam}` : "/api/dashboard/performance"
  );

  const chartData =
    performanceData?.snapshots.map((s: any) => ({ name: s.user.name, score: s.score })) || [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Total Teams" value={teamsData?.teams.length || 0} />
        <StatsCard title="Total Employees" value={performanceData?.snapshots.length || 0} />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <TeamList teams={teamsData?.teams || []} onSelect={setSelectedTeam} />
        <div className="col-span-3">
          <PerformanceChart data={chartData} />
        </div>
      </div>

      <UnifiedInbox />
    </div>
  );
};

export default AdminDashboard;
