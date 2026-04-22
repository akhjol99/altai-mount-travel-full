import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import TourFilters, { FilterState } from "@/components/TourFilters";
import { tours } from "@/data/tours";
import { useMemo, useState } from "react";
import Head from "next/head";

const defaultFilters: FilterState = {
  duration: "all",
  difficulty: "",
  maxPrice: undefined,
  season: "",
  tags: [],
  sort: "popular",
};

export default function ToursPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = useMemo(() => {
    const arr = tours.filter((t) => {
      const okDur = (() => {
        if (filters.duration === "all") return true;
        const [a, b] = filters.duration.split("-").map(Number);
        return t.durationDays >= a && t.durationDays <= b;
      })();
      const okDiff = filters.difficulty ? t.difficulty === filters.difficulty : true;
      const okPrice = filters.maxPrice ? t.startingFromUsd <= filters.maxPrice : true;
      const okSeason = filters.season ? t.season?.includes(filters.season) : true;
      const okTags = filters.tags.length ? filters.tags.every((tag) => t.tags?.includes(tag)) : true;
      return okDur && okDiff && okPrice && okSeason && okTags;
    });

    const sorted = [...arr];
    switch (filters.sort) {
      case "price-asc": return sorted.sort((a, b) => a.startingFromUsd - b.startingFromUsd);
      case "duration-asc": return sorted.sort((a, b) => a.durationDays - b.durationDays);
      default: return sorted.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }
  }, [filters]);

  return (
    <>
      <Head>
        <title>All Tours | Altai Mount Travel</title>
        <meta name="description" content="Browse all Western Mongolia tours — eagle festival, Altai trekking, and nomadic cultural experiences. Flexible dates, local guides." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero header */}
        <section className="bg-brand-800 text-white pt-24 pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3 block">Western Mongolia</span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-3">All tours</h1>
            <p className="text-white/70 max-w-lg leading-relaxed">
              Flexible, small-group expeditions led by local Kazakh guides. Tailored to your dates and pace.
            </p>
          </div>
        </section>

        <section className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            <TourFilters onChange={setFilters} />
            <div>
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-medium text-gray-900">{filtered.length}</span> {filtered.length === 1 ? "tour" : "tours"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((t) => (
                  <TourCard
                    key={t.id}
                    t={{
                      id: t.id,
                      slug: t.slug,
                      title: t.title,
                      duration: `${t.durationDays} days`,
                      difficulty: t.difficulty,
                      price: t.startingFromUsd,
                      image: t.heroImage,
                      summary: t.summary,
                      highlights: t.highlights,
                    }}
                  />
                ))}
                {filtered.length === 0 && (
                  <div className="col-span-3 py-20 text-center">
                    <p className="text-gray-500 mb-3">No tours match your current filters.</p>
                    <button
                      onClick={() => setFilters(defaultFilters)}
                      className="text-sm text-brand-700 underline hover:text-brand-800"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
