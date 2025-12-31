import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* SEO Title */}
        <title>
        Western Mongolia Tours &amp; Golden Eagle Festival
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover the Altai Mountains, where you can experience Mongolia’s stunning landscapes along with its nomadic eagle-hunting culture and unique traditions."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.altaimount.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon192.png" />
        <meta property="og:url" content="https://www.altaimount.com/" />
        <meta property="og:type" content="website" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Altai Mount Travel",
              "url": "https://www.altaimount.com",
              "image": "https://www.altaimount.com/logo.svg",
              "description": "Tour operator offering Altai trekking tours, Golden Eagle Festival trips, and eagle hunter homestays.",
              "telephone": "+97685428887",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Khovd Gol 1-60, 5th District",
                "addressLocality": "Ölgii",
                "addressRegion": "Bayan-Ölgii",
                "addressCountry": "MN"
              },
              "areaServed": ["Western Mongolia", "Altai Mountains", "Bayan-Ölgii"]
            }
          `,
          }}
        />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}