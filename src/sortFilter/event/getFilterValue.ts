import { Event } from "@/generated/graphql";
import { FilterTitle } from "./event.types";
import { LEAGUE, SPORT } from "../constants";

export default (key: FilterTitle) => (event: Event) => {
  if (key === SPORT) return event.sport;
  if (key === LEAGUE) return event.league;
  return "";
};
