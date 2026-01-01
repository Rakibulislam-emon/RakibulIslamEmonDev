import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Layers,
  FileText,
  Tag,
  MessageSquare,
} from "lucide-react";

export const RESUME_DATA = {
  name: "Rakibul Islam Emon",
  role: "MERN Stack Developer",
  location: "Dhanmondi, Dhaka, Bangladesh",
  phone: "+880 1979237056",
  email: "rakibulislamemon60@gmail.com",
  github: "https://github.com/rakibul-islam-emon",
  linkedin: "https://linkedin.com/in/rakibul-islam-emon",
  portfolio: "https://portfolio.rakibul.com",
  about:
    "Passionate about creating responsive, user-friendly interfaces and scalable web applications. Developed platforms like Audit Tracker (Enterprise audit management system), Nest-Grocery (E-commerce website), and GitHub Repo Remover (GitHub Manager). Eager to contribute to dynamic teams and continuously improve code quality in an Agile environment.",
  skills: [
    { name: "HTML", category: "Core" },
    { name: "CSS", category: "Core" },
    { name: "JavaScript", category: "Core" },
    { name: "React.js", category: "Core" },
    { name: "Tailwind CSS", category: "Core" },
    { name: "Redux Toolkit", category: "Core" },
    { name: "Next.js", category: "Core" },
    { name: "RESTful APIs", category: "Core" },
    { name: "Node.js", category: "Comfortable" },
    { name: "Express.js", category: "Comfortable" },
    { name: "MongoDB", category: "Comfortable" },
    { name: "JWT", category: "Comfortable" },
    { name: "Stripe", category: "Comfortable" },
    { name: "TypeScript", category: "Comfortable" },
    { name: "Firebase", category: "Comfortable" },
    { name: "Git & GitHub", category: "Core" },
  ],
  projects: [
    {
      id: "audit-tracker",
      title: "Audit Tracker",
      subtitle: "Enterprise Audit System",
      description:
        "A comprehensive platform for managing audits, workflows, and reporting for multiple organizations. Implemented role-based access control and dynamic audit templates.",
      features: [
        "Role-based access control",
        "Real-time problem tracking",
        "Advanced filtering and search",
        "Analytics dashboard",
      ],
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      links: { live: "#", client: "#", server: "#" },
    },
    {
      id: "nest-grocery",
      title: "NEST GROCERY SHOP",
      subtitle: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with a focus on user experience and secure transactions. Integrated Stripe and Redux Persist.",
      features: [
        "Product search & filtering",
        "Stripe payment gateway",
        "Authentication with Clerk",
        "Mobile-first design",
      ],
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Redux Toolkit",
        "Clerk",
        "Stripe",
      ],
      links: { live: "#", client: "#", server: "#" },
    },
    {
      id: "repo-remover",
      title: "GITHUB REPO REMOVER",
      subtitle: "Backend/API-Focused Project",
      description:
        "A tool for developers to efficiently manage and batch-delete their GitHub repositories using GitHub OAuth.",
      features: [
        "GitHub OAuth authentication",
        "Batch repository deletion",
        "Real-time updates",
        "Responsive UI",
      ],
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Express.js",
        "GitHub API",
        "OAuth 2.0",
      ],
      links: { live: "#", client: "#", server: "#" },
    },
  ],
  education: [
    {
      degree: "B.A. (Hons) in English",
      institution: "New Model Degree College (NMDC)",
      duration: "March 2024 - Present",
    },
  ],
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Conversational" },
    { name: "Hindi", level: "Spoken" },
  ],
};

export const NAV_ITEMS = [
  { id: "home", icon: Globe, label: "Home" },
  { id: "about", icon: MessageSquare, label: "About" },
  { id: "projects", icon: Layers, label: "Projects" },
  { id: "skills", icon: Tag, label: "Skills" },
  { id: "education", icon: FileText, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/rakibul-islam-emon",
    label: "Github",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rakibul-islam-emon",
    label: "Linkedin",
  },
  { icon: Mail, href: "mailto:rjrayat37@gmail.com", label: "Email" },
  { icon: Smartphone, href: "tel:+8801979237056", label: "Phone" },
];
