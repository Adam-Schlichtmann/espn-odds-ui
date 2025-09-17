"use client";
import { useParams } from "next/navigation";
import { useGetTeamsQuery } from "@/generated/graphql";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import ScrapeButton from "@/components/ScrapeButton";

function TeamDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetTeamsQuery({
    variables: { teamsId: id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  const team = data?.teams[0];
  if (!team) return <div>Team not found.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-3xl font-bold mb-4">{team.display_name}</h2>
      <div className="mb-4">
        <ScrapeButton team={team.id} league={team.league} sport={team.sport} />
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        City: {team.location}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Colors: {team.color} | {team.alternate_color}
      </div>
    </div>
  );
}

export default TeamDetails;
