import { useEffect, useState } from "react";
import { Frame, TaskBar, List, Video } from "@react95/core";
import {
  Inetcpl1313,
  Amovie2,
  Wordpad,
  Joy102,
  Mail,
  PrinterCalendar,
  Earth,
  Access220,
  Inetcfg2303,
  Imgthumb10,
  Drvspace7,
  Refresh,
  Desk100,
  Fm20enu5,
  User7,
} from "@react95/icons";
import { useWindowManager } from "./store/windows";
import {
  DesktopIcon,
  Resume,
  Window,
  Login,
  MailWindow,
  GlobalChat,
  ChessGame,
  GlobalChatListener,
  Shutdown,
} from "./components";
import Calendar from "react-calendar";
import { useAuth } from "./store/auth";
import { useBoot } from "./store/boot";
import { ClippyProvider } from "@react95/clippy";
import { FaDragon, FaGithub, FaLinkedin } from "react-icons/fa";

export const MODAL_ICONS = {
  Video: <Amovie2 variant="32x32_4" />,
  Browser: <Inetcpl1313 variant="32x32_4" />,
  Resume: <Wordpad variant="32x32_4" />,
  Game: <Joy102 variant="32x32_4" />,
  Contact: <Inetcfg2303 variant="32x32_4" />,
  Wikipedia: <Earth variant="32x32_4" />,
  Dino: <FaDragon size={28} color="black" />,
  Terminal: <Access220 variant="32x32_4" />,
  Mail: <Mail variant="32x32_4" />,
  Solitaire: <Imgthumb10 variant="32x32_4" />,
  Pacman: <Drvspace7 variant="32x32_4" />,
  GlobalChat: <Fm20enu5 variant="32x32_4" />,
  ShutDown: <User7 variant="32x32_4" />,
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AppClassic() {
  const { openWindow, closeWindow, activeWindows } = useWindowManager();
  const [value, onChange] = useState<Value>(new Date());
  const authenticated = useAuth((state) => state.authenticated);

  const { isBooting, stopBoot } = useBoot();

  const [showTaskbar, setShowTaskbar] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [desktopVisible, setDesktopVisible] = useState(true);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [wallpaperIndex, setWallpaperIndex] = useState(3);

  const [showShutdown, setShowShutdown] = useState(false);

  const changeWallpaper = () => {
    setWallpaperIndex((prev) => (prev >= 6 ? 1 : prev + 1));
  };

  const refreshDesktop = () => {
    setDesktopVisible(false);
    setTimeout(() => setDesktopVisible(true), 50);
  };

  const open = (
    id:
      | "Video"
      | "Browser"
      | "Resume"
      | "Game"
      | "Wikipedia"
      | "Dino"
      | "Terminal"
      | "Mail"
      | "Solitaire"
      | "Pacman"
      | "GlobalChat"
  ) => {
    openWindow(id, {
      id,
      title: id,
      icon: MODAL_ICONS[id],
      hasButton: true,
    });
    if (id === "GlobalChat") {
      openWindow("GlobalChat", {
        id: "GlobalChat",
        title: "Global Chat",
        icon: MODAL_ICONS.GlobalChat,
        hasButton: true,
      });
      return;
    }
  };
  useEffect(() => {
    // Only run if the user is authenticated AND the boot process has started
    if (!authenticated || !isBooting) return;

    // Reset visibility (important for re-runs, though should only run once after login)
    setShowTaskbar(false);
    setShowIcons(false);
    setShowCalendar(false);

    // Start the sequential display timers (slow loading simulation)
    setTimeout(() => setShowTaskbar(true), 100);
    setTimeout(() => setShowIcons(true), 1500);
    setTimeout(() => setShowCalendar(true), 3000);

    // Stop the global boot process after the components have appeared
    const totalBootTime = 4000;
    setTimeout(() => {
      stopBoot();
    }, totalBootTime);
  }, [authenticated, isBooting, stopBoot]);

  useEffect(() => {
    const hide = () => setShowContextMenu(false);
    window.addEventListener("click", hide);
    return () => window.removeEventListener("click", hide);
  }, []);

  useEffect(() => {
    // Activate the custom loading visual effects when authenticated and booting
    if (authenticated && isBooting) {
      // 1. Add class to change the cursor (requires .boot-cursor CSS class definition)
      document.body.classList.add("boot-cursor");

      // 2. Add the loading.webp overlay below the cursor
      const loadingImageElement = document.createElement("img");
      loadingImageElement.src = "/loading.webp"; // Ensure this file exists in /public
      loadingImageElement.id = "loading-webp-overlay";
      loadingImageElement.alt = "Loading";
      loadingImageElement.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 100px;
        height: auto;
        pointer-events: none;
        z-index: 9998;
      `;
      document.body.appendChild(loadingImageElement);

      return () => {
        // Cleanup: Remove cursor class and the image element when this effect unmounts or reruns
        document.body.classList.remove("boot-cursor");
        const element = document.getElementById("loading-webp-overlay");
        if (element) {
          element.remove();
        }
      };
    }

    // Explicit cleanup when booting state changes to false
    if (!isBooting) {
      document.body.classList.remove("boot-cursor");
      const element = document.getElementById("loading-webp-overlay");
      if (element) {
        element.remove();
      }
    }
  }, [authenticated, isBooting]);

  if (!authenticated) {
    return <Login />;
  }
  return (
    <div
      className="wallpaper"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(/bg${wallpaperIndex}.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenuPos({ x: e.clientX, y: e.clientY });
        setShowContextMenu(true);
      }}
    >
      <Frame width="100%" height="100%">
        {showTaskbar && (
          <TaskBar
            list={
              <List width="220px">
                {/* CONTACTS (SHORTCUTS, NOT WINDOWS) */}
                <List.Item icon={MODAL_ICONS.Contact}>
                  <List width="200px">
                    <List.Item
                      icon={<FaGithub size={28} />}
                      onClick={() =>
                        window.open(
                          "https://github.com/IIKirito-kunII",
                          "_blank"
                        )
                      }
                    >
                      GitHub
                    </List.Item>
                    <List.Item
                      icon={<FaLinkedin size={28} color="blue" />}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/lavish-kumar-varshney-32b141222/",
                          "_blank"
                        )
                      }
                    >
                      LinkedIn
                    </List.Item>
                    <List.Item
                      icon={MODAL_ICONS.Mail}
                      onClick={() =>
                        (window.location.href =
                          "mailto:lavishkumarvarshney@gmail.com")
                      }
                    >
                      Mail
                    </List.Item>
                  </List>
                  Contact
                </List.Item>
                {/* GAMES */}
                <List.Item icon={MODAL_ICONS.Game}>
                  <List width="200px">
                    <List.Item
                      icon={MODAL_ICONS.Game}
                      onClick={() => open("Game")}
                    >
                      Chess
                    </List.Item>
                    <List.Item
                      icon={MODAL_ICONS.Solitaire}
                      onClick={() => open("Solitaire")}
                    >
                      Solitaire
                    </List.Item>
                    <List.Item
                      icon={MODAL_ICONS.Pacman}
                      onClick={() => open("Pacman")}
                    >
                      Pacman
                    </List.Item>
                    <List.Item
                      icon={MODAL_ICONS.Dino}
                      onClick={() => open("Dino")}
                    >
                      Chrome Dino
                    </List.Item>
                  </List>
                  Games
                </List.Item>
                {/* MAIN APPLICATIONS */}
                <List.Item
                  icon={MODAL_ICONS.Browser}
                  onClick={() => open("Browser")}
                >
                  Browser
                </List.Item>
                <List.Item
                  icon={MODAL_ICONS.Wikipedia}
                  onClick={() => open("Wikipedia")}
                >
                  Wikipedia
                </List.Item>
                <List.Item
                  icon={MODAL_ICONS.GlobalChat}
                  onClick={() => open("GlobalChat")}
                >
                  Global Chat
                </List.Item>
                <List.Item
                  icon={MODAL_ICONS.Resume}
                  onClick={() => open("Resume")}
                >
                  Resume
                </List.Item>
                <List.Item
                  icon={MODAL_ICONS.Terminal}
                  onClick={() => open("Terminal")}
                >
                  Terminal
                </List.Item>
                <List.Item
                  icon={MODAL_ICONS.Video}
                  onClick={() => open("Video")}
                >
                  Video
                </List.Item>

                <List.Divider />

                {/* SHUTDOWN */}
                <List.Item
                  icon={MODAL_ICONS.ShutDown}
                  onClick={() => setShowShutdown(true)}
                >
                  Shut Down
                </List.Item>
              </List>
            }
          />
        )}
        {showContextMenu && (
          <div>
            <div
              style={{
                position: "fixed",
                top: contextMenuPos.y,
                left: contextMenuPos.x,
                background: "gray",
                fontFamily: "MS Sans Serif",
                zIndex: 99999,
              }}
            >
              {/* --- REFRESH --- */}
              <div
                style={{
                  padding: "6px 10px",
                  cursor: "pointer",
                  borderTop: `2px solid var(--win95-light)`,
                  borderLeft: `2px solid var(--win95-light)`,
                  borderRight: `2px solid var(--win95-darker)`,
                  borderBottom: `2px solid var(--win95-darker)`,
                }}
                onClick={() => {
                  refreshDesktop();
                  setShowContextMenu(false);
                }}
              >
                <Refresh /> Refresh
              </div>

              {/* --- CHANGE WALLPAPER --- */}
              <div
                style={{
                  padding: "6px 10px",
                  cursor: "pointer",
                  borderTop: `2px solid var(--win95-light)`,
                  borderLeft: `2px solid var(--win95-light)`,
                  borderRight: `2px solid var(--win95-darker)`,
                  borderBottom: `2px solid var(--win95-darker)`,
                }}
                onClick={() => {
                  changeWallpaper();
                  setShowContextMenu(false);
                }}
              >
                <Desk100 variant="16x16_4" /> Change Wallpaper
              </div>
            </div>
          </div>
        )}
        {showIcons && desktopVisible && (
          <div
            className="fixed"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "calc(100vh - 140px)",
              gap: "10px",
            }}
          >
            <DesktopIcon
              icon={MODAL_ICONS.Video}
              label="Video"
              onOpen={() => open("Video")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.Browser}
              label="Browser"
              onOpen={() => open("Browser")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.Resume}
              onOpen={() => open("Resume")}
              label="Resume"
            />
            <DesktopIcon
              icon={MODAL_ICONS.Game}
              label="Chess"
              onOpen={() => open("Game")}
            ></DesktopIcon>
            <DesktopIcon
              icon={MODAL_ICONS.Solitaire}
              label="Solitaire"
              onOpen={() => open("Solitaire")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.Dino}
              label="Chrome Dino"
              onOpen={() => open("Dino")}
            />
            <DesktopIcon
              label="Mail"
              icon={MODAL_ICONS.Mail}
              onOpen={() => open("Mail")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.Wikipedia}
              label="Wikipedia"
              onOpen={() => open("Wikipedia")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.Terminal}
              label="Terminal"
              onOpen={() => open("Terminal")}
            />
            <DesktopIcon
              label="Pacman"
              icon={MODAL_ICONS.Pacman}
              onOpen={() => open("Pacman")}
            />
            <DesktopIcon
              icon={MODAL_ICONS.GlobalChat}
              label="Global Chat"
              onOpen={() => open("GlobalChat")}
            />
          </div>
        )}
        {showCalendar && (
          <>
            <div
              style={{
                position: "fixed",
                top: "50px",
                right: "30px",
                fontFamily: "MS Sans Serif",
              }}
              className="calendar-window"
            >
              <div className="calendar-title-bar">
                <h3 className="calendar-title-text">
                  <PrinterCalendar
                    variant="16x16_4"
                    style={{ margin: "auto 4px" }}
                  />
                  Calendar
                </h3>
              </div>
              <Calendar onChange={onChange} value={value} />
            </div>
          </>
        )}
        {activeWindows["Video"] && (
          <Window
            id="Video"
            title="Video"
            width="420px"
            icon={MODAL_ICONS.Video}
            position={{ x: 200, y: 10 }}
            onClose={() => closeWindow("Video")}
          >
            <Video
              w="420px"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </Window>
        )}
        {activeWindows["Browser"] && (
          <Window
            id="Browser"
            title="Browser"
            icon={MODAL_ICONS.Browser}
            position={{ x: 500, y: 60 }}
            onClose={() => closeWindow("Browser")}
          >
            <iframe
              width={800}
              height={500}
              src="https://wiby.me/?q="
              style={{ border: "none" }}
            />
          </Window>
        )}
        {activeWindows["Resume"] && (
          <Window
            id="Resume"
            width="650px"
            title="Resume"
            icon={MODAL_ICONS.Resume}
            position={{ x: 350, y: 120 }}
            onClose={() => closeWindow("Resume")}
          >
            <Resume />
          </Window>
        )}
        {activeWindows["Game"] && (
          <Window
            id="Game"
            title="Chess"
            width="400px"
            height="400px"
            icon={MODAL_ICONS.Game}
            position={{ x: 150, y: 150 }}
            onClose={() => closeWindow("Game")}
          >
            <ChessGame />
          </Window>
        )}
        {activeWindows["Wikipedia"] && (
          <Window
            id="Wikipedia"
            title="Wikipedia"
            icon={MODAL_ICONS.Wikipedia}
            position={{ x: 300, y: 0 }}
            onClose={() => closeWindow("Wikipedia")}
          >
            <iframe
              width={800}
              height={500}
              src="https://en.wikipedia.org/wiki/Main_Page"
              style={{ border: "none" }}
            />
          </Window>
        )}
        {activeWindows["Dino"] && (
          <Window
            id="Dino"
            title="Chrome Dino"
            icon={MODAL_ICONS.Dino}
            position={{ x: 900, y: 100 }}
            onClose={() => closeWindow("Dino")}
          >
            <iframe
              width={500}
              height={300}
              src="https://chromedino.com/"
              style={{ border: "none" }}
              loading="lazy"
            />
          </Window>
        )}
        {activeWindows["Terminal"] && (
          <Window
            id="Terminal"
            title="Terminal"
            icon={MODAL_ICONS.Terminal}
            position={{ x: 300, y: 20 }}
            onClose={() => closeWindow("Terminal")}
          >
            <div
              style={{
                width: 1000,
                height: 600,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src="https://fake.terminal.jcubic.pl/"
                style={{
                  border: "none",
                  transform: "scale(2)",
                  transformOrigin: "92.5% 25%",
                  width: "100%",
                  height: "100%",
                }}
                loading="lazy"
              />
            </div>
          </Window>
        )}
        {activeWindows["Mail"] && (
          <Window
            id="Mail"
            title="Mail"
            icon={MODAL_ICONS.Mail}
            position={{ x: 100, y: 100 }}
            width="350px"
            onClose={() => closeWindow("Mail")}
          >
            <MailWindow />
          </Window>
        )}
        {activeWindows["Solitaire"] && (
          <Window
            id="Solitaire"
            title="Solitaire"
            icon={MODAL_ICONS.Solitaire}
            position={{ x: 300, y: 80 }}
            width="530px"
            height="360px"
            onClose={() => closeWindow("Solitaire")}
          >
            <div
              style={{
                width: "100%",
                height: "40%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src="https://pl12133.github.io/react-solitaire/"
                style={{
                  border: "none",
                  width: "1200px",
                  height: "900px",
                  transform: "scale(0.45)",
                  transformOrigin: "top left",
                }}
                loading="lazy"
              />
            </div>
          </Window>
        )}
        {activeWindows["Pacman"] && (
          <>
            <Window
              id="Pacman"
              title="Pacman"
              icon={MODAL_ICONS.Pacman}
              position={{ x: 350, y: 0 }}
              width="520px"
              height="400px"
              onClose={() => closeWindow("Pacman")}
            >
              <div style={{ width: "100%", height: "45%", overflow: "hidden" }}>
                <iframe
                  src="https://pacman.platzh1rsch.ch/"
                  style={{
                    border: "none",
                    width: "900px",
                    height: "900px",
                    transform: "scale(0.58)",
                    transformOrigin: "top left",
                  }}
                />
              </div>
            </Window>
          </>
        )}
        {activeWindows["GlobalChat"] && (
          <Window
            id="GlobalChat"
            title="Global Chat"
            icon={MODAL_ICONS.GlobalChat}
            position={{ x: 700, y: 15 }}
            onClose={() => closeWindow("GlobalChat")}
          >
            <GlobalChat />
          </Window>
        )}
        {showShutdown && <Shutdown close={() => setShowShutdown(false)} />}
        <GlobalChatListener />
        <ClippyProvider />
      </Frame>
    </div>
  );
}
