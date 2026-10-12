import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectDetail({
  project,
  diagram,
}: {
  project: Project;
  diagram: React.ReactNode;
}) {
  return (
    <div className="container-x py-10 sm:py-16">
      <Link
        href="/#projects"
        className="mb-8 inline-flex min-h-10 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      {/* Header */}
      <header className="rise mb-10 sm:mb-14">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h1 className="balance text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">{project.name}</span>
          </h1>
          {project.flagship && <span className="chip chip-accent">★ Flagship</span>}
        </div>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.oneLiner}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a href={project.githubUrl} className="btn btn-ghost w-full sm:w-auto">
            <Github size={16} /> View source
          </a>
        )}
      </header>

      {/* Architecture — layered diagram wraps to the screen width */}
      <section className="reveal panel panel-glow mb-10 p-4 sm:mb-14 sm:p-6">
        <h2 className="eyebrow mb-5">Architecture</h2>
        <div className="min-w-0">{diagram}</div>
      </section>

      <section className="reveal mb-10 sm:mb-14">
        <h2 className="eyebrow mb-4">Overview</h2>
        <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
          {project.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mb-10 sm:mb-14">
        <h2 className="reveal eyebrow mb-5">Engineering Decisions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {project.decisions.map((d, i) => (
            <div key={d.title} className="reveal panel p-5">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1.5 mt-1 text-sm font-semibold sm:text-base">{d.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <h2 className="eyebrow mb-5">Engineering Challenges</h2>
        <ul className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          {project.challenges.map((c, i) => (
            <li key={i} className="panel flex gap-3 p-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
