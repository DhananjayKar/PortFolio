import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ParticlesBackground from "./components/ParticlesBackground";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative z-10 w-full overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
