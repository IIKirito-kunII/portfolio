type Props = {
  project: any;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-zinc-900 max-w-lg w-full rounded-xl p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h2>

        <p className="text-gray-300 text-sm mb-3">{project.problem}</p>

        <p className="text-gray-200 text-sm mb-4">
          <span className="text-white font-medium">What I built:</span>{" "}
          {project.contribution}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="bg-zinc-800 text-gray-200 text-xs px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.screenshots.map((img: string) => (
            <img
              key={img}
              src={img}
              className="ring-2 ring-white/90 ring-inset bg-black"
              alt="Project screenshot"
            />
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a href={project.github} target="_blank" className="text-blue-400">
            Source Code
          </a>

          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              className="text-purple-400"
            >
              Backend Code
            </a>
          )}

          {project.live && (
            <a href={project.live} target="_blank" className="text-green-400">
              Live App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
