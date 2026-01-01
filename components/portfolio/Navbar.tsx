
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/constants/resume";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 lg:bottom-auto left-1/2 lg:left-auto lg:right-8 lg:top-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 flex flex-row lg:flex-col gap-3 lg:gap-4 glass p-2 rounded-full z-50 border-border shadow-2xl"
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={cn(
            "relative cursor-pointer p-3 rounded-full transition-all duration-300 group",
            activeTab === item.id
              ? "bg-foreground text-background shadow-lg"
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
          <item.icon size={20} className="relative z-10" />

          {/* Tooltip */}
          <span className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-full lg:mr-4 lg:top-1/2 lg:-translate-y-1/2 px-2 py-1 rounded bg-popover border border-border text-[10px] text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold">
            {item.label}
          </span>
        </button>
      ))}
    </motion.nav>
  );
}
