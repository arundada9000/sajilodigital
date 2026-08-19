import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../../../../data/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  return {
    title: `${decoded} Articles | Sajilo Digital`,
    description: `Browse all articles in the ${decoded} category. insights, tutorials, and updates from Sajilo Digital.`,
    openGraph: {
      title: `${decoded} - Sajilo Digital Blog`,
      description: `Browse all articles in the ${decoded} category.`,
      url: `https://sajilodigital.com.np/blog/category/${decoded}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const filtered = blogPosts.filter(
    (p) => p.category.toLowerCase() === decoded.toLowerCase()
  );

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30 overflow-x-hidden pt-28">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <section className="relative px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-3 text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="text-muted-foreground/50">/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-cyan-400 lowercase tracking-normal">{decoded}</span>
          </nav>

          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight capitalize">{decoded}</h1>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} in the {decoded} category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative">
                <div className="relative h-full flex flex-col rounded-3xl border border-border bg-surface/40 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
