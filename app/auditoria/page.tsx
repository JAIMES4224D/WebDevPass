"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  FileSearch,
  Gauge,
  Layers3,
  LockKeyhole,
  Radar,
  ServerCog,
  Shield,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const auditAreas = [
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Revisamos configuraciones, controles de acceso, exposición de servicios y posibles puntos de riesgo dentro del entorno tecnológico.",
  },
  {
    icon: ServerCog,
    title: "Infraestructura",
    description:
      "Analizamos servidores, servicios, red, recursos y componentes que sostienen la operación tecnológica.",
  },
  {
    icon: Code2,
    title: "Aplicaciones",
    description:
      "Evaluamos estructura, implementación, dependencias y aspectos técnicos que pueden afectar la calidad del software.",
  },
  {
    icon: Layers3,
    title: "Arquitectura",
    description:
      "Estudiamos cómo están organizados los componentes y si la arquitectura responde correctamente a las necesidades actuales.",
  },
  {
    icon: Gauge,
    title: "Rendimiento",
    description:
      "Identificamos posibles cuellos de botella y oportunidades para mejorar tiempos de respuesta y utilización de recursos.",
  },
  {
    icon: Database,
    title: "Datos",
    description:
      "Revisamos almacenamiento, organización, acceso e intercambio de información dentro del ecosistema tecnológico.",
  },
];

const signals = [
  "La aplicación presenta problemas de rendimiento",
  "Existen sistemas que nadie sabe exactamente cómo están configurados",
  "La infraestructura ha crecido sin una arquitectura definida",
  "Hay servicios expuestos que necesitan ser revisados",
  "Los sistemas presentan errores recurrentes",
  "La organización depende demasiado de procesos manuales",
  "No existe una visión clara del estado tecnológico",
  "Se planea migrar, modernizar o reemplazar un sistema",
];

const methodology = [
  {
    number: "01",
    title: "Descubrimos",
    description:
      "Recopilamos información del entorno, sistemas, infraestructura, aplicaciones y procesos relevantes para establecer el alcance de la auditoría.",
  },
  {
    number: "02",
    title: "Analizamos",
    description:
      "Evaluamos los componentes técnicos y buscamos configuraciones, comportamientos o patrones que requieran atención.",
  },
  {
    number: "03",
    title: "Validamos",
    description:
      "Contrastamos los hallazgos y reunimos evidencias técnicas para diferenciar problemas reales de simples síntomas.",
  },
  {
    number: "04",
    title: "Priorizamos",
    description:
      "Clasificamos los hallazgos según su impacto y prioridad para facilitar la toma de decisiones.",
  },
  {
    number: "05",
    title: "Recomendamos",
    description:
      "Entregamos acciones concretas para corregir, mejorar, modernizar o continuar investigando cada situación detectada.",
  },
];

const deliverables = [
  {
    icon: FileSearch,
    title: "Hallazgos técnicos",
    description:
      "Identificación clara de situaciones relevantes encontradas durante el análisis.",
  },
  {
    icon: AlertTriangle,
    title: "Riesgos y prioridades",
    description:
      "Clasificación de los puntos que requieren mayor atención y seguimiento.",
  },
  {
    icon: BarChart3,
    title: "Estado tecnológico",
    description:
      "Una visión estructurada de la situación actual de los componentes evaluados.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan de acción",
    description:
      "Recomendaciones técnicas orientadas a corregir problemas y definir próximos pasos.",
  },
];

const auditTypes = [
  {
    title: "Auditoría de aplicaciones",
    description:
      "Revisión técnica de aplicaciones web, software interno y sistemas desarrollados.",
    icon: Code2,
  },
  {
    title: "Auditoría de infraestructura",
    description:
      "Evaluación de servidores, servicios, red y componentes que soportan los sistemas.",
    icon: ServerCog,
  },
  {
    title: "Auditoría de seguridad",
    description:
      "Revisión técnica orientada a identificar configuraciones y superficies que requieren atención.",
    icon: LockKeyhole,
  },
  {
    title: "Auditoría tecnológica",
    description:
      "Evaluación general del ecosistema tecnológico para conocer su situación y oportunidades de mejora.",
    icon: Radar,
  },
];

const technologies = [
  "Linux",
  "Debian",
  "Bash",
  "Nmap",
  "cURL",
  "DNS",
  "TCP/IP",
  "HTTP",
  "SSL/TLS",
  "Git",
  "SQL",
  "Python",
];

const faqs = [
  {
    question: "¿Qué es una auditoría tecnológica?",
    answer:
      "Es un análisis estructurado del entorno tecnológico para conocer su estado actual, identificar hallazgos y establecer oportunidades de mejora.",
  },
  {
    question: "¿Qué necesito entregar para realizar una auditoría?",
    answer:
      "Depende del alcance. Podemos trabajar con documentación, información técnica, acceso controlado a determinados sistemas o evidencias disponibles del entorno.",
  },
  {
    question: "¿La auditoría incluye pruebas de seguridad?",
    answer:
      "Puede incluir revisiones técnicas y pruebas dentro del alcance acordado. El tipo y profundidad de las pruebas dependerá del objetivo y autorización del proyecto.",
  },
  {
    question: "¿Qué recibo al finalizar?",
    answer:
      "El resultado puede incluir hallazgos, evidencias, prioridades y recomendaciones técnicas organizadas para facilitar la toma de decisiones.",
  },
  {
    question: "¿Pueden ayudarme después de encontrar los problemas?",
    answer:
      "Sí. A partir de los hallazgos podemos plantear acciones de desarrollo, modernización, automatización, integración o mejora de infraestructura según corresponda.",
  },
];

export default function AuditoriaPage() {
    const webPageSchema = createWebPageSchema({
    name: "Auditoría Tecnológica | DevPass",
    description:
      "Auditoría tecnológica para analizar aplicaciones, infraestructura, seguridad, arquitectura y datos, identificar riesgos y obtener recomendaciones técnicas para mejorar el entorno tecnológico.",
    path: "/auditoria",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Auditoría Tecnológica", path: "/auditoria" },
  ]);
  return (
    <>
    <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(30,107,255,0.18),transparent_32%),radial-gradient(circle_at_18%_75%,rgba(61,165,255,0.07),transparent_28%)]" />

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
                    DEVPASS · AUDITORÍA TECNOLÓGICA
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Antes de cambiar tu tecnología,{" "}
                  <span className="devpass-gradient-text">
                    conoce su estado real.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Analizamos aplicaciones, infraestructura, seguridad,
                  arquitectura y datos para identificar problemas, riesgos y
                  oportunidades de mejora con evidencia técnica.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Solicitar una auditoría
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos/sigesapol"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                  >
                    Ver caso SIGESAPOL
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#64748b]">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Evidencia técnica
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Hallazgos priorizados
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Recomendaciones
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
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3da5ff]/10"
                  />

                  <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#3da5ff]/25 bg-[#071a34] shadow-[0_0_90px_rgba(30,107,255,0.25)]">
                    <Radar
                      size={48}
                      strokeWidth={1.3}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="absolute left-1/2 top-[20px] h-[110px] w-px bg-gradient-to-b from-transparent via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute bottom-[20px] left-1/2 h-[110px] w-px bg-gradient-to-t from-transparent via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute left-[20px] top-1/2 h-px w-[110px] bg-gradient-to-r from-transparent via-[#3da5ff]/25 to-[#3da5ff]/50" />

                  <div className="absolute right-[20px] top-1/2 h-px w-[110px] bg-gradient-to-l from-transparent via-[#3da5ff]/25 to-[#3da5ff]/50" />

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
                        <ShieldCheck size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">
                          SECURITY
                        </p>

                        <p className="text-xs font-semibold text-white">
                          Analysis
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
                        <Activity size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">SYSTEM</p>

                        <p className="text-xs font-semibold text-white">
                          Health check
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
                        <Terminal size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">TECH</p>

                        <p className="text-xs font-semibold text-white">
                          Evidence
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
                        <ClipboardCheck size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">REPORT</p>

                        <p className="text-xs font-semibold text-white">
                          Findings
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
                ÁREAS DE ANÁLISIS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Una visión técnica del ecosistema.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Una auditoría útil no se limita a buscar errores. Analizamos
                diferentes capas para entender cómo funciona realmente el
                entorno tecnológico.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {auditAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
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
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {area.description}
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
                  ¿CUÁNDO AUDITAR?
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Hay señales que no conviene ignorar.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Una auditoría puede ser especialmente útil cuando el entorno
                  tecnológico ha crecido, presenta problemas recurrentes o se
                  está preparando una etapa importante de cambio.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Evaluar mi entorno
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {signals.map((signal, index) => (
                  <motion.div
                    key={signal}
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
                      {signal}
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
                TIPOS DE AUDITORÍA
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                El alcance se adapta al problema.
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {auditTypes.map((type, index) => {
                const Icon = type.icon;

                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                          0{index + 1}
                        </p>

                        <h3 className="mt-1 font-poppins text-base font-semibold text-white">
                          {type.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#64748b]">
                      {type.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  RESULTADO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  No solo encontrarás problemas.
                  <span className="block text-[#64748b]">
                    Sabrás qué hacer después.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  El objetivo de una auditoría es convertir información
                  técnica en decisiones útiles para el siguiente paso.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((deliverable, index) => {
                  const Icon = deliverable.icon;

                  return (
                    <motion.div
                      key={deliverable.title}
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
                        {deliverable.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#64748b]">
                        {deliverable.description}
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
                    METODOLOGÍA
                  </p>

                  <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    Investigar. Evidenciar. Priorizar.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Cada auditoría se adapta al alcance definido, pero mantiene
                    una lógica clara: comprender el entorno, encontrar
                    evidencia y convertirla en acciones.
                  </p>
                </motion.div>

                <div className="mt-10">
                  {methodology.map((item, index) => (
                    <div key={item.number} className="relative">
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.05,
                        }}
                        className="relative z-10 grid gap-4 rounded-xl border border-white/[0.05] bg-[#020b18] p-5 md:grid-cols-[50px_160px_1fr] md:items-center md:gap-6"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3da5ff]/20 bg-[#071a34] text-xs font-bold text-[#3da5ff]">
                          {item.number}
                        </div>

                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="text-xs leading-6 text-[#64748b]">
                          {item.description}
                        </p>
                      </motion.div>

                      {index < methodology.length - 1 && (
                        <div className="relative z-0 hidden h-4 md:block">
                          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-[#1e6bff]/45 to-[#3da5ff]/10" />
                        </div>
                      )}
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
                        DEVPASS AUDIT
                      </p>

                      <p className="mt-1 text-xs text-[#64748b]">
                        Technical assessment
                      </p>
                    </div>

                    <Radar
                      size={18}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ServerCog
                            size={16}
                            className="text-[#3da5ff]"
                          />

                          <span className="text-xs font-medium text-white">
                            Infrastructure
                          </span>
                        </div>

                        <span className="text-[10px] text-[#64748b]">
                          REVIEW
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Shield
                            size={16}
                            className="text-[#3da5ff]"
                          />

                          <span className="text-xs font-medium text-white">
                            Security
                          </span>
                        </div>

                        <span className="text-[10px] text-[#64748b]">
                          REVIEW
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#3da5ff]/15 bg-[#071a34] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Code2
                            size={16}
                            className="text-[#3da5ff]"
                          />

                          <span className="text-xs font-medium text-white">
                            Applications
                          </span>
                        </div>

                        <span className="text-[10px] text-[#3da5ff]">
                          ANALYZING
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Database
                            size={16}
                            className="text-[#3da5ff]"
                          />

                          <span className="text-xs font-medium text-white">
                            Data
                          </span>
                        </div>

                        <span className="text-[10px] text-[#64748b]">
                          REVIEW
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.05] pt-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />

                    <span className="text-[10px] text-[#64748b]">
                      AUDIT ENGINE ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  STACK TÉCNICO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Herramientas para observar lo que ocurre debajo.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Dependiendo del alcance utilizamos diferentes herramientas
                  de diagnóstico y análisis para obtener evidencia sobre el
                  entorno evaluado.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    className="rounded-lg border border-white/[0.07] bg-[#020b18] px-4 py-2.5 text-sm font-medium text-[#a7b4c8]"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
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
                  Antes de auditar.
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
                <Radar size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿NO SABES QUÉ ESTÁ FALLANDO?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Primero encontremos
                <br />
                <span className="devpass-gradient-text">
                  dónde está el problema.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué está ocurriendo, qué sistema quieres revisar o
                qué cambio tecnológico estás evaluando. Definiremos el alcance
                adecuado para analizarlo.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Solicitar auditoría
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/proyectos/sigesapol"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Conocer SIGESAPOL
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