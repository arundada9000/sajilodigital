"use client";

import React from "react";

interface GrainProps {
    opacity?: number;
    zIndex?: number;
}

const Grain: React.FC<GrainProps> = ({ opacity = 0.03, zIndex = 50 }) => {
    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex,
                opacity,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />
    );
};

export default Grain;
