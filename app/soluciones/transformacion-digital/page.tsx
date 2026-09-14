"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CloudCog,
  Database,
  FileDigit,
  Gauge,
  Layers3,
  MonitorCog,
  Network,
  RefreshCw,
  Search,
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
    icon: FileDigit,
    title: "Digitalización de procesos",
    description:
      "Convertimos procesos que dependen de documentos, registros manuales o herramientas aisladas en flujos digitales más organizados.",
  },
  {
    icon: MonitorCog,
    title: "Modernización de sistemas",
    description:
      "Analizamos sistemas existentes y planteamos mejoras para que puedan responder mejor a las necesidades actuales de la organización.",
  },
  {
    icon: Database,
    title: "Centralización de información",
    description:
      "Diseñamos soluciones para reunir información dispersa y facilitar su consulta, gestión y seguimiento.",
  },
  {
    icon: BarChart3,
    title: "Datos para decidir",
    description:
      "Transformamos información operativa en indicadores y herramientas que faciliten el análisis y la toma de decisiones.",
  },
];

const challenges = [
  "Procesos que todavía dependen de documentos físicos",
  "Información almacenada en diferentes archivos o sistemas",
  "Tareas manuales que se repiten constantemente",
  "Sistemas antiguos difíciles de mantener o ampliar",
  "Falta de visibilidad sobre los procesos",
  "Herramientas que no se comunican entre sí",
  "Dificultad para obtener información rápidamente",
  "Necesidad de modernizar sin detener la operación",
];

const benefits = [
  {
    icon: Gauge,
    title: "Mayor eficiencia",
    description:
      "La digitalización permite reducir pasos innecesarios y organizar mejor las operaciones.",
  },
  {
    icon: Database,
    title: "Información organizada",
    description:
      "Los datos pueden centralizarse para facilitar su consulta, actualización y seguimiento.",
  },
  {
    icon: BarChart3,
    title: "Mayor visibilidad",
    description:
      "Los procesos digitalizados permiten generar información útil para analizar el funcionamiento del negocio.",
  },
  {
    icon: RefreshCw,
    title: "Evolución tecnológica",
    description:
      "La transformación puede realizarse progresivamente, priorizando primero las áreas que generan mayor impacto.",
  },
];

const principles = [
  {
    icon: Search,
    title: "Diagnóstico antes de cambiar",
    description:
      "Primero entendemos cómo funciona actualmente la organización y dónde están las principales oportunidades de mejora.",
  },
  {
    icon: Layers3,
    title: "Transformación progresiva",
    description:
      "No siempre es necesario reemplazar todo. Podemos plantear una evolución por etapas.",
  },
  {
    icon: Network,
    title: "Tecnología conectada",
    description:
      "Buscamos que las nuevas soluciones puedan integrarse con las herramientas que ya forman parte de la operación.",
  },
  {
    icon: ShieldCheck,
    title: "Continuidad y control",
    description:
      "La transformación debe considerar seguridad, acceso a la información, mantenimiento y continuidad operativa.",
  },
];

const process = [
  {
    number: "01",
    title: "Diagnosticamos",
    description:
      "Analizamos procesos, herramientas, información y necesidades para conocer el punto de partida.",
  },
  {
    number: "02",
    title: "Priorizamos",
    description:
      "Identificamos qué procesos o áreas pueden generar mayor impacto al ser digitalizados o modernizados.",
  },
  {
    number: "03",
    title: "Diseñamos",
    description:
      "Definimos la solución, arquitectura, integraciones y evolución tecnológica necesarias.",
  },
  {
    number: "04",
    title: "Implementamos",
    description:
      "Construimos e incorporamos las soluciones de forma progresiva, buscando reducir la fricción durante el cambio.",
  },
  {
    number: "05",
    title: "Evolucionamos",
    description:
      "Medimos resultados y continuamos mejorando la solución conforme aparecen nuevas necesidades.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "SQL",
  "APIs",
  "Automatización",
  "IA",
  "Cloud",
];

const faqs = [
  {
    question: "¿Qué significa transformación digital?",
    answer:
      "Es el proceso de incorporar tecnología para mejorar cómo una organización trabaja, gestiona información, atiende a sus usuarios y toma decisiones.",
  },
  {
    question: "¿Tengo que cambiar todos mis sistemas?",
    answer:
      "No necesariamente. Dependiendo del caso, puede ser más conveniente integrar, modernizar o reemplazar solamente determinados componentes.",
  },
  {
    question: "¿Pueden trabajar con sistemas antiguos?",
    answer:
      "Sí. Podemos analizar sistemas existentes y evaluar alternativas para modernizarlos, integrarlos o construir nuevas capas alrededor de ellos.",
  },
  {
    question: "¿La transformación digital también incluye automatización?",
    answer:
      "Sí. La automatización puede formar parte de una estrategia de transformación cuando permite mejorar procesos repetitivos o reducir tareas manuales.",
  },
  {
    question: "¿Pueden incorporar inteligencia artificial?",
    answer:
      "Sí. Cuando existe un caso de uso adecuado, la inteligencia artificial puede incorporarse como parte de una solución de transformación digital.",
  },
];

export default function TransformacionDigitalPage() {
  const webPageSchema = createWebPageSchema({
    name: "Transformación Digital | DevPass",
    description:
      "Transformación digital para modernizar procesos, organizar información, conectar sistemas y ayudar a las organizaciones a evolucionar con tecnología.",
    path: "/soluciones/transformacion-digital",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Soluciones", path: "/soluciones" },
    {
      name: "Transformación Digital",
      path: "/soluciones/transformacion-digital",
    },
  ]);
  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />

      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(30,107,255,0.18),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.07),transparent_28%)]" />

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
                    DEVPASS · TRANSFORMACIÓN DIGITAL
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Lleva tu operación al{" "}
                  <span className="devpass-gradient-text">
                    siguiente nivel digital.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Modernizamos procesos, organizamos información y conectamos
                  tecnología para ayudar a las empresas a evolucionar de forma
                  progresiva y con objetivos concretos.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Transformar mi proceso
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
                    Digitalización
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Modernización
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
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[120px]" />

                <div className="relative mx-auto h-[490px] max-w-[500px]">
                  <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#3da5ff]/25 bg-[#071a34] shadow-[0_0_90px_rgba(30,107,255,0.25)]">
                    <CloudCog
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
                        <FileDigit size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          PROCESOS
                        </p>

                        <p className="text-xs font-semibold text-white">
                          Digitalizados
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
                        <p className="text-[10px] text-[#64748b]">
                          INFORMACIÓN
                        </p>

                        <p className="text-xs font-semibold text-white">
                          Centralizada
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
                        <Workflow size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          OPERACIÓN
                        </p>

                        <p className="text-xs font-semibold text-white">
                          Optimizada
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
                        <p className="text-[10px] text-[#64748b]">
                          EVOLUCIÓN
                        </p>

                        <p className="text-xs font-semibold text-white">
                          Continua
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
                ¿QUÉ PODEMOS TRANSFORMAR?
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Del trabajo manual a procesos digitales.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                La transformación digital puede comenzar en un solo proceso y
                crecer progresivamente. Lo importante es identificar dónde la
                tecnología puede generar un cambio tangible.
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
                  EL PUNTO DE PARTIDA
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  ¿Qué está frenando hoy a tu operación?
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Muchas organizaciones no necesitan más herramientas. Necesitan
                  conectar mejor las que ya tienen, digitalizar procesos
                  específicos o reemplazar aquello que limita su crecimiento.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Analizar mi situación
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-4"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/15 text-[#3da5ff]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-6 text-[#94a3b8]">
                      {challenge}
                    </span>
                  </motion.div>
                ))}
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
                BENEFICIOS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Modernizar para trabajar mejor.
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
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
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b]">
                      {benefit.description}
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
                  PRINCIPIOS
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Transformar sin perder el control.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  La transformación digital no consiste solamente en adquirir
                  nuevas herramientas. Consiste en hacer que la tecnología
                  encaje correctamente con la operación.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
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
                      className="rounded-2xl border border-white/[0.05] bg-[#020b18] p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-5 text-sm font-semibold text-white">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#64748b]">
                        {principle.description}
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
                    Una arquitectura preparada para evolucionar.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Podemos combinar desarrollo, datos, automatización,
                    integraciones, servicios cloud e inteligencia artificial
                    para construir una solución alineada con la evolución del
                    negocio.
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
                    icon: Database,
                    title: "Datos centralizados",
                    text: "Información organizada para facilitar su acceso y utilización.",
                  },
                  {
                    icon: Network,
                    title: "Sistemas conectados",
                    text: "Integraciones para reducir silos tecnológicos.",
                  },
                  {
                    icon: Workflow,
                    title: "Procesos digitales",
                    text: "Flujos más claros, medibles y fáciles de gestionar.",
                  },
                  {
                    icon: Sparkles,
                    title: "Nuevas capacidades",
                    text: "Automatización e IA cuando existe una oportunidad real.",
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

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
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
                Una transformación por etapas.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cada organización parte de una situación diferente. Por eso
                planteamos la transformación como un proceso progresivo y
                medible.
              </p>
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

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
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
                  Antes de transformar.
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
                <CloudCog size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿QUIERES MODERNIZAR TU OPERACIÓN?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Tu transformación puede
                <span className="devpass-gradient-text">
                  {" "}
                  comenzar hoy.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos cómo funciona actualmente tu organización, qué
                proceso quieres mejorar o qué sistema necesitas modernizar.
                Podemos ayudarte a definir el siguiente paso.
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
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Explorar servicios
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