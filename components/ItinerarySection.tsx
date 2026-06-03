// Rich day-by-day itinerary with image, title, and activity description.
// Images cycle through the tour's images array across days.

import Image from "next/image";
import { Utensils, BedDouble, Clock, MapPin } from "lucide-react";

type Day = {
  day: number;
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
  images: string[];        // tour's image pool
  heroImage: string;       // fallback
};

export default function ItinerarySection({ itinerary, images, heroImage }: Props) {
  if (!itinerary?.length) return null;

  // Build a pool: heroImage + extra images, then cycle
  const pool = [heroImage, ...images].filter(Boolean);
  const getImage = (idx: number) => pool[idx % pool.length];

  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold text-stone-900 mb-6">Day-by-Day Itinerary</h3>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />

        <div className="space-y-6">
          {itinerary.map((day, idx) => {
            const img = day.image || getImage(idx);
            const isEven = idx % 2 === 0;

            return (
              <div key={day.day} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-brand-700 text-white items-center justify-center text-sm font-bold shadow-md z-10">
                  {day.day}
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-white grid md:grid-cols-[280px_1fr]`}>
                  {/* Image */}
                  <div className="relative h-52 md:h-auto">
                    <Image
                      src={img}
                      alt={day.title}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      className="object-cover"
                    />
                    {/* Mobile day badge */}
                    <div className="absolute top-3 left-3 md:hidden">
                      <span className="bg-brand-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                        Day {day.day}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-stone-900 mb-2 leading-snug">
                        {day.title}
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-4">
                        {day.summary}
                      </p>
                    </div>

                    {/* Meta chips */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {day.meals?.length ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                          <Utensils className="w-3 h-3" />
                          {day.meals.join(", ")}
                        </span>
                      ) : null}
                      {day.accommodation ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full">
                          <BedDouble className="w-3 h-3" />
                          {day.accommodation}
                        </span>
                      ) : null}
                      {day.hours ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-stone-100 text-stone-600 border border-stone-200 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {day.hours}h
                        </span>
                      ) : null}
                      {day.distanceKm ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-stone-100 text-stone-600 border border-stone-200 px-2.5 py-1 rounded-full">
                          <MapPin className="w-3 h-3" />
                          {day.distanceKm} km
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
