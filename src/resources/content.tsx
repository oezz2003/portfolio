import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezzaldeen",
  lastName: "Osama",
  name: `Ezzaldeen Osama`,
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "oezz8459@gmail.com",
  phone: "+201000000000", // Add your phone number here for WhatsApp
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My monthly newsletter about full-stack development and tech trends</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ezzaldeen",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ezzaldeen-osama",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable web applications with modern technologies</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Full Stack Development</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/learning-management-platform",
  },
  subline: (
    <>
      I'm Ezzaldeen, a Full Stack Engineer based in Egypt, specializing in React, Next.js, Django, and Express.js.
      <br /> I build scalable web applications with clean code and optimal performance.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ezzaldeen is an Egypt-based Full Stack Engineer with a passion for building scalable web applications
        and transforming complex challenges into simple, elegant solutions. His work spans full-stack development,
        system architecture, and delivering high-quality user experiences with clean code and optimal performance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2022 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed and deployed multiple production-ready websites for clients across business, education, and healthcare industries.
          </>,
          <>
            Designed full-stack systems integrating React/Next.js frontends with Django/Express.js backends.
          </>,
          <>
            Implemented complex CRUD operations, authentication flows, and role-based authorization systems.
          </>,
          <>
            Managed deployment pipelines using Netlify, Vercel, and Firebase Hosting.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Expert in building responsive and interactive user interfaces with modern frameworks.</>
        ),
        tags: [
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Vite",
            icon: "vite",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Redux",
            icon: "redux",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>Strong backend knowledge with focus on RESTful APIs and authentication systems.</>
        ),
        tags: [
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "RESTful APIs",
            icon: "api",
          },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>Experience with various database systems for different application needs.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>Proficient in development tools and deployment platforms.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Netlify",
            icon: "netlify",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
        ],
        images: [],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about full-stack development and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name} - ${person.role}`,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
