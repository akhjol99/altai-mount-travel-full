import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mountain, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Head>
        <title>Page Not Found | Altai Mount Travel</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />

      <div className="relative h-64 md:h-80 mt-16 md:mt-0 overflow-hidden">
        <Image src="/images/baga_turgen_guur.png" alt="Altai Mountains" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10 text-center px-4">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">Lost in the mountains?</span>
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg">404</h1>
          <p className="text-white/75 mt-2 text-base md:text-lg">This page doesn't exist — but the Altai does.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Page not found</h2>
        <p className="text-stone-500 mb-8 leading-relaxed">
          The page you're looking for may have moved or doesn't exist. Let us help you find what you're looking for.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Browse Tours", href: "/tours", icon: <Mountain className="w-5 h-5" /> },
            { label: "Read the Blog", href: "/blog", icon: <Compass className="w-5 h-5" /> },
            { label: "Contact Us", href: "/contact", icon: <ArrowLeft className="w-5 h-5 rotate-180" /> },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-2 bg-white border border-stone-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-stone-800">{item.label}</span>
            </Link>
          ))}
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to homepage
        </Link>
      </div>

      <Footer />
    </div>
  );
}
