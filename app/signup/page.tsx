"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-green/5 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] lg:min-h-[700px]">
        
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
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Email Address</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Password</label>
              <input type="password" placeholder="Create a password" className="w-full px-4 py-3 bg-transparent border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder-neutral-400" />
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

            <button type="button" className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm tracking-wide py-4 rounded-lg mt-4 transition-colors shadow-lg shadow-brand-green/20">
              Signup
            </button>
          </form>

          <div className="flex items-center gap-4 w-full my-8">
            <div className="h-px bg-neutral-200 flex-1"></div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Or</span>
            <div className="h-px bg-neutral-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 w-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 px-4 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span className="text-xs font-bold text-neutral-700">Sign up with Google</span>
            </button>
            <button type="button" className="flex items-center justify-center gap-2 w-full bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 text-white px-4 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.82 3.53-.78 1.48.06 2.51.69 3.19 1.64-2.73 1.57-2.28 5.2.39 6.25-.66 1.76-1.55 3.48-2.19 5.06zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.38-2.04 4.39-3.74 4.25z"/></svg>
              <span className="text-xs font-bold text-white">Sign up with Apple</span>
            </button>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Already have an account? <Link href="/login" className="font-bold text-brand-green hover:underline">Log in</Link>
          </p>

        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-brand-light">
          <Image 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
            alt="Beautiful Monstera Leaves" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
          {/* Optional Overlay Content */}
          <div className="absolute bottom-8 left-8 right-8 z-10 hidden md:block">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                 <p className="text-white font-medium text-lg italic leading-snug">"Agro-hub helped me unlock new market potentials for my entire farm."</p>
                 <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">K</div>
                    <div>
                      <p className="text-white text-sm font-bold">Kevin T.</p>
                      <p className="text-white/70 text-xs">Agri-tech Pioneer</p>
                    </div>
                 </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
