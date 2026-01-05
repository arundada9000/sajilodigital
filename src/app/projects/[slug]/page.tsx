import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Sajilo Digital`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://sajilodigital.com/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
    alternates: {
      canonical: `https://sajilodigital.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <ProjectDetailClient project={project} nextProject={nextProject} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            author: {
              "@type": "Organization",
              name: "Sajilo Digital",
            },
            datePublished: `${project.year}-01-01`,
            url: `https://sajilodigital.com/projects/${project.slug}`,
            image: project.image,
          }),
        }}
      />
    </>
  );
}
