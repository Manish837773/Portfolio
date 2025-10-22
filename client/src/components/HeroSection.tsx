import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshotImage from "@assets/generated_images/Professional_headshot_portrait_data_engineer_13a8b9e6.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D3748] to-[#4299E1]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <img
              src={headshotImage}
              alt="Sai Manish S"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              data-testid="img-hero-headshot"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-4" data-testid="text-hero-name">
              SAI MANISH S
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6" data-testid="text-hero-title">
              Microsoft Certified Data Engineer
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-2xl mb-8" data-testid="text-hero-intro">
              4 years of experience in ETL development, data platform modernization, and workflow automation. 
              Skilled in Azure, Databricks, Microsoft Fabric, Spark, and SQL with a proven track record of 
              optimizing performance and delivering scalable solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button 
                variant="default"
                size="lg"
                onClick={() => scrollToSection("experience")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-white/5 hover:bg-white/15 text-white border-white/30 backdrop-blur-sm"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => window.open("https://github.com/", "_blank")}
                data-testid="button-github"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => scrollToSection("contact")}
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
