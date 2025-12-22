import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16 mb-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
              Get a free consultation and quote today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span>View Pricing</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">No Obligation Quote</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Quick Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Outstanding work! The team delivered exactly what we needed and
              our sales increased by 45%."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rajesh Sharma</p>
                <p className="text-sm text-gray-600">CEO, TechVision</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Professional and creative team. They transformed our website into
              a modern, responsive platform."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <p className="font-semibold text-gray-900">Priya Thapa</p>
                <p className="text-sm text-gray-600">
                  Director, Himalayan Ventures
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The mobile app is amazing! User feedback has been overwhelmingly
              positive with 4.8 stars."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="font-semibold text-gray-900">Amit Gurung</p>
                <p className="text-sm text-gray-600">Founder, FitLife</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-gray-200">Happy Clients</div>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sm text-gray-200">Projects Done</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-gray-200">Client Rating</div>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-gray-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
