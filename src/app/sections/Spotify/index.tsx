"use client";

import { useRef } from "react";
import SpotifyNowPlaying from "@/src/components/Spotify/SpotifyNowPlaying";
import { motion } from "motion/react";

export default function SpotifySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section 
      id="spotify" 
      ref={sectionRef} 
      className="section-spotify"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Lado Esquerdo: Título e Contexto */}
          <div className="space-y-1">
            <span className="section-top-legend">
              Spotify Status
            </span>
            <h2 className="text-2xl font-bold text-deb-black tracking-tight">
              O que estou ouvindo <span className="text-dev-secondary">agora?</span>
            </h2>
          </div>

          {/* Lado Direito: O Widget */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="shrink-0"
          >
            <SpotifyNowPlaying />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}