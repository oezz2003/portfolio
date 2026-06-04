"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const ScrollRevealCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const curtain = curtainRef.current;
      const image = imageRef.current;
      const ctaContent = ctaContentRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the container is scrolled relative to the viewport
      const totalScrollable = rect.height - viewportHeight;
      if (totalScrollable <= 0) return;

      // Progress goes from 0 (when top of section meets top of viewport) to 1 (when bottom meets bottom)
      const progress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // 1. Slide the white curtain panel up
      if (curtain) {
        curtain.style.transform = `translateY(-${clampedProgress * 105}%)`;
      }

      // 2. Parallax zoom out on the image
      if (image) {
        const scale = 1.15 - clampedProgress * 0.15;
        image.style.transform = `scale(${scale})`;
      }

      // 3. Fade in and slide up the CTA content as the curtain lifts
      if (ctaContent) {
        // Start fading in after 40% progress, fully visible by 90%
        const start = 0.4;
        const end = 0.9;
        const ctaProgress = (clampedProgress - start) / (end - start);
        const clampedCtaProgress = Math.max(0, Math.min(1, ctaProgress));
        
        ctaContent.style.opacity = `${clampedCtaProgress}`;
        ctaContent.style.transform = `translateY(${(1 - clampedCtaProgress) * 40}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial positions
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] bg-black z-[3]">
      {/* Sticky screen container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Underlay: Background Image with CTA */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            ref={imageRef}
            src="/images/featured pic.jpg"
            alt="Featured Project Work Preview"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center transition-transform duration-75 ease-out"
          />
          {/* High-fidelity dark glassmorphic overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/80" />
        </div>

        {/* Revealed CTA Content */}
        <div 
          ref={ctaContentRef}
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl opacity-0 translate-y-10"
        >
          <span className="font-mono text-xs md:text-sm tracking-widest text-white/50 uppercase mb-4">
            // SELECTED PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
            Engineering Systems <br />That Scale.
          </h2>
          
          <a 
            href="/work" 
            className="inline-flex items-center gap-3 bg-black text-white font-mono text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-sm font-bold border border-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl group"
          >
            EXPLORE FEATURED SYSTEMS
            <svg 
              className="w-4 h-4 text-white group-hover:text-black transform group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Overlay: White Panel (Curtain) */}
        <div 
          ref={curtainRef}
          className="absolute inset-0 bg-white text-black z-30 flex flex-col justify-between p-8 md:p-16 lg:p-24 transition-transform duration-75 ease-out origin-top"
        >
          {/* Top segment: Title */}
          <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6 md:gap-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight max-w-5xl">
              From architecture to deployment — because true engineering leaders still build.
            </h2>
          </div>

          {/* Middle/Bottom Segment: Narrative details */}
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-end mt-12 md:mt-0">
            <div className="md:col-span-7 flex flex-col gap-6 text-black/80 text-base md:text-lg lg:text-xl leading-relaxed">
              <p>
                Most Tech Leads transition purely into management. I don’t. These are enterprise-grade systems and SaaS platforms taken from initial MVP to live production — engineered at hyper-speed using Cursor, GitHub Copilot, and Google Antigravity AI agents. No bottlenecks. No delegation lag. No waiting.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col gap-6 border-l border-black/10 pl-6 md:pl-8">
              <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                This is what it looks like when product strategy, system architecture, and AI-accelerated execution live in the same person.
              </p>
            </div>
          </div>

          {/* Footer segment: Scroll Indicator */}
          <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center border-t border-black/10 pt-8 mt-12 md:mt-0">
            <span className="font-mono text-[10px] md:text-xs tracking-wider text-black/40 uppercase">
              SCROLL TO EXPLORE — FEATURED SYSTEMS ↓
            </span>
            <div className="flex gap-2">
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
