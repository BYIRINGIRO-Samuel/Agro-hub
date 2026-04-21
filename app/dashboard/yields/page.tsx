"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import StatCard from "../../components/StatCard";

const YieldTrendChart = dynamic(
  () => import("../../components/DashboardCharts").then((m) => m.YieldTrendChart),
  { ssr: false }
);

/* ─── Stat Cards Data ──────────────────────────── */
const yieldCards = [
  {
    label: "Total Yield (Season)",
    value: "4.8 Tons",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Yield Per Hectare",
    value: "1.6 T/ha",
    variant: "filled" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    label: "vs Last Season",
    value: "+18%",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

/* ─── Insights ─────────────────────────────────── */
const insights = [
  {
    type: "warning",
    icon: "⚠️",
    title: "Low yield in Plot B",
    detail: "Delayed planting by 12 days reduced output by ~20%.",
    badge: "Planting",
  },
  {
    type: "danger",
    icon: "💧",
    title: "Over-irrigation detected",
    detail: "You are using 30% more water than optimal. Reduce to save costs.",
    badge: "Water",
  },
  {
    type: "success",
    icon: "🌱",
    title: "Switch crop recommendation",
    detail: "Replacing 20% of maize with sorghum could increase yield by 25%.",
    badge: "AI Advice",
  },
  {
    type: "info",
    icon: "🌦️",
    title: "Drought risk alert",
    detail: "Expected 2-week dry spell. Prepare supplemental irrigation.",
    badge: "Weather",
  },
];

/* ─── Plots ────────────────────────────────────── */
const plots = [
  { name: "Plot A — Maize",    area: "1.2 ha", yield: "2.4 T", health: "Good",       healthPrev: "↑ 12%",  status: "good" },
  { name: "Plot B — Beans",    area: "0.8 ha", yield: "0.9 T", health: "Needs Care", healthPrev: "↓ 8%",   status: "warn" },
  { name: "Plot C — Tomatoes", area: "0.6 ha", yield: "1.2 T", health: "Good",       healthPrev: "↑ 5%",   status: "good" },
  { name: "Plot D — Sorghum",  area: "0.4 ha", yield: "0.3 T", health: "Critical",   healthPrev: "↓ 22%",  status: "bad" },
];

/* ─── Predictions ──────────────────────────────── */
const predictions = [
  { crop: "Maize",    icon: "🌽", expected: "2.6 T", confidence: 88, risk: "Low",    info: "Optimal conditions" },
  { crop: "Beans",    icon: "🫘", expected: "1.0 T", confidence: 71, risk: "Medium", info: "Watch soil pH" },
  { crop: "Tomatoes", icon: "🍅", expected: "1.4 T", confidence: 82, risk: "Low",    info: "Market price rising" },
];

const statusStyle: Record<string, string> = {
  good: "bg-green-100 text-green-700",
  warn: "bg-yellow-100 text-yellow-700",
  bad:  "bg-red-100 text-red-700",
};
const insightStyle: Record<string, string> = {
  warning: "border-yellow-200 bg-yellow-50",
  danger:  "border-red-200 bg-red-50",
  success: "border-green-200 bg-green-50",
  info:    "border-blue-200 bg-blue-50",
};

export default function YieldsPage() {
  const [filter, setFilter] = useState("All Crops");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">My Yields</h1>
          <p className="text-neutral-500 font-medium mt-1">Farm Performance Command Center — Season 2024/B</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-brand-green text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add Yield Record
          </button>
          <button className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Export PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {yieldCards.map((card) => (
          <StatCard key={card.label} label={card.label} value={card.value} variant={card.variant} icon={card.icon} />
        ))}
      </div>

      {/* Trend Chart + AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-white p-7 rounded-2xl shadow-sm border border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-base font-bold text-neutral-900">Yield Trend</h2>
              <p className="text-xs text-neutral-400 font-medium mt-0.5">Weekly output by crop (tons)</p>
            </div>
            <div className="flex gap-2">
              {["All Crops", "Maize", "Beans", "Tomatoes"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${filter === f ? "bg-brand-green text-white shadow" : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <YieldTrendChart />
          <p className="text-[11px] text-yellow-600 bg-yellow-50 border border-yellow-100 rounded-lg px-3 py-2 mt-4 font-semibold">
            ⚠️ Maize yield dipped in Week 6 — correlates with 3-day rainfall gap. Consider soil moisture alerts.
          </p>
        </div>

        {/* AI Insights */}
        <div className="bg-brand-green p-6 rounded-2xl flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center text-base">🤖</div>
            <div>
              <h2 className="text-sm font-bold text-white">AI Smart Insights</h2>
              <p className="text-white/50 text-[10px] font-medium">Updated 2 hours ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {insights.map((ins) => (
              <div key={ins.title} className={`rounded-xl p-3.5 border ${insightStyle[ins.type]}`}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-xs font-bold text-neutral-900">{ins.icon} {ins.title}</p>
                  <span className="text-[10px] font-extrabold bg-white/60 px-2 py-0.5 rounded-full text-neutral-600 shrink-0">{ins.badge}</span>
                </div>
                <p className="text-[11px] text-neutral-600">{ins.detail}</p>
                <button className="mt-1.5 text-[10px] font-bold text-brand-green underline underline-offset-2">Why? →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plot Breakdown */}
      <div className="bg-white p-7 rounded-2xl shadow-sm border border-neutral-100">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-neutral-900">Plot-Level Breakdown</h2>
          <button className="text-xs font-bold text-brand-green hover:underline">+ Add Plot</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                {["Plot / Crop", "Area", "Yield This Season", "vs Last Season", "Health Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-bold text-neutral-400 uppercase tracking-wider pb-3 pr-4 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {plots.map((p) => (
                <tr key={p.name} className="hover:bg-neutral-50/60 transition-colors">
                  <td className="py-3.5 pr-4 font-bold text-neutral-900 whitespace-nowrap">{p.name}</td>
                  <td className="py-3.5 pr-4 text-neutral-500 font-medium">{p.area}</td>
                  <td className="py-3.5 pr-4 font-extrabold text-neutral-900">{p.yield}</td>
                  <td className="py-3.5 pr-4 font-bold text-sm">
                    <span className={p.healthPrev.startsWith("↑") ? "text-green-600" : "text-red-500"}>{p.healthPrev}</span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className={`text-xs font-extrabold px-3 py-1.5 rounded-full ${statusStyle[p.status]}`}>{p.health}</span>
                  </td>
                  <td className="py-3.5">
                    <button className="text-xs font-bold text-brand-green hover:underline mr-3">Edit</button>
                    <button className="text-xs font-bold text-neutral-400 hover:text-neutral-600">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Yield Prediction + Revenue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2 bg-white p-7 rounded-2xl shadow-sm border border-neutral-100">
          <h2 className="text-base font-bold text-neutral-900 mb-5">🔮 Yield Predictions — Next Harvest</h2>
          <div className="flex flex-col gap-4">
            {predictions.map((p) => (
              <div key={p.crop} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-brand-green/30 transition-colors">
                <div className="text-2xl w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm shrink-0">{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-bold text-neutral-900">{p.crop}</p>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${p.risk === "Low" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {p.risk} Risk
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-neutral-200 rounded-full h-1.5">
                      <div className="bg-brand-green h-1.5 rounded-full" style={{ width: `${p.confidence}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-brand-green shrink-0">{p.confidence}%</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-medium mt-1">{p.info}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-extrabold text-neutral-900">{p.expected}</p>
                  <p className="text-[10px] text-neutral-400">Expected</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Estimate */}
        <div className="bg-brand-green p-7 rounded-2xl flex flex-col">
          <h2 className="text-base font-bold text-white mb-1">💰 Revenue Estimate</h2>
          <p className="text-white/50 text-xs mb-6">Based on current market prices</p>
          <div className="flex flex-col gap-4 flex-1">
            {[
              { crop: "Maize 2.4T",    price: "RWF 310/kg", rev: "744,000" },
              { crop: "Beans 0.9T",    price: "RWF 400/kg", rev: "360,000" },
              { crop: "Tomatoes 1.2T", price: "RWF 280/kg", rev: "336,000" },
            ].map((r) => (
              <div key={r.crop} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                <div>
                  <p className="text-white text-sm font-bold">{r.crop}</p>
                  <p className="text-white/50 text-[11px]">{r.price}</p>
                </div>
                <p className="text-brand-orange font-extrabold text-sm">{r.rev}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-white/70 text-sm font-bold">Total Estimated</p>
              <p className="text-white font-extrabold text-xl">RWF 1.44M</p>
            </div>
          </div>
          <button className="mt-4 w-full py-3 bg-white text-brand-green font-extrabold text-sm rounded-xl hover:bg-neutral-100 transition-colors">
            View Full Report
          </button>
        </div>
      </div>

    </div>
  );
}
