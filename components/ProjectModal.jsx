"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ duration: 0.3 }}
            className="max-w-lg w-full rounded-2xl bg-[#0b0f1f] border border-white/10 p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-cyan-400">
              {project.title}
            </h2>

            <p className="mt-4 text-gray-300">{project.desc}</p>

            {/* ✅ Key Highlights */}
            {project.features && (
              <>
                <h3 className="mt-6 text-lg font-semibold text-purple-300">
                  Key Highlights
                </h3>

                <ul className="mt-3 space-y-2 text-gray-400 list-disc list-inside">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                asChild
                className="bg-cyan-400 text-black hover:bg-cyan-300"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </Button>

              {project.live !== "#" && (
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-400 text-purple-300"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="mt-8 text-gray-400 hover:text-red-400 transition block"
            >
              Close ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
