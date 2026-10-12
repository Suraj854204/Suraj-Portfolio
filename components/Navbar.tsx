"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Briefcase, FolderGit2, Home, Mail, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

// Bottom dock for phones — thumb-reach navigation.
const dock = [
  { href: "/", label: "Home", id: "", icon: Home },
  { href: "/#about", label: "About", id: "about", icon: User },
  { href: "/#projects", label: "Projects", id: "projects", icon: FolderGit2 },
  { href: "/#experience", label: "Work", id: "experience", icon: Briefcase },
  { href: "/#contact", label: "Contact", id: "contact", icon: Mail },
];

const SECTION_IDS = ["about", "skills", "projects", "experience", "profiles", "github", "achievements", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  // Scroll-spy: highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== "/") return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => {
      if (window.scrollY < 120) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const onHome = pathname === "/";

  return (
    <>
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        {/* scroll progress (CSS-only, hidden where unsupported) */}
        <span
          aria-hidden="true"
          className="scroll-progress absolute inset-x-0 bottom-[-1px] h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          style={{ transform: "scaleX(0)" }}
        />
        <nav
          aria-label="Primary"
          className="container-x flex h-14 items-center justify-between gap-3 sm:h-16"
        >
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] font-mono text-xs font-bold text-white"
            >
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span className="truncate font-mono text-sm font-semibold tracking-tight">
              {profile.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = onHome && active === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href="/resume.pdf" className="btn btn-primary hidden !min-h-9 !px-4 sm:inline-flex">
              Resume
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Phone bottom dock */}
      <nav
        aria-label="Mobile"
        className="dock glass fixed inset-x-0 bottom-0 z-50 border-x-0 border-b-0 md:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5">
          {dock.map((item) => {
            const isActive = onHome && active === item.id;
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className="dock-item"
                >
                  <span className="pill">
                    <Icon size={18} />
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
