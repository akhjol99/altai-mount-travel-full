import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingSidebar from "@/components/BookingSidebar";
import { tours } from "@/data/tours";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMemo, useState } from "react";
import ImageGallery from "@/components/ImageGallery";


function Quick({ facts }:{ facts: Record<string,string|number|undefined> }){
  const entries = Object.entries(facts).filter(([,v])=> v!==undefined && v!=='');
  if(!entries.length) return null;
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
      {entries.map(([k,v])=>(
        <div key={k} className="card p-3">
          <div className="text-xs uppercase tracking-wide text-gray-500">{k}</div>
          <div className="text-sm font-semibold">{String(v)}</div>
        </div>
      ))}
    </section>
  );
}

function PriceSelector({ tiers }:{ tiers?: {minGroup:number; maxGroup:number; priceUsd:number}[] }){
  const [size, setSize] = useState(2);
  const price = useMemo(()=>{
    if(!tiers?.length) return undefined;
    const tier = tiers.find(t=> size>=t.minGroup && size<=t.maxGroup) || tiers[tiers.length-1];
    return tier?.priceUsd;
  }, [size, tiers]);
  if(!tiers?.length) return null;
  return (
    <div className="card p-4 mt-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm text-gray-600">Group size</div>
          <input type="range" min={tiers[0].minGroup} max={tiers[tiers.length-1].maxGroup} value={size} onChange={(e)=>setSize(Number(e.target.value))} className="w-56"/>
          <div className="text-sm text-gray-700 mt-1">{size} traveler(s)</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Price per person</div>
          <div className="text-2xl font-bold">${price?.toLocaleString('en-US')} USD</div>
          <div className="text-xs text-gray-500 mt-1">Prices drop as your group gets larger.</div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-[400px] text-sm">
          <thead><tr className="text-left text-gray-600"><th className="py-2 pr-4">Group</th><th className="py-2">Price pp</th></tr></thead>
          <tbody>
            {tiers.map((t,i)=>(<tr key={i} className="border-t"><td className="py-2 pr-4">{t.minGroup===t.maxGroup ? t.minGroup : `${t.minGroup}-${t.maxGroup}`}</td><td className="py-2">${t.priceUsd.toLocaleString('en-US')} USD</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TourDetail(){
  const { query } = useRouter();
  const tour:any = tours.find((t:any)=> t.slug === query.slug);

  if(!tour){
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container py-16"><p>Tour not found.</p><Link className="btn-ghost mt-4 inline-block" href="/tours">Back to tours</Link></div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={tour.heroImage} alt={tour.title} className="w-full h-[50vh] object-cover object-center" />

      <section className="container py-6">
        <Breadcrumbs items={[{href:'/',label:'Home'},{href:'/tours',label:'Tours'},{label: tour.title}]} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <article>
            <h1 className="text-3xl font-semibold">{tour.title}</h1>
            <p className="text-gray-600 mt-2">{tour.summary}</p>
            <ImageGallery images={tour.images || []} />
            <Quick facts={{
              "Duration": `${tour.durationDays} days`,
              "Difficulty": tour.difficulty,
              "Best season": tour.quickFacts?.bestSeason ?? '',
              "Max altitude": tour.quickFacts?.maxAltitudeM ? `${tour.quickFacts.maxAltitudeM} m` : '',
              "Accommodation": tour.quickFacts?.accommodationMix ?? '',
              "Start/End": tour.quickFacts?.startEnd ?? '',
              "Airport": tour.quickFacts?.airport ?? ''
            }} />

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {tour.highlights.map((h:string)=> <li key={h}>{h}</li>)}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Itinerary</h3>
              <div className="divide-y">
                {tour.itinerary?.map((d:any)=> (
                  <details key={d.day} className="py-3">
                    <summary className="cursor-pointer font-medium">Day {d.day}: {d.title}</summary>
                    <div className="mt-2 text-gray-700">
                      <p>{d.summary}</p>
                      <div className="text-sm text-gray-500 mt-1">
                        {d.hours ? <>Hours: {d.hours} &nbsp;</> : null}
                        {d.distanceKm ? <>Distance: {d.distanceKm} km &nbsp;</> : null}
                        {d.accommodation ? <>• {d.accommodation} &nbsp;</> : null}
                        {d.meals?.length ? <>• Meals: {d.meals.join(',')}</> : null}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Included</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {tour.includes?.map((i:string)=> <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Not Included</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {tour.excludes?.map((i:string)=> <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>

            <PriceSelector tiers={tour.priceTiers} />
          </article>

          <BookingSidebar price={tour.startingFromUsd} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
