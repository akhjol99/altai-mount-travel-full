'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';
import { CheckCircle, Phone, Send, Shield, CreditCard, Clock, ArrowLeft, AlertCircle } from 'lucide-react';

export default function Book() {
  const router = useRouter();

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    dates: '',
    travelers: 2,
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Pre-fill tour from URL param or sessionStorage
  useEffect(() => {
    const paramTour = router.query.tour as string | undefined;
    if (paramTour) {
      setState((s) => ({ ...s, tour: decodeURIComponent(paramTour) }));
      return;
    }
    try {
      const saved = sessionStorage.getItem('preselectTour');
      if (saved) {
        setState((s) => ({ ...s, tour: saved }));
        sessionStorage.removeItem('preselectTour');
      }
    } catch { /* ignore */ }
  }, [router.query.tour]);

  const isValid = state.name && /.+@.+\..+/.test(state.email) && state.travelers >= 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: name === 'travelers' ? Number(value) : value }));
  };

  // Build WhatsApp pre-filled message
  const buildWhatsApp = () => {
    const lines = [
      `Hi! I'd like to book a tour with Altai Mount Travel.`,
      state.tour ? `Tour: ${state.tour}` : '',
      state.dates ? `Dates: ${state.dates}` : '',
      `Travelers: ${state.travelers}`,
      state.name ? `Name: ${state.name}` : '',
      state.phone ? `Phone: ${state.phone}` : '',
      state.message ? `Notes: ${state.message}` : '',
    ].filter(Boolean).join('\n');
    return `https://wa.me/97685428887?text=${encodeURIComponent(lines)}`;
  };

  // Build mailto link
  const buildMailto = () => {
    const subject = encodeURIComponent(`Booking enquiry${state.tour ? ` — ${state.tour}` : ''}`);
    const body = encodeURIComponent(
      [
        `Name: ${state.name}`,
        `Email: ${state.email}`,
        state.phone ? `Phone: ${state.phone}` : '',
        state.tour ? `Tour: ${state.tour}` : '',
        state.dates ? `Dates: ${state.dates}` : '',
        `Travelers: ${state.travelers}`,
        state.message ? `\nMessage:\n${state.message}` : '',
      ].filter(Boolean).join('\n')
    );
    return `mailto:altaimounttravel@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Something went wrong. Please try again or use WhatsApp below.');
      }
    } catch {
      setError('Network error. Please check your connection or use WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Head>
        <title>Book a Tour | Altai Mount Travel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />

      {/* Hero */}
      <div className="relative h-52 md:h-64 mt-16 md:mt-0 overflow-hidden">
        <Image src="/images/5bogd.jpg" alt="Book a Tour" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-8 px-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">Western Mongolia · Est. 2019</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Book Your Expedition</h1>
          <p className="text-white/70 mt-1.5 text-sm">Fill in your details — we'll confirm within 24 hours and guide you through next steps.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">

        <Link href="/tours" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to tours
        </Link>

        {sent ? (
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-10 flex flex-col items-center text-center gap-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-stone-900">Booking request sent!</h2>
            <p className="text-stone-500 text-sm">We've received your details and will be in touch within 24 hours to confirm your tour and next steps.</p>
            <p className="text-stone-400 text-xs">For a faster response, message us on WhatsApp.</p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a href={buildWhatsApp()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-5 py-2.5 rounded-full text-sm">
                <Phone className="w-4 h-4" /> WhatsApp us
              </a>
              <Link href="/" className="inline-flex items-center gap-2 border border-stone-200 text-stone-700 hover:bg-stone-50 px-5 py-2.5 rounded-full text-sm">
                Back to home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-stone-900 mb-1">Your booking details</h2>
              <p className="text-stone-500 text-sm mb-6">No commitment yet — this starts a conversation. We'll send you a confirmed itinerary and deposit info.</p>

              <form onSubmit={handleSubmitEmail} className="space-y-5">
                {/* Honeypot */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={state.website} onChange={handleChange} />
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Full name *</label>
                    <input name="name" value={state.name} onChange={handleChange} required
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Email *</label>
                    <input name="email" type="email" value={state.email} onChange={handleChange} required
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Phone / WhatsApp</label>
                  <input name="phone" value={state.phone} onChange={handleChange} placeholder="+1 234 567 8900"
                    className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>

                {/* Tour */}
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Tour</label>
                  <select
                    value={state.tour || 'none'}
                    onChange={(e) => setState((s) => ({ ...s, tour: e.target.value === 'none' ? '' : e.target.value }))}
                    className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="none">Select a tour…</option>
                    {tours.map((t) => (
                      <option key={t.id} value={t.title}>{t.title}</option>
                    ))}
                  </select>
                </div>

                {/* Dates + Travelers */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Preferred dates</label>
                    <input name="dates" value={state.dates} onChange={handleChange} placeholder="e.g. 5–12 July 2026"
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Number of travelers *</label>
                    <input name="travelers" type="number" min={1} max={20} value={state.travelers} onChange={handleChange}
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Additional notes</label>
                  <textarea name="message" rows={4} value={state.message} onChange={handleChange}
                    placeholder="Dietary needs, fitness level, special requests, questions…"
                    className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-md shadow-emerald-100"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending…' : 'Send booking request'}
                  </button>
                  <a
                    href={buildWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </div>

                <p className="text-xs text-stone-400 flex items-center gap-1.5 pt-1">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  Your details are never shared. No payment required at this stage.
                </p>
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm mt-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar — deposit & cancellation */}
            <div className="space-y-4">

              {/* What happens next */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <h3 className="font-bold text-stone-900 text-sm mb-3">What happens next?</h3>
                <ul className="space-y-3">
                  {[
                    { step: '1', text: 'We review your request and confirm availability' },
                    { step: '2', text: 'We send you a personalised itinerary and quote' },
                    { step: '3', text: 'You pay a $600/person deposit to confirm your spot' },
                    { step: '4', text: 'We handle all permits, guides & logistics for you' },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <span className="text-sm text-stone-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deposit */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 text-amber-500" />
                  <h3 className="font-bold text-stone-900 text-sm">Deposit</h3>
                </div>
                <p className="text-sm text-stone-600 mb-2">
                  A <span className="font-semibold text-stone-900">$600 USD per person</span> deposit confirms your booking. Balance is due before departure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Small groups', 'All permits included', 'English guide'].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cancellation */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <h3 className="font-bold text-stone-900 text-sm">Cancellation policy</h3>
                </div>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  <li><span className="font-semibold text-stone-800">60+ days before:</span> $200 fee kept</li>
                  <li><span className="font-semibold text-stone-800">30–60 days before:</span> $500 fee kept</li>
                  <li><span className="font-semibold text-stone-800">Under 30 days:</span> $600 fee kept</li>
                </ul>
                <p className="text-xs text-stone-400 mt-2">All amounts beyond the fee are refunded. Date changes considered on request.</p>
              </div>

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
