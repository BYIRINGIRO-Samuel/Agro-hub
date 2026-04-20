import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[95vh] min-h-[750px] flex flex-col justify-between overflow-hidden sm:px-6">
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
      
      {/* About Section */}
      <main className="flex-1 pb-16 pt-16 md:pt-24 md:pb-24 overflow-hidden relative">
        {/* Subtle background wavy line graphics */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
           <svg className="w-full h-full text-brand-green" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0,300 C300,100 600,500 1440,200" stroke="currentColor" strokeWidth="1" />
             <path d="M0,320 C300,120 600,520 1440,220" stroke="currentColor" strokeWidth="1" />
             <path d="M0,340 C300,140 600,540 1440,240" stroke="currentColor" strokeWidth="1" />
             <path d="M-100,280 C200,80 500,480 1340,180" stroke="currentColor" strokeWidth="1" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Image Composition */}
          <div className="relative grid grid-cols-2 gap-4 md:gap-6 lg:pr-8">
            {/* Left large pill */}
            <div className="relative w-full aspect-[2/3] md:aspect-[1/2] rounded-t-full rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden shadow-xl mt-8">
              <Image 
                src="/about_img_1.png" 
                alt="Agronomist inspecting plants" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right stacked images */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative w-full aspect-[3/4] md:aspect-square rounded-t-full rounded-b-3xl overflow-hidden shadow-md">
                <Image 
                  src="/about_img_3.png" 
                  alt="Farmer in the field" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/5] rounded-b-full rounded-t-3xl overflow-hidden shadow-lg border-4 border-white">
                <Image 
                  src="/about_img_2.png" 
                  alt="Smiling farmer holding plant" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Circular Badge - Positioned slightly outside */}
            <div className="absolute -bottom-8 -left-4 md:left-auto md:-bottom-2 md:right-[30%] w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center animate-spin-slow">
              <div className="w-full h-full rounded-full border border-dashed border-brand-green flex flex-col items-center justify-center text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-7h2v5h-2z"/>
                </svg>
                <span className="text-[10px] md:text-xs font-bold leading-tight uppercase mt-1 text-center">About<br/>Us</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col gap-6 md:pl-4">
            <div className="flex items-center gap-2 text-brand-green font-semibold text-sm uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              </svg>
              About Agro-hub
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-foreground text-neutral-900">
              We'll Help You Build <br/> A Sustainable Future
            </h2>
            
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl">
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
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
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
    </div>
  );
}
