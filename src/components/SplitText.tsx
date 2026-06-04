"use client";

import React, { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay before starting the animation (in ms)
  speed?: number; // Animation duration per character (in ms)
  stagger?: number; // Delay between characters (in ms)
  animationType?: "reveal" | "fade" | "slide-up" | "blur";
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  speed = 400,
  stagger = 30,
  animationType = "slide-up",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const segments = text.split(/(\*[^*]+\*)/g);
  const parsedSegments = segments.map((segment) => {
    const isHighlighted = segment.startsWith("*") && segment.endsWith("*");
    const cleanText = isHighlighted ? segment.slice(1, -1) : segment;
    return {
      text: cleanText,
      isHighlighted,
    };
  });

  let globalCharIndex = 0;

  return (
    <span
      ref={ref}
      className={`split-text-container ${className}`}
      style={{ display: "inline" }}
    >
      {parsedSegments.map((segment, segmentIndex) => {
        const words = segment.text.split(" ");
        return (
          <span
            key={segmentIndex}
            style={{
              display: "inline",
              color: segment.isHighlighted ? "var(--brand-solid)" : "inherit",
            }}
          >
            {words.map((word, wordIndex) => {
              if (word === "" && wordIndex > 0) return null;
              const chars = word.split("");

              return (
                <span
                  key={wordIndex}
                  style={{ display: "inline-block", whiteSpace: "nowrap" }}
                >
                  {chars.map((char, charIndex) => {
                    const charDelay = delay + globalCharIndex * stagger;
                    globalCharIndex++;

                    return (
                      <span
                        key={charIndex}
                        className={`split-char ${animationType} ${inView ? "animate" : ""}`}
                        style={{
                          display: "inline-block",
                          animationDelay: `${charDelay}ms`,
                          animationDuration: `${speed}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {wordIndex < words.length - 1 && (
                    <span style={{ display: "inline-block" }}>&nbsp;</span>
                  )}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};
