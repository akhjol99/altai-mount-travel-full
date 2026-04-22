'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/5bogd.jpg",
  "/images/mount.jpeg",
  "/images/eagle_hero.png"
];

export default function HeroHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-16 md:mt-0 overflow-hidden h-[90vh]">
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Altai Mountains"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1200ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 flex items-end justify-start h-full px-6 md:px-16 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
            Western Mongolia · Est. 2019
          </span>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            Discover the Altai Mountains
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Small-group expeditions with local guides. Trek glaciers, stay with nomads, and witness the world's greatest eagle festival.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tours" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-6 py-3 rounded-full transition-colors">
              Explore tours
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm transition-colors">
              Plan my trip
            </Link>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
            <div>
              <div className="text-white text-xl font-semibold">5+</div>
              <div className="text-white/60 text-xs mt-0.5">Years guiding</div>
            </div>
            <div>
              <div className="text-white text-xl font-semibold">100%</div>
              <div className="text-white/60 text-xs mt-0.5">Local team</div>
            </div>
            <div>
              <div className="text-white text-xl font-semibold">★ 5.0</div>
              <div className="text-white/60 text-xs mt-0.5">TripAdvisor</div>
            </div>
            <div>
              <div className="text-white text-xl font-semibold">No</div>
              <div className="text-white/60 text-xs mt-0.5">Hidden fees</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-amber-400" : "w-1.5 bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
