import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans">
      {/* Hero Section */}
      <section className="bg-brand-green text-white rounded-b-[3rem] md:rounded-b-[6rem] relative overflow-hidden px-6 py-6 md:px-12 md:py-8 layout-content">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 md:mb-24 relative z-10 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white text-brand-green p-1.5 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight">AgroFarm</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-brand-orange transition-colors">Home</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Community</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Insights</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Q&A</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Agronomists</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">About Us</Link>
          </div>

          {/* CTA Button */}
          <Link href="#" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-brand-orange rounded-full hover:bg-brand-orange-hover transition-colors shadow-sm">
            Join Platform
          </Link>

          {/* Mobile Menu Toggle (Placeholder) */}
          <button className="md:hidden p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pb-12 md:pb-24 relative z-10">
          
          {/* Left Text */}
          <div className="flex flex-col gap-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight">
              Connect, Share, <br className="hidden md:block" /> & Grow Together
            </h1>
            <p className="text-brand-light/80 text-base md:text-lg max-w-lg leading-relaxed">
              A community-driven platform connecting farmers and agronomists. Share knowledge, solve challenges, and collaborate in real time for sustainable productivity.
            </p>
            <div className="pt-2">
              <Link href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-brand-orange rounded-full hover:bg-brand-orange-hover transition-all shadow-md hover:shadow-lg">
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-4/3 md:aspect-5/4">
            <div className="absolute inset-x-0 bottom-0 top-12 md:top-8 bg-brand-green-hover rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-xl z-0" />
            <Image 
              src="/hero.png" 
              alt="Farmer smiling in a field" 
              fill
              className="object-cover object-center rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-xl z-10 shadow-xl"
              priority
            />
          </div>
        </div>

      </section>
      
      {/* Rest of the page content would go here later */}
      <main className="flex-1 py-16">
        {/* Placeholder to show scrolling / rest of page */}
      </main>
    </div>
  );
}
