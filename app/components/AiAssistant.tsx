"use client";

import { useState } from "react";

export default function AiAssistant() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-end justify-end group">
      
      {/* Floating expanded dialog */}
      <div 
        className={`absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-5 w-64 md:w-72 transform transition-all duration-500 origin-bottom-right ${
          isHovered ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-neutral-100">
          <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white p-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 leading-tight">AI Agronomist</h4>
            <span className="text-xs text-brand-green font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span> Online
            </span>
          </div>
        </div>
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
          Upload a photo of a sick plant or ask me any farming question!
        </p>
        <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm py-2.5 rounded-xl transition-colors">
          Start Chat
        </button>
      </div>

      {/* Main Floating Button */}
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 md:w-20 md:h-20 bg-brand-green hover:bg-brand-green-hover text-white rounded-full shadow-[0_10px_40px_-10px_rgba(20,53,26,0.6)] flex items-center justify-center transform hover:scale-110 transition-all duration-300 relative"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-brand-green opacity-50 animate-ping" style={{ animationDuration: '3s' }}></div>
        
        {/* Core Icon */}
        <svg className="w-8 h-8 md:w-10 md:h-10 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      </button>
    </div>
  );
}
