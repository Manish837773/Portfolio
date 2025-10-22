import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadResume = async () => {
    try {
      const { generateResume } = await import("@/lib/generateResume");
      generateResume();
      toast({
        title: "Resume Downloaded",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download Error",
        description: "There was an error downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(66,153,225,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,101,101,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4" data-testid="text-contact-heading">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can collaborate
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-base">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="mt-1.5"
                    data-testid="input-contact-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1.5"
                    data-testid="input-contact-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="mt-1.5"
                    data-testid="input-contact-message"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-send-message">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300" data-testid="card-contact-info">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.open("mailto:saimanish@example.com")}
                  data-testid="button-contact-email"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>saimanish@example.com</span>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/sai-manish-s/", "_blank")}
                  data-testid="button-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>LinkedIn Profile</span>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.open("https://github.com/", "_blank")}
                  data-testid="button-contact-github"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span>GitHub Profile</span>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white border-0 shadow-2xl overflow-hidden" data-testid="card-download-resume">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
              <CardContent className="p-8 relative">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <Download className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-2xl font-poppins">Download My Resume</h3>
                  <p className="text-white/90 text-sm">
                    Get a comprehensive overview of my experience, skills, and achievements in a professionally formatted PDF
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white/90 hover:bg-white text-primary font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={handleDownloadResume}
                    data-testid="button-download-resume"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
