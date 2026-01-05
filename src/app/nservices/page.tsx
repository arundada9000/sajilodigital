import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../../data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of web development, design, and digital services. From custom websites to mobile apps, we deliver solutions that drive business growth.",
  openGraph: {
    title: "Our Services - sajilodigital",
    description:
      "Comprehensive web development, design, and digital services tailored to your business needs.",
    url: "https://sajilodigital.com/services",
  },
  alternates: {
    canonical: "https://sajilodigital.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-slide-up">
              Comprehensive digital solutions to transform your business and
              elevate your online presence
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
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

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header with Gradient */}
                <div className="h-2 bg-linear-to-r from-blue-600 to-purple-600"></div>

                <div className="p-8">
                  {/* Title & Tagline */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-blue-600 font-medium mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing Preview */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-sm text-gray-500">
                        Starting from
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {service.pricing[0].price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {service.pricing[0].bestFor}
                    </p>
                  </div>

                  {/* Key Features Preview */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.pricing[1]?.features
                        .slice(0, 3)
                        .map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium group-hover:shadow-lg transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s discuss your project and create something amazing
              together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.description,
              url: `https://sajilodigital.com/services/${service.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}
