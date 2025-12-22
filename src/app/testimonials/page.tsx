import Image from "next/image";
import { Star, Quote, Building2, TrendingUp, Users } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO",
    company: "TechVision Nepal",
    image: "/images/testimonials/person-1.jpg",
    rating: 5,
    text: "Outstanding work! The team delivered our e-commerce platform on time and exceeded our expectations. The website is fast, beautiful, and our sales have increased by 45% since launch.",
    project: "E-commerce Platform",
  },
  {
    name: "Priya Thapa",
    role: "Marketing Director",
    company: "Himalayan Ventures",
    image: "/images/testimonials/person-2.jpg",
    rating: 5,
    text: "Professional, creative, and highly skilled. They transformed our outdated website into a modern, responsive platform. The SEO improvements have been remarkable – we now rank on the first page for our key terms.",
    project: "Corporate Website Redesign",
  },
  {
    name: "Amit Gurung",
    role: "Founder",
    company: "FitLife App",
    image: "/images/testimonials/person-3.jpg",
    rating: 5,
    text: "The mobile app they built for us is simply amazing. User feedback has been overwhelmingly positive. Their attention to detail and commitment to quality is unmatched.",
    project: "Mobile App Development",
  },
  {
    name: "Sita Rai",
    role: "Operations Manager",
    company: "Heritage Hospitality",
    image: "/images/testimonials/person-4.jpg",
    rating: 5,
    text: "We needed a booking system for our hotels, and they delivered exactly what we wanted. The system is intuitive, efficient, and has streamlined our operations significantly.",
    project: "Hotel Booking System",
  },
  {
    name: "Bikash Shrestha",
    role: "Director",
    company: "EduTech Solutions",
    image: "/images/testimonials/person-5.jpg",
    rating: 5,
    text: "Excellent communication throughout the project. They understood our vision for the learning management system and brought it to life. Our students love the platform!",
    project: "Learning Management System",
  },
  {
    name: "Anita Poudel",
    role: "Founder",
    company: "Organic Harvest",
    image: "/images/testimonials/person-6.jpg",
    rating: 5,
    text: "From design to deployment, everything was perfect. The e-commerce site they built has helped us reach customers across Nepal. Highly recommend their services!",
    project: "E-commerce Website",
  },
];

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-100 animate-slide-up">
              Don&apos;t just take our word for it – hear from our satisfied
              clients
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-blue-600 mb-6 opacity-50" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Project Tag */}
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section (Optional) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              See What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Watch video testimonials from our happy clients
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-16 border-l-white border-t-10 border-t-transparent border-b-10px border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Rajesh Sharma</p>
                  <p className="text-sm text-gray-200">CEO, TechVision Nepal</p>
                </div>
              </div>

              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-16 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Priya Thapa</p>
                  <p className="text-sm text-gray-200">
                    Marketing Director, Himalayan Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Trusted by Leading Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
              >
                <div className="text-gray-400 font-bold text-xl">LOGO {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s create something amazing together
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
