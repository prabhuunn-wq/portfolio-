"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, Play } from "lucide-react";
import { useTheme } from "next-themes";
import HomeShowcaseRow from "./HomeShowcaseRow";
import SkillsContactRow from "./SkillsContactRow";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-screen bg-[#0a0a0f]" />;

  const bg = resolvedTheme === "dark" ? "/images/hero-dark.png" : "/images/hero-light.png";

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bg} alt="" fill priority className=" object-cover object-center" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/25 to-black/60" />

      <div className="relative z-10 flex h-full flex-col gap-3 px-4 pb-3 pt-20">
        
        <div className="flex flex-[1.3] items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] text-gray-300 sm:text-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">HI, I&apos;M</p>
            <h1 className="text-3xl font-black uppercase leading-none text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl xl:text-6xl">
              PRABHU R
            </h1>
            <h2 className="mt-1 text-xs font-medium tracking-[0.15em] text-amber-400 sm:text-base">
              FULL STACK DEVELOPER
            </h2>
            <p className="mt-3 max-w-md text-[11px] leading-5 text-gray-200 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] sm:text-sm sm:leading-6">
              I build exceptional digital experiences that are fast, accessible, visually stunning and responsive.
            </p>

            <div className="mt-4 flex gap-3">
              <Link href="/projects" className="flex items-center gap-2 rounded-lg border border-amber-500 bg-amber-500 px-4 py-2 text-xs font-semibold text-black transition hover:scale-105 sm:px-6 sm:py-3 sm:text-sm">
                Explore My Work <ArrowRight size={14} />
              </Link>
              <a href="/cv/prabhu-resume.pdf" download className="flex items-center gap-2 rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400 sm:px-6 sm:py-3 sm:text-sm">
                Download CV <Download size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-[0.65]">
          <HomeShowcaseRow />
        </div>

        <div className="flex-[0.45]">
          <SkillsContactRow />
        </div>
      </div>

      <button className="absolute bottom-4 right-6 z-20 hidden items-center gap-2 lg:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-400 text-amber-400 transition hover:bg-amber-400 hover:text-black">
          <Play size={12} className="ml-0.5" fill="currentColor" />
        </span>
        <span className="text-xs font-semibold tracking-wider text-white">PLAY INTRO</span>
      </button>
    </section>
  );
}