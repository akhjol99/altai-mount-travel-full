import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* SEO Title */}
        <title>
          Western Mongolia Tours &amp; Golden Eagle Festival | Altai Mount Travel
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Altai Mount Travel is a Kazakh-owned tour operator in Western Mongolia. We offer Altai Mountains trekking tours, Golden Eagle Festival trips, and authentic homestays with eagle hunters in Bayan-Ölgii."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://altaimount.com/" />

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