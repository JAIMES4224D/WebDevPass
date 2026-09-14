"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Clock3,
  Database,
  GitBranch,
  Layers3,
  Mail,
  Network,
  Play,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const automationSolutions = [
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Convertimos tareas repetitivas y secuencias manuales en flujos digitales que pueden ejecutarse de forma automática.",
  },
  {
    icon: Bot,
    title: "Agentes y asistentes con IA",
    description:
      "Diseñamos soluciones inteligentes capaces de analizar información, responder solicitudes y ejecutar acciones dentro de un flujo.",
  },
  {
    icon: Network,
    title: "Integración de sistemas",
    description:
      "Conectamos aplicaciones, APIs, bases de datos y servicios para que la información pueda circular sin intervención manual innecesaria.",
  },
  {
    icon: RefreshCw,
    title: "Automatización de información",
    description:
      "Reducimos el trabajo manual relacionado con registros, consultas, reportes, notificaciones y procesamiento de datos.",
  },
];

const useCases = [
  "Generación automática de reportes",
  "Envío de correos y notificaciones",
  "Procesamiento y transformación de datos",
  "Sincronización entre sistemas",
  "Registro automático de información",
  "Flujos de aprobación",
  "Consultas inteligentes con IA",
  "Tareas programadas",
  "Integración de APIs",
  "Procesos administrativos repetitivos",
];

const benefits = [
  {
    icon: Clock3,
    title: "Ahorra tiempo",
    description:
      "Las tareas repetitivas pueden ejecutarse automáticamente sin depender de una operación manual constante.",
  },
  {
    icon: Zap,
    title: "Mayor velocidad",
    description:
      "Los procesos automatizados pueden ejecutarse de forma consistente y reducir tiempos de espera.",
  },
  {
    icon: ShieldCheck,
    title: "Menos errores",
    description:
      "Reducir la intervención manual ayuda a disminuir errores derivados de tareas repetitivas.",
  },
  {
    icon: Layers3,
    title: "Procesos conectados",
    description:
      "Diferentes herramientas pueden formar parte de un mismo flujo de trabajo.",
  },
];

const process = [
  {
    number: "01",
    title: "Detectamos",
    description:
      "Identificamos las tareas repetitivas, puntos de espera y procesos que consumen tiempo innecesariamente.",
  },
  {
    number: "02",
    title: "Diseñamos el flujo",
    description:
      "Definimos qué debe ocurrir, cuándo debe ocurrir, qué información interviene y qué acciones deben ejecutarse.",
  },
  {
    number: "03",
    title: "Integramos",
    description:
      "Conectamos las herramientas, sistemas, APIs o fuentes de datos necesarias para ejecutar el proceso.",
  },
  {
    number: "04",
    title: "Automatizamos",
    description:
      "Construimos el flujo y configuramos las reglas necesarias para que las tareas puedan ejecutarse de manera automática.",
  },
  {
    number: "05",
    title: "Medimos y mejoramos",
    description:
      "Evaluamos el funcionamiento del proceso y buscamos oportunidades para seguir optimizándolo.",
  },
];

const technologies = [
  "Python",
  "TypeScript",
  "Node.js",
  "Next.js",
  "APIs",
  "Webhooks",
  "SQL",
  "IA",
  "Git",
  "Linux",
];

const faqs = [
  {
    question: "¿Qué procesos se pueden automatizar?",
    answer:
      "Principalmente tareas repetitivas, transferencia de información, generación de reportes, notificaciones, sincronización de sistemas, procesamiento de datos y otros flujos que siguen reglas definidas.",
  },
  {
    question: "¿Necesito tener un sistema propio para automatizar?",
    answer:
      "No necesariamente. Podemos analizar las herramientas que ya utilizas y determinar qué partes del proceso pueden conectarse o automatizarse.",
  },
  {
    question: "¿La automatización puede utilizar inteligencia artificial?",
    answer:
      "Sí. Cuando el proceso requiere interpretar texto, clasificar información, generar respuestas o tomar determinadas decisiones, podemos evaluar el uso de IA.",
  },
  {
    question: "¿Pueden conectar diferentes sistemas?",
    answer:
      "Sí. Las APIs, webhooks y otras interfaces de integración permiten conectar diferentes aplicaciones dentro de un mismo flujo.",
  },
  {
    question: "¿La automatización reemplaza todo el trabajo humano?",
    answer:
      "No necesariamente. El objetivo es identificar qué tareas pueden ejecutarse automáticamente y dejar a las personas las actividades que requieren criterio, supervisión o toma de decisiones.",
  },
];

export default function AutomatizacionPage() {
  const webPageSchema = createWebPageSchema({
    name: "Automatización | DevPass",
    description:
      "Automatización de procesos, integración de sistemas e inteligencia artificial para convertir tareas manuales en flujos digitales más rápidos y consistentes.",
    path: "/servicios/automatizacion",
  });

  const serviceSchema = createServiceSchema({
    name: "Automatización de Procesos",
    description:
      "Automatización de procesos, integración de sistemas e inteligencia artificial para reducir tareas repetitivas, conectar herramientas y mejorar los flujos de trabajo.",
    path: "/servicios/automatizacion",
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
      name: "Automatización",
      path: "/servicios/automatizacion",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(30,107,255,0.18),transparent_31%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.07),transparent_28%)]" />

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
                    DEVPASS · AUTOMATIZACIÓN
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Menos trabajo repetitivo.
                  <br />
                  <span className="devpass-gradient-text">
                    Más tiempo para crecer.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Automatizamos procesos, conectamos sistemas y utilizamos
                  tecnología e inteligencia artificial para convertir tareas
                  manuales en flujos digitales más rápidos y consistentes.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Automatizar mi proceso
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
                    Procesos automáticos
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Integraciones
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    IA aplicada
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
                      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-[#64748b]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />
                          WORKFLOW ACTIVE
                        </div>
                      </div>

                      <div className="p-7">
                        <div className="mb-7 flex items-center justify-between">
                          <div>
                            <div className="h-3 w-24 rounded bg-white/[0.08]" />
                            <div className="mt-2 h-2 w-36 rounded bg-white/[0.04]" />
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                            <Workflow size={17} />
                          </div>
                        </div>

                        <div className="relative space-y-3">
                          <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                              <Database size={16} />
                            </div>

                            <div className="flex-1">
                              <div className="h-2.5 w-24 rounded bg-white/[0.08]" />
                              <div className="mt-2 h-2 w-16 rounded bg-white/[0.04]" />
                            </div>

                            <Check size={15} className="text-[#3da5ff]" />
                          </div>

                          <div className="ml-8 h-5 w-px bg-[#3da5ff]/25" />

                          <div className="flex items-center gap-3 rounded-xl border border-[#3da5ff]/15 bg-[#071a34] p-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                              <Bot size={16} />
                            </div>

                            <div className="flex-1">
                              <div className="h-2.5 w-28 rounded bg-[#3da5ff]/20" />
                              <div className="mt-2 h-2 w-20 rounded bg-white/[0.04]" />
                            </div>

                            <span className="text-[9px] font-semibold text-[#3da5ff]">
                              IA
                            </span>
                          </div>

                          <div className="ml-8 h-5 w-px bg-[#3da5ff]/25" />

                          <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                              <Mail size={16} />
                            </div>

                            <div className="flex-1">
                              <div className="h-2.5 w-20 rounded bg-white/[0.08]" />
                              <div className="mt-2 h-2 w-28 rounded bg-white/[0.04]" />
                            </div>

                            <Check size={15} className="text-[#3da5ff]" />
                          </div>
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-white/[0.05] pt-5">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#3da5ff]" />
                            <span className="text-[10px] text-[#64748b]">
                              AUTOMATION RUNNING
                            </span>
                          </div>

                          <Play size={15} className="text-[#3da5ff]" />
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
                        <Clock3 size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">TIEMPO</p>
                        <p className="text-xs font-semibold text-white">
                          Optimizado
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
                        <Zap size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">FLUJO</p>
                        <p className="text-xs font-semibold text-white">
                          Automático
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
                ¿QUÉ PODEMOS AUTOMATIZAR?
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Convierte tareas repetitivas en flujos inteligentes.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Una automatización empieza por entender qué tareas consumen
                tiempo y cómo se relacionan entre sí. A partir de ahí podemos
                diseñar un flujo que reduzca pasos manuales y conecte las
                herramientas que ya utilizas.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {automationSolutions.map((item, index) => {
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
                  CASOS DE USO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Donde existe repetición, puede existir una oportunidad.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  No necesitas cambiar todo tu sistema. Muchas veces el mayor
                  impacto está en automatizar pequeños procesos que se repiten
                  todos los días.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Analizar mi proceso
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
                {useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-4"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/15 text-[#3da5ff]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-6 text-[#94a3b8]">
                      {useCase}
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
                BENEFICIOS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Automatizar no es hacer más.
                <br />
                <span className="text-[#64748b]">
                  Es hacer mejor.
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
                    TECNOLOGÍA
                  </p>

                  <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    Automatización, integración e inteligencia.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Combinamos desarrollo de software, APIs, procesamiento de
                    datos e inteligencia artificial cuando estas tecnologías
                    realmente aportan valor al proceso.
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
                    icon: GitBranch,
                    title: "Flujos conectados",
                    text: "Diseñamos secuencias donde cada etapa puede activar la siguiente.",
                  },
                  {
                    icon: Bot,
                    title: "IA aplicada",
                    text: "Incorporamos inteligencia cuando el proceso necesita interpretar información.",
                  },
                  {
                    icon: Network,
                    title: "Integraciones",
                    text: "Conectamos herramientas para evitar transferencias manuales innecesarias.",
                  },
                  {
                    icon: Settings2,
                    title: "Reglas personalizadas",
                    text: "Cada automatización puede responder a las reglas particulares del negocio.",
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
                Primero entendemos el proceso.
                <br />
                <span className="text-[#64748b]">
                  Después automatizamos.
                </span>
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
                  Antes de automatizar.
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
                <Zap size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿HAY UNA TAREA QUE REPITES DEMASIADO?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Hagamos que la tecnología
                <span className="devpass-gradient-text">
                  {" "}
                  trabaje por ti.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué proceso quieres mejorar. Analizaremos dónde
                existe una oportunidad de automatización y qué solución puede
                tener más sentido para tu negocio.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Automatizar mi proceso
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Explorar proyectos
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