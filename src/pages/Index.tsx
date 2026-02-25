import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { trackResumeDownload, trackSocialClick } from "@/lib/posthog";

const handleResumeDownload = () => {
  trackResumeDownload("hero_section");
  window.open("/resume.pdf", "_blank");
};

const techStack = [
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "MongoDB", url: "https://www.mongodb.com" },
  { name: "Redis", url: "https://redis.io" },
  { name: "ElectronJS", url: "https://www.electronjs.org" },
  { name: "DigitalOcean", url: "https://www.digitalocean.com" },
  { name: "Docker", url: "https://www.docker.com" },
  { name: "Go", url: "https://go.dev" },
  { name: "Python", url: "https://www.python.org" },
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
      {/* Page 1: Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
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

      {/* Page 2: About Me */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            I'm a Software Development Engineer at CodeQuotient, an ed-tech company where I wear many hats — from building AI-powered interview systems to managing large-scale infrastructure for proctored exams serving thousands of students simultaneously. I'm passionate about system design, performance optimization, and building robust, scalable platforms.
          </p>

          {/* Impact Stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Production Servers</div>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4,000+</div>
              <div className="text-sm text-muted-foreground">Concurrent Users</div>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Platform Users</div>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Violation Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 3: Tech Stack */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Tech Stack</h2>
          <p className="text-muted-foreground mb-14 text-lg">Technologies I work with every day</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {techStack.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
