import { ATHLETE_NAME, SPORT, LEAGUE, POSITION, TEAM } from "../constants";

export type FilterTitle =
  | typeof LEAGUE
  | typeof POSITION
  | typeof SPORT
  | typeof TEAM;
export type SortTitle =
  | typeof ATHLETE_NAME
  | typeof LEAGUE
  | typeof POSITION
  | typeof SPORT
  | typeof TEAM;

export const FilterOptions: FilterTitle[] = [LEAGUE, POSITION, SPORT, TEAM];
export const SortOptions: SortTitle[] = [
  ATHLETE_NAME,
  LEAGUE,
  POSITION,
  SPORT,
  TEAM,
];
