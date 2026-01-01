"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="w-8 h-px bg-border" />
          About Me
        </div>
        <div className="glass-card p-6 md:p-10 rounded-2xl space-y-6">
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/80 leading-relaxed font-light"
          >
            I am a{" "}
            <span className="text-foreground font-semibold">
              Full Stack Engineer
            </span>{" "}
            based in Dhaka, focused on shipping production-ready software. I don't
            just write code; I solve business problems—whether that's handling
            complex audit workflows or optimizing payment gateways.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
                My Philosophy
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe{" "}
                <strong className="text-foreground font-medium">
                  Performance is a feature.
                </strong>{" "}
                I write code that is maintainable,{" "}
                <span className="text-foreground/90">type-safe</span>, and
                scalable by default. If the UI looks good but loads slowly, it’s
                a bug.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
                The Edge
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Technology moves fast, so I move faster. I am currently building
                with{" "}
                <span className="text-foreground/90">
                  Next.js 16, Tailwind 4
                </span>
                , and{" "}
                <span className="text-foreground/90">
                  AI-assisted workflows
                </span>{" "}
                (v0 & Lovable) to deliver products 3x faster than the industry
                standard.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}