"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.577v-2.02c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.432.372.816 1.103.816 2.222v3.293c0 .317.19.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type Props = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string; // live demo URL
  githubLink?: string; // repo URL
  image?: string; // screenshot path, e.g. /projects/taskflow.png
};

export default function ProjectCardFull({
  title,
  subtitle,
  description,
  tags,
  link,
  githubLink,
  image,
}: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] backdrop-blur-xl transition hover:border-amber-500/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-amber-400/40">
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-black/5 dark:bg-white/5">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-500 dark:text-gray-600">
            No preview
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {githubLink && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(githubLink, "_blank", "noopener,noreferrer");
            }}
            aria-label={`${title} GitHub repository`}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-amber-500 hover:text-black"
          >
            <GithubIcon size={16} />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
          <ArrowUpRight
            size={18}
            className="flex-shrink-0 text-amber-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-amber-400"
          />
        </div>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-black/10 bg-black/5 px-2.5 py-1 text-[11px] text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-1.5 rounded-lg border border-amber-500/60 px-3 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-500 hover:text-black dark:border-amber-400/60 dark:text-amber-400 dark:hover:bg-amber-400"
        >
          Live Demo
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}