export type BaseFields = {
  created_at: Date;
  updated_at: Date;
  sport: string;
  league: string;
};

export type DBTeam = BaseFields & {
  abbreviation: string;
  alternate_color: string;
  color: string;
  display_name: string;
  id: string;
  is_active: boolean;
  is_all_star: boolean;
  location: string;
  name: string;
  nickname: string;
  short_display_name: string;
  slug: string;
  uid: string;
};

export type DBEvent = BaseFields & {
  away_team_id: string;
  date: string;
  home_team_id: string;
  id: string;
  name: string;
  season_type: number;
  season: number;
  short_name: string;
  venue_address: string;
  venue: string;
  week: number;
};

export type DBPropBet = BaseFields & {
  athlete_id?: string | null;
  event_id: string;
  odds_last_updated: Date;
  over_american?: string | null;
  over_value?: number | null;
  target_value?: number | null;
  team_id?: string | null;
  type_id: string;
  type_name: string;
  under_american?: string | null;
  under_value?: number | null;
};

export type DBAthlete = BaseFields & {
  age: number;
  birth_date: Date;
  debut_year: number;
  display_name: string;
  first_name: string;
  height_display: string;
  height: number;
  id: string;
  jersey: string;
  last_name: string;
  position_abbreviation: string;
  position_id: string;
  position_name: string;
  short_name: string;
  slug: string;
  status_id: string;
  status_name: string;
  team_id: string;
  weight_display: string;
  weight: number;
};
