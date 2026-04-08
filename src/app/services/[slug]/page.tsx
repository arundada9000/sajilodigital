import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "../../../data/services";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found | Sajilo Digital",
        };
    }

    return {
        title: `${service.title} | Sajilo Digital`,
        description: service.description,
        openGraph: {
            title: `${service.title} - Sajilo Digital Services`,
            description: service.description,
            url: `https://sajilodigital.com.np/services/${slug}`,
            images: [
                {
                    url: service.image || "/images/services-og.jpg",
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} - Sajilo Digital Services`,
            description: service.description,
            images: [service.image || "/images/services-og.jpg"],
        },
        alternates: {
            canonical: `https://sajilodigital.com.np/services/${slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <ServiceDetailClient service={service} />
            {/* Service Detail Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                name: service.title,
                                description: service.description,
                                provider: {
                                    "@type": "Organization",
                                    name: "Sajilo Digital Pvt. Ltd.",
                                    url: "https://sajilodigital.com.np"
                                },
                                url: `https://sajilodigital.com.np/services/${slug}`,
                                offers: service.pricing.map((plan: any) => ({
                                    "@type": "Offer",
                                    name: plan.plan,
                                    price: plan.price.replace(/[^\d.]/g, ''),
                                    priceCurrency: plan.price.includes('$') ? 'USD' : 'NPR',
                                    description: plan.features.join(", ")
                                }))
                            },
                            {
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item: "https://sajilodigital.com.np"
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Services",
                                        item: "https://sajilodigital.com.np/services"
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 3,
                                        name: service.title,
                                        item: `https://sajilodigital.com.np/services/${slug}`
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
