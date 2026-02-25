import { useEffect } from "react";
import { ExternalLink, Github, Briefcase, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { workProjects, personalProjects, Project } from "@/data/projects";
import { trackPageSection, trackSocialClick } from "@/lib/posthog";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card 
    className={`group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up opacity-0`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardHeader>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {project.title}
      </CardTitle>
      <CardDescription className="text-base">
        {project.description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>

      <ul className="space-y-2 mb-4 list-disc list-inside marker:text-primary">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-muted-foreground">
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("github", `project_${project.id}`)}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.link && (
          <Button size="sm" asChild>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("live_demo", `project_${project.id}`)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  useEffect(() => {
    trackPageSection("projects");
  }, []);

  return (
    <Layout>
      {/* Hero header */}
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work projects at CodeQuotient and personal projects I've built.
          </p>
        </div>
      </section>

      {/* Work Projects */}
      <section className="min-h-screen flex items-center py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Work Projects</h2>
            <span className="text-sm text-muted-foreground">@ CodeQuotient</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="min-h-[70vh] flex items-center py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Personal Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + workProjects.length} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
