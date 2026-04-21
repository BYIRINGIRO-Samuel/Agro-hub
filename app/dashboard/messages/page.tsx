"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ─── Contacts ─────────────────────────────────── */
const contacts = [
  { id: "jean-paul",  name: "Dr. Jean Paul",   role: "Soil Expert",          avatar: "JP", online: true,  unread: 2 },
  { id: "aline",      name: "Aline Mukamana",   role: "Crop Specialist",       avatar: "AM", online: true,  unread: 0 },
  { id: "eric",       name: "Eric Nshimiye",    role: "Irrigation Lead",       avatar: "EN", online: false, unread: 1 },
  { id: "grace",      name: "Grace Uwase",      role: "Seed Specialist",       avatar: "GU", online: true,  unread: 0 },
  { id: "david",      name: "David Habimana",   role: "Farm Advisor",          avatar: "DH", online: false, unread: 0 },
  { id: "marie",      name: "Marie Claire K.",  role: "Climate & Forecasting", avatar: "MC", online: false, unread: 3 },
];

/* ─── Mock Messages ────────────────────────────── */
const mockMessages: Record<string, { from: "me" | "them"; text: string; time: string }[]> = {
  "jean-paul": [
    { from: "them", text: "Hello Fabrice! How can I help you today? 🌿", time: "09:00" },
    { from: "me",   text: "Hello Dr. Jean Paul! I have a question about my maize. The leaves are turning yellow with brown spots.", time: "09:02" },
    { from: "them", text: "That sounds like Gray Leaf Spot. Can you share a photo of the affected leaves?", time: "09:03" },
    { from: "me",   text: "Sure! I'll attach one now. Also is this spreading fast?", time: "09:04" },
    { from: "them", text: "Yes it can spread quickly in humid conditions. In the meantime, increase plant spacing and avoid overhead irrigation.", time: "09:05" },
    { from: "them", text: "I recommend applying a Mancozeb-based fungicide within the next 24 hours. Let me know once you've applied it.", time: "09:06" },
  ],
  "aline": [
    { from: "them", text: "Hi! I saw your post about water usage. Great results on the drip irrigation!", time: "yesterday" },
    { from: "me",   text: "Thanks Aline! Your tomato yield story inspired me. What sensor do you use?", time: "yesterday" },
    { from: "them", text: "I use a basic capacitive soil sensor from AgroPlus in Kigali. Cost about RWF 12,000.", time: "yesterday" },
  ],
  "eric": [
    { from: "them", text: "Fabrice, did you get a chance to check the irrigation kit I recommended?", time: "Mon" },
    { from: "me",   text: "Not yet — planning to visit AgroPlus this weekend!", time: "Mon" },
    { from: "them", text: "Great. Let me know if you need help setting it up. I can do a site visit.", time: "Mon" },
  ],
  "grace": [],
  "david": [
    { from: "them", text: "I've reviewed your farm profile. Your soil type is good for intercropping maize with beans.", time: "last week" },
  ],
  "marie": [
    { from: "them", text: "⚠️ Weather alert: Dry spell expected in Kigali for the next 10 days. Start preparing supplemental irrigation.", time: "today" },
    { from: "them", text: "Based on your current crop stage, I recommend irrigation every 2 days at 15L per plant.", time: "today" },
    { from: "them", text: "Also consider mulching to retain soil moisture. Happy to discuss further 🌦️", time: "today" },
  ],
};

export default function MessagesPage() {
  const searchParams = useSearchParams();
  const initContact = searchParams.get("contact") ?? "jean-paul";
  const [activeId, setActiveId] = useState(initContact);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(
    () => structuredClone(mockMessages) as typeof mockMessages
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  const active = contacts.find((c) => c.id === activeId)!;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeId, messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), { from: "me", text, time: now }],
    }));
    setInput("");
    // Simulate reply after 1s
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [activeId]: [
          ...(prev[activeId] ?? []),
          { from: "them", text: "Thanks for your message! I'll get back to you shortly. 🌿", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ],
      }));
    }, 1000);
  };

  const msgs = messages[activeId] ?? [];

  return (
    <div className="flex h-[calc(100vh-120px)] bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">

      {/* ── Contact list ── */}
      <div className="w-72 shrink-0 border-r border-neutral-100 flex flex-col">
        <div className="p-5 border-b border-neutral-100">
          <h1 className="text-lg font-extrabold text-neutral-900 mb-3">Messages</h1>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input placeholder="Search…" className="w-full pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {contacts.map((c) => {
            const msgs = messages[c.id] ?? [];
            const last = msgs[msgs.length - 1];
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-neutral-50 ${activeId === c.id ? "bg-green-50 border-r-2 border-brand-green" : ""}`}
              >
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-extrabold">{c.avatar}</div>
                  {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-neutral-900 truncate">{c.name}</p>
                    {c.unread > 0 && <span className="text-[10px] font-extrabold bg-brand-green text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">{c.unread}</span>}
                  </div>
                  <p className="text-xs text-neutral-400 truncate">{last?.text ?? "Start a conversation"}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Chat window ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-16 px-5 border-b border-neutral-100 flex items-center gap-3 shrink-0">
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-extrabold">{active.avatar}</div>
            {active.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />}
          </div>
          <div>
            <p className="text-sm font-extrabold text-neutral-900">{active.name}</p>
            <p className="text-xs text-neutral-400">{active.online ? "Online" : "Offline"} · {active.role}</p>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-2 rounded-xl text-neutral-400 hover:bg-neutral-100 hover:text-brand-green transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </button>
            <button className="p-2 rounded-xl text-neutral-400 hover:bg-neutral-100 hover:text-brand-green transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5 py-4 space-y-3">
          {msgs.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <p className="text-sm font-bold text-neutral-700">Start a conversation with {active.name}</p>
              <p className="text-xs text-neutral-400">Ask about crops, pests, soil, or anything farming related.</p>
            </div>
          )}
          {msgs.map((m, i) => (
            <div key={i} className={`flex items-end gap-2 ${m.from === "me" ? "flex-row-reverse" : "flex-row"}`}>
              {m.from === "them" && (
                <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mb-0.5">{active.avatar}</div>
              )}
              <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm font-medium leading-relaxed ${m.from === "me" ? "bg-brand-green text-white rounded-br-md" : "bg-neutral-100 text-neutral-800 rounded-bl-md"}`}>
                {m.text}
                <p className={`text-[10px] mt-1 ${m.from === "me" ? "text-white/60" : "text-neutral-400"}`}>{m.time}</p>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-5 py-3 border-t border-neutral-100 flex items-center gap-3 shrink-0">
          <button className="p-2 text-neutral-400 hover:text-brand-green transition-colors shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message…"
            className="flex-1 px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
          />
          <button
            onClick={send}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors disabled:opacity-40 shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
