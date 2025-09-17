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

  const events = data?.events || [];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <UsableList<Event, SortTitle, FilterTitle>
        data={events}
        defaultSort={[{ title: START_DATE, ascending: true }]}
        filterOptions={FilterOptions}
        sortOptions={SortOptions}
        getFilterValue={getFilterValue}
        getSortValue={getSortValue}
        getSearchKeywords={getKeywordStrings}
      >
        {({ data }) => (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {data.length} of {events.length} events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((a) => (
                <EventCard key={a.id} event={a} />
              ))}
            </div>
          </>
        )}
      </UsableList>
    </div>
  );
}
