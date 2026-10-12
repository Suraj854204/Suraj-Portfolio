import Image from "next/image";
import { ArrowDownRight, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { achievements, experience, profile, projects, skills } from "@/lib/data";

export default function Hero() {
  const first = profile.name.split(" ")[0];

  // Dashboard numbers are derived from your own data — nothing hard-coded.
  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Experience", value: experience.length },
    { label: "Technologies", value: skills.reduce((n, g) => n + g.items.length, 0) },
    { label: "Achievements", value: achievements.length },
  ];

  return (
    <section className="relative isolate">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className="container-x pb-10 pt-8 sm:pt-16 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Photo — compact on phones (shown first), large frame on desktop */}
          <div
            className="rise order-first flex items-end gap-4 lg:order-last lg:block"
            style={{ animationDelay: "40ms" }}
          >
            <div className="relative w-[104px] shrink-0 sm:w-36 lg:mx-auto lg:w-full lg:max-w-[22rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] opacity-70 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent) 55%, transparent), color-mix(in srgb, var(--accent-2) 45%, transparent))",
                }}
              />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1 sm:rounded-3xl lg:p-1.5">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={800}
                  height={1084}
                  priority
                  sizes="(min-width: 1024px) 352px, (min-width: 640px) 144px, 104px"
                  className="h-auto w-full rounded-xl object-cover sm:rounded-[1.25rem]"
                />
              </div>
              <span className="glass absolute -bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium lg:inline-flex">
                <MapPin size={12} className="text-accent" /> {profile.location}
              </span>
            </div>

            {/* phone-only identity next to the photo */}
            <div className="min-w-0 pb-1 lg:hidden">
              <p className="truncate text-base font-semibold sm:text-xl">{profile.name}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
                <MapPin size={12} className="text-accent" /> {profile.location}
              </p>
            </div>
          </div>

          {/* Pitch */}
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <span className="rise chip chip-accent !py-1.5" style={{ animationDelay: "80ms" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to internships &amp; new-grad roles
            </span>

            <p className="rise font-mono text-sm text-accent" style={{ animationDelay: "120ms" }}>
              Hi, I&apos;m {first}.
            </p>

            <h1
              className="rise balance text-[2.1rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              style={{ animationDelay: "160ms" }}
            >
              <span className="text-gradient">{profile.headline}</span>
            </h1>

            <p
              className="rise max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              {profile.about[0]}
            </p>

            <div
              className="rise flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center"
              style={{ animationDelay: "280ms" }}
            >
              <a href="/resume.pdf" className="btn btn-primary">
                View Resume
              </a>
              <a href="#projects" className="btn btn-ghost">
                Featured Projects <ArrowDownRight size={16} />
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <a href={profile.github} aria-label="GitHub" className="icon-btn">
                  <Github size={18} />
                </a>
                <a href={profile.linkedin} aria-label="LinkedIn" className="icon-btn">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard stat strip */}
        <dl className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rise panel panel-glow p-4 sm:p-5"
              style={{ animationDelay: `${340 + i * 70}ms` }}
            >
              <dd className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
