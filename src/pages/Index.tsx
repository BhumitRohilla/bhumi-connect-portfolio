import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { skillCategories } from "@/data/skills";
import { trackResumeDownload, trackSocialClick } from "@/lib/posthog";

const handleResumeDownload = () => {
  trackResumeDownload("hero_section");
  window.open("/resume.pdf", "_blank");
};

const techStackIcons = [
  "Node.js", "React", "TypeScript", "MongoDB", "Redis", "ElectronJS", "DigitalOcean", "Docker", "Go", "Python"
];

const subtitleFull = "Software Development Engineer & Infrastructure Engineer";

const TypingSubtitle = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(subtitleFull.slice(0, i));
      if (i >= subtitleFull.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 stagger-3">
      {displayed}
      <span className={`inline-block w-0.5 h-6 bg-primary ml-1 align-middle ${done ? "animate-pulse" : ""}`} />
    </p>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/30 blur-3xl" />
        </div>

        <div className="container max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 stagger-2">
            Bhumit Rohilla
          </h1>
          
          <TypingSubtitle />
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0 stagger-4">
            I manage <span className="text-primary font-medium">40+ production servers</span>, 
            build anti-cheating systems, and scale platforms to handle{" "}
            <span className="text-primary font-medium">4,000+ concurrent users</span>. 
            Specializing in Backend Development, Infrastructure, React, and AI Integration at CodeQuotient.
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
              onClick={() => trackSocialClick("github", "hero")}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/bhumitrohilla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
              onClick={() => trackSocialClick("linkedin", "hero")}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bhumit73rohilla@gmail.com"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label="Email"
              onClick={() => trackSocialClick("email", "hero")}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-40 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Software Development Engineer at CodeQuotient, an ed-tech company where I wear many hats — from building AI-powered interview systems to managing large-scale infrastructure for proctored exams serving thousands of students simultaneously. I'm passionate about system design, performance optimization, and building robust, scalable platforms.
          </p>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-28 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStackIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-28 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
            Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Production Servers</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">4,000+</div>
              <div className="text-sm text-muted-foreground">Concurrent Users</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Platform Users</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Violation Reduction</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
