"use client";

import React from "react";
import StatCard from "../components/StatCard";

export default function DashboardOverviewPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-2 tracking-tight">Overview</h1>
        <p className="text-neutral-500 font-medium">Welcome back, Fabrice. Here is what's happening in your farm today.</p>
      </div>

      {/* KPI Cards using reusable StatCard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <StatCard
          label="Total Revenue"
          value="RWF 450k"
          icon={
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Active Farmers"
          value="20,412"
          icon={
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <StatCard
          label="Total Yield Volume"
          value="4.8 Tons"
          variant="filled"
          icon={
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white p-8 rounded-4xl shadow-sm border border-neutral-100 flex flex-col min-h-[400px]">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-xl font-bold text-neutral-900">Crop Health & Yield Projection</h2>
             <select className="bg-neutral-50 px-4 py-2 border border-neutral-200 rounded-lg text-sm font-semibold text-neutral-600 focus:outline-none focus:ring-1 focus:ring-brand-green">
                <option>This Season</option>
                <option>Last Season</option>
             </select>
           </div>
           <div className="flex-1 w-full bg-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100 border-dashed relative">
             {/* Mock Chart UI */}
             <div className="flex items-end justify-around w-full h-48 px-10">
               <div className="w-12 bg-brand-green/20 rounded-t-xl h-1/3 relative"><div className="absolute top-0 w-full h-2 bg-brand-green rounded-t-xl"></div></div>
               <div className="w-12 bg-brand-green/20 rounded-t-xl h-2/3 relative"><div className="absolute top-0 w-full h-2 bg-brand-green rounded-t-xl"></div></div>
               <div className="w-12 bg-brand-green/20 rounded-t-xl h-1/2 relative"><div className="absolute top-0 w-full h-2 bg-brand-green rounded-t-xl"></div></div>
               <div className="w-12 bg-brand-green/50 rounded-t-xl h-full shadow-lg relative group"><div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">Current Harvest</div></div>
               <div className="w-12 bg-neutral-200 rounded-t-xl h-3/4 relative"></div>
             </div>
             <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "100% 30px" }}></div>
           </div>
        </div>

        {/* Side tasks/alerts */}
        <div className="bg-white p-8 rounded-4xl shadow-sm border border-neutral-100 flex flex-col">
           <h2 className="text-xl font-bold text-neutral-900 mb-6">Action Alerts</h2>
           
           <div className="flex flex-col gap-4">
             <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex gap-4 items-start">
               <div className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 shrink-0"></div>
               <div>
                 <p className="text-sm font-bold text-neutral-900">Reduce Irrigation</p>
                 <p className="text-xs text-neutral-600 mt-1">Soil moisture is at 85% in Sector A. Cut back watering by 20% today.</p>
               </div>
             </div>
             <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex gap-4 items-start">
               <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0"></div>
               <div>
                 <p className="text-sm font-bold text-neutral-900">Optimal Sell Price Reached</p>
                 <p className="text-xs text-neutral-600 mt-1">Carrots are trading at RWF 300/kg in the Kigali market. List now.</p>
               </div>
             </div>
             <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-xl flex gap-4 items-start">
               <div className="w-2 h-2 rounded-full bg-neutral-400 mt-1.5 shrink-0"></div>
               <div>
                 <p className="text-sm font-bold text-neutral-900">Community Webinar</p>
                 <p className="text-xs text-neutral-600 mt-1">At 4 PM: &quot;Winter prep with Agronomist Paul&quot;.</p>
               </div>
             </div>
           </div>
           
           <button className="w-full py-3 border-2 border-neutral-200 text-neutral-600 font-bold rounded-xl mt-auto text-sm hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
              View All Alerts
           </button>
        </div>
      </div>
    </>
  );
}
