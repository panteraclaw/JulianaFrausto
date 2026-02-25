'use client';

import { useEffect, useState } from 'react';
import Flipbook from '../components/Flipbook';
import { artworkService } from '../lib/services';
import type { Artwork } from '../types';

export default function Home() {
  const [pages, setPages] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPages();
  }, []);

  async function loadPages() {
    try {
      const { data: allArt } = await artworkService.getAll();
      
      if (allArt) {
        // Filter artworks with category "flipbook" (case-insensitive)
        // and ensure orderIndex is not null
        const flipbookPages = allArt.filter(art => 
          art.category.toLowerCase().includes('flipbook') &&
          art.orderIndex !== null
        );
        setPages(flipbookPages);
      }
    } catch (error) {
      console.error('Error loading flipbook pages:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-2 h-2 bg-[#f4d03f] rounded-full animate-pulse" />
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Cargando obra...
          </span>
        </div>
      </div>
    );
  }

  return <Flipbook pages={pages} />;
}
