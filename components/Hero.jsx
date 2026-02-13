"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-400">Geetanjali</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-2xl font-semibold"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
               bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]cd "
            >
              <TypeAnimation
                sequence={[
                  "Tech Enthusiast 🚀",
                  1500,
                  "Full Stack Developer 💻",
                  1500,
                  "Backend + Security Focused 🔐",
                  1500,
                  "MERN Stack Engineer ⚡",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.span>
          </motion.div>

          <div className="mt-6 flex gap-4">
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300">
              View Projects
            </Button>

            <Button variant="outline" className="border-cyan-400 text-cyan-300">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-40 absolute"></div>
          <div className="w-60 h-60 rounded-full border-4 border-cyan-400 flex items-center justify-center text-6xl font-bold relative">
            G
          </div>
        </motion.div>
      </div>
    </section>
  );
}
