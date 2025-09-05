"use client";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import AthleteCard from "../../components/AthleteCard";
import { useGetAthletesQuery } from "@/generated/graphql";

export default function AthletesTab(props: { tabKey: string }) {
  const { data, loading, error } = useGetAthletesQuery();
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Athletes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.athletes.map((a) => (
          <AthleteCard key={a.id} athlete={a} />
        ))}
      </div>
    </div>
  );
}
