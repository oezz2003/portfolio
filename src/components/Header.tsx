"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton, Text, Button } from "@once-ui-system/core";

import { routes, display, person, about, contact, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="fixed"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        {/* Desktop Header */}
        <Row
          fillWidth
          vertical="center"
          horizontal="between"
          padding="12"
          radius="full"
          background="neutral-alpha-medium"
          border="neutral-alpha-weak"
          shadow="l"
          s={{ hide: true }}
          style={{
            backdropFilter: "blur(20px)",
            maxWidth: "960px",
            margin: "0 auto",
            backgroundColor: "rgba(10, 10, 10, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Left: Name/Branding */}
          <Row vertical="center" gap="12" paddingLeft="12">
            <Text variant="body-strong-m" style={{ letterSpacing: "-0.02em", color: "#ffffff" }}>
              Ezzaldeen Osama.
            </Text>
          </Row>

          {/* Center: Nav links */}
          <Row gap="4" vertical="center" textVariant="body-default-s">
            {routes["/"] && (
              <ToggleButton
                prefixIcon="home"
                href="/"
                label="Home"
                selected={pathname === "/"}
              />
            )}
            {routes["/about"] && (
              <ToggleButton
                prefixIcon="person"
                href="/about"
                label={about.label}
                selected={pathname === "/about"}
              />
            )}
            {routes["/work"] && (
              <ToggleButton
                prefixIcon="grid"
                href="/work"
                label={work.label}
                selected={pathname.startsWith("/work")}
              />
            )}
            {routes["/contact"] && (
              <ToggleButton
                prefixIcon="email"
                href="/contact"
                label={contact.label}
                selected={pathname.startsWith("/contact")}
              />
            )}
          </Row>

          {/* Right: CTA & Theme Toggle */}
          <Row vertical="center" gap="12" paddingRight="8">
            {display.themeSwitcher && <ThemeToggle />}
            <Button
              href="/contact"
              variant="primary"
              size="s"
              weight="strong"
              style={{
                borderRadius: "9999px",
                background: "#ffffff",
                color: "#000000",
              }}
            >
              LET'S TALK
            </Button>
          </Row>
        </Row>

        {/* Mobile Header */}
        <Row
          hide
          s={{ hide: false }}
          fillWidth
          horizontal="center"
        >
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="full"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
            }}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton
                  size="l"
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                  aria-label="Home"
                  style={{ minWidth: "44px", minHeight: "44px" }}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <ToggleButton
                  size="l"
                  prefixIcon="person"
                  href="/about"
                  selected={pathname === "/about"}
                  aria-label={about.label}
                  style={{ minWidth: "44px", minHeight: "44px" }}
                />
              )}
              {routes["/work"] && (
                <ToggleButton
                  size="l"
                  prefixIcon="grid"
                  href="/work"
                  selected={pathname.startsWith("/work")}
                  aria-label={work.label}
                  style={{ minWidth: "44px", minHeight: "44px" }}
                />
              )}
              {routes["/contact"] && (
                <ToggleButton
                  size="l"
                  prefixIcon="email"
                  href="/contact"
                  selected={pathname.startsWith("/contact")}
                  aria-label={contact.label}
                  style={{ minWidth: "44px", minHeight: "44px" }}
                />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle size="l" />
                </>
              )}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
