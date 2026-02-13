import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ThinkBoard",
    desc: "Full Stack MERN Notes App with JWT + Rate Limiting.",
    github: "https://github.com/geet182022-prog/ThinkBoard",
  },
  {
    title: "PassVault",
    desc: "Secure Password Manager with Encryption + Auth.",
    github: "https://github.com/geet182022-prog/PassVault",
  },
  {
    title: "FlixoniX",
    desc: "Netflix-inspired Movie Streaming UI.",
    github: "https://github.com/geet182022-prog/FlixoniX",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="p-6 bg-black/40 border border-white/10 hover:border-purple-400 transition rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-cyan-300">
              {p.title}
            </h3>
            <p className="mt-3 text-gray-300">{p.desc}</p>

            <Button
              asChild
              className="mt-5 bg-cyan-400 text-black hover:bg-cyan-300"
            >
              <a href={p.github} target="_blank">
                GitHub Repo →
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
