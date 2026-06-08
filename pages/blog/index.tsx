import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Clock, Tag } from "lucide-react";
import { POSTS } from "@/data/blog";

const SITE = "https://www.altaimount.com";



function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];
  const filteredPosts = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filteredPosts;
  const ogImage = POSTS[0]?.image ? `${SITE}${POSTS[0].image}` : `${SITE}/images/5bogd.jpg`;

  return (
    <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Blog | Altai Mount Travel — Western Mongolia Travel Stories & Tips</title>
      <meta
        name="description"
        content="Travel guides, planning tips, and stories from the Mongolian Altai — written by locals in Bayan-Ölgii. Eagle festival, trekking, packing lists, and more."
      />
      <link rel="canonical" href={`${SITE}/blog`} />
      <meta property="og:url" content={`${SITE}/blog`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Altai Mount Travel — Blog" />
      <meta
        property="og:description"
        content="Travel guides, planning tips, and stories from the Mongolian Altai — written by locals in Bayan-Ölgii."
      />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Altai Mount Travel — Blog" />
      <meta
        name="twitter:description"
        content="Travel guides, planning tips, and stories from the Mongolian Altai — written by locals in Bayan-Ölgii."
      />
      <meta name="twitter:image" content={ogImage} />
      <meta name="robots" content="index,follow" />
    </Head>
    <Navbar/>
    <main className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-700 mb-2">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Altai Travel Stories & Tips
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Ideas, inspiration, and practical advice for planning your journey
            to the Mongolian Altai – written by locals who live here.
          </p>
        </header>

        {/* Featured post */}
        {featured && (
          <section className="mb-10 md:mb-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-[1.4fr_1fr] gap-6 items-stretch"
              >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-xs mb-2">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-white/90 line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/80">
                    <span>{formatDate(featured.date)}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Tag className="w-4 h-4" />
                    <span>{featured.category}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-brand-800 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-[15px] mb-4">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featured.readTime}</span>
                  </div>
                  <span>{formatDate(featured.date)}</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Other posts */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <h2 className="text-lg font-semibold shrink-0">Latest articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    activeCategory === cat
                      ? "bg-brand-800 text-white border-brand-800"
                      : "bg-white text-stone-600 border-stone-200 hover:border-brand-700 hover:text-brand-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-brand-700 mb-1">
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-sm md:text-[15px] font-semibold mb-2 group-hover:text-brand-800">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-[11px] text-gray-500">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </div>
  );
}