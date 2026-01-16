"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface BreadcrumbsProps {
    items?: { label: string; href: string }[];
    className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    const pathname = usePathname();

    // If items are not provided, auto-generate from pathname
    const paths = pathname.split("/").filter(Boolean);

    const generatedItems = items || paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const label = path.replace(/-/g, " "); // Basic formatting
        return { label, href };
    });

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm mb-6", className)}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link
                        href="/"
                        className="text-gray-500 hover:text-white transition-colors flex items-center"
                        title="Home"
                    >
                        <Home className="w-4 h-4" />
                    </Link>
                </li>

                {generatedItems.map((item, index) => {
                    const isLast = index === generatedItems.length - 1;

                    return (
                        <li key={item.href} className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-gray-700" />
                            {isLast ? (
                                <span className="text-purple-400 font-medium capitalize truncate max-w-[200px]">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-500 hover:text-white transition-colors capitalize hidden sm:inline-block"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
