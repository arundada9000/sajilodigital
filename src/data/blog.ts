import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ai-in-web-development",
    title: "The Future of AI in Web Development: 2026 and Beyond",
    excerpt:
      "Explore how Artificial Intelligence is transforming the way we build, test, and deploy web applications in the modern era.",
    content: `
      <h2>The AI Revolution in Web Dev</h2>
      <p>As we move into 2026, the landscape of web development is being fundamentally reshaped by AI. From Copilot-powered coding to automated UI generation, the tools we use daily are becoming smarter and more intuitive.</p>
      
      <h3>Key Transformations</h3>
      <p>1. <strong>Generative UI:</strong> Frameworks are now emerging that can generate entire component libraries based on simple natural language prompts.</p>
      <p>2. <strong>Autonomous Debugging:</strong> AI agents can now identify, triage, and even fix production bugs before developers are even aware of them.</p>
      
      <h3>What this means for Developers</h3>
      <p>The role of a developer is shifting from writing syntax to architecting solutions. Understanding how to collaborate with AI is becoming the most critical skill in a developer's toolkit.</p>
      
      <h3>Conclusion</h3>
      <p>At Sajilo Digital, we are embracing these tools to deliver faster, more robust solutions for our clients while maintaining the human touch that makes a product truly unique.</p>
    `,
    author: {
      name: "Arun Neupane",
      avatar: "/team/Arun.png",
      role: "CTO",
    },
    category: "Technology",
    tags: ["AI", "Web Dev", "Future", "SajiloDigital"],
    publishedAt: "Jan 10, 2026",
    readTime: "6 min read",
    image: "/gallery/slide-1.jpg",
    featured: true,
  },
  {
    slug: "mastering-nextjs-16-app-router",
    title:
      "Mastering Next.js 16: The Ultimate Guide to App Router Optimization",
    excerpt:
      "A deep dive into the latest performance features of Next.js 16 and how to build lightning-fast web experiences.",
    content: `
      <h2>Next.js 16: The New Standard</h2>
      <p>Next.js continues to lead the way in the React ecosystem. With version 16, performance and developer experience have reached new heights.</p>
      
      <h3>Partial Prerendering (PPR)</h3>
      <p>PPR allows you to combine static and dynamic rendering in the same route, giving users the best of both worlds: instant initial loads and dynamic up-to-date data.</p>
      
      <h3>Optimizing for Core Web Vitals</h3>
      <p>We'll look at how the new <Image /> component and font optimization strategies help you hit 100 on Lighthouse with ease.</p>
      
      <h3>Conclusion</h3>
      <p>Next.js 16 is not just an update; it's a refined way of thinking about the web. At Sajilo Digital, it's our primary choice for building high-performance applications.</p>
    `,
    author: {
      name: "Pramod Tharu",
      avatar: "/team/pramod.jpg",
      role: "Chairperson",
    },
    category: "Development",
    tags: ["Next.js", "React", "Frontend", "Performance"],
    publishedAt: "Jan 05, 2026",
    readTime: "8 min read",
    image: "/gallery/slide-2.jpg",
    featured: false,
  },
  {
    slug: "designing-for-the-next-generation",
    title: "Designing for the Next Generation: UX Trends in 2026",
    excerpt:
      "Discover the design philosophies and aesthetic trends that are defining the digital experiences of 2026.",
    content: `
      <h2>Esthetics vs. Functionality</h2>
      <p>The perpetual debate in design is evolving. In 2026, we see a move towards 'Organic Futurism'—combining sleek tech aesthetics with natural, fluid interfaces.</p>
      
      <h3>Key Design Pillars</h3>
      <p>1. <strong>Micro-Animations:</strong> Subtle feedback that makes the interface feel alive and responsive to every touch.</p>
      <p>2. <strong>Bento Grids:</strong> The popular grid layout refined with more dynamic and interactive elements.</p>
      
      <h3>Conclusion</h3>
      <p>Design is the first thing your users see, and it's what keeps them coming back. Our design team at Sajilo Digital focuses on creating WOW moments in every pixel.</p>
    `,
    author: {
      name: "Puspanjali Gurung",
      avatar: "/team/puspanjali1.jpg",
      role: "Lead Designer",
    },
    category: "Design",
    tags: ["UX", "Design", "Trends", "2026"],
    publishedAt: "Jan 02, 2026",
    readTime: "5 min read",
    image: "/gallery/slide-3.jpg",
    featured: false,
  },
  {
    slug: "scaling-startups-with-sajilo-digital",
    title: "How Sajilo Digital Scales Startups: From MVP to Enterprise",
    excerpt:
      "Learn about our proven process for taking digital products from initial concept to millions of users.",
    content: `
      <h2>The Sajilo Way</h2>
      <p>Building a startup is hard. Scaling it is harder. Over the years, we've developed a blueprint for success that minimizes risk and maximizes growth.</p>
      
      <h3>Phase 1: The Lean MVP</h3>
      <p>Focus on the core value proposition. We build only what's necessary to validate your idea with real users.</p>
      
      <h3>Phase 2: Growth Engineering</h3>
      <p>Once validated, we optimize for conversion and scale, ensuring your platform can handle the influx of new users.</p>
      
      <h3>Conclusion</h3>
      <p>Whether you're a solo founder or an established enterprise, Sajilo Digital is your partner in digital excellence.</p>
    `,
    author: {
      name: "Bal Gobind Chaudhary",
      avatar: "/team/bal.jpg",
      role: "CEO",
    },
    category: "Business",
    tags: ["Startups", "Scaling", "MVP", "SajiloDigital"],
    publishedAt: "Dec 28, 2025",
    readTime: "7 min read",
    image: "/gallery/slide-4.jpg",
    featured: false,
  },
];
