import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, LayoutGrid, Sliders } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clubData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'filmstrip'>('grid');

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [selectedImageIndex]);

  const nextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, prevImage, nextImage]);

  return (
    <section id="gallery" className="py-20 relative bg-[#08090e]">
      <div className="absolute inset-0 space-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL CHRONICLES ({GALLERY_ITEMS.length} SHOTS)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">GALLERY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore our aerospace journey through authentic visuals and memorable milestones
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-end mb-8">
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid ({GALLERY_ITEMS.length})</span>
            </button>
            <button
              onClick={() => setViewMode('filmstrip')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'filmstrip' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Scroll Strip</span>
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400/60 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/dfcd986e-c64a-4c7d-a2d1-f96792d8f96f.png';
                  }}
                />

                {/* Subtle vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Caption Title */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-left">
                  <span className="text-xs font-display font-medium text-white line-clamp-1 group-hover:text-amber-300 transition-colors drop-shadow">
                    {item.title}
                  </span>
                  <div className="p-1 rounded bg-black/60 border border-amber-500/40 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filmstrip View */}
        {viewMode === 'filmstrip' && (
          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x no-scrollbar">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative min-w-[280px] sm:min-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400 shadow-md transition-all cursor-pointer snap-center shrink-0"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/dfcd986e-c64a-4c7d-a2d1-f96792d8f96f.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                      ARCHIVE #{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                  </div>
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Photo"
            className="absolute left-4 z-50 p-3 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Photo"
            className="absolute right-4 z-50 p-3 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center relative select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[75vh]">
              <img
                src={GALLERY_ITEMS[selectedImageIndex].src}
                alt={GALLERY_ITEMS[selectedImageIndex].alt}
                className="max-w-full max-h-[72vh] object-contain mx-auto"
              />
            </div>

            {/* Bottom Details Bar */}
            <div className="w-full mt-4 flex items-center justify-between text-xs font-mono text-slate-300 px-2">
              <div>
                <span className="text-amber-400 font-bold mr-2">
                  #{selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <span className="font-display font-semibold text-white text-sm">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <span>Use ← → Arrow Keys to navigate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
