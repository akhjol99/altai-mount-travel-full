'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";

// Photo gallery for tour pages.
// Desktop: a mosaic — one large photo with four smaller ones beside it.
// Mobile: a swipeable row of photos.
// Clicking any photo opens a full-screen viewer (arrows, swipe, keyboard, Esc).

export default function ImageGallery({ images = [] }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const total = images.length;
  const show = (i: number) => setOpen(((i % total) + total) % total);
  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((o) => (o === null ? o : (o + 1) % total)), [total]);
  const prev = useCallback(() => setOpen((o) => (o === null ? o : (o - 1 + total) % total)), [total]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  if (!total) return null;

  const tiles = images.slice(0, 5);
  const extra = total - tiles.length;

  // Desktop mosaic placement for each tile, depending on how many photos there are.
  const layout: Record<number, string[]> = {
    1: ["col-span-4 row-span-2"],
    2: ["col-span-3 row-span-2", "col-span-1 row-span-2"],
    3: ["col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1"],
    4: ["col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"],
    5: ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  };
  const spans = layout[tiles.length];

  return (
    <section className="mt-6">
      {/* ---------- Desktop mosaic ---------- */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2.5 h-[460px] rounded-3xl overflow-hidden">
        {tiles.map((img, i) => {
          const isLast = i === tiles.length - 1 && extra > 0;
          return (
            <button
              key={img + i}
              type="button"
              onClick={() => show(i)}
              aria-label={`Open photo ${i + 1} of ${total}`}
              className={`group relative overflow-hidden bg-stone-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 ${spans[i]}`}
            >
              <Image
                src={img}
                alt={`Tour photo ${i + 1}`}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 560px, 50vw" : "(min-width: 1024px) 280px, 25vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              {isLast && (
                <div className="absolute inset-0 bg-stone-900/55 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-bold leading-none">+{extra}</span>
                  <span className="text-xs uppercase tracking-widest mt-1.5 text-white/80">more photos</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* ---------- Mobile swipe row ---------- */}
      <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => show(i)}
            aria-label={`Open photo ${i + 1} of ${total}`}
            className="relative flex-none w-[85%] h-64 snap-center rounded-2xl overflow-hidden bg-stone-100"
          >
            <Image src={img} alt={`Tour photo ${i + 1}`} fill sizes="85vw" className="object-cover" priority={i === 0} />
            <span className="absolute bottom-2.5 right-2.5 bg-black/55 text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
              {i + 1} / {total}
            </span>
          </button>
        ))}
      </div>

      {/* View-all button */}
      {total > 1 && (
        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={() => show(0)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700 border border-stone-300 hover:border-stone-500 hover:bg-stone-50 rounded-full px-4 py-2 transition-colors"
          >
            <Images className="w-4 h-4" /> View all {total} photos
          </button>
        </div>
      )}

      {/* ---------- Full-screen viewer ---------- */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[9999] bg-stone-950 flex flex-col"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white/80 text-sm" onClick={(e) => e.stopPropagation()}>
            <span className="font-medium tabular-nums">{open + 1} / {total}</span>
            <button type="button" onClick={close} aria-label="Close" className="p-2 rounded-full hover:bg-white/10 text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Photo */}
          <div
            className="relative flex-1 mx-2 md:mx-20"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (dx > 50) prev();
              if (dx < -50) next();
              touchX.current = null;
            }}
          >
            <Image key={images[open]} src={images[open]} alt={`Tour photo ${open + 1}`} fill sizes="100vw" className="object-contain" />
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous photo"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next photo"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Thumbnail strip */}
          <div className="flex gap-2 justify-start md:justify-center overflow-x-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => show(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`relative flex-none w-16 h-12 rounded-md overflow-hidden transition-all ${
                  i === open ? "ring-2 ring-amber-400 opacity-100" : "opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={img} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
