"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  FlaskConical,
  GitBranch,
  Layers3,
  Lightbulb,
  Microscope,
  Network,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const areas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description:
      "Exploración de modelos, agentes, automatización inteligente y nuevas formas de integrar IA en soluciones reales.",
    tags: ["IA", "Agentes", "LLM"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automatización",
    description:
      "Pruebas de flujos automatizados para reducir tareas repetitivas y conectar procesos, herramientas y sistemas.",
    tags: ["Workflows", "APIs", "Procesos"],
  },
  {
    number: "03",
    icon: Bot,
    title: "Agentes inteligentes",
    description:
      "Experimentación con sistemas capaces de razonar, utilizar herramientas y ejecutar tareas de forma más autónoma.",
    tags: ["Agents", "Tools", "RAG"],
  },
  {
    number: "04",
    icon: Network,
    title: "Sistemas",
    description:
      "Investigación y pruebas alrededor de arquitecturas, servicios, integración de sistemas y tecnologías distribuidas.",
    tags: ["Arquitectura", "Linux", "Backend"],
  },
];

const experiments = [
  {
    number: "01",
    status: "EXPLORACIÓN",
    icon: Sparkles,
    title: "IA aplicada al desarrollo",
    description:
      "Explorar cómo la inteligencia artificial puede incorporarse al ciclo de desarrollo para asistir en análisis, generación, testing y documentación.",
  },
  {
    number: "02",
    status: "EN INVESTIGACIÓN",
    icon: Bot,
    title: "Agentes autónomos",
    description:
      "Analizar arquitecturas agentic y experimentar con sistemas capaces de trabajar con herramientas y ejecutar tareas de manera coordinada.",
  },
  {
    number: "03",
    status: "EXPERIMENTAL",
    icon: GitBranch,
    title: "Automatización de procesos",
    description:
      "Diseñar pequeños prototipos orientados a conectar servicios y convertir procesos manuales en flujos reproducibles.",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React",
  "Node.js",
  "SQL",
  "Linux",
  "Git",
  "IA",
  "Data Science",
  "APIs",
];

const webPageSchema = createWebPageSchema({
  name: "DevPass Lab | Experimentos de IA, Software y Sistemas",
  description:
    "DevPass Lab es un espacio de experimentación tecnológica dedicado a inteligencia artificial, automatización, agentes inteligentes, software, sistemas y prototipos.",
  path: "/lab",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "DevPass Lab", path: "/lab" },
]);

export default function LabPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
        <main className="overflow-hidden bg-[#020617] text-[#f8faff]">
        <Navbar />
        {/* HERO */}
        <section className="relative flex min-h-[88vh] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#1e6bff]/10 blur-[140px]" />
            <div className="absolute bottom-[-15%] right-[-5%] h-[450px] w-[450px] rounded-full bg-[#3da5ff]/10 blur-[140px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(167,211,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,1) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="devpass-container relative z-10 py-28">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />
                  <span className="text-xs font-semibold tracking-[0.28em] text-[#3da5ff]">
                    DEVPASS LAB
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Donde las ideas
                  <br />
                  se convierten en{" "}
                  <span className="devpass-gradient-text">experimentos.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Un espacio para explorar tecnologías, probar nuevas ideas y
                  construir prototipos antes de convertirlos en soluciones
                  reales.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#experimentos"
                    className="devpass-gradient group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Explorar laboratorio
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/25 hover:bg-[#071a34]"
                  >
                    Ver proyectos
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.06] pt-6">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#64748b]">
                      STATUS
                    </p>
                    <p className="mt-1 text-sm text-[#cbd5e1]">
                      Experimentando
                    </p>
                  </div>

                  <div className="hidden h-7 w-px bg-white/[0.08] sm:block" />

                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#64748b]">
                      FOCUS
                    </p>
                    <p className="mt-1 text-sm text-[#cbd5e1]">
                      IA · Software · Systems
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* LAB VISUAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative mx-auto w-full max-w-[520px]"
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-[12%] rounded-full border border-[#3da5ff]/10" />
                  <div className="absolute inset-[23%] rounded-full border border-[#3da5ff]/10" />
                  <div className="absolute inset-[34%] rounded-full border border-[#3da5ff]/10" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full bg-[#1e6bff]/10 blur-[80px]" />

                    <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[#3da5ff]/20 bg-[#071a34]/80 shadow-[0_0_80px_rgba(30,107,255,0.12)] backdrop-blur-xl">
                      <div className="absolute inset-3 rounded-[1.5rem] border border-white/[0.05]" />

                      <FlaskConical
                        size={54}
                        strokeWidth={1.3}
                        className="relative z-10 text-[#3da5ff]"
                      />
                    </div>
                  </div>

                  <div className="absolute left-[8%] top-[24%] flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#020b18]/80 px-3 py-2 backdrop-blur-xl">
                    <Cpu size={14} className="text-[#3da5ff]" />
                    <span className="text-[10px] font-medium tracking-wider text-[#94a3b8]">
                      AI
                    </span>
                  </div>

                  <div className="absolute right-[4%] top-[35%] flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#020b18]/80 px-3 py-2 backdrop-blur-xl">
                    <Code2 size={14} className="text-[#3da5ff]" />
                    <span className="text-[10px] font-medium tracking-wider text-[#94a3b8]">
                      CODE
                    </span>
                  </div>

                  <div className="absolute bottom-[20%] left-[13%] flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#020b18]/80 px-3 py-2 backdrop-blur-xl">
                    <Network size={14} className="text-[#3da5ff]" />
                    <span className="text-[10px] font-medium tracking-wider text-[#94a3b8]">
                      SYSTEMS
                    </span>
                  </div>

                  <div className="absolute bottom-[12%] right-[12%] flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#020b18]/80 px-3 py-2 backdrop-blur-xl">
                    <Terminal size={14} className="text-[#3da5ff]" />
                    <span className="text-[10px] font-medium tracking-wider text-[#94a3b8]">
                      BUILD
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className="border-b border-white/[0.05] py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 max-w-2xl"
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                01 · ÁREAS DE EXPLORACIÓN
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Tecnología que vale la pena experimentar.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
                El laboratorio reúne las áreas donde DevPass investiga,
                construye prototipos y prueba nuevas posibilidades.
              </p>
            </motion.div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
              {areas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    key={area.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group bg-[#020b18] p-7 transition-colors duration-300 hover:bg-[#071a34]/80 sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <span className="font-mono text-[11px] text-[#334155]">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-xl font-semibold text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748b] transition-colors duration-300 group-hover:text-[#94a3b8]">
                      {area.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.06] px-2.5 py-1 text-[10px] font-medium tracking-wide text-[#64748b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIMENTS */}
        <section id="experimentos" className="py-28">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                  02 · EXPERIMENTOS
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Probar.
                  <br />
                  Medir.
                  <br />
                  Aprender.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#64748b]">
                  El objetivo no es experimentar por experimentar. Cada prueba
                  busca entender qué funciona, qué no y qué puede convertirse
                  en una solución útil.
                </p>

                <div className="mt-8 flex items-center gap-3 text-xs text-[#64748b]">
                  <span className="h-2 w-2 rounded-full bg-[#3da5ff] shadow-[0_0_12px_rgba(61,165,255,0.8)]" />
                  Investigación continua
                </div>
              </motion.div>

              <div className="space-y-3">
                {experiments.map((experiment, index) => {
                  const Icon = experiment.icon;

                  return (
                    <motion.article
                      key={experiment.number}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50 sm:p-7"
                    >
                      <div className="flex gap-5">
                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-[#071a34] text-[#3da5ff] sm:flex">
                          <Icon size={18} strokeWidth={1.6} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                              {experiment.status}
                            </span>

                            <span className="font-mono text-[10px] text-[#334155]">
                              {experiment.number}
                            </span>
                          </div>

                          <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                            {experiment.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                            {experiment.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="border-y border-white/[0.05] bg-[#030b18] py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                03 · FILOSOFÍA DEL LAB
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                La tecnología se aprende construyendo.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
                Investigar, construir un prototipo, observar sus resultados y
                documentar lo aprendido. Ese ciclo permite convertir
                curiosidad técnica en conocimiento práctico.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-4">
              {[
                {
                  number: "01",
                  icon: Lightbulb,
                  title: "Idea",
                  text: "Identificar una posibilidad.",
                },
                {
                  number: "02",
                  icon: Code2,
                  title: "Construir",
                  text: "Convertirla en un prototipo.",
                },
                {
                  number: "03",
                  icon: Microscope,
                  title: "Evaluar",
                  text: "Probar y observar resultados.",
                },
                {
                  number: "04",
                  icon: Layers3,
                  title: "Documentar",
                  text: "Convertir experiencia en conocimiento.",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="relative rounded-2xl border border-white/[0.06] bg-[#020b18] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={20} className="text-[#3da5ff]" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-[#334155]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-base font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#64748b]">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="py-28">
          <div className="devpass-container">
            <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                  04 · STACK EXPERIMENTAL
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Herramientas para construir.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#64748b]">
                  Tecnologías utilizadas para desarrollar, investigar y
                  experimentar dentro del ecosistema DevPass.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3 border-b border-white/[0.06] pb-5">
                  <Terminal size={16} className="text-[#3da5ff]" />
                  <span className="font-mono text-xs text-[#64748b]">
                    devpass@lab:~$ stack --list
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[#3da5ff]/10 bg-[#071a34]/60 px-3.5 py-2 text-xs font-medium text-[#94a3b8] transition-all duration-300 hover:border-[#3da5ff]/25 hover:bg-[#0b2548] hover:text-[#cbd5e1]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/[0.05] py-24">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-[#3da5ff]/15 bg-[#071a34] px-7 py-14 text-center sm:px-12"
            >
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[100px]" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                  05 · SIGUIENTE EXPERIMENTO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  ¿Tienes una idea que vale la pena construir?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#94a3b8]">
                  Una idea puede empezar como un experimento y terminar
                  convirtiéndose en una solución real.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contacto"
                    className="devpass-gradient group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Hablemos
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    Ver Insights
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}