'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipbookPage {
  id: string;
  imageUrl: string;
  title: string;
  orderIndex: number | null;
}

interface FlipbookProps {
  pages: FlipbookPage[];
}

export default function Flipbook({ pages }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

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
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  if (sortedPages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
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
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-white uppercase">
          Juliana Frausto
        </h1>
        <span className="text-xs text-gray-400 tracking-widest">
          {currentPage + 1} / {sortedPages.length}
        </span>
      </header>

      {/* Flipbook Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 perspective-1000">
        <div className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
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
              className="absolute inset-0 bg-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl border border-[#1a1a1a]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image
                src={currentPageData.imageUrl}
                alt={currentPageData.title || `Page ${currentPage + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-[#1a1a1a] flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#8a1c1c] hover:border-[#8a1c1c] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === sortedPages.length - 1}
            className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-[#1a1a1a] flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#8a1c1c] hover:border-[#8a1c1c] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer / Page Indicator */}
      <div className="fixed bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
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
                  ? 'w-8 bg-[#8a1c1c]' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile Instructions */}
        <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest">
          Swipe or use arrows to navigate
        </p>
      </div>
    </div>
  );
}
