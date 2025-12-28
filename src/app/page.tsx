import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
