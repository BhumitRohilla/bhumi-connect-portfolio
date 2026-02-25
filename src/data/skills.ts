export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "Python"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Go Fiber", "Next.js", "REST APIs"],
  },
  {
    name: "AI/ML",
    skills: ["LangChain", "LangGraph", "OpenAI API", "Vertex AI", "RAG Systems"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    name: "Frontend",
    skills: ["React", "React Native", "Next.js", "Zustand", "Ant Design", "Tailwind CSS", "Shadcn UI"],
  },
  {
    name: "Infrastructure",
    skills: ["DigitalOcean", "Nginx", "Load Balancers", "SSL/TLS", "Auto-scaling", "Grafana", "Loki", "PM2", "S3"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "CI/CD", "Git", "Linux", "Shell Scripting", "Cloudflare", "Firebase"],
  },
];
