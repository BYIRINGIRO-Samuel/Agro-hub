"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
      </div>
      <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Settings</h1>
      <p className="text-neutral-500 max-w-lg mb-8">Manage your account, change password, and customize your notification preferences.</p>
    </div>
  );
}
