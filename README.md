# filibertosanudo.dev

Portafolio personal de Filiberto Sañudo — desarrollador full-stack.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- TypeScript
- Tailwind CSS
- i18n propio (español / inglés) bajo `app/[lang]/`
- [Resend](https://resend.com/) para el envío del formulario de contacto

## Desarrollo local

```bash
npm install
npm run dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000). El middleware (`proxy.ts`) redirige automáticamente a `/es` o `/en` según el idioma detectado.

Otros scripts:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # eslint
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

| Variable          | Requerida | Descripción                                                                 |
| ----------------- | :-------: | ----------------------------------------------------------------------------- |
| `RESEND_API_KEY`  |    Sí     | API key de Resend usada por `app/api/contact/route.ts` para enviar correos.   |
| `CONTACT_EMAIL`   |    No     | Dirección a la que llegan los mensajes del formulario. Por defecto usa la del código si no se define. |

Sin `RESEND_API_KEY` el formulario de contacto responde con un error controlado en vez de fallar de forma silenciosa.

## Estructura

- `app/[lang]/` — rutas localizadas (layout, página, metadata dinámica)
- `components/` — componentes de UI, reciben el diccionario del idioma actual vía props
- `lib/profile.ts` — datos de identidad no traducibles (nombre, links, email)
- `lib/i18n/dictionaries/` — copy traducido por idioma (`es.ts`, `en.ts`)
- `proxy.ts` — middleware que resuelve el locale y redirige `/` → `/es` o `/en`

## Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com/) (o cualquier plataforma compatible con Next.js). Configura las variables de entorno del apartado anterior en el proveedor de hosting antes de desplegar.
