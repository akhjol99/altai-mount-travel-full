import type { GetServerSideProps } from "next";
import { tours } from "@/data/tours";
import { POSTS } from "@/data/blog";

const SITE = "https://www.altaimount.com";

function urlEntry(loc: string, lastmod?: string, priority = "0.7", changefreq = "weekly") {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>
    <loc>${loc}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = [
    urlEntry(`${SITE}/`, today, "1.0", "weekly"),
    urlEntry(`${SITE}/tours`, today, "0.9", "weekly"),
    urlEntry(`${SITE}/blog`, today, "0.8", "weekly"),
    urlEntry(`${SITE}/about`, today, "0.6", "monthly"),
    urlEntry(`${SITE}/contact`, today, "0.7", "monthly"),
    urlEntry(`${SITE}/tailor-made`, today, "0.8", "monthly"),
    urlEntry(`${SITE}/golden-eagle-festival-2026`, today, "0.9", "weekly"),
    urlEntry(`${SITE}/faq`, today, "0.5", "monthly"),
    urlEntry(`${SITE}/legal/privacy`, today, "0.3", "yearly"),
    urlEntry(`${SITE}/legal/terms`, today, "0.3", "yearly"),
    urlEntry(`${SITE}/legal/cancellation`, today, "0.3", "yearly"),
  ];

  const tourUrls = (tours as { slug: string }[]).map((t) =>
    urlEntry(`${SITE}/tours/${t.slug}`, today, "0.9", "weekly")
  );

  const blogUrls = POSTS.map((p) =>
    urlEntry(`${SITE}/blog/${p.slug}`, p.date || today, "0.7", "monthly")
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...tourUrls, ...blogUrls].join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemap();
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();
  return { props: {} };
};

// Required for Next.js Pages Router — never actually rendered.
export default function Sitemap() {
  return null;
}
