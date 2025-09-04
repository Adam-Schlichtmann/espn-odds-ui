export type DBEvent = {
  created_at: Date;
  date: Date;
  id: string;
  league: string;
  name: string;
  short_name: string;
  sport: string;
  updated_at: Date;
};

export type DBOdds = {
  created_at: Date;
  event_id: string;
  moneyline_away?: number | null;
  moneyline_home?: number | null;
  odds_updated_at: Date;
  over_odds?: number | null;
  provider_id: number;
  spread_away?: number | null;
  spread_home?: number | null;
  total_points?: number | null;
  under_odds?: number | null;
  updated_at: Date;
};
