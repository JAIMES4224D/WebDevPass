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
  Code2,
  Database,
  ExternalLink,
  Layers3,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  TriangleAlert,
  Workflow,
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
    title: "La IA entra al ciclo de desarrollo",
    id: "ia-ciclo-desarrollo",
  },
  {
    number: "02",
    title: "Generación de código",
    id: "generacion-codigo",
  },
  {
    number: "03",
    title: "Debugging y resolución de problemas",
    id: "debugging",
  },
  {
    number: "04",
    title: "Testing y revisión asistida por IA",
    id: "testing",
  },
  {
    number: "05",
    title: "Documentación y comprensión del software",
    id: "documentacion",
  },
  {
    number: "06",
    title: "De copilotos a agentes",
    id: "agentes",
  },
  {
    number: "07",
    title: "Productividad no significa confiar ciegamente",
    id: "limites",
  },
  {
    number: "08",
    title: "Hacia un desarrollo aumentado por IA",
    id: "futuro",
  },
];

export default function InteligenciaArtificialDesarrollo() {
  const webPageSchema = createWebPageSchema({
    name: "Inteligencia artificial aplicada al desarrollo | DevPass",
    description:
      "Artículo sobre el uso de inteligencia artificial en el desarrollo de software, incluyendo generación de código, debugging, testing, documentación, automatización y agentes de IA.",
    path: "/blog/inteligencia-artificial",
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
      name: "Inteligencia artificial aplicada al desarrollo",
      path: "/blog/inteligencia-artificial",
    },
  ]);

  const articleSchema = createArticleSchema({
    title: "Inteligencia artificial aplicada al desarrollo | DevPass",
    description:
      "Artículo sobre cómo la inteligencia artificial está transformando el desarrollo de software mediante generación de código, debugging, testing, documentación, automatización y agentes de IA.",
    path: "/blog/inteligencia-artificial",
    image: "/images/blog/inteligencia-artificial/portada.png",
    datePublished: "2026-01-01",
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
          <div className="absolute left-[7%] top-[8%] h-[430px] w-[430px] rounded-full bg-[#1e6bff]/[0.06] blur-[145px]" />

          <div className="absolute right-[3%] top-[32%] h-[520px] w-[520px] rounded-full bg-[#3da5ff]/[0.035] blur-[165px]" />

          <div className="absolute bottom-[15%] left-[35%] h-[380px] w-[380px] rounded-full bg-[#1e6bff]/[0.025] blur-[130px]" />
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
                  IA · DESARROLLO
                </span>

                <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <Clock3 size={13} />
                  10 min de lectura
                </span>

                <span className="text-xs text-[#475569]">·</span>

                <span className="text-xs text-[#64748b]">2026</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-5xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
              >
                Inteligencia artificial
                <span className="devpass-gradient-text block">
                  aplicada al desarrollo
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 max-w-3xl text-base leading-8 text-[#94a3b8] md:text-lg"
              >
                La inteligencia artificial está pasando de ser una herramienta
                experimental a convertirse en parte del flujo cotidiano de
                desarrollo. Generar código es solo el principio: también puede
                ayudar a investigar, depurar, probar, documentar y comprender
                sistemas de software.
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
              src="/images/blog/inteligencia-artificial/portada.png"
              alt="Inteligencia artificial aplicada al desarrollo"
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
            {/* =====================================================
                TOC
            ===================================================== */}
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

            {/* =====================================================
                BODY
            ===================================================== */}
            <article className="min-w-0">
              {/* =====================================================
                  INTRO
              ===================================================== */}
              <div className="mb-14">
                <p className="text-lg leading-9 text-[#cbd5e1] md:text-xl">
                  Durante mucho tiempo, utilizar inteligencia artificial en
                  programación significaba principalmente experimentar con
                  generación automática de código. Hoy el escenario es mucho
                  más amplio.
                </p>

                <p className="mt-7 text-base leading-8 text-[#94a3b8]">
                  Los modelos actuales pueden analizar código, explicar errores,
                  proponer soluciones, generar pruebas, transformar
                  documentación y ayudar a explorar bases de código completas.
                  Además, los agentes de IA están introduciendo una nueva forma
                  de interactuar con las herramientas utilizadas durante el
                  desarrollo.
                </p>

                <p className="mt-7 text-base leading-8 text-[#94a3b8]">
                  Sin embargo, incorporar IA al desarrollo no consiste en
                  entregar el control del proyecto a un modelo. El verdadero
                  valor aparece cuando la IA se integra dentro de un proceso
                  donde existen{" "}
                  <strong className="text-[#dbeafe]">
                    contexto, validación, pruebas y criterio técnico.
                  </strong>
                </p>

                <InfoCard
                  icon={<Lightbulb size={18} />}
                  title="La idea central"
                  text="La IA puede acelerar muchas actividades del desarrollo, pero la responsabilidad de decidir qué construir y validar si realmente funciona sigue perteneciendo al proceso de ingeniería."
                />
              </div>

              {/* =====================================================
                  01
              ===================================================== */}
              <ArticleSection
                id="ia-ciclo-desarrollo"
                number="01"
                title="La IA entra al ciclo de desarrollo"
                eyebrow="DEL EXPERIMENTO AL FLUJO DE TRABAJO"
              >
                <p>
                  La inteligencia artificial puede intervenir en prácticamente
                  todas las etapas del ciclo de desarrollo.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <ProcessCard
                    icon={<Search size={17} />}
                    number="01"
                    title="Descubrir"
                    text="Investigar requisitos, documentación, APIs y alternativas técnicas."
                  />

                  <ProcessCard
                    icon={<Code2 size={17} />}
                    number="02"
                    title="Construir"
                    text="Generar código, estructuras, consultas y componentes."
                  />

                  <ProcessCard
                    icon={<ShieldCheck size={17} />}
                    number="03"
                    title="Validar"
                    text="Revisar comportamiento mediante pruebas y análisis."
                  />
                </div>

                <p>
                  Esto transforma la relación entre desarrollador y herramienta.
                  La IA deja de ser únicamente un generador de fragmentos de
                  código y pasa a funcionar como una capa de asistencia sobre
                  diferentes actividades.
                </p>

                <p>
                  El cambio es importante porque una gran parte del trabajo de
                  ingeniería no consiste en escribir código. También implica
                  leer, investigar, comparar alternativas, comprender sistemas
                  existentes y verificar resultados.
                </p>

                <div className="my-10 rounded-3xl border border-[#3da5ff]/15 bg-[#061426] p-7 md:p-9">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Workflow size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Flujo aumentado por IA
                      </p>

                      <p className="text-xs text-[#64748b]">
                        La IA se integra dentro del proceso, no lo reemplaza.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-5">
                    <FlowStep number="01" text="Problema" />
                    <FlowStep number="02" text="Contexto" />
                    <FlowStep number="03" text="IA" />
                    <FlowStep number="04" text="Validación" />
                    <FlowStep number="05" text="Entrega" />
                  </div>
                </div>
              </ArticleSection>

              {/* =====================================================
                  02
              ===================================================== */}
              <ArticleSection
                id="generacion-codigo"
                number="02"
                title="Generación de código"
                eyebrow="PROGRAMAR CON ASISTENCIA"
              >
                <p>
                  La generación de código es probablemente la aplicación más
                  visible de la IA dentro del desarrollo de software.
                </p>

                <p>
                  Un desarrollador puede describir una funcionalidad y obtener
                  una primera implementación, solicitar una transformación,
                  generar una consulta SQL o pedir una explicación de una
                  función existente.
                </p>

                <p>
                  Esto puede reducir el tiempo necesario para producir código
                  repetitivo, pero existe una diferencia importante entre
                  <strong className="text-white">
                    {" "}
                    generar código
                  </strong>{" "}
                  y
                  <strong className="text-white">
                    {" "}
                    diseñar una solución.
                  </strong>
                </p>

                <div className="my-10 rounded-3xl border border-white/[0.06] bg-[#040d1b] p-7 md:p-9">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                      <Terminal size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Un ejemplo de flujo
                      </p>

                      <p className="text-xs text-[#64748b]">
                        Del requisito a una implementación verificable
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <CodeFlowRow
                      number="01"
                      title="Describir"
                      text="Explicar claramente qué debe hacer la funcionalidad."
                    />

                    <CodeFlowRow
                      number="02"
                      title="Generar"
                      text="La IA propone una implementación inicial."
                    />

                    <CodeFlowRow
                      number="03"
                      title="Revisar"
                      text="El desarrollador analiza estructura, lógica y riesgos."
                    />

                    <CodeFlowRow
                      number="04"
                      title="Probar"
                      text="La solución se ejecuta y se valida mediante pruebas."
                    />

                    <CodeFlowRow
                      number="05"
                      title="Integrar"
                      text="Solo después de validar se incorpora al proyecto."
                    />
                  </div>
                </div>

                <p>
                  El último paso es fundamental. El código generado puede
                  contener errores sintácticos, errores lógicos, supuestos
                  incorrectos o utilizar APIs de forma inadecuada.
                </p>

                <p>
                  Por eso, cuanto más crítica sea la funcionalidad, mayor debe
                  ser el nivel de revisión y validación aplicado.
                </p>
              </ArticleSection>

              {/* =====================================================
                  03
              ===================================================== */}
              <ArticleSection
                id="debugging"
                number="03"
                title="Debugging y resolución de problemas"
                eyebrow="INVESTIGAR ANTES DE CAMBIAR"
              >
                <p>
                  Una de las aplicaciones más interesantes de la IA no consiste
                  en escribir código nuevo, sino en ayudar a comprender código
                  que ya existe.
                </p>

                <p>
                  Ante un error, el desarrollador puede proporcionar logs,
                  mensajes de excepción, fragmentos de código o información
                  contextual y solicitar hipótesis sobre la causa.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <DebugCard
                    icon={<TriangleAlert size={17} />}
                    title="Síntoma"
                    text="¿Qué comportamiento inesperado estamos observando?"
                  />

                  <DebugCard
                    icon={<Search size={17} />}
                    title="Hipótesis"
                    text="¿Qué causas podrían explicar el comportamiento?"
                  />

                  <DebugCard
                    icon={<CheckCircle2 size={17} />}
                    title="Validación"
                    text="¿Qué prueba permite confirmar o descartar la hipótesis?"
                  />
                </div>

                <p>
                  La IA puede ser especialmente útil como herramienta de
                  exploración. Puede sugerir causas que el desarrollador todavía
                  no había considerado o ayudar a interpretar mensajes de error
                  poco familiares.
                </p>

                <p>
                  Pero una hipótesis no es una solución confirmada. La
                  recomendación debe comprobarse contra el comportamiento real
                  del sistema.
                </p>

                <InfoCard
                  icon={<Target size={18} />}
                  title="Regla práctica"
                  text="Utiliza la IA para generar hipótesis rápidamente y utiliza el sistema, las pruebas y los datos para determinar si esas hipótesis son correctas."
                />

                <p>
                  Este enfoque es especialmente importante cuando se trabaja
                  con sistemas de producción. Un cambio aparentemente pequeño
                  puede tener efectos secundarios que no aparecen en el caso
                  inicial.
                </p>
              </ArticleSection>

              {/* =====================================================
                  04
              ===================================================== */}
              <ArticleSection
                id="testing"
                number="04"
                title="Testing y revisión asistida por IA"
                eyebrow="CALIDAD DEL SOFTWARE"
              >
                <p>
                  La IA también puede ayudar a crear y revisar pruebas de
                  software.
                </p>

                <p>
                  Puede proponer casos de prueba, identificar posibles casos
                  límite, generar datos sintéticos o transformar escenarios
                  descritos en lenguaje natural en estructuras más cercanas a
                  una prueba automatizada.
                </p>

                <p>
                  Este punto conecta directamente con el artículo anterior de
                  DevPass sobre{" "}
                  <Link
                    href="/blog/testing-con-ia"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    Testing con IA y agentes autónomos
                  </Link>
                  .
                </p>

                <div className="my-10 rounded-3xl border border-[#3da5ff]/15 bg-[#061426] p-7 md:p-9">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                    CICLO DE VALIDACIÓN
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-4">
                    <FlowStep number="01" text="Generar" />
                    <FlowStep number="02" text="Ejecutar" />
                    <FlowStep number="03" text="Analizar" />
                    <FlowStep number="04" text="Corregir" />
                  </div>
                </div>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://istqb.org/?download_id=6295&sdm_process_download=1"
                    label="syllabus CT-GenAI de ISTQB"
                  />{" "}
                  reconoce precisamente diferentes usos de GenAI relacionados
                  con actividades de testing, incluyendo generación de casos y
                  scripts, análisis de defectos y generación de datos de
                  prueba.
                </p>

                <p>
                  Sin embargo, una prueba generada automáticamente también debe
                  ser revisada. Una prueba puede ejecutarse correctamente y aun
                  así no verificar lo que realmente importa.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-2">
                  <QualityBox
                    icon={<CheckCircle2 size={17} />}
                    title="La IA puede ayudar a"
                    items={[
                      "proponer escenarios",
                      "generar datos",
                      "crear tests iniciales",
                      "analizar resultados",
                    ]}
                  />

                  <QualityBox
                    icon={<ShieldCheck size={17} />}
                    title="El equipo debe validar"
                    items={[
                      "cobertura real",
                      "criterios de aceptación",
                      "riesgo funcional",
                      "resultados obtenidos",
                    ]}
                  />
                </div>
              </ArticleSection>

              {/* =====================================================
                  05
              ===================================================== */}
              <ArticleSection
                id="documentacion"
                number="05"
                title="Documentación y comprensión del software"
                eyebrow="CONOCIMIENTO TÉCNICO"
              >
                <p>
                  Otro espacio donde la IA puede resultar útil es la
                  documentación.
                </p>

                <p>
                  Un modelo puede resumir una función, explicar una API,
                  convertir comentarios en documentación, describir estructuras
                  de datos o ayudar a generar una primera versión de un README.
                </p>

                <p>
                  Esto puede ser especialmente útil cuando se trabaja con
                  proyectos antiguos o bases de código que fueron desarrolladas
                  por diferentes personas.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <DocumentationCard
                    icon={<Code2 size={17} />}
                    title="Código"
                    text="Explicar funciones y estructuras."
                  />

                  <DocumentationCard
                    icon={<Database size={17} />}
                    title="Datos"
                    text="Describir modelos y relaciones."
                  />

                  <DocumentationCard
                    icon={<Layers3 size={17} />}
                    title="Arquitectura"
                    text="Resumir componentes e interacciones."
                  />
                </div>

                <p>
                  Pero la documentación generada también necesita revisión. Una
                  descripción incorrecta puede ser peor que no tener
                  documentación porque puede transmitir una comprensión falsa
                  del sistema.
                </p>

                <p>
                  Por eso, la IA funciona mejor como acelerador del proceso de
                  documentación que como fuente definitiva de conocimiento.
                </p>
              </ArticleSection>

              {/* =====================================================
                  06
              ===================================================== */}
              <ArticleSection
                id="agentes"
                number="06"
                title="De copilotos a agentes"
                eyebrow="EL SIGUIENTE NIVEL"
              >
                <p>
                  La evolución más interesante ocurre cuando dejamos de pensar
                  únicamente en asistentes que responden preguntas y empezamos
                  a trabajar con agentes capaces de ejecutar acciones.
                </p>

                <p>
                  Un agente puede combinar un modelo de IA con herramientas,
                  contexto, instrucciones y mecanismos de ejecución para
                  completar tareas de varios pasos.
                </p>

                <div className="my-10 rounded-3xl border border-white/[0.06] bg-[#040d1b] p-7 md:p-10">
                  <div className="mb-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                      <Bot size={25} />
                    </div>

                    <h3 className="mt-4 font-poppins text-lg font-semibold text-white">
                      De asistencia a ejecución
                    </h3>

                    <p className="mx-auto mt-2 max-w-lg text-xs leading-6 text-[#64748b]">
                      El sistema puede pasar de sugerir una acción a participar
                      en la ejecución de una tarea.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4">
                    <AgentStep
                      number="01"
                      title="Contexto"
                      text="Comprende la tarea."
                    />

                    <AgentStep
                      number="02"
                      title="Plan"
                      text="Determina los pasos."
                    />

                    <AgentStep
                      number="03"
                      title="Herramientas"
                      text="Interactúa con sistemas."
                    />

                    <AgentStep
                      number="04"
                      title="Resultado"
                      text="Evalúa lo realizado."
                    />
                  </div>
                </div>

                <p>
                  Esta evolución tiene implicaciones importantes para el
                  desarrollo. Un agente podría, por ejemplo, analizar un issue,
                  localizar archivos relevantes, proponer cambios, ejecutar
                  pruebas y preparar una propuesta para revisión.
                </p>

                <p>
                  Pero cada una de esas acciones introduce nuevas superficies
                  de riesgo. El acceso a herramientas, archivos, repositorios o
                  sistemas externos debe estar controlado.
                </p>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://www.microsoft.com/en-us/microsoft-365-copilot/agents/ai-agents-faq"
                    label="concepto moderno de agentes de IA"
                  />{" "}
                  refleja precisamente esta evolución hacia sistemas capaces de
                  utilizar información y herramientas para completar tareas con
                  distintos niveles de autonomía.
                </p>

                <p>
                  En DevPass, esta área forma parte de los experimentos del{" "}
                  <Link
                    href="/lab"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    Lab
                  </Link>
                  , especialmente alrededor de agentes autónomos,
                  automatización y workflows inteligentes.
                </p>
              </ArticleSection>

              {/* =====================================================
                  07
              ===================================================== */}
              <ArticleSection
                id="limites"
                number="07"
                title="Productividad no significa confiar ciegamente"
                eyebrow="LÍMITES Y RIESGOS"
              >
                <p>
                  Una de las mayores confusiones alrededor de la IA aplicada al
                  desarrollo es asumir que producir código más rápido equivale
                  automáticamente a producir mejor software.
                </p>

                <p>
                  La velocidad de generación no elimina la necesidad de
                  comprender el problema, revisar la implementación y ejecutar
                  pruebas.
                </p>

                <div className="my-10 grid gap-5 md:grid-cols-2">
                  <RiskCard
                    icon={<CheckCircle2 size={17} />}
                    title="Cuando funciona bien"
                    items={[
                      "Tareas repetitivas",
                      "Prototipos",
                      "Explicaciones",
                      "Transformaciones",
                      "Primeras versiones",
                    ]}
                    positive
                  />

                  <RiskCard
                    icon={<TriangleAlert size={17} />}
                    title="Cuando requiere más control"
                    items={[
                      "Seguridad",
                      "Datos sensibles",
                      "Sistemas críticos",
                      "Cambios arquitectónicos",
                      "Código no verificado",
                    ]}
                  />
                </div>

                <p>
                  El{" "}
                  <ExternalSource
                    href="https://www.nist.gov/itl/ai-risk-management-framework"
                    label="NIST AI Risk Management Framework"
                  />{" "}
                  plantea la gestión del riesgo como una actividad que debe
                  integrarse durante el ciclo de vida de los sistemas de IA.
                </p>

                <p>
                  Para desarrollo de software, una traducción práctica de esta
                  idea es sencilla: cuanto mayor sea el impacto potencial de un
                  error, mayor debe ser el nivel de revisión y control.
                </p>

                <InfoCard
                  icon={<ShieldCheck size={18} />}
                  title="IA con criterio"
                  text="La mejor utilización de IA no consiste en aceptar automáticamente todo lo que genera, sino en saber cuándo confiar, cuándo verificar y cuándo rechazar una propuesta."
                />

                <p>
                  Esta filosofía también conecta con nuestra forma de construir
                  software: puedes conocer algunos de los sistemas desarrollados
                  en la sección de{" "}
                  <Link
                    href="/proyectos"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    proyectos
                  </Link>
                  .
                </p>
              </ArticleSection>

              {/* =====================================================
                  08
              ===================================================== */}
              <ArticleSection
                id="futuro"
                number="08"
                title="Hacia un desarrollo aumentado por IA"
                eyebrow="EL FUTURO DEL DESARROLLO"
              >
                <p>
                  El escenario más interesante no parece ser un futuro donde la
                  IA simplemente sustituya al desarrollador.
                </p>

                <p>
                  Es más razonable imaginar equipos donde las personas puedan
                  delegar determinadas tareas mecánicas o exploratorias a
                  sistemas de IA mientras concentran más tiempo en arquitectura,
                  diseño, validación y decisiones de producto.
                </p>

                <div className="my-10 rounded-3xl border border-[#3da5ff]/15 bg-[#061426] p-7 md:p-9">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
                    DESARROLLO AUMENTADO
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-4">
                    <FutureNode
                      number="01"
                      title="Humano"
                      text="Define objetivos y criterios."
                    />

                    <FutureNode
                      number="02"
                      title="IA"
                      text="Amplía la capacidad de exploración."
                    />

                    <FutureNode
                      number="03"
                      title="Automatización"
                      text="Ejecuta tareas repetibles."
                    />

                    <FutureNode
                      number="04"
                      title="Validación"
                      text="Comprueba el resultado."
                    />
                  </div>
                </div>

                <p>
                  En este escenario, aprender a trabajar con IA se convierte en
                  una competencia adicional del desarrollador. No solo será
                  necesario saber programar, sino también saber proporcionar
                  contexto, formular problemas, evaluar resultados y diseñar
                  procesos donde la automatización sea segura.
                </p>

                <p>
                  La IA puede hacer que determinadas tareas sean más rápidas.
                  Pero la ingeniería continúa siendo necesaria para determinar
                  si esas tareas son las correctas y si el resultado cumple
                  realmente el objetivo.
                </p>

                <div className="my-12 rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#071a34] to-[#030a15] p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#3da5ff]/[0.06] text-[#3da5ff]">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="font-poppins text-xl font-semibold leading-8 text-white">
                        El objetivo no es programar menos.
                        <span className="devpass-gradient-text">
                          {" "}
                          Es construir mejor.
                        </span>
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#94a3b8]">
                        La IA puede aumentar nuestra capacidad técnica, pero el
                        valor aparece cuando esa capacidad se utiliza dentro de
                        un proceso de ingeniería sólido.
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
                  La IA cambia las herramientas. La ingeniería sigue siendo
                  esencial.
                </h2>

                <div className="mt-7 space-y-6 text-base leading-8 text-[#94a3b8]">
                  <p>
                    La inteligencia artificial ya puede participar en numerosas
                    actividades del desarrollo: generación de código,
                    debugging, testing, documentación, análisis y automatización.
                  </p>

                  <p>
                    El cambio más importante, sin embargo, no está únicamente
                    en lo que la IA puede generar. Está en cómo cambia nuestro
                    flujo de trabajo.
                  </p>

                  <p>
                    Un desarrollador puede investigar más rápido, explorar más
                    alternativas y automatizar tareas que antes consumían una
                    cantidad considerable de tiempo.
                  </p>

                  <p>
                    Pero esa capacidad debe acompañarse de validación,
                    seguridad, comprensión del sistema y criterio técnico.
                  </p>

                  <p>
                    En última instancia, la IA no elimina la necesidad de
                    ingeniería de software. La hace todavía más importante,
                    porque cuanto más fácil sea producir código, más importante
                    será saber{" "}
                    <strong className="text-[#dbeafe]">
                      qué código merece la pena producir.
                    </strong>
                  </p>
                </div>
              </section>

              {/* =====================================================
                  FUENTES
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
                    title="ISTQB — Certified Tester Generative AI Testing"
                    description="Marco de referencia para el uso de GenAI en actividades de testing de software."
                    href="https://istqb.org/istqb-announces-minor-update-to-certified-tester-testing-with-generative-ai-ct-genai/"
                  />

                  <Reference
                    title="ISTQB — CT-GenAI Syllabus"
                    description="Casos de uso de IA generativa para testing, generación de casos, scripts, datos y análisis."
                    href="https://istqb.org/?download_id=6295&sdm_process_download=1"
                  />

                  <Reference
                    title="NIST — AI Risk Management Framework"
                    description="Marco para gestionar riesgos y promover sistemas de inteligencia artificial confiables."
                    href="https://www.nist.gov/itl/ai-risk-management-framework"
                  />

                  <Reference
                    title="NIST — Generative AI Profile"
                    description="Perfil específico para gestionar riesgos asociados a inteligencia artificial generativa."
                    href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                  />

                  <Reference
                    title="NIST — TEVV-Athlon Framework"
                    description="Investigación y evaluación de sistemas de IA mediante test, evaluación, verificación y validación."
                    href="https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems"
                  />

                  <Reference
                    title="Microsoft — What is an AI agent?"
                    description="Conceptos y capacidades de los agentes de inteligencia artificial."
                    href="https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio/what-is-an-ai-agent"
                  />

                  <Reference
                    title="Microsoft — AI Agents FAQ"
                    description="Información sobre capacidades, autonomía y consideraciones de seguridad de agentes."
                    href="https://www.microsoft.com/en-us/microsoft-365-copilot/agents/ai-agents-faq"
                  />

                  <Reference
                    title="Software quality assurance in the era of Agentic AI"
                    description="Estudio sistemático sobre aseguramiento de calidad en la era de la IA agéntica."
                    href="https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1936730/full"
                  />

                  <Reference
                    title="Do Autonomous Agents Contribute Test Code?"
                    description="Estudio empírico sobre la participación de agentes en pull requests y generación de tests."
                    href="https://arxiv.org/abs/2601.03556"
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
                    Sigue explorando tecnología
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Descubre proyectos, experimentos y otros artículos
                    relacionados con desarrollo, IA y tecnología.
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    <InternalLink
                      href="/blog/testing-con-ia"
                      title="Testing con IA"
                      description="Agentes autónomos y QA moderno."
                    />

                    <InternalLink
                      href="/blog"
                      title="Insights"
                      description="Más artículos de tecnología y desarrollo."
                    />

                    <InternalLink
                      href="/lab"
                      title="DevPass Lab"
                      description="Experimentos con IA y automatización."
                    />

                    <InternalLink
                      href="/proyectos"
                      title="Proyectos"
                      description="Soluciones de software desarrolladas."
                    />

                    <InternalLink
                      href="/sobre-mi"
                      title="Sobre DevPass"
                      description="Conoce la experiencia detrás del proyecto."
                    />

                    <InternalLink
                      href="/contacto"
                      title="Hablemos"
                      description="Conversemos sobre tu próximo proyecto."
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
                    number="01"
                    category="TESTING · IA"
                    title="Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos"
                    href="/blog/testing-con-ia"
                  />

                  <RelatedArticle
                    number="02"
                    category="DESARROLLO · INGENIERÍA"
                    title="Construir software pensando más allá del código"
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
                  La inteligencia artificial es una herramienta.
                  <span className="devpass-gradient-text">
                    {" "}
                    La ingeniería marca el rumbo.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b]">
                  Desarrollo de software, inteligencia artificial,
                  automatización y soluciones digitales pensadas para problemas
                  reales.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/lab"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#2d78ff] hover:shadow-[0_10px_35px_rgba(30,107,255,0.2)]"
                  >
                    Explorar Lab
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
    <section
      id={id}
      className="scroll-mt-28 border-t border-white/[0.06] py-14"
    >
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

function ProcessCard({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#040d1b] p-6 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#061426]">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
          {icon}
        </div>

        <span className="text-[10px] font-semibold text-[#334155]">
          {number}
        </span>
      </div>

      <h3 className="mt-5 font-poppins text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#64748b]">{text}</p>
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

function CodeFlowRow({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[10px] font-semibold text-[#3da5ff]">
        {number}
      </div>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>

        <p className="mt-1 text-xs leading-6 text-[#64748b]">{text}</p>
      </div>
    </div>
  );
}

function DebugCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#040d1b] p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
        {icon}
      </div>

      <h3 className="mt-5 font-poppins text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#64748b]">{text}</p>
    </div>
  );
}

function QualityBox({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#040d1b] p-6">
      <div className="flex items-center gap-3 text-[#3da5ff]">
        {icon}

        <h3 className="font-poppins text-sm font-semibold text-white">
          {title}
        </h3>
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-7 text-[#64748b]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function DocumentationCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#040d1b] p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
        {icon}
      </div>

      <h3 className="mt-5 font-poppins text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#64748b]">{text}</p>
    </div>
  );
}

function AgentStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#07111f] p-5 text-center">
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

function FutureNode({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#07111f] p-5">
      <p className="text-[10px] font-semibold text-[#3da5ff]">{number}</p>

      <p className="mt-3 font-poppins text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#64748b]">{text}</p>
    </div>
  );
}

function RiskCard({
  icon,
  title,
  items,
  positive = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        positive
          ? "border-[#3da5ff]/10 bg-[#061426]"
          : "border-amber-400/10 bg-amber-400/[0.02]"
      }`}
    >
      <div
        className={
          positive ? "text-[#3da5ff]" : "text-amber-300"
        }
      >
        {icon}
      </div>

      <h3 className="mt-4 font-poppins text-sm font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-2 text-sm leading-7 text-[#64748b]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
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