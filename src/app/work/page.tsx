import { Column, Heading, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [
        {
          url: baseURL + work.image,
          width: 1280,
          height: 720,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.description,
      images: [baseURL + work.image],
    },
  };
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={work.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
