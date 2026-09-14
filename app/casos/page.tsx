"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Layers3,
  Network,
  QrCode,
  Search,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
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

const featuredCases = [
  {
    number: "01",
    category: "AUDITORÍA · INFRAESTRUCTURA",
    title: "SIGESAPOL",
    subtitle: "Análisis técnico de sistemas e infraestructura distribuida.",
    description:
      "Un proyecto orientado al análisis de infraestructura, servicios, red y componentes tecnológicos para obtener una visión técnica del entorno y detectar oportunidades de mejora.",
    icon: ShieldCheck,
    tags: ["Linux", "Redes", "Nmap", "DNS", "Apache", "Git"],
    href: "/proyectos/sigesapol",
    accent: "Auditoría tecnológica",
  },
  {
    number: "02",
    category: "E-COMMERCE · SOFTWARE",
    title: "Tienda Web Donglai",
    subtitle: "Plataforma web para gestión y operación de una tienda.",
    description:
      "Una solución e-commerce con catálogo, productos, categorías, usuarios, proveedores, administración y funcionalidades orientadas a la operación digital del negocio.",
    icon: ShoppingCart,
    tags: ["Java EE", "JSP", "MySQL", "Tomcat", "Bootstrap", "MVC"],
    href: "/proyectos/tienda-donglai",
    accent: "Software a medida",
  },
  {
    number: "03",
    category: "SALUD · SOFTWARE",
    title: "Telemedicina",
    subtitle: "Aplicación web para un policlínico.",
    description:
      "Una plataforma desarrollada para apoyar la atención mediante servicios digitales, llevando parte de la interacción entre profesionales y pacientes al entorno web.",
    icon: Stethoscope,
    tags: ["Web", "Telemedicina", "Frontend", "Backend"],
    href: "/proyectos/telemedicina",
    accent: "Desarrollo web",
  },
];

const additionalCases = [
  {
    number: "04",
    title: "Codex Digital Alimentarius",
    category: "DIGITALIZACIÓN",
    description:
      "Transformación de información documental en una herramienta digital para facilitar su consulta y utilización.",
    icon: FileText,
    href: "/proyectos/codex-alimentarius",
  },
  {
    number: "05",
    title: "QR Master PRO",
    category: "PRODUCTIVIDAD",
    description:
      "Aplicación orientada a la generación y gestión de códigos QR desde una interfaz de escritorio.",
    icon: QrCode,
    href: "/proyectos/qr-master",
  },
  {
    number: "06",
    title: "Sistema de Mantenimiento",
    category: "GESTIÓN",
    description:
      "Aplicación para organizar órdenes, equipos, reportes, catálogos y procesos relacionados con mantenimiento.",
    icon: Workflow,
    href: "/proyectos/mantenimiento",
  },
  {
    number: "07",
    title: "Algoritmo de Recomendación",
    category: "DATA SCIENCE",
    description:
      "Sistema de recomendación basado en contenido utilizando procesamiento de información y similitud entre elementos.",
    icon: BarChart3,
    href: "/proyectos/recomendacion-peliculas",
  },
  {
    number: "08",
    title: "Generador de Scripts SQL",
    category: "DESARROLLO",
    description:
      "Herramienta para generar estructuras y operaciones SQL mediante una interfaz orientada a facilitar el trabajo con bases de datos.",
    icon: Database,
    href: "/proyectos/generate-sql",
  },
];

const methodology = [
  {
    number: "01",
    title: "Problema",
    description:
      "Entendemos qué necesidad, limitación o proceso originó el proyecto.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos una solución tecnológica coherente con el contexto y los recursos disponibles.",
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Desarrollamos, integramos y validamos los componentes necesarios.",
  },
  {
    number: "04",
    title: "Evolución",
    description:
      "Analizamos qué puede mejorarse y qué aprendizajes pueden trasladarse a futuros proyectos.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Desarrollo",
    text: "Aplicaciones web, software a medida y herramientas digitales.",
  },
  {
    icon: Network,
    title: "Integración",
    text: "Conexión entre sistemas, servicios, APIs y fuentes de información.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    text: "Procesos digitales diseñados para reducir tareas repetitivas.",
  },
  {
    icon: Search,
    title: "Análisis",
    text: "Auditoría, diagnóstico técnico y evaluación de entornos tecnológicos.",
  },
];

export default function CasosPage() {
    const webPageSchema = createWebPageSchema({
    name: "Casos de Éxito y Proyectos | DevPass",
    description:
      "Casos y proyectos de DevPass en desarrollo de software, auditoría tecnológica, infraestructura, automatización, integración y soluciones digitales para problemas reales.",
    path: "/casos",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Casos", path: "/casos" },
  ]);
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />  
      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(30,107,255,0.18),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.07),transparent_28%)]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,211,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="devpass-container relative z-10 py-28 lg:py-36">
            <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.65fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />

                  <span className="text-xs font-semibold tracking-[0.24em] text-[#3da5ff]">
                    DEVPASS · CASOS
                  </span>
                </div>

                <h1 className="max-w-5xl font-poppins text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Tecnología aplicada a{" "}
                  <span className="devpass-gradient-text">
                    problemas reales.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Una selección de proyectos donde desarrollo, análisis,
                  automatización e integración se convierten en soluciones
                  concretas.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Hablemos de tu proyecto
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                  >
                    Ver todos los proyectos
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-3xl border border-[#3da5ff]/15 bg-[#020b18]/80 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                        DEVPASS / CASES
                      </p>

                      <p className="mt-1 text-xs text-[#64748b]">
                        Selected work
                      </p>
                    </div>

                    <Layers3
                      size={19}
                      className="text-[#3da5ff]"
                    />
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["01", "Auditoría", "SIGESAPOL"],
                      ["02", "Software", "Tienda Donglai"],
                      ["03", "Salud", "Telemedicina"],
                    ].map(([number, category, name]) => (
                      <div
                        key={number}
                        className="flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
                      >
                        <span className="text-[10px] font-semibold text-[#3da5ff]">
                          {number}
                        </span>

                        <div className="h-7 w-px bg-white/[0.07]" />

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#64748b]">
                            {category}
                          </p>

                          <p className="mt-1 text-xs font-semibold text-white">
                            {name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                CASOS DESTACADOS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Proyectos que muestran cómo trabajamos.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Cada proyecto parte de un contexto diferente. Lo importante no
                es solamente la tecnología utilizada, sino la forma en que se
                aborda el problema.
              </p>
            </motion.div>

            <div className="mt-14 space-y-5">
              {featuredCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#020b18] transition-all duration-500 hover:border-[#3da5ff]/20"
                  >
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1e6bff]/5 blur-[90px] transition-opacity duration-500 group-hover:bg-[#1e6bff]/10" />

                    <div className="relative grid gap-8 p-7 md:p-9 lg:grid-cols-[90px_1fr_260px] lg:items-center">
                      <div className="hidden lg:block">
                        <span className="font-poppins text-5xl font-semibold tracking-[-0.05em] text-[#0d294b]">
                          {item.number}
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-[#3da5ff]/15 bg-[#071a34] px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-[#3da5ff]">
                            {item.category}
                          </span>

                          <span className="text-[10px] text-[#475569]">
                            {item.accent}
                          </span>
                        </div>

                        <div className="mt-5 flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e6bff]/10 text-[#3da5ff]">
                            <Icon size={20} />
                          </div>

                          <div>
                            <h3 className="font-poppins text-2xl font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-[#64748b]">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#94a3b8]">
                          {item.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/[0.06] px-2.5 py-1.5 text-[10px] text-[#64748b]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex lg:justify-end">
                        <Link
                          href={item.href}
                          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                        >
                          Ver caso completo
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
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
                  MÁS CASOS
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Diferentes problemas.
                  <span className="block text-[#64748b]">
                    La misma forma de construir.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Desde herramientas de productividad hasta sistemas de
                  gestión y soluciones basadas en datos.
                </p>

                <Link
                  href="/proyectos"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] hover:text-white"
                >
                  Explorar proyectos
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {additionalCases.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      className="group rounded-2xl border border-white/[0.05] bg-[#020b18] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071a34] text-[#3da5ff]">
                          <Icon size={18} />
                        </div>

                        <span className="text-[10px] font-semibold tracking-[0.18em] text-[#334155]">
                          {item.number}
                        </span>
                      </div>

                      <p className="mt-5 text-[9px] font-semibold tracking-[0.16em] text-[#3da5ff]">
                        {item.category}
                      </p>

                      <h3 className="mt-2 font-poppins text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-[#64748b]">
                        {item.description}
                      </p>

                      <Link
                        href={item.href}
                        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#3da5ff] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        Ver proyecto
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  CÓMO TRABAJAMOS
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  El código es solo una parte.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  Un buen proyecto comienza entendiendo el problema y termina
                  pensando en cómo la solución puede seguir evolucionando.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {methodology.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-white/[0.05] bg-[#020b18] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#3da5ff]">
                        {item.number}
                      </span>

                      <CheckCircle2
                        size={17}
                        className="text-[#3da5ff]/50"
                      />
                    </div>

                    <h3 className="mt-6 font-poppins text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#64748b]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
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
                CAPACIDADES
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Una visión más amplia de la tecnología.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Los casos muestran diferentes áreas, pero todas forman parte
                del mismo enfoque: entender, construir y mejorar.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
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
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
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
                <Terminal size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                TIENES UN PROBLEMA TECNOLÓGICO
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Tu proyecto puede ser
                <span className="devpass-gradient-text">
                  {" "}
                  el siguiente caso.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué necesitas construir, mejorar, integrar o
                analizar. Podemos convertir una necesidad concreta en una
                solución tecnológica.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Iniciar conversación
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Ver servicios
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