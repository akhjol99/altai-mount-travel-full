import Link from "next/link";
export default function Breadcrumbs({ items }:{ items: {href?:string;label:string}[] }){
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it,i)=>(
          <li key={i} className="flex items-center gap-2">
            {it.href ? <Link className="hover:underline" href={it.href}>{it.label}</Link> : <span className="text-gray-700">{it.label}</span>}
            {i < items.length-1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
