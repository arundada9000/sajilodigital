import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "about-our-company",
    title: "About Sajilo Digital",
    excerpt:
      "We build digital products with care, clarity, and a deep focus on real impact.",
    content: `
    <h3><strong>Who We Are</strong></h2>
    <p>We are a passionate team turning ideas into meaningful digital experiences.</p>
    
    <h3><strong>What Drives Us</strong></h3>
    <p>We care deeply about quality, simplicity, and building things that truly matter.</p>
    
    <h3><strong>How We Work</strong></h3>
    <p>We listen, collaborate, and build with intention at every step.</p>
    
    <h3><strong>Why We Exist</strong></h3>
    <p>To help businesses grow through thoughtful and reliable technology.</p><br>
    
    <h3><strong>Conclusion: </strong></h3>
    <p>"Sajilo Digital is where ideas meet purpose and progress."</p>
    
  `,
    author: {
      name: "Pramod Tharu",
      avatar: "/team/pramod.jpg",
      role: "Chairperson",
    },
    category: "Company",
    tags: ["AboutUs", "SajiloDigital", "Brand", "Team"],
    publishedAt: "Jan 10, 2026",
    readTime: "3 min read",
    image: "/favicon/android-chrome-192x192.png",
    featured: false,
  },

  {
    slug: "how-we-work",
    title: "How We Work",
    excerpt:
      "A simple look at how we turn ideas into successful digital products, step by step.",
    content: `
    <h3><strong>Our Approach</strong></h3>
    <p>We keep things simple, transparent, and focused on your goals.</p>
    
    <h3><strong>Listen First</strong></h3>
    <p>We take time to understand your idea, your users, and what success means to you.</p>
    
    <h3><strong>Build Together</strong></h3>
    <p>We design and build in small steps, sharing progress and improving as we go.</p>
    
    <h3><strong>Launch with Confidence</strong></h3>
    <p>We test everything carefully so your product is ready for real users.</p><br>
   
    <h3><strong>Conclusion</strong></h3>
    <p>"Our friendly process helps you move fast while building the right thing."</p>
  `,
    author: {
      name: "Bal Gobind Chaudhary",
      avatar: "/team/bal.jpg",
      role: "CEO",
    },
    category: "Business",
    tags: ["Process", "Team", "SajiloDigital"],
    publishedAt: "Jan 05, 2026",
    readTime: "8 min read",
    image: "/gallery/img-2.jpg",
    featured: false,
  },
  {
    slug: "ensuring-quality-of-products",
    title: "How we ensure quality of products: The Sajilo Digital QA Approach",
    excerpt:
      "Learn how structured QA processes help deliver reliable, scalable, and high-quality digital products at Sajilo Digital.",
    content: `
      <h2><strong>Our QA Approach</strong></h2>
      <p>At Sajilo Digital, we ensure product quality through structured testing, clear requirements, and continuous validation.</p>
      
      <h3>How we Ensure Quality</h3>
      <p>1. <strong>Strategic Planning:</strong> Defining clear success criteria and mapping all functional requirements. .</p>
      <p>2. <strong>Risk Mitigation:</strong> Prioritizing high-impact areas to optimize resources and prevent critical failures.</p>
      <p>3. <strong>Smart Automation:</strong> Using industry-leading tools like: Selenium, Appium, JUnit for fast, consistent feedback.</p><br>
      
      <h3><strong>Conclusion</strong></h3>
      <p>"Our QA-first approach helps deliver reliable, scalable, and high quality digital products you can trust."</p>
    `,
    author: {
      name: "Sunil Paudyal",
      avatar: "/team/sunilpaudyal.jpg",
      role: "QA Tester",
    },
    category: "Quality Assurance",
    tags: ["QA", "Testing", "Product Quality"],
    publishedAt: "Jan 11, 2026",
    readTime: "6 min read",
    image: "/blog/qatester.jpg",
    featured: false,
  },
  {
    slug: "tech-stack-we-use",
    title: "Tech Stack We Use: Building Scalable Startups with Sajilo Digital",
    excerpt:
      "Discover the modern technologies and tools Sajilo Digital uses to build fast, secure, and scalable digital products.",
    content: `
      <h3>Our Technology Philosophy</h3>
      <p>Sajilo Digital uses a modern and reliable tech stack to build scalable digital products.We choose technologies that are fast, secure, and future-ready.</p>
      
     <h2>Powering Our Platform</h2>
      <p>1.<strong>Frontend Technologies</strong>Our frontend is built with tools like React and Next.js for smooth user experiences.</p>
      <p>2. <strong>Backend & Infrastructure</strong>Built with Node.js and NestJS, deployed on scalable cloud platforms like AWS and Vercel.</p>
      <p>3. <strong>Databases & Devops</strong>Reliable databases and automated deployments ensure stability and performance.</p><br>
     <h3><strong>Conclusion</strong></h3>
     <p>" This tech stack helps startups grow efficiently and confidently."</p>

    `,
    author: {
      name: "Arun Neupane",
      avatar: "/team/Arun.png",
      role: "CTO",
    },
    category: "Business",
    tags: ["Tech Stack", "Startups", "Scaling", "SajiloDigital"],
    publishedAt: "Dec 28, 2025",
    readTime: "7 min read",
    image: "/blog/nextjs.jpg",
    featured: true,
  },
  {
    slug: "video-editing",
    title: "Video Editing Services",
    excerpt:
      "We craft powerful videos that tell your story, capture attention, and connect with your audience.",
    content: `
    <h3><strong>What We Do</strong></h3>
    <p>We turn raw footage into engaging videos that feel professional and purposeful.</p>
    
    <h3><strong>Our Style</strong></h3>
    <p>Clean cuts, smooth transitions, and storytelling that keeps viewers watching.</p>
    
    <h3><strong>Why It Matters</strong></h3>
    <p>Great videos build trust, spark emotion, and make your brand unforgettable.</p>
    
    <h3><strong>How We Work</strong></h3>
    <p>We collaborate closely to bring your vision to life, frame by frame.</p><br>
    <h3><strong>Conclusion</strong></h3>
    <p>"Your story deserves to be seen, felt, and remembered."</p>
  `,
    author: {
      name: "Ashish G.M",
      avatar: "/team/ashish.jpg",
      role: "Video Editor",
    },
    category: "Services",
    tags: ["VideoEditing", "Creative", "Branding", "SajiloDigital"],
    publishedAt: "Jan 10, 2026",
    readTime: "3 min read",
    image: "/blog/videoedit1.png",
    featured: false,
  },
];
