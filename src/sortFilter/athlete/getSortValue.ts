import { Athlete } from "@/generated/graphql";
import { SortTitle } from "./athlete.types";
import { ATHLETE_NAME, LEAGUE, POSITION, SPORT, TEAM } from "../constants";

export default (f: SortTitle) =>
  (athlete: Athlete): string | number => {
    if (f === LEAGUE) return athlete.league;
    if (f === POSITION) return athlete.position_name;
    if (f === SPORT) return athlete.sport;
    if (f === TEAM) return athlete.team?.display_name || "";
    if (f === ATHLETE_NAME) return athlete.display_name;
    return "";
  };
