"use client";

import React from "react";

export default function YieldsPage() {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </div>
      <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">My Yields Dashboard</h1>
      <p className="text-neutral-500 max-w-lg mb-8">Track your crop lifecycles, log expenses, and get AI-driven harvest predictions. Feature is upcoming.</p>
    </div>
  );
}
