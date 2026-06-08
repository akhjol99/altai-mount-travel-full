import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroHome from "@/components/HeroHome";
import TourCard from "@/components/TourCard";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { fetchAltaiNow, type AltaiNowData } from "@/components/AltaiNow";
import { tours } from "@/data/tours";
import Link from "next/link";
import Head from "next/head";
import type { GetStaticProps } from "next";
import { AlertCircle } from "lucide-react";

type HomeProps = { altaiNow: AltaiNowData };

export default function Home({ altaiNow }: HomeProps) {
  return (
    <>
      <Head>
        <title>Altai Mount Travel | Western Mongolia Tours & Golden Eagle Festival</title>

        <meta
          name="description"
          content="Small-group tours to Western Mongolia with local guides. Trek the Altai Mountains, attend the Golden Eagle Festival in Bayan-Ölgii, stay with Kazakh nomads, and climb Khuiten Peak. Operating since 2019."
        />

        <link rel="canonical" href="https://www.altaimount.com/" />

        <meta property="og:url" content="https://www.altaimount.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Altai Mount Travel" />
        <meta
          property="og:description"
          content="Western Mongolia tours, Altai trekking, Golden Eagle Festival trips, and eagle hunter homestays."
        />
        <meta property="og:image" content="https://www.altaimount.com/images/5bogd.jpg" />
        <meta name="twitter:title" content="Altai Mount Travel" />
        <meta name="twitter:description" content="Western Mongolia tours, Altai trekking, Golden Eagle Festival trips, and eagle hunter homestays." />
        <meta name="twitter:image" content="https://www.altaimount.com/images/5bogd.jpg" />

        {/* Optional but helpful */}
        <meta name="robots" content="index,follow" />
      </Head>
    
      <div className="min-h-screen bg-white text-gray-900">
        {/* Urgency banner */}
        <div className="bg-amber-500 text-amber-950 text-center text-sm font-semibold py-2.5 px-4 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>
            Golden Eagle Festival 2026 (Oct 3–4) — limited spots available.{" "}
            <Link href="/tours/golden-eagle-festival" className="underline underline-offset-2 hover:text-amber-900">
              Book now →
            </Link>
          </span>
        </div>
        <Navbar />
        <HeroHome altaiNow={altaiNow} />
        <WhyUs />

        {/* Social proof strip */}
        <section className="bg-stone-900 text-white py-8">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "300+", label: "Travelers served" },
                { value: "5★", label: "TripAdvisor rating" },
                { value: "Since 2019", label: "Operating locally" },
                { value: "7 tours", label: "Across Western Mongolia" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-amber-400">{s.value}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-4">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold">Featured tours</h2>
            <p className="text-gray-600 mt-1">
              Signature experiences in Bayan-Ölgii &amp; the Altai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours.slice(0, 3).map((t) => (
              <TourCard
                key={t.id}
                t={{
                  id: t.id,
                  slug: t.slug,
                  title: t.title,
                  summary: t.summary,
                  duration: `${t.durationDays} days`,
                  difficulty: t.difficulty,
                  price: t.startingFromUsd,
                  image: t.heroImage,
                  highlights: t.highlights,
                  season: t.season,
                }}
              />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/tours" className="btn-ghost">
              View all tours
            </Link>
          </div>
        </section>

<Testimonials />
        <CTA />
        <Footer />
      </div>
      </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const altaiNow = await fetchAltaiNow();
  return {
    props: { altaiNow },
    // Refresh weather/sunrise data every 30 minutes via ISR.
    revalidate: 1800,
  };
};