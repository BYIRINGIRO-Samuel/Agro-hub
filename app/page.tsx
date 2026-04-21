"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import QASection from "./components/QASection";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans relative">
      {/* Navigation - Fixed Glassmorphism Navbar with dynamic visibility */}
      <div className="fixed top-0 inset-x-0 z-[100] px-4 py-4 pointer-events-none">
        <nav className={`mx-auto w-full max-w-6xl px-6 py-3 transition-all duration-300 rounded-full flex items-center justify-between pointer-events-auto border ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-brand-green/20" 
            : "bg-white/20 backdrop-blur-md shadow-lg border-white/30"
        }`}>
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <svg className={`transition-colors duration-300 ${scrolled ? "text-brand-green" : "text-white"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-neutral-900" : "text-white"}`}>AgroHub</span>
          </Link>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-7 text-sm font-semibold transition-colors duration-300 ${scrolled ? "text-neutral-700" : "text-white/90"}`}>
            <Link href="#home" className="hover:text-brand-green transition-colors">Home</Link>
            <div className={`w-1 h-1 rounded-full transition-colors ${scrolled ? "bg-neutral-300" : "bg-white/30"}`}></div>
            <Link href="#about" className="hover:text-brand-green transition-colors">About</Link>
            <div className={`w-1 h-1 rounded-full transition-colors ${scrolled ? "bg-neutral-300" : "bg-white/30"}`}></div>
            <Link href="#insights" className="hover:text-brand-green transition-colors">Insights</Link>
            <div className={`w-1 h-1 rounded-full transition-colors ${scrolled ? "bg-neutral-300" : "bg-white/30"}`}></div>
            <Link href="#qa" className="hover:text-brand-green transition-colors">Q&A</Link>
          </div>

          {/* CTA Button */}
          <Link href="/signup" className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full transition-all shadow-md ${
            scrolled 
              ? "text-white bg-brand-green hover:bg-brand-green-hover" 
              : "text-brand-green bg-white hover:bg-neutral-100"
          }`}>
            Join Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden p-2 transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative w-full h-[95vh] min-h-[750px] flex flex-col justify-between overflow-hidden sm:px-6 pt-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-x-0 top-0 bottom-0 rounded-4xl md:rounded-[3rem] sm:mx-4 overflow-hidden z-0 shadow-xl sm:top-4">
          <Image 
            src="/hero_bg.png" 
            alt="Farming and Gardening Background" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          
          {/* Bottom Cloud SVG Cover Inside Wrapper */}
          <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
            <svg className="w-[102%] h-16 md:h-24 lg:h-32 text-brand-light transform translate-y-1 -translate-x-[1%]" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 100 V 70 q 30 -50 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 V 100 H 0 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-4 mt-8 pb-20">
          <div className="flex flex-col items-center gap-5 max-w-3xl">
            <div className="flex flex-col items-center gap-2">
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              </svg>
              <span className="text-white font-medium tracking-wide">Community-Driven Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-2">
              Connect, Share, <br /> & Grow Together
            </h1>
            
            <p className="text-white/90 text-sm md:text-base max-w-xl leading-relaxed mb-4">
              A community-driven platform connecting farmers and agronomists. Share knowledge, solve challenges, and collaborate in real time for sustainable productivity.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/signup" className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-brand-green border-2 border-brand-green rounded-full hover:bg-brand-green-hover transition-all">
                Get Started
              </Link>
              <Link href="#" className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </section>
      
      {/* About Section */}
      <main id="about" className="flex-1 pb-10 pt-10 md:pt-16 md:pb-16 overflow-hidden relative">
        {/* Subtle background wavy line graphics */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
           <svg className="w-full h-full text-brand-green" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0,300 C300,100 600,500 1440,200" stroke="currentColor" strokeWidth="1" />
             <path d="M0,320 C300,120 600,520 1440,220" stroke="currentColor" strokeWidth="1" />
             <path d="M0,340 C300,140 600,540 1440,240" stroke="currentColor" strokeWidth="1" />
             <path d="M-100,280 C200,80 500,480 1340,180" stroke="currentColor" strokeWidth="1" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Image Composition */}
          <div className="relative grid grid-cols-2 gap-3 md:gap-4 lg:pr-6">
            {/* Left large pill */}
            <div className="relative w-full aspect-2/3 md:aspect-3/4 rounded-t-full rounded-b-4xl overflow-hidden shadow-xl mt-6">
              <Image 
                src="/about_img_1.png" 
                alt="Agronomist inspecting plants" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right stacked images */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative w-full aspect-4/5 rounded-t-full rounded-b-2xl overflow-hidden shadow-md">
                <Image 
                  src="/about_img_3.png" 
                  alt="Farmer in the field" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square rounded-b-full rounded-t-2xl overflow-hidden shadow-lg border-[3px] border-white">
                <Image 
                  src="/about_img_2.png" 
                  alt="Smiling farmer holding plant" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Circular Badge - Positioned slightly outside */}
            <div className="absolute -bottom-6 -left-2 md:left-auto md:-bottom-2 md:right-[30%] w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-1.5 shadow-xl flex items-center justify-center animate-spin-slow z-20">
              <div className="w-full h-full rounded-full border border-dashed border-brand-green flex flex-col items-center justify-center text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-7h2v5h-2z"/>
                </svg>
                <span className="text-[8px] md:text-[10px] font-bold leading-tight uppercase mt-0.5 text-center">About<br/>Us</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col gap-4 md:pl-2">
            <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              </svg>
              About Agro-hub
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-neutral-900">
              We'll Help You Build <br/> A Sustainable Future
            </h2>
            
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
              Backed by our community-driven expertise, we provide tools and knowledge to optimize your farming yield. Let us elevate your agricultural output with confidence, modern insights, and robust community support.
            </p>

            {/* Features Box */}
            <div className="bg-brand-green/5 rounded-2xl p-6 md:p-8 mt-2 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                {[
                  "Expert Agronomists", 
                  "Real-time Q&A", 
                  "Community Insights", 
                  "Yield Optimization", 
                  "Modern Farming Tools", 
                  "Market Connections"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-green rounded-full hover:bg-brand-green-hover transition-colors shadow-md">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Interactive Features / Services Section (Blob Layout) */}
      <section id="insights" className="relative w-full py-6 md:py-10 px-6 bg-[#e9f0ea] overflow-hidden mt-8 md:mt-0">
        {/* Wavy top divider from About */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none transform -translate-y-1 z-10">
          <svg className="w-full h-8 md:h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #14351a 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        {/* Floating Decorative Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-green rounded-full filter blur-[100px] opacity-[0.08] animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange rounded-full filter blur-[100px] opacity-[0.05] animate-blob animation-delay-2000"></div>

        {/* Decorative Floating Leaves */}
        <div className="absolute top-[10%] left-[2%] animate-float pointer-events-none hidden md:block z-30">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" fill="#22c55e" />
          </svg>
        </div>
        <div className="absolute top-[60%] right-[3%] animate-float-delayed pointer-events-none hidden lg:block transform -rotate-45 z-30 opacity-20 scale-75">
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" fill="#166534" />
          </svg>
        </div>
        <div className="absolute -bottom-10 left-[40%] animate-float pointer-events-none hidden lg:block z-30">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" fill="#4ade80" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-20">
          
          {/* Left Column - Image Composition */}
          <div className="relative w-full aspect-square max-w-[450px] mx-auto lg:mr-auto mt-6 lg:mt-0 order-2 lg:order-1">
            <div className="absolute top-4 left-4 w-1/2 h-1/2 border-4 border-dashed border-brand-green/20 rounded-full animate-spin-slow"></div>
            <div 
              className="absolute inset-0 border-[6px] border-white overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,53,26,0.3)] transition-all duration-1000 ease-in-out hover:scale-[1.02] z-10 bg-brand-light"
              style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop" 
                alt="Farmers harvesting" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="absolute bottom-2 -right-6 md:-right-10 w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-white overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
              <Image 
                src="/about_img_2.png" 
                alt="Agronomist smiling" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-6 lg:pl-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15] mb-2 drop-shadow-sm">
              Advanced Agricultural <br/> Ecosystem
            </h2>
            
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-4">
              Everything you need to succeed in modern farming, from marketplace access to expert consultations and predictive yield data.
            </p>
            
            <ul className="flex flex-col gap-5 text-neutral-600 font-medium text-xs md:text-sm">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-brand-green text-white rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span><strong className="text-neutral-900 block text-base mb-0.5">Built-in Marketplace:</strong> Turn your harvest into an economy. Buy/sell seeds, connect to buyers, and use group buying to reduce costs.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-brand-green text-white rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span><strong className="text-neutral-900 block text-base mb-0.5">Farm Management Dashboard:</strong> Track crops, predict yield output, and get profit/loss insights or alerts for optimal watering and harvesting.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-brand-green text-white rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span><strong className="text-neutral-900 block text-base mb-0.5">Expert Q&A Clinics:</strong> Direct agronomist consultations and real-time market insights to keep your farm ahead of trends.</span>
              </li>
            </ul>

            <Link href="/signup" className="bg-brand-green hover:bg-brand-green-hover transition-all duration-300 transform hover:-translate-y-1 text-white px-8 py-3.5 text-sm rounded-xl uppercase font-bold tracking-wider w-fit mt-3 shadow-lg">
              Get Started Now
            </Link>
          </div>

        </div>
      </section>

      {/* Worldclass Q&A Section */}
      <div id="qa">
        <QASection />
      </div>

      {/* Animated Testimonial / Community Voice Section */}
      <section className="relative w-full pt-32 pb-24 bg-brand-green overflow-hidden">
        {/* Pointy grass/wave top divider from Q&A */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20 transform -translate-y-1">
          <svg className="w-full h-12 md:h-20 text-brand-light fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        {/* Animated Background blobs */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-brand-green-hover rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-orange-hover rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <svg className="w-12 h-12 text-brand-orange mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">Loved By Farmers Worldwide</h2>
            <p className="text-brand-light/80 mt-4 max-w-2xl text-lg text-center mx-auto">Hear what our community members are saying about how Agro-hub is transforming their daily yields.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-4xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug mb-8">"Joining Agro-hub has completely transformed my harvest schedule. The knowledge I've gained is truly invaluable."</h3>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-white/20"><Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Farmer David" fill className="object-cover" /></div>
                <div><p className="font-bold text-white text-base">David M.</p><p className="text-brand-orange text-sm font-semibold">Organic Farmer</p></div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-4xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug mb-8">"The Farm Management Dashboard allows me to track yields effortlessly. Overwatering alerts alone saved my crop."</h3>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-white/20"><Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Sarah Jenkins" fill className="object-cover" /></div>
                <div><p className="font-bold text-white text-base">Sarah J.</p><p className="text-brand-orange text-sm font-semibold">Wheat Producer</p></div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-4xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug mb-8">"Connecting directly to buyers through the marketplace cut out middlemen. My profit margins are up 30% this year."</h3>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-white/20"><Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="Michael T." fill className="object-cover" /></div>
                <div><p className="font-bold text-white text-base">Michael T.</p><p className="text-brand-orange text-sm font-semibold">Commercial Grower</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-brand-light pt-28 pb-10">
        {/* Wavy top divider from Testimonial */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none transform -translate-y-1">
          <svg className="w-full h-12 md:h-16 text-brand-green fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-green text-white p-1.5 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-green">AgroHub</span>
            </div>
            <p className="text-neutral-600 mb-6">Connecting farmers, agronomists, and the market for a sustainable agricultural future.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-green mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="flex flex-col gap-4 text-neutral-600">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Community Hub</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Find Agronomists</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Market Prices</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-green mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4 text-neutral-600">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-green mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-neutral-600 mb-4">Get the latest farming insights delivered to your inbox.</p>
            <div className="flex border border-brand-green/20 rounded-full overflow-hidden bg-white focus-within:ring-2 focus-within:ring-brand-green transition-shadow">
              <input type="email" placeholder="Email address" className="w-full px-4 outline-none text-sm text-neutral-800" />
              <button className="bg-brand-green text-white px-5 py-3 font-semibold hover:bg-brand-green-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-green/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-500 text-sm">© {(new Date()).getFullYear()} Agro-hub Platform. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-brand-green">
            {/* Social Icons Placeholders */}
            <a href="#" className="hover:text-brand-orange transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            <a href="#" className="hover:text-brand-orange transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
