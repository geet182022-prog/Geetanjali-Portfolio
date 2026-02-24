// export default function Footer() {
//   return (
//     <footer className="py-6 text-center text-gray-500 border-t border-white/10">
//       © {new Date().getFullYear()} Geetanjali.dev — Built with ❤️ + Next.js
//     </footer>
//   );
// }



import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/geet182022-prog"
          target="_blank"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/geetanjali-96a099284/"
          target="_blank"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          <Linkedin />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Geetanjali — Built with Next.js + Tailwind 💜
      </p>
    </footer>
  );
}
