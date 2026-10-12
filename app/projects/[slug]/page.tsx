import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetail from "@/components/ProjectDetail";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.name, description: project.oneLiner };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <ProjectDetail project={project} diagram={<ArchitectureDiagram layers={project.diagram} />} />
  );
}
