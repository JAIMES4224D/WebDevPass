"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Search,
  Sparkles,
  Terminal,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const categories = [
  {
    name: "Desarrollo",
    description: "Código, arquitectura y buenas prácticas.",
    icon: Code2,
  },
  {
    name: "Inteligencia Artificial",
    description: "IA aplicada al software y a los procesos.",
    icon: Bot,
  },
  {
    name: "Sistemas",
    description: "Infraestructura, arquitectura y tecnología.",
    icon: Cpu,
  },
  {
    name: "Automatización",
    description: "Workflows y soluciones inteligentes.",
    icon: GitBranch,
  },
  {
    name: "Testing",
    description: "Calidad, QA y nuevas estrategias.",
    icon: Search,
  },
  {
    name: "Datos",
    description: "Data Science, análisis y experimentación.",
    icon: Database,
  },
];

const articles = [
  {
    number: "01",
    category: "TESTING · IA",
    title:
      "Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos",
    description:
      "La inteligencia artificial está cambiando la forma de diseñar, ejecutar y analizar pruebas de software. Exploramos el papel de los agentes autónomos dentro del QA moderno.",
    date: "11 SEP 2026",
    readingTime: "8 min",
    href: "/blog/testing-con-ia",
    image: "/images/blog/testing-con-ia/portada.png",
    icon: Bot,
    featured: true,
  },
  {
    number: "02",
    category: "DESARROLLO · INGENIERÍA",
    title: "Construir software pensando más allá del código",
    description:
      "Escribir código es solo una parte del desarrollo. Comprender el problema, diseñar la arquitectura y construir pensando en la evolución también forman parte de la ingeniería.",
    date: "2026",
    readingTime: "9 min",
    href: "/blog/software",
    image: "/images/blog/software/portada.png",
    icon: Code2,
    featured: false,
  },
  {
    number: "03",
    category: "IA · DESARROLLO",
    title: "Inteligencia artificial aplicada al desarrollo",
    description:
      "Cómo integrar inteligencia artificial en actividades reales de desarrollo: generación de código, debugging, testing, documentación, automatización y agentes.",
    date: "2026",
    readingTime: "10 min",
    href: "/blog/inteligencia-artificial",
    image: "/images/blog/inteligencia-artificial/portada.png",
    icon: Layers3,
    featured: false,
  },
];

export default function BlogPage() {
  const webPageSchema = createWebPageSchema({
    name: "Blog de Tecnología, IA y Desarrollo de Software | DevPass",
    description:
      "Insights de DevPass sobre desarrollo de software, inteligencia artificial, testing, QA, sistemas, automatización, arquitectura y tecnología aplicada.",
    path: "/blog",
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

      <main className="overflow-hidden bg-[#020617] text-[#f8faff]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0">
            {/* Glow izquierdo */}
            <div className="absolute left-[-15%] top-[-20%] h-[550px] w-[550px] rounded-full bg-[#1e6bff]/10 blur-[140px]" />

            {/* Glow derecho */}
            <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#3da5ff]/7 blur-[150px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(167,211,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,0.8) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="devpass-container relative py-24 md:py-32 lg:py-36">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#3da5ff]" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7fbfff]">
                  DevPass · Insights
                </span>
              </div>

              <h1 className="font-poppins text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                Ideas, conocimiento
                <br />
                <span className="devpass-gradient-text">
                  y experiencia aplicada.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                Un espacio para compartir ideas, experiencias y aprendizajes
                sobre desarrollo de software, inteligencia artificial,
                sistemas, automatización y tecnología.
              </p>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-12 inline-flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#071a34]/55 px-4 py-3 backdrop-blur-xl"
            >
              <Terminal size={15} className="text-[#3da5ff]" />

              <span className="font-mono text-xs text-[#64748b]">
                $ cat /insights
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span className="text-xs text-[#94a3b8]">
                conocimiento aplicado
              </span>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FEATURED
        ========================================================= */}
        <section className="relative py-24 md:py-32">
          <div className="devpass-container">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  01
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  Artículo destacado
                </p>
              </div>

              <Link
                href="#articulos"
                className="group hidden items-center gap-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white sm:flex"
              >
                Explorar artículos

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#0a1f3d] via-[#06172d] to-[#030b19]"
            >
              {/* Glow */}
              <div className="absolute right-[-10%] top-[-40%] h-[500px] w-[500px] rounded-full bg-[#1e6bff]/12 blur-[120px]" />

              <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Content */}
                <div className="p-8 md:p-12 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#3da5ff]/20 bg-[#1e6bff]/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#7fbfff]">
                      TESTING · IA
                    </span>

                    <span className="text-xs text-[#64748b]">
                      2026 · 8 min de lectura
                    </span>
                  </div>

                  <h2 className="mt-7 max-w-2xl font-poppins text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-4xl lg:text-[42px]">
                    Testing con IA: Cómo Están Cambiando el QA los Agentes
                    Autónomos
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    La inteligencia artificial está cambiando la forma de
                    diseñar, ejecutar y analizar pruebas de software. Los
                    agentes autónomos abren una nueva etapa para el QA,
                    permitiendo automatizar tareas que tradicionalmente
                    requerían una intervención constante.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/blog/testing-con-ia"
                      className="group/link inline-flex items-center gap-3 text-sm font-semibold text-white"
                    >
                      Leer artículo

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3da5ff]/20 bg-[#1e6bff]/10 text-[#3da5ff] transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#1e6bff]/20">
                        <ArrowRight size={15} />
                      </span>
                    </Link>

                    <span className="text-xs text-[#475569]">
                      Investigación · QA · Agentes
                    </span>
                  </div>
                </div>

                {/* Cover */}
                <div className="relative min-h-[360px] overflow-hidden border-t border-white/[0.06] lg:border-l lg:border-t-0">
                  <Image
                    src="/images/blog/testing-con-ia/portada.png"
                    alt="Portada del artículo Testing con IA"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#06172d]/35 via-transparent to-[#020617]/30" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent" />

                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(167,211,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "35px 35px",
                    }}
                  />

                  {/* Telemetry */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#020617]/75 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#3da5ff]" />

                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#94a3b8]">
                        Autonomous QA
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-[#3da5ff]">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* =========================================================
            ARTICLES
        ========================================================= */}
        <section
          id="articulos"
          className="border-y border-white/[0.06] bg-[#030b19] py-24 md:py-32"
        >
          <div className="devpass-container">
            <div className="mb-14">
              <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                02
              </p>

              <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                Artículos
              </p>

              <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <h2 className="font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                    Explorar ideas.
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-[#64748b]">
                    Contenido sobre tecnología desde una perspectiva práctica:
                    construir, experimentar y aprender.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#64748b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff]" />
                  3 artículos publicados
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {articles.map((article, index) => {
                const Icon = article.icon;

                return (
                  <motion.article
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative flex min-h-[550px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/25 hover:bg-[#061426]"
                  >
                    {/* COVER */}
                    <Link
                      href={article.href}
                      className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.06]"
                    >
                      <Image
                        src={article.image}
                        alt={`Portada: ${article.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent" />

                      {/* Category */}
                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/10 bg-[#020617]/75 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-[#a7d3ff] backdrop-blur-md">
                          {article.category}
                        </span>
                      </div>

                      {/* Number */}
                      <div className="absolute bottom-4 right-5">
                        <span className="font-poppins text-4xl font-semibold tracking-[-0.05em] text-white/20">
                          {article.number}
                        </span>
                      </div>
                    </Link>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#1e6bff]/8 text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-6 font-poppins text-xl font-semibold leading-snug tracking-[-0.025em] text-white">
                        {article.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#64748b]">
                        {article.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                        <span className="text-xs text-[#475569]">
                          {article.date} · {article.readingTime}
                        </span>

                        <Link
                          href={article.href}
                          className="group/read inline-flex items-center gap-2 text-xs font-semibold text-[#a7d3ff]"
                        >
                          Leer

                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover/read:translate-x-1"
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

        {/* =========================================================
            CATEGORIES
        ========================================================= */}
        <section className="relative py-24 md:py-32">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  03
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  Categorías
                </p>

                <h2 className="mt-5 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  Tecnología desde diferentes ángulos.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#64748b]">
                  Desarrollo, inteligencia artificial, sistemas y otras áreas
                  que forman parte de la exploración tecnológica de DevPass.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((category, index) => {
                  const Icon = category.icon;

                  return (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#0a1f3d]/35"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#1e6bff]/8 text-[#3da5ff]">
                          <Icon size={17} />
                        </div>

                        <span className="font-mono text-[10px] text-[#334155]">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 font-poppins text-base font-semibold text-white">
                        {category.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#64748b]">
                        {category.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTENT MAP
        ========================================================= */}
        <section className="border-y border-white/[0.06] bg-[#030b19] py-24 md:py-28">
          <div className="devpass-container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  ECOSISTEMA DE CONTENIDO
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  Construir.
                  <br />
                  Experimentar.
                  <br />
                  Compartir.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#64748b]">
                  Insights no está separado de lo que hacemos. Los artículos
                  nacen de problemas, proyectos, experimentación y aprendizaje.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <ContentNode
                  number="01"
                  title="Proyectos"
                  text="Problemas reales convertidos en software."
                  href="/proyectos"
                />

                <ContentNode
                  number="02"
                  title="Lab"
                  text="Ideas que todavía están en experimentación."
                  href="/lab"
                />

                <ContentNode
                  number="03"
                  title="Insights"
                  text="Experiencias y conocimiento documentado."
                  href="/blog"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/5 blur-[120px]" />

          <div className="devpass-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles
                size={24}
                className="mx-auto text-[#3da5ff]"
                strokeWidth={1.5}
              />

              <h2 className="mt-7 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                El conocimiento también se construye.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748b]">
                Cada proyecto deja una experiencia. Cada experiencia puede
                convertirse en conocimiento. Y ese conocimiento puede ayudar a
                construir algo mejor.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/proyectos"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34] hover:text-white"
                >
                  Ver proyectos

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2874ff]"
                >
                  Hablemos de un proyecto

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
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

function ContentNode({
  number,
  title,
  text,
  href,
}: {
  number: string;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/[0.06] bg-[#040d1b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20 hover:bg-[#061426]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#3da5ff]">
          {number}
        </span>

        <ArrowRight
          size={14}
          className="text-[#334155] transition-all group-hover:translate-x-1 group-hover:text-[#3da5ff]"
        />
      </div>

      <h3 className="mt-6 font-poppins text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-[#64748b]">{text}</p>
    </Link>
  );
}