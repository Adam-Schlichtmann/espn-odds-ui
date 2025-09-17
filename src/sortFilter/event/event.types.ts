import { EVENT_NAME, LEAGUE, SPORT, START_DATE } from "../constants";

export type FilterTitle = typeof SPORT | typeof LEAGUE;
export type SortTitle =
  | typeof START_DATE
  | typeof EVENT_NAME
  | typeof SPORT
  | typeof LEAGUE;

export const FilterOptions: FilterTitle[] = [SPORT, LEAGUE];
export const SortOptions: SortTitle[] = [START_DATE, EVENT_NAME, SPORT, LEAGUE];
