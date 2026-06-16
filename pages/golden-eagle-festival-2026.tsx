import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Clock, ChevronDown, CheckCircle, Camera, Home, Plane } from "lucide-react";
import { useState } from "react";

const SITE = "https://www.altaimount.com";

const FAQ = [
  {
    q: "When exactly is the Golden Eagle Festival 2026?",
    a: "The main festival takes place at Shar Nuur (Shar Lake) on 3–4 October 2026, about 15 km from Ölgii town. A smaller local festival is usually held the last weekend of September in Ölgii itself. Festival entrance tickets are included in our tour package — you don't pay separately at the gate.",
  },
  {
    q: "How do I get to the Golden Eagle Festival from abroad?",
    a: "Most international visitors fly into Ulaanbaatar (ULN) — served by direct flights from Seoul, Beijing, Istanbul, Moscow, Frankfurt, and Tokyo. From Ulaanbaatar, fly domestic to Ölgii (ULG) with MIAT or Hunnu Air — about 2.5 hours. From Ölgii, the festival grounds at Shar Nuur are just a 20-minute drive. We handle all domestic flights, transfers, and airport pickups.",
  },
  {
    q: "Do I need a guide or can I go independently?",
    a: "You can attend independently, but a local guide makes a huge difference. Without one, you miss the scoring commentary, can't communicate with hunters for portraits, and won't get access to the family gers and private moments that make the festival truly memorable. We've guided at this festival for years and know the best positions before the crowds arrive.",
  },
  {
    q: "What camera gear should I bring?",
    a: "The essential kit: a 70–200mm f/2.8 (or f/4) for eagle action, a 50–85mm for hunter portraits, and a wide-angle for the opening procession. A teleconverter (1.4x or 2x) extends reach when eagles are high. Bring at least 2 camera bodies so you don't miss shots swapping lenses. Pack plenty of memory cards — you'll shoot thousands of frames. A monopod helps with long lenses over two full days.",
  },
  {
    q: "What are the best camera settings for eagle shots?",
    a: "Use a minimum 1/1600s shutter speed for eagles in descent — 1/2500s is safer. AF-C continuous autofocus with burst mode (high). Expect 3–5 keepers per 20 frames. Morning light from the east is ideal; arrive before 8 am. Midday can be harsh — use the break for portrait work at the sidelines where the light is softer.",
  },
  {
    q: "What is the accommodation like?",
    a: "During the festival we stay at a traditional ger camp near Shar Nuur, close to the festival grounds. Each guest ger sleeps 2 people with beds, blankets, and a wood stove for heating. There is a separate kitchen ger where all meals are prepared and served. Shared toilet and shower facilities are on-site. The camp is an authentic experience — far better than the crowded hotels in Ölgii during festival week.",
  },
  {
    q: "What should I wear to the festival?",
    a: "October in Bayan-Ölgii is cold — temperatures range from 5°C to 12°C during the day, dropping below freezing at night. Layer up: thermal base, fleece mid-layer, windproof jacket. Waterproof boots, warm hat, and gloves are essential. The festival site is open steppe — there is no shelter from wind. Hand warmers are a smart addition for photographers who need to hold cameras steady in the cold.",
  },
  {
    q: "How much does it cost to attend the festival?",
    a: "Gate entry is approximately 30,000–50,000 MNT ($9–15 USD) per day. A VIP area with better sightlines costs around 80,000–100,000 MNT (~$24–30 USD). Festival entrance tickets are included in our tour price. Tour packages that include transport, ger camp accommodation, guide, meals, and both festival days start from $2,100 USD per person.",
  },
  {
    q: "How far in advance should I book?",
    a: "At least 3–4 months in advance. October is peak season in Bayan-Ölgii — domestic flights and accommodation in Ölgii sell out fast, especially for festival weekend. Domestic flights from Ulaanbaatar to Ölgii have limited seats and sell out well before the festival. Our 2026 tour has limited spots remaining.",
  },
  {
    q: "Can I visit eagle hunter families outside the festival?",
    a: "Yes — and we strongly recommend it. Visiting an eagle hunter at their home is far more personal than the festival. You can hold the eagle, watch a private training session on horseback, and share a meal with the family in their ger. This is one of the most memorable parts of our tour and is included in the itinerary.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-sm md:text-base font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="text-sm text-stone-600 leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}

export default function GoldenEagleFestival2026() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Golden Eagle Festival 2026 — Dates, Tickets & Tours | Altai Mount Travel</title>
        <meta
          name="description"
          content="Everything about the Golden Eagle Festival 2026 in Bayan-Ölgii, Mongolia. Dates: October 3–4, 2026. Ticket prices, what to expect, photography tips, and small-group tours from a local operator."
        />
        <link rel="canonical" href={`${SITE}/golden-eagle-festival-2026`} />
        <meta property="og:url" content={`${SITE}/golden-eagle-festival-2026`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Golden Eagle Festival 2026 — Dates, Tickets & Tours" />
        <meta property="og:description" content="October 3–4, 2026 in Bayan-Ölgii, Mongolia. Local guided tours, photography tips, what to wear, and how to book." />
        <meta property="og:image" content={`${SITE}/images/hulin_eagle4.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/images/hulin_eagle4.png`} />

        {/* Event structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Golden Eagle Festival 2026",
              startDate: "2026-10-03",
              endDate: "2026-10-04",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Shar Nuur, Bayan-Ölgii",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Shar Nuur",
                  addressRegion: "Bayan-Ölgii",
                  addressCountry: "MN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.97,
                  longitude: 89.66,
                },
              },
              image: [`${SITE}/images/hulin_eagle4.png`],
              description:
                "The Golden Eagle Festival is an annual celebration of Kazakh eagle hunting culture in Bayan-Ölgii, Western Mongolia. Eagle hunters compete in speed, accuracy, and costume.",
              organizer: {
                "@type": "Organization",
                name: "Bayan-Ölgii Aimag",
                url: "https://www.altaimount.com",
              },
              offers: {
                "@type": "Offer",
                url: `${SITE}/tours/golden-eagle-festival`,
                price: "2100",
                priceCurrency: "USD",
                availability: "https://schema.org/LimitedAvailability",
                validFrom: "2026-01-01",
              },
            }),
          }}
        />

        {/* FAQPage structured data — generated from FAQ array */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/hulin_eagle4.png"
          alt="Eagle hunter at the Golden Eagle Festival, Bayan-Ölgii Mongolia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-14 px-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Bayan-Ölgii · Western Mongolia</span>
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg leading-tight mb-4">
            Golden Eagle Festival<br />2026
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> October 3–4, 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:block" />
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Shar Nuur, Bayan-Ölgii</span>
            <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:block" />
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 2-day event</span>
          </div>
          <Link
            href="/tours/golden-eagle-festival"
            className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg"
          >
            View 2026 Tour & Prices →
          </Link>
        </div>
      </div>

      {/* Urgency strip */}
      <div className="bg-stone-900 text-white text-center py-3 px-4 text-sm">
        <span className="text-amber-400 font-semibold">Limited spots for October 2026.</span>
        {" "}Tours fill 3–4 months in advance —{" "}
        <Link href="/book?tour=Golden Eagle Festival Tour 2026" className="underline underline-offset-2 hover:text-amber-400">
          secure your place now
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* What is it */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-5">What is the Golden Eagle Festival?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>The Golden Eagle Festival is an annual celebration of the ancient Kazakh tradition of hunting with trained golden eagles. Each October, eagle hunters from across the Altai mountains ride to Shar Nuur on horseback — their eagles perched on their arms, their costumes unchanged in generations.</p>
              <p>Hunters compete across two days in speed, accuracy, and the beauty of their traditional dress. The competition is judged by a panel of senior hunters, and the atmosphere is unlike anything else on earth: the roar of the crowd as an eagle drops from a mountain ridge at full speed, the silence just before it lands on its hunter's arm.</p>
              <p>The festival has taken place every October for decades. It is not a performance put on for tourists — it is a living ceremony that has been the centrepiece of Kazakh nomadic culture for centuries.</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/festival.jpeg" alt="Golden Eagle Festival competition, Bayan-Ölgii" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* 2026 dates */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">2026 Festival Dates</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Shar Nuur Eagle Festival",
                tag: "Main event",
                date: "October 3–4, 2026",
                location: "Shar Nuur (Shar Lake), ~15 km from Ölgii",
                desc: "The largest and most internationally attended festival. 100+ eagle hunters compete over two full days. This is the one to build your trip around.",
                highlight: true,
              },
              {
                name: "Ölgii Eagle Festival",
                tag: "Smaller, more local",
                date: "Late September 2026",
                location: "Ölgii town",
                desc: "Held the last weekend of September, this is a more intimate festival with fewer tourists. If your dates allow, attending both gives a very different perspective.",
                highlight: false,
              },
            ].map((f) => (
              <div key={f.name} className={`rounded-2xl p-6 border ${f.highlight ? "bg-amber-50 border-amber-200" : "bg-stone-50 border-stone-200"}`}>
                <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${f.highlight ? "text-amber-700" : "text-stone-500"}`}>{f.tag}</div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{f.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-stone-600 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" /> {f.date}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-stone-600 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" /> {f.location}
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What happens */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">What Happens at the Festival</h2>
          <div className="space-y-6">
            {[
              {
                day: "Day 1",
                title: "Opening procession & eagle speed competition",
                desc: "The festival opens with a procession of all eagle hunters riding in together — one of the most cinematic moments of the event. The main competition is the eagle calling contest: hunters ride to the top of a steep ridge and release their eagles, which must fly down and land on their handler's arm in the valley below. Speed, precision, and obedience are scored. Day One also includes the traditional costume judging.",
                image: "/images/hulin_eagle2.png",
              },
              {
                day: "Day 2",
                title: "Accuracy tests & horseback games",
                desc: "Day Two brings the accuracy contest — a fox-fur target is dragged across the ground by a galloping horse, and eagles must strike it. The afternoon is devoted to horseback games: Kiz Kuar (girl chasing), Tiyn Teru (coin picking at speed), and Kokpar (a team tug-of-war over a goat carcass on horseback). The day ends with the awards ceremony — a deeply emotional moment for the winning hunter.",
                image: "/images/octhunter.jpeg",
              },
            ].map((d, i) => (
              <div key={d.day} className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">{d.day}</div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{d.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">{d.desc}</p>
                </div>
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
                  <Image src={d.image} alt={d.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photography */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold">Photography Guide</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Best position", desc: "For eagle descent shots, position yourself halfway up the hillside opposite the launch ridge — you get the eagle against the sky, then frame it against the mountains as it drops. Our guide knows exactly where to stand before the crowds arrive." },
              { title: "Gear to bring", desc: "70–200mm f/2.8 for action, 50–85mm for hunter portraits, wide-angle for the procession. A teleconverter (1.4x or 2x) extends reach. Bring 2 bodies so you don't miss shots swapping lenses, and pack plenty of memory cards." },
              { title: "Camera settings", desc: "Minimum 1/1600s shutter speed for eagles in descent — 1/2500s is safer. AF-C continuous autofocus, high-speed burst mode. Expect 3–5 keepers per 20 frames at peak action." },
              { title: "Light & timing", desc: "Arrive before 8 am. Morning light from the east illuminates hunters from the front for about two hours. Midday is harsh — use the break for portraits. Hand warmers help keep fingers nimble in October cold." },
            ].map((tip) => (
              <div key={tip.title}>
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-1">{tip.title}</div>
                <p className="text-white/75 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting there */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Getting to Bayan-Ölgii</h2>
          <p className="text-stone-500 mb-6">Western Mongolia is remote — getting there is part of the adventure.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Plane,
                step: "Step 1",
                title: "Fly into Ulaanbaatar",
                desc: "Most international visitors arrive via Seoul, Beijing, Istanbul, Moscow, or Tokyo. Ulaanbaatar (ULN / Chinggis Khaan International) is the main hub.",
              },
              {
                icon: Plane,
                step: "Step 2",
                title: "Domestic flight to Ölgii",
                desc: "MIAT and Hunnu Air fly Ulaanbaatar → Ölgii (ULG) several times a week. Flight time is ~2.5 hours. Seats sell out fast in October — book as early as possible.",
              },
              {
                icon: MapPin,
                step: "Step 3",
                title: "Transfer to festival grounds",
                desc: "From Ölgii airport, the Shar Nuur festival grounds are just a 20-minute drive. We arrange all pickups, transfers, and luggage handling throughout the tour.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                    <s.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">{s.step}</span>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Where You'll Stay</h2>
          <p className="text-stone-500 mb-6">During the festival, hotels in Ölgii are packed and overpriced. We do it differently.</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image src="/images/ger_camp.jpeg" alt="Traditional ger camp, Bayan-Ölgii Mongolia" fill className="object-cover" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold uppercase tracking-wide">
                <Home className="w-4 h-4" /> Traditional Ger Camp
              </div>
              <p className="text-stone-600 leading-relaxed">We stay at a traditional ger camp near Shar Nuur — close to the festival grounds, away from the town crowds. Each guest ger sleeps 2 people with proper beds, blankets, and a wood stove that keeps the ger warm through cold October nights.</p>
              <ul className="space-y-2">
                {[
                  "Private guest gers for sleeping (2 per ger)",
                  "Separate kitchen ger — all meals cooked and served here",
                  "Shared toilet and shower facilities on-site",
                  "Wood stoves for warmth on cold autumn nights",
                  "Authentic experience far from the crowded town hotels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why book with us */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Why Book With a Local Guide?</h2>
          <p className="text-stone-500 mb-6">Many travelers consider attending independently. Here's what you miss without a guide.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Live commentary on scoring and results — without this, you're watching without understanding",
              "Direct introductions to eagle hunter families for portraits and private access",
              "Best photography positions — guides know exactly where to stand before the crowds arrive",
              "Access to ger hospitality: tea, food, and conversation with hunting families",
              "Domestic flight booking, airport transfers, and accommodation handled",
              "Context for what you're seeing — the history, the culture, the meaning behind each competition",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tour CTA */}
        <section className="bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-12 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">Altai Mount Travel</div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">Our 2026 Festival Tour</h2>
          <p className="text-stone-600 mb-6 max-w-xl mx-auto leading-relaxed">
            9 days · October 2026 · Small groups (max 8) · English-speaking local guide
          </p>
          <div className="grid sm:grid-cols-2 gap-2 max-w-xl mx-auto mb-8 text-left">
            {[
              "Both festival days (Oct 3–4)",
              "Festival entrance tickets included",
              "Private eagle hunter family visit",
              "Nomadic family ger stay",
              "Domestic flights (ULN–ULG–ULN)",
              "All ground transport & transfers",
              "Ger camp accommodation",
              "Most meals throughout the tour",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-stone-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours/golden-eagle-festival"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              See full itinerary & prices
            </Link>
            <Link
              href="/book?tour=Golden Eagle Festival Tour 2026"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Book your spot
            </Link>
          </div>
          <p className="text-xs text-stone-400 mt-4">From $2,100 USD per person · $600 deposit to confirm</p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-stone-500 mb-6">Everything you need to know before planning your trip.</p>
          <div className="bg-white border border-stone-200 rounded-2xl px-6 divide-y divide-stone-100">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
