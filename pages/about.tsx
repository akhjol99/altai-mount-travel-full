import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Mountain, Compass, Users, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Altai Mount Travel</title>
        <meta
          name="description"
          content="Altai Mount Travel is a locally owned travel company based in Bayan-Ölgii, creating flexible, caring and authentic journeys in Western Mongolia."
        />
      </Head>

      <Navbar />

      <main className="bg-gray-50 pb-16">
        {/* Top hero section */}
        <section className="pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-sky-50 via-gray-50 to-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-700 mb-3">
              About Altai Mount Travel
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Local Guides. Wild Landscapes. <br className="hidden md:block" />
              Carefully Planned Journeys.
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Altai Mount Travel is a locally owned travel company based in
              Bayan-Ölgii, Western Mongolia. We design flexible, small–group
              trips that connect you with the mountains, lakes, and nomadic
              families of the Mongolian Altai.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Our Story
              </h2>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                Altai Mount Travel was born from a simple idea: to share the
                wild beauty of the Altai Mountains with travelers in an honest,
                flexible and caring way. We are from Bayan-Ölgii, and this
                region is not just our workplace – it is our home.
              </p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                Over the past five years, we have hosted guests from many
                countries on festival trips, trekking expeditions, family
                journeys, cultural stays with nomadic families and Golden Eagle
                experiences. Every trip is planned by us personally, with
                attention to pace, comfort and your own travel style.
              </p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                We keep our groups small, our prices flexible and our approach
                personal. You will not just “see” Western Mongolia – you will
                get to know it.
              </p>
            </div>

            <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/bogd.jpg" // <- put a nice landscape / team image here
                alt="Altai Mountains near Bayan-Ölgii"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values / Why Us section */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              What We Care About
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] mb-8 max-w-3xl">
              When you travel with us, you are not just booking a tour. You are
              trusting us with your time, comfort and safety in a remote
              region. These are the things we focus on every day:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 mb-3">
                  <Mountain className="w-5 h-5 text-sky-700" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">
                  Local Expertise
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We are based in Bayan-Ölgii and work directly with local
                  guides, drivers, horsemen and nomadic families in the Altai.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 mb-3">
                  <Compass className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">
                  Flexible Planning
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We do not force fixed dates or rigid programs. We shape the
                  route and schedule around your time, interests and pace.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 mb-3">
                  <Users className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">
                  Small Groups
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Smaller groups mean more flexibility, safer travel and more
                  real contact with local people and nature.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-3">
                  <HeartHandshake className="w-5 h-5 text-rose-700" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">
                  Genuine Care
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We answer your questions honestly, stay in touch before and
                  during the trip, and do our best so you leave happy and
                  satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How we work / trip process */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 md:px-6 border border-dashed border-gray-200 rounded-3xl bg-white/80 shadow-sm">
            <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 md:gap-10 items-center p-6 md:p-8">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  How We Plan Your Trip
                </h2>
                <p className="text-gray-600 text-sm md:text-[15px] mb-5">
                  Every journey starts with a simple conversation. Tell us when
                  you want to travel, what you are interested in and how active
                  you want the trip to be, and we will build a plan around you.
                </p>

                <ol className="space-y-3 text-sm md:text-[15px] text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">
                      1. Send us an enquiry
                    </span>{" "}
                    – Use the enquiry form or email us directly with your rough
                    dates and ideas.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">
                      2. We suggest a flexible itinerary
                    </span>{" "}
                    – We propose a route, length and activities, and adjust it
                    together until it feels right.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">
                      3. Confirm with a deposit
                    </span>{" "}
                    – A deposit secures your booking; the rest is paid closer to
                    departure.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">
                      4. Travel with peace of mind
                    </span>{" "}
                    – We meet you in Bayan-Ölgii and take care of logistics,
                    so you can focus on enjoying the journey.
                  </li>
                </ol>
              </div>

              <div className="space-y-4 text-sm md:text-[15px] text-gray-700">
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Sustainable, respectful travel
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    We collaborate directly with local families, drivers and
                    guides. Your trip supports people who live in the region and
                    helps keep eagle hunting and nomadic traditions alive.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Clear communication
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    You will always know what is included, what to expect from
                    the roads and weather, and how to prepare. No rushed
                    surprises – just straightforward information and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-4">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-gray-900 text-white rounded-3xl px-6 py-7 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-1">
                  Ready to plan your journey?
                </h2>
                <p className="text-xs md:text-sm text-white/80 max-w-md">
                  Tell us your preferred dates and ideas, and we will propose a
                  flexible plan for your trip in the Mongolian Altai.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 text-sm font-medium px-5 py-2.5 shadow-sm hover:bg-gray-100 transition"
                >
                  Enquire Now
                </a>
                <a
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 text-sm font-medium px-5 py-2.5 hover:bg-white/10 transition"
                >
                  View Our Tours
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}