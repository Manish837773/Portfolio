import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsMatrix />
      <ProjectsShowcase />
      <Certifications />
      <ContactSection />
      
      <footer className="bg-foreground text-background py-8" data-testid="footer-main">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm" data-testid="text-footer-copyright">
            © 2024 Sai Manish S. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
