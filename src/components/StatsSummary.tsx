import { DBOdds, DBEvent } from "../types";

interface StatsSummaryProps {
  events: DBEvent[];
  odds: DBOdds[];
}

export default function StatsSummary({ events, odds }: StatsSummaryProps) {
  const totalEvents = events.length;
  const totalOdds = odds.length;

  const sportsCount = events.reduce((acc, event) => {
    acc[event.sport] = (acc[event.sport] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const leaguesCount = events.reduce((acc, event) => {
    acc[event.league] = (acc[event.league] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > new Date()
  ).length;

  const eventsWithOdds = events.filter((event) =>
    odds.some((oddsRecord) => oddsRecord.event_id === event.id)
  ).length;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Summary Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {totalEvents}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Events
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {totalOdds}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Odds
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {upcomingEvents}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Upcoming Events
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {eventsWithOdds}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Events with Odds
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Sports Breakdown
          </h3>
          <div className="space-y-2">
            {Object.entries(sportsCount).map(([sport, count]) => (
              <div key={sport} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {sport}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Leagues Breakdown
          </h3>
          <div className="space-y-2">
            {Object.entries(leaguesCount).map(([league, count]) => (
              <div key={league} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {league}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
