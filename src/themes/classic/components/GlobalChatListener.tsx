// components/GlobalChatListener.tsx
import { useAblyChat } from "../utils/useAbly";

export function GlobalChatListener() {
  useAblyChat(); // no UI, just listener
  return null;
}
