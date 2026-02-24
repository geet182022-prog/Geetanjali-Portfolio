// "use client";
// import Particles from "react-tsparticles";

// export default function ParticlesBg() {
//   return (
//     <Particles
//       options={{
//         background: { color: { value: "#05050a" } },
//         particles: {
//           number: { value: 60 },
//           color: { value: "#22d3ee" },
//           opacity: { value: 0.3 },
//           size: { value: 2 },
//           move: { enable: true, speed: 1 },
//         },
//       }}
//       className="absolute inset-0 -z-10"
//     />
//   );
// }



// import { Dialog } from "@headlessui/react";

// export default function ProjectModal({ open, setOpen, project }) {
//   return (
//     <Dialog open={open} onClose={() => setOpen(false)}>
//       <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
//         <div className="bg-gray-900 p-6 rounded-2xl w-[90%] max-w-xl">
//           <h2 className="text-2xl font-bold text-cyan-400">
//             {project.title}
//           </h2>

//           <p className="mt-3 text-gray-300">
//             {project.description}
//           </p>

//           <div className="mt-4 flex gap-3">
//             <a
//               href={project.github}
//               className="px-4 py-2 bg-cyan-500 rounded-lg"
//             >
//               GitHub
//             </a>

//             <a
//               href={project.live}
//               className="px-4 py-2 bg-green-500 rounded-lg"
//             >
//               Live Demo
//             </a>
//           </div>
//         </div>
//       </div>
//     </Dialog>
//   );
// }







"use client";

import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: { value: 50 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
          },
        },
      }}
    />
  );
}
