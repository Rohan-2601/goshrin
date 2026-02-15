'use client';
import { useState } from 'react';
import ApplicationModal from './ApplicationModal';

export default function Riser() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="riser-program" className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-50/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-50/40 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">Verified Emerging Brands</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            GoShrin <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Riser</span>
          </h2>
          
          <p className="text-2xl font-medium text-slate-700">
            Discover tomorrow’s big brands — today.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Some companies are new, but authentic, ethically built, and fundamentally strong.<br/>
            <span className="font-medium text-slate-900">We don’t ignore them. We support them.</span>
          </p>
        </div>

        {/* Badge & Qualification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           {/* Left: The Badge Visual */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-[2.5rem] rotate-3 opacity-20 blur-xl group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white border border-slate-100 shadow-2xl shadow-orange-100/50 rounded-[2.5rem] p-10 overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px]">
                
                 {/* Badge Design */}
                 <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 mb-8 shadow-xl shadow-orange-500/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-[3px] border-white/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="bg-white w-full h-full rounded-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-orange-50/50 blur-xl"></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-orange-500 mb-2">
                           <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="font-extrabold text-slate-900 text-lg uppercase tracking-tight">Riser</span>
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-1">Verified</span>
                      </div>
                    </div>
                 </div>

                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Each product clearly shows</h3>
                 <div className="inline-block bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg text-slate-600 font-medium">
                   “GoShrin Riser – Verified Emerging Brand”
                 </div>
              </div>
           </div>

           {/* Right: Qualifications */}
           <div className="space-y-8">
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-slate-900">Who qualifies?</h3>
               <p className="text-slate-600">Only brands we personally verify and trust get this badge.</p>
             </div>
             
             <div className="space-y-4">
                {[
                  "Company age less than 2 years",
                  "Annual turnover below ₹10 crore",
                  "Products are 100% authentic",
                  "Brand passes our deep verification & ethics check"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100/50 hover:bg-orange-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-800">{item}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>

        {/* Features / Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FeatureCard 
            title="Dedicated Riser Store" 
            desc="A separate section where customers can explore only Riser brands. Clean, focused discovery — no clutter."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            }
          />
          <FeatureCard 
            title="Zero Platform Fees" 
            desc="No commission. No pressure to spend on ads. We give free ad points to promote. We support them until they grow."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <FeatureCard 
            title="Fair Graduation Rule" 
            desc="Stays in program until ₹5 Cr annual run-rate on our platform. Then graduates to Regular Brand with no sudden lock-ins."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.534 50.534 0 00-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            }
          />
        </div>

        {/* Why it Matters Section */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
           <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-slate-900 mb-4">Why This Matters</h3>
             <p className="text-slate-600">Building a bridge of trust between new brands and authentic customers.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-6">
                <h4 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                   For Customers
                </h4>
                <ul className="space-y-4">
                  <ListItem text="You discover honest, upcoming brands" />
                  <ListItem text="Products are safe, researched, and authentic" />
                  <ListItem text="You support brands before they become expensive" />
                </ul>
             </div>
             
             <div className="space-y-6">
                <h4 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                   For Brands
                </h4>
                <ul className="space-y-4">
                  <ListItem text="Fair chance to grow with a verified marketplace trust" />
                  <ListItem text="No financial burden in early stage" />
                  <ListItem text="Real customers, real feedback" />
                </ul>
             </div>
           </div>
        </div>

        {/* Footer/Philosophy */}
        <div className="mt-20 text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 italic max-w-4xl mx-auto">
            "Big brands are built with <span className="text-orange-500 not-italic font-bold">trust</span> — not just money."
          </blockquote>
          
          <div 
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-200/50 hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="font-semibold">GoShrin Riser supports authentic young brands — free till they grow.</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>

      <ApplicationModal open={openModal} onClose={() => setOpenModal(false)} type="brand" />
    </section>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-slate-700">{text}</span>
    </li>
  )
}
