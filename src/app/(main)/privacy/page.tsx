import { generateMetadata } from "@/src/lib/seo/metadata";
import StructuredData from "@/src/components/seo/StructuredData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
    title: "Privacy Policy",
    description:
        "We value your privacy. Learn how Sajilo Digital collects, protects, and uses your personal information.",
    keywords: ["privacy policy", "data protection", "GDPR", "user data", "security"],
});

export default function PrivacyPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy",
        description: "Sajilo Digital Privacy Policy and Data Collection Practices",
        publisher: {
            "@type": "Organization",
            name: "Sajilo Digital",
        },
    };

    return (
        <>
            <StructuredData data={structuredData} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-black text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Your privacy is non-negotiable. Here’s how we protect, handle, and respect your data at Sajilo Digital.
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500 font-mono">
                        <span>Last Updated: January 16, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>2 min read</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32 px-6 md:px-12 bg-black text-zinc-300">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">
                    <div className="space-y-16">

                        {/* 1. Introduction */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">1. Introduction</h2>
                            <p className="leading-relaxed text-zinc-400">
                                At Sajilo Digital, we believe in transparency. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our digital services. By using our services, you consent to the practices described in this policy.
                            </p>
                        </div>

                        {/* 2. Information We Collect */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">2. Information We Collect</h2>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Information You Give Us</h3>
                                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                        <li>Contact information (Name, Email, Phone)</li>
                                        <li>Project details and requirements</li>
                                        <li>Billing and payment information</li>
                                        <li>Communications and feedback</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Information We Automatically Collect</h3>
                                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                        <li>Usage data and analytics</li>
                                        <li>Device and browser information</li>
                                        <li>IP address and location data</li>
                                        <li>Cookies and tracking technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. How We Use Data */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">3. How We Use Your Data</h2>
                            <p className="mb-4 text-zinc-400">We do not sell your personal data. We use the collected information solely to:</p>
                            <ul className="space-y-4">
                                {[
                                    "Provide, improve, and develop our platform and services",
                                    "Process transactions and send related information",
                                    "Send technical notices, updates, and security alerts",
                                    "Respond to your comments, questions, and customer service requests",
                                    "Communicate about promotions, upcoming events, and news"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                        <span className="text-zinc-400">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Data Security */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">4. Data Security</h2>
                            <p className="leading-relaxed text-zinc-400">
                                We implement industry-standard security measures to ensure your data is protected. This includes encryption in transit (SSL/TLS), secure database storage, and strict access controls. While no method of transmission over the Internet is 100% secure, we strive to use commercially acceptable means to protect your personal information.
                            </p>
                        </div>

                        {/* 5. Contact Us */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 text-white">Questions about your privacy?</h2>
                            <p className="mb-6 text-zinc-300">
                                If you have any questions or concerns about this Privacy Policy, please don't hesitate to reach out to our data protection team.
                            </p>
                            <a
                                href="mailto:info@sajilodigital.com.np"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                            >
                                Contact Privacy Team
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
