"use client";

import React from "react";
import { SplitText } from "./SplitText";

export const IntroSection: React.FC = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-tag">// INTRO</div>
        <div className="intro-text">
          <SplitText
            text="I build *modern digital architectures* that power *business growth*. Leveraging the *React ecosystem*, *AI-agent workflows*, and *scalable cloud infrastructure* — to engineer solutions for startups and enterprises alike."
            animationType="slide-up"
            stagger={15}
            speed={500}
          />
        </div>
      </div>
    </section>
  );
};
