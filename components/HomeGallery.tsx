'use client';
// Masonry-style photo gallery for the homepage.
// Shows a curated grid of Altai images with a lightbox on click.

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  { src: "/images/hulin_eagle.jpg",   alt: "Kazakh eagle hunter with golden eagle" },
  { src: "/images/eaglebest.jpg",     alt: "Golden eagle in flight over Altai" },
  { src: "/images/festival.jpeg",     alt: "Golden Eagle Festival 2026" },
  { src: "/images/5bogd.jpg",         alt: "Altai Tavan Bogd peaks" },
  { src: "/images/glacier.jpg",       alt: "Potanin Glacier, Western Mongolia" },
  { src: "/images/hearth_lake.jpeg",  alt: "Khoton Lake at sunrise" },
  { src: "/images/horse.jpeg",        alt: "Horseback riding in the Altai" },
  { src: "/images/nomad1.jpg",        alt: "Kazakh nomadic family in ger" },
  { src: "/images/camel.jpg",         alt: "Camel support trek in the Altai" },
  { src: "/images/waterfall.jpeg",    alt: "Waterfall in Bayan-Ölgii" },
  { src: "/images/octhunter.jpeg",    alt: "Eagle hunter in traditional dress" },
  { src: "/images/camp.jpeg",         alt: "Tent camp under Altai stars" },
];

export default function HomeGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-700 mb-2">
            Life in the Altai
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            See it for yourself
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Real moments from our expeditions — eagles, glaciers, nomads, and the mountains that make it all worthwhile.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {/* Large featured image */}
          <div
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: "1/1" }}
            onClick={() => setLightbox(0)}
          >
            <Image
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>

          {/* Remaining 10 images in 2-col right grid */}
          {PHOTOS.slice(1, 11).map((photo, idx) => (
            <div
              key={photo.src}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "1/1" }}
              onClick={() => setLightbox(idx + 1)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center drop-shadow">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-9 h-9" />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-9 h-9" />
          </button>

          {/* Caption */}
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm">
            {PHOTOS[lightbox].alt} · {lightbox + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </section>
  );
}
