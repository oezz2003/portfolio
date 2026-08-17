"use client";

import React from "react";
import Image from "next/image";

export const AboutMeSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ffffff] border-t border-b border-neutral-200 py-16 md:py-32 px-5 md:px-12 lg:px-24 xl:px-32 overflow-hidden flex justify-center z-[2]">
      <div className="relative w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">
        {/* Left Column: Profile Photo */}
        <div className="lg:col-span-5 w-full flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200 group">
            <Image
              src="/images/profile.jpg"
              alt="Ezzaldeen Osama Profile"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={90}
              priority
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
            {/* Overlay badge inside image at the bottom left */}
            <div className="absolute bottom-4 left-4 bg-black text-white font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-lg z-10">
              TECH LEAD - CO-FOUNDER
            </div>
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          {/* Header Tag */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs md:text-sm tracking-widest text-black/50 uppercase">
              // ABOUT ME
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Architecting robust engineering systems that power modern businesses.
            </h2>
          </div>

          {/* Body Paragraphs */}
          <div className="flex flex-col gap-6 text-black/75 text-base md:text-lg leading-relaxed">
            <p>
              I lead technical development at the intersection of high-performance engineering and strategic business administration. My focus is on architecting scalable infrastructure, shaping product strategy, and turning complex requirements into seamless digital experiences.
            </p>
            <p>
              At <strong className="text-black font-semibold">FALY</strong>, I serve as Tech Lead, spearheading the full-cycle development of enterprise and SaaS products. I have architected and deployed complex platforms—including the AI-powered MCQmed and the Yassin Glass ERP—optimizing system latency, managing robust cloud infrastructures, and accelerating the journey from MVP to full-scale production.
            </p>
            <p>
              Outside my core engineering role, I am the Co-Founder of <strong className="text-black font-semibold">SIRAD</strong>, where I co-lead the strategic and creative direction. I bridge the gap between aesthetic UI/UX design and technical feasibility, ensuring a cohesive brand identity and strong product-market fit across all platforms.
            </p>
          </div>

          {/* Highlight Box at the bottom */}
          <div className="border-l-2 border-black pl-6 py-2 mt-4 bg-black/[0.03] rounded-r-lg pr-4">
            <h4 className="font-mono text-xs md:text-sm tracking-wider text-black uppercase mb-2">
              Product-Minded Engineering — Multidisciplinary Background
            </h4>
            <p className="text-black/90 text-sm md:text-base font-medium mb-1">
              Bridging rigorous Engineering fundamentals with Business Administration (BBA).
            </p>
            <p className="text-black/60 text-xs md:text-sm">
              Focus areas: System Architecture, AI-Driven Workflows, SaaS Scaling, and UI/UX Strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
