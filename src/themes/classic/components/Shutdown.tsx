import { Fieldset, Modal, RadioButton, TitleBar, Button } from "@react95/core";
import { Computer3, HelpBook, Warning } from "@react95/icons";
import { type ComponentType, useState } from "react";
import { useAuth } from "../store/auth";

type ShutdownOptions = "shutdown" | "restart" | "restart-incompatible";
type SimulationPhase =
  | "idle"
  | "s-confirm"
  | "s-black"
  | "r-confirm"
  | "r-black"
  | "r-welcome"
  | "d-black"
  | "d-cli";

interface ShutdownProps {
  close: () => void;
}

const SafeModal = Modal as unknown as ComponentType<any>;

function MSDOSScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        color: "#AAAAAA",
        fontFamily: "Courier, monospace",
        fontSize: "16px",
        position: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        lineHeight: 1.5,
      }}
    >
      <pre>
        Microsoft(R) Windows 95
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(C)Copyright
        Microsoft Corp 1981-1995.
        <br />
        <br />
        C:\&gt;{" "}
        <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
      </pre>
      <style>{`
        @keyframes blink {
          from, to { color: transparent }
          50% { color: #AAAAAA }
        }
      `}</style>
    </div>
  );
}

function ShutdownHelp({ close }: ShutdownProps) {
  return (
    <SafeModal
      icon={<HelpBook variant="32x32_4" />}
      title="Shut Down Windows Help"
      style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
      titleBarOptions={[<TitleBar.Close key={"close"} onClick={close} />]}
      dragOptions={{ disabled: true }}
    >
      <Modal.Content width="450px">
        <div className="p-4">
          <p>
            When you <b>Shut Down</b> your computer, Windows safely closes all
            programs and prepares the system to be turned off. This is the
            normal way to end your work session.
          </p>
          <p>
            The <b>Restart</b> option closes programs, shuts down the system,
            and then immediately restarts the computer. Use this if your
            computer stops responding or after installing new software.
          </p>
          <p>
            <b>Restart in MS-DOS mode</b> is for advanced users or
            troubleshooting. It shuts down the Windows graphical environment and
            loads a text-only MS-DOS command prompt, allowing you to run older
            programs or advanced diagnostics. Do not use this unless required.
          </p>
        </div>
        <div style={{ padding: ".5rem", margin: ".5rem" }}>
          <div className="flex justify-end">
            <Button onClick={close} style={{ width: "90px" }}>
              OK
            </Button>
          </div>
        </div>
      </Modal.Content>
    </SafeModal>
  );
}

function Shutdown({ close }: ShutdownProps) {
  const [selectedOption, setSelectedOption] =
    useState<ShutdownOptions>("shutdown");
  const [showHelp, setShowHelp] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [simulatingPhase, setSimulatingPhase] =
    useState<SimulationPhase>("idle");

  const logout = useAuth((state) => state.logout);

  function handleConfirm() {
    setShowWarning(false);

    switch (selectedOption) {
      case "shutdown":
        setSimulatingPhase("s-confirm");
        setTimeout(() => {
          setSimulatingPhase("s-black");
          setTimeout(() => {
            logout();
            close();
            setSimulatingPhase("idle");
          }, 500);
        }, 2000);
        break;

      case "restart":
        setSimulatingPhase("r-confirm");
        setTimeout(() => {
          setSimulatingPhase("r-black");
          setTimeout(() => {
            setSimulatingPhase("r-welcome");
            setTimeout(() => {
              logout();
              close();
              setSimulatingPhase("idle");
            }, 1500);
          }, 500);
        }, 2000);
        break;

      case "restart-incompatible":
        setShowWarning(true);
        break;
      default:
        close();
        setSimulatingPhase("idle");
        break;
    }
  }

  function handleMSDOSConfirm() {
    setShowWarning(false);

    setSimulatingPhase("d-black");
    setTimeout(() => {
      setSimulatingPhase("d-cli");
      setTimeout(() => {
        logout();
        close();
        setSimulatingPhase("idle");
      }, 3500);
    }, 500);
  }

  const renderWarningModal = () => (
    <SafeModal
      icon={<Warning variant="32x32_4" />}
      title="Confirm MS-DOS Mode"
      style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
      dragOptions={{ disabled: true }}
    >
      <Modal.Content width="350px">
        <div className="p-4 flex items-start">
          <Warning variant="32x32_4" style={{ marginRight: "1rem" }} />
          <p style={{ marginTop: 0 }}>
            You are about to restart the computer in <b>MS-DOS mode</b>. This
            will close all running Windows programs. Are you sure you want to
            proceed?
          </p>
        </div>
        <Fieldset style={{ padding: ".5rem", margin: ".5rem" }}>
          <div className="flex justify-center gap-2">
            <Button onClick={handleMSDOSConfirm} style={{ width: "90px" }}>
              Yes
            </Button>
            <Button
              onClick={() => setShowWarning(false)}
              style={{ width: "90px" }}
            >
              Cancel
            </Button>
          </div>
        </Fieldset>
      </Modal.Content>
    </SafeModal>
  );

  const renderSimulationScreen = (
    message: string,
    isBlackScreen: boolean = false
  ) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: isBlackScreen ? "black" : "#008080",
          color: isBlackScreen ? "black" : "white",
          display: isBlackScreen ? "block" : "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "fixed",
          fontFamily: "Tahoma, sans-serif",
          fontSize: "24px",
          zIndex: 99999,
          top: 0,
          left: 0,
        }}
      >
        {!isBlackScreen && (
          <div style={{ padding: "20px", border: "2px solid white" }}>
            {message}
          </div>
        )}
      </div>
    );
  };

  if (simulatingPhase === "s-confirm") {
    return renderSimulationScreen("Windows is shutting down...");
  }

  if (
    simulatingPhase === "s-black" ||
    simulatingPhase === "r-black" ||
    simulatingPhase === "d-black"
  ) {
    return renderSimulationScreen("", true);
  }

  if (simulatingPhase === "r-confirm") {
    return renderSimulationScreen("Windows is preparing to restart...");
  }

  if (simulatingPhase === "r-welcome") {
    return renderSimulationScreen("Welcome to my Portfolio");
  }

  if (simulatingPhase === "d-cli") {
    return <MSDOSScreen />;
  }

  return (
    <>
      <SafeModal
        icon={<Computer3 variant="32x32_4" />}
        title={"Shut Down Windows"}
        style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
        titleBarOptions={[<TitleBar.Close key={"close"} onClick={close} />]}
        dragOptions={{ disabled: true }}
      >
        <Modal.Content width="400x">
          <div className="p-4">
            <div className="flex items-start">
              <Computer3 variant="32x32_4" style={{ marginRight: "1rem" }} />
              <div style={{ flexGrow: "1" }}>
                <p style={{ marginTop: 0 }}>Are you sure you want to: </p>
                <RadioButton
                  name="shutdown"
                  value={"shutdown"}
                  checked={selectedOption === "shutdown"}
                  onChange={() => setSelectedOption("shutdown")}
                >
                  Shut down the computer?
                </RadioButton>
                <RadioButton
                  name="restart"
                  value={"restart"}
                  checked={selectedOption === "restart"}
                  onChange={() => setSelectedOption("restart")}
                >
                  Restart the computer?
                </RadioButton>
                <RadioButton
                  name="restart-incompatible"
                  value={"restart-incompatible"}
                  checked={selectedOption === "restart-incompatible"}
                  onChange={() => setSelectedOption("restart-incompatible")}
                >
                  Restart the computer in MS-DOS mode?
                </RadioButton>
              </div>
            </div>
          </div>
          <Fieldset style={{ padding: ".5rem", margin: ".5rem" }}>
            <div className="flex flex-center justify-center gap-2">
              <Button onClick={handleConfirm} style={{ width: "90px" }}>
                YES
              </Button>
              <Button onClick={close} style={{ width: "90px" }}>
                NO
              </Button>
              <Button
                onClick={() => setShowHelp(true)}
                style={{ width: "90px" }}
              >
                HELP
              </Button>
            </div>
          </Fieldset>
        </Modal.Content>
      </SafeModal>

      {showHelp && <ShutdownHelp close={() => setShowHelp(false)} />}
      {showWarning && renderWarningModal()}
    </>
  );
}

export default Shutdown;
