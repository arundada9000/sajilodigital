import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/projects";
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
      url: `https://sajilodigital.com.np/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `https://sajilodigital.com.np/projects/${project.slug}`,
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
            "@graph": [
              {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                author: {
                  "@type": "Organization",
                  name: "Sajilo Digital",
                },
                datePublished: `${project.year}-01-01`,
                url: `https://sajilodigital.com.np/projects/${project.slug}`,
                image: project.image,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://sajilodigital.com.np"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: "https://sajilodigital.com.np/projects"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: project.title,
                    item: `https://sajilodigital.com.np/projects/${project.slug}`
                  }
                ]
              }
            ]
          }),
        }}
      />
    </>
  );
}
