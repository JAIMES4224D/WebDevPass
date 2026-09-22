import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arquitectura de software: por qué diseñar antes de programar | DevPass",
  description:
    "Descubre por qué la arquitectura de software es fundamental antes de programar y cómo una buena estructura permite crear aplicaciones mantenibles, escalables y fáciles de evolucionar.",
  keywords: [
    "arquitectura de software",
    "diseño de software",
    "arquitectura de sistemas",
    "desarrollo de software",
    "buenas prácticas de software",
    "software escalable",
    "software mantenible",
    "DevPass",
  ],
  authors: [{ name: "DevPass" }],
  creator: "DevPass",
  publisher: "DevPass",
  alternates: {
    canonical: "https://devpass.space/blog/arquitectura-software",
  },
  openGraph: {
    title: "Arquitectura de software: por qué diseñar antes de programar",
    description:
      "Una buena arquitectura permite construir software más mantenible, escalable y preparado para evolucionar.",
    url: "https://devpass.space/blog/arquitectura-software",
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",
    publishedTime: "2026-09-21T00:00:00.000Z",
    authors: ["DevPass"],
    images: [
      {
        url: "https://devpass.space/images/blog/arquitectura-software.webp",
        width: 1200,
        height: 630,
        alt: "Arquitectura de software y diseño de sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura de software: por qué diseñar antes de programar",
    description:
      "Conoce por qué la arquitectura de software es una parte fundamental del desarrollo de aplicaciones.",
    images: [
      "https://devpass.space/images/blog/arquitectura-software.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArquitecturaSoftwarePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('/images/blog/arquitectura-software.webp')",
            }}
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">

            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              <Link
                href="/blog"
                className="text-blue-400 transition hover:text-blue-300"
              >
                Blog
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-slate-400">
                Arquitectura de software
              </span>
            </div>

            <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Arquitectura · Desarrollo de software
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Arquitectura de software:
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                por qué diseñar antes de programar
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Antes de escribir cientos o miles de líneas de código,
              existe una decisión que puede determinar el futuro de una
              aplicación: cómo estará organizada.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>📅 21 de septiembre de 2026</span>
              <span>⏱️ 7 min de lectura</span>
              <span>💻 Desarrollo de software</span>
            </div>

          </div>
        </section>

        {/* CONTENIDO */}
        <article className="mx-auto max-w-4xl px-6 py-16">

          {/* INTRODUCCIÓN */}
          <div className="mb-14 rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-6 md:p-8">
            <p className="text-lg leading-8 text-slate-300">
              Cuando comenzamos un proyecto de software es común pensar
              primero en el lenguaje de programación, el framework o la
              base de datos que vamos a utilizar. Sin embargo, existe una
              decisión anterior que muchas veces recibe menos atención:
              <strong className="text-white">
                {" "}
                cómo vamos a organizar el sistema.
              </strong>
            </p>
          </div>

          {/* SECCIÓN 1 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              ¿Qué es la arquitectura de software?
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              La arquitectura de software describe la estructura general
              de una aplicación y la forma en que sus diferentes partes
              se relacionan entre sí.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              No se trata solamente de decidir qué carpetas tendrá un
              proyecto. La arquitectura involucra decisiones importantes
              sobre componentes, responsabilidades, comunicación entre
              módulos, almacenamiento de información, seguridad y
              escalabilidad.
            </p>

            <div className="my-8 rounded-2xl border border-white/10 bg-[#0a1f3d]/50 p-6">
              <p className="font-medium leading-7 text-blue-200">
                Una arquitectura bien pensada permite que el software
                pueda crecer sin convertir cada cambio en un problema.
              </p>
            </div>
          </section>

          {/* SECCIÓN 2 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              ¿Por qué diseñar antes de programar?
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              Programar directamente sin tener una estructura clara puede
              funcionar durante las primeras etapas de un proyecto.
              El problema aparece cuando la aplicación empieza a crecer.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              Nuevas funcionalidades comienzan a depender de componentes
              existentes, aparecen archivos demasiado grandes y cualquier
              modificación puede terminar afectando otras partes del
              sistema.
            </p>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-2xl">⚠️</div>

                <h3 className="mb-3 text-xl font-semibold">
                  Sin arquitectura
                </h3>

                <ul className="space-y-2 text-slate-400">
                  <li>• Código difícil de mantener</li>
                  <li>• Dependencias innecesarias</li>
                  <li>• Cambios difíciles de realizar</li>
                  <li>• Mayor riesgo de errores</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-6">
                <div className="mb-3 text-2xl">🏗️</div>

                <h3 className="mb-3 text-xl font-semibold">
                  Con arquitectura
                </h3>

                <ul className="space-y-2 text-slate-300">
                  <li>• Responsabilidades claras</li>
                  <li>• Componentes independientes</li>
                  <li>• Mayor mantenibilidad</li>
                  <li>• Evolución más controlada</li>
                </ul>
              </div>

            </div>
          </section>

          {/* SECCIÓN 3 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Separar responsabilidades
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              Uno de los principios más importantes al diseñar un sistema
              es evitar que una misma parte de la aplicación tenga
              demasiadas responsabilidades.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-300">
              Por ejemplo, una aplicación puede separar la presentación,
              la lógica de negocio y el acceso a los datos.
            </p>

            <div className="space-y-4">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-blue-300">
                  Presentación
                </h3>

                <p className="mt-2 text-slate-400">
                  Se encarga de interactuar con el usuario y mostrar la
                  información.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-cyan-300">
                  Lógica de negocio
                </h3>

                <p className="mt-2 text-slate-400">
                  Contiene las reglas y procesos que determinan cómo
                  funciona la aplicación.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-purple-300">
                  Persistencia
                </h3>

                <p className="mt-2 text-slate-400">
                  Gestiona la comunicación con bases de datos y otros
                  mecanismos de almacenamiento.
                </p>
              </div>

            </div>
          </section>

          {/* SECCIÓN 4 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Arquitectura no significa complicar el proyecto
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              Un error común es pensar que una arquitectura profesional
              necesariamente debe tener muchas capas, patrones y
              tecnologías.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              En realidad, una buena arquitectura debe responder a las
              necesidades reales del proyecto.
            </p>

            <p className="text-lg leading-8 text-slate-300">
              Un proyecto pequeño puede necesitar una estructura sencilla,
              mientras que un sistema empresarial puede requerir una
              separación mucho más estricta de responsabilidades.
            </p>
          </section>

          {/* SECCIÓN 5 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Algunas arquitecturas utilizadas en software
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-[#0a1f3d]/40 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Arquitectura en capas
                </h3>

                <p className="leading-7 text-slate-400">
                  Divide el sistema en diferentes niveles de
                  responsabilidad, como presentación, negocio y
                  persistencia.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a1f3d]/40 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Arquitectura hexagonal
                </h3>

                <p className="leading-7 text-slate-400">
                  Busca mantener la lógica central del sistema
                  independiente de tecnologías externas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a1f3d]/40 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Arquitectura orientada a servicios
                </h3>

                <p className="leading-7 text-slate-400">
                  Divide determinadas capacidades del sistema en
                  servicios que pueden comunicarse entre sí.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a1f3d]/40 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Microservicios
                </h3>

                <p className="leading-7 text-slate-400">
                  Organiza una aplicación como un conjunto de servicios
                  independientes con responsabilidades específicas.
                </p>
              </div>

            </div>
          </section>

          {/* SECCIÓN 6 */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Arquitectura y escalabilidad
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              La arquitectura también influye en la capacidad que tendrá
              una aplicación para soportar crecimiento.
            </p>

            <p className="text-lg leading-8 text-slate-300">
              Cuando aumentan los usuarios, las funcionalidades o la
              cantidad de información procesada, una estructura bien
              organizada facilita la incorporación de nuevas capacidades
              sin tener que reconstruir completamente el sistema.
            </p>
          </section>

          {/* ENLACES INTERNOS */}
          <section className="mb-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <h2 className="mb-6 text-2xl font-bold">
              También te puede interesar
            </h2>

            <div className="grid gap-4">

              <Link
                href="/notes/arquitectura-antes-codigo"
                className="group rounded-xl border border-white/10 p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
              >
                <span className="text-sm text-blue-400">
                  Nota técnica
                </span>

                <h3 className="mt-1 font-semibold text-white group-hover:text-blue-300">
                  Arquitectura antes del código
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Algunas ideas para pensar la estructura de un sistema
                  antes de comenzar a programarlo.
                </p>
              </Link>

              <Link
                href="/notes/buenas-practicas-software"
                className="group rounded-xl border border-white/10 p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
              >
                <span className="text-sm text-blue-400">
                  Buenas prácticas
                </span>

                <h3 className="mt-1 font-semibold text-white group-hover:text-blue-300">
                  Buenas prácticas de software
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Principios que pueden ayudarte a construir software
                  más claro y mantenible.
                </p>
              </Link>

              <Link
                href="/blog/software"
                className="group rounded-xl border border-white/10 p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
              >
                <span className="text-sm text-blue-400">
                  Blog
                </span>

                <h3 className="mt-1 font-semibold text-white group-hover:text-blue-300">
                  Desarrollo de software
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Explora otros contenidos relacionados con desarrollo y
                  tecnología.
                </p>
              </Link>

            </div>
          </section>

          {/* CONCLUSIÓN */}
          <section className="mb-14">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Conclusión
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              La arquitectura de software no consiste en crear diagramas
              complejos ni en utilizar la mayor cantidad posible de
              patrones.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-300">
              Su verdadero objetivo es establecer una estructura que
              permita entender, mantener y evolucionar el sistema.
            </p>

            <p className="text-lg leading-8 text-slate-300">
              Antes de comenzar a programar, vale la pena detenerse y
              responder una pregunta sencilla:
              <strong className="text-white">
                {" "}
                ¿cómo debería estar organizado este sistema para que
                pueda seguir creciendo mañana?
              </strong>
            </p>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/15 to-cyan-500/[0.04] p-8 md:p-10">

            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-medium text-blue-400">
                DevPass
              </span>

              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                ¿Tienes un proyecto de software?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Una buena solución comienza entendiendo el problema,
                definiendo una estructura adecuada y pensando en cómo
                evolucionará el sistema.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">

                <Link
                  href="/servicios/software"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Ver desarrollo de software
                </Link>

                <Link
                  href="/contacto"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  Contactar
                </Link>

              </div>
            </div>
          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}