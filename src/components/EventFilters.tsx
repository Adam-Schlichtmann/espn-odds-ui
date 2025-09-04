interface EventFiltersProps {
  sports: string[];
  leagues: string[];
  selectedSport: string;
  selectedLeague: string;
  sortBy: string;
  onSportChange: (sport: string) => void;
  onLeagueChange: (league: string) => void;
  onSortChange: (sort: string) => void;
}

export default function EventFilters({
  sports,
  leagues,
  selectedSport,
  selectedLeague,
  sortBy,
  onSportChange,
  onLeagueChange,
  onSortChange,
}: EventFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex flex-col">
          <label
            htmlFor="sport-filter"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Sport
          </label>
          <select
            id="sport-filter"
            value={selectedSport}
            onChange={(e) => onSportChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Sports</option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="league-filter"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            League
          </label>
          <select
            id="league-filter"
            value={selectedLeague}
            onChange={(e) => onLeagueChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Leagues</option>
            {leagues.map((league) => (
              <option key={league} value={league}>
                {league}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="sort-filter"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Sort By
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="startDate">Start Date</option>
            <option value="eventName">Event Name</option>
            <option value="sport">Sport</option>
            <option value="league">League</option>
          </select>
        </div>
      </div>
    </div>
  );
}
