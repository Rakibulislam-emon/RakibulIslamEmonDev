"use client";

import React from "react";
import Sidebar from "@/components/portfolio/Sidebar";
import Navbar from "@/components/portfolio/Navbar";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Skills from "@/components/portfolio/Skills";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-orange-500/30">
      <LoadingScreen />
      {/* Background Glow */}
      <div className="fixed top-0 left-1/4 w-125 h-125 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-100 h-100 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-400 mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8 relative">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-16 lg:gap-24 lg:pl-4">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          <Skills />

          {/* Education Section */}
          <Education />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>

        <Navbar />
      </div>  
    </main>
  );
}
