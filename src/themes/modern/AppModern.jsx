import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Navbar, Welcome, Dock, Wallpaper, Home } from "./components";
import {
  Finder,
  Resume,
  Github,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  Photos,
  Music,
} from "./windows";

gsap.registerPlugin(Draggable);

const AppModern = () => {
  return (
    <div>
      <Wallpaper />

      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Github />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
      <Music />
    </div>
  );
};

export default AppModern;
