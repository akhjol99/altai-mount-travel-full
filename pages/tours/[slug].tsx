import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingSidebar from "@/components/BookingSidebar";
import { tours } from "@/data/tours";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useMemo, useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import ItinerarySection from "@/components/ItinerarySection";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Shield, Users, Star, MapPin, Award } from "lucide-react";

const TRUST_BADGES = [
  { icon: Users, label: "Small groups", sub: "Max 8 travelers" },
  { icon: Shield, label: "Licensed & insured", sub: "Registered Mongolian operator" },
  { icon: MapPin, label: "Based in Ölgii", sub: "Local expertise since 2019" },
  { icon: Award, label: "TripAdvisor verified", sub: "5-star rated" },
];

const TESTIMONIALS = [
  {
    name: "Sarah T.",
    country: "United Kingdom",
    stars: 5,
    text: "Akhjol and the team went above and beyond. The eagle hunter visit alone was worth the whole trip. I've traveled to 40+ countries and this was genuinely in my top three.",
  },
  {
    name: "Marcus R.",
    country: "Germany",
    stars: 5,
    text: "Perfectly organized with zero stress. Our guide spoke excellent English and knew every family along the route personally. The landscapes are beyond description.",
  },
  {
    name: "Yuki & Kenji",
    country: "Japan",
    stars: 5,
    text: "We stayed with a nomadic family for two nights — something we will never forget. The food, the horses, the silence at night. Altai Mount Travel made it all feel effortless.",
  },
];

const SITE = "https://www.altaimount.com";

function Quick({ facts }:{ facts: Record<string,string|number|undefined> }){
  const entries = Object.entries(facts).filter(([,v])=> v!==undefined && v!=='');
  if(!entries.length) return null;
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
      {entries.map(([k,v])=>(
        <div key={k} className="card p-3">
          <div className="text-xs uppercase tracking-wide text-gray-500">{k}</div>
          <div className="text-sm font-semibold">{String(v)}</div>
        </div>
      ))}
    </section>
  );
}

function PriceSelector({ tiers }:{ tiers?: {minGroup:number; maxGroup:number; priceUsd:number}[] }){
  const [size, setSize] = useState(2);
  const price = useMemo(()=>{
    if(!tiers?.length) return undefined;
    const tier = tiers.find(t=> size>=t.minGroup && size<=t.maxGroup) || tiers[tiers.length-1];
    return tier?.priceUsd;
  }, [size, tiers]);
  if(!tiers?.length) return null;
  return (
    <div className="card p-4 mt-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm text-gray-600">Group size</div>
          <input type="range" min={tiers[0].minGroup} max={tiers[tiers.length-1].maxGroup} value={size} onChange={(e)=>setSize(Number(e.target.value))} className="w-56"/>
          <div className="text-sm text-gray-700 mt-1">{size} traveler(s)</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Price per person</div>
          <div className="text-2xl font-bold">${price?.toLocaleString('en-US')} USD</div>
          <div className="text-xs text-gray-500 mt-1">Prices drop as your group gets larger.</div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-[400px] text-sm">
          <thead><tr className="text-left text-gray-600"><th className="py-2 pr-4">Group</th><th className="py-2">Price pp</th></tr></thead>
          <tbody>
            {tiers.map((t,i)=>(<tr key={i} className="border-t"><td className="py-2 pr-4">{t.minGroup===t.maxGroup ? t.minGroup : `${t.minGroup}-${t.maxGroup}`}</td><td className="py-2">${t.priceUsd.toLocaleString('en-US')} USD</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function buildTourSchema(tour: any, canonicalUrl: string) {
  // Use TouristTrip — Google's recommended type for multi-day tours.
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    url: canonicalUrl,
    image: tour.images?.length
      ? (tour.images as string[]).map((img) => `${SITE}${img}`)
      : tour.heroImage
        ? [`${SITE}${tour.heroImage}`]
        : undefined,
    touristType: tour.tags ?? undefined,
    itinerary: tour.itinerary?.map((d: any) => ({
      "@type": "ItemList",
      name: `Day ${d.day}: ${d.title}`,
      description: d.summary,
    })),
    offers: {
      "@type": "Offer",
      price: tour.startingFromUsd,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
    provider: {
      "@type": "TravelAgency",
      "@id": `${SITE}/#organization`,
      name: "Altai Mount Travel",
      url: SITE,
    },
  };
}

function buildBreadcrumbSchema(tour: any, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE}/tours` },
      { "@type": "ListItem", position: 3, name: tour.title, item: canonicalUrl },
    ],
  };
}

type Props = { tour: any };

export default function TourDetail({ tour }: Props){
  if(!tour){
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container py-16"><p>Tour not found.</p><Link className="btn-ghost mt-4 inline-block" href="/tours">Back to tours</Link></div>
        <Footer />
      </div>
    );
  }

  const canonical = `${SITE}/tours/${tour.slug}`;
  const ogImage = tour.heroImage ? `${SITE}${tour.heroImage}` : `${SITE}/logo-112.png`;
  const metaTitle = `${tour.title} | Altai Mount Travel`;
  const metaDescription = tour.summary?.slice(0, 160) || `${tour.title} — ${tour.durationDays}-day tour in Western Mongolia with Altai Mount Travel.`;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tour.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tour.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTourSchema(tour, canonical)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(tour, canonical)) }}
        />
      </Head>

      <Navbar />
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay so breadcrumb/title below reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        {/* Tour title overlaid on hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 max-w-6xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2 block">
            {tour.tags?.[0]}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            {tour.title}
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl text-sm md:text-base">
            {tour.summary?.slice(0, 120)}{tour.summary?.length > 120 ? "…" : ""}
          </p>
        </div>
      </div>

      <section className="container py-6">
        <Breadcrumbs items={[{href:'/',label:'Home'},{href:'/tours',label:'Tours'},{label: tour.title}]} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          <article className="space-y-10">

            {/* Photo gallery */}
            <ImageGallery images={tour.images || []} />

            {/* Quick facts strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { label: "Duration", value: `${tour.durationDays} days`, icon: "🗓" },
                { label: "Difficulty", value: tour.difficulty, icon: "⚡" },
                { label: "Best season", value: tour.quickFacts?.bestSeason, icon: "☀️" },
                { label: "Max altitude", value: tour.quickFacts?.maxAltitudeM ? `${tour.quickFacts.maxAltitudeM} m` : null, icon: "🏔" },
                { label: "Accommodation", value: tour.quickFacts?.accommodationMix, icon: "🛏" },
                { label: "Start / End", value: tour.quickFacts?.startEnd, icon: "✈️" },
              ].filter(f => f.value).map(f => (
                <div key={f.label} className="bg-stone-50 border border-stone-100 rounded-2xl p-4 flex flex-col gap-1">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="text-[11px] uppercase tracking-wide text-stone-400 font-semibold">{f.label}</span>
                  <span className="text-sm font-semibold text-stone-800">{f.value}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5">
                  <b.icon className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-stone-800 leading-tight">{b.label}</div>
                    <div className="text-[11px] text-stone-400 leading-tight">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Tour Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h: string) => (
                  <div key={h} className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                    <span className="text-emerald-500 text-lg">✦</span>
                    <span className="text-sm font-medium text-stone-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <ItinerarySection
              itinerary={tour.itinerary || []}
              images={tour.images || []}
              heroImage={tour.heroImage}
            />

            {/* Included / Not included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> What's Included
                </h3>
                <ul className="space-y-2">
                  {tour.includes?.map((i: string) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="text-stone-400">✕</span> Not Included
                </h3>
                <ul className="space-y-2">
                  {tour.excludes?.map((i: string) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
                      <span className="text-stone-400 mt-0.5 shrink-0">✕</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <h3 className="text-xl font-bold text-stone-900">What travelers say</h3>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g680706-d32761497-Reviews-Altai_Mount_Travel-Olgiy_Bayan_Olgii_Province.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-400 hover:text-amber-600 underline underline-offset-2 ml-1"
                >
                  View all on TripAdvisor
                </a>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="bg-stone-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed flex-1">"{t.text}"</p>
                    <div>
                      <div className="text-xs font-semibold text-stone-800">{t.name}</div>
                      <div className="text-xs text-stone-400">{t.country}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price tiers */}
            <PriceSelector tiers={tour.priceTiers} />

          </article>

          <BookingSidebar price={tour.startingFromUsd} tourTitle={tour.title} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (tours as { slug: string }[]).map((t) => ({ params: { slug: t.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const tour = (tours as any[]).find((t) => t.slug === slug) || null;
  if (!tour) return { notFound: true };
  return { props: { tour } };
};
