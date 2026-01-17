export interface ProjectActivity {
    time: string;
    message: string;
    type: "code" | "design" | "deploy" | "milestone";
}

export interface WorkingProject {
    id: string;
    name: string;
    client: string;
    type: string;
    progress: number;
    status: "research" | "design" | "development" | "qa" | "maintenance";
    startDate: string;
    estimatedLaunch: string;
    activities: ProjectActivity[];
}

export const activeProjects: WorkingProject[] = [
    {
        id: "proj-001",
        name: "FinTech Hub Ecosystem",
        client: "Global Capital Inc.",
        type: "Web Application",
        progress: 75,
        status: "development",
        startDate: "2026-01-05",
        estimatedLaunch: "2026-02-15",
        activities: [
            { time: "2 hours ago", message: "Optimized multi-currency transaction engine", type: "code" },
            { time: "Yesterday", message: "Security audit of payment gateway", type: "deploy" },
            { time: "3 days ago", message: "User dashboard UI refinement", type: "design" },
        ],
    },
    {
        id: "proj-002",
        name: "Sajilo Sahayata V2",
        client: "Internal Product",
        type: "Disaster Management App",
        progress: 40,
        status: "design",
        startDate: "2026-01-12",
        estimatedLaunch: "2026-03-01",
        activities: [
            { time: "1 hour ago", message: "Mapping system core integration", type: "code" },
            { time: "4 hours ago", message: "Designing real-time alert icons", type: "design" },
            { time: "Yesterday", message: "Initial database schema finalized", type: "milestone" },
        ],
    },
    {
        id: "proj-003",
        name: "E-Commerce Luxury Portal",
        client: "Silk & Stone",
        type: "E-Commerce",
        progress: 15,
        status: "research",
        startDate: "2026-01-15",
        estimatedLaunch: "2026-03-20",
        activities: [
            { time: "3 hours ago", message: "Competitor analysis for luxury brands", type: "milestone" },
            { time: "Yesterday", message: "Initial stakeholder meeting", type: "milestone" },
        ],
    },
];
