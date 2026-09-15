import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const stats = [
 
  { value: "10+", label: "PROJECTS COMPLETED" },
  { value: "10+", label: "TECHNOLOGIES" },
  { value: "5★", label: "CLIENT REVIEWS" },
];

const timeline = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    org: "Self-Directed Learning — 25 Projects Series",
    period: "2025 — Present",
    description:
      "Building a portfolio of real-world applications with React, TypeScript, Node.js and modern databases. Shipped e-commerce, agriculture-delivery, and news aggregator platforms end to end.",
  },
  {
    icon: GraduationCap,
    title: "Web Development Transition",
    org: "Structured Online Courses",
    period: "2024 — 2025",
    description:
      "Learned frontend and backend fundamentals from scratch — JavaScript, React, Node.js, MongoDB, and system design patterns — through hands-on project-based courses.",
  },
  {
    icon: Briefcase,
    title: "Sales & Marketing",
    org: "Prior Career",
    period: "Before 2024",
    description:
      "Built a foundation in client communication, negotiation, and business understanding — skills that now shape how I approach product thinking as a developer.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-12">
        
        {/* Header */}
        <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-center">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 sm:mx-0 sm:h-52 sm:w-52">
            <Image src="/images/profile.jpg" alt="Prabhu" fill className="object-cover" />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">ABOUT ME</p>
            <h1 className="mt-3 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
              Hi, I&apos;m Prabhu
            </h1>
            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              I&apos;m a passionate Full Stack Developer based in Tamil Nadu, India.
              I love turning real-world problems into scalable, user-friendly web
              applications — from e-commerce platforms to agriculture delivery
              systems and news aggregators. I care about clean code, thoughtful
              design, and continuous learning.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-black/10 bg-black/3` p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] tracking-wider text-gray-500 dark:text-gray-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <p className="mb-8 text-xs font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">
            MY JOURNEY
          </p>

          <div className="relative space-y-8 border-l border-black/10 pl-8 dark:border-white/10">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative">
                  <span className="absolute -left-10.5 flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/40 bg-white text-amber-600 dark:border-amber-400/40 dark:bg-[#0a0a0f] dark:text-amber-400">
                    <Icon size={15} />
                  </span>

                  <div className="rounded-xl border border-black/10 bg-black/2 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/3">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <span className="text-xs tracking-wide text-amber-600 dark:text-amber-400">{item.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.org}</p>
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}