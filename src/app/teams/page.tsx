"use client";
import { useEffect, useState } from "react";
import { DBTeam } from "../../types";
import { getTeams } from "../../services/api";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

export default function TeamsTab(props: { tabKey: string }) {
  const [teams, setTeams] = useState<DBTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch(() => setError("Failed to fetch teams."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{team.display_name}</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {team.location} {team.nickname}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Abbreviation: {team.abbreviation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
