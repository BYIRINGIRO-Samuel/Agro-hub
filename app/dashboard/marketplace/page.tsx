"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import StatCard from "../../components/StatCard";

const MarketPriceChart = dynamic(
  () => import("../../components/DashboardCharts").then((m) => m.MarketPriceChart),
  { ssr: false }
);

/* ─── KPI Cards ─────────────────────────────────── */
const marketCards = [
  {
    label: "Active Listings",
    value: "1,240",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    label: "Revenue This Month",
    value: "RWF 328k",
    variant: "filled" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Active Buyers",
    value: "4,830",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

/* ─── Products for sale (inputs) ───────────────── */
const inputs = [
  { name: "Premium Maize Seed", type: "Seeds", price: "RWF 4,500/kg", seller: "AgroPlus Ltd", rating: 4.8, yield: "+22%", badge: "🔥 Top Rated", stock: "In Stock" },
  { name: "NPK Fertilizer 20-10-10", type: "Fertilizer", price: "RWF 12,000/bag", seller: "FarmMart RW", rating: 4.6, yield: "+18%", badge: "✅ Verified", stock: "In Stock" },
  { name: "Organic Compost Mix", type: "Fertilizer", price: "RWF 3,200/bag", seller: "GreenRoots", rating: 4.9, yield: "+14%", badge: "🌿 Organic", stock: "Limited" },
  { name: "Drip Irrigation Kit", type: "Tools", price: "RWF 85,000/set", seller: "IrrigaTech", rating: 4.7, yield: "+30%", badge: "💧 Saves Water", stock: "In Stock" },
  { name: "Crop Pest Control Spray", type: "Pesticide", price: "RWF 6,800/L", seller: "ProtectFarm", rating: 4.4, yield: "+8%", badge: "🛡️ Safe", stock: "In Stock" },
  { name: "Bean Seed Hybrid B4", type: "Seeds", price: "RWF 3,800/kg", seller: "SeedWorks", rating: 4.5, yield: "+19%", badge: "⭐ Popular", stock: "Pre-order" },
];

/* ─── Crop listings (sell) ──────────────────────── */
const cropListings = [
  { crop: "Fresh Tomatoes", qty: "800 kg", price: "RWF 280/kg", seller: "Fabrice M.", location: "Kigali", demand: "High", freshness: "Today" },
  { crop: "Dry Maize",      qty: "2 Tons", price: "RWF 310/kg", seller: "Jean-Marie K.", location: "Musanze", demand: "High", freshness: "2 days ago" },
  { crop: "Green Beans",    qty: "450 kg", price: "RWF 400/kg", seller: "Aline N.",     location: "Huye",   demand: "Medium", freshness: "1 day ago" },
  { crop: "Sweet Potatoes", qty: "600 kg", price: "RWF 200/kg", seller: "Paul H.",      location: "Rubavu", demand: "Low",    freshness: "3 days ago" },
];

const demandStyle: Record<string, string> = {
  High:   "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low:    "bg-neutral-100 text-neutral-500",
};
const demandIcon: Record<string, string> = { High: "🔥", Medium: "⚖️", Low: "❄️" };

/* ─── Nearby Buyers ─────────────────────────────── */
const nearbyBuyers = [
  { name: "Kigali Central Market", location: "Kigali", distance: "2.1 km", buying: "Maize, Beans", trusted: true },
  { name: "Rwanda Trading Co.",    location: "Kigali", distance: "3.8 km", buying: "All crops",    trusted: true },
  { name: "Musanze Cooperative",   location: "Musanze", distance: "45 km", buying: "Potatoes, Beans", trusted: false },
];

export default function MarketplacePage() {
  const [tab, setTab] = useState<"buy" | "sell">("buy");
  const [search, setSearch] = useState("");

  const filteredInputs = inputs.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()) || i.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Marketplace</h1>
          <p className="text-neutral-500 font-medium mt-1">Intelligent agricultural trading — buy, sell, and get AI-powered insights</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-green text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20 self-start md:self-auto">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          List a Product
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {marketCards.map((card) => (
          <StatCard key={card.label} label={card.label} value={card.value} variant={card.variant} icon={card.icon} />
        ))}
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-linear-to-r from-brand-green to-[#1d5227] rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">🤖</div>
        <div className="flex-1">
          <p className="text-white font-extrabold text-sm">AI Recommendation for your farm</p>
          <p className="text-white/70 text-xs mt-1">Based on your yield data: You&apos;re losing 18% efficiency due to suboptimal fertilizer. Switch to <strong className="text-white">NPK 20-10-10</strong> and save ~RWF 45,000/season.</p>
        </div>
        <button className="bg-white text-brand-green font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shrink-0">
          Shop Now
        </button>
      </div>

      {/* Smart Search + Tabs */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search seeds, fertilizers, crops, tools…"
              className="w-full pl-9 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green placeholder-neutral-400"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Seeds", "Fertilizers", "Tools", "Pesticides"].map((cat) => (
              <button key={cat} className="px-3 py-2.5 text-xs font-bold bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-brand-green hover:text-white hover:border-brand-green transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Buy / Sell Toggle */}
        <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl w-fit mb-6">
          <button onClick={() => setTab("buy")} className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${tab === "buy" ? "bg-white text-brand-green shadow" : "text-neutral-500"}`}>🛒 Buy Inputs</button>
          <button onClick={() => setTab("sell")} className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${tab === "sell" ? "bg-white text-brand-green shadow" : "text-neutral-500"}`}>🌾 Sell Crops</button>
        </div>

        {tab === "buy" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredInputs.map((item) => (
              <div key={item.name} className="border border-neutral-100 rounded-2xl p-5 hover:border-brand-green/30 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-extrabold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">{item.type}</span>
                  <span className="text-[10px] font-bold text-neutral-500 bg-neutral-50 px-2 py-1 rounded-full">{item.badge}</span>
                </div>
                <h3 className="text-sm font-extrabold text-neutral-900 mb-1 group-hover:text-brand-green transition-colors">{item.name}</h3>
                <p className="text-xs text-neutral-400 mb-3">by {item.seller}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400 text-xs gap-0.5">
                    {"★".repeat(Math.floor(item.rating))}
                  </div>
                  <span className="text-xs font-bold text-neutral-600">{item.rating}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] bg-green-50 text-green-700 font-extrabold px-2 py-1 rounded-lg">📈 Yield {item.yield}</span>
                  <span className={`text-[11px] font-bold px-2 py-1 rounded-lg ${item.stock === "In Stock" ? "bg-green-50 text-green-600" : item.stock === "Limited" ? "bg-yellow-50 text-yellow-600" : "bg-blue-50 text-blue-600"}`}>{item.stock}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-extrabold text-neutral-900">{item.price}</p>
                  <button className="bg-brand-green text-white text-xs font-extrabold px-4 py-2 rounded-xl hover:bg-brand-green-hover transition-colors">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-100">
                  {["Crop", "Quantity", "Price", "Seller", "Location", "Demand", "Listed", "Action"].map((h) => (
                    <th key={h} className="text-left text-xs font-bold text-neutral-400 uppercase tracking-wider pb-3 pr-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50">
                {cropListings.map((l) => (
                  <tr key={l.crop} className="hover:bg-neutral-50/60 transition-colors">
                    <td className="py-3.5 pr-4 font-bold text-neutral-900">{l.crop}</td>
                    <td className="py-3.5 pr-4 text-neutral-500 font-medium">{l.qty}</td>
                    <td className="py-3.5 pr-4 font-extrabold text-neutral-900">{l.price}</td>
                    <td className="py-3.5 pr-4 text-neutral-600 font-medium">{l.seller}</td>
                    <td className="py-3.5 pr-4 text-neutral-500">{l.location}</td>
                    <td className="py-3.5 pr-4">
                      <span className={`text-[11px] font-extrabold px-2.5 py-1.5 rounded-full ${demandStyle[l.demand]}`}>
                        {demandIcon[l.demand]} {l.demand}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 text-neutral-400 text-xs">{l.freshness}</td>
                    <td className="py-3.5">
                      <button className="bg-brand-green text-white text-xs font-extrabold px-3 py-2 rounded-xl hover:bg-brand-green-hover transition-colors">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Live Market Prices + Nearby Buyers */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Price Chart */}
        <div className="lg:col-span-3 bg-white p-7 rounded-2xl shadow-sm border border-neutral-100">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold text-neutral-900">📊 Live Market Prices</h2>
            <span className="text-[10px] font-extrabold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">● Live</span>
          </div>
          <p className="text-xs text-neutral-400 mb-4">RWF per kg — Rwanda national average (last 8 months)</p>
          <MarketPriceChart />
          <p className="text-[11px] text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mt-3 font-semibold">
            💡 Maize prices expected to rise ~12% in 2 weeks — consider holding your stock.
          </p>
        </div>

        {/* Nearby Buyers + Group Buy */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex-1">
            <h2 className="text-base font-bold text-neutral-900 mb-4">📍 Nearby Buyers</h2>
            <div className="flex flex-col gap-3">
              {nearbyBuyers.map((b) => (
                <div key={b.name} className="flex items-start gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-brand-green/30 transition-colors">
                  <div className="w-9 h-9 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-sm font-bold text-neutral-900 truncate">{b.name}</p>
                      {b.trusted && <span className="text-[10px] font-extrabold text-brand-green bg-green-50 px-1.5 py-0.5 rounded-full shrink-0">✓ Trusted</span>}
                    </div>
                    <p className="text-xs text-neutral-400">{b.location} · {b.distance}</p>
                    <p className="text-[11px] text-neutral-500 mt-1 font-medium">Buying: {b.buying}</p>
                  </div>
                  <button className="text-xs font-bold text-brand-green border border-brand-green/30 px-2.5 py-1.5 rounded-lg hover:bg-brand-green hover:text-white transition-colors shrink-0">
                    Chat
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Group Buying */}
          <div className="bg-brand-green p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-xl">👥</div>
              <div>
                <h2 className="text-sm font-extrabold text-white">Group Buying</h2>
                <p className="text-white/50 text-xs">Pool together, save more</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <p className="text-white text-xs font-extrabold mb-1">Active Deal: NPK Fertilizer Bulk</p>
              <p className="text-white/60 text-[11px] mb-3">12 farmers joined · Target: 20 · Saves 30%</p>
              <div className="bg-white/20 rounded-full h-2">
                <div className="bg-brand-orange h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <p className="text-white/50 text-[10px] mt-1">60% filled</p>
            </div>
            <button className="w-full py-2.5 bg-white text-brand-green font-extrabold text-xs rounded-xl hover:bg-neutral-100 transition-colors">
              Join Group Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
