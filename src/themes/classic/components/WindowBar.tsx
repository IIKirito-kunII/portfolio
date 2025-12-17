// src/components/WindowBar.tsx
import { TitleBar, Modal } from "@react95/core";

interface Props {
  id: string;
  onClose: () => void;
}

export default function WindowBar({ onClose }: Props) {
  return (
    <>
      <Modal.Minimize key="minimize" />
      <TitleBar.Close key="close" onClick={onClose} />
    </>
  );
}
