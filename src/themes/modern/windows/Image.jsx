import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const ImageFile = () => {
  const { windows, maxWindow } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;
  const { name, imageUrl } = data;

  return (
    <div className="flex flex-col">
      <div
        id="window-header"
        className="window-drag-handle"
        onDoubleClick={() => maxWindow("imgfile")}
      >
        <WindowControls target="imgfile" />
        <h2 className="flex items-center justify-center">{name}</h2>
        <button
          onClick={() => window.setAsWallpaper(imageUrl)}
          className="px-2 py-1 cursor-pointer text-xs rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
          title="Set as Wallpaper"
        >
          Set as Wallpaper
        </button>
      </div>
      <div className="preview">
        {imageUrl ? <img src={imageUrl} alt={name} loading="lazy" /> : null}
      </div>
    </div>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;
