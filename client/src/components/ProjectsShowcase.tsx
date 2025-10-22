import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "./TechBadge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: "Doc Bot",
    description: "AI-powered Q&A bot using Retrieval-Augmented Generation (RAG) to answer queries on uploaded documents with accurate, context-aware responses.",
    technologies: ["Python", "RAG", "ChromaDB", "Streamlit", "LLMs"],
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
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-12 text-center" data-testid="text-projects-heading">
          Personal Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 flex flex-col"
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-poppins flex items-center justify-between gap-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={() => console.log(`View project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription data-testid={`text-project-desc-${index}`}>
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
