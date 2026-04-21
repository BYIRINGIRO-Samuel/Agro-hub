"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const navItems = [
  { id: "profile",       label: "Profile",        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { id: "security",      label: "Security",        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { id: "notifications", label: "Notifications",   icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
  { id: "farm",          label: "Farm Setup",      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: "billing",       label: "Billing & Plan",  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { id: "privacy",       label: "Privacy & Data",  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const notifSettings = [
  { id: "pest_alert",    label: "Pest & Disease Alerts",        desc: "Get notified when threats are detected near your region", default: true },
  { id: "market_price",  label: "Market Price Updates",          desc: "Daily price changes for your listed crops", default: true },
  { id: "harvest",       label: "Harvest Reminders",             desc: "Reminders when harvest time approaches", default: true },
  { id: "community",     label: "Community Replies",             desc: "When someone replies to your questions or posts", default: false },
  { id: "expert",        label: "Expert Consultation Reminders", desc: "Reminders before your booked sessions", default: true },
  { id: "ai_insight",    label: "AI Weekly Insights",            desc: "Weekly personalised farm performance digest", default: false },
];

const privacySettings = [
  { id: "share_yield",   label: "Share yield data for regional insights",   desc: "Help the platform build better AI models for your region", default: true },
  { id: "personalized",  label: "Allow personalized recommendations",        desc: "We use your farm data to give smarter suggestions", default: true },
  { id: "public_profile",label: "Show profile in community",                 desc: "Let other farmers find and follow your public posts", default: false },
  { id: "analytics",     label: "Analytics & Crash Reporting",               desc: "Help improve the app by sharing anonymous usage data", default: true },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${enabled ? "bg-brand-green" : "bg-neutral-200"}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${enabled ? "translate-x-5" : "translate-x-0"}`}></span>
    </button>
  );
}

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ALL hooks declared unconditionally at the top
  const [active, setActive] = useState("profile");
  const [notifs, setNotifs] = useState(() =>
    Object.fromEntries(notifSettings.map((n) => [n.id, n.default]))
  );
  const [privacy, setPrivacy] = useState(() =>
    Object.fromEntries(privacySettings.map((p) => [p.id, p.default]))
  );
  const [saved, setSaved] = useState(false);

  // Sync URL ?tab= param to active section
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && navItems.some((n) => n.id === tab)) {
      setActive(tab);
    }
  }, [searchParams]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleNav = (id: string) => {
    setActive(id);
    router.push(`/dashboard/settings?tab=${id}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Settings</h1>
        <p className="text-neutral-500 font-medium mt-1">Manage your account, farm profile, notifications and plan</p>
      </div>

      {/* Save Toast */}
      {saved && (
        <div className="fixed top-6 right-6 z-50 bg-brand-green text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Changes saved successfully!
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Nav */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-2 flex flex-row lg:flex-col gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  active === item.id ? "bg-brand-green text-white shadow" : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="flex-1 min-w-0">

          {/* ── PROFILE ── */}
          {active === "profile" && (
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 space-y-7">
              <div className="flex items-center gap-5 pb-7 border-b border-neutral-100">
                <div className="w-20 h-20 bg-brand-green text-white rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-lg shrink-0">FM</div>
                <div>
                  <h2 className="text-xl font-extrabold text-neutral-900">Fabrice Munyaneza</h2>
                  <p className="text-sm text-neutral-400 mt-0.5">Farmer · Kigali, Rwanda</p>
                  <button className="mt-2 text-xs font-extrabold text-brand-green border border-brand-green/30 px-3 py-1.5 rounded-lg hover:bg-brand-green hover:text-white transition-colors">
                    Change Photo
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Full Name", value: "Fabrice Munyaneza", type: "text" },
                  { label: "Phone Number", value: "+250 788 123 456", type: "tel" },
                  { label: "Email (Optional)", value: "fabrice@example.com", type: "email" },
                  { label: "Location", value: "Kigali, Rwanda", type: "text" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">{f.label}</label>
                    <input type={f.type} defaultValue={f.value} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green" />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">Bio</label>
                  <textarea rows={3} defaultValue="Smallholder farmer based in Kigali. Growing maize, beans, and tomatoes across 3 plots." className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green resize-none" />
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={handleSave} className="bg-brand-green text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20">Save Profile</button>
              </div>
            </div>
          )}

          {/* ── SECURITY ── */}
          {active === "security" && (
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 space-y-6">
              <h2 className="text-base font-extrabold text-neutral-900">Security & Password</h2>
              <div className="space-y-4">
                {[
                  { label: "Current Password", placeholder: "Enter current password" },
                  { label: "New Password", placeholder: "Enter new password" },
                  { label: "Confirm New Password", placeholder: "Confirm new password" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">{f.label}</label>
                    <input type="password" placeholder={f.placeholder} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green" />
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs font-extrabold text-blue-700 mb-1">🔒 Two-Factor Authentication</p>
                <p className="text-xs text-blue-600">Add an extra layer of security with SMS verification on every login.</p>
                <button className="mt-3 text-xs font-extrabold text-blue-700 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">Enable 2FA</button>
              </div>
              <div className="flex justify-end">
                <button onClick={handleSave} className="bg-brand-green text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20">Update Password</button>
              </div>
            </div>
          )}

          {/* ── NOTIFICATIONS ── */}
          {active === "notifications" && (
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 space-y-6">
              <h2 className="text-base font-extrabold text-neutral-900">Notification Preferences</h2>
              <div className="divide-y divide-neutral-50">
                {notifSettings.map((n) => (
                  <div key={n.id} className="flex items-center justify-between py-4 gap-4">
                    <div>
                      <p className="text-sm font-bold text-neutral-900">{n.label}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{n.desc}</p>
                    </div>
                    <Toggle enabled={notifs[n.id]} onChange={() => setNotifs((prev) => ({ ...prev, [n.id]: !prev[n.id] }))} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={handleSave} className="bg-brand-green text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20">Save Preferences</button>
              </div>
            </div>
          )}

          {/* ── FARM SETUP ── */}
          {active === "farm" && (
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 space-y-6">
              <h2 className="text-base font-extrabold text-neutral-900">Farm Profile Setup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Farm Name", value: "Munyaneza Farm" },
                  { label: "Total Area (ha)", value: "3.0" },
                  { label: "Primary Region", value: "Kigali Province" },
                  { label: "Soil Type", value: "Loamy Clay" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">{f.label}</label>
                    <input defaultValue={f.value} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green" />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">Primary Crops</label>
                  <div className="flex flex-wrap gap-2">
                    {["Maize", "Beans", "Tomatoes", "Sorghum", "Potatoes", "Cassava"].map((crop) => (
                      <button key={crop} className="px-4 py-2 text-xs font-extrabold rounded-xl border border-brand-green/30 bg-green-50 text-brand-green hover:bg-brand-green hover:text-white transition-all">{crop}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={handleSave} className="bg-brand-green text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20">Save Farm Profile</button>
              </div>
            </div>
          )}

          {/* ── BILLING ── */}
          {active === "billing" && (
            <div className="space-y-5">
              <div className="bg-brand-green rounded-2xl p-7 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold bg-white/20 px-3 py-1.5 rounded-full">Current Plan</span>
                  <span className="text-xs font-extrabold text-brand-orange">Free Tier</span>
                </div>
                <h2 className="text-2xl font-extrabold mb-1">Free Farmer Plan</h2>
                <p className="text-white/60 text-sm">Upgrade to unlock AI insights, unlimited plots, and priority expert access.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: "Pro Farmer", price: "RWF 4,999/mo", features: ["Unlimited plots", "AI Insights (daily)", "Priority expert access", "PDF export reports"], highlight: false },
                  { name: "Cooperative", price: "RWF 14,999/mo", features: ["Everything in Pro", "Team management", "Group analytics", "Dedicated agronomist", "Custom branding"], highlight: true },
                ].map((plan) => (
                  <div key={plan.name} className={`rounded-2xl border p-6 bg-white ${plan.highlight ? "border-brand-green shadow-lg shadow-brand-green/10" : "border-neutral-200"}`}>
                    {plan.highlight && <span className="text-[10px] font-extrabold bg-brand-orange text-white px-2.5 py-1 rounded-full mb-3 inline-block">Most Popular</span>}
                    <h3 className="text-lg font-extrabold text-neutral-900 mb-1">{plan.name}</h3>
                    <p className="text-2xl font-extrabold text-brand-green mb-5">{plan.price}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                          <svg className="w-3.5 h-3.5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 text-sm font-extrabold rounded-xl transition-colors ${plan.highlight ? "bg-brand-green text-white hover:bg-brand-green-hover shadow-lg shadow-brand-green/20" : "border-2 border-neutral-200 text-neutral-700 hover:border-brand-green hover:text-brand-green"}`}>
                      Upgrade to {plan.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PRIVACY ── */}
          {active === "privacy" && (
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 space-y-6">
              <h2 className="text-base font-extrabold text-neutral-900">Privacy & Data</h2>
              <div className="divide-y divide-neutral-50">
                {privacySettings.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 gap-4">
                    <div>
                      <p className="text-sm font-bold text-neutral-900">{item.label}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                    </div>
                    <Toggle enabled={privacy[item.id]} onChange={() => setPrivacy((prev) => ({ ...prev, [item.id]: !prev[item.id] }))} />
                  </div>
                ))}
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <p className="text-sm font-extrabold text-red-700">Danger Zone</p>
                  <p className="text-xs text-red-500 mt-0.5">Delete your account and all farm data permanently. This cannot be reversed.</p>
                  <button className="mt-2 text-xs font-extrabold text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">Delete Account</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
