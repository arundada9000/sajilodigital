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
        title: "NEBULOUS",
        subtitle: "AETHER",
        category: "EXPERIMENTAL",
        year: "2024",
        image: "/gallery/slide-1.jpg",
        description: "An exploration of fluid dynamics in digital space, pushing the boundaries of WebGL rendering.",
        details: {
            client: "Abstract Arts Collective",
            services: ["3D Animation", "WebGL", "Interaction Design"],
            concept: "The project captures the essence of motion without form, using particle simulations to represent the flow of information in the modern digital age."
        }
    },
    {
        id: 2,
        title: "KINETIC",
        subtitle: "SILENCE",
        category: "ARCHITECTURE",
        year: "2023",
        image: "/gallery/slide-2.jpg",
        description: "Capturing the stillness of modern architectural marvels through high-contrast photography.",
        details: {
            client: "Metro Construction Group",
            services: ["Photography", "Art Direction"],
            concept: "Kinetic Silence focuses on the paradox of busy metropolitan spaces during the blue hour, highlighting the geometry and permanence of steel."
        }
    },
    {
        id: 3,
        title: "ORGANIC",
        subtitle: "RHYTHM",
        category: "IDENTITY",
        year: "2024",
        image: "/gallery/slide-3.jpg",
        description: "A brand identity system inspired by the mathematical beauty of nature's growth patterns.",
        details: {
            client: "Flora & Fauna Biotech",
            services: ["Brand Strategy", "Visual Identity", "Custom Typeface"],
            concept: "Using the Golden Ratio as a base, we developed a living identity system that evolves visually as the brand grows across different media."
        }
    },
    {
        id: 4,
        title: "DIGITAL",
        subtitle: "FOREST",
        category: "IMMERSIVE",
        year: "2024",
        image: "/gallery/slide-4.jpg",
        description: "A virtual reality experience recreating the tranquility of a deep forest using procedural generation.",
        details: {
            client: "Sajilo Labs",
            services: ["VR Development", "Procedural Modeling", "Sound Engineering"],
            concept: "Digital Forest aim to provide an escape into nature through a browser-based VR environment that reacts to the user's heartbeat and breathing."
        }
    },
    {
        id: 5,
        title: "MONOLITH",
        subtitle: "STUDY",
        category: "MINIMALISM",
        year: "2023",
        image: "/gallery/slide-5.jpg",
        description: "A series of minimal web designs focusing on typography and whitespace to create premium experiences.",
        details: {
            client: "Heritage Watches",
            services: ["Web Design", "Interface Crafting"],
            concept: "Monolith Study strips away the noise of traditional e-commerce to focus on the luxury and heritage of the products, using a 'less but better' approach."
        }
    },
    {
        id: 6,
        title: "VIBRANT",
        subtitle: "ECHOES",
        category: "MOTION",
        year: "2024",
        image: "/gallery/slide-6.jpg",
        description: "Explosive color palettes and dynamic motion graphics for the high-end fashion industry.",
        details: {
            client: "Velvet & Stone",
            services: ["Motion Design", "Color Grading", "Social Strategy"],
            concept: "Vibrant Echoes uses high-frequency visual stimulation to capture the attention of Gen Z audiences while maintaining a premium, luxury aesthetic."
        }
    }
];
