import { generateMetadata } from "@/src/lib/seo/metadata";
import StructuredData from "@/src/components/seo/StructuredData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
    title: "Terms of Service",
    description:
        "Read our Terms of Service. Understand your rights and responsibilities when using Sajilo Digital's services.",
    keywords: ["terms of service", "legal", "conditions", "user agreement"],
});

export default function TermsPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms of Service",
        description: "Sajilo Digital Terms of Service and User Agreement",
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
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Please read these terms carefully before exploring our digital universe.
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500 font-mono">
                        <span>Last Updated: January 16, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>3 min read</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32 px-6 md:px-12 bg-black text-zinc-300">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white">
                    <div className="space-y-16">

                        {/* 1. Acceptance */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed text-zinc-400">
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </div>

                        {/* 2. Usage License */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">2. Use License</h2>
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                                <p className="mb-4 text-zinc-400">Permission is granted to temporarily download one copy of the materials (information or software) on Sajilo Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                <ul className="space-y-3 text-zinc-400 list-disc list-inside">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose</li>
                                    <li>Attempt to decompile or reverse engineer any software</li>
                                    <li>Remove any copyright or other proprietary notations</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Intellectual Property */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">3. Intellectual Property</h2>
                            <p className="leading-relaxed text-zinc-400">
                                The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                            </p>
                        </div>

                        {/* 4. Disclaimer */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">4. Disclaimer</h2>
                            <p className="leading-relaxed text-zinc-400 italic border-l-4 border-purple-500 pl-6 py-2 bg-gradient-to-r from-purple-900/10 to-transparent">
                                "The materials on Sajilo Digital's website are provided on an 'as is' basis. Sajilo Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
                            </p>
                        </div>

                        {/* 5. Contact */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 text-white">Questions regarding Terms?</h2>
                            <p className="mb-6 text-zinc-300">
                                If you have any questions about our Terms of Service, please contact our legal team for clarification.
                            </p>
                            <a
                                href="mailto:legal@sajilodigital.com"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                            >
                                Contact Legal Team
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
