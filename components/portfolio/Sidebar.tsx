"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA, SOCIAL_LINKS } from "@/constants/resume";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
export default function Sidebar() {
  return (
    <div>
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-90 h-fit lg:h-[calc(100vh-9rem)] bg-sidebar border border-sidebar-border rounded-[2.5rem] p-6 flex flex-col items-center gap-6 relative lg:sticky lg:top-16 overflow-hidden shadow-2xl"
      >
        {/* Top Header - Diamond & Pill */}
        <div className="w-full flex items-center justify-between relative z-10">
          <div className="h-10 w-10 flex items-center justify-center">
            <div className="h-6 w-6 border-2 border-sidebar-border rotate-45 flex items-center justify-center bg-sidebar-accent shadow-lg">
              <div className="h-1 w-1 bg-sidebar-foreground/30 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2 bg-sidebar-accent/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sidebar-border shadow-inner">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] font-bold text-sidebar-foreground/60 uppercase tracking-tighter">
              Open to Work
            </span>
          </div>

          <div className="h-10 w-10 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="relative w-full aspect-4/5 group z-10">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10 rounded-[2.5rem]" />
          <Avatar className="h-full w-full rounded-[2.5rem] border-0 relative overflow-hidden">
            <AvatarImage
              // src={portfolioImage}
              src="https://i.ibb.co.com/6cq8j7QB/tinywow-profile-photo-83816897.png"
              alt="Rayat"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground text-3xl font-bold">
              RY
            </AvatarFallback>
          </Avatar>

          {/* Stylized Name Overlay */}
          <div className="absolute -bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
            <h2 className="text-5xl font-medium text-white tracking-tighter drop-shadow-2xl">
              <>ℛ𝒶𝓀𝒾𝒷</>
            </h2>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-1 z-10">
          <p className="text-sidebar-foreground font-bold text-sm tracking-tight">
            {RESUME_DATA.email}
          </p>
          <p className="text-[10px] text-sidebar-foreground/60 font-bold uppercase tracking-widest">
            Based in Dhaka, Bangladesh
          </p>
        </div>

        {/* Circular Social Links */}
        <div className="flex items-center justify-center gap-3 z-10">
          {SOCIAL_LINKS.map((link) => {
            const isEmail = link.label.toLowerCase() === "email";

            const handleClick = (e: React.MouseEvent) => {
              if (isEmail) {
                e.preventDefault();
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}`,
                  "_blank"
                );
              }
            };

            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-sidebar-accent border border-sidebar-border text-sidebar-foreground/60 hover:text-sidebar-foreground transition-all shadow-sm cursor-pointer"
              >
                <link.icon size={16} />
              </motion.a>
            );
          })}
        </div>

        {/* Compact Action Button */}
        <div className="w-full mt-auto z-10">
          <Button
            asChild
            className="w-full h-14 rounded-full bg-sidebar-accent hover:bg-sidebar-accent/80 border border-sidebar-border text-sidebar-foreground font-bold flex items-center justify-between px-8 group transition-all"
          >
            <a
              href="/Rakibul_Islam_Emon_Resume.pdf"
              download="Rakibul_Islam_Emon_Resume.pdf"
              className="flex items-center justify-between w-full h-full"
            >
              <span className="text-sm tracking-tight text-sidebar-foreground/60 group-hover:text-sidebar-foreground">
                Download CV
              </span>
              <div className="bg-sidebar-foreground text-sidebar h-9 w-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Download size={18} />
              </div>
            </a>
          </Button>
        </div>
      </motion.aside>
    </div>
  );
}
