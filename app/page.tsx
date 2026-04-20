import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[95vh] min-h-[750px] flex flex-col justify-between overflow-hidden sm:px-6">
        {/* Background Image & Overlay */}
        <div className="absolute inset-x-0 top-0 bottom-0 rounded-[2rem] md:rounded-[3rem] sm:mx-4 overflow-hidden z-0 shadow-xl sm:top-4">
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
        
        {/* Navigation - Floating White Pill */}
        <nav className="relative z-20 mx-auto w-full max-w-6xl mt-8 px-4 sm:px-6 md:px-8 py-3.5 bg-white rounded-full flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="text-brand-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-900">AgroFarm</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-neutral-700">
            <Link href="#" className="hover:text-brand-green transition-colors">Home</Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <Link href="#" className="hover:text-brand-green transition-colors">Community</Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <Link href="#" className="hover:text-brand-green transition-colors">Insights</Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <Link href="#" className="hover:text-brand-green transition-colors">Q&A</Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <Link href="#" className="hover:text-brand-green transition-colors">Agronomists</Link>
          </div>

          {/* CTA Button */}
          <Link href="#" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-brand-green rounded-full hover:bg-brand-green-hover transition-colors shadow-md">
            Join Platform
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </nav>

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
              <Link href="#" className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-brand-green border-2 border-brand-green rounded-full hover:bg-brand-green-hover transition-all">
                Get Started
              </Link>
              <Link href="#" className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </section>
      
      {/* Rest of the page content would go here later */}
      <main className="flex-1 pb-16 pt-8">
        {/* About section preview (based on design) */}
        <div className="max-w-5xl mx-auto px-6 py-12">
           {/* Section to implement next */}
        </div>
      </main>
    </div>
  );
}
