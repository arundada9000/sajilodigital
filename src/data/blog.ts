import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-14",
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt:
      "Discover the powerful features of Next.js 14 and learn how to build modern, performant web applications with the latest updates.",
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js 14 brings exciting new features and improvements that make building web applications even better. In this comprehensive guide, we'll explore what's new and how you can leverage these features in your projects.</p>
      
      <h3>Key Features</h3>
      <p>The new version introduces Server Actions, improved caching strategies, and enhanced performance optimizations. These features work together to create faster, more efficient applications.</p>
      
      <h3>Getting Started</h3>
      <p>To start with Next.js 14, simply run <code>npx create-next-app@latest</code> in your terminal. This will set up a new project with all the latest features configured.</p>
      
      <h3>Server Components</h3>
      <p>React Server Components are now the default in Next.js 14, providing better performance and smaller bundle sizes. They allow you to render components on the server and stream them to the client.</p>
      
      <h3>Conclusion</h3>
      <p>Next.js 14 represents a significant step forward in web development. Whether you're building a small website or a large-scale application, these new features will help you create better experiences for your users.</p>
    `,
    author: {
      name: "Rajesh Kumar",
      avatar: "/images/team/rajesh.jpg",
      role: "Lead Developer",
    },
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Tutorial"],
    publishedAt: "Dec 15, 2024",
    readTime: "8 min read",
    image: "/images/blog/nextjs-14.jpg",
    featured: true,
  },
  {
    slug: "ui-ux-design-trends-2024",
    title: "Top UI/UX Design Trends to Watch in 2024",
    excerpt:
      "Explore the latest design trends shaping the digital landscape, from bold typography to immersive 3D elements.",
    content: `
      <h2>Design Trends for 2024</h2>
      <p>The design world is constantly evolving, and 2024 brings fresh perspectives and innovative approaches to UI/UX design.</p>
      
      <h3>1. Bold Typography</h3>
      <p>Large, expressive typography is taking center stage, becoming a key design element rather than just a means of communication.</p>
      
      <h3>2. Glassmorphism</h3>
      <p>This trend creates depth and hierarchy through semi-transparent backgrounds and blur effects, adding a modern touch to interfaces.</p>
      
      <h3>3. Dark Mode First</h3>
      <p>More designers are adopting a dark-mode-first approach, considering it in the initial design phase rather than as an afterthought.</p>
      
      <h3>4. Micro-interactions</h3>
      <p>Small animations and feedback mechanisms enhance user engagement and make interfaces feel more alive and responsive.</p>
      
      <h3>Conclusion</h3>
      <p>Staying current with design trends helps create experiences that feel modern and engaging while maintaining usability.</p>
    `,
    author: {
      name: "Priya Sharma",
      avatar: "/images/team/priya.jpg",
      role: "UI/UX Designer",
    },
    category: "Design",
    tags: ["UI/UX", "Design Trends", "User Experience"],
    publishedAt: "Dec 12, 2024",
    readTime: "6 min read",
    image: "/images/blog/ui-trends.jpg",
    featured: false,
  },
  {
    slug: "seo-best-practices-2024",
    title: "SEO Best Practices for Modern Websites",
    excerpt:
      "Learn essential SEO strategies to improve your website's visibility and ranking in search engines.",
    content: `
      <h2>Modern SEO Essentials</h2>
      <p>Search engine optimization has evolved significantly. Here are the key practices that matter in 2024.</p>
      
      <h3>Core Web Vitals</h3>
      <p>Google's Core Web Vitals are crucial ranking factors. Focus on improving LCP, FID, and CLS for better performance.</p>
      
      <h3>Quality Content</h3>
      <p>Create valuable, in-depth content that answers user queries comprehensively. Quality always trumps quantity.</p>
      
      <h3>Mobile-First Indexing</h3>
      <p>Ensure your website is fully optimized for mobile devices, as Google now primarily uses mobile versions for indexing.</p>
      
      <h3>Technical SEO</h3>
      <p>Proper site structure, XML sitemaps, and schema markup help search engines understand and index your content effectively.</p>
    `,
    author: {
      name: "Amit Thapa",
      avatar: "/images/team/amit.jpg",
      role: "SEO Specialist",
    },
    category: "SEO",
    tags: ["SEO", "Digital Marketing", "Google"],
    publishedAt: "Dec 10, 2024",
    readTime: "7 min read",
    image: "/images/blog/seo-practices.jpg",
    featured: false,
  },
  {
    slug: "react-hooks-advanced-patterns",
    title: "Advanced React Hooks Patterns for Scalable Apps",
    excerpt:
      "Master advanced React hooks patterns to build more maintainable and scalable applications.",
    content: `
      <h2>Advanced Hooks Patterns</h2>
      <p>React Hooks have revolutionized how we write components. Let's explore advanced patterns for complex applications.</p>
      
      <h3>Custom Hooks</h3>
      <p>Creating custom hooks allows you to extract component logic into reusable functions, improving code organization.</p>
      
      <h3>useReducer for Complex State</h3>
      <p>When state logic becomes complex, useReducer provides a more predictable way to manage state transitions.</p>
      
      <h3>Composition Patterns</h3>
      <p>Combine multiple hooks to create powerful, reusable logic that can be shared across components.</p>
      
      <h3>Performance Optimization</h3>
      <p>Use useMemo and useCallback strategically to prevent unnecessary re-renders and optimize performance.</p>
    `,
    author: {
      name: "Rajesh Kumar",
      avatar: "/images/team/rajesh.jpg",
      role: "Lead Developer",
    },
    category: "Web Development",
    tags: ["React", "Hooks", "JavaScript", "Advanced"],
    publishedAt: "Dec 8, 2024",
    readTime: "10 min read",
    image: "/images/blog/react-hooks.jpg",
    featured: false,
  },
  {
    slug: "building-scalable-apis-nodejs",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A practical guide to designing and building scalable RESTful APIs using Node.js and Express.",
    content: `
      <h2>API Architecture Best Practices</h2>
      <p>Building scalable APIs requires careful planning and adherence to best practices. Here's how to do it right.</p>
      
      <h3>Project Structure</h3>
      <p>Organize your code into logical modules: routes, controllers, services, and models for better maintainability.</p>
      
      <h3>Error Handling</h3>
      <p>Implement centralized error handling middleware to manage errors consistently across your API.</p>
      
      <h3>Authentication & Security</h3>
      <p>Use JWT tokens for authentication and implement rate limiting to protect your API from abuse.</p>
      
      <h3>Database Optimization</h3>
      <p>Index frequently queried fields and use connection pooling to improve database performance.</p>
    `,
    author: {
      name: "Sanjay Gurung",
      avatar: "/images/team/sanjay.jpg",
      role: "Backend Developer",
    },
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
    publishedAt: "Dec 5, 2024",
    readTime: "9 min read",
    image: "/images/blog/nodejs-api.jpg",
    featured: false,
  },
  {
    slug: "tailwind-css-tips-tricks",
    title: "10 Tailwind CSS Tips and Tricks You Should Know",
    excerpt:
      "Discover powerful Tailwind CSS techniques to speed up your development and create beautiful designs.",
    content: `
      <h2>Mastering Tailwind CSS</h2>
      <p>Tailwind CSS offers incredible flexibility. Here are some tips to help you use it more effectively.</p>
      
      <h3>1. Custom Configuration</h3>
      <p>Extend Tailwind's default configuration to match your brand colors and design system.</p>
      
      <h3>2. Reusable Components</h3>
      <p>Extract common patterns into components to avoid repeating utility classes.</p>
      
      <h3>3. Dark Mode</h3>
      <p>Implement dark mode easily with Tailwind's built-in dark: variant.</p>
      
      <h3>4. Responsive Design</h3>
      <p>Use mobile-first breakpoints to create responsive layouts efficiently.</p>
      
      <h3>5. Custom Utilities</h3>
      <p>Create custom utility classes for project-specific needs using @layer utilities.</p>
    `,
    author: {
      name: "Priya Sharma",
      avatar: "/images/team/priya.jpg",
      role: "UI/UX Designer",
    },
    category: "Design",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Tips"],
    publishedAt: "Dec 3, 2024",
    readTime: "5 min read",
    image: "/images/blog/tailwind-tips.jpg",
    featured: false,
  },
  {
    slug: "mobile-app-development-flutter",
    title: "Why Flutter is Perfect for Cross-Platform Mobile Development",
    excerpt:
      "Explore the benefits of using Flutter for building beautiful, natively compiled mobile applications.",
    content: `
      <h2>Flutter for Mobile Development</h2>
      <p>Flutter has emerged as a leading framework for cross-platform mobile development. Here's why it's so popular.</p>
      
      <h3>Single Codebase</h3>
      <p>Write once, deploy everywhere. Flutter allows you to build iOS and Android apps from a single codebase.</p>
      
      <h3>Hot Reload</h3>
      <p>See changes instantly without restarting your app, making development faster and more efficient.</p>
      
      <h3>Beautiful UI</h3>
      <p>Flutter's widget system makes it easy to create beautiful, custom user interfaces.</p>
      
      <h3>Native Performance</h3>
      <p>Flutter compiles to native code, ensuring excellent performance on both platforms.</p>
    `,
    author: {
      name: "Bikash Rai",
      avatar: "/images/team/bikash.jpg",
      role: "Mobile Developer",
    },
    category: "Mobile Development",
    tags: ["Flutter", "Mobile", "Cross-Platform", "Dart"],
    publishedAt: "Dec 1, 2024",
    readTime: "7 min read",
    image: "/images/blog/flutter-dev.jpg",
    featured: false,
  },
  {
    slug: "web-accessibility-wcag-guidelines",
    title: "Web Accessibility: A Practical Guide to WCAG",
    excerpt:
      "Learn how to make your websites accessible to everyone by following WCAG guidelines.",
    content: `
      <h2>Understanding Web Accessibility</h2>
      <p>Making websites accessible ensures everyone can use them, regardless of their abilities.</p>
      
      <h3>WCAG Principles</h3>
      <p>The four principles of WCAG: Perceivable, Operable, Understandable, and Robust.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are accessible via keyboard for users who can't use a mouse.</p>
      
      <h3>Color Contrast</h3>
      <p>Maintain sufficient color contrast ratios to help users with visual impairments.</p>
      
      <h3>Alt Text</h3>
      <p>Provide descriptive alt text for images to help screen reader users understand content.</p>
    `,
    author: {
      name: "Anita Poudel",
      avatar: "/images/team/anita.jpg",
      role: "Frontend Developer",
    },
    category: "Web Development",
    tags: ["Accessibility", "WCAG", "Web Standards", "UX"],
    publishedAt: "Nov 28, 2024",
    readTime: "8 min read",
    image: "/images/blog/accessibility.jpg",
    featured: false,
  },
];
