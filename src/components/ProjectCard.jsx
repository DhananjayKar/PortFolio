import { motion } from "framer-motion";

export default function ProjectCard({ project, expanded, onClick }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      whileHover={!expanded ? { y: -10, scale: 1.02 } : {}} // lift-up only when compact
      className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-md 
        ${expanded ? "w-full flex flex-col md:flex-row gap-6 p-6" : "cursor-pointer"}
        border border-white/20 bg-white/10
      `}
      onClick={!expanded ? onClick : undefined}
    >
      {expanded ? (
        <>
          {/* Left: Project image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 h-64 object-contain rounded-xl bg-black/30"
          />

          {/* Right: Details */}
          <div className="flex flex-col justify-center md:w-1/2 text-left space-y-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-sm text-white font-medium 
                             bg-gradient-to-r from-teal-400 to-cyan-600 
                             hover:from-cyan-500 hover:to-teal-600 
                             transition-all shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md font-medium text-white 
                        bg-gradient-to-r from-blue-700 to-blue-500 
                        hover:from-blue-800 hover:to-blue-600 
                        transition-all shadow-md"
            >
              Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md font-medium text-white 
                        bg-gradient-to-r from-green-600 to-green-400 
                        hover:from-green-700 hover:to-green-500 
                        transition-all shadow-md"
            >
              Code
            </a>
            <button
              onClick={onClick}
              className="px-4 py-2 rounded-md font-medium text-white 
                        bg-gradient-to-r from-red-600 to-red-400 
                        hover:from-red-700 hover:to-red-500 
                        transition-all shadow-md"
            >
              Close
            </button>
          </div>

          </div>
        </>
      ) : (
        <>
          {/* Compact card */}
          <div className="rounded-2xl overflow-hidden transition-all duration-300 
                          hover:border hover:border-white 
                          hover:shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff,0_0_40px_#ffffff]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
