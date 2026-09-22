import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://devpass.space";

export const metadata: Metadata = {
  title:
    "Buenas prácticas de programación: cómo escribir código limpio y mantenible | DevPass",
  description:
    "Aprende buenas prácticas de programación para escribir código limpio, organizado, mantenible y profesional. Principios, ejemplos y recomendaciones para desarrollar mejor software.",
  keywords: [
    "buenas prácticas de programación",
    "código limpio",
    "clean code",
    "código mantenible",
    "programación profesional",
    "desarrollo de software",
    "buenas prácticas de desarrollo",
    "principios de programación",
  ],
  authors: [{ name: "DevPass" }],
  creator: "DevPass",
  publisher: "DevPass",
  alternates: {
    canonical: `${siteUrl}/blog/buenas-practicas-programacion`,
  },
  openGraph: {
    title:
      "Buenas prácticas de programación: cómo escribir código limpio y mantenible",
    description:
      "Principios y recomendaciones para escribir código más limpio, organizado y fácil de mantener.",
    url: `${siteUrl}/blog/buenas-practicas-programacion`,
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",
    publishedTime: "2026-09-21T00:00:00.000Z",
    authors: ["DevPass"],
    images: [
      {
        url: `${siteUrl}/images/blog/programacion-codigo.webp`,
        width: 1200,
        height: 630,
        alt: "Buenas prácticas de programación y código limpio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buenas prácticas de programación: código limpio y mantenible | DevPass",
    description:
      "Aprende principios y técnicas para mejorar la calidad de tu código.",
    images: [`${siteUrl}/images/blog/programacion-codigo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleUrl = `${siteUrl}/blog/buenas-practicas-programacion`;

export default function BuenasPracticasProgramacionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Buenas prácticas de programación: cómo escribir código limpio y mantenible",
    description:
      "Guía práctica sobre buenas prácticas de programación, código limpio, organización, reutilización, manejo de errores, Git y mantenimiento de software.",
    image: [`${siteUrl}/images/blog/programacion-codigo.webp`],
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
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "es-PE",
  };

  const breadcrumbJsonLd = {
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
        name: "Buenas prácticas de programación",
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-white">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />

        {/* HERO */}
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/blog/programacion-codigo.webp')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-[#020617]/80" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/50 via-[#020617]/80 to-[#020617]" />

          <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-slate-400"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white"
                  >
                    Inicio
                  </Link>
                </li>

                <li>/</li>

                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>

                <li>/</li>

                <li className="text-blue-300">
                  Buenas prácticas de programación
                </li>
              </ol>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
              Programación · Desarrollo de software
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Buenas prácticas de programación: cómo escribir código limpio y
              mantenible
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Escribir código que funciona es solo una parte del desarrollo.
              Aprender a organizarlo, mantenerlo y hacerlo comprensible puede
              marcar la diferencia entre un proyecto difícil de mantener y
              uno preparado para crecer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>Por DevPass</span>
              <span>•</span>
              <time dateTime="2026-09-21">21 de septiembre de 2026</time>
              <span>•</span>
              <span>8 min de lectura</span>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          {/* Introducción */}
          <section>
            <p className="text-lg leading-8 text-slate-300">
              En programación, resolver un problema no siempre significa que
              el trabajo esté terminado. Un programa puede funcionar
              correctamente y, aun así, resultar difícil de entender,
              modificar o ampliar.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Las buenas prácticas de programación buscan precisamente
              mejorar esa situación. No se trata de escribir más código ni de
              utilizar técnicas complicadas, sino de construir soluciones
              claras, consistentes y fáciles de mantener.
            </p>

            <div className="my-10 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-6">
              <p className="text-base leading-7 text-slate-200">
                <strong className="text-blue-300">
                  Idea clave:
                </strong>{" "}
                el código no solo debe ser entendido por la computadora.
                También debe poder ser entendido por las personas que tendrán
                que mantenerlo después.
              </p>
            </div>
          </section>

          {/* 1 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              1. Utiliza nombres claros y descriptivos
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Los nombres de variables, funciones y clases deben comunicar qué
              representa cada elemento. Evita nombres demasiado genéricos
              cuando exista una alternativa más descriptiva.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <div className="border-b border-white/10 px-5 py-3 text-sm text-slate-400">
                Ejemplo
              </div>

              <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-300">
                <code>{`// Poco descriptivo
const d = 30;

// Más claro
const diasDeGarantia = 30;`}</code>
              </pre>
            </div>

            <p className="mt-5 leading-8 text-slate-300">
              Un buen nombre reduce la necesidad de comentarios adicionales y
              permite comprender rápidamente qué hace una parte del programa.
            </p>
          </section>

          {/* 2 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              2. Mantén las funciones pequeñas
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Una función debería tener una responsabilidad clara. Cuando una
              función empieza a encargarse de demasiadas tareas, aumenta la
              dificultad para probarla, modificarla y detectar errores.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              En lugar de crear una función enorme que valide datos, consulte
              una base de datos, procese información y genere una respuesta,
              es preferible dividir esas responsabilidades.
            </p>
          </section>

          {/* 3 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              3. Evita repetir código innecesariamente
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              La repetición dificulta el mantenimiento. Si una misma lógica
              aparece en varios lugares y posteriormente debe cambiar, tendrás
              que modificar múltiples partes del proyecto.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Una solución común es extraer la lógica repetida hacia una
              función, módulo o componente reutilizable.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm font-semibold text-blue-300">
                Principio relacionado
              </p>

              <p className="mt-2 text-slate-300">
                <strong>DRY — Don&apos;t Repeat Yourself.</strong> La idea es
                evitar duplicar conocimiento o lógica cuando puede centralizarse
                correctamente.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              4. Organiza correctamente tu proyecto
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Una estructura ordenada facilita encontrar archivos y entender
              cómo está construido un proyecto.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
                <code>{`src/
├── components/
├── services/
├── utils/
├── hooks/
├── types/
└── pages/`}</code>
              </pre>
            </div>

            <p className="mt-5 leading-8 text-slate-300">
              La estructura exacta dependerá del lenguaje y del framework,
              pero la idea general es mantener responsabilidades separadas.
            </p>
          </section>

          {/* 5 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              5. No abuses de los comentarios
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Los comentarios pueden ser útiles, pero no deberían utilizarse
              para explicar código innecesariamente complejo cuando el propio
              código podría ser más claro.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Un comentario resulta especialmente útil cuando explica el
              motivo de una decisión técnica, una restricción externa o un
              comportamiento que no resulta evidente.
            </p>
          </section>

          {/* 6 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              6. Maneja correctamente los errores
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Una aplicación profesional debe considerar qué sucede cuando
              algo falla. Las operaciones de red, archivos, bases de datos y
              servicios externos pueden generar errores.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              En lugar de ignorarlos, conviene capturarlos, registrarlos y
              proporcionar una respuesta adecuada al contexto de la
              aplicación.
            </p>
          </section>

          {/* 7 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              7. Utiliza Git como parte del desarrollo
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Git permite registrar la evolución del proyecto, trabajar con
              diferentes ramas y recuperar versiones anteriores cuando sea
              necesario.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Si quieres profundizar en este tema, puedes consultar nuestra
              nota sobre{" "}
              <Link
                href="/notes/git-flujo-trabajo"
                className="font-medium text-blue-400 underline decoration-blue-400/30 underline-offset-4 hover:text-blue-300"
              >
                Git y flujo de trabajo
              </Link>
              .
            </p>
          </section>

          {/* 8 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              8. Escribe código fácil de probar
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              El código bien estructurado suele ser más sencillo de probar.
              Separar responsabilidades y reducir dependencias innecesarias
              facilita la creación de pruebas y permite detectar problemas
              antes de llevar los cambios a producción.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Las pruebas no solo sirven para encontrar errores: también
              proporcionan mayor confianza cuando el proyecto comienza a
              crecer.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Puedes complementar este tema con nuestro contenido sobre{" "}
              <Link
                href="/blog/testing-con-ia"
                className="font-medium text-blue-400 underline decoration-blue-400/30 underline-offset-4 hover:text-blue-300"
              >
                testing y uso de inteligencia artificial
              </Link>
              .
            </p>
          </section>

          {/* 9 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              9. Refactoriza cuando sea necesario
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Refactorizar significa mejorar la estructura interna del código
              sin cambiar el comportamiento esperado del programa.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              No siempre es necesario reescribir un proyecto completo. Muchas
              veces pequeñas mejoras progresivas pueden reducir la complejidad
              y hacer que el código sea más fácil de mantener.
            </p>
          </section>

          {/* 10 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight">
              10. Piensa en la arquitectura antes de programar
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Antes de comenzar a escribir cientos de líneas de código, es
              conveniente comprender el problema, identificar las
              responsabilidades y decidir cómo se relacionarán los diferentes
              componentes.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              En proyectos medianos y grandes, una buena arquitectura puede
              reducir considerablemente los problemas de mantenimiento.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              En DevPass también puedes leer{" "}
              <Link
                href="/notes/arquitectura-antes-codigo"
                className="font-medium text-blue-400 underline decoration-blue-400/30 underline-offset-4 hover:text-blue-300"
              >
                por qué la arquitectura debe pensarse antes del código
              </Link>
              .
            </p>
          </section>

          {/* RELACIÓN CON OTROS CONTENIDOS */}
          <section className="mt-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Continúa aprendiendo
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Más contenido de DevPass
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/software"
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="text-sm text-blue-400">Software</span>
                  <h3 className="mt-2 font-semibold text-white">
                    Desarrollo de software
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Explora conceptos relacionados con la construcción de
                    software.
                  </p>
                </Link>

                <Link
                  href="/blog/inteligencia-artificial"
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="text-sm text-blue-400">
                    Inteligencia artificial
                  </span>
                  <h3 className="mt-2 font-semibold text-white">
                    IA aplicada al desarrollo
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Descubre cómo la IA está cambiando la forma de desarrollar
                    software.
                  </p>
                </Link>

                <Link
                  href="/notes/linux-comandos"
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="text-sm text-blue-400">Linux</span>
                  <h3 className="mt-2 font-semibold text-white">
                    Comandos esenciales de Linux
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Una referencia práctica para trabajar desde la terminal.
                  </p>
                </Link>

                <Link
                  href="/proyectos"
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="text-sm text-blue-400">Proyectos</span>
                  <h3 className="mt-2 font-semibold text-white">
                    Proyectos de DevPass
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Conoce algunos de los proyectos y soluciones desarrollados.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* CONCLUSIÓN */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight">
              Conclusión
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Las buenas prácticas de programación no consisten en seguir una
              lista rígida de reglas. Se trata de desarrollar el criterio
              necesario para construir código comprensible, consistente y
              preparado para evolucionar.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Utilizar nombres claros, dividir responsabilidades, evitar
              duplicaciones, controlar errores, trabajar con Git y refactorizar
              cuando sea necesario son hábitos que pueden mejorar
              significativamente cualquier proyecto.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              A medida que un proyecto crece, la calidad del código deja de ser
              un detalle y se convierte en una parte fundamental del producto.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-20">
            <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-950 p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  DevPass
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  ¿Tienes un proyecto de software?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Si necesitas desarrollar una aplicación web, automatizar un
                  proceso o construir una solución de software, podemos
                  convertir la idea en una solución funcional y escalable.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/servicios/software"
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
                  >
                    Ver servicios
                  </Link>

                  <Link
                    href="/contacto"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Volver */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              ← Volver al blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}