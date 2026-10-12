import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`reveal group panel panel-glow panel-hover flex flex-col p-5 sm:p-7 ${
        project.flagship ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </span>
        {project.flagship && <span className="chip chip-accent">★ Flagship</span>}
      </div>

      <h3
        className={`mb-2 flex items-center gap-2 font-semibold tracking-tight ${
          project.flagship ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {project.name}
        <ArrowUpRight
          size={project.flagship ? 22 : 18}
          className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </h3>

      <p
        className={`mb-6 leading-relaxed text-muted-foreground ${
          project.flagship ? "max-w-2xl text-base" : "text-sm"
        }`}
      >
        {project.oneLiner}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.stack.slice(0, 5).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="chip">+{project.stack.length - 5} more</span>
        )}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read the case study
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
