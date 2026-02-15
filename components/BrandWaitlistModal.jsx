"use client";

import { useState } from "react";

export default function BrandWaitlistModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-black"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Apply as an official brand
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              We onboard a limited number of brands to maintain authenticity
              and direct accountability.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                required
                placeholder="Brand name"
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                placeholder="Website or Instagram"
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <select
                required
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Primary category</option>
                <option>Health & Wellness</option>
                <option>Baby Products</option>
                <option>Beauty & Personal Care</option>
                <option>Electronics</option>
                <option>Other</option>
              </select>

              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                rows={3}
                placeholder="Biggest challenge you face on marketplaces (optional)"
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <button
                type="submit"
                className="relative w-full overflow-hidden rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
              >
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                Apply for early access
              </button>
            </form>

            <p className="mt-4 text-xs text-neutral-500">
              Every application is reviewed manually.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="py-10 text-center">
            <h3 className="text-xl font-semibold text-black">
              Application received
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
              If your brand is a fit, we’ll reach out personally.
            </p>

            <button
              onClick={onClose}
              className="mt-6 text-sm font-medium text-black underline underline-offset-4"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

