import { getNowPlaying } from '@/src/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  return NextResponse.json({
    albumImageUrl: song.item.album.images[0].url,
    artist: song.item.artists.map((a: any) => a.name).join(', '),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name,
  });
}