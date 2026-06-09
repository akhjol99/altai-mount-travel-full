import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Clock, ArrowLeft } from "lucide-react";
import BackToTop from "@/components/BackToTop";
import { POSTS, type BlogPost } from "@/data/blog";
import type { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTourCTA from "@/components/BlogTourCTA";
import BlogSidebar from "@/components/BlogSidebar";

const SITE = "https://www.altaimount.com";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function buildArticleSchema(post: BlogPost, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [`${SITE}${post.image}`] : undefined,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: "Altai Mount Travel",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Altai Mount Travel",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo-112.png`,
      },
    },
  };
}


type Props = { post: BlogPost | null };

export default function BlogPostPage({ post }: Props) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <p>Post not found.</p>
            <Link className="btn-ghost mt-4 inline-block" href="/blog">
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const canonical = `${SITE}/blog/${post.slug}`;
  const ogImage = post.image ? `${SITE}${post.image}` : `${SITE}/logo-112.png`;
  const metaTitle = `${post.title} | Altai Mount Travel`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(post, canonical)) }}
        />
      </Head>

      <BackToTop />
      <Navbar />
      <main className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-brand-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main content */}
            <div>
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="relative h-80 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-wide text-brand-700 mb-1">
                    {post.category}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <div
                    className="prose prose-sm md:prose-base max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </article>

              {/* Next-step CTA: post-specific tour recommendation */}
              <BlogTourCTA postSlug={post.slug} />
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: POSTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = POSTS.find((p) => p.slug === slug) || null;
  if (!post) return { notFound: true };
  return { props: { post } };
};
