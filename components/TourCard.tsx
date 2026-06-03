import Link from "next/link";
import Image from "next/image";

export type TourCardType = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  difficulty: string;
  price: number;
  image: string;
  summary: string;
  highlights: string[];
  season?: string[];
  urgencyBadge?: string; // e.g. "Only 6 spots left"
};

const difficultyStyles: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-amber-100 text-amber-800",
  Challenging: "bg-red-100 text-red-800",
  Hard: "bg-red-100 text-red-800",
};

// Per-slug urgency config
const URGENCY: Record<string, { label: string; color: string }> = {
  "golden-eagle-festival": {
    label: "🔥 Filling fast · Oct 2026",
    color: "bg-red-500 text-white",
  },
  "climbing-khuiten-peak": {
    label: "⚡ Limited spots",
    color: "bg-amber-500 text-white",
  },
  "altai-tavan-bogd-trek": {
    label: "⭐ Most popular",
    color: "bg-brand-700 text-white",
  },
};

export default function TourCard({ t }: { t: TourCardType }) {
  const href = `/tours/${t.slug}`;
  const urgency = URGENCY[t.slug];
  const seasonLabel = t.season?.length
    ? t.season[0] + (t.season.length > 1 ? `–${t.season[t.season.length - 1]}` : "")
    : null;

  return (
    <div className="card overflow-hidden group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={t.image}
          alt={t.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Duration — top left */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full">
            {t.duration}
          </span>
        </div>

        {/* Difficulty — top right */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyStyles[t.difficulty] ?? "bg-gray-100 text-gray-800"}`}>
            {t.difficulty}
          </span>
        </div>

        {/* Urgency badge — bottom left */}
        {urgency && (
          <div className="absolute bottom-3 left-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shadow ${urgency.color}`}>
              {urgency.label}
            </span>
          </div>
        )}

        {/* Season — bottom right */}
        {seasonLabel && (
          <div className="absolute bottom-3 right-3">
            <span className="text-xs font-medium bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
              {seasonLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">{t.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1">{t.summary}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {t.highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">from</span>
            <span className="text-lg font-semibold text-gray-900 ml-1">${t.price.toLocaleString()}</span>
            <span className="text-xs text-gray-400 ml-1">USD</span>
          </div>
          <Link href={href} className="btn-primary text-sm px-4 py-2">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
