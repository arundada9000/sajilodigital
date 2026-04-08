import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import GlobalTerminal from "../components/layout/GlobalTerminal";
import ParticlesBackground from "../components/layout/ParticlesBackground";
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

// SEO Viewport configuration (Next.js 14+)
export const viewport: import("next").Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
    "sajilo digital",
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
        url: "/images/home-og.jpg",
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
    images: ["/images/home-og.jpg"],
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
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
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

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-[#0b0f19] text-white">
        <ParticlesBackground />
        <GlobalTerminal />
        {children}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://sajilodigital.com.np/#website",
                  url: "https://sajilodigital.com.np",
                  name: "Sajilo Digital",
                  description: "Your Vision Our Innovation",
                  publisher: {
                    "@id": "https://sajilodigital.com.np/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://sajilodigital.com.np/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://sajilodigital.com.np/#organization",
                  name: "Sajilo Digital Pvt. Ltd.",
                  alternateName: "Sajilo Digital",
                  url: "https://sajilodigital.com.np",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sajilodigital.com.np/images/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "Sajilo Digital is a leading web development company in Nepal, specializing in modern web applications, custom software solutions, and digital transformation.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Horizon Chowk",
                    addressLocality: "Butwal - 11",
                    addressRegion: "Lumbini",
                    postalCode: "32907",
                    addressCountry: "NP",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 27.7006,
                    longitude: 83.4484,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+977-9811420975",
                    contactType: "customer support",
                    email: "arunneupane0000@gmail.com",
                    areaServed: ["NP", "US", "AU", "UK"],
                    availableLanguage: ["English", "Nepali"],
                  },
                  sameAs: [
                    "https://youtube.com/@sajilo_digital",
                    "https://www.facebook.com/profile.php?id=61579846778258",
                    "https://github.com/sajhilodigital",
                    "https://instagram.com/sajilo_digital",
                    "https://wa.me/9779842977209",
                  ],
                  founder: [
                    {
                      "@type": "Person",
                      name: "Bal Gobind Chaudhary",
                      jobTitle: "CEO & Founder",
                    },
                  ],
                  CTO: [
                    {
                      "@type": "Person",
                      name: "Arun Neupane",
                      jobTitle: "CTO",
                    },
                  ],
                  Chairperson: [
                    {
                      "@type": "Person",
                      name: "Pramod Chaudhary",
                      jobTitle: "chairperson",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
