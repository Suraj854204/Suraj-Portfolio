import { GraduationCap } from "lucide-react";
import { education, profile } from "@/lib/data";

export default function About() {
  const [lead, ...rest] = profile.about;

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border">
      <div className="container-x section-y">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow">About</span>
            <h2 id="about-heading" className="section-title">
              The engineer behind the code.
            </h2>
          </div>

          <div className="min-w-0 max-w-2xl space-y-5 sm:space-y-6">
            <div className="reveal space-y-5 sm:space-y-6">
              {lead && (
                <p className="text-lg font-medium leading-relaxed sm:text-xl lg:text-2xl lg:leading-snug">
                  {lead}
                </p>
              )}
              {rest.map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {education.map((e) => (
              <div key={e.school} className="reveal panel panel-glow flex gap-4 p-4 sm:p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-accent">
                  <GraduationCap size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold sm:text-base">{e.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.degree} · {e.place}
                  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="chip font-mono">{e.date}</span>
                    <span className="chip chip-accent">{e.note}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
