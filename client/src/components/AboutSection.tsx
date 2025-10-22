import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,153,225,0.08),transparent_60%)]" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About Me</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6" data-testid="text-about-heading">
            Transforming Data Into Insights
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-foreground text-center" data-testid="text-about-content">
            I'm a Microsoft Certified Data Engineer with a passion for transforming complex data challenges 
            into elegant, scalable solutions. Over the past 4 years, I've specialized in ETL development, 
            data platform modernization, and workflow automation across cloud platforms.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center" data-testid="text-about-content-2">
            My expertise spans the entire data engineering lifecycle—from designing robust data pipelines 
            and optimizing performance to migrating legacy systems to modern cloud architectures. I've had 
            the privilege of working with industry leaders like BAT and the Income Tax Department of India, 
            where I've delivered solutions that drive efficiency and enable data-driven decision-making.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                4+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
              <div className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mb-2">
                900+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Tables Migrated
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <div className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary mb-2">
                30%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Performance Boost
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
