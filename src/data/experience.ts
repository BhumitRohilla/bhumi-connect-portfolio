export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "codequotient-sde",
    title: "Software Development Engineer",
    company: "CodeQuotient",
    location: "Panchkula, Haryana",
    period: "Jan 2024 – Present",
    type: "work",
    description: "Building scalable web applications and AI-powered systems for education technology platform.",
    achievements: [
      "Architected and managed 40+ production servers on DigitalOcean with $27K annual infrastructure budget",
      "Built proctoring platform supporting 2,000–4,000+ concurrent exam sessions with WebSocket real-time monitoring",
      "Developed anti-cheating system with VM detection, screen capture protection, and DLL injection countermeasures — reducing violations by 70%",
      "Created AI-powered interview system using LangGraph and LangChain with multi-turn conversation support",
      "Built cross-platform Student IDE with ElectronJS (10,000+ users) — code signing, auto-updates, anti-tampering",
      "Implemented auto-scaling architecture that dynamically provisions servers based on exam load",
      "Designed centralized auth service with Redis sessions across 5+ apps, achieving 20% faster response times",
      "Set up Grafana + Loki monitoring for real-time system observability",
    ],
  },
  {
    id: "codequotient-trainee",
    title: "SDE Trainee",
    company: "CodeQuotient",
    location: "Panchkula, Haryana",
    period: "Jun 2023 – Jan 2024",
    type: "work",
    description: "Trained in full-stack development with focus on modern JavaScript ecosystem and best practices.",
    achievements: [
      "Contributed to production proctoring platform serving thousands of concurrent sessions for institutions like Chitkara University",
      "Implemented WebSocket-based real-time communication for live exam monitoring",
      "Built REST APIs and microservices using Node.js and Express",
    ],
  },
  {
    id: "msc-cs",
    title: "MSc Computer Science",
    company: "MDU, Rohtak",
    location: "Rohtak, India",
    period: "2021 – 2023",
    type: "education",
    description: "Master's degree in Computer Science with focus on software engineering and algorithms.",
    achievements: [],
  },
  {
    id: "bsc-math",
    title: "BSc Mathematics",
    company: "MDU, Rohtak",
    location: "Rohtak, India",
    period: "2018 – 2021",
    type: "education",
    description: "Bachelor's degree in Mathematics providing strong foundation in logical thinking and problem-solving.",
    achievements: [],
  },
];
