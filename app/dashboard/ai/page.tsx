"use client";

import React, { useState, useRef, useEffect } from "react";
import StatCard from "../../components/StatCard";

type ScanResult = null | "scanning" | {
  disease: string;
  confidence: number;
  recommendation: string;
};

export default function AgroAIPage() {
  const [activeTab, setActiveTab] = useState<"scan" | "yield" | "chat">("scan");
  
  // Scan State
  const [scanResult, setScanResult] = useState<ScanResult>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Yield State
  const [yieldResult, setYieldResult] = useState<{ predicted: string; increase: string; factors: string[] } | null>(null);

  // Chat State
  const [chatMessages, setChatMessages] = useState<{from: "me" | "ai", text: string}[]>([
    { from: "ai", text: "Hello! I am your Agro AI Assistant. What would you like help with today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleScan = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScanResult("scanning");
      setTimeout(() => {
        setScanResult({
          disease: "Early Blight (Fungal)",
          confidence: 94,
          recommendation: "Apply Mancozeb fungicide and ensure plants have adequate spacing for airflow. Remove affected lower leaves.",
        });
      }, 2500);
    }
  };

  const handlePredictYield = (e: React.FormEvent) => {
    e.preventDefault();
    setYieldResult(null);
    setTimeout(() => {
      setYieldResult({
        predicted: "4.2 Tons / Hectare",
        increase: "+18% vs region avg",
        factors: ["Optimal planting window", "Sufficient soil nitrogen", "Recent positive rainfall trend"]
      });
    }, 1500);
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { from: "me", text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        from: "ai", 
        text: "Based on local data, mulching and adjusting your irrigation schedule to early morning will help substantially." 
      }]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
          <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Agro AI Intelligence
        </h1>
        <p className="text-neutral-500 font-medium mt-1">Smart scanning, predictive yield logic, and instant agronomic advice.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-neutral-100 pb-px">
        <button 
          onClick={() => setActiveTab("scan")}
          className={`flex items-center gap-2 px-6 py-3 font-bold border-b-2 transition-colors ${activeTab === "scan" ? "border-brand-green text-brand-green" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Crop Scanner
        </button>
        <button 
          onClick={() => setActiveTab("yield")}
          className={`flex items-center gap-2 px-6 py-3 font-bold border-b-2 transition-colors ${activeTab === "yield" ? "border-brand-green text-brand-green" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Yield Predictor
        </button>
        <button 
          onClick={() => setActiveTab("chat")}
          className={`flex items-center gap-2 px-6 py-3 font-bold border-b-2 transition-colors ${activeTab === "chat" ? "border-brand-green text-brand-green" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          AI Advisor
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 min-h-[500px]">
        
        {/* ── SCANNER TAB ── */}
        {activeTab === "scan" && (
          <div className="max-w-2xl mx-auto py-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-extrabold text-neutral-900 mb-2">Automated Disease Detection</h2>
              <p className="text-sm text-neutral-500">Upload a clear photo of an affected plant leaf to instantly identify diseases or pest damage.</p>
            </div>
            
            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleScan} />
            
            {!scanResult && (
              <div 
                className="border-2 border-dashed border-brand-green/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-brand-green/5 transition-colors group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <p className="text-base font-bold text-neutral-900 mb-1">Upload Photo</p>
                <p className="text-xs text-neutral-400">JPG, PNG up to 10MB</p>
              </div>
            )}

            {scanResult === "scanning" && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 border-4 border-neutral-100 border-t-brand-green rounded-full animate-spin mb-6"></div>
                <p className="font-extrabold text-neutral-900 animate-pulse">Analyzing leaf patterns...</p>
                <p className="text-xs text-neutral-500 mt-2">Checking against 10,000+ crop disease signatures</p>
              </div>
            )}

            {scanResult && typeof scanResult === "object" && (
              <div className="animate-in fade-in zoom-in duration-300">
                <div className="bg-green-50 border border-green-100 rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-24 h-24 bg-brand-green text-white rounded-full flex flex-col items-center justify-center shrink-0 shadow-lg">
                      <span className="text-2xl font-black">{scanResult.confidence}%</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Match</span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-extrabold mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        Detection Alert
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{scanResult.disease}</h3>
                      <p className="text-sm font-medium text-neutral-600 leading-relaxed mb-4">{scanResult.recommendation}</p>
                      <button 
                        onClick={() => setScanResult(null)}
                        className="text-sm font-extrabold text-brand-green hover:underline flex items-center gap-1 mx-auto sm:mx-0"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        Scan Another Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── YIELD TAB ── */}
        {activeTab === "yield" && (
          <div className="max-w-2xl mx-auto py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <form onSubmit={handlePredictYield} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Input Farm Parameters</h3>
                
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-1">Crop Type</label>
                  <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-green">
                    <option>Maize</option><option>Beans</option><option>Irish Potatoes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-1">Farm Size (Hectares)</label>
                  <input type="number" step="0.1" defaultValue="2.5" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-green" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-1">Soil Type / Region</label>
                  <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-green">
                    <option>Musanze (Volcanic)</option><option>Kigali (Clay Loam)</option><option>Kayonza (Sandy)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-brand-green text-white font-extrabold py-3.5 rounded-xl hover:bg-brand-green-hover transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    Run Prediction Model
                  </button>
                </div>
              </form>

              <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 flex flex-col justify-center">
                {!yieldResult ? (
                  <div className="text-center text-neutral-400">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <p className="text-sm font-semibold">Fill parameters and run model to see projection</p>
                  </div>
                ) : (
                  <div className="animate-in fade-in duration-300">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Predicted Yield</p>
                    <h3 className="text-3xl font-black text-brand-green mb-1">{yieldResult.predicted}</h3>
                    <p className="text-sm font-bold text-green-600 mb-6 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      {yieldResult.increase}
                    </p>
                    
                    <p className="text-xs font-bold text-neutral-500 mb-3">Key Contributing Factors:</p>
                    <ul className="space-y-2">
                      {yieldResult.factors.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm font-medium text-neutral-700">
                          <svg className="w-4 h-4 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── CHAT TAB ── */}
        {activeTab === "chat" && (
          <div className="max-w-3xl mx-auto h-[500px] flex flex-col bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100">
            <div className="flex-1 overflow-y-auto p-6 space-y-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {chatMessages.map((m, i) => (
                <div key={i} className={`flex max-w-[80%] ${m.from === "ai" ? "mr-auto" : "ml-auto"}`}>
                  <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${m.from === "ai" ? "bg-white border border-neutral-100 text-neutral-800 rounded-tl-sm" : "bg-brand-green text-white rounded-tr-sm"}`}>
                    {m.from === "ai" && (
                      <div className="flex items-center gap-1.5 mb-2 border-b border-neutral-100 pb-2">
                        <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className="text-xs font-extrabold text-brand-green uppercase tracking-wider">Agro AI</span>
                      </div>
                    )}
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>
            
            <div className="bg-white p-4 border-t border-neutral-100">
              <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-brand-green/30 focus-within:border-brand-green transition-shadow">
                <input 
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendChat()}
                  placeholder="Ask for advice, pest solutions, or farming tips..." 
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium py-1.5"
                />
                <button 
                  onClick={sendChat}
                  disabled={!chatInput.trim()}
                  className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
