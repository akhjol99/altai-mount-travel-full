import { useEffect, useState } from "react";
export type FilterState = { duration: string; difficulty: string; maxPrice?: number; season: string; tags: string[]; sort: string };

export default function TourFilters({ onChange, availableTags = ['Festival','Trekking','Cultural','Horse','Glacier'] }:{ onChange:(f:FilterState)=>void; availableTags?:string[]; }){
  const [f, setF] = useState<FilterState>({ duration:'all', difficulty:'', maxPrice: undefined, season:'', tags:[], sort:'popular' });
  useEffect(()=>{ onChange(f); }, [f]);
  const toggleTag = (t:string)=> setF(s=> ({...s, tags: s.tags.includes(t)? s.tags.filter(x=>x!==t) : [...s.tags, t]}));
  return (
    <aside className="card p-4 h-fit">
      <div className="font-semibold mb-3">Filter</div>

      <label className="text-sm text-gray-700">Duration</label>
      <select value={f.duration} onChange={e=>setF({...f, duration:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 mb-3">
        <option value="all">Any</option>
        <option value="3-5">3–5 days</option>
        <option value="6-8">6–8 days</option>
        <option value="9-12">9–12 days</option>
      </select>

      <label className="text-sm text-gray-700">Difficulty</label>
      <select value={f.difficulty} onChange={e=>setF({...f, difficulty:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 mb-3">
        <option value="">Any</option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Challenging">Challenging</option>
      </select>

      <label className="text-sm text-gray-700">Max Price (USD)</label>
      <input type="number" value={f.maxPrice ?? ''} onChange={e=>setF({...f, maxPrice: e.target.value? Number(e.target.value) : undefined})} placeholder="e.g. 1500" className="mt-1 w-full rounded-xl border px-3 py-2 mb-3" />

      <label className="text-sm text-gray-700">Season</label>
      <select value={f.season} onChange={e=>setF({...f, season:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 mb-3">
        <option value="">Any</option>
        {['May','Jun','Jul','Aug','Sep','Oct'].map(m=> <option key={m} value={m}>{m}</option>)}
      </select>

      <label className="text-sm text-gray-700">Tags</label>
      <div className="flex flex-wrap gap-2 my-2">
        {availableTags.map(t=> (
          <button key={t} onClick={()=>toggleTag(t)} className={`px-3 py-1 rounded-full border ${f.tags.includes(t)? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 hover:bg-gray-50'}`}>
            {t}
          </button>
        ))}
      </div>

      <label className="text-sm text-gray-700">Sort</label>
      <select value={f.sort} onChange={e=>setF({...f, sort:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 mb-3">
        <option value="popular">Popularity</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="duration-asc">Duration: Short → Long</option>
      </select>

      <button onClick={()=>setF({ duration:'all', difficulty:'', maxPrice:undefined, season:'', tags:[], sort:'popular' })} className="w-full rounded-xl border px-3 py-2 hover:bg-gray-50">Clear filters</button>
    </aside>
  );
}
