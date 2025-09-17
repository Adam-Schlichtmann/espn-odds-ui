import { Team } from "@/generated/graphql";

export default (team: Team) =>
  `${team.display_name} ${team.sport} ${team.league}`;
