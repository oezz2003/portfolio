"use client";

import { Heading, Text, Row, Column } from "@once-ui-system/core";
import SideRays from "./SideRays";

export default function ExpertiseSection() {
  const col1 = [
    { num: "01", title: "System Architecture & Design" },
    { num: "03", title: "Full-Stack SaaS Development" },
    { num: "05", title: "Cloud Infrastructure & DevOps" },
    { num: "07", title: "Enterprise ERP Solutions" },
    { num: "09", title: "Data Modeling & Architecture" }
  ];

  const col2 = [
    { num: "02", title: "AI-Driven Engineering Workflows" },
    { num: "04", title: "Technical Strategy & Leadership" },
    { num: "06", title: "UI/UX & Product Design" },
    { num: "08", title: "MVP to Production Scaling" },
    { num: "10", title: "Brand Experience & Digital Media" }
  ];

  return (
    <section className="relative w-full bg-[#000000] border-t border-white/10 py-16 md:py-32 px-5 md:px-12 lg:px-24 xl:px-32 overflow-hidden flex justify-center z-[2]">
      {/* SideRays background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 md:opacity-35">
        <SideRays
          speed={1.2}
          rayColor1="#ffffff"
          rayColor2="#ffffff"
          intensity={1.4}
          spread={1.8}
          origin="top-right"
          tilt={10}
          saturation={0.0}
          blend={0.7}
          falloff={1.8}
          opacity={0.8}
        />
      </div>

      <div className="relative w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 z-10">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
          <span className="font-mono text-xs md:text-sm tracking-widest text-white uppercase">
            // EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Areas of<br className="hidden sm:inline" /> Specialisation.
          </h2>
        </div>

        {/* Right Column: Two-Column Grid list */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 md:gap-x-12 xl:gap-x-16">
          {/* Sub-column 1 */}
          <div className="flex flex-col">
            {col1.map((item, index) => (
              <div 
                key={item.num}
                className={`group flex items-start gap-4 md:gap-5 py-4 md:py-6 border-b border-white/10 hover:border-white/50 transition-colors duration-300 ${
                  index === 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-mono text-xs md:text-sm tracking-wider text-white/80 group-hover:text-white transition-colors duration-300 pt-0.5">
                  {item.num}
                </span>
                <span className="text-base md:text-xl lg:text-2xl font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Sub-column 2 */}
          <div className="flex flex-col">
            {col2.map((item, index) => (
              <div 
                key={item.num}
                className={`group flex items-start gap-4 md:gap-5 py-4 md:py-6 border-b border-white/10 hover:border-white/50 transition-colors duration-300 ${
                  index === 0 ? "border-t border-white/10 md:border-t-0" : ""
                }`}
              >
                <span className="font-mono text-xs md:text-sm tracking-wider text-white/80 group-hover:text-white transition-colors duration-300 pt-0.5">
                  {item.num}
                </span>
                <span className="text-base md:text-xl lg:text-2xl font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
