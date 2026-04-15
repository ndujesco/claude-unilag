import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Claude Builder Club UNILAG",
  description: "Photos from our physical meetings at the University of Lagos.",
};

// All gallery images — preloaded so the browser fetches them before they're needed
const allGalleryImages = [
  "/gallery/m1-1.jpg", "/gallery/m1-2.jpg", "/gallery/m1-3.jpg",
  "/gallery/m2-1.jpg", "/gallery/m2-2.jpg", "/gallery/m2-3.jpg",
  "/gallery/m2-4.jpg", "/gallery/m2-5.jpg", "/gallery/m2-6.jpg", "/gallery/m2-7.jpg",
  "/gallery/m3-1.jpg", "/gallery/m3-2.jpg", "/gallery/m3-3.jpg",
  "/gallery/m3-4.jpg", "/gallery/m3-5.jpg", "/gallery/m3-6.jpg",
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Preload all gallery images so tab-switching feels instant */}
      {allGalleryImages.map((src) => (
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      <Navbar />
      <div className="pt-16">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}
