// "use client";

// import { Github, Linkedin, Mail, Code2 } from "lucide-react";

// export default function FloatingSocials() {
//   const socials = [
//     {
//       icon: <Github size={20} />,
//       link: "https://github.com/geet182022-prog",
//     },
//     {
//       icon: <Linkedin size={20} />,
//       link: "https://www.linkedin.com/in/geetanjali-96a099284/",
//     },
//     {
//       icon: <Code2 size={20} />,
//       link: "https://leetcode.com/u/Geetanjali2023/",
//     },
//     {
//       icon: <Mail size={20} />,
//       link: "mailto:geetanjali08102004@gmail.com?subject=Opportunity%20Regarding%20Internship&body=Hello%20Geetanjali,",
//     },
//   ];

//   return (
//     <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
//       {socials.map((s, i) => (
//         <a
//           key={i}
//           href={s.link}
//           target="_blank"
//           className="p-3 rounded-full bg-black/40 border border-white/10 
//                      hover:border-cyan-400 hover:scale-110 transition
//                      hover:shadow-[0_0_15px_#00ffff]"
//         >
//           <span className="text-cyan-300">{s.icon}</span>
//         </a>
//       ))}
//     </div>
//   );
// }



"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function FloatingSocials() {
  const socials = [
    {
      icon: <Github size={20} />,
      link: "https://github.com/geet182022-prog",
    },
    {
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/geetanjali-96a099284/",
    },
    {
      icon: <Code2 size={20} />,
      link: "https://leetcode.com/u/Geetanjali2023/",
    },
    {
      icon: <Mail size={20} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=geetanjali08102004@gmail.com&su=Internship%20Opportunity&body=Hello%20Geetanjali,",
    },
  ];

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
      {socials.map((s, i) => {
        const isExternal = s.link.startsWith("http");

        return (
          <a
            key={i}
            href={s.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="p-3 rounded-full bg-black/40 border border-white/10 
                       hover:border-cyan-400 hover:scale-110 transition
                       hover:shadow-[0_0_15px_#00ffff]"
          >
            <span className="text-cyan-300">{s.icon}</span>
          </a>
        );
      })}
    </div>
  );
}