"use client";
import Navigation from "@/components/Navigation";
import FullscreenSlider from "@/components/FullscreenSlider";
import "./Index.css";

const gallery = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      <Navigation />
      <FullscreenSlider />
    </main>
  );
};

export default gallery;
