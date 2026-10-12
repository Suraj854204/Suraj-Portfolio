import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 sm:mb-12">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-title">Things I&apos;ve shipped.</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
