"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Link2,
  Network,
  RefreshCw,
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

const integrationSolutions = [
  {
    icon: Link2,
    title: "Integración de APIs",
    description:
      "Conectamos aplicaciones y servicios mediante APIs para permitir que la información viaje de forma controlada entre diferentes plataformas.",
  },
  {
    icon: Database,
    title: "Integración de bases de datos",
    description:
      "Conectamos fuentes de información para facilitar la sincronización, consulta y utilización de datos entre sistemas.",
  },
  {
    icon: Workflow,
    title: "Flujos automatizados",
    description:
      "Diseñamos procesos donde una acción en un sistema puede desencadenar automáticamente otras operaciones.",
  },
  {
    icon: Cloud,
    title: "Servicios externos",
    description:
      "Integramos servicios de terceros para ampliar las capacidades de aplicaciones y plataformas existentes.",
  },
];

const challenges = [
  "Sistemas que funcionan de manera independiente",
  "Información que debe copiarse manualmente entre plataformas",
  "APIs que necesitan conectarse con una aplicación propia",
  "Bases de datos que requieren sincronización",
  "Procesos que dependen de múltiples herramientas",
  "Información duplicada en diferentes sistemas",
  "Falta de comunicación entre aplicaciones",
  "Necesidad de conectar servicios externos",
];

const benefits = [
  {
    icon: RefreshCw,
    title: "Información sincronizada",
    description:
      "Reducimos la necesidad de trasladar manualmente información entre diferentes sistemas.",
  },
  {
    icon: Zap,
    title: "Procesos más rápidos",
    description:
      "Las integraciones permiten que determinadas operaciones ocurran automáticamente entre plataformas.",
  },
  {
    icon: Database,
    title: "Menos duplicación",
    description:
      "Conectamos las fuentes de información para reducir registros repetidos y tareas innecesarias.",
  },
  {
    icon: Network,
    title: "Ecosistema conectado",
    description:
      "Construimos una arquitectura donde las diferentes herramientas puedan colaborar dentro de un flujo definido.",
  },
];

const architecture = [
  {
    icon: Globe2,
    title: "Aplicaciones",
    description:
      "Sistemas web, plataformas internas y aplicaciones móviles.",
  },
  {
    icon: Code2,
    title: "APIs",
    description:
      "Interfaces para intercambiar información y funcionalidades.",
  },
  {
    icon: Database,
    title: "Datos",
    description:
      "Bases de datos y fuentes de información que forman parte del ecosistema.",
  },
  {
    icon: Cloud,
    title: "Servicios",
    description:
      "Plataformas externas y servicios cloud integrados al flujo.",
  },
];

const process = [
  {
    number: "01",
    title: "Mapeamos",
    description:
      "Identificamos qué sistemas intervienen, qué información manejan y cómo se relacionan actualmente.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos qué información debe intercambiarse, mediante qué mecanismos y bajo qué reglas.",
  },
  {
    number: "03",
    title: "Integramos",
    description:
      "Construimos las conexiones necesarias entre APIs, aplicaciones, bases de datos y servicios.",
  },
  {
    number: "04",
    title: "Validamos",
    description:
      "Probamos los flujos, datos, errores y escenarios para comprobar que la integración funcione correctamente.",
  },
  {
    number: "05",
    title: "Monitoreamos",
    description:
      "Diseñamos la solución pensando en mantenimiento, trazabilidad y evolución futura.",
  },
];

const technologies = [
  "REST APIs",
  "Webhooks",
  "JSON",
  "Python",
  "TypeScript",
  "Node.js",
  "Next.js",
  "SQL",
  "OAuth",
  "JWT",
];

const faqs = [
  {
    question: "¿Qué sistemas pueden integrar?",
    answer:
      "Podemos trabajar con aplicaciones propias, APIs, bases de datos y servicios externos, siempre que exista un mecanismo técnico que permita la comunicación entre los sistemas.",
  },
  {
    question: "¿Pueden integrar sistemas que ya utiliza mi empresa?",
    answer:
      "Sí. Primero analizamos las herramientas existentes y sus posibilidades de integración para determinar la estrategia más adecuada.",
  },
  {
    question: "¿Qué pasa si un sistema no tiene API?",
    answer:
      "Depende del sistema. Podemos evaluar otras alternativas técnicas disponibles, aunque la viabilidad debe determinarse después de conocer cómo funciona y qué mecanismos de acceso proporciona.",
  },
  {
    question: "¿Una integración también puede automatizar procesos?",
    answer:
      "Sí. Una integración puede convertirse en parte de un flujo automatizado donde los datos o eventos de un sistema desencadenan acciones en otro.",
  },
  {
    question: "¿La integración puede crecer con mi empresa?",
    answer:
      "Sí. Diseñamos las conexiones pensando en mantenimiento, escalabilidad y la posibilidad de incorporar nuevos sistemas posteriormente.",
  },
];

export default function IntegracionesPage() {
    const webPageSchema = createWebPageSchema({
    name: "Integraciones de Sistemas | DevPass",
    description:
      "Integramos aplicaciones, APIs, bases de datos y servicios para conectar sistemas, sincronizar información y automatizar procesos dentro de un ecosistema tecnológico.",
    path: "/soluciones/integraciones",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Soluciones", path: "/soluciones" },
    {
      name: "Integraciones",
      path: "/soluciones/integraciones",
    },
  ]);
  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(30,107,255,0.2),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.07),transparent_28%)]" />

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
                    DEVPASS · INTEGRACIONES
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Haz que tus sistemas{" "}
                  <span className="devpass-gradient-text">
                    trabajen juntos.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Conectamos aplicaciones, APIs, bases de datos y servicios
                  para que la información fluya entre tus sistemas sin
                  depender constantemente de procesos manuales.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Conectar mis sistemas
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
                    APIs
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Datos
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

                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10" />

                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3da5ff]/10"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#3da5ff]/25 bg-[#071a34] shadow-[0_0_90px_rgba(30,107,255,0.25)]">
                    <Network
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
                        <Code2 size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] text-[#64748b]">API</p>

                        <p className="text-xs font-semibold text-white">
                          Connected
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
                        <p className="text-[10px] text-[#64748b]">DATA</p>

                        <p className="text-xs font-semibold text-white">
                          Synced
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
                        <p className="text-[10px] text-[#64748b]">FLOW</p>

                        <p className="text-xs font-semibold text-white">
                          Automated
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
                        <p className="text-[10px] text-[#64748b]">SYSTEMS</p>

                        <p className="text-xs font-semibold text-white">
                          Connected
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
                ¿QUÉ PODEMOS CONECTAR?
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Tus herramientas no deberían trabajar aisladas.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Una integración bien diseñada permite que diferentes
                componentes tecnológicos formen parte de un mismo ecosistema.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {integrationSolutions.map((solution, index) => {
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
                  EL PROBLEMA
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Cuando los sistemas no se hablan, el trabajo se duplica.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Copiar datos de una plataforma a otra, descargar archivos,
                  volver a registrarlos o revisar diferentes sistemas son
                  señales de que puede existir una oportunidad de integración.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Revisar una integración
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
                RESULTADO
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Conectar para trabajar mejor.
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
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  ARQUITECTURA
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Una conexión puede involucrar todo un ecosistema.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Analizamos cada componente para definir cómo debe circular la
                  información y qué papel tendrá cada sistema dentro de la
                  arquitectura.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {architecture.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#64748b]">
                        {item.description}
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
                    Conectamos tecnología mediante estándares conocidos.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Utilizamos diferentes tecnologías y mecanismos de
                    comunicación según las características de cada sistema y
                    los requisitos de la integración.
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

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[#1e6bff]/5 blur-3xl" />

                <div className="relative rounded-3xl border border-[#3da5ff]/15 bg-[#020b18] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                        DEVPASS INTEGRATION
                      </p>

                      <p className="mt-1 text-xs text-[#64748b]">
                        Connected ecosystem
                      </p>
                    </div>

                    <GitBranch
                      size={18}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="relative mt-6">
                    <div className="absolute left-[25px] top-10 h-[160px] w-px bg-gradient-to-b from-[#3da5ff]/40 via-[#3da5ff]/20 to-transparent" />

                    <div className="space-y-4">
                      <div className="relative flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-[#071a34] text-[#3da5ff]">
                          <Globe2 size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Aplicación A
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Sistema origen
                          </p>
                        </div>
                      </div>

                      <div className="relative flex items-center gap-4 rounded-xl border border-[#3da5ff]/15 bg-[#071a34] p-4">
                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                          <Link2 size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            API / Integration Layer
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Intercambio controlado
                          </p>
                        </div>
                      </div>

                      <div className="relative flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-[#071a34] text-[#3da5ff]">
                          <Database size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Sistema B
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748b]">
                            Sistema destino
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.05] pt-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />

                    <span className="text-[10px] text-[#64748b]">
                      INTEGRATION FLOW ACTIVE
                    </span>
                  </div>
                </div>
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
                De sistemas aislados a un ecosistema conectado.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Antes de conectar dos sistemas necesitamos entender qué debe
                ocurrir entre ellos. Diseñamos cada integración pensando en el
                flujo completo.
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
                  Antes de conectar.
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
                <Network size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿TUS SISTEMAS NO SE COMUNICAN?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Conecta tu tecnología.
                <br />
                <span className="devpass-gradient-text">
                  Elimina el trabajo duplicado.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué sistemas utilizas, qué información necesitas
                compartir o qué proceso estás realizando manualmente.
                Analizaremos cómo podría conectarse.
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
                  href="/soluciones"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Ver soluciones
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