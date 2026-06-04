import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND = "Altai Mount Travel";
const SITE_URL = "https://www.altaimount.com";
const WHATSAPP = "+97685428887";
const EMAIL = "altaimounttravel@gmail.com";

const values = [
  {
    icon: "🏔",
    title: "Born in the Altai",
    text: "We're not outsiders running trips here. Ölgii is our home. We grew up with these mountains, these families, and these traditions.",
  },
  {
    icon: "🦅",
    title: "Real access",
    text: "Our relationships with eagle hunter families, nomadic herders, and local guides took years to build. You travel with people who trust us.",
  },
  {
    icon: "👥",
    title: "Small & personal",
    text: "We keep groups to 2–8 people. No megabus tours, no rushing. Every trip is shaped around you.",
  },
  {
    icon: "🌱",
    title: "Locally driven",
    text: "Every dollar you spend supports Ölgii drivers, host families, local cooks, and the wider community. Tourism done right.",
  },
];

const steps = [
  { num: "01", title: "Tell us your dream", text: "Festival? Trek? Nomad stay? A mix of everything? Tell us your dates and we'll start building." },
  { num: "02", title: "We design your route", text: "A custom itinerary lands in your inbox — realistic pacing, honest advice, no fluff." },
  { num: "03", title: "We handle everything", text: "Flights, permits, guides, accommodation, horses — logistics disappear, adventure begins." },
  { num: "04", title: "We meet in Ölgii", text: "Your journey starts the moment we pick you up. From here, the mountains take over." },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akhjol Taukye",
    jobTitle: "Owner / Tour Manager",
    worksFor: { "@type": "Organization", name: BRAND, url: SITE_URL },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/akhjol.jpeg`,
  };

  return (
    <>
      <Head>
        <title>About Us | {BRAND}</title>
        <meta name="description" content="Meet the local team behind Altai Mount Travel in Ölgii, Bayan-Ölgii. Authentic Western Mongolia tours, Altai trekking, and Golden Eagle Festival journeys." />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </Head>

      <div className="min-h-screen bg-white text-stone-900">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative h-[70vh] min-h-[480px] mt-16 md:mt-0 overflow-hidden">
          <Image src="/images/5bogd.jpg" alt="Altai Mountains, Western Mongolia" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-5xl mx-auto px-6 md:px-10 pb-14">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Ölgii, Bayan-Ölgii · Western Mongolia
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl drop-shadow-lg">
              We don't just show you<br />
              <span className="text-amber-400">Mongolia.</span><br />
              We take you home.
            </h1>
            <p className="text-white/75 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
              Altai Mount Travel is a locally owned team from Ölgii. Since 2019 we've been guiding travellers into the Altai Mountains, to eagle hunter families, and across the last wild landscapes of Central Asia.
            </p>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-stone-900">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "300+", label: "Travelers guided" },
              { value: "5★", label: "TripAdvisor rating" },
              { value: "2019", label: "Founded in Ölgii" },
              { value: "7", label: "Signature tours" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-amber-400">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MEET AKHJOL ── */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image src="/images/akhjol.jpeg" alt="Akhjol Taukye — founder of Altai Mount Travel" fill className="object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-amber-950 rounded-2xl px-5 py-3 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wide">Owner & Guide</div>
                <div className="text-lg font-black">Akhjol Taukye</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Your local host</span>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mt-2 mb-5 leading-tight">
                From Ölgii,<br />with twenty years<br />of mountain knowledge.
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I spent years working as a guide for other tour companies — leading treks across the Altai, translating for eagle hunter families, driving travelers through passes that don't appear on any map. I loved the work, but I saw how much got lost in the middle.
                </p>
                <p>
                  In 2019 I started Altai Mount Travel so I could do things my way: smaller groups, honest itineraries, and real connections with the families and landscapes I'd spent years getting to know. No middlemen, no upselling, no shortcuts.
                </p>
                <p>
                  Every trip I run now is the trip I always wished I could offer.
                </p>
              </div>

              <blockquote className="mt-6 border-l-4 border-amber-400 pl-4 text-stone-700 italic text-lg leading-relaxed">
                "I've guided hundreds of people through these mountains. I started my own company to do it the right way."
              </blockquote>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors">
                  <Phone className="w-4 h-4" /> WhatsApp Akhjol
                </a>
                <a href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold px-5 py-3 rounded-full text-sm transition-colors">
                  <Mail className="w-4 h-4" /> Send an email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO STRIP ── */}
        <section className="grid grid-cols-3 md:grid-cols-5 h-52 md:h-72">
          {["/images/hulin_eagle.jpg", "/images/nomad1.jpg", "/images/trekking.jpeg", "/images/hearth_lake.jpeg", "/images/baga_turgen_guur.png"].map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={img} alt="Western Mongolia" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </section>

        {/* ── OUR VALUES ── */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">What sets us apart</span>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mt-2">Why travelers choose us</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">{v.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">The process</span>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mt-2">How your trip comes together</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="text-5xl font-black text-stone-100 leading-none mb-2">{s.num}</div>
                <h3 className="font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ── CTA ── */}
        <section className="relative overflow-hidden py-20">
          <Image src="/images/mount.jpeg" alt="Altai Mountains" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Ready to go?</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Your Altai adventure<br />starts with one message.
            </h2>
            <p className="text-white/70 mb-8 text-base max-w-xl mx-auto">
              Tell us when you want to come and what you'd love to experience. We'll take care of everything else.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tours" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-4 rounded-full text-sm transition-colors">
                Browse all tours
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm text-sm transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
