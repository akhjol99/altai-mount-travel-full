import Link from "next/link";

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
};

const difficultyStyles: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-amber-100 text-amber-800",
  Hard: "bg-red-100 text-red-800",
};

export default function TourCard({ t }: { t: TourCardType }) {
  const href = `/tours/${t.slug}`;
  return (
    <div className="card overflow-hidden group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.image}
          alt={t.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full">
            {t.duration}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyStyles[t.difficulty] ?? "bg-gray-100 text-gray-800"}`}>
            {t.difficulty}
          </span>
        </div>
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
