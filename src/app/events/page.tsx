"use client";
import EventCard from "../../components/EventCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { Event, useGetEventsQuery } from "@/generated/graphql";
import UsableList from "../../components/UsableList/UsableList";
import {
  FilterOptions,
  FilterTitle,
  getFilterValue,
  getKeywordStrings,
  getSortValue,
  SortOptions,
  SortTitle,
} from "@/sortFilter/event";
import { START_DATE, EVENT_NAME } from "@/sortFilter/constants";

export default function EventsTab() {
  const { data, loading, error } = useGetEventsQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          ESPN Odds Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          View sports events and betting odds in real-time
        </p>
      </div>
      {/* <StatsSummary events={data?.events ?? []} propBets={[]} /> */}
      {/* EventFilters removed, replaced by UsableList controls */}
      <UsableList<Event, SortTitle, FilterTitle>
        data={data?.events ?? []}
        defaultSort={[
          { title: START_DATE, ascending: true },
          { title: EVENT_NAME, ascending: true },
        ]}
        filterOptions={FilterOptions}
        sortOptions={SortOptions}
        getFilterValue={getFilterValue}
        getSortValue={getSortValue}
        getSearchKeywords={getKeywordStrings}
      >
        {({ data: filteredEvents, clearSearch }) =>
          filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No events match your current filters.
              </div>
              <button
                onClick={clearSearch}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )
        }
      </UsableList>
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>
          Data sourced from ESPN • Last updated: {new Date().toLocaleString()}
        </p>
      </footer>
    </div>
  );
}
