"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

/* ─── Revenue Data ─────────────────────────────── */
const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 150000 },
  { month: "Apr", revenue: 260000 },
  { month: "May", revenue: 210000 },
  { month: "Jun", revenue: 340000 },
  { month: "Jul", revenue: 190000 },
  { month: "Aug", revenue: 420000 },
  { month: "Sep", revenue: 175000 },
  { month: "Oct", revenue: 290000 },
  { month: "Nov", revenue: 320000 },
  { month: "Dec", revenue: 450000 },
];

/* ─── Farm Stats Data ───────────────────────────── */
const statsData = [
  { name: "Healthy Crops", value: 60 },
  { name: "Under Care", value: 30 },
  { name: "Dormant", value: 10 },
];
const STAT_COLORS = ["#14351a", "#f28b03", "#d1e8d6"];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 text-white text-xs rounded-xl px-3 py-2 shadow-xl font-semibold">
        <p className="text-white/60 mb-0.5">{label}</p>
        <p>RWF {payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export function RevenueBarChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 600 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#e9f0ea", radius: 8 }} />
        <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
          {revenueData.map((_, index) => (
            <Cell key={index} fill={index % 2 === 0 ? "#14351a" : "#7aaf8a"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FarmStatsPieChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={statsData}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          paddingAngle={4}
          dataKey="value"
        >
          {statsData.map((_, index) => (
            <Cell key={index} fill={STAT_COLORS[index]} />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>{value}</span>
          )}
        />
        <Tooltip
          formatter={(value) => [`${value}%`, ""]}
          contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
