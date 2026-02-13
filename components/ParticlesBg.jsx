"use client";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: { value: "#05050a" } },
        particles: {
          number: { value: 60 },
          color: { value: "#22d3ee" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
