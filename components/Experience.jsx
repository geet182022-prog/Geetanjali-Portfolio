// export default function Experience() {
//   return (
//     <section className="py-24 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-bold text-cyan-400">
//         Experience
//       </h2>

//       <div className="mt-12 border-l border-white/20 pl-6 space-y-10">
//         <div>
//           <h3 className="text-xl font-semibold text-purple-300">
//             Full Stack Developer Projects
//           </h3>
//           <p className="text-gray-400">
//             Built ThinkBoard & PassVault with MERN + JWT Security.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-purple-300">
//             Internship Preparation
//           </h3>
//           <p className="text-gray-400">
//             Focused on DSA + scalable backend development.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }















// import { Briefcase, Shield, Code2 } from "lucide-react";

// export default function Experience() {
//   const experiences = [
//     {
//       title: "Full Stack Developer Projects",
//       icon: <Code2 className="text-cyan-400" size={22} />,
//       desc: (
//         <>
//           Built production-grade MERN applications like{" "}
//           <span className="text-cyan-300 font-semibold">PassVault</span> and{" "}
//           <span className="text-cyan-300 font-semibold">ThinkBoard</span>,
//           implementing secure authentication, scalable REST APIs, and cloud
//           deployment.
//         </>
//       ),
//     },
//     {
//       title: "Backend + Security Focus",
//       icon: <Shield className="text-pink-400" size={22} />,
//       desc: (
//         <>
//           Designed OTP-based 2FA, encryption workflows, refresh token rotation,
//           and secure session handling to strengthen application security.
//         </>
//       ),
//     },
//     {
//       title: "Internship & Problem Solving Prep",
//       icon: <Briefcase className="text-purple-400" size={22} />,
//       desc: (
//         <>
//           Solved{" "}
//           <span className="text-cyan-400 font-semibold">530+ DSA problems</span>{" "}
//           across LeetCode & CodeChef while building strong foundations in DBMS,
//           OS, and scalable backend development.
//         </>
//       ),
//     },
//   ];

//   return (
//     <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-bold text-cyan-400 mb-12">Experience</h2>

//       <div className="space-y-10 border-l border-white/10 pl-8">
//         {experiences.map((exp, i) => (
//           <div key={i} className="relative">
//             {/* Dot */}
//             <div className="absolute -left-[42px] top-1 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center">
//               {exp.icon}
//             </div>

//             {/* Content */}
//             <h3 className="text-xl font-semibold text-purple-300">
//               {exp.title}
//             </h3>

//             <p className="mt-2 text-gray-400 leading-relaxed max-w-3xl">
//               {exp.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//       <p className="mt-10 text-gray-500 italic">
//         Actively seeking Software Engineering Internship opportunities to
//         contribute to scalable products and learn at industry scale.
//       </p>
//     </section>
//   );
// }








import { Briefcase, Shield, Code2, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Projects",
      icon: <Code2 className="text-cyan-400" size={22} />,
      desc: (
        <>
          Built production-grade MERN applications like{" "}
          <span className="text-cyan-300 font-semibold">PassVault</span> and{" "}
          <span className="text-cyan-300 font-semibold">ThinkBoard</span>,
          implementing secure authentication, scalable REST APIs, and responsive
          full-stack workflows.
        </>
      ),
    },
    {
      title: "Backend + Security Engineering Focus",
      icon: <Shield className="text-pink-400" size={22} />,
      desc: (
        <>
          Implemented OTP-based 2FA, encryption, refresh token rotation, secure
          cookies, and vault auto-lock mechanisms to strengthen application
          security and session handling.
        </>
      ),
    },
    {
      title: "Cloud Deployment & Production Debugging",
      icon: <Briefcase className="text-purple-400" size={22} />,
      desc: (
        <>
          Deployed projects on{" "}
          <span className="text-cyan-300 font-semibold">
            Vercel + Render + MongoDB Atlas
          </span>
          , resolving real production issues like CORS, cookie persistence, and
          OTP email delivery.
        </>
      ),
    },
    {
      title: "Training & Team Development Experience",
      icon: <GraduationCap className="text-green-400" size={22} />,
      desc: (
        <>
          Completed in-house MERN + Java training at{" "}
          <span className="text-cyan-300 font-semibold">CDAC Kolkata</span>,
          contributing to backend APIs and MongoDB integration in a 10-member
          Online Examination Portal project.
        </>
      ),
    },
    {
      title: "Problem Solving & Internship Preparation",
      icon: <Code2 className="text-yellow-400" size={22} />,
      desc: (
        <>
          Solved{" "}
          <span className="text-cyan-400 font-semibold">
            530+ DSA problems
          </span>{" "}
          across LeetCode and CodeChef, building strong foundations in DBMS, OS,
          OOP, and scalable backend development.
        </>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Experience
      </h2>

      <div className="space-y-10 border-l border-white/10 pl-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] top-1 w-10 h-10 rounded-full 
              bg-black border border-white/10 flex items-center justify-center">
              {exp.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-purple-300">
              {exp.title}
            </h3>

            <p className="mt-2 text-gray-400 leading-relaxed max-w-3xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Internship Intent */}
      <p className="mt-12 text-gray-500 italic max-w-3xl">
        Actively seeking Software Engineering Internship opportunities to
        contribute to impactful products while continuing to grow as a developer.
      </p>
    </section>
  );
}

