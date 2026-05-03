import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

const SITE = "https://www.altaimount.com";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Cancellation Policy | Altai Mount Travel</title>
        <meta
          name="description"
          content="Cancellation, refund, and rebooking rules for tours booked with Altai Mount Travel in Western Mongolia."
        />
        <link rel="canonical" href={`${SITE}/legal/cancellation`} />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />

      <main className="container py-10 md:py-14 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Cancellation Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
          <p>
            We understand that plans can change. Our cancellation policy is
            designed to be simple and fair, and to cover the costs we commit to
            on your behalf when you book — guides, vehicles, camp equipment,
            festival tickets, and permits.
          </p>

          <h2>Cancellation by you</h2>
          <ul>
            <li>
              <strong>More than 2 months before departure:</strong> a USD 200
              cancellation fee will be retained per person. Any additional
              amount you have paid will be refunded.
            </li>
            <li>
              <strong>Between 1 and 2 months before departure:</strong> a USD
              500 cancellation fee will be retained per person. Any additional
              amount you have paid will be refunded.
            </li>
            <li>
              <strong>Less than 1 month before departure:</strong> a USD 600
              cancellation fee will be retained per person. Any additional
              amount you have paid will be refunded.
            </li>
          </ul>

          <h2>Rebooking instead of cancelling</h2>
          <p>
            If your plans change, contact us as early as possible. Where space
            allows, we will move your booking to a future date at no extra fee.
            For peak-season tours such as the Golden Eagle Festival, rebooking
            may not be possible because dates are fixed and bookings are full.
          </p>

          <h2>Cancellation by us</h2>
          <p>
            In rare cases we may need to cancel a tour due to insufficient
            sign-ups for a small group, or due to events outside our control
            (severe weather, road or border closure, public emergency). In that
            case you can choose between a full refund or rebooking to a future
            date at no extra cost.
          </p>

          <h2>Refunds and processing</h2>
          <p>
            Refunds are issued through the same channel used for the original
            payment. Bank transfer fees and currency conversion charges from
            your bank are deducted from the refund amount. Most refunds are
            processed within 14 business days.
          </p>

          <h2>Travel insurance</h2>
          <p>
            We strongly recommend comprehensive travel insurance that covers
            trip cancellation, medical care, and evacuation in remote areas.
            Many cancellations that fall outside our control (illness, missed
            international flights, family emergencies) are covered by good
            travel insurance — please review your policy carefully.
          </p>

          <h2>Questions</h2>
          <p>
            For anything not covered here, see our{" "}
            <Link href="/legal/terms">Terms &amp; Conditions</Link> or email{" "}
            <a href="mailto:altaimounttravel@gmail.com">altaimounttravel@gmail.com</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
