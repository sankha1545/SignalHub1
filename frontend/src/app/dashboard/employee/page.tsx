"use client";
import React from "react";
import UnifiedInbox from "../../../components/dashboard/UnifiedInbox";
import { useFetch } from "../../dashboard/hooks/usedashboard";

const EmployeeDashboard = () => {
  const { data: tasksData } = useFetch<any>("/api/dashboard/tasks");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Employee Dashboard</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="font-bold mb-2">Your Tasks</h2>
        <ul className="space-y-1">
          {tasksData?.tasks.map((t: any) => (
            <li key={t.id} className="border-b py-2">
              <p className="font-medium">{t.title}</p>
              <p>{t.description}</p>
              <p className="text-sm text-gray-500">Due: {new Date(t.dueDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>

      <UnifiedInbox />
    </div>
  );
};

export default EmployeeDashboard;
