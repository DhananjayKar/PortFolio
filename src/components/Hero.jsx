import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/pic_1.png";
import myCV from "../assets/Dhananjay_Kar.pdf";

const Hero = () => {
  return (
      <section
        id="home"
        className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
      >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-xl md:text-4xl text-gray-300">Hey, it's me!</h1>
          <h1 className="text-4xl md:text-6xl font-bold">Dhananjay Kar</h1>
          <h2 className="text-xl md:text-2xl text-gray-300">
            <Typewriter
              words={[
                "A Full Stack Web Developer",
                "A MERN Stack Specialist",
                "A Creative UI/UX Designer",
                "A Lifelong Learner",
                "A Critical Thinker",
                "A Multilingual Communicator",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
          >
            View Résumé
          </a>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="perspective-1000">
            <div className="w-72 h-72 md:w-100 md:h-100 animate-tilt-3d scale-110 transition-transform">
              <img
                src={myPhoto}
                alt="Dhananjay Kar"
                className="w-full h-full object-contain select-none transition-all duration-500 halo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
