"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getEvent, getPropBetsForEvent } from "../../../services/api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorMessage from "../../../components/ErrorMessage";
import { useGetEventsWithBetsQuery } from "@/generated/graphql";

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetEventsWithBetsQuery({
    variables: { eventsId: id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.events) return <div className="text-center">Event not found.</div>;

  const event = data.events[0];
  const propBets = event.propBets;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        League: {event.league}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Sport: {event.sport}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Date: {new Date(event.date).toLocaleString()}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Venue: {event.venue}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Season: {event.season}
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
        Week: {event.week}
      </div>
      <div className="mb-6 text-gray-600 dark:text-gray-400">
        Season Type: {event.season_type}
      </div>
      <h3 className="text-xl font-semibold mb-2">Prop Bets</h3>
      {propBets.length > 0 ? (
        <div className="space-y-4">
          {propBets.map((bet) => (
            <div
              key={bet.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
            >
              <div className="font-medium text-gray-900 dark:text-white mb-1">
                {bet.type_name}
              </div>
              {/* <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Athlete: {bet.athlete?.display_name || bet.athlete?.id || "N/A"}
              </div> */}
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Over: {bet.over_american} ({bet.over_value})
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Under: {bet.under_american} ({bet.under_value})
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Target: {bet.target_value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Last Updated: {new Date(bet.odds_last_updated).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 dark:text-gray-400 italic">
          No prop bets for this event.
        </div>
      )}
    </div>
  );
}
