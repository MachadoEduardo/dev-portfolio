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

  if (!data?.isPlaying) return null;

  return (
    <motion.div 
  className="flex items-center gap-4 p-2 pr-4 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl"
>
      <div className="relative w-12 h-12">
        <img 
          src={data.albumImageUrl} 
          alt={data.title} 
          className="rounded-lg shadow-lg"
        />
        <div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1">
          <SpotifyIcon />
        </div>
      </div>

      <div className="flex flex-col min-w-30">
        <a 
          href={data.songUrl} 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-bold text-dev-black hover:underline truncate max-w-45"
        >
          {data.title}
        </a>
        <p className="text-xs text-zinc-400 truncate max-w-45">
          {data.artist}
        </p>
      </div>

      <div className="flex items-end gap-0.5 h-3 ml-2">
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            animate={{ height: [4, 12, 6, 12, 4] }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut" 
            }}
            className="w-1 bg-[#1DB954] rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
}

function SpotifyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.33c-.19.31-.59.41-.9.22-2.5-1.53-5.64-1.87-9.35-1.02-.35.08-.7-.14-.78-.49-.08-.35.14-.7.49-.78 4.07-.93 7.54-.54 10.32 1.17.31.19.41.59.22.9zm1.47-3.26c-.24.39-.75.52-1.14.28-2.86-1.76-7.23-2.27-10.61-1.24-.44.13-.91-.12-1.04-.56-.13-.44.12-.91.56-1.04 3.86-1.17 8.7-0.6 11.95 1.41.39.23.51.74.28 1.15zm.13-3.41C15.24 8.24 8.84 8.03 5.12 9.16c-.57.17-1.18-.15-1.36-.72-.17-.57.15-1.18.72-1.36 4.28-1.3 11.36-1.06 15.91 1.64.51.31.68.97.37 1.48-.31.51-.97.68-1.48.37z"/>
    </svg>
  );
}