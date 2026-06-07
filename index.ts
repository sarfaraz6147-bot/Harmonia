// ─── Song & Music Types ─────────────────────────────────────────────────────

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  src: string;
  duration: number; // seconds
  genre: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  cover?: string;
  songs: Song[];
  createdAt: string;
  userId: string;
}

export interface RecentlyPlayed {
  song: Song;
  playedAt: string;
}

// ─── Audio Player State ──────────────────────────────────────────────────────

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isShuffled: boolean;
  repeatMode: 'none' | 'one' | 'all';
  queue: Song[];
  queueIndex: number;
}

export type PlayerAction =
  | { type: 'PLAY_SONG'; payload: { song: Song; queue?: Song[] } }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'NEXT_SONG' }
  | { type: 'PREV_SONG' }
  | { type: 'SET_CURRENT_TIME'; payload: number }
  | { type: 'SET_DURATION'; payload: number }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'TOGGLE_REPEAT' }
  | { type: 'SET_QUEUE'; payload: Song[] };

// ─── Auth & User Types ───────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface FavoriteItem {
  id: string;
  userId: string;
  songId: string;
  song: Song;
  addedAt: string;
}

// ─── Supabase Database Types ─────────────────────────────────────────────────

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          username: string;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          username?: string;
          avatar_url?: string | null;
        };
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          song_id: string;
          added_at: string;
        };
        Insert: {
          user_id: string;
          song_id: string;
          added_at?: string;
        };
        Update: {
          song_id?: string;
        };
      };
      playlists: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          cover: string | null;
          songs: string[]; // array of song IDs
          created_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
          description?: string | null;
          cover?: string | null;
          songs?: string[];
          created_at?: string;
        };
        Update: {
          name?: string;
          description?: string | null;
          cover?: string | null;
          songs?: string[];
        };
      };
      recently_played: {
        Row: {
          id: string;
          user_id: string;
          song_id: string;
          played_at: string;
        };
        Insert: {
          user_id: string;
          song_id: string;
          played_at?: string;
        };
        Update: {
          played_at?: string;
        };
      };
    };
  };
}

// ─── UI Helper Types ─────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
