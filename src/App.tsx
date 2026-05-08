import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
