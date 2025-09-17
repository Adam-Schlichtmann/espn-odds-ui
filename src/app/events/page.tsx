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
import { START_DATE } from "@/sortFilter/constants";

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
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <UsableList<Event, SortTitle, FilterTitle>
        data={data?.events ?? []}
        defaultSort={[{ title: START_DATE, ascending: true }]}
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
    </div>
  );
}
