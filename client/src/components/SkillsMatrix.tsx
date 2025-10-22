import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "./TechBadge";
import { Database, Code, Cloud, Brain, Cog } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Big Data & Warehousing",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "Microsoft Fabric",
      "Snowflake",
      "Azure Databricks",
      "Azure Data Factory",
      "Apache Spark",
      "PySpark",
      "Delta Lake",
      "Parquet"
    ]
  },
  {
    title: "ETL & Data Integration",
    icon: <Cog className="w-6 h-6" />,
    skills: [
      "ETL Pipeline Design",
      "Data Modeling",
      "Star Schema",
      "Dimension Modeling",
      "SQL Performance Tuning",
      "Job Orchestration",
      "Data Migration",
      "REST APIs"
    ]
  },
  {
    title: "Programming & Frameworks",
    icon: <Code className="w-6 h-6" />,
    skills: [
      "Python",
      "Pandas",
      "PySpark",
      "Java",
      "TypeScript",
      "T-SQL",
      "FastAPI",
      "Streamlit",
      "Docker"
    ]
  },
  {
    title: "Cloud Platforms & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      "Microsoft Azure",
      "Azure Blob Storage",
      "Data Lake Gen2",
      "CI/CD Pipelines",
      "Azure DevOps",
      "GitLab",
      "Dynatrace",
      "Git"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Data Preparation for ML",
      "Feature Engineering",
      "RAG Applications",
      "ChromaDB",
      "Vector Embeddings",
      "ML Pipelines"
    ]
  }
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-12 text-center" data-testid="text-skills-heading">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <CardHeader className="gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-poppins" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <TechBadge key={skillIndex} name={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
