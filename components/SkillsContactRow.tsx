import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={16} />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt size={16} />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJs size={16} />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTypescript size={16} />, name: "TypeScript", color: "text-blue-400" },
  { icon: <FaReact size={16} />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs size={16} />, name: "Next.js", color: "text-white" },
  { icon: <FaNodeJs size={16} />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb size={16} />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiTailwindcss size={16} />, name: "Tailwind", color: "text-sky-400" },
];

export default function SkillsContactRow() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      
      {/* My Skills */}
      <div className="flex flex-col justify-center overflow-hidden rounded-xl border border-white/8 bg-white/6 p-3 backdrop-blur-2xl">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.15em] text-amber-400">
          MY SKILLS
        </p>

        <div className="grid grid-cols-9 gap-2">
          {skills.map((skill) => (
            <div key={skill.name} className={`flex flex-col items-center gap-1 ${skill.color}`}>
              {skill.icon}
              <span className="text-[7px] text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative flex items-center overflow-hidden rounded-xl border border-white/8 bg-white/6 p-4 backdrop-blur-2xl">
        <div className="relative z-10">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-amber-400">
            LET&apos;S BUILD SOMETHING AMAZING TOGETHER
          </p>
          <p className="mt-1 text-[10px] text-gray-300">
            I&apos;m currently available for work.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-500 bg-amber-500 px-3 py-1.5 text-[10px] font-semibold text-black transition hover:scale-105"
          >
            GET IN TOUCH
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}