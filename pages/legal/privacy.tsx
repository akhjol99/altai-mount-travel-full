import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const SITE = "https://www.altaimount.com";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy | Altai Mount Travel</title>
        <meta
          name="description"
          content="How Altai Mount Travel collects, uses, and protects your personal information when you book a tour or contact us."
        />
        <link rel="canonical" href={`${SITE}/legal/privacy`} />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />

      <main className="container py-10 md:py-14 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
          <p>
            Altai Mount Travel (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates{" "}
            <a href={SITE}>www.altaimount.com</a> and offers guided tours in Western
            Mongolia. This page explains what personal information we collect, how
            we use it, and the choices you have. If you have questions, email{" "}
            <a href="mailto:altaimounttravel@gmail.com">altaimounttravel@gmail.com</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Information you give us:</strong> name, email, phone number,
              preferred tour, travel dates, group size, and any message details
              you submit through our contact form.
            </li>
            <li>
              <strong>Booking information:</strong> passport details, dietary
              requirements, emergency contacts, and any medical information you
              share to help us plan a safe trip. We only request this once you
              decide to book.
            </li>
            <li>
              <strong>Automatic information:</strong> standard server logs (IP
              address, browser type, pages viewed) used to keep the site secure
              and understand traffic patterns.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiries and prepare tour proposals.</li>
            <li>To organize your trip with our guides, drivers, and partner accommodations.</li>
            <li>To process deposits and payments through our bank.</li>
            <li>To send occasional travel updates if you opted in to our newsletter.</li>
            <li>To comply with Mongolian law and respond to lawful requests from authorities.</li>
          </ul>

          <h2>Who we share it with</h2>
          <p>
            We share information only with parties that need it to deliver your
            tour: local guides, drivers, accommodation providers, domestic
            airlines, and our payment provider. We do not sell your personal
            information. We may share information if required by law.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry data is kept for up to 24 months. Booking and payment records
            are kept for at least 7 years to meet accounting and tax requirements.
            You can request earlier deletion of your enquiry data at any time.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct, or delete the personal information
            we hold about you, and you can withdraw consent for marketing emails
            at any time. Contact{" "}
            <a href="mailto:altaimounttravel@gmail.com">altaimounttravel@gmail.com</a>{" "}
            and we will respond within 30 days.
          </p>

          <h2>Cookies</h2>
          <p>
            Our site uses essential cookies needed to keep the site working. We
            do not use advertising cookies. Embedded content (such as the Google
            Maps view in our footer) may set its own cookies governed by Google&apos;s
            privacy policy.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy as our services change. The &ldquo;Last
            updated&rdquo; date above will reflect the latest version.
          </p>

          <p className="text-sm text-gray-500">
            <em>
              This page is provided as a general template. Please review with a
              qualified lawyer to confirm it meets the rules that apply to your
              business and your customers&apos; jurisdictions.
            </em>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
