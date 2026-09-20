import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://devpass.space";

export const metadata: Metadata = {
  title: "Linux para principiantes: 10 comandos esenciales | DevPass",

  description:
    "Aprende 10 comandos esenciales de Linux para principiantes, cómo utilizarlos y por qué son importantes para administrar tu sistema desde la terminal.",

  keywords: [
    "comandos Linux para principiantes",
    "comandos Linux",
    "terminal Linux",
    "comandos básicos Linux",
    "aprender Linux",
    "Linux para principiantes",
    "administrar Linux",
    "terminal de Linux",
  ],

  authors: [
    {
      name: "DevPass",
      url: siteUrl,
    },
  ],

  creator: "DevPass",
  publisher: "DevPass",

  alternates: {
    canonical: `${siteUrl}/blog/linux-comandos-esenciales-principiantes`,
  },

  openGraph: {
    title: "Linux para principiantes: 10 comandos esenciales",
    description:
      "Una guía práctica para aprender los comandos Linux que necesitas conocer para comenzar a trabajar desde la terminal.",
    url: `${siteUrl}/blog/linux-comandos-esenciales-principiantes`,
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",

    publishedTime: "2026-09-20T00:00:00.000Z",
    modifiedTime: "2026-09-20T00:00:00.000Z",

    authors: ["DevPass"],

    images: [
      {
        url: `${siteUrl}/images/blog/linux-comandos-esenciales-principiantes.webp`,
        width: 1200,
        height: 630,
        alt: "Linux para principiantes: comandos esenciales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Linux para principiantes: 10 comandos esenciales",
    description:
      "Aprende los comandos Linux fundamentales para comenzar a trabajar desde la terminal.",
    images: [
      `${siteUrl}/images/blog/linux-comandos-esenciales-principiantes.webp`,
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline: "Linux para principiantes: 10 comandos esenciales que debes conocer",

  description:
    "Guía práctica para aprender los comandos Linux fundamentales y comenzar a trabajar desde la terminal.",

  image: [
    `${siteUrl}/images/blog/linux-comandos-esenciales-principiantes.webp`,
  ],

  author: {
    "@type": "Organization",
    name: "DevPass",
    url: siteUrl,
  },

  publisher: {
    "@type": "Organization",
    name: "DevPass",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/devpass-robot.png`,
    },
  },

  datePublished: "2026-09-20T00:00:00.000Z",
  dateModified: "2026-09-20T00:00:00.000Z",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/blog/linux-comandos-esenciales-principiantes`,
  },

  articleSection: "Linux",

  keywords: [
    "Linux",
    "comandos Linux",
    "Linux para principiantes",
    "terminal Linux",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteUrl}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Linux para principiantes",
      item: `${siteUrl}/blog/linux-comandos-esenciales-principiantes`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué comandos Linux debería aprender primero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para comenzar conviene aprender comandos como pwd, ls, cd, mkdir, cp, mv, rm, cat, grep y sudo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es difícil aprender Linux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linux puede parecer complejo al principio, pero aprender progresivamente la terminal y sus comandos básicos facilita mucho su administración.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve la terminal de Linux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La terminal permite ejecutar comandos para administrar archivos, procesos, usuarios, redes, paquetes y diferentes componentes del sistema.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito saber programación para utilizar Linux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Puedes comenzar a utilizar Linux sin saber programar. Sin embargo, aprender shell scripting posteriormente puede ayudarte a automatizar tareas.",
      },
    },
  ],
};

export default function LinuxComandosPrincipiantesPage() {
  return (
    <>
      {/* =========================
          STRUCTURED DATA
      ========================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =========================
          NAVBAR
      ========================== */}

      <Navbar />

      <main className="min-h-screen bg-[#020617] text-[#f8faff]">
        {/* =========================
            HERO
        ========================== */}

        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/blog/linux-comandos-esenciales-principiantes.webp"
              alt="Linux para principiantes y comandos esenciales"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-[#020617]/85" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/40 via-[#020617]/80 to-[#020617]" />

          <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pt-40">
            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-[#94a3b8]"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="transition hover:text-[#3da5ff]"
                  >
                    Inicio
                  </Link>
                </li>

                <li>/</li>

                <li>
                  <Link
                    href="/blog"
                    className="transition hover:text-[#3da5ff]"
                  >
                    Blog
                  </Link>
                </li>

                <li>/</li>

                <li className="text-[#a7d3ff]">
                  Linux para principiantes
                </li>
              </ol>
            </nav>

            <div className="mb-6 inline-flex rounded-full border border-[#3da5ff]/30 bg-[#0a1f3d]/70 px-4 py-2 text-sm font-medium text-[#a7d3ff] backdrop-blur">
              Linux · Tecnología · Desarrollo
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Linux para principiantes: 10 comandos esenciales que debes
              conocer
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#cbd5e1] sm:text-xl">
              Aprende los comandos fundamentales de Linux, entiende para qué
              sirve cada uno y comienza a trabajar con la terminal con mayor
              seguridad y confianza.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
              <span>Por DevPass</span>

              <span className="hidden sm:block">•</span>

              <time dateTime="2026-09-20">
                20 de septiembre de 2026
              </time>

              <span className="hidden sm:block">•</span>

              <span>8 min de lectura</span>
            </div>
          </div>
        </section>

        {/* =========================
            ARTICLE
        ========================== */}

        <article className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
          {/* INTRO */}

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl leading-9 text-[#cbd5e1]">
              Linux es uno de los sistemas operativos más importantes dentro
              del mundo tecnológico. Está presente en servidores, sistemas
              embebidos, infraestructura cloud, dispositivos, entornos de
              desarrollo y estaciones de trabajo.
            </p>

            <p>
              Una de las características que más diferencia a Linux de otros
              sistemas es el protagonismo de la terminal. Aunque existen
              entornos gráficos muy completos, conocer los comandos básicos
              permite trabajar de forma más rápida, automatizar tareas y
              comprender mejor cómo funciona el sistema.
            </p>

            <p>
              Si estás comenzando a utilizar Linux, no necesitas memorizar
              cientos de comandos. Lo importante es dominar primero un pequeño
              conjunto de herramientas que puedas utilizar diariamente.
            </p>

            {/* TOC */}

            <div className="my-10 rounded-2xl border border-[#3da5ff]/20 bg-[#0a1f3d]/50 p-6 not-prose">
              <h2 className="mb-4 text-xl font-semibold text-white">
                En este artículo
              </h2>

              <ul className="space-y-3 text-[#cbd5e1]">
                <li>
                  <a
                    href="#que-es-terminal"
                    className="transition hover:text-[#3da5ff]"
                  >
                    ¿Qué es la terminal de Linux?
                  </a>
                </li>

                <li>
                  <a
                    href="#comandos"
                    className="transition hover:text-[#3da5ff]"
                  >
                    10 comandos esenciales
                  </a>
                </li>

                <li>
                  <a
                    href="#buenas-practicas"
                    className="transition hover:text-[#3da5ff]"
                  >
                    Buenas prácticas
                  </a>
                </li>

                <li>
                  <a
                    href="#siguiente-paso"
                    className="transition hover:text-[#3da5ff]"
                  >
                    ¿Qué aprender después?
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="transition hover:text-[#3da5ff]"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* =========================
                SECTION 1
            ========================== */}

            <h2 id="que-es-terminal">
              ¿Qué es la terminal de Linux?
            </h2>

            <p>
              La terminal es una interfaz que permite interactuar con el
              sistema mediante comandos de texto. En lugar de utilizar
              únicamente ventanas y menús, puedes escribir instrucciones para
              consultar información, modificar archivos o administrar
              diferentes recursos.
            </p>

            <p>
              Esta forma de trabajar es especialmente importante en servidores
              Linux, donde muchas veces no existe una interfaz gráfica. También
              es habitual en desarrollo de software, administración de
              sistemas, DevOps y ciberseguridad.
            </p>

            <p>
              Si quieres profundizar en este tema, puedes consultar nuestra
              guía de{" "}
              <Link
                href="/notes/linux-comandos"
                className="font-medium text-[#3da5ff] hover:text-[#a7d3ff]"
              >
                comandos de Linux
              </Link>
              , donde puedes encontrar más conceptos relacionados con la
              terminal.
            </p>

            {/* =========================
                SECTION 2
            ========================== */}

            <h2 id="comandos">
              10 comandos esenciales de Linux
            </h2>

            <p>
              Estos comandos forman una buena base para cualquier persona que
              esté comenzando a trabajar con Linux.
            </p>

            {/* COMMAND 1 */}

            <h3>1. pwd — saber dónde estás</h3>

            <p>
              El comando <strong>pwd</strong> muestra la ruta del directorio
              actual.
            </p>

            <pre>
              <code>pwd</code>
            </pre>

            <p>
              Es especialmente útil cuando estás navegando por diferentes
              carpetas y quieres comprobar exactamente en qué ubicación te
              encuentras.
            </p>

            {/* COMMAND 2 */}

            <h3>2. ls — listar archivos</h3>

            <p>
              <strong>ls</strong> permite visualizar los archivos y directorios
              existentes en una ubicación.
            </p>

            <pre>
              <code>ls</code>
            </pre>

            <p>
              Una variante habitual es:
            </p>

            <pre>
              <code>ls -la</code>
            </pre>

            <p>
              Esta opción permite visualizar también archivos ocultos y
              diferentes detalles de los elementos.
            </p>

            {/* COMMAND 3 */}

            <h3>3. cd — cambiar de directorio</h3>

            <p>
              Con <strong>cd</strong> puedes desplazarte entre directorios.
            </p>

            <pre>
              <code>cd Documentos</code>
            </pre>

            <p>
              Para volver al directorio anterior puedes utilizar:
            </p>

            <pre>
              <code>cd ..</code>
            </pre>

            {/* COMMAND 4 */}

            <h3>4. mkdir — crear directorios</h3>

            <p>
              <strong>mkdir</strong> permite crear una nueva carpeta.
            </p>

            <pre>
              <code>mkdir proyecto</code>
            </pre>

            <p>
              Por ejemplo, puedes utilizarlo para preparar rápidamente la
              estructura inicial de un proyecto.
            </p>

            {/* COMMAND 5 */}

            <h3>5. touch — crear archivos</h3>

            <p>
              El comando <strong>touch</strong> puede utilizarse para crear un
              archivo vacío.
            </p>

            <pre>
              <code>touch index.html</code>
            </pre>

            <p>
              Es muy utilizado durante tareas de desarrollo y administración
              desde la terminal.
            </p>

            {/* COMMAND 6 */}

            <h3>6. cp — copiar archivos</h3>

            <p>
              <strong>cp</strong> permite copiar archivos o directorios.
            </p>

            <pre>
              <code>cp archivo.txt copia.txt</code>
            </pre>

            <p>
              Para trabajar con directorios normalmente necesitarás utilizar
              opciones adicionales.
            </p>

            {/* COMMAND 7 */}

            <h3>7. mv — mover o renombrar</h3>

            <p>
              <strong>mv</strong> sirve tanto para mover archivos como para
              cambiarles el nombre.
            </p>

            <pre>
              <code>mv archivo.txt documentos/</code>
            </pre>

            <p>También puedes cambiar el nombre:</p>

            <pre>
              <code>mv antiguo.txt nuevo.txt</code>
            </pre>

            {/* COMMAND 8 */}

            <h3>8. rm — eliminar archivos</h3>

            <p>
              <strong>rm</strong> permite eliminar archivos desde la terminal.
            </p>

            <pre>
              <code>rm archivo.txt</code>
            </pre>

            <p className="rounded-xl border border-red-400/20 bg-red-500/5 p-5 text-[#cbd5e1]">
              <strong className="text-white">Precaución:</strong> los comandos
              de eliminación deben utilizarse con cuidado porque no siempre
              existe una papelera de reciclaje que permita recuperar los
              archivos.
            </p>

            {/* COMMAND 9 */}

            <h3>9. cat — consultar contenido</h3>

            <p>
              <strong>cat</strong> permite mostrar rápidamente el contenido de
              un archivo de texto.
            </p>

            <pre>
              <code>cat archivo.txt</code>
            </pre>

            <p>
              Para archivos grandes existen otras herramientas como
              <strong> less</strong>, que permiten navegar por el contenido de
              manera más cómoda.
            </p>

            {/* COMMAND 10 */}

            <h3>10. grep — buscar texto</h3>

            <p>
              <strong>grep</strong> es especialmente útil para buscar
              patrones de texto dentro de archivos o resultados.
            </p>

            <pre>
              <code>grep &quoterror&quot registro.log</code>
            </pre>

            <p>
              Este comando se vuelve muy potente cuando se combina con otras
              herramientas de Linux mediante tuberías.
            </p>

            {/* =========================
                TABLE
            ========================== */}

            <h2>Tabla rápida de comandos</h2>

            <div className="my-8 overflow-x-auto rounded-2xl border border-[#3da5ff]/20 not-prose">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-[#0a1f3d]">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-white">
                      Comando
                    </th>

                    <th className="px-5 py-4 font-semibold text-white">
                      Función
                    </th>

                    <th className="px-5 py-4 font-semibold text-white">
                      Ejemplo
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#3da5ff]/10">
                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      pwd
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Mostrar ubicación actual
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      pwd
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      ls
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Listar archivos
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      ls -la
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      cd
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Cambiar directorio
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      cd proyecto
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      mkdir
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Crear directorio
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      mkdir proyecto
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      touch
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Crear archivo
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      touch app.py
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      cp
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Copiar
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      cp a.txt b.txt
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      mv
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Mover o renombrar
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      mv a.txt b.txt
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      rm
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Eliminar
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      rm archivo.txt
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      cat
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Mostrar contenido
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      cat archivo.txt
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-mono text-[#3da5ff]">
                      grep
                    </td>
                    <td className="px-5 py-4 text-[#cbd5e1]">
                      Buscar texto
                    </td>
                    <td className="px-5 py-4 font-mono text-[#94a3b8]">
                      grep &quoterror&quot log.txt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* =========================
                INTERNAL LINKING
            ========================== */}

            <div className="my-12 rounded-2xl border border-[#3da5ff]/20 bg-[#0a1f3d]/40 p-7 not-prose">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3da5ff]">
                Continúa aprendiendo Linux
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/elegir-distribucion-linux"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#020617]/60 p-5 transition hover:-translate-y-1 hover:border-[#3da5ff]/40"
                >
                  <span className="font-semibold text-white">
                    ¿Qué distribución Linux elegir?
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Descubre cómo elegir una distribución según tus necesidades.
                  </span>
                </Link>

                <Link
                  href="/notes/linux-comandos"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#020617]/60 p-5 transition hover:-translate-y-1 hover:border-[#3da5ff]/40"
                >
                  <span className="font-semibold text-white">
                    Más comandos Linux
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Consulta más herramientas y comandos para trabajar desde la
                    terminal.
                  </span>
                </Link>

                <Link
                  href="/notes/diagnostico-redes-linux"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#020617]/60 p-5 transition hover:-translate-y-1 hover:border-[#3da5ff]/40"
                >
                  <span className="font-semibold text-white">
                    Diagnóstico de redes
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Aprende conceptos para diagnosticar problemas de red en
                    Linux.
                  </span>
                </Link>

                <Link
                  href="/notes/buenas-practicas-software"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#020617]/60 p-5 transition hover:-translate-y-1 hover:border-[#3da5ff]/40"
                >
                  <span className="font-semibold text-white">
                    Buenas prácticas de software
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Mejora tus procesos de desarrollo y organización técnica.
                  </span>
                </Link>
              </div>
            </div>

            {/* =========================
                BEST PRACTICES
            ========================== */}

            <h2 id="buenas-practicas">
              Buenas prácticas al utilizar la terminal
            </h2>

            <p>
              Aprender comandos no significa ejecutar cualquier instrucción sin
              comprender sus consecuencias. La terminal ofrece mucho control
              sobre el sistema y por eso conviene desarrollar buenos hábitos.
            </p>

            <h3>Comprende el comando antes de ejecutarlo</h3>

            <p>
              Especialmente cuando encuentres comandos en Internet, revisa qué
              hace cada opción antes de ejecutarlo en tu sistema.
            </p>

            <h3>Evita utilizar privilegios innecesarios</h3>

            <p>
              <strong>sudo</strong> permite ejecutar determinados comandos con
              privilegios elevados. Utilízalo únicamente cuando sea necesario.
            </p>

            <h3>Haz copias de seguridad</h3>

            <p>
              Antes de realizar operaciones importantes sobre archivos o
              configuraciones, asegúrate de tener una copia que puedas
              recuperar.
            </p>

            <p>
              Estas prácticas son especialmente importantes cuando empiezas a
              trabajar con servidores, redes o sistemas utilizados en
              producción.
            </p>

            <p>
              También puedes consultar nuestra guía sobre{" "}
              <Link
                href="/notes/seguridad-web"
                className="font-medium text-[#3da5ff] hover:text-[#a7d3ff]"
              >
                seguridad web
              </Link>{" "}
              para ampliar tus conocimientos sobre seguridad dentro del entorno
              tecnológico.
            </p>

            {/* =========================
                NEXT STEP
            ========================== */}

            <h2 id="siguiente-paso">
              ¿Qué aprender después de estos comandos?
            </h2>

            <p>
              Una vez que domines estos comandos, puedes avanzar hacia
              conceptos más interesantes de administración y desarrollo.
            </p>

            <ul>
              <li>Permisos y propietarios.</li>
              <li>Procesos y servicios.</li>
              <li>Administración de paquetes.</li>
              <li>Variables de entorno.</li>
              <li>Redes y diagnóstico.</li>
              <li>SSH.</li>
              <li>Shell scripting.</li>
              <li>Git y control de versiones.</li>
              <li>Contenedores y Docker.</li>
              <li>Administración de servidores.</li>
            </ul>

            <p>
              Si estás utilizando Linux para desarrollar software, también
              puedes revisar nuestro contenido sobre{" "}
              <Link
                href="/notes/git-flujo-trabajo"
                className="font-medium text-[#3da5ff] hover:text-[#a7d3ff]"
              >
                flujo de trabajo con Git
              </Link>
              .
            </p>

            {/* =========================
                CTA
            ========================== */}

            <div
              id="cta"
              className="my-16 overflow-hidden rounded-3xl border border-[#3da5ff]/20 bg-gradient-to-br from-[#0a1f3d] to-[#020617] p-8 sm:p-10 not-prose"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-[#3da5ff]">
                DevPass
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white">
                ¿Necesitas desarrollar una solución tecnológica?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#94a3b8]">
                En DevPass desarrollamos soluciones de software, sitios web,
                automatizaciones e integraciones orientadas a necesidades
                reales.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/servicios/software"
                  className="rounded-xl bg-[#1e6bff] px-6 py-3 font-semibold text-white transition hover:bg-[#3da5ff]"
                >
                  Ver servicios
                </Link>

                <Link
                  href="/contacto"
                  className="rounded-xl border border-[#3da5ff]/30 px-6 py-3 font-semibold text-[#a7d3ff] transition hover:bg-[#0a1f3d]"
                >
                  Contactar
                </Link>
              </div>
            </div>

            {/* =========================
                FAQ
            ========================== */}

            <section id="faq">
              <h2>Preguntas frecuentes sobre Linux</h2>

              <div className="not-prose space-y-4">
                <details className="group rounded-xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-5">
                  <summary className="cursor-pointer font-semibold text-white">
                    ¿Qué comandos Linux debería aprender primero?
                  </summary>

                  <p className="mt-4 leading-7 text-[#94a3b8]">
                    Puedes comenzar con pwd, ls, cd, mkdir, cp, mv, rm, cat,
                    grep y posteriormente avanzar hacia comandos relacionados
                    con procesos, redes y administración.
                  </p>
                </details>

                <details className="group rounded-xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-5">
                  <summary className="cursor-pointer font-semibold text-white">
                    ¿Es difícil aprender Linux?
                  </summary>

                  <p className="mt-4 leading-7 text-[#94a3b8]">
                    Linux puede parecer complejo al principio, pero aprender
                    progresivamente los comandos y conceptos fundamentales hace
                    que la curva de aprendizaje sea mucho más manejable.
                  </p>
                </details>

                <details className="group rounded-xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-5">
                  <summary className="cursor-pointer font-semibold text-white">
                    ¿Para qué sirve la terminal?
                  </summary>

                  <p className="mt-4 leading-7 text-[#94a3b8]">
                    La terminal permite administrar archivos, procesos,
                    paquetes, usuarios, redes y diferentes componentes del
                    sistema mediante comandos.
                  </p>
                </details>

                <details className="group rounded-xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-5">
                  <summary className="cursor-pointer font-semibold text-white">
                    ¿Necesito saber programación para utilizar Linux?
                  </summary>

                  <p className="mt-4 leading-7 text-[#94a3b8]">
                    No. Puedes comenzar a utilizar Linux sin conocimientos de
                    programación. Posteriormente puedes aprender shell
                    scripting para automatizar tareas.
                  </p>
                </details>
              </div>
            </section>

            {/* =========================
                RELATED
            ========================== */}

            <div className="mt-16 border-t border-[#3da5ff]/10 pt-10 not-prose">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#94a3b8]">
                También te puede interesar
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <Link
                  href="/blog"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#0a1f3d]/30 p-5 transition hover:border-[#3da5ff]/30"
                >
                  <span className="font-semibold text-white">
                    Más artículos
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Explora el blog de DevPass.
                  </span>
                </Link>

                <Link
                  href="/notes"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#0a1f3d]/30 p-5 transition hover:border-[#3da5ff]/30"
                >
                  <span className="font-semibold text-white">
                    DevPass Notes
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Apuntes técnicos sobre desarrollo y tecnología.
                  </span>
                </Link>

                <Link
                  href="/proyectos"
                  className="rounded-xl border border-[#3da5ff]/10 bg-[#0a1f3d]/30 p-5 transition hover:border-[#3da5ff]/30"
                >
                  <span className="font-semibold text-white">
                    Proyectos
                  </span>

                  <span className="mt-2 block text-sm text-[#94a3b8]">
                    Conoce proyectos desarrollados por DevPass.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <Footer />
    </>
  );
}