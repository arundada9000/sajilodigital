"use client";
import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Regeneration Suite",
    image: "/gallery/slide-1.jpg",
    link: "/gucci",
  },
  {
    id: 2,
    title: "Simplicity & Tactility",
    image: "/gallery/slide-2.jpg",
    link: "/samsung",
  },
  {
    id: 3,
    title: "Reimagining Loyalty",
    image: "/gallery/slide-3.jpg",
    link: "/rituals",
  },
  {
    id: 4,
    title: "Beyond The Canvas",
    image: "/gallery/slide-4.jpg",
    link: "/moco",
  },
  {
    id: 5,
    title: "Sound Expressed In Full",
    image: "/gallery/slide-5.jpg",
    link: "/sennheiser",
  },
  {
    id: 6,
    title: "Reinventing Wonder",
    image: "/gallery/slide-6.jpg",
    link: "/swarovski",
  },
];

const FullscreenSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToSlide = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, "next");
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex, "prev");
  }, [currentIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mouse wheel navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThrottle = 1000;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < scrollThrottle) return;

      if (e.deltaY > 0) {
        nextSlide();
        lastScrollTime = now;
      } else if (e.deltaY < 0) {
        prevSlide();
        lastScrollTime = now;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-background">
      {/* Slides */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 w-full h-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            index === currentIndex
              ? "opacity-100 scale-100 z-10"
              : index < currentIndex ||
                (currentIndex === 0 && index === projects.length - 1)
              ? "opacity-0 scale-95 z-0"
              : "opacity-0 scale-110 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/20" />

          {/* Project Title */}
          <a
            href={project.link}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-center px-8 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: index === currentIndex ? "200ms" : "0ms",
              }}
            >
              {project.title}
            </h2>
          </a>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="fixed left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 text-foreground/60 hover:text-foreground transition-colors duration-300 p-4"
        aria-label="Previous slide"
      >
        <span className="text-2xl font-light">+</span>
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 text-foreground/60 hover:text-foreground transition-colors duration-300 p-4"
        aria-label="Next slide"
      >
        <span className="text-2xl font-light">+</span>
      </button>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 text-foreground/60 text-sm font-light tracking-widest">
        <span>{currentIndex + 1}</span>
        <span className="w-4 h-px bg-foreground/40" />
        <span>{projects.length}</span>
      </div>

      {/* Pagination Dots */}
      <div className="fixed right-8 md:right-12 bottom-8 z-30 flex flex-col gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              goToSlide(index, index > currentIndex ? "next" : "prev")
            }
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-foreground scale-125"
                : "bg-foreground/30 hover:bg-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullscreenSlider;
