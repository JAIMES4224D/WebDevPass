"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
  Workflow,
  XCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createArticleSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const sections = [
  {
    number: "01",
    title: "El cambio en el QA",
    id: "cambio-qa",
  },
  {
    number: "02",
    title: "Del testing automatizado al testing con IA",
    id: "testing-ia",
  },
  {
    number: "03",
    title: "¿Qué son los agentes autónomos?",
    id: "agentes-autonomos",
  },
  {
    number: "04",
    title: "Agentes autónomos aplicados al QA",
    id: "agentes-qa",
  },
  {
    number: "05",
    title: "Ventajas y limitaciones",
    id: "ventajas-limitaciones",
  },
  {
    number: "06",
    title: "El futuro del QA",
    id: "futuro-qa",
  },
];

export default function TestingConIA() {
  const webPageSchema = createWebPageSchema({
    name:
      "Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos",
    description:
      "Artículo sobre cómo la inteligencia artificial y los agentes autónomos están transformando el testing de software, incluyendo generación de pruebas, análisis de resultados, regresión, seguridad y evaluación de sistemas de IA.",
    path: "/blog/testing-con-ia",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Insights",
      path: "/blog",
    },
    {
      name: "Testing con IA",
      path: "/blog/testing-con-ia",
    },
  ]);

  const articleSchema = createArticleSchema({
    title:
      "Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos",
    description:
      "Artículo sobre cómo la inteligencia artificial y los agentes autónomos están transformando el testing de software, incluyendo generación de pruebas, análisis de resultados, regresión, seguridad y evaluación de sistemas de IA.",
    path: "/blog/testing-con-ia",
    image: "/images/blog/testing-con-ia/portada.png",
    datePublished: "2026-09-11",
  });
  return (
    <>
       <JsonLd
          data={[
            webPageSchema,
            breadcrumbSchema,
            articleSchema,
          ]}
        />

      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        {/* =========================================================
            ATMÓSFERA
        ========================================================= */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-[10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#1e6bff]/[0.06] blur-[140px]" />
          <div className="absolute right-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#3da5ff]/[0.04] blur-[160px]" />
        </div>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="devpass-container relative py-20 md:py-28">
            <Link
              href="/blog"
              className="mb-12 inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft size={15} />
              Volver a Insights
            </Link>

            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 flex flex-wrap items-center gap-3"
              >
                <span className="rounded-full border border-[#3da5ff]/20 bg-[#3da5ff]/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                  TESTING · IA
                </span>

                <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <Clock3 size={13} />
                  8 min de lectura
                </span>

                <span className="text-xs text-[#475569]">·</span>

                <span className="text-xs text-[#64748b]">
                  11 septiembre 2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-5xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
              >
                Testing con IA:
                <span className="devpass-gradient-text block">
                  cómo están cambiando el QA los agentes autónomos
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 max-w-3xl text-base leading-8 text-[#94a3b8] md:text-lg"
              >
                La inteligencia artificial está transformando la forma en que
                diseñamos, ejecutamos y analizamos pruebas de software. Pero
                incorporar IA al QA no significa simplemente generar más casos
                de prueba: implica replantear cómo evaluamos sistemas cada vez
                más dinámicos, probabilísticos y autónomos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34]">
                  <Bot size={17} className="text-[#3da5ff]" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">DevPass</p>
                  <p className="text-[11px] text-[#64748b]">
                    Technology · Development · Innovation
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            COVER
        ========================================================= */}
        <section className="devpass-container py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#061426]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1e6bff]/10 via-transparent to-[#3da5ff]/10" />

            <Image
              src="/images/blog/testing-con-ia/portada.png"
              alt="Testing con IA y agentes autónomos"
              width={1600}
              height={900}
              priority
              className="relative z-10 h-auto w-full object-cover"
            />
          </motion.div>
        </section>

        {/* =========================================================
            ARTICLE
        ========================================================= */}
        <section className="devpass-container pb-24 pt-8 md:pb-32">
          <div className="grid gap-14 lg:grid-cols-[220px_minmax(0,760px)_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  EN ESTE ARTÍCULO
                </p>

                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.025]"
                    >
                      <span className="mt-0.5 text-[10px] font-semibold text-[#334155] transition-colors group-hover:text-[#3da5ff]">
                        {section.number}
                      </span>

                      <span className="text-xs leading-5 text-[#64748b] transition-colors group-hover:text-[#a7d3ff]">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ARTICLE BODY */}
            <article className="min-w-0">
              {/* INTRO */}
              <div className="mb-14">
                <p className="text-lg leading-9 text-[#cbd5e1] md:text-xl">
                  Durante años, automatizar pruebas significó principalmente
                  escribir scripts capaces de ejecutar una serie de pasos
                  previamente definidos. Ese enfoque sigue siendo fundamental,
                  pero el desarrollo moderno está introduciendo sistemas que
                  pueden analizar información, tomar decisiones y ejecutar
                  acciones con cierto grado de autonomía.
                </p>

                <p className="mt-7 text-base leading-8 text-[#94a3b8]">
                  Esto cambia la conversación alrededor del{" "}
                  <strong className="font-medium text-[#dbeafe]">
                    Quality Assurance
                  </strong>
                  . Ya no se trata únicamente de automatizar la ejecución de
                  pruebas, sino también de utilizar modelos de IA para apoyar
                  actividades como generación de casos, análisis de resultados,
                  identificación de defectos, documentación y evaluación de
                  escenarios complejos.
                </p>

                <InfoCard
                  icon={<Sparkles size={18} />}
                  title="Una diferencia importante"
                  text="La IA puede aumentar la capacidad del equipo de QA, pero no elimina la necesidad de criterios de calidad, diseño de pruebas, validación humana y control del riesgo."
                />
              </div>

              {/* =====================================================
                  01
              ===================================================== */}
              <ArticleSection
                id="cambio-qa"
                number="01"
                title="El cambio en el QA"
                eyebrow="EVOLUCIÓN DEL TESTING"
              >
                <p>
                  El software actual está compuesto por servicios, APIs,
                  interfaces web, aplicaciones móviles, sistemas distribuidos
                  y, cada vez con mayor frecuencia, componentes basados en
                  inteligencia artificial.
                </p>

                <p>
                  En este contexto, el QA deja de ser una actividad situada
                  exclusivamente al final del ciclo de desarrollo. La calidad
                  comienza a evaluarse desde el diseño de requisitos y continúa
                  durante la implementación, integración, despliegue y
                  operación.
                </p>

                <p>
                  El enfoque moderno también incorpora una idea importante:
                  <strong className="text-[#dbeafe]">
                    {" "}
                    no todos los sistemas se comportan de manera determinista.
                  </strong>
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <InfoCard
                    icon={<GitBranch size={17} />}
                    title="Código"
                    text="Pruebas unitarias, integración, regresión y calidad estructural."
                  />

                  <InfoCard
                    icon={<Workflow size={17} />}
                    title="Sistemas"
                    text="Flujos completos, APIs, servicios, datos y comportamiento distribuido."
                  />

                  <InfoCard
                    icon={<Bot size={17} />}
                    title="IA"
                    text="Evaluación de respuestas, contexto, variabilidad, seguridad y comportamiento."
                  />
                </div>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://test.istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                    label="ISTQB CT-AI"
                  />{" "}
                  aborda precisamente la necesidad de considerar características
                  particulares de los sistemas de IA, incluyendo su
                  comportamiento probabilístico y la necesidad de estrategias
                  específicas de evaluación.
                </p>
              </ArticleSection>

              {/* =====================================================
                  02
              ===================================================== */}
              <ArticleSection
                id="testing-ia"
                number="02"
                title="Del testing automatizado al testing con IA"
                eyebrow="AUTOMATIZACIÓN INTELIGENTE"
              >
                <p>
                  La automatización tradicional ejecuta instrucciones que han
                  sido definidas previamente por una persona. Un sistema basado
                  en IA puede, en cambio, utilizar información del contexto para
                  proponer acciones o generar nuevos artefactos de prueba.
                </p>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://istqb.org/?download_id=6295&sdm_process_download=1"
                    label="syllabus CT-GenAI de ISTQB"
                  />{" "}
                  contempla aplicaciones de GenAI en actividades como la
                  generación de criterios de aceptación, casos de prueba,
                  scripts, datos sintéticos, documentación y análisis de
                  defectos.
                </p>

                <div className="my-10 rounded-2xl border border-[#3da5ff]/15 bg-[#061426] p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                      <Workflow size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Flujo tradicional
                      </p>
                      <p className="text-xs text-[#64748b]">
                        Instrucciones definidas previamente
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-4">
                    <FlowStep number="01" text="Requisito" />
                    <FlowStep number="02" text="Caso de prueba" />
                    <FlowStep number="03" text="Ejecución" />
                    <FlowStep number="04" text="Resultado" />
                  </div>
                </div>

                <p>
                  Con IA aparece una capa adicional entre estos pasos. El
                  sistema puede analizar el requisito, sugerir escenarios,
                  generar datos o adaptar determinados casos según la
                  información disponible.
                </p>

                <p>
                  Esto no significa que el proceso se vuelva completamente
                  autónomo. La calidad del resultado depende del contexto
                  proporcionado, del modelo utilizado, de los criterios de
                  evaluación y de la supervisión aplicada.
                </p>
              </ArticleSection>

              {/* =====================================================
                  03
              ===================================================== */}
              <ArticleSection
                id="agentes-autonomos"
                number="03"
                title="¿Qué son los agentes autónomos?"
                eyebrow="AGENTIC AI"
              >
                <p>
                  Un agente de IA puede entenderse como un sistema que combina
                  un modelo de inteligencia artificial con instrucciones,
                  contexto, herramientas y mecanismos para ejecutar acciones.
                </p>

                <p>
                  A diferencia de una interacción aislada con un chatbot, un
                  agente puede trabajar mediante ciclos de observación,
                  razonamiento, acción y evaluación.
                </p>

                <div className="my-10 rounded-3xl border border-white/[0.07] bg-[#040d1b] p-7 md:p-10">
                  <div className="mb-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                      <Bot size={25} />
                    </div>

                    <h3 className="mt-4 font-poppins text-lg font-semibold text-white">
                      Ciclo básico de un agente
                    </h3>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4">
                    <AgentNode
                      number="01"
                      title="Observa"
                      text="Recibe contexto y datos."
                    />

                    <AgentNode
                      number="02"
                      title="Analiza"
                      text="Interpreta la situación."
                    />

                    <AgentNode
                      number="03"
                      title="Actúa"
                      text="Ejecuta una acción."
                    />

                    <AgentNode
                      number="04"
                      title="Evalúa"
                      text="Comprueba el resultado."
                    />
                  </div>
                </div>

                <p>
                  Este comportamiento es especialmente relevante para QA
                  porque introduce una nueva pregunta:{" "}
                  <strong className="text-white">
                    ¿cómo probamos un sistema que también puede decidir qué
                    hacer?
                  </strong>
                </p>

                <p>
                  La literatura sobre testing de agentes autónomos ya había
                  identificado este desafío antes de la actual ola de GenAI:
                  sistemas con objetivos o conocimiento cambiantes pueden
                  producir comportamientos diferentes ante situaciones
                  similares.
                </p>

                <p>
                  Un ejemplo clásico es el trabajo sobre{" "}
                  <ExternalSource
                    href="https://kclpure.kcl.ac.uk/portal/en/publications/evolutionary-testing-of-autonomous-software-agents"
                    label="evolutionary testing of autonomous software agents"
                  />
                  , que estudia precisamente las dificultades asociadas a
                  probar software autónomo.
                </p>
              </ArticleSection>

              {/* =====================================================
                  04
              ===================================================== */}
              <ArticleSection
                id="agentes-qa"
                number="04"
                title="Agentes autónomos aplicados al QA"
                eyebrow="QA AGENTIC"
              >
                <p>
                  Cuando un agente se incorpora al proceso de QA, su función no
                  tiene por qué limitarse a generar código de pruebas. Puede
                  participar en diferentes etapas del ciclo de calidad.
                </p>

                <div className="my-10 space-y-3">
                  <FeatureRow
                    icon={<Target size={17} />}
                    title="Análisis de requisitos"
                    text="Identificación de condiciones, escenarios y posibles casos límite."
                  />

                  <FeatureRow
                    icon={<FlaskConical size={17} />}
                    title="Generación de pruebas"
                    text="Propuesta de casos, datos y scripts a partir del contexto disponible."
                  />

                  <FeatureRow
                    icon={<TriangleAlert size={17} />}
                    title="Análisis de fallos"
                    text="Clasificación y exploración de resultados para detectar patrones."
                  />

                  <FeatureRow
                    icon={<ShieldCheck size={17} />}
                    title="Pruebas de seguridad"
                    text="Exploración de entradas y comportamientos potencialmente peligrosos."
                  />

                  <FeatureRow
                    icon={<Layers3 size={17} />}
                    title="Regresión"
                    text="Apoyo en la identificación de escenarios que deberían volver a ejecutarse."
                  />
                </div>

                <p>
                  Un estudio de mapeo sistemático publicado en 2026 sobre
                  software quality assurance en la era de la IA agéntica
                  identifica la generación de pruebas y la gestión de defectos
                  entre las áreas donde se concentra parte importante de la
                  investigación actual.
                </p>

                <p>
                  Sin embargo, el mismo trabajo señala desafíos relacionados
                  con escalabilidad, generalización y transparencia. Es decir,
                  todavía existe una distancia entre demostrar que una técnica
                  funciona en un escenario y demostrar que funciona de forma
                  consistente en diferentes proyectos.
                </p>

                <div className="my-10 rounded-2xl border border-[#3da5ff]/15 bg-[#071a34]/50 p-6 md:p-8">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                    IDEA CLAVE
                  </p>

                  <p className="mt-3 font-poppins text-xl font-medium leading-8 text-white">
                    El agente no sustituye al proceso de QA. Se convierte en
                    una nueva pieza dentro del proceso.
                  </p>
                </div>

                <p>
                  Esta distinción es importante porque permite integrar estas
                  tecnologías dentro de arquitecturas reales en lugar de
                  tratarlas como una solución mágica.
                </p>

                <p>
                  En DevPass, este tipo de experimentación forma parte de{" "}
                  <Link
                    href="/lab"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    nuestro Lab
                  </Link>
                  , donde exploramos agentes, automatización y arquitecturas
                  distribuidas.
                </p>
              </ArticleSection>

              {/* =====================================================
                  05
              ===================================================== */}
              <ArticleSection
                id="ventajas-limitaciones"
                number="05"
                title="Ventajas y limitaciones"
                eyebrow="LO QUE REALMENTE CAMBIA"
              >
                <p>
                  La principal ventaja de incorporar IA al testing no es
                  simplemente producir más pruebas. El verdadero potencial está
                  en reducir trabajo repetitivo y ayudar a los equipos a
                  explorar espacios de prueba más amplios.
                </p>

                <div className="my-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-300"
                      />

                      <h3 className="font-poppins text-sm font-semibold text-white">
                        Ventajas
                      </h3>
                    </div>

                    <ul className="mt-6 space-y-4 text-sm leading-7 text-[#94a3b8]">
                      <li>• Generación rápida de escenarios.</li>
                      <li>• Reducción de tareas repetitivas.</li>
                      <li>• Apoyo al análisis de grandes volúmenes de resultados.</li>
                      <li>• Exploración de casos límite.</li>
                      <li>• Generación y transformación de datos de prueba.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-amber-400/10 bg-amber-400/[0.025] p-6">
                    <div className="flex items-center gap-3">
                      <XCircle size={18} className="text-amber-300" />

                      <h3 className="font-poppins text-sm font-semibold text-white">
                        Limitaciones
                      </h3>
                    </div>

                    <ul className="mt-6 space-y-4 text-sm leading-7 text-[#94a3b8]">
                      <li>• Resultados incorrectos o incompletos.</li>
                      <li>• Dependencia de la calidad del contexto.</li>
                      <li>• Comportamiento probabilístico.</li>
                      <li>• Riesgos de seguridad y privacidad.</li>
                      <li>• Necesidad de validación humana.</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Este último punto es especialmente importante. Un resultado
                  generado por IA no debe considerarse automáticamente
                  verdadero solo porque tenga una apariencia técnicamente
                  correcta.
                </p>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                    label="NIST AI RMF Generative AI Profile"
                  />{" "}
                  plantea precisamente la necesidad de gestionar riesgos
                  relacionados con sistemas de IA generativa durante su ciclo de
                  vida.
                </p>

                <p>
                  Por ello, un proceso profesional de QA debería combinar
                  automatización, evaluación sistemática, métricas y revisión
                  humana.
                </p>

                <InfoCard
                  icon={<ShieldCheck size={18} />}
                  title="QA + IA ≠ QA sin humanos"
                  text="La IA puede ampliar la capacidad de evaluación, pero las decisiones sobre riesgo, aceptación y calidad siguen necesitando criterios explícitos."
                />
              </ArticleSection>

              {/* =====================================================
                  06
              ===================================================== */}
              <ArticleSection
                id="futuro-qa"
                number="06"
                title="El futuro del QA"
                eyebrow="HACIA DÓNDE VAMOS"
              >
                <p>
                  El siguiente paso no parece ser simplemente sustituir
                  automatización tradicional por agentes. La tendencia más
                  interesante es combinar diferentes capas de evaluación.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <InfoCard
                    icon={<GitBranch size={17} />}
                    title="Automatización"
                    text="Scripts, pipelines, regresión y pruebas repetibles."
                  />

                  <InfoCard
                    icon={<Bot size={17} />}
                    title="Agentes"
                    text="Planificación, exploración y ejecución contextual."
                  />

                  <InfoCard
                    icon={<ShieldCheck size={17} />}
                    title="Gobernanza"
                    text="Riesgo, trazabilidad, seguridad y evaluación continua."
                  />
                </div>

                <p>
                  El enfoque de{" "}
                  <ExternalSource
                    href="https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems"
                    label="Test, Evaluation, Verification and Validation"
                  />{" "}
                  también está ganando relevancia a medida que los sistemas de
                  IA se vuelven más complejos, incluyendo sistemas con
                  capacidades agénticas.
                </p>

                <p>
                  Esto significa que el futuro del QA no necesariamente será
                  menos técnico. Probablemente será más amplio: habrá que
                  comprender software tradicional, datos, modelos, seguridad,
                  observabilidad, evaluación y comportamiento emergente.
                </p>

                <p>
                  Para los desarrolladores, esto también representa una
                  oportunidad. Aprender a construir sistemas es solo una parte
                  del trabajo; entender cómo demostrar que esos sistemas
                  funcionan correctamente será cada vez más importante.
                </p>

                <div className="my-12 rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#071a34] to-[#030a15] p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#3da5ff]/[0.06] text-[#3da5ff]">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="font-poppins text-xl font-semibold leading-8 text-white">
                        El futuro del testing no será solamente automatizar
                        más.
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#94a3b8]">
                        Será construir sistemas capaces de evaluar mejor,
                        aprender de los resultados y mantener criterios de
                        calidad incluso cuando el software sea cada vez más
                        dinámico.
                      </p>
                    </div>
                  </div>
                </div>
              </ArticleSection>

              {/* =====================================================
                  CONCLUSIÓN
              ===================================================== */}
              <section className="mt-20 border-t border-white/[0.06] pt-14">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  CONCLUSIÓN
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                  La IA está cambiando el QA, pero no elimina la ingeniería.
                </h2>

                <div className="mt-7 space-y-6 text-base leading-8 text-[#94a3b8]">
                  <p>
                    Los agentes autónomos pueden participar en la generación de
                    pruebas, exploración de escenarios, análisis de resultados y
                    otras actividades relacionadas con la calidad del software.
                  </p>

                  <p>
                    Pero su incorporación también introduce nuevos problemas:
                    variabilidad, trazabilidad, seguridad, evaluación y
                    confianza en los resultados.
                  </p>

                  <p>
                    Por eso, el reto no consiste en preguntarnos si la IA va a
                    reemplazar a los testers. La pregunta más interesante es
                    cómo podemos diseñar procesos donde humanos, automatización
                    y agentes trabajen juntos para producir software más
                    confiable.
                  </p>

                  <p>
                    Esa transición ya está ocurriendo y probablemente será una
                    de las áreas más interesantes de la ingeniería de software
                    durante los próximos años.
                  </p>
                </div>
              </section>

              {/* =====================================================
                  REFERENCIAS
              ===================================================== */}
              <section className="mt-20 border-t border-white/[0.06] pt-14">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                    <ExternalLink size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                      FUENTES
                    </p>

                    <h2 className="mt-1 font-poppins text-2xl font-semibold text-white">
                      Referencias para profundizar
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Reference
                    title="ISTQB — Certified Tester AI Testing (CT-AI)"
                    description="Material relacionado con testing de sistemas de inteligencia artificial."
                    href="https://test.istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                  />

                  <Reference
                    title="ISTQB — Certified Tester Generative AI Testing (CT-GenAI)"
                    description="Aplicación de GenAI en actividades de testing y actualización relacionada con agentes."
                    href="https://istqb.org/istqb-announces-minor-update-to-certified-tester-testing-with-generative-ai-ct-genai/"
                  />

                  <Reference
                    title="ISTQB — CT-GenAI Syllabus"
                    description="Casos de uso de GenAI para generación de pruebas, análisis de defectos, datos y documentación."
                    href="https://istqb.org/?download_id=6295&sdm_process_download=1"
                  />

                  <Reference
                    title="NIST — AI Risk Management Framework"
                    description="Marco para gestionar riesgos y promover confianza en sistemas de IA."
                    href="https://www.nist.gov/itl/ai-risk-management-framework"
                  />

                  <Reference
                    title="NIST — Generative AI Profile"
                    description="Perfil especializado del AI RMF para riesgos de inteligencia artificial generativa."
                    href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                  />

                  <Reference
                    title="NIST — TEVV-Athlon Framework"
                    description="Marco orientado a test, evaluación, verificación y validación de sistemas de IA."
                    href="https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems"
                  />

                  <Reference
                    title="Software quality assurance in the era of Agentic AI"
                    description="Estudio de mapeo sistemático sobre aseguramiento de calidad y agentes de IA."
                    href="https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1936730/full"
                  />

                  <Reference
                    title="Do Autonomous Agents Contribute Test Code?"
                    description="Estudio empírico sobre tests en pull requests generados por agentes."
                    href="https://arxiv.org/abs/2601.03556"
                  />

                  <Reference
                    title="Evolutionary testing of autonomous software agents"
                    description="Investigación sobre las dificultades de probar software autónomo."
                    href="https://kclpure.kcl.ac.uk/portal/en/publications/evolutionary-testing-of-autonomous-software-agents"
                  />
                </div>
              </section>

              {/* =====================================================
                  INTERNAL LINKS
              ===================================================== */}
              <section className="mt-16">
                <div className="rounded-3xl border border-white/[0.06] bg-[#040d1b] p-7 md:p-9">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                    EXPLORA DEVPASS
                  </p>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold text-white">
                    Sigue explorando tecnología aplicada
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Si este tema te interesa, puedes conocer los proyectos,
                    experimentos y conocimientos que forman parte de DevPass.
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    <InternalLink
                      href="/lab"
                      title="DevPass Lab"
                      description="Experimentos con IA, automatización y sistemas."
                    />

                    <InternalLink
                      href="/proyectos"
                      title="Proyectos"
                      description="Software y soluciones desarrolladas."
                    />

                    <InternalLink
                      href="/sobre-mi"
                      title="Sobre DevPass"
                      description="Conoce la experiencia detrás del proyecto."
                    />

                    <InternalLink
                      href="/contacto"
                      title="Hablemos"
                      description="¿Tienes un proyecto? Conversemos."
                    />
                  </div>
                </div>
              </section>

              {/* =====================================================
                  RELATED
              ===================================================== */}
              <section className="mt-16">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                      MÁS INSIGHTS
                    </p>

                    <h2 className="mt-2 font-poppins text-xl font-semibold text-white">
                      También podría interesarte
                    </h2>
                  </div>

                  <Link
                    href="/blog"
                    className="hidden items-center gap-2 text-xs text-[#64748b] transition-colors hover:text-[#a7d3ff] md:flex"
                  >
                    Ver todos
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="mt-5 grid gap-3">
                  <RelatedArticle
                    number="02"
                    category="DESARROLLO"
                    title="Construir software pensando más allá del código"
                    href="/blog"
                  />

                  <RelatedArticle
                    number="03"
                    category="IA · DESARROLLO"
                    title="Inteligencia artificial aplicada al desarrollo"
                    href="/blog"
                  />
                </div>
              </section>
            </article>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-20 md:py-28">
            <div className="relative overflow-hidden rounded-3xl border border-[#3da5ff]/10 bg-[#061426] p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1e6bff]/10 blur-[100px]" />

              <div className="relative z-10 max-w-3xl">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  DEVPASS
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                  Tecnología que se construye,
                  <span className="devpass-gradient-text">
                    {" "}
                    prueba y mejora.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b]">
                  Desarrollo de software, inteligencia artificial,
                  automatización y soluciones digitales para proyectos reales.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#2d78ff] hover:shadow-[0_10px_35px_rgba(30,107,255,0.2)]"
                  >
                    Ver proyectos
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-medium text-[#cbd5e1] transition-all hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Hablemos
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =============================================================
   COMPONENTES
============================================================= */

function ArticleSection({
  id,
  number,
  title,
  eyebrow,
  children,
}: {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/[0.06] py-14">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
            {number}
          </span>

          <span className="h-px w-8 bg-[#3da5ff]/30" />

          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#475569]">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="space-y-6 text-base leading-8 text-[#94a3b8]">
        {children}
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="my-8 rounded-2xl border border-white/[0.06] bg-[#061426] p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
          {icon}
        </div>

        <div>
          <h3 className="font-poppins text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#64748b]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">
      <p className="text-[10px] font-semibold text-[#3da5ff]">{number}</p>
      <p className="mt-2 text-xs font-medium text-[#cbd5e1]">{text}</p>
    </div>
  );
}

function AgentNode({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-[#07111f] p-5 text-center">
      <p className="text-[10px] font-semibold tracking-[0.15em] text-[#3da5ff]">
        {number}
      </p>

      <p className="mt-2 font-poppins text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#64748b]">{text}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-[#040d1b] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#061426]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
        {icon}
      </div>

      <div>
        <h3 className="font-poppins text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-[#64748b]">{text}</p>
      </div>
    </div>
  );
}

function ExternalSource({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
    >
      {label}
      <ExternalLink size={11} />
    </a>
  );
}

function Reference({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-5 rounded-xl border border-white/[0.06] bg-[#040d1b] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#061426]"
    >
      <div>
        <h3 className="text-sm font-medium text-[#cbd5e1] transition-colors group-hover:text-white">
          {title}
        </h3>

        <p className="mt-1.5 text-xs leading-6 text-[#64748b]">
          {description}
        </p>
      </div>

      <ExternalLink
        size={15}
        className="mt-1 shrink-0 text-[#475569] transition-colors group-hover:text-[#3da5ff]"
      />
    </a>
  );
}

function InternalLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#07111f] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#0a1f3d]"
    >
      <div>
        <h3 className="text-sm font-medium text-white">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-[#64748b]">
          {description}
        </p>
      </div>

      <ArrowRight
        size={15}
        className="shrink-0 text-[#475569] transition-all group-hover:translate-x-1 group-hover:text-[#3da5ff]"
      />
    </Link>
  );
}

function RelatedArticle({
  number,
  category,
  title,
  href,
}: {
  number: string;
  category: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#040d1b] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#061426]"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-semibold text-[#334155]">
          {number}
        </span>

        <div>
          <p className="text-[9px] font-semibold tracking-[0.15em] text-[#3da5ff]">
            {category}
          </p>

          <h3 className="mt-1 text-sm font-medium text-[#cbd5e1] transition-colors group-hover:text-white">
            {title}
          </h3>
        </div>
      </div>

      <ArrowRight
        size={15}
        className="text-[#475569] transition-all group-hover:translate-x-1 group-hover:text-[#3da5ff]"
      />
    </Link>
  );
}