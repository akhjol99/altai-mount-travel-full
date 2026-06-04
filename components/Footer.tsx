import Link from "next/link";
import { Facebook, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-brand-50 mt-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* ===== Main grid ===== */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-white font-semibold text-lg">Altai Mount Travel</div>

            <p className="text-brand-50/80 text-sm leading-relaxed">
              Authentic expeditions in Western Mongolia — Golden Eagle Festival,
              Altai trekking, and Kazakh nomadic experiences.
            </p>

            {/* TripAdvisor: SMALL + tidy */}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g680706-d32761497-Reviews-Altai_Mount_Travel-Olgiy_Bayan_Olgii_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
           
            
              <img
                src="/images/tripadvisor.png"
                alt="TripAdvisor"
                className="h-7 w-auto"
              />
              <div className="leading-tight">
                <div className="text-xs text-white font-semibold">TripAdvisor</div>
                <div className="text-[11px] text-brand-50/70">
                  Trusted by travelers
                </div>
              </div>
          
            </a>
          </div>

          {/* Tours */}
          <div>
            <div className="font-semibold mb-3 text-white">Tours</div>
            <ul className="space-y-2 text-brand-50/90 text-sm">
              <li>
                <Link href="/tours/golden-eagle-festival" className="hover:text-white">
                  Eagle Festival
                </Link>
              </li>
              <li>
                <Link href="/tours/altai-tavan-bogd-trek" className="hover:text-white">
                  Altai Trekking
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/western-mongolia-cultural-explorer"
                  className="hover:text-white"
                >
                  Cultural Explorer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold mb-3 text-white">Company</div>
            <ul className="space-y-2 text-brand-50/90 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Facebook */}
          <div className="space-y-3">
            <div className="font-semibold text-white">Newsletter</div>

            <form className="flex gap-2">
              <input
                className="min-w-0 flex-1 rounded-xl px-3 py-2 text-sm text-black"
                placeholder="Your email"
              />
              <button
                className="shrink-0 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-4 py-2 text-sm transition-colors"
                type="button"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-brand-50/70">
              We send a few updates per season.
            </p>

            {/* Facebook link (visible + clickable) */}
            <a
              href="https://www.facebook.com/profile.php?id=61570342360210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-50/85 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
              Follow us on Facebook
            </a>
          </div>
        </div>

        {/* ===== Compact map strip (doesn't destroy layout) ===== */}
        <div className="pb-10">
          <div className="flex items-center gap-2 text-white font-semibold mb-3">
            <MapPin className="h-4 w-4" />
            Our location (Ölgii, Bayan-Ölgii)
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              title="Altai Mount Travel location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41909.828587830125!2d89.86011743545534!3d48.965589550296876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42b4b51c300d9521%3A0x39d77177beb4724a!2sAltai%20Mount%20Travel%20Guest%20house!5e0!3m2!1sen!2smn!4v1765700270197!5m2!1sen!2smn"
              width="100%"
              height="170"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-brand-50/70">
          <div>© {new Date().getFullYear()} Altai Mount Travel. All rights reserved.</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href="/legal/privacy" className="hover:text-white">Privacy</Link>
            </li>
            <li>
              <Link href="/legal/terms" className="hover:text-white">Terms</Link>
            </li>
            <li>
              <Link href="/legal/cancellation" className="hover:text-white">Cancellation</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}