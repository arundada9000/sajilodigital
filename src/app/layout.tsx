import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

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
        url: "/images/og-image.jpg",
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
    images: ["/images/twitter-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://sajilodigital.com.np" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-[#0b0f19] text-white">
        {children}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sajilo Digital Pvt. Ltd.",
              alternateName: "Sajilo Digital",
              url: "https://sajilodigital.com.np",
              logo: "https://sajilodigital.com.np/images/logo.png",
              description:
                "Sajilo Digital is a leading web development company in Nepal, specializing in modern web applications, custom software solutions, and digital transformation.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Horizon Chowk",
                addressLocality: "Butwal",
                addressRegion: "Lumbini",
                postalCode: "32907",
                addressCountry: "NP",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977-9811420975",
                contactType: "technical support",
                email: "arunneupane0000@gmail.com",
                availableLanguage: ["English", "Nepali"],
              },
              founder: [
                {
                  "@type": "Person",
                  name: "Bal Gobind Chaudhary",
                  jobTitle: "CEO & Founder",
                },
                {
                  "@type": "Person",
                  name: "Pramod Tharu",
                  jobTitle: "Chairperson",
                },
              ],
              member: [
                {
                  "@type": "Person",
                  name: "Arun Neupane",
                  jobTitle: "CTO",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/sajilodigital",
                "https://facebook.com/sajilodigital",
                "https://github.com/sajilodigital",
                "https://instagram.com/sajilodigital",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
