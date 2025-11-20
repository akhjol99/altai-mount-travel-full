'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/5bogd.jpg",
  "/images/hero.jpeg",
  "/images/mount.jpeg"
];

export default function HeroHome() {
  const [current, setCurrent] = useState(0);

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-16 md:mt-0 overflow-hidden h-[90vh]">

      {/* Background Images */}
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Altai Mountains"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight text-white 
             drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            Discover the Western Mongolia
        </h1>

   

        </div>
      </div>
    </section>
  );
}