"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  CloudCog,
  Cpu,
  Database,
  GitMerge,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const solutions = [
  {
    number: "01",
    icon: Bot,
    title: "Inteligencia Artificial",
    description:
      "Aplicamos inteligencia artificial para analizar información, asistir procesos, automatizar tareas y construir nuevas experiencias digitales.",
    href: "/soluciones/ia",
    tags: ["IA aplicada", "Agentes", "Automatización"],
  },
  {
    number: "02",
    icon: CloudCog,
    title: "Transformación Digital",
    description:
      "Ayudamos a convertir procesos tradicionales en operaciones digitales más organizadas, medibles y eficientes.",
    href: "/soluciones/transformacion-digital",
    tags: ["Digitalización", "Procesos", "Tecnología"],
  },
  {
    number: "03",
    icon: GitMerge,
    title: "Integraciones",
    description:
      "Conectamos aplicaciones, APIs, bases de datos y servicios para construir ecosistemas tecnológicos que trabajen juntos.",
    href: "/soluciones/integraciones",
    tags: ["APIs", "Datos", "Sistemas"],
  },
];

const problems = [
  {
    icon: Workflow,
    title: "Procesos manuales",
    description:
      "Tareas repetitivas que consumen tiempo y requieren intervención constante.",
  },
  {
    icon: Database,
    title: "Información dispersa",
    description:
      "Datos distribuidos entre diferentes herramientas, archivos o sistemas.",
  },
  {
    icon: Network,
    title: "Sistemas desconectados",
    description:
      "Aplicaciones que trabajan de forma independiente y dificultan el flujo de información.",
  },
  {
    icon: Sparkles,
    title: "Oportunidades con IA",
    description:
      "Procesos donde la inteligencia artificial puede aportar análisis, asistencia o automatización.",
  },
];

const principles = [
  {
    icon: TargetIcon,
    title: "Primero el problema",
    description:
      "La tecnología debe responder a una necesidad concreta, no convertirse en una solución en busca de un problema.",
  },
  {
    icon: Layers3,
    title: "Soluciones escalables",
    description:
      "Pensamos en cómo la solución puede evolucionar cuando cambien las necesidades del negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Tecnología responsable",
    description:
      "Consideramos seguridad, control, mantenibilidad y calidad desde el diseño de la solución.",
  },
  {
    icon: Cpu,
    title: "Tecnología con propósito",
    description:
      "Seleccionamos herramientas según el valor que pueden aportar al proyecto.",
  },
];

const stack = [
  "Inteligencia Artificial",
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "APIs",
  "SQL",
  "Automatización",
  "Linux",
];

function TargetIcon({ size = 20 }: { size?: number }) {
  return <Rocket size={size} />;
}

export default function SolucionesPage() {
   const webPageSchema = createWebPageSchema({
    name: "Soluciones Digitales | DevPass",
    description:
      "Soluciones digitales para mejorar procesos, conectar sistemas, aprovechar la inteligencia artificial y convertir la tecnología en una herramienta de crecimiento.",
    path: "/soluciones",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Soluciones",
      path: "/soluciones",
    },
  ]);
  return (
    <>
    <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(30,107,255,0.18),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(61,165,255,0.07),transparent_28%)]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,211,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="devpass-container relative z-10 py-24 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />

                  <span className="text-xs font-semibold tracking-[0.24em] text-[#3da5ff]">
                    DEVPASS · SOLUCIONES
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Tecnología para resolver{" "}
                  <span className="devpass-gradient-text">
                    problemas reales.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Diseñamos soluciones digitales para empresas que necesitan
                  mejorar procesos, conectar sistemas, aprovechar la
                  inteligencia artificial y convertir la tecnología en una
                  herramienta de crecimiento.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Cuéntanos tu problema
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                  >
                    Ver servicios
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#64748b]">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Estrategia tecnológica
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Desarrollo
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Integración
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative hidden lg:block"
              >
                <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[115px]" />

                <div className="relative mx-auto h-[480px] max-w-[500px]">
                  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-[#3da5ff]/25 bg-[#071a34] shadow-[0_0_70px_rgba(30,107,255,0.2)]">
                    <Sparkles
                      size={38}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-4 top-20 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Bot size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          INTELLIGENCE
                        </p>
                        <p className="text-xs font-semibold text-white">
                          IA aplicada
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 top-36 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <Network size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          ECOSYSTEM
                        </p>
                        <p className="text-xs font-semibold text-white">
                          Integrado
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-20 left-8 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <Workflow size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          PROCESSES
                        </p>
                        <p className="text-xs font-semibold text-white">
                          Optimizado
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{
                      duration: 4.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 right-8 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Database size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          DATA
                        </p>
                        <p className="text-xs font-semibold text-white">
                          Conectada
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 h-px w-[350px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#3da5ff]/20 to-transparent" />

                  <div className="absolute left-1/2 top-1/2 h-[350px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#3da5ff]/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                NUESTRAS SOLUCIONES
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Tres caminos.
                <br />
                <span className="text-[#64748b]">
                  Un mismo objetivo: generar valor.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Analizamos cada necesidad y combinamos desarrollo, datos,
                automatización e inteligencia artificial cuando estas
                tecnologías pueden generar un impacto real.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                    }}
                    className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/25 hover:bg-[#071a34]/60"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={20} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#334155]">
                        {solution.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-xl font-semibold text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {solution.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[10px] font-medium text-[#64748b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={solution.href}
                      className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                    >
                      Explorar solución
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  EMPEZAMOS POR EL PROBLEMA
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  La tecnología tiene sentido cuando resuelve algo.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Antes de recomendar una herramienta, buscamos entender dónde
                  está el problema. Puede ser un proceso lento, información
                  dispersa, sistemas que no se comunican o una oportunidad
                  para utilizar IA.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Analizar mi necesidad
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;

                  return (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="rounded-2xl border border-white/[0.05] bg-[#020b18] p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-5 text-sm font-semibold text-white">
                        {problem.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#64748b]">
                        {problem.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                CÓMO TRABAJAMOS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                No empezamos por la tecnología.
                <br />
                <span className="text-[#64748b]">
                  Empezamos por entender.
                </span>
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-6 font-poppins text-lg font-semibold text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b]">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  ECOSISTEMA TECNOLÓGICO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Diferentes tecnologías.
                  <br />
                  <span className="text-[#64748b]">
                    Una solución coherente.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                  Una solución puede necesitar software, automatización, datos,
                  inteligencia artificial o integración. La arquitectura se
                  define según el problema y los objetivos del proyecto.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  {stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-[#071a34]/50 px-4 py-2.5 text-sm font-medium text-[#a7b4c8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl border border-[#3da5ff]/15 bg-[#020b18] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                        DEVPASS SYSTEM
                      </p>
                      <p className="mt-1 text-xs text-[#64748b]">
                        Solution architecture
                      </p>
                    </div>

                    <span className="flex items-center gap-2 text-[10px] text-[#64748b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Database size={16} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">
                          Data
                        </p>
                        <p className="mt-1 text-[10px] text-[#64748b]">
                          Información centralizada
                        </p>
                      </div>
                    </div>

                    <div className="ml-8 h-4 w-px bg-[#3da5ff]/20" />

                    <div className="flex items-center gap-3 rounded-xl border border-[#3da5ff]/15 bg-[#071a34] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <Cpu size={16} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">
                          Intelligence
                        </p>
                        <p className="mt-1 text-[10px] text-[#64748b]">
                          Análisis y automatización
                        </p>
                      </div>
                    </div>

                    <div className="ml-8 h-4 w-px bg-[#3da5ff]/20" />

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Network size={16} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">
                          Integrations
                        </p>
                        <p className="mt-1 text-[10px] text-[#64748b]">
                          Sistemas conectados
                        </p>
                      </div>
                    </div>

                    <div className="ml-8 h-4 w-px bg-[#3da5ff]/20" />

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Zap size={16} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">
                          Automation
                        </p>
                        <p className="mt-1 text-[10px] text-[#64748b]">
                          Procesos optimizados
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,107,255,0.17),transparent_38%)]" />

          <div className="devpass-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                <Rocket size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                TIENES UN RETO
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Cuéntanos qué quieres
                <span className="devpass-gradient-text">
                  {" "}
                  mejorar.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                No necesitas tener definida la tecnología. Explícanos el
                problema, el proceso o la idea y podemos ayudarte a convertirlo
                en una solución digital.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Hablar con DevPass
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Ver proyectos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}