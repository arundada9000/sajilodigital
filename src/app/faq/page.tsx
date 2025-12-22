"use client";

import { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer comprehensive web development services including custom website development, mobile app development, UI/UX design, e-commerce solutions, SEO optimization, and ongoing maintenance and support.",
        id: "offer-services",
      },
      {
        question: "Where are you located?",
        answer:
          "We are based in Your City, but we work with clients globally. We offer both in-person meetings for local clients and remote collaboration for international projects.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with clients across various industries including e-commerce, healthcare, education, finance, real estate, hospitality, and more. Our team has experience adapting to different industry requirements.",
      },
    ],
  },
  {
    name: "Projects & Pricing",
    faqs: [
      {
        question: "How much does a website cost?",
        answer:
          "Website costs vary based on complexity, features, and design requirements. Our basic websites start from NPR 40,000, while custom web applications can range from NPR 100,000 to NPR 500,000+. Contact us for a detailed quote.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Project timelines depend on scope and complexity. A basic website typically takes 2-4 weeks, while a complex web application can take 2-6 months. We provide detailed timelines during project planning.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes! We offer flexible payment plans for larger projects. Typically, we require 30-50% upfront, with the remaining balance split into milestones or paid upon completion.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We offer refunds based on project stage. If we haven't started work, we provide a full refund minus any initial consultation fees. Once work begins, refunds are prorated based on work completed.",
      },
    ],
  },
  {
    name: "Process & Timeline",
    faqs: [
      {
        question: "What is your development process?",
        answer:
          "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Review & Feedback, 5) Launch & Deployment, 6) Training & Support. We keep you involved at every stage.",
      },
      {
        question: "Can I see my website during development?",
        answer:
          "Absolutely! We provide staging environments where you can view and test your website throughout the development process. We also schedule regular review meetings to gather your feedback.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "All our projects include a post-launch support period (typically 1-3 months depending on your package). During this time, we handle bug fixes and minor adjustments at no extra cost.",
      },
    ],
  },
  {
    name: "Technical",
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "We use modern technologies including Next.js, React, Node.js, TypeScript, Tailwind CSS, and more. We choose the best tech stack based on your project requirements and scalability needs.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles to ensure the best user experience across all devices.",
      },
      {
        question: "Do you provide hosting services?",
        answer:
          "We can help you set up hosting with reputable providers like Vercel, AWS, or DigitalOcean. We also offer managed hosting solutions where we handle all technical aspects for you.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Yes! We can integrate a Content Management System (CMS) that allows you to easily update text, images, and other content. We also provide training on how to use it.",
      },
    ],
  },
  {
    name: "Support & Maintenance",
    faqs: [
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes! We offer various support and maintenance packages including security updates, content updates, performance optimization, and technical support. Contact us for details.",
      },
      {
        question: "What happens if my website breaks?",
        answer:
          "If issues occur during your support period, we fix them at no extra cost. For websites outside the support period, we offer emergency support services and can get your site back online quickly.",
      },
      {
        question: "Can you help with SEO and marketing?",
        answer:
          "Yes! We offer SEO optimization services to improve your search engine rankings. We can also help with digital marketing strategy, content creation, and social media integration.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFaqs =
    faqCategories
      .find((cat) => cat.name === activeCategory)
      ?.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-100 animate-slide-up">
              Find answers to common questions about our services
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

      {/* Search Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {faqCategories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setActiveCategory(category.name)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                          activeCategory === category.name
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFaqs.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                    <p className="text-gray-600 text-lg">
                      No questions found matching your search.
                    </p>
                  </div>
                ) : (
                  filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleQuestion(faq.question)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-gray-600 shrink-0 transition-transform duration-300 ${
                            openQuestions.has(faq.question) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openQuestions.has(faq.question) && (
                        <div className="px-6 pb-5 animate-slide-down">
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re
              here to help!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
