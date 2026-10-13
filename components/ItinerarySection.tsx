'use client';
// Day-by-day itinerary.
// - "Journey at a glance" strip: one icon per day showing the type of day.
// - Each day opens and closes; meals and overnight stay are shown as tags.
// - A day shows a photo ONLY if that photo is not already in the tour gallery,
//   so photos never appear twice on the page.

import { useState } from "react";
import Image from "next/image";
import { Utensils, BedDouble, Clock, MapPin, ChevronDown } from "lucide-react";

type Day = {
  day: number | string;
  title: string;
  summary: string;
  hours?: number;
  distanceKm?: number;
  accommodation?: string;
  meals?: string[];
  image?: string;
};

type Props = {
  itinerary: Day[];
  images: string[];   // tour gallery photos
  heroImage: string;  // tour banner photo
};

// What kind of day is it? Decided from the day title.
function dayType(title: string): { icon: string; label: string } {
  const t = title.toLowerCase();
  if (t.includes("depart")) return { icon: "🛫", label: "Departure" };
  if (t.includes("arriv")) return { icon: "🛬", label: "Arrival" };
  if (t.includes("festival")) return { icon: "🦅", label: "Festival" };
  if (t.includes("ride") || t.includes("riding") || t.includes("horse")) return { icon: "🐎", label: "Riding" };
  if (t.includes("climb") || t.includes("summit") || t.includes("ascent") || t.includes("peak")) return { icon: "⛰️", label: "Climb" };
  if (t.includes("trek") || t.includes("hike") || t.includes("walk")) return { icon: "🥾", label: "Trekking" };
  if (t.includes("flight") || t.includes("fly")) return { icon: "✈️", label: "Flight" };
  if (t.includes("eagle") || t.includes("hunter")) return { icon: "🦅", label: "Eagle hunters" };
  if (t.includes("drive") || t.includes("driving") || t.includes("transfer")) return { icon: "🚙", label: "Drive" };
  if (t.includes("lake")) return { icon: "🏞️", label: "Lake" };
  return { icon: "📍", label: "Explore" };
}

const MEALS: Record<string, string> = { B: "Breakfast", L: "Lunch", D: "Dinner" };

// Reads the "(Tent/B,L,D)" note at the end of a day description.
function parseNote(summary: string) {
  const m = summary.match(/\(\s*([^()]*?)\s*\)\s*\.?\s*$/);
  if (!m) return { text: summary.trim(), stay: undefined as string | undefined, meals: [] as string[] };
  const text = summary.slice(0, m.index).trim();
  const parts = m[1].split("/").map((p) => p.trim()).filter(Boolean);
  let stay: string | undefined;
  let mealPart = "";
  const looksLikeMeals = (p: string) => /^(dinner|lunch|breakfast|[BLD][\s.,]*)+$/i.test(p.replace(/\s/g, ""));
  if (parts.length >= 2) { stay = parts[0]; mealPart = parts.slice(1).join(","); }
  else if (parts.length === 1) { if (looksLikeMeals(parts[0])) mealPart = parts[0]; else stay = parts[0]; }
  let meals: string[] = [];
  if (/dinner|lunch|breakfast/i.test(mealPart)) {
    meals = ["Breakfast", "Lunch", "Dinner"].filter((x) => new RegExp(x, "i").test(mealPart));
  } else {
    meals = Array.from(new Set(mealPart.toUpperCase().replace(/[^BLD]/g, "").split(""))).map((c) => MEALS[c]).filter(Boolean);
  }
  return { text, stay, meals };
}

export default function ItinerarySection({ itinerary, images, heroImage }: Props) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  if (!itinerary?.length) return null;

  const galleryPhotos = new Set([heroImage, ...(images || [])].filter(Boolean));
  const allOpen = itinerary.every((_, i) => open[i]);
  const toggleAll = () =>
    setOpen(allOpen ? {} : Object.fromEntries(itinerary.map((_, i) => [i, true])));

  const jumpTo = (i: number) => {
    setOpen((o) => ({ ...o, [i]: true }));
    document.getElementById(`itinerary-day-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-3 mb-5">
        <h3 className="text-xl font-bold text-stone-900">Day-by-Day Itinerary</h3>
        <button type="button" onClick={toggleAll} className="text-sm font-semibold text-brand-700 hover:text-brand-800 underline underline-offset-4">
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      {/* Journey at a glance */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mb-6">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-3">Journey at a glance</div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {itinerary.map((d, i) => {
            const t = dayType(d.title);
            return (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                title={`Day ${d.day}: ${d.title}`}
                className="group flex-none flex flex-col items-center gap-1 w-14 py-2 rounded-xl hover:bg-white hover:shadow-sm transition"
              >
                <span className="text-xl leading-none group-hover:scale-110 transition-transform">{t.icon}</span>
                <span className="text-[11px] font-semibold text-stone-500">D{d.day}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Days */}
      <ol className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-700/40 via-stone-200 to-brand-700/40" aria-hidden />
        {itinerary.map((d, i) => {
          const t = dayType(d.title);
          const note = parseNote(d.summary || "");
          const stay = d.accommodation || note.stay;
          const meals = d.meals?.length ? d.meals : note.meals;
          const photo = d.image && !galleryPhotos.has(d.image) ? d.image : undefined;
          const isOpen = !!open[i];
          return (
            <li key={i} id={`itinerary-day-${i}`} className="relative pl-14 pb-3">
              <span className="absolute left-0 top-3 w-10 h-10 rounded-full bg-brand-700 text-white flex items-center justify-center text-sm font-bold ring-4 ring-white shadow">
                {d.day}
              </span>
              <div className={`rounded-2xl border transition-colors ${isOpen ? "bg-white border-stone-200 shadow-sm" : "bg-white border-stone-100 hover:border-stone-200"}`}>
                <button
                  type="button"
                  onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                  aria-expanded={isOpen}
                  className="w-full text-left px-4 md:px-5 py-4 flex items-start gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700 mb-1">
                      <span className="text-base leading-none">{t.icon}</span> Day {d.day} · {t.label}
                    </div>
                    <div className="font-semibold text-stone-900 leading-snug">{d.title}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {stay && (
                        <span className="inline-flex items-center gap-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded-full">
                          <BedDouble className="w-3 h-3" /> {stay}
                        </span>
                      )}
                      {meals.length > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full">
                          <Utensils className="w-3 h-3" /> {meals.join(" · ")}
                        </span>
                      )}
                      {d.hours ? (
                        <span className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                          <Clock className="w-3 h-3" /> {d.hours}h
                        </span>
                      ) : null}
                      {d.distanceKm ? (
                        <span className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                          <MapPin className="w-3 h-3" /> {d.distanceKm} km
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-stone-400 mt-1 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-4 md:px-5 pb-5 -mt-1">
                    <p className="text-sm text-stone-600 leading-relaxed">{note.text}</p>
                    {photo && (
                      <div className="relative mt-4 h-56 md:h-72 rounded-xl overflow-hidden">
                        <Image src={photo} alt={d.title} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
