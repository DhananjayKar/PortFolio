import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectDetails({ project, onClose, flip }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="col-span-1 md:col-span-2 bg-gray-900 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row gap-8"
    >
      {flip === "left" && (
        <img
          src={project.image}
          alt={project.title}
          className="md:w-1/2 rounded-xl object-cover"
        />
      )}

      <div className="flex flex-col justify-center space-y-4 flex-1">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-blue-700/40 text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            <ExternalLink size={18} /> Live
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
          >
            <Github size={18} /> Code
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-6 self-start bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>

      {flip === "right" && (
        <img
          src={project.image}
          alt={project.title}
          className="md:w-1/2 rounded-xl object-cover"
        />
      )}
    </motion.div>
  );
}
