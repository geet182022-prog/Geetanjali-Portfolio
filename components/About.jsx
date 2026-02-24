export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400">About Me</h2>

      {/* Intro */}
      <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-3xl">
        I’m a Computer Science undergraduate (GPA:{" "}
        <span className="text-cyan-400 font-semibold">9.54/10</span>) with
        strong interests in{" "}
        <span className="text-purple-400 font-semibold">
          software engineering
        </span>
        ,{" "}
        <span className="text-cyan-400 font-semibold">
          full-stack MERN development
        </span>
        , and{" "}
        <span className="text-pink-400 font-semibold">
          backend systems & secure authentication
        </span>
        .
      </p>

      {/* Project Proof */}
      <p className="mt-4 text-gray-300 leading-relaxed text-lg max-w-3xl">
        I’ve built production-grade applications like{" "}
        <span className="text-cyan-300 font-semibold">PassVault</span>, a secure
        password manager featuring OTP-based 2FA, encryption, refresh token
        rotation, and scalable REST APIs for real-world workflows, deployed on
        Vercel + Render + MongoDB Atlas.
      </p>

      {/* Internship + Skills */}
      <p className="mt-4 text-gray-300 leading-relaxed text-lg max-w-3xl">
        With{" "}
        <span className="text-cyan-400 font-semibold">
          530+ DSA problems solved
        </span>{" "}
        and certifications in DBMS (Top 5% NPTEL) and Oracle Cloud, I’m actively
        seeking{" "}
        <span className="text-purple-400 font-semibold">
          Software Engineering Internship
        </span>{" "}
        roles where I can contribute to impactful products while continuing to
        grow as a developer.
      </p>

      {/* Internship Intent Line */}
      <p className="mt-6 text-gray-400 italic max-w-3xl">
        Currently open to Software Engineering Intern, Full Stack Intern, and
        Backend Intern opportunities.
      </p>

      {/* Highlight Badges */}
      <div className="flex flex-wrap gap-3 mt-6">
        <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">
          💻 Full Stack (MERN)
        </span>

        <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm">
          ⚙️ Backend + APIs
        </span>

        <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-300 text-sm">
          🔐 Security + Authentication
        </span>

        <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-300 text-sm">
          🚀 530+ DSA Problems Solved
        </span>

        <span className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-300 text-sm">
          ☁️ Oracle Cloud Certified
        </span>
        <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm">
          🌍 Deployed on Vercel + Render
        </span>
      </div>
    </section>
  );
}
