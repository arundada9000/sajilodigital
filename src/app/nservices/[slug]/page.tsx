import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "../../../data/services";
import { CheckCircle2, ArrowLeft, Star, Zap, Shield } from "lucide-react";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} - sajilodigital`,
      description: service.description,
      url: `https://sajilodigital.com/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://sajilodigital.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Back Button */}
      {/* <section className="bg-gray-50 py-8 border-b">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Services</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-2xl text-gray-100 mb-4 animate-slide-up">
              {service.tagline}
            </p>
            <p
              className="text-lg text-gray-200 max-w-3xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              {service.description}
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {service.priceNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? "border-4 border-blue-600 scale-105"
                    : "border border-gray-200"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Popular</span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.plan}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.bestFor}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {plan.duration}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our {service.title} Service?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  We pride ourselves on delivering high-quality projects within
                  the agreed timeline without compromising on quality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Every project undergoes rigorous testing and quality checks to
                  ensure it meets the highest standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Our experienced team of professionals brings years of
                  expertise to deliver exceptional results for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s discuss how we can help bring your vision to life with
              our {service.title.toLowerCase()} service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Our Portfolio
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
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "sajilodigital",
              url: "https://sajilodigital.com",
            },
            offers: service.pricing.map((plan) => ({
              "@type": "Offer",
              name: plan.plan,
              price: plan.price,
              priceCurrency: "NPR",
              description: plan.bestFor,
            })),
            url: `https://sajilodigital.com/services/${service.slug}`,
          }),
        }}
      />
    </div>
  );
}
