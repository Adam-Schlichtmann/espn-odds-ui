export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
};

export type Athlete = {
  __typename: 'Athlete';
  age: Scalars['Int']['output'];
  birth_date: Scalars['Date']['output'];
  created_at: Scalars['Date']['output'];
  debut_year: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  height_display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  jersey: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  league: Scalars['String']['output'];
  position_abbreviation: Scalars['String']['output'];
  position_id: Scalars['String']['output'];
  position_name: Scalars['String']['output'];
  propBets: Array<PropBet>;
  short_name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sport: Scalars['String']['output'];
  status_id: Scalars['String']['output'];
  status_name: Scalars['String']['output'];
  team: Maybe<Team>;
  team_id: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  weight: Scalars['Int']['output'];
  weight_display: Scalars['String']['output'];
};


export type AthletePropBetsArgs = {
  event_id?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  type_id?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  __typename: 'Event';
  awayTeam: Maybe<Team>;
  created_at: Scalars['Date']['output'];
  date: Scalars['Date']['output'];
  homeTeam: Maybe<Team>;
  id: Scalars['ID']['output'];
  league: Scalars['String']['output'];
  name: Scalars['String']['output'];
  propBets: Array<PropBet>;
  season: Maybe<Scalars['Int']['output']>;
  season_type: Maybe<Scalars['Int']['output']>;
  short_name: Maybe<Scalars['String']['output']>;
  sport: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  venue: Maybe<Scalars['String']['output']>;
  venue_address: Maybe<Scalars['String']['output']>;
  week: Maybe<Scalars['Int']['output']>;
};


export type EventPropBetsArgs = {
  athlete_id?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season_type?: InputMaybe<Scalars['Int']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  type_id?: InputMaybe<Scalars['String']['input']>;
};

export type PropBet = {
  __typename: 'PropBet';
  athlete: Maybe<Athlete>;
  event: Event;
  id: Scalars['ID']['output'];
  league: Scalars['String']['output'];
  odds_last_updated: Scalars['Date']['output'];
  over_american: Maybe<Scalars['String']['output']>;
  over_value: Maybe<Scalars['Float']['output']>;
  sport: Scalars['String']['output'];
  target_value: Maybe<Scalars['Float']['output']>;
  team: Maybe<Team>;
  type_id: Scalars['String']['output'];
  type_name: Scalars['String']['output'];
  under_american: Maybe<Scalars['String']['output']>;
  under_value: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename: 'Query';
  athletes: Array<Athlete>;
  events: Array<Event>;
  propBets: Array<PropBet>;
  teams: Array<Team>;
};


export type QueryAthletesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  position_name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  season_type?: InputMaybe<Scalars['Int']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPropBetsArgs = {
  athlete_id?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  type_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename: 'Team';
  abbreviation: Scalars['String']['output'];
  alternate_color: Maybe<Scalars['String']['output']>;
  athletes: Array<Athlete>;
  awayEvents: Array<Event>;
  color: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Date']['output'];
  display_name: Scalars['String']['output'];
  homeEvents: Array<Event>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  is_all_star: Scalars['Boolean']['output'];
  league: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  nickname: Maybe<Scalars['String']['output']>;
  short_display_name: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sport: Scalars['String']['output'];
  uid: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Date']['output'];
};


export type TeamAthletesArgs = {
  position_name?: InputMaybe<Scalars['String']['input']>;
  status_name?: InputMaybe<Scalars['String']['input']>;
};


export type TeamAwayEventsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  season_type?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamHomeEventsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
  season_type?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
};

export type GetAthletesQueryVariables = Exact<{
  athletesId?: InputMaybe<Scalars['ID']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  positionName?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAthletesQuery = { athletes: Array<{ __typename: 'Athlete', id: string, age: number, birth_date: unknown, debut_year: number, display_name: string, first_name: string, height_display: string, height: number, jersey: string, last_name: string, league: string, position_abbreviation: string, position_id: string, position_name: string, short_name: string, slug: string, sport: string, status_id: string, status_name: string, team_id: string, weight_display: string, weight: number, created_at: unknown, updated_at: unknown }> };

export type GetAthletesWithBetsQueryVariables = Exact<{
  athletesId?: InputMaybe<Scalars['ID']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  positionName?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAthletesWithBetsQuery = { athletes: Array<{ __typename: 'Athlete', id: string, age: number, birth_date: unknown, debut_year: number, display_name: string, first_name: string, height_display: string, height: number, jersey: string, last_name: string, league: string, position_abbreviation: string, position_id: string, position_name: string, short_name: string, slug: string, sport: string, status_id: string, status_name: string, team_id: string, weight_display: string, weight: number, created_at: unknown, updated_at: unknown, propBets: Array<{ __typename: 'PropBet', id: string, league: string, sport: string, type_name: string, type_id: string, target_value: number | null, odds_last_updated: unknown, over_american: string | null, over_value: number | null, under_american: string | null, under_value: number | null }> }> };

export type GetEventsQueryVariables = Exact<{
  seasonType?: InputMaybe<Scalars['Int']['input']>;
  eventsId?: InputMaybe<Scalars['ID']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventsQuery = { events: Array<{ __typename: 'Event', id: string, date: unknown, league: string, name: string, sport: string, short_name: string | null, venue: string | null, venue_address: string | null, season: number | null, season_type: number | null, week: number | null, created_at: unknown, updated_at: unknown }> };

export type GetEventsWithBetsQueryVariables = Exact<{
  seasonType?: InputMaybe<Scalars['Int']['input']>;
  eventsId?: InputMaybe<Scalars['ID']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  athleteId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventsWithBetsQuery = { events: Array<{ __typename: 'Event', id: string, date: unknown, league: string, name: string, sport: string, short_name: string | null, venue: string | null, venue_address: string | null, season: number | null, season_type: number | null, week: number | null, created_at: unknown, updated_at: unknown, propBets: Array<{ __typename: 'PropBet', id: string, league: string, sport: string, type_name: string, type_id: string, target_value: number | null, odds_last_updated: unknown, over_american: string | null, over_value: number | null, under_american: string | null, under_value: number | null }> }> };
