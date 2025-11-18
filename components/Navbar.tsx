'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      
      {/* ================= TOP BAR (larger) ================= */}
      <div className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">

          {/* Left text */}
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
              ALT
            </span>
            <span className="opacity-90 text-[14px] font-medium">
              Authentic expeditions in the Western Mongolia 
            </span>
          </div>

          {/* Right contact section */}
          <div className="flex flex-wrap items-center gap-5 md:gap-6 text-[14px]">

            {/* WhatsApp */}
            <a
              href="https://wa.me/97685428887"
              target="_blank"
              className="flex items-center gap-2 hover:text-white"
            >
              <MessageCircle className="h-5 w-5 text-green-300" />
              +976 8542 8887
            </a>

            {/* Email */}
            <a
              href="mailto:altaimounttravel@gmail.com"
              className="hidden sm:flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-5 w-5 text-white" />
              altaimounttravel@gmail.com
            </a>

            {/* Tripadvisor */}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g680706-d32761497-Reviews-Altai_Mount_Travel-Olgiy_Bayan_Olgii_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-brand-800 hover:bg-brand-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#34E0A1"
                  d="M12 4c3.86 0 7.23 2.19 8.82 5.42L24 7l-3.26 3.68A9.996 9.996 0 0 1 12 22a9.996 9.996 0 0 1-8.74-11.32L0 7l3.18 2.42C4.77 6.19 8.14 4 12 4m4 12a3 3 0 1 0-.001-6.001A3 3 0 0 0 16 16m-8 0a3 3 0 1 0-.001-6.001A3 3 0 0 0 8 16"
                />
              </svg>
              Tripadvisor
            </a>

          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-white/95 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
              <Image src="/logo.svg" alt="Altai Mount Travel" width={26} height={26} />
            </div>
            <span className="hidden sm:inline text-[16px] font-semibold text-gray-900">
              Altai Mount Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 hover:text-brand-800 transition-colors  
                           after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-brand-700
                           hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <Link
            href="/contact"
            className="hidden md:inline-block rounded-full bg-brand-700 px-5 py-2 text-[14px] font-semibold text-white hover:bg-brand-800"
          >
            ENQUIRE NOW
          </Link>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 border rounded-lg"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t bg-white/98">
            <div className="mx-auto max-w-6xl px-6 py-4 space-y-4">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[15px] text-gray-800 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              ))}

              <div className="h-px bg-gray-200" />

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-700 py-2 text-center text-[15px] font-semibold text-white hover:bg-brand-800"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}