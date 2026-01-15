export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  type: "work" | "personal";
  link?: string;
  github?: string;
}

export const workProjects: Project[] = [
  {
    id: "interview-system",
    title: "Interview System",
    description: "AI-powered interview platform that automates technical assessments using advanced language models for intelligent candidate evaluation.",
    techStack: ["LangChain", "Python", "Node.js", "React", "MongoDB"],
    highlights: [
      "AI-powered question generation",
      "Real-time candidate assessment",
      "Automated scoring system",
    ],
    type: "work",
  },
  {
    id: "student-ide",
    title: "Student IDE",
    description: "Full-featured integrated development environment built with ElectronJS and React, serving over 10,000 active users for coding education.",
    techStack: ["ElectronJS", "React", "Node.js", "TypeScript"],
    highlights: [
      "10,000+ active users",
      "Multi-language support",
      "Real-time code execution",
      "Integrated terminal",
    ],
    type: "work",
  },
  {
    id: "login-service",
    title: "Login Service",
    description: "Centralized authentication microservice handling secure user authentication across multiple applications with session management.",
    techStack: ["Node.js", "Redis", "MongoDB", "JWT", "Express"],
    highlights: [
      "Centralized authentication",
      "Session management with Redis",
      "20% faster response times",
    ],
    type: "work",
  },
  {
    id: "test-application",
    title: "Test Application",
    description: "Secure online examination platform with advanced anti-cheating mechanisms to ensure test integrity.",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"],
    highlights: [
      "Anti-cheating mechanism",
      "70% reduction in integrity violations",
      "Real-time monitoring",
    ],
    type: "work",
  },
];

export const personalProjects: Project[] = [
  {
    id: "file-upload-platform",
    title: "Large File Upload Platform",
    description: "A modern file sharing platform inspired by LimeWire, supporting uploads up to 20GB with resume capability for interrupted transfers.",
    techStack: ["Node.js", "React", "AWS S3", "TypeScript"],
    highlights: [
      "Supports 20GB file uploads",
      "Resumable uploads",
      "Chunk-based transfer",
    ],
    type: "personal",
  },
  {
    id: "ecommerce-gamekeys",
    title: "E-Commerce Site",
    description: "Online marketplace for game keys with secure payment processing and instant digital delivery.",
    techStack: ["React", "Node.js", "Stripe", "PostgreSQL"],
    highlights: [
      "Game keys marketplace",
      "Secure payments",
      "Instant delivery system",
    ],
    type: "personal",
  },
];
