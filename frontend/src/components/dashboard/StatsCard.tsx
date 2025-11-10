"use client";
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      {icon && <div className="text-2xl">{icon}</div>}
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
