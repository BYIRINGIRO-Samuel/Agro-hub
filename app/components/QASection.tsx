"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I identify leaf rust early on my tomato plants?",
    answer: "Look for small pale spots on the upper leaves that turn yellow, while the undersides show orange or rusty-brown pustules. Our AI Assistant can instantly analyze plant photos to confirm.",
  },
  {
    question: "What's the best organic fertilizer for high-yield maize?",
    answer: "A mix of well-rotted cattle manure and composted chicken manure applied two weeks before planting provides a balanced nitrogen boost without synthetic chemicals.",
  },
  {
    question: "How can I connect with local buyers directly through Agro-hub?",
    answer: "Navigate to our 'Market Insights' tab. You can list your estimated harvest dates and yields, and verified local distributors will be able to message you directly securely.",
  },
  {
    question: "Are the resident agronomist consultations free?",
    answer: "All members get 3 free AI-assisted consultations per month. For deep-dive farm visits or complex video consultations, our verified agronomists charge a subsidized flat rate.",
  },
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-24 md:pt-28 pb-16 px-6 bg-brand-light relative overflow-hidden">
      {/* Angled SVG Top Divider pointing into the previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0 transform -translate-y-1">
          <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M1200 120L0 16.48V0h1200v120z" className="text-[#d8eedf] fill-current" />
          </svg>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10">
        
        {/* Left Side: Sticky Intro & Search */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-4">
              Platform & <br/> Agronomy Q&A
            </h2>
            <p className="text-neutral-600 text-base mb-6 leading-relaxed max-w-sm">
              Discover answers to common farming challenges and learn how to make the most of the Agro-hub ecosystem.
            </p>
            
            {/* Mock Search Box */}
            <div className="relative group overflow-hidden rounded-full max-w-md shadow-sm border border-neutral-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green/20 transition-all">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-neutral-400 group-focus-within:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input type="text" placeholder="Search for crop diseases, tools..." className="w-full pl-10 pr-4 py-3 bg-transparent outline-none text-neutral-800 placeholder-neutral-400 font-medium text-sm" />
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`group cursor-pointer rounded-3xl p-5 md:p-6 transition-all duration-500 ease-in-out border ${
                  isOpen 
                    ? "bg-white border-transparent shadow-[0_10px_30px_-10px_rgba(20,53,26,0.1)] scale-[1.01]" 
                    : "bg-transparent border-neutral-200 hover:border-brand-green/30 hover:bg-white/50"
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-brand-green" : "text-neutral-800 group-hover:text-neutral-900"}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-500 ${isOpen ? "bg-brand-green text-white rotate-45" : "bg-neutral-100 text-neutral-500 group-hover:bg-brand-green/10 group-hover:text-brand-green"}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
