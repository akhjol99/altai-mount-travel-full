export default function WhyChooseUs() {
  const features = [
    {
      title: "Flexible Pricing",
      desc: "Our tours are more flexible and affordable compared to most agencies, giving you great value with no hidden fees.",
      icon: "💲",
    },
    {
      title: "5+ Years Experience",
      desc: "We’ve been guiding travelers in the Mongolian Altai for more than five years – safely, smoothly, and professionally.",
      icon: "📍",
    },
    {
      title: "Personal Care",
      desc: "We treat every traveler with warmth and attention. We listen carefully and support you from the first message to the end of your trip.",
      icon: "🤝",
    },
    {
      title: "Flexible Travel Planning",
      desc: "We don’t force fixed dates. Your journey is arranged according to your preferred schedule, pace, and travel style.",
      icon: "📅",
    },
    {
      title: "Traveler Satisfaction",
      desc: "Our goal is simple: every traveler should leave happy. We always go the extra mile to create meaningful, memorable experiences.",
      icon: "🌟",
    },
    {
      title: "Local Expertise & Connections",
      desc: "Based in Bayan-Ölgii, we work directly with nomadic families, local guides, and eagle hunters, so you experience the real Altai while supporting the local community.",
      icon: "🏔️",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We combine experience, flexibility, and genuine care to create authentic,
          memorable journeys in the Mongolian Altai.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}