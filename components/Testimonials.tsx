export default function Testimonials(){
  const items = [
    { n: "Maya · USA", q: "The eagle festival access was unreal—our guide knew every hunter by name.", r: 5 },
    { n: "Sam · UK", q: "Camping under the Milky Way at Khoton Lake was a lifetime memory.", r: 5 },
    { n: "Aida · KZ", q: "Smooth logistics from Ulaanbaatar to Ölgii—felt safe and welcomed.", r: 5 },
  ];
  return (
    <section className="bg-gray-50">
      <div className="container py-12">
        <h2 className="text-3xl font-semibold">Guest stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {items.map(i=> (
            <figure key={i.n} className="card p-6">
              <div className="flex gap-1 text-yellow-500" aria-label={`${i.r} stars`}>
                {"★".repeat(i.r)}
              </div>
              <blockquote className="mt-3 text-gray-700">“{i.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">— {i.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
