// store/globalChatStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ChatMessage = {
  id: string;
  username: string;
  message: string;
  timestamp: number;
};

interface ChatState {
  username: string;
  messages: ChatMessage[];
  seenIds: Set<string>;

  setUsername: (name: string) => void;
  addMessage: (msg: ChatMessage) => void;
  sendMessage: (msg: ChatMessage) => void;
}

export const useGlobalChat = create<ChatState>()(
  persist(
    (set, get) => ({
      username: "",
      messages: [],
      seenIds: new Set(),

      setUsername: (name) => set({ username: name }),

      addMessage: (msg) => {
        const { messages, seenIds } = get();
        if (seenIds.has(msg.id)) return;

        const nextSeen = new Set(seenIds);
        nextSeen.add(msg.id);

        set({
          messages: [...messages, msg].slice(-400),
          seenIds: nextSeen,
        });
      },

      // 👇 injected later by listener
      sendMessage: () => {
        console.warn("sendMessage not initialized yet");
      },
    }),
    {
      name: "win95-global-chat5",
      partialize: (state) => ({
        username: state.username,
        messages: state.messages,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const rebuilt = new Set<string>();
        state.messages.forEach((m) => rebuilt.add(m.id));
        state.seenIds = rebuilt;
      },
    }
  )
);
