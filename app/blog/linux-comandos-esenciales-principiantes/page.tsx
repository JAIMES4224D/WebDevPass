import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comandos Linux Esenciales: Guía Práctica para Principiantes | DevPass",
  description:
    "Aprende los comandos Linux esenciales para navegar, administrar archivos, consultar procesos, gestionar permisos y trabajar desde la terminal.",
  keywords: [
    "comandos Linux",
    "comandos Linux básicos",
    "terminal Linux",
    "Linux para principiantes",
    "comandos Debian",
    "comandos Ubuntu",
    "comandos Kali Linux",
    "administración Linux",
  ],
  alternates: {
    canonical: "https://devpass.space/notes/linux-comandos",
  },
  openGraph: {
    title: "Comandos Linux Esenciales: Guía Práctica",
    description:
      "Una guía práctica para aprender los comandos Linux más utilizados desde la terminal.",
    url: "https://devpass.space/notes/linux-comandos",
    siteName: "DevPass",
    type: "article",
  },
};

const commands = [
  {
    command: "pwd",
    title: "Mostrar la ubicación actual",
    description:
      "Permite conocer exactamente en qué directorio te encuentras dentro del sistema.",
    example: "pwd",
  },
  {
    command: "ls",
    title: "Listar archivos y directorios",
    description:
      "Muestra el contenido del directorio actual. Puedes combinarlo con diferentes opciones.",
    example: "ls -lah",
  },
  {
    command: "cd",
    title: "Cambiar de directorio",
    description:
      "Permite desplazarte entre carpetas del sistema de archivos.",
    example: "cd /var/log",
  },
  {
    command: "mkdir",
    title: "Crear directorios",
    description:
      "Crea una nueva carpeta desde la terminal.",
    example: "mkdir proyectos",
  },
  {
    command: "cp",
    title: "Copiar archivos",
    description:
      "Copia archivos o directorios hacia otra ubicación.",
    example: "cp archivo.txt respaldo.txt",
  },
  {
    command: "mv",
    title: "Mover o renombrar",
    description:
      "Permite mover archivos o cambiar su nombre.",
    example: "mv archivo.txt documentos/",
  },
  {
    command: "rm",
    title: "Eliminar archivos",
    description:
      "Elimina archivos o directorios. Utilízalo con precaución.",
    example: "rm archivo.txt",
  },
  {
    command: "cat",
    title: "Consultar contenido",
    description:
      "Muestra directamente el contenido de un archivo en la terminal.",
    example: "cat archivo.txt",
  },
];

export default function LinuxCommandsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-slate-100">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/[0.08]">
          {/* Luces de fondo */}
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition hover:text-blue-400"
              >
                Inicio
              </Link>

              <span>/</span>

              <Link
                href="/notes"
                className="transition hover:text-blue-400"
              >
                Notes
              </Link>

              <span>/</span>

              <span className="text-slate-300">
                Comandos Linux
              </span>
            </nav>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Linux · Terminal · Desarrollo
            </div>

            {/* Título */}
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Comandos Linux esenciales:
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                guía práctica para la terminal
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              Aprende los comandos Linux que necesitas para navegar por
              el sistema, administrar archivos, consultar procesos y
              trabajar de forma más eficiente desde la terminal.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>📅 18 septiembre 2026</span>
              <span className="hidden sm:block">•</span>
              <span>⏱ 8 min de lectura</span>
              <span className="hidden sm:block">•</span>
              <span>DevPass Notes</span>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            {/* ARTÍCULO */}
            <article className="min-w-0">
              {/* INTRO */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-blue-950/10 sm:p-8">
                <p className="text-lg leading-8 text-slate-300">
                  La terminal de Linux es una de las herramientas más
                  importantes para desarrolladores, administradores de
                  sistemas y profesionales de tecnología. Aunque al
                  principio puede parecer complicada, aprender unos
                  cuantos comandos fundamentales permite trabajar de
                  manera mucho más rápida y precisa.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  Esta guía reúne algunos de los comandos que deberías
                  conocer si estás comenzando con Linux o quieres
                  mejorar tu flujo de trabajo en distribuciones como
                  Debian, Ubuntu, Kali Linux o Linux Mint.
                </p>
              </div>

              {/* INDICE */}
              <div className="my-10 rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  En esta guía
                </h2>

                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href="#navegacion"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    → Navegación por el sistema
                  </a>

                  <a
                    href="#archivos"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    → Gestión de archivos
                  </a>

                  <a
                    href="#procesos"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    → Procesos y sistema
                  </a>

                  <a
                    href="#buenas-practicas"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    → Buenas prácticas
                  </a>
                </div>
              </div>

              {/* NAVEGACIÓN */}
              <section id="navegacion" className="scroll-mt-28">
                <SectionTitle
                  number="01"
                  title="Navegación por el sistema"
                  description="Antes de administrar un sistema Linux necesitas saber dónde estás y cómo desplazarte entre directorios."
                />

                <div className="mt-8 space-y-5">
                  {commands.slice(0, 3).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>
              </section>

              {/* ARCHIVOS */}
              <section id="archivos" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="02"
                  title="Gestión de archivos y directorios"
                  description="Estos comandos permiten crear, copiar, mover, consultar y eliminar archivos desde la terminal."
                />

                <div className="mt-8 space-y-5">
                  {commands.slice(3).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>
              </section>

              {/* PROCESOS */}
              <section id="procesos" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="03"
                  title="Procesos y administración"
                  description="Una vez que domines los comandos básicos, puedes comenzar a controlar procesos y revisar el estado del sistema."
                />

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <InfoCard
                    title="ps"
                    description="Permite consultar los procesos que están ejecutándose."
                    command="ps aux"
                  />

                  <InfoCard
                    title="top"
                    description="Muestra procesos y consumo de recursos en tiempo real."
                    command="top"
                  />

                  <InfoCard
                    title="df"
                    description="Consulta el espacio disponible en los sistemas de archivos."
                    command="df -h"
                  />

                  <InfoCard
                    title="free"
                    description="Permite consultar el uso de memoria RAM y swap."
                    command="free -h"
                  />
                </div>
              </section>

              {/* BUENAS PRÁCTICAS */}
              <section id="buenas-practicas" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="04"
                  title="Buenas prácticas al utilizar la terminal"
                  description="Aprender comandos no significa ejecutarlos sin comprender sus consecuencias."
                />

                <div className="mt-8 space-y-5">
                  <Practice
                    number="01"
                    title="Comprende el comando antes de ejecutarlo"
                    text="Especialmente cuando encuentres comandos en Internet, revisa qué hace cada opción antes de ejecutarlo en tu sistema."
                  />

                  <Practice
                    number="02"
                    title="Evita utilizar privilegios innecesarios"
                    text="sudo permite ejecutar determinados comandos con privilegios elevados. Utilízalo únicamente cuando realmente sea necesario."
                  />

                  <Practice
                    number="03"
                    title="Haz copias de seguridad"
                    text="Antes de realizar operaciones importantes sobre archivos o configuraciones, asegúrate de tener una copia que puedas recuperar."
                  />

                  <Practice
                    number="04"
                    title="Trabaja de forma progresiva"
                    text="Primero domina los comandos básicos. Después puedes avanzar hacia permisos, procesos, servicios, redes y administración de paquetes."
                  />
                </div>
              </section>

              {/* ENLACES INTERNOS */}
              <section className="mt-20">
                <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.08] to-transparent p-7 sm:p-9">
                  <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                    Continúa aprendiendo
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Lleva tus conocimientos de Linux al siguiente nivel
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    Si ya conoces estos comandos, puedes continuar con
                    otros contenidos de DevPass relacionados con
                    seguridad, Git, desarrollo de software y
                    administración de sistemas.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <InternalLink
                      href="/notes/diagnostico-redes-linux"
                      title="Diagnóstico de redes en Linux"
                      description="Aprende a analizar conexiones y problemas de red."
                    />

                    <InternalLink
                      href="/notes/buenas-practicas-software"
                      title="Buenas prácticas de software"
                      description="Principios para escribir software más mantenible."
                    />

                    <InternalLink
                      href="/notes/git-flujo-trabajo"
                      title="Flujo de trabajo con Git"
                      description="Organiza mejor tus proyectos utilizando Git."
                    />

                    <InternalLink
                      href="/notes/seguridad-web"
                      title="Seguridad web"
                      description="Conceptos esenciales para desarrollar aplicaciones más seguras."
                    />
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/[0.06] p-8 text-center">
                <p className="text-sm font-medium text-blue-400">
                  DEVPass
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Construye. Aprende. Documenta.
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-slate-400">
                  Explora más artículos, proyectos y recursos sobre
                  desarrollo, Linux, inteligencia artificial y tecnología.
                </p>

                <Link
                  href="/notes"
                  className="mt-6 inline-flex rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Explorar DevPass Notes
                </Link>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    En este artículo
                  </p>

                  <nav className="mt-5 space-y-3">
                    <a
                      href="#navegacion"
                      className="block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      Navegación
                    </a>

                    <a
                      href="#archivos"
                      className="block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      Archivos
                    </a>

                    <a
                      href="#procesos"
                      className="block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      Procesos
                    </a>

                    <a
                      href="#buenas-practicas"
                      className="block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      Buenas prácticas
                    </a>
                  </nav>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    Categoría
                  </p>

                  <Link
                    href="/notes"
                    className="mt-3 block font-medium text-white transition hover:text-blue-400"
                  >
                    Linux & Tecnología
                  </Link>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Tutoriales, apuntes y recursos técnicos para
                    desarrolladores.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================
   COMPONENTES
========================= */

function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm text-blue-400">
          {number}
        </span>

        <div className="h-px w-10 bg-blue-400/30" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}

function CommandCard({
  command,
  title,
  description,
  example,
}: {
  command: string;
  title: string;
  description: string;
  example: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07101f] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/20">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div>
          <span className="font-mono text-lg font-bold text-blue-400">
            {command}
          </span>

          <h3 className="mt-1 font-semibold text-white">
            {title}
          </h3>
        </div>

        <span className="rounded-lg border border-white/[0.08] px-3 py-1 text-xs text-slate-500">
          Linux
        </span>
      </div>

      <div className="p-5">
        <p className="leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.06] bg-[#020617]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 text-xs text-slate-600">
              terminal
            </span>
          </div>

          <pre className="overflow-x-auto p-4 font-mono text-sm text-cyan-300">
            <code>
              <span className="text-slate-500">$ </span>
              {example}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  description,
  command,
}: {
  title: string;
  description: string;
  command: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-blue-400/20 hover:bg-white/[0.04]">
      <span className="font-mono text-xl font-bold text-blue-400">
        {title}
      </span>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <code className="mt-5 block rounded-lg bg-[#020617] px-4 py-3 font-mono text-sm text-cyan-300">
        $ {command}
      </code>
    </div>
  );
}

function Practice({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
        {number}
      </span>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function InternalLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-white/[0.07] bg-[#020617]/60 p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04]"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white transition group-hover:text-blue-400">
          {title}
        </h3>

        <span className="text-blue-400 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Link>
  );
}