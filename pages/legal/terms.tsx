import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

const SITE = "https://www.altaimount.com";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Terms &amp; Conditions | Altai Mount Travel</title>
        <meta
          name="description"
          content="Booking terms, traveller responsibilities, liability, and other conditions that apply when you book a tour with Altai Mount Travel."
        />
        <link rel="canonical" href={`${SITE}/legal/terms`} />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />

      <main className="container py-10 md:py-14 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
          <p>
            These terms apply to all tours and services booked with Altai Mount
            Travel (&ldquo;we&rdquo;, &ldquo;us&rdquo;), based in Ölgii, Bayan-Ölgii Province,
            Mongolia. By paying a deposit you confirm that you have read,
            understood, and agreed to these terms.
          </p>

          <h2>1. Booking and confirmation</h2>
          <p>
            A booking is confirmed once we have received your deposit and
            emailed your confirmation. Until then, dates and prices are
            indicative and subject to availability.
          </p>

          <h2>2. Prices and payment</h2>
          <p>
            Tour prices are quoted in US dollars per person. The price depends on
            group size as shown on each tour page. A non-refundable deposit of
            USD 600 per person is due at booking. The balance is due before the
            tour starts; we will confirm the exact deadline in your booking
            confirmation. Bank transfer fees and currency conversion charges are
            the traveller&apos;s responsibility.
          </p>

          <h2>3. Cancellations and refunds</h2>
          <p>
            Our cancellation policy is summarized below and explained in full on
            our{" "}
            <Link href="/legal/cancellation">Cancellation Policy</Link> page.
          </p>
          <ul>
            <li>More than 2 months before departure: USD 200 retained.</li>
            <li>Between 1 and 2 months before departure: USD 500 retained.</li>
            <li>Less than 1 month before departure: USD 600 retained.</li>
          </ul>
          <p>
            Where possible, we encourage rebooking to a future date instead of
            cancellation.
          </p>

          <h2>4. Changes to your tour</h2>
          <p>
            Itineraries may change due to weather, road conditions, festival
            schedules, or other circumstances beyond our control. We will always
            offer the closest reasonable alternative. We are not responsible for
            additional costs caused by such changes (for example missed
            international flights).
          </p>

          <h2>5. Traveller responsibilities</h2>
          <p>
            You are responsible for valid travel documents, visas, vaccinations,
            and travel insurance. You must inform us at the time of booking of
            any medical condition, allergy, or dietary requirement that could
            affect your ability to take part in the tour. Travel insurance that
            covers medical evacuation in remote areas is mandatory for all
            trekking and mountaineering tours.
          </p>

          <h2>6. Conduct</h2>
          <p>
            We may end a tour for any traveller whose behaviour endangers
            themselves, other travellers, our staff, or local communities. No
            refund will be given in such cases.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            We act in good faith and take reasonable care to organize safe,
            high-quality tours. We are not liable for delays, injury, illness,
            loss, or damage caused by events outside our reasonable control,
            including but not limited to weather, natural disasters, transport
            disruption, illness, theft, or actions of third parties (airlines,
            hotels, suppliers). Our maximum liability for any claim is limited
            to the price you paid for the affected tour.
          </p>

          <h2>8. Photography and marketing</h2>
          <p>
            We may take photographs during the tour and use them on our website
            and social media. Tell your guide if you do not want to appear in
            promotional material and we will respect your wishes.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of Mongolia. Any dispute that
            cannot be resolved amicably will be settled by the competent courts
            in Ölgii, Bayan-Ölgii Province.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:altaimounttravel@gmail.com">altaimounttravel@gmail.com</a>.
          </p>

          <p className="text-sm text-gray-500">
            <em>
              This page is provided as a general template. Please have it
              reviewed by a qualified lawyer before relying on it as a binding
              contract with your customers.
            </em>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
