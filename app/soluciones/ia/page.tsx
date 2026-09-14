"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Cpu,
  Database,
  FileSearch,
  GitBranch,
  MessageSquare,
  Network,
  ScanSearch,
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
    icon: Bot,
    title: "Asistentes inteligentes",
    description:
      "Interfaces conversacionales capaces de responder preguntas, consultar información y ayudar a los usuarios en tareas específicas.",
  },
  {
    icon: BrainCircuit,
    title: "Agentes con IA",
    description:
      "Sistemas que pueden interpretar objetivos, utilizar herramientas y ejecutar acciones dentro de flujos definidos.",
  },
  {
    icon: FileSearch,
    title: "IA para documentos",
    description:
      "Procesamiento y análisis de documentos para extraer información, clasificar contenido y facilitar consultas.",
  },
  {
    icon: Workflow,
    title: "Automatización inteligente",
    description:
      "Integramos IA en procesos existentes cuando interpretar información o tomar determinadas acciones puede aportar valor.",
  },
];

const useCases = [
  "Asistentes para atención y soporte",
  "Consulta inteligente de documentos",
  "Clasificación automática de información",
  "Extracción de datos desde documentos",
  "Generación y resumen de contenido",
  "Análisis de grandes volúmenes de información",
  "Agentes para procesos específicos",
  "Automatización de tareas con IA",
  "Sistemas de recomendación",
  "Integración de modelos de IA con aplicaciones",
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversación",
    description:
      "Interfaces que permiten interactuar con sistemas e información utilizando lenguaje natural.",
  },
  {
    icon: Database,
    title: "Contexto y datos",
    description:
      "Conectamos la IA con información relevante para que las respuestas estén orientadas al contexto del proyecto.",
  },
  {
    icon: GitBranch,
    title: "Flujos inteligentes",
    description:
      "La IA puede formar parte de procesos donde una respuesta o análisis desencadena acciones posteriores.",
  },
  {
    icon: Network,
    title: "Integración",
    description:
      "Las capacidades de IA pueden incorporarse dentro de aplicaciones y ecosistemas tecnológicos existentes.",
  },
];

const process = [
  {
    number: "01",
    title: "Identificamos",
    description:
      "Analizamos el problema para determinar si la inteligencia artificial realmente puede aportar valor.",
  },
  {
    number: "02",
    title: "Definimos",
    description:
      "Establecemos qué información utilizará la solución, qué tareas realizará y qué límites tendrá.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Integramos los componentes necesarios para crear una solución funcional y adaptada al caso.",
  },
  {
    number: "04",
    title: "Evaluamos",
    description:
      "Probamos las respuestas, comportamiento, flujo y utilidad de la solución antes de llevarla a producción.",
  },
  {
    number: "05",
    title: "Evolucionamos",
    description:
      "Ajustamos y ampliamos la solución a medida que aparecen nuevos datos, necesidades y oportunidades.",
  },
];

const technologies = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "APIs",
  "LLM",
  "RAG",
  "Embeddings",
  "SQL",
  "Automatización",
];

const faqs = [
  {
    question: "¿Qué tipo de soluciones de IA pueden desarrollar?",
    answer:
      "Podemos desarrollar asistentes inteligentes, agentes especializados, sistemas de consulta de información, procesamiento de documentos, automatizaciones con IA y funcionalidades inteligentes integradas en aplicaciones.",
  },
  {
    question: "¿Necesito tener un modelo de inteligencia artificial propio?",
    answer:
      "No necesariamente. Dependiendo del proyecto podemos integrar modelos y servicios existentes o diseñar una arquitectura que utilice diferentes componentes de IA.",
  },
  {
    question: "¿Pueden conectar la IA con información de mi empresa?",
    answer:
      "Sí. Podemos diseñar soluciones que trabajen con fuentes de información definidas, como documentos, bases de datos o sistemas internos, considerando el contexto y los permisos necesarios.",
  },
  {
    question: "¿Un agente de IA puede realizar acciones?",
    answer:
      "Sí, dependiendo de su arquitectura. Un agente puede utilizar herramientas y ejecutar determinadas acciones dentro de límites y reglas previamente definidos.",
  },
  {
    question: "¿Toda empresa necesita inteligencia artificial?",
    answer:
      "No. La IA tiene sentido cuando resuelve un problema concreto o mejora significativamente un proceso. Por eso el primer paso es analizar la necesidad antes de elegir la tecnología.",
  },
];

export default function InteligenciaArtificialPage() {
    const webPageSchema = createWebPageSchema({
    name: "Inteligencia Artificial | DevPass",
    description:
      "Soluciones de inteligencia artificial para analizar información, asistir usuarios, automatizar tareas e integrar capacidades inteligentes en aplicaciones y procesos.",
    path: "/soluciones/ia",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Soluciones", path: "/soluciones" },
    {
      name: "Inteligencia Artificial",
      path: "/soluciones/ia",
    },
  ]);
  return (
    <>
    <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(30,107,255,0.2),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.08),transparent_28%)]" />

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
                    DEVPASS · INTELIGENCIA ARTIFICIAL
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Inteligencia artificial{" "}
                  <span className="devpass-gradient-text">
                    aplicada a problemas reales.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Diseñamos soluciones con IA para analizar información,
                  asistir usuarios, automatizar tareas y ampliar las
                  capacidades de aplicaciones y procesos existentes.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Hablar sobre una solución
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
                    IA aplicada
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Agentes inteligentes
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Automatización
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative hidden lg:block"
              >
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[120px]" />

                <div className="relative mx-auto h-[490px] max-w-[500px]">
                  <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3da5ff]/10"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#3da5ff]/25 bg-[#071a34] shadow-[0_0_90px_rgba(30,107,255,0.25)]">
                    <BrainCircuit
                      size={48}
                      strokeWidth={1.4}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="absolute left-1/2 top-[22px] h-[110px] w-px bg-gradient-to-b from-[#3da5ff]/0 via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute bottom-[22px] left-1/2 h-[110px] w-px bg-gradient-to-t from-[#3da5ff]/0 via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute left-[22px] top-1/2 h-px w-[110px] bg-gradient-to-r from-[#3da5ff]/0 via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute right-[22px] top-1/2 h-px w-[110px] bg-gradient-to-l from-[#3da5ff]/0 via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 top-16 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Bot size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">AGENTS</p>
                        <p className="text-xs font-semibold text-white">
                          Inteligentes
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
                    className="absolute right-0 top-32 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <Database size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">CONTEXT</p>
                        <p className="text-xs font-semibold text-white">
                          Conectado
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
                    className="absolute bottom-20 left-3 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <ScanSearch size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">ANÁLISIS</p>
                        <p className="text-xs font-semibold text-white">
                          Automatizado
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
                    className="absolute bottom-8 right-2 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Zap size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">IA</p>
                        <p className="text-xs font-semibold text-white">
                          Aplicada
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
                SOLUCIONES CON IA
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Inteligencia artificial que tiene un propósito.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                No todas las necesidades requieren la misma arquitectura.
                Definimos la solución según el problema, los datos disponibles,
                el flujo de trabajo y el resultado que se busca obtener.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/25 hover:bg-[#071a34]/60"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#334155]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-lg font-semibold text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {solution.description}
                    </p>
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
                  CAPACIDADES
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  IA conectada con el contexto de tu negocio.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Una solución inteligente es más útil cuando entiende qué
                  información puede utilizar, qué acciones puede realizar y
                  cuáles son sus límites.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Analizar una oportunidad
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;

                  return (
                    <motion.div
                      key={capability.title}
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
                        {capability.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#64748b]">
                        {capability.description}
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
            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                    APLICACIONES
                  </p>

                  <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    ¿Dónde puede aportar valor la IA?
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Las oportunidades aparecen especialmente en procesos donde
                    existe gran cantidad de información, tareas repetitivas,
                    clasificación, búsqueda o interacción con usuarios.
                  </p>
                </motion.div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
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
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-[#1e6bff]/5 blur-3xl" />

                <div className="relative rounded-3xl border border-[#3da5ff]/15 bg-[#020b18] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                        AI WORKFLOW
                      </p>

                      <p className="mt-1 text-xs text-[#64748b]">
                        Intelligent process
                      </p>
                    </div>

                    <Sparkles
                      size={18}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                          <Database size={16} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Información
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Datos y documentos
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight
                        size={17}
                        className="rotate-90 text-[#3da5ff]/50"
                      />
                    </div>

                    <div className="rounded-xl border border-[#3da5ff]/15 bg-[#071a34] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                          <BrainCircuit size={16} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Inteligencia
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Interpretación y análisis
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight
                        size={17}
                        className="rotate-90 text-[#3da5ff]/50"
                      />
                    </div>

                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                          <Workflow size={16} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Acción
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Resultado dentro del proceso
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.05] pt-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />

                    <span className="text-[10px] text-[#64748b]">
                      INTELLIGENT FLOW ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
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
                    Construimos la arquitectura alrededor del caso.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Dependiendo del proyecto podemos combinar modelos de IA,
                    datos, aplicaciones, APIs y automatización para construir
                    una solución completa.
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
                    icon: Cpu,
                    title: "Modelos de IA",
                    text: "Integramos capacidades de inteligencia según el objetivo de la solución.",
                  },
                  {
                    icon: Database,
                    title: "Datos y contexto",
                    text: "La información relevante puede formar parte de la arquitectura.",
                  },
                  {
                    icon: GitBranch,
                    title: "Orquestación",
                    text: "Conectamos diferentes etapas para construir flujos inteligentes.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Control",
                    text: "Definimos límites, permisos y reglas alrededor de la solución.",
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
                Primero el caso de uso.
                <br />
                <span className="text-[#64748b]">
                  Después la inteligencia.
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
                  Antes de construir con IA.
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,107,255,0.18),transparent_38%)]" />

          <div className="devpass-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                <Sparkles size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿TIENES UNA IDEA CON IA?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                No necesitas saber qué modelo utilizar.
                <br />
                <span className="devpass-gradient-text">
                  Solo cuéntanos el problema.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Explícanos qué quieres mejorar, automatizar o construir.
                Evaluaremos dónde la inteligencia artificial puede aportar
                valor y qué arquitectura tendría sentido para tu proyecto.
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
                  href="/lab"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Explorar DevPass Lab
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