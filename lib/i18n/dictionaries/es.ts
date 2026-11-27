import type { Dictionary } from "../dictionary";

const dictionary: Dictionary = {
  meta: {
    title: "Filiberto Sañudo — Desarrollador Full-Stack",
    description:
      "Construyo productos web rápidos, confiables y sin deuda técnica — para negocios que necesitan vender más y equipos que necesitan lanzar antes.",
  },
  hero: {
    eyebrow: "Desarrollador Full-Stack · Freelance & Product",
    valueProp:
      "Construyo productos web rápidos, confiables y sin deuda técnica — para negocios que necesitan vender más y equipos que necesitan lanzar antes.",
    ctaLabel: "Trabajemos juntos",
    viewProjectsLabel: "Ver proyectos",
    statusAvailable: "Disponible para proyectos",
    statusBusy: "Agenda completa",
    location: "Basado en LATAM · Trabajo remoto",
    scrollCta: "Desplázate para conocer más",
  },
  stack: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Node.js", "PHP", "Python"],
  projectsSection: {
    eyebrow: "01 · Proyectos",
    title: "Casos de estudio",
    problemLabel: "Problema",
    decisionsLabel: "Decisiones técnicas",
    resultLabel: "Resultado",
  },
  projects: [
    {
      index: "01",
      name: "Sistema de Punto de Venta (Telefonía)",
      problem: "Gestionar inventario, clientes y ventas sin depender de procesos manuales.",
      decisions:
        "CRUD completo en PHP + MySQL, autenticación con login, interfaz Bootstrap adaptada para uso rápido en punto de venta.",
      result: "Sistema funcional con operación centralizada.",
      stack: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      index: "02",
      name: "Sistema de Gestión Inmobiliaria",
      problem: "Centralizar clientes, propiedades, citas y ventas, sin coordinación manual de agenda.",
      decisions:
        "CRUD en PHP + MySQL, módulo de citas, consulta cruzada entre clientes, propiedades y ventas.",
      result: "Ciclo completo de venta inmobiliaria operado desde un solo sistema.",
      stack: ["PHP", "HTML", "MySQL"],
    },
    {
      index: "03",
      name: "Cotizador de Cortinas a Medida",
      problem: "Cotizaciones manuales, lentas y propensas a error, con muchas variables por producto.",
      decisions:
        "Formulario dinámico que adapta campos según el insumo; cálculos de costos y medidas en tiempo real con JavaScript, sin recargar la página; CRUD completo sobre Laravel + MySQL.",
      result: "Cotizaciones más rápidas y consistentes.",
      stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    },
  ],
  aboutSection: {
    eyebrow: "02 · Sobre mí",
    paragraphs: [
      "Aprendo cada tecnología construyendo con ella — proyectos reales, no solo tutoriales. Así sé de verdad cuándo conviene usarla y qué trade-offs trae.",
      "Combino ese enfoque práctico con experiencia real en producción, en un stack moderno enfocado en negocios y producto. Trabajo remoto, con base en LATAM.",
    ],
    cvLabel: "Descargar CV",
  },
  skillGroups: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "NestJS", "PHP", "Python"] },
    { label: "Datos", items: ["PostgreSQL", "MySQL", "Prisma"] },
    { label: "Infraestructura", items: ["Docker", "AWS", "CI/CD", "Playwright"] },
  ],
  experienceSection: {
    eyebrow: "03 · Experiencia laboral",
  },
  experience: [
    {
      period: "Oct 2025 — Presente",
      role: "Programador Full-Stack",
      context: "Freelance & Producto",
      description:
        "Desarrollo full-stack (backend, frontend y base de datos) para una plataforma web en producción, dando soporte y construyendo nuevas funcionalidades sobre un stack PHP/CodeIgniter + Vue + MySQL, con un servicio complementario en NestJS.",
      stack: ["PHP / CodeIgniter", "Vue", "MySQL", "NestJS"],
    },
  ],
  educationSection: {
    eyebrow: "04 · Formación",
  },
  education: [
    {
      period: "2025 — Presente",
      title: "Ingeniería en Desarrollo y Gestión de Software",
      institution: "Universidad Tecnológica de Hermosillo",
    },
    {
      period: "2023 — 2025",
      title: "TSU en Tecnologías de la Información",
      institution: "Desarrollo de Software Multiplataforma · Universidad Tecnológica de Hermosillo",
    },
  ],
  contactSection: {
    eyebrow: "05 · Contacto",
    heading: "¿Trabajamos juntos",
    headingMark: "?",
    subtitle:
      "Cuéntame sobre tu proyecto o vacante — normalmente respondo en menos de 24 horas.",
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame en qué estás trabajando…",
      submitLabel: "Enviar mensaje",
      sendingLabel: "Enviando…",
      successMessage: "¡Gracias! Tu mensaje fue enviado — te responderé pronto.",
      errors: {
        validation: "Revisa los campos: nombre, correo y mensaje son obligatorios.",
        notConfigured: "El envío de correo no está configurado todavía.",
        sendFailed: "No se pudo enviar el mensaje. Intenta de nuevo.",
        generic: "No se pudo enviar el mensaje.",
      },
    },
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
};

export default dictionary;
