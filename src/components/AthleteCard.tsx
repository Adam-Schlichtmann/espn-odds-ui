"use client";
import { GetAthletesQuery } from "@/generated/graphql";
import Link from "next/link";

export default function AthleteCard({
  athlete,
}: {
  athlete: GetAthletesQuery["athletes"][number];
}) {
  return (
    <Link href={`/athletes/${athlete.id}`}>
      <div className="block bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg font-semibold mb-2">{athlete.display_name}</h3>
        {athlete.team?.display_name && (
          <div className="text-xs text-gray-500 dark:text-gray-500">
            Team: {athlete.team?.display_name}
          </div>
        )}
        <div className="text-xs text-gray-500 dark:text-gray-500">
          Position: {athlete.position_name}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          Age: {athlete.age}
        </div>
      </div>
    </Link>
  );
}
