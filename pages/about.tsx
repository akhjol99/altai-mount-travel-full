import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="container py-12 max-w-3xl">
        <h1 className="text-3xl font-semibold">About Altai Mount Travel</h1>
        <p className="mt-4 text-gray-700">We are a Kazakh-owned, Ölgii-based team crafting culture-rich journeys across Western Mongolia. Our local guides connect you with nomad families and remote valleys few visitors see.</p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc ml-5">
          <li>Custom private itineraries</li>
          <li>End-to-end logistics: permits, drivers, cooks, gear</li>
          <li>Domestic flights & extensions via Ulaanbaatar</li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}
