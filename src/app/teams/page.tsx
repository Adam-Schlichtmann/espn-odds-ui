"use client";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { Team, useGetTeamsQuery } from "@/generated/graphql";
import UsableList from "@/components/UsableList/UsableList";
import {
  SortTitle,
  FilterTitle,
  FilterOptions,
  SortOptions,
  getFilterValue,
  getSortValue,
  getKeywordString,
} from "@/sortFilter/team";
import { TEAM } from "@/sortFilter/constants";
import TeamCard from "@/components/TeamCard";

export default function TeamsTab(props: { tabKey: string }) {
  const { data, loading, error } = useGetTeamsQuery();
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  const teams = data?.teams || [];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Athletes</h2>
      <UsableList<Team, SortTitle, FilterTitle>
        data={teams}
        filterOptions={FilterOptions}
        defaultSort={[{ title: TEAM, ascending: true }]}
        sortOptions={SortOptions}
        getFilterValue={getFilterValue}
        getSortValue={getSortValue}
        getSearchKeywords={getKeywordString}
      >
        {({ data: filteredTeams }) => (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredTeams.length} of {teams.length} teams
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.map((t) => (
                <TeamCard key={t.id} team={t} />
              ))}
            </div>
          </>
        )}
      </UsableList>
    </div>
  );
}
