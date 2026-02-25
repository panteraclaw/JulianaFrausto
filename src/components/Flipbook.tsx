'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipbookPage {
  id: string;
  imageUrl: string;
  title: string;
  description: string | null;
  year: number | null;
  medium: string | null;
  technique: string | null;
  orderIndex: number | null;
}

interface FlipbookProps {
  pages: FlipbookPage[];
}

export default function Flipbook({ pages }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  // Sort pages by orderIndex (handle null values by putting them at the end)
  const sortedPages = [...pages].sort((a, b) => {
    if (a.orderIndex === null) return 1;
    if (b.orderIndex === null) return -1;
    return a.orderIndex - b.orderIndex;
  });

  const nextPage = () => {
    if (currentPage < sortedPages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'i' || e.key === 'I') setShowDetails(!showDetails);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, showDetails]);

  if (sortedPages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e0d] text-white">
        <p className="text-sm uppercase tracking-widest opacity-50">
          No hay páginas disponibles aún
        </p>
      </div>
    );
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const currentPageData = sortedPages[currentPage];

  return (
    <div className="min-h-screen bg-[#0a0e0d] flex flex-col relative">
      {/* Watercolor background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-[#3b7a5c]/20 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-white uppercase">
          Juliana Frausto
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-gray-400 tracking-widest uppercase hover:text-[#3b7a5c] transition-colors"
          >
            {showDetails ? 'Ocultar' : 'Info'} (I)
          </button>
          <span className="text-xs text-gray-400 tracking-widest">
            {currentPage + 1} / {sortedPages.length}
          </span>
        </div>
      </header>

      {/* Flipbook Container - Book Layout */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 perspective-1000 relative z-10">
        <div className="relative w-full max-w-7xl flex gap-8 md:gap-12">
          
          {/* Left Page - Image */}
          <div className="flex-1 relative aspect-[3/4]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`image-${currentPage}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  rotateY: { duration: 0.5 },
                }}
                className="absolute inset-0 bg-[#0f1312] rounded-lg overflow-hidden shadow-2xl border border-[#1a2a24]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={currentPageData.imageUrl}
                  alt={currentPageData.title || `Page ${currentPage + 1}`}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Page - Details */}
          <AnimatePresence mode="wait">
            {showDetails && (
              <motion.div
                key={`details-${currentPage}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative aspect-[3/4] bg-[#0f1312] rounded-lg border border-[#1a2a24] p-8 md:p-12 flex flex-col justify-center shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
                    {currentPageData.title}
                  </h2>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[#3b7a5c] to-transparent" />

                  {/* Metadata */}
                  <div className="space-y-3 text-sm md:text-base">
                    {currentPageData.year && (
                      <div className="flex gap-3">
                        <span className="text-[#3b7a5c] font-medium uppercase tracking-widest text-xs">
                          Año:
                        </span>
                        <span className="text-gray-300">{currentPageData.year}</span>
                      </div>
                    )}

                    {currentPageData.technique && (
                      <div className="flex gap-3">
                        <span className="text-[#3b7a5c] font-medium uppercase tracking-widest text-xs">
                          Técnica:
                        </span>
                        <span className="text-gray-300">{currentPageData.technique}</span>
                      </div>
                    )}

                    {currentPageData.medium && (
                      <div className="flex gap-3">
                        <span className="text-[#3b7a5c] font-medium uppercase tracking-widest text-xs">
                          Medio:
                        </span>
                        <span className="text-gray-300">{currentPageData.medium}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {currentPageData.description && (
                    <>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#1a2a24] to-transparent" />
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {currentPageData.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#3b7a5c]/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-[#1a2a24] flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#3b7a5c] hover:border-[#3b7a5c] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === sortedPages.length - 1}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-[#1a2a24] flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#3b7a5c] hover:border-[#3b7a5c] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer / Page Indicator */}
      <div className="fixed bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent z-50">
        <div className="flex justify-center items-center gap-2">
          {sortedPages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentPage 
                  ? 'w-8 bg-[#3b7a5c]' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Instructions */}
        <p className="text-center text-[9px] text-gray-500 mt-4 uppercase tracking-widest">
          Flechas para navegar • I para mostrar/ocultar info
        </p>
      </div>
    </div>
  );
}
