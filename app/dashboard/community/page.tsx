"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────── */
const feedTabs = [
  { id: "Trending",  label: "Trending",  icon: "🔥" },
  { id: "Questions", label: "Questions", icon: "❓" },
  { id: "Tips",      label: "Tips",      icon: "🌱" },
  { id: "Stories",   label: "Stories",   icon: "🏆" },
  { id: "Problems",  label: "Problems",  icon: "🚨" },
];

const posts = [
  {
    id: 1, tab: "Questions ❓", tag: "Pest", crop: "Maize",
    author: "Jean-Pierre K.", location: "Musanze", avatar: "JP", time: "2h ago",
    title: "Why are my maize leaves turning yellow with brown spots in Week 4?",
    body: "I noticed this issue starting 3 days ago in Plot B. The soil was tested last month and everything looked fine. Could this be Fall Armyworm?",
    image: false, upvotes: 47, answers: 12, views: "1.2k",
    aiSummary: "Top 3 likely causes: (1) Fall Armyworm infestation, (2) Nitrogen deficiency, (3) Fungal disease (Gray Leaf Spot).",
    expertAnswered: true, tags: ["Maize", "Pest", "Disease"],
  },
  {
    id: 2, tab: "Tips 🌱", tag: "Irrigation", crop: "Tomatoes",
    author: "Aline N.", location: "Kigali", avatar: "AN", time: "5h ago",
    title: "How I reduced water usage by 40% and increased tomato yield — my experience",
    body: "After switching to drip irrigation and monitoring soil moisture daily, my yield jumped from 1.2T to 1.7T this season. Here's my step-by-step approach…",
    image: true, upvotes: 124, answers: 28, views: "3.4k",
    aiSummary: "Key insight: Drip irrigation + daily soil monitoring yielded +40% water savings and +42% output improvement.",
    expertAnswered: false, tags: ["Tomatoes", "Irrigation", "Efficiency"],
  },
  {
    id: 3, tab: "Problems 🚨", tag: "Disease", crop: "Beans",
    author: "Eric H.", location: "Rubavu", avatar: "EH", time: "1d ago",
    title: "URGENT: Bean rust spreading across 3 plots — what stops it fast?",
    body: "Started in Plot A and now affecting Plot C. Reddish-brown pustules on leaves. Tried copper fungicide but minimal effect after 4 days.",
    image: false, upvotes: 88, answers: 19, views: "2.1k",
    aiSummary: "Recommended: (1) Remove infected leaves immediately. (2) Try Mancozeb-based fungicide. (3) Increase plant spacing.",
    expertAnswered: true, tags: ["Beans", "Disease", "Urgent"],
  },
  {
    id: 4, tab: "Stories 🏆", tag: "Success", crop: "Sorghum",
    author: "Grace U.", location: "Huye", avatar: "GU", time: "2d ago",
    title: "From 0.8T to 2.1T in one season — how Agro-Hub changed my farm",
    body: "I followed the AI recommendations on this platform, adjusted my planting schedule by 2 weeks, changed my fertilizer mix, and the results were incredible…",
    image: true, upvotes: 203, answers: 41, views: "7.8k",
    aiSummary: "Farmer achieved 162% yield increase using AI-guided planting + fertilizer adjustments from Agro-Hub.",
    expertAnswered: false, tags: ["Sorghum", "Success", "AI"],
  },
];

const contributors = [
  { name: "Dr. Jean Paul", badge: "Expert Agronomist", answers: 312, avatar: "JP", verified: true },
  { name: "Aline Mukamana", badge: "Organic Farmer", answers: 187, avatar: "AM", verified: false },
  { name: "Eric Nshimiye", badge: "Community Hero", answers: 143, avatar: "EN", verified: false },
  { name: "Grace Uwase", badge: "Seed Specialist", answers: 98, avatar: "GU", verified: true },
];

const trending = [
  { topic: "Fall Armyworm 2025", count: "2.3k posts", hot: true },
  { topic: "Dry season bean planting", count: "1.8k posts", hot: true },
  { topic: "Organic fertilizer DIY", count: "1.1k posts", hot: false },
  { topic: "Soil pH testing at home", count: "876 posts", hot: false },
  { topic: "Maize rust outbreak — Musanze", count: "654 posts", hot: true },
];

const tagStyle: Record<string, string> = {
  Pest:      "bg-red-100 text-red-700",
  Disease:   "bg-orange-100 text-orange-700",
  Irrigation:"bg-blue-100 text-blue-700",
  Success:   "bg-green-100 text-green-700",
  Urgent:    "bg-red-100 text-red-700",
};

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [askOpen, setAskOpen] = useState(false);

  const tabLabel = (id: string) => {
    const map: Record<string, string> = {
      Trending: "Trending 🔥", Questions: "Questions ❓",
      Tips: "Tips 🌱", Stories: "Stories 🏆", Problems: "Problems 🚨",
    };
    return map[id] ?? id;
  };

  const filtered = activeTab === "Trending"
    ? posts
    : posts.filter(p => p.tab === tabLabel(activeTab));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Community</h1>
          <p className="text-neutral-500 font-medium mt-1">Farmer Knowledge Network — collective intelligence, verified expertise</p>
        </div>
        <button
          onClick={() => setAskOpen(true)}
          className="flex items-center gap-2 bg-brand-green text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20 self-start md:self-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Ask a Question
        </button>
      </div>

      {/* Ask Question Modal */}
      {askOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={() => setAskOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-xl font-extrabold text-neutral-900 mb-1">Ask the Community</h2>
            <p className="text-neutral-400 text-sm mb-6">Get answers from 20,000+ farmers and verified experts</p>
            <div className="flex flex-col gap-4">
              <input placeholder="What is your question?" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green" />
              <textarea rows={4} placeholder="Describe your problem in detail…" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green resize-none" />
              <div className="flex gap-3">
                <select className="flex-1 px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none">
                  <option>🌽 Maize</option><option>🫘 Beans</option><option>🍅 Tomatoes</option>
                </select>
                <select className="flex-1 px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none">
                  <option>🐛 Pest</option><option>🍄 Disease</option><option>💧 Irrigation</option><option>🌱 Planting</option>
                </select>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-100 rounded-xl">
                <span className="text-base">🤖</span>
                <p className="text-xs text-green-700 font-semibold">AI will instantly suggest answers while the community responds.</p>
              </div>
              <button className="w-full bg-brand-green text-white font-extrabold py-3 rounded-xl hover:bg-brand-green-hover transition-colors">
                Post Question
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-5">
          {/* Threads-style Tab Bar */}
          <div className="bg-white border-b border-neutral-100 flex overflow-x-auto">
            {feedTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                <span className="text-base leading-none">{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Post Cards */}
          {filtered.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-brand-green/20 transition-all p-6">
              {/* Author row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{post.author}</p>
                    <p className="text-xs text-neutral-400">📍 {post.location} · {post.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${tagStyle[post.tag] ?? "bg-neutral-100 text-neutral-500"}`}>{post.tag}</span>
                  {post.expertAnswered && (
                    <span className="text-[10px] font-extrabold text-brand-green bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">✅ Expert Answered</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <Link href={`/dashboard/community/${post.id}`}>
                <h3 className="text-base font-extrabold text-neutral-900 mb-2 leading-snug hover:text-brand-green cursor-pointer transition-colors">{post.title}</h3>
              </Link>
              <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{post.body}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((t) => (
                  <span key={t} className="text-[10px] font-bold bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">#{t}</span>
                ))}
              </div>

              {/* AI Summary */}
              <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-3.5 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">🤖</span>
                  <p className="text-[10px] font-extrabold text-brand-green uppercase tracking-wider">AI Summary</p>
                </div>
                <p className="text-xs text-neutral-600 font-medium">{post.aiSummary}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-brand-green transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    {post.upvotes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-brand-green transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    {post.answers} answers
                  </button>
                  <span className="text-xs text-neutral-400 font-medium">👁 {post.views}</span>
                </div>
                <Link href={`/dashboard/community/${post.id}`} className="text-xs font-extrabold text-brand-green hover:underline">View Thread →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          {/* Trending Topics */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
            <h2 className="text-sm font-extrabold text-neutral-900 mb-4">🔥 Trending Topics</h2>
            <div className="flex flex-col gap-3">
              {trending.map((t, i) => (
                <div key={t.topic} className="flex items-center gap-3 group cursor-pointer">
                  <span className="text-xs font-extrabold text-neutral-300 w-5">#{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-neutral-800 group-hover:text-brand-green transition-colors">{t.topic}</p>
                      {t.hot && <span className="text-[9px] font-extrabold bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">HOT</span>}
                    </div>
                    <p className="text-[10px] text-neutral-400">{t.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Alert */}
          <div className="bg-red-50 border border-red-100 p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">🚨</span>
              <p className="text-xs font-extrabold text-red-700">Regional Alert — Musanze</p>
            </div>
            <p className="text-xs text-red-600 font-medium">Fall Armyworm outbreak reported by 47 farmers in the last 24h. Check your maize plots immediately.</p>
            <button className="mt-3 text-xs font-extrabold text-red-700 underline underline-offset-2">See Discussion Thread →</button>
          </div>

          {/* Top Contributors */}
          <div className="bg-brand-green p-6 rounded-2xl">
            <h2 className="text-sm font-extrabold text-white mb-5">🏆 Top Contributors</h2>
            <div className="flex flex-col gap-4">
              {contributors.map((c, i) => (
                <div key={c.name} className="flex items-center gap-3 group">
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 rounded-full bg-white/10 text-white text-xs font-extrabold flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      {c.avatar}
                    </div>
                    {i === 0 && <span className="absolute -top-1 -right-1 text-sm">👑</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-white text-xs font-bold truncate">{c.name}</p>
                      {c.verified && <span className="text-[9px] text-brand-orange font-extrabold shrink-0">✅</span>}
                    </div>
                    <p className="text-white/50 text-[10px]">{c.badge}</p>
                  </div>
                  <span className="text-brand-orange text-xs font-extrabold shrink-0">{c.answers}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full py-2 border border-white/20 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-colors">
              View Leaderboard
            </button>
          </div>

          {/* Questions needing expert */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
            <h2 className="text-sm font-extrabold text-neutral-900 mb-1">🔔 Unanswered Questions</h2>
            <p className="text-[11px] text-neutral-400 mb-4">These need expert attention</p>
            <div className="flex flex-col gap-3">
              {["Soil turning white after heavy rain?", "Best fertilizer before dry season?", "Cassava wilting in good soil?"].map((q) => (
                <div key={q} className="flex items-start gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-brand-green/30 cursor-pointer transition-colors">
                  <span className="text-brand-orange text-sm shrink-0">❓</span>
                  <p className="text-xs font-semibold text-neutral-700">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
