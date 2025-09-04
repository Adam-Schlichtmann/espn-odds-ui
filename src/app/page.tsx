"use client";

import { useState, useEffect } from "react";
import { DBEvent, DBPropBet } from "../types";
import { getEvents, scrape } from "../services/api";
import EventCard from "../components/EventCard";
import EventFilters from "../components/EventFilters";
import StatsSummary from "../components/StatsSummary";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [events, setEvents] = useState<DBEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [sortBy, setSortBy] = useState("startDate");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const eventsData = await getEvents();
      setEvents(eventsData);
    } catch {
      setError(
        "Failed to fetch data. Please check if the API server is running on localhost:3000."
      );
    } finally {
      setLoading(false);
    }
  };

  // Get unique sports and leagues for filters
  const sports = [...new Set(events.map((event) => event.sport))].sort();
  const leagues = [...new Set(events.map((event) => event.league))].sort();

  // Filter and sort events
  const filteredAndSortedEvents = events
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
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage message={error} onRetry={fetchData} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ESPN Odds Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            View sports events and betting odds in real-time
          </p>
        </div>
        <button onClick={scrape}>PRESS ME</button>
        {/* Stats Summary */}
        <StatsSummary events={events} propBets={[]} />

        {/* Filters */}
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredAndSortedEvents.length} of {events.length} events
          </p>
        </div>

        {/* Events Grid */}
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

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
          <p>
            Data sourced from ESPN • Last updated: {new Date().toLocaleString()}
          </p>
        </footer>
      </div>
    </div>
  );
}
