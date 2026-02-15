import { useState } from "react";

export default function WaitlistModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-black tracking-tight">
          Get early access
        </h2>

        <p className="mt-2 text-sm text-neutral-600">
          Join the waitlist to be among the first to access brand-verified products.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <select
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">What are you interested in?</option>
            <option>Health & Wellness</option>
            <option>Baby Products</option>
            <option>Electronics</option>
            <option>Beauty & Personal Care</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
          >
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            Join waitlist
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-xs text-neutral-500">
          No spam. One email when we launch.
        </p>
      </div>
    </div>
  );
}
