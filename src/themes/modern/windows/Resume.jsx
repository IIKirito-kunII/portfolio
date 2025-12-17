import { Download, ExternalLink } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const { maxWindow } = useWindowStore();

  return (
    <>
      <div
        id="window-header"
        className="window-drag-handle"
        onDoubleClick={() => maxWindow("resume")}
      >
        <WindowControls target="resume" />
        <h2>Resume.pdf [u_u]</h2>
        <a
          href="files/Lavish_Kumar_Varshney_Software_Developer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Resume in New Tab"
        >
          <ExternalLink className="icon mr-3" />
        </a>
        <a
          href="files/Lavish_Kumar_Varshney_Software_Developer_Resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <a
        href="files/Lavish_Kumar_Varshney_Software_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Open Resume in New Tab"
      >
        <Document
          className="flex-center bg-stone-700 p-2"
          file="files/Lavish_Kumar_Varshney_Software_Developer_Resume.pdf"
        >
          <Page
            className="page"
            width={500}
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </a>
    </>
  );
};
const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
