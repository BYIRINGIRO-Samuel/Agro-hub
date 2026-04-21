"use client";

import dynamic from "next/dynamic";
import React from "react";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[200px] bg-[#e9f0ea] rounded-xl flex items-center justify-center">
      <span className="text-sm text-brand-green font-semibold animate-pulse">Loading map…</span>
    </div>
  ),
});

export default function RegionalMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <LeafletMap />
    </div>
  );
}
