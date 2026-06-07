import {
  BrainCircuit,
  Bot,
  Cloud,
  Database,
  // Github,
  Server,
  Globe,
  Cpu,
  Code2,
  Layers,
  Workflow,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Technology {
  name: string;
  category: string;
  icon: LucideIcon;
  glow: string;
}

export const technologies: Technology[] = [
  {
    name: "OpenAI",
    category: "AI",
    icon: BrainCircuit,
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    name: "Anthropic",
    category: "AI",
    icon: Bot,
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Boxes,
    glow: "group-hover:shadow-cyan-500/20",
  },
  // {
  //   name: "GitHub",
  //   category: "Developer",
  //   icon: Github,
  //   glow: "group-hover:shadow-purple-500/20",
  // },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Server,
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: Workflow,
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    name: "Tailwind",
    category: "UI",
    icon: Layers,
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: Cpu,
    glow: "group-hover:shadow-green-500/20",
  },
  {
    name: "Global Scale",
    category: "Platform",
    icon: Globe,
    glow: "group-hover:shadow-sky-500/20",
  },
];