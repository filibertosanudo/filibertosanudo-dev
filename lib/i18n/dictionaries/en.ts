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
    tryItLabel: "What to try",
    demoLabel: "Try the demo",
    codeLabel: "View code",
    moreTitle: "Other projects",
  },
  projects: [
    {
      index: "01",
      name: "Sobremesa — restaurant management system",
      problem:
        "Paper tickets, reservations over WhatsApp and a cash count that never adds up, while guests wait for someone to take their order.",
      decisions:
        "Next.js 16 and PostgreSQL with row level security isolating each restaurant; a live order board and kitchen screen over LISTEN/NOTIFY; card payments through Stripe Connect into each business's own account; over 1,600 automated tests.",
      result:
        "Website, QR ordering at the table, reservations, kitchen, cash register and reports in one system, ready to take on each client's brand.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Docker"],
      featured: {
        slug: "marea",
        tagline: "Shown through Marea, a fictional seafood restaurant in Mazatlán.",
        imageAlt: "Marea's website: a palapa facing the sea beside the headline “This morning's catch, on your table by noon”.",
        tryIt: "Scan a table's QR code, order from your phone and watch the order reach the kitchen screen.",
      },
    },
    {
      index: "02",
      name: "Repair shop management system",
      problem:
        "Customers call to ask whether their device is ready, dispute a price nobody wrote down, and there is no record of the state it arrived in.",
      decisions:
        "Next.js 16 and PostgreSQL; quotes the customer approves from a private link; a state machine enforced after a row lock; a history the database refuses to rewrite; email notices that are never lost or sent twice.",
      result:
        "Intake with a folio and a QR code, live tracking, customer-approved quotes, payments and warranties in one panel.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      featured: {
        slug: "voltio",
        tagline: "Shown through Voltio, a fictional repair shop in Guadalajara.",
        imageAlt: "Voltio's website: a phone shows an approved quote beside the headline “Your device in good hands”.",
        tryIt: "Open an order as the customer, approve the quote from your phone and watch the shop's panel change.",
      },
    },
    {
      index: "03",
      name: "Point-of-Sale System (Telecom)",
      problem: "Manage inventory, customers, and sales without relying on manual processes.",
      decisions:
        "Full CRUD in PHP + MySQL, login-based authentication, Bootstrap interface tailored for fast point-of-sale use.",
      result: "A working system with centralized operations.",
      stack: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      index: "04",
      name: "Real Estate Management System",
      problem: "Centralize clients, properties, appointments, and sales without manual scheduling.",
      decisions:
        "CRUD in PHP + MySQL, appointments module, cross-referenced queries across clients, properties, and sales.",
      result: "A full real-estate sales cycle run from a single system.",
      stack: ["PHP", "HTML", "MySQL"],
    },
    {
      index: "05",
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
