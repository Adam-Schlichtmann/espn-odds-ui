import { Event } from "@/generated/graphql";

export default (event: Event) =>
  `${event.name} ${event.short_name} ${event.sport} ${event.league}`;
