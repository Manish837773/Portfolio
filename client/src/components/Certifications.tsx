import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

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
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-12 text-center" data-testid="text-certifications-heading">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-certification-${index}`}
            >
              <CardHeader className="gap-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg text-destructive flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-poppins mb-2" data-testid={`text-cert-name-${index}`}>
                      {cert.name}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" data-testid={`badge-cert-provider-${index}`}>
                        {cert.provider}
                      </Badge>
                      {cert.year && (
                        <span className="text-sm text-muted-foreground" data-testid={`text-cert-year-${index}`}>
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
        
        <div className="mt-12 text-center">
          <Card className="inline-block bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg" data-testid="text-education-degree">
                    Bachelor's Degree in Electronics and Communication
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-education-details">
                    Amrita Vishwavidhyapeetam, Bangalore | May 2021 | GPA: 8.8/10
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
