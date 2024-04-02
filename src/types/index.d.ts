export {};

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any;
    Spotify: any;
  }

  interface Playlist {
    name: string;
    imageURL: string;
  }

  interface Playlists {
    total: number;
    items: Playlist[];
  }
}
