"use client";
import { RESUME_DATA } from "@/constants/resume";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="w-8 h-px bg-border" />
          Connect
        </div>
        <div className="glass-card p-8 md:p-12 rounded-[2rem] text-center space-y-8 relative overflow-hidden group">
          {/* Animated Background Spotlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-primary/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full -ml-16 -mb-16" />

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Let&apos;s build <br /> something great.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I am currently available for new projects and collaborations. Feel
            free to reach out to me via email or phone.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEmailClick}
              className="px-10 py-5 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all w-full md:w-auto shadow-xl shadow-foreground/10 relative"
            >
              {copied ? "Email Copied!" : "Send an Email"}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/8801979237056"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-secondary border border-border rounded-full font-bold hover:bg-white/5 transition-all w-full md:w-auto text-foreground shadow-xl shadow-black/5"
            >
              Call Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
