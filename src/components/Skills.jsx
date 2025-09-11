import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiBootstrap, SiFlask } from "react-icons/si";

ChartJS.register(ArcElement, Tooltip, Legend);

// Tech skills with icons and levels
const techSkills = [
  { id: "html", name: "HTML5", level: 96, icon: <FaHtml5 size={24} color="#E34F26" /> },
  { id: "css", name: "CSS3", level: 90, icon: <FaCss3Alt size={24} color="#1572B6" /> },
  { id: "bootstrap", name: "Bootstrap", level: 70, icon: <SiBootstrap size={24} color="#7952B3" /> },
  { id: "tailwind", name: "Tailwind CSS", level: 80, icon: <SiTailwindcss size={24} color="#38B2AC" /> },
  { id: "js", name: "JavaScript", level: 90, icon: <FaReact size={24} color="#F7DF1E" /> },
  { id: "react", name: "React", level: 80, icon: <FaReact size={24} color="#61DAFB" /> },
  { id: "python", name: "Python", level: 50, icon: <FaPython size={24} color="#3776AB" /> },
  { id: "flask", name: "Flask", level: 50, icon: <SiFlask size={24} color="#000000" /> },
  { id: "mongodb", name: "MongoDB", level: 80, icon: <SiMongodb size={24} color="#47A248" /> },
  { id: "firebase", name: "Firebase", level: 40, icon: <SiFirebase size={24} color="#FFCA28" /> },
];

const otherSkills = [
  "Computer Skills",
  "Microsoft",
  "Tally Prime",
  "Photoshop",
  "Negotiation",
  "Critical Thinking",
];

const COLORS = [
  "rgba(17,95,154,0.9)",
  "rgba(25,132,197,0.9)",
  "rgba(34,167,240,0.9)",
  "rgba(72,181,196,0.9)",
  "rgba(118,198,143,0.9)",
  "rgba(166,215,91,0.9)",
  "rgba(201,229,47,0.9)",
  "rgba(208,238,17,0.9)",
  "rgba(208,244,0,0.9)"
];

export default function SkillsSection() {
  const [animatedLevels, setAnimatedLevels] = useState(techSkills.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Animate skill bars
    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
            setAnimatedLevels(prev =>
                prev.map((val, idx) => (val < techSkills[idx].level ? val + 2 : val))
            );
            }, 30);
            return () => clearInterval(interval);
        } else {
            // Reset when leaving viewport
            setAnimatedLevels(techSkills.map(() => 0));
        }
        }, [inView]);

  // Pie chart data
  const pieData = {
    labels: techSkills.map(skill => skill.name),
    datasets: [
      {
        data: techSkills.map(skill => skill.level),
        backgroundColor: COLORS,
        hoverOffset: 100,
      },
    ],
  };

  // Pie chart options
  const pieOptions = {
    responsive: true,
    layout: { padding: 40 },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const skill = techSkills[context.dataIndex];
            return `${skill.name}: ${skill.level}%`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 200,
      easing: "easeOutBounce",
    },
  };

  return (
    <section id="skills" className="py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full max-w-[320px] h-[320px] mx-auto mb-12"
        >
          <Pie data={pieData} options={pieOptions} width={320} height={320} />
        </motion.div>

        {/* Tech Skills Bars */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {techSkills.map((tech, idx) => (
            <div key={tech.id} className="flex items-center gap-3">
              <div>{tech.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-white">
                  <span>{tech.name}</span>
                  <span>{animatedLevels[idx]}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-600 transition-all"
                    style={{ width: `${animatedLevels[idx]}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
