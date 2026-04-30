"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div
        className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </>
  );
}
