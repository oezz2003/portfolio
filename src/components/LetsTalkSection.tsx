"use client";

import React from "react";
import Image from "next/image";
import { person, social } from "@/resources/content";

export const LetsTalkSection: React.FC = () => {
  // Find LinkedIn & GitHub links from social config
  const linkedinSocial = social.find((s) => s.name.toLowerCase() === "linkedin");
  const linkedinUrl = linkedinSocial ? linkedinSocial.link : "https://linkedin.com";
  // Format LinkedIn display
  const linkedinDisplay = linkedinUrl.replace("https://www.", "").replace("https://", "");

  const githubSocial = social.find((s) => s.name.toLowerCase() === "github");
  const githubUrl = githubSocial ? githubSocial.link : "https://github.com/oezz2003";
  // Format GitHub display
  const githubDisplay = githubUrl.replace("https://www.", "").replace("https://", "");

  return (
    <section className="relative w-full bg-black py-16 md:py-32 px-5 md:px-12 lg:px-24 xl:px-32 border-t border-neutral-900 z-[2]">
      <div className="relative w-full max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-24">
        
        {/* Top Section: Tagline & Headlines */}
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="font-mono text-xs md:text-sm tracking-widest text-neutral-500 uppercase">
            // LET'S TALK
          </span>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-400 mt-1 md:mt-2 leading-tight">
            Let's build something <span className="text-white">that matters.</span>
          </h2>
          
          <div className="flex flex-col gap-4 md:gap-6 text-neutral-400 text-sm md:text-lg lg:text-xl max-w-3xl leading-relaxed mt-2 md:mt-4">
            <p>
              I'm open to Technical Leadership, System Architecture, and SaaS/ERP engineering conversations — particularly at organizations scaling digital platforms or seeking high-performance execution.
            </p>
            <p>
              I'm also available for advisory engagements, product collaborations, and speaking on developer workflows, VPS/Docker cloud setups, and AI-driven development.
            </p>
            <p className="text-white font-medium">
              If you're building something where engineering needs to perform — let's talk.
            </p>
          </div>
        </div>

        {/* Bottom Section: Photo & Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 group">
              <Image
                src="/images/profile.jpg"
                alt="Ezzaldeen Osama"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                quality={90}
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] md:text-xs tracking-wider text-neutral-500 uppercase mb-3 md:mb-4">
                DIRECT CHANNELS
              </span>
              
              <div className="flex flex-col border-t border-neutral-900">
                {/* Phone Channel */}
                <a 
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-3 md:gap-4 py-4 md:py-5 border-b border-neutral-900 group hover:bg-neutral-950/20 transition-all duration-300 px-2 min-w-0"
                >
                  <div className="w-10 h-10 border border-neutral-800 flex-shrink-0 flex items-center justify-center rounded bg-neutral-950/50 group-hover:border-neutral-700 transition-colors">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-500 uppercase">
                      PHONE / WHATSAPP
                    </span>
                    <span className="text-xs md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors mt-0.5 truncate">
                      {person.phone}
                    </span>
                  </div>
                </a>

                {/* Email Channel */}
                <a 
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 md:gap-4 py-4 md:py-5 border-b border-neutral-900 group hover:bg-neutral-950/20 transition-all duration-300 px-2 min-w-0"
                >
                  <div className="w-10 h-10 border border-neutral-800 flex-shrink-0 flex items-center justify-center rounded bg-neutral-950/50 group-hover:border-neutral-700 transition-colors">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-500 uppercase">
                      EMAIL
                    </span>
                    <span className="text-xs md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors mt-0.5 truncate">
                      {person.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 py-4 md:py-5 border-b border-neutral-900 group hover:bg-neutral-950/20 transition-all duration-300 px-2 min-w-0"
                >
                  <div className="w-10 h-10 border border-neutral-800 flex-shrink-0 flex items-center justify-center rounded bg-neutral-950/50 group-hover:border-neutral-700 transition-colors">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-500 uppercase">
                      LINKEDIN
                    </span>
                    <span className="text-xs md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors mt-0.5 truncate">
                      {linkedinDisplay}
                    </span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 py-4 md:py-5 border-b border-neutral-900 group hover:bg-neutral-950/20 transition-all duration-300 px-2 min-w-0"
                >
                  <div className="w-10 h-10 border border-neutral-800 flex-shrink-0 flex items-center justify-center rounded bg-neutral-950/50 group-hover:border-neutral-700 transition-colors">
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-500 uppercase">
                      GITHUB
                    </span>
                    <span className="text-xs md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors mt-0.5 truncate">
                      {githubDisplay}
                    </span>
                  </div>
                </a>

                {/* Location Channel */}
                <div className="flex items-center gap-3 md:gap-4 py-4 md:py-5 border-b border-neutral-900 group px-2 min-w-0">
                  <div className="w-10 h-10 border border-neutral-800 flex-shrink-0 flex items-center justify-center rounded bg-neutral-950/50">
                    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-500 uppercase">
                      LOCATION
                    </span>
                    <span className="text-xs md:text-base font-medium text-neutral-300 mt-0.5 truncate">
                      Cairo, Egypt
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
