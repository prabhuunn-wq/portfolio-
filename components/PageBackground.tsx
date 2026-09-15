"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function PageBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (resolvedTheme === "light") {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-sky-50">
      {/* Sun glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-100/50 blur-[80px]" />

      {/* Cloud shapes */}
      <div className="absolute left-[8%] top-[12%] h-20 w-56 rounded-full bg-white/50 blur-2xl" />
      <div className="absolute left-[12%] top-[10%] h-16 w-40 rounded-full bg-white/60 blur-xl" />

      <div className="absolute right-[15%] top-[28%] h-24 w-64 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute right-[18%] top-[26%] h-16 w-44 rounded-full bg-white/55 blur-xl" />

      <div className="absolute left-[30%] top-[55%] h-16 w-48 rounded-full bg-white/35 blur-2xl" />

      <div className="absolute right-[25%] bottom-[15%] h-20 w-52 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute right-[28%] bottom-[13%] h-14 w-36 rounded-full bg-white/55 blur-xl" />

      <div className="absolute left-[5%] bottom-[25%] h-14 w-40 rounded-full bg-white/35 blur-2xl" />
    </div>
  );
}

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Gold glows */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-500/25 blur-[100px]" />
      <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-yellow-500/15 blur-[120px]" />
      <div className="absolute -left-10 bottom-20 h-80 w-80 rounded-full bg-amber-400/15 blur-[110px]" />
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-yellow-400/10 blur-[100px]" />

      {/* Faint gold grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}