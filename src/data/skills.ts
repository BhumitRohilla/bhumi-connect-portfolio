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
    skills: ["LangChain", "OpenAI API", "RAG Systems"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    name: "Frontend",
    skills: ["React", "Zustand", "Ant Design", "Tailwind CSS", "Shadcn UI"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "AWS S3", "Nginx", "Git", "Linux"],
  },
];
