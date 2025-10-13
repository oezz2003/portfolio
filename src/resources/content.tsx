import { About, Blog,  Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezzaldeen",
  lastName: "Osama",
  name: `Ezzaldeen Osama`,
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "oezz8459@gmail.com",
  phone: "+201040378725", // WhatsApp number
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
    link: "www.linkedin.com/in/ezz-osama",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home e.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Showcase Your Business to the World Effortlessly</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  skills: {
    display: true,
    title: "Technologies & Tools",
    description: "Technologies I work with to build amazing web applications",
    tools: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Django", icon: "django" },
      { name: "Express.js", icon: "express" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
    ],
  },
  stats: {
    display: true,
    title: "By the Numbers",
    description: "A glimpse into my professional journey",
    items: [
      { number: "50+", label: "Projects Completed" },
      { number: "3+", label: "Years Experience" },
      { number: "25+", label: "Happy Clients" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },
  recentActivity: {
    display: true,
    title: "What I'm Working On",
    description: "Current projects and recent achievements",
    activities: [
      {
        title: "Building a Real Estate Platform",
        description: "Developing a comprehensive property management system with React and Django",
        status: "In Progress",
        date: "2024-05-15",
      },
      {
        title: "Learning AI/ML Integration",
        description: "Exploring machine learning integration in web applications",
        status: "Learning",
        date: "2024-05-10",
      },
      {
        title: "Open Source Contribution",
        description: "Contributing to React ecosystem libraries and tools",
        status: "Active",
        date: "2024-05-08",
      },
    ],
  },
  testimonials: {
    display: true,
    title: "What Clients Say",
    description: "Feedback from satisfied clients and colleagues",
    reviews: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content: "Ezzaldeen delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the project a huge success.",
        rating: 5,
      },
      {
        name: "Ahmed Hassan",
        role: "Product Manager, Digital Solutions",
        content: "Working with Ezzaldeen was a pleasure. He's professional, reliable, and always delivers high-quality code. Highly recommended for any web development project.",
        rating: 5,
      },
      {
        name: "Maria Rodriguez",
        role: "Founder, EduTech Platform",
        content: "The learning management system Ezzaldeen built for us is outstanding. It's user-friendly, scalable, and has significantly improved our operations.",
        rating: 5,
      },
    ],
  },
  callToAction: {
    display: true,
    title: "Ready to Start Your Project?",
    description: "Let's work together to bring your ideas to life with modern web technologies",
    primaryButton: {
      text: "Get In Touch",
      href: "/contact",
    },
    secondaryButton: {
      text: "View My Work",
      href: "/work",
    },
    features: [
      "Free consultation call",
      "Quick response time (24h)",
      "Transparent pricing",
      "Ongoing support included",
    ],
  },
  process: {
    display: true,
    title: "How I Work",
    description: "My proven development process ensures successful project delivery",
    steps: [
      {
        number: "01",
        title: "Discovery & Planning",
        description: "Understanding your requirements, goals, and target audience through detailed consultation and research.",
        icon: "",
      },
      {
        number: "02",
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
        icon: "",
      },
      {
        number: "03",
        title: "Development & Testing",
        description: "Building the application with clean, scalable code and thorough testing at every stage.",
        icon: "",
      },
      {
        number: "04",
        title: "Deployment & Support",
        description: "Launching your project and providing ongoing maintenance and support for optimal performance.",
        icon: "",
      },
    ],
  },
  subline: (
    <>
      Empowering your business with elegant, high-performing digital solutions.
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
    link: "https://wa.me/201040378725?text=Hi%20Ezzaldeen%2C%20I'm%20interested%20in%20your%20services.",

  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I’m a Full Stack Engineer helping businesses turn their ideas into powerful digital experiences.
       I design and build scalable, high-performing web applications that drive growth, improve efficiency,
       and deliver seamless user experiences across platforms.
       My expertise spans React, Next.js, Django, and modern web development practices, with a focus on clean,
       maintainable code and efficient performance. I’m committed to building products that solve real problems
       and drive business growth.
       
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
  image: "/images/og/home e.jpg",
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name} - ${person.role}`,
};

export { person, social, newsletter, home, about, blog, work, contact };
