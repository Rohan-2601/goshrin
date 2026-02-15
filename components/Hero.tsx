"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('brand');

  const openAppModal = (type: string) => {
    setModalType(type);
    setOpenModal(true);
  };

  return (
    <section className="relative min-h-screen bg-slate-50 overflow-hidden selection:bg-violet-100 selection:text-violet-900">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* NAV HEADER */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 backdrop-blur-[2px]">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 z-50">
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">GoShrin</span>
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mb-1"></div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'How it works', href: '#how-it-works' },
            { name: 'For Brands', href: '#for-brands' },
            { name: 'About', href: '#about' }
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-sm font-medium text-slate-600 hover:text-violet-700 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-200 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => openAppModal('user')}
            className="cursor-pointer rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-300"
          >
            Early Access
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden p-2 text-slate-900 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-10 fade-in duration-200">
             <div className="flex flex-col items-center gap-6 text-lg font-medium text-slate-900">
              {[
                  { name: 'How it works', href: '#how-it-works' },
                  { name: 'For Brands', href: '#for-brands' },
                  { name: 'About', href: '#about' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-violet-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                openAppModal('user');
              }}
              className="rounded-full bg-slate-900 px-8 py-3 text-white font-medium hover:bg-slate-800 transition-all"
            >
              Early Access
            </button>
          </div>
        )}
      </nav>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20 md:pt-32 px-6 pb-12 md:pb-24">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/50 px-3 py-1 backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
          <span className="text-xs font-medium text-violet-800 tracking-wide uppercase">Live for Early Access</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
          Authentic products. <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
            Only from brands.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg md:text-xl text-slate-600 leading-relaxed">
          Goshrin is a brand-only marketplace where every product is verified, traceable,
          and sold directly by the company itself — <span className="text-slate-900 font-medium">no resellers, no fakes, no grey market.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
          <button 
            className="group relative cursor-pointer rounded-full bg-slate-900 px-8 py-3.5 text-white font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-violet-500/20 hover:-translate-y-0.5" 
            onClick={() => openAppModal('brand')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Join as a Brand
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </span>
          </button>

          <button
            onClick={() => openAppModal('creator')}
            className="flex items-center gap-2 text-slate-600 font-medium hover:text-violet-700 transition-colors px-4 py-2"
          >
            For Creators 
            <span className="text-slate-400 group-hover:text-violet-400 transition-colors">→</span>
          </button>
        </div>
      </div>

      <ApplicationModal open={openModal} onClose={() => setOpenModal(false)} type={modalType} />

    </section>
  );
}
