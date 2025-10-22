import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";

interface Certification {
  name: string;
  provider: string;
  year?: string;
}

const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Fabric Analytics Engineer Associate",
    provider: "Microsoft",
    year: "2024"
  },
  {
    name: "Implement Real time Intelligence in Microsoft Fabric",
    provider: "Microsoft",
    year: "2024"
  },
  {
    name: "Gen AI for everyone",
    provider: "Coursera",
    year: "2024"
  },
  {
    name: "Python for Data Science and AI",
    provider: "Coursera",
    year: "2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4" data-testid="text-certifications-heading">
            Certifications & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 border-2 hover:border-accent/50 group"
              data-testid={`card-certification-${index}`}
            >
              <CardHeader className="gap-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-accent/70 rounded-xl text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-poppins mb-2" data-testid={`text-cert-name-${index}`}>
                      {cert.name}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20" data-testid={`badge-cert-provider-${index}`}>
                        {cert.provider}
                      </Badge>
                      {cert.year && (
                        <span className="text-sm text-muted-foreground font-medium" data-testid={`text-cert-year-${index}`}>
                          {cert.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Card className="inline-block bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white shadow-xl">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl font-poppins mb-1" data-testid="text-education-degree">
                    Bachelor's Degree in Electronics and Communication
                  </h3>
                  <p className="text-muted-foreground font-medium" data-testid="text-education-details">
                    Amrita Vishwavidhyapeetam, Bangalore
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="default" className="bg-primary">
                      GPA: 8.8/10
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      May 2021
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
