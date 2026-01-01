"use client";
import { RESUME_DATA } from "@/constants/resume";
import { Github, ChevronDown } from "lucide-react";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectLink {
  live: string;
  client: string;
  server: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  image: string;
  description: string;
  tech: string[];
  links: ProjectLink;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);

  const categories = useMemo(() => {
    const cats = new Set(RESUME_DATA.projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    return RESUME_DATA.projects.filter(
      (p) => activeFilter === "All" || p.category === activeFilter
    );
  }, [activeFilter]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const regularProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  const displayedRegularProjects = regularProjects.slice(0, displayCount);
  const hasMore = displayCount < regularProjects.length;

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="w-8 h-px bg-border" />
          Selected Works
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-secondary/30 backdrop-blur-md rounded-xl border border-border w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setDisplayCount(6);
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* All Projects Unified Layout */}
        <AnimatePresence mode="popLayout">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
          {displayedRegularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setDisplayCount((prev) => prev + 4)}
              className="flex items-center gap-2 px-8 py-3 bg-secondary rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              Load More Projects
              <ChevronDown
                size={14}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`group relative glass-card rounded-[2rem] hover:bg-white/5 transition-colors border border-border/50 ${
        featured ? "p-8 md:p-12" : "p-6 md:p-10"
      }`}
    >
      <div className="relative group/card">
        <div className="flex flex-col md:flex-row gap-8 items-center text-left">
          {/* Image Container */}
          <div className="w-full md:w-1/2 aspect-video glass-card rounded-2xl overflow-hidden relative group-hover:border-primary/50 transition-colors duration-500">
            {/* Live Link Overlay - Only on Image */}
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Visit ${project.title} live site`}
            />

            {/* GitHub Link - Higher Z-Index */}
            <a
              href={project.links.client}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 p-2 bg-background/60 backdrop-blur-md rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 opacity-0 group-hover/card:opacity-100 transform -translate-y-2 group-hover/card:translate-y-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl font-bold opacity-10">
                  {project.title[0]}
                </span>
              </div>
            )}

            {/* Hover Overlay Label */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none">
              <div className="px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                Visit Live Site
              </div>
            </div>
          </div>

          {/* Text Container */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                {project.subtitle}
              </span>
            </div>
            <h3
              className={`font-bold text-foreground group-hover/card:text-primary transition-colors ${
                featured ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-muted-foreground leading-relaxed ${
                featured ? "text-lg" : "text-sm"
              }`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 bg-secondary/50 border border-border/50 rounded-full text-[10px] font-medium tracking-wide text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
