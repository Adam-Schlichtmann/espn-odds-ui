import { Event } from "@/generated/graphql";
import { EVENT_NAME, LEAGUE, SPORT, START_DATE } from "../constants";
import { SortTitle } from "./event.types";

export default (key: SortTitle) => (event: Event) => {
  if (key === START_DATE) return new Date(event.date).getTime();
  if (key === EVENT_NAME) return event.name || event.short_name || "";
  if (key === SPORT) return event.sport;
  if (key === LEAGUE) return event.league;
  return "";
};
