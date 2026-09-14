"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MessageSquare,
  Network,
  Play,
  Search,
  ShieldCheck,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const characteristics = [
  {
    number: "01",
    title: "Perciben",
    description:
      "Reciben información mediante instrucciones, datos, contexto, herramientas o eventos del entorno.",
    icon: Search,
  },
  {
    number: "02",
    title: "Razonan",
    description:
      "Analizan el contexto disponible para determinar qué acción podría ayudar a alcanzar el objetivo.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Actúan",
    description:
      "Pueden utilizar herramientas, consultar sistemas o ejecutar acciones definidas por su arquitectura.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Iteran",
    description:
      "Después de una acción pueden observar su resultado y continuar con el siguiente paso del proceso.",
    icon: Workflow,
  },
];

const architecture = [
  {
    number: "01",
    title: "Objetivo",
    description: "Define qué resultado debe conseguir el agente.",
    icon: CircleDot,
  },
  {
    number: "02",
    title: "Modelo",
    description: "Interpreta instrucciones y ayuda a decidir los siguientes pasos.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Memoria y contexto",
    description:
      "Mantiene información necesaria para comprender la tarea y continuar el proceso.",
    icon: Database,
  },
  {
    number: "04",
    title: "Herramientas",
    description:
      "Conecta el agente con APIs, bases de datos, servicios o sistemas externos.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Ejecución",
    description:
      "Realiza acciones y recibe resultados que pueden alimentar el siguiente ciclo.",
    icon: Play,
  },
];

const examples = [
  {
    title: "Agente para desarrollo",
    description:
      "Puede analizar una tarea, consultar archivos del proyecto, proponer cambios y ejecutar determinadas herramientas.",
    icon: Code2,
  },
  {
    title: "Agente de soporte",
    description:
      "Puede interpretar una solicitud, consultar información disponible y preparar una respuesta siguiendo reglas definidas.",
    icon: MessageSquare,
  },
  {
    title: "Agente conectado a datos",
    description:
      "Puede consultar fuentes estructuradas, procesar información y utilizar los resultados para completar una tarea.",
    icon: Database,
  },
];

const risks = [
  "Acciones incorrectas producidas por una interpretación equivocada.",
  "Uso inadecuado de herramientas o permisos.",
  "Respuestas generadas a partir de información incorrecta.",
  "Falta de trazabilidad sobre las decisiones y acciones realizadas.",
  "Dependencia excesiva de resultados que no fueron verificados.",
];

function TerminalBlock({
  label,
  lines,
}: {
  label: string;
  lines: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020711]">
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />

          <span className="ml-2 font-mono text-[9px] tracking-[0.14em] text-[#475569]">
            {label}
          </span>
        </div>

        <Terminal size={12} className="text-[#334155]" />
      </div>

      <div className="space-y-2 px-5 py-5 font-mono text-xs">
        {lines.map((line, index) => (
          <div key={index} className="flex gap-3">
            <span className="select-none text-[#334155]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className={
                index === 0
                  ? "text-[#a7d3ff]"
                  : index === lines.length - 1
                    ? "text-[#3da5ff]"
                    : "text-[#64748b]"
              }
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AgentesInteligenciaArtificialPage() {
  const webPageSchema = createWebPageSchema({
    name: "Agentes de inteligencia artificial | DevPass",
    description:
      "Introducción práctica a los agentes de inteligencia artificial: qué son, cómo funcionan, sus capacidades, arquitectura, herramientas, aplicaciones y principales riesgos.",
    path: "/notes/agentes-inteligencia-artificial",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Notes", path: "/notes" },
    {
      name: "Agentes de inteligencia artificial",
      path: "/notes/agentes-inteligencia-artificial",
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

      <main className="min-h-screen overflow-hidden bg-[#020617]">
        {/* HERO */}
        <section className="relative border-b border-white/[0.06] pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute left-1/2 top-0 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[150px]" />

            <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-[#3da5ff]/5 blur-[120px]" />
          </div>

          <div className="devpass-container relative">
            <Link
              href="/notes"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Volver a Notes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mt-12 max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3da5ff]/15 bg-[#071a34]/70 px-3.5 py-2 font-poppins text-[9px] font-semibold tracking-[0.2em] text-[#94a3b8]">
                  <BrainCircuit size={12} className="text-[#3da5ff]" />
                  DEVPASS · NOTES
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 font-mono text-[9px] tracking-[0.12em] text-[#64748b]">
                  ARTIFICIAL INTELLIGENCE
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                Agentes de{" "}
                <span className="devpass-gradient-text">
                  inteligencia artificial.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Una introducción práctica a los agentes de IA, cómo se
                diferencian de una aplicación tradicional y qué elementos
                intervienen cuando una IA puede utilizar herramientas y
                ejecutar acciones.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[0.08em] text-[#475569]">
                <span className="flex items-center gap-2">
                  <BrainCircuit size={13} className="text-[#3da5ff]" />
                  IA
                </span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>07 SEP 2026</span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>7 MIN DE LECTURA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="relative py-16 sm:py-20">
          <div className="devpass-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,820px)_220px] lg:items-start lg:justify-center">
              <article className="min-w-0">
                {/* INTRO */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="border-l border-[#3da5ff]/25 pl-5 sm:pl-6">
                    <p className="text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Una aplicación que utiliza inteligencia artificial puede
                      responder preguntas, generar contenido o transformar
                      información. Un agente añade una dimensión diferente:
                      puede utilizar herramientas y participar en un proceso de
                      varios pasos para alcanzar un objetivo.
                    </p>

                    <p className="mt-5 text-sm leading-8 text-[#94a3b8] sm:text-base">
                      La idea importante no es simplemente hacer que un modelo
                      responda, sino construir un sistema capaz de interpretar
                      contexto, tomar decisiones dentro de límites definidos y
                      actuar sobre un entorno.
                    </p>
                  </div>
                </motion.div>

                {/* 01 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-16"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      01
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿Qué es un agente de IA?
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Un agente de inteligencia artificial puede entenderse como
                    un sistema que recibe un objetivo, analiza la información
                    disponible, decide qué hacer y utiliza las herramientas
                    necesarias para avanzar hacia ese objetivo.
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#64748b] sm:text-base">
                    Esto permite construir aplicaciones donde el flujo no está
                    completamente definido de antemano. En determinados
                    escenarios, el sistema puede decidir cuál será el siguiente
                    paso basándose en el contexto y en el resultado de sus
                    acciones anteriores.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      label="AGENT FLOW"
                      lines={[
                        "goal = \"resolver una tarea\"",
                        "context → model → tool",
                        "tool result → context",
                        "decision → next action",
                      ]}
                    />
                  </div>
                </motion.section>

                {/* 02 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      02
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Las cuatro capacidades fundamentales
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Aunque las arquitecturas pueden variar, estas cuatro
                      capacidades ayudan a entender el comportamiento general
                      de un agente.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {characteristics.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.number}
                          className="group rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071426]"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={16} />
                            </div>

                            <span className="font-mono text-[9px] text-[#334155]">
                              {item.number}
                            </span>
                          </div>

                          <h3 className="mt-5 font-poppins text-base font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#64748b]">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.section>

                {/* 03 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      03
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿En qué se diferencia de un chatbot?
                    </h2>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a]">
                    <div className="grid md:grid-cols-2">
                      <div className="border-b border-white/[0.06] p-6 md:border-b-0 md:border-r">
                        <div className="flex items-center gap-3">
                          <MessageSquare
                            size={17}
                            className="text-[#64748b]"
                          />

                          <h3 className="font-poppins text-sm font-semibold text-white">
                            Aplicación conversacional
                          </h3>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-[#64748b]">
                          Normalmente recibe una entrada y produce una
                          respuesta. El flujo puede estar definido de manera
                          relativamente fija.
                        </p>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <BrainCircuit
                            size={17}
                            className="text-[#3da5ff]"
                          />

                          <h3 className="font-poppins text-sm font-semibold text-white">
                            Sistema agéntico
                          </h3>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-[#64748b]">
                          Puede interpretar un objetivo, seleccionar
                          herramientas y encadenar acciones para avanzar hacia
                          un resultado.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 04 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      04
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Una arquitectura sencilla
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Una forma útil de visualizar un agente es pensar en un
                      ciclo donde el objetivo y el contexto guían las
                      decisiones, mientras las herramientas permiten actuar.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute left-5 top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-[#3da5ff]/30 via-[#3da5ff]/15 to-transparent sm:block" />

                    <div className="space-y-3">
                      {architecture.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.number}
                            className="relative flex gap-4 rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5"
                          >
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={16} />
                            </div>

                            <div>
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[9px] text-[#3da5ff]">
                                  {item.number}
                                </span>

                                <h3 className="font-poppins text-sm font-semibold text-white">
                                  {item.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-xs leading-6 text-[#64748b]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>

                {/* 05 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      05
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿Dónde pueden utilizarse?
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Los agentes pueden integrarse en diferentes tipos de
                      aplicaciones cuando existe una tarea que requiere
                      contexto, decisiones y herramientas.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {examples.map((example) => {
                      const Icon = example.icon;

                      return (
                        <div
                          key={example.title}
                          className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-[#050d1a] p-6 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071426]"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={17} />
                          </div>

                          <div>
                            <h3 className="font-poppins text-base font-semibold text-white">
                              {example.title}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#64748b]">
                              {example.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.section>

                {/* 06 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      06
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      El punto crítico: las herramientas
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Un modelo por sí solo está limitado a la información que
                    recibe y a las capacidades que tenga disponibles. Las
                    herramientas permiten conectar el sistema con el mundo
                    exterior.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      label="TOOLS"
                      lines={[
                        "agent.receive(goal)",
                        "→ search_database()",
                        "→ call_api()",
                        "→ process_result()",
                        "→ return_answer()",
                      ]}
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["APIs", "Servicios externos"],
                      ["DATABASE", "Información estructurada"],
                      ["SYSTEMS", "Acciones y procesos"],
                    ].map(([title, description]) => (
                      <div
                        key={title}
                        className="rounded-xl border border-white/[0.05] bg-[#050d1a] p-4"
                      >
                        <span className="font-mono text-[9px] tracking-[0.12em] text-[#3da5ff]">
                          {title}
                        </span>

                        <p className="mt-2 text-xs text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 07 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      07
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      No todo debería ser autónomo
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Dar capacidad de acción a un sistema también introduce
                    nuevos riesgos. Un agente que puede consultar información
                    o ejecutar acciones necesita límites claros, permisos
                    adecuados y mecanismos para revisar sus resultados.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-[#3da5ff]/10 bg-[#050d1a]">
                    {risks.map((risk, index) => (
                      <div
                        key={risk}
                        className={`flex gap-4 px-5 py-4 ${
                          index !== risks.length - 1
                            ? "border-b border-white/[0.05]"
                            : ""
                        }`}
                      >
                        <ShieldCheck
                          size={15}
                          className="mt-1 shrink-0 text-[#3da5ff]"
                        />

                        <p className="text-xs leading-6 text-[#64748b]">
                          {risk}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 08 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      08
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Pensar en agentes como sistemas
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Una de las ideas más importantes es no pensar únicamente
                    en el modelo de IA. Un sistema agéntico está formado por
                    múltiples componentes: modelo, contexto, memoria,
                    herramientas, permisos, lógica de control y mecanismos de
                    evaluación.
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#64748b] sm:text-base">
                    Por eso, construir agentes también es un problema de
                    ingeniería de software. La arquitectura, la observabilidad,
                    la seguridad y las pruebas siguen siendo fundamentales.
                  </p>

                  <div className="mt-8 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#050d1a] p-7 sm:p-8">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#020617] text-[#3da5ff]">
                        <Layers3 size={17} />
                      </div>

                      <div>
                        <h3 className="font-poppins text-lg font-semibold text-white">
                          IA + Software + Herramientas
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#64748b]">
                          El valor de un agente no depende solamente de qué tan
                          bueno sea el modelo. También depende de cómo se
                          diseña el sistema que lo rodea.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* CONCLUSION */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#050d1a] p-7 sm:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#020617] text-[#3da5ff]">
                      <GitBranch size={17} />
                    </div>

                    <div>
                      <h2 className="font-poppins text-lg font-semibold text-white">
                        El futuro no es solo generar respuestas
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-[#64748b]">
                        Los agentes amplían las posibilidades de la
                        inteligencia artificial al conectarla con herramientas,
                        datos y procesos. Pero esa capacidad también exige
                        diseñar límites, controles y mecanismos de evaluación.
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#64748b]">
                        La oportunidad está en construir sistemas que no solo
                        sean capaces, sino también observables, controlables y
                        útiles para problemas reales.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* NAVIGATION */}
                <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/notes/buenas-practicas-software"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Note anterior
                  </Link>

                  <Link
                    href="/notes/tf-idf-similitud-coseno"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    Siguiente Note
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="hidden lg:block lg:sticky lg:top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Network size={14} className="text-[#3da5ff]" />

                    <span className="font-poppins text-[10px] font-semibold tracking-[0.18em] text-[#94a3b8]">
                      EN ESTA NOTE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {[
                      ["01", "¿Qué es un agente?"],
                      ["02", "Capacidades"],
                      ["03", "Agente vs chatbot"],
                      ["04", "Arquitectura"],
                      ["05", "Aplicaciones"],
                      ["06", "Herramientas"],
                      ["07", "Riesgos"],
                      ["08", "Sistemas agénticos"],
                    ].map(([number, title]) => (
                      <div
                        key={number}
                        className="group rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-[#3da5ff]">
                            {number}
                          </span>

                          <span className="text-[10px] leading-5 text-[#64748b] group-hover:text-[#94a3b8]">
                            {title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/notes"
                  className="group mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#050d1a] px-4 py-3 transition-colors hover:border-[#3da5ff]/15"
                >
                  <span className="text-[10px] font-medium text-[#64748b]">
                    Ver todas las notas
                  </span>

                  <ChevronRight
                    size={13}
                    className="text-[#475569] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-white/[0.06] bg-[#030a15] py-20">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] via-[#050d1a] to-[#020617] p-8 sm:p-10 lg:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                    DEVPASS · LAB
                  </p>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    De la idea al experimento.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Explora cómo estas ideas pueden convertirse en
                    experimentos, herramientas y proyectos reales.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/lab"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#2b75ff]"
                  >
                    Explorar Lab
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-semibold text-[#a7b4c8] transition-colors hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Ver proyectos
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}