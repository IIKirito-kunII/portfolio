import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
  const { windows, maxWindow } = useWindowStore();
  const data = windows.txtfile?.data;
  const isMaximized = !!windows.txtfile?.isMaximized;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div className="flex flex-col h-full">
      <div
        id="window-header"
        className="window-drag-handle"
        onDoubleClick={() => maxWindow("txtfile")}
      >
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div
        id="scroll"
        className=" flex-1 min-h-0 overflow-y-auto p-5 space-y-6 bg-white"
      >
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} loading="lazy" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
