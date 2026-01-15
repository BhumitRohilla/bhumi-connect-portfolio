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
    location: "Remote",
    period: "Jan 2024 – Present",
    type: "work",
    description: "Building scalable web applications and AI-powered systems for education technology platform.",
    achievements: [
      "Developed AI-powered Interview System using LangChain",
      "Built Student IDE with ElectronJS serving 10,000+ users",
      "Implemented centralized Login Service with 20% faster response times",
      "Created Test Application with anti-cheating reducing violations by 70%",
    ],
  },
  {
    id: "codequotient-trainee",
    title: "SDE Trainee",
    company: "CodeQuotient",
    location: "Remote",
    period: "Jun 2023 – Jan 2024",
    type: "work",
    description: "Trained in full-stack development with focus on modern JavaScript ecosystem and best practices.",
    achievements: [
      "Completed intensive training in React and Node.js",
      "Contributed to production codebases",
      "Learned microservices architecture patterns",
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
