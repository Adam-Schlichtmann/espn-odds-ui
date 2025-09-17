"use client";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

import AthleteCard from "../../components/AthleteCard";
import UsableList from "../../components/UsableList/UsableList";
import { Athlete, useGetAthletesQuery } from "@/generated/graphql";
import {
  FilterTitle,
  getFilterValue,
  getSortValue,
  SortOptions,
  SortTitle,
  FilterOptions,
} from "@/sortFilter/athlete";
import { ATHLETE_NAME } from "@/sortFilter/constants";

export default function AthletesTab(props: { tabKey: string }) {
  const { data, loading, error } = useGetAthletesQuery();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  const athletes = data?.athletes ?? [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Athletes</h2>
      <UsableList<Athlete, SortTitle, FilterTitle>
        data={athletes}
        filterOptions={FilterOptions}
        defaultSort={[{ title: ATHLETE_NAME, ascending: true }]}
        sortOptions={SortOptions}
        getFilterValue={getFilterValue}
        getSortValue={getSortValue}
        getSearchKeywords={(athlete) =>
          `${athlete.display_name} ${athlete.position_name} ${athlete.league} ${athlete.sport} ${athlete.team?.display_name}`
        }
      >
        {({ data: filteredAthletes }) => (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredAthletes.length} of {athletes.length} athletes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAthletes.map((a) => (
                <AthleteCard key={a.id} athlete={a} />
              ))}
            </div>
          </>
        )}
      </UsableList>
    </div>
  );
}
