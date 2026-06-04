'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '', website: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const isValid = state.name && /.+@.+\..+/.test(state.email) && state.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, tour: '', phone: '', dates: '', travelers: 1 }),
      });
      if (res.ok) {
        setSent(true);
        setState({ name: '', email: '', message: '', website: '' });
      } else {
        alert('Sorry, something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero */}
      <div className="relative h-72 md:h-96 mt-16 md:mt-0 overflow-hidden">
        <Image src="/images/mount.jpeg" alt="Contact Altai Mount Travel" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 px-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">We'd love to hear from you</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">Get in Touch</h1>
          <p className="text-white/75 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
            Planning a trip to Western Mongolia? Have a question about our tours? Our team is based in Ölgii and replies within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">

          {/* Form */}
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">Message sent!</h2>
                <p className="text-stone-500 text-sm max-w-xs">We'll get back to you within 24 hours. In the meantime, feel free to WhatsApp us for a faster reply.</p>
                <a
                  href="https://wa.me/97685428887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-full text-sm mt-2"
                >
                  <Phone className="w-4 h-4" /> Open WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-stone-900 mb-1">Send us a message</h2>
                <p className="text-stone-500 text-sm mb-6">Have a question about a tour, destination, or anything else? Just ask.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={state.website} onChange={handleChange} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1 uppercase tracking-wide">Your name</label>
                      <input name="name" value={state.name} onChange={handleChange} required
                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1 uppercase tracking-wide">Email address</label>
                      <input name="email" type="email" value={state.email} onChange={handleChange} required
                        className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1 uppercase tracking-wide">Message</label>
                    <textarea name="message" rows={5} value={state.message} onChange={handleChange} required
                      placeholder="Ask us anything — best time to visit, what to pack, which tour suits you…"
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                    <p className="text-xs text-stone-400">We never share your details. We reply within 24 hours.</p>
                    <button
                      type="submit"
                      disabled={!isValid || loading}
                      className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-amber-950 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Sending…' : 'Send message'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* WhatsApp CTA */}
            <div className="bg-[#075E54] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">WhatsApp us</div>
                  <div className="text-white/70 text-xs">Fastest way to reach us</div>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-4">Our team in Ölgii is online most of the day. Get answers in minutes, not days.</p>
              <a
                href="https://wa.me/97685428887?text=Hi%2C%20I%20have%20a%20question%20about%20your%20tours%20in%20Western%20Mongolia."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> +976 8542 8887
              </a>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-0.5">Location</div>
                  <div className="text-sm text-stone-800">Ölgii, Bayan-Ölgii Province, Western Mongolia</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-0.5">Email</div>
                  <a href="mailto:altaimounttravel@gmail.com" className="text-sm text-stone-800 hover:text-amber-600">altaimounttravel@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-0.5">Response time</div>
                  <div className="text-sm text-stone-800">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Ready to book CTA */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-amber-900 mb-1">Ready to book a tour?</div>
              <p className="text-xs text-amber-700 mb-3">Use our booking form to send your tour details and preferred dates — we'll confirm everything.</p>
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold py-2.5 rounded-xl text-sm transition-colors"
              >
                Go to booking form →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
