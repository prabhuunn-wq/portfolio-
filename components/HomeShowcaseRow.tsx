import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutCard from "./AboutCard";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "TaskFlow", subtitle: "Project Management App", image: "/images/projects/taskflow.png", tags: ["React", "AWS"], link: "http://taskflow-prabhu-rajagopal-2026.s3-website.ap-south-1.amazonaws.com/login" },
  { title: "Uzhavan-Harvest", subtitle: "Agricultural Delivery Platform", image: "/images/projects/uzhavan-harvest.png", tags: ["React", "PostgreSQL"], link: "https://uzhavan-harvest1.vercel.app/" },
  { title: "SnapCart", subtitle: "E-Commerce Platform", image: "/images/projects/snapcart.png", tags: ["React", "Node.js"], link: "https://snapkart-ecommerce.vercel.app/" },
];

export default function HomeShowcaseRow() {
  return (
    <div className="grid h-full grid-cols-4 gap-3">
      <div className="col-span-1">
        <AboutCard />
      </div>

      <div className="col-span-3 flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.05] p-3 backdrop-blur-2xl">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-amber-400">FEATURED PROJECTS</p>
          <Link href="/projects" className="flex items-center gap-1 text-[10px] font-semibold tracking-wide text-amber-400">
            VIEW ALL PROJECTS <ArrowUpRight size={11} />
          </Link>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}