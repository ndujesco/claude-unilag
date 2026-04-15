"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/*
 * Image file locations — save your photos to public/gallery/:
 *
 * 1st Physical Meeting (3 photos):
 *   public/gallery/m1-1.jpg  public/gallery/m1-2.jpg  public/gallery/m1-3.jpg
 *
 * 2nd Physical Meeting — Sat 28 Feb 2026 (7 photos):
 *   public/gallery/m2-1.jpg … public/gallery/m2-7.jpg
 *
 * 3rd Physical Meeting — Sat 11 Apr 2026 (6 photos):
 *   public/gallery/m3-1.jpg … public/gallery/m3-6.jpg
 */

interface Meeting {
  id: number;
  label: string;
  subtitle: string;
  date: string;
  photos: string[];
}

const meetings: Meeting[] = [
  {
    id: 1,
    label: "1st Physical Meeting",
    subtitle: "Meeting #1",
    date: "Saturday, February 14 2026",
    photos: ["/gallery/m1-1.jpg", "/gallery/m1-2.jpg", "/gallery/m1-3.jpg"],
  },
  {
    id: 2,
    label: "2nd Physical Meeting",
    subtitle: "Meeting #3",
    date: "Saturday, February 28 2026",
    photos: [
      "/gallery/m2-1.jpg",
      "/gallery/m2-2.jpg",
      "/gallery/m2-3.jpg",
      "/gallery/m2-4.jpg",
      "/gallery/m2-5.jpg",
      "/gallery/m2-6.jpg",
      "/gallery/m2-7.jpg",
    ],
  },
  {
    id: 3,
    label: "3rd Physical Meeting",
    subtitle: "Meeting #5",
    date: "Saturday, April 11 2026",
    photos: [
      "/gallery/m3-1.jpg",
      "/gallery/m3-2.jpg",
      "/gallery/m3-3.jpg",
      "/gallery/m3-4.jpg",
      "/gallery/m3-5.jpg",
      "/gallery/m3-6.jpg",
    ],
  },
];

interface LightboxProps {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
        {index + 1} / {photos.length}
      </span>

      {/* Prev */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[index]}
          alt={`Photo ${index + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
          draggable={false}
        />
      </div>

      {/* Next */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  );
}

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null);

  const openLightbox = useCallback((photos: string[], index: number) => {
    setLightbox({ photos, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevPhoto = useCallback(() => {
    if (!lightbox) return;
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length } : null
    );
  }, [lightbox]);

  const nextPhoto = useCallback(() => {
    if (!lightbox) return;
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.photos.length } : null
    );
  }, [lightbox]);

  const current = meetings[activeTab];

  return (
    <>
      <section id="gallery" className="py-24 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d97757] mb-3 block">
              In the Room
            </span>
            <h2 className="heading text-3xl sm:text-4xl font-bold text-[#141413] mb-4 leading-tight">
              Our meetings, in pictures.
            </h2>
            <p className="body-editorial text-lg text-[#b0aea5] max-w-xl mx-auto leading-relaxed">
              A look at what happens when curious UNILAG students get together to build with AI.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {meetings.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-[#141413] text-white shadow-md"
                    : "bg-white border border-[#e8e6dc] text-[#555] hover:border-[#141413] hover:text-[#141413]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Meeting meta */}
          <div className="flex items-center justify-between mb-6 px-1">
            <div>
              <p className="text-sm font-semibold text-[#141413]">{current.label}</p>
              {current.date && (
                <p className="text-xs text-[#b0aea5] mt-0.5">{current.date}</p>
              )}
            </div>
            <span className="text-xs text-[#b0aea5] font-medium">
              {current.photos.length} photos
            </span>
          </div>

          {/* Photo grid */}
          <div
            className={`grid gap-3 ${
              current.photos.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : current.photos.length <= 4
                ? "grid-cols-2 sm:grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
            }`}
          >
            {current.photos.map((src, i) => (
              <button
                key={src}
                onClick={() => openLightbox(current.photos, i)}
                className={`group relative overflow-hidden rounded-2xl bg-[#e8e6dc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97757] ${
                  // Make first photo of 7-photo grid span 2 cols on sm+
                  current.photos.length === 7 && i === 0
                    ? "sm:col-span-2 aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
                aria-label={`Open photo ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${current.label} photo ${i + 1}`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
