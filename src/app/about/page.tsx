'use client';

import { Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import BrushStroke from '../../components/ui/BrushStroke';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 sacred-minimal">
      <div className="content-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-8">
              <div className="sacred-dot animate-subtle-glow" />
              <div className="sacred-dot animate-subtle-glow" style={{ animationDelay: '1s' }} />
              <div className="sacred-dot animate-subtle-glow" style={{ animationDelay: '2s' }} />
            </div>
            <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-gray-800">Acerca de</h1>
            <div className="w-32 h-3 mx-auto my-8">
              <BrushStroke variant="short" className="w-full h-full" />
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg font-light leading-relaxed text-[#8b7d7b]">
              Espacio digital para la obra artística de Juliana Frausto.
            </p>
            <p className="text-lg font-light leading-relaxed text-[#8b7d7b]">
              Un flipbook interactivo que alberga la colección de obras visuales, 
              explorando la intersección entre el arte digital y la narrativa visual.
            </p>
            <p className="text-lg font-light leading-relaxed text-[#8b7d7b]">
              Cada página es una ventana a diferentes mundos, estilos y momentos creativos.
            </p>
          </div>

          <div className="mt-16 glass-minimal p-12 rounded-lg">
            <h2 className="elegant-text text-sm mb-8 text-center">Contacto</h2>
            <div className="space-y-6 max-w-md mx-auto">
              <a href="mailto:julianafrausto2211@gmail.com" className="flex items-center justify-center gap-3 btn-elegant w-full">
                <Mail size={18} />julianafrausto2211@gmail.com
              </a>
              <a href="https://www.instagram.com/jules.frausto/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 btn-elegant w-full">
                <Instagram size={18} />@jules.frausto
              </a>
            </div>
            <div className="mt-12 text-center">
              <p className="text-sm font-light text-[#8b7d7b] leading-relaxed">
                Para colaboraciones, preguntas o comentarios sobre la obra,<br />
                no dudes en contactar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
