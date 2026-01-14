import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BRAND = "Altai Mount Travel";
const SITE_URL = "https://www.altaimount.com";
const WHATSAPP = "+97685428887";
const EMAIL = "altaimounttravel@gmail.com";

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akhjol Taukye",
    jobTitle: "Owner / Tour Manager",
    worksFor: {
      "@type": "Organization",
      name: BRAND,
      url: SITE_URL,
    },
    url: `${"www.altaimount.com"}/about`,
    image: `${"www.altaimount.com"}/images/akhjol.jpeg`,
  };

  return (
    <>
      <Head>
        <title>About Us | {BRAND}</title>
        <meta
          name="description"
          content="Meet the local team behind Altai Mount Travel in Ölgii, Bayan-Ölgii. Authentic Western Mongolia tours, Altai trekking, and Golden Eagle Festival journeys."
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />

        {/* Optional: Owner/Manager Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <main className="min-h-screen bg-stone-50 text-stone-900">
        {/* HERO */}
        <section className="relative border-b border-stone-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_15%_0%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(800px_350px_at_85%_10%,rgba(250,204,21,0.10),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-4 sm:pt-12 sm:pb-6">
            <p className="text-xs tracking-[0.25em] uppercase text-stone-600">
              Based in Ölgii, Bayan-Ölgii • Western Mongolia specialists
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Travel with locals,{" "}
              <span className="text-emerald-700">feel the Altai</span>.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">
              {BRAND} is a locally based team offering small-group and private journeys into the
              Altai Mountains — trekking, horse trekking, and the Golden Eagle Festival — with real
              cultural connection and careful planning.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition"
              >
                WhatsApp us
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 transition"
              >
                Email us
              </a>

              <Link
                href="/tours"
                className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 transition"
              >
                View tours
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:py-4">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <Card>
                <h2 className="text-xl font-semibold">Our story</h2>
                <p className="mt-3 leading-relaxed text-stone-700">
                  We grew up in Western Mongolia among nomadic herders, wide valleys, and Kazakh eagle
                  hunters. This is our home — and guiding travelers is our way to share the region
                  with respect and honesty.
                </p>
                <p className="mt-3 leading-relaxed text-stone-700">
                  We don’t aim to show you everything. We aim to show you what matters: high mountain
                  silence, warm family hospitality, and traditions that are still alive.
                </p>
              </Card>

              <div className="h-5" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <h3 className="text-base font-semibold">Authentic experiences</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">
                    Homestays with local families, eagle hunters, and real daily life — not staged
                    performances.
                  </p>
                </Card>

                <Card>
                  <h3 className="text-base font-semibold">Safety & comfort</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">
                    Reliable transport, smart pacing, and guides who know the terrain.
                  </p>
                </Card>

                <Card>
                  <h3 className="text-base font-semibold">Responsible tourism</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">
                    Your trip supports local drivers, hosts, and families in the region.
                  </p>
                </Card>

                <Card>
                  <h3 className="text-base font-semibold">Tailored itineraries</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">
                    Private or small-group tours shaped around your dates, interests, and fitness.
                  </p>
                </Card>
              </div>

              <div className="h-5" />

              <Card>
                <h2 className="text-xl font-semibold">How your trip comes together</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-stone-700">
                  <li>
                    <span className="font-semibold text-stone-900">Tell us your dates</span> and what
                    you dream of (trekking, festival, culture).
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">We propose a route</span> with
                    realistic driving times and good pacing.
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">You confirm</span> and we reserve
                    hosts, drivers, and logistics.
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">We meet you</span> and guide you
                    through the Altai with flexibility and care.
                  </li>
                </ol>
              </Card>

              <div className="h-5" />

              <Card>
                <h2 className="text-xl font-semibold">Quick facts</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MiniStat label="Base" value="Ölgii, Bayan-Ölgii" />
                  <MiniStat label="Focus" value="Altai & Golden Eagle Festival" />
                  <MiniStat label="Style" value="Small groups / Private tours" />
                  <MiniStat label="Support" value="Fast replies (usually <24h)" />
                </div>
              </Card>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-6">
                <Card className="overflow-hidden p-0">
                  <div className="p-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-stone-600">
                      Meet your local host
                    </p>
                    <h3 className="mt-3 text-lg font-semibold">Akhjol Taukye</h3>
                    <p className="mt-1 text-sm text-stone-700">
                      Tour Manager • {BRAND}
                    </p>
                  </div>

                  <div className="relative aspect-[4/5] w-full border-y border-stone-200 bg-stone-100">
                    <Image
                      src="/images/akhjol.jpeg"
                      alt="Owner and tour manager of Altai Mount Travel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="p-6">
                    <blockquote className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
                      “I’ll help you choose the best season, the right route, and the real places
                      that make Western Mongolia unforgettable.”
                    </blockquote>

                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={whatsappLink}
                        className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-500 transition"
                      >
                        Message on WhatsApp
                      </a>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="w-full rounded-2xl border border-stone-300 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-800 hover:bg-stone-100 transition"
                      >
                        Email us
                      </a>
                    </div>
                  </div>
                </Card>

            
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER STRIP */}
        <section className="border-t border-stone-200 bg-stone-100 py-6">
          <div className="mx-auto max-w-6xl px-4 text-sm text-stone-600">
            <span className="font-semibold text-stone-900">{BRAND}</span> • Ölgii, Bayan-Ölgii,
          </div>
        </section>
      </main>
    </>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-stone-200 bg-white p-6 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{label}</div>
      <div className="mt-2 text-sm font-semibold text-stone-900">{value}</div>
    </div>
  );
}