export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  description: string;
  details: {
    client: string;
    services: string[];
    concept: string;
  };
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Team",
    subtitle: "Brainstorming moments",
    category: "E-commerce",
    year: "2025",
    image: "/gallery/img-1.jpg",
    description: "Working on The shop an e-commerce website",
    details: {
      client: "Sushila Fancy",
      services: ["webapp", "FUll stack", "Interaction Design"],
      concept:
        "This project was a successful completion of a clothing E-commerce platform.",
    },
  },
  {
    id: 1001,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 1002,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop1.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 1003,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop2.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 1004,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop3.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 1005,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop4.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 1006,
    title: "Sushila Fancy Store",
    subtitle: "Clothing & Accessories E-commerce",
    category: "E-commerce",
    year: "2025",
    image: "/projects/theshop5.png",
    description:
      "A complete online clothing store with modern design and full e-commerce functionality",
    details: {
      client: "Sushila Fancy Store",
      services: [
        "Full Stack Web Development",
        "E-commerce Platform",
        "UI/UX Design",
        "Payment Integration",
        "Inventory Management",
      ],
      concept:
        "Developed a responsive e-commerce website for a local clothing store to expand their business online. The platform features product catalog, shopping cart, secure checkout, and admin dashboard for inventory management. Integrated with local payment gateways and delivery services to cater to Nepali customers.",
    },
  },
  {
    id: 2,
    title: "Sajilo Digital",
    subtitle: "Company Website",
    category: "Corporate",
    year: "2025",
    image: "/gallery/img-2.jpg",
    description:
      "Official website for our digital agency showcasing services and portfolio",
    details: {
      client: "Sajilo Digital",
      services: ["Web Development", "UI/UX Design", "Branding"],
      concept:
        "A modern, responsive website to represent our digital agency and attract potential clients.",
    },
  },
  {
    id: 3,
    title: "Code for Change",
    subtitle: "NGO Platform",
    category: "Social Impact",
    year: "2025",
    image: "/gallery/img-3.jpg",
    description:
      "Website for a non-profit organization focused on social change in Nepal",
    details: {
      client: "Code for Change Nepal",
      services: ["Web Development", "CMS Integration", "Donation System"],
      concept:
        "A platform to showcase projects, accept donations, and engage volunteers for social causes.",
    },
  },
  {
    id: 4,
    title: "Mount Glacier Trek",
    subtitle: "Tourism Portal",
    category: "Travel",
    year: "2025",
    image: "/gallery/img-4.jpg",
    description:
      "Complete booking system for trekking and adventure tours in Nepal",
    details: {
      client: "Mount Glacier Trek",
      services: ["Booking System", "Payment Integration", "Multi-language"],
      concept:
        "A comprehensive tourism portal for trekking enthusiasts with real-time booking and payment processing.",
    },
  },

  {
    id: 4001,
    title: "Mount Glacier Trek",
    subtitle: "Himalayan Adventure Portal",
    category: "Travel & Tourism",
    year: "2025",
    image: "/projects/mtglacier.jpg",
    description:
      "Full-featured trekking website with integrated booking, payment processing, and comprehensive travel resources",
    details: {
      client: "Mount Glacier Trekking Company",
      services: [
        "Custom Web Development",
        "Booking Engine Integration",
        "Payment Gateway Setup",
        "Content Management System",
        "SEO Optimization",
        "Mobile Responsive Design",
      ],
      concept:
        "Built a complete digital platform for a trekking company specializing in Himalayan adventures. The website serves as both a marketing tool and operational system, featuring detailed trek packages with interactive booking forms, secure payment processing for deposits, automated confirmation emails, and an admin dashboard for managing bookings and inquiries. The site also includes educational content about trek preparation, altitude sickness prevention, and cultural etiquette to ensure travelers are well-prepared for their adventures.",
    },
  },
  {
    id: 4002,
    title: "Mount Glacier Trek",
    subtitle: "Himalayan Adventure Portal",
    category: "Travel & Tourism",
    year: "2025",
    image: "/projects/mtglacier1.png",
    description:
      "Full-featured trekking website with integrated booking, payment processing, and comprehensive travel resources",
    details: {
      client: "Mount Glacier Trekking Company",
      services: [
        "Custom Web Development",
        "Booking Engine Integration",
        "Payment Gateway Setup",
        "Content Management System",
        "SEO Optimization",
        "Mobile Responsive Design",
      ],
      concept:
        "Built a complete digital platform for a trekking company specializing in Himalayan adventures. The website serves as both a marketing tool and operational system, featuring detailed trek packages with interactive booking forms, secure payment processing for deposits, automated confirmation emails, and an admin dashboard for managing bookings and inquiries. The site also includes educational content about trek preparation, altitude sickness prevention, and cultural etiquette to ensure travelers are well-prepared for their adventures.",
    },
  },
  {
    id: 4003,
    title: "Mount Glacier Trek",
    subtitle: "Himalayan Adventure Portal",
    category: "Travel & Tourism",
    year: "2025",
    image: "/projects/mtglacier2.png",
    description:
      "Full-featured trekking website with integrated booking, payment processing, and comprehensive travel resources",
    details: {
      client: "Mount Glacier Trekking Company",
      services: [
        "Custom Web Development",
        "Booking Engine Integration",
        "Payment Gateway Setup",
        "Content Management System",
        "SEO Optimization",
        "Mobile Responsive Design",
      ],
      concept:
        "Built a complete digital platform for a trekking company specializing in Himalayan adventures. The website serves as both a marketing tool and operational system, featuring detailed trek packages with interactive booking forms, secure payment processing for deposits, automated confirmation emails, and an admin dashboard for managing bookings and inquiries. The site also includes educational content about trek preparation, altitude sickness prevention, and cultural etiquette to ensure travelers are well-prepared for their adventures.",
    },
  },
  {
    id: 4004,
    title: "Mount Glacier Trek",
    subtitle: "Himalayan Adventure Portal",
    category: "Travel & Tourism",
    year: "2025",
    image: "/projects/mtglacier3.png",
    description:
      "Full-featured trekking website with integrated booking, payment processing, and comprehensive travel resources",
    details: {
      client: "Mount Glacier Trekking Company",
      services: [
        "Custom Web Development",
        "Booking Engine Integration",
        "Payment Gateway Setup",
        "Content Management System",
        "SEO Optimization",
        "Mobile Responsive Design",
      ],
      concept:
        "Built a complete digital platform for a trekking company specializing in Himalayan adventures. The website serves as both a marketing tool and operational system, featuring detailed trek packages with interactive booking forms, secure payment processing for deposits, automated confirmation emails, and an admin dashboard for managing bookings and inquiries. The site also includes educational content about trek preparation, altitude sickness prevention, and cultural etiquette to ensure travelers are well-prepared for their adventures.",
    },
  },
  {
    id: 4005,
    title: "Mount Glacier Trek",
    subtitle: "Himalayan Adventure Portal",
    category: "Travel & Tourism",
    year: "2025",
    image: "/projects/mtglacier4.png",
    description:
      "Full-featured trekking website with integrated booking, payment processing, and comprehensive travel resources",
    details: {
      client: "Mount Glacier Trekking Company",
      services: [
        "Custom Web Development",
        "Booking Engine Integration",
        "Payment Gateway Setup",
        "Content Management System",
        "SEO Optimization",
        "Mobile Responsive Design",
      ],
      concept:
        "Built a complete digital platform for a trekking company specializing in Himalayan adventures. The website serves as both a marketing tool and operational system, featuring detailed trek packages with interactive booking forms, secure payment processing for deposits, automated confirmation emails, and an admin dashboard for managing bookings and inquiries. The site also includes educational content about trek preparation, altitude sickness prevention, and cultural etiquette to ensure travelers are well-prepared for their adventures.",
    },
  },
  {
    id: 5,
    title: "Easy Color Picker",
    subtitle: "Design Tool",
    category: "Utility",
    year: "2025",
    image: "/gallery/img-5.jpg",
    description:
      "Free online tool for designers to pick and manage color palettes",
    details: {
      client: "Open Source Project",
      services: ["Frontend Development", "Tool Development", "UI Design"],
      concept:
        "A user-friendly color picker tool that helps designers create and export color schemes for various projects.",
    },
  },
  {
    id: 5001,
    title: "Easy Color Picker",
    subtitle: "Online Color Tool",
    category: "Design Tool",
    year: "2025",
    image: "/projects/picker.png",
    description:
      "Free web-based color picker tool for designers and developers to create, save, and manage color palettes",
    details: {
      client: "Open Source Project",
      services: [
        "Web Application Development",
        "Color Management System",
        "Export Tools",
        "Responsive Design",
        "User Experience Design",
      ],
      concept:
        "Developed a lightweight, intuitive color picker tool that helps designers and developers work with colors more efficiently. The tool allows users to pick colors using various methods (eye dropper, sliders, HEX/RGB/HSL inputs), save custom palettes, generate harmonious color schemes (complementary, analogous, triadic), and export colors in multiple formats including CSS, SCSS, Tailwind, and JSON. Features a clean, distraction-free interface with real-time preview of color combinations.",
    },
  },
  {
    id: 5002,
    title: "Easy Color Picker",
    subtitle: "Online Color Tool",
    category: "Design Tool",
    year: "2025",
    image: "/projects/picker2.png",
    description:
      "Free web-based color picker tool for designers and developers to create, save, and manage color palettes",
    details: {
      client: "Open Source Project",
      services: [
        "Web Application Development",
        "Color Management System",
        "Export Tools",
        "Responsive Design",
        "User Experience Design",
      ],
      concept:
        "Developed a lightweight, intuitive color picker tool that helps designers and developers work with colors more efficiently. The tool allows users to pick colors using various methods (eye dropper, sliders, HEX/RGB/HSL inputs), save custom palettes, generate harmonious color schemes (complementary, analogous, triadic), and export colors in multiple formats including CSS, SCSS, Tailwind, and JSON. Features a clean, distraction-free interface with real-time preview of color combinations.",
    },
  },
  {
    id: 5003,
    title: "Easy Color Picker",
    subtitle: "Online Color Tool",
    category: "Design Tool",
    year: "2025",
    image: "/projects/picker3.png",
    description:
      "Free web-based color picker tool for designers and developers to create, save, and manage color palettes",
    details: {
      client: "Open Source Project",
      services: [
        "Web Application Development",
        "Color Management System",
        "Export Tools",
        "Responsive Design",
        "User Experience Design",
      ],
      concept:
        "Developed a lightweight, intuitive color picker tool that helps designers and developers work with colors more efficiently. The tool allows users to pick colors using various methods (eye dropper, sliders, HEX/RGB/HSL inputs), save custom palettes, generate harmonious color schemes (complementary, analogous, triadic), and export colors in multiple formats including CSS, SCSS, Tailwind, and JSON. Features a clean, distraction-free interface with real-time preview of color combinations.",
    },
  },
  {
    id: 5004,
    title: "Easy Color Picker",
    subtitle: "Online Color Tool",
    category: "Design Tool",
    year: "2025",
    image: "/projects/picker4.png",
    description:
      "Free web-based color picker tool for designers and developers to create, save, and manage color palettes",
    details: {
      client: "Open Source Project",
      services: [
        "Web Application Development",
        "Color Management System",
        "Export Tools",
        "Responsive Design",
        "User Experience Design",
      ],
      concept:
        "Developed a lightweight, intuitive color picker tool that helps designers and developers work with colors more efficiently. The tool allows users to pick colors using various methods (eye dropper, sliders, HEX/RGB/HSL inputs), save custom palettes, generate harmonious color schemes (complementary, analogous, triadic), and export colors in multiple formats including CSS, SCSS, Tailwind, and JSON. Features a clean, distraction-free interface with real-time preview of color combinations.",
    },
  },
  {
    id: 6,
    title: "Sajilo Quiz",
    subtitle: "Educational Platform",
    category: "Education",
    year: "2025",
    image: "/gallery/img-6.jpg",
    description:
      "Interactive quiz application for schools and educational institutions",
    details: {
      client: "Various Schools",
      services: ["Web App", "Real-time Testing", "Analytics Dashboard"],
      concept:
        "An online examination system that allows teachers to create tests and students to take them remotely with instant results.",
    },
  },
  {
    id: 6001,
    title: "Sajilo Quiz",
    subtitle: "Educational Assessment Platform",
    category: "Education Technology",
    year: "2024",
    image: "/projects/sajiloquiz.jpg",
    description:
      "Interactive online quiz platform for schools and educational institutions with real-time testing and analytics",
    details: {
      client: "Educational Institutions",
      services: [
        "Web Application Development",
        "Quiz Engine",
        "Real-time Testing",
        "Analytics Dashboard",
        "User Management System",
      ],
      concept:
        "Developed a comprehensive quiz platform that enables teachers to create, manage, and administer online quizzes to students. The system features timed tests, multiple question types (MCQ, true/false, short answer), automatic grading, performance analytics, and detailed result reports. Designed specifically for the Nepali education context with support for multiple schools, subjects, and grade levels.",
    },
  },
  {
    id: 6002,
    title: "Sajilo Quiz",
    subtitle: "Educational Assessment Platform",
    category: "Education Technology",
    year: "2024",
    image: "/projects/sajiloquiz1.jpg",
    description:
      "Interactive online quiz platform for schools and educational institutions with real-time testing and analytics",
    details: {
      client: "Educational Institutions",
      services: [
        "Web Application Development",
        "Quiz Engine",
        "Real-time Testing",
        "Analytics Dashboard",
        "User Management System",
      ],
      concept:
        "Developed a comprehensive quiz platform that enables teachers to create, manage, and administer online quizzes to students. The system features timed tests, multiple question types (MCQ, true/false, short answer), automatic grading, performance analytics, and detailed result reports. Designed specifically for the Nepali education context with support for multiple schools, subjects, and grade levels.",
    },
  },
  {
    id: 6003,
    title: "Sajilo Quiz",
    subtitle: "Educational Assessment Platform",
    category: "Education Technology",
    year: "2024",
    image: "/projects/sajiloquiz2.png",
    description:
      "Interactive online quiz platform for schools and educational institutions with real-time testing and analytics",
    details: {
      client: "Educational Institutions",
      services: [
        "Web Application Development",
        "Quiz Engine",
        "Real-time Testing",
        "Analytics Dashboard",
        "User Management System",
      ],
      concept:
        "Developed a comprehensive quiz platform that enables teachers to create, manage, and administer online quizzes to students. The system features timed tests, multiple question types (MCQ, true/false, short answer), automatic grading, performance analytics, and detailed result reports. Designed specifically for the Nepali education context with support for multiple schools, subjects, and grade levels.",
    },
  },
  {
    id: 6004,
    title: "Sajilo Quiz",
    subtitle: "Educational Assessment Platform",
    category: "Education Technology",
    year: "2024",
    image: "/projects/sajiloquiz3.png",
    description:
      "Interactive online quiz platform for schools and educational institutions with real-time testing and analytics",
    details: {
      client: "Educational Institutions",
      services: [
        "Web Application Development",
        "Quiz Engine",
        "Real-time Testing",
        "Analytics Dashboard",
        "User Management System",
      ],
      concept:
        "Developed a comprehensive quiz platform that enables teachers to create, manage, and administer online quizzes to students. The system features timed tests, multiple question types (MCQ, true/false, short answer), automatic grading, performance analytics, and detailed result reports. Designed specifically for the Nepali education context with support for multiple schools, subjects, and grade levels.",
    },
  },
  {
    id: 6005,
    title: "Sajilo Quiz",
    subtitle: "Educational Assessment Platform",
    category: "Education Technology",
    year: "2024",
    image: "/projects/sajiloquiz4.png",
    description:
      "Interactive online quiz platform for schools and educational institutions with real-time testing and analytics",
    details: {
      client: "Educational Institutions",
      services: [
        "Web Application Development",
        "Quiz Engine",
        "Real-time Testing",
        "Analytics Dashboard",
        "User Management System",
      ],
      concept:
        "Developed a comprehensive quiz platform that enables teachers to create, manage, and administer online quizzes to students. The system features timed tests, multiple question types (MCQ, true/false, short answer), automatic grading, performance analytics, and detailed result reports. Designed specifically for the Nepali education context with support for multiple schools, subjects, and grade levels.",
    },
  },
  {
    id: 7,
    title: "MediConnect",
    subtitle: "Healthcare System",
    category: "Healthcare",
    year: "2025",
    image: "/gallery/img-7.jpg",
    description:
      "Doctor appointment and patient management system for hospitals",
    details: {
      client: "Private Hospital Network",
      services: ["Full Stack Development", "Database Design", "Security"],
      concept:
        "A comprehensive healthcare management system for scheduling appointments, managing patient records, and streamlining hospital operations.",
    },
  },
  {
    id: 8,
    title: "Human Resource Management",
    subtitle: "Human Resources",
    category: "Business",
    year: "2025",
    image: "/gallery/img-8.jpg",
    description:
      "Complete HR management system for employee tracking and payroll",
    details: {
      client: "Corporate Client",
      services: ["System Architecture", "Backend Development", "Reporting"],
      concept:
        "An enterprise-level HR system handling employee records, attendance, leaves, payroll, and performance evaluations.",
    },
  },
  {
    id: 9,
    title: "RestoManage",
    subtitle: "Restaurant System",
    category: "Food & Beverage",
    year: "2025",
    image: "/gallery/img-9.jpg",
    description:
      "Complete restaurant management including table booking and order system",
    details: {
      client: "Fine Dining Restaurant",
      services: ["POS Integration", "Inventory Management", "Customer Portal"],
      concept:
        "An all-in-one restaurant management solution covering table reservations, order management, kitchen display, and billing.",
    },
  },
  {
    id: 10,
    title: "Nepal Cargo",
    subtitle: "Shipping Platform",
    category: "Logistics",
    year: "2025",
    image: "/gallery/img-10.jpg",
    description: "Cargo and logistics management system for shipping companies",
    details: {
      client: "Logistics Company",
      services: ["Web Development", "Tracking System", "CRM"],
      concept:
        "A logistics platform that manages cargo shipments, tracks deliveries in real-time, and handles customer relations.",
    },
  },
  {
    id: 11,
    title: "Digital Nepal",
    subtitle: "Government Portal",
    category: "Government",
    year: "2025",
    image: "/gallery/img-11.jpg",
    description: "Digital transformation platform for government services",
    details: {
      client: "Government Agency",
      services: ["Portal Development", "API Integration", "Security"],
      concept:
        "A centralized platform for citizens to access various government services digitally with secure authentication.",
    },
  },
  {
    id: 12,
    title: "EduTech Nepal",
    subtitle: "Learning Platform",
    category: "Education",
    year: "2025",
    image: "/gallery/img-12.jpg",
    description: "Online learning platform with courses and certification",
    details: {
      client: "Educational Institution",
      services: ["LMS Development", "Video Streaming", "E-commerce"],
      concept:
        "A comprehensive learning management system offering courses, video lectures, assignments, and certification programs.",
    },
  },
  {
    id: 13,
    title: "RealEstate Pro",
    subtitle: "Property Portal",
    category: "Real Estate",
    year: "2025",
    image: "/gallery/img-13.jpg",
    description:
      "Property listing and management platform for real estate agencies",
    details: {
      client: "Real Estate Agency",
      services: ["Web Development", "Mobile App", "Admin Dashboard"],
      concept:
        "A complete real estate platform allowing agents to list properties, schedule viewings, and manage client relationships.",
    },
  },
  {
    id: 14,
    title: "Banking System",
    subtitle: "Financial Platform",
    category: "Finance",
    year: "2025",
    image: "/gallery/img-14.jpg",
    description: "Secure banking and financial management system",
    details: {
      client: "Financial Institution",
      services: ["Security", "Backend Development", "Mobile Banking"],
      concept:
        "A secure banking platform with features like fund transfer, bill payment, loan management, and account analytics.",
    },
  },
  {
    id: 15,
    title: "Eventify",
    subtitle: "Event Management",
    category: "Events",
    year: "2025",
    image: "/gallery/img-15.jpg",
    description: "Complete event planning and management platform",
    details: {
      client: "Event Management Company",
      services: ["Web Development", "Ticketing System", "CRM"],
      concept:
        "An end-to-end event management solution for planning, promotion, ticketing, and attendee management.",
    },
  },
  {
    id: 16,
    title: "FarmConnect",
    subtitle: "Agricultural Platform",
    category: "Agriculture",
    year: "2025",
    image: "/gallery/img-16.jpg",
    description:
      "Digital platform connecting farmers with markets and resources",
    details: {
      client: "Agricultural Cooperative",
      services: ["Marketplace", "Mobile App", "Analytics"],
      concept:
        "A platform that helps farmers sell produce directly to consumers, access farming resources, and get weather information.",
    },
  },
  {
    id: 17,
    title: "Smart Inventory",
    subtitle: "Warehouse System",
    category: "Logistics",
    year: "2025",
    image: "/gallery/img-17.jpg",
    description:
      "Inventory and warehouse management system with barcode scanning",
    details: {
      client: "Retail Chain",
      services: ["Inventory System", "Mobile App", "Analytics"],
      concept:
        "A smart inventory management system with barcode/RFID tracking, stock alerts, and automated reordering.",
    },
  },
  {
    id: 18,
    title: "Tour Nepal",
    subtitle: "Travel Booking",
    category: "Travel",
    year: "2025",
    image: "/gallery/img-18.jpg",
    description: "Complete travel booking platform for Nepal tourism",
    details: {
      client: "Travel Agency",
      services: ["Booking Engine", "Payment Gateway", "Multi-language"],
      concept:
        "A one-stop travel platform for booking flights, hotels, tours, and transportation within Nepal.",
    },
  },
  {
    id: 19,
    title: "LegalEase",
    subtitle: "Legal Platform",
    category: "Legal",
    year: "2025",
    image: "/gallery/img-19.jpg",
    description: "Legal services and document management platform",
    details: {
      client: "Law Firm",
      services: ["Document Management", "Client Portal", "Scheduling"],
      concept:
        "A secure platform for law firms to manage cases, documents, client communications, and appointments.",
    },
  },

  //   {
  //     id: 1,
  //     title: "NEBULOUS",
  //     subtitle: "AETHER",
  //     category: "EXPERIMENTAL",
  //     year: "2025",
  //     image: "/gallery/slide-1.jpg",
  //     description:
  //       "An exploration of fluid dynamics in digital space, pushing the boundaries of WebGL rendering.",
  //     details: {
  //       client: "Abstract Arts Collective",
  //       services: ["3D Animation", "WebGL", "Interaction Design"],
  //       concept:
  //         "The project captures the essence of motion without form, using particle simulations to represent the flow of information in the modern digital age.",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "KINETIC",
  //     subtitle: "SILENCE",
  //     category: "ARCHITECTURE",
  //     year: "2023",
  //     image: "/gallery/slide-2.jpg",
  //     description:
  //       "Capturing the stillness of modern architectural marvels through high-contrast photography.",
  //     details: {
  //       client: "Metro Construction Group",
  //       services: ["Photography", "Art Direction"],
  //       concept:
  //         "Kinetic Silence focuses on the paradox of busy metropolitan spaces during the blue hour, highlighting the geometry and permanence of steel.",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "ORGANIC",
  //     subtitle: "RHYTHM",
  //     category: "IDENTITY",
  //     year: "2025",
  //     image: "/gallery/slide-3.jpg",
  //     description:
  //       "A brand identity system inspired by the mathematical beauty of nature's growth patterns.",
  //     details: {
  //       client: "Flora & Fauna Biotech",
  //       services: ["Brand Strategy", "Visual Identity", "Custom Typeface"],
  //       concept:
  //         "Using the Golden Ratio as a base, we developed a living identity system that evolves visually as the brand grows across different media.",
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "DIGITAL",
  //     subtitle: "FOREST",
  //     category: "IMMERSIVE",
  //     year: "2025",
  //     image: "/gallery/slide-4.jpg",
  //     description:
  //       "A virtual reality experience recreating the tranquility of a deep forest using procedural generation.",
  //     details: {
  //       client: "Sajilo Labs",
  //       services: ["VR Development", "Procedural Modeling", "Sound Engineering"],
  //       concept:
  //         "Digital Forest aim to provide an escape into nature through a browser-based VR environment that reacts to the user's heartbeat and breathing.",
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "MONOLITH",
  //     subtitle: "STUDY",
  //     category: "MINIMALISM",
  //     year: "2023",
  //     image: "/gallery/slide-5.jpg",
  //     description:
  //       "A series of minimal web designs focusing on typography and whitespace to create premium experiences.",
  //     details: {
  //       client: "Heritage Watches",
  //       services: ["Web Design", "Interface Crafting"],
  //       concept:
  //         "Monolith Study strips away the noise of traditional e-commerce to focus on the luxury and heritage of the products, using a 'less but better' approach.",
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "VIBRANT",
  //     subtitle: "ECHOES",
  //     category: "MOTION",
  //     year: "2025",
  //     image: "/gallery/slide-6.jpg",
  //     description:
  //       "Explosive color palettes and dynamic motion graphics for the high-end fashion industry.",
  //     details: {
  //       client: "Velvet & Stone",
  //       services: ["Motion Design", "Color Grading", "Social Strategy"],
  //       concept:
  //         "Vibrant Echoes uses high-frequency visual stimulation to capture the attention of Gen Z audiences while maintaining a premium, luxury aesthetic.",
  //     },
  //   },
];
