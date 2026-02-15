'use client';
import { useState, useRef } from 'react';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Brand-only onboarding",
      description: "Only brand owners are allowed to sell. Resellers are excluded by design.",
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      iconBg: "from-violet-500 to-purple-600",
      accent: "group-hover:stroke-violet-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Discover products from brands you love",
      description: "Explore products from brands you love, all in one place.",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      iconBg: "from-blue-500 to-cyan-600",
      accent: "group-hover:stroke-blue-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Direct brand accountability",
      description: "Every product is clearly tied to the brand itself — including responsibility for quality, warranty, and support.",
      gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
      iconBg: "from-emerald-500 to-green-600",
      accent: "group-hover:stroke-emerald-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Zero-tolerance policy",
      description: "Any violation of authenticity rules results in permanent removal. There are no second chances.",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      iconBg: "from-orange-500 to-red-600",
      accent: "group-hover:stroke-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-slate-50 py-1 md:py-32 px-6 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">The Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">trust</span>, not just transactions.
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
            Goshrin eliminates system loopholes by design. We don't just ban bad sellers — we make it impossible for them to join.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <SpotlightCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ feature, index }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-3xl border border-slate-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1`}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconBg} text-white mb-6 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300 ease-out`}>
          {feature.icon}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
          {feature.title}
        </h3>

        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
          <svg className={`w-6 h-6 stroke-slate-300 ${feature.accent} transition-colors duration-300`} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
