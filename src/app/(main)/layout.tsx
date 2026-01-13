import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Header from "../../components/layout/Header";
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
            "@type": "Organization",
            name: "sajilodigital",
            url: "https://sajilodigital.com.np",
            logo: "https://sajilodigital.com.np/images/logo.png",
            description:
              "Leading web development company specializing in modern web applications and custom software solutions.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Tech Street",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "12345",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-234-567-8900",
              contactType: "customer service",
              email: "info@sajilodigital.com",
            },
            sameAs: [
              "https://www.linkedin.com/company/sajilodigital",
              "https://twitter.com/sajilodigital",
              "https://github.com/sajilodigital",
            ],
          }),
        }}
      />
    </>
  );
}
