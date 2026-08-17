"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Project {
  slug: string;
  title: string;
  summary: string;
  role: string;
  image: string;
  techStack: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    slug: "yassin-glass-erp",
    title: "Yassin Glass ERP",
    summary: "A custom, high-performance Enterprise Resource Planning (ERP) platform designed for operational workflow, billing, and document automation.",
    role: "Tech Lead & Senior Full-Stack Engineer",
    image: "/images/projects/yassin-glass-erp/yassinerp.png",
    techStack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "dnd-kit", "Recharts", "@react-pdf/renderer"],
    link: ""
  },
  {
    slug: "catch-it",
    title: "Catch It",
    summary: "A high-performance, real-time storefront e-commerce experience leveraging TanStack Start, React 19, and Drizzle ORM.",
    role: "Lead Full-Stack Developer",
    image: "/images/projects/catch-it/catchit.png",
    techStack: ["TanStack Start", "React 19", "TanStack Router", "TanStack Query", "Drizzle ORM", "PostgreSQL", "Tailwind CSS v4"],
    link: ""
  },
  {
    slug: "swifterp",
    title: "SwiftERP",
    summary: "A modern, multi-tenant Enterprise Resource Planning (ERP) platform featuring dynamic PostgreSQL schema provisioning, Slack-style tenant discovery, and 9 domain modules.",
    role: "Tech Lead & Principal Full-Stack Architect",
    image: "/images/projects/swifterp/swifterp1.png",
    techStack: ["Next.js 16", "React 19", "NestJS", "Prisma", "PostgreSQL (Multi-Schema)", "Tailwind CSS v4", "Docker"],
    link: ""
  }
];

export const ScrollRevealCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const curtain = curtainRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the container is scrolled relative to the viewport
      const totalScrollable = rect.height - viewportHeight;
      if (totalScrollable <= 0) return;

      // Progress goes from 0 (when top of section meets top of viewport) to 1 (when bottom meets bottom)
      const progress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // 1. Slide the white curtain panel up (completes by 18% progress)
      const curtainProgress = Math.min(1, clampedProgress / 0.18);
      if (curtain) {
        curtain.style.transform = `translateY(-${curtainProgress * 105}%)`;
      }

      // 2. Animate each project slide sequentially
      const ranges = [
        { start: 0.18, end: 0.44 },
        { start: 0.44, end: 0.70 },
        { start: 0.70, end: 0.96 }
      ];

      ranges.forEach((range, i) => {
        const slide = slideRefs.current[i];
        if (!slide) return;

        const img = slide.querySelector(".project-bg-image") as HTMLImageElement;
        const content = slide.querySelector(".project-content") as HTMLDivElement;

        // Fading window settings
        const entryStart = range.start - 0.05;
        const entryEnd = range.start + 0.02;
        const exitStart = range.end - 0.02;
        const exitEnd = range.end + 0.05;

        let opacity = 0;
        let translateY = 40;
        let scale = 1.15;

        if (clampedProgress >= entryStart && clampedProgress <= exitEnd) {
          if (clampedProgress < entryEnd) {
            // Fading in
            const p = (clampedProgress - entryStart) / (entryEnd - entryStart);
            opacity = p;
            translateY = (1 - p) * 40;
            scale = 1.15 - p * 0.05;
          } else if (clampedProgress > exitStart) {
            // Fading out
            const p = (exitEnd - clampedProgress) / (exitEnd - exitStart);
            opacity = p;
            translateY = (p - 1) * 40;
            scale = 1.10 - (1 - p) * 0.05;
          } else {
            // Fully visible
            opacity = 1;
            translateY = 0;
            scale = 1.10;
          }
        } else {
          opacity = 0;
          translateY = clampedProgress < entryStart ? 40 : -40;
          scale = clampedProgress < entryStart ? 1.15 : 1.05;
        }

        slide.style.opacity = `${opacity}`;
        slide.style.visibility = opacity > 0 ? "visible" : "hidden";
        slide.style.pointerEvents = opacity > 0.5 ? "auto" : "none";

        if (img) {
          img.style.transform = `scale(${scale})`;
        }
        if (content) {
          content.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial positions
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[380vh] bg-black z-[3]">
      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Project Slides Layer */}
        {PROJECTS.map((project, i) => (
          <div
            key={project.slug}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32 transition-all duration-75 ease-out opacity-0 pointer-events-none"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                priority={i === 0}
                className="project-bg-image object-cover object-center transition-transform duration-75 ease-out scale-115 grayscale"
              />
              {/* Monochromatic overlay gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/90" />
            </div>

            {/* Slide Content */}
            <div className="project-content relative z-20 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-16 xl:gap-20 items-center text-left transition-transform duration-75 ease-out translate-y-10">
              
              {/* Left Column: Heading and Count */}
              <div className="lg:col-span-5 flex flex-col gap-2 md:gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="font-mono text-[10px] md:text-xs tracking-widest text-white/50 uppercase">
                    // SELECTED PORTFOLIO
                  </span>
                  <span className="font-mono text-[10px] text-white bg-white/10 border border-white/10 px-2 py-0.5 rounded">
                    0{i + 1} / 0{PROJECTS.length}
                  </span>
                </div>
                <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {project.title}
                </h3>
                <span className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wider">
                  {project.role}
                </span>
              </div>

              {/* Right Column: Narrative and details */}
              <div className="lg:col-span-7 flex flex-col gap-3 md:gap-6 lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-neutral-300 text-sm md:text-lg lg:text-xl leading-relaxed line-clamp-4 md:line-clamp-none">
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-[11px] font-mono bg-white/5 border border-white/10 text-white/80 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Navigation links */}
                <div className="flex gap-6 items-center pt-3 md:pt-4 border-t border-white/10">
                  <Link 
                    href={`/work/${project.slug}`}
                    className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white hover:text-neutral-300 transition-colors group"
                  >
                    Read Case Study
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-neutral-400 hover:text-white transition-colors group"
                    >
                      Live Site
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Overlay: White Panel (Curtain) */}
        <div 
          ref={curtainRef}
          className="absolute inset-0 bg-white text-black z-30 flex flex-col justify-between p-5 md:p-16 lg:p-24 transition-transform duration-75 ease-out origin-top overflow-y-auto md:overflow-hidden"
        >
          {/* Top segment: Title */}
          <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-4 md:gap-8">
            <h2 className="text-xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight max-w-5xl">
              From architecture to deployment — because true engineering leaders still build.
            </h2>
          </div>

          {/* Middle/Bottom Segment: Narrative details */}
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 lg:gap-16 items-end mt-4 md:mt-0">
            <div className="md:col-span-7 flex flex-col gap-4 text-black/80 text-xs md:text-lg lg:text-xl leading-relaxed">
              <p>
                Most Tech Leads transition purely into management. I don’t. These are enterprise-grade systems and SaaS platforms taken from initial MVP to live production — engineered at hyper-speed using Cursor, GitHub Copilot, and Google Antigravity AI agents. No bottlenecks. No delegation lag. No waiting.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col gap-4 border-l-0 md:border-l border-black/10 pl-0 md:pl-8">
              <p className="text-black text-xs md:text-lg font-medium leading-relaxed">
                This is what it looks like when product strategy, system architecture, and AI-accelerated execution live in the same person.
              </p>
            </div>
          </div>

          {/* Footer segment: Scroll Indicator */}
          <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center border-t border-black/10 pt-4 md:pt-8 mt-4 md:mt-0">
            <span className="font-mono text-[9px] md:text-xs tracking-wider text-black/70 uppercase">
              SCROLL TO EXPLORE — SELECTED PORTFOLIO ↓
            </span>
            <div className="flex gap-1.5 md:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
