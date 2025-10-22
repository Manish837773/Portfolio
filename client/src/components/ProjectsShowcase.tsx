import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "./TechBadge";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Doc Bot",
    description: "AI-powered Q&A bot using Retrieval-Augmented Generation (RAG) to answer queries on uploaded documents with accurate, context-aware responses.",
    technologies: ["Python", "RAG", "ChromaDB", "Streamlit", "LLMs"],
    gradient: "from-blue-500 to-purple-500",
    features: [
      "Vector embeddings and semantic search",
      "Interactive UI for file upload and query input",
      "Integration with LLMs for context-aware responses",
      "Scalable solution for document intelligence and enterprise search"
    ]
  },
  {
    title: "Python Games: PONG",
    description: "Classic Pong game implementation with real-time user interaction, smooth gameplay mechanics, and score tracking system.",
    technologies: ["Python", "Game Development", "OOP"],
    gradient: "from-orange-500 to-pink-500",
    features: [
      "Real-time user interaction",
      "Score tracking system",
      "Smooth collision detection",
      "Classic arcade experience"
    ]
  },
  {
    title: "Python Games: Quiz Game",
    description: "Interactive quiz game with multiple-choice questions, dynamic scoring system, and time limits for engaging gameplay.",
    technologies: ["Python", "Interactive UI", "Logic Design"],
    gradient: "from-teal-500 to-cyan-500",
    features: [
      "Multiple-choice question system",
      "Dynamic scoring mechanism",
      "Time-limited challenges",
      "User-friendly interface"
    ]
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(66,153,225,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4" data-testid="text-projects-heading">
            Personal Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring innovation through hands-on development and experimentation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 flex flex-col group border-2 hover:border-primary/50 overflow-hidden"
              data-testid={`card-project-${index}`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardHeader>
                <CardTitle className="text-xl font-poppins flex items-start justify-between gap-2" data-testid={`text-project-title-${index}`}>
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    {project.title}
                  </span>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="h-8 w-8 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => console.log(`View project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription className="text-sm" data-testid={`text-project-desc-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} data-testid={`text-project-feature-${index}-${featureIndex}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex} name={tech} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
