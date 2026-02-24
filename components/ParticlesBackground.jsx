import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
