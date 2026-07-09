import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Referees } from "@/components/sections/Referees";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Marquee />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Referees />
    </main>
  );
}
