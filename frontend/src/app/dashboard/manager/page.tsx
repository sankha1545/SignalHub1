"use client";
import React, { useState } from "react";
import StatsCard from "../components/StatsCard";
import PerformanceChart from "../components/PerformanceChart";
import UnifiedInbox from "../components/UnifiedInbox";
import { useFetch } from "../hooks/useDashboard";

const ManagerDashboard = () => {
  const { data: performanceData } = useFetch<any>("/api/dashboard/performance");
  const chartData =
    performanceData?.snapshots.map((s: any) => ({ name: s.user.name, score: s.score })) || [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Team Members" value={performanceData?.snapshots.length || 0} />
      </div>

      <PerformanceChart data={chartData} />

      <UnifiedInbox />
    </div>
  );
};

export default ManagerDashboard;
