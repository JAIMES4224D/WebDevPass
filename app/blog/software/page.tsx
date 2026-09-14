"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Lightbulb,
  Network,
  Scale,
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
    title: "El código no es el producto",
    id: "codigo-no-producto",
  },
  {
    number: "02",
    title: "Entender el problema antes de programar",
    id: "entender-problema",
  },
  {
    number: "03",
    title: "Arquitectura antes que implementación",
    id: "arquitectura",
  },
  {
    number: "04",
    title: "Calidad, mantenibilidad y deuda técnica",
    id: "calidad",
  },
  {
    number: "05",
    title: "Diseñar software para evolucionar",
    id: "evolucionar",
  },
  {
    number: "06",
    title: "El desarrollador como solucionador de problemas",
    id: "desarrollador",
  },
];

export default function ConstruirSoftware() {
  const webPageSchema = createWebPageSchema({
    name: "Construir software pensando más allá del código | DevPass",
    description:
      "Artículo sobre desarrollo de software profesional, análisis de problemas, arquitectura, calidad, mantenibilidad, deuda técnica y diseño de sistemas preparados para evolucionar.",
    path: "/blog/software",
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
      name: "Construir software pensando más allá del código",
      path: "/blog/software",
    },
  ]);

  const articleSchema = createArticleSchema({
    title: "Construir software pensando más allá del código | DevPass",
    description:
      "Artículo sobre desarrollo de software profesional, análisis de problemas, arquitectura, calidad, mantenibilidad, deuda técnica y diseño de sistemas preparados para evolucionar.",
    path: "/blog/software",
    image: "/images/blog/software/portada.png",
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
          <div className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#1e6bff]/[0.055] blur-[140px]" />

          <div className="absolute right-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#3da5ff]/[0.035] blur-[160px]" />
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
                  DESARROLLO · INGENIERÍA
                </span>

                <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <Clock3 size={13} />
                  9 min de lectura
                </span>

                <span className="text-xs text-[#475569]">·</span>

                <span className="text-xs text-[#64748b]">
                  2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-5xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
              >
                Construir software
                <span className="devpass-gradient-text block">
                  pensando más allá del código
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 max-w-3xl text-base leading-8 text-[#94a3b8] md:text-lg"
              >
                Escribir código es solo una parte del desarrollo de software.
                Antes de abrir el editor existen decisiones sobre problemas,
                usuarios, arquitectura, datos, seguridad y mantenimiento que
                terminan determinando si una solución realmente funciona.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34]">
                  <Code2 size={17} className="text-[#3da5ff]" />
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
              src="/images/blog/software/portada.png"
              alt="Construir software pensando más allá del código"
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
              {/* INTRO */}
              <div className="mb-14">
                <p className="text-lg leading-9 text-[#cbd5e1] md:text-xl">
                  Existe una idea bastante extendida en el desarrollo de
                  software: si alguien sabe programar, puede construir
                  cualquier sistema. La realidad es mucho más compleja.
                </p>

                <p className="mt-7 text-base leading-8 text-[#94a3b8]">
                  Un sistema puede tener código limpio, utilizar tecnologías
                  modernas y aun así resolver mal el problema para el que fue
                  construido. También puede funcionar correctamente hoy y
                  convertirse en una carga difícil de mantener dentro de unos
                  meses.
                </p>

                <p className="mt-7 text-base leading-8 text-[#94a3b8]">
                  Por eso, construir software profesional requiere pensar más
                  allá de la implementación. El código importa, pero también
                  importan las decisiones que existen{" "}
                  <strong className="text-[#dbeafe]">
                    antes, alrededor y después del código.
                  </strong>
                </p>

                <InfoCard
                  icon={<Lightbulb size={18} />}
                  title="Una idea fundamental"
                  text="Un buen software no es simplemente aquel que funciona. Es aquel que resuelve el problema correcto y puede continuar funcionando mientras el contexto cambia."
                />
              </div>

              {/* =====================================================
                  01
              ===================================================== */}
              <ArticleSection
                id="codigo-no-producto"
                number="01"
                title="El código no es el producto"
                eyebrow="PENSAR MÁS ALLÁ DE LA IMPLEMENTACIÓN"
              >
                <p>
                  El código es el mecanismo mediante el cual materializamos una
                  solución, pero no representa por sí solo el valor completo de
                  un sistema.
                </p>

                <p>
                  Pensemos en una aplicación para gestionar citas médicas.
                  Técnicamente podría tener una excelente interfaz, una API
                  rápida y una base de datos correctamente estructurada. Sin
                  embargo, si el flujo obliga al personal a introducir la misma
                  información varias veces, el sistema puede ser técnicamente
                  correcto y operacionalmente deficiente.
                </p>

                <p>
                  El verdadero objetivo no es producir líneas de código. Es
                  resolver una necesidad mediante software.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-3">
                  <InfoCard
                    icon={<Target size={17} />}
                    title="Problema"
                    text="¿Qué necesidad concreta estamos intentando resolver?"
                  />

                  <InfoCard
                    icon={<Network size={17} />}
                    title="Sistema"
                    text="¿Cómo deben interactuar las diferentes partes?"
                  />

                  <InfoCard
                    icon={<Code2 size={17} />}
                    title="Implementación"
                    text="¿Qué tecnología permite construir la solución?"
                  />
                </div>

                <p>
                  El orden también importa. Una mala definición del problema no
                  se corrige simplemente escribiendo mejor código.
                </p>
              </ArticleSection>

              {/* =====================================================
                  02
              ===================================================== */}
              <ArticleSection
                id="entender-problema"
                number="02"
                title="Entender el problema antes de programar"
                eyebrow="ANÁLISIS"
              >
                <p>
                  Una de las decisiones más importantes de un proyecto ocurre
                  antes de crear el primer archivo.
                </p>

                <p>
                  Antes de seleccionar un framework o diseñar una base de datos,
                  es necesario comprender qué problema existe, quién lo
                  experimenta, qué restricciones tiene y cómo se determinará
                  que la solución realmente funciona.
                </p>

                <div className="my-10 rounded-3xl border border-white/[0.06] bg-[#040d1b] p-7 md:p-9">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Target size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Antes de escribir código
                      </p>

                      <p className="text-xs text-[#64748b]">
                        Algunas preguntas que deberían responderse
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <QuestionRow text="¿Qué problema estamos resolviendo?" />

                    <QuestionRow text="¿Quién utilizará el sistema?" />

                    <QuestionRow text="¿Qué restricciones existen?" />

                    <QuestionRow text="¿Qué información necesita manejar?" />

                    <QuestionRow text="¿Cómo sabremos que la solución funciona?" />
                  </div>
                </div>

                <p>
                  Esta etapa también ayuda a evitar una situación frecuente:
                  comenzar a desarrollar una solución basándose en supuestos
                  que nunca fueron validados.
                </p>

                <p>
                  La tecnología debería responder a las necesidades del
                  proyecto y no al contrario.
                </p>
              </ArticleSection>

              {/* =====================================================
                  03
              ===================================================== */}
              <ArticleSection
                id="arquitectura"
                number="03"
                title="Arquitectura antes que implementación"
                eyebrow="DISEÑO DEL SISTEMA"
              >
                <p>
                  Una vez entendido el problema aparece otra pregunta:
                  ¿cómo organizamos técnicamente la solución?
                </p>

                <p>
                  La arquitectura define decisiones estructurales que afectan
                  la forma en que el sistema crecerá, se probará, se desplegará
                  y será mantenido.
                </p>

                <div className="my-10 rounded-3xl border border-[#3da5ff]/15 bg-[#061426] p-7 md:p-9">
                  <div className="grid gap-4 md:grid-cols-4">
                    <ArchitectureNode
                      number="01"
                      title="Interfaz"
                      icon={<Layers3 size={18} />}
                    />

                    <ArchitectureNode
                      number="02"
                      title="Lógica"
                      icon={<Workflow size={18} />}
                    />

                    <ArchitectureNode
                      number="03"
                      title="Datos"
                      icon={<Database size={18} />}
                    />

                    <ArchitectureNode
                      number="04"
                      title="Infraestructura"
                      icon={<Network size={18} />}
                    />
                  </div>
                </div>

                <p>
                  No existe una arquitectura universalmente correcta. Una
                  aplicación pequeña puede beneficiarse de una arquitectura
                  sencilla, mientras que un sistema con múltiples equipos,
                  dominios funcionales y necesidades de escalabilidad puede
                  requerir una separación mayor.
                </p>

                <p>
                  El objetivo no debería ser utilizar la arquitectura más
                  sofisticada posible, sino utilizar una arquitectura
                  <strong className="text-[#dbeafe]">
                    {" "}
                    proporcional al problema.
                  </strong>
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.02] p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-300"
                      />

                      <h3 className="font-poppins text-sm font-semibold text-white">
                        Buena decisión
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      Elegir la complejidad necesaria para resolver el problema
                      actual dejando espacio razonable para evolucionar.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-400/10 bg-amber-400/[0.02] p-6">
                    <div className="flex items-center gap-3">
                      <TriangleAlert
                        size={18}
                        className="text-amber-300"
                      />

                      <h3 className="font-poppins text-sm font-semibold text-white">
                        Mala decisión
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                      Añadir complejidad arquitectónica únicamente porque una
                      tecnología está de moda.
                    </p>
                  </div>
                </div>

                <p>
                  En nuestros{" "}
                  <Link
                    href="/proyectos"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    proyectos
                  </Link>
                  , esta diferencia es especialmente importante: no todos los
                  problemas necesitan las mismas herramientas ni la misma
                  arquitectura.
                </p>
              </ArticleSection>

              {/* =====================================================
                  04
              ===================================================== */}
              <ArticleSection
                id="calidad"
                number="04"
                title="Calidad, mantenibilidad y deuda técnica"
                eyebrow="SOFTWARE QUE DURA"
              >
                <p>
                  Un sistema no termina cuando se publica. Después del
                  despliegue comienzan nuevas necesidades: correcciones,
                  cambios, integraciones, actualizaciones y nuevas
                  funcionalidades.
                </p>

                <p>
                  Por eso la calidad del software también está relacionada con
                  la facilidad con la que puede ser entendido y modificado.
                </p>

                <p>
                  La{" "}
                  <strong className="text-white">
                    deuda técnica
                  </strong>{" "}
                  describe, de forma general, las consecuencias futuras de
                  tomar determinadas decisiones técnicas que pueden acelerar el
                  desarrollo inicial pero aumentar el coste posterior.
                </p>

                <div className="my-10 grid gap-4 md:grid-cols-2">
                  <QualityCard
                    icon={<CheckCircle2 size={17} />}
                    title="Mantenibilidad"
                    text="El sistema puede modificarse sin introducir cambios innecesarios en otras partes."
                    positive
                  />

                  <QualityCard
                    icon={<ShieldCheck size={17} />}
                    title="Testabilidad"
                    text="Las diferentes partes pueden verificarse mediante pruebas."
                    positive
                  />

                  <QualityCard
                    icon={<GitBranch size={17} />}
                    title="Trazabilidad"
                    text="Las decisiones y cambios importantes pueden comprenderse a lo largo del proyecto."
                    positive
                  />

                  <QualityCard
                    icon={<XCircle size={17} />}
                    title="Acoplamiento excesivo"
                    text="Una modificación pequeña obliga a cambiar numerosas partes del sistema."
                  />
                </div>

                <p>
                  No toda deuda técnica es necesariamente mala. En algunos
                  proyectos puede ser una decisión consciente priorizar una
                  entrega rápida. El problema aparece cuando la deuda deja de
                  ser visible, controlada y gestionable.
                </p>

                <InfoCard
                  icon={<Scale size={18} />}
                  title="La pregunta correcta"
                  text="No se trata de eliminar toda complejidad, sino de entender qué complejidad estamos aceptando y por qué."
                />

                <p>
                  Esto conecta directamente con el{" "}
                  <Link
                    href="/blog/testing-con-ia"
                    className="font-medium text-[#3da5ff] underline decoration-[#3da5ff]/30 underline-offset-4 transition-colors hover:text-[#a7d3ff]"
                  >
                    testing moderno
                  </Link>
                  : cuanto más difícil sea comprender un sistema, más difícil
                  será demostrar que continúa funcionando correctamente.
                </p>
              </ArticleSection>

              {/* =====================================================
                  05
              ===================================================== */}
              <ArticleSection
                id="evolucionar"
                number="05"
                title="Diseñar software para evolucionar"
                eyebrow="CAMBIO"
              >
                <p>
                  Uno de los errores más comunes es diseñar pensando únicamente
                  en los requisitos actuales.
                </p>

                <p>
                  Sin embargo, los sistemas reales cambian. Cambian los
                  usuarios, cambian los procesos, cambian las regulaciones,
                  cambian las necesidades del negocio y aparecen nuevas
                  integraciones.
                </p>

                <p>
                  Diseñar para evolucionar no significa intentar predecir el
                  futuro. Significa evitar decisiones que hagan innecesariamente
                  difícil adaptarse.
                </p>

                <div className="my-10 space-y-3">
                  <EvolutionStep
                    number="01"
                    title="Separar responsabilidades"
                    text="Cada componente debería tener una responsabilidad clara."
                  />

                  <EvolutionStep
                    number="02"
                    title="Definir interfaces"
                    text="Las partes del sistema deben comunicarse mediante contratos claros."
                  />

                  <EvolutionStep
                    number="03"
                    title="Automatizar validaciones"
                    text="Las pruebas permiten detectar regresiones cuando el sistema cambia."
                  />

                  <EvolutionStep
                    number="04"
                    title="Observar el sistema"
                    text="Logs, métricas y monitoreo permiten conocer qué ocurre realmente."
                  />
                </div>

                <p>
                  La evolución también requiere documentación. No toda decisión
                  necesita un documento enorme, pero las decisiones
                  arquitectónicas relevantes deberían poder ser comprendidas
                  posteriormente.
                </p>

                <p>
                  En sistemas modernos, además, la observabilidad adquiere
                  especial importancia. No basta con saber que una aplicación
                  está encendida; necesitamos entender cómo se está
                  comportando.
                </p>
              </ArticleSection>

              {/* =====================================================
                  06
              ===================================================== */}
              <ArticleSection
                id="desarrollador"
                number="06"
                title="El desarrollador como solucionador de problemas"
                eyebrow="MÁS ALLÁ DEL CÓDIGO"
              >
                <p>
                  La evolución de las herramientas también está cambiando lo
                  que significa ser desarrollador.
                </p>

                <p>
                  Frameworks, bibliotecas, plataformas cloud y herramientas de
                  inteligencia artificial permiten producir software con mayor
                  velocidad. Pero esa velocidad aumenta la importancia de saber
                  qué estamos construyendo.
                </p>

                <p>
                  Un desarrollador profesional no debería limitarse a preguntar
                  &quot; ¿cómo implemento esto? &quot;. También debería preguntarse:
                </p>

                <div className="my-10 rounded-3xl border border-white/[0.06] bg-[#040d1b] p-7 md:p-9">
                  <div className="space-y-5">
                    <QuestionRow text="¿Estoy resolviendo el problema correcto?" />

                    <QuestionRow text="¿Qué consecuencias tendrá esta decisión?" />

                    <QuestionRow text="¿Cómo voy a probar esta solución?" />

                    <QuestionRow text="¿Qué ocurrirá cuando cambien los requisitos?" />

                    <QuestionRow text="¿Podrá otra persona entender y mantener este sistema?" />
                  </div>
                </div>

                <p>
                  La inteligencia artificial hace esta reflexión todavía más
                  relevante. Si una herramienta puede generar código en
                  segundos, el valor del desarrollador se desplaza todavía más
                  hacia la comprensión del problema, la arquitectura, la
                  validación y la toma de decisiones.
                </p>

                <p>
                  Esto no significa que programar pierda importancia. Significa
                  que programar debe formar parte de una capacidad más amplia:
                  <strong className="text-[#dbeafe]">
                    {" "}
                    convertir problemas reales en soluciones tecnológicas
                    confiables.
                  </strong>
                </p>

                <div className="my-12 rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#071a34] to-[#030a15] p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#3da5ff]/[0.06] text-[#3da5ff]">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="font-poppins text-xl font-semibold leading-8 text-white">
                        El código es una herramienta.
                        <span className="devpass-gradient-text">
                          {" "}
                          El problema es el objetivo.
                        </span>
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#94a3b8]">
                        La diferencia entre programar y construir software está
                        en comprender qué debe resolverse, por qué y cómo
                        mantener esa solución funcionando en el tiempo.
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
                  Construir software es tomar buenas decisiones.
                </h2>

                <div className="mt-7 space-y-6 text-base leading-8 text-[#94a3b8]">
                  <p>
                    Es fácil asociar el desarrollo de software con escribir
                    código. Sin embargo, los sistemas que realmente generan
                    valor requieren mucho más que una implementación funcional.
                  </p>

                  <p>
                    Requieren comprender el problema, diseñar una arquitectura
                    adecuada, controlar la complejidad, considerar la seguridad,
                    probar el comportamiento y prepararse para el cambio.
                  </p>

                  <p>
                    Las tecnologías pueden cambiar. Los frameworks pueden ser
                    reemplazados y las herramientas pueden evolucionar. Pero la
                    capacidad de analizar problemas y tomar buenas decisiones
                    técnicas sigue siendo fundamental.
                  </p>

                  <p>
                    Por eso, pensar más allá del código no significa programar
                    menos. Significa entender mejor{" "}
                    <strong className="text-[#dbeafe]">
                      por qué estamos programando.
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
                    title="ISO/IEC 25010 — Systems and software engineering"
                    description="Modelo internacional para caracterizar la calidad de productos de software."
                    href="https://www.iso.org/standard/78176.html"
                  />

                  <Reference
                    title="Martin Fowler — Technical Debt"
                    description="Material de referencia sobre deuda técnica y sus implicaciones en el desarrollo."
                    href="https://martinfowler.com/bliki/TechnicalDebt.html"
                  />

                  <Reference
                    title="Martin Fowler — Software Architecture Guide"
                    description="Introducción a conceptos y decisiones relacionados con arquitectura de software."
                    href="https://martinfowler.com/architecture/"
                  />

                  <Reference
                    title="NIST — Secure Software Development Framework"
                    description="Prácticas para integrar seguridad dentro del ciclo de desarrollo de software."
                    href="https://csrc.nist.gov/projects/ssdf"
                  />

                  <Reference
                    title="OWASP — Software Security"
                    description="Recursos y prácticas para desarrollar software más seguro."
                    href="https://owasp.org/"
                  />

                  <Reference
                    title="AWS — Well-Architected Framework"
                    description="Marco de referencia para evaluar decisiones arquitectónicas de sistemas."
                    href="https://aws.amazon.com/architecture/well-architected/"
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
                    Del conocimiento a proyectos reales
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Conoce cómo estas ideas se convierten en proyectos,
                    experimentos y soluciones tecnológicas dentro de DevPass.
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    <InternalLink
                      href="/proyectos"
                      title="Proyectos"
                      description="Sistemas y soluciones desarrolladas."
                    />

                    <InternalLink
                      href="/lab"
                      title="DevPass Lab"
                      description="Experimentación con nuevas tecnologías."
                    />

                    <InternalLink
                      href="/sobre-mi"
                      title="Sobre DevPass"
                      description="La experiencia y filosofía detrás del proyecto."
                    />

                    <InternalLink
                      href="/contacto"
                      title="Hablemos"
                      description="¿Tienes una idea o proyecto? Conversemos."
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
                  No solo escribimos código.
                  <span className="devpass-gradient-text">
                    {" "}
                    Construimos soluciones.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748b]">
                  Desarrollo de software, inteligencia artificial,
                  automatización y soluciones digitales pensadas para problemas
                  reales.
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

          <p className="mt-2 text-sm leading-7 text-[#64748b]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
        <ChevronRight size={14} />
      </div>

      <p className="text-sm text-[#cbd5e1]">{text}</p>
    </div>
  );
}

function ArchitectureNode({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#07111f] p-5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-[#3da5ff]">
          {number}
        </span>

        <span className="text-[#3da5ff]">{icon}</span>
      </div>

      <p className="mt-5 font-poppins text-sm font-semibold text-white">
        {title}
      </p>
    </div>
  );
}

function QualityCard({
  icon,
  title,
  text,
  positive = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
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
        className={`${
          positive ? "text-[#3da5ff]" : "text-amber-300"
        }`}
      >
        {icon}
      </div>

      <h3 className="mt-4 font-poppins text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#64748b]">{text}</p>
    </div>
  );
}

function EvolutionStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-5 rounded-2xl border border-white/[0.06] bg-[#040d1b] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#061426]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[10px] font-semibold text-[#3da5ff]">
        {number}
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