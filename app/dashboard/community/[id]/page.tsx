"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

/* ─── Thread data ────────────────────────────────── */
const threads: Record<string, {
  id: number; author: string; location: string; avatar: string; time: string;
  title: string; body: string; upvotes: number; tag: string;
  aiSummary: string; tags: string[]; expert: boolean;
  replies: { author: string; avatar: string; time: string; body: string; likes: number; expert: boolean }[];
}> = {
  "1": {
    id: 1, author: "Jean-Pierre K.", location: "Musanze", avatar: "JP", time: "2h ago",
    title: "Why are my maize leaves turning yellow with brown spots in Week 4?",
    body: "I noticed this issue starting 3 days ago in Plot B. The soil was tested last month and everything looked fine. Could this be Fall Armyworm? The spots are circular, about 1cm in diameter, starting from the lower leaves and moving up. Rain has been inconsistent this week.",
    upvotes: 47, tag: "Pest", expert: true,
    aiSummary: "Top 3 likely causes: (1) Fall Armyworm infestation — check for small holes, (2) Nitrogen deficiency — yellowing starts from older leaves, (3) Fungal disease (Gray Leaf Spot) — favoured by humid conditions.",
    tags: ["Maize", "Pest", "Disease"],
    replies: [
      { author: "Dr. Jean Paul", avatar: "JP", time: "1h ago", body: "This looks like Gray Leaf Spot combined with early Armyworm activity. Inspect leaf undersides for larvae at night. Apply Chlorpyrifos if larvae present. Ensure good spacing for air circulation.", likes: 38, expert: true },
      { author: "Aline N.", avatar: "AN", time: "1h 30m ago", body: "Same issue last season in Kigali. The brown spots were Gray Leaf Spot — Mancozeb fungicide helped within 10 days. Apply early morning for best results.", likes: 21, expert: false },
      { author: "Paul H.", avatar: "PH", time: "45m ago", body: "Check the roots too — if they're rotting, this could be a soil drainage issue making the plant vulnerable. Good luck!", likes: 9, expert: false },
    ],
  },
  "2": {
    id: 2, author: "Aline N.", location: "Kigali", avatar: "AN", time: "5h ago",
    title: "How I reduced water usage by 40% and increased tomato yield",
    body: "After switching to drip irrigation and monitoring soil moisture daily using a cheap sensor from the market, my yield jumped from 1.2T to 1.7T this season. Key was watering at dawn (6AM) instead of midday. Also mulched heavily between plants to retain moisture. Total cost of the drip kit: RWF 85,000.",
    upvotes: 124, tag: "Irrigation", expert: false,
    aiSummary: "Key insight: Drip irrigation + daily soil monitoring + dawn watering + mulching yielded +40% water savings and +42% output improvement.",
    tags: ["Tomatoes", "Irrigation", "Efficiency"],
    replies: [
      { author: "Eric N.", avatar: "EN", time: "4h ago", body: "Excellent approach! Dawn watering is underrated — reduces evaporation losses significantly. Where did you get the soil sensor?", likes: 14, expert: false },
      { author: "Dr. Jean Paul", avatar: "JP", time: "3h ago", body: "Validated ✅ — this is exactly what agronomic research recommends. The combination of drip + mulch + timing is optimal. Great real-world example!", likes: 29, expert: true },
    ],
  },
  "3": {
    id: 3, author: "Eric H.", location: "Rubavu", avatar: "EH", time: "1d ago",
    title: "URGENT: Bean rust spreading across 3 plots — what stops it fast?",
    body: "Started in Plot A and now affecting Plot C within 5 days. Reddish-brown pustules on leaves, especially undersides. Tried copper fungicide but minimal effect after 4 days. Plants in Plot A are now losing leaves. I have a buyer contract due in 3 weeks.",
    upvotes: 88, tag: "Disease", expert: true,
    aiSummary: "Recommended: (1) Remove and burn infected leaves immediately. (2) Switch to Mancozeb-based fungicide. (3) Increase plant spacing for air flow. (4) Avoid overhead irrigation.",
    tags: ["Beans", "Disease", "Urgent"],
    replies: [
      { author: "Dr. Jean Paul", avatar: "JP", time: "22h ago", body: "URGENT: Switch to Mancozeb immediately — copper has poor efficacy against bean rust. Remove all infected leaves TODAY and burn them. Space your remaining plants as much as possible.", likes: 67, expert: true },
      { author: "Grace U.", avatar: "GU", time: "20h ago", body: "Also consider Azoxystrobin-based products if available. They work systemically and can halt rust spread within 7 days. Check at AgroPlus in Rubavu.", likes: 31, expert: false },
    ],
  },
  "4": {
    id: 4, author: "Grace U.", location: "Huye", avatar: "GU", time: "2d ago",
    title: "From 0.8T to 2.1T in one season — how Agro-Hub changed my farm",
    body: "Last season I was about to give up — 0.8T of sorghum barely covered costs. I started using Agro-Hub consistently: followed the AI recommendations, changed planting schedule by 2 weeks earlier, switched to split fertilizer application, and joined a group buying deal that saved me RWF 18,000 on inputs. Result: 2.1T this season — a 162% increase.",
    upvotes: 203, tag: "Success", expert: false,
    aiSummary: "Farmer achieved 162% yield increase using AI-guided planting + split fertilizer applications + group buying savings from Agro-Hub.",
    tags: ["Sorghum", "Success", "AI"],
    replies: [
      { author: "Aline N.", avatar: "AN", time: "1d ago", body: "This is so inspiring! The split fertilizer tip is something more farmers need to know. Thank you for sharing 🌱", likes: 42, expert: false },
      { author: "Jean-Pierre K.", avatar: "JP", time: "1d ago", body: "Incredible result! Which AI recommendation made the biggest difference for you?", likes: 18, expert: false },
      { author: "Dr. Jean Paul", avatar: "JP", time: "20h ago", body: "Perfect case study of data-driven farming. The 2-week planting adjustment aligns with the optimal soil temperature window for sorghum at Huye's altitude.", likes: 55, expert: true },
    ],
  },
};

const tagStyle: Record<string, string> = {
  Pest: "bg-red-100 text-red-700", Disease: "bg-orange-100 text-orange-700",
  Irrigation: "bg-blue-100 text-blue-700", Success: "bg-green-100 text-green-700",
};

function ActionBar({ likes, onLike, liked }: { likes: number; onLike: () => void; liked: boolean }) {
  return (
    <div className="flex items-center gap-5 mt-3">
      <button onClick={onLike} className={`flex items-center gap-1.5 text-sm transition-colors ${liked ? "text-red-500" : "text-neutral-400 hover:text-red-400"}`}>
        <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="text-xs font-semibold">{likes}</span>
      </button>
      <button className="text-neutral-400 hover:text-brand-green transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      <button className="text-neutral-400 hover:text-brand-green transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      <button className="text-neutral-400 hover:text-brand-green transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    </div>
  );
}

export default function ThreadPage() {
  const { id } = useParams<{ id: string }>();
  const post = threads[id];
  const [reply, setReply] = useState("");
  const [liked, setLiked] = useState(false);
  const [likedReplies, setLikedReplies] = useState<Record<number, boolean>>({});

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-4xl">🌾</p>
        <p className="text-lg font-bold text-neutral-700">Thread not found</p>
        <Link href="/dashboard/community" className="text-brand-green font-bold hover:underline">← Back to Community</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-0">

      {/* Back nav */}
      <div className="pb-4">
        <Link href="/dashboard/community" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-brand-green transition-colors group">
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Community
        </Link>
      </div>

      {/* ── Original post (Threads layout) ── */}
      <div className="flex gap-3 pb-0">
        {/* Avatar + vertical line column */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-extrabold shrink-0 ring-2 ring-white shadow-md">
            {post.avatar}
          </div>
          {/* connector line to first reply */}
          {post.replies.length > 0 && (
            <div className="w-0.5 flex-1 bg-neutral-200 mt-2 min-h-[24px]" />
          )}
        </div>

        {/* Post content */}
        <div className="flex-1 pb-3 min-w-0">
          {/* Author */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-extrabold text-neutral-900">{post.author}</span>
            {post.expert && (
              <svg className="w-4 h-4 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ml-auto ${tagStyle[post.tag] ?? "bg-neutral-100 text-neutral-500"}`}>{post.tag}</span>
            <span className="text-xs text-neutral-400 shrink-0">{post.time}</span>
          </div>

          <p className="text-[15px] font-extrabold text-neutral-900 mb-2 leading-snug">{post.title}</p>
          <p className="text-sm text-neutral-600 leading-relaxed mb-3">{post.body}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map((t) => <span key={t} className="text-[10px] font-bold bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-full">#{t}</span>)}
          </div>

          {/* AI Summary */}
          <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 mb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🤖</span>
              <p className="text-[10px] font-extrabold text-brand-green uppercase tracking-wider">AI Summary</p>
            </div>
            <p className="text-xs text-neutral-600 font-medium">{post.aiSummary}</p>
          </div>

          <ActionBar likes={post.upvotes} liked={liked} onLike={() => setLiked(!liked)} />
        </div>
      </div>

      {/* ── Replies count bridge ── */}
      {post.replies.length > 0 && (
        <div className="flex gap-3 items-center py-1">
          <div className="w-10 flex justify-center">
            <div className="flex -space-x-2">
              {post.replies.slice(0, 3).map((r, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-brand-green/70 text-white flex items-center justify-center text-[8px] font-extrabold border border-white">{r.avatar[0]}</div>
              ))}
            </div>
          </div>
          <p className="text-xs text-neutral-400 font-semibold">{post.replies.length} replies</p>
        </div>
      )}

      {/* ── Replies ── */}
      {post.replies.map((r, i) => {
        const isLast = i === post.replies.length - 1;
        return (
          <div key={i} className="flex gap-3">
            {/* Avatar + line column */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-xs font-extrabold shrink-0 ring-2 ring-white shadow ${r.expert ? "bg-brand-green" : "bg-neutral-400"}`}>
                {r.avatar}
              </div>
              {!isLast && <div className="w-0.5 flex-1 bg-neutral-200 mt-2 min-h-[24px]" />}
            </div>

            {/* Reply content */}
            <div className={`flex-1 min-w-0 ${isLast ? "pb-4" : "pb-3"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-extrabold text-neutral-900">{r.author}</span>
                {r.expert && (
                  <span className="text-[10px] font-extrabold text-brand-green bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Expert
                  </span>
                )}
                <span className="text-xs text-neutral-400 ml-auto shrink-0">{r.time}</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{r.body}</p>
              <ActionBar
                likes={r.likes}
                liked={likedReplies[i] ?? false}
                onLike={() => setLikedReplies((prev) => ({ ...prev, [i]: !prev[i] }))}
              />
            </div>
          </div>
        );
      })}

      {/* ── Divider ── */}
      <div className="border-t border-neutral-100 my-2" />

      {/* ── Reply Input (Threads style) ── */}
      <div className="flex gap-3 items-center pt-3 pb-2">
        <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-extrabold shrink-0 ring-2 ring-white shadow">FM</div>
        <div className="flex-1 flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-2.5 hover:border-brand-green/40 transition-colors">
          <input
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Add a reply…"
            className="flex-1 bg-transparent text-sm font-medium text-neutral-700 placeholder-neutral-400 focus:outline-none"
          />
          <button
            disabled={!reply.trim()}
            className="bg-brand-green text-white text-xs font-extrabold px-4 py-2 rounded-xl hover:bg-brand-green-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            Reply
          </button>
        </div>
      </div>

    </div>
  );
}
