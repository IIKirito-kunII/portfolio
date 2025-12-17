import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// A single, shared HTMLAudioElement + playback state for the whole app
// Any component can subscribe and control playback; UI always reflects real audio state

const useAudioStore = create(
  immer((set, get) => ({
    // Core
    audio: null, // HTMLAudioElement (singleton)
    playlist: [], // array of songs [{ id, title, src, cover }]
    currentIndex: 0,
    initialized: false,

    // Reactive state (kept in sync with real audio via events)
    isPlaying: false, // mirrors !audio.paused
    currentTime: 0,
    duration: 0,
    volume: 1,
    muted: false,
    ended: false,

    // Initialize once with a playlist
    init: (songs) =>
      set((state) => {
        if (state.initialized) return; // no-op if already set up

        const audio = new Audio();
        audio.preload = "auto";
        audio.src = songs?.[0]?.src || "";
        audio.volume = state.volume;
        audio.muted = state.muted;

        // Event listeners to sync real audio state back into store
        const onPlay = () =>
          set((s) => {
            s.isPlaying = true;
            s.ended = false;
          });
        const onPause = () =>
          set((s) => {
            s.isPlaying = false;
          });
        const onTime = () =>
          set((s) => {
            s.currentTime = audio.currentTime || 0;
          });
        const onLoaded = () =>
          set((s) => {
            s.duration = audio.duration || 0;
          });
        const onEnded = () => {
          const { playlist, currentIndex, audio } = get();
          if (!playlist.length) return;

          audio.removeEventListener("pause", audio.__listeners.onPause);

          const nextIndex = (currentIndex + 1) % playlist.length;
          get().setIndex(nextIndex, { autoplay: true });

          setTimeout(() => {
            audio.addEventListener("pause", audio.__listeners.onPause);
          }, 50);
        };

        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);
        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("ended", onEnded);

        // Save listeners for cleanup if ever needed
        audio.__listeners = { onPlay, onPause, onTime, onLoaded, onEnded };

        state.audio = audio;
        state.playlist = Array.isArray(songs) ? songs : [];
        state.currentIndex = 0;
        state.initialized = true;
        state.duration = 0;
        state.currentTime = 0;
        state.isPlaying = false;
      }),

    // Controls
    play: async () => {
      const { audio } = get();
      if (!audio) return;
      try {
        await audio.play();
      } catch (_) {}
    },
    pause: () => {
      const { audio } = get();
      if (!audio) return;
      audio.pause();
    },
    togglePlay: () => {
      const { audio } = get();
      if (!audio) return;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    seek: (time) => {
      const { audio } = get();
      if (!audio || Number.isNaN(time)) return;
      audio.currentTime = Math.max(
        0,
        Math.min(time, audio.duration || Number.MAX_SAFE_INTEGER)
      );
    },
    setVolume: (v) =>
      set((state) => {
        const volume = Math.max(0, Math.min(1, Number(v)));
        state.volume = Number.isNaN(volume) ? state.volume : volume;
        if (state.audio) state.audio.volume = state.volume;
        if (state.volume > 0 && state.muted) state.muted = false;
      }),
    toggleMute: () =>
      set((state) => {
        state.muted = !state.muted;
        if (state.audio) state.audio.muted = state.muted;
      }),
    setMuted: (m) =>
      set((state) => {
        state.muted = Boolean(m);
        if (state.audio) state.audio.muted = state.muted;
      }),

    // Track switching
    setIndex: async (idx, { autoplay } = {}) => {
      set((state) => {
        const next =
          ((idx % state.playlist.length) + state.playlist.length) %
          state.playlist.length;
        state.currentIndex = next;
        if (state.audio) {
          state.audio.pause();
          state.audio.src = state.playlist?.[next]?.src || "";
          state.audio.currentTime = 0;
          state.currentTime = 0;
          state.duration = 0;
          state.ended = false;
        }
      });
      const shouldAutoplay = autoplay ?? get().isPlaying; // continue if was playing
      if (shouldAutoplay) await get().play();
    },
    next: () => {
      const { currentIndex, playlist } = get();
      if (!playlist.length) return;
      return get().setIndex((currentIndex + 1) % playlist.length);
    },
    prev: () => {
      const { currentIndex, playlist } = get();
      if (!playlist.length) return;
      return get().setIndex(
        (currentIndex - 1 + playlist.length) % playlist.length
      );
    },
  }))
);

export default useAudioStore;
