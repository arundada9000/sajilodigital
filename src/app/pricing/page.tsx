"use client";

import Link from "next/link";
import { CheckCircle2, Star, Zap, Shield, Rocket, ArrowRight, Minus } from "lucide-react";
import { motion } from "framer-motion";
import StandardLayout from "@/src/components/layout/StandardLayout";
import StructuredData from "@/src/components/seo/StructuredData";
import { generateBreadcrumbSchema } from "@/src/lib/seo/metadata";

const pricingPlans = [
  {
    name: "Starter",
    price: "NPR 40,000",
    description: "Perfect for small businesses and startups",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-indigo-500",
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
    color: "from-rose-500 to-pink-500",
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

const comparisonData = [
  { feature: "Number of Pages", starter: "5", pro: "15", enterprise: "Unlimited" },
  { feature: "Custom Design", starter: "Basic", pro: "Advanced", enterprise: "Elite" },
  { feature: "SEO Optimization", starter: "Basic", pro: "Advanced", enterprise: "Full Audit" },
  { feature: "CMS Integration", starter: "-", pro: "Included", enterprise: "Custom" },
  { feature: "Support Duration", starter: "1 month", pro: "3 months", enterprise: "6+ months" },
  { feature: "API Development", starter: "-", pro: "-", enterprise: "Included" },
  { feature: "Revision Rounds", starter: "2", pro: "5", enterprise: "Unlimited" },
];

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  return (
    <StandardLayout>
      <StructuredData data={breadcrumbSchema} />
      <div className="bg-[#050505] text-white min-h-screen selection:bg-purple-500/30">
        {/* Background Decor */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-400">Transparent Pricing</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Simple plans for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  every digital goal.
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Transparent, competitive pricing tailored for the Nepal market.
                No hidden fees, just pure innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative p-8 rounded-3xl border transition-all duration-500 ${plan.popular
                      ? "bg-white/[0.03] border-purple-500/50 shadow-[0_0_40px_-15px_rgba(168,85,247,0.2)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full border border-white/20 shadow-lg">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-8">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.color} bg-opacity-20`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {plan.popular && <Star className="w-5 h-5 text-purple-400 fill-purple-400" />}
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 uppercase tracking-tighter">One-time Investment</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    <ul className="space-y-4 mb-10">
                      {plan.features.slice(0, 8).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                        }`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Detailed Comparison</h2>
              <p className="text-gray-400">Find the perfect fit for your specific needs</p>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-6 text-sm font-medium text-gray-400 uppercase tracking-wider">Features</th>
                      <th className="p-6 text-sm font-medium text-gray-400 uppercase tracking-wider text-center">Starter</th>
                      <th className="p-6 text-sm font-medium text-purple-400 uppercase tracking-wider text-center bg-purple-500/5">Professional</th>
                      <th className="p-6 text-sm font-medium text-gray-400 uppercase tracking-wider text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 text-gray-300">{row.feature}</td>
                        <td className="p-6 text-center text-gray-400">{row.starter === "-" ? <Minus className="w-4 h-4 mx-auto opacity-20" /> : row.starter}</td>
                        <td className="p-6 text-center text-white bg-purple-500/5 font-medium">{row.pro}</td>
                        <td className="p-6 text-center text-gray-400">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Grid */}
        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Power-ups</h2>
                <p className="text-gray-400">Scale your digital presence with these specialized add-ons</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {addons.map((addon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {addon.name}
                      </h4>
                      <p className="text-purple-400 text-sm mt-1">{addon.price}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Link or CTA */}
        <section className="py-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-[40px] p-12 md:p-20 text-center">
              {/* CTA Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-[80px]" />
              <div className="absolute inset-0 border border-white/10 rounded-[40px]" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Not sure which plan <br /> is right for you?
                </h2>
                <p className="text-xl text-gray-400 mb-10">
                  Contact our experts for a free strategy session. We&apos;ll help you
                  map out your digital journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center space-x-2"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/faq"
                    className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                  >
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StandardLayout>
  );
}
