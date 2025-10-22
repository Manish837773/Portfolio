import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshotImage from "@assets/generated_images/Photo.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.2),transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-white to-secondary rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-500" />
              <img
                src={headshotImage}
                alt="Sai Manish S"
                className="relative w-70 h-70 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
                data-testid="img-hero-headshot"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-block">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30">
                Available for Opportunities
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-poppins text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80" data-testid="text-hero-name">
              SAI MANISH S
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-6" data-testid="text-hero-title">
              Microsoft Certified Data Engineer
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-2xl mb-8" data-testid="text-hero-intro">
              4 years of experience in ETL development, data platform modernization, and workflow automation. 
              Skilled in Azure, Databricks, Microsoft Fabric, Spark, and SQL with a proven track record of 
              optimizing performance and delivering scalable solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button 
                variant="default"
                size="lg"
                onClick={() => scrollToSection("experience")}
                className="bg-white/90 hover:bg-white text-primary font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-md font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex gap-3 justify-center md:justify-start">
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://www.linkedin.com/in/sai-manish-s/", "_blank")}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://github.com/", "_blank")}
                data-testid="button-github"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
