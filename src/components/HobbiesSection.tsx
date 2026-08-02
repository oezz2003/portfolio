"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { hobbies } from "@/resources";
import { PresentationProject } from "@/types";

interface ParallaxCardProps {
  project: PresentationProject;
  index: number;
  total: number;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ project, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport the card is (-1 to 1)
      const center = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const progress = (center - viewportCenter) / (windowHeight / 2);
      
      setScrollYOffset(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Image parallax translation: shifts opposite to scroll direction
  const imageParallaxY = scrollYOffset * -35;
  
  // Subtle card dynamic float translation based on scroll
  const cardFloatY = scrollYOffset * 15;

  const currentMainImage = project.images[0];

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className="sticky w-full transition-all duration-300 ease-out"
      style={{
        top: `${80 + index * 28}px`,
        zIndex: index + 1,
        marginBottom: `${(total - index - 1) * 36}px`,
      }}
    >
      <article
        className="group relative rounded-3xl border border-white/10 bg-[#080808]/95 backdrop-blur-2xl hover:border-white/25 transition-all duration-500 overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg) translateY(${cardFloatY}px)`
            : `perspective(1000px) translateY(${cardFloatY}px)`,
          transition: isHovered ? "transform 0.1s ease-out, border-color 0.5s" : "transform 0.4s ease-out, border-color 0.5s",
        }}
      >
        {/* Subtle Ambient Radial Glow on Hover */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />

        {/* Left Column: Content Information */}
        <div className="w-full lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1 relative z-10">
          {/* Top Meta: Number & Category Badge */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg md:text-xl font-bold text-white/40">
              {project.number}
            </span>
            <span className="font-mono text-[10px] md:text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/15 backdrop-blur-sm">
              {project.badge}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-white/60 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="text-white/75 text-sm md:text-base leading-relaxed">
            {project.description}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] md:text-xs text-white/60 border border-white/10 px-2.5 py-1 rounded-md uppercase tracking-wide bg-white/[0.03]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Launch CTA */}
          <div className="pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl !bg-white !text-black font-bold text-sm md:text-base tracking-wide hover:!bg-neutral-200 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.35)] group/btn cursor-pointer"
            >
              <span style={{ color: "#000000" }} className="!text-black font-bold">
                Launch Live Presentation
              </span>
              <svg
                className="w-4 h-4 !text-black transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Parallax Image Window */}
        <div className="w-full lg:col-span-6 order-1 lg:order-2 relative z-10">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group/img">
            {/* Parallax moving image wrapper */}
            <div
              className="absolute inset-[-12%] w-[124%] h-[124%] transition-transform duration-100 ease-out will-change-transform"
              style={{
                transform: `translateY(${imageParallaxY}px) scale(1.05)`,
              }}
            >
              <Image
                src={currentMainImage.src}
                alt={currentMainImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 ease-out group-hover/img:scale-105"
                priority={index === 0}
              />
            </div>
            
            {/* Dark gradient overlay & caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white/90 truncate bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              {currentMainImage.alt}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export const HobbiesSection: React.FC = () => {
  if (!hobbies.display) return null;

  return (
    <section className="relative w-full bg-[#050505] border-t border-white/10 py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 overflow-visible flex justify-center z-[2]">
      <div className="relative w-full max-w-[1280px] flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs md:text-sm tracking-widest text-white/50 uppercase">
            {hobbies.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {hobbies.title}
          </h2>
          <span className="text-xl md:text-2xl lg:text-3xl text-white/50 font-medium tracking-tight">
            {hobbies.subtitle}
          </span>
          {hobbies.description && (
            <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mt-2">
              {hobbies.description}
            </p>
          )}
        </div>

        {/* Presentation Project Showcase Cards with Parallax Scrolling */}
        <div className="flex flex-col gap-12 md:gap-16 relative">
          {hobbies.projects.map((project, index) => (
            <ParallaxCard
              key={project.id}
              project={project}
              index={index}
              total={hobbies.projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
