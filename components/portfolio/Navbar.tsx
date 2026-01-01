import React, { useState } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/constants/resume";
import { cn } from "@/lib/utils";

// Custom Geometric Icons
const HomeIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L20 9V21H4V9L12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="10"
      y="2"
      width="4"
      height="4"
      transform="rotate(45 12 4)"
      fill="currentColor"
      opacity="0.2"
    />
  </svg>
);

const AboutIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8V12L14 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="10.5"
      y="10.5"
      width="3"
      height="3"
      transform="rotate(45 12 12)"
      fill="currentColor"
    />
  </svg>
);

const ProjectsIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 7L12 3L21 7L12 11L3 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L12 16L21 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M3 17L12 21L21 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const SkillsIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L18 9L12 15L6 9L12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 9L18 15L12 21L6 15L12 9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      opacity="0.5"
    />
  </svg>
);

const EducationIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 19.5V5C4 3.89543 4.89543 3 6 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H6C4.89543 21 4 20.1046 4 19.5Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 7H16M8 11H16M8 15H11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ContactIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8L12 13L21 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

const ICON_MAP: Record<string, React.FC<{ size: number }>> = {
  home: HomeIcon,
  about: AboutIcon,
  projects: ProjectsIcon,
  skills: SkillsIcon,
  education: EducationIcon,
  contact: ContactIcon,
};

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // ScrollSpy logic
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Don't update during automatic scroll initiated by clicking a nav item
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    setIsScrolling(true);
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Reset isScrolling after smooth scroll finishes (roughly 800ms)
      setTimeout(() => setIsScrolling(false), 800);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 lg:bottom-auto left-1/2 lg:left-auto lg:right-8 lg:top-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 flex flex-row lg:flex-col gap-3 lg:gap-4 glass p-2 rounded-full z-50 border-border shadow-2xl"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = ICON_MAP[item.id] || HomeIcon;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "relative cursor-pointer p-3 rounded-full transition-all duration-300 group",
              activeTab === item.id
                ? "bg-foreground text-background shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-glow"
                className="absolute inset-0 bg-foreground rounded-full blur-md opacity-20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon size={20} />

            {/* Tooltip */}
            <span className="absolute bottom-[calc(100%+0.5rem)] mb-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[calc(100%+1rem)] lg:mr-0 lg:top-1/2 lg:-translate-y-1/2 px-2.5 py-1.5 rounded-lg bg-popover/90 backdrop-blur-md border border-border text-[10px] text-popover-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold shadow-xl translate-y-2 group-hover:translate-y-0 lg:translate-y-0 lg:translate-x-2 lg:group-hover:translate-x-0">
              {item.label}
            </span>
          </button>
        );
      })}
    </motion.nav>
  );
}
