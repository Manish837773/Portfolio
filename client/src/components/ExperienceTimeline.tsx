import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechBadge from "./TechBadge";
import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  projects: Project[];
}

const experiences: Experience[] = [
  {
    company: "ITC Infotech",
    role: "Associate Consultant | D&A Team",
    period: "March 2024 - Present",
    current: true,
    projects: [
      {
        title: "Global Leaf Processing – Supply Analytics",
        description: "Designed, developed, and implemented the entire ETL pipeline for the Supply vertical using Microsoft Fabric Data Factory and Notebooks.",
        achievements: [
          "Collaborated directly with clients to gather reporting requirements and perform Source-to-Target mapping",
          "Defined KPIs for Power BI dashboards",
          "Modeled the Gold layer using Dimension modeling for DIM tables and FACT tables",
          "Optimized data for supply chain visibility and real-time reporting"
        ],
        technologies: ["Azure Databricks", "Microsoft Fabric", "ETL", "Lakehouse", "Spark"]
      },
      {
        title: "Snowflake to Microsoft Fabric Migration",
        description: "Led the full migration of all data warehousing and analytics pipelines from Snowflake to Microsoft Fabric.",
        achievements: [
          "Migrated 900+ SQL tables/views and reporting dataflows",
          "Converted Snowflake SQL code to Fabric-compatible Spark code",
          "Streamlined job orchestration using Fabric pipelines",
          "Achieved seamless system transition with improved performance and reduced downtime"
        ],
        technologies: ["Data Migration", "Spark", "Job Orchestration", "Azure Data Factory"]
      },
      {
        title: "Data Science ETL Migration",
        description: "Migrated 10+ live ETL pipelines independently, replicating orchestration, scheduling, and dependencies from Databricks into Microsoft Fabric.",
        achievements: [
          "Engineered data ingestion frameworks integrating Azure Blob Storage and REST APIs",
          "Reverse-engineered custom Databricks libraries and rebuilt runtime environment",
          "Achieved zero-downtime migration for live machine learning pipelines",
          "Improved pipeline execution efficiency by ~30% using Fabric-native Spark optimizations"
        ],
        technologies: ["Microsoft Fabric", "Azure Databricks", "PySpark", "Delta Lake", "REST APIs"]
      }
    ]
  },
  {
    company: "Infosys Ltd",
    role: "Senior Systems Engineer | Income Tax",
    period: "October 2021 - March 2024",
    current: false,
    projects: [
      {
        title: "Income Tax of India",
        description: "Developed and maintained components for processing Income Tax Returns (ITRs), ensuring accurate handling of taxpayer data.",
        achievements: [
          "Created and deployed a real-time monitoring dashboard in Dynatrace",
          "Managed processing of approximately 7 crore emails and SMS notifications",
          "Led initiative to increase SONAR code coverage from 60% to 80%",
          "Enhanced API performance for smooth taxpayer communication systems"
        ],
        technologies: ["Spring", "Java", "Dynatrace", "REST APIs"]
      }
    ]
  }
];

export default function ExperienceTimeline() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProject = (projectKey: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectKey]: !prev[projectKey]
    }));
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,101,101,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Career Journey</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4" data-testid="text-experience-heading">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building enterprise-scale data solutions across leading organizations
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" data-testid="line-timeline" />
          
          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <div 
                key={expIndex} 
                className={`relative flex flex-col ${expIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
              >
                <div className="flex-1">
                  <Card className="hover-elevate border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden" data-testid={`card-experience-${expIndex}`}>
                    <div className={`h-1 bg-gradient-to-r ${expIndex === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'}`} />
                    <CardHeader className="gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle className="text-2xl font-poppins" data-testid={`text-company-${expIndex}`}>
                          {exp.company}
                        </CardTitle>
                        {exp.current && (
                          <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary" data-testid="badge-current">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-muted-foreground" data-testid={`text-role-${expIndex}`}>
                        {exp.role}
                      </p>
                      <p className="text-sm text-muted-foreground font-medium" data-testid={`text-period-${expIndex}`}>
                        {exp.period}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {exp.projects.map((project, projIndex) => {
                        const projectKey = `${expIndex}-${projIndex}`;
                        const isExpanded = expandedProjects[projectKey];
                        
                        return (
                          <div key={projIndex} className="border-l-4 border-primary pl-4 hover:border-secondary transition-colors duration-300">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h4 className="font-semibold text-lg" data-testid={`text-project-title-${projectKey}`}>
                                {project.title}
                              </h4>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => toggleProject(projectKey)}
                                className="flex-shrink-0 h-8 w-8 hover:bg-primary/10"
                                data-testid={`button-toggle-project-${projectKey}`}
                              >
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </Button>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-3" data-testid={`text-project-desc-${projectKey}`}>
                              {project.description}
                            </p>
                            
                            {isExpanded && (
                              <div className="space-y-3" data-testid={`div-project-details-${projectKey}`}>
                                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                                  {project.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} data-testid={`text-achievement-${projectKey}-${achIndex}`}>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                                
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {project.technologies.map((tech, techIndex) => (
                                    <TechBadge key={techIndex} name={tech} />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 -ml-[9px] md:-ml-[9px] bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg" data-testid={`dot-timeline-${expIndex}`} />
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
