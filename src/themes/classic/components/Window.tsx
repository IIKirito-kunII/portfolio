import React, { useEffect, type ComponentType } from "react";
import { Modal, Frame } from "@react95/core";
import WindowBar from "./WindowBar";

interface WindowProps {
  id: string;
  title: string;
  icon: any;
  position: { x: number; y: number };
  width?: string;
  height?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Window({
  id,
  title,
  icon,
  position,
  width,
  height,
  children,
  onClose,
}: WindowProps) {
  useEffect(() => {
    const handler = (event: any) => {
      if (event.data.type === "dino_key") {
        const evt = new KeyboardEvent("keydown", {
          key: event.data.key,
          code: event.data.code,
          bubbles: true,
        });
        document.dispatchEvent(evt);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <SafeModal
      id={id}
      title={title}
      icon={icon}
      dragOptions={{ defaultPosition: position }}
      titleBarOptions={[<WindowBar key="bar" id={id} onClose={onClose} />]}
    >
      <Modal.Content
        width={width}
        height={height}
        boxShadow="$in"
        bgColor="white"
        p="16px"
      >
        <Frame display="flex" flexDirection="column" gap="8px">
          {children}
        </Frame>
      </Modal.Content>
    </SafeModal>
  );
}

const SafeModal = Modal as unknown as ComponentType<any>;
