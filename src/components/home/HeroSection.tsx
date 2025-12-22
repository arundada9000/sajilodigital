// import Shuffle from "@/components/Shuffle";
// import SplitText from "@/components/SplitText";

// export default async function HeroSection() {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   return (
//     <div className="pt-20 h-screen">
//       <SplitText
//         text="Sajilo Digital"
//         className="text-4xl font-semibold block! text-left!"
//         delay={100}
//         duration={0.6}
//         ease="power3.out"
//         splitType="chars"
//         from={{ opacity: 0, y: 40 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
//         textAlign="center"
//       />
//       <Shuffle
//         text="Your Vision, Our Innovation"
//         shuffleDirection="left"
//         duration={0.35}
//         animationMode="evenodd"
//         shuffleTimes={1}
//         ease="power3.out"
//         stagger={0.03}
//         threshold={0.1}
//         triggerOnce={true}
//         triggerOnHover={true}
//         respectReducedMotion={true}
//       />
//     </div>
//   );
// }

"use client";
import useUpsideDownScrollTop from "../../hooks/upSideDownScrollTop";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  { icon: Code, text: "Web Development" },
  { icon: Smartphone, text: "Mobile Apps" },
  { icon: Palette, text: "UI/UX Design" },
  { icon: TrendingUp, text: "SEO & Marketing" },
];

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useUpsideDownScrollTop();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute w-64 h-64 bg-white/5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              We Build
              <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-yellow-400 to-pink-400">
                Digital Excellence
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Transform your ideas into powerful digital solutions with our
              expert team of developers and designers.
            </p>

            {/* Rotating Services */}
            <div
              className="flex items-center space-x-3 mb-8 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-lg text-gray-200">Specialized in:</span>
              <div className="relative h-8 w-48 overflow-hidden">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center space-x-2 transition-all duration-500 ${
                        index === currentService
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-yellow-400" />
                      <span className="font-semibold text-white">
                        {service.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div>
                <div className="text-4xl font-bold mb-1">150+</div>
                <div className="text-gray-200 text-sm">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-gray-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-gray-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Elements */}
          <div
            className="relative hidden lg:block animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative w-full h-150">
              {/* Main Card */}
              <div className="absolute top-0 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 animate-float">
                <div className="w-full h-48 bg-linear-to-br from-blue-400 to-purple-400 rounded-xl mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                className="absolute bottom-20 left-0 w-64 bg-white rounded-xl shadow-xl p-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-400 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                className="absolute top-32 left-12 w-56 bg-white rounded-xl shadow-xl p-4 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-400 rounded-lg"></div>
                  <div className="text-green-500 text-sm font-semibold">
                    +45%
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-48 right-32 w-16 h-16 border-4 border-white/30 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-32 right-0 w-12 h-12 border-4 border-white/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
