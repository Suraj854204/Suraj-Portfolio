import { ArrowUpRight } from "lucide-react";
import { codingProfiles } from "@/lib/data";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 sm:mb-12">
          <span className="eyebrow">Coding Profiles</span>
          <h2 className="section-title">Practice, in public.</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((p) => (
            <a
              key={p.platform}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group panel panel-glow panel-hover flex flex-col p-5"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold sm:text-base">{p.platform}</h3>
                  <p className="truncate font-mono text-xs text-muted-foreground">@{p.handle}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>

              <p className="text-gradient text-4xl font-semibold tracking-tight">{p.highlight}</p>
              <p className="mb-4 text-xs text-muted-foreground">{p.highlightLabel}</p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.details.map((d) => (
                  <span key={d} className="chip">
                    {d}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
