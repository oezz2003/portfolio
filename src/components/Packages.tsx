"use client";

import { Column, Row, Card, Heading, Text, Button, Icon, Grid } from "@once-ui-system/core";

type PackageItem = {
  title: string;
  icon: string; // use Icon names from Once UI
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  theme?: "light" | "dark" | "gradient";
  href?: string;
};

const packages: PackageItem[] = [
  {
    title: "Web Presence",
    icon: "globe",
    tagline: "Build a stunning digital identity.",
    description:
      "I craft modern, responsive websites optimized for SEO and conversions — designed to reflect your brand and make a powerful first impression.",
    features: [
      "Custom Website or Landing Page",
      "SEO Optimization",
      "Brand Integration (Colors, Fonts, Visuals)",
      "Hosting & Domain Setup",
      "Basic Dashboard or Static CMS",
    ],
    cta: "Start Your Website",
    theme: "light",
    href: "/contact",
  },
  {
    title: "Business Automation",
    icon: "cpu",
    tagline: "Digitize your operations.",
    description:
      "I develop integrated ERP, CRM, and POS systems that automate workflows, streamline data management, and enhance productivity across your business.",
    features: [
      "ERP & CRM Integration",
      "POS System",
      "Custom Dashboards & Reports",
      "Cloud Sync & API Integration",
      "Secure Access Management",
    ],
    cta: "Automate My Business",
    theme: "dark",
    href: "/contact",
  },
  {
    title: "Mobile & AI Experience",
    icon: "mobileScreenButton",
    tagline: "Build next‑gen digital products.",
    description:
      "From concept to launch, I build custom mobile apps and AI‑powered solutions that drive engagement and deliver measurable results.",
    features: [
      "Android & iOS Development",
      "AI Chatbots & Automation Tools",
      "Real‑Time Notifications",
      "Analytics & User Insights",
      "Seamless Web‑App Integration",
    ],
    cta: "Build My App",
    theme: "gradient",
    href: "/contact",
  },
];

export function Packages() {
  return (
    <Column fillWidth gap="24">
      <Column maxWidth="s" horizontal="start" align="start" gap="12">
        <Heading as="h2" variant="display-strong-xs" align="start" wrap="balance">
          Tailored Digital Solutions
        </Heading>
        <Text align="start" wrap="balance" onBackground="neutral-weak" variant="body-default-m">
          I help teams turn ideas into scalable products from sleek web experiences to automated systems and mobile apps.
        </Text>
      </Column>
      <Grid columns="3" s={{ columns: 1 }} gap="24" fillWidth>
        {packages.map((pkg, index) => {
          return (
            <Card
              key={index}
              radius="l"
              padding="l"
              background={pkg.theme === "dark" ? "neutral-strong" : "surface"}
              border={pkg.theme === "dark" ? "neutral-alpha-medium" : "neutral-alpha-medium"}
              style={{ height: "100%" }}
            >
              <Column gap="12" style={{ height: "100%" }}>
                <Row vertical="center" gap="12">
                  {index !== 0 && <Icon name={pkg.icon} size="l" onBackground="brand-weak" />}
                  <Heading as="h3" variant="heading-strong-l">
                    {pkg.title}
                  </Heading>
                </Row>
                <Text onBackground="brand-weak" variant="label-default-m">{pkg.tagline}</Text>
                <Text onBackground="neutral-medium" variant="body-default-m">{pkg.description}</Text>
                <Column as="ul" gap="8">
                  {pkg.features.map((feature, i) => (
                    <Row as="li" key={i} gap="8" vertical="start">
                      <Icon name="check" onBackground="brand-weak" />
                      <Text variant="body-default-s" onBackground="neutral-medium">{feature}</Text>
                    </Row>
                  ))}
                </Column>
                <Row paddingTop="8" style={{ marginTop: "auto" }}>
                  <Button href={pkg.href || "/contact"} variant="primary">
                    {pkg.cta}
                  </Button>
                </Row>
              </Column>
            </Card>
          );
        })}
      </Grid>
    </Column>
  );
}


