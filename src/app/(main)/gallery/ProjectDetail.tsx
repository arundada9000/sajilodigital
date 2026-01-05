import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { projects } from "@/components/FullscreenSlider";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Return to Work
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Image */}
      <div
        className={`relative w-full h-screen overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.5s] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            backgroundImage: `url(${project.image})`,
            transform: isVisible ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-background/40" />

        {/* Project Title Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`text-sm uppercase tracking-widest text-foreground/70 mb-4 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {project.brand}
          </span>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-light text-center px-8 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {project.title}
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-foreground/50">
            Scroll
          </span>
          <div className="w-px h-12 bg-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        {/* Project Info */}
        <div
          className={`grid md:grid-cols-3 gap-12 mb-24 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Client
            </h3>
            <p className="text-lg font-light">{project.brand}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Services
            </h3>
            <p className="text-lg font-light">
              Brand Identity, Digital Design, Motion
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Year
            </h3>
            <p className="text-lg font-light">2024</p>
          </div>
        </div>

        {/* Project Description */}
        <div
          className={`mb-24 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-8">
            A comprehensive digital experience that reimagines how users
            interact with the brand. We crafted a visual language that speaks to
            both heritage and innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Working closely with the {project.brand} team, we developed a design
            system that balances elegance with functionality. The result is a
            seamless experience that guides users through an immersive journey,
            celebrating the brand's core values while pushing creative
            boundaries.
          </p>
        </div>

        {/* Gallery */}
        <div
          className={`mb-24 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div
            className="aspect-video w-full bg-cover bg-center rounded-none"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
      </div>

      {/* Project Navigation */}
      <div className="border-t border-border">
        <div className="grid md:grid-cols-2">
          {/* Previous Project */}
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => navigate(`/project/${prevProject.slug}`), 300);
            }}
            className="group p-12 md:p-16 text-left border-r border-border hover:bg-secondary/30 transition-colors duration-500"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              Previous
            </span>
            <span className="text-xl md:text-2xl font-light group-hover:translate-x-2 transition-transform duration-300 block">
              {prevProject.title}
            </span>
          </button>

          {/* Next Project */}
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => navigate(`/project/${nextProject.slug}`), 300);
            }}
            className="group p-12 md:p-16 text-right hover:bg-secondary/30 transition-colors duration-500"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              Next
            </span>
            <span className="text-xl md:text-2xl font-light group-hover:-translate-x-2 transition-transform duration-300 block">
              {nextProject.title}
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
