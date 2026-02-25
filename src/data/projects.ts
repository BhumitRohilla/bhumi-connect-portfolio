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
    id: "infrastructure-platform",
    title: "Infrastructure & Auto-Scaling Platform",
    description: "Production infrastructure managing 40+ DigitalOcean servers with auto-scaling based on exam load, handling up to 4,000+ concurrent users with automated provisioning and de-provisioning.",
    techStack: ["DigitalOcean", "Nginx", "Node.js", "Grafana", "Loki", "PM2"],
    highlights: [
      "40+ production servers",
      "Auto-scaling based on load",
      "Grafana + Loki monitoring",
      "$27K budget optimization",
    ],
    type: "work",
  },
  {
    id: "proctored-exam-platform",
    title: "Proctored Exam Platform",
    description: "Secure online examination platform with VM detection, screen capture protection, DLL injection countermeasures, webcam monitoring, tab-switch detection, and WebSocket real-time monitoring for 2,000+ concurrent sessions.",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket", "ElectronJS"],
    highlights: [
      "VM detection & DLL injection countermeasures",
      "70% reduction in integrity violations",
      "2,000+ concurrent sessions",
      "WebSocket real-time monitoring",
    ],
    type: "work",
  },
  {
    id: "interview-system",
    title: "Interview System",
    description: "AI-powered interview platform using LangGraph agent-based architecture with multi-turn conversation support for intelligent candidate evaluation and automated technical assessments.",
    techStack: ["LangChain", "LangGraph", "Python", "Node.js", "React", "MongoDB"],
    highlights: [
      "LangGraph agent-based architecture",
      "Multi-turn conversation support",
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
      "Code signing with EV certificates",
      "Auto-update system",
      "Cross-platform (Windows/Mac/Linux)",
      "Anti-tampering protection",
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
    id: "complaint-logging",
    title: "Complaint Logging System",
    description: "Mobile app for citizens to log complaints with location-based tracking using Google Maps, automatic ward detection, and authority notification system.",
    techStack: ["React Native", "Expo", "Google Maps API", "Node.js"],
    highlights: [
      "GPS-based complaint logging",
      "Automatic ward detection",
      "Real-time authority notifications",
      "Location-based categorization",
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
