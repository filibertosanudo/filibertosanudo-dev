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
  caseStudyLabels: {
    readCase: "Read the case study",
    back: "Back to projects",
    metaSuffix: "Case study",
  },
  caseStudies: {
    marea: {
      kicker: "Case study · Restaurants",
      title: "Sobremesa, a complete restaurant system",
      summary:
        "A restaurant's website, table ordering, kitchen, cash register and reports in one system. Shown through Marea, a fictional seafood restaurant in Mazatlán; each real client gets its own website and brand on top of the same system.",
      facts: [
        { label: "For", value: "Restaurants and small chains" },
        { label: "My role", value: "Design, full-stack development and deployment" },
        { label: "Tests", value: "Over 1,600, with integration and E2E" },
        { label: "Stack", value: "Next.js 16, PostgreSQL, Prisma, Stripe Connect, Docker" },
      ],
      sections: [
        {
          heading: "The problem",
          body: [
            "In a small restaurant the order is a paper ticket, reservations come in over WhatsApp and the cash count never adds up. Guests wait for someone to take their order, and the owner doesn't know what sold until the money is counted.",
          ],
        },
        {
          heading: "A website that sells",
          body: [
            "The restaurant's website is built from its own data: menu, specials, testimonials and hours are edited from the panel. Booking a table takes a minute, and the database refuses two reservations at the same table and time.",
          ],
          image: { file: "sitio.jpg", alt: "Marea's website, with a palapa facing the sea.", caption: "The website, in Spanish and English." },
        },
        {
          heading: "Ordering from the table",
          body: [
            "Guests scan their table's QR code, browse the menu with photos, order and pay by card or at the counter. They follow the order live without an account.",
          ],
          image: { file: "menu-qr.jpg", alt: "The menu on a phone, with photos of aguachile and shrimp cocktail.", caption: "The QR menu on the guest's phone.", phone: true },
        },
        {
          heading: "A live board and kitchen",
          body: [
            "Every order reaches the floor board and the kitchen screen in under a second, with no reload. The kitchen reads each order from across the room and moves it with one tap; a thermal printer prints the ticket.",
          ],
          image: { file: "tablero.jpg", alt: "Order board with Pending, Preparing, Ready and Delivered columns.", caption: "The manager's order board." },
        },
        {
          heading: "The kitchen screen",
          body: [
            "No prices, no menus: only what to cook, in large type, with how long each order has waited and allergy notes highlighted.",
          ],
          image: { file: "cocina.jpg", alt: "Kitchen screen with three orders in columns.", caption: "The kitchen screen, made to be read from a distance." },
        },
        {
          heading: "Cash register and reports",
          body: [
            "Cash shifts with a closing difference, refunds tied to the shift, and sales reports compared with the previous period, exportable to Excel.",
          ],
          image: { file: "reportes.jpg", alt: "Last 7 days sales report with a daily chart and best-selling dishes.", caption: "The week's sales, in pesos." },
        },
      ],
      engineeringTitle: "What's underneath",
      engineering: [
        "Each restaurant isolated by the database itself (row level security): a query that forgets its filter sees nothing instead of everything.",
        "Card payments through Stripe Connect into each business's own account; only the signed webhook marks a payment as paid, so it never applies twice.",
        "Realtime over Postgres LISTEN/NOTIFY and server-sent events: five idle screens went from 605 queries a minute to 2.",
        "A test walks every server action and fails if one forgets its permission check.",
        "Encrypted backups every six hours, and a restore that tests itself monthly in CI.",
      ],
    },
    voltio: {
      kicker: "Case study · Repair shops",
      title: "A management system for repair shops",
      summary:
        "Intake with a folio, live tracking, quotes the customer approves from their phone, payments and warranties. Shown through Voltio, a fictional repair shop in Guadalajara.",
      facts: [
        { label: "For", value: "Phone, laptop and console repair shops" },
        { label: "My role", value: "Design and full-stack development" },
        { label: "Tests", value: "Integration against real Postgres, races included" },
        { label: "Stack", value: "Next.js 16, PostgreSQL, Prisma, Docker" },
      ],
      sections: [
        {
          heading: "The problem",
          body: [
            "Three things go wrong every week in a small repair shop: customers call to ask whether their device is ready, dispute a price nobody wrote down, and nobody recorded the state the device arrived in.",
          ],
        },
        {
          heading: "Intake in a minute",
          body: [
            "Intake starts with the phone number: a returning customer's details and earlier devices fill themselves in. The device's condition is recorded with photos, and a receipt comes out with a folio and a QR code the customer follows.",
          ],
          image: { file: "recepcion.jpg", alt: "Intake form with customer, device and condition fields.", caption: "Receiving a device." },
        },
        {
          heading: "The customer approves from their phone",
          body: [
            "Customers open their private link, see the diagnosis, the photos and the itemized quote, and approve or decline right there. Nothing is repaired or charged without that approval, and it is recorded with the date and time.",
          ],
          image: { file: "seguimiento.jpg", alt: "Tracking page on a phone with the quote and the approve button.", caption: "The tracking page the customer opens.", phone: true },
        },
        {
          heading: "The shop at a glance",
          body: ["The owner sees what is open, what waits on a customer's answer, what is late and what was collected this month."],
          image: { file: "panel.jpg", alt: "Panel overview with open orders, monthly collections and late orders.", caption: "The owner's overview." },
        },
        {
          heading: "Every order, complete",
          body: [
            "Intake, diagnosis, quote, payments, photos and history on one screen, with a button to message the customer on WhatsApp.",
          ],
          image: { file: "orden.jpg", alt: "Order detail awaiting approval, with intake, diagnosis and payments.", caption: "An order waiting for the customer's answer." },
        },
      ],
      engineeringTitle: "What's underneath",
      engineering: [
        "An approval is a yes to one specific price: the answer carries the id of the quote the customer was looking at, and a double tap counts once.",
        "A state machine enforced after a row lock: two people pressing conflicting buttons get one move and one refusal.",
        "A history the database refuses to rewrite, even for the table's owner.",
        "Email notices that are never lost or sent twice (transactional outbox).",
        "A test walks every server action and fails if one doesn't check its caller first.",
      ],
    },
  },
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
