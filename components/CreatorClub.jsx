'use client';
import { useState } from 'react';
import ApplicationModal from './ApplicationModal';

export default function CreatorClub() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="creator-club" className="relative bg-slate-900 py-16 md:py-32 px-6 overflow-hidden text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-pink-600/20 rounded-full blur-3xl translate-y-1/3 pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">For Verified Creators</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            GoShrin Creator Club
          </h2>
          
          <p className="text-2xl md:text-3xl font-medium text-slate-300">
            Earn by Sharing What You <span className="text-white italic font-bold">Truly Use</span>.
          </p>
        </div>

        {/* The "How It Works" Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
           {/* Left: Interactive Phone/Card Mockup */}
           <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 blur-2xl opacity-40 rounded-[3rem]"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-[3rem] p-8 shadow-2xl overflow-hidden">
                 {/* Screen Header */}
                 <div className="flex items-center justify-between mb-8 opacity-50">
                   <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
                   <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                     <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                   </div>
                 </div>

                 {/* Simulated Post */}
                 <div className="bg-slate-700/50 rounded-2xl p-4 mb-4 backdrop-blur-sm border border-slate-600/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                      <div className="space-y-1">
                        <div className="w-24 h-3 bg-slate-600 rounded-full"></div>
                        <div className="w-16 h-2 bg-slate-600/50 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-full aspect-[4/3] bg-slate-800 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden group">
                       <span className="text-slate-500 text-sm">Real Usage Content</span>
                       <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs flex items-center gap-1 text-white">
                         <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                         Verified Purchase
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="w-full h-2 bg-slate-600/50 rounded-full"></div>
                       <div className="w-3/4 h-2 bg-slate-600/50 rounded-full"></div>
                    </div>
                 </div>

                 {/* Cash Notification */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 w-[90%] bg-white text-slate-900 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-[bounce_3s_infinite]">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Cashback Received!</p>
                      <p className="text-xs text-slate-500">Directly to your bank account</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Steps */}
           <div className="space-y-8 pt-8">
             <div className="space-y-2">
               <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">How It Works</h3>
               <p className="text-slate-400">Simple process based on real trust, not affiliate spam.</p>
             </div>

             <div className="space-y-6">
               <Step number="1" title="Get Verified" desc="Join with 1000+ genuine followers on Instagram, X, YouTube, etc." />
               <Step number="2" title="Buy & Use" desc="Purchase any product from GoShrin. Experience it for real." />
               <Step number="3" title="Share Authentically" desc="Post a reel or review about the product. Tag GoShrin + Brand." />
               <Step number="4" title="Get Paid" desc="Receive cashback directly to your bank based on engagement." />
             </div>
           </div>
        </div>

        {/* Comparison / Different Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <InfoCard 
            title="Zero Commission" 
            desc="We don't take a cut. The relationship is between you and the brand."
            icon="✨"
          />
          <InfoCard 
            title="No Fake Links" 
            desc="No affiliate tracking links spamming your bio. Just pure content."
            icon="🔗"
          />
          <InfoCard 
            title="Real Usage Only" 
            desc="You must buy the product first. This ensures 100% honest reviews."
            icon="🛍️"
          />
        </div>

        {/* Two Columns: Brands vs Creators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <BenefitBox 
             title="What Brands Get" 
             items={[
               "Honest creator-led marketing",
               "Real product usage, not scripted ads",
               "Higher trust & better conversions"
             ]}
             color="purple"
           />
           <BenefitBox 
             title="What Creators Get" 
             items={[
               "Cashback, not sponsorship pressure",
               "Promote only what you truly use",
               "Work with verified, authentic brands"
             ]}
             color="pink"
           />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Ready to join the club?</h3>
          <button 
            onClick={() => setOpenModal(true)}
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            Apply for Creator Club
          </button>
        </div>

      </div>

      <ApplicationModal open={openModal} onClose={() => setOpenModal(false)} type="creator" />
    </section>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-purple-500/50 text-purple-400 font-bold flex items-center justify-center text-lg shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function InfoCard({ title, desc, icon }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  )
}

function BenefitBox({ title, items, color }) {
  const borderColor = color === 'purple' ? 'border-purple-500/30' : 'border-pink-500/30';
  const bgColor = color === 'purple' ? 'bg-purple-900/10' : 'bg-pink-900/10';
  const iconColor = color === 'purple' ? 'text-purple-400' : 'text-pink-400';

  return (
    <div className={`p-8 rounded-3xl border ${borderColor} ${bgColor} backdrop-blur-sm`}>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-6 h-6 ${iconColor} flex-shrink-0`}>
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
             </svg>
             <span className="text-slate-300 text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
