import { useState, useEffect } from "react";

type Props = {
  athlete?: string;
  event?: string;
  league: string;
  sport: string;
  team?: string;
  year?: string;
};

const ScrapeButton = ({ athlete, event, league, sport, team, year }: Props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (success !== null || error) {
      const timeout = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [success, error]);

  const handleScrape = async () => {
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      // Build query string from props
      const params = new URLSearchParams({
        sport,
        league,
        ...(athlete ? { athlete } : {}),
        ...(event ? { event } : {}),
        ...(team ? { team } : {}),
        ...(year ? { year } : {}),
      });
      const url = `http://localhost:4000/scrape?${params.toString()}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Request failed");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleScrape}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Scraping..." : "Scrape"}
      </button>
      {success && <span className="text-green-600">Scrape successful!</span>}
      {success === false && error && (
        <span className="text-red-600">Error: {error}</span>
      )}
    </div>
  );
};

export default ScrapeButton;
