"use client";
import Link from "next/link";
import { DBAthlete } from "../types";

export default function AthleteCard({ athlete }: { athlete: DBAthlete }) {
  return (
    <Link href={`/athletes/${athlete.id}`} passHref legacyBehavior>
      <a className="block bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg font-semibold mb-2">{athlete.display_name}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {athlete.team_id}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          Position: {athlete.position_name}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          Age: {athlete.age}
        </div>
      </a>
    </Link>
  );
}
