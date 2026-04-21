"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const threads: Record<string, {
  id: number; author: string; location: string; avatar: string; time: string;
  title: string; body: string; upvotes: number; tag: string;
  aiSummary: string; tags: string[]; expert: boolean;
  replies: { author: string; avatar: string; time: string; body: string; upvotes: number; expert: boolean }[];
}> = {
  "1": {
    id: 1, author: "Jean-Pierre K.", location: "Musanze", avatar: "JP", time: "2h ago",
    title: "Why are my maize leaves turning yellow with brown spots in Week 4?",
    body: "I noticed this issue starting 3 days ago in Plot B. The soil was tested last month and everything looked fine. Could this be Fall Armyworm? The spots are circular, about 1cm in diameter, starting from the lower leaves and moving up. Rain has been inconsistent this week (3 dry days).",
    upvotes: 47, tag: "Pest", expert: true,
    aiSummary: "Top 3 likely causes: (1) Fall Armyworm infestation — check for small holes, (2) Nitrogen deficiency — yellowing starts from older leaves, (3) Fungal disease (Gray Leaf Spot) — favoured by humid conditions.",
    tags: ["Maize", "Pest", "Disease"],
    replies: [
      { author: "Dr. Jean Paul", avatar: "JP", time: "1h ago", body: "This looks like classic Gray Leaf Spot combined with early Armyworm activity. I recommend: (1) Inspect leaf undersides for larvae at night, (2) Apply Chlorpyrifos if larvae are present, (3) Ensure good spacing for air circulation.", upvotes: 38, expert: true },
      { author: "Aline N.", avatar: "AN", time: "1h 30min ago", body: "I had the same issue last season in Kigali. The brown spots were Gray Leaf Spot — Mancozeb fungicide helped within 10 days. Make sure you're applying early morning.", upvotes: 21, expert: false },
      { author: "Paul H.", avatar: "PH", time: "45min ago", body: "Check the roots too — if they're rotting, this could be a soil drainage issue making the plant vulnerable. Good luck!", upvotes: 9, expert: false },
    ],
  },
  "2": {
    id: 2, author: "Aline N.", location: "Kigali", avatar: "AN", time: "5h ago",
    title: "How I reduced water usage by 40% and increased tomato yield — my experience",
    body: "After switching to drip irrigation and monitoring soil moisture daily using a cheap sensor from the market, my yield jumped from 1.2T to 1.7T this season. The key was watering at dawn (6AM) instead of midday. I also mulched heavily between plants to retain moisture longer. Total cost of the drip kit: RWF 85,000.",
    upvotes: 124, tag: "Irrigation", expert: false,
    aiSummary: "Key insight: Drip irrigation + daily soil monitoring + dawn watering + mulching yielded +40% water savings and +42% output improvement.",
    tags: ["Tomatoes", "Irrigation", "Efficiency"],
    replies: [
      { author: "Eric N.", avatar: "EN", time: "4h ago", body: "Excellent approach! Dawn watering is underrated — reduces evaporation losses significantly. Where did you get the soil sensor? I'd love to try this.", upvotes: 14, expert: false },
      { author: "Dr. Jean Paul", avatar: "JP", time: "3h ago", body: "Validated ✅ — this is exactly what agronomic research recommends. The combination of drip + mulch + timing is optimal. Great real-world example!", upvotes: 29, expert: true },
    ],
  },
  "3": {
    id: 3, author: "Eric H.", location: "Rubavu", avatar: "EH", time: "1d ago",
    title: "URGENT: Bean rust spreading across 3 plots — what stops it fast?",
    body: "Started in Plot A and now affecting Plot C within 5 days. Reddish-brown pustules on leaves, especially undersides. Tried copper fungicide but minimal effect after 4 days. Plants in Plot A are now losing leaves. This is serious — I have a buyer contract due in 3 weeks.",
    upvotes: 88, tag: "Disease", expert: true,
    aiSummary: "Recommended: (1) Remove and burn infected leaves immediately — do not compost. (2) Try Mancozeb-based fungicide (copper is less effective on bean rust). (3) Increase plant spacing to improve air flow. (4) Avoid overhead irrigation.",
    tags: ["Beans", "Disease", "Urgent"],
    replies: [
      { author: "Dr. Jean Paul", avatar: "JP", time: "22h ago", body: "URGENT response: Switch to Mancozeb immediately — copper fungicide has poor efficacy against Uromyces appendiculatus (bean rust). Remove all infected leaves TODAY and burn them. Space your remaining plants as much as possible.", upvotes: 67, expert: true },
      { author: "Grace U.", avatar: "GU", time: "20h ago", body: "Also consider Azoxystrobin-based products if available in your area. They work systemically and can halt rust spread within 7 days. Check at AgroPlus in Rubavu.", upvotes: 31, expert: false },
    ],
  },
  "4": {
    id: 4, author: "Grace U.", location: "Huye", avatar: "GU", time: "2d ago",
    title: "From 0.8T to 2.1T in one season — how Agro-Hub changed my farm",
    body: "I want to share my journey because it might help other farmers who are struggling. Last season I was about to give up — 0.8T of sorghum barely covered costs. Then I started using Agro-Hub consistently. I followed the AI recommendations: changed planting schedule by 2 weeks (earlier than I was used to), switched from single-application to split fertilizer application, and joined a group buying deal that saved me RWF 18,000 on inputs. The result: 2.1T this season — a 162% increase.",
    upvotes: 203, tag: "Success", expert: false,
    aiSummary: "Farmer achieved 162% yield increase using AI-guided planting + split fertilizer applications + group buying savings from Agro-Hub.",
    tags: ["Sorghum", "Success", "AI"],
    replies: [
      { author: "Aline N.", avatar: "AN", time: "1d ago", body: "This is so inspiring! The split fertilizer tip is something more farmers need to know — single application wastes so much. Thank you for sharing!", upvotes: 42, expert: false },
      { author: "Jean-Pierre K.", avatar: "JP", time: "1d ago", body: "Incredible result! Which AI recommendation made the biggest difference for you?", upvotes: 18, expert: false },
      { author: "Dr. Jean Paul", avatar: "JP", time: "20h ago", body: "This is a perfect case study of data-driven farming. The 2-week planting adjustment is critical — it aligns with the optimal soil temperature window for sorghum in Huye's altitude.", upvotes: 55, expert: true },
    ],
  },
};

export default function ThreadPage() {
  const { id } = useParams<{ id: string }>();
  const post = threads[id];
  const [reply, setReply] = useState("");
  const [upvoted, setUpvoted] = useState(false);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-4xl">🌾</p>
        <p className="text-lg font-bold text-neutral-700">Thread not found</p>
        <Link href="/dashboard/community" className="text-brand-green font-bold hover:underline">← Back to Community</Link>
      </div>
    );
  }

  const tagStyle: Record<string, string> = {
    Pest: "bg-red-100 text-red-700", Disease: "bg-orange-100 text-orange-700",
    Irrigation: "bg-blue-100 text-blue-700", Success: "bg-green-100 text-green-700", Urgent: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Back nav */}
      <Link href="/dashboard/community" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-brand-green transition-colors group">
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Community
      </Link>

      {/* Original Post */}
      <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7">
        {/* Author */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-extrabold shrink-0">{post.avatar}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-extrabold text-neutral-900">{post.author}</p>
              {post.expert && <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${tagStyle[post.tag] ?? "bg-neutral-100 text-neutral-500"}`}>{post.tag}</span>
            </div>
            <p className="text-xs text-neutral-400">📍 {post.location} · {post.time}</p>
          </div>
        </div>

        <h1 className="text-xl font-extrabold text-neutral-900 mb-3 leading-snug">{post.title}</h1>
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">{post.body}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((t) => <span key={t} className="text-[10px] font-bold bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">#{t}</span>)}
        </div>

        {/* AI Summary */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-sm">🤖</span>
            <p className="text-[10px] font-extrabold text-brand-green uppercase tracking-wider">AI Summary</p>
          </div>
          <p className="text-xs text-neutral-600 font-medium">{post.aiSummary}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-50">
          <button
            onClick={() => setUpvoted(!upvoted)}
            className={`flex items-center gap-1.5 text-sm font-extrabold transition-colors ${upvoted ? "text-brand-green" : "text-neutral-400 hover:text-brand-green"}`}
          >
            <svg className="w-5 h-5" fill={upvoted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            {post.upvotes + (upvoted ? 1 : 0)}
          </button>
          <span className="flex items-center gap-1.5 text-sm font-bold text-neutral-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            {post.replies.length} replies
          </span>
          <button className="ml-auto text-xs font-bold text-neutral-400 hover:text-neutral-600 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Share
          </button>
        </div>
      </div>

      {/* Replies */}
      <div className="space-y-3">
        <p className="text-xs font-extrabold text-neutral-400 uppercase tracking-widest px-1">{post.replies.length} Replies</p>
        {post.replies.map((r, i) => (
          <div key={i} className={`bg-white rounded-2xl border shadow-sm p-5 ${r.expert ? "border-brand-green/20 bg-green-50/20" : "border-neutral-100"}`}>
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-xs font-extrabold shrink-0 ${r.expert ? "bg-brand-green" : "bg-neutral-300"}`}>{r.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-extrabold text-neutral-900">{r.author}</p>
                  {r.expert && (
                    <span className="text-[10px] font-extrabold text-brand-green bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Verified Expert
                    </span>
                  )}
                  <span className="text-[10px] text-neutral-400 ml-auto">{r.time}</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{r.body}</p>
                <button className="mt-2 flex items-center gap-1 text-xs font-bold text-neutral-400 hover:text-brand-green transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                  {r.upvotes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Input */}
      <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 sticky bottom-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center text-xs font-extrabold shrink-0">FM</div>
          <div className="flex-1">
            <textarea
              rows={2}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Add your reply…"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                disabled={!reply.trim()}
                className="bg-brand-green text-white font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-brand-green-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
