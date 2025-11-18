import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-brand-800 text-brand-50 mt-16 py-6">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold text-lg">Altai Mount Travel</div>
          <p className="text-brand-50/80 mt-2">Kazakh-owned operator in Bayan-Ölgii, crafting expeditions across the Mongolian Altai.</p>
          <p className="text-brand-50/80 mt-2">Khovd Gol 1-60, 5th District, Ölgii, Bayan-Ölgii, Mongolia</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Tours</div>
          <ul className="space-y-2 text-brand-50/90">
            <li><Link href="/tours/golden-eagle-festival" className="hover:text-white">Eagle Festival</Link></li>
            <li><Link href="/tours/altai-tavan-bogd-trek" className="hover:text-white">Altai Trekking</Link></li>
            <li><Link href="/tours/western-mongolia-cultural-explorer" className="hover:text-white">Cultural Explorer</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-brand-50/90">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Newsletter</div>
          <form className="flex gap-2">
            <input className="flex-1 rounded-xl px-3 py-2 text-black" placeholder="Your email" />
            <button className="btn-primary" type="button">Subscribe</button>
          </form>
          <p className="text-xs text-brand-50/70 mt-2">We send a few updates per season.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-2">
        <div className="container py-6 text-sm text-brand-50/70">© {new Date().getFullYear()} Altai Mount Travel. All rights reserved.</div>
      </div>
    </footer>
  )
}
