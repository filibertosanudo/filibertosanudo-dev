import type { Dictionary } from "../dictionary";

const dictionary: Dictionary = {
  meta: {
    title: "Filiberto Sañudo — Full-Stack Developer",
    description:
      "I build web products that are fast, reliable, and free of technical debt — for businesses that need to sell more and teams that need to ship sooner.",
  },
  hero: {
    eyebrow: "Full-Stack Developer · Freelance & Product",
    valueProp:
      "I build web products that are fast, reliable, and free of technical debt — for businesses that need to sell more and teams that need to ship sooner.",
    ctaLabel: "Let's work together",
    viewProjectsLabel: "View projects",
    statusAvailable: "Available for projects",
    statusBusy: "Fully booked",
    location: "Based in LATAM · Remote work",
    scrollCta: "Scroll to learn more",
  },
  stack: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Node.js", "PHP", "Python"],
  projectsSection: {
    eyebrow: "01 · Projects",
    title: "Case studies",
    problemLabel: "Problem",
    decisionsLabel: "Technical decisions",
    resultLabel: "Result",
  },
  projects: [
    {
      index: "01",
      name: "Point-of-Sale System (Telecom)",
      problem: "Manage inventory, customers, and sales without relying on manual processes.",
      decisions:
        "Full CRUD in PHP + MySQL, login-based authentication, Bootstrap interface tailored for fast point-of-sale use.",
      result: "A working system with centralized operations.",
      stack: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      index: "02",
      name: "Real Estate Management System",
      problem: "Centralize clients, properties, appointments, and sales without manual scheduling.",
      decisions:
        "CRUD in PHP + MySQL, appointments module, cross-referenced queries across clients, properties, and sales.",
      result: "A full real-estate sales cycle run from a single system.",
      stack: ["PHP", "HTML", "MySQL"],
    },
    {
      index: "03",
      name: "Custom Curtain Quoting Tool",
      problem: "Manual quotes that were slow and error-prone, with many variables per product.",
      decisions:
        "A dynamic form that adapts its fields to the material; real-time cost and measurement calculations in JavaScript with no page reloads; full CRUD built on Laravel + MySQL.",
      result: "Faster, more consistent quotes.",
      stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    },
  ],
  aboutSection: {
    eyebrow: "02 · About me",
    paragraphs: [
      "I learn every technology by building with it — real projects, not just tutorials. That way I actually know when it's worth using and what trade-offs it brings.",
      "I pair that hands-on approach with real production experience, on a modern stack focused on business and product. I work remotely, based in LATAM.",
    ],
    cvLabel: "Download CV",
  },
  skillGroups: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "NestJS", "PHP", "Python"] },
    { label: "Data", items: ["PostgreSQL", "MySQL", "Prisma"] },
    { label: "Infrastructure", items: ["Docker", "AWS", "CI/CD", "Playwright"] },
  ],
  experienceSection: {
    eyebrow: "03 · Work experience",
  },
  experience: [
    {
      period: "Oct 2025 — Present",
      role: "Full-Stack Developer",
      context: "Freelance & Product",
      description:
        "Full-stack development (backend, frontend, and database) for a production web platform, providing support and building new features on a PHP/CodeIgniter + Vue + MySQL stack, with a complementary NestJS service.",
      stack: ["PHP / CodeIgniter", "Vue", "MySQL", "NestJS"],
    },
  ],
  educationSection: {
    eyebrow: "04 · Education",
  },
  education: [
    {
      period: "2025 — Present",
      title: "B.Eng. in Software Development and Management",
      institution: "Universidad Tecnológica de Hermosillo",
    },
    {
      period: "2023 — 2025",
      title: "Associate's Degree in Information Technology",
      institution: "Multiplatform Software Development · Universidad Tecnológica de Hermosillo",
    },
  ],
  contactSection: {
    eyebrow: "05 · Contact",
    heading: "Shall we work together",
    headingMark: "?",
    subtitle: "Tell me about your project or open role — I usually reply within 24 hours.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me what you're working on…",
      submitLabel: "Send message",
      sendingLabel: "Sending…",
      successMessage: "Thanks! Your message was sent — I'll get back to you soon.",
      errors: {
        validation: "Check the fields: name, email, and message are required.",
        notConfigured: "Email sending isn't configured yet.",
        sendFailed: "Couldn't send the message. Please try again.",
        generic: "Couldn't send the message.",
      },
    },
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
};

export default dictionary;
