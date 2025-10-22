import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Download } from "lucide-react";
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

  const handleDownloadResume = () => {
    console.log("Download resume clicked");
    toast({
      title: "Resume Download",
      description: "Resume download initiated.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-12 text-center" data-testid="text-contact-heading">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-contact-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                    data-testid="input-contact-message"
                  />
                </div>
                
                <Button type="submit" className="w-full" data-testid="button-send-message">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card data-testid="card-contact-info">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    onClick={() => window.open("mailto:saimanish@example.com")}
                    data-testid="button-contact-email"
                  >
                    <Mail className="w-5 h-5" />
                    <span>saimanish@example.com</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                    data-testid="button-contact-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    onClick={() => window.open("https://github.com/", "_blank")}
                    data-testid="button-contact-github"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground" data-testid="card-download-resume">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Download className="w-12 h-12 mx-auto" />
                  <h3 className="font-semibold text-lg">Download My Resume</h3>
                  <p className="text-sm opacity-90">
                    Get a comprehensive overview of my experience, skills, and achievements
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={handleDownloadResume}
                    data-testid="button-download-resume"
                  >
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
