// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const projects = [
//   {
//     title: "ThinkBoard",
//     desc: "Full Stack MERN Notes App with JWT + Rate Limiting.",
//     github: "https://github.com/geet182022-prog/ThinkBoard",
//   },
//   {
//     title: "PassVault",
//     desc: "Secure Password Manager with Encryption + Auth.",
//     github: "https://github.com/geet182022-prog/PassVault",
//   },
//   {
//     title: "FlixoniX",
//     desc: "Netflix-inspired Movie Streaming UI.",
//     github: "https://github.com/geet182022-prog/FlixoniX",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-purple-400">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8 mt-12">
//         {projects.map((p) => (
//           <Card
//             key={p.title}
//             className="p-6 bg-black/40 border border-white/10 hover:border-purple-400 transition rounded-2xl"
//           >
//             <h3 className="text-xl font-semibold text-cyan-300">
//               {p.title}
//             </h3>
//             <p className="mt-3 text-gray-300">{p.desc}</p>

//             <Button
//               asChild
//               className="mt-5 bg-cyan-400 text-black hover:bg-cyan-300"
//             >
//               <a href={p.github} target="_blank">
//                 GitHub Repo →
//               </a>
//             </Button>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "ThinkBoard",
    desc: "Full Stack MERN Notes App with JWT Authentication + Rate Limiting.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/geet182022-prog/ThinkBoard",
    live: "#",
  },
  {
    title: "PassVault",
    desc: "Secure Password Manager with Encryption + Authentication.",
    tech: ["React", "Express", "MongoDB", "CryptoJS"],
    github: "https://github.com/geet182022-prog/PassVault",
    live: "https://pass-vault-secure-password-manager-two.vercel.app",

    
  features: [
    "OTP-based Two Factor Authentication (2FA)",
    "Client-side AES encryption (zero-knowledge inspired)",
    "Refresh token rotation + secure cookies",
    "Vault auto-lock after inactivity",
    "Deployed on Vercel + Render + MongoDB Atlas"
  ],
  },
  {
    title: "FlixoniX",
    desc: "Netflix-inspired Movie Streaming UI with responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/geet182022-prog/FlixoniX",
    live: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400">Projects</h2>

      <p className="mt-3 text-gray-400">
        Click on any project to view details.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {projects.map((p) => (
          <Card
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="cursor-pointer p-6 bg-gray-800/25 border border-white/10 
                       hover:border-cyan-400 transition rounded-2xl 
                       hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-cyan-300">{p.title}</h3>

            <p className="mt-3 text-gray-300 line-clamp-3">{p.desc}</p>

            {/* ✅ Tech Chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full 
                 bg-white/5 border border-white/10 
                 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-cyan-400">Click to view more →</p>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {/* <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      /> */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
