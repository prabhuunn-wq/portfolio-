import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, subtitle, image, tags, link }: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.06] backdrop-blur-2xl transition hover:border-amber-400/50 hover:bg-white/[0.1]"
    >
      <div className="relative h-20 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-2">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <h3 className="text-[11px] font-bold text-white">{title}</h3>
            <p className="text-[9px] text-gray-400">{subtitle}</p>
          </div>
          <ArrowUpRight size={12} className="flex-shrink-0 text-amber-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <div className="mt-auto flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded border border-white/[0.08] bg-white/[0.06] px-1.5 py-0.5 text-[8px] text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}