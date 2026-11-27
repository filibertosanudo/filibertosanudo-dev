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
  caseStudyLabels: {
    readCase: "Ver caso completo",
    back: "Volver a proyectos",
    metaSuffix: "Caso de estudio",
  },
  caseStudies: {
    marea: {
      kicker: "Caso de estudio · Restaurantes",
      title: "Sobremesa, un sistema completo para restaurantes",
      summary:
        "El sitio web, los pedidos desde la mesa, la cocina, la caja y los reportes de un restaurante en un solo sistema. Se muestra con Marea, una marisquería ficticia de Mazatlán; cada cliente real recibe su propio sitio y su marca sobre el mismo sistema.",
      facts: [
        { label: "Para", value: "Restaurantes y cadenas pequeñas" },
        { label: "Mi rol", value: "Diseño, desarrollo full-stack y despliegue" },
        { label: "Pruebas", value: "Más de 1,600, con integración y E2E" },
        { label: "Stack", value: "Next.js 16, PostgreSQL, Prisma, Stripe Connect, Docker" },
      ],
      sections: [
        {
          heading: "El problema",
          body: [
            "En un restaurante pequeño la comanda va en papel, las reservaciones llegan por WhatsApp y el corte de caja no cuadra. El cliente espera a que alguien le tome la orden y el dueño no sabe qué vendió hasta que cuenta el dinero.",
          ],
        },
        {
          heading: "Un sitio que vende",
          body: [
            "El sitio del restaurante sale de sus propios datos: menú, promociones, testimonios y horario se editan desde el panel. Reservar una mesa toma un minuto y la base de datos impide dos reservaciones en la misma mesa y hora.",
          ],
          image: { file: "sitio.jpg", alt: "Portada del sitio de Marea, con una palapa frente al mar.", caption: "La portada del sitio, en español y en inglés." },
        },
        {
          heading: "Pedir desde la mesa",
          body: [
            "El cliente escanea el QR de su mesa, ve el menú con fotos, elige y paga con tarjeta o en caja. Sigue su pedido en vivo sin crear cuenta.",
          ],
          image: { file: "menu-qr.jpg", alt: "Menú en el celular, con fotos de aguachile y coctel de camarón.", caption: "El menú del QR, en el celular del cliente.", phone: true },
        },
        {
          heading: "Tablero y cocina en tiempo real",
          body: [
            "Cada pedido aparece en el tablero del piso y en la pantalla de cocina en menos de un segundo, sin recargar. La cocina lee cada pedido a distancia y lo avanza con un toque; una impresora térmica saca la comanda.",
          ],
          image: { file: "tablero.jpg", alt: "Tablero de pedidos con columnas Pendiente, En preparación, Listo y Entregado.", caption: "El tablero de pedidos del gerente." },
        },
        {
          heading: "La pantalla de cocina",
          body: [
            "Sin precios ni menús: solo lo que hay que preparar, en letra grande, con el tiempo que lleva cada pedido y las notas de alergias resaltadas.",
          ],
          image: { file: "cocina.jpg", alt: "Pantalla de cocina con tres pedidos en columnas.", caption: "La pantalla de cocina, pensada para leerse a distancia." },
        },
        {
          heading: "Caja y reportes",
          body: [
            "Turnos de caja con diferencia al cierre, reembolsos atados al turno y reportes de venta comparados contra el periodo anterior, exportables a Excel.",
          ],
          image: { file: "reportes.jpg", alt: "Reporte de ventas de los últimos 7 días con gráfica por día y platillos más vendidos.", caption: "Ventas de la semana, en pesos." },
        },
      ],
      engineeringTitle: "Lo que hay debajo",
      engineering: [
        "Cada restaurante aislado por la propia base de datos (row level security): una consulta que olvida filtrar no ve nada, en vez de ver todo.",
        "Pagos con Stripe Connect a la cuenta de cada negocio; solo el webhook firmado marca un pago como cobrado, así que nunca se aplica dos veces.",
        "Tiempo real con LISTEN/NOTIFY de Postgres y server-sent events: cinco pantallas en reposo pasaron de 605 consultas por minuto a 2.",
        "Una prueba recorre todas las acciones del servidor y falla si alguna olvida revisar permisos.",
        "Respaldos cifrados cada seis horas y una restauración que se prueba sola cada mes en CI.",
      ],
    },
    voltio: {
      kicker: "Caso de estudio · Talleres de reparación",
      title: "Un sistema para talleres de reparación",
      summary:
        "Recepción con folio, seguimiento en línea, cotizaciones que el cliente aprueba desde su celular, cobros y garantías. Se muestra con Voltio, un taller ficticio de Guadalajara.",
      facts: [
        { label: "Para", value: "Talleres de celulares, laptops y consolas" },
        { label: "Mi rol", value: "Diseño y desarrollo full-stack" },
        { label: "Pruebas", value: "Integración contra Postgres real, incluidas carreras" },
        { label: "Stack", value: "Next.js 16, PostgreSQL, Prisma, Docker" },
      ],
      sections: [
        {
          heading: "El problema",
          body: [
            "Tres cosas fallan cada semana en un taller pequeño: el cliente llama para saber si su equipo ya está, discute un precio que nadie dejó por escrito y nadie anotó cómo llegó el equipo.",
          ],
        },
        {
          heading: "Recepción en un minuto",
          body: [
            "La recepción empieza por el teléfono: si ya es cliente, se llenan sus datos y sus equipos anteriores. Se anota cómo llega el equipo, con fotos, y sale un recibo con folio y un QR para que el cliente lo siga.",
          ],
          image: { file: "recepcion.jpg", alt: "Formulario de recepción con cliente, equipo y estado físico.", caption: "Recibir un equipo." },
        },
        {
          heading: "El cliente aprueba desde su celular",
          body: [
            "El cliente abre su enlace privado, ve el diagnóstico, las fotos y la cotización desglosada, y la aprueba o rechaza ahí mismo. Nada se repara ni se cobra sin esa aprobación, y queda registrada con fecha y hora.",
          ],
          image: { file: "seguimiento.jpg", alt: "Página de seguimiento en el celular con la cotización y el botón para aprobar.", caption: "El seguimiento que abre el cliente.", phone: true },
        },
        {
          heading: "El taller de un vistazo",
          body: [
            "El dueño ve lo que está abierto, lo que espera respuesta del cliente, lo atrasado y lo cobrado en el mes.",
          ],
          image: { file: "panel.jpg", alt: "Resumen del panel con órdenes abiertas, cobrado del mes y órdenes atrasadas.", caption: "El resumen del dueño." },
        },
        {
          heading: "Cada orden, completa",
          body: [
            "Recepción, diagnóstico, cotización, cobros, fotos e historial en una sola pantalla, con un botón para avisar al cliente por WhatsApp.",
          ],
          image: { file: "orden.jpg", alt: "Detalle de una orden esperando aprobación, con recepción, diagnóstico y cobro.", caption: "Una orden esperando la respuesta del cliente." },
        },
      ],
      engineeringTitle: "Lo que hay debajo",
      engineering: [
        "Aprobar es decir sí a un precio específico: la respuesta lleva el id de la cotización que el cliente veía, y un doble toque cuenta una sola vez.",
        "Una máquina de estados validada después de bloquear la fila: dos personas con botones contradictorios obtienen un movimiento y un rechazo.",
        "Un historial que la base de datos impide reescribir, incluso para el dueño de la tabla.",
        "Avisos por correo que no se pierden ni se duplican (outbox transaccional).",
        "Una prueba recorre todas las acciones del servidor y falla si alguna no revisa primero quién la llama.",
      ],
    },
  },
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
