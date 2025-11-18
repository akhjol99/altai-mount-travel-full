import Link from "next/link";
export default function CTA(){
  return (
    <section className="bg-brand-50 py-10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">Ready to plan your Altai adventure?</div>
          <div className="text-gray-700">Tell us your dates & interests—we’ll craft a route that fits.</div>
        </div>
        <Link href="/contact" className="btn-primary">Start Planning</Link>
      </div>
    </section>
  );
}
