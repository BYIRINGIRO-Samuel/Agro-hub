"use client";

import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  variant?: "default" | "filled";
}

export default function StatCard({
  label,
  value,
  icon,
  variant = "default",
}: StatCardProps) {
  const isFilled = variant === "filled";

  return (
    <div
      className={`rounded-2xl border p-6 flex items-center gap-0 min-h-[110px] transition-all hover:-translate-y-1 hover:shadow-lg ${
        isFilled
          ? "bg-brand-green border-brand-green text-white shadow-lg shadow-brand-green/30"
          : "bg-white border-neutral-200 text-neutral-900"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
          isFilled ? "bg-white/15" : "bg-[#e9f0ea]"
        }`}
      >
        <span className={isFilled ? "text-white" : "text-brand-green"}>
          {icon}
        </span>
      </div>

      {/* Vertical divider line */}
      <div className={`w-px h-12 mx-5 shrink-0 ${isFilled ? "bg-white/20" : "bg-neutral-200"}`}></div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className={`text-xs font-bold uppercase tracking-widest truncate ${isFilled ? "text-white/70" : "text-neutral-500"}`}>
          {label}
        </p>
        <p className={`text-3xl font-extrabold leading-tight tracking-tight ${isFilled ? "text-white" : "text-neutral-900"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
