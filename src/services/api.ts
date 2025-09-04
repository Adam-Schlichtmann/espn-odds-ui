import { DBEvent, DBPropBet, DBAthlete, DBTeam } from "../types";

/* ============
   Base API Client
   ============ */
const API_BASE_URL = "http://localhost:4000";

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store", // disable Next.js caching
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getTeams(): Promise<DBTeam[]> {
  return apiRequest<DBTeam[]>("/teams");
}

export async function getTeam(id: string): Promise<DBTeam> {
  return apiRequest<DBTeam>(`/teams/${id}`);
}

export async function getEvents(): Promise<DBEvent[]> {
  return apiRequest<DBEvent[]>("/events");
}

export async function getEvent(id: string): Promise<DBEvent> {
  return apiRequest<DBEvent>(`/events/${id}`);
}

export async function getAthletes(): Promise<DBAthlete[]> {
  return apiRequest<DBAthlete[]>("/athletes");
}

export async function getAthlete(id: string): Promise<DBAthlete> {
  return apiRequest<DBAthlete>(`/athletes/${id}`);
}

export async function getPropBets(): Promise<DBPropBet[]> {
  return apiRequest<DBPropBet[]>("/prop-bets");
}

export async function getPropBetsForEvent(
  eventId: string
): Promise<DBPropBet[]> {
  return apiRequest<DBPropBet[]>(`/prop-bets/event/${eventId}`);
}

export async function scrape(): Promise<void> {
  return apiRequest<void>(`/scrape`);
}
