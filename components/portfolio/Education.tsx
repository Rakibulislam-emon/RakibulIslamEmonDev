"use client";
import { RESUME_DATA } from "@/constants/resume";
import React from "react";
import { motion } from "framer-motion";

export default function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="w-8 h-px bg-border" />
          Education
        </div>
        <div className="space-y-8">
          {RESUME_DATA.education.map((edu) => (
            <motion.div
              variants={itemVariants}
              key={edu.degree}
              className="flex gap-6 relative"
            >
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
                <div className="flex-1 w-px bg-border mt-2" />
              </div>
              <div className="pb-12 text-left">
                <span className="text-xs font-bold text-muted-foreground">
                  {edu.duration}
                </span>
                <h3 className="text-xl font-bold mt-1 text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
