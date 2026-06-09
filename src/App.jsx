import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoStats } from "@/components/sections/BentoStats";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9FF]">
      <Navbar />
      <main>
        <Hero />
        <BentoStats />
        <CurrentlyBuilding />
        <Work />
        <Skills />
        <About />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
