import { getNowPlaying, getRecentlyPlayed } from '@/src/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await getNowPlaying();
    

    // Se estiver tocando algo agora
    if (response.status === 200) {
      const song = await response.json();
      if (song && song.item) {
        return NextResponse.json({
          albumImageUrl: song.item.album.images[0].url,
          artist: song.item.artists.map((a: any) => a.name).join(', '),
          isPlaying: true,
          songUrl: song.item.external_urls.spotify,
          title: song.item.name,
        });
      }
    }

    // Se NÃO estiver tocando nada, tenta o Recently Played
    const recentRes = await getRecentlyPlayed();
    const data = await recentRes.json();

      console.log("Dados do Spotify:", data);

    // Validação CRÍTICA: Verifica se 'items' existe e tem conteúdo
    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ isPlaying: false });
    }

    const lastSong = data.items[0].track;

    return NextResponse.json({
      albumImageUrl: lastSong.album.images[0].url,
      artist: lastSong.artists.map((a: any) => a.name).join(', '),
      isPlaying: false,
      songUrl: lastSong.external_urls.spotify,
      title: lastSong.name,
    });

  } catch (error) {
    console.error("Erro na API Spotify:", error);
    
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }
}