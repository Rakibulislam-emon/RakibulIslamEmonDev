"use client";

import React from "react";
import Sidebar from "@/components/portfolio/Sidebar";
import Navbar from "@/components/portfolio/Navbar";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import { MoveRight, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/constants/resume";
// import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import Skills from "@/components/portfolio/Skills";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-orange-500/30">
      <LoadingScreen />
      {/* Background Glow */}
      <div className="fixed top-0 left-1/4 w-125 h-125 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-100 h-100 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-380 mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8 relative">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-16 lg:gap-24 lg:pl-4">
          {/* Header Mobile */}
          

          {/* Hero Section */}
          <section
            id="home"
            className="flex flex-col gap-8 pt-12 lg:pt-24 pb-12 scroll-mt-24"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-8 h-px bg-border" />
              {RESUME_DATA.role}
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              Focus on <br />
              <span className="text-muted-foreground/60">Performance</span>{" "}
              <br />& Visuals.
            </h2>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              {RESUME_DATA.about}
            </p>

            <div className="flex items-center gap-6">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 bg-foreground text-background hover:opacity-90 text-base font-bold shadow-xl"
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
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-border group-hover:border-primary/50">
                  <MoveRight size={18} />
                </div>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12 mt-12">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  UI Design
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic tracking-tighter">
                    PIXEL
                  </span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">
                    Perfect
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Development
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic tracking-tighter">
                    CLEAN
                  </span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">
                    Scalable
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Philosophy
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif italic tracking-tighter">
                    ALWAYS
                  </span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">
                    Learning
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-border" />
              About Me
            </div>
            <div className="glass-card p-6 rounded-2xl space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                I am a passionate{" "}
                <span className="text-foreground font-medium">
                  MERN Stack Developer
                </span>{" "}
                based in Dhaka, Bangladesh. My journey in web development is
                driven by a desire to create impactful digital experiences that
                combine technical excellence with stunning visuals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
                    My Philosophy
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I believe in writing code that is not just functional, but
                    maintainable and scalable. Performance is a feature, and I
                    prioritize it in every project I build.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Technology evolves fast. I spend my time mastering the
                    latest tools like Next.js 16 and Tailwind 4 to stay at the
                    cutting edge of development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-border" />
              Featured Projects
            </div>
            <div className="grid grid-cols-1 gap-12">
              {RESUME_DATA.projects.map((project) => (
                <div key={project.id} className="group relative">
                  <div className="absolute -inset-4 bg-muted/30 dark:bg-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-video glass-card rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-background/80 to-transparent flex items-end">
                        <span className="text-xl font-bold uppercase tracking-tighter opacity-40 text-foreground">
                          {project.title}
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">
                          {project.subtitle}
                        </span>
                        <div className="flex gap-3">
                          <a
                            href={project.links.live}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.links.client}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-secondary border border-border rounded-full text-[10px] font-medium tracking-wide text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest pt-2 group/btn">
                        View Details
                        <ArrowUpRight
                          size={14}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Skills />

     
          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-border" />
              Education
            </div>
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.degree} className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
                    <div className="flex-1 w-px bg-border mt-2" />
                  </div>
                  <div className="pb-12">
                    <span className="text-xs font-bold text-muted-foreground">
                      {edu.duration}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 pb-24">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-border" />
              Connect
            </div>
            <div className="glass-card p-8 md:p-12 rounded-[2rem] text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32" />
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Let&apos;s build <br /> something great.
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                I am currently available for new projects and collaborations.
                Feel free to reach out to me via email or phone.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity w-full md:w-auto"
                >
                  Send an Email
                </a>
                <a
                  href={`tel:${RESUME_DATA.phone}`}
                  className="px-8 py-4 bg-secondary border border-border rounded-full font-bold hover:bg-accent transition-colors w-full md:w-auto text-foreground"
                >
                  Call Me
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-8 pb-28 lg:pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <p>© 2026 RAKIBUL ISLAM EMON</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </footer>
        </div>

        <Navbar />
      </div>
    </main>
  );
}
