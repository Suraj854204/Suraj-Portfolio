import { ArrowUpRight, Trophy } from "lucide-react";
import { achievements, profile } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Achievements</span>
            <h2 className="section-title">Milestones.</h2>
          </div>
          <a href={profile.leetcode} className="btn btn-ghost self-start sm:self-auto">
            View coding profile <ArrowUpRight size={16} />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {achievements.map((a, i) => (
            <li key={i} className="reveal panel panel-hover flex gap-4 p-4 sm:p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-accent">
                <Trophy size={18} />
              </span>
              <span className="min-w-0 pt-0.5 text-sm leading-relaxed text-muted-foreground">
                {a}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
