import useWindowStore from "../store/window";
const WindowControls = ({ target }) => {
  const { closeWindow, maxWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => closeWindow(target)} />
      <div className="maximize" onClick={() => maxWindow(target)} />
    </div>
  );
};

export default WindowControls;
