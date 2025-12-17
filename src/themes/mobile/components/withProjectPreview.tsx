import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "./constants";

const withProjectPreview = (Component: any) => {
  return (props: any) => {
    const [active, setActive] = useState<any>(null);

    const openProject = (key: keyof typeof PROJECTS) => {
      setActive(PROJECTS[key]);
    };
    const close = () => setActive(null);

    return (
      <>
        <Component {...props} openProject={openProject} />
        <ProjectModal project={active} onClose={close} />
      </>
    );
  };
};

export default withProjectPreview;
