import { experience } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 sm:mb-12">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I&apos;ve worked.</h2>
        </div>

        <ol className="relative space-y-5 sm:space-y-6">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent sm:left-[9px]"
          />
          {experience.map((job) => (
            <li key={job.org} className="reveal relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 grid h-[15px] w-[15px] place-items-center rounded-full border border-[var(--accent)] bg-background sm:h-[19px] sm:w-[19px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] sm:h-2 sm:w-2" />
              </span>

              <div className="panel panel-hover p-5 sm:p-6">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold sm:text-lg">{job.org}</h3>
                  <span className="chip font-mono">{job.date}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {job.role} · {job.location}
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
