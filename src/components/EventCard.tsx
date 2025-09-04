import { DBEvent } from "@/types";

interface EventCardProps {
  event: DBEvent;
}

export default function EventCard({ event }: EventCardProps) {
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

  // const formatPropBet = (bet: DBPropBet) => {
  //   return (
  //     <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mt-3">
  //       <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
  //         {bet.type_name} ({bet.type_id})
  //       </div>
  //       <div className="grid grid-cols-2 gap-2 text-xs">
  //         {bet.over_american && (
  //           <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
  //             <div className="font-medium">Over ({bet.over_american})</div>
  //             <div className="text-green-700 dark:text-green-300">
  //               {bet.over_value}
  //             </div>
  //           </div>
  //         )}
  //         {bet.under_american && (
  //           <div className="bg-red-100 dark:bg-red-900 p-2 rounded">
  //             <div className="font-medium">Under ({bet.under_american})</div>
  //             <div className="text-red-700 dark:text-red-300">
  //               {bet.under_value}
  //             </div>
  //           </div>
  //         )}
  //         {bet.target_value !== null && bet.target_value !== undefined && (
  //           <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded col-span-2">
  //             <div className="font-medium">Target Value</div>
  //             <div className="text-yellow-700 dark:text-yellow-300">
  //               {bet.target_value}
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       {bet.odds_last_updated && (
  //         <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
  //           Updated: {new Date(bet.odds_last_updated).toLocaleString()}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {event.name || event.short_name || "Unnamed Event"}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {event.sport}  {event.league}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {formatDate(event.date)}
          </div>
        </div>
      </div>
      {/* {propBets && propBets.length > 0 ? (
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Prop Bets ({propBets.length})
          </h4>
          {propBets.map((bet, index) => (
            <div key={index}>{formatPropBet(bet)}</div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-500 dark:text-gray-500 italic">
          No prop bets available
        </div>
      )} */}
    </div>
  );
}
