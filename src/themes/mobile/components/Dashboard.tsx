import { FaLinkedin, FaGithub, FaRegEnvelope, FaFileAlt } from "react-icons/fa";
import { FlipTile } from "./FlipTile";
import withProjectPreview from "./withProjectPreview";
import { useEffect, useRef } from "react";
import SkillsCube from "./SkillsCube";
import CertificateCarouselTile from "./CertificateCarouselTile";

const Dashboard = ({
  openProject,
  transitioning,
}: {
  openProject: any;
  transitioning: boolean;
}) => {
  const mailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: any;

    const triggerPulse = () => {
      if (!mailRef.current) return;

      mailRef.current.classList.add("mail-pulse");

      setTimeout(() => {
        mailRef.current?.classList.remove("mail-pulse");
      }, 1400);

      const nextDelay = 10000 + Math.random() * 10000; // 10–20s
      timeout = setTimeout(triggerPulse, nextDelay);
    };

    const initialDelay = 10000 + Math.random() * 10000;
    timeout = setTimeout(triggerPulse, initialDelay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const tiles = document.querySelectorAll("[data-skill-tile]");
    if (!tiles.length) return;

    let timeout: any;

    const highlight = () => {
      const tile = tiles[
        Math.floor(Math.random() * tiles.length)
      ] as HTMLElement;

      tile.classList.add("skill-glow");

      setTimeout(() => {
        tile.classList.remove("skill-glow");
      }, 1200);

      const next = 10000 + Math.random() * 10000;
      timeout = setTimeout(highlight, next);
    };

    timeout = setTimeout(highlight, 8000 + Math.random() * 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-screen h-max bg-black p-4 pt-12 pb-12 overflow-y-auto scrollbar-hide">
      <div
        className={`rowsheight grid grid-cols-4 gap-4 auto-rows-[86.25px] sm:grid-cols-6 grid-flow-dense 
          ${transitioning ? "tiles-exit" : "tiles-enter"}`}
      >
        {/* medium tile */}
        <div className="col-span-2 row-span-2 bg-[url('images/sdp.jpeg')] bg-center bg-cover bg-no-repeat active:scale-95 transition" />

        {/* small tiles */}
        <div
          className="bg-[#0078D7] flex items-center justify-center active:scale-95 transition"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/lavish-kumar-varshney-32b141222/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <FaLinkedin size={48} color="white" />
        </div>
        <div
          className="bg-[#1F1F1F] flex items-center justify-center "
          onClick={() =>
            window.open(
              "https://github.com/IIKirito-kunII",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <FaGithub size={48} color="white" />
        </div>
        <div
          ref={mailRef}
          className="bg-[#10893E] flex items-center justify-center active:scale-95 transition"
          onClick={() => (
            (window.location.href =
              "mailto:lavishkumarvarshney@gmail.com?subject=Portfolio%20Inquiry"),
            "_blank",
            "noopener,noreferrer"
          )}
        >
          <FaRegEnvelope size={48} color="white" />
        </div>
        <div
          className="bg-[#2D2D2D] flex items-center justify-center active:scale-95 transition"
          onClick={() =>
            window.open(
              "files/Lavish_Kumar_Varshney_Software_Developer_Resume.pdf",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <FaFileAlt size={48} color="white" />
        </div>

        {/* wide tile */}
        <div className="col-span-4 row-span-1 text-2xl font-semibold active:scale-95 transition">
          <FlipTile
            front={
              <div className="bg-[#0078D7] flex w-full h-full items-center justify-center px-4">
                <h1>Hi, I'm Lavish Kumar Varshney</h1>
              </div>
            }
            back={
              <div className="bg-[#1F1F1F] text-white w-full h-full flex items-center justify-center px-4">
                <h1>MERN Stack Developer [n_n]</h1>
              </div>
            }
          />
        </div>

        {/* medium tile */}
        <div
          className="col-span-2 row-span-2"
          onClick={() => openProject("smrs")}
        >
          <FlipTile
            front={
              <div className="bg-[#00B7C3] w-full h-full p-4 text-sm flex text-center flex-col justify-center gap-2">
                <h2 className="font-semibold text-lg">
                  Smart Medical Record System
                </h2>
                <p>Upload, view & manage medical PDFs.</p>
                <p>React · Firebase · Express</p>
              </div>
            }
            back={
              <div className="w-full h-full bg-center bg-contain bg-no-repeat bg-[url('finder/smrs-front.png')] ring-2 ring-white/90 ring-inset" />
            }
          />
        </div>
        <div
          className="col-span-2 row-span-2"
          onClick={() => openProject("leads")}
        >
          <FlipTile
            front={
              <div className="bg-[#744DA9] w-full h-full p-4 text-sm flex text-center flex-col justify-center gap-2">
                <h2 className="font-semibold text-lg">
                  Leads Tracker – Chrome Extension
                </h2>
                <p>Save tabs, text snippets & code instantly.</p>
                <p>JavaScript · Chrome APIs · LocalStorage</p>
              </div>
            }
            back={
              <div className="w-full h-full bg-center bg-contain bg-no-repeat bg-[url('finder/UI.png')] ring-2 ring-white/90 ring-inset" />
            }
          />
        </div>
        <div
          className="col-span-2 row-span-2"
          onClick={() => openProject("luminous")}
        >
          <FlipTile
            front={
              <div className="bg-[#FFB900] w-full h-full p-4 text-sm flex text-center flex-col justify-center gap-2">
                <h2 className="font-semibold text-lg">Luminous Quotes</h2>
                <p>Interactive lamp & inspirational quote generator.</p>
                <p>React · GSAP · CSS Variables · API</p>
              </div>
            }
            back={
              <div className="w-full h-full bg-center bg-contain bg-no-repeat bg-[url('finder/lamp-on.png')] ring-2 ring-white/90 ring-inset" />
            }
          />
        </div>

        {/* ================= INTERNSHIPS ================= */}
        <div className="col-span-4 row-span-2 border-l-4 border-blue-500/40 bg-[#2D2D2D] flex flex-col justify-between p-2 pl-4 active:scale-95 transition">
          <div>
            <p className="text-xs text-gray-300">Jun – Aug 2024</p>
            <h2 className="text-lg font-semibold mt-1">
              IBM SkillsBuild (CSRBOX)
            </h2>
            <p className="text-sm text-gray-200">
              Front-End Web Developer Intern
            </p>
          </div>

          <ul className="text-sm text-gray-200 list-disc list-inside mt-2 space-y-1">
            <li>Built responsive UI components using React</li>
            <li>Completed full-stack engineering modules</li>
            <li>Worked on real-world project workflows</li>
          </ul>

          <div className="flex gap-3 text-xs m-3 text-blue-400">
            <span
              onClick={() =>
                window.open(
                  "files/IBM_Offer_Letter.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Offer Letter
            </span>

            <span
              onClick={() =>
                window.open(
                  "files/IBM_Certificate.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Certificate
            </span>

            <span
              onClick={() =>
                window.open(
                  "https://github.com/IIKirito-kunII/rapidrescue",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GitHub
            </span>
          </div>
        </div>

        <div className="col-span-4 row-span-2 border-l-4 border-blue-500/40 bg-[#2D2D2D] p-2 pl-4 flex flex-col justify-between active:scale-95 transition">
          <div>
            <p className="text-xs text-gray-300">Aug – Sept 2023</p>
            <h2 className="text-lg font-semibold mt-1">
              Bharat Intern (now Orbitor)
            </h2>
            <p className="text-sm text-gray-200">Full-Stack Developer Intern</p>
          </div>

          <ul className="text-sm text-gray-200 list-disc list-inside mt-2 space-y-1">
            <li> Built a Content Management and Project Management Tool.</li>
            <li> Designed responsive UI & optimized React flow.</li>
          </ul>

          <div className="flex gap-3 text-xs m-3 text-blue-400">
            <span
              onClick={() =>
                window.open(
                  "files/Bharat_Offer_Letter.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Offer Letter
            </span>

            <span
              onClick={() =>
                window.open(
                  "files/Bharat_Certificate.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Certificate
            </span>

            <span
              onClick={() =>
                window.open(
                  "https://github.com/IIKirito-kunII/Bharat-Intern",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GitHub
            </span>
          </div>
        </div>
        <div className="col-span-2 bg-[#1F1F1F] m-2 row-span-2">
          <SkillsCube />
        </div>
        <CertificateCarouselTile />

        {/* ================= EDUCATION ================= */}

        <div className="col-span-2 row-span-2 bg-[#1F1F1F] p-2 flex flex-col justify-between">
          {/* Top */}
          <div>
            <p className="text-xs text-gray-400 tracking-wide">EDUCATION</p>
            <h3 className="text-lg font-semibold m-1">B.Tech — CSE</h3>
            <p className="text-sm text-gray-300">
              Gurukula Kangri Vishwavidyalaya (FET), Haridwar, Uttarakhand
            </p>
          </div>

          {/* Bottom */}
          <div>
            <p className="text-xs text-gray-400">Nov 2022 – Present</p>
            <p className="text-sm text-gray-400 mt-2">
              SGPA:{" "}
              <span className="font-semibold text-white text-base">8.32</span>
            </p>
          </div>
        </div>

        <div className="col-span-2 row-span-1 bg-[#1F1F1F] p-2">
          <h3 className="text-sm font-semibold">GATE 2025 — CSE</h3>
          <p className="text-xs text-gray-300 mt-1">
            AIR <span className="font-semibold">20150</span> • Score 360
          </p>
          <p className="text-xs text-gray-400">
            Qualified in 3rd year of B.Tech
          </p>
        </div>

        <div className="col-span-2 row-span-1 bg-[#1F1F1F] p-2">
          <h3 className="text-sm font-semibold">Senior Secondary (XII)</h3>
          <p className="text-xs text-gray-300 mt-1">
            Gayatri Public School — CBSE
          </p>
          <p className="text-xs text-gray-400">Science Stream</p>
          <p className="text-xs text-gray-400">Completed: March 2021</p>
        </div>

        <div className="col-span-4 row-span-2 active:scale-95 transition">
          <FlipTile
            front={
              <div className="w-full h-full bg-[#1F1F1F] p-2 flex flex-col justify-between">
                {/* Top */}
                <div>
                  <p className="text-xs text-gray-400">
                    VOLUNTEERING · Nov 2025
                  </p>

                  <h2 className="text-lg font-semibold">
                    Co-Facilitator & Technical Coordinator
                  </h2>

                  <p className="text-sm text-gray-300">
                    Gurukula Kangri Vishwavidyalaya
                  </p>
                </div>

                {/* Middle */}
                <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                  <li>
                    Conducted technical awareness session for 1st-year B.Tech
                    students
                  </li>
                  <li>Handled live presentation & classroom digital setup</li>
                  <li>Guided students on MERN stack & learning pathways</li>
                </ul>

                {/* Bottom */}
                <p className="text-xs text-emerald-400 mt-2">
                  Science & Technology · Academic Outreach
                </p>
              </div>
            }
            back={
              <div className="w-full h-full bg-center bg-cover bg-no-repeat bg-[url('/gallery/volunteer.jpeg')]" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default withProjectPreview(Dashboard);
