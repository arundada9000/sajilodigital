import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../../../data/blog";
import { Calendar, Clock, ArrowLeft, Share2, Tag, BookOpen } from "lucide-react";
import ShareButton from "../../../../components/blog/ShareButton";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Sajilo Digital`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sajilodigital.com.np/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30 overflow-x-hidden pt-20">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Breadcrumb & Navigation */}
      <nav className="relative z-10 py-8 border-b border-white/5 bg-[#0b0f19]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-wide uppercase text-xs">Back to Articles</span>
          </Link>

          <div className="hidden md:flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-gray-700">/</span>
            <span className="text-cyan-400 italic font-normal lowercase tracking-normal">{post.category}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-8">
            <BookOpen className="w-4 h-4" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 border-y border-white/5 py-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20 shadow-lg">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-white leading-tight">{post.author.name}</p>
                <p className="text-xs uppercase tracking-wider text-cyan-500/80">{post.author.role}</p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-medium">{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-medium">{post.readTime}</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <ShareButton />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-16 border border-white/10 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19]/40 to-transparent" />
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-invert prose-lg md:prose-xl max-w-none 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
              prose-strong:text-cyan-400 prose-strong:font-bold
              prose-code:text-cyan-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-img:rounded-2xl prose-img:border prose-img:border-white/10
              mb-20"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags Section */}
            <div className="pt-12 border-t border-white/10 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-gray-500 mr-2">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-widest">Tags:</span>
              </div>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  #{tag.toLowerCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 py-32 px-6 bg-[#080b12]/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">Keep Reading</h2>
                <div className="h-1.5 w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
              <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium border-b border-transparent hover:border-cyan-400/50 pb-1">
                View All Articles
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group relative"
                >
                  <div className="relative h-full flex flex-col rounded-3xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] to-transparent opacity-60" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                image: post.image,
                author: {
                  "@type": "Person",
                  name: post.author.name,
                },
                datePublished: post.publishedAt,
                url: `https://sajilodigital.com.np/blog/${post.slug}`,
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
                    name: "Blog",
                    item: "https://sajilodigital.com.np/blog"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: post.title,
                    item: `https://sajilodigital.com.np/blog/${post.slug}`
                  }
                ]
              }
            ]
          }),
        }}
      />
    </div>
  );
}
