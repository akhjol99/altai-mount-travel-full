const items = [
  {
    name: "Maya R.",
    country: "United States",
    initials: "MR",
    quote: "The eagle festival access was unreal — our guide knew every hunter by name. Felt like an insider, not a tourist.",
    rating: 5,
    tour: "Golden Eagle Festival Tour",
  },
  {
    name: "Nacha H.",
    country: "United Kingdom",
    initials: "SC",
    quote: "Camping under the Milky Way at Khoton Lake was a moment I'll carry forever. Logistics were flawless the whole way.",
    rating: 5,
    tour: "Altai Mountain Trekking Tour",
  },
  {
    name: "Ulan A.",
    country: "USA",
    initials: "AK",
    quote: "From Ulaanbaatar to Ölgii, everything ran smoothly. I felt completely safe and genuinely welcomed by the local families.",
    rating: 5,
    tour: "Tavan Bogd Base Camp Trek",
  },
];

const avatarColors = [
  "bg-brand-100 text-brand-800",
  "bg-blue-100 text-blue-800",
  "bg-amber-100 text-amber-800",
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-xl mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700 mb-2 block">Guest stories</span>
          <h2 className="text-3xl font-semibold mb-2">From people who've been there</h2>
          <p className="text-gray-600">Real travelers, real experiences in the Mongolian Altai.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <figure key={item.name} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <div className="flex gap-0.5 text-amber-400 text-sm mb-4" aria-label={`${item.rating} stars`}>
                {"★".repeat(item.rating)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed flex-1 mb-5">
                "{item.quote}"
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <figcaption className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${avatarColors[idx]}`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.country} · {item.tour}</div>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
