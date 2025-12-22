"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const categories = [
  "All",
  "Web Design",
  "Mobile Apps",
  "UI/UX",
  "Branding",
  "Graphics",
];

const galleryItems = [
  {
    id: 1,
    category: "Web Design",
    image: "/images/gallery/web-1.jpg",
    title: "E-commerce Platform",
  },
  {
    id: 2,
    category: "Mobile Apps",
    image: "/images/gallery/mobile-1.jpg",
    title: "Fitness Tracking App",
  },
  {
    id: 3,
    category: "UI/UX",
    image: "/images/gallery/ui-1.jpg",
    title: "Dashboard Design",
  },
  {
    id: 4,
    category: "Branding",
    image: "/images/gallery/brand-1.jpg",
    title: "Corporate Identity",
  },
  {
    id: 5,
    category: "Graphics",
    image: "/images/gallery/graphic-1.jpg",
    title: "Social Media Campaign",
  },
  {
    id: 6,
    category: "Web Design",
    image: "/images/gallery/web-2.jpg",
    title: "Portfolio Website",
  },
  {
    id: 7,
    category: "Mobile Apps",
    image: "/images/gallery/mobile-2.jpg",
    title: "Food Delivery App",
  },
  {
    id: 8,
    category: "UI/UX",
    image: "/images/gallery/ui-2.jpg",
    title: "Banking App Interface",
  },
  {
    id: 9,
    category: "Branding",
    image: "/images/gallery/brand-2.jpg",
    title: "Startup Branding",
  },
  {
    id: 10,
    category: "Graphics",
    image: "/images/gallery/graphic-2.jpg",
    title: "Event Poster Design",
  },
  {
    id: 11,
    category: "Web Design",
    image: "/images/gallery/web-3.jpg",
    title: "SaaS Landing Page",
  },
  {
    id: 12,
    category: "Mobile Apps",
    image: "/images/gallery/mobile-3.jpg",
    title: "Travel Booking App",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-100 animate-slide-up">
              Explore our creative work and design showcase
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

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </p>
                      <p className="text-gray-300 text-sm">{item.category}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            title="close"
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Like What You See?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s create something beautiful together
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
