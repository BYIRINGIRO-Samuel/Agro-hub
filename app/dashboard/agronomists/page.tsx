"use client";

import React, { useState } from "react";
import StatCard from "../../components/StatCard";

/* ─── Stat Cards ────────────────────────────────── */
const expertCards = [
  {
    label: "Verified Agronomists",
    value: "128",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Consultations Done",
    value: "4,820",
    variant: "filled" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    label: "Avg. Response Time",
    value: "< 2 hrs",
    variant: "default" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ─── Agronomist Data ───────────────────────────── */
const agronomists = [
  {
    name: "Dr. Jean Paul Nkurunziza", specialty: "Soil Science & Fertility", location: "Kigali",
    experience: "12 yrs", rating: 4.9, reviews: 312, available: true,
    crops: ["Maize", "Beans", "Sorghum"], avatar: "JP", consultations: 820,
    price: "Free", badge: "⭐ Top Rated", bio: "PhD in Soil Science from University of Rwanda. Expert in soil fertility management and precision agriculture.",
  },
  {
    name: "Aline Mukamana", specialty: "Crop Disease & Pest Management", location: "Musanze",
    experience: "8 yrs", rating: 4.8, reviews: 187, available: true,
    crops: ["Tomatoes", "Potatoes", "Beans"], avatar: "AM", consultations: 543,
    price: "RWF 5k/session", badge: "🏆 Expert", bio: "MSc Plant Pathology. Specialized in integrated pest management and organic farming solutions.",
  },
  {
    name: "Eric Nshimiye", specialty: "Irrigation & Water Management", location: "Huye",
    experience: "10 yrs", rating: 4.7, reviews: 143, available: false,
    crops: ["Rice", "Maize", "Vegetables"], avatar: "EN", consultations: 412,
    price: "RWF 3k/session", badge: "💧 Specialist", bio: "BSc Agricultural Engineering. Focuses on efficient water use, drip irrigation systems, and drought-resistant farming.",
  },
  {
    name: "Grace Uwase", specialty: "Seed Technology & Selection", location: "Rubavu",
    experience: "6 yrs", rating: 4.9, reviews: 98, available: true,
    crops: ["Seeds", "Maize", "Sorghum"], avatar: "GU", consultations: 298,
    price: "Free", badge: "🌱 Seed Expert", bio: "MSc Seed Technology. Expert at selecting high-yield seed varieties tailored to Rwanda's diverse climatic zones.",
  },
  {
    name: "David Habimana", specialty: "Organic & Sustainable Farming", location: "Kigali",
    experience: "9 yrs", rating: 4.6, reviews: 201, available: true,
    crops: ["All Crops", "Compost", "Herbs"], avatar: "DH", consultations: 631,
    price: "RWF 4k/session", badge: "🌿 Organic", bio: "Certified organic farming consultant. Works with smallholder farmers to build sustainable, chemical-free production systems.",
  },
  {
    name: "Marie Claire K.", specialty: "Climate Adaptation & Forecasting", location: "Kigali",
    experience: "7 yrs", rating: 4.8, reviews: 114, available: false,
    crops: ["Maize", "Wheat", "Pasture"], avatar: "MC", consultations: 345,
    price: "RWF 6k/session", badge: "🌦️ Climate", bio: "MSc Agrometeorology. Helps farmers plan planting schedules and input use based on climate patterns and seasonal forecasts.",
  },
];

const expertArticles = [
  { title: "How to manage Fall Armyworm organically in 2025", author: "Dr. Jean Paul", crop: "Maize", reads: "4.2k", time: "5 min read" },
  { title: "The right NPK ratio for bean growth in Rwanda's hills", author: "Aline Mukamana", crop: "Beans", reads: "3.1k", time: "7 min read" },
  { title: "Drip irrigation setup on a budget — complete guide", author: "Eric Nshimiye", crop: "All", reads: "6.8k", time: "10 min read" },
  { title: "Soil pH and why it determines everything about your farm", author: "Dr. Jean Paul", crop: "All", reads: "5.5k", time: "8 min read" },
];

export default function AgronomistsPage() {
  const [search, setSearch] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");
  const [bookingTarget, setBookingTarget] = useState<string | null>(null);

  const specs = ["All", "Soil Science", "Pest Management", "Irrigation", "Seeds", "Organic"];

  const filtered = agronomists.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.specialty.toLowerCase().includes(search.toLowerCase());
    const matchSpec = selectedSpec === "All" || a.specialty.toLowerCase().includes(selectedSpec.toLowerCase());
    return matchSearch && matchSpec;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Agronomists</h1>
          <p className="text-neutral-500 font-medium mt-1">Verified Expert Hub — get professional guidance from certified agronomists</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-green text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20 self-start md:self-auto">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Register as Agronomist
        </button>
      </div>

      {/* Booking Modal */}
      {bookingTarget && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
            <button onClick={() => setBookingTarget(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-3">
                {bookingTarget.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <h2 className="text-xl font-extrabold text-neutral-900">Book Consultation</h2>
              <p className="text-neutral-400 text-sm mt-1">with {bookingTarget}</p>
            </div>
            <div className="flex gap-2 mb-4">
              {["Chat 💬", "Call 📞", "Video 📹"].map((type) => (
                <button key={type} className="flex-1 py-2.5 text-xs font-extrabold border border-neutral-200 rounded-xl hover:bg-brand-green hover:text-white hover:border-brand-green transition-all">{type}</button>
              ))}
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <input type="date" className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30" />
              <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none">
                <option>09:00 AM</option><option>11:00 AM</option><option>02:00 PM</option><option>04:00 PM</option>
              </select>
              <textarea rows={3} placeholder="Describe your issue briefly…" className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 resize-none" />
            </div>
            <button className="w-full bg-brand-green text-white font-extrabold py-3 rounded-xl hover:bg-brand-green-hover transition-colors">
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {expertCards.map((card) => (
          <StatCard key={card.label} label={card.label} value={card.value} variant={card.variant} icon={card.icon} />
        ))}
      </div>

      {/* AI + Expert Hybrid Banner */}
      <div className="bg-linear-to-r from-brand-green to-[#1d5227] rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex -space-x-3">
            {["JP", "AM", "EN"].map((a) => (
              <div key={a} className="w-10 h-10 rounded-full bg-white/20 text-white text-xs font-extrabold flex items-center justify-center border-2 border-brand-green">{a}</div>
            ))}
          </div>
          <div>
            <p className="text-white font-extrabold text-sm">AI + Expert Intelligence Loop</p>
            <p className="text-white/60 text-xs mt-0.5">AI gives instant answers → Agronomist validates → You get the best of both worlds</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white/10 px-4 py-2.5 rounded-xl text-center">
            <p className="text-white text-xs font-extrabold">3 Experts</p>
            <p className="text-white/50 text-[10px]">Online now</p>
          </div>
          <button className="bg-white text-brand-green font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shrink-0">
            Get AI + Expert Answer
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or specialty…"
            className="w-full pl-9 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {specs.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSpec(s)}
              className={`px-3.5 py-2.5 text-xs font-extrabold rounded-xl border transition-all whitespace-nowrap ${selectedSpec === s ? "bg-brand-green text-white border-brand-green" : "bg-white border-neutral-200 text-neutral-600 hover:border-brand-green/30"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Agronomist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((agro) => (
          <div key={agro.name} className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg hover:border-brand-green/20 transition-all overflow-hidden group">
            {/* Card top */}
            <div className="bg-linear-to-br from-[#e9f0ea] to-[#d1e8d6] p-5 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green text-white flex items-center justify-center text-lg font-extrabold shadow-lg">
                    {agro.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-extrabold text-neutral-900">{agro.name}</p>
                      <svg className="w-3.5 h-3.5 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-xs text-neutral-600 font-medium">{agro.specialty}</p>
                    <p className="text-[11px] text-neutral-400">📍 {agro.location} · {agro.experience} exp.</p>
                  </div>
                </div>
                <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full shrink-0 ${agro.available ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-500"}`}>
                  {agro.available ? "● Available" : "○ Busy"}
                </span>
              </div>
              <div className="mt-3">
                <span className="text-[10px] font-extrabold bg-white/70 px-2.5 py-1 rounded-full text-neutral-700">{agro.badge}</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <p className="text-xs text-neutral-500 mb-4 line-clamp-2">{agro.bio}</p>

              {/* Crop tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {agro.crops.map((c) => (
                  <span key={c} className="text-[10px] font-bold bg-green-50 text-brand-green px-2 py-0.5 rounded-full">{c}</span>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-neutral-50">
                <div className="text-center">
                  <p className="text-base font-extrabold text-neutral-900">{agro.rating}</p>
                  <p className="text-[10px] text-neutral-400">Rating</p>
                </div>
                <div className="w-px h-8 bg-neutral-100"></div>
                <div className="text-center">
                  <p className="text-base font-extrabold text-neutral-900">{agro.reviews}</p>
                  <p className="text-[10px] text-neutral-400">Reviews</p>
                </div>
                <div className="w-px h-8 bg-neutral-100"></div>
                <div className="text-center">
                  <p className="text-base font-extrabold text-neutral-900">{agro.consultations}</p>
                  <p className="text-[10px] text-neutral-400">Sessions</p>
                </div>
              </div>

              {/* Price + Actions */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Consultation</p>
                  <p className={`text-sm font-extrabold ${agro.price === "Free" ? "text-green-600" : "text-neutral-900"}`}>{agro.price}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2.5 border border-neutral-200 rounded-xl text-neutral-500 hover:bg-neutral-50 hover:border-neutral-300 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </button>
                  <button
                    onClick={() => setBookingTarget(agro.name)}
                    className="flex items-center gap-1.5 bg-brand-green text-white text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expert Articles */}
      <div className="bg-white p-7 rounded-2xl shadow-sm border border-neutral-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-neutral-900">📚 Expert Content Hub</h2>
            <p className="text-xs text-neutral-400 mt-0.5">Research-backed guides from verified agronomists</p>
          </div>
          <button className="text-xs font-extrabold text-brand-green hover:underline">View All Articles →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertArticles.map((art) => (
            <div key={art.title} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-brand-green/30 hover:bg-green-50/30 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
                <svg className="w-5 h-5 text-brand-green group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-neutral-900 mb-1 group-hover:text-brand-green transition-colors line-clamp-2">{art.title}</p>
                <p className="text-[11px] text-neutral-400 font-medium">by {art.author} · {art.crop} · {art.reads} reads · {art.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Questions needing expert attention (from community) */}
      <div className="bg-brand-green p-7 rounded-2xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-white">🔔 Community Questions Needing Expert Attention</h2>
            <p className="text-white/50 text-xs mt-0.5">These came from the community — your answer could help hundreds of farmers</p>
          </div>
          <span className="bg-brand-orange text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shrink-0">14 unanswered</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { q: "Why are my maize leaves turning yellow with brown spots?", location: "Musanze", votes: 47 },
            { q: "URGENT: Bean rust spreading across 3 plots — what stops it fast?", location: "Rubavu", votes: 88 },
            { q: "Soil turning white after heavy rain — safe to plant?", location: "Kigali", votes: 32 },
          ].map((item) => (
            <div key={item.q} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
              <p className="text-white text-xs font-bold mb-2 line-clamp-2">{item.q}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-white/50 text-[10px]">📍 {item.location}</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                  <span className="text-brand-orange text-[10px] font-extrabold">{item.votes}</span>
                </div>
              </div>
              <button className="mt-3 w-full py-2 bg-white text-brand-green text-[11px] font-extrabold rounded-lg hover:bg-neutral-100 transition-colors">
                Answer as Expert
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
