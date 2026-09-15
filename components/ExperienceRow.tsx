import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

const milestones = [
  {
    role: "Full Stack Developer",
    org: "Self-Directed Learning (25 Projects Series)",
    period: "2025 — Present",
  },
  {
    role: "Sales & Marketing",
    org: "Career before Web Development",
    period: "Earlier",
  },
];

export default function ExperienceRow() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/3 p-3 backdrop-blur-lg">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-semibold tracking-[0.15em] text-amber-400">
          EXPERIENCE
        </p>
        <Link
          href="/experience"
          className="flex items-center gap-1 text-[10px] font-semibold tracking-wide text-amber-400"
        >
          VIEW FULL EXPERIENCE <ArrowUpRight size={11} />
        </Link>
      </div>

      <div className="flex flex-1 items-center gap-4 overflow-x-auto">
        {milestones.map((m) => (
          <div
            key={m.role}
            className="flex min-w-55 flex-1 items-start gap-2 rounded-lg border border-white/10 bg-black/20 p-2.5"
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-400/40 text-amber-400">
              <Briefcase size={12} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white">{m.role}</p>
              <p className="text-[9px] text-gray-400">{m.org}</p>
              <p className="text-[8px] tracking-wide text-amber-400/80">{m.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}