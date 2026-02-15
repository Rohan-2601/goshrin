'use client';
import { useState } from 'react';
import ApplicationModal from './ApplicationModal';

export default function CTA() {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('brand');

  const openAppModal = (type) => {
    setModalType(type);
    setOpenModal(true);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-400/30 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] translate-y-1/3"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 drop-shadow-sm">
          Ready to experience the future of commerce?
        </h2>
        
        <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Join thousands of users and legitimate brands building a marketplace based on trust, not just transactions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => openAppModal('brand')}
            className="group relative px-8 py-4 bg-white text-violet-700 font-bold rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join as a Brand
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={() => openAppModal('creator')}
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            I'm a Creator
          </button>
        </div>
        
        <p className="mt-8 text-sm text-violet-200/60">
          No spam. Unsubscribe anytime. High volume of interest expected.
        </p>
      </div>

      <ApplicationModal open={openModal} onClose={() => setOpenModal(false)} type={modalType} />

    </section>
  );
}
