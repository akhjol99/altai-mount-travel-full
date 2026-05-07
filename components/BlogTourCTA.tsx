// CTA strip shown at the bottom of every blog post — converts warm readers
// into bookings by linking to the most-relevant tour for the post they just read.
//
// Editorial mapping below: each blog post slug maps to the tour slug that
// best matches its topic, plus custom copy for the lead-in. To add a new post,
// just add an entry here.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";

type Mapping = {
  /** The slug of the tour to recommend (must match a tour in data/tours.ts). */
  slug: string;
  /** Conversational lead-in shown above the tour title. */
  lead: string;
};

const POST_TO_TOUR: Record<string, Mapping> = {
  "golden-eagle-festival-guide": {
    slug: "golden-eagle-festival",
    lead: "See the festival in person",
  },
  "when-to-visit-altai-mountains": {
    slug: "altai-tavan-bogd-base-camp-trekking",
    lead: "Picked your season? Now pick your route.",
  },
  "what-to-pack-for-altai-trek": {
    slug: "altai-tavan-bogd-base-camp-trekking",
    lead: "Ready to put your gear to use?",
  },
  "staying-with-nomadic-families": {
    slug: "live-with-kazakh-nomad-family",
    lead: "Live this for a week",
  },
  "bayan-ulgii-travel-guide": {
    slug: "altai-tavan-bogd-base-camp-trekking",
    lead: "See Bayan-Ölgii for yourself",
  },
  "domestic-flight-schedule-mongolia-2026": {
    slug: "altai-tavan-bogd-base-camp-trekking",
    lead: "Got your flights? Now plan the tour.",
  },
};

export default function BlogTourCTA({ postSlug }: { postSlug: string }) {
  const mapping = POST_TO_TOUR[postSlug];
  if (!mapping) return null;

  const tour = tours.find((t) => t.slug === mapping.slug);
  if (!tour) return null;

  const tourUrl = `/tours/${tour.slug}`;
  const price = tour.startingFromUsd?.toLocaleString("en-US");

  return (
    <aside
      aria-label="Recommended tour"
      className="mt-10 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 shadow-sm"
    >
      <div className="grid md:grid-cols-[240px_1fr]">
        {/* Thumbnail */}
        <Link
          href={tourUrl}
          className="relative block h-48 md:h-full md:min-h-[220px] overflow-hidden"
          aria-label={`View ${tour.title}`}
        >
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            sizes="(min-width: 768px) 240px, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 mb-1">
            {mapping.lead}
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-stone-900 mb-2">
            <Link href={tourUrl} className="hover:text-emerald-700 transition-colors">
              {tour.title}
            </Link>
          </h3>

          {tour.summary && (
            <p className="text-sm text-stone-600 line-clamp-2 mb-3">{tour.summary}</p>
          )}

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-700 mb-4">
            <span>
              <span className="font-semibold">{tour.durationDays}</span> days
            </span>
            {tour.difficulty && (
              <>
                <span className="text-stone-300">•</span>
                <span>{tour.difficulty}</span>
              </>
            )}
            {price && (
              <>
                <span className="text-stone-300">•</span>
                <span>
                  from <span className="font-semibold">${price}</span>
                </span>
              </>
            )}
          </div>

          {/* CTAs */}
          <div className="mt-auto flex flex-wrap items-center gap-3">
            <Link
              href={tourUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              View this tour
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tours"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 underline-offset-2 hover:underline"
            >
              Or browse all tours
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
