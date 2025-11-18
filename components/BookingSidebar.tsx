import Link from "next/link";
export default function BookingSidebar({ price }:{ price:number }){
  return (
    <aside className="card p-4 sticky top-6">
      <div className="text-sm text-gray-500">From</div>
      <div className="text-2xl font-bold">${price} USD</div>
      <ul className="mt-4 text-gray-700 space-y-1">
        <li>• Small groups or private</li>
        <li>• All permits & logistics</li>
        <li>• English-speaking guide</li>
      </ul>
      <Link href="/contact" className="btn-primary mt-4 w-full text-center">Plan / Book</Link>
      <div className="text-xs text-gray-500 mt-2">Tell us your dates & interests.</div>
    </aside>
  )
}
