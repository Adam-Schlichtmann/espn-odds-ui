import { Athlete } from "@/generated/graphql";

export default (athlete: Athlete) =>
  `${athlete.first_name} ${athlete.last_name} ${athlete.short_name} ${
    athlete.sport
  } ${athlete.league} ${athlete.position_name} ${
    athlete.team?.display_name || ""
  } ${athlete.position_abbreviation}`;
