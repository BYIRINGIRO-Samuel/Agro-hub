"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setPhase("done");
      const timeout = setTimeout(onFinish, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  const p = Math.min(progress, 100);
  const circumference = 2 * Math.PI * 130;

  /* Circle transitions from brown-dry to lush-green */
  const bgInner = p < 50
    ? `radial-gradient(circle, rgba(92,58,30,${0.3 - p * 0.004}) 0%, rgba(10,26,13,0.98) 75%)`
    : `radial-gradient(circle, rgba(34,197,94,${0.1 + (p - 50) * 0.003}) 0%, rgba(10,26,13,0.98) 75%)`;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#050f06] transition-opacity duration-700 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Dynamic Background Glow */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-1000 opacity-20"
        style={{
          background: p < 50 ? "#d97706" : "#22c55e",
          transform: `scale(${0.8 + p * 0.004})`,
        }}
      />

      {/* Main Circular Container */}
      <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>

        {/* 1. Outer Progress Arc */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 300 300">
          <circle
            cx="150" cy="150" r="140"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 140}
            strokeDashoffset={2 * Math.PI * 140 * (1 - p / 100)}
            className="transition-all duration-300 ease-out"
            style={{
              stroke: p < 50 ? "#d97706" : "#22c55e",
              filter: `drop-shadow(0 0 10px ${p < 50 ? "rgba(217,119,6,0.3)" : "rgba(34,197,94,0.4)"})`,
            }}
          />
        </svg>

        {/* 2. Clockwise Dashed Spinner */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: "12s" }}
          viewBox="0 0 300 300"
        >
          <circle
            cx="150" cy="150" r="130"
            fill="none"
            strokeWidth="1.5"
            strokeDasharray="10 20"
            className="transition-all duration-700"
            style={{ stroke: p < 50 ? "rgba(217,119,6,0.15)" : "rgba(74,222,128,0.25)" }}
          />
        </svg>

        {/* 3. Anti-clockwise Dashed Spinner */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: "8s", animationDirection: "reverse" }}
          viewBox="0 0 300 300"
        >
          <circle
            cx="150" cy="150" r="120"
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 12"
            className="transition-all duration-700"
            style={{ stroke: p < 50 ? "rgba(217,119,6,0.1)" : "rgba(74,222,128,0.2)" }}
          />
        </svg>

        {/* Inner Content Area */}
        <div
          className="absolute rounded-full transition-all duration-1000 flex items-center justify-center overflow-hidden"
          style={{
            width: 220,
            height: 220,
            background: bgInner,
            boxShadow: p < 50
              ? "inset 0 0 40px rgba(139,105,20,0.05)"
              : `inset 0 0 60px rgba(34,197,94,0.1), 0 0 30px rgba(34,197,94,0.05)`,
          }}
        >
          {/* Cracked Earth Texture (Fade Out) */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none transition-opacity duration-1000"
            style={{ opacity: p < 60 ? (60 - p) / 60 * 0.2 : 0 }}
            viewBox="0 0 100 100"
          >
            <path d="M10,10 L30,40 L10,70" stroke="#8b6914" strokeWidth="0.5" fill="none" />
            <path d="M50,0 L60,30 L40,60 L50,100" stroke="#8b6914" strokeWidth="0.5" fill="none" />
            <path d="M90,10 L70,50 L90,90" stroke="#8b6914" strokeWidth="0.5" fill="none" />
          </svg>

          {/* Lush Glow (Fade In) */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ 
              opacity: p > 40 ? (p - 40) / 60 * 0.1 : 0,
              background: "radial-gradient(circle at center, #22c55e 0%, transparent 70%)"
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Logo Transition */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                transform: `scale(${0.95 + p * 0.001}) rotate(${p < 50 ? -3 : 0}deg)`,
                filter: p > 70 ? "drop-shadow(0 0 15px rgba(34,197,94,0.4))" : "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-700"
                style={{ color: p < 50 ? "#d97706" : "#4ade80" }}
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>

            {/* Brand Name */}
            <h2 className="text-3xl font-black tracking-tighter flex items-center gap-0.5">
              <span 
                className="transition-colors duration-700"
                style={{ color: p < 50 ? "#d97706" : "#22c55e" }}
              >
                Agro
              </span>
              <span className="text-white">Hub</span>
            </h2>
          </div>
        </div>

        {/* Floating Sprout Symbols (Appearing as we progress) */}
        {[30, 45, 60, 75, 90].map((angle, i) => {
          const threshold = 20 + i * 15;
          const visible = p > threshold;
          const scale = visible ? Math.min((p - threshold) / 20, 1) : 0;
          const dist = 100;
          const rad = (angle + 180) * Math.PI / 180;
          return (
            <div
              key={i}
              className="absolute transition-all duration-700 pointer-events-none"
              style={{
                transform: `translate(${Math.cos(rad) * dist}px, ${Math.sin(rad) * dist}px) scale(${scale})`,
                opacity: scale * 0.4,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
