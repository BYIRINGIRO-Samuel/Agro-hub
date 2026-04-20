"use client";

import React from "react";

export default function CommunityPage() {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      </div>
      <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Farmer Community</h1>
      <p className="text-neutral-500 max-w-lg mb-8">Connect with thousands of local farmers, participate in local forums, and share your agricultural stories.</p>
    </div>
  );
}
