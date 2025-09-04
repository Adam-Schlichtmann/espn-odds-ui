import { DBEvent, DBOdds } from "../types";

interface EventCardProps {
  event: DBEvent;
  odds?: DBOdds[];
}

export default function EventCard({ event, odds }: EventCardProps) {
  const formatDate = (d: Date | string) => {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatOdds = (oddsRecord: DBOdds) => {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mt-3">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Provider ID: {oddsRecord.provider_id}
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {oddsRecord.spread_home !== null && (
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
              <div className="font-medium">Spread (Home)</div>
              <div className="text-blue-700 dark:text-blue-300">
                {oddsRecord.spread_home}
              </div>
            </div>
          )}
          {oddsRecord.spread_away !== null && (
            <div className="bg-red-100 dark:bg-red-900 p-2 rounded">
              <div className="font-medium">Spread (Away)</div>
              <div className="text-red-700 dark:text-red-300">
                {oddsRecord.spread_away}
              </div>
            </div>
          )}
          {oddsRecord.moneyline_home !== null && (
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
              <div className="font-medium">ML (Home)</div>
              <div className="text-green-700 dark:text-green-300">
                {oddsRecord.moneyline_home}
              </div>
            </div>
          )}
          {oddsRecord.moneyline_away !== null && (
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded">
              <div className="font-medium">ML (Away)</div>
              <div className="text-purple-700 dark:text-purple-300">
                {oddsRecord.moneyline_away}
              </div>
            </div>
          )}
          {oddsRecord.total_points !== null && (
            <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded col-span-2">
              <div className="font-medium">Total Points</div>
              <div className="text-yellow-700 dark:text-yellow-300">
                {oddsRecord.total_points}
              </div>
            </div>
          )}
        </div>
        {oddsRecord.odds_updated_at && (
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Updated: {new Date(oddsRecord.odds_updated_at).toLocaleString()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {event.name || event.short_name || "Unnamed Event"}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {event.sport} • {event.league}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {formatDate(event.date)}
          </div>{" "}
        </div>
      </div>
      {odds && odds.length > 0 ? (
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Odds ({odds.length} provider{odds.length > 1 ? "s" : ""})
          </h4>
          {odds.map((oddsRecord, index) => (
            <div key={index}>{formatOdds(oddsRecord)}</div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-500 dark:text-gray-500 italic">
          No odds available
        </div>
      )}
    </div>
  );
}
