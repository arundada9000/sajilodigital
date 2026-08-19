"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  Search,
  ShoppingCart,
  BarChart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like Next.js, React, and Node.js.",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
      "Secure & Scalable",
    ],
    color: "from-blue-500 to-cyan-500",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: [
      "Cross-Platform",
      "Native Performance",
      "Offline Support",
      "Push Notifications",
    ],
    color: "from-purple-500 to-pink-500",
    link: "/services/mobile-app-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-500",
    link: "/services/ui-ux-design",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your site.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
    color: "from-green-500 to-emerald-500",
    link: "/services/seo-optimization",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Order Management",
      "Product Catalog",
    ],
    color: "from-orange-500 to-red-500",
    link: "/services/e-commerce-solutions",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns to grow your brand and reach your target audience effectively.",
    features: [
      "Social Media",
      "Content Marketing",
      "Email Campaigns",
      "PPC Advertising",
    ],
    color: "from-indigo-500 to-purple-500",
    link: "/services/digital-marketing",
  },
];

export default function CreativeSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-border overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground transform transition-all duration-300"
                          style={{
                            transitionDelay:
                              hoveredIndex === index ? `${i * 50}ms` : "0ms",
                          }}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-surface-deep to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-background text-foreground border-2 border-border px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container-custom mt-32" id="our-process">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven approach to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We understand your goals, challenges, and requirements",
            },
            {
              step: "02",
              title: "Design",
              description:
                "Create beautiful, user-friendly designs and prototypes",
            },
            {
              step: "03",
              title: "Development",
              description: "Build robust, scalable solutions using modern tech",
            },
            {
              step: "04",
              title: "Launch",
              description: "Deploy, test, and provide ongoing support",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="relative text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connecting Line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform translate-y-1/2"></div>
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {process.step}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {process.title}
              </h3>
              <p className="text-muted-foreground">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
