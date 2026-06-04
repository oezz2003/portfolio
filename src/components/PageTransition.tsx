"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContextType {
  navigate: (href: string) => void;
  isPending: boolean;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a TransitionProvider");
  }
  return context;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDOMLoading, setIsDOMLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM CORE...");

  // Set mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle loading text based on progress
  useEffect(() => {
    if (progress < 25) {
      setLoadingText("INITIALIZING SYSTEM ARCHITECTURE...");
    } else if (progress < 55) {
      setLoadingText("PARSING GRAPHICS & WEBGL PIPELINES...");
    } else if (progress < 75) {
      setLoadingText("INJECTING DESIGN SYSTEM TOKENS...");
    } else if (progress < 95) {
      setLoadingText("COMPILING ASSETS & INTERACTIVE CURSOR...");
    } else {
      setLoadingText("SYSTEM READY.");
    }
  }, [progress]);

  // Handle initial mount loading screen with a non-linear natural feeling progression
  useEffect(() => {
    if (!mounted) return;

    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (hasLoaded === "true") {
      setIsLoading(false);
      setIsDOMLoading(false);
      return;
    }

    let currentProgress = 0;
    let timer: NodeJS.Timeout;

    const tick = () => {
      // Create non-linear jumps to look like real system loads
      const remaining = 100 - currentProgress;
      let increment = 1;
      
      if (currentProgress < 30) {
        increment = Math.floor(Math.random() * 8) + 2; // Fast start
      } else if (currentProgress < 70) {
        increment = Math.floor(Math.random() * 4) + 1; // Slow down in the middle
      } else if (currentProgress < 90) {
        increment = Math.floor(Math.random() * 6) + 1; // Speed up slightly
      } else {
        increment = 1; // Crawl at the end
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        // Dynamic speed intervals
        const nextDelay = currentProgress > 70 && currentProgress < 85 ? 150 : Math.floor(Math.random() * 60) + 20;
        timer = setTimeout(tick, nextDelay);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("portfolio-loaded", "true");
          setTimeout(() => {
            setIsDOMLoading(false);
          }, 800); // duration of slide-up exit transition
        }, 300);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [mounted]);

  // Handle client-side routing transitions
  useEffect(() => {
    if (isPending) {
      setIsPending(false);
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsAnimatingOut(false);
      }, 800); // must match total exit duration of slowest panel (delay + duration)
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const navigate = (href: string) => {
    if (href === pathname) return;
    setIsPending(true);
    setTimeout(() => {
      router.push(href);
    }, 600); // delay before path change to let panels slide up
  };

  // Global anchor click listener to intercept navigations and apply transitions
  useEffect(() => {
    if (!mounted) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !href.includes(":") &&
        !href.includes(".") &&
        targetAttr !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [mounted, pathname, isPending]);

  return (
    <TransitionContext.Provider value={{ navigate, isPending }}>
      {/* Initial Loading Screen */}
      {mounted && isDOMLoading && (
        <div className={`loading-screen ${!isLoading ? "is-loaded" : ""}`}>
          <div className="loading-grid-background" />
          <div className="loading-content">
            <div className="loading-status-tag">SYSTEM BOOT</div>
            <div className="loading-title">
              {"EZZALDEEN OSAMA".split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    animationDelay: `${index * 40}ms`,
                    display: "inline-block",
                    width: char === " " ? "12px" : "auto",
                  }}
                  className="loading-title-char"
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="loading-subtitle">{loadingText}</div>
            <div className="loading-bar-container">
              <div className="loading-bar-progress" style={{ width: `${progress}%` }} />
            </div>
            <div className="loading-counter">{progress.toString().padStart(3, "0")}%</div>
          </div>
        </div>
      )}

      {/* Multi-layered transition curtains */}
      {mounted && (
        <>
          <div
            className={`transition-panel panel-1 ${isPending ? "is-pending" : ""} ${
              isAnimatingOut ? "is-animating-out" : ""
            }`}
          />
          <div
            className={`transition-panel panel-2 ${isPending ? "is-pending" : ""} ${
              isAnimatingOut ? "is-animating-out" : ""
            }`}
          />
          <div
            className={`transition-panel panel-3 ${isPending ? "is-pending" : ""} ${
              isAnimatingOut ? "is-animating-out" : ""
            }`}
          />
        </>
      )}

      {children}
    </TransitionContext.Provider>
  );
}
