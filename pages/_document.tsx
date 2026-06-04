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
  sameAs: [
    "https://www.facebook.com/profile.php?id=61570342360210",
    "https://www.tripadvisor.com/Attraction_Review-g680706-d32761497-Reviews-Altai_Mount_Travel-Olgiy_Bayan_Olgii_Province.html",
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

        {/* Site-wide social defaults — individual pages can override og:title / og:image */}
        <meta property="og:site_name" content="Altai Mount Travel" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@altaimount" />

        {/* Organization / TravelAgency JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID in your environment variables */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}