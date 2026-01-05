import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "An immersive visual journey through our creative archives and digital artistry.",
};

const GalleryPage = () => {
  return <GalleryClient />;
};

export default GalleryPage;
