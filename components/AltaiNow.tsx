import { Sun, Bird, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning } from "lucide-react";

// === Festival configuration ===
// The Golden Eagle Festival in Bayan-Ölgii is held the first weekend of October.
// Update these dates each year after the festival ends.
const FESTIVAL_NAME = "Golden Eagle Festival";
const FESTIVAL_START_ISO = "2026-10-03T09:00:00+08:00";
const FESTIVAL_END_ISO = "2026-10-04T18:00:00+08:00";

export type AltaiNowData = {
  temperatureC: number | null;
  weatherCode: number | null;
  sunrise: string | null; // "HH:MM"
  sunset: string | null; // "HH:MM"
};

export type FestivalStatus =
  | { type: "countdown"; days: number }
  | { type: "soon"; days: number }
  | { type: "live" }
  | { type: "past" };

function festivalStatus(now: Date = new Date()): FestivalStatus {
  const start = new Date(FESTIVAL_START_ISO);
  const end = new Date(FESTIVAL_END_ISO);
  if (now < start) {
    const days = Math.ceil((start.getTime() - now.getTime()) / 86_400_000);
    if (days <= 7) return { type: "soon", days };
    return { type: "countdown", days };
  }
  if (now <= end) return { type: "live" };
  return { type: "past" };
}

// WMO weather codes → small icon + plain-language label.
function describeWeather(code: number | null): { Icon: typeof Sun; label: string } {
  if (code == null) return { Icon: Sun, label: "" };
  if (code === 0) return { Icon: Sun, label: "Clear" };
  if ([1, 2, 3].includes(code)) return { Icon: Cloud, label: "Partly cloudy" };
  if ([45, 48].includes(code)) return { Icon: CloudFog, label: "Foggy" };
  if ([51, 53, 55, 56, 57].includes(code)) return { Icon: CloudRain, label: "Drizzle" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { Icon: CloudRain, label: "Rain" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { Icon: CloudSnow, label: "Snow" };
  if ([95, 96, 99].includes(code)) return { Icon: CloudLightning, label: "Storm" };
  return { Icon: Cloud, label: "" };
}

function FestivalStat({ status }: { status: FestivalStatus }) {
  if (status.type === "live") {
    return (
      <div>
        <div className="flex items-center gap-1.5 text-amber-300 text-xl font-semibold">
          <Bird className="h-5 w-5" />
          Live now
        </div>
        <div className="text-white/60 text-xs mt-0.5">{FESTIVAL_NAME}</div>
      </div>
    );
  }
  if (status.type === "soon") {
    return (
      <div>
        <div className="flex items-center gap-1.5 text-amber-300 text-xl font-semibold">
          <Bird className="h-5 w-5" />
          {status.days === 0 ? "Today" : `${status.days}d`}
        </div>
        <div className="text-white/60 text-xs mt-0.5">Until {FESTIVAL_NAME}</div>
      </div>
    );
  }
  if (status.type === "countdown") {
    return (
      <div>
        <div className="text-white text-xl font-semibold">
          {status.days} days
        </div>
        <div className="text-white/60 text-xs mt-0.5">Until Eagle Festival</div>
      </div>
    );
  }
  // past
  return (
    <div>
      <div className="text-white text-xl font-semibold">October</div>
      <div className="text-white/60 text-xs mt-0.5">Eagle Festival returns</div>
    </div>
  );
}

export default function AltaiNow({ data }: { data: AltaiNowData }) {
  const status = festivalStatus();
  const { Icon: WIcon, label: weatherLabel } = describeWeather(data.weatherCode);
  const hasWeather = data.temperatureC != null;
  const hasSun = data.sunrise && data.sunset;

  // If absolutely nothing loaded, hide the widget entirely.
  if (!hasWeather && !hasSun && status.type === "past") return null;

  return (
    <div
      aria-label="Live conditions in Ölgii, Bayan-Ölgii"
      className="flex flex-wrap gap-x-8 gap-y-4"
    >
      {/* Weather */}
      {hasWeather && (
        <div>
          <div className="flex items-center gap-1.5 text-white text-xl font-semibold">
            <WIcon className="h-5 w-5 text-amber-300" />
            {Math.round(data.temperatureC as number)}°C
          </div>
          <div className="text-white/60 text-xs mt-0.5">
            {weatherLabel ? `${weatherLabel} in Ölgii` : "Live in Ölgii"}
          </div>
        </div>
      )}

      {/* Daylight */}
      {hasSun && (
        <div>
          <div className="text-white text-xl font-semibold tabular-nums">
            {data.sunrise} <span className="text-white/40">→</span> {data.sunset}
          </div>
          <div className="text-white/60 text-xs mt-0.5">Daylight today</div>
        </div>
      )}

      {/* Festival */}
      <FestivalStat status={status} />
    </div>
  );
}

// === Server-side data fetch ===
// Call this from getStaticProps. Wrapped in try/catch so a fetch failure
// doesn't take down the homepage build — we just degrade gracefully.
export async function fetchAltaiNow(): Promise<AltaiNowData> {
  const empty: AltaiNowData = {
    temperatureC: null,
    weatherCode: null,
    sunrise: null,
    sunset: null,
  };
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast" +
      "?latitude=48.97&longitude=89.97" +
      "&current=temperature_2m,weather_code" +
      "&daily=sunrise,sunset" +
      "&timezone=Asia%2FUlaanbaatar" +
      "&forecast_days=1";
    const res = await fetch(url);
    if (!res.ok) return empty;
    const json: any = await res.json();
    return {
      temperatureC:
        typeof json?.current?.temperature_2m === "number"
          ? json.current.temperature_2m
          : null,
      weatherCode:
        typeof json?.current?.weather_code === "number"
          ? json.current.weather_code
          : null,
      sunrise: extractTime(json?.daily?.sunrise?.[0]),
      sunset: extractTime(json?.daily?.sunset?.[0]),
    };
  } catch {
    return empty;
  }
}

function extractTime(iso: unknown): string | null {
  if (typeof iso !== "string") return null;
  // Open-Meteo returns local time like "2026-05-03T05:23".
  const t = iso.split("T")[1];
  if (!t) return null;
  return t.slice(0, 5);
}
