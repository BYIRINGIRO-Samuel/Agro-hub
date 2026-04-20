"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-green/5 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] lg:min-h-[700px]">
        
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <Link href="/" className="inline-block mb-10 group">
             <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors">Back to Home</span>
             </div>
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8 tracking-tight">Get Started Now</h1>
          
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Phone Number *</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Email Address <span className="text-neutral-500 font-medium normal-case">(Optional)</span></label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Password *</label>
              <input type="password" placeholder="Create a password" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" required />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-5 h-5 border border-neutral-300 rounded flex items-center justify-center cursor-pointer hover:border-brand-green transition-colors">
                <input type="checkbox" id="terms" className="hidden" />
                <svg className="w-3 h-3 text-brand-green opacity-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <label htmlFor="terms" className="text-sm text-neutral-600 cursor-pointer select-none">
                I agree to the <Link href="#" className="font-semibold text-brand-green hover:underline">Terms & Conditions</Link>
              </label>
            </div>

            <Link href="/dashboard" className="w-full bg-brand-green flex items-center justify-center hover:bg-brand-green-hover text-white font-bold text-sm tracking-wide py-4 rounded-lg mt-4 transition-colors shadow-lg shadow-brand-green/20">
              Create Account
            </Link>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Already have an account? <Link href="/login" className="font-bold text-brand-green hover:underline">Log in</Link>
          </p>

        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-brand-green">
          <Image 
            src="/hero_bg.png" 
            alt="Farming Fields Background" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-brand-green/60 mix-blend-multiply"></div>
          
          {/* Branded Overlay Content */}
          <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center p-12 text-center text-white z-10">
             <div className="w-20 h-20 border-2 border-white/20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-xl">
                 <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">Empowering Your Harvest.</h2>
             <p className="text-white/80 text-lg font-medium max-w-sm leading-relaxed drop-shadow-md">Connect directly with buyers, access market insights, and join a smart farming community today.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
