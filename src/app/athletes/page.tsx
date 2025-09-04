"use client";
import { useEffect, useState } from "react";
import { DBAthlete } from "../../types";
import { getAthletes } from "../../services/api";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import AthleteCard from "../../components/AthleteCard";

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
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </div>
  );
}
