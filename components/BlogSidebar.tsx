// Sticky sidebar shown on all blog post pages.
// Contains the Eagle Festival 2026 promo banner + a contact CTA.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogSidebar() {
  return (
    <aside className="space-y-6">
      {/* Eagle Festival 2026 Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
        <div className="relative h-[420px]">
          <Image
            src="/images/hulin_eagle.jpg"
            alt="Golden Eagle Festival 2026"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Rich layered gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          {/* Subtle amber glow at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Top badge */}
          <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1 rounded-full bg-amber-500/90 text-white text-[11px] font-bold tracking-widest uppercase shadow">
            October 2026
          </span>
          <p className="text-amber-400 text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
            Bayan-Ölgii · Mongolia
          </p>
          <h3 className="text-white font-extrabold text-2xl leading-tight mb-2 uppercase tracking-wide drop-shadow-lg">
            Golden Eagle<br />Festival 2026
          </h3>
          <p className="text-white/75 text-sm mb-5 leading-relaxed">
            Join us for the world's most spectacular eagle hunting competition deep in the Altai Mountains.
          </p>
          <Link
            href="/tours/golden-eagle-festival"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white text-sm font-bold px-5 py-3 rounded-full transition-all shadow-lg hover:shadow-emerald-500/40 w-fit"
          >
            See Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
        <h3 className="font-semibold text-stone-900 mb-1 text-base">Plan your trip</h3>
        <p className="text-sm text-stone-500 mb-4">
          Custom itineraries, no fixed departures. Get in touch and we'll build your trip.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
        >
          Contact us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
