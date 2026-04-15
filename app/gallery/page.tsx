import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Claude Builder Club UNILAG",
  description: "Photos from our physical meetings at the University of Lagos.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <div className="pt-16">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}
