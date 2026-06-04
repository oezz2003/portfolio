"use client";

import React from "react";

interface CareerItem {
  number: string;
  role: string;
  timeframe: string;
  duration: string;
  company: string;
  location: string;
  tags: string[];
  summary: string;
  achievements: string[];
}

const careerData: CareerItem[] = [
  {
    number: "01",
    role: "Tech Lead & Senior Full Stack Engineer",
    timeframe: "Apr 2025 — Present",
    duration: "1 yr 2 mos",
    company: "FALY",
    location: "Remote",
    tags: ["System Architecture", "Next.js", "AI Integration", "VPS/Docker"],
    summary: "Spearhead the technical direction and full-cycle development for the startup's core digital products. Manage cloud infrastructure and lead architectural decisions to ensure scalability from rapid MVPs to enterprise-grade production.",
    achievements: [
      "Architected and deployed MCQmed, an AI-powered medical platform, successfully designing the core architecture and managing its Vercel deployment pipeline.",
      "Engineered Easy Education, a gamified LMS, implementing complex database schemas and gamification logic to boost user retention and engagement.",
      "Developed Yassin Glass ERP, a custom enterprise resource planning system streamlining operational workflows via robust Next.js Server Actions.",
      "Overhauled cloud infrastructure by setting up and maintaining high-availability VPS environments utilizing Coolify and Docker containers."
    ]
  },
  {
    number: "02",
    role: "Co-Founder",
    timeframe: "Dec 2025 — Present",
    duration: "6 mos",
    company: "SIRAD",
    location: "Remote",
    tags: ["Technical Strategy", "Product Design", "UI/UX", "Branding"],
    summary: "Co-lead the strategic, technical, and creative direction of the company. Bridging the gap between engineering feasibility and aesthetic digital branding to ensure strong product-market fit and a cohesive user experience.",
    achievements: [
      "Directed multidisciplinary product development, aligning complex technical execution with strategic business and marketing goals.",
      "Overseen complete UI/UX and digital branding across all platforms, establishing a cohesive and engaging visual identity for the startup.",
      "Facilitated cross-functional collaboration, utilizing a strong foundation in Business Administration to drive growth and product evolution."
    ]
  },
  {
    number: "03",
    role: "Freelance Full Stack & Product Engineer",
    timeframe: "Jan 2022 — Apr 2025",
    duration: "3 yrs 4 mos",
    company: "Self-Employed",
    location: "Remote",
    tags: ["MERN Stack", "Tailwind CSS", "CMS Solutions", "SEO"],
    summary: "Delivered end-to-end software solutions for diverse clients, seamlessly integrating robust backend functionality with intuitive UI/UX design to maximize client ROI and operational efficiency.",
    achievements: [
      "Engineered an educational platform for 500+ users, reducing data retrieval time by 20% through optimized SQL queries and secure JWT authentication.",
      "Built a dynamic SSR booking system using Next.js, resulting in a 30% increase in organic traffic and conversion rates.",
      "Designed intuitive clinic operations systems, which reduced staff training time and scheduling errors by 25% through focused visual hierarchy.",
      "Delivered 6+ custom CMS/E-commerce solutions, achieving top 10 Google rankings via deep SEO and performance optimization."
    ]
  }
];

export const CareerSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] border-t border-white/10 py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden flex justify-center z-[2]">
      <div className="relative w-full max-w-[1280px] flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs md:text-sm tracking-widest text-white/50 uppercase">
            // CAREER
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none">
            From MVP to Enterprise.
          </h2>
          <span className="text-2xl md:text-3xl lg:text-4xl text-white/50 font-medium tracking-tight mt-1 block">
            Engineering Measurable Impact.
          </span>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col">
          {careerData.map((item) => (
            <div 
              key={item.number} 
              className="border-t border-white/10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Number Column */}
              <div className="lg:col-span-1">
                <span className="font-mono text-lg md:text-xl font-bold text-white/40 block">
                  {item.number}
                </span>
              </div>

              {/* Main Content Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs md:text-sm text-white/50 mt-1 block">
                    {item.company} • {item.location}
                  </span>
                </div>
                
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  {item.summary}
                </p>

                {/* Achievements List */}
                <ul className="flex flex-col gap-4">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-white/70 text-sm md:text-base leading-relaxed">
                      {/* Premium Circle NE Arrow Bullet */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-1 bg-white/5">
                        <svg 
                          className="w-2.5 h-2.5 text-white/80" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side Column (Dates, Tags) */}
              <div className="lg:col-span-4 flex flex-col lg:items-end gap-6">
                {/* Date & Duration */}
                <div className="flex flex-col lg:items-end">
                  <span className="font-mono text-sm md:text-base font-medium text-white">
                    {item.timeframe}
                  </span>
                  <span className="font-mono text-xs text-white/40 mt-0.5">
                    {item.duration}
                  </span>
                </div>

                {/* Outlined tags */}
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[10px] md:text-xs text-white/60 border border-white/10 px-2.5 py-1 rounded-sm uppercase tracking-wide bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
