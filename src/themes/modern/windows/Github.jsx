import { ExternalLink } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Github = () => {
  return (
    <>
      <div id="window-header" className="window-drag-handle">
        <h2>My Profile [ while(!(success = try())) ]</h2>
        <a
          href="https://github.com/IIKirito-kunII"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Github in New Tab"
        >
          <ExternalLink className="icon mr-3" />
        </a>
      </div>
      <a
        href="https://github.com/IIKirito-kunII"
        target="_blank"
        rel="noopener noreferrer"
        title="Open Github in New Tab"
      >
        <Document className="flex-center bg-stone-700 p-2" file="files/git.pdf">
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
const GithubWindow = WindowWrapper(Github, "github");

export default GithubWindow;
