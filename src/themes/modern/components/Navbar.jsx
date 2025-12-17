import dayjs from "dayjs";

import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";

const Navbar = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  const toggleApp = (app) => {
    if (!app.canOpen) return;
    const window = windows[app.type];
    if (!window) return;
    if (window.isOpen) {
      closeWindow(app.type);
    } else {
      openWindow(app.type);
    }
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Lavish's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img, type, canOpen }) => (
            <li key={id} onClick={() => toggleApp({ type, canOpen })}>
              <img
                src={img}
                className={`icon ${windows[type].isOpen ? "bg-gray-200" : ""}`}
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("dd D MMM h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
