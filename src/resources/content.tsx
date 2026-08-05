import { About, Blog, Home, Newsletter, Person, Social, Work, HobbiesSectionConfig } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezzaldeen",
  lastName: "Osama",
  name: `Ezzaldeen Osama`,
  role: "Tech Lead | Senior Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "oezz8459@gmail.com",
  phone: "+201040378725", // WhatsApp number
  location: "10th of Ramadan City, Egypt",
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My monthly newsletter about full-stack development and tech trends</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ezz-osama",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/oezz2003",
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
  headline: <>Architecting the Future of Digital Ecosystems</>,
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
    title: "Impact by the Numbers",
    description: "Measuring technical excellence and business value",
    items: [
      { number: "15+", label: "Enterprise Systems Architected" },
      { number: "40%", label: "Average Tech Debt Reduction" },
      { number: "99.9%", label: "System Reliability & Uptime" },
      { number: "25+", label: "Digital Transformations Led" },
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
    title: "Architectural Methodology",
    description: "A strategic approach to building scalable and sustainable digital solutions",
    steps: [
      {
        number: "01",
        title: "Strategic Discovery",
        description: "Deep-diving into business goals and technical constraints to align technology with long-term strategy.",
        icon: "",
      },
      {
        number: "02",
        title: "System Architecture",
        description: "Designing modular, high-availability systems using Microservices, Event-Driven, and cloud-native patterns.",
        icon: "",
      },
      {
        number: "03",
        title: "Technical Leadership",
        description: "Implementing robust solutions with a focus on 'Clean Architecture', security, and high performance.",
        icon: "",
      },
      {
        number: "04",
        title: "Operational Excellence",
        description: "Optimizing deployment pipelines and monitoring infrastructures to ensure continuous delivery and scalability.",
        icon: "",
      },
    ],
  },
  subline: (
    <>
      Bridging the gap between robust software engineering and strategic business growth.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  image: "/images/og/about.jpg",
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
        Product-minded Senior Full Stack Engineer and Tech Lead with a proven track record of architecting scalable SaaS solutions and leading startup technical directions. Combines deep expertise in the modern React ecosystem (Next.js, TypeScript) and backend infrastructure with a strong foundation in UI/UX design, media, and branding. Co-founder of SIRAD and Tech Lead at FALY, successfully bridging the gap between high-performance engineering, aesthetic design, and strategic business objectives. Adept at leveraging AI-driven workflows to accelerate development from MVP to full-scale production.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FALY",
        timeframe: "April 2025 – Present",
        role: "Tech Lead & Senior Full Stack Engineer",
        achievements: [
          <>
            Spearhead the technical direction and full-cycle development for the startup's core digital products. Manage cloud infrastructure and lead architectural decisions to ensure scalability.
          </>,
          <>
            System Architecture & Development: Architected and deployed complex platforms including MCQmed (an AI-powered medical question bank), Easy Education (a gamified LMS), and Easy Food (an online ordering platform).
          </>,
          <>
            Enterprise Solutions: Developed Yassin Glass ERP, a custom Enterprise Resource Planning system managing operational workflows, leveraging robust Next.js Server Actions.
          </>,
          <>
            Infrastructure Management: Set up and maintained VPS infrastructures utilizing Coolify and Docker containers to ensure high availability and reliable deployment pipelines.
          </>,
        ],
        images: [],
      },
      {
        company: "SIRAD",
        timeframe: "Dec 2025 – Present",
        role: "Co-Founder",
        achievements: [
          <>
            Co-lead the strategic, technical, and creative direction of the company, ensuring product-market fit.
          </>,
          <>
            Oversee media, digital branding, and UI/UX design, ensuring a cohesive and engaging visual identity across all platforms.
          </>,
          <>
            Align technical feasibility with business goals, utilizing a multidisciplinary approach to drive the startup's growth and product development.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "Jan 2022 – April 2025",
        role: "Freelance Full Stack & Product Engineer",
        achievements: [
          <>
            Delivered end-to-end software solutions for diverse clients, seamlessly integrating backend robust functionality with intuitive UI/UX design.
          </>,
          <>
            Engineered a comprehensive educational platform, optimizing database queries to improve system latency by 20%.
          </>,
          <>
            Designed and deployed multiple high-converting custom web solutions and CMS platforms, leveraging SEO optimization and responsive design principles.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Expertise",
    skills: [
      {
        title: "Core Engineering",
        description: (
          <>Next.js, Nest.js, React.js, TypeScript, Node.js, Tailwind CSS.</>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "Nest.js", icon: "" },
          { name: "React.js", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Databases & ORMs",
        description: (
          <>PostgreSQL, Prisma, Drizzle ORM, MongoDB.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Prisma", icon: "" },
          { name: "Drizzle ORM", icon: "" },
          { name: "MongoDB", icon: "mongodb" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & AI",
        description: (
          <>VPS Management, Coolify, Docker, Ubuntu/Linux, AI Agent Workflows, Cursor, GitHub Copilot.</>
        ),
        tags: [
          { name: "VPS Management", icon: "" },
          { name: "Coolify", icon: "" },
          { name: "Docker", icon: "docker" },
          { name: "Ubuntu/Linux", icon: "" },
          { name: "AI Agent Workflows", icon: "" },
          { name: "Cursor & Copilot", icon: "" },
        ],
        images: [],
      },
      {
        title: "Design & Media",
        description: (
          <>UI/UX Design, Figma, Canva, Adobe XD, Visual Hierarchy, Branding, Product Design.</>
        ),
        tags: [
          { name: "UI/UX Design", icon: "" },
          { name: "Figma", icon: "" },
          { name: "Canva", icon: "" },
          { name: "Adobe XD", icon: "" },
          { name: "Visual Hierarchy", icon: "" },
          { name: "Branding & Product Design", icon: "" },
        ],
        images: [],
      },
      {
        title: "System Design",
        description: (
          <>Database Schema Design, SRS Documentation, RESTful APIs, Next.js Server Actions.</>
        ),
        tags: [
          { name: "Database Schema Design", icon: "" },
          { name: "SRS Documentation", icon: "" },
          { name: "RESTful APIs", icon: "" },
          { name: "Next.js Server Actions", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Technical SEO/GEO & Web Performance",
        description: (
          <>Dynamic Metadata & Schema.org Structured Data, SSR/SSG Optimization (Next.js), Core Web Vitals, Google Search Console, Site Speed Optimization, Indexing & Crawlability, Site Architecture.</>
        ),
        tags: [
          { name: "Dynamic Metadata & Schema.org", icon: "" },
          { name: "SSR/SSG Optimization (Next.js)", icon: "nextjs" },
          { name: "Core Web Vitals", icon: "" },
          { name: "Google Search Console", icon: "" },
          { name: "Site Speed Optimization", icon: "" },
          { name: "Indexing & Crawlability", icon: "" },
          { name: "Site Architecture", icon: "" },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "HTI, Egypt",
        description: <>Bachelor of Business Administration (BBA) | Expected 2029. Focus: Product Management, Business Analytics, and Strategic Branding.</>,
      },
      {
        name: "EAE&AT, Egypt",
        description: <>Undergraduate Coursework in Engineering (2020 – 2024). Completed 4 years of intensive study in Software Engineering fundamentals, Calculus, and Analytical Thinking.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about full-stack development and tech...",
  description: `Read what ${person.name} has been up to recently`,
  image: "/images/og/blog.jpg",
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
  image: "/images/og/contact.jpg",
};

const hobbies: HobbiesSectionConfig = {
  display: true,
  tag: "// DISCOVER MY HOBBIES",
  title: "Interactive Presentations & Creative Lab.",
  subtitle: "Strategic analyses brought to life through dynamic web engineering and sensory storytelling.",
  description: (
    <>
      Beyond pure full-stack software development, I create interactive, animation-rich web presentations to explore business strategy, organizational dynamics, and sensory branding. Each project is engineered with live simulations, parallax timelines, and bespoke interactions.
    </>
  ),
  projects: [
    {
      id: "marvel",
      number: "01",
      title: "Marvel: Sensory Hacking & Branding Mastery",
      subtitle: "Multi-Sensory Audience Engagement & Cinematic Universe Strategy",
      badge: "SENSORY HACKING & BRANDING",
      description: (
        <>
          An immersive, cinematic presentation exploring how Marvel hacks audience senses—visual spectacle, sonic identity, emotional resonance, and serialized narrative loops—to build a multi-billion dollar cultural empire and global brand loyalty.
        </>
      ),
      url: "https://marvelooo.vercel.app/",
      tags: ["Brand Strategy", "Sensory Hacking", "Cinematic Motion", "Audio-Visual UX", "Next.js"],
      images: [
        {
          src: "/images/projects/MARVEL.png",
          alt: "Marvel Sensory Hacking & Cinematic Branding Mastery",
        },
      ],
    },
    {
      id: "cartoon-network",
      number: "02",
      title: "Cartoon Network: Cultural & Era Dynamics",
      subtitle: "Interactive Organizational Behavior & Creative Evolution Showcase",
      badge: "ORGANIZATIONAL BEHAVIOR",
      description: (
        <>
          A high-fidelity multimedia presentation analyzing Cartoon Network's leadership transitions, creative culture shifts, and commercial evolution across four distinct eras with interactive character carousels, conflict mapping, and culture diagnostics.
        </>
      ),
      url: "https://cartoon-network-lac.vercel.app/",
      tags: ["Organizational Dynamics", "Parallax Timelines", "Character Carousels", "Framer Motion", "Next.js"],
      images: [
        {
          src: "/images/projects/CN.png",
          alt: "Cartoon Network Cultural & Era Dynamics Showcase",
        },
      ],
    },
    {
      id: "zara",
      number: "03",
      title: "Zara: Fast Fashion Agility",
      subtitle: "Interactive 3-Pillars Simulation & Supply Chain Diagnostics",
      badge: "FAST FASHION STRATEGY",
      description: (
        <>
          An interactive, deep-dive business analysis exploring Zara's operational agility. Features custom real-time simulators for agile Design cycles, nearshore Sourcing, and automated Logistics hubs, coupled with risk diagnosis and strategic recommendations.
        </>
      ),
      url: "https://climb-or-slide.vercel.app/",
      tags: ["Supply Chain Analytics", "Interactive Simulators", "Framer Motion", "Tailwind CSS", "Next.js"],
      images: [
        {
          src: "/images/projects/ZARA.png",
          alt: "Zara Fast Fashion Agile Supply Chain Strategy",
        },
      ],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, contact, hobbies };

