import { motion } from "framer-motion";

const educationData = [
  {
    title: "Matriculation",
    board: "ICSE",
    year: "2019-2020",
    pdf: "/certificates/ICSE.pdf",
  },
  {
    title: "Intermediate",
    board: "ISC",
    year: "2021-2022",
    pdf: "/certificates/ISC.pdf",
  },
  {
    title: "Diploma in Computer Application",
    board: "C-Zone Institute",
    year: "2023",
    pdf: "/certificates/DCA.pdf",
  },
  {
    title: "Tally Prime",
    board: "C-Zone Institute",
    year: "2023-2024",
    pdf: "/certificates/Tally.pdf",
  },
  {
    title: "Introduction to Front-End Development",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/Introduction_to_Front-End_Development.pdf",
  },
  {
    title: "Programming with JavaScript",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/Programming_with_JavaScript.pdf",
  },
  {
    title: "Version Control",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/Version_Control.pdf",
  },
  {
    title: "HTML and CSS in Depth",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/HTML_and_CSS_in_depth.pdf",
  },
  {
    title: "React Basics",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/React_Basics.pdf",
  },
  {
    title: "Advanced React",
    board: "Meta",
    year: "2025",
    pdf: "/certificates/Advanced_React.pdf",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Vertical line */}
        <div className="absolute rounded-3xl left-6 top-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-600 h-full"></div>

        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Education
        </h2>

        <div className="space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="relative pl-16"
            >
              {/* Dot */}
            <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-600 shadow-[0_0_10px_rgba(34,211,238,0.8)] hover:shadow-[0_0_20px_rgba(34,211,238,1)] transition-shadow"></div>

              {/* Card */}
              <div className="bg-gray-900/60 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-700 hover:scale-102">
                <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                <p className="text-gray-300 text-sm">{edu.board}</p>
                <p className="text-gray-400 text-xs mb-3">{edu.year}</p>
                <a
                  href={edu.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 text-sm rounded-md font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform shadow-md"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
