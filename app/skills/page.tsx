import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: FaHtml5, name: "HTML5", level: 90, color: "text-orange-500" },
      { icon: FaCss3Alt, name: "CSS3", level: 85, color: "text-blue-500" },
      { icon: FaJs, name: "JavaScript", level: 88, color: "text-yellow-400" },
      { icon: SiTypescript, name: "TypeScript", level: 80, color: "text-blue-400" },
      { icon: FaReact, name: "React", level: 88, color: "text-cyan-400" },
      { icon: SiNextdotjs, name: "Next.js", level: 82, color: "text-gray-900 dark:text-white" },
      { icon: SiTailwindcss, name: "Tailwind CSS", level: 90, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", level: 82, color: "text-green-500" },
      { icon: SiExpress, name: "Express.js", level: 78, color: "text-gray-500 dark:text-gray-300" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: SiMongodb, name: "MongoDB", level: 80, color: "text-green-400" },
      { icon: SiPostgresql, name: "PostgreSQL", level: 72, color: "text-blue-300" },
      { icon: SiPrisma, name: "Prisma", level: 75, color: "text-teal-400" },
      { icon: SiSupabase, name: "Supabase", level: 70, color: "text-emerald-500" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { icon: FaGitAlt, name: "Git", level: 80, color: "text-orange-400" },
      { icon: SiVercel, name: "Vercel", level: 78, color: "text-gray-700 dark:text-gray-200" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-12">
        <p className="text-xs font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">MY SKILLS</p>
        <h1 className="mt-3 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
          Technologies I Work With
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          A full-stack toolkit built through hands-on projects — from pixel-perfect
          frontends to scalable backends and databases.
        </p>

        <div className="mt-12 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-800 dark:text-white/80">
                {category.title.toUpperCase()}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-black/10 bg-black/[0.03] p-4 backdrop-blur-xl transition hover:border-amber-500/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-amber-400/40"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <Icon size={22} className={skill.color} />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}