import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroHome from "@/components/HeroHome";
import TourCard from "@/components/TourCard";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { tours } from "@/data/tours";
import Link from "next/link";

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroHome />
      <WhyUs />
      <section className="container pb-4">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Featured tours</h2>
          <p className="text-gray-600 mt-1">Signature experiences in Bayan-Ölgii & the Altai.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.slice(0,3).map((t)=> (
            <TourCard key={t.id} t={{ id:t.id, slug:t.slug, title:t.title, summary:t.summary, duration:`${t.durationDays} days`, difficulty:t.difficulty, price:t.startingFromUsd, image:t.heroImage, highlights:t.highlights }} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/tours" className="btn-ghost">View all tours</Link>
        </div>
      </section>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
