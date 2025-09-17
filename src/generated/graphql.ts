import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Athlete = {
  __typename?: 'Athlete';
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
  propBets?: Maybe<Array<PropBet>>;
  short_name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sport: Scalars['String']['output'];
  status_id: Scalars['String']['output'];
  status_name: Scalars['String']['output'];
  team?: Maybe<Team>;
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
  __typename?: 'Event';
  awayTeam?: Maybe<Team>;
  created_at: Scalars['Date']['output'];
  date: Scalars['Date']['output'];
  homeTeam?: Maybe<Team>;
  id: Scalars['ID']['output'];
  league: Scalars['String']['output'];
  name: Scalars['String']['output'];
  propBets?: Maybe<Array<PropBet>>;
  season?: Maybe<Scalars['Int']['output']>;
  season_type?: Maybe<Scalars['Int']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  sport: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  venue?: Maybe<Scalars['String']['output']>;
  venue_address?: Maybe<Scalars['String']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
};


export type EventPropBetsArgs = {
  athlete_id?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season_type?: InputMaybe<Scalars['Int']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  type_id?: InputMaybe<Scalars['String']['input']>;
};

export type PropBet = {
  __typename?: 'PropBet';
  athlete?: Maybe<Athlete>;
  event: Event;
  id: Scalars['ID']['output'];
  league: Scalars['String']['output'];
  odds_last_updated: Scalars['Date']['output'];
  over_american?: Maybe<Scalars['String']['output']>;
  over_value?: Maybe<Scalars['Float']['output']>;
  sport: Scalars['String']['output'];
  target_value?: Maybe<Scalars['Float']['output']>;
  team?: Maybe<Team>;
  type_id: Scalars['String']['output'];
  type_name: Scalars['String']['output'];
  under_american?: Maybe<Scalars['String']['output']>;
  under_value?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
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
  __typename?: 'Team';
  abbreviation: Scalars['String']['output'];
  alternate_color?: Maybe<Scalars['String']['output']>;
  athletes?: Maybe<Array<Athlete>>;
  awayEvents?: Maybe<Array<Event>>;
  color?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Date']['output'];
  display_name: Scalars['String']['output'];
  homeEvents?: Maybe<Array<Event>>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  is_all_star: Scalars['Boolean']['output'];
  league: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  short_display_name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sport: Scalars['String']['output'];
  uid?: Maybe<Scalars['String']['output']>;
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


export type GetAthletesQuery = { __typename?: 'Query', athletes: Array<{ __typename?: 'Athlete', id: string, age: number, birth_date: any, debut_year: number, display_name: string, first_name: string, height_display: string, height: number, jersey: string, last_name: string, league: string, position_abbreviation: string, position_id: string, position_name: string, short_name: string, slug: string, sport: string, status_id: string, status_name: string, team_id: string, weight_display: string, weight: number, created_at: any, updated_at: any, team?: { __typename?: 'Team', id: string, display_name: string } | null }> };

export type GetAthletesWithBetsQueryVariables = Exact<{
  athletesId?: InputMaybe<Scalars['ID']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  positionName?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAthletesWithBetsQuery = { __typename?: 'Query', athletes: Array<{ __typename?: 'Athlete', id: string, age: number, birth_date: any, debut_year: number, display_name: string, first_name: string, height_display: string, height: number, jersey: string, last_name: string, league: string, position_abbreviation: string, position_id: string, position_name: string, short_name: string, slug: string, sport: string, status_id: string, status_name: string, team_id: string, weight_display: string, weight: number, created_at: any, updated_at: any, propBets?: Array<{ __typename?: 'PropBet', id: string, league: string, sport: string, type_name: string, type_id: string, target_value?: number | null, odds_last_updated: any, over_american?: string | null, over_value?: number | null, under_american?: string | null, under_value?: number | null }> | null }> };

export type GetEventsQueryVariables = Exact<{
  seasonType?: InputMaybe<Scalars['Int']['input']>;
  eventsId?: InputMaybe<Scalars['ID']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, date: any, league: string, name: string, sport: string, short_name?: string | null, venue?: string | null, venue_address?: string | null, season?: number | null, season_type?: number | null, week?: number | null, created_at: any, updated_at: any }> };

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


export type GetEventsWithBetsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, date: any, league: string, name: string, sport: string, short_name?: string | null, venue?: string | null, venue_address?: string | null, season?: number | null, season_type?: number | null, week?: number | null, created_at: any, updated_at: any, propBets?: Array<{ __typename?: 'PropBet', id: string, league: string, sport: string, type_name: string, type_id: string, target_value?: number | null, odds_last_updated: any, over_american?: string | null, over_value?: number | null, under_american?: string | null, under_value?: number | null, athlete?: { __typename?: 'Athlete', display_name: string } | null, team?: { __typename?: 'Team', nickname?: string | null } | null }> | null }> };

export type GetTeamsQueryVariables = Exact<{
  teamsId?: InputMaybe<Scalars['ID']['input']>;
  league?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: string, abbreviation: string, display_name: string, league: string, sport: string, is_active: boolean, is_all_star: boolean, location?: string | null, nickname?: string | null, slug?: string | null, short_display_name?: string | null, alternate_color?: string | null, color?: string | null, uid?: string | null, created_at: any, updated_at: any }> };


export const GetAthletesDocument = gql`
    query GetAthletes($athletesId: ID, $teamId: String, $league: String, $sport: String, $positionName: String) {
  athletes(
    id: $athletesId
    team_id: $teamId
    league: $league
    sport: $sport
    position_name: $positionName
  ) {
    id
    age
    birth_date
    debut_year
    display_name
    first_name
    height_display
    height
    jersey
    last_name
    league
    position_abbreviation
    position_id
    position_name
    short_name
    slug
    sport
    status_id
    status_name
    team_id
    weight_display
    weight
    created_at
    updated_at
    team {
      id
      display_name
    }
  }
}
    `;

/**
 * __useGetAthletesQuery__
 *
 * To run a query within a React component, call `useGetAthletesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAthletesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAthletesQuery({
 *   variables: {
 *      athletesId: // value for 'athletesId'
 *      teamId: // value for 'teamId'
 *      league: // value for 'league'
 *      sport: // value for 'sport'
 *      positionName: // value for 'positionName'
 *   },
 * });
 */
export function useGetAthletesQuery(baseOptions?: Apollo.QueryHookOptions<GetAthletesQuery, GetAthletesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAthletesQuery, GetAthletesQueryVariables>(GetAthletesDocument, options);
      }
export function useGetAthletesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAthletesQuery, GetAthletesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAthletesQuery, GetAthletesQueryVariables>(GetAthletesDocument, options);
        }
export function useGetAthletesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAthletesQuery, GetAthletesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAthletesQuery, GetAthletesQueryVariables>(GetAthletesDocument, options);
        }
export type GetAthletesQueryHookResult = ReturnType<typeof useGetAthletesQuery>;
export type GetAthletesLazyQueryHookResult = ReturnType<typeof useGetAthletesLazyQuery>;
export type GetAthletesSuspenseQueryHookResult = ReturnType<typeof useGetAthletesSuspenseQuery>;
export type GetAthletesQueryResult = Apollo.QueryResult<GetAthletesQuery, GetAthletesQueryVariables>;
export const GetAthletesWithBetsDocument = gql`
    query GetAthletesWithBets($athletesId: ID, $teamId: String, $league: String, $sport: String, $positionName: String, $eventId: String, $typeId: String) {
  athletes(
    id: $athletesId
    team_id: $teamId
    league: $league
    sport: $sport
    position_name: $positionName
  ) {
    id
    age
    birth_date
    debut_year
    display_name
    first_name
    height_display
    height
    jersey
    last_name
    league
    position_abbreviation
    position_id
    position_name
    short_name
    slug
    sport
    status_id
    status_name
    team_id
    weight_display
    weight
    created_at
    updated_at
    propBets(
      event_id: $eventId
      team_id: $teamId
      league: $league
      type_id: $typeId
    ) {
      id
      league
      sport
      type_name
      type_id
      target_value
      odds_last_updated
      over_american
      over_value
      under_american
      under_value
    }
  }
}
    `;

/**
 * __useGetAthletesWithBetsQuery__
 *
 * To run a query within a React component, call `useGetAthletesWithBetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAthletesWithBetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAthletesWithBetsQuery({
 *   variables: {
 *      athletesId: // value for 'athletesId'
 *      teamId: // value for 'teamId'
 *      league: // value for 'league'
 *      sport: // value for 'sport'
 *      positionName: // value for 'positionName'
 *      eventId: // value for 'eventId'
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useGetAthletesWithBetsQuery(baseOptions?: Apollo.QueryHookOptions<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>(GetAthletesWithBetsDocument, options);
      }
export function useGetAthletesWithBetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>(GetAthletesWithBetsDocument, options);
        }
export function useGetAthletesWithBetsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>(GetAthletesWithBetsDocument, options);
        }
export type GetAthletesWithBetsQueryHookResult = ReturnType<typeof useGetAthletesWithBetsQuery>;
export type GetAthletesWithBetsLazyQueryHookResult = ReturnType<typeof useGetAthletesWithBetsLazyQuery>;
export type GetAthletesWithBetsSuspenseQueryHookResult = ReturnType<typeof useGetAthletesWithBetsSuspenseQuery>;
export type GetAthletesWithBetsQueryResult = Apollo.QueryResult<GetAthletesWithBetsQuery, GetAthletesWithBetsQueryVariables>;
export const GetEventsDocument = gql`
    query GetEvents($seasonType: Int, $eventsId: ID, $week: Int, $league: String, $season: Int, $sport: String) {
  events(
    season_type: $seasonType
    id: $eventsId
    week: $week
    league: $league
    season: $season
    sport: $sport
  ) {
    id
    date
    league
    name
    sport
    short_name
    venue
    venue_address
    season
    season_type
    week
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      seasonType: // value for 'seasonType'
 *      eventsId: // value for 'eventsId'
 *      week: // value for 'week'
 *      league: // value for 'league'
 *      season: // value for 'season'
 *      sport: // value for 'sport'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export function useGetEventsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsSuspenseQueryHookResult = ReturnType<typeof useGetEventsSuspenseQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetEventsWithBetsDocument = gql`
    query GetEventsWithBets($seasonType: Int, $eventsId: ID, $week: Int, $league: String, $season: Int, $sport: String, $athleteId: String, $teamId: String, $typeId: String) {
  events(
    season_type: $seasonType
    id: $eventsId
    week: $week
    league: $league
    season: $season
    sport: $sport
  ) {
    id
    date
    league
    name
    sport
    short_name
    venue
    venue_address
    season
    season_type
    week
    created_at
    updated_at
    propBets(
      athlete_id: $athleteId
      team_id: $teamId
      league: $league
      type_id: $typeId
      season_type: $seasonType
    ) {
      id
      league
      sport
      type_name
      type_id
      target_value
      odds_last_updated
      over_american
      over_value
      under_american
      under_value
      athlete {
        display_name
      }
      team {
        nickname
      }
    }
  }
}
    `;

/**
 * __useGetEventsWithBetsQuery__
 *
 * To run a query within a React component, call `useGetEventsWithBetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsWithBetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsWithBetsQuery({
 *   variables: {
 *      seasonType: // value for 'seasonType'
 *      eventsId: // value for 'eventsId'
 *      week: // value for 'week'
 *      league: // value for 'league'
 *      season: // value for 'season'
 *      sport: // value for 'sport'
 *      athleteId: // value for 'athleteId'
 *      teamId: // value for 'teamId'
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useGetEventsWithBetsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>(GetEventsWithBetsDocument, options);
      }
export function useGetEventsWithBetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>(GetEventsWithBetsDocument, options);
        }
export function useGetEventsWithBetsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>(GetEventsWithBetsDocument, options);
        }
export type GetEventsWithBetsQueryHookResult = ReturnType<typeof useGetEventsWithBetsQuery>;
export type GetEventsWithBetsLazyQueryHookResult = ReturnType<typeof useGetEventsWithBetsLazyQuery>;
export type GetEventsWithBetsSuspenseQueryHookResult = ReturnType<typeof useGetEventsWithBetsSuspenseQuery>;
export type GetEventsWithBetsQueryResult = Apollo.QueryResult<GetEventsWithBetsQuery, GetEventsWithBetsQueryVariables>;
export const GetTeamsDocument = gql`
    query GetTeams($teamsId: ID, $league: String, $sport: String, $isActive: Boolean) {
  teams(id: $teamsId, league: $league, sport: $sport, is_active: $isActive) {
    id
    abbreviation
    display_name
    league
    sport
    is_active
    is_all_star
    location
    nickname
    slug
    short_display_name
    alternate_color
    color
    uid
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *      teamsId: // value for 'teamsId'
 *      league: // value for 'league'
 *      sport: // value for 'sport'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export function useGetTeamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsSuspenseQueryHookResult = ReturnType<typeof useGetTeamsSuspenseQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;