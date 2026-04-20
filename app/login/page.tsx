"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-green/5 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-4xl overflow-hidden shadow-2xl flex flex-col-reverse md:flex-row min-h-[600px] lg:min-h-[700px]">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-brand-green">
          <Image 
            src="/about_img_3.png" 
            alt="Farmer in the field" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-brand-green/60 mix-blend-multiply"></div>
          
          {/* Branded Overlay Content */}
          <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center p-12 text-center text-white z-10">
             <div className="w-20 h-20 border-2 border-white/20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-xl">
                 <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">Your Farm Dashboard</h2>
             <p className="text-white/80 text-lg font-medium max-w-sm leading-relaxed drop-shadow-md">Monitor yields, participate in community discussions, and check real-time pricing data instantly.</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <Link href="/" className="inline-flex justify-end mb-10 group">
             <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors">Back to Home</span>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </div>
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8 tracking-tight">Welcome Back</h1>
          
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Phone Number <span className="text-neutral-400 normal-case">or</span> Email</label>
              <input type="text" placeholder="Enter your phone or email" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Password</label>
                <Link href="#" className="text-xs font-bold text-brand-green hover:underline">Forgot?</Link>
              </div>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
            </div>

            <button type="button" className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm tracking-wide py-4 rounded-lg mt-6 transition-colors shadow-lg shadow-brand-green/20">
              Log in
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-12">
            New to Agro-hub? <Link href="/signup" className="font-bold text-brand-green hover:underline">Sign up</Link>
          </p>

        </div>

      </div>
    </div>
  );
}
