"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/skills", label: "SKILLS" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex h-20 items-center justify-between px-6 sm:px-12 lg:px-16">
        
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo-light.png"
            alt="Prabhu Logo"
            width={44}
            height={44}
            priority
            className="transition duration-300 hover:scale-110"
          />
        </Link>

        {/* Center - Nav Links (Desktop) */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-1 text-sm font-medium tracking-wider transition [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] ${
                  isActive ? "text-amber-400" : "text-white hover:text-amber-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-amber-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right - Actions (Desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl border border-amber-500 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold tracking-wider text-amber-600 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] dark:bg-black/20 dark:text-amber-400"
          >
            LET'S TALK
            <MessageSquare size={16} />
          </Link>
        </div>

        {/* Mobile - Theme toggle + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/20 bg-black/10 text-gray-800 backdrop-blur-sm transition hover:border-amber-500 hover:text-amber-500 dark:border-white/20 dark:bg-black/20 dark:text-white dark:hover:border-amber-400 dark:hover:text-amber-400"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium tracking-wider transition ${
                  isActive
                    ? "bg-amber-400/10 text-amber-400"
                    : "text-white hover:bg-white/10 hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-amber-500 px-5 py-3 text-sm font-semibold tracking-wider text-amber-400 transition-all duration-300 hover:bg-amber-500 hover:text-black"
          >
            LET'S TALK
            <MessageSquare size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}