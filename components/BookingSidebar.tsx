import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export default function BookingSidebar({ price, tourTitle }: { price: number; tourTitle?: string }) {
  const bookHref = tourTitle ? `/book?tour=${encodeURIComponent(tourTitle)}` : '/book';
  return (
    <aside className="sticky top-6 self-start space-y-4">
      {/* Price + Book card */}
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
          href={bookHref}
          className="mt-5 flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md shadow-emerald-200 text-sm"
        >
          Plan / Book this Tour
        </Link>
        <p className="text-xs text-center text-stone-400 mt-2">
          Free consultation · No commitment
        </p>

        <div className="mt-4 pt-4 border-t border-stone-100">
          <p className="text-xs text-stone-500 mb-2">Have a question?</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/97685428887"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp us
            </a>
            <a
              href="mailto:altaimounttravel@gmail.com"
              className="text-center text-stone-400 hover:text-stone-700 text-xs transition-colors"
            >
              altaimounttravel@gmail.com
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
