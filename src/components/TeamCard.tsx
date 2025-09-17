import { Team } from "@/generated/graphql";
import Link from "next/link";

type Props = {
  team: Team;
};

const TeamCard = ({ team }: Props) => {
  return (
    <Link href={`/teams/${team.id}`} key={team.id} passHref legacyBehavior>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">{team.display_name}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {team.location} {team.nickname}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          Abbreviation: {team.abbreviation}
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
