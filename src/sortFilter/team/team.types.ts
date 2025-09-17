import { SPORT, LEAGUE, TEAM } from "../constants";

export type FilterTitle = typeof LEAGUE | typeof SPORT;
export type SortTitle = typeof LEAGUE | typeof SPORT | typeof TEAM;

export const FilterOptions: FilterTitle[] = [LEAGUE, SPORT];
export const SortOptions: SortTitle[] = [LEAGUE, SPORT, TEAM];
