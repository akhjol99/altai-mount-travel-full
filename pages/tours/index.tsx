import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import TourFilters, { FilterState } from "@/components/TourFilters";
import { tours } from "@/data/tours";
import { useMemo, useState } from "react";

export default function ToursPage(){
  const [filters, setFilters] = useState<FilterState>({ duration:'all', difficulty:'', maxPrice: undefined, season:'', tags:[], sort:'popular' });

  const filtered = useMemo(()=>{
    const arr = tours.filter((t:any)=>{
      const okDur = (()=>{
        if(filters.duration==='all') return true;
        const [a,b] = filters.duration.split('-').map(Number); return t.durationDays>=a && t.durationDays<=b;
      })();
      const okDiff = filters.difficulty ? t.difficulty===filters.difficulty : true;
      const okPrice = filters.maxPrice ? t.startingFromUsd <= (filters.maxPrice as number) : true;
      const okSeason = filters.season ? (t.season?.includes(filters.season)) : true;
      const okTags = filters.tags.length ? filters.tags.every(tag=> t.tags?.includes(tag)) : true;
      return okDur && okDiff && okPrice && okSeason && okTags;
    });
    switch(filters.sort){
      case 'price-asc': return arr.sort((a:any,b:any)=> a.startingFromUsd - b.startingFromUsd);
      case 'duration-asc': return arr.sort((a:any,b:any)=> a.durationDays - b.durationDays);
      default: return arr.sort((a:any,b:any)=> (b.popularity??0)-(a.popularity??0));
    }
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="container py-8">
        <h1 className="text-3xl font-semibold mb-6">Mongolia Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          <TourFilters onChange={setFilters} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t:any)=> <TourCard key={t.id} t={{ id:t.id, slug:t.slug, title:t.title, duration:`${t.durationDays} days`, difficulty:t.difficulty, price:t.startingFromUsd, image:t.heroImage, summary:t.summary, highlights:t.highlights }} />)}
            {filtered.length===0 && <div className="text-gray-600">No tours match these filters.</div>}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
