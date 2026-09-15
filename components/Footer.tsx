import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-black/10 bg-white/20 px-6 py-6 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0f]/40 sm:px-12">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-8 sm:grid-cols-3">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-light.png" alt="Prabhu Logo" width={30} height={30} priority />
          <span className="text-sm font-bold tracking-widest text-gray-900 dark:text-white">
            PRABHU
          </span>
        </Link>
        <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-400">
          Full Stack Developer building modern, fast and scalable web applications with React, Next.js and Tailwind CSS.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-600 dark:text-amber-400">
          QUICK LINKS
        </h3>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-gray-600 transition duration-300 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-600 dark:text-amber-400">
          GET IN TOUCH
        </h3>
        <a href="mailto:prabhuunn@example.com" className="flex items-center gap-2 text-sm text-gray-600 transition duration-300 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
          <Mail size={16} />
          <span>prabhuunn@example.com</span>
        </a>
        <div className="mt-5 flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-gray-600 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-amber-400 dark:hover:bg-amber-400">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </div>

    <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-5 text-xs text-gray-500 dark:border-white/10 sm:flex-row">
      <p>© {year} Prabhu. All rights reserved.</p>
      <p>Built with <span className="text-gray-900 dark:text-white">Next.js</span> & <span className="text-gray-900 dark:text-white">Tailwind CSS</span></p>
    </div>
  </div>
</footer>
  );
}
