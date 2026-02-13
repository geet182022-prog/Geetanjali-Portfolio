import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    // <main className="min-h-screen bg-black text-white">
    <main className="relative min-h-screen text-white"> 
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
     </main> 
    // </main>
  );
}
