"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { DBAthlete, DBPropBet } from "../../../types";
import { getAthlete, getPropBets } from "../../../services/api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorMessage from "../../../components/ErrorMessage";

export default function AthleteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [athlete, setAthlete] = useState<DBAthlete | null>(null);
  const [propBets, setPropBets] = useState<DBPropBet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const athleteData = await getAthlete(id);
        setAthlete(athleteData);
        const allPropBets = await getPropBets();
        setPropBets(allPropBets.filter((bet) => bet.athlete_id === id));
      } catch {
        setError("Failed to fetch athlete or prop bets data.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchData();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!athlete) return <div className="text-center">Athlete not found.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-3xl font-bold mb-4">{athlete.display_name}</h2>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Team: {athlete.team_id}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Position: {athlete.position_name}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Age: {athlete.age}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Height: {athlete.height_display}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Weight: {athlete.weight_display}
      </div>
      <div className="mb-6 text-gray-600 dark:text-gray-400">
        Status: {athlete.status_name}
      </div>
      <h3 className="text-xl font-semibold mb-2">Prop Bets</h3>
      {propBets.length > 0 ? (
        <div className="space-y-4">
          {propBets.map((bet) => (
            <div
              key={bet.type_id + bet.event_id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
            >
              <div className="font-medium text-gray-900 dark:text-white mb-1">
                {bet.type_name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Event: {bet.event_id}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Over: {bet.over_american} ({bet.over_value})
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Under: {bet.under_american} ({bet.under_value})
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Target: {bet.target_value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Last Updated: {new Date(bet.odds_last_updated).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 dark:text-gray-400 italic">
          No prop bets for this athlete.
        </div>
      )}
    </div>
  );
}
