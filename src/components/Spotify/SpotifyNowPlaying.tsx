'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { NowPlayingSong } from '@/src/types/spotify';

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlayingSong | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await fetch('/api/now-playing');
      const json = await res.json();
      setData(json);
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data || !data.title) return null;

  return (
    
    <motion.div className="flex items-center gap-4 p-2 pr-4 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-md">
      <div className="relative w-12 h-12">
        <img src={data.albumImageUrl} className={`rounded-lg ${!data.isPlaying && 'grayscale opacity-80'}`} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <a href={data.songUrl} className="text-sm font-bold text-dev-black hover:underline truncate max-w-37.5">
            {data.title}
          </a>
          {data.isPlaying && (
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          )}
        </div>
        <p className="text-xs text-zinc-400">
          {data.isPlaying ? data.artist : `Última ouvida: ${data.artist}`}
        </p>
      </div>

      {/* Equalizador: Só anima se isPlaying for true */}
      <div className="flex items-end gap-0.5 h-3 ml-2">
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            animate={data.isPlaying ? { height: [4, 12, 6, 12, 4] } : { height: 4 }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            className={`w-1 rounded-full ${data.isPlaying ? 'bg-[#1DB954]' : 'bg-zinc-600'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}