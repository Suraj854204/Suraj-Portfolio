import { Mail, Github, Linkedin, Code2, ArrowUpRight, Trophy, BookOpen } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.leetcode, icon: Code2 },
  { label: "CodeChef", href: profile.codechef, icon: Trophy },
  { label: "GeeksforGeeks", href: profile.geeksforgeeks, icon: BookOpen },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal glass panel-glow relative overflow-hidden rounded-3xl px-5 py-12 text-center sm:px-10 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[34rem] max-w-full -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 45%, transparent), transparent)",
            }}
          />

          <div className="relative">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-title mx-auto max-w-xl !text-[clamp(1.75rem,6vw,3rem)]">
              <span className="text-gradient">Let&apos;s build something reliable.</span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Open to backend, full stack, and applied AI engineering internships and new-grad roles.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary mx-auto w-full max-w-sm break-all !py-3 sm:w-auto"
            >
              <Mail size={16} className="shrink-0" /> {profile.email}
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="btn btn-ghost !min-h-10">
                  <l.icon size={15} /> {l.label}
                  <ArrowUpRight size={13} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
