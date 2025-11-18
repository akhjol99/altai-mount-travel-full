import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ(){
  const items = [
    { q: "Best time to visit?", a: "The best time to visit Mongolia is between May to October. During this time, you will be able to travel to the most beautiful places and can participate in different traditional festivals. In May and October, the weather is dry and a bit windy. July and August, tend to be the wettest months but still depend on the climate of that year. June and September are quite similar, warm and dry." },
    { q: "How do I get to Ölgii (ULG)?", a: "There are 2 airlines that has domestic flights within Mongolia. They are Hunnu air and Aeromongolia. www.hunnuair.com and www.aeromongolia.mn Aeromongolia has scheduled flight to following destinations:UB-Ulgii 4 times in a week, UB-Khovd 5 times in a week. Hunnu air has only charter flights.Aeromongolia's website it not working for direct booking or checking flights. so the option is contact us to get booked your flight tickets.For domestic airtickets for eagle festival, You have to get booked via tour operator/agent. Altai Mount is specialized on this." },
    { q: "Accommodation on trek?", a: "A mix of gers (yurts), tents, and guesthouses depending on the route and season." },
    { q: "Dietary needs?", a: "We can cater for vegetarians and most dietary restrictions—please advise in advance." },
    { q: "Permits & fees?", a: "We arrange all park permits and festival tickets as part of your tour." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="container py-12 max-w-3xl">
        <h1 className="text-3xl font-semibold">FAQ</h1>
        <div className="mt-6 divide-y">
          {items.map((it,i)=>(
            <details key={i} className="py-3">
              <summary className="cursor-pointer font-medium">{it.q}</summary>
              <p className="mt-2 text-gray-700">{it.a}</p>
            </details>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
