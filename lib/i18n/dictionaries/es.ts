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
    tryItLabel: "Qué probar",
    demoLabel: "Probar la demo",
    codeLabel: "Ver código",
    moreTitle: "Otros proyectos",
  },
  projects: [
    {
      index: "01",
      name: "Sobremesa — sistema para restaurantes",
      problem:
        "Comandas en papel, reservaciones por WhatsApp y un corte de caja que no cuadra, mientras el cliente espera a que le tomen la orden.",
      decisions:
        "Next.js 16 y PostgreSQL con seguridad a nivel de fila para aislar a cada restaurante; tablero y pantalla de cocina en tiempo real con LISTEN/NOTIFY; cobros con Stripe Connect a la cuenta de cada negocio; más de 1,600 pruebas automatizadas.",
      result:
        "Sitio web, pedidos por QR desde la mesa, reservaciones, cocina, caja y reportes en un solo sistema, listo para tomar la marca de cada cliente.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Docker"],
      featured: {
        slug: "marea",
        tagline: "Se muestra con Marea, una marisquería ficticia de Mazatlán.",
        imageAlt: "Portada del sitio de Marea: una palapa frente al mar y el título «La pesca de esta mañana, en tu mesa al mediodía».",
        tryIt: "Escanea el QR de una mesa, pide desde el celular y mira el pedido llegar a la pantalla de cocina.",
      },
    },
    {
      index: "02",
      name: "Sistema para talleres de reparación",
      problem:
        "El cliente llama para saber si su equipo ya está, discute un precio que nadie dejó por escrito y no hay registro de cómo llegó el equipo.",
      decisions:
        "Next.js 16 y PostgreSQL; cotizaciones que el cliente aprueba desde un enlace privado; máquina de estados con bloqueo de fila; un historial que la base de datos impide reescribir; avisos por correo que no se pierden ni se duplican.",
      result:
        "Recepción con folio y QR, seguimiento en línea, cotizaciones aprobadas por el cliente, cobros y garantías en un solo panel.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      featured: {
        slug: "voltio",
        tagline: "Se muestra con Voltio, un taller ficticio de Guadalajara.",
        imageAlt: "Portada del sitio de Voltio: un celular muestra una cotización aprobada junto al título «Tu equipo en buenas manos».",
        tryIt: "Abre una orden como cliente, aprueba la cotización desde tu celular y mira el cambio en el panel del taller.",
      },
    },
    {
      index: "03",
      name: "Sistema de Punto de Venta (Telefonía)",
      problem: "Gestionar inventario, clientes y ventas sin depender de procesos manuales.",
      decisions:
        "CRUD completo en PHP + MySQL, autenticación con login, interfaz Bootstrap adaptada para uso rápido en punto de venta.",
      result: "Sistema funcional con operación centralizada.",
      stack: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      index: "04",
      name: "Sistema de Gestión Inmobiliaria",
      problem: "Centralizar clientes, propiedades, citas y ventas, sin coordinación manual de agenda.",
      decisions:
        "CRUD en PHP + MySQL, módulo de citas, consulta cruzada entre clientes, propiedades y ventas.",
      result: "Ciclo completo de venta inmobiliaria operado desde un solo sistema.",
      stack: ["PHP", "HTML", "MySQL"],
    },
    {
      index: "05",
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
