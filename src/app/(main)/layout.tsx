import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Header from "../../components/layout/Header";
import MobileHeader from "../../components/layout/MobileHeader";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://sajilodigital.com.np"),
  title: {
    default: "SajiloDigital - Your Vision, Our Innovation",
    template: "%s | sajilodigital",
  },
  description:
    "Leading web development company specializing in modern web applications, custom software solutions, and digital transformation. Expert Next.js, React, and full-stack development services.",
  keywords: [
    "web development",
    "Next.js development",
    "React development",
    "custom software",
    "web design",
    "full-stack development",
    "IT services",
    "digital solutions",
  ],
  authors: [{ name: "Arun Neupane" }],
  creator: "SajiloDigital",
  publisher: "SajiloDigital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sajilodigital.com.np",
    siteName: "Sajilo Digital | Your Vision Our Innovation",
    title: "Sajilo Digital - Your Vision Our Innovation",
    description:
      "Leading web development company specializing in modern web applications and custom software solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital | Your Vision Our Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajilo Digital | Your Vision Our Innovation",
    description:
      "Leading web development company specializing in modern web applications and custom software solutions.",
    images: ["/images/og-image.png"],
    creator: "@sajilodigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <MobileHeader />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://sajilodigital.com.np/#organization",
                "name": "Sajilo Digital",
                "url": "https://sajilodigital.com.np",
                "logo": "https://sajilodigital.com.np/images/logo.png",
                "description": "Leading web development company specializing in modern web applications, custom software solutions, and digital transformation.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Horizon Chowk",
                  "addressLocality": "Butwal",
                  "addressRegion": "Lumbini",
                  "postalCode": "32907",
                  "addressCountry": "NP"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+977-9811420975",
                  "contactType": "customer service",
                  "email": "arunneupane0000@gmail.com"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/sajilo-digital",
                  "https://facebook.com/sajilodigital",
                  "https://github.com/sajhilodigital",
                  "https://instagram.com/sajilo_digital"
                ]
              },
              {
                "@type": "ItemList",
                "@id": "https://sajilodigital.com.np/#navigation",
                "name": "Main Navigation",
                "itemListElement": [
                  {
                    "@type": "SiteNavigationElement",
                    "position": 1,
                    "name": "Home",
                    "url": "https://sajilodigital.com.np"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 2,
                    "name": "Services",
                    "url": "https://sajilodigital.com.np/services"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 3,
                    "name": "Projects",
                    "url": "https://sajilodigital.com.np/projects"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Blog",
                    "url": "https://sajilodigital.com.np/blog"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 5,
                    "name": "About",
                    "url": "https://sajilodigital.com.np/about"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 6,
                    "name": "Pricing",
                    "url": "https://sajilodigital.com.np/pricing"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 7,
                    "name": "Contact",
                    "url": "https://sajilodigital.com.np/contact"
                  }
                ]
              }
            ]
          }),
        }}
      />
    </>
  );
}
