"use client";

import React from "react";

export default function MarketplacePage() {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      </div>
      <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Marketplace Module</h1>
      <p className="text-neutral-500 max-w-lg mb-8">This module will feature live commodity pricing, group buying options, and direct buyer connections. The UI is currently under construction.</p>
      
      <button className="bg-brand-green hover:bg-brand-green-hover text-white px-8 py-3 rounded-xl font-bold tracking-wide transition-colors">
        Notify Me When Live
      </button>
    </div>
  );
}
