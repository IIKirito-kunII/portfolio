import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";
import useWindowStore from "../store/window";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  SearchIcon,
  PanelLeft,
  Plus,
  Share,
  ShieldHalf,
} from "lucide-react";
import { certificates } from "../constants";

const Safari = () => {
  const { maxWindow } = useWindowStore();

  return (
    <>
      <div
        id="window-header"
        className="window-drag-handle p-4"
        onDoubleClick={() => maxWindow("safari")}
      >
        <WindowControls target="safari" />
        {/* <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <SearchIcon className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div> */}
      </div>
      <div className="blog">
        <h2>My Certificates [^_^]</h2>
        <div className="space-y-8">
          {certificates.map(({ id, image, title, date, link }) => (
            <div
              key={id}
              className={`blog-post flex items-center gap-6 ${
                id % 2 === 0 ? "flex-row-reverse " : "flex-row"
              }`}
            >
              <div
                className={`col-span-2 ${
                  id % 2 === 0 ? "rotate-5" : "-rotate-5"
                }`}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img size="small" src={image} alt={title} loading="lazy" />
                </a>
              </div>
              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the Credentials here{" "}
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
