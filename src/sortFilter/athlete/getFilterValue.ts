import { Athlete } from "@/generated/graphql";
import { FilterTitle } from "./athlete.types";
import { LEAGUE, POSITION, SPORT, TEAM } from "../constants";

export default (f: FilterTitle) =>
  (athlete: Athlete): string => {
    if (f === LEAGUE) return athlete.league;
    if (f === POSITION) return athlete.position_name;
    if (f === SPORT) return athlete.sport;
    if (f === TEAM) return athlete.team?.display_name || "";
    return "";
  };
