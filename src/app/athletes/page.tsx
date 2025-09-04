"use client";
import { useEffect, useState } from "react";
import { DBAthlete } from "../../types";
import { getAthletes } from "../../services/api";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

export default function AthletesTab(props: { tabKey: string }) {
  const [athletes, setAthletes] = useState<DBAthlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAthletes()
      .then(setAthletes)
      .catch(() => setError("Failed to fetch athletes."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Athletes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {athletes.map((athlete) => (
          <div
            key={athlete.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow p-4"
          >
            <h3 className="text-lg font-semibold mb-2">
              {athlete.display_name}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {athlete.team_id}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Position: {athlete.position_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
