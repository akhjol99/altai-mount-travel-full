'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, Phone, Mail, MapPin, Clock, Shield, Mountain, Utensils, Plane } from "lucide-react";

const categories = [
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Planning & Timing",
    color: "amber",
    faqs: [
      {
        q: "What is the best time to visit Western Mongolia?",
        a: "May to October is the sweet spot. June and September offer warm, dry days ideal for trekking. July–August can see some rain but remain beautiful. The Golden Eagle Festival takes place in early October — if that's your goal, plan around it. May has cool, windswept landscapes that feel utterly untouched.",
      },
      {
        q: "How far in advance should I book?",
        a: "For the Golden Eagle Festival, book at least 6 months ahead — spots fill up fast and domestic flights to Ölgii are limited. For summer treks, 2–3 months ahead is ideal. We can sometimes accommodate last-minute bookings for smaller groups.",
      },
      {
        q: "How long should I plan for my trip?",
        a: "Most guests stay 7–14 days to truly experience Western Mongolia. A 5-day trip is the minimum to see the highlights. For the full Altai Tavan Bogd trek or Khuiten climb, plan 10–14 days. We also offer custom multi-week itineraries combining trekking, eagle hunting stays, and festival visits.",
      },
    ],
  },
  {
    icon: <Plane className="w-5 h-5" />,
    label: "Getting Here",
    color: "sky",
    faqs: [
      {
        q: "How do I get to Ölgii (ULG)?",
        a: "Fly into Ulaanbaatar (UB) first, then take a domestic flight to Ölgii (ULG). Aeromongolia operates 4 flights per week on the UB–Ölgii route; Hunnu Air offers charter flights. Note that Aeromongolia's website can be unreliable for direct booking — we strongly recommend booking your domestic flight through us to guarantee a seat.",
      },
      {
        q: "Can you arrange my flights and transfers?",
        a: "Yes — we can book your domestic flights, arrange airport transfers in Ölgii, and coordinate everything between arrival and departure. Just let us know your international flight details and we handle the rest.",
      },
      {
        q: "Do I need a visa for Mongolia?",
        a: "Most nationalities can enter Mongolia visa-free for up to 30 days. Citizens of some countries require a visa in advance. We recommend checking with the Mongolian Embassy in your country or contacting us — we can advise based on your passport.",
      },
    ],
  },
  {
    icon: <Mountain className="w-5 h-5" />,
    label: "Tours & Activities",
    color: "emerald",
    faqs: [
      {
        q: "Are your tours suitable for beginners?",
        a: "We offer tours for all fitness levels. The Golden Eagle Festival visit and nomad homestays require no special fitness. The Altai Tavan Bogd trek is moderate — suitable for anyone who walks regularly. The Khuiten Peak climb is for experienced trekkers with some mountaineering background. Tell us your fitness level and we'll match you to the right tour.",
      },
      {
        q: "What is the group size?",
        a: "We specialize in small groups — typically 2–8 people. This means better access to local families, more flexibility on the trail, and a far more personal experience. We also offer fully private tours for couples, families, or solo travelers.",
      },
      {
        q: "Can I customise my itinerary?",
        a: "Absolutely. Every trip can be adjusted to your interests, fitness, and schedule. Want to spend an extra day with an eagle hunter family? Skip a section of the trek? Add a horse-riding day? Just ask — our local guides know every hidden valley and we'll build the route around you.",
      },
    ],
  },
  {
    icon: <Utensils className="w-5 h-5" />,
    label: "Accommodation & Food",
    color: "rose",
    faqs: [
      {
        q: "Where will I sleep on a trek?",
        a: "A mix of traditional gers (yurts) with local nomad families, our own camp tents in the mountains, and simple guesthouses in Ölgii. Staying with nomad families is one of the highlights — you'll share meals, hear stories, and fall asleep to the sound of the steppe. We carry all camping equipment for multi-day routes.",
      },
      {
        q: "What is the food like?",
        a: "Expect hearty, home-cooked Kazakh and Mongolian meals — lamb stew, fresh bread, dairy products, and tea. In remote areas, your guide cooks fresh meals over a camp stove. In Ölgii, there are local restaurants. We can accommodate vegetarians and most dietary restrictions — please let us know in advance.",
      },
      {
        q: "Are dietary restrictions catered for?",
        a: "Yes. We regularly accommodate vegetarians, and can work with most dietary needs including gluten-free and dairy-free with advance notice. Vegan diets are possible but require more planning in remote areas — tell us when you book and we'll prepare accordingly.",
      },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: "Safety & Logistics",
    color: "violet",
    faqs: [
      {
        q: "Is Western Mongolia safe?",
        a: "Yes — Western Mongolia is very safe for travelers. Crime is extremely low and locals are famously hospitable. The main considerations are altitude (Tavan Bogd sits at 4,000m+), weather changes, and remoteness. All our guides carry satellite communicators and first aid kits. We've run expeditions here since 2019 without incident.",
      },
      {
        q: "Do you arrange permits and festival tickets?",
        a: "All national park permits, protected area fees, and Golden Eagle Festival tickets are included in your tour price. You don't need to arrange anything separately — we handle all paperwork so you can focus on the experience.",
      },
      {
        q: "What should I pack?",
        a: "We send every guest a detailed packing list after booking. Key items: layered clothing (mornings can be cold even in summer), good hiking boots, sunscreen, and a warm sleeping bag for camping. We provide tents, cooking equipment, and safety gear. Travel insurance including emergency evacuation cover is strongly recommended.",
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200",   dot: "bg-amber-500" },
  sky:     { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-200",     dot: "bg-sky-500" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-200",    dot: "bg-rose-500" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200",  dot: "bg-violet-500" },
};

function FAQItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[color];
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        open ? `${c.border} ${c.bg}` : "border-stone-100 bg-white hover:border-stone-200"
      }`}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-stone-900 text-sm md:text-base leading-snug ${open ? c.text : ""}`}>
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 w-4 h-4 transition-transform duration-300 ${open ? `rotate-180 ${c.text}` : "text-stone-400"}`}
        />
      </button>
      <div className={`transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <p className="px-5 pb-5 text-stone-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero */}
      <div className="relative h-64 md:h-80 mt-16 md:mt-0 overflow-hidden">
        <Image
          src="/images/5bogd.jpg"
          alt="Altai Mountains FAQ"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10 px-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Everything you need to know
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 mt-2 text-sm md:text-base max-w-xl">
            Planning your first trip to Western Mongolia? We've got answers.
          </p>
        </div>
      </div>

      {/* FAQ Body */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-14">

        {/* Category sections */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div key={cat.label}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${c.bg} ${c.text} ${c.border} border`}>
                    {cat.icon}
                  </div>
                  <h2 className={`text-base font-bold uppercase tracking-widest ${c.text}`}>
                    {cat.label}
                  </h2>
                </div>

                <div className="space-y-2">
                  {cat.faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} color={cat.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 rounded-2xl overflow-hidden relative min-h-[220px]">
          <Image
            src="/images/hulin_eagle.jpg"
            alt="Contact us"
            fill
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 px-8 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Still have questions?</h3>
              <p className="text-white/70 text-sm max-w-md">
                Our team is based in Ölgii and knows every trail, family, and festival. Reach out — we reply within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/97685428887"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-5 py-3 rounded-full backdrop-blur-sm text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send a message
              </Link>
            </div>
          </div>
        </div>

        {/* Quick facts strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <MapPin className="w-5 h-5 text-amber-500" />, label: "Based in", value: "Ölgii, Mongolia" },
            { icon: <Clock className="w-5 h-5 text-amber-500" />, label: "Response time", value: "Within 24 hours" },
            { icon: <Mountain className="w-5 h-5 text-amber-500" />, label: "Operating since", value: "2019" },
            { icon: <Shield className="w-5 h-5 text-amber-500" />, label: "Group size", value: "2–8 people" },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-stone-100 rounded-xl p-4 flex flex-col items-center text-center gap-1 shadow-sm">
              {item.icon}
              <span className="text-xs text-stone-400 uppercase tracking-wide">{item.label}</span>
              <span className="text-sm font-semibold text-stone-800">{item.value}</span>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}
