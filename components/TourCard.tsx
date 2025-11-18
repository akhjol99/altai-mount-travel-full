import Link from "next/link";
export type TourCardType = { id:string; slug:string; title:string; duration:string; difficulty:string; price:number; image:string; summary:string; highlights:string[] };
export default function TourCard({ t }: { t: TourCardType }){
  const href = `/tours/${t.slug}`;
  return (
    <div className="card overflow-hidden">
      <div className="relative h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 badge">{t.duration}</div>
        <div className="absolute top-3 right-3 badge bg-white text-gray-900">{t.difficulty}</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{t.title}</h3>
        <p className="text-gray-600">{t.summary}</p>
        <div className="flex flex-wrap gap-2 my-3">
          {t.highlights.slice(0,3).map(h => <span key={h} className="badge">{h}</span>)}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-gray-800 font-semibold">${t.price} USD</div>
          <Link href={href} className="btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}
