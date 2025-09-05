"use client";
import { useState } from "react";
import { scrape } from "../../services/api";
import EventCard from "../../components/EventCard";
import EventFilters from "../../components/EventFilters";
import StatsSummary from "../../components/StatsSummary";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { useGetEventsQuery } from "@/generated/graphql";

export default function EventsTab(props: { tabKey: string }) {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [sortBy, setSortBy] = useState("startDate");

  const { data, loading, error } = useGetEventsQuery();

  const sports = [...new Set(data?.events.map((event) => event.sport))].sort();
  const leagues = [
    ...new Set(data?.events.map((event) => event.league)),
  ].sort();

  const filteredAndSortedEvents =
    data?.events
      .filter((event) => {
        if (selectedSport && event.sport !== selectedSport) return false;
        if (selectedLeague && event.league !== selectedLeague) return false;
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "startDate":
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          case "eventName":
            return (a.name || a.short_name || "").localeCompare(
              b.name || b.short_name || ""
            );
          case "sport":
            return a.sport.localeCompare(b.sport);
          case "league":
            return a.league.localeCompare(b.league);
          default:
            return 0;
        }
      }) ?? [];

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
      <button onClick={scrape}>PRESS ME</button>
      <StatsSummary events={data?.events ?? []} propBets={[]} />
      <EventFilters
        sports={sports}
        leagues={leagues}
        selectedSport={selectedSport}
        selectedLeague={selectedLeague}
        sortBy={sortBy}
        onSportChange={setSelectedSport}
        onLeagueChange={setSelectedLeague}
        onSortChange={setSortBy}
      />
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredAndSortedEvents.length} of {data?.events.length}{" "}
          events
        </p>
      </div>
      {filteredAndSortedEvents.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAndSortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No events match your current filters.
          </div>
          <button
            onClick={() => {
              setSelectedSport("");
              setSelectedLeague("");
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>
          Data sourced from ESPN • Last updated: {new Date().toLocaleString()}
        </p>
      </footer>
    </div>
  );
}
