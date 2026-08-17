"use client";

import Image from "next/image";
import { Flex, Row, Column, Text, Icon } from "@once-ui-system/core";
import { person, social } from "@/resources";

export const Hero = () => {
  // Find social links or use defaults matching Ezzaldeen's info
  const linkedin = social.find((s) => s.name.toLowerCase() === "linkedin")?.link || "https://linkedin.com";
  const github = social.find((s) => s.name.toLowerCase() === "github")?.link || "https://github.com/oezz2003";
  const email = `mailto:${person.email}`;
  const phone = `tel:${person.phone}`;

  const handleScrollDown = () => {
    const nextSection = document.getElementById("skills") || document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      position="relative"
      fillWidth
      overflow="hidden"
      horizontal="center"
      vertical="center"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      {/* Background portrait image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero bg.jpg"
          alt="Ezzaldeen Osama portrait"
          fill
          priority
          sizes="(max-width: 768px) 250vw, (max-width: 1200px) 150vw, 100vw"
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Radial overlay gradient for spotlight and edge-darkening */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background: "radial-gradient(circle, transparent 15%, rgba(0, 0, 0, 0.5) 60%, rgba(var(--neutral-100-rgb), 0.95) 90%, var(--page-background) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade linear gradient to transition smoothly to next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "25%",
          zIndex: 1,
          background: "linear-gradient(to bottom, transparent, var(--page-background))",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal Social Links (Left) */}
      <Row
        className="hero-social-sidebar"
        gap="24"
        vertical="center"
      >
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{ textDecoration: "none" }}
        >
          <Text
            variant="label-default-l"
            weight="strong"
            onBackground="neutral-weak"
            style={{ cursor: "pointer", letterSpacing: "0.15em" }}
          >
            LINKEDIN
          </Text>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{ textDecoration: "none" }}
        >
          <Text
            variant="label-default-l"
            weight="strong"
            onBackground="neutral-weak"
            style={{ cursor: "pointer", letterSpacing: "0.15em" }}
          >
            GITHUB
          </Text>
        </a>
        <a
          href={email}
          className="social-link"
          style={{ textDecoration: "none" }}
        >
          <Text
            variant="label-default-l"
            weight="strong"
            onBackground="neutral-weak"
            style={{ cursor: "pointer", letterSpacing: "0.15em" }}
          >
            EMAIL
          </Text>
        </a>
        <a
          href={phone}
          className="social-link"
          style={{ textDecoration: "none" }}
        >
          <Text
            variant="label-default-l"
            weight="strong"
            onBackground="neutral-weak"
            style={{ cursor: "pointer", letterSpacing: "0.15em" }}
          >
            PHONE
          </Text>
        </a>
      </Row>

      {/* Bouncing Scroll Down Indicator (Bottom Center) */}
      <Flex
        position="absolute"
        zIndex={3}
        bottom="40"
        horizontal="center"
        onClick={handleScrollDown}
        style={{ cursor: "pointer" }}
        className="hero-bounce-container"
      >
        <Flex
          className="hero-bounce"
          padding="12"
          radius="full"
          background="neutral-alpha-medium"
          border="neutral-alpha-weak"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.5)",
            transition: "all 0.2s ease",
          }}
        >
          <Icon name="chevronDown" size="m" />
        </Flex>
      </Flex>
    </Flex>
  );
};
