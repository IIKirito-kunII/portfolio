import { Search } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";
import clsx from "clsx";

const Finder = () => {
  const { openWindow, maxWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow(item.target);
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "blank");

    openWindow(`${item.fileType} ${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
            onClick={() => setActiveLocation(item)}
          >
            <img
              src={item.icon}
              className="w-4"
              alt={item.name}
              loading="lazy"
            />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div
        id="window-header"
        onDoubleClick={() => maxWindow("finder")}
        className="window-drag-handle"
      >
        <WindowControls target="finder" />
        <h2 className="font-bold">My Projects [n_n]</h2>
        <Search className="icon" />
      </div>
      <div className="flex bg-white h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          <h2 id="window-header" className="font-bold p-1 pl-5">
            {activeLocation.name}
          </h2>
          {activeLocation.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="cursor-context-menu"
                loading="lazy"
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
