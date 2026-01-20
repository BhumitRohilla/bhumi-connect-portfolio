import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { skillCategories } from "@/data/skills";
import { trackResumeDownload } from "@/lib/posthog";

const handleResumeDownload = () => {
  trackResumeDownload("hero_section");
  // TODO: Add actual resume download link
  window.open("/resume.pdf", "_blank");
};

const techStackIcons = [
  "JavaScript", "TypeScript", "React", "React Native", "Node.js", "Go", "MongoDB", "PostgreSQL", "Docker"
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 stagger-2">
            Bhumit Rohilla
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 stagger-3">
            Software Development Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0 stagger-4">
            Specializing in <span className="text-primary font-medium">Backend Development</span>, 
            {" "}<span className="text-primary font-medium">React</span>, and 
            {" "}<span className="text-primary font-medium">AI Integration</span>. 
            Building scalable solutions that impact thousands of users.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up opacity-0 stagger-5">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={handleResumeDownload}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/bhumitrohilla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/bhumitrohilla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bhumit@example.com"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStackIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            <div className="animate-fade-in-up opacity-0 stagger-1">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Users Served</div>
            </div>
            <div className="animate-fade-in-up opacity-0 stagger-2">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in-up opacity-0 stagger-3">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-muted-foreground">Issue Reduction</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
