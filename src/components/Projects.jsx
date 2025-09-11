import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import projects from "./projectData";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 w-full max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const flip = index % 2 === 0 ? "left" : "right"; // keep your existing flip logic

          // Intersection observer for each card
          const { ref, inView } = useInView({
            triggerOnce: false, // animate every time user scrolls
            threshold: 0.2,
          });

          return (
            <motion.div
              key={project.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15, // stagger top-to-bottom
              }}
              layout
              className={`${isExpanded ? "col-span-1 md:col-span-2" : ""}`}
            >
              <ProjectCard
                project={project}
                expanded={isExpanded}
                flip={flip} // keep your left/right expand animation
                onClick={() =>
                  setExpanded(isExpanded ? null : index)
                }
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
