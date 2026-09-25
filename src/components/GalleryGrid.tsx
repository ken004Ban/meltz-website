"use client";

import { useEffect, useState } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import OptimizedImage from "@/components/OptimizedImage";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const selected = lightbox !== null ? filtered[lightbox] : null;

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setLightbox(null);
            }}
            className={`px-5 py-2.5 text-sm font-semibold transition-colors ${
              activeCategory === cat.id
                ? "bg-meltz-blue text-white"
                : "bg-white text-meltz-charcoal border border-gray-200 hover:border-meltz-medium/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setLightbox(index)}
            className={`group relative overflow-hidden bg-meltz-light text-left focus:outline-none focus:ring-2 focus:ring-meltz-medium ${
              img.wide ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
            aria-label={`View larger: ${img.caption}`}
          >
            <div className="relative w-full">
              <div className="aspect-[4/3] w-full">
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-meltz-blue/0 group-hover:bg-meltz-blue/40 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
                  {img.caption}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)
              );
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>
          <div
            className="max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <OptimizedImage
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="text-center text-white/80 text-sm mt-4">
              {selected.caption}
            </p>
            <p className="text-center text-white/40 text-xs mt-1">
              {lightbox! + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
