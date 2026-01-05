import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";

const About = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20">
        {/* Hero Section */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-16 max-w-4xl">
            We craft digital experiences that inspire and transform.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
              }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We are a creative studio based in Amsterdam, specializing in
              digital design, brand identity, and interactive experiences. Our
              work spans across industries, from luxury fashion to cutting-edge
              technology.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              We believe in the power of thoughtful design to create meaningful
              connections between brands and their audiences. Every project is
              an opportunity to push boundaries and explore new possibilities.
            </p>

            {/* Services */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Brand Identity",
                  "Digital Design",
                  "Art Direction",
                  "Motion Design",
                  "Web Development",
                  "Creative Strategy",
                ].map((service, index) => (
                  <li
                    key={service}
                    className={`text-lg font-light transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                      }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
              }`}
          >
            {/* Awards */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Recognition
              </h3>
              <ul className="space-y-4">
                {[
                  { award: "Awwwards Site of the Day", count: "12×" },
                  { award: "FWA of the Day", count: "8×" },
                  { award: "CSS Design Awards", count: "15×" },
                  { award: "Webby Awards", count: "3×" },
                ].map((item, index) => (
                  <li
                    key={item.award}
                    className={`flex justify-between items-center border-b border-border pb-4 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                      }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <span className="text-lg font-light">{item.award}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Selected Clients
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gucci, Samsung, Swarovski, Rituals, Sennheiser, Activia, Moco
                Museum, Nike, Apple, Netflix, Spotify, Adobe, Porsche, Louis
                Vuitton
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@studio.com"
                  className="block text-lg font-light hover:text-muted-foreground transition-colors duration-300"
                >
                  hello@studio.com
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-light hover:text-muted-foreground transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-light hover:text-muted-foreground transition-colors duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Work */}
        <div
          className={`mt-24 pt-12 border-t border-border transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="w-12 h-px bg-current transition-all duration-300 group-hover:w-20" />
            <span className="text-sm uppercase tracking-widest">View Work</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
