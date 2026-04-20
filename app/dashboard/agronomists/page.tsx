"use client";

import React from "react";

export default function AgronomistsPage() {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </div>
      <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Agronomist Q&A Center</h1>
      <p className="text-neutral-500 max-w-lg mb-8">Direct consultation lines and verified clinics mapping with certified agronomists.</p>
    </div>
  );
}
