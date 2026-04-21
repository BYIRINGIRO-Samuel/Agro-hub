"use client";

import React from "react";
import StatCard from "../components/StatCard";

export default function DashboardOverviewPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-2 tracking-tight">Overview</h1>
        <p className="text-neutral-500 font-medium">Welcome back, Fabrice. Here is what&apos;s happening in your farm today.</p>
      </div>

      {/* KPI Cards - alternating white/green */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <StatCard
          label="Total Revenue"
          variant="default"
          value="RWF 450k"
          icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard
          label="Active Farmers"
          variant="filled"
          value="20,412"
          icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        <StatCard
          label="Total Yield Volume"
          variant="default"
          value="4.8 Tons"
          icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
        />
      </div>

      {/* Row 1: Yearly Revenue Bar Chart + Top Agronomists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white p-7 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-neutral-900">Yearly Revenue</h2>
            <select className="bg-neutral-50 px-3 py-1.5 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-600 focus:outline-none focus:ring-1 focus:ring-brand-green">
              <option>2024</option><option>2023</option>
            </select>
          </div>
          <div className="flex gap-3 flex-1 items-end">
            <div className="flex flex-col justify-between text-[10px] text-neutral-400 font-medium h-44 text-right pr-1 pb-5">
              <span>500k</span><span>400k</span><span>300k</span><span>200k</span><span>100k</span><span>0</span>
            </div>
            <div className="flex-1">
              <div className="relative h-44 w-full">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className="absolute w-full border-t border-neutral-100" style={{ bottom: `${i*25}%` }}></div>
                ))}
                <div className="absolute inset-0 flex items-end justify-around px-1 gap-1.5">
                  {[
                    { month: "Jan", h: "35%", fill: false },
                    { month: "Feb", h: "55%", fill: false },
                    { month: "Mar", h: "45%", fill: true },
                    { month: "Apr", h: "70%", fill: true },
                    { month: "May", h: "60%", fill: false },
                    { month: "Jun", h: "80%", fill: true },
                    { month: "Jul", h: "50%", fill: false },
                    { month: "Aug", h: "90%", fill: true },
                    { month: "Sep", h: "40%", fill: false },
                    { month: "Oct", h: "65%", fill: true },
                    { month: "Nov", h: "75%", fill: false },
                    { month: "Dec", h: "85%", fill: true },
                  ].map((bar) => (
                    <div key={bar.month} className="flex flex-col items-center gap-1 flex-1">
                      <div
                        className={`w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer ${bar.fill ? "bg-brand-green" : "bg-brand-green/20"}`}
                        style={{ height: bar.h }}
                      ></div>
                      <span className="text-[9px] text-neutral-400 font-medium">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Agronomists */}
        <div className="bg-brand-green p-7 rounded-2xl flex flex-col">
          <h2 className="text-base font-bold text-white mb-6">Top Agronomists</h2>
          <div className="flex flex-col gap-4">
            {[
              { name: "Dr. Jean Paul", role: "Soil Expert", score: "98%" },
              { name: "Aline Mukamana", role: "Crop Specialist", score: "94%" },
              { name: "Eric Nshimiye", role: "Irrigation Lead", score: "91%" },
              { name: "Grace Uwase", role: "Plant Pathologist", score: "88%" },
              { name: "David Habimana", role: "Farm Advisor", score: "85%" },
            ].map((a, idx) => (
              <div key={a.name} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 text-white text-xs font-extrabold flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  #{idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-bold truncate">{a.name}</p>
                  <p className="text-white/60 text-xs truncate">{a.role}</p>
                </div>
                <span className="text-brand-orange text-xs font-extrabold">{a.score}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2.5 rounded-xl border border-white/20 text-white text-xs font-bold hover:bg-white/10 transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Row 2: Regional Activity + Donut Stats + Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Regional Farm Activity */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
          <h2 className="text-base font-bold text-neutral-900 mb-5">Regional Activity</h2>
          <div className="flex-1 bg-[#e9f0ea] rounded-xl flex items-center justify-center p-4 relative overflow-hidden min-h-[150px]">
            <svg viewBox="0 0 200 140" className="w-full h-full opacity-70" fill="none">
              <ellipse cx="60" cy="70" rx="40" ry="30" fill="#14351a" fillOpacity="0.25"/>
              <ellipse cx="120" cy="50" rx="50" ry="35" fill="#14351a" fillOpacity="0.15"/>
              <ellipse cx="140" cy="100" rx="35" ry="20" fill="#14351a" fillOpacity="0.35"/>
              <ellipse cx="30" cy="110" rx="20" ry="15" fill="#14351a" fillOpacity="0.1"/>
              <circle cx="140" cy="100" r="5" fill="#f28b03"/>
              <circle cx="60" cy="70" r="4" fill="#14351a"/>
            </svg>
            <div className="absolute bottom-3 right-3 flex gap-2">
              <span className="text-[10px] font-bold bg-white px-2 py-1 rounded-full shadow text-brand-green">Kigali</span>
              <span className="text-[10px] font-bold bg-brand-green px-2 py-1 rounded-full shadow text-white">Musanze</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[{ label: "Kigali", val: "8,400" }, { label: "Musanze", val: "5,200" }, { label: "Huye", val: "3,800" }, { label: "Rubavu", val: "3,012" }].map(r => (
              <div key={r.label} className="bg-neutral-50 rounded-xl p-3">
                <p className="text-xs text-neutral-400 font-semibold">{r.label}</p>
                <p className="text-sm font-extrabold text-neutral-900">{r.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Statistics */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
          <h2 className="text-base font-bold text-neutral-900 mb-5">Farm Statistics</h2>
          <div className="flex flex-col items-center gap-5">
            <svg viewBox="0 0 120 120" className="w-32 h-32 -rotate-90">
              <circle cx="60" cy="60" r="44" fill="none" stroke="#e9f0ea" strokeWidth="16"/>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#14351a" strokeWidth="16"
                strokeDasharray="166 110" strokeLinecap="round"/>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#f28b03" strokeWidth="16"
                strokeDasharray="83 193" strokeDashoffset="-166" strokeLinecap="round"/>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#e9f0ea" strokeWidth="16"
                strokeDasharray="28 249" strokeDashoffset="-249" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col gap-2.5 w-full">
              {[
                { label: "Healthy Crops", pct: "60%", color: "bg-brand-green" },
                { label: "Under Care", pct: "30%", color: "bg-brand-orange" },
                { label: "Dormant", pct: "10%", color: "bg-[#e9f0ea] border border-neutral-300" },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full shrink-0 ${s.color}`}></div>
                    <span className="text-xs text-neutral-600 font-semibold">{s.label}</span>
                  </div>
                  <span className="text-xs font-extrabold text-neutral-900">{s.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Calendar */}
        <div className="bg-brand-green p-7 rounded-2xl flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-white">Calendar</h2>
            <span className="text-white/70 text-xs font-semibold">April 2025</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] text-white/50 font-bold mb-2">
            {["S","M","T","W","T","F","S"].map((d, i) => <span key={i}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-xs text-white/80 font-medium">
            {[...Array(2).fill(null), ...Array(30).fill(null).map((_, i) => i + 1)].map((d, i) => (
              <span key={i} className={`py-1.5 rounded-lg cursor-pointer transition-colors ${d === 21 ? "bg-white text-brand-green font-extrabold" : d === null ? "" : "hover:bg-white/20"}`}>
                {d ?? ""}
              </span>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">Today&apos;s Plan</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                <div className="w-2 h-2 bg-brand-orange rounded-full shrink-0"></div>
                <p className="text-white text-xs font-semibold">Irrigation check — Block A</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                <div className="w-2 h-2 bg-white rounded-full shrink-0"></div>
                <p className="text-white text-xs font-semibold">Market listing — Tomatoes</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
