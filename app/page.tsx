import Image from "next/image";
import Link from "next/link";
import QASection from "./components/QASection";
import AiAssistant from "./components/AiAssistant";

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
      <main className="flex-1 pb-10 pt-10 md:pt-16 md:pb-16 overflow-hidden relative">
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
            <div className="relative w-full aspect-[2/3] md:aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-xl mt-6">
              <Image 
                src="/about_img_1.png" 
                alt="Agronomist inspecting plants" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right stacked images */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-md">
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

      {/* Interactive Features / Services Section (Blob Layout) */}
      <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col gap-5 lg:pr-6">
            <div className="flex items-center gap-2 text-brand-green font-bold text-xs tracking-widest uppercase">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
              Discover Our Platform
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15] mb-2">
              We provide expert agricultural tools
            </h2>
            
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-2">
              Connect with verified buyers, ask agronomists directly, and optimize your overall farming strategies using our comprehensive all-in-one suite designed specifically for sustainable growth.
            </p>
            
            <div className="flex flex-wrap sm:flex-nowrap gap-4 md:gap-6 mb-2">
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                  </div>
                  <span className="font-bold text-neutral-900 text-base leading-tight">Community<br/>Forums</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-bold text-neutral-900 text-base leading-tight">Market<br/>Insights</span>
                </div>
              </div>
              
              <div className="bg-brand-green rounded-2xl w-32 h-28 flex flex-col items-center justify-center text-white shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-black">20k+</span>
                <span className="text-xs font-semibold text-center mt-1">Active<br/>Farmers</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 mt-2 text-neutral-500 font-medium text-sm">
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg> Real-time crop pricing and market trends</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg> Direct agronomist consultations</li>
              <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg> Secure local buyer connections</li>
            </ul>

            <button className="bg-neutral-900 hover:bg-brand-green transition-colors text-white px-8 py-3.5 text-sm rounded uppercase font-bold tracking-wider w-fit mt-4 shadow-md">
              Find Out More
            </button>
          </div>

          {/* Right Image Composition */}
          <div className="relative w-full aspect-square max-w-[400px] mx-auto lg:ml-auto mt-6 lg:mt-0">
            {/* Main organic blob shape */}
            <div 
              className="absolute inset-0 border-[6px] border-brand-green overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out hover:scale-[1.02]"
              style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1592982537447-6f23f0bf0889?q=80&w=800&auto=format&fit=crop" 
                alt="Farmers harvesting" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Secondary overlapping circular image */}
            <div className="absolute bottom-2 -left-6 md:-left-10 w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-white overflow-hidden shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&auto=format&fit=crop" 
                alt="Agronomist smiling" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* Worldclass Q&A Section */}
      <QASection />

      {/* Animated Testimonial / Community Voice Section */}
      <section className="relative w-full py-20 bg-brand-green overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute top-0 left-10 w-64 h-64 bg-brand-green-hover rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-64 h-64 bg-brand-orange-hover rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 -ml-32 w-64 h-64 bg-brand-light rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
          <svg className="w-12 h-12 text-brand-orange mb-6 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug tracking-wide mb-8">
            "Joining Agro-hub has completely transformed my harvest schedule. The knowledge I've gained from the community is invaluable."
          </h2>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-orange">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="User Profile" width={56} height={56} className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Elias Niyongabo</p>
              <p className="text-white/60 text-sm">Organic Tomato Farmer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-light pt-20 pb-10 border-t border-brand-green/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-green text-white p-1.5 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-green">AgroFarm</span>
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

      {/* Floating AI Assistant */}
      <AiAssistant />
    </div>
  );
}
