import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x flex flex-col items-center gap-5 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.github} aria-label="GitHub" className="icon-btn !h-10 !w-10">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="icon-btn !h-10 !w-10">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn !h-10 !w-10">
            <Mail size={16} />
          </a>
          <a href="#main-content" aria-label="Back to top" className="icon-btn !h-10 !w-10">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
