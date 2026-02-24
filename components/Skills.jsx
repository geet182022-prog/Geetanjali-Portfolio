// import { Card } from "@/components/ui/card";

// const skills = [
//   "React",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "JWT",
//   "Tailwind",
//   "Java",
//   "DSA",
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 px-6 bg-white/5">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-cyan-400">
//           Skills
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//           {skills.map((s) => (
//             <Card
//               key={s}
//               className="p-6 text-center text-white bg-black/40 border border-white/10 hover:border-cyan-400 transition rounded-2xl"
//             >
//               {s}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Code2, Database, Shield, Wrench, Cpu, Cloud } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      icon: <Code2 className="text-cyan-400" size={22} />,
      skills: ["Java", "JavaScript", "Python", "C"],
    },
    {
      title: "Frontend",
      icon: <Cpu className="text-purple-400" size={22} />,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code2 className="text-pink-400" size={22} />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Databases",
      icon: <Database className="text-green-400" size={22} />,
      skills: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      title: "Security",
      icon: <Shield className="text-red-400" size={22} />,
      skills: ["OTP-based 2FA", "bcrypt", "AES Encryption", "Secure Cookies"],
    },
    {
      title: "Core CS",
      icon: <Cpu className="text-yellow-400" size={22} />,
      skills: ["DSA", "DBMS", "OOP", "Computer Networks", "Operating Systems"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-blue-400" size={22} />,
      skills: ["Git", "GitHub", "Linux", "VS Code", "IntelliJ IDEA"],
    },
    {
      title: "Deployment & Platforms",
      icon: <Cloud className="text-blue-300" size={22} />,
      skills: [
        "Vercel Deployment",
        "Render Hosting",
        "MongoDB Atlas",
        "Environment Variables",
        "CORS + Cookie Debugging",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-900/20 border border-white/10 
                       hover:border-cyan-400 transition"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h3 className="text-xl font-semibold text-purple-300">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-4 py-2 rounded-full text-sm 
                             bg-white/5 text-gray-300 border border-white/10
                             hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
