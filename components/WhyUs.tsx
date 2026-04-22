const features = [
  {
    title: "Based in Bayan-Ölgii",
    desc: "We live here. Direct relationships with nomadic families and eagle hunters — no middlemen, no markups.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    color: "bg-brand-50 text-brand-700",
  },
  {
    title: "No fixed dates",
    desc: "Your trip is planned around your schedule, not ours. Fully flexible itineraries from 7 to 14 days.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Transparent pricing",
    desc: "No hidden fees. More affordable than most agencies, with the same quality guides and equipment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "5+ years experience",
    desc: "Guiding travelers safely through the Mongolian Altai since 2019, in all weather and conditions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Personal care",
    desc: "We treat every traveler with warmth. We listen and support you from the first message to the last day.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "Traveler satisfaction",
    desc: "Every traveler should leave happy. We go the extra mile to create meaningful, memorable experiences.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    ),
    color: "bg-purple-50 text-purple-700",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700 mb-2 block">Why choose us</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Local knowledge, personal care</h2>
          <p className="text-gray-600 leading-relaxed">
            We combine experience, flexibility, and genuine care to create authentic, memorable journeys in the Mongolian Altai.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
