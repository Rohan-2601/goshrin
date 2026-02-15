'use client';
import { useState } from 'react';

export default function BrandStore() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Discover the world of brands",
      description: "Customers can explore the world of brands",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: "Brand-controlled layout",
      description: "Brands decide how their products appear — bestsellers, new launches, bundles, and category sections.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
    {
      title: "Official brand identity",
      description: "Logos, banners, messaging, and product information come directly from the brand — not third-party sellers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M8 11h8"/>
          <path d="M12 15V7"/>
        </svg>
      )
    },
    {
      title: "No marketplace confusion",
      description: "No duplicate listings. Customers always know who they are buying from.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10"/>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
        </svg>
      )
    }
  ];

  return (
    <section id="for-brands" className="relative bg-slate-50 py-32 px-6 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
                <span className="flex h-2 w-2 rounded-full bg-violet-500"></span>
                <span className="text-xs font-semibold text-violet-700 uppercase tracking-wide">Official Storefronts</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Every brand gets its own <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">official flagship store.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Not a reseller listing. A brand-controlled space inside Goshrin where your identity shines.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group flex gap-5 p-5 rounded-2xl transition-all duration-300 cursor-default border ${index === activeFeature ? 'bg-white border-violet-100 shadow-xl shadow-violet-100/20' : 'bg-transparent border-transparent hover:bg-slate-50'}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${index === activeFeature ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-md group-hover:text-violet-500'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${index === activeFeature ? 'text-slate-900' : 'text-slate-700'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract Visualization (No Image) */}
          <div className="relative pl-8">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-blue-500/10 blur-3xl rounded-full transform scale-110" />
            
            {/* The Blueprint Card */}
            <div className="relative bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 overflow-hidden">
              
              {/* Header Blueprint */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-slate-100 rounded-lg"></div>
                    <div className="h-3 w-20 bg-slate-50 rounded-lg"></div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-medium border border-violet-100">
                  Verified Brand
                </div>
              </div>

              {/* Banner Area */}
              <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm font-medium tracking-widest uppercase border-2 border-dashed border-slate-200 m-2 rounded-xl">
                  Brand Banner Space
                </div>
              </div>

              {/* Content Grid Blueprint */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-slate-50 transition-colors">
                    <div className="w-full aspect-square rounded-xl bg-white shadow-sm mb-3 relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                         </svg>
                       </div>
                    </div>
                    <div className="h-3 w-3/4 bg-slate-200 rounded-full mb-2"></div>
                    <div className="h-3 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Floating Structure Elements */}
              <div className="absolute top-1/2 right-[-20px] translate-x-0 w-16 h-40 bg-white shadow-xl border border-slate-100 rounded-l-2xl flex flex-col items-center justify-center gap-4 py-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100"></div>
                ))}
              </div>

            </div>
            
            {/* Decoration Dots */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          </div>

        </div>

        {/* Bottom Supporting Line */}
        <div className="mt-20 text-center">
          <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Customers always know <span className="font-semibold text-slate-900">who sold it</span> and <span className="font-semibold text-slate-900">who is accountable</span>.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
