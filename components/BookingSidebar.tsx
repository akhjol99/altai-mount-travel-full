import Link from "next/link";
import { CheckCircle, Users, Calendar, Phone } from "lucide-react";

export default function BookingSidebar({ price }: { price: number }) {
  return (
    <aside className="space-y-4 sticky top-6">
      {/* Price card */}
      <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-6">
        <span className="text-xs text-stone-400 uppercase tracking-wide">From</span>
        <div className="text-4xl font-extrabold text-stone-900 mt-1">
          ${price.toLocaleString()}
          <span className="text-base font-normal text-stone-400 ml-1">USD</span>
        </div>
        <p className="text-xs text-stone-500 mt-1">per person · price drops with larger groups</p>

        <ul className="mt-4 space-y-2">
          {[
            "Small groups or private",
            "All permits & logistics",
            "English-speaking guide",
            "Meals & accommodation included",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md shadow-emerald-200 text-sm"
        >
          Plan / Book this Tour
        </Link>
        <p className="text-xs text-center text-stone-400 mt-2">
          Free consultation · No commitment
        </p>
      </div>

      {/* Quick contact */}
      <div className="bg-stone-900 rounded-2xl p-5 text-white">
        <p className="text-sm font-semibold mb-3">Have a question?</p>
        <a
          href="https://wa.me/97685428887"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bc5a] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors mb-3"
        >
          <Phone className="w-4 h-4" />
          WhatsApp us
        </a>
        <a
          href="mailto:altaimounttravel@gmail.com"
          className="flex items-center gap-2 text-stone-400 hover:text-white text-xs transition-colors"
        >
          altaimounttravel@gmail.com
        </a>
      </div>

      {/* Group discount */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Group discount</span>
        </div>
        <p className="text-xs text-amber-700 leading-relaxed">
          Traveling with 3+ people? Price drops automatically. Ask us for a custom quote.
        </p>
      </div>

      {/* Season */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="w-4 h-4 text-sky-600" />
          <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Next season</span>
        </div>
        <p className="text-xs text-sky-700 leading-relaxed">
          Booking now for summer &amp; autumn 2026. Spots are limited — secure yours early.
        </p>
      </div>
    </aside>
  );
}
