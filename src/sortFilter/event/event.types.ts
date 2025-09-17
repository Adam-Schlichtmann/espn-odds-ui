import { SPORT, LEAGUE, START_DATE, EVENT_NAME } from "../constants";

export type FilterTitle = typeof SPORT | typeof LEAGUE;
export type SortTitle =
  | typeof START_DATE
  | typeof EVENT_NAME
  | typeof SPORT
  | typeof LEAGUE;

export const FilterOptions: FilterTitle[] = [SPORT, LEAGUE];
