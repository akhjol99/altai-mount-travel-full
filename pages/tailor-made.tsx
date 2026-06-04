import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, CheckCircle, ArrowRight } from "lucide-react";

const SITE = "https://www.altaimount.com";

const styles = [
  {
    image: "/images/trekking.jpeg",
    tag: "Adventure",
    title: "Trekking & Peaks",
    text: "Multi-day treks through the Altai, glacier crossings, high passes, and summit attempts on Khuiten or Malchin. Built around your fitness and ambition.",
  },
  {
    image: "/images/hulin_eagle.jpg",
    tag: "Culture",
    title: "Eagle Hunting & Nomadic Life",
    text: "Stay with a Kazakh eagle hunter family, learn the traditions of burkitshi falconry, and experience daily life on the steppe — on your schedule, not ours.",
  },
  {
    image: "/images/hearth_lake.jpeg",
    tag: "Nature",
    title: "Lakes, Wildlife & Landscapes",
    text: "Slow travel through pristine alpine lakes, river valleys, and wildlife corridors. Perfect if you want to breathe deeply and go at your own pace.",
  },
  {
    image: "/images/festival.jpeg",
    tag: "Events",
    title: "Festival & Photography",
    text: "Time your trip around the Golden Eagle Festival or design a photographer's itinerary — golden hour at the mountains, portraits with eagle hunters, nomad interiors.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell us your idea",
    text: "Dates, group size, interests, fitness level — even a rough outline is enough. We ask the right questions.",
  },
  {
    num: "02",
    title: "We design your route",
    text: "Within 48 hours we send a personalised itinerary, honest advice on what's realistic, and a clear quote.",
  },
  {
    num: "03",
    title: "You travel your way",
    text: "Confirm with a deposit and we handle everything — logistics, guides, permits, families, horses.",
  },
];

const includes = [
  "English-speaking local guide",
  "All ground transport",
  "Accommodation & all meals",
  "National park permits & fees",
  "Camping equipment",
  "Eagle hunter & nomad family visits",
  "Flexible itinerary adjustments",
  "24/7 support from Ölgii",
];

export default function TailorMade() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Tailor-Made Mongolia Tours | Altai Mount Travel</title>
        <meta name="description" content="Design your perfect Western Mongolia trip with Altai Mount Travel. Custom trekking, eagle hunting, nomad stays, and festival tours built entirely around you." />
        <link rel="canonical" href={`${SITE}/tailor-made`} />
        <meta property="og:url" content={`${SITE}/tailor-made`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tailor-Made Mongolia Tours | Altai Mount Travel" />
        <meta property="og:description" content="Your trip, your pace, your Mongolia. We build custom expeditions around your dates, interests, and group." />
        <meta property="og:image" content={`${SITE}/images/5bogd.jpg`} />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="relative h-[75vh] min-h-[500px] mt-16 md:mt-0 overflow-hidden">
        <Image src="/images/5bogd.jpg" alt="Tailor-made tours in Western Mongolia" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-5xl mx-auto px-6 md:px-10 pb-16">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Built entirely around you</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl drop-shadow-lg">
            Your Mongolia.<br />
            <span className="text-amber-400">Your rules.</span>
          </h1>
          <p className="text-white/75 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
            No fixed dates, no fixed groups, no compromises. Tell us what you dream of and we'll build the trip from scratch — just for you.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/book?tour=Tailor-Made Tour"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-6 py-3 rounded-full text-sm transition-colors">
              Start planning <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/97685428887?text=Hi%2C%20I%27d%20like%20to%20design%20a%20custom%20tour%20in%20Western%20Mongolia."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-sm text-sm transition-colors">
              <Phone className="w-4 h-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* What is tailor-made */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">What this means</span>
        <h2 className="text-3xl md:text-4xl font-black text-stone-900 mt-2 mb-5">Not a package. A conversation.</h2>
        <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Every tailor-made trip starts with a message. You tell us your dates, your group, and what excites you. We ask questions, share honest advice, and design an itinerary from scratch. No upselling, no template — just the right trip for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-stone-600">
          {["Solo travelers welcome", "Min. 3 days", "Any season", "Any experience level", "Families & couples"].map((tag) => (
            <span key={tag} className="bg-stone-100 border border-stone-200 px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* Trip styles */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Inspiration</span>
            <h2 className="text-3xl font-black text-stone-900 mt-2">What kind of trip are you dreaming of?</h2>
            <p className="text-stone-500 mt-2 text-sm">These are starting points — your trip can combine any of them.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {styles.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-widest text-amber-400 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {s.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-stone-900 mb-1">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">The process</span>
          <h2 className="text-3xl font-black text-stone-900 mt-2">Simple from start to finish</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="text-5xl font-black text-stone-100 leading-none mb-3">{s.num}</div>
              <h3 className="font-bold text-stone-900 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Every custom tour includes</span>
              <h2 className="text-3xl font-black text-stone-900 mt-2 mb-6">Everything handled for you</h2>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
              <Image src="/images/nomad2.jpg" alt="Nomadic experience in Western Mongolia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <Image src="/images/baga_turgen_guur.png" alt="Western Mongolia landscape" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Ready to build your trip?</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Tell us your idea.<br />We'll make it happen.
          </h2>
          <p className="text-white/70 mb-8 text-base max-w-xl mx-auto">
            No commitment at this stage — just a conversation. We reply within 24 hours with honest advice and a personalised plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book?tour=Tailor-Made Tour"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-4 rounded-full text-sm transition-colors">
              Start planning <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/97685428887?text=Hi%2C%20I%27d%20like%20to%20design%20a%20custom%20tour%20in%20Western%20Mongolia."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm text-sm transition-colors">
              <Phone className="w-4 h-4" /> WhatsApp us
            </a>
          </div>
          <p className="text-white/40 text-xs mt-4">Free consultation · No deposit until you're ready</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
