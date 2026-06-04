'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AltaiNow, { type AltaiNowData } from "@/components/AltaiNow";

const heroSlides = [
  {
    image: "/images/5bogd.jpg",
    tag: "Western Mongolia · Est. 2019",
    title: "Discover the Altai Mountains",
    subtitle: "Small-group expeditions led by local guides deep into Western Mongolia. Trek across glaciers, sleep in nomad gers under a sky full of stars, and witness the world's greatest eagle festival.",
  },
  {
    image: "/images/mount.jpeg",
    tag: "Trekking & Adventure",
    title: "Summit the Roof of Mongolia",
    subtitle: "Multi-day treks through ancient high passes, across living glaciers, and into remote valleys where mass tourism has never reached. Every step feels like the first.",
  },
  {
    image: "/images/hulin_eagle.jpg",
    tag: "Kazakh Eagle Hunters · UNESCO Heritage",
    title: "Hunt with a Golden Eagle",
    subtitle: "Stay with a burkitshi family in the mountains of Bayan-Ölgii, ride on horseback with a golden eagle on your arm, and experience one of the last great falconry traditions on earth.",
  },
  {
    image: "/images/baga_turgen_guur.png",
    tag: "Western Mongolia · Pristine Wilderness",
    title: "Untouched Nature of Mongolia",
    subtitle: "Glaciers that have never been mapped, alpine lakes reflecting snow-capped peaks, and valleys where no tourist crowds exist — only you, your guide, and the endless mountains.",
  },
];

type HeroHomeProps = { altaiNow?: AltaiNowData };

export default function HeroHome({ altaiNow }: HeroHomeProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-16 md:mt-0 overflow-hidden h-[90vh]">
      {heroSlides.map((slide, i) => (
        <Image
          key={i}
          src={slide.image}
          alt={slide.title}
          fill
          sizes="100vw"
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-[1200ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 flex items-end justify-start h-full px-6 md:px-16 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4 transition-all duration-700">
            {heroSlides[current].tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-all duration-700">
            {heroSlides[current].title}
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed transition-all duration-700">
            {heroSlides[current].subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tours" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-6 py-3 rounded-full transition-colors">
              Explore tours
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm transition-colors">
              Plan my trip
            </Link>
          </div>
          {/* Live from Ölgii — replaces static trust bar with on-the-ground proof */}
          {altaiNow && (
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-3">
                Live from Ölgii, Bayan-Ölgii
              </div>
              <AltaiNow data={altaiNow} />
            </div>
          )}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
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
