"use client";
import React from "react";

interface TeamListProps {
  teams: { id: string; name: string }[];
  onSelect: (teamId: string) => void;
}

const TeamList: React.FC<TeamListProps> = ({ teams, onSelect }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-2">Teams</h2>
      <ul className="space-y-1">
        {teams.map((team) => (
          <li
            key={team.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => onSelect(team.id)}
          >
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
