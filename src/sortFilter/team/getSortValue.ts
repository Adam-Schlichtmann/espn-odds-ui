import { Team } from "@/generated/graphql";
import { SortTitle } from "./team.types";
import { LEAGUE, SPORT, TEAM } from "../constants";

export default (f: SortTitle) =>
  (team: Team): string | number => {
    if (f === LEAGUE) return team.league;
    if (f === SPORT) return team.sport;
    if (f === TEAM) return team.display_name;
    return "";
  };
