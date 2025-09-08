import Image from "next/image";

interface Project {
  title: string;
  type: string;
  status: "Live" | "In Progress" | "Preview Unavailable";
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const classifyStatus = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-primary text-white";
      case "In Progress":
        return "bg-secondary text-dark";
      case "Preview Unavailable":
        return "bg-gray-400 text-dark";
      default:
        return "bg-light text-sub";
    }
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto p-4 sm:p-6 rounded-xl border-themed bg-light shadow-themed
             transition-transform duration-300 hover:-translate-y-0.5
             grid grid-rows-[auto_auto_1fr_auto] sm:min-h-[480px]"
    >
      {/* Status badge (absolute as before) */}
      <div
        className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded flex items-center gap-2 ${classifyStatus(
          project.status
        )}`}
      >
        {project.status === "Live" && (
          <span className="w-2 h-2 rounded-full bg-white"></span>
        )}
        {project.status}
      </div>

      {/* Add top margin so the heading starts below the badge */}
      <h2 className="text-light text-xl font-semibold mb-4 leading-snug mt-8">
        {project.title}
        <span className="text-sub text-sm block mt-1">{project.type}</span>
      </h2>

      {/* Image */}
      {project.imageUrl ? (
        <div className="mb-4">
          <Image
            src={project.imageUrl}
            alt={`Preview of ${project.title}`}
            width={600}
            height={400}
            className="border-themed rounded w-full object-cover h-60"
          />
        </div>
      ) : (
        <div className="h-60 bg-prev rounded mb-4 flex items-center justify-center text-sub">
          Preview Unavailable
        </div>
      )}

      {/* Description */}
      <p className="text-sub mb-4 leading-relaxed">{project.description}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-5 gap-2">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-secondary text-light rounded font-medium 
                   transition-transform duration-150 hover:-translate-y-1 
                   active:translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md text-center"
          >
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-dark rounded font-medium 
                   transition-transform duration-150 hover:-translate-y-1 
                   active:translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md text-center"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
