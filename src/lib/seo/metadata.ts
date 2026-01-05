import { Metadata } from "next";

export const siteConfig = {
    name: "Sajilo Digital",
    description:
        "Premium digital agency specializing in web development, app development, UI/UX design, and digital marketing. Transform your vision into reality with cutting-edge technology and creative excellence.",
    url: "https://sajilo.digital",
    ogImage: "https://sajilo.digital/og-image.jpg",
    links: {
        twitter: "https://twitter.com/sajilodigital",
        facebook: "https://facebook.com/sajilodigital",
        instagram: "https://instagram.com/sajilodigital",
        github: "https://github.com/sajilodigital",
    },
    keywords: [
        "web development",
        "app development",
        "UI/UX design",
        "digital marketing",
        "SEO services",
        "graphic design",
        "video editing",
        "Nepal digital agency",
        "Kathmandu web development",
        "premium web design",
    ],
};

export function generateMetadata({
    title,
    description,
    image,
    url,
    type = "website",
    keywords,
}: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
    keywords?: string[];
}): Metadata {
    const metaTitle = `${title} | ${siteConfig.name}`;
    const metaDescription = description || siteConfig.description;
    const metaImage = image || siteConfig.ogImage;
    const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
    const allKeywords = keywords
        ? [...siteConfig.keywords, ...keywords]
        : siteConfig.keywords;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: allKeywords,
        authors: [{ name: "Sajilo Digital Team" }],
        creator: "Sajilo Digital",
        publisher: "Sajilo Digital",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: metaUrl,
        },
        openGraph: {
            type,
            locale: "en_US",
            url: metaUrl,
            title: metaTitle,
            description: metaDescription,
            siteName: siteConfig.name,
            images: [
                {
                    url: metaImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [metaImage],
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
    };
}

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.github,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+977-9800000000",
            contactType: "customer service",
            areaServed: "NP",
            availableLanguage: ["en", "ne"],
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "Kathmandu",
            addressLocality: "Kathmandu",
            addressRegion: "Bagmati",
            postalCode: "44600",
            addressCountry: "NP",
        },
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    };
}

export function generateServiceSchema(service: {
    name: string;
    description: string;
    price: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: siteConfig.name,
        },
        areaServed: {
            "@type": "Country",
            name: "Nepal",
        },
        url: `${siteConfig.url}${service.url}`,
        offers: {
            "@type": "Offer",
            price: service.price,
            priceCurrency: "NPR",
        },
    };
}

export function generateArticleSchema(article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
            "@type": "Person",
            name: article.author,
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
            },
        },
        url: `${siteConfig.url}${article.url}`,
    };
}
