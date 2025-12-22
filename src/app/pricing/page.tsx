import Link from "next/link";
import { CheckCircle2, Star, Zap, Shield, Rocket } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "NPR 40,000",
    description: "Perfect for small businesses and startups",
    icon: Rocket,
    color: "blue",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "Social media integration",
      "1 month support",
      "Free SSL certificate",
      "Mobile optimization",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "NPR 100,000",
    description: "Ideal for growing businesses",
    icon: Zap,
    color: "purple",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO",
      "CMS integration",
      "Blog functionality",
      "3 months support",
      "Performance optimization",
      "Analytics integration",
      "Email integration",
      "Payment gateway setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    icon: Shield,
    color: "pink",
    features: [
      "Unlimited pages",
      "Custom features",
      "Advanced security",
      "Third-party integrations",
      "Dedicated project manager",
      "6+ months support",
      "Priority support",
      "Scalable infrastructure",
      "API development",
      "White-label solution",
      "Training & documentation",
    ],
    popular: false,
  },
];

const addons = [
  { name: "E-commerce Integration", price: "From NPR 50,000" },
  { name: "Custom CRM System", price: "From NPR 80,000" },
  { name: "Mobile App Development", price: "From NPR 150,000" },
  { name: "Advanced Analytics Dashboard", price: "From NPR 40,000" },
  { name: "Multi-language Support", price: "From NPR 25,000" },
  { name: "Third-party API Integration", price: "From NPR 15,000" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-100 animate-slide-up">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>

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

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up ${
                    plan.popular
                      ? "border-4 border-blue-600"
                      : "border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="p-8">
                    <div
                      className={`w-14 h-14 bg-${plan.color}-100 rounded-full flex items-center justify-center mb-6`}
                    >
                      <IconComponent
                        className={`w-7 h-7 text-${plan.color}-600`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        One-time payment
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

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
              );
            })}
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-600">
              All prices are starting estimates for the Nepal market. Final cost
              depends on design complexity, features, integrations, and project
              scope. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Add-ons & Extras
              </h2>
              <p className="text-lg text-gray-600">
                Enhance your package with additional features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {addon.name}
                    </h4>
                    <p className="text-blue-600 font-medium">{addon.price}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Compare Plans
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-blue-50">
                      Professional
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">Number of Pages</td>
                    <td className="text-center py-4 px-4">5</td>
                    <td className="text-center py-4 px-4 bg-blue-50">15</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">Custom Design</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4 bg-blue-50">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">
                      SEO Optimization
                    </td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      Advanced
                    </td>
                    <td className="text-center py-4 px-4">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">CMS Integration</td>
                    <td className="text-center py-4 px-4">-</td>
                    <td className="text-center py-4 px-4 bg-blue-50">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">
                      Support Duration
                    </td>
                    <td className="text-center py-4 px-4">1 month</td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      3 months
                    </td>
                    <td className="text-center py-4 px-4">6+ months</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">API Development</td>
                    <td className="text-center py-4 px-4">-</td>
                    <td className="text-center py-4 px-4 bg-blue-50">-</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s discuss your specific requirements and create a
              tailored plan
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
