"use client";

import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  AreaChart, Area, LineChart, Line,
} from "recharts";

/* ─── Revenue Data ─────────────────────────── */
const revenueData = [
  { month: "Jan", revenue: 120000 }, { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 150000 }, { month: "Apr", revenue: 260000 },
  { month: "May", revenue: 210000 }, { month: "Jun", revenue: 340000 },
  { month: "Jul", revenue: 190000 }, { month: "Aug", revenue: 420000 },
  { month: "Sep", revenue: 175000 }, { month: "Oct", revenue: 290000 },
  { month: "Nov", revenue: 320000 }, { month: "Dec", revenue: 450000 },
];

/* ─── Farm Stats ────────────────────────────── */
const statsData = [
  { name: "Healthy Crops", value: 60 },
  { name: "Under Care",    value: 30 },
  { name: "Dormant",       value: 10 },
];
const STAT_COLORS = ["#14351a", "#f28b03", "#d1e8d6"];

/* ─── Yield Trend Data ──────────────────────── */
export const yieldTrendData = [
  { week: "W1",  maize: 0.4, beans: 0.2, tomatoes: 0.1 },
  { week: "W2",  maize: 0.6, beans: 0.3, tomatoes: 0.2 },
  { week: "W3",  maize: 0.8, beans: 0.5, tomatoes: 0.4 },
  { week: "W4",  maize: 0.7, beans: 0.4, tomatoes: 0.6 },
  { week: "W5",  maize: 1.1, beans: 0.6, tomatoes: 0.8 },
  { week: "W6",  maize: 0.9, beans: 0.7, tomatoes: 0.7 },
  { week: "W7",  maize: 1.2, beans: 0.8, tomatoes: 1.0 },
  { week: "W8",  maize: 1.5, beans: 0.9, tomatoes: 1.2 },
  { week: "W9",  maize: 1.4, beans: 1.1, tomatoes: 1.1 },
  { week: "W10", maize: 1.8, beans: 1.2, tomatoes: 1.4 },
  { week: "W11", maize: 2.0, beans: 1.3, tomatoes: 1.6 },
  { week: "W12", maize: 2.4, beans: 1.5, tomatoes: 1.8 },
];

/* ─── Market Price Trend ────────────────────── */
export const marketPriceData = [
  { month: "Sep", maize: 180, beans: 420, tomatoes: 280 },
  { month: "Oct", maize: 200, beans: 400, tomatoes: 300 },
  { month: "Nov", maize: 220, beans: 380, tomatoes: 320 },
  { month: "Dec", maize: 240, beans: 360, tomatoes: 340 },
  { month: "Jan", maize: 260, beans: 350, tomatoes: 310 },
  { month: "Feb", maize: 280, beans: 370, tomatoes: 290 },
  { month: "Mar", maize: 300, beans: 390, tomatoes: 330 },
  { month: "Apr", maize: 310, beans: 410, tomatoes: 350 },
];

/* ─── Shared Tooltip ────────────────────────── */
const DarkTooltip = ({
  active, payload, label, unit = "",
}: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string; unit?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 text-white text-xs rounded-xl px-3 py-2.5 shadow-xl">
        <p className="text-white/50 mb-1 font-semibold">{label}</p>
        {payload.map((p) => (
          <p key={p.name} className="font-bold" style={{ color: p.color }}>
            {p.name}: {unit}{p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/* ─── Exports ───────────────────────────────── */
export function RevenueBarChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip content={<DarkTooltip unit="RWF " />} cursor={{ fill: "#e9f0ea", radius: 8 } as object} />
        <Bar dataKey="revenue" name="Revenue" radius={[6, 6, 0, 0]}>
          {revenueData.map((_, i) => <Cell key={i} fill={i % 2 === 0 ? "#14351a" : "#7aaf8a"} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FarmStatsPieChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={statsData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
          {statsData.map((_, i) => <Cell key={i} fill={STAT_COLORS[i]} />)}
        </Pie>
        <Legend iconType="circle" iconSize={8} formatter={(v) => <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>{v}</span>} />
        <Tooltip formatter={(v) => [`${v}%`, ""]} contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function YieldTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={yieldTrendData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
        <defs>
          <linearGradient id="gMaize" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#14351a" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#14351a" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gBeans" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#f28b03" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#f28b03" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gTomatoes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis dataKey="week" tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}T`} />
        <Tooltip content={<DarkTooltip unit="" />} />
        <Legend iconType="circle" iconSize={8} formatter={(v) => <span style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "capitalize" }}>{v}</span>} />
        <Area type="monotone" dataKey="maize"    name="Maize"    stroke="#14351a" strokeWidth={2.5} fill="url(#gMaize)"    dot={false} />
        <Area type="monotone" dataKey="beans"    name="Beans"    stroke="#f28b03" strokeWidth={2.5} fill="url(#gBeans)"    dot={false} />
        <Area type="monotone" dataKey="tomatoes" name="Tomatoes" stroke="#3b82f6" strokeWidth={2.5} fill="url(#gTomatoes)" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function MarketPriceChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={marketPriceData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}`} />
        <Tooltip content={<DarkTooltip unit="RWF " />} />
        <Legend iconType="circle" iconSize={8} formatter={(v) => <span style={{ fontSize: 11, fontWeight: 600, color: "#374151", textTransform: "capitalize" }}>{v}</span>} />
        <Line type="monotone" dataKey="maize"    name="Maize/kg"    stroke="#14351a" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="beans"    name="Beans/kg"    stroke="#f28b03" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="tomatoes" name="Tomatoes/kg" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
