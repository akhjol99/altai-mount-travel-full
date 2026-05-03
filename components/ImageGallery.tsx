'use client';
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images = [] }: { images: string[] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <section className="mt-10">
      <div className="relative rounded-2xl overflow-hidden h-[60vh]">
        {/* main image */}
        <Image
          src={images[active]}
          alt={`Tour photo ${active + 1}`}
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover object-center transition-all duration-700"
          priority
        />
      </div>

      {/* thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`relative h-20 w-32 flex-shrink-0 rounded-xl cursor-pointer border-2 overflow-hidden transition-all ${
              active === i ? "border-brand-700" : "border-transparent hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="128px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}