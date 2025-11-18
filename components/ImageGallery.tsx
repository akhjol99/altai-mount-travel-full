'use client';
import { useState } from "react";

export default function ImageGallery({ images = [] }: { images: string[] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <section className="mt-10">
      <div className="relative rounded-2xl overflow-hidden">
        {/* main image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={`Tour photo ${active + 1}`}
          className="w-full h-[60vh] object-cover object-center transition-all duration-700"
        />
      </div>

      {/* thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => setActive(i)}
            className={`h-20 w-32 object-cover rounded-xl cursor-pointer border-2 transition-all ${
              active === i ? "border-brand-700" : "border-transparent hover:opacity-80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}