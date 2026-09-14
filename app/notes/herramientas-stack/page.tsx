"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  Laptop,
  Network,
  Package,
  Server,
  Terminal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const stack = [
  {
    number: "01",
    icon: Braces,
    category: "LENGUAJES",
    title: "Python",
    description:
      "Uno de los lenguajes que más utilizo para automatización, análisis de datos, inteligencia artificial y desarrollo de herramientas.",
    tags: ["Automatización", "Data Science", "IA", "Scripts"],
  },
  {
    number: "02",
    icon: Code2,
    category: "FRONTEND",
    title: "TypeScript",
    description:
      "Lo utilizo para construir interfaces y aplicaciones web con código más estructurado, tipado y mantenible.",
    tags: ["React", "Next.js", "Web", "Frontend"],
  },
  {
    number: "03",
    icon: Code2,
    category: "WEB",
    title: "JavaScript",
    description:
      "La base del desarrollo web moderno. Lo utilizo tanto para interfaces como para lógica de aplicaciones y herramientas.",
    tags: ["Web", "DOM", "APIs", "Frontend"],
  },
  {
    number: "04",
    icon: Laptop,
    category: "FRAMEWORK",
    title: "React",
    description:
      "Biblioteca principal para construir interfaces mediante componentes reutilizables y aplicaciones interactivas.",
    tags: ["UI", "Componentes", "Frontend"],
  },
  {
    number: "05",
    icon: Network,
    category: "FULL STACK",
    title: "Next.js",
    description:
      "Framework que utilizo para desarrollar aplicaciones web completas, combinando frontend, backend, rutas y APIs.",
    tags: ["App Router", "SSR", "API", "Full Stack"],
  },
  {
    number: "06",
    icon: Server,
    category: "BACKEND",
    title: "Node.js",
    description:
      "Entorno utilizado para ejecutar JavaScript del lado del servidor y construir servicios, APIs y herramientas.",
    tags: ["Backend", "APIs", "npm", "Servicios"],
  },
  {
    number: "07",
    icon: Braces,
    category: "DESARROLLO",
    title: "C#",
    description:
      "Lenguaje utilizado principalmente en aplicaciones de escritorio y proyectos orientados al ecosistema .NET.",
    tags: [".NET", "Windows Forms", "Desktop"],
  },
  {
    number: "08",
    icon: Database,
    category: "DATOS",
    title: "SQL",
    description:
      "Base para trabajar con datos, consultas, estructuras relacionales y lógica asociada a sistemas de información.",
    tags: ["Bases de datos", "Consultas", "Datos"],
  },
  {
    number: "09",
    icon: Terminal,
    category: "SISTEMA",
    title: "Linux",
    description:
      "Entorno fundamental para trabajar con servidores, redes, procesos, servicios, terminal y herramientas de desarrollo.",
    tags: ["Debian", "Kali", "Terminal", "Servidores"],
  },
  {
    number: "10",
    icon: GitBranch,
    category: "VERSIONADO",
    title: "Git",
    description:
      "Sistema de control de versiones utilizado para organizar el desarrollo, mantener historial y trabajar con repositorios.",
    tags: ["GitHub", "Branches", "Commits"],
  },
  {
    number: "11",
    icon: BrainCircuit,
    category: "INTELIGENCIA",
    title: "IA",
    description:
      "Área de exploración y aplicación para desarrollar soluciones, automatizar tareas y experimentar con sistemas inteligentes.",
    tags: ["LLM", "Agentes", "Automatización"],
  },
  {
    number: "12",
    icon: Package,
    category: "CIENCIA DE DATOS",
    title: "Data Science",
    description:
      "Conjunto de herramientas y técnicas para transformar datos en información útil mediante análisis y modelos.",
    tags: ["Pandas", "NumPy", "Scikit-learn"],
  },
];

const workflow = [
  {
    number: "01",
    title: "IDEA",
    text: "Definir qué problema quiero resolver.",
  },
  {
    number: "02",
    title: "STACK",
    text: "Elegir las herramientas adecuadas para el problema.",
  },
  {
    number: "03",
    title: "BUILD",
    text: "Construir una solución funcional y mantenible.",
  },
  {
    number: "04",
    title: "TEST",
    text: "Probar, revisar y detectar errores.",
  },
  {
    number: "05",
    title: "DEPLOY",
    text: "Llevar la solución a un entorno real.",
  },
];

const principles = [
  "Elegir la herramienta según el problema, no según la moda.",
  "Mantener el stack suficientemente simple para poder dominarlo.",
  "Aprender los fundamentos antes de depender de frameworks.",
  "Automatizar tareas repetitivas cuando exista una oportunidad clara.",
  "Documentar lo aprendido para poder reutilizarlo.",
  "Actualizar las herramientas sin perder de vista la estabilidad.",
];
const webPageSchema = createWebPageSchema({
  name: "Herramientas que forman parte de mi stack | DevPass",
  description:
    "Conoce las herramientas y tecnologías que forman parte del stack de DevPass: Python, TypeScript, JavaScript, React, Next.js, Node.js, C#, SQL, Linux, Git, inteligencia artificial y Data Science.",
  path: "/notes/herramientas-stack",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
  {
    name: "Herramientas que forman parte de mi stack",
    path: "/notes/herramientas-stack",
  },
]);
export default function HerramientasStackPage() {

  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-[#f8faff]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[120px]" />

          <div className="devpass-container relative py-24 md:py-32">
            <Link
              href="/notes"
              className="mb-10 inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft size={16} />
              Volver a Notes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.2em]">
                <span className="rounded-full border border-[#3da5ff]/20 bg-[#071a34] px-3 py-1.5 text-[#3da5ff]">
                  TOOLS
                </span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">28 AGO 2026</span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">7 MIN</span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Herramientas que forman parte de{" "}
                <span className="devpass-gradient-text">mi stack</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                Un vistazo al conjunto de lenguajes, frameworks, herramientas y
                tecnologías que utilizo para construir, experimentar y
                resolver problemas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 flex flex-wrap items-center gap-3"
            >
              {["Python", "TypeScript", "Next.js", "Linux", "Git", "IA"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2 font-mono text-xs text-[#64748b]"
                  >
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="devpass-container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#3da5ff]/10 bg-[#061326] p-7 md:p-9"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                    <Terminal size={17} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3da5ff]">
                    Mi enfoque
                  </span>
                </div>

                <p className="text-base leading-8 text-[#94a3b8]">
                  Un stack tecnológico no es simplemente una lista de
                  tecnologías. Es el conjunto de herramientas que permite pasar
                  de una idea a una solución funcionando. Por eso intento
                  construir un stack que pueda utilizar de manera práctica y
                  que me permita moverme entre desarrollo, sistemas, datos e
                  inteligencia artificial.
                </p>
              </motion.div>

              {/* STACK */}
              <div className="mt-16">
                <SectionHeading
                  number="01"
                  title="Mi stack"
                  description="Tecnologías que utilizo o exploro dentro de diferentes áreas del desarrollo."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {stack.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.035,
                        }}
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50"
                      >
                        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#1e6bff]/5 blur-3xl transition-opacity group-hover:opacity-100" />

                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={18} />
                            </div>

                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#334155]">
                              {item.number}
                            </span>
                          </div>

                          <p className="mt-6 text-[9px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                            {item.category}
                          </p>

                          <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                            {item.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-white/[0.05] bg-[#061326] px-2.5 py-1 text-[10px] text-[#475569]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* HOW I CHOOSE */}
              <div className="mt-20">
                <SectionHeading
                  number="02"
                  title="No todo se resuelve con la misma herramienta"
                  description="La tecnología debe responder al problema y al contexto."
                />

                <p className="mt-7 text-[15px] leading-8 text-[#94a3b8]">
                  Una de las cosas que he aprendido construyendo diferentes
                  proyectos es que utilizar más tecnologías no significa
                  necesariamente construir mejores sistemas. Cada herramienta
                  tiene un propósito y sus propias ventajas y limitaciones.
                </p>

                <div className="mt-9 grid gap-3">
                  {[
                    ["Web", "React + Next.js + TypeScript"],
                    ["Automatización", "Python + APIs + scripts"],
                    ["Datos", "Python + Pandas + NumPy"],
                    ["IA", "Python + APIs + modelos + agentes"],
                    ["Sistemas", "Linux + terminal + servicios"],
                    ["Versionado", "Git + GitHub"],
                  ].map(([area, tools], index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      className="flex flex-col gap-2 rounded-xl border border-white/[0.05] bg-[#020b18] p-5 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight size={15} className="text-[#3da5ff]" />
                        <span className="text-sm font-semibold text-white">
                          {area}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-[#64748b]">
                        {tools}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* WORKFLOW */}
              <div className="mt-20">
                <SectionHeading
                  number="03"
                  title="De la idea al resultado"
                  description="Las herramientas son parte de un proceso, no el proceso completo."
                />

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="grid md:grid-cols-5">
                    {workflow.map((item, index) => (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                        className={`relative p-6 ${
                          index < workflow.length - 1
                            ? "border-b border-white/[0.06] md:border-b-0 md:border-r"
                            : ""
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.2em] text-[#3da5ff]">
                          {item.number}
                        </span>

                        <h3 className="mt-3 text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-[#64748b]">
                          {item.text}
                        </p>

                        {index < workflow.length - 1 && (
                          <ArrowRight
                            size={14}
                            className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[#1e6bff]/40 md:block"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LINUX + GIT */}
              <div className="mt-20">
                <SectionHeading
                  number="04"
                  title="Terminal, Linux y Git"
                  description="Tres piezas que forman una parte importante de mi forma de trabajar."
                />

                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  <TerminalCard
                    title="linux"
                    lines={[
                      "$ pwd",
                      "$ ls -la",
                      "$ ip addr",
                      "$ ss -tulpn",
                      "$ systemctl status",
                    ]}
                  />

                  <TerminalCard
                    title="git"
                    lines={[
                      "$ git status",
                      "$ git add .",
                      '$ git commit -m "update"',
                      "$ git push",
                      "$ git log",
                    ]}
                  />
                </div>

                <p className="mt-6 text-[15px] leading-8 text-[#94a3b8]">
                  Trabajar desde la terminal ayuda a comprender mejor qué está
                  ocurriendo detrás de las herramientas visuales. Linux y Git,
                  especialmente, forman parte de ese flujo diario de
                  construcción y diagnóstico.
                </p>
              </div>

              {/* AI / DATA */}
              <div className="mt-20">
                <SectionHeading
                  number="05"
                  title="IA y Data Science"
                  description="Dos áreas que utilizo para explorar nuevas formas de construir soluciones."
                />

                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  <InfoCard
                    icon={BrainCircuit}
                    title="Inteligencia artificial"
                    description="Exploración de modelos, APIs, automatización y agentes inteligentes."
                    items={["Modelos", "APIs", "Agentes", "Automatización"]}
                  />

                  <InfoCard
                    icon={Database}
                    title="Data Science"
                    description="Trabajo con datos para analizarlos, transformarlos y construir modelos."
                    items={["Pandas", "NumPy", "Scikit-learn", "Jupyter"]}
                  />
                </div>
              </div>

              {/* PRINCIPLES */}
              <div className="mt-20">
                <SectionHeading
                  number="06"
                  title="Principios que intento mantener"
                  description="Más importante que conocer muchas herramientas es saber cuándo y cómo utilizarlas."
                />

                <div className="mt-9 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:p-8">
                  <div className="space-y-3">
                    {principles.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.04,
                        }}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-[#061326] px-4 py-3.5"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/10 text-[#3da5ff]">
                          <Check size={12} />
                        </span>

                        <span className="text-sm leading-6 text-[#94a3b8]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#020b18] p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#1e6bff]/10 text-[#3da5ff]">
                  <Terminal size={20} />
                </div>

                <h2 className="mt-6 font-poppins text-xl font-semibold text-white">
                  El stack cambia. Los fundamentos permanecen.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94a3b8]">
                  Nuevos frameworks, librerías y herramientas aparecen
                  constantemente. Por eso intento que mi aprendizaje no
                  dependa únicamente de una tecnología concreta, sino de
                  comprender programación, sistemas, datos, arquitectura y los
                  problemas que intento resolver.
                </p>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    EN ESTA NOTE
                  </p>

                  <nav className="mt-5 space-y-1">
                    {[
                      "Mi stack",
                      "Cómo elijo herramientas",
                      "De la idea al resultado",
                      "Linux y Git",
                      "IA y Data Science",
                      "Principios",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-xs leading-5 text-[#64748b]"
                      >
                        <span className="font-mono text-[#334155]">
                          0{index + 1}
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#020b18] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    DEVPASS
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    Las herramientas ayudan a construir. Los fundamentos
                    permiten entender.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* NEXT NOTE */}
        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-14">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:flex-row md:items-center md:justify-between md:p-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  SIGUIENTE NOTE
                </p>

                <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                  Arquitectura antes del código
                </h3>
              </div>

              <Link
                href="/notes/arquitectura-antes-codigo"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#a7d3ff] transition-colors hover:text-white"
              >
                Leer siguiente
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionHeading({
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
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
          {number}
        </span>

        <span className="h-px w-10 bg-[#3da5ff]/30" />
      </div>

      <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
        {description}
      </p>
    </div>
  );
}

function TerminalCard({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
        <div className="flex items-center gap-2">
          <Terminal size={15} className="text-[#3da5ff]" />
          <span className="font-mono text-xs text-[#64748b]">
            {title}
          </span>
        </div>

        <span className="h-2 w-2 rounded-full bg-[#3da5ff]/60" />
      </div>

      <div className="space-y-1 p-5">
        {lines.map((line) => (
          <p
            key={line}
            className="font-mono text-xs leading-6 text-[#94a3b8]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: typeof BrainCircuit;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
        <Icon size={18} />
      </div>

      <h3 className="mt-6 font-poppins text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#64748b]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/[0.05] bg-[#061326] px-2.5 py-1 text-[10px] text-[#475569]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}