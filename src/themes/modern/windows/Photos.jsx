import { WindowControls } from "../components";
import { Gallerys } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import { Search } from "lucide-react";
import useLocationStore from "../store/location";
import clsx from "clsx";

const Photos = () => {
  const { openWindow, maxWindow } = useWindowStore();
  const { activeGallery, setActiveGallery } = useLocationStore();

  return (
    <>
      <div
        id="window-header"
        className="window-drag-handle"
        onDoubleClick={() => maxWindow("photos")}
      >
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold">Gallery (@_@)</h2>
        <Search className="icon" />
      </div>
      <div className="flex bg-white h-full">
        <div className="sidebar">
          <h3>Photos</h3>
          <ul>
            {Object.values(Gallerys).map((item) => (
              <li
                key={item.id}
                className={clsx(
                  item.id === activeGallery.id ? "active" : "not-active"
                )}
                onClick={() => setActiveGallery(item)}
              >
                <img
                  src={item.icon}
                  className="w-4"
                  alt={item.title}
                  loading="lazy"
                />
                <p className="text-sm font-medium truncate">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="gallery"
          className="flex-1 m-2 bg-white w-2xl h-120 overflow-y-auto"
        >
          <ul className="columns-2 gap-2">
            {activeGallery.children.map(({ id, img }) => (
              <li
                className="mb-2 "
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  loading="lazy"
                  className="rounded"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
