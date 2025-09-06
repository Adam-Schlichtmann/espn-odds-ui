"use client";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { useGetTeamsQuery } from "@/generated/graphql";
import Link from "next/link";

export default function TeamsTab(props: { tabKey: string }) {
  const { data, loading, error } = useGetTeamsQuery();
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  const teams = data?.teams || [];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link
            href={`/teams/${team.id}`}
            key={team.id}
            passHref
            legacyBehavior
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-2">
                {team.display_name}
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {team.location} {team.nickname}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Abbreviation: {team.abbreviation}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
