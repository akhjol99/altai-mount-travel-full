'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MessageSquare, Shield, CreditCard, Clock } from 'lucide-react';
import { tours } from '@/data/tours';

export default function Contact() {
  const router = useRouter();

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    dates: '',
    travelers: 2,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Preselect tour from sessionStorage if user clicked "Enquire" from a tour page
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('preselectTour');
      if (saved) {
        setState((s) => ({ ...s, tour: saved }));
        sessionStorage.removeItem('preselectTour');
      }
    } catch {
      // ignore
    }
  }, []);

  const isValid = state.name && /.+@.+\..+/.test(state.email) && state.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((s) => ({
      ...s,
      [name]: name === 'travelers' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      if (res.ok) {
        alert(
          'Thank you for your enquiry! We have received your details and will contact you immediately.'
        );

        // Optional: reset local state (not strictly needed because of redirect)
        setState({
          name: '',
          email: '',
          phone: '',
          tour: '',
          dates: '',
          travelers: 2,
          message: '',
        });

        // Redirect to home page after success
        router.push('/');
      } else {
        alert('Sorry, something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            Enquire Now
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Tell us about your dream trip to the Mongolian Altai. After you send
            your enquiry, we will contact you immediately and guide you through
            the next steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* ================= FORM ================= */}
          <div className="border rounded-2xl bg-white">
            <div className="p-6 md:p-7">
              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-4 md:gap-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Preferred tour */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Tour
                  </label>
                  <select
                    value={state.tour || 'none'}
                    onChange={(e) =>
                      setState((s) => ({
                        ...s,
                        tour: e.target.value === 'none' ? '' : e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="none">No preference</option>
                    {tours.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dates (or month)
                  </label>
                  <input
                    name="dates"
                    placeholder="e.g., 5–12 July or Sep 2026"
                    value={state.dates}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travelers
                  </label>
                  <input
                    name="travelers"
                    type="number"
                    min={1}
                    value={state.travelers}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={state.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your plans, interests, preferred comfort level, and any questions you have."
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Bottom row */}
                <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    We’ll never share your details. After you send your enquiry,
                    we will contact you immediately.
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="rounded-2xl px-6 py-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending…' : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ================= SIDE INFO ================= */}
          <div className="space-y-5">
            {/* Booking & Deposit */}
            <div className="border rounded-2xl bg-white p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Booking & Deposit</h2>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                To confirm your tour with{' '}
                <span className="font-medium">Altai Mount Travel</span>, we
                require a{' '}
                <span className="font-semibold">
                  deposit of 600 USD per person
                </span>
                . This allows us to secure guides, vehicles, camps, festival
                tickets (if needed) and logistics in advance.
              </p>
              <ul className="text-gray-700 text-sm space-y-1 mb-2 list-disc list-inside">
                <li>
                  <span className="font-medium">Deposit:</span> 600 USD per
                  person
                </li>
                <li>
                  <span className="font-medium">When due:</span> after we
                  confirm your itinerary and dates
                </li>
                <li>
                  <span className="font-medium">Balance:</span> paid before the
                  tour starts (details in your confirmation)
                </li>
              </ul>
            </div>

            {/* Cancellation & Refunds */}
            <div className="border rounded-2xl bg-white p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Cancellation & Refunds</h2>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                We understand that plans can change. Our cancellation policy is
                simple and fair:
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-3">
                <li>
                  <span className="font-semibold">
                    More than 2 months before departure:
                  </span>{' '}
                  200 USD cancellation fee will be kept.
                </li>
                <li>
                  <span className="font-semibold">
                    Between 1 and 2 months before departure:
                  </span>{' '}
                  a <span className="font-semibold">500 USD</span> cancellation
                  fee will be kept. The rest of any payments will be refunded.
                </li>
                <li>
                  <span className="font-semibold">
                    Less than 1 month before departure:
                  </span>{' '}
                  a <span className="font-semibold">600 USD</span> cancellation
                  fee will be kept.
                </li>
              </ul>
              <p className="text-gray-700 text-xs">
                In all cases, any amount you have paid{' '}
                <span className="font-semibold">
                  beyond the cancellation fee
                </span>{' '}
                will be returned. If you prefer to change your travel dates
                instead of cancelling, we will always do our best to find a
                flexible solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}