"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA, SOCIAL_LINKS } from "@/constants/resume";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Sidebar() {
  return (
    <div>
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-84 h-fit lg:h-[calc(100vh-9rem)] bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-6 flex flex-col items-center gap-6 relative lg:sticky lg:top-16 overflow-hidden shadow-2xl"
      >
        {/* Top Header - Diamond & Pill */}
        <div className="w-full flex items-center justify-between relative z-10">
          <div className="h-10 w-10 flex items-center justify-center">
            <div className="h-6 w-6 border-2 border-zinc-700 rotate-45 flex items-center justify-center bg-zinc-900 shadow-lg">
              <div className="h-1 w-1 bg-zinc-500 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
            <span className="h-1.5 w-1.5 bg-orange-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
              Available for 3 projects
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
              src="https://i.ibb.co.com/6cq8j7QB/tinywow-profile-photo-83816897.png"
              alt="Rayat"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <AvatarFallback className="bg-zinc-900 text-3xl font-bold">
              RY
            </AvatarFallback>
          </Avatar>

          {/* Stylized Name Overlay */}
          <div className="absolute -bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
            <h2 className="text-5xl font-medium text-white tracking-tighter drop-shadow-2xl">
              <>Rakib</>
            </h2>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-1 z-10">
          <p className="text-zinc-300 font-bold text-sm tracking-tight">
            {RESUME_DATA.email}
          </p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            Based in Dhaka, Bangladesh
          </p>
        </div>

        {/* Circular Social Links */}
        <div className="flex items-center justify-center gap-3 z-10">
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-500 hover:text-white transition-all shadow-sm"
            >
              <link.icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Compact Action Button */}
        <div className="w-full mt-auto z-10">
          <Button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full h-14 rounded-full bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 text-white font-bold flex items-center justify-between px-8 group transition-all"
          >
            <span className="text-sm tracking-tight text-zinc-400 group-hover:text-white">
              Get Started
            </span>
            <div className="bg-white text-black h-9 w-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-lg">
              <ArrowUpRight size={18} />
            </div>
          </Button>
        </div>
      </motion.aside>
    </div>
  );
}
