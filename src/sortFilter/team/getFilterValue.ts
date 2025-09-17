import { Team } from "@/generated/graphql";
import { FilterTitle } from "./team.types";
import { LEAGUE, SPORT } from "../constants";

export default (f: FilterTitle) =>
  (team: Team): string => {
    if (f === LEAGUE) return team.league;
    if (f === SPORT) return team.sport;
    return "";
  };
