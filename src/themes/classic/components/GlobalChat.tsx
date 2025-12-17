import { useEffect, useRef, useState } from "react";
import { Button, TextArea } from "@react95/core";
import { useGlobalChat } from "../store/globalChatStore";
import { v4 as uuidv4 } from "uuid";
import "./scroll.css";

export default function GlobalChat() {
  const messages = useGlobalChat((s) => s.messages);
  const username = useGlobalChat((s) => s.username);
  const setUsername = useGlobalChat((s) => s.setUsername);
  const sendMessage = useGlobalChat((s) => s.sendMessage);

  const [messageText, setMessageText] = useState("");
  const [nameText, setNameText] = useState("");

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const handleSend = () => {
    if (!messageText.trim()) return;

    const finalUsername = username || nameText.trim() || "Unknown";

    if (!username) {
      setUsername(finalUsername);
      setNameText("");
    }

    sendMessage({
      id: uuidv4(),
      username: finalUsername,
      message: messageText.trim(),
      timestamp: Date.now(),
    });

    setMessageText("");
  };

  return (
    <div style={{ margin: "4px" }}>
      {/* Messages */}
      <div
        className="win95-scroll"
        style={{
          overflowY: "scroll",
          background: "var(--win95-bg)",
          borderTop: "2px solid var(--win95-darker)",
          borderLeft: "2px solid var(--win95-darker)",
          borderRight: "2px solid var(--win95-light)",
          borderBottom: "2px solid var(--win95-light)",
          width: "416px",
          height: "400px",
          padding: "2px",
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              background: "white",
              borderTop: "2px solid var(--win95-light)",
              borderLeft: "2px solid var(--win95-light)",
              borderRight: "2px solid var(--win95-darker)",
              borderBottom: "2px solid var(--win95-darker)",
              margin: "2px",
              padding: "2px 6px",
              width: "fit-content",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
              whiteSpace: "pre-wrap",
            }}
          >
            <b>{m.username}:</b> {m.message}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div
        style={{
          background: "var(--win95-bg)",
          padding: "6px",
          margin: "8px 0px 0px 0px",
          width: "410`px",
        }}
      >
        {/* Input */}
        <div>
          <TextArea
            style={{
              width: "98%",
              resize: "none",
              background: "lightyellow",
            }}
            rows={4}
            placeholder="Enter message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "4px",
          }}
        >
          {/* Username */}
          <TextArea
            rows={1}
            style={{
              resize: "none",
              padding: "2px",
              background: "lightyellow",
            }}
            placeholder="Enter username"
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
          />
          <Button onClick={handleSend} disabled={!messageText.trim()}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
