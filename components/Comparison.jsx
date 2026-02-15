'use client';

export default function Comparison() {
  return (
    <section id="about" className="relative bg-slate-50 py-16 md:py-32 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-1 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wide">The Difference</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">authenticity</span>,<br /> 
            not just volume.
          </h2>
          <p className="text-lg text-slate-600">
            Most marketplaces operate on volume and chaos. Goshrin is built on trust and control.
          </p>
        </div>

        {/* Comparison Card (Scrollable Container) */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0">
          <div className="relative rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden min-w-[700px]">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm">
            <div className="col-span-4 py-8 px-8 flex items-end">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Feature</span>
            </div>
            <div className="col-span-4 py-8 px-8 flex flex-col items-center justify-end border-l border-slate-100">
              <span className="text-lg font-semibold text-slate-500 mb-2">Typical Marketplaces</span>
            </div>
            <div className="col-span-4 py-8 px-8 flex flex-col items-center justify-end bg-gradient-to-b from-violet-50/50 to-transparent border-l border-slate-100 relative">
              {/* Highlight Marker */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500" />
              <div className="flex items-center gap-2 mb-2">
                 <span className="text-xl font-bold text-slate-900">Goshrin</span>
          
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-slate-100">
            
            <ComparisonRow 
              feature="Who can sell" 
              bad="Anyone (Resellers, mixed third-parties)" 
              good="Only brands"
              iconGood={<ShieldCheckIcon />}
            />
            
            <ComparisonRow 
              feature="Product Source" 
              bad="Unknown / multiple sources per item" 
              good="Direct from the original company"
              iconGood={<FactoryIcon />}
            />

            <ComparisonRow 
              feature="Counterfeit Control" 
              bad="Reactive (Banned after complaints)" 
              good="Preventive (Impossible by design)"
              iconGood={<LockCheckIcon />}
            />

            <ComparisonRow 
              feature="Brand Accountability" 
              bad="Hidden behind 'Seller Profiles'" 
              good="Front and center for every item"
              iconGood={<UsersIcon />}
            />

            <ComparisonRow 
              feature="Customer Trust" 
              bad="Varies by seller luck" 
              good="Guaranteed by the platform model"
              iconGood={<HeartHandshakeIcon />}
              isLast
            />

          </div>
        </div>
        </div>

        {/* Closing text */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-slate-500 italic">
            "We didn't just want to build another marketplace. We wanted to fix the fundamental flaw of online retail: <span className="text-slate-900 font-medium not-italic">trusting strangers with your money.</span>"
          </p>
        </div>

      </div>
    </section>
  );
}

function ComparisonRow({ feature, bad, good, iconGood, isLast }) {
  return (
    <div className={`grid grid-cols-12 group transition-colors hover:bg-slate-50/50 ${isLast ? '' : ''}`}>
      {/* Feature Name */}
      <div className="col-span-4 py-8 px-8 flex items-center">
        <h3 className="font-semibold text-slate-900 text-lg group-hover:text-violet-700 transition-colors">{feature}</h3>
      </div>
      
      {/* Typical Marketplaces (Bad) */}
      <div className="col-span-4 py-8 px-8 border-l border-slate-100 flex items-center justify-center text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
             <XIcon />
          </div>
          <span className="text-slate-500 leading-tight">{bad}</span>
        </div>
      </div>
      
      {/* Goshrin (Good) */}
      <div className="col-span-4 py-8 px-8 border-l border-slate-100 flex items-center justify-center text-center bg-violet-50/5 group-hover:bg-violet-50/20 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:via-violet-500/5 transition-all duration-500" />
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-200">
             {iconGood}
          </div>
          <span className="font-semibold text-slate-900 leading-tight">{good}</span>
        </div>
      </div>
    </div>
  );
}

// Icons
function XIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
}

function ShieldCheckIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
}

function FactoryIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
}

function LockCheckIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
}

function UsersIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
}

function HeartHandshakeIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
}
