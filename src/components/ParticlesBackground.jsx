import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        shape: { type: "circle" },
        size: {
          value: { min: 10, max: 40 }, // bubble size
          animation: { enable: true, speed: 2, minimumValue: 5 },
        },
        opacity: {
          value: { min: 0.2, max: 0.5 },
          animation: { enable: true, speed: 0.4, minimumValue: 0.1 },
        },
        move: {
          enable: true,
          direction: "top",
          outModes: { default: "out" },
          speed: { min: 0.3, max: 1 },
          random: true,
        },
        color: {
          value: ["#ffffff", "#a0d8ef", "#ffcccc", "#d1b3ff", "#b2f7ef"],
        },
      },
      interactivity: {
        events: { 
          onHover: { enable: true, mode: "repulse" }, // ⬅️ repulse instead of bubble
          resize: true 
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 }, // stronger push-away effect
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-20 w-full h-full"
    />
  );
}
