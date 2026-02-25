'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConnectWalletWrapper from './ConnectWalletWrapper';
import BrushStroke from './BrushStroke';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for monastic fading
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', sub: 'Inicio' },
    { href: '/portfolio', label: 'Portfolio', sub: 'Galería' },
    { href: '/blog', label: 'Blog', sub: 'Escritos' },
    { href: '/about', label: 'Acerca de', sub: 'Sobre Juliana' },
  ];

  return (
    <>
      {/* The Monastic Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 mix-blend-difference' : 'py-8'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="content-container relative flex items-center justify-between">

          {/* Left Sigil (Optional/Hidden on desktop if centered) */}
          <div className="hidden md:block w-12" />

          {/* Central Totem - absolutely centered */}
          <Link
            href="/"
            className="group flex flex-col items-center absolute left-1/2 -translate-x-1/2"
            style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? 'none' : 'auto', transition: 'opacity 0.5s ease, transform 0.4s ease' }}
          >
            <span className={`font-light tracking-[0.3em] uppercase transition-all duration-500 ${scrolled ? 'text-xs text-gray-800' : 'text-lg md:text-xl text-gray-800'}`}>
              Juliana Frausto
            </span>
            <div className={`transition-all duration-700 overflow-hidden ${scrolled ? 'w-0 h-0' : 'w-full h-2 mt-3'}`}>
              <BrushStroke variant="short" className="w-full h-full" />
            </div>
          </Link>

          {/* Right Side - Menu Only */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 text-gray-800 hover:text-[#f4d03f] transition-colors"
            >
              <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Open
              </span>
              <div className="relative">
                <Menu size={24} strokeWidth={1} className="transition-transform duration-500 group-hover:rotate-90" />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* The Void Portal (Full Screen Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
            className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 md:top-12 md:right-12 text-white/50 hover:text-[#f4d03f] transition-colors group"
            >
              <div className="flex flex-col items-center gap-2">
                <X size={32} strokeWidth={0.5} className="transition-transform duration-500 group-hover:rotate-90" />
                <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
              </div>
            </button>

            {/* Menu Items */}
            <nav className="relative z-10 flex flex-col items-center space-y-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex flex-col items-center"
                  >
                    <span className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-800 group-hover:text-[#f4d03f] transition-colors duration-500">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#404040] tracking-widest uppercase mt-2 opacity-70 group-hover:opacity-100 transition-all duration-500">
                      {item.sub}
                    </span>

                    {/* Hover Brushstroke */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-2 group-hover:w-24 transition-all duration-500 overflow-hidden">
                      <BrushStroke variant="short" className="w-full h-full" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Wallet Connect in Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, delay: navItems.length * 0.1 + 0.1 }}
              className="mt-12 pt-8 border-t border-[#1a1a1a]"
            >
              <ConnectWalletWrapper />
            </motion.div>

            {/* Decorative Thread */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-12 top-0 w-2 opacity-30 hidden md:block"
            >
              <BrushStroke variant="vertical" className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
