"use client";

import { useState } from "react";
import GalleryV3 from "../../components/GalleryV3";
import CustomCursor from "../../../components/CustomCursor";
import Navigation from "../../../components/Navigation";
import Grain from "../../components/ui/Grain";
import "./Index.css";

const GalleryClient = () => {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <main className="relative w-full h-screen bg-black selection:bg-white selection:text-black">
            <CustomCursor />
            <Grain opacity={0.03} />
            <Navigation onAboutClick={() => setShowAbout(true)} />
            <GalleryV3 showAbout={showAbout} setShowAbout={setShowAbout} />
        </main>
    );
};

export default GalleryClient;
