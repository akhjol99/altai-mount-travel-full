import { Html, Head, Main, NextScript } from "next/document";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "TravelAgency"],
  "@id": "https://www.altaimount.com/#organization",
  name: "Altai Mount Travel",
  url: "https://www.altaimount.com/",
  logo: "https://www.altaimount.com/logo-512.png",
  image: "https://www.altaimount.com/logo-512.png",
  description:
    "Tour operator offering Altai trekking tours, Golden Eagle Festival trips, and eagle hunter homestays.",
  telephone: "+97685428887",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khovd Gol 1-60, 5th District",
    addressLocality: "Ölgii",
    addressRegion: "Bayan-Ölgii",
    addressCountry: "MN",
  },
  areaServed: ["Western Mongolia", "Altai Mountains", "Bayan-Ölgii"],
  // Optional but recommended (replace with your real pages)
  sameAs: [
    "https://www.facebook.com/YOURPAGE",
    "https://www.instagram.com/YOURPAGE"
  ],
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon192.png" />

        {/* Organization / TravelAgency JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}