import { Card } from "@/components/ui/card";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Tailwind",
  "Java",
  "DSA",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((s) => (
            <Card
              key={s}
              className="p-6 text-center text-white bg-black/40 border border-white/10 hover:border-cyan-400 transition rounded-2xl"
            >
              {s}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
