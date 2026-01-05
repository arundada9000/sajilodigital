import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of successful web development projects. From e-commerce platforms to mobile apps, see how we help businesses grow with technology.",
  openGraph: {
    title: "Our Projects - sajilodigital",
    description: "Portfolio of successful web development projects",
    url: "https://sajilodigital.com.np/projects",
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
