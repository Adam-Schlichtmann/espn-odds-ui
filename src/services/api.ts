import { DBEvent, DBOdds } from "../types";

const API_BASE_URL = "http://localhost:4000";

export const apiService = {
  async getEvents(): Promise<DBEvent[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  },

  async getOdds(eventId: string): Promise<DBOdds[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/odds/${eventId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching odds:", error);
      return [];
    }
  },

  async getAllOdds(): Promise<DBOdds[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/odds`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching all odds:", error);
      return [];
    }
  },

  async scrape(): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/scrape`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching all odds:", error);
      return;
    }
  },
};
