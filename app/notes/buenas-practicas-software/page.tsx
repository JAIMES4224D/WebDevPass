"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  GitBranch,
  Layers3,
  ListChecks,
  Package,
  ShieldCheck,
  TestTube2,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const principles = [
  {
    number: "01",
    title: "Nombres que expliquen intención",
    description:
      "Un buen nombre reduce la necesidad de comentarios y hace que el código sea más fácil de entender.",
    icon: Code2,
    exampleBad: "const x = getData();",
    exampleGood: "const activeUsers = getActiveUsers();",
  },
  {
    number: "02",
    title: "Responsabilidades claras",
    description:
      "Cada módulo, función o componente debería tener una responsabilidad concreta y fácil de identificar.",
    icon: Layers3,
    exampleBad: "processEverything();",
    exampleGood: "validateUser();",
  },
  {
    number: "03",
    title: "Evitar duplicación innecesaria",
    description:
      "Cuando una misma lógica aparece repetida en distintos lugares, mantenerla se vuelve más difícil.",
    icon: Package,
    exampleBad: "validateUser() + validateUserCopy()",
    exampleGood: "validateUser()",
  },
  {
    number: "04",
    title: "Control de versiones",
    description:
      "Git permite registrar cambios, trabajar con ramas y recuperar el historial cuando un cambio produce problemas.",
    icon: GitBranch,
    exampleBad: "cambio-final-v2-definitivo.zip",
    exampleGood: "git commit -m \"fix: validate user input\"",
  },
  {
    number: "05",
    title: "Validar antes de desplegar",
    description:
      "El código debería pasar por comprobaciones antes de llegar a un entorno donde pueda afectar a usuarios reales.",
    icon: TestTube2,
    exampleBad: "Editar → desplegar directamente",
    exampleGood: "Editar → probar → revisar → desplegar",
  },
  {
    number: "06",
    title: "Seguridad desde el desarrollo",
    description:
      "La seguridad no debería aparecer al final del proyecto. Validación, autenticación y manejo de datos deben considerarse desde el inicio.",
    icon: ShieldCheck,
    exampleBad: "SQL construido directamente",
    exampleGood: "Consulta parametrizada",
  },
];

const workflow = [
  ["01", "Entender", "Definir qué problema estamos resolviendo."],
  ["02", "Diseñar", "Separar responsabilidades y decisiones."],
  ["03", "Construir", "Implementar de forma incremental."],
  ["04", "Probar", "Comprobar que el comportamiento sea correcto."],
  ["05", "Revisar", "Detectar problemas antes de integrar."],
  ["06", "Mantener", "Mejorar el sistema a medida que evoluciona."],
];

const checklist = [
  "¿El código se entiende sin tener que explicarlo línea por línea?",
  "¿Cada componente tiene una responsabilidad clara?",
  "¿Existe lógica duplicada que pueda simplificarse?",
  "¿Los errores están siendo controlados correctamente?",
  "¿Las entradas del usuario están siendo validadas?",
  "¿El cambio fue probado antes de integrarse?",
  "¿El commit explica claramente qué cambió?",
  "¿La solución será mantenible dentro de unos meses?",
];

function CodeComparison({
  bad,
  good,
}: {
  bad: string;
  good: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-red-500/[0.08] bg-[#090b12]">
        <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="font-mono text-[9px] tracking-[0.12em] text-[#475569]">
            EVITAR
          </span>
        </div>

        <div className="overflow-x-auto px-4 py-4">
          <code className="whitespace-nowrap font-mono text-[11px] text-[#94a3b8]">
            {bad}
          </code>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#3da5ff]/10 bg-[#050d1a]">
        <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#3da5ff]/70" />
          <span className="font-mono text-[9px] tracking-[0.12em] text-[#475569]">
            PREFERIR
          </span>
        </div>

        <div className="overflow-x-auto px-4 py-4">
          <code className="whitespace-nowrap font-mono text-[11px] text-[#a7d3ff]">
            {good}
          </code>
        </div>
      </div>
    </div>
  );
}

export default function BuenasPracticasSoftwarePage() {
  const webPageSchema = createWebPageSchema({
    name: "Buenas prácticas para proyectos de software | DevPass",
    description:
      "Apuntes sobre buenas prácticas para proyectos de software: organización, claridad del código, responsabilidades, control de versiones, pruebas, seguridad y mantenimiento.",
    path: "/notes/buenas-practicas-software",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Notes", path: "/notes" },
    {
      name: "Buenas prácticas para proyectos de software",
      path: "/notes/buenas-practicas-software",
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

            <div className="absolute left-1/2 top-0 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[150px]" />
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
                  <Code2 size={12} className="text-[#3da5ff]" />
                  DEVPASS · NOTES
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 font-mono text-[9px] tracking-[0.12em] text-[#64748b]">
                  SOFTWARE ENGINEERING
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                Buenas prácticas para{" "}
                <span className="devpass-gradient-text">
                  proyectos de software.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Apuntes sobre organización, claridad, mantenimiento y
                decisiones que ayudan a construir software que pueda seguir
                evolucionando.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[0.08em] text-[#475569]">
                <span className="flex items-center gap-2">
                  <Code2 size={13} className="text-[#3da5ff]" />
                  DEV
                </span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>09 SEP 2026</span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>6 MIN DE LECTURA</span>
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
                      Construir software no consiste únicamente en conseguir
                      que una aplicación funcione. También importa cómo está
                      organizada, qué tan fácil resulta entenderla y cuánto
                      esfuerzo requerirá modificarla cuando aparezcan nuevos
                      requisitos.
                    </p>

                    <p className="mt-5 text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Estas son algunas prácticas que considero especialmente
                      útiles cuando un proyecto empieza a crecer.
                    </p>
                  </div>
                </motion.div>

                {/* PRINCIPLES */}
                <div className="mt-16 space-y-14">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;

                    return (
                      <motion.section
                        key={principle.number}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-70px" }}
                        transition={{
                          duration: 0.55,
                          delay: Math.min(index * 0.04, 0.2),
                        }}
                      >
                        <div className="mb-7 flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={17} />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                                {principle.number}
                              </span>

                              <h2 className="font-poppins text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                                {principle.title}
                              </h2>
                            </div>

                            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64748b]">
                              {principle.description}
                            </p>
                          </div>
                        </div>

                        <CodeComparison
                          bad={principle.exampleBad}
                          good={principle.exampleGood}
                        />
                      </motion.section>
                    );
                  })}
                </div>

                {/* WORKFLOW */}
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
                      Un flujo de trabajo sencillo
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Las buenas prácticas funcionan mejor cuando forman parte
                      del proceso habitual de desarrollo y no como una tarea
                      adicional al final del proyecto.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {workflow.map(([number, title, description]) => (
                      <div
                        key={number}
                        className="group rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071426]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] tracking-[0.15em] text-[#3da5ff]">
                            {number}
                          </span>

                          <Check
                            size={14}
                            className="text-[#334155] transition-colors group-hover:text-[#3da5ff]"
                          />
                        </div>

                        <h3 className="mt-5 font-poppins text-sm font-semibold text-white">
                          {title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* CHECKLIST */}
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
                      Checklist antes de cerrar un cambio
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Una revisión rápida puede ayudar a detectar problemas
                      antes de que se conviertan en deuda técnica.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a]">
                    {checklist.map((item, index) => (
                      <div
                        key={item}
                        className={`flex gap-4 px-5 py-4 ${
                          index !== checklist.length - 1
                            ? "border-b border-white/[0.05]"
                            : ""
                        }`}
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#3da5ff]/15 bg-[#071a34]">
                          <span className="font-mono text-[8px] text-[#3da5ff]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="text-xs leading-6 text-[#64748b]">
                          {item}
                        </p>
                      </div>
                    ))}
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
                      <Wrench size={17} />
                    </div>

                    <div>
                      <h2 className="font-poppins text-lg font-semibold text-white">
                        El objetivo no es escribir más código
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-[#64748b]">
                        Una buena práctica debería reducir la complejidad,
                        facilitar el mantenimiento y permitir que otra persona
                        pueda entender el proyecto sin depender completamente
                        de quien lo construyó.
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#64748b]">
                        Para mí, el software de calidad es aquel que no solo
                        funciona hoy, sino que también puede seguir
                        evolucionando mañana.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* NAVIGATION */}
                <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/notes/linux-comandos"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Note anterior
                  </Link>

                  <Link
                    href="/notes/agentes-inteligencia-artificial"
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
                    <ListChecks size={14} className="text-[#3da5ff]" />

                    <span className="font-poppins text-[10px] font-semibold tracking-[0.18em] text-[#94a3b8]">
                      EN ESTA NOTE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {principles.map((principle) => (
                      <div
                        key={principle.number}
                        className="group rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-[#3da5ff]">
                            {principle.number}
                          </span>

                          <span className="text-[10px] leading-5 text-[#64748b] group-hover:text-[#94a3b8]">
                            {principle.title}
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

                  <ArrowRight
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
                    DEVPASS · NOTES
                  </p>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    El conocimiento se construye paso a paso.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Explora más apuntes sobre desarrollo, sistemas,
                    inteligencia artificial y tecnología.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/notes"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#2b75ff]"
                  >
                    Explorar Notes
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