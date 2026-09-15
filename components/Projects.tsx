import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const projects = [
  {
    title: "SnapCart",
    description: "E-Commerce Platform",
    image: "/images/projects/snapcart.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/projects/snapcart",
  },
  {
    title: "Makkalin Kural",
    description: "Tamil News Aggregator",
    image: "/images/projects/makkalin-kural.png",
    tags: ["Next.js", "MongoDB", "GNews API"],
    link: "/projects/makkalin-kural",
  },
  {
    title: "Uzhavan Harvest",
    description: "Agri Delivery Platform",
    image: "/images/projects/uzhavan-harvest.png",
    tags: ["React", "Prisma", "Stripe"],
    link: "/projects/uzhavan-harvest",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-amber-400/50"
        >
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="flex-shrink-0 text-amber-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Full standalone section — used on the dedicated /projects page
export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0f] px-6 py-20 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-400">
            FEATURED PROJECTS
          </p>
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-sm font-semibold tracking-wider text-amber-400 transition hover:gap-3 sm:flex"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}