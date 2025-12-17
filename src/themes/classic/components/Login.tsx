import { type ComponentType, useState } from "react";
import { useAuth } from "../store/auth";
import { Modal, TitleBar, Button } from "@react95/core";
import { Password1010 } from "@react95/icons";
import { useBoot } from "../store/boot"; // Import the useBoot store

const Login = () => {
  const login = useAuth((state) => state.login);
  const { startBoot } = useBoot(); // Get the action to start the slow loading sequence

  const [openHelp, setOpenHelp] = useState(false);
  const [showLoadingGif, setShowLoadingGif] = useState(false); // Local state for the central GIF

  const handleLoginClick = () => {
    // 1. Show the central loading GIF immediately
    setShowLoadingGif(true);

    // 2. Play the boot sound (Note: Audio playback can sometimes be delayed or blocked by browsers)
    const audio = new Audio("/boot.mp3");
    audio.play().catch((e) => console.error("Audio playback failed:", e)); // Added error handling

    // 3. Wait 2000ms for the GIF screen to display
    setTimeout(() => {
      // Hide the GIF screen
      setShowLoadingGif(false);

      // 4. Authenticate the user (transitions to App.tsx)
      login();

      // 5. Start the global boot sequence (App.tsx will begin slow rendering)
      startBoot();
    }, 2000); // GIF duration
  };

  if (showLoadingGif) {
    return (
      <div
        style={{
          background: "#018281",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Renders the loading GIF in the center of the screen */}
        <img
          src="/loading.gif"
          alt="Logging in..."
          style={{ width: "80px", height: "80px" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#018281",
        width: "100%",
        height: "100vh",
      }}
    >
      <SafeModal
        dragOptions={{ disabled: true }}
        title="Welcome to my Windows 95 Portfolio!"
        id="login"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        titleBarOptions={[
          <div key="titlebar-help" onClick={() => setOpenHelp(true)}>
            <TitleBar.Help />
          </div>,
        ]}
      >
        <h2
          style={{
            margin: "8px",
            textAlign: "center",
            color: "#018281",
            borderTop: "4px solid var(--win95-darker)",
            borderLeft: "4px solid var(--win95-darker)",
            borderRight: "4px solid var(--win95-light)",
            borderBottom: "4px solid var(--win95-light)",
            background: "white",
            fontSize: "20px",
          }}
        >
          Hi, I'm Lavish! [^_^]
          <br /> || MERN Stack Developer ||
        </h2>
        <Modal.Content width="450px" height="140px" boxShadow="$in">
          <div className="flex item-start justify-between gap-2">
            <Password1010 width={50} height={50} />
            <div className="flex flex-col gap-4">
              <p style={{ margin: "0" }}>
                I've already filled in the username and password to save your
                Time [n_n]
              </p>
              <div className="flex items-center gap-2">
                <p style={{ margin: "0" }}>userName:</p>
                <input defaultValue={"admin"} disabled />
              </div>
              <div className="flex items-center gap-2">
                <p style={{ margin: "0" }}>Passsword:</p>
                <input defaultValue={"admin"} type="password" disabled />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button style={{ width: "100%" }} onClick={handleLoginClick}>
                Ok
              </Button>
              <Button style={{ width: "100%" }}>Cancel</Button>
            </div>
          </div>
        </Modal.Content>
      </SafeModal>

      {/* HELP MODAL */}
      {openHelp && (
        <SafeModal
          title="Windows Help"
          onClose={() => setOpenHelp(false)}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          dragOptions={{ disabled: true }}
        >
          <Modal.Content>
            <p>Welcome to Windows 95 Help Center.</p>
            <p>This login screen is just a demo.</p>
            <Button onClick={() => setOpenHelp(false)}>Close</Button>
          </Modal.Content>
        </SafeModal>
      )}
    </div>
  );
};

export default Login;

const SafeModal = Modal as unknown as ComponentType<any>;
