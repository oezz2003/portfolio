import { About, Blog,  Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezzaldeen",
  lastName: "Osama",
  name: `Ezzaldeen Osama`,
  role: "Software Architect | Technical Lead",
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
        Visionary Software Architect and Technical Lead with 4+ years of experience in designing and implementing high-availability, distributed systems. 
        Expertise in Microservices architecture, cloud-native solutions, and modern data modeling using Prisma and Drizzle. 
        Proven track record of leading technical teams through complex digital transformations, including ERP systems and AI-integrated educational platforms. 
        Combines a deep background in Engineering fundamentals with a Business Administration perspective to architect solutions that maximize ROI and operational scalability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ZAK Solutions",
        timeframe: "Dec 2025 – Present",
        role: "Lead Software Architect & Tech Lead",
        achievements: [
          <>
            Architected a modular ERP ecosystem for industrial glass installation, designing a scalable schema for inventory, accounting, and logistics that supports multi-tenant operations.
          </>,
          <>
            Engineered the backend architecture for an AI-enabled medical MCQ platform, integrating AI-driven explanation engines and real-time performance analytics.
          </>,
          <>
            Established internal "Clean Architecture" standards, reducing technical debt and improving developer onboarding efficiency by 25%.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "Jan 2022 – Present",
        role: "Senior Full Stack Engineer",
        achievements: [
          <>
            Designed and deployed a Scalable LMS Architecture for 500+ concurrent users, implementing optimized SQL patterns that improved data throughput by 20%.
          </>,
          <>
            Architected high-traffic POS systems and "Smart Menu" solutions for the hospitality sector, ensuring 99.9% SEO visibility and a 30% increase in conversion rates.
          </>,
          <>
            Implemented AWS S3-based distributed storage pipelines for high-volume media (e.g., Eagle Divers), ensuring global low-latency access.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2020 – 2022",
        role: "UI/UX & Graphic Designer",
        achievements: [
          <>
            Developed comprehensive design systems and brand identities, ensuring visual consistency across multi-platform digital products.
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
        title: "System Architecture",
        description: (
          <>Expertise in designing high-availability, distributed systems and cloud-native solutions.</>
        ),
        tags: [
          { name: "Microservices", icon: "" },
          { name: "Event-Driven Architecture", icon: "" },
          { name: "Serverless", icon: "" },
          { name: "RESTful & GraphQL APIs", icon: "" },
          { name: "Clean Architecture", icon: "" },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: (
          <>High-performance data modeling and caching strategies for scalable applications.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Redis", icon: "" },
          { name: "Supabase", icon: "" },
          { name: "Prisma", icon: "" },
          { name: "Drizzle ORM", icon: "" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
      {
        title: "Frontend Architecture",
        description: (
          <>Next.js specialist focusing on performance optimization and design systems.</>
        ),
        tags: [
          { name: "Next.js (App Router)", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Performance Optimization (SSR/ISR)", icon: "" },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: (
          <>Cloud-native deployment and infrastructure orchestration.</>
        ),
        tags: [
          { name: "AWS (S3, Cloudfront)", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "CI/CD Pipeline Design", icon: "" },
          { name: "VPS Orchestration", icon: "" },
          { name: "Linux Customization", icon: "" },
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
        name: "Higher Technological Institute (HTI), Egypt",
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

export { person, social, newsletter, home, about, blog, work, contact };
