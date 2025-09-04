import { DBEvent, DBPropBet, DBAthlete, DBTeam } from "../types";

/* ============
   Base API Client
   ============ */

const GRAPHQL_URL = "http://localhost:4000/graphql";

async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.status} ${res.statusText}`);
  }
  const { data, errors } = await res.json();
  if (errors) throw new Error(errors.map((e: any) => e.message).join(", "));
  return data;
}

export async function getTeams(variables?: {
  id?: string;
  league?: string;
  sport?: string;
  is_active?: boolean;
}): Promise<DBTeam[]> {
  const query = `query Teams($id: ID, $league: String, $sport: String, $is_active: Boolean) {
    teams(id: $id, league: $league, sport: $sport, is_active: $is_active) {
      id abbreviation display_name league sport is_active is_all_star location nickname slug short_display_name alternate_color color uid created_at updated_at
    }
  }`;
  const data = await graphqlRequest<{ teams: DBTeam[] }>(query, variables);
  return data.teams;
}

export async function getTeam(id: string): Promise<DBTeam | null> {
  const teams = await getTeams({ id });
  return teams.length ? teams[0] : null;
}

export async function getEvents(variables?: {
  id?: string;
  week?: number;
  league?: string;
  season?: number;
  sport?: string;
  season_type?: number;
}): Promise<DBEvent[]> {
  const query = `query Events($id: ID, $week: Int, $league: String, $season: Int, $sport: String, $season_type: Int) {
    events(id: $id, week: $week, league: $league, season: $season, sport: $sport, season_type: $season_type) {
      id date league name sport short_name venue venue_address season season_type week created_at updated_at
    }
  }`;
  const data = await graphqlRequest<{ events: DBEvent[] }>(query, variables);
  return data.events;
}

export async function getEvent(id: string): Promise<DBEvent | null> {
  const events = await getEvents({ id });
  return events.length ? events[0] : null;
}

export async function getAthletes(variables?: {
  id?: string;
  team_id?: string;
  league?: string;
  sport?: string;
  position_name?: string;
}): Promise<DBAthlete[]> {
  const query = `query Athletes($id: ID, $team_id: String, $league: String, $sport: String, $position_name: String) {
    athletes(id: $id, team_id: $team_id, league: $league, sport: $sport, position_name: $position_name) {
      id display_name league sport created_at updated_at
    }
  }`;
  const data = await graphqlRequest<{ athletes: DBAthlete[] }>(
    query,
    variables
  );
  return data.athletes;
}

export async function getAthlete(id: string): Promise<DBAthlete | null> {
  const athletes = await getAthletes({ id });
  return athletes.length ? athletes[0] : null;
}

export async function getPropBets(variables?: {
  id?: string;
  event_id?: string;
  athlete_id?: string;
  team_id?: string;
  league?: string;
  type_id?: string;
}): Promise<DBPropBet[]> {
  const query = `query PropBets($id: ID, $event_id: String, $athlete_id: String, $team_id: String, $league: String, $type_id: String) {
    propBets(id: $id, event_id: $event_id, athlete_id: $athlete_id, team_id: $team_id, league: $league, type_id: $type_id) {
      id league sport type_name type_id target_value odds_last_updated over_american over_value under_american under_value athlete { id } team { id } event { id }
    }
  }`;
  const data = await graphqlRequest<{ propBets: DBPropBet[] }>(
    query,
    variables
  );
  return data.propBets;
}

export async function getPropBetsForEvent(
  eventId: string
): Promise<DBPropBet[]> {
  return getPropBets({ event_id: eventId });
}

export async function getPropBetsForTeam(teamId: string): Promise<DBPropBet[]> {
  return getPropBets({ team_id: teamId });
}

export async function getPropBetsForAthlete(
  athleteId: string
): Promise<DBPropBet[]> {
  return getPropBets({ athlete_id: athleteId });
}

// scrape is not a GraphQL operation, so you may need to update/remove this depending on backend support
export async function scrape(): Promise<void> {
  // If scrape is still supported, you may need to expose it as a GraphQL mutation
  return;
}
