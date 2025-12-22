import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";

const stats = [
  { icon: Briefcase, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Globe, value: "10+", label: "Countries Served" },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting relationships by understanding your needs and delivering solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We never compromise on quality. Every project undergoes rigorous testing and quality assurance to ensure flawless performance.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "We believe in continuous learning and improvement, both for ourselves and for helping our clients achieve sustainable growth.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "Started with a vision to transform businesses through technology",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Delivered our first enterprise-level e-commerce platform",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to a team of 20+ talented developers and designers",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: 'Received "Best IT Company" award from Nepal Tech Awards',
  },
  {
    year: "2023",
    title: "International Clients",
    description: "Expanded services to clients across 10+ countries",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description:
      "Launched R&D division focusing on AI and emerging technologies",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl text-gray-100 animate-slide-up">
              Transforming ideas into exceptional digital experiences since 2019
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, YourCompany started with a simple mission: to
                  help businesses leverage technology to achieve their goals.
                  What began as a small team of passionate developers has grown
                  into a full-service digital agency serving clients worldwide.
                </p>
                <p>
                  We believe that great software is built on a foundation of
                  understanding, collaboration, and innovation. Every project we
                  undertake is an opportunity to create something exceptional
                  that not only meets but exceeds our clients' expectations.
                </p>
                <p>
                  Today, we're proud to have completed over 150 projects, helped
                  100+ businesses grow, and built a team of talented
                  professionals who are passionate about what they do. But we're
                  just getting started.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/team-working.jpg"
                  alt="Team working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and success. We're committed to
                delivering exceptional quality and building lasting
                relationships with our clients through transparency,
                collaboration, and dedication.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technology partner for businesses across Nepal
                and beyond, known for our innovation, quality, and client
                success. We envision a future where every business, regardless
                of size, has access to world-class digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-100 mb-8">
              Get to know the talented people behind our success
            </p>
            <Link
              href="/about/team"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              View Team Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
