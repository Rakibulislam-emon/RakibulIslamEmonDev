"use client";
import { RESUME_DATA } from "@/constants/resume";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="flex flex-col gap-8 pt-12 lg:pt-24 pb-12 scroll-mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="w-8 h-px bg-border" />
          {RESUME_DATA.role}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]"
        >
          Focus on <br />
          <span className="text-muted-foreground/60">Performance</span> <br />&
          Visuals.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          {RESUME_DATA.about}
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <Button
            size="lg"
            className="rounded-full h-14 px-8 bg-foreground text-background hover:opacity-90 text-base font-bold shadow-xl overflow-hidden"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            My Portfolio
          </Button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-3 text-sm font-bold group hover:text-orange-500 transition-colors"
          >
            Let&apos;s Talk
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-border group-hover:border-primary/50 transition-colors">
              <MoveRight size={18} />
            </div>
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
  variants={itemVariants}
  // UPDATED: grid-cols-1 makes it stack on mobile, md:grid-cols-3 puts it side-by-side on desktop
  // UPDATED: gap-8 adds nice vertical spacing on mobile
  className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-border pt-12 mt-12"
>
  {/* Item 1: UI Design */}
  <div className="space-y-1">
    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
      UI Design
    </span>
    <div className="flex items-baseline gap-2">
      {/* UPDATED: text-3xl for mobile, 4xl for desktop */}
      <span className="text-3xl md:text-4xl font-serif italic tracking-tighter">
        PIXEL
      </span>
      <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase">
        Perfect
      </span>
    </div>
  </div>

  {/* Item 2: Development */}
  <div className="space-y-1">
    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
      Development
    </span>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl md:text-4xl font-serif italic tracking-tighter">
        CLEAN
      </span>
      <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase">
        Scalable
      </span>
    </div>
  </div>

  {/* Item 3: Philosophy */}
  <div className="space-y-1">
    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
      Philosophy
    </span>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl md:text-4xl font-serif italic tracking-tighter">
        ALWAYS
      </span>
      <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase">
        Learning
      </span>
    </div>
  </div>
</motion.div>

      </motion.div>
    </section>
  );
}
