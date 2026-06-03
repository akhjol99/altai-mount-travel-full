'use client';
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images = [] }: { images: string[] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <section className="mt-6">
      {/* Main image — fixed height so it's consistent across all tours */}
      <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
        <Image
          src={images[active]}
          alt={`Tour photo ${active + 1}`}
          fill
          sizes="(min-width: 1024px) 750px, 100vw"
          className="object-cover object-center transition-all duration-700"
          priority
        />
        {/* Image counter */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails — all strictly same size */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`relative flex-none w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              active === i
                ? "border-brand-700 opacity-100"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
