// utils/useAblyChat.ts
import { useEffect, useRef } from "react";
import Ably, { Realtime, type Message } from "ably";
import { useGlobalChat } from "../store/globalChatStore";
import type { ChatMessage } from "../store/globalChatStore";

const CHANNEL = "win95-global-chat5";
const KEY = import.meta.env.VITE_ABLY_KEY;

export function useAblyChat() {
  const addMessage = useGlobalChat((s) => s.addMessage);
  const setSendMessage = useGlobalChat.setState;

  const clientRef = useRef<Realtime | null>(null);

  useEffect(() => {
    if (clientRef.current) return;

    const client = new Ably.Realtime(KEY);
    clientRef.current = client;

    const channel = client.channels.get(CHANNEL);

    // 🔴 live
    channel.subscribe((msg: Message) => {
      if (msg.data) addMessage(msg.data as ChatMessage);
    });

    // 🔴 history
    (async () => {
      const page = await channel.history({
        limit: 400,
        direction: "backwards",
      });
      page.items.reverse().forEach((msg) => {
        if (msg.data) addMessage(msg.data as ChatMessage);
      });
    })();

    // 🔑 inject sendMessage
    setSendMessage({
      sendMessage: (msg: ChatMessage) => {
        channel.publish("chat", msg);
      },
    });

    return () => {
      channel.unsubscribe();
      client.close();
      clientRef.current = null;
    };
  }, [addMessage, setSendMessage]);
}
