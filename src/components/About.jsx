import { motion } from "framer-motion";
import myPhoto from "../assets/pic_2.png"; 

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={myPhoto}
            alt="Dhananjay Kar"
            className="filter transition-all duration-500 halo"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-blue-400">Dhananjay Kar</span>, 
            a passionate <span className="text-blue-400">Full Stack Developer </span> 
            with a strong foundation in the <span className="text-blue-400">MERN stack </span> 
            and growing expertise in <span className="text-blue-400">Python</span>. 
            I love building projects that are technically sound and engaging to use.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond coding, I believe in <span className="text-blue-400">continuous learning</span> — 
            whether it’s exploring new frameworks, cloud technologies, or even learning 
            <span className="text-blue-400"> French</span>. When I’m not coding, 
            I’m usually brainstorming new project ideas or reading about adventure fiction.
          </p>
          <p className="text-gray-300 leading-relaxed">
            At my core, I enjoy challenges that push me to grow, and I aim to build 
            solutions that make a difference.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
