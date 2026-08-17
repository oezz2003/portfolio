import {
  Column,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import dynamic from 'next/dynamic';
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from 'next';

const ExpertiseSection = dynamic(() => import("@/components/ExpertiseSection"));
const AboutMeSection = dynamic(() => import("@/components/AboutMeSection").then(mod => mod.AboutMeSection));
const HobbiesSection = dynamic(() => import("@/components/HobbiesSection").then(mod => mod.HobbiesSection));
const CareerSection = dynamic(() => import("@/components/CareerSection").then(mod => mod.CareerSection));
const ScrollRevealCTA = dynamic(() => import("@/components/ScrollRevealCTA").then(mod => mod.ScrollRevealCTA));
const LetsTalkSection = dynamic(() => import("@/components/LetsTalkSection").then(mod => mod.LetsTalkSection));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: home.title,
    description: home.description,
    alternates: {
      canonical: baseURL + home.path,
    },
    openGraph: {
      title: home.title,
      description: home.description,
      url: baseURL + home.path,
      images: [
        {
          url: baseURL + home.image,
          width: 1280,
          height: 720,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: home.title,
      description: home.description,
      images: [baseURL + home.image],
    },
  };
}

export default function Home() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Hero />
      <ScrollReveal>
        <IntroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ExpertiseSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutMeSection />
      </ScrollReveal>
      <ScrollReveal>
        <HobbiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <CareerSection />
      </ScrollReveal>
      <ScrollRevealCTA />
      <ScrollReveal>
        <LetsTalkSection />
      </ScrollReveal>
    </Column>
  );
}
