"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/geet182022-prog",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/geetanjali-96a099284/",
    },
    {
      name: "LeetCode",
      icon: <Code2 size={24} />,
      link: "https://leetcode.com/u/Geetanjali2023/",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      // link: "mailto:geetanjali08102004@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=geetanjali08102004@gmail.com&su=Internship%20Opportunity&body=Hello%20Geetanjali,",
    },
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold text-purple-400">Let’s Connect</h2>

      <p className="mt-3 text-gray-400">Find me on these platforms ✨</p>

      <div className="flex justify-center flex-wrap gap-6 mt-12">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-xl 
                       bg-black/40 border border-white/10
                       hover:border-cyan-400 transition
                       hover:shadow-[0_0_20px_#00ffff]"
          >
            <span className="text-cyan-300">{s.icon}</span>
            <span className="text-gray-200 font-medium">{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
