import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="bg-brand-800 rounded-3xl px-8 py-12 md:py-14 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Ready to plan your Altai adventure?
            </h2>
            <p className="text-white/70 leading-relaxed">
              Tell us your dates and interests — we'll craft a route that fits your pace, budget, and travel style.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-7 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Get in touch
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-7 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Browse tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
