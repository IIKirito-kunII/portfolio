type ProjectsHubProps = {
  openProject?: (id: string) => void;
};

export default function ProjectsHub({ openProject }: ProjectsHubProps) {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* ABOUT SECTION */}
      <section className="px-6 pt-8 pb-10 max-w-md">
        <p className="text-lg leading-relaxed opacity-90">
          I am a full-stack MERN developer who builds fast, modern, and
          interactive applications. I combine strong frontend engineering with
          solid backend architecture using Node, Express, MongoDB, and
          API-driven development.
        </p>

        <p className="mt-4 text-lg leading-relaxed opacity-90">
          I focus heavily on design, animations, user experience, and building
          clean, scalable digital products.
        </p>
      </section>

      {/* DIVIDER (very subtle, Lumia-style) */}
      <div className="h-px bg-white/10 mx-6" />

      {/* PROJECT LIST */}
      <ul className="px-6 py-8 space-y-8">
        <li
          className="text-2xl font-light active:opacity-70 transition"
          onClick={() => openProject?.("smrs")}
        >
          Smart Medical Record System
        </li>

        <li
          className="text-2xl font-light active:opacity-70 transition"
          onClick={() => openProject?.("leads")}
        >
          Leads Tracker
        </li>

        <li
          className="text-2xl font-light active:opacity-70 transition"
          onClick={() => openProject?.("luminous")}
        >
          Luminous Quotes
        </li>
      </ul>
    </div>
  );
}
