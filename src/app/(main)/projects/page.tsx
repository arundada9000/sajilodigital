import type { Metadata } from "next";
import { projects } from "../../../data/projects";
import ProjectsClient from "../../../components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Our Work",
  description: "A showcase of our best digital experiences, web applications, and creative projects.",
};

export default function ProjectsPage() {
  // Minimal categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return <ProjectsClient initialProjects={projects} categories={categories} />;
}
