"use client";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400">Geetanjali.dev</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        <Button asChild className="bg-cyan-400 text-black hover:bg-cyan-300">
          <a href="/Geetanjali.pdf" download>
            Resume
          </a>
        </Button>
      </div>
    </nav>
  );
}
