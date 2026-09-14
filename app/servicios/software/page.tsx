"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  MonitorCog,
  Network,
  Settings2,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const solutions = [
  {
    icon: MonitorCog,
    title: "Sistemas empresariales",
    description:
      "Aplicaciones diseñadas alrededor de los procesos reales de tu empresa para centralizar operaciones y facilitar la gestión.",
  },
  {
    icon: BarChart3,
    title: "Dashboards y paneles",
    description:
      "Interfaces para visualizar indicadores, consultar información y tomar decisiones con mayor claridad.",
  },
  {
    icon: Workflow,
    title: "Sistemas de gestión",
    description:
      "Soluciones para administrar usuarios, productos, inventarios, operaciones, servicios, registros y procesos.",
  },
  {
    icon: Network,
    title: "Aplicaciones integradas",
    description:
      "Software capaz de comunicarse con APIs, bases de datos y servicios existentes dentro de tu ecosistema tecnológico.",
  },
];

const capabilities = [
  "Análisis de procesos y requerimientos",
  "Diseño de arquitectura de software",
  "Aplicaciones web y sistemas internos",
  "Paneles administrativos",
  "Gestión de usuarios y permisos",
  "Bases de datos y modelos de información",
  "Integración mediante APIs",
  "Mantenimiento y evolución del sistema",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "C#",
  "SQL",
  "Git",
  "Linux",
];

const process = [
  {
    number: "01",
    title: "Analizamos",
    description:
      "Estudiamos el problema, los procesos actuales, los usuarios involucrados y los objetivos que debe cumplir el sistema.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos la arquitectura, módulos, flujos, datos e interfaces que formarán parte de la solución.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos cada componente del sistema utilizando una arquitectura organizada y tecnologías adecuadas al proyecto.",
  },
  {
    number: "04",
    title: "Validamos",
    description:
      "Probamos las funcionalidades, reglas de negocio, permisos, integraciones y comportamiento general del sistema.",
  },
  {
    number: "05",
    title: "Evolucionamos",
    description:
      "Una vez en funcionamiento, el software puede seguir creciendo con nuevos módulos, mejoras e integraciones.",
  },
];

const benefits = [
  {
    icon: Settings2,
    title: "Adaptado a tu proceso",
    description:
      "El sistema se construye alrededor de cómo funciona realmente tu organización.",
  },
  {
    icon: Layers3,
    title: "Arquitectura escalable",
    description:
      "La solución se estructura pensando en futuras funcionalidades y crecimiento.",
  },
  {
    icon: LockKeyhole,
    title: "Control de acceso",
    description:
      "Usuarios, roles y permisos pueden formar parte de la arquitectura del sistema.",
  },
  {
    icon: Database,
    title: "Información centralizada",
    description:
      "Organiza los datos de tu operación en una plataforma diseñada para consultarlos y administrarlos.",
  },
];

const faqs = [
  {
    question: "¿Qué tipo de software pueden desarrollar?",
    answer:
      "Podemos desarrollar sistemas de gestión, plataformas web, dashboards, aplicaciones internas, herramientas administrativas y soluciones adaptadas a procesos específicos.",
  },
  {
    question: "¿Pueden desarrollar un sistema desde cero?",
    answer:
      "Sí. Podemos comenzar desde el análisis de la necesidad y construir la solución progresivamente hasta dejarla preparada para producción.",
  },
  {
    question: "¿Pueden mejorar un sistema que ya tengo?",
    answer:
      "Sí. También podemos trabajar sobre sistemas existentes para incorporar funcionalidades, modernizar componentes, mejorar procesos o realizar integraciones.",
  },
  {
    question: "¿El sistema puede tener diferentes tipos de usuarios?",
    answer:
      "Sí. Podemos implementar diferentes roles y permisos para controlar qué funcionalidades e información puede utilizar cada usuario.",
  },
  {
    question: "¿Pueden conectar el software con otros servicios?",
    answer:
      "Sí. Podemos trabajar con APIs, bases de datos y servicios externos para integrar el sistema con otras herramientas de tu organización.",
  },
];

export default function SoftwarePage() {
  const webPageSchema = createWebPageSchema({
    name: "Software a Medida | DevPass",
    description:
      "Desarrollo de sistemas y aplicaciones a medida para digitalizar procesos, centralizar información y convertir operaciones complejas en herramientas más simples de gestionar.",
    path: "/servicios/software",
  });

  const serviceSchema = createServiceSchema({
    name: "Software a Medida",
    description:
      "Desarrollo de sistemas y aplicaciones a medida para digitalizar procesos, centralizar información y construir soluciones adaptadas a las necesidades específicas de cada organización.",
    path: "/servicios/software",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Servicios",
      path: "/servicios",
    },
    {
      name: "Software a Medida",
      path: "/servicios/software",
    },
  ]);
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          serviceSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(30,107,255,0.17),transparent_31%),radial-gradient(circle_at_12%_80%,rgba(61,165,255,0.06),transparent_28%)]" />

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
                    DEVPASS · SOFTWARE A MEDIDA
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Software construido para{" "}
                  <span className="devpass-gradient-text">
                    cómo funciona tu negocio.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Desarrollamos sistemas y aplicaciones a medida para
                  digitalizar procesos, centralizar información y convertir
                  operaciones complejas en herramientas más simples de
                  gestionar.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Hablar sobre mi proyecto
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                  >
                    Ver proyectos
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#64748b]">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Desarrollo personalizado
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Arquitectura escalable
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Integraciones
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative hidden lg:block"
              >
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[110px]" />

                <div className="relative mx-auto max-w-[500px]">
                  <div className="rounded-[28px] border border-[#3da5ff]/15 bg-[#061326]/90 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#020b18]">
                      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />

                        <div className="ml-5 h-7 flex-1 rounded-md border border-white/[0.05] bg-white/[0.025]" />
                      </div>

                      <div className="grid grid-cols-[76px_1fr]">
                        <aside className="border-r border-white/[0.05] p-4">
                          <div className="space-y-3">
                            <div className="h-7 rounded-lg bg-[#1e6bff]/20" />
                            <div className="h-2 rounded bg-white/[0.06]" />
                            <div className="h-2 rounded bg-white/[0.04]" />
                            <div className="h-2 rounded bg-white/[0.04]" />
                            <div className="h-2 rounded bg-white/[0.04]" />
                          </div>
                        </aside>

                        <div className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="h-3 w-20 rounded bg-white/[0.08]" />
                              <div className="mt-2 h-2 w-28 rounded bg-white/[0.04]" />
                            </div>

                            <BarChart3
                              size={22}
                              className="text-[#3da5ff]/70"
                            />
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                              <div className="h-2 w-14 rounded bg-[#3da5ff]/20" />
                              <div className="mt-3 h-6 w-20 rounded bg-white/[0.08]" />
                            </div>

                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                              <div className="h-2 w-14 rounded bg-[#3da5ff]/20" />
                              <div className="mt-3 h-6 w-20 rounded bg-white/[0.08]" />
                            </div>
                          </div>

                          <div className="mt-4 h-36 rounded-xl border border-white/[0.05] bg-gradient-to-br from-[#0b2b55] to-[#061326] p-5">
                            <div className="flex h-full items-end gap-2">
                              <div className="h-[35%] w-full rounded-t bg-[#1e6bff]/25" />
                              <div className="h-[55%] w-full rounded-t bg-[#1e6bff]/35" />
                              <div className="h-[45%] w-full rounded-t bg-[#3da5ff]/35" />
                              <div className="h-[75%] w-full rounded-t bg-[#3da5ff]/50" />
                              <div className="h-[65%] w-full rounded-t bg-[#1e6bff]/45" />
                              <div className="h-[90%] w-full rounded-t bg-[#3da5ff]/60" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -left-8 top-20 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Database size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">DATOS</p>
                        <p className="text-xs font-semibold text-white">
                          Centralizados
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
                    className="absolute -right-8 bottom-20 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <ShieldCheck size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">CONTROL</p>
                        <p className="text-xs font-semibold text-white">
                          Por roles
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
                SOLUCIONES
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Software que se adapta a tu operación.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                No todos los negocios trabajan igual. Un software a medida
                permite diseñar los módulos, flujos y funcionalidades alrededor
                de las necesidades específicas de cada organización.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/60"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#334155]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  ¿QUÉ INCLUYE?
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Una solución diseñada alrededor de tu necesidad.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Desde una herramienta interna hasta una plataforma completa,
                  podemos definir una solución que responda a los procesos y
                  objetivos de tu organización.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Cuéntanos qué necesitas
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-4"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/15 text-[#3da5ff]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-6 text-[#94a3b8]">
                      {capability}
                    </span>
                  </div>
                ))}
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
                POR QUÉ SOFTWARE A MEDIDA
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Menos limitaciones.
                <br />
                <span className="text-[#64748b]">
                  Más control sobre tu operación.
                </span>
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-6 font-poppins text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                    STACK TECNOLÓGICO
                  </p>

                  <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    Tecnología al servicio del problema.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    La tecnología no es el punto de partida. Primero entendemos
                    el problema y luego seleccionamos las herramientas
                    adecuadas para construir la solución.
                  </p>
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-[#071a34]/50 px-4 py-2.5 text-sm font-medium text-[#a7b4c8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Code2,
                    title: "Código mantenible",
                    text: "Una base técnica organizada facilita futuras mejoras.",
                  },
                  {
                    icon: Database,
                    title: "Datos estructurados",
                    text: "La información se organiza según las necesidades del sistema.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Seguridad",
                    text: "Los accesos y operaciones se consideran desde la arquitectura.",
                  },
                  {
                    icon: Wrench,
                    title: "Evolución",
                    text: "El software puede crecer conforme cambian las necesidades.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      className="flex gap-4 rounded-xl border border-white/[0.05] bg-[#020b18] p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-[#64748b]">
                          {item.text}
                        </p>
                      </div>
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
                METODOLOGÍA
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Construimos con una visión de largo plazo.
              </h2>
            </motion.div>

            <div className="mt-14">
              {process.map((item, index) => (
                <div key={item.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="relative z-10 grid gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:grid-cols-[60px_190px_1fr] md:items-center md:gap-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34] text-xs font-bold text-[#3da5ff]">
                      {item.number}
                    </div>

                    <h3 className="font-poppins text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-7 text-[#64748b]">
                      {item.description}
                    </p>
                  </motion.div>

                  {index < process.length - 1 && (
                    <div className="relative z-0 hidden h-4 md:block">
                      <div className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-[#1e6bff]/45 to-[#3da5ff]/10" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  PREGUNTAS FRECUENTES
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Lo que necesitas saber.
                </h2>
              </motion.div>

              <div className="mt-12 space-y-3">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className="group rounded-xl border border-white/[0.06] bg-[#020b18] px-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.question}

                      <span className="text-xl font-light text-[#3da5ff] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="pb-5 pr-8 text-sm leading-7 text-[#64748b]">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,107,255,0.16),transparent_38%)]" />

          <div className="devpass-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                <Activity size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿TIENES UN PROCESO QUE DIGITALIZAR?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Convirtamos tu proceso en{" "}
                <span className="devpass-gradient-text">
                  software.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué necesitas automatizar, controlar o mejorar.
                Podemos analizar tu caso y definir juntos una solución
                tecnológica adecuada.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Solicitar propuesta
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