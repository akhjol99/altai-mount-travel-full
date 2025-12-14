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
        <link rel="canonical" href="https://altaimount.com/" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon192.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Altai Mount Travel",
              "url": "https://altaimount.com",
              "image": "https://altaimount.com/logo.svg",
              "description": "Kazakh-owned tour operator offering Altai trekking tours, Golden Eagle Festival trips, and eagle hunter homestays.",
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