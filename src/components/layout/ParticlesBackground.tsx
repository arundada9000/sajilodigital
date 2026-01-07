"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { usePathname } from "next/navigation";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => {
        const isServices = pathname === "/services";
        const isGallery = pathname === "/gallery";

        // Base config (Minimal stars)
        const baseConfig = {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: true,
                    outModes: {
                        default: "out" as const,
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        };

        if (isServices) {
            // Tech vibe: Faster, cyan/blue links
            return {
                ...baseConfig,
                particles: {
                    ...baseConfig.particles,
                    move: { ...baseConfig.particles.move, speed: 2 },
                    color: { value: "#06b6d4" },
                    links: { ...baseConfig.particles.links, color: "#06b6d4", opacity: 0.2 },
                    number: { ...baseConfig.particles.number, value: 60 }
                }
            }
        }

        if (isGallery) {
            // Artsy: Slow, larger nodes, no links
            return {
                ...baseConfig,
                particles: {
                    ...baseConfig.particles,
                    move: { ...baseConfig.particles.move, speed: 0.2, direction: "top" as const },
                    size: { value: { min: 1, max: 5 } },
                    links: { enable: false },
                    number: { ...baseConfig.particles.number, value: 30 },
                    opacity: { value: { min: 0.1, max: 0.5 } }
                }
            }
        }

        return baseConfig;
    }, [pathname]);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10 pointer-events-none"
            options={options}
        />
    );
}
