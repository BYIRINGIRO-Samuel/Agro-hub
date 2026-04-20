"use client";

import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  growth: string;
  growthPositive?: boolean;
  icon: React.ReactNode;
  variant?: "default" | "filled";
}

export default function StatCard({
  label,
  value,
  growth,
  growthPositive = true,
  icon,
  variant = "default",
}: StatCardProps) {
  const isFilled = variant === "filled";

  return (
    <div
      className={`rounded-2xl border p-5 flex items-center gap-5 transition-all hover:-translate-y-1 hover:shadow-lg ${
        isFilled
          ? "bg-brand-green border-brand-green text-white shadow-lg shadow-brand-green/30"
          : "bg-white border-neutral-200 text-neutral-900"
      }`}
    >
      {/* Icon box */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
          isFilled ? "bg-white/15" : "bg-[#e9f0ea]"
        }`}
      >
        <span className={isFilled ? "text-white" : "text-brand-green"}>
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 min-w-0">
        <p className={`text-xs font-bold uppercase tracking-widest truncate ${isFilled ? "text-white/70" : "text-neutral-500"}`}>
          {label}
        </p>
        <p className={`text-3xl font-extrabold leading-none tracking-tight ${isFilled ? "text-white" : "text-neutral-900"}`}>
          {value}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <svg
            className={`w-3.5 h-3.5 ${growthPositive ? "text-green-400" : "text-red-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={growthPositive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
          <span className={`text-xs font-bold ${growthPositive ? "text-green-400" : "text-red-400"}`}>
            {growth}
          </span>
          <span className={`text-xs font-medium ${isFilled ? "text-white/60" : "text-neutral-400"}`}>
            Since Last Month
          </span>
        </div>
      </div>
    </div>
  );
}
